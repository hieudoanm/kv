(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  15930,
  (e) => {
    'use strict';
    var a = e.i(68601),
      l = e.i(75705),
      s = e.i(53791);
    let t = ({ code: e = '' }) => {
      let [t, d] = (0, l.useState)('');
      return (
        (0, l.useEffect)(() => {
          d((0, s.default)(window).sanitize(e));
        }, [e]),
        (0, a.jsx)('div', { dangerouslySetInnerHTML: { __html: t } })
      );
    };
    var d = e.i(60373),
      i = e.i(76476),
      r = e.i(93967);
    let n = (0, e.i(71805).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/ui/templates/index.tsx')}`;
        },
      }.url
    );
    console.log((0, r.join)((0, r.dirname)(n), '../../../..'));
    let o = {
      blog: '📝',
      blogs: '📚',
      chat: '💬',
      dashboard: '📊',
      error: '❌',
      landing: '🏠',
      wallet: '💰',
    };
    e.s(
      [
        '__N_SSG',
        () => !0,
        'default',
        0,
        ({ templates: e = [] }) => {
          let [{ query: s = '' }, r] = (0, l.useState)({ query: '' }),
            n = e.filter(
              ({ id: e, name: a }) =>
                e.toLowerCase().includes(s.toLowerCase()) ||
                a.toLowerCase().includes(s.toLowerCase())
            );
          return (0, a.jsx)(d.PageTemplate, {
            query: s,
            setState: r,
            id: 'ui-templates',
            emoji: '📝',
            title: 'atomic/templates',
            description:
              'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
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
                          children: 'Templates',
                        }),
                        ' (',
                        n.length,
                        ')',
                      ],
                    }),
                    n.length > 0 &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)('div', {
                            className:
                              'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                            children: n.map(
                              ({ id: e = '', group: l = '', name: s = '' }) =>
                                (0, a.jsx)(
                                  i.default,
                                  {
                                    href: `#${e}`,
                                    children: (0, a.jsx)('div', {
                                      className: 'col-span-1',
                                      children: (0, a.jsxs)('div', {
                                        className:
                                          'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                        children: [
                                          (0, a.jsx)('p', {
                                            className: 'text-2xl',
                                            children: o[e] ?? '',
                                          }),
                                          (0, a.jsxs)('div', {
                                            className:
                                              'flex flex-col gap-y-0.25',
                                            children: [
                                              (0, a.jsx)('p', {
                                                className: 'text-xs capitalize',
                                                children: l,
                                              }),
                                              (0, a.jsx)('p', {
                                                className:
                                                  'font-semibold capitalize',
                                                children: s,
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
                          (0, a.jsx)('div', {
                            className: 'flex flex-col gap-y-4 md:gap-y-8',
                            children: n.map(
                              ({ id: e = '', name: l = '', code: s }) =>
                                (0, a.jsx)(
                                  i.default,
                                  {
                                    href: `/ui/templates/${e}`,
                                    children: (0, a.jsxs)('div', {
                                      id: e,
                                      className:
                                        'flex flex-col gap-y-4 md:gap-y-8',
                                      children: [
                                        (0, a.jsxs)('h2', {
                                          className:
                                            'text-2xl font-bold capitalize',
                                          children: ['📝 ', l],
                                        }),
                                        (0, a.jsx)('div', {
                                          className:
                                            'h-128 overflow-hidden rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                                          children: (0, a.jsx)(t, { code: s }),
                                        }),
                                      ],
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
      ],
      15930
    );
  },
  25149,
  (e, a, l) => {
    let s = '/ui/templates';
    ((window.__NEXT_P = window.__NEXT_P || []).push([s, () => e.r(15930)]),
      a.hot &&
        a.hot.dispose(function () {
          window.__NEXT_P.push([s]);
        }));
  },
  28806,
  (e) => {
    e.v((a) =>
      Promise.all(
        ['static/chunks/889d7436c8dbb3d7.js'].map((a) => e.l(a))
      ).then(() => a(41618))
    );
  },
  27403,
  (e) => {
    e.v((a) =>
      Promise.all(
        ['static/chunks/ae3ae7cea34a41a9.js'].map((a) => e.l(a))
      ).then(() => a(45367))
    );
  },
]);
