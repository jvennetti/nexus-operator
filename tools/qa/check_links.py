#!/usr/bin/env python3
"""Static check: every local href/src (and quoted audio/image/page paths in inline JS) in every
shipped HTML file resolves to a file on disk. Subdirectory pages must use ../ for root assets.

Run from the repo root:  python3 tools/qa/check_links.py
"""
import pathlib, re, sys
from urllib.parse import urlsplit, unquote

ROOT = pathlib.Path(__file__).resolve().parents[2]
SKIP_DIRS = {'.git', '.claude', 'templates', 'tools', 'docs', 'content', 'node_modules'}
ATTR = re.compile(r'''\b(?:href|src|poster|data-src)\s*=\s*["']([^"'{}]+)["']''', re.I)
# quoted asset paths used from JS: 'audio/...', "../images/...", `../audio/...`
ASSET = re.compile(r'''["'`]((?:\.\./)*(?:audio|images|machine|bonus|module-\d|pre-course)/[^"'`$\s]+?\.(?:mp3|wav|ogg|png|jpe?g|gif|webp|svg|html|mp4))["'`]''')
JS_HTML = re.compile(r'''(?<![*^$|~]=)["'`]((?:\.\./)*[\w\-/]+\.html)(?:[?#][^"'`]*)?["'`]''')


def files():
    for p in ROOT.rglob('*.html'):
        if not any(part in SKIP_DIRS for part in p.relative_to(ROOT).parts):
            yield p
    yield ROOT / 'nexus-transition.js'


bad = []
for f in files():
    txt = f.read_text(encoding='utf-8', errors='replace')
    refs = set(ATTR.findall(txt)) | set(ASSET.findall(txt)) | set(JS_HTML.findall(txt))
    for r in refs:
        u = urlsplit(r)
        if u.scheme or r.startswith(('//', '#', 'mailto:', 'tel:', 'javascript:', 'data:')):
            continue
        path = unquote(u.path)
        if not path:
            continue
        base = ROOT if f.name == 'nexus-transition.js' else f.parent
        target = (ROOT / path.lstrip('/')) if path.startswith('/') else (base / path)
        if not target.resolve().exists():
            bad.append((str(f.relative_to(ROOT)), r))

for f, r in sorted(set(bad)):
    print('MISSING  %-32s -> %s' % (f, r))
print('%d unresolved reference(s)' % len(set(bad)))
sys.exit(1 if bad else 0)
