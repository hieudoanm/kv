(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    2780: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(7523);
        },
      ]);
    },
    7523: (e, a, t) => {
      'use strict';
      (t.r(a), t.d(a, { default: () => c }));
      var s = t(1503),
        l = t(9018),
        r = t(5570),
        d = t.n(r);
      let c = () =>
        (0, s.jsx)(l.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'atomic/code',
          emoji: '⚛️',
          title: 'atomic/code',
          description:
            'A modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.',
          children: (0, s.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, s.jsx)('div', {
              className: 'container mx-auto px-4 md:px-8',
              children: (0, s.jsxs)('div', {
                className: 'flex flex-col gap-y-8 md:gap-y-16',
                children: [
                  (0, s.jsx)('h2', {
                    className:
                      'text-center text-2xl font-extrabold md:text-3xl md:font-black',
                    children: 'Supercharge your Web App with Atomic Code',
                  }),
                  (0, s.jsx)('div', {
                    className:
                      'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                    children: l.l.map((e) => {
                      let {
                        href: a = '',
                        emoji: t = '',
                        full: l = '',
                        description: r = '',
                      } = e;
                      return (0, s.jsx)(
                        'div',
                        {
                          className: 'col-span-1',
                          children: (0, s.jsxs)('div', {
                            className:
                              'flex flex-col gap-y-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                            children: [
                              (0, s.jsx)(d(), {
                                href: a,
                                children: (0, s.jsxs)('h2', {
                                  className:
                                    'text-center text-xl font-semibold',
                                  children: [
                                    t,
                                    ' ',
                                    (0, s.jsx)('span', {
                                      className: 'border-b border-dotted',
                                      children: l,
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)('p', {
                                className:
                                  'mx-auto w-full max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-400',
                                children: r,
                              }),
                            ],
                          }),
                        },
                        a
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
    },
  },
  (e) => {
    (e.O(0, [5570, 9018, 636, 6593, 8792], () => e((e.s = 2780))),
      (_N_E = e.O()));
  },
]);
