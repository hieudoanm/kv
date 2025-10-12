(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2336],
  {
    2408: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return r(3831);
        },
      ]);
    },
    3268: (e, t, r) => {
      'use strict';
      r.d(t, { q: () => a });
      var s = r(1503);
      let a = () =>
        (0, s.jsx)('div', {
          className:
            'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
          children: (0, s.jsx)('div', {
            className:
              'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
          }),
        });
    },
    3831: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => l }));
      var s = r(1503),
        a = r(7478);
      let l = () =>
        (0, s.jsx)(a.L, {
          code: '404',
          title: 'Page Not Found',
          message: "Sorry, the page you're looking for doesn't exist.",
          action: 'Go Home',
        });
    },
    5645: (e, t, r) => {
      'use strict';
      r.d(t, { D: () => a });
      var s = r(2223);
      let a = () => {
        let [e, t] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            'light' === localStorage.getItem('theme')
              ? (document.documentElement.classList.remove('dark'), t(!1))
              : (document.documentElement.classList.add('dark'), t(!0));
          }, []),
          {
            darkMode: e,
            toggleDarkMode: () => {
              t((e) => {
                let t = !e;
                return (
                  document.documentElement.classList.toggle('dark', t),
                  localStorage.setItem('theme', t ? 'dark' : 'light'),
                  t
                );
              });
            },
          }
        );
      };
    },
    7478: (e, t, r) => {
      'use strict';
      r.d(t, { L: () => o });
      var s = r(1503),
        a = r(3268),
        l = r(5645),
        n = r(5570),
        d = r.n(n);
      let o = (e) => {
        let {
            code: t = '',
            title: r = '',
            message: n = '',
            action: o = '',
          } = e,
          { darkMode: c } = (0, l.D)();
        return (
          console.info('darkMode', c),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(a.q, {}),
              (0, s.jsx)('div', {
                className:
                  'flex min-h-screen items-center justify-center px-4 text-neutral-900 dark:text-neutral-100',
                children: (0, s.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 text-center',
                  children: [
                    (0, s.jsx)('h1', {
                      className: 'text-9xl font-extrabold',
                      children: t,
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex flex-col gap-y-2',
                      children: [
                        (0, s.jsx)('p', {
                          className: 'text-2xl font-semibold',
                          children: r,
                        }),
                        (0, s.jsx)('p', { children: n }),
                        (0, s.jsx)(d(), {
                          href: '/',
                          children: (0, s.jsxs)('button', {
                            className:
                              'cursor-pointer rounded-lg bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 px-5 py-3 font-semibold text-neutral-100 dark:border-neutral-800 dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                            children: ['\uD83C\uDFE0 ', o],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [5570, 636, 6593, 8792], () => e((e.s = 2408))), (_N_E = e.O()));
  },
]);
