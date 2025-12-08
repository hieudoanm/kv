(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  37604,
  (e) => {
    'use strict';
    var s = e.i(28626),
      l = e.i(39186),
      a = e.i(53791),
      r = e.i(24412),
      t = e.i(98726);
    e.s([
      'Code',
      0,
      ({
        id: e = '',
        emoji: i = '',
        group: d = '',
        name: o = '',
        code: n = '',
        codeOnly: c = !1,
      }) => {
        let [x, p] = (0, r.useState)(''),
          [u, h] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            p((0, a.default)(window).sanitize(n));
          }, [n]),
          (0, s.jsxs)('div', {
            id: e,
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
                        children: i,
                      }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('p', {
                            className: 'text-xs capitalize',
                            children: d,
                          }),
                          (0, s.jsx)('h3', {
                            className: 'text-xl font-bold md:text-2xl',
                            children: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      c &&
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, l.copy)(n),
                          children: 'Copy',
                        }),
                      !c &&
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => h((e) => !e),
                          children: u ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: c
                  ? (0, s.jsx)(t.Shiki, { code: n, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: u
                        ? (0, s.jsx)('div', {
                            className: 'w-full p-4 md:p-8',
                            dangerouslySetInnerHTML: { __html: x },
                          })
                        : (0, s.jsx)(t.Shiki, { code: n, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      },
    ]);
  },
  29741,
  (e) => {
    'use strict';
    var s = e.i(28626),
      l = e.i(37604),
      a = e.i(60373),
      r = e.i(2388),
      t = e.i(73173),
      i = e.i(42494),
      d = e.i(24412);
    let o = (0, i.fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/react/contexts/index.tsx')}`;
        },
      }.url
    );
    (console.log((0, t.join)((0, t.dirname)(o), '../../../..')),
      e.s([
        '__N_SSG',
        () => !0,
        'default',
        0,
        ({ contexts: e = [] }) => {
          let [{ query: t = '' }, i] = (0, d.useState)({ query: '' }),
            o = e.filter(
              ({ id: e, name: s }) =>
                e.toLowerCase().includes(t.toLowerCase()) ||
                s.toLowerCase().includes(t.toLowerCase())
            );
          return (0, s.jsx)(a.PageTemplate, {
            query: t,
            setState: i,
            id: 'react-contexts',
            emoji: '🔗',
            title: 'atomic/contexts',
            description:
              'are essential React context providers focused on simplicity, reusability, and scalability for better state management.',
            children: (0, s.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, s.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, s.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, s.jsxs)('h2', {
                      className: 'text-2xl font-bold',
                      children: [
                        (0, s.jsx)('span', {
                          className: 'capitalize',
                          children: 'Contexts',
                        }),
                        ' (',
                        o.length,
                        ')',
                      ],
                    }),
                    o.length > 0 &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)('div', {
                            className:
                              'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
                            children: o.map(
                              ({
                                id: e = '',
                                emoji: l = '',
                                group: a,
                                name: t = '',
                              }) =>
                                (0, s.jsx)(
                                  r.default,
                                  {
                                    href: `#${e}`,
                                    children: (0, s.jsx)('div', {
                                      className: 'col-span-1',
                                      children: (0, s.jsxs)('div', {
                                        className:
                                          'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                        children: [
                                          (0, s.jsx)('p', {
                                            className: 'text-2xl',
                                            children: l,
                                          }),
                                          (0, s.jsxs)('div', {
                                            className:
                                              'flex flex-col gap-y-0.25',
                                            children: [
                                              (0, s.jsx)('p', {
                                                className: 'text-xs capitalize',
                                                children: a,
                                              }),
                                              (0, s.jsx)('p', {
                                                className:
                                                  'font-semibold capitalize',
                                                children: t,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  e
                                )
                            ),
                          }),
                          (0, s.jsx)('div', {
                            className: 'flex flex-col gap-y-8',
                            children: o.map(
                              ({
                                id: e = '',
                                emoji: a = '',
                                group: r = '',
                                name: t = '',
                                code: i = '',
                              }) =>
                                (0, s.jsx)(
                                  'div',
                                  {
                                    className: 'flex flex-col gap-y-4',
                                    children: (0, s.jsx)(l.Code, {
                                      id: e,
                                      emoji: a,
                                      group: r,
                                      name: t,
                                      code: i,
                                      codeOnly: !0,
                                    }),
                                  },
                                  e
                                )
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        },
      ]));
  },
  59164,
  (e, s, l) => {
    let a = '/react/contexts';
    ((window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(29741)]),
      s.hot &&
        s.hot.dispose(function () {
          window.__NEXT_P.push([a]);
        }));
  },
]);
