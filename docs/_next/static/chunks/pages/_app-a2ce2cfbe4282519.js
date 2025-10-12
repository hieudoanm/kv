(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    2432: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(9101);
        },
      ]);
    },
    3092: () => {},
    4364: (a, e, s) => {
      a.exports = s(7117);
    },
    5557: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_ff121e',
        variable: '__variable_ff121e',
      };
    },
    5675: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_493667',
        variable: '__variable_493667',
      };
    },
    9101: (a, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => f }));
      var l = s(1503);
      s(3092);
      var n = s(5557),
        t = s.n(n),
        c = s(5675),
        i = s.n(c),
        o = s(4364),
        r = s.n(o);
      let _ = '/atomic';
      function f(a) {
        let { Component: e, pageProps: s } = a;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(r(), {
              children: [
                (0, l.jsx)('title', { children: 'atomic' }),
                (0, l.jsx)('link', {
                  rel: 'icon',
                  href: ''.concat(_, '/favicon.ico'),
                  type: 'image/x-icon',
                }),
              ],
            }),
            (0, l.jsx)('div', {
              className: ''.concat(t().className, ' ').concat(i().className),
              children: (0, l.jsx)(e, { ...s }),
            }),
          ],
        });
      }
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    (a.O(0, [6593, 8792], () => (e(2432), e(9760))), (_N_E = a.O()));
  },
]);
