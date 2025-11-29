(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  37604,
  (e) => {
    'use strict';
    var s = e.i(94601),
      l = e.i(39186),
      i = e.i(54402),
      r = e.i(36960),
      a = e.i(54035);
    e.s([
      'Code',
      0,
      ({
        id: e = '',
        emoji: t = '',
        group: d = '',
        name: o = '',
        code: n = '',
        codeOnly: c = !1,
      }) => {
        let [p, u] = (0, r.useState)(''),
          [x, h] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            u((0, i.default)(window).sanitize(n));
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
                        children: t,
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
                          children: x ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: c
                  ? (0, s.jsx)(a.Shiki, { code: n, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: x
                        ? (0, s.jsx)('div', {
                            className: 'w-full p-4 md:p-8',
                            dangerouslySetInnerHTML: { __html: p },
                          })
                        : (0, s.jsx)(a.Shiki, { code: n, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      },
    ]);
  },
  32461,
  (e) => {
    'use strict';
    var s = e.i(94601),
      l = e.i(37604),
      i = e.i(60373),
      r = e.i(81756),
      a = e.i(88204),
      t = e.i(50989),
      d = e.i(36960);
    let o = (0, t.fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/ui/block/index.tsx')}`;
        },
      }.url
    );
    (console.log((0, a.join)((0, a.dirname)(o), '../../../..')),
      e.s([
        '__N_SSG',
        () => !0,
        'default',
        0,
        ({ blocks: e = [] }) => {
          let [{ query: a = '' }, t] = (0, d.useState)({ query: '' }),
            o = e.filter(
              ({ id: e, name: s }) =>
                e.toLowerCase().includes(a.toLowerCase()) ||
                s.toLowerCase().includes(a.toLowerCase())
            );
          return (0, s.jsx)(i.PageTemplate, {
            query: a,
            setState: t,
            id: 'ui-blocks',
            emoji: '🎨',
            title: 'atomic/blocks',
            description:
              'is a free set of Tailwind CSS Blocks built following atomic design principles for consistent UI development.',
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
                          children: 'Components',
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
                              'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                            children: o.map(
                              ({
                                id: e = '',
                                emoji: l = '',
                                group: i,
                                name: a = '',
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
                                                children: i,
                                              }),
                                              (0, s.jsx)('p', {
                                                className:
                                                  'text-sm font-semibold capitalize',
                                                children: a,
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
                            className: 'flex flex-col gap-y-4 md:gap-y-8',
                            children: o.map(
                              ({
                                id: e = '',
                                emoji: i = '',
                                group: r = '',
                                name: a = '',
                                code: t = '',
                              }) =>
                                (0, s.jsx)(
                                  'div',
                                  {
                                    className: 'flex flex-col gap-y-4',
                                    children: (0, s.jsx)(l.Code, {
                                      id: e,
                                      emoji: i,
                                      group: r,
                                      name: a,
                                      code: t,
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
  8258,
  (e, s, l) => {
    let i = '/ui/block';
    ((window.__NEXT_P = window.__NEXT_P || []).push([i, () => e.r(32461)]),
      s.hot &&
        s.hot.dispose(function () {
          window.__NEXT_P.push([i]);
        }));
  },
]);
