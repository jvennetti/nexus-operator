// Injected into every page before its own scripts (page.addInitScript).
// Records layout shifts, media play() calls and unhandled promise rejections,
// and exposes window.__qa helpers the audit script calls from Node.
(() => {
  const qa = (window.__qa = { shifts: [], plays: [], rejections: [], fontTimes: [] });
  // Web-font swaps (Google Fonts, display=swap) reflow text once at load; recorded so the audit
  // can tell them apart from real layout shifts.
  // (the audit fakes the page clock; keep the real performance.now to compare with entry.startTime)
  const realNow = performance.now.bind(performance);
  try { document.fonts.addEventListener('loadingdone', () => qa.fontTimes.push(realNow())); } catch (e) {}

  try {
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        if (e.hadRecentInput) continue;
        // A typewriter's own inline spans advancing along the same line is the text being typed,
        // not a shift; ignore entries made only of those.
        const real = (e.sources || []).filter((s) => {
          const n = s.node, el = n && (n.nodeType === 1 ? n : n.parentElement);
          const sameLine = s.previousRect.y === s.currentRect.y && s.previousRect.height === s.currentRect.height;
          return !(el && el.tagName === 'SPAN' && !el.id && sameLine);
        });
        if (!real.length) continue;
        qa.shifts.push({
          t: Math.round(e.startTime),
          value: +e.value.toFixed(4),
          nodes: (e.sources || []).map((s) => {
            const n = s.node;
            if (!n || !n.nodeType) return '?';
            const el = n.nodeType === 1 ? n : n.parentElement;
            return el ? el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '') : '#text';
          }),
        });
      }
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) {}

  const origPlay = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () {
    qa.plays.push({ t: Math.round(performance.now()), src: (this.currentSrc || this.src || '').replace(location.origin, '') });
    const p = origPlay.apply(this, arguments);
    return p;
  };
  window.addEventListener('unhandledrejection', (e) => {
    qa.rejections.push(String(e.reason && (e.reason.message || e.reason)));
  });

  function effOpacity(el) {
    let o = 1;
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.display === 'none') return 0;
      o *= parseFloat(cs.opacity);
    }
    return o;
  }

  // True while the element (or an ancestor) is mid-way through an opacity fade-in that has
  // actually started (not still waiting out its delay): that is its reveal, not a hidden control.
  function revealing(el) {
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      for (const a of n.getAnimations ? n.getAnimations() : []) {
        const p = a.effect && a.effect.getComputedTiming().progress;
        if (a.playState !== 'running' || p === null || p >= 1) continue;
        if (a.transitionProperty === 'opacity') return true;
        try { if (a.effect.getKeyframes().some((k) => 'opacity' in k)) return true; } catch (e) {}
      }
    }
    return false;
  }

  // Interactive controls that are (nearly) invisible but still receive a click at their centre,
  // or can still take keyboard focus.
  qa.hiddenInteractive = () => {
    const out = [];
    const sel = 'a[href],button,input,textarea,select,[onclick],[tabindex]';
    for (const el of document.querySelectorAll(sel)) {
      if (el.closest('#nx-overlay')) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const cs = getComputedStyle(el);
      const op = effOpacity(el);
      const invisible = op < 0.05 || cs.visibility === 'hidden';
      if (!invisible || revealing(el)) continue;
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      let clickable = false;
      if (cy >= 0 && cy < innerHeight && cx >= 0 && cx < innerWidth) {
        const hit = document.elementFromPoint(cx, cy);
        clickable = !!hit && (hit === el || el.contains(hit));
      }
      const focusable = cs.visibility !== 'hidden' && !el.disabled && el.tabIndex >= 0 && !el.closest('[inert]');
      if (clickable || focusable) {
        out.push({
          el: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''),
          text: (el.textContent || '').trim().slice(0, 40),
          opacity: +op.toFixed(2),
          clickable,
          focusable,
        });
      }
    }
    return out;
  };

  qa.overflow = () => {
    const se = document.scrollingElement || document.documentElement;
    const wide = [];
    if (se.scrollWidth > se.clientWidth + 1) {
      for (const el of document.body.querySelectorAll('*')) {
        const r = el.getBoundingClientRect();
        if (r.right > se.clientWidth + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed') {
          wide.push(el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/)[0] : '') + ' right=' + Math.round(r.right));
          if (wide.length > 6) break;
        }
      }
    }
    return { scrollWidth: se.scrollWidth, clientWidth: se.clientWidth, wide };
  };

  // Layout box (offsetTop/offsetHeight chain): ignores CSS transforms, so entrance animations that
  // only translate/scale do not count as movement; real reflow does.
  qa.box = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    let x = 0, y = 0;
    for (let n = el; n; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  };
})();
