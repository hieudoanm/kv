'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9018],
  {
    3268: (e, t, r) => {
      r.d(t, { q: () => s });
      var a = r(1503);
      let s = () =>
        (0, a.jsx)('div', {
          className:
            'fixed top-0 right-0 bottom-0 left-0 -z-10 m-auto flex w-screen items-center justify-center bg-white dark:bg-neutral-900',
          children: (0, a.jsx)('div', {
            className:
              'aspect-square w-full max-w-xl bg-[radial-gradient(#ffe4ec_0,_transparent_72%)] dark:bg-[radial-gradient(#510424_0,_transparent_72%)]',
          }),
        });
    },
    5645: (e, t, r) => {
      r.d(t, { D: () => s });
      var a = r(2223);
      let s = () => {
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
    9018: (e, t, r) => {
      r.d(t, { l: () => f, U: () => b });
      var a = r(1503);
      let s = (e) => {
        let { title: t = '' } = e;
        return (0, a.jsx)('footer', {
          className:
            'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, a.jsx)('div', {
            className: 'container mx-auto px-8 py-4',
            children: (0, a.jsxs)('p', {
              className: 'text-center',
              children: [
                '\xa9 ',
                new Date().getFullYear(),
                ' ⚛️ ',
                (0, a.jsx)('strong', { children: t }),
              ],
            }),
          }),
        });
      };
      var l = r(5570),
        i = r.n(l);
      let o = (e) => {
        let { emoji: t = '', title: r = '', description: s = '' } = e;
        return (0, a.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, a.jsx)('div', {
            className: 'container mx-auto px-8',
            children: (0, a.jsxs)('div', {
              className:
                'flex flex-col items-center justify-center gap-y-4 md:gap-y-8',
              children: [
                (0, a.jsxs)('h1', {
                  className:
                    'text-4xl font-black whitespace-nowrap md:text-5xl',
                  children: [
                    t,
                    ' ',
                    (0, a.jsx)('span', {
                      className:
                        'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                      children: r,
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  className:
                    'flex w-full max-w-xl flex-col gap-y-4 text-center md:gap-y-8',
                  children: (0, a.jsx)('p', {
                    className: 'text-neutral-900 dark:text-neutral-100',
                    children: s,
                  }),
                }),
                (0, a.jsx)(i(), {
                  href: 'https://github.com/hieudoanm/atomic',
                  target: '_blank',
                  children: (0, a.jsx)('button', {
                    className:
                      'cursor-pointer rounded-lg bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 px-5 py-3 font-semibold text-neutral-100 dark:border-neutral-800 dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                    children: '⭐ GitHub',
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var n = r(5645);
      let d = (e) => {
          let { checked: t = !1, onChange: r = () => {} } = e;
          return (0, a.jsxs)('label', {
            'aria-label': 'Toggle',
            className:
              'relative block h-8 w-14 rounded-full bg-neutral-200 bg-gradient-to-r transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:from-red-600 has-checked:via-purple-600 has-checked:to-blue-600 dark:bg-neutral-800 dark:has-checked:from-red-700 dark:has-checked:via-purple-700 dark:has-checked:to-blue-700',
            children: [
              (0, a.jsx)('input', {
                type: 'checkbox',
                checked: t,
                className: 'peer sr-only',
                onChange: r,
              }),
              (0, a.jsx)('span', {
                className:
                  'absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900',
              }),
            ],
          });
        },
        c = {
          assets: '\uD83D\uDDBC️',
          react: '⚛️',
          ui: '\uD83C\uDFA8',
          tools: '\uD83D\uDEE0️',
        },
        u = (e) => {
          let { links: t } = e;
          return (0, a.jsx)('div', {
            className: 'inline-block md:hidden',
            children: (0, a.jsxs)('div', {
              className: 'group relative inline-block text-left',
              children: [
                (0, a.jsx)('button', {
                  type: 'button',
                  className:
                    'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
                  children: (0, a.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 448 512',
                    className: 'w-4',
                    fill: 'currentColor',
                    children: (0, a.jsx)('path', {
                      d: 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z',
                    }),
                  }),
                }),
                (0, a.jsx)('div', {
                  className:
                    'invisible absolute left-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                  children: t.map((e) => {
                    let {
                      id: t = '',
                      href: r = '',
                      emoji: s = '',
                      text: l = '',
                    } = e;
                    return (0, a.jsxs)(
                      i(),
                      {
                        href: r,
                        className:
                          'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                        children: [s, ' ', l],
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { links: t = [] } = e,
            r = Array.from(
              new Set(
                t.map((e) => {
                  let { group: t } = e;
                  return t;
                })
              )
            ).map((e) => ({
              group: e,
              links: t.filter((t) => {
                let { group: r } = t;
                return e === r;
              }),
            }));
          return (0, a.jsx)('div', {
            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
            children: r.map((e) => {
              var t;
              let { group: r, links: s = [] } = e;
              return (0, a.jsxs)(
                'div',
                {
                  className: 'group relative inline-block text-left',
                  children: [
                    (0, a.jsxs)('button', {
                      type: 'button',
                      className: 'truncate text-sm md:text-base',
                      children: [
                        null != (t = c[r]) ? t : '',
                        ' ',
                        (0, a.jsxs)('span', {
                          className: 'hidden lg:inline',
                          children: [r, ' (', s.length, ')'],
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'invisible absolute right-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                      children: s.map((e) => {
                        let {
                          id: t = '',
                          href: r = '',
                          emoji: s = '',
                          text: l = '',
                        } = e;
                        return (0, a.jsxs)(
                          i(),
                          {
                            href: r,
                            className:
                              'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                            children: [s, ' ', l],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                },
                r
              );
            }),
          });
        },
        m = (e) => {
          let {
              emoji: t = '',
              title: r = '',
              links: s = [],
              query: l = '',
              setState: o,
              disabledSearch: c = !1,
            } = e,
            { darkMode: m = !1, toggleDarkMode: h } = (0, n.D)();
          return (0, a.jsx)('nav', {
            className:
              'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, a.jsxs)('div', {
              className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center justify-between gap-x-4',
                  children: [
                    (0, a.jsx)(u, { links: s }),
                    (0, a.jsx)('div', {
                      className: 'flex items-center gap-x-4',
                      children: (0, a.jsxs)(i(), {
                        href: '/',
                        className: 'truncate text-lg font-bold md:text-xl',
                        children: [
                          t,
                          ' ',
                          (0, a.jsx)('span', {
                            className:
                              'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                            children: r,
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex items-center gap-x-2 md:gap-x-4',
                      children: [
                        (0, a.jsx)(p, { links: s }),
                        (0, a.jsx)(d, { checked: m, onChange: () => h() }),
                      ],
                    }),
                  ],
                }),
                !c &&
                  (0, a.jsx)('input', {
                    type: 'text',
                    placeholder: 'Search',
                    value: l,
                    className:
                      'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                    onChange: (e) => {
                      o((t) => ({ ...t, query: e.target.value }));
                    },
                  }),
              ],
            }),
          });
        };
      var h = r(3268),
        g = r(4364),
        x = r.n(g);
      let f = [
          {
            group: 'assets',
            id: 'assets-colors',
            emoji: '\uD83C\uDF08',
            href: '/assets/colors',
            text: 'Colors',
            full: 'Colors',
            description:
              'A vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of different design styles.',
          },
          {
            group: 'assets',
            id: 'assets-emojis',
            emoji: '\uD83D\uDE04',
            href: '/assets/emojis',
            text: 'Emojis',
            full: 'Emojis',
            description:
              'A large collection of emojis to enhance user interfaces, chats, and messaging applications with expressive icons.',
          },
          {
            group: 'assets',
            id: 'assets-fonts',
            emoji: '\uD83D\uDD24',
            href: '/assets/fonts',
            text: 'Fonts',
            full: 'Fonts',
            description:
              'A curated collection of fonts for web and UI projects, supporting various styles, weights, and languages.',
          },
          {
            group: 'assets',
            id: 'assets-icons',
            emoji: '\uD83D\uDDBC️',
            href: '/assets/icons',
            text: 'Icons',
            full: 'SVG Icons',
            description:
              'High-quality scalable vector icons suitable for web and mobile interfaces, ensuring sharp visuals on any screen size.',
          },
          {
            group: 'react',
            id: 'react-contexts',
            emoji: '\uD83D\uDD17',
            href: '/react/contexts',
            text: 'Contexts',
            full: 'React Contexts',
            description:
              'React contexts to efficiently manage and share state or data across deeply nested components without prop drilling.',
          },
          {
            group: 'react',
            id: 'react-hooks',
            emoji: '\uD83E\uDE9D',
            href: '/react/hooks',
            text: 'Hooks',
            full: 'React Hooks',
            description:
              'Reusable React hooks that provide custom functionality to functional components, improving code modularity and reuse.',
          },
          {
            group: 'react',
            id: 'react-router',
            emoji: '\uD83E\uDDED',
            href: '/react/router',
            text: 'Router',
            full: 'React Router',
            description:
              'A custom React Router implementation using Context API and hooks to manage client-side navigation without external libraries.',
          },
          {
            group: 'react',
            id: 'react-virtual-table',
            emoji: '\uD83D\uDCCB',
            href: '/react/virtual-table',
            text: 'Virtual Table',
            full: 'React Virtual Table',
            description:
              'Highly performant virtualized table component that renders only visible rows, ideal for large datasets.',
          },
          {
            group: 'ui',
            id: 'ui-charts',
            emoji: '\uD83D\uDCCA',
            href: '/ui/charts',
            text: 'Charts',
            full: 'UI Charts',
            description:
              'Versatile chart components for visualizing data in various formats including bar, line, pie, and more.',
          },
          {
            group: 'ui',
            id: 'ui-kit',
            emoji: '\uD83C\uDFA8',
            href: '/ui/kit',
            text: 'UI',
            full: 'UIKit',
            description:
              'Comprehensive collection of reusable UI components and design elements for building consistent user interfaces.',
          },
          {
            group: 'ui',
            id: 'ui-blocks',
            emoji: '\uD83E\uDDF1',
            href: '/ui/block',
            text: 'Blocks',
            full: 'UI Blocks',
            description:
              'Modular UI blocks designed for rapid assembly of complex interfaces using pre-built building components.',
          },
          {
            group: 'ui',
            id: 'ui-templates',
            emoji: '\uD83D\uDCDD',
            href: '/ui/templates',
            text: 'Templates',
            full: 'UI Templates',
            description:
              'Pre-designed UI templates that speed up development by providing ready-made layouts and styles.',
          },
          {
            group: 'tools',
            id: 'tools-logger',
            emoji: '\uD83E\uDDFE',
            href: '/tools/log',
            text: 'Logger',
            full: 'Logger',
            description:
              'Tools and utilities for application logging, debugging, and diagnostics to help track application behavior and errors.',
          },
          {
            group: 'tools',
            id: 'tools-utils',
            emoji: '\uD83E\uDDF0',
            href: '/tools/utils',
            text: 'Utils',
            full: 'Utilities',
            description:
              'A collection of general utility functions and helpers to simplify common programming tasks across projects.',
          },
        ],
        b = (e) => {
          var t;
          let {
              disabledSearch: r = !1,
              query: l = '',
              setState: i = () => {},
              id: n = '',
              emoji: d = '',
              title: c = '',
              description: u = '',
              children: p = (0, a.jsx)(a.Fragment, {}),
            } = e,
            { emoji: g = d, description: b = u } =
              null !=
              (t = f.find((e) => {
                let { id: t = '' } = e;
                return n === t;
              }))
                ? t
                : { emoji: d, description: u },
            k = ''.concat(g, ' ').concat(c);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(x(), {
                children: [
                  (0, a.jsx)('title', { children: k }),
                  (0, a.jsx)('meta', { name: 'description', content: b || u }),
                ],
              }),
              (0, a.jsx)(h.q, {}),
              (0, a.jsxs)('div', {
                className:
                  'flex h-screen flex-col text-neutral-900 dark:text-neutral-100',
                children: [
                  (0, a.jsx)(m, {
                    emoji: ''.concat(g || d),
                    title: c,
                    links: f.filter((e) => {
                      let { id: t = '' } = e;
                      return n !== t;
                    }),
                    disabledSearch: r,
                    query: l,
                    setState: i,
                  }),
                  (0, a.jsxs)('div', {
                    className: 'scrollbar-none grow overflow-auto',
                    children: [
                      (0, a.jsxs)('main', {
                        className:
                          'divide-y divide-neutral-200 dark:divide-neutral-800',
                        children: [
                          (0, a.jsx)(o, {
                            emoji: g || d,
                            title: c,
                            description: b || u,
                          }),
                          p,
                        ],
                      }),
                      (0, a.jsx)(s, { title: c }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
