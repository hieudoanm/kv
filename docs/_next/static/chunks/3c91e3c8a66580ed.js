(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  37604,
  (e) => {
    'use strict';
    var s = e.i(94601),
      r = e.i(39186),
      l = e.i(54402),
      t = e.i(36960),
      i = e.i(54035);
    e.s([
      'Code',
      0,
      ({
        id: e = '',
        emoji: a = '',
        group: d = '',
        name: o = '',
        code: n = '',
        codeOnly: c = !1,
      }) => {
        let [u, p] = (0, t.useState)(''),
          [x, m] = (0, t.useState)(!0);
        return (
          (0, t.useEffect)(() => {
            p((0, l.default)(window).sanitize(n));
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
                        children: a,
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
                          onClick: () => (0, r.copy)(n),
                          children: 'Copy',
                        }),
                      !c &&
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => m((e) => !e),
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
                  ? (0, s.jsx)(i.Shiki, { code: n, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: x
                        ? (0, s.jsx)('div', {
                            className: 'w-full p-4 md:p-8',
                            dangerouslySetInnerHTML: { __html: u },
                          })
                        : (0, s.jsx)(i.Shiki, { code: n, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      },
    ]);
  },
  89087,
  (e) => {
    'use strict';
    e.i(32869);
    var s = e.i(94601),
      r = e.i(37604),
      l = e.i(54402),
      t = e.i(36960);
    let i = ({ name: e = '', code: r = '', onClose: i = () => {} }) => {
      let [a, d] = (0, t.useState)('');
      return (
        (0, t.useEffect)(() => {
          d((0, l.default)(window).sanitize(r));
        }, [r]),
        (0, s.jsxs)('div', {
          className:
            'fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen flex-col bg-white dark:bg-neutral-900',
          children: [
            (0, s.jsx)('div', {
              className: 'border-b border-neutral-200 dark:border-neutral-800',
              children: (0, s.jsx)('div', {
                className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
                children: (0, s.jsxs)('div', {
                  className: 'flex w-full items-center justify-between',
                  children: [
                    (0, s.jsx)('p', { className: 'capitalize', children: e }),
                    (0, s.jsx)('button', {
                      type: 'button',
                      className: 'cursor-pointer',
                      onClick: i,
                      children: 'Close',
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsx)('div', {
              className: 'grow overflow-y-auto p-4 md:p-8',
              children: (0, s.jsx)('div', {
                className: 'w-full',
                dangerouslySetInnerHTML: { __html: a },
              }),
            }),
          ],
        })
      );
    };
    var a = e.i(60373),
      d = e.i(88204);
    let o = (0, e.i(50989).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/ui/templates/[id]/index.tsx')}`;
        },
      }.url
    );
    (console.log((0, d.join)((0, d.dirname)(o), '../../../../..')),
      e.s(
        [
          '__N_SSG',
          () => !0,
          'default',
          0,
          ({ template: e = { id: '', name: '', code: '' } }) => {
            let { value: l, toggle: d } = ((e) => {
                let [s, r] = (0, t.useState)(!!e);
                return {
                  value: s,
                  toggle: (0, t.useCallback)(() => {
                    r((e) => !e);
                  }, []),
                  setValue: r,
                };
              })(!1),
              { id: o = '', name: n = '', code: c = '' } = e;
            return (0, s.jsxs)(a.PageTemplate, {
              disabledSearch: !0,
              query: '',
              setState: () => {},
              id: 'templates',
              emoji: '📝',
              title: 'atomic/templates',
              description:
                'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
              children: [
                (0, s.jsx)('section', {
                  className: 'py-8 md:py-16',
                  children: (0, s.jsx)('div', {
                    className: 'container mx-auto px-8',
                    children: (0, s.jsxs)('div', {
                      className: 'flex flex-col gap-y-4 md:gap-y-8',
                      children: [
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => d(),
                          children: 'Full Screen',
                        }),
                        (0, s.jsx)(r.Code, {
                          id: o,
                          emoji: '📝',
                          group: 'Template',
                          name: n,
                          code: c,
                        }),
                      ],
                    }),
                  }),
                }),
                l && (0, s.jsx)(i, { name: n, code: c, onClose: () => d() }),
              ],
            });
          },
        ],
        89087
      ));
  },
  97250,
  (e, s, r) => {
    let l = '/ui/templates/[id]';
    ((window.__NEXT_P = window.__NEXT_P || []).push([l, () => e.r(89087)]),
      s.hot &&
        s.hot.dispose(function () {
          window.__NEXT_P.push([l]);
        }));
  },
]);
