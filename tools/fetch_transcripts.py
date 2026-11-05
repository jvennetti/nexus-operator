"""Fetch YouTube transcripts for the video shortlist (round 2).

Run this on your own computer, not in a cloud session (YouTube bot-checks cloud IPs).

    pip install youtube-transcript-api
    python3 tools/fetch_transcripts.py

Writes transcripts/<lesson>_<id>.txt with [mm:ss] timestamps, then commit and push them.
"""
import os, sys

SHORTLIST = {
    # Round 2 + round 3 ids (2026-11-05): candidates for the lessons that had no pool, plus post-rebuild re-sweeps.
    # Round 1 transcripts (42) live on branch claude/video-research; already-fetched files are skipped.
    "0.2": ["N890AspWgEw"],
    "1.2": ["DmgujoZ1mmk", "wmCXIPlllpA"],
    "2.2": ["Zzn-g8lvLMA", "PwUr0fowN1I"],
    "2.3": ["tk4Ljz9p-UI", "Y0KidGr9Z2Y", "k1dNyhqfsQ8"],
    "2.5": ["FgwrGj_RJBg", "kJA3fQnntpY", "QBClwotyT3Y", "1PRcdCu8n6M"],
    "3.1": ["LNpOyx4DOJ4", "dMC8p2sJ7gY"],
    "3.2": ["BKzEVhT2054", "8cdVubYQjKY"],
    "3.3": ["D5nZOUfac_0"],
    "4.1": ["yTy8WV3Y9Nk"],
    "4.2": ["J0h3yuCnXqk", "qPG5zQCSlTs", "j9eiZcBkNg0", "-SsAwIkW9rI"],
    "4.4": ["4hc5Z_QBno4"],
    "4.5": ["F-DARGKRKdQ", "b8SV4U6fEIc"],
    "6.1": ["vatOVZbumk0", "HMaja1AlwMo", "gYk_hp3goAY"],
    "6.2": ["IhhxRZDf2bo", "AAYy-cgA4Kg"],
    "6.3": ["fgrJVdD12PA"],
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
print(f"\n{ok} saved, {fail} failed. Now: git add transcripts && git commit -m 'Add round 2 transcripts' && git push")
