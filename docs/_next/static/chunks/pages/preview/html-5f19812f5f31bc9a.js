(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4268],
  {
    3876: (e, d, l) => {
      'use strict';
      (l.r(d), l.d(d, { default: () => t }));
      var a = l(7765),
        i = l(699),
        r = l(5977),
        s = l(8809);
      let t = () => {
        let [{ code: e, html: d }, l] = (0, r.useState)({ code: '', html: '' });
        return (
          (0, r.useEffect)(() => {
            let d = (0, s.A)(window);
            l((l) => ({ ...l, html: d.sanitize(e) }));
          }, [e]),
          (0, a.jsx)(i.U, {
            query: '',
            setState: () => {},
            id: 'preview-html',
            emoji: '\uD83E\uDDEA',
            title: 'atomic/preview',
            description:
              'Live preview of atomic design components rendered as HTML',
            children: (0, a.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, a.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, a.jsxs)('div', {
                  className:
                    'grid grid-cols-1 divide-x divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-neutral-100/10',
                  children: [
                    (0, a.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, a.jsx)('textarea', {
                        rows: 10,
                        id: 'code',
                        placeholder: 'HTML Code',
                        className: 'w-full p-2 focus:outline-none md:p-4',
                        value: e,
                        onChange: (d) => {
                          let a = d.target.value,
                            i = (0, s.A)(window).sanitize(e);
                          l((e) => ({ ...e, code: a, html: i }));
                        },
                      }),
                    }),
                    (0, a.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, a.jsx)('div', {
                        className: 'h-full w-full p-2 md:p-4',
                        dangerouslySetInnerHTML: { __html: d },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    9776: (e, d, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/preview/html',
        function () {
          return l(3876);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [1385, 8809, 699, 636, 6593, 8792], () => e((e.s = 9776))),
      (_N_E = e.O()));
  },
]);
