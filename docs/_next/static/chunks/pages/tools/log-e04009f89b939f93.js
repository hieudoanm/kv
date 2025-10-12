(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5146],
  {
    905: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/tools/log',
        function () {
          return r(2028);
        },
      ]);
    },
    1672: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => s });
      let s = (e) => {
        navigator.clipboard
          .writeText(e)
          .then(() => {
            alert('Copied to clipboard!');
          })
          .catch((e) => {
            console.error('Failed to copy: ', e);
          });
      };
    },
    2028: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { __N_SSG: () => o, default: () => i }));
      var s = r(1503),
        l = r(9291),
        a = r(9018),
        d = r(1672),
        o = !0;
      let i = (e) => {
        let { code: t = '' } = e;
        return (0, s.jsx)(a.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'tools-logger',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/logger',
          description: '',
          children: (0, s.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, s.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, s.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-2',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-2',
                        children: [
                          (0, s.jsx)('span', {
                            className: 'text-4xl',
                            children: '\uD83D\uDCDD',
                          }),
                          (0, s.jsxs)('div', {
                            children: [
                              (0, s.jsx)('p', {
                                className: 'text-xs capitalize',
                                children: 'Tools',
                              }),
                              (0, s.jsx)('h3', {
                                className:
                                  'text-xl font-bold capitalize md:text-2xl',
                                children: 'Logger',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)('button', {
                        type: 'button',
                        className:
                          'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                        onClick: () => (0, d.C)(t),
                        children: 'Copy',
                      }),
                    ],
                  }),
                  (0, s.jsx)('div', {
                    className:
                      'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                    children: (0, s.jsx)(l.V, { code: t, lang: 'ts' }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    9291: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => d });
      var s = r(1503),
        l = r(2223),
        a = r(6259);
      let d = (e) => {
        let { code: t, lang: r } = e,
          [d, o] = (0, l.useState)('');
        return (
          (0, l.useEffect)(() => {
            (async () => {
              o(await (0, a.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, s.jsx)('div', {
            className:
              'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: d },
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [5570, 6259, 9018, 636, 6593, 8792], () => e((e.s = 905))),
      (_N_E = e.O()));
  },
]);
