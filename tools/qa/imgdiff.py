#!/usr/bin/env python3
"""Pixel diff of two screenshots: prints size, share of differing pixels and the bounding box.
   python3 tools/qa/imgdiff.py before.png after.png [diff.png]"""
import sys
from PIL import Image, ImageChops

a, b = Image.open(sys.argv[1]).convert('RGB'), Image.open(sys.argv[2]).convert('RGB')
print('sizes', a.size, b.size)
w, h = min(a.size[0], b.size[0]), min(a.size[1], b.size[1])
d = ImageChops.difference(a.crop((0, 0, w, h)), b.crop((0, 0, w, h))).convert('L').point(lambda v: 255 if v > 24 else 0)
n = sum(1 for v in d.getdata() if v)
print('differing pixels: %d (%.3f%%) bbox %s' % (n, 100.0 * n / (w * h), d.getbbox()))
if len(sys.argv) > 3:
    d.save(sys.argv[3])
