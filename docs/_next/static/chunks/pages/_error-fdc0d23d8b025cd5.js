(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2731],
  {
    4517: (e, t, r) => {
      'use strict';
      r.d(t, { D: () => l });
      var a = r(5977);
      let l = () => {
        let [e, t] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
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
    4622: (e, t, r) => {
      'use strict';
      r.d(t, { L: () => o });
      var a = r(7765),
        l = r(6140),
        s = r(4517),
        n = r(1385),
        d = r.n(n);
      let o = (e) => {
        let {
            code: t = '',
            title: r = '',
            message: n = '',
            action: o = '',
          } = e,
          { darkMode: c } = (0, s.D)();
        return (
          console.info('darkMode', c),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.q, {}),
              (0, a.jsx)('div', {
                className:
                  'flex min-h-screen items-center justify-center px-4 text-neutral-900 dark:text-neutral-100',
                children: (0, a.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 text-center',
                  children: [
                    (0, a.jsx)('h1', {
                      className: 'text-9xl font-extrabold',
                      children: t,
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex flex-col gap-y-2',
                      children: [
                        (0, a.jsx)('p', {
                          className: 'text-2xl font-semibold',
                          children: r,
                        }),
                        (0, a.jsx)('p', { children: n }),
                        (0, a.jsx)(d(), {
                          href: '/',
                          children: (0, a.jsxs)('button', {
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
    6140: (e, t, r) => {
      'use strict';
      r.d(t, { q: () => l });
      var a = r(7765);
      let l = () =>
        (0, a.jsx)('div', {
          className:
            'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
          children: (0, a.jsx)('div', {
            className:
              'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
          }),
        });
    },
    6445: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => s }));
      var a = r(7765),
        l = r(4622);
      let s = () =>
        (0, a.jsx)(l.L, {
          code: '500',
          title: 'Internal Server Error',
          message: 'Something went wrong on our end. Please try again later.',
          action: 'Go Home',
        });
    },
    9173: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return r(6445);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [1385, 636, 6593, 8792], () => e((e.s = 9173))), (_N_E = e.O()));
  },
]);
