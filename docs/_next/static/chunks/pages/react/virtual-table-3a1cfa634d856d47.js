(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8690],
  {
    3583: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { __N_SSG: () => o, default: () => c }));
      var l = r(7765),
        a = r(5315),
        s = r(5977);
      let n = (e) => {
          let {
              columns: t,
              data: r,
              rowHeight: a,
              height: n,
              renderCell: i,
            } = e,
            d = (0, s.useRef)(null),
            [o, c] = (0, s.useState)(0),
            [u, h] = (0, s.useState)(new Set()),
            [x, m] = (0, s.useState)(null),
            p = r.length * a,
            b = Math.ceil(n / a),
            f = Math.floor(o / a),
            w = Math.min(f + b + 1, r.length),
            g = r.slice(f, w),
            y = (0, s.useCallback)(() => {
              d.current && c(d.current.scrollTop);
            }, []),
            v = (e) => {
              if (!d.current) return;
              let t = d.current,
                r = t.scrollTop,
                l = e * a,
                s = l + a;
              l < r ? (t.scrollTop = l) : s > r + n && (t.scrollTop = s - n);
            },
            j = (e, t) => {
              let r = Math.min(e, t),
                l = Math.max(e, t),
                a = new Set(u);
              for (let e = r; e <= l; e++) a.add(e);
              return a;
            };
          return (
            (0, s.useEffect)(() => {
              let e = d.current;
              if (e)
                return (
                  e.addEventListener('scroll', y),
                  () => e.removeEventListener('scroll', y)
                );
            }, [y]),
            (0, l.jsxs)('div', {
              className:
                'overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800',
              tabIndex: 0,
              onKeyDown: (e) => {
                if (0 === r.length) return;
                let t = null !== x ? x : u.size > 0 ? Math.min(...u) : 0;
                if ('ArrowDown' === e.key) {
                  e.preventDefault();
                  let l = Math.min(t + 1, r.length - 1);
                  (e.shiftKey
                    ? h(j(null != x ? x : l, l))
                    : (h(new Set([l])), m(l)),
                    v(l),
                    m(l));
                }
                if ('ArrowUp' === e.key) {
                  e.preventDefault();
                  let r = Math.max(t - 1, 0);
                  (e.shiftKey
                    ? h(j(null != x ? x : r, r))
                    : (h(new Set([r])), m(r)),
                    v(r),
                    m(r));
                }
              },
              role: 'grid',
              'aria-rowcount': r.length,
              'aria-colcount': t.length,
              children: [
                (0, l.jsx)('table', {
                  className: 'w-full border-collapse',
                  role: 'rowgroup',
                  children: (0, l.jsx)('thead', {
                    children: (0, l.jsx)('tr', {
                      children: t.map((e) => {
                        var t;
                        return (0, l.jsx)(
                          'th',
                          {
                            className:
                              'border-b border-neutral-200 bg-neutral-100 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900',
                            style: {
                              width: null != (t = e.width) ? t : 'auto',
                            },
                            role: 'columnheader',
                            children: e.label,
                          },
                          String(e.key)
                        );
                      }),
                    }),
                  }),
                }),
                (0, l.jsx)('div', {
                  ref: d,
                  className: 'relative overflow-y-auto focus:outline-none',
                  style: { height: n },
                  role: 'rowgroup',
                  children: (0, l.jsx)('div', {
                    className: 'relative',
                    style: { height: p },
                    children: g.map((e, r) => {
                      let s = f + r,
                        n = u.has(s);
                      return (0, l.jsx)(
                        'div',
                        {
                          style: {
                            position: 'absolute',
                            top: s * a,
                            height: a,
                            left: 0,
                            right: 0,
                            display: 'table',
                            width: '100%',
                            tableLayout: 'fixed',
                            background: n ? '#e2e8f0' : void 0,
                            cursor: 'pointer',
                          },
                          onClick: (e) =>
                            ((e, t) => {
                              let r = t.ctrlKey || t.metaKey;
                              (t.shiftKey && null !== x
                                ? h(j(x, e))
                                : (r
                                    ? h((t) => {
                                        let r = new Set(t);
                                        return (
                                          r.has(e) ? r.delete(e) : r.add(e),
                                          r
                                        );
                                      })
                                    : h(new Set([e])),
                                  m(e)),
                                v(e));
                            })(s, e),
                          role: 'row',
                          'aria-selected': n,
                          tabIndex: -1,
                          children: (0, l.jsx)('table', {
                            className: 'w-full border-collapse',
                            role: 'presentation',
                            children: (0, l.jsx)('tbody', {
                              children: (0, l.jsx)('tr', {
                                children: t.map((t) => {
                                  var r;
                                  return (0, l.jsx)(
                                    'td',
                                    {
                                      className:
                                        'border-b border-neutral-200 p-2 text-left dark:border-neutral-800',
                                      style: {
                                        width:
                                          null != (r = t.width) ? r : 'auto',
                                      },
                                      role: 'gridcell',
                                      children: i
                                        ? i(e, t, s, n)
                                        : String(e[t.key]),
                                    },
                                    String(t.key)
                                  );
                                }),
                              }),
                            }),
                          }),
                        },
                        s
                      );
                    }),
                  }),
                }),
              ],
            })
          );
        },
        i = () => {
          let e = Array.from({ length: 1e4 }, (e, t) => ({
            id: t + 1,
            name: 'Person '.concat(t + 1),
            age: 20 + (t % 50),
            email: 'user'.concat(t + 1, '@example.com'),
          }));
          return (0, l.jsx)('div', {
            className: 'w-full',
            children: (0, l.jsx)(n, {
              columns: [
                { key: 'id', label: 'ID', width: '80px' },
                { key: 'name', label: 'Name', width: '160px' },
                { key: 'age', label: 'Age', width: '80px' },
                { key: 'email', label: 'Email' },
              ],
              data: e,
              rowHeight: 40,
              height: 400,
            }),
          });
        };
      var d = r(699),
        o = !0;
      let c = (e) => {
        let { code: t = '' } = e;
        return (0, l.jsx)(d.U, {
          disabledSearch: !0,
          query: 'query',
          setState: () => {},
          id: 'react-virtual-table',
          emoji: '\uD83D\uDCCB',
          title: 'atomic/virtual-table',
          description:
            'is a high-performance virtualized table component for React that supports large datasets by rendering only visible rows. Includes keyboard navigation for row selection (arrow keys) and mouse click to select rows with automatic scrolling to keep the selected row in view.',
          children: (0, l.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, l.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, l.jsx)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: (0, l.jsx)(a.O, {
                  id: 'virtual-table',
                  emoji: '\uD83D\uDCCB',
                  group: 'React',
                  name: 'Virtual Table',
                  code: t,
                  chart: (0, l.jsx)(i, {}),
                }),
              }),
            }),
          }),
        });
      };
    },
    5315: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => n });
      var l = r(7765),
        a = r(5977),
        s = r(8992);
      let n = (e) => {
        let {
            id: t = '',
            emoji: r = '',
            group: n = '',
            name: i = '',
            code: d = '',
            chart: o = (0, l.jsx)(l.Fragment, {}),
          } = e,
          [c, u] = (0, a.useState)(!0);
        return (0, l.jsxs)('div', {
          id: t,
          className: 'flex flex-col gap-y-4 md:gap-y-8',
          children: [
            (0, l.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2',
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    (0, l.jsx)('span', { className: 'text-4xl', children: r }),
                    (0, l.jsxs)('div', {
                      children: [
                        (0, l.jsx)('p', {
                          className: 'text-xs capitalize',
                          children: n,
                        }),
                        (0, l.jsx)('h3', {
                          className: 'text-xl font-bold capitalize md:text-2xl',
                          children: i,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => u((e) => !e),
                  children: c ? 'Preview' : 'Code',
                }),
              ],
            }),
            (0, l.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: c
                ? (0, l.jsx)('div', {
                    className:
                      'flex w-full items-center justify-center p-4 md:p-8',
                    children: o,
                  })
                : (0, l.jsx)(s.V, { code: d, lang: 'html' }),
            }),
          ],
        });
      };
    },
    8622: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/virtual-table',
        function () {
          return r(3583);
        },
      ]);
    },
    8992: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => n });
      var l = r(7765),
        a = r(5977),
        s = r(4119);
      let n = (e) => {
        let { code: t, lang: r } = e,
          [n, i] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              i(await (0, s.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, l.jsx)('div', {
            className:
              'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: n },
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [1385, 4119, 699, 636, 6593, 8792], () => e((e.s = 8622))),
      (_N_E = e.O()));
  },
]);
