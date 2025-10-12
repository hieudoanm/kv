(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3826],
  {
    4530: (e, t, l) => {
      'use strict';
      (l.r(t), l.d(t, { __N_SSG: () => c, default: () => u }));
      var a = l(1503),
        r = l(2223),
        i = l(7275),
        n = l(9018),
        s = l(5570),
        o = l.n(s);
      let f = {
          line: '\uD83D\uDCC8',
          bar: '\uD83D\uDCCA',
          pie: '\uD83E\uDD67',
          area: '\uD83C\uDF0A',
          scatter: '\uD83C\uDFAF',
          radar: '\uD83D\uDD78️',
          bubble: '\uD83E\uDEE7',
          doughnut: '\uD83C\uDF69',
          histogram: '\uD83C\uDFD7️',
          heatmap: '\uD83D\uDD25',
          treemap: '\uD83C\uDF33',
          polar: '\uD83D\uDC3B‍❄️',
          candlestick: '\uD83D\uDD6F️',
          waterfall: '\uD83D\uDCA7',
          gauge: '⏱️',
          funnel: '⏬',
        },
        d = [120, 180, 150, 200, 250, 300, 220],
        h = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        x = {
          area: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [] } = e,
                i = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = i.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    n = e.height;
                  a.clearRect(0, 0, r, n);
                  let s = r - 60 - 40,
                    o = n - 60 - 40,
                    f = Math.max(...t),
                    d = (e) => 60 + (s / (t.length - 1)) * e,
                    h = (e) => 40 + ((f - e) / (f - 0)) * o;
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e;
                    (a.beginPath(),
                      a.moveTo(60, t),
                      a.lineTo(r - 40, t),
                      a.stroke());
                  }
                  for (let e = 0; e < l.length; e++) {
                    let t = d(e);
                    (a.beginPath(),
                      a.moveTo(t, 40),
                      a.lineTo(t, n - 60),
                      a.stroke());
                  }
                  ((a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e,
                      l = f - ((f - 0) / 5) * e;
                    a.fillText(l.toFixed(0), 52, t);
                  }
                  ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                  for (let e = 0; e < l.length; e++)
                    a.fillText(l[e], d(e), n - 60 + 6);
                  ((a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, n - 60),
                    a.lineTo(r - 40, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(d(0), n - 60));
                  for (let e = 0; e < t.length; e++) a.lineTo(d(e), h(t[e]));
                  (a.lineTo(d(t.length - 1), n - 60),
                    a.closePath(),
                    (a.fillStyle = 'rgba(59, 130, 246, 0.3)'),
                    a.fill(),
                    a.beginPath(),
                    a.moveTo(d(0), h(t[0])));
                  for (let e = 0; e < t.length - 1; e++) {
                    let l = (d(e) + d(e + 1)) / 2,
                      r = (h(t[e]) + h(t[e + 1])) / 2;
                    a.quadraticCurveTo(d(e), h(t[e]), l, r);
                  }
                  (a.quadraticCurveTo(
                    d(t.length - 1),
                    h(t[t.length - 1]),
                    d(t.length - 1),
                    h(t[t.length - 1])
                  ),
                    (a.strokeStyle = '#3b82f6'),
                    (a.lineWidth = 2),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText('Month', r / 2, n - 10),
                    a.save(),
                    a.translate(16, n / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText('Revenue ($)', 0, 0),
                    a.restore(),
                    (a.fillStyle = '#3b82f6'),
                    a.fillRect(r / 2 - 30, 0, 12, 12),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    a.fillText('Revenue', r / 2 - 12, 6));
                }, [t, l]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: i,
                    width: 400,
                    height: 200,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            { data: d, labels: h }
          ),
          bar: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [] } = e,
                i = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = i.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    n = e.height;
                  a.clearRect(0, 0, r, n);
                  let s = r - 60 - 40,
                    o = n - 60 - 40,
                    f = Math.max(...t);
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e;
                    (a.beginPath(),
                      a.moveTo(60, t),
                      a.lineTo(r - 40, t),
                      a.stroke());
                  }
                  let d = l.length;
                  for (let e = 0; e < d; e++) {
                    let t = 60 + (s / d) * e + s / d / 2;
                    (a.beginPath(),
                      a.moveTo(t, 40),
                      a.lineTo(t, n - 60),
                      a.stroke());
                  }
                  ((a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e,
                      l = f - ((f - 0) / 5) * e;
                    a.fillText(l.toFixed(0), 52, t);
                  }
                  ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                  for (let e = 0; e < l.length; e++) {
                    let t = 60 + (s / d) * e + s / d / 2;
                    a.fillText(l[e], t, n - 60 + 6);
                  }
                  ((a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, n - 60),
                    a.lineTo(r - 40, n - 60),
                    a.stroke());
                  let h = s / d / 2;
                  a.fillStyle = '#3b82f6';
                  for (let e = 0; e < t.length; e++) {
                    let l = 60 + (s / d) * e + s / d / 2 - h / 2,
                      r = 40 + ((f - t[e]) / (f - 0)) * o,
                      i = n - 60 - r;
                    a.fillRect(l, r, h, i);
                  }
                  ((a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText('Month', r / 2, n - 10),
                    a.save(),
                    a.translate(16, n / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText('Revenue ($)', 0, 0),
                    a.restore());
                  let x = r / 2 - 16;
                  ((a.fillStyle = '#3b82f6'),
                    a.fillRect(x, 0, 12, 12),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Revenue', x + 16, 6));
                }, [t, l]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: i,
                    width: 400,
                    height: 200,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            { data: d, labels: h }
          ),
          bubble: (0, a.jsx)(
            (e) => {
              let {
                  data: t = [],
                  xLabels: l = [],
                  yLabels: i = [],
                  xName: n = 'X Axis',
                  yName: s = 'Y Axis',
                } = e,
                o = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = o.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    f = e.height;
                  a.clearRect(0, 0, r, f);
                  let d = r - 60 - 40,
                    h = f - 60 - 40,
                    x = t.map((e) => e.x),
                    c = t.map((e) => e.y),
                    u = Math.min(...x),
                    g = Math.max(...x),
                    m = Math.min(...c),
                    b = Math.max(...c);
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  let p = i.length - 1 || 5;
                  for (let e = 0; e <= p; e++) {
                    let t = 40 + (h / p) * e;
                    (a.beginPath(),
                      a.moveTo(60, t),
                      a.lineTo(r - 40, t),
                      a.stroke(),
                      (a.fillStyle = '#374151'),
                      (a.font = '12px sans-serif'),
                      (a.textAlign = 'right'),
                      (a.textBaseline = 'middle'));
                    let l =
                      i[p - e] || (m + ((b - m) / p) * (p - e)).toFixed(0);
                    a.fillText(l.toString(), 52, t);
                  }
                  let y = l.length - 1 || 5;
                  for (let e = 0; e <= y; e++) {
                    let t = 60 + (d / y) * e;
                    (a.beginPath(),
                      a.moveTo(t, 40),
                      a.lineTo(t, f - 60),
                      a.stroke(),
                      (a.fillStyle = '#374151'),
                      (a.font = '12px sans-serif'),
                      (a.textAlign = 'center'),
                      (a.textBaseline = 'top'));
                    let r = l[e] || (u + ((g - u) / y) * e).toFixed(0);
                    a.fillText(r.toString(), t, f - 60 + 6);
                  }
                  ((a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, f - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, f - 60),
                    a.lineTo(r - 40, f - 60),
                    a.stroke(),
                    t.forEach((e) => {
                      let { x: t, y: l, r } = e;
                      (a.beginPath(),
                        (a.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                        (a.strokeStyle = '#3b82f6'),
                        (a.lineWidth = 1),
                        a.arc(
                          60 + ((t - u) / (g - u)) * d,
                          40 + ((b - l) / (b - m)) * h,
                          r,
                          0,
                          2 * Math.PI
                        ),
                        a.fill(),
                        a.stroke());
                    }),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, r / 2, f - 10),
                    a.save(),
                    a.translate(16, f / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText(s, 0, 0),
                    a.restore());
                  let T = r / 2 - 16;
                  (a.beginPath(),
                    (a.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                    (a.strokeStyle = '#3b82f6'),
                    (a.lineWidth = 1),
                    a.arc(T + 8, 8, 8, 0, 2 * Math.PI),
                    a.fill(),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Bubble Size = Radius', T + 16 + 8, 8));
                }, [t, l, i, n, s]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: o,
                    width: 400,
                    height: 300,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            {
              data: [
                { x: 1, y: 5, r: 10 },
                { x: 2, y: 8, r: 15 },
                { x: 3, y: 4, r: 8 },
                { x: 4, y: 7, r: 12 },
                { x: 5, y: 2, r: 5 },
              ],
              xLabels: ['1', '2', '3', '4', '5'],
              yLabels: ['0', '2', '4', '6', '8', '10'],
              xName: 'X Value',
              yName: 'Y Value',
            }
          ),
          doughnut: (0, a.jsx)(
            (e) => {
              let {
                  data: t = [],
                  labels: l = [],
                  colors: i,
                  title: n = 'Doughnut Chart',
                } = e,
                s = (0, r.useRef)(null),
                o = i || [
                  '#3b82f6',
                  '#ef4444',
                  '#f59e0b',
                  '#10b981',
                  '#8b5cf6',
                  '#ec4899',
                  '#14b8a6',
                ];
              return (
                (0, r.useEffect)(() => {
                  let e = s.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    i = e.height,
                    f = r / 2,
                    d = i / 2,
                    h = Math.min(r, i) / 2 - 40;
                  a.clearRect(0, 0, r, i);
                  let x = t.reduce((e, t) => e + t, 0),
                    c = -Math.PI / 2;
                  (t.forEach((e, t) => {
                    let l = c + (e / x) * 2 * Math.PI;
                    (a.beginPath(),
                      a.moveTo(f, d),
                      a.arc(f, d, h, c, l),
                      a.closePath(),
                      (a.fillStyle = o[t % o.length]),
                      a.fill(),
                      (c = l));
                  }),
                    a.beginPath(),
                    (a.fillStyle = '#fff'),
                    a.moveTo(f, d),
                    a.arc(f, d, 0.6 * h, 0, 2 * Math.PI),
                    a.fill());
                  let u = r - 75,
                    g = 20;
                  ((a.font = '14px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    l.forEach((e, t) => {
                      ((a.fillStyle = o[t % o.length]),
                        a.fillRect(u, g, 16, 16),
                        (a.fillStyle = '#374151'),
                        a.fillText(e, u + 16 + 8, g + 8),
                        (g += 24));
                    }),
                    (a.fillStyle = '#374151'),
                    (a.font = '16px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, f, 20));
                }, [t, l, o, n]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: s,
                    width: 400,
                    height: 300,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            {
              data: [25, 15, 30, 10, 20],
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
              title: 'Sales Distribution',
            }
          ),
          polar: (0, a.jsx)(
            (e) => {
              let { data: t, labels: l, maxValue: i, title: n } = e,
                s = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = s.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    o = e.height;
                  a.clearRect(0, 0, r, o);
                  let f = r / 2,
                    d = o / 2,
                    h = Math.min(r, o) / 2 - 60,
                    x = l.length,
                    c = (2 * Math.PI) / x,
                    u = null != i ? i : Math.max(...t, 1);
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  for (let e = 1; e <= 5; e++) {
                    let t = (h / 5) * e;
                    (a.beginPath(), a.arc(f, d, t, 0, 2 * Math.PI), a.stroke());
                  }
                  ((a.strokeStyle = '#9ca3af'),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'center'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e < x; e++) {
                    let t = e * c - Math.PI / 2,
                      r = f + h * Math.cos(t),
                      i = d + h * Math.sin(t);
                    (a.beginPath(), a.moveTo(f, d), a.lineTo(r, i), a.stroke());
                    let n = f + (h + 20) * Math.cos(t),
                      s = d + (h + 20) * Math.sin(t);
                    a.fillText(l[e], n, s);
                  }
                  let g = [
                    '#3b82f6',
                    '#ef4444',
                    '#f59e0b',
                    '#10b981',
                    '#8b5cf6',
                    '#ec4899',
                    '#22d3ee',
                  ];
                  for (let e = 0; e < x; e++) {
                    let l = h * ((t[e] - 0) / (u - 0)),
                      r = e * c - Math.PI / 2,
                      i = r + c;
                    (a.beginPath(),
                      a.moveTo(f, d),
                      a.arc(f, d, l, r, i),
                      a.closePath(),
                      (a.fillStyle = g[e % g.length] + 'cc'),
                      a.fill(),
                      (a.strokeStyle = g[e % g.length]),
                      (a.lineWidth = 2),
                      a.stroke());
                  }
                  n &&
                    ((a.fillStyle = '#374151'),
                    (a.font = '16px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, f, 30));
                  let m = r - 140,
                    b = 40;
                  ((a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e < x; e++)
                    ((a.fillStyle = g[e % g.length]),
                      a.beginPath(),
                      a.arc(m + 8, b + 8, 8, 0, 2 * Math.PI),
                      a.fill(),
                      (a.fillStyle = '#374151'),
                      a.fillText(l[e], m + 16 + 8, b + 8),
                      (b += 28));
                }, [t, l, i, n]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: s,
                    width: 400,
                    height: 400,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            {
              data: [30, 50, 80, 60, 40, 90, 70],
              labels: [
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange',
                'Teal',
              ],
              title: 'Polar Area Chart Example',
            }
          ),
          line: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [] } = e,
                i = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = i.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    n = e.height;
                  a.clearRect(0, 0, r, n);
                  let s = Math.max(...t),
                    o = n - 60 - 40,
                    f = r - 60 - 40;
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e;
                    (a.beginPath(),
                      a.moveTo(60, t),
                      a.lineTo(r - 40, t),
                      a.stroke());
                  }
                  let d = l.length;
                  for (let e = 0; e < d; e++) {
                    let t = 60 + (f / (d - 1)) * e;
                    (a.beginPath(),
                      a.moveTo(t, 40),
                      a.lineTo(t, n - 60),
                      a.stroke());
                  }
                  ((a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e,
                      l = s - ((s - 0) / 5) * e;
                    a.fillText(l.toFixed(0), 52, t);
                  }
                  ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                  for (let e = 0; e < l.length; e++) {
                    let t = 60 + (f / (l.length - 1)) * e;
                    a.fillText(l[e], t, n - 60 + 6);
                  }
                  ((a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, n - 60),
                    a.lineTo(r - 40, n - 60),
                    a.stroke(),
                    (a.strokeStyle = '#3b82f6'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    t.forEach((e, l) => {
                      let r = 60 + (f / (t.length - 1)) * l,
                        i = 40 + ((s - e) / (s - 0)) * o;
                      0 === l ? a.moveTo(r, i) : a.lineTo(r, i);
                    }),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText('Month', r / 2, n - 10),
                    a.save(),
                    a.translate(16, n / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText('Revenue ($)', 0, 0),
                    a.restore());
                  let h = r / 2 - 16;
                  ((a.fillStyle = '#3b82f6'),
                    a.fillRect(h, 0, 12, 12),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Revenue', h + 16, 6));
                }, [t, l]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: i,
                    width: 400,
                    height: 200,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            { data: d, labels: h }
          ),
          radar: (0, a.jsx)(
            (e) => {
              let { data: t, labels: l, maxValue: i, title: n } = e,
                s = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = s.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    o = e.height;
                  a.clearRect(0, 0, r, o);
                  let f = r / 2,
                    d = o / 2,
                    h = Math.min(r, o) / 2 - 60,
                    x = l.length,
                    c = (2 * Math.PI) / x,
                    u = null != i ? i : Math.max(...t, 1);
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  for (let e = 1; e <= 5; e++) {
                    let t = (h / 5) * e;
                    a.beginPath();
                    for (let e = 0; e < x; e++) {
                      let l = e * c - Math.PI / 2,
                        r = f + t * Math.cos(l),
                        i = d + t * Math.sin(l);
                      0 === e ? a.moveTo(r, i) : a.lineTo(r, i);
                    }
                    (a.closePath(), a.stroke());
                  }
                  ((a.strokeStyle = '#9ca3af'),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'center'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e < x; e++) {
                    let t = e * c - Math.PI / 2,
                      r = f + h * Math.cos(t),
                      i = d + h * Math.sin(t);
                    (a.beginPath(), a.moveTo(f, d), a.lineTo(r, i), a.stroke());
                    let n = f + (h + 20) * Math.cos(t),
                      s = d + (h + 20) * Math.sin(t);
                    a.fillText(l[e], n, s);
                  }
                  ((a.strokeStyle = '#3b82f6'),
                    (a.fillStyle = 'rgba(59, 130, 246, 0.4)'),
                    (a.lineWidth = 2),
                    a.beginPath());
                  for (let e = 0; e < x; e++) {
                    let l = h * ((t[e] - 0) / (u - 0)),
                      r = e * c - Math.PI / 2,
                      i = f + l * Math.cos(r),
                      n = d + l * Math.sin(r);
                    0 === e ? a.moveTo(i, n) : a.lineTo(i, n);
                  }
                  (a.closePath(),
                    a.fill(),
                    a.stroke(),
                    (a.fillStyle = '#1e40af'));
                  for (let e = 0; e < x; e++) {
                    let l = h * ((t[e] - 0) / (u - 0)),
                      r = e * c - Math.PI / 2,
                      i = f + l * Math.cos(r),
                      n = d + l * Math.sin(r);
                    (a.beginPath(), a.arc(i, n, 4, 0, 2 * Math.PI), a.fill());
                  }
                  n &&
                    ((a.fillStyle = '#374151'),
                    (a.font = '16px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, f, 30));
                  let g = r - 140;
                  ((a.fillStyle = '#3b82f6'),
                    a.beginPath(),
                    a.arc(g + 8, 48, 8, 0, 2 * Math.PI),
                    a.fill(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Dataset 1', g + 16 + 8, 48));
                }, [t, l, i, n]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: s,
                    width: 400,
                    height: 400,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            {
              data: [80, 60, 70, 90, 50],
              labels: [
                'Speed',
                'Strength',
                'Agility',
                'Endurance',
                'Flexibility',
              ],
              title: 'Athlete Performance',
            }
          ),
          scatter: (0, a.jsx)(
            (e) => {
              let {
                  data: t = [],
                  xLabel: l = 'X Axis',
                  yLabel: i = 'Y Axis',
                  title: n = 'Scatter Chart',
                  pointColor: s = '#3b82f6',
                } = e,
                o = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = o.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    f = e.height;
                  a.clearRect(0, 0, r, f);
                  let d = t.map((e) => e.x),
                    h = t.map((e) => e.y),
                    x = Math.min(...d),
                    c = Math.max(...d),
                    u = Math.min(...h),
                    g = Math.max(...h),
                    m = r - 70 - 50,
                    b = f - 70 - 50;
                  ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                  for (let e = 0; e <= 5; e++) {
                    let t = 50 + (b / 5) * e;
                    (a.beginPath(),
                      a.moveTo(70, t),
                      a.lineTo(r - 50, t),
                      a.stroke());
                  }
                  for (let e = 0; e <= 5; e++) {
                    let t = 70 + (m / 5) * e;
                    (a.beginPath(),
                      a.moveTo(t, 50),
                      a.lineTo(t, f - 70),
                      a.stroke());
                  }
                  ((a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(70, 50),
                    a.lineTo(70, f - 70),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(70, f - 70),
                    a.lineTo(r - 50, f - 70),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle'));
                  for (let e = 0; e <= 5; e++) {
                    let t = 50 + (b / 5) * e,
                      l = g - ((g - u) / 5) * e;
                    a.fillText(l.toFixed(2), 62, t);
                  }
                  ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                  for (let e = 0; e <= 5; e++) {
                    let t = 70 + (m / 5) * e,
                      l = x + ((c - x) / 5) * e;
                    a.fillText(l.toFixed(2), t, f - 70 + 6);
                  }
                  ((a.fillStyle = s),
                    t.forEach((e) => {
                      let { x: t, y: l } = e;
                      (a.beginPath(),
                        a.arc(
                          70 + ((t - x) / (c - x)) * m,
                          50 + ((g - l) / (g - u)) * b,
                          5,
                          0,
                          2 * Math.PI
                        ),
                        a.fill());
                    }),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(l, r / 2, f - 20),
                    a.save(),
                    a.translate(20, f / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText(i, 0, 0),
                    a.restore(),
                    a.fillText(n, r / 2, 30));
                  let p = r - 150;
                  ((a.fillStyle = s),
                    a.beginPath(),
                    a.arc(p + 8, 48, 8, 0, 2 * Math.PI),
                    a.fill(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Data Points', p + 16 + 8, 48));
                }, [t, l, i, n, s]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', {
                    ref: o,
                    width: 400,
                    height: 300,
                    className: 'h-auto w-full',
                  }),
                })
              );
            },
            {
              data: [
                { x: 1, y: 2 },
                { x: 2, y: 3.5 },
                { x: 3, y: 1.2 },
                { x: 4, y: 4 },
                { x: 5, y: 2.5 },
              ],
              xLabel: 'Time (s)',
              yLabel: 'Value',
              title: 'Sample Scatter Plot',
            }
          ),
        };
      var c = !0;
      let u = (e) => {
        let { charts: t = [] } = e,
          [{ query: l = '' }, s] = (0, r.useState)({ query: '' }),
          d = t.filter((e) => {
            let { id: t, name: a } = e;
            return (
              t.toLowerCase().includes(l.toLowerCase()) ||
              a.toLowerCase().includes(l.toLowerCase())
            );
          });
        return (0, a.jsx)(n.U, {
          query: l,
          setState: s,
          id: 'ui-charts',
          emoji: '\uD83D\uDCCA',
          title: 'atomic/charts',
          description:
            'is a curated set of responsive, customizable charts tailored specifically for SaaS products and marketing websites.',
          children: (0, a.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, a.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, a.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, a.jsx)('span', {
                        className: 'capitalize',
                        children: 'Charts',
                      }),
                      ' (',
                      d.length,
                      ')',
                    ],
                  }),
                  d.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: d.map((e) => {
                            var t;
                            let { id: l = '', name: r = '' } = e;
                            return (0, a.jsx)(
                              o(),
                              {
                                href: '#'.concat(l),
                                children: (0, a.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, a.jsx)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                    children: (0, a.jsxs)('p', {
                                      className: 'font-semibold capitalize',
                                      children: [
                                        null != (t = f[l]) ? t : '',
                                        ' ',
                                        r,
                                      ],
                                    }),
                                  }),
                                }),
                              },
                              l
                            );
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: d.map((e) => {
                            var t, l;
                            let { id: r = '', name: n = '', code: s = '' } = e;
                            return (0, a.jsxs)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: [
                                  (0, a.jsxs)('h2', {
                                    className: 'text-2xl font-bold capitalize',
                                    children: [
                                      null != (t = f[r]) ? t : '',
                                      ' ',
                                      n,
                                    ],
                                  }),
                                  (0, a.jsx)(i.O, {
                                    id: r,
                                    emoji: null != (l = f[r]) ? l : '',
                                    group: 'Chart',
                                    name: n,
                                    code: s,
                                    chart: x[n],
                                  }),
                                ],
                              },
                              r
                            );
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          }),
        });
      };
    },
    5477: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/charts',
        function () {
          return l(4530);
        },
      ]);
    },
    7275: (e, t, l) => {
      'use strict';
      l.d(t, { O: () => n });
      var a = l(1503),
        r = l(2223),
        i = l(9291);
      let n = (e) => {
        let {
            id: t = '',
            emoji: l = '',
            group: n = '',
            name: s = '',
            code: o = '',
            chart: f = (0, a.jsx)(a.Fragment, {}),
          } = e,
          [d, h] = (0, r.useState)(!0);
        return (0, a.jsxs)('div', {
          id: t,
          className: 'flex flex-col gap-y-4 md:gap-y-8',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    (0, a.jsx)('span', { className: 'text-4xl', children: l }),
                    (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsx)('p', {
                          className: 'text-xs capitalize',
                          children: n,
                        }),
                        (0, a.jsx)('h3', {
                          className: 'text-xl font-bold capitalize md:text-2xl',
                          children: s,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => h((e) => !e),
                  children: d ? 'Preview' : 'Code',
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: d
                ? (0, a.jsx)('div', {
                    className:
                      'flex w-full items-center justify-center p-4 md:p-8',
                    children: f,
                  })
                : (0, a.jsx)(i.V, { code: o, lang: 'html' }),
            }),
          ],
        });
      };
    },
    9291: (e, t, l) => {
      'use strict';
      l.d(t, { V: () => n });
      var a = l(1503),
        r = l(2223),
        i = l(6259);
      let n = (e) => {
        let { code: t, lang: l } = e,
          [n, s] = (0, r.useState)('');
        return (
          (0, r.useEffect)(() => {
            (async () => {
              s(await (0, i.Yz)(t, { lang: l, theme: 'github-dark' }));
            })();
          }),
          (0, a.jsx)('div', {
            className:
              'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: n },
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [5570, 6259, 9018, 636, 6593, 8792], () => e((e.s = 5477))),
      (_N_E = e.O()));
  },
]);
