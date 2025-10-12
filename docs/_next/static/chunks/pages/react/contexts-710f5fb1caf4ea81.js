(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8048],
  {
    964: (e, s, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/contexts',
        function () {
          return r(1792);
        },
      ]);
    },
    1792: (e, s, r) => {
      'use strict';
      (r.r(s), r.d(s, { __N_SSG: () => c, default: () => o }));
      var t = r(7765),
        l = r(7633),
        a = r(699),
        i = r(1385),
        d = r.n(i),
        n = r(5977),
        c = !0;
      let o = (e) => {
        let { contexts: s = [] } = e,
          [{ query: r = '' }, i] = (0, n.useState)({ query: '' }),
          c = s.filter((e) => {
            let { id: s, name: t } = e;
            return (
              s.toLowerCase().includes(r.toLowerCase()) ||
              t.toLowerCase().includes(r.toLowerCase())
            );
          });
        return (0, t.jsx)(a.U, {
          query: r,
          setState: i,
          id: 'react-contexts',
          emoji: '\uD83D\uDD17',
          title: 'atomic/contexts',
          description:
            'are essential React context providers focused on simplicity, reusability, and scalability for better state management.',
          children: (0, t.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, t.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, t.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, t.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, t.jsx)('span', {
                        className: 'capitalize',
                        children: 'Contexts',
                      }),
                      ' (',
                      c.length,
                      ')',
                    ],
                  }),
                  c.length > 0 &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
                          children: c.map((e) => {
                            let {
                              id: s = '',
                              emoji: r = '',
                              group: l,
                              name: a = '',
                            } = e;
                            return (0, t.jsx)(
                              d(),
                              {
                                href: '#'.concat(s),
                                children: (0, t.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, t.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, t.jsx)('p', {
                                        className: 'text-2xl',
                                        children: r,
                                      }),
                                      (0, t.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, t.jsx)('p', {
                                            className: 'text-xs capitalize',
                                            children: l,
                                          }),
                                          (0, t.jsx)('p', {
                                            className:
                                              'font-semibold capitalize',
                                            children: a,
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
                        (0, t.jsx)('div', {
                          className: 'flex flex-col gap-y-8',
                          children: c.map((e) => {
                            let {
                              id: s = '',
                              emoji: r = '',
                              group: a = '',
                              name: i = '',
                              code: d = '',
                            } = e;
                            return (0, t.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, t.jsx)(l.C, {
                                  id: s,
                                  emoji: r,
                                  group: a,
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
    4192: (e, s, r) => {
      'use strict';
      r.d(s, { C: () => t });
      let t = (e) => {
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
    7633: (e, s, r) => {
      'use strict';
      r.d(s, { C: () => n });
      var t = r(7765),
        l = r(4192),
        a = r(8809),
        i = r(5977),
        d = r(8992);
      let n = (e) => {
        let {
            id: s = '',
            emoji: r = '',
            group: n = '',
            name: c = '',
            code: o = '',
            codeOnly: u = !1,
          } = e,
          [x, p] = (0, i.useState)(''),
          [h, m] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            p((0, a.A)(window).sanitize(o));
          }, [o]),
          (0, t.jsxs)('div', {
            id: s,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, t.jsx)('span', {
                        className: 'text-4xl',
                        children: r,
                      }),
                      (0, t.jsxs)('div', {
                        children: [
                          (0, t.jsx)('p', {
                            className: 'text-xs capitalize',
                            children: n,
                          }),
                          (0, t.jsx)('h3', {
                            className: 'text-xl font-bold md:text-2xl',
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      u &&
                        (0, t.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, l.C)(o),
                          children: 'Copy',
                        }),
                      !u &&
                        (0, t.jsx)('button', {
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
              (0, t.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, t.jsx)(d.V, { code: o, lang: 'tsx' })
                  : (0, t.jsx)(t.Fragment, {
                      children: h
                        ? (0, t.jsx)('div', {
                            className: 'w-full p-4 md:p-8',
                            dangerouslySetInnerHTML: { __html: x },
                          })
                        : (0, t.jsx)(d.V, { code: o, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    8992: (e, s, r) => {
      'use strict';
      r.d(s, { V: () => i });
      var t = r(7765),
        l = r(5977),
        a = r(4119);
      let i = (e) => {
        let { code: s, lang: r } = e,
          [i, d] = (0, l.useState)('');
        return (
          (0, l.useEffect)(() => {
            (async () => {
              d(await (0, a.Yz)(s, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, t.jsx)('div', {
            className:
              'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: i },
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [1385, 4119, 8809, 699, 636, 6593, 8792], () => e((e.s = 964))),
      (_N_E = e.O()));
  },
]);
