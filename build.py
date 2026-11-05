#!/usr/bin/env python3
"""NEXUS Academy page generator.

Reads  content/course.json, content/lessons/*.md, content/challenges/*.md
Writes pre-course/*, module-N/*  and regenerates the data block in hub.html.

Run:  python3 build.py
No dependencies beyond the Python 3 standard library.
"""
import json, re, html, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent
CONTENT = ROOT / 'content'
TPL = ROOT / 'templates'

# ----------------------------------------------------------------------------
# tiny markdown → html
# ----------------------------------------------------------------------------
def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', s)
    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', s)
    return s

def parse_blocks(md):
    """Split markdown into blocks: ('p', text) ('ul', [items]) ('ol', [items]) ('code', text) ('quote', text)."""
    lines = md.strip('\n').split('\n')
    blocks, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1; continue
        if ln.startswith('```'):
            j = i + 1; buf = []
            while j < len(lines) and not lines[j].startswith('```'):
                buf.append(lines[j]); j += 1
            blocks.append(('code', '\n'.join(buf))); i = j + 1; continue
        if ln.startswith('> '):
            buf = []
            while i < len(lines) and lines[i].startswith('> '):
                buf.append(lines[i][2:]); i += 1
            blocks.append(('quote', ' '.join(buf))); continue
        m = re.match(r'^(\s*)([-*]|\d+\.)\s+(.*)$', ln)
        if m and not m.group(1):
            kind = 'ol' if m.group(2)[0].isdigit() else 'ul'
            items = []
            while i < len(lines):
                m2 = re.match(r'^([-*]|\d+\.)\s+(.*)$', lines[i])
                if m2 and ((m2.group(1)[0].isdigit()) == (kind == 'ol')):
                    items.append([m2.group(2)]); i += 1
                    # continuation: indented lines and fenced blocks belong to the item
                    while i < len(lines):
                        if lines[i].lstrip().startswith('```'):
                            j = i + 1; buf = []
                            while j < len(lines) and not lines[j].lstrip().startswith('```'):
                                buf.append(lines[j]); j += 1
                            items[-1].append(('code', '\n'.join(buf))); i = j + 1
                        elif lines[i].startswith('  ') or lines[i].startswith('\t'):
                            items[-1].append(lines[i].strip()); i += 1
                        else:
                            break
                else:
                    break
            blocks.append((kind, items)); continue
        # paragraph
        buf = []
        while i < len(lines) and lines[i].strip() and not lines[i].startswith('```') and not lines[i].startswith('> ') and not re.match(r'^([-*]|\d+\.)\s+', lines[i]):
            buf.append(lines[i].strip()); i += 1
        blocks.append(('p', ' '.join(buf)))
    return blocks

def render_item(parts):
    """An item is a list of lines; nested '- ' lines become a sub-list, '```' not supported inside items."""
    out = inline(parts[0])
    subs = []
    for p in parts[1:]:
        if isinstance(p, tuple):
            out += '<div class="prompt-block"><pre>%s</pre></div>' % html.escape(p[1], quote=False)
        elif re.match(r'^[-*]\s+', p):
            subs.append(p)
        elif re.match(r'^\d+\.\s+', p):
            subs.append(p)
        else:
            out += ' ' + inline(p)
    if subs:
        ordered = all(re.match(r'^\d+\.\s+', s) for s in subs)
        tag = 'ol' if ordered else 'ul'
        out += '<%s class="sub-list">' % tag + ''.join('<li>%s</li>' % inline(re.sub(r'^([-*]|\d+\.)\s+', '', s)) for s in subs) + '</%s>' % tag
    return out

def render_blocks(blocks, ol_as_steps=False):
    out = []
    for kind, val in blocks:
        if kind == 'p':
            out.append('<p>%s</p>' % inline(val))
        elif kind == 'quote':
            out.append('<div class="callout">%s</div>' % inline(val))
        elif kind == 'code':
            out.append('<div class="prompt-block"><pre>%s</pre></div>' % html.escape(val, quote=False))
        elif kind == 'ul':
            out.append('<ul>' + ''.join('<li>%s</li>' % render_item(it) for it in val) + '</ul>')
        elif kind == 'ol':
            if ol_as_steps:
                out.append('<ol class="step-list">' + ''.join(
                    '<li class="step-item"><div class="step-num">%d</div><div class="step-text">%s</div></li>' % (n + 1, render_item(it))
                    for n, it in enumerate(val)) + '</ol>')
            else:
                out.append('<ol>' + ''.join('<li>%s</li>' % render_item(it) for it in val) + '</ol>')
    return '\n'.join(out)

def split_sections(md):
    """Front matter (--- key: value ---) + '## Heading' sections → (meta, {heading: body})."""
    meta = {}
    body = md
    if md.startswith('---'):
        end = md.index('\n---', 3)
        for ln in md[3:end].strip().split('\n'):
            if ':' in ln:
                k, v = ln.split(':', 1); meta[k.strip()] = v.strip()
        body = md[end + 4:]
    sections, cur, buf = {}, None, []
    for ln in body.split('\n'):
        m = re.match(r'^##\s+(.*)$', ln)
        if m:
            if cur: sections[cur] = '\n'.join(buf)
            cur, buf = m.group(1).strip().lower(), []
        else:
            buf.append(ln)
    if cur: sections[cur] = '\n'.join(buf)
    return meta, sections

def js_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ') + "'"

def ciro_js(lines):
    return '\n'.join('  { text: %s, pauseAfter: %d },' % (json.dumps(l['text'], ensure_ascii=False), l.get('pause', 800)) for l in lines)

def fill(template, **kw):
    out = template
    for k, v in kw.items():
        out = out.replace('{{%s}}' % k, str(v))
    left = re.findall(r'\{\{[A-Z_]+\}\}', out)
    if left:
        sys.exit('unfilled placeholders %s' % left)
    return out

# ----------------------------------------------------------------------------
# build
# ----------------------------------------------------------------------------
def build():
    course = json.loads((CONTENT / 'course.json').read_text(encoding='utf-8'))
    T = {p.stem: p.read_text(encoding='utf-8') for p in TPL.glob('*.html')}
    hub_modules = []
    todo = []

    prev_key = ''
    for mod in course['modules']:
        d = ROOT / mod['dir']; d.mkdir(exist_ok=True)
        label = mod['label']; is_pre = mod['key'] == 'precourse'
        # ---- lessons
        lessons = []
        for lid in mod['lessons']:
            md = (CONTENT / 'lessons' / (lid + '.md')).read_text(encoding='utf-8')
            meta, sec = split_sections(md)
            n = lid.replace('-', '.')
            lessons.append(dict(id=lid, n=n, file='lesson-%s.html' % lid, meta=meta, sec=sec,
                                title=meta['title'], takeaways=[it[0] for k, v in parse_blocks(sec.get('takeaways', '')) if k == 'ul' for it in v]))
            if not meta.get('video'):
                todo.append('%s %s — needs a video (or stays read+do)' % (n, meta['title']))
        intro_page = 'module-intro.html' if is_pre else 'intro.html'
        after_last = 'complete.html' if is_pre else 'challenge.html'
        after_last_title = 'Pre-Course Complete' if is_pre else '%s Challenge' % label

        for i, L in enumerate(lessons):
            prev_href, prev_title = (intro_page, '%s Intro' % label) if i == 0 else (lessons[i-1]['file'], lessons[i-1]['title'])
            next_href, next_title = (after_last, after_last_title) if i == len(lessons)-1 else (lessons[i+1]['file'], lessons[i+1]['title'])
            vid = L['meta'].get('video', '').strip()
            if vid:
                params = ['enablejsapi=1']
                start = seconds(L['meta'].get('video_start', ''))
                end = seconds(L['meta'].get('video_end', ''))
                if end and start and end <= start:
                    sys.exit('%s: video_end must be after video_start' % lid)
                if start: params.insert(0, 'start=%d' % start)
                if end: params.insert(1 if start else 0, 'end=%d' % end)
                video_block = ('  <div class="video-wrapper section">\n'
                               '    <iframe src="https://www.youtube.com/embed/%s?%s" title="%s" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n'
                               '  </div>' % (vid, '&amp;'.join(params), html.escape(L['meta'].get('video_title', L['title']), quote=True)))
                under = []
                if L['meta'].get('video_credit'):
                    under.append('  <div class="video-credit">%s</div>' % html.escape(L['meta']['video_credit'], quote=False))
                if L['meta'].get('video_note'):
                    under.append('  <div class="video-note">%s</div>' % inline(L['meta']['video_note']))
                if under:
                    video_block += '\n  <div class="video-under">\n' + '\n'.join(under) + '\n  </div>'
                mode = 'Watch + Do'
            else:
                video_block = ''
                mode = 'Read + Do'
            task_blocks = parse_blocks(L['sec']['challenge'] if 'challenge' in L['sec'] else sec_get(L['sec'], 'task'))
            # intro paragraphs (before first ol) / steps / outro
            first_ol = next((k for k, b in enumerate(task_blocks) if b[0] == 'ol'), len(task_blocks))
            task_html = ''
            if first_ol:
                task_html += '    <div class="task-intro">\n' + render_blocks(task_blocks[:first_ol]) + '\n    </div>\n'
            if first_ol < len(task_blocks):
                task_html += render_blocks([task_blocks[first_ol]], ol_as_steps=True)
                if first_ol + 1 < len(task_blocks):
                    task_html += '\n    <div class="task-outro">\n' + render_blocks(task_blocks[first_ol+1:]) + '\n    </div>'
            skip_block = ''
            if L['meta'].get('skippable', '').lower() == 'true':
                skip_block = '      <button class="task-skip" onclick="skipTask()">%s →</button>' % html.escape(L['meta'].get('skip_label', 'Already done this? Skip ahead'))
            page = fill(T['lesson'], PREV_MODULE_KEY=prev_key,
                        LESSON_ID=L['n'], TITLE=html.escape(L['title'], quote=False), MODE=mode,
                        DURATION=L['meta'].get('duration', ''), BRIEF_HTML=render_blocks(parse_blocks(sec_get(L['sec'], 'brief'))),
                        VIDEO_BLOCK=video_block, TASK_HTML=task_html, TASK_TIME=L['meta'].get('task_time', ''),
                        SKIP_BLOCK=skip_block,
                        TAKEAWAYS_HTML='\n'.join('    <div class="takeaway-item"><div class="t-bullet"></div><div>%s</div></div>' % inline(t) for t in L['takeaways']),
                        PREV_HREF=prev_href, PREV_TITLE=html.escape(prev_title, quote=False),
                        NEXT_HREF=next_href, NEXT_TITLE=html.escape(next_title, quote=False))
            (d / L['file']).write_text(page, encoding='utf-8')

        # ---- intro
        intro_tpl = T['precourse-intro'] if is_pre else T['intro']
        (d / intro_page).write_text(fill(intro_tpl, MODULE_LABEL=label, MODULE_LABEL_UPPER=label.upper(),
                                         BEGIN_HREF=lessons[0]['file'], CIRO_LINES_JS=ciro_js(mod['intro_lines'])), encoding='utf-8')

        # ---- challenge
        if not is_pre:
            cmd = (CONTENT / 'challenges' / (mod['key'] + '.md')).read_text(encoding='utf-8')
            cmeta, csec = split_sections(cmd)
            body = []
            body.append('  <div class="scenario-box">\n    <div class="section-title">%s</div>\n    <div class="body-copy">\n%s\n    </div>\n  </div>\n'
                        % (html.escape(cmeta.get('scenario_label', 'The Scenario')), render_blocks(parse_blocks(sec_get(csec, 'scenario')))))
            if csec.get('setup'):
                body.append('  <div class="setup-strip">\n    <div class="setup-label">Before you build</div>\n    <div class="body-copy">\n%s\n    </div>\n  </div>\n' % render_blocks(parse_blocks(csec['setup'])))
            body.append('  <div class="challenge-box">\n    <div class="challenge-title">Your Challenge</div>\n%s\n  </div>\n' % render_blocks(parse_blocks(sec_get(csec, 'steps')), ol_as_steps=True))
            body.append('  <div class="deliverable-box">\n    <div class="section-title">Your Deliverable</div>\n    <div class="deliverable-text">\n%s\n    </div>\n  </div>\n' % render_blocks(parse_blocks(sec_get(csec, 'deliverable'))))
            if csec.get('extension'):
                body.append('  <div class="extension-box">\n    <div class="section-title">Go Further</div>\n    <div class="extension-text">\n%s\n    </div>\n  </div>\n' % render_blocks(parse_blocks(csec['extension'])))
            if csec.get('note'):
                body.append('  <div class="integration-note">\n    <div class="integration-text">\n%s\n    </div>\n  </div>\n' % render_blocks(parse_blocks(csec['note'])))
            (d / 'challenge.html').write_text(fill(T['challenge'], PREV_MODULE_KEY=prev_key, MODULE_LABEL=label, BANNER_IMG=mod['banner'],
                                                   CHALLENGE_BODY='\n'.join(body), PREV_HREF=lessons[-1]['file'],
                                                   PREV_TITLE=html.escape(lessons[-1]['title'], quote=False),
                                                   MODULE_KEY=mod['key'], MODULE_DIR=mod['dir']), encoding='utf-8')

        # ---- complete
        study = [dict(n=L['n'], title=L['title'], file=L['file'], takeaways=L['takeaways']) for L in lessons]
        comp_tpl = T['complete-final'] if mod.get('final') else T['complete']
        (d / 'complete.html').write_text(fill(comp_tpl, PREV_MODULE_KEY=prev_key, MODULE_LABEL=label, MODULE_TITLE=mod['title'].title() if mod['title'].isupper() else mod['title'],
                                              BADGE_ICON=mod['badge']['icon'], BADGE_NAME=mod['badge']['name'].title(),
                                              MODULE_KEY=mod['key'], BADGE_KEY=mod['badge']['key'], MODULE_DIR=mod['dir'],
                                              CIRO_LINES_JS=ciro_js(mod['complete_lines']),
                                              STUDY_MODULE=js_str('%s — %s' % (label, mod['title'].title()))[1:-1],
                                              STUDY_LESSONS_JS=json.dumps(study, ensure_ascii=False),
                                              STUDY_CIRO=js_str(mod['study_ciro'])[1:-1]), encoding='utf-8')

        prev_key = mod['key']
        hub_modules.append(dict(key=mod['key'], label=label, title=mod['title'],
                                locked=mod['card']['locked'], unlocked=mod['card']['unlocked'],
                                url='%s/%s' % (mod['dir'], intro_page), badge=mod['badge']['key'],
                                next=dict(mod=label, title=lessons[0]['title'], url='%s/%s' % (mod['dir'], lessons[0]['file'])),
                                lessons=[dict(n=L['n'], title=L['title'], url='%s/%s' % (mod['dir'], L['file'])) for L in lessons]))

    # ---- hub data block
    hub = (ROOT / 'hub.html').read_text(encoding='utf-8')
    modules_js = 'const MODULES = ' + json.dumps(hub_modules, ensure_ascii=False, indent=2) + ';'
    badges_js = 'const BADGES = ' + json.dumps([dict(key=m['badge']['key'], name=m['badge']['name'], icon=m['badge']['icon'], type=m['label']) for m in course['modules']], ensure_ascii=False, indent=2) + ';'
    ciro_js_lines = 'const CIRO_LINES = [\n' + '\n'.join('  `%s`,' % l for l in course['hub_ciro_lines']) + '\n];'
    hub, n1 = re.subn(r'const MODULES = \[.*?\n\];', lambda m: modules_js, hub, count=1, flags=re.S)
    hub, n2 = re.subn(r'const BADGES = \[.*?\n\];', lambda m: badges_js, hub, count=1, flags=re.S)
    hub, n3 = re.subn(r'const CIRO_LINES = \[.*?\n\];', lambda m: ciro_js_lines, hub, count=1, flags=re.S)
    assert n1 == n2 == n3 == 1, 'hub data blocks not found'
    (ROOT / 'hub.html').write_text(hub, encoding='utf-8')

    print('built %d modules, %d lessons' % (len(hub_modules), sum(len(m['lessons']) for m in hub_modules)))
    if todo:
        print('\nlessons without a video yet:')
        for t in todo: print('  -', t)

def seconds(v):
    """'0', '', '118', '1:58' or '1:02:03' -> int seconds (0 if empty)."""
    v = str(v).strip()
    if not v: return 0
    parts = v.split(':')
    if not all(p.isdigit() for p in parts) or len(parts) > 3:
        sys.exit('bad time value %r (use seconds or m:ss)' % v)
    total = 0
    for p in parts: total = total * 60 + int(p)
    return total

def sec_get(sections, name):
    if name not in sections:
        sys.exit('missing section "## %s"' % name.title())
    return sections[name]

if __name__ == '__main__':
    build()
