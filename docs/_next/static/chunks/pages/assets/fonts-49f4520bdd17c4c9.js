(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2912],
  {
    1371: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Fira Code', 'Fira Code Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_f1801c',
      };
    },
    1631: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Open Sans', 'Open Sans Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_4cfb9d',
      };
    },
    1800: (a, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => M }));
      var o = s(7765),
        l = s(699),
        t = s(1371),
        n = s.n(t),
        r = s(3740),
        c = s.n(r),
        m = s(6351),
        i = s.n(m),
        d = s(9424),
        N = s.n(d),
        f = s(7674),
        _ = s.n(f),
        y = s(1631),
        u = s.n(y),
        x = s(2684),
        p = s.n(x),
        b = s(8885),
        h = s.n(b),
        F = s(4189),
        w = s.n(F),
        S = s(3135),
        k = s.n(S),
        j = s(5977);
      let C = [
          { id: 'fira-code', name: 'Fira Code', className: n().className },
          { id: 'inter', name: 'Inter', className: c().className },
          {
            id: 'jetbrains-mono',
            name: 'JetBrains Mono',
            className: i().className,
          },
          { id: 'lato', name: 'Lato', className: N().className },
          {
            id: 'merriweather',
            name: 'Merriweather',
            className: _().className,
          },
          { id: 'open-sans', name: 'Open Sans', className: u().className },
          { id: 'roboto', name: 'Roboto', className: p().className },
          { id: 'roboto-mono', name: 'Roboto Mono', className: h().className },
          {
            id: 'source-code-pro',
            name: 'SourceCode Pro',
            className: w().className,
          },
          { id: 'ubunto-mono', name: 'Ubuntu Mono', className: k().className },
        ],
        M = () => {
          let [{ query: a = '' }, e] = (0, j.useState)({ query: '' }),
            s = C.filter((e) => {
              let { id: s, name: o } = e;
              return (
                s.toLowerCase().includes(a.toLowerCase()) ||
                o.toLowerCase().includes(a.toLowerCase())
              );
            });
          return (0, o.jsx)(l.U, {
            query: a,
            setState: e,
            id: 'assets-fonts',
            emoji: '\uD83D\uDD24',
            title: 'atomic/fonts',
            description: '',
            children: (0, o.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, o.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, o.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, o.jsxs)('h3', {
                      className: 'text-2xl font-bold md:text-3xl',
                      children: [
                        (0, o.jsx)('span', {
                          className: 'capitalize',
                          children: 'Fonts',
                        }),
                        ' (',
                        s.length,
                        ')',
                      ],
                    }),
                    C.map((a) => {
                      let { id: e, name: s, className: l } = a;
                      return (0, o.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, o.jsx)('h3', {
                              className: 'text-xl font-semibold md:text-2xl',
                              children: s,
                            }),
                            (0, o.jsx)('div', {
                              className:
                                'overflow-hidden rounded-lg border border-neutral-200 p-4 text-xl shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                              children: (0, o.jsx)('div', {
                                className: 'overflow-y-auto whitespace-nowrap',
                                children: (0, o.jsx)('p', {
                                  className: l,
                                  children:
                                    'The quick brown fox jumps over the lazy dog.',
                                }),
                              }),
                            }),
                          ],
                        },
                        e
                      );
                    }),
                  ],
                }),
              }),
            }),
          });
        };
    },
    2468: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/assets/fonts',
        function () {
          return s(1800);
        },
      ]);
    },
    2684: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Roboto', 'Roboto Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_a747f6',
      };
    },
    3135: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Ubuntu Mono', 'Ubuntu Mono Fallback'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_bfcc43',
      };
    },
    3740: (a) => {
      a.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: 'normal' },
        className: '__className_470efc',
      };
    },
    4189: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Source Code Pro', 'Source Code Pro Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_3aa5df',
      };
    },
    6351: (a) => {
      a.exports = {
        style: {
          fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_761fe2',
      };
    },
    7674: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Merriweather', 'Merriweather Fallback'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_c3821c',
      };
    },
    8885: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Roboto Mono', 'Roboto Mono Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_d81485',
      };
    },
    9424: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Lato', 'Lato Fallback'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_5d1067',
      };
    },
  },
  (a) => {
    (a.O(0, [1385, 8650, 699, 636, 6593, 8792], () => a((a.s = 2468))),
      (_N_E = a.O()));
  },
]);
