"""Fallback transcript fetcher using yt-dlp (use when fetch_transcripts.py reports IpBlocked).

Run on your own computer:
    pip install yt-dlp
    python tools/fetch_transcripts_ytdlp.py

Reads the same SHORTLIST from tools/fetch_transcripts.py, writes transcripts/<lesson>_<id>.txt
in the same [mm:ss] format. Tries without cookies first, then with your browser's YouTube
sign-in (Chrome, then Firefox, then Edge) if YouTube refuses.
"""
import ast, glob, json, os, re, shutil, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "transcripts")

# Pull SHORTLIST out of fetch_transcripts.py without running it.
src = open(os.path.join(HERE, "fetch_transcripts.py"), encoding="utf-8").read()
m = re.search(r"SHORTLIST = (\{.*?\n\})", src, re.S)
SHORTLIST = ast.literal_eval(m.group(1))

if not shutil.which("yt-dlp"):
    sys.exit("Run: pip install yt-dlp   (then run this script again)")


def parse_json3(path):
    data = json.load(open(path, encoding="utf-8"))
    lines, last = [], None
    for ev in data.get("events", []):
        segs = ev.get("segs")
        if not segs:
            continue
        text = "".join(s.get("utf8", "") for s in segs).replace("\n", " ").strip()
        if not text or text == last:
            continue
        lines.append((ev.get("tStartMs", 0) / 1000.0, text))
        last = text
    return lines


def try_fetch(vid, tmp, extra):
    cmd = ["yt-dlp", "--skip-download", "--write-subs", "--write-auto-subs",
           "--sub-langs", "en.*,en,en-US,en-GB", "--sub-format", "json3",
           "-o", os.path.join(tmp, "%(id)s.%(ext)s"), *extra,
           "https://www.youtube.com/watch?v=" + vid]
    r = subprocess.run(cmd, capture_output=True, text=True)
    files = glob.glob(os.path.join(tmp, vid + "*.json3"))
    if files:
        files.sort(key=lambda f: ("auto" in f, f))  # prefer manual subs when both exist
        return parse_json3(files[0]), None
    err = (r.stderr or r.stdout or "").strip().splitlines()
    return None, (err[-1] if err else "no subtitle file written")


ATTEMPTS = [[], ["--cookies-from-browser", "chrome"], ["--cookies-from-browser", "firefox"],
            ["--cookies-from-browser", "edge"]]

os.makedirs(OUT, exist_ok=True)
ok = fail = 0
for lesson, ids in SHORTLIST.items():
    for vid in ids:
        path = os.path.join(OUT, f"{lesson}_{vid}.txt")
        if os.path.exists(path):
            ok += 1
            continue
        lines, last_err = None, None
        for extra in ATTEMPTS:
            with tempfile.TemporaryDirectory() as tmp:
                lines, err = try_fetch(vid, tmp, extra)
            if lines:
                break
            last_err = err
        if not lines:
            print(f"FAIL {lesson} {vid}: {last_err}")
            fail += 1
            continue
        with open(path, "w", encoding="utf-8") as f:
            for start, text in lines:
                f.write(f"[{int(start)//60:02d}:{int(start)%60:02d}] {text}\n")
        print(f"ok   {lesson} {vid} ({len(lines)} lines)")
        ok += 1
print(f"\n{ok} saved, {fail} failed. Now: git add transcripts && git commit -m 'Add round 2 transcripts' && git push")
