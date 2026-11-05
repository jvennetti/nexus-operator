"""Fetch YouTube transcripts for the step 1 video shortlist.

Run this on your own computer, not in a cloud session (YouTube bot-checks cloud IPs).

    pip install youtube-transcript-api
    python3 tools/fetch_transcripts.py

Writes transcripts/<lesson>_<id>.txt with [mm:ss] timestamps, then commit and push them.
"""
import os, sys

SHORTLIST = {
    "0.2": ["r2vYObllqJU", "yMnFHFf43Qg", "tM0dwXhOv2o", "fLFWdJ789t8", "07DNLFgjMd4", "Ejfda1stNMM", "y0lMisL5oJ4", "aDR571phdAs"],
    "1.1": ["EljzyfdYkrc", "QT-OR7Lcf2g", "HanKVJH_Bco"],
    "2.1": ["2YCaBqP8muw", "riO3e-FBieA", "todmaQUDdfg", "vVnDzDqQI3g"],
    "2.4": ["w7_yWjYyxjE", "U-WtXdXdcKY", "NPV23y56kW4", "bc2KeezSDVk", "e6yDgdr481A"],
    "3.1": ["FpRNId-jeTQ", "r6axtiq5-mM", "Bm3kges7l1Q"],
    "4.1": ["P7-0grEB7nk", "8c6JZ18W0Bo", "-YTot4fwNFY", "TvLgqLRWnho", "CtbfEK0x45k"],
    "4.3": ["O0FGCxkHM-U", "h7QJL2_gEXA"],
    "5.1": ["O6tQ6V_P8a0", "bjdBVZa66oU"],
    "5.2": ["-uW5-TaVXu4", "xaQG-eD9d58", "eW3oTyfeWZ0"],
    "5.3": ["U_cDKkDvPAQ", "D3pxbkPg0KE", "6RXjpKXy2qk", "pg2d8HWSlS4", "2_9KY9mejX0", "68BnH29qvAA"],
}

try:
    from youtube_transcript_api import YouTubeTranscriptApi
except ImportError:
    sys.exit("Run: pip install youtube-transcript-api")


def fetch(vid):
    try:  # v1.x
        t = YouTubeTranscriptApi().fetch(vid, languages=["en", "en-US", "en-GB"])
        return [(s.start, s.text) for s in t]
    except AttributeError:  # v0.x
        t = YouTubeTranscriptApi.get_transcript(vid, languages=["en", "en-US", "en-GB"])
        return [(s["start"], s["text"]) for s in t]


out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "transcripts")
os.makedirs(out, exist_ok=True)
ok = fail = 0
for lesson, ids in SHORTLIST.items():
    for vid in ids:
        path = os.path.join(out, f"{lesson}_{vid}.txt")
        if os.path.exists(path):
            ok += 1
            continue
        try:
            lines = fetch(vid)
        except Exception as e:
            print(f"FAIL {lesson} {vid}: {type(e).__name__}")
            fail += 1
            continue
        with open(path, "w", encoding="utf-8") as f:
            for start, text in lines:
                f.write(f"[{int(start)//60:02d}:{int(start)%60:02d}] {text.replace(chr(10), ' ')}\n")
        print(f"ok   {lesson} {vid} ({len(lines)} lines)")
        ok += 1
print(f"\n{ok} saved, {fail} failed. Now: git add transcripts && git commit -m 'Add shortlist transcripts' && git push")
