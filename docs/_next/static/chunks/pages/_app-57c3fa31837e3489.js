(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    2058: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_493667',
        variable: '__variable_493667',
      };
    },
    2907: (a, e, s) => {
      a.exports = s(6966);
    },
    5939: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(7845);
        },
      ]);
    },
    7526: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_ff121e',
        variable: '__variable_ff121e',
      };
    },
    7845: (a, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => f }));
      var l = s(7765);
      s(9548);
      var n = s(7526),
        t = s.n(n),
        c = s(2058),
        i = s.n(c),
        o = s(2907),
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
    9548: () => {},
  },
  (a) => {
    var e = (e) => a((a.s = e));
    (a.O(0, [6593, 8792], () => (e(5939), e(83))), (_N_E = a.O()));
  },
]);
