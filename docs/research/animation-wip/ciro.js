/* NEXUS Operator — CIRO, the course's robot guide.
 *
 * One source of truth for CIRO's drawing and motion. Every page that shows CIRO loads this file
 * (a plain, render-time <script> in <head>) and calls NXCiro.mount(container, options).
 *
 * Drawing: viewBox 0 0 86 178, the same box the old inline SVGs used, so every page keeps its
 * layout. Parts are separate groups with their own pivots (see PIVOTS) so they can move alone:
 *
 *   svg.nxc
 *     ellipse.nxc-shadow                    floor shadow, squashes with the body
 *     g.nxc-tread                           housing, 3 wheels (rotate), 2 cleat rows (slide), strut
 *     g.nxc-upper            pivot 43,149   physics: lean from acceleration, road rumble
 *       g.nxc-bounce         pivot 43,149   gestures: squash / stretch / hop (Web Animations)
 *         g.nxc-breathe                     idle bob (CSS keyframes)
 *           g.nxc-arm.l / .r pivot 2,78 / 84,78   physics swing + gesture wave
 *           g.nxc-body                      shell, chest screen, 3 status dots, chest bar
 *           rect neck
 *           g.nxc-head       pivot 43,66    tilt with anticipation and overshoot
 *             g.nxc-ant      pivot 43,15    spring-driven antenna (follow-through)
 *             head shell, screen
 *             g.nxc-face                    clipped to the screen; slides to "look"
 *               g.nxc-scan, g.nxc-eyes (blink), g.nxc-joy (happy eyes), g.nxc-text (3 lines)
 *
 * Motion: one requestAnimationFrame loop per robot runs only while something is moving (a roll,
 * or a spring that has not come to rest); idle breathing, antenna sway and status dots are CSS.
 * Only transform and opacity are animated. prefers-reduced-motion turns rolls into fades and
 * drops gestures and idle motion; promises still resolve on the same schedule, so page pacing
 * does not change.
 */
(function () {
  'use strict';
  if (window.NXCiro) return;

  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function reduced() { return !!(mq && mq.matches); }

  var COL = { line: '#00c8ff', frame: '#1e3a5a', shell: '#0d1a2e', deep: '#0a1525', screen: '#050f1c' };
  var SCREEN_TINT = { '#ffffff': '#1a2a3a', '#ffcc00': '#151000', '#ff3333': '#170000', '#ff4444': '#170000', '#00c8ff': '#03101a' };
  var VB_W = 86;
  var CLEAT = 6; // cleat pitch on the tread, in viewBox units

  // ── Easing ── (all motion goes through one of these; nothing in CIRO is linear)
  var E = {
    inOut: function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; },
    out: function (t) { return 1 - Math.pow(1 - t, 3); },
    inn: function (t) { return t * t * t; },
    sine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
  };
  var CB = {
    out: 'cubic-bezier(0.22, 1, 0.36, 1)',
    inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
    inn: 'cubic-bezier(0.55, 0, 1, 0.45)',
    back: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    sine: 'cubic-bezier(0.37, 0, 0.63, 1)',
  };
  // Position along a roll: ease-in-out, with an optional small dip backwards first (anticipation)
  // and a small overshoot past the mark before settling (follow-through). Both bumps are sin²
  // shaped, so the curve starts and stops with zero velocity.
  function rollCurve(t, anticipate, overshoot) {
    var p = E.inOut(t);
    if (anticipate && t < 0.24) { var a = Math.sin(Math.PI * t / 0.24); p -= anticipate * a * a; }
    if (overshoot && t > 0.62) { var o = Math.sin(Math.PI * (t - 0.62) / 0.38); p += overshoot * o * o; }
    return p;
  }

  // ── Styles (injected once) ──
  var CSS = [
    '.nxc{display:block;overflow:visible}',
    '.nxc *{transform-box:view-box}',
    '.nxc-mover{display:inline-block;position:relative;line-height:0}',
    '.nxc-upper,.nxc-bounce{transform-origin:43px 149px}',
    '.nxc-head{transform-origin:43px 66px}',
    '.nxc-ant,.nxc-ant-idle{transform-origin:43px 15px}',
    '.nxc-arm.l,.nxc-arm.l .nxc-armw{transform-origin:2px 78px}',
    '.nxc-arm.r,.nxc-arm.r .nxc-armw{transform-origin:84px 78px}',
    '.nxc-eyes{transform-origin:43px 37px}',
    '.nxc-shadow{transform-origin:43px 175.5px}',
    '.nxc-wheel[data-x="22"]{transform-origin:22px 162px}.nxc-wheel[data-x="43"]{transform-origin:43px 162px}.nxc-wheel[data-x="64"]{transform-origin:64px 162px}',
    '.nxc-chestfill{transform-origin:22px 107px;transform:scaleX(0)}',
    '.nxc-dot{fill:var(--nxc-dot,var(--dot-color,#00c8ff))}',
    '.nxc-lit{fill:var(--nxc-eye,#00c8ff)}',
    '.nxc-face{transition:transform .45s ' + CB.out + '}',
    '.nxc-eyes,.nxc-joy,.nxc-text,.nxc-scan{transition:opacity .25s ' + CB.out + '}',
    '.nxc-joy{opacity:0}.nxc.joy .nxc-joy{opacity:1}.nxc.joy .nxc-eyes{opacity:0}',
    '.nxc-text{opacity:0}.nxc.texting .nxc-text{opacity:1}.nxc.texting .nxc-eyes,.nxc.texting .nxc-joy{opacity:0}',
    '.nxc.faceless .nxc-eyes,.nxc.faceless .nxc-joy{opacity:0}',
    '.nxc-scan{opacity:.45}.nxc.texting .nxc-scan{opacity:.12}',
    '.nxc-tip{transition:opacity .4s ' + CB.out + '}',
    // status dots: staggered breathing glow, ease-in-out (was a linear-ish blink)
    '@keyframes nxc-dot{0%,100%{opacity:1}50%{opacity:.2}}',
    '.nxc.dots-blink .nxc-dot{animation:nxc-dot 2s ' + CB.sine + ' infinite}',
    '.nxc.dots-blink .nxc-dot.b{animation-delay:.65s}.nxc.dots-blink .nxc-dot.c{animation-delay:1.3s}',
    '.nxc.dots-off .nxc-dot{opacity:0}',
    // idle: breathing bob, antenna lags the bob by a quarter cycle (follow-through), tip glows
    '@keyframes nxc-breathe{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.2px)}}',
    '@keyframes nxc-ant-sway{0%,100%{transform:rotate(-2.2deg)}50%{transform:rotate(2.2deg)}}',
    '@keyframes nxc-tip{0%,100%{opacity:1}50%{opacity:.55}}',
    '.nxc.idle .nxc-breathe{animation:nxc-breathe 3.4s ' + CB.sine + ' infinite}',
    '.nxc.idle .nxc-ant-idle{animation:nxc-ant-sway 3.4s ' + CB.sine + ' -0.85s infinite}',
    '.nxc.idle .nxc-tip{animation:nxc-tip 3.4s ' + CB.sine + ' infinite}',
    // powered down: dark, slumped; the slump itself is set from JS so it can spring back
    '.nxc.off .nxc-dot,.nxc.off .nxc-eyes,.nxc.off .nxc-joy,.nxc.off .nxc-text,.nxc.off .nxc-scan{opacity:0}',
    '.nxc.off .nxc-tip{opacity:.25}',
    '@media (prefers-reduced-motion:reduce){.nxc *{animation:none!important}.nxc-face{transition:none}}',
  ].join('\n');
  function injectCSS() {
    if (document.getElementById('nxc-css')) return;
    var s = document.createElement('style');
    s.id = 'nxc-css';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  // ── Drawing ──
  var uid = 0;
  function markup(id) {
    var cleatsB = '', cleatsT = '';
    for (var x = 4; x <= 88; x += CLEAT) {
      cleatsB += '<rect x="' + x + '" y="171.4" width="3" height="2.4" rx="0.8"/>';
      cleatsT += '<rect x="' + x + '" y="150.3" width="3" height="2.4" rx="0.8"/>';
    }
    function wheel(cx) {
      return '<g class="nxc-wheel" data-x="' + cx + '">' +
        '<circle cx="' + cx + '" cy="162" r="7" fill="' + COL.shell + '" stroke="' + COL.frame + '" stroke-width="1"/>' +
        '<path d="M' + cx + ' 162V156.2M' + cx + ' 162l5.02 2.9M' + cx + ' 162l-5.02 2.9" stroke="#2a5a7a" stroke-width="1" stroke-linecap="round"/>' +
        '<circle cx="' + cx + '" cy="162" r="1.8" fill="' + COL.line + '" opacity=".6"/></g>';
    }
    return '' +
      '<defs>' +
        '<clipPath id="' + id + '-track"><rect x="9.6" y="149.6" width="66.8" height="24.8" rx="12.4"/></clipPath>' +
        '<clipPath id="' + id + '-screen"><rect x="16" y="20" width="54" height="38" rx="2.5"/></clipPath>' +
      '</defs>' +
      '<ellipse class="nxc-shadow" cx="43" cy="175.6" rx="33" ry="2.2" fill="#000" opacity=".45"/>' +
      '<g class="nxc-tread">' +
        '<rect x="35" y="132" width="16" height="20" rx="2" fill="' + COL.shell + '" stroke="' + COL.frame + '" stroke-width="1"/>' +
        '<rect x="9" y="149" width="68" height="26" rx="13" fill="' + COL.deep + '" stroke="' + COL.frame + '" stroke-width="1.2"/>' +
        '<g clip-path="url(#' + id + '-track)" fill="' + COL.frame + '">' +
          '<g class="nxc-cleats t">' + cleatsT + '</g><g class="nxc-cleats b">' + cleatsB + '</g>' +
        '</g>' +
        wheel(22) + wheel(43) + wheel(64) +
      '</g>' +
      '<g class="nxc-upper"><g class="nxc-bounce"><g class="nxc-breathe">' +
        '<g class="nxc-arm l"><g class="nxc-armw">' +
          '<rect x="0" y="76" width="5" height="42" rx="2.5" fill="' + COL.shell + '" stroke="' + COL.frame + '" stroke-width="1"/>' +
          '<circle cx="2.5" cy="115" r="1.3" fill="' + COL.line + '" opacity=".5"/></g></g>' +
        '<g class="nxc-arm r"><g class="nxc-armw">' +
          '<rect x="81" y="76" width="5" height="42" rx="2.5" fill="' + COL.shell + '" stroke="' + COL.frame + '" stroke-width="1"/>' +
          '<circle cx="83.5" cy="115" r="1.3" fill="' + COL.line + '" opacity=".5"/></g></g>' +
        '<g class="nxc-body">' +
          '<rect x="4" y="70" width="78" height="72" rx="6" fill="' + COL.shell + '" stroke="' + COL.frame + '" stroke-width="1.2"/>' +
          '<rect class="nxc-chest" x="15" y="81" width="56" height="32" rx="2.5" fill="' + COL.screen + '" stroke="' + COL.frame + '" stroke-width="1"/>' +
          '<circle class="nxc-dot a" cx="31" cy="95" r="4"/><circle class="nxc-dot b" cx="43" cy="95" r="4"/><circle class="nxc-dot c" cx="55" cy="95" r="4"/>' +
          '<rect x="22" y="105" width="42" height="4" rx="2" fill="' + COL.frame + '"/>' +
          '<rect class="nxc-chestfill" x="22" y="105" width="42" height="4" rx="2" fill="' + COL.line + '" opacity=".75"/>' +
          '<path d="M31 126.5h24M31 131.5h24" stroke="' + COL.frame + '" stroke-width="1" stroke-linecap="round"/>' +
        '</g>' +
        '<rect x="33" y="63" width="20" height="8" rx="2" fill="' + COL.shell + '" stroke="' + COL.frame + '" stroke-width="1"/>' +
        '<g class="nxc-head">' +
          '<g class="nxc-ant"><g class="nxc-ant-idle">' +
            '<path d="M43 15V5.5" stroke="' + COL.line + '" stroke-width="1.5" stroke-linecap="round" class="nxc-ant-stem"/>' +
            '<circle class="nxc-tip nxc-lit" cx="43" cy="3" r="2.5"/></g></g>' +
          '<rect x="10" y="14" width="66" height="50" rx="5" fill="' + COL.shell + '" stroke="' + COL.line + '" stroke-width="1.2"/>' +
          '<rect class="nxc-screen" x="16" y="20" width="54" height="38" rx="2.5" fill="' + COL.screen + '"/>' +
          '<g clip-path="url(#' + id + '-screen)"><g class="nxc-face">' +
            '<g class="nxc-scan" stroke="' + COL.line + '" stroke-width="0.5" stroke-linecap="round">' +
              '<path d="M18 28H68" opacity=".55"/><path d="M18 35H60" opacity=".35"/><path d="M18 42H66" opacity=".25"/><path d="M18 49H52" opacity=".18"/></g>' +
            '<g class="nxc-eyes"><rect class="nxc-lit" x="27" y="31" width="8" height="12" rx="4"/><rect class="nxc-lit" x="51" y="31" width="8" height="12" rx="4"/></g>' +
            '<g class="nxc-joy" fill="none" stroke="var(--nxc-eye,#00c8ff)" stroke-width="2.2" stroke-linecap="round"><path d="M26.5 40q4.5-7 9 0"/><path d="M50.5 40q4.5-7 9 0"/></g>' +
            '<g class="nxc-text" font-family="\'IBM Plex Mono\',monospace" text-anchor="middle" fill="var(--nxc-eye,#00c8ff)">' +
              '<text class="l1" x="43" y="31" font-size="5.5"></text><text class="l2" x="43" y="40" font-size="5"></text><text class="l3" x="43" y="49" font-size="4.5"></text></g>' +
          '</g></g>' +
        '</g>' +
      '</g></g></g>';
  }

  // ── A damped spring (semi-implicit Euler), used for lean, antenna and arms ──
  function Spring(k, c) { this.k = k; this.c = c; this.x = 0; this.v = 0; this.target = 0; }
  Spring.prototype.step = function (dt) {
    var a = -this.k * (this.x - this.target) - this.c * this.v;
    this.v += a * dt; this.x += this.v * dt;
  };
  Spring.prototype.rest = function () { return Math.abs(this.x - this.target) < 0.02 && Math.abs(this.v) < 0.05; };

  function Ciro(container, o) {
    o = o || {};
    injectCSS();
    var id = 'nxc' + (++uid);
    this.mover = document.createElement('div');
    this.mover.className = 'nxc-mover' + (o.moverClass ? ' ' + o.moverClass : '');
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'nxc');
    svg.setAttribute('viewBox', '0 0 86 178');
    svg.setAttribute('width', o.width || 86);
    svg.setAttribute('height', o.height || Math.round((o.width || 86) * 178 / 86));
    svg.setAttribute('aria-hidden', 'true');
    if (o.id) svg.id = o.id;
    svg.innerHTML = markup(id);
    this.mover.appendChild(svg);
    if (o.replace) container.replaceWith(this.mover); else container.appendChild(this.mover);
    this.svg = svg;
    var q = function (s) { return svg.querySelector(s); };
    this.p = {
      upper: q('.nxc-upper'), bounce: q('.nxc-bounce'), head: q('.nxc-head'), ant: q('.nxc-ant'),
      armL: q('.nxc-arm.l'), armR: q('.nxc-arm.r'), armLw: q('.nxc-arm.l .nxc-armw'), armRw: q('.nxc-arm.r .nxc-armw'),
      eyes: q('.nxc-eyes'), face: q('.nxc-face'), shadow: q('.nxc-shadow'), screen: q('.nxc-screen'),
      wheels: svg.querySelectorAll('.nxc-wheel'), cleatT: q('.nxc-cleats.t'), cleatB: q('.nxc-cleats.b'),
      chest: q('.nxc-chestfill'), t1: q('.nxc-text .l1'), t2: q('.nxc-text .l2'), t3: q('.nxc-text .l3'),
    };
    // physics state
    this.x = o.x || 0;           // mover translateX, CSS px
    this.vx = 0;
    this.dist = 0;               // tread travel, viewBox units
    this.lean = new Spring(140, 10);  // degrees
    this.ant = new Spring(170, 5.5);  // degrees
    this.arms = new Spring(120, 7);   // degrees
    this.headDeg = 0;
    this.roll = null;
    this.raf = 0;
    this.last = 0;
    this.blinkT = 0;
    this.dots(o.dots || 'blink');
    if (o.face === 'none') svg.classList.add('faceless');
    if (o.color) this.color(o.color);
    this.place(this.x);
    if (o.off) this.power(false, true);
    if (o.idle !== false && !o.off) this.idle(true);
  }

  var P = Ciro.prototype;

  P.scale = function () { // CSS px per viewBox unit
    var w = this.svg.getBoundingClientRect().width;
    return (w || +this.svg.getAttribute('width') || VB_W) / VB_W;
  };
  P.room = function (el) { // how far CIRO can roll each way inside el, from the centred position
    var w = (el || this.mover.parentNode).getBoundingClientRect().width;
    return Math.max(0, (w - this.svg.getBoundingClientRect().width) / 2);
  };

  // ── The frame loop: runs while a roll is in progress or any spring is still moving ──
  P.kick = function () {
    if (this.raf || reduced()) return;
    var self = this;
    this.last = 0;
    this.s = this.scale();
    this.raf = requestAnimationFrame(function f(now) { self.frame(now) ? (self.raf = requestAnimationFrame(f)) : (self.raf = 0); });
  };
  P.frame = function (now) {
    var dt = this.last ? Math.min(0.05, (now - this.last) / 1000) : 1 / 60;
    this.last = now;
    var prevX = this.x, acc = 0, v = 0, r = this.roll;
    if (r) {
      // velocity and acceleration come from the curve itself (central differences), not from
      // frame deltas, so an uneven frame rate cannot make the body twitch
      if (!r.start) r.start = now;
      var T = r.ms / 1000, t = Math.min(1, (now - r.start) / r.ms), h = 0.01;
      var g = function (u) { u = Math.max(0, Math.min(1, u)); return r.from + (r.to - r.from) * rollCurve(u, r.anticipate, r.overshoot); };
      this.x = g(t);
      v = (g(t + h) - g(t - h)) / (2 * h) / T;
      acc = (g(t + h) - 2 * this.x + g(t - h)) / (h * h) / (T * T);
      if (t >= 1) { this.x = r.to; v = 0; this.roll = null; r.done(); }
    } else if (this.trackX != null) {
      this.x = this.trackX;
      var vNew = (this.x - prevX) / dt, vPrev = this.vx;
      v = vPrev + (vNew - vPrev) * 0.25;
      acc = (v - vPrev) / dt;
    }
    this.vx = v;
    var s = this.s || (this.s = this.scale());
    var bw = s * VB_W;
    var accN = acc / bw;                  // body widths / s²
    var speedN = Math.abs(v) / bw;        // body widths / s
    // inertia: the body leans back while the tread pulls it forward and pitches forward when it
    // brakes; the arms and antenna lag behind the body the same way
    this.lean.target = Math.max(-7, Math.min(7, -accN * 0.17));
    this.arms.target = Math.max(-14, Math.min(14, accN * 0.4));
    this.ant.target = Math.max(-16, Math.min(16, -accN * 0.35));
    for (var i = 0; i < 4; i++) { this.lean.step(dt / 4); this.arms.step(dt / 4); this.ant.step(dt / 4); }
    // the antenna also answers the body's own swing (secondary motion on top of secondary motion)
    var antDeg = this.ant.x - this.lean.v * 0.06;
    this.dist += (this.x - prevX) / s;
    var rumble = speedN > 0.02 ? Math.sin(this.dist * 1.05) * 0.35 * Math.min(1, speedN) : 0;
    this.write(rumble, antDeg);
    return !!this.roll || this.trackX != null || !this.lean.rest() || !this.ant.rest() || !this.arms.rest();
  };
  // Follow a position set from outside every frame (the page transition's progress bar).
  P.track = function (x) { this.trackX = x; this.kick(); return this; };
  P.untrack = function () { this.trackX = null; return this; };
  P.write = function (rumble, antDeg) {
    var p = this.p;
    this.mover.style.transform = 'translate3d(' + this.x.toFixed(2) + 'px,0,0)';
    p.upper.style.transform = 'translateY(' + (rumble || 0).toFixed(3) + 'px) rotate(' + this.lean.x.toFixed(3) + 'deg)';
    p.ant.style.transform = 'rotate(' + (antDeg || 0).toFixed(3) + 'deg)';
    p.armL.style.transform = p.armR.style.transform = 'rotate(' + this.arms.x.toFixed(3) + 'deg)';
    var w = (this.dist / 7) * 180 / Math.PI;     // wheel radius 7
    for (var i = 0; i < p.wheels.length; i++) p.wheels[i].style.transform = 'rotate(' + w.toFixed(2) + 'deg)';
    var c = ((this.dist % CLEAT) + CLEAT) % CLEAT;
    p.cleatB.style.transform = 'translateX(' + (-c).toFixed(3) + 'px)';
    p.cleatT.style.transform = 'translateX(' + (c - CLEAT).toFixed(3) + 'px)';
  };

  // ── Movement ──
  P.place = function (x) { this.x = x; this.vx = 0; this.write(0, this.ant.x); return this; };
  P.rollTo = function (x, o) {
    o = o || {};
    var self = this, ms = o.ms || 1200;
    if (this.roll) { this.roll.done(); this.roll = null; }
    // eyes lead the move: look where it is going first (staging), then back to centre on arrival
    var dir = x > this.x ? 1 : x < this.x ? -1 : 0;
    if (o.look !== false && dir) this.look(dir * 0.8);
    if (reduced()) {
      var fade = o.fade !== false && Math.abs(x - this.x) > 1;
      if (fade) this.mover.animate([{ opacity: 0 }, { opacity: 1 }], { duration: Math.min(ms, 400), easing: 'ease-out' });
      this.place(x);
      return new Promise(function (res) { setTimeout(function () { self.look(o.endLook || 0); res(); }, ms); });
    }
    return new Promise(function (res) {
      self.roll = { from: self.x, to: x, ms: ms, anticipate: o.anticipate == null ? 0.035 : o.anticipate,
        overshoot: o.overshoot == null ? 0.03 : o.overshoot, start: 0,
        done: function () {
          if (o.settle !== false) self.squash(0.035, 380);
          self.look(o.endLook || 0);
          res();
        } };
      self.kick();
    });
  };
  P.rollBy = function (dx, o) { return this.rollTo(this.x + dx, o); };

  // Eyes and face slide towards a direction (-1 left .. 1 right, dy -1 up .. 1 down).
  P.look = function (dx, dy) {
    this.p.face.style.transform = 'translate(' + ((dx || 0) * 5).toFixed(2) + 'px,' + ((dy || 0) * 3).toFixed(2) + 'px)';
    return this;
  };

  function anim(el, frames, opts) {
    if (reduced() || !el.animate) return null;
    return el.animate(frames, opts);
  }
  function after(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  // Head tilt: a small wind-up the other way, the tilt with overshoot, then a settle. The antenna
  // gets a kick in the opposite direction so it whips and settles a beat later.
  P.tilt = function (deg, ms) {
    ms = ms || 550;
    var from = this.headDeg;
    this.headDeg = deg;
    if (reduced()) { this.p.head.style.transform = 'rotate(' + deg + 'deg)'; return after(ms); }
    var wind = from - (deg - from) * 0.18;
    var over = deg + (deg - from) * 0.12;
    var a = this.p.head.animate([
      { transform: 'rotate(' + from + 'deg)', easing: CB.inOut },
      { transform: 'rotate(' + wind + 'deg)', offset: 0.2, easing: CB.inOut },
      { transform: 'rotate(' + over + 'deg)', offset: 0.7, easing: CB.inOut },
      { transform: 'rotate(' + deg + 'deg)' },
    ], { duration: ms, fill: 'forwards' });
    var self = this;
    setTimeout(function () { self.ant.v += (deg - from) * -9; self.kick(); }, ms * 0.25);
    return a.finished.then(function () { self.p.head.style.transform = 'rotate(' + deg + 'deg)'; a.cancel(); });
  };

  // Suspension squash: compress on the tread and spring back (used on landing and settling).
  P.squash = function (amt, ms) {
    amt = amt || 0.04; ms = ms || 420;
    anim(this.p.bounce, [
      { transform: 'scale(1,1)', easing: CB.out },
      { transform: 'scale(' + (1 + amt * 0.5) + ',' + (1 - amt) + ')', offset: 0.3, easing: CB.inOut },
      { transform: 'scale(' + (1 - amt * 0.15) + ',' + (1 + amt * 0.3) + ')', offset: 0.65, easing: CB.inOut },
      { transform: 'scale(1,1)' },
    ], { duration: ms });
    anim(this.p.shadow, [{ transform: 'scaleX(1)' }, { transform: 'scaleX(' + (1 + amt) + ')', offset: 0.3 }, { transform: 'scaleX(1)' }], { duration: ms, easing: CB.inOut });
    return after(ms);
  };

  // A hop on the suspension: crouch (anticipation), stretch up on an arc, land with a squash,
  // settle. The tread stays on the floor; the shadow shrinks while the body is up.
  P.hop = function (h, ms) {
    h = h || 7; ms = ms || 760;
    var self = this;
    anim(this.p.bounce, [
      { transform: 'translateY(0) scale(1,1)', easing: CB.inOut },
      { transform: 'translateY(1.2px) scale(1.04,0.94)', offset: 0.18, easing: CB.out },
      { transform: 'translateY(' + (-h) + 'px) scale(0.97,1.05)', offset: 0.46, easing: CB.inn },
      { transform: 'translateY(0.6px) scale(1.035,0.95)', offset: 0.72, easing: CB.out },
      { transform: 'translateY(-0.5px) scale(0.995,1.01)', offset: 0.86, easing: CB.inOut },
      { transform: 'translateY(0) scale(1,1)' },
    ], { duration: ms });
    anim(this.p.shadow, [
      { transform: 'scaleX(1)', opacity: 0.45 }, { transform: 'scaleX(1.05)', opacity: 0.5, offset: 0.18 },
      { transform: 'scaleX(0.8)', opacity: 0.25, offset: 0.46 }, { transform: 'scaleX(1.05)', opacity: 0.5, offset: 0.72 },
      { transform: 'scaleX(1)', opacity: 0.45 },
    ], { duration: ms, easing: CB.inOut });
    setTimeout(function () { self.ant.v += 60; self.kick(); }, ms * 0.2);
    setTimeout(function () { self.ant.v -= 90; self.kick(); }, ms * 0.7);
    return after(ms);
  };

  // A nod: down and up with a small overshoot.
  P.nod = function (ms) {
    ms = ms || 520;
    var self = this, d = this.headDeg;
    anim(this.p.head, [
      { transform: 'rotate(' + d + 'deg) translateY(0)', easing: CB.inOut },
      { transform: 'rotate(' + d + 'deg) translateY(2.2px)', offset: 0.35, easing: CB.inOut },
      { transform: 'rotate(' + d + 'deg) translateY(-0.6px)', offset: 0.7, easing: CB.inOut },
      { transform: 'rotate(' + d + 'deg) translateY(0)' },
    ], { duration: ms });
    setTimeout(function () { self.ant.v += 45; self.kick(); }, ms * 0.3);
    return after(ms);
  };

  // Wave with the right arm: raise on an arc, two waggles, lower.
  P.wave = function (ms) {
    ms = ms || 1100;
    anim(this.p.armRw, [
      { transform: 'rotate(0deg)', easing: CB.inOut },
      { transform: 'rotate(-150deg)', offset: 0.3, easing: CB.inOut },
      { transform: 'rotate(-125deg)', offset: 0.45, easing: CB.inOut },
      { transform: 'rotate(-150deg)', offset: 0.6, easing: CB.inOut },
      { transform: 'rotate(-128deg)', offset: 0.72, easing: CB.inOut },
      { transform: 'rotate(5deg)', offset: 0.92, easing: CB.inOut },
      { transform: 'rotate(0deg)' },
    ], { duration: ms });
    return after(ms);
  };

  // A small, decaying tremble (errors, glitches). Translate only, a few px, never linear.
  P.shiver = function (ms, amt) {
    ms = ms || 400; amt = amt || 1.2;
    var f = [], n = 8;
    for (var i = 0; i <= n; i++) {
      var k = 1 - i / n, s = i % 2 ? -1 : 1;
      f.push({ transform: 'translate(' + (i === n ? 0 : s * amt * k).toFixed(2) + 'px,' + (i === n ? 0 : (s * -0.3 * amt * k)).toFixed(2) + 'px)' });
    }
    anim(this.p.bounce, f, { duration: ms, easing: CB.inOut });
    return after(ms);
  };

  P.blink = function () {
    var e = this.p.eyes;
    anim(e, [{ transform: 'scaleY(1)', easing: CB.inn }, { transform: 'scaleY(0.1)', offset: 0.45, easing: CB.out }, { transform: 'scaleY(1)' }], { duration: 170 });
    return this;
  };

  // ── State ──
  P.idle = function (on) {
    var self = this;
    this.svg.classList.toggle('idle', !!on);
    clearTimeout(this.blinkT);
    if (on && !reduced()) {
      (function next() {
        self.blinkT = setTimeout(function () {
          if (!self.svg.classList.contains('off')) {
            self.blink();
            if (Math.random() < 0.22) setTimeout(function () { self.blink(); }, 240);
          }
          next();
        }, 2400 + Math.random() * 3600);
      })();
    }
    return this;
  };
  P.dots = function (mode) {
    var c = this.svg.classList;
    c.remove('dots-blink', 'dots-off', 'dots-solid');
    c.add('dots-' + mode);
    return this;
  };
  P.color = function (hex) {
    this.svg.style.setProperty('--nxc-dot', hex);
    this.p.screen.setAttribute('fill', SCREEN_TINT[hex] || COL.screen);
    return this;
  };
  P.eyeColor = function (hex) { this.svg.style.setProperty('--nxc-eye', hex); return this; };
  P.face = function (l1, l2, l3, color) {
    var c = this.svg.classList;
    if (l1 == null) { c.remove('texting'); return this; }
    this.p.t1.textContent = l1 || ''; this.p.t2.textContent = l2 || ''; this.p.t3.textContent = l3 || '';
    if (color) this.eyeColor(color);
    c.add('texting');
    return this;
  };
  P.joy = function (on) { this.svg.classList.toggle('joy', !!on); return this; };
  P.chest = function (frac, ms) {
    var el = this.p.chest, to = 'scaleX(' + frac + ')';
    if (reduced() || !ms) { el.style.transform = to; return after(ms || 0); }
    var from = getComputedStyle(el).transform;
    var a = el.animate([{ transform: from === 'none' ? 'scaleX(0)' : from }, { transform: to }], { duration: ms, easing: CB.out, fill: 'forwards' });
    return a.finished.then(function () { el.style.transform = to; a.cancel(); });
  };
  // Power. Off: lights out and slumped (head dropped to one side, antenna drooped, body sunk).
  // On: a shiver, then everything springs up with overshoot; the antenna follows a beat late.
  P.power = function (on, instant) {
    var c = this.svg.classList, p = this.p, self = this;
    if (!on) {
      c.add('off'); this.idle(false);
      this.headDeg = 9;
      p.head.style.transform = 'rotate(9deg) translateY(1.5px)';
      p.bounce.style.transform = 'translateY(2px) scale(1.01,0.97)';
      this.ant.x = this.ant.target = 0; p.ant.style.transform = '';
      p.ant.querySelector('.nxc-ant-idle').style.transform = 'rotate(28deg)';
      return after(0);
    }
    c.remove('off');
    var antIdle = p.ant.querySelector('.nxc-ant-idle');
    if (instant || reduced()) {
      p.head.style.transform = ''; p.bounce.style.transform = ''; antIdle.style.transform = ''; this.headDeg = 0;
      this.idle(true); return after(instant ? 0 : 700);
    }
    var head = p.head.animate([
      { transform: 'rotate(9deg) translateY(1.5px)', easing: CB.inOut },
      { transform: 'rotate(10deg) translateY(2px)', offset: 0.25, easing: CB.back },
      { transform: 'rotate(-3deg) translateY(-0.8px)', offset: 0.7, easing: CB.inOut },
      { transform: 'rotate(0deg) translateY(0)' },
    ], { duration: 900 });
    var body = p.bounce.animate([
      { transform: 'translateY(2px) scale(1.01,0.97)', easing: CB.inOut },
      { transform: 'translateY(2.6px) scale(1.03,0.95)', offset: 0.25, easing: CB.out },
      { transform: 'translateY(-1.5px) scale(0.98,1.04)', offset: 0.6, easing: CB.inOut },
      { transform: 'translateY(0) scale(1,1)' },
    ], { duration: 900 });
    p.head.style.transform = ''; p.bounce.style.transform = '';
    this.headDeg = 0;
    // antenna: straighten after the head, with a spring wobble on top
    antIdle.animate([{ transform: 'rotate(28deg)', easing: CB.inn }, { transform: 'rotate(28deg)', offset: 0.3, easing: CB.back }, { transform: 'rotate(0deg)' }], { duration: 900 });
    antIdle.style.transform = '';
    setTimeout(function () { self.ant.v -= 120; self.kick(); }, 700);
    return Promise.all([head.finished, body.finished]).then(function () { self.idle(true); });
  };

  window.NXCiro = {
    mount: function (container, o) { return new Ciro(container, o); },
    reduced: reduced,
    ease: E,
    curves: CB,
  };
})();
