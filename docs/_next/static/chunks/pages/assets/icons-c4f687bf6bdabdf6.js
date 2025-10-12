(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2636],
  {
    1672: (e, s, t) => {
      'use strict';
      t.d(s, { C: () => l });
      let l = (e) => {
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
    6243: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/assets/icons',
        function () {
          return t(8752);
        },
      ]);
    },
    8752: (e, s, t) => {
      'use strict';
      (t.r(s), t.d(s, { __N_SSG: () => o, default: () => d }));
      var l = t(1503),
        r = t(1672),
        a = t(8372),
        i = t(2223);
      let n = (e) => {
        let { name: s = '', code: t = '' } = e,
          [n, c] = (0, i.useState)('');
        return (
          (0, i.useEffect)(() => {
            c((0, a.A)(window).sanitize(t));
          }, [t]),
          (0, l.jsx)('button', {
            type: 'button',
            title: s,
            className: 'cursor-pointer',
            onClick: () => {
              (0, r.C)(t);
            },
            children: (0, l.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 p-2 shadow md:p-4 lg:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, l.jsx)('div', {
                className:
                  'h-fit w-fit [&>svg]:h-8 [&>svg]:fill-current [&>svg]:text-neutral-900 dark:[&>svg]:text-neutral-100',
                dangerouslySetInnerHTML: { __html: n },
              }),
            }),
          })
        );
      };
      var c = t(9018),
        o = !0;
      let d = (e) => {
        let { icons: s = [] } = e,
          [{ query: t = '' }, r] = (0, i.useState)({ query: '' }),
          a = s.filter((e) => {
            let { id: s, name: l } = e;
            return (
              s.toLowerCase().includes(t.toLowerCase()) ||
              l.toLowerCase().includes(t.toLowerCase())
            );
          });
        return (0, l.jsx)(c.U, {
          query: t,
          setState: r,
          id: 'assets-icons',
          emoji: '\uD83D\uDDBC️',
          title: 'atomic/icons',
          description:
            'is a free collection of carefully crafted SVG icons, designed to enhance modern user interfaces with scalable visuals.',
          children: (0, l.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, l.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, l.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, l.jsx)('span', {
                        className: 'capitalize',
                        children: 'Icons',
                      }),
                      ' (',
                      a.length,
                      ')',
                    ],
                  }),
                  a.length > 0 &&
                    (0, l.jsx)('div', {
                      className:
                        'grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10',
                      children: a.map((e) => {
                        let { id: s = '', name: t = '', code: r } = e;
                        return (0, l.jsxs)(
                          'div',
                          {
                            className: 'col-span-1 flex flex-col gap-y-2',
                            children: [
                              (0, l.jsx)(n, { name: t, code: r }),
                              (0, l.jsx)('p', {
                                title: 'name',
                                className:
                                  'w-full truncate text-center text-xs',
                                children: t,
                              }),
                            ],
                          },
                          s
                        );
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      };
    },
  },
  (e) => {
    (e.O(0, [5570, 8372, 9018, 636, 6593, 8792], () => e((e.s = 6243))),
      (_N_E = e.O()));
  },
]);
