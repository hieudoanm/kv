(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  87856,
  (e) => {
    'use strict';
    var t = e.i(28626),
      a = e.i(60373),
      s = e.i(82441);
    e.s([
      'default',
      0,
      () =>
        (0, t.jsx)(a.PageTemplate, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'atomic/code',
          emoji: '⚛️',
          title: 'atomic/code',
          description:
            'A modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.',
          children: (0, t.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, t.jsx)('div', {
              className: 'container mx-auto px-4 md:px-8',
              children: (0, t.jsxs)('div', {
                className: 'flex flex-col gap-y-8 md:gap-y-16',
                children: [
                  (0, t.jsx)('h2', {
                    className:
                      'text-center text-2xl font-extrabold md:text-3xl md:font-black',
                    children: 'Supercharge your Web App with Atomic Code',
                  }),
                  (0, t.jsx)('div', {
                    className:
                      'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                    children: a.NAVBAR_LINKS.map(
                      ({
                        href: e = '',
                        emoji: a = '',
                        full: l = '',
                        description: d = '',
                      }) =>
                        (0, t.jsx)(
                          'div',
                          {
                            className: 'col-span-1',
                            children: (0, t.jsxs)('div', {
                              className:
                                'flex flex-col gap-y-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                              children: [
                                (0, t.jsx)(s.default, {
                                  href: e,
                                  children: (0, t.jsxs)('h2', {
                                    className:
                                      'text-center text-xl font-semibold',
                                    children: [
                                      a,
                                      ' ',
                                      (0, t.jsx)('span', {
                                        className: 'border-b border-dotted',
                                        children: l,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)('p', {
                                  className:
                                    'mx-auto w-full max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-400',
                                  children: d,
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
            }),
          }),
        }),
    ]);
  },
  55075,
  (e, t, a) => {
    ((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(87856)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push(['/']);
        }));
  },
  85086,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/57783d47027cc922.js'].map((t) => e.l(t))
      ).then(() => t(80863))
    );
  },
  28500,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2872efa9c4694401.js'].map((t) => e.l(t))
      ).then(() => t(83193))
    );
  },
]);
