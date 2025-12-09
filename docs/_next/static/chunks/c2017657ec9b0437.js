(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  41301,
  (e) => {
    'use strict';
    var s = e.i(28626),
      t = e.i(39186),
      l = e.i(53791),
      a = e.i(24412);
    let i = ({ name: e = '', code: i = '' }) => {
      let [r, c] = (0, a.useState)('');
      return (
        (0, a.useEffect)(() => {
          c((0, l.default)(window).sanitize(i));
        }, [i]),
        (0, s.jsx)('button', {
          type: 'button',
          title: e,
          className: 'cursor-pointer',
          onClick: () => {
            (0, t.copy)(i);
          },
          children: (0, s.jsx)('div', {
            className:
              'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 p-2 shadow md:p-4 lg:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, s.jsx)('div', {
              className:
                'h-fit w-fit [&>svg]:h-8 [&>svg]:fill-current [&>svg]:text-neutral-900 dark:[&>svg]:text-neutral-100',
              dangerouslySetInnerHTML: { __html: r },
            }),
          }),
        })
      );
    };
    var r = e.i(60373),
      c = e.i(86861);
    let n = (0, e.i(56440).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/assets/icons/index.tsx')}`;
        },
      }.url
    );
    (console.log((0, c.join)((0, c.dirname)(n), '../../../..')),
      e.s(
        [
          '__N_SSG',
          () => !0,
          'default',
          0,
          ({ icons: e = [] }) => {
            let [{ query: t = '' }, l] = (0, a.useState)({ query: '' }),
              c = e.filter(
                ({ id: e, name: s }) =>
                  e.toLowerCase().includes(t.toLowerCase()) ||
                  s.toLowerCase().includes(t.toLowerCase())
              );
            return (0, s.jsx)(r.PageTemplate, {
              query: t,
              setState: l,
              id: 'assets-icons',
              emoji: '🖼️',
              title: 'atomic/icons',
              description:
                'is a free collection of carefully crafted SVG icons, designed to enhance modern user interfaces with scalable visuals.',
              children: (0, s.jsx)('section', {
                className: 'py-8 md:py-16',
                children: (0, s.jsx)('div', {
                  className: 'container mx-auto px-8',
                  children: (0, s.jsxs)('div', {
                    className: 'flex flex-col gap-y-4 md:gap-y-8',
                    children: [
                      (0, s.jsxs)('h2', {
                        className: 'text-2xl font-bold',
                        children: [
                          (0, s.jsx)('span', {
                            className: 'capitalize',
                            children: 'Icons',
                          }),
                          ' (',
                          c.length,
                          ')',
                        ],
                      }),
                      c.length > 0 &&
                        (0, s.jsx)('div', {
                          className:
                            'grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10',
                          children: c.map(
                            ({ id: e = '', name: t = '', code: l }) =>
                              (0, s.jsxs)(
                                'div',
                                {
                                  className: 'col-span-1 flex flex-col gap-y-2',
                                  children: [
                                    (0, s.jsx)(i, { name: t, code: l }),
                                    (0, s.jsx)('p', {
                                      title: 'name',
                                      className:
                                        'w-full truncate text-center text-xs',
                                      children: t,
                                    }),
                                  ],
                                },
                                e
                              )
                          ),
                        }),
                    ],
                  }),
                }),
              }),
            });
          },
        ],
        41301
      ));
  },
  43945,
  (e, s, t) => {
    let l = '/assets/icons';
    ((window.__NEXT_P = window.__NEXT_P || []).push([l, () => e.r(41301)]),
      s.hot &&
        s.hot.dispose(function () {
          window.__NEXT_P.push([l]);
        }));
  },
  85086,
  (e) => {
    e.v((s) =>
      Promise.all(
        ['static/chunks/57783d47027cc922.js'].map((s) => e.l(s))
      ).then(() => s(80863))
    );
  },
  28500,
  (e) => {
    e.v((s) =>
      Promise.all(
        ['static/chunks/2872efa9c4694401.js'].map((s) => e.l(s))
      ).then(() => s(83193))
    );
  },
]);
