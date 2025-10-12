(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6748],
  {
    1672: (e, s, l) => {
      'use strict';
      l.d(s, { C: () => r });
      let r = (e) => {
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
    2617: (e, s, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/hooks',
        function () {
          return l(7942);
        },
      ]);
    },
    7881: (e, s, l) => {
      'use strict';
      l.d(s, { C: () => o });
      var r = l(1503),
        a = l(1672),
        t = l(8372),
        i = l(2223),
        d = l(9291);
      let o = (e) => {
        let {
            id: s = '',
            emoji: l = '',
            group: o = '',
            name: n = '',
            code: c = '',
            codeOnly: u = !1,
          } = e,
          [p, x] = (0, i.useState)(''),
          [h, m] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            x((0, t.A)(window).sanitize(c));
          }, [c]),
          (0, r.jsxs)('div', {
            id: s,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, r.jsx)('span', {
                        className: 'text-4xl',
                        children: l,
                      }),
                      (0, r.jsxs)('div', {
                        children: [
                          (0, r.jsx)('p', {
                            className: 'text-xs capitalize',
                            children: o,
                          }),
                          (0, r.jsx)('h3', {
                            className: 'text-xl font-bold md:text-2xl',
                            children: n,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      u &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, a.C)(c),
                          children: 'Copy',
                        }),
                      !u &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => m((e) => !e),
                          children: h ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, r.jsx)(d.V, { code: c, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: h
                        ? (0, r.jsx)('div', {
                            className: 'w-full p-4 md:p-8',
                            dangerouslySetInnerHTML: { __html: p },
                          })
                        : (0, r.jsx)(d.V, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    7942: (e, s, l) => {
      'use strict';
      (l.r(s), l.d(s, { __N_SSG: () => n, default: () => c }));
      var r = l(1503),
        a = l(7881),
        t = l(9018),
        i = l(5570),
        d = l.n(i),
        o = l(2223),
        n = !0;
      let c = (e) => {
        let { hooks: s = [] } = e,
          [{ query: l = '' }, i] = (0, o.useState)({ query: '' }),
          n = s.filter((e) => {
            let { id: s, name: r } = e;
            return (
              s.toLowerCase().includes(l.toLowerCase()) ||
              r.toLowerCase().includes(l.toLowerCase())
            );
          });
        return (0, r.jsx)(t.U, {
          query: l,
          setState: i,
          id: 'react-hooks',
          emoji: '\uD83E\uDE9D',
          title: 'atomic/hooks',
          description:
            'is a collection of reusable React hooks built for simplicity, efficiency, and ease of integration.',
          children: (0, r.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, r.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, r.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, r.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, r.jsx)('span', {
                        className: 'capitalize',
                        children: 'Hooks',
                      }),
                      ' (',
                      n.length,
                      ')',
                    ],
                  }),
                  n.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)('div', {
                          className:
                            'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: n.map((e) => {
                            let {
                              id: s = '',
                              emoji: l = '',
                              group: a,
                              name: t = '',
                            } = e;
                            return (0, r.jsx)(
                              d(),
                              {
                                href: '#'.concat(s),
                                children: (0, r.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, r.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, r.jsx)('p', {
                                        className: 'text-2xl',
                                        children: l,
                                      }),
                                      (0, r.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, r.jsx)('p', {
                                            className: 'text-xs capitalize',
                                            children: a,
                                          }),
                                          (0, r.jsx)('p', {
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
                              s
                            );
                          }),
                        }),
                        (0, r.jsx)('div', {
                          className: 'flex flex-col gap-y-8',
                          children: n.map((e) => {
                            let {
                              id: s = '',
                              emoji: l = '',
                              group: t = '',
                              name: i = '',
                              code: d = '',
                            } = e;
                            return (0, r.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, r.jsx)(a.C, {
                                  id: s,
                                  emoji: l,
                                  group: t,
                                  name: i,
                                  code: d,
                                  codeOnly: !0,
                                }),
                              },
                              s
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
    9291: (e, s, l) => {
      'use strict';
      l.d(s, { V: () => i });
      var r = l(1503),
        a = l(2223),
        t = l(6259);
      let i = (e) => {
        let { code: s, lang: l } = e,
          [i, d] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              d(await (0, t.Yz)(s, { lang: l, theme: 'github-dark' }));
            })();
          }),
          (0, r.jsx)('div', {
            className:
              'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: i },
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [5570, 6259, 8372, 9018, 636, 6593, 8792], () => e((e.s = 2617))),
      (_N_E = e.O()));
  },
]);
