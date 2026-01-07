(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  93967,
  (e, t, a) => {
    !(function () {
      'use strict';
      var e = {
          114: function (e) {
            function t(e) {
              if ('string' != typeof e)
                throw TypeError(
                  'Path must be a string. Received ' + JSON.stringify(e)
                );
            }
            function a(e, t) {
              for (
                var a, s = '', l = 0, c = -1, n = 0, i = 0;
                i <= e.length;
                ++i
              ) {
                if (i < e.length) a = e.charCodeAt(i);
                else if (47 === a) break;
                else a = 47;
                if (47 === a) {
                  if (c === i - 1 || 1 === n);
                  else if (c !== i - 1 && 2 === n) {
                    if (
                      s.length < 2 ||
                      2 !== l ||
                      46 !== s.charCodeAt(s.length - 1) ||
                      46 !== s.charCodeAt(s.length - 2)
                    ) {
                      if (s.length > 2) {
                        var r = s.lastIndexOf('/');
                        if (r !== s.length - 1) {
                          (-1 === r
                            ? ((s = ''), (l = 0))
                            : (l =
                                (s = s.slice(0, r)).length -
                                1 -
                                s.lastIndexOf('/')),
                            (c = i),
                            (n = 0));
                          continue;
                        }
                      } else if (2 === s.length || 1 === s.length) {
                        ((s = ''), (l = 0), (c = i), (n = 0));
                        continue;
                      }
                    }
                    t && (s.length > 0 ? (s += '/..') : (s = '..'), (l = 2));
                  } else
                    (s.length > 0
                      ? (s += '/' + e.slice(c + 1, i))
                      : (s = e.slice(c + 1, i)),
                      (l = i - c - 1));
                  ((c = i), (n = 0));
                } else 46 === a && -1 !== n ? ++n : (n = -1);
              }
              return s;
            }
            var s = {
              resolve: function () {
                for (
                  var e, s, l = '', c = !1, n = arguments.length - 1;
                  n >= -1 && !c;
                  n--
                )
                  (n >= 0
                    ? (s = arguments[n])
                    : (void 0 === e && (e = ''), (s = e)),
                    t(s),
                    0 !== s.length &&
                      ((l = s + '/' + l), (c = 47 === s.charCodeAt(0))));
                if (((l = a(l, !c)), c))
                  if (l.length > 0) return '/' + l;
                  else return '/';
                return l.length > 0 ? l : '.';
              },
              normalize: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                var s = 47 === e.charCodeAt(0),
                  l = 47 === e.charCodeAt(e.length - 1);
                return (0 !== (e = a(e, !s)).length || s || (e = '.'),
                e.length > 0 && l && (e += '/'),
                s)
                  ? '/' + e
                  : e;
              },
              isAbsolute: function (e) {
                return (t(e), e.length > 0 && 47 === e.charCodeAt(0));
              },
              join: function () {
                if (0 == arguments.length) return '.';
                for (var e, a = 0; a < arguments.length; ++a) {
                  var l = arguments[a];
                  (t(l),
                    l.length > 0 && (void 0 === e ? (e = l) : (e += '/' + l)));
                }
                return void 0 === e ? '.' : s.normalize(e);
              },
              relative: function (e, a) {
                if (
                  (t(e),
                  t(a),
                  e === a || (e = s.resolve(e)) === (a = s.resolve(a)))
                )
                  return '';
                for (var l = 1; l < e.length && 47 === e.charCodeAt(l); ++l);
                for (
                  var c = e.length, n = c - l, i = 1;
                  i < a.length && 47 === a.charCodeAt(i);
                  ++i
                );
                for (
                  var r = a.length - i, h = n < r ? n : r, o = -1, f = 0;
                  f <= h;
                  ++f
                ) {
                  if (f === h) {
                    if (r > h) {
                      if (47 === a.charCodeAt(i + f)) return a.slice(i + f + 1);
                      else if (0 === f) return a.slice(i + f);
                    } else
                      n > h &&
                        (47 === e.charCodeAt(l + f)
                          ? (o = f)
                          : 0 === f && (o = 0));
                    break;
                  }
                  var m = e.charCodeAt(l + f);
                  if (m !== a.charCodeAt(i + f)) break;
                  47 === m && (o = f);
                }
                var d = '';
                for (f = l + o + 1; f <= c; ++f)
                  (f === c || 47 === e.charCodeAt(f)) &&
                    (0 === d.length ? (d += '..') : (d += '/..'));
                return d.length > 0
                  ? d + a.slice(i + o)
                  : ((i += o), 47 === a.charCodeAt(i) && ++i, a.slice(i));
              },
              _makeLong: function (e) {
                return e;
              },
              dirname: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                for (
                  var a = e.charCodeAt(0),
                    s = 47 === a,
                    l = -1,
                    c = !0,
                    n = e.length - 1;
                  n >= 1;
                  --n
                )
                  if (47 === (a = e.charCodeAt(n))) {
                    if (!c) {
                      l = n;
                      break;
                    }
                  } else c = !1;
                return -1 === l
                  ? s
                    ? '/'
                    : '.'
                  : s && 1 === l
                    ? '//'
                    : e.slice(0, l);
              },
              basename: function (e, a) {
                if (void 0 !== a && 'string' != typeof a)
                  throw TypeError('"ext" argument must be a string');
                t(e);
                var s,
                  l = 0,
                  c = -1,
                  n = !0;
                if (void 0 !== a && a.length > 0 && a.length <= e.length) {
                  if (a.length === e.length && a === e) return '';
                  var i = a.length - 1,
                    r = -1;
                  for (s = e.length - 1; s >= 0; --s) {
                    var h = e.charCodeAt(s);
                    if (47 === h) {
                      if (!n) {
                        l = s + 1;
                        break;
                      }
                    } else
                      (-1 === r && ((n = !1), (r = s + 1)),
                        i >= 0 &&
                          (h === a.charCodeAt(i)
                            ? -1 == --i && (c = s)
                            : ((i = -1), (c = r))));
                  }
                  return (
                    l === c ? (c = r) : -1 === c && (c = e.length),
                    e.slice(l, c)
                  );
                }
                for (s = e.length - 1; s >= 0; --s)
                  if (47 === e.charCodeAt(s)) {
                    if (!n) {
                      l = s + 1;
                      break;
                    }
                  } else -1 === c && ((n = !1), (c = s + 1));
                return -1 === c ? '' : e.slice(l, c);
              },
              extname: function (e) {
                t(e);
                for (
                  var a = -1, s = 0, l = -1, c = !0, n = 0, i = e.length - 1;
                  i >= 0;
                  --i
                ) {
                  var r = e.charCodeAt(i);
                  if (47 === r) {
                    if (!c) {
                      s = i + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === l && ((c = !1), (l = i + 1)),
                    46 === r
                      ? -1 === a
                        ? (a = i)
                        : 1 !== n && (n = 1)
                      : -1 !== a && (n = -1));
                }
                return -1 === a ||
                  -1 === l ||
                  0 === n ||
                  (1 === n && a === l - 1 && a === s + 1)
                  ? ''
                  : e.slice(a, l);
              },
              format: function (e) {
                var t, a;
                if (null === e || 'object' != typeof e)
                  throw TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof e
                  );
                return (
                  (t = e.dir || e.root),
                  (a = e.base || (e.name || '') + (e.ext || '')),
                  t ? (t === e.root ? t + a : t + '/' + a) : a
                );
              },
              parse: function (e) {
                t(e);
                var a,
                  s = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === e.length) return s;
                var l = e.charCodeAt(0),
                  c = 47 === l;
                c ? ((s.root = '/'), (a = 1)) : (a = 0);
                for (
                  var n = -1, i = 0, r = -1, h = !0, o = e.length - 1, f = 0;
                  o >= a;
                  --o
                ) {
                  if (47 === (l = e.charCodeAt(o))) {
                    if (!h) {
                      i = o + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === r && ((h = !1), (r = o + 1)),
                    46 === l
                      ? -1 === n
                        ? (n = o)
                        : 1 !== f && (f = 1)
                      : -1 !== n && (f = -1));
                }
                return (
                  -1 === n ||
                  -1 === r ||
                  0 === f ||
                  (1 === f && n === r - 1 && n === i + 1)
                    ? -1 !== r &&
                      (0 === i && c
                        ? (s.base = s.name = e.slice(1, r))
                        : (s.base = s.name = e.slice(i, r)))
                    : (0 === i && c
                        ? ((s.name = e.slice(1, n)), (s.base = e.slice(1, r)))
                        : ((s.name = e.slice(i, n)), (s.base = e.slice(i, r))),
                      (s.ext = e.slice(n, r))),
                  i > 0 ? (s.dir = e.slice(0, i - 1)) : c && (s.dir = '/'),
                  s
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null,
            };
            ((s.posix = s), (e.exports = s));
          },
        },
        a = {};
      function s(t) {
        var l = a[t];
        if (void 0 !== l) return l.exports;
        var c = (a[t] = { exports: {} }),
          n = !0;
        try {
          (e[t](c, c.exports, s), (n = !1));
        } finally {
          n && delete a[t];
        }
        return c.exports;
      }
      ((s.ab =
        '/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/path-browserify/'),
        (t.exports = s(114)));
    })();
  },
  299,
  (e, t, a) => {
    !(function () {
      'use strict';
      var e = {
          815: function (e) {
            e.exports = function (e, a, s, l) {
              ((a = a || '&'), (s = s || '='));
              var c = {};
              if ('string' != typeof e || 0 === e.length) return c;
              var n = /\+/g;
              e = e.split(a);
              var i = 1e3;
              l && 'number' == typeof l.maxKeys && (i = l.maxKeys);
              var r = e.length;
              i > 0 && r > i && (r = i);
              for (var h = 0; h < r; ++h) {
                var o,
                  f,
                  m,
                  d,
                  u = e[h].replace(n, '%20'),
                  b = u.indexOf(s);
                (b >= 0
                  ? ((o = u.substr(0, b)), (f = u.substr(b + 1)))
                  : ((o = u), (f = '')),
                (m = decodeURIComponent(o)),
                (d = decodeURIComponent(f)),
                Object.prototype.hasOwnProperty.call(c, m))
                  ? t(c[m])
                    ? c[m].push(d)
                    : (c[m] = [c[m], d])
                  : (c[m] = d);
              }
              return c;
            };
            var t =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
          },
          577: function (e) {
            var t = function (e) {
              switch (typeof e) {
                case 'string':
                  return e;
                case 'boolean':
                  return e ? 'true' : 'false';
                case 'number':
                  return isFinite(e) ? e : '';
                default:
                  return '';
              }
            };
            e.exports = function (e, c, n, i) {
              return ((c = c || '&'),
              (n = n || '='),
              null === e && (e = void 0),
              'object' == typeof e)
                ? s(l(e), function (l) {
                    var i = encodeURIComponent(t(l)) + n;
                    return a(e[l])
                      ? s(e[l], function (e) {
                          return i + encodeURIComponent(t(e));
                        }).join(c)
                      : i + encodeURIComponent(t(e[l]));
                  }).join(c)
                : i
                  ? encodeURIComponent(t(i)) + n + encodeURIComponent(t(e))
                  : '';
            };
            var a =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
            function s(e, t) {
              if (e.map) return e.map(t);
              for (var a = [], s = 0; s < e.length; s++) a.push(t(e[s], s));
              return a;
            }
            var l =
              Object.keys ||
              function (e) {
                var t = [];
                for (var a in e)
                  Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
                return t;
              };
          },
        },
        a = {};
      function s(t) {
        var l = a[t];
        if (void 0 !== l) return l.exports;
        var c = (a[t] = { exports: {} }),
          n = !0;
        try {
          (e[t](c, c.exports, s), (n = !1));
        } finally {
          n && delete a[t];
        }
        return c.exports;
      }
      s.ab =
        '/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/querystring-es3/';
      var l = {};
      ((l.decode = l.parse = s(815)),
        (l.encode = l.stringify = s(577)),
        (t.exports = l));
    })();
  },
  71805,
  (e, t, a) => {
    var s = {
        452: function (t) {
          'use strict';
          t.exports = e.r(299);
        },
      },
      l = {};
    function c(e) {
      var t = l[e];
      if (void 0 !== t) return t.exports;
      var a = (l[e] = { exports: {} }),
        n = !0;
      try {
        (s[e](a, a.exports, c), (n = !1));
      } finally {
        n && delete l[e];
      }
      return a.exports;
    }
    c.ab =
      '/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/native-url/';
    var n = {};
    (!(function () {
      var e,
        t =
          (e = c(452)) && 'object' == typeof e && 'default' in e
            ? e.default
            : e,
        a = /https?|ftp|gopher|file/;
      function s(e) {
        'string' == typeof e && (e = k(e));
        var s,
          l,
          c,
          n,
          i,
          r,
          h,
          o,
          f,
          m =
            ((l = (s = e).auth),
            (c = s.hostname),
            (n = s.protocol || ''),
            (i = s.pathname || ''),
            (r = s.hash || ''),
            (h = s.query || ''),
            (o = !1),
            (l = l ? encodeURIComponent(l).replace(/%3A/i, ':') + '@' : ''),
            s.host
              ? (o = l + s.host)
              : c &&
                ((o = l + (~c.indexOf(':') ? '[' + c + ']' : c)),
                s.port && (o += ':' + s.port)),
            h && 'object' == typeof h && (h = t.encode(h)),
            (f = s.search || (h && '?' + h) || ''),
            n && ':' !== n.substr(-1) && (n += ':'),
            s.slashes || ((!n || a.test(n)) && !1 !== o)
              ? ((o = '//' + (o || '')), i && '/' !== i[0] && (i = '/' + i))
              : o || (o = ''),
            r && '#' !== r[0] && (r = '#' + r),
            f && '?' !== f[0] && (f = '?' + f),
            {
              protocol: n,
              host: o,
              pathname: (i = i.replace(/[?#]/g, encodeURIComponent)),
              search: (f = f.replace('#', '%23')),
              hash: r,
            });
        return '' + m.protocol + m.host + m.pathname + m.search + m.hash;
      }
      var l = 'http://',
        i = l + 'w.w',
        r = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
        h = /https?|ftp|gopher|file/;
      function o(e, t) {
        var a = 'string' == typeof e ? k(e) : e;
        e = 'object' == typeof e ? s(e) : e;
        var c = k(t),
          n = '';
        (a.protocol &&
          !a.slashes &&
          ((n = a.protocol),
          (e = e.replace(a.protocol, '')),
          (n += '/' === t[0] || '/' === e[0] ? '/' : '')),
          n &&
            c.protocol &&
            ((n = ''),
            c.slashes || ((n = c.protocol), (t = t.replace(c.protocol, '')))));
        var o = e.match(r);
        o &&
          !c.protocol &&
          ((e = e.substr((n = o[1] + (o[2] || '')).length)),
          /^\/\/[^/]/.test(t) && (n = n.slice(0, -1)));
        var f = new URL(e, i + '/'),
          m = new URL(t, f).toString().replace(i, ''),
          d = c.protocol || a.protocol;
        return (
          (d += a.slashes || c.slashes ? '//' : ''),
          !n && d ? (m = m.replace(l, d)) : n && (m = m.replace(l, '')),
          h.test(m) ||
            ~t.indexOf('.') ||
            '/' === e.slice(-1) ||
            '/' === t.slice(-1) ||
            '/' !== m.slice(-1) ||
            (m = m.slice(0, -1)),
          n && (m = n + ('/' === m[0] ? m.substr(1) : m)),
          m
        );
      }
      function f() {}
      ((f.prototype.parse = k),
        (f.prototype.format = s),
        (f.prototype.resolve = o),
        (f.prototype.resolveObject = o));
      var m = /^https?|ftp|gopher|file/,
        d = /^(.*?)([#?].*)/,
        u = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
        b = /^([a-z0-9.+-]*:)?\/\/\/*/i,
        p = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
      function k(e, a, l) {
        if (
          (void 0 === a && (a = !1),
          void 0 === l && (l = !1),
          e && 'object' == typeof e && e instanceof f)
        )
          return e;
        var c = (e = e.trim()).match(d);
        ((e = c ? c[1].replace(/\\/g, '/') + c[2] : e.replace(/\\/g, '/')),
          p.test(e) && '/' !== e.slice(-1) && (e += '/'));
        var n = !/(^javascript)/.test(e) && e.match(u),
          r = b.test(e),
          h = '';
        n &&
          (m.test(n[1]) || ((h = n[1].toLowerCase()), (e = '' + n[2] + n[3])),
          n[2] ||
            ((r = !1),
            m.test(n[1]) ? ((h = n[1]), (e = '' + n[3])) : (e = '//' + n[3])),
          (3 !== n[2].length && 1 !== n[2].length) ||
            ((h = n[1]), (e = '/' + n[3])));
        var o,
          k = (c ? c[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
          j = k && k[1],
          v = new f(),
          P = '',
          x = '';
        try {
          o = new URL(e);
        } catch (t) {
          ((P = t),
            h ||
              l ||
              !/^\/\//.test(e) ||
              /^\/\/.+[@.]/.test(e) ||
              ((x = '/'), (e = e.substr(1))));
          try {
            o = new URL(e, i);
          } catch (e) {
            return ((v.protocol = h), (v.href = h), v);
          }
        }
        ((v.slashes = r && !x),
          (v.host = 'w.w' === o.host ? '' : o.host),
          (v.hostname =
            'w.w' === o.hostname ? '' : o.hostname.replace(/(\[|\])/g, '')),
          (v.protocol = P ? h || null : o.protocol),
          (v.search = o.search.replace(/\\/g, '%5C')),
          (v.hash = o.hash.replace(/\\/g, '%5C')));
        var g = e.split('#');
        (!v.search && ~g[0].indexOf('?') && (v.search = '?'),
          v.hash || '' !== g[1] || (v.hash = '#'),
          (v.query = a ? t.decode(o.search.substr(1)) : v.search.substr(1)),
          (v.pathname =
            x +
            (n
              ? o.pathname
                  .replace(/['^|`]/g, function (e) {
                    return '%' + e.charCodeAt().toString(16).toUpperCase();
                  })
                  .replace(/((?:%[0-9A-F]{2})+)/g, function (e, t) {
                    try {
                      return decodeURIComponent(t)
                        .split('')
                        .map(function (e) {
                          var t = e.charCodeAt();
                          return t > 256 || /^[a-z0-9]$/i.test(e)
                            ? e
                            : '%' + t.toString(16).toUpperCase();
                        })
                        .join('');
                    } catch (e) {
                      return t;
                    }
                  })
              : o.pathname)),
          'about:' === v.protocol &&
            'blank' === v.pathname &&
            ((v.protocol = ''), (v.pathname = '')),
          P && '/' !== e[0] && (v.pathname = v.pathname.substr(1)),
          h &&
            !m.test(h) &&
            '/' !== e.slice(-1) &&
            '/' === v.pathname &&
            (v.pathname = ''),
          (v.path = v.pathname + v.search),
          (v.auth = [o.username, o.password]
            .map(decodeURIComponent)
            .filter(Boolean)
            .join(':')),
          (v.port = o.port),
          j && !v.host.endsWith(j) && ((v.host += j), (v.port = j.slice(1))),
          (v.href = x ? '' + v.pathname + v.search + v.hash : s(v)));
        var y = /^(file)/.test(v.href) ? ['host', 'hostname'] : [];
        return (
          Object.keys(v).forEach(function (e) {
            ~y.indexOf(e) || (v[e] = v[e] || null);
          }),
          v
        );
      }
      ((n.parse = k),
        (n.format = s),
        (n.resolve = o),
        (n.resolveObject = function (e, t) {
          return k(o(e, t));
        }),
        (n.Url = f));
    })(),
      (t.exports = n));
  },
  93002,
  (e) => {
    'use strict';
    var t = e.i(99406),
      a = e.i(75705),
      s = e.i(98726);
    e.s([
      'ReactPreview',
      0,
      ({
        id: e = '',
        emoji: l = '',
        group: c = '',
        name: n = '',
        code: i = '',
        chart: r = (0, t.jsx)(t.Fragment, {}),
      }) => {
        let [h, o] = (0, a.useState)(!0);
        return (0, t.jsxs)('div', {
          id: e,
          className: 'flex flex-col gap-y-4 md:gap-y-8',
          children: [
            (0, t.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2',
              children: [
                (0, t.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    (0, t.jsx)('span', { className: 'text-4xl', children: l }),
                    (0, t.jsxs)('div', {
                      children: [
                        (0, t.jsx)('p', {
                          className: 'text-xs capitalize',
                          children: c,
                        }),
                        (0, t.jsx)('h3', {
                          className: 'text-xl font-bold capitalize md:text-2xl',
                          children: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => o((e) => !e),
                  children: h ? 'Preview' : 'Code',
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: h
                ? (0, t.jsx)('div', {
                    className:
                      'flex w-full items-center justify-center p-4 md:p-8',
                    children: r,
                  })
                : (0, t.jsx)(s.Shiki, { code: i, lang: 'html' }),
            }),
          ],
        });
      },
    ]);
  },
  20917,
  (e) => {
    'use strict';
    var t = e.i(99406),
      a = e.i(75705),
      s = e.i(93002),
      l = e.i(60373),
      c = e.i(76476),
      n = e.i(93967);
    let i = (0, e.i(71805).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/ui/charts/index.tsx')}`;
        },
      }.url
    );
    console.log((0, n.join)((0, n.dirname)(i), '../../../..'));
    let r = {
        line: '📈',
        bar: '📊',
        pie: '🥧',
        area: '🌊',
        scatter: '🎯',
        radar: '🕸️',
        bubble: '🫧',
        doughnut: '🍩',
        histogram: '🏗️',
        heatmap: '🔥',
        treemap: '🌳',
        polar: '🐻‍❄️',
        candlestick: '🕯️',
        waterfall: '💧',
        gauge: '⏱️',
        funnel: '⏬',
      },
      h = [120, 180, 150, 200, 250, 300, 220],
      o = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      f = {
        area: (0, t.jsx)(
          ({ data: e = [], labels: s = [] }) => {
            let l = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = l.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let c = t.width,
                  n = t.height;
                a.clearRect(0, 0, c, n);
                let i = c - 60 - 40,
                  r = n - 60 - 40,
                  h = Math.max(...e),
                  o = (t) => 60 + (i / (e.length - 1)) * t,
                  f = (e) => 40 + ((h - e) / (h - 0)) * r;
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (r / 5) * e;
                  (a.beginPath(),
                    a.moveTo(60, t),
                    a.lineTo(c - 40, t),
                    a.stroke());
                }
                for (let e = 0; e < s.length; e++) {
                  let t = o(e);
                  (a.beginPath(),
                    a.moveTo(t, 40),
                    a.lineTo(t, n - 60),
                    a.stroke());
                }
                ((a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'right'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (r / 5) * e,
                    s = h - ((h - 0) / 5) * e;
                  a.fillText(s.toFixed(0), 52, t);
                }
                ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                for (let e = 0; e < s.length; e++)
                  a.fillText(s[e], o(e), n - 60 + 6);
                ((a.strokeStyle = '#9ca3af'),
                  (a.lineWidth = 2),
                  a.beginPath(),
                  a.moveTo(60, 40),
                  a.lineTo(60, n - 60),
                  a.stroke(),
                  a.beginPath(),
                  a.moveTo(60, n - 60),
                  a.lineTo(c - 40, n - 60),
                  a.stroke(),
                  a.beginPath(),
                  a.moveTo(o(0), n - 60));
                for (let t = 0; t < e.length; t++) a.lineTo(o(t), f(e[t]));
                (a.lineTo(o(e.length - 1), n - 60),
                  a.closePath(),
                  (a.fillStyle = 'rgba(59, 130, 246, 0.3)'),
                  a.fill(),
                  a.beginPath(),
                  a.moveTo(o(0), f(e[0])));
                for (let t = 0; t < e.length - 1; t++) {
                  let s = (o(t) + o(t + 1)) / 2,
                    l = (f(e[t]) + f(e[t + 1])) / 2;
                  a.quadraticCurveTo(o(t), f(e[t]), s, l);
                }
                (a.quadraticCurveTo(
                  o(e.length - 1),
                  f(e[e.length - 1]),
                  o(e.length - 1),
                  f(e[e.length - 1])
                ),
                  (a.strokeStyle = '#3b82f6'),
                  (a.lineWidth = 2),
                  a.stroke(),
                  (a.fillStyle = '#374151'),
                  (a.font = '14px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText('Month', c / 2, n - 10),
                  a.save(),
                  a.translate(16, n / 2),
                  a.rotate(-Math.PI / 2),
                  a.fillText('Revenue ($)', 0, 0),
                  a.restore(),
                  (a.fillStyle = '#3b82f6'),
                  a.fillRect(c / 2 - 30, 0, 12, 12),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  a.fillText('Revenue', c / 2 - 12, 6));
              }, [e, s]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: l,
                  width: 400,
                  height: 200,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          { data: h, labels: o }
        ),
        bar: (0, t.jsx)(
          ({ data: e = [], labels: s = [] }) => {
            let l = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = l.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let c = t.width,
                  n = t.height;
                a.clearRect(0, 0, c, n);
                let i = c - 60 - 40,
                  r = n - 60 - 40,
                  h = Math.max(...e);
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (r / 5) * e;
                  (a.beginPath(),
                    a.moveTo(60, t),
                    a.lineTo(c - 40, t),
                    a.stroke());
                }
                let o = s.length;
                for (let e = 0; e < o; e++) {
                  let t = 60 + (i / o) * e + i / o / 2;
                  (a.beginPath(),
                    a.moveTo(t, 40),
                    a.lineTo(t, n - 60),
                    a.stroke());
                }
                ((a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'right'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (r / 5) * e,
                    s = h - ((h - 0) / 5) * e;
                  a.fillText(s.toFixed(0), 52, t);
                }
                ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                for (let e = 0; e < s.length; e++) {
                  let t = 60 + (i / o) * e + i / o / 2;
                  a.fillText(s[e], t, n - 60 + 6);
                }
                ((a.strokeStyle = '#9ca3af'),
                  (a.lineWidth = 2),
                  a.beginPath(),
                  a.moveTo(60, 40),
                  a.lineTo(60, n - 60),
                  a.stroke(),
                  a.beginPath(),
                  a.moveTo(60, n - 60),
                  a.lineTo(c - 40, n - 60),
                  a.stroke());
                let f = i / o / 2;
                a.fillStyle = '#3b82f6';
                for (let t = 0; t < e.length; t++) {
                  let s = 60 + (i / o) * t + i / o / 2 - f / 2,
                    l = 40 + ((h - e[t]) / (h - 0)) * r,
                    c = n - 60 - l;
                  a.fillRect(s, l, f, c);
                }
                ((a.fillStyle = '#374151'),
                  (a.font = '14px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText('Month', c / 2, n - 10),
                  a.save(),
                  a.translate(16, n / 2),
                  a.rotate(-Math.PI / 2),
                  a.fillText('Revenue ($)', 0, 0),
                  a.restore());
                let m = c / 2 - 16;
                ((a.fillStyle = '#3b82f6'),
                  a.fillRect(m, 0, 12, 12),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  a.fillText('Revenue', m + 16, 6));
              }, [e, s]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: l,
                  width: 400,
                  height: 200,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          { data: h, labels: o }
        ),
        bubble: (0, t.jsx)(
          ({
            data: e = [],
            xLabels: s = [],
            yLabels: l = [],
            xName: c = 'X Axis',
            yName: n = 'Y Axis',
          }) => {
            let i = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = i.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let r = t.width,
                  h = t.height;
                a.clearRect(0, 0, r, h);
                let o = r - 60 - 40,
                  f = h - 60 - 40,
                  m = e.map((e) => e.x),
                  d = e.map((e) => e.y),
                  u = Math.min(...m),
                  b = Math.max(...m),
                  p = Math.min(...d),
                  k = Math.max(...d);
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                let j = l.length - 1 || 5;
                for (let e = 0; e <= j; e++) {
                  let t = 40 + (f / j) * e;
                  (a.beginPath(),
                    a.moveTo(60, t),
                    a.lineTo(r - 40, t),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle'));
                  let s = l[j - e] || (p + ((k - p) / j) * (j - e)).toFixed(0);
                  a.fillText(s.toString(), 52, t);
                }
                let v = s.length - 1 || 5;
                for (let e = 0; e <= v; e++) {
                  let t = 60 + (o / v) * e;
                  (a.beginPath(),
                    a.moveTo(t, 40),
                    a.lineTo(t, h - 60),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'center'),
                    (a.textBaseline = 'top'));
                  let l = s[e] || (u + ((b - u) / v) * e).toFixed(0);
                  a.fillText(l.toString(), t, h - 60 + 6);
                }
                ((a.strokeStyle = '#9ca3af'),
                  (a.lineWidth = 2),
                  a.beginPath(),
                  a.moveTo(60, 40),
                  a.lineTo(60, h - 60),
                  a.stroke(),
                  a.beginPath(),
                  a.moveTo(60, h - 60),
                  a.lineTo(r - 40, h - 60),
                  a.stroke(),
                  e.forEach(({ x: e, y: t, r: s }) => {
                    (a.beginPath(),
                      (a.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                      (a.strokeStyle = '#3b82f6'),
                      (a.lineWidth = 1),
                      a.arc(
                        60 + ((e - u) / (b - u)) * o,
                        40 + ((k - t) / (k - p)) * f,
                        s,
                        0,
                        2 * Math.PI
                      ),
                      a.fill(),
                      a.stroke());
                  }),
                  (a.fillStyle = '#374151'),
                  (a.font = '14px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText(c, r / 2, h - 10),
                  a.save(),
                  a.translate(16, h / 2),
                  a.rotate(-Math.PI / 2),
                  a.fillText(n, 0, 0),
                  a.restore());
                let P = r / 2 - 16;
                (a.beginPath(),
                  (a.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                  (a.strokeStyle = '#3b82f6'),
                  (a.lineWidth = 1),
                  a.arc(P + 8, 8, 8, 0, 2 * Math.PI),
                  a.fill(),
                  a.stroke(),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  a.fillText('Bubble Size = Radius', P + 16 + 8, 8));
              }, [e, s, l, c, n]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: i,
                  width: 400,
                  height: 300,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          {
            data: [
              { x: 1, y: 5, r: 10 },
              { x: 2, y: 8, r: 15 },
              { x: 3, y: 4, r: 8 },
              { x: 4, y: 7, r: 12 },
              { x: 5, y: 2, r: 5 },
            ],
            xLabels: ['1', '2', '3', '4', '5'],
            yLabels: ['0', '2', '4', '6', '8', '10'],
            xName: 'X Value',
            yName: 'Y Value',
          }
        ),
        doughnut: (0, t.jsx)(
          ({
            data: e = [],
            labels: s = [],
            colors: l,
            title: c = 'Doughnut Chart',
          }) => {
            let n = (0, a.useRef)(null),
              i = l || [
                '#3b82f6',
                '#ef4444',
                '#f59e0b',
                '#10b981',
                '#8b5cf6',
                '#ec4899',
                '#14b8a6',
              ];
            return (
              (0, a.useEffect)(() => {
                let t = n.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let l = t.width,
                  r = t.height,
                  h = l / 2,
                  o = r / 2,
                  f = Math.min(l, r) / 2 - 40;
                a.clearRect(0, 0, l, r);
                let m = e.reduce((e, t) => e + t, 0),
                  d = -Math.PI / 2;
                (e.forEach((e, t) => {
                  let s = d + (e / m) * 2 * Math.PI;
                  (a.beginPath(),
                    a.moveTo(h, o),
                    a.arc(h, o, f, d, s),
                    a.closePath(),
                    (a.fillStyle = i[t % i.length]),
                    a.fill(),
                    (d = s));
                }),
                  a.beginPath(),
                  (a.fillStyle = '#fff'),
                  a.moveTo(h, o),
                  a.arc(h, o, 0.6 * f, 0, 2 * Math.PI),
                  a.fill());
                let u = l - 75,
                  b = 20;
                ((a.font = '14px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  s.forEach((e, t) => {
                    ((a.fillStyle = i[t % i.length]),
                      a.fillRect(u, b, 16, 16),
                      (a.fillStyle = '#374151'),
                      a.fillText(e, u + 16 + 8, b + 8),
                      (b += 24));
                  }),
                  (a.fillStyle = '#374151'),
                  (a.font = '16px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText(c, h, 20));
              }, [e, s, i, c]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: n,
                  width: 400,
                  height: 300,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          {
            data: [25, 15, 30, 10, 20],
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
            title: 'Sales Distribution',
          }
        ),
        polar: (0, t.jsx)(
          ({ data: e, labels: s, maxValue: l, title: c }) => {
            let n = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = n.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let i = t.width,
                  r = t.height;
                a.clearRect(0, 0, i, r);
                let h = i / 2,
                  o = r / 2,
                  f = Math.min(i, r) / 2 - 60,
                  m = s.length,
                  d = (2 * Math.PI) / m,
                  u = l ?? Math.max(...e, 1);
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 1; e <= 5; e++) {
                  let t = (f / 5) * e;
                  (a.beginPath(), a.arc(h, o, t, 0, 2 * Math.PI), a.stroke());
                }
                ((a.strokeStyle = '#9ca3af'),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'center'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e < m; e++) {
                  let t = e * d - Math.PI / 2,
                    l = h + f * Math.cos(t),
                    c = o + f * Math.sin(t);
                  (a.beginPath(), a.moveTo(h, o), a.lineTo(l, c), a.stroke());
                  let n = h + (f + 20) * Math.cos(t),
                    i = o + (f + 20) * Math.sin(t);
                  a.fillText(s[e], n, i);
                }
                let b = [
                  '#3b82f6',
                  '#ef4444',
                  '#f59e0b',
                  '#10b981',
                  '#8b5cf6',
                  '#ec4899',
                  '#22d3ee',
                ];
                for (let t = 0; t < m; t++) {
                  let s = f * ((e[t] - 0) / (u - 0)),
                    l = t * d - Math.PI / 2,
                    c = l + d;
                  (a.beginPath(),
                    a.moveTo(h, o),
                    a.arc(h, o, s, l, c),
                    a.closePath(),
                    (a.fillStyle = b[t % b.length] + 'cc'),
                    a.fill(),
                    (a.strokeStyle = b[t % b.length]),
                    (a.lineWidth = 2),
                    a.stroke());
                }
                c &&
                  ((a.fillStyle = '#374151'),
                  (a.font = '16px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText(c, h, 30));
                let p = i - 140,
                  k = 40;
                ((a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e < m; e++)
                  ((a.fillStyle = b[e % b.length]),
                    a.beginPath(),
                    a.arc(p + 8, k + 8, 8, 0, 2 * Math.PI),
                    a.fill(),
                    (a.fillStyle = '#374151'),
                    a.fillText(s[e], p + 16 + 8, k + 8),
                    (k += 28));
              }, [e, s, l, c]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: n,
                  width: 400,
                  height: 400,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          {
            data: [30, 50, 80, 60, 40, 90, 70],
            labels: [
              'Red',
              'Blue',
              'Yellow',
              'Green',
              'Purple',
              'Orange',
              'Teal',
            ],
            title: 'Polar Area Chart Example',
          }
        ),
        line: (0, t.jsx)(
          ({ data: e = [], labels: s = [] }) => {
            let l = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = l.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let c = t.width,
                  n = t.height;
                a.clearRect(0, 0, c, n);
                let i = Math.max(...e),
                  r = n - 60 - 40,
                  h = c - 60 - 40;
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (r / 5) * e;
                  (a.beginPath(),
                    a.moveTo(60, t),
                    a.lineTo(c - 40, t),
                    a.stroke());
                }
                let o = s.length;
                for (let e = 0; e < o; e++) {
                  let t = 60 + (h / (o - 1)) * e;
                  (a.beginPath(),
                    a.moveTo(t, 40),
                    a.lineTo(t, n - 60),
                    a.stroke());
                }
                ((a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'right'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (r / 5) * e,
                    s = i - ((i - 0) / 5) * e;
                  a.fillText(s.toFixed(0), 52, t);
                }
                ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                for (let e = 0; e < s.length; e++) {
                  let t = 60 + (h / (s.length - 1)) * e;
                  a.fillText(s[e], t, n - 60 + 6);
                }
                ((a.strokeStyle = '#9ca3af'),
                  (a.lineWidth = 2),
                  a.beginPath(),
                  a.moveTo(60, 40),
                  a.lineTo(60, n - 60),
                  a.stroke(),
                  a.beginPath(),
                  a.moveTo(60, n - 60),
                  a.lineTo(c - 40, n - 60),
                  a.stroke(),
                  (a.strokeStyle = '#3b82f6'),
                  (a.lineWidth = 2),
                  a.beginPath(),
                  e.forEach((t, s) => {
                    let l = 60 + (h / (e.length - 1)) * s,
                      c = 40 + ((i - t) / (i - 0)) * r;
                    0 === s ? a.moveTo(l, c) : a.lineTo(l, c);
                  }),
                  a.stroke(),
                  (a.fillStyle = '#374151'),
                  (a.font = '14px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText('Month', c / 2, n - 10),
                  a.save(),
                  a.translate(16, n / 2),
                  a.rotate(-Math.PI / 2),
                  a.fillText('Revenue ($)', 0, 0),
                  a.restore());
                let f = c / 2 - 16;
                ((a.fillStyle = '#3b82f6'),
                  a.fillRect(f, 0, 12, 12),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  a.fillText('Revenue', f + 16, 6));
              }, [e, s]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: l,
                  width: 400,
                  height: 200,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          { data: h, labels: o }
        ),
        radar: (0, t.jsx)(
          ({ data: e, labels: s, maxValue: l, title: c }) => {
            let n = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = n.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let i = t.width,
                  r = t.height;
                a.clearRect(0, 0, i, r);
                let h = i / 2,
                  o = r / 2,
                  f = Math.min(i, r) / 2 - 60,
                  m = s.length,
                  d = (2 * Math.PI) / m,
                  u = l ?? Math.max(...e, 1);
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 1; e <= 5; e++) {
                  let t = (f / 5) * e;
                  a.beginPath();
                  for (let e = 0; e < m; e++) {
                    let s = e * d - Math.PI / 2,
                      l = h + t * Math.cos(s),
                      c = o + t * Math.sin(s);
                    0 === e ? a.moveTo(l, c) : a.lineTo(l, c);
                  }
                  (a.closePath(), a.stroke());
                }
                ((a.strokeStyle = '#9ca3af'),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'center'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e < m; e++) {
                  let t = e * d - Math.PI / 2,
                    l = h + f * Math.cos(t),
                    c = o + f * Math.sin(t);
                  (a.beginPath(), a.moveTo(h, o), a.lineTo(l, c), a.stroke());
                  let n = h + (f + 20) * Math.cos(t),
                    i = o + (f + 20) * Math.sin(t);
                  a.fillText(s[e], n, i);
                }
                ((a.strokeStyle = '#3b82f6'),
                  (a.fillStyle = 'rgba(59, 130, 246, 0.4)'),
                  (a.lineWidth = 2),
                  a.beginPath());
                for (let t = 0; t < m; t++) {
                  let s = f * ((e[t] - 0) / (u - 0)),
                    l = t * d - Math.PI / 2,
                    c = h + s * Math.cos(l),
                    n = o + s * Math.sin(l);
                  0 === t ? a.moveTo(c, n) : a.lineTo(c, n);
                }
                (a.closePath(),
                  a.fill(),
                  a.stroke(),
                  (a.fillStyle = '#1e40af'));
                for (let t = 0; t < m; t++) {
                  let s = f * ((e[t] - 0) / (u - 0)),
                    l = t * d - Math.PI / 2,
                    c = h + s * Math.cos(l),
                    n = o + s * Math.sin(l);
                  (a.beginPath(), a.arc(c, n, 4, 0, 2 * Math.PI), a.fill());
                }
                c &&
                  ((a.fillStyle = '#374151'),
                  (a.font = '16px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText(c, h, 30));
                let b = i - 140;
                ((a.fillStyle = '#3b82f6'),
                  a.beginPath(),
                  a.arc(b + 8, 48, 8, 0, 2 * Math.PI),
                  a.fill(),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  a.fillText('Dataset 1', b + 16 + 8, 48));
              }, [e, s, l, c]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: n,
                  width: 400,
                  height: 400,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          {
            data: [80, 60, 70, 90, 50],
            labels: [
              'Speed',
              'Strength',
              'Agility',
              'Endurance',
              'Flexibility',
            ],
            title: 'Athlete Performance',
          }
        ),
        scatter: (0, t.jsx)(
          ({
            data: e = [],
            xLabel: s = 'X Axis',
            yLabel: l = 'Y Axis',
            title: c = 'Scatter Chart',
            pointColor: n = '#3b82f6',
          }) => {
            let i = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let t = i.current;
                if (!t) return;
                let a = t.getContext('2d');
                if (!a) return;
                let r = t.width,
                  h = t.height;
                a.clearRect(0, 0, r, h);
                let o = e.map((e) => e.x),
                  f = e.map((e) => e.y),
                  m = Math.min(...o),
                  d = Math.max(...o),
                  u = Math.min(...f),
                  b = Math.max(...f),
                  p = r - 70 - 50,
                  k = h - 70 - 50;
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 50 + (k / 5) * e;
                  (a.beginPath(),
                    a.moveTo(70, t),
                    a.lineTo(r - 50, t),
                    a.stroke());
                }
                for (let e = 0; e <= 5; e++) {
                  let t = 70 + (p / 5) * e;
                  (a.beginPath(),
                    a.moveTo(t, 50),
                    a.lineTo(t, h - 70),
                    a.stroke());
                }
                ((a.strokeStyle = '#9ca3af'),
                  (a.lineWidth = 2),
                  a.beginPath(),
                  a.moveTo(70, 50),
                  a.lineTo(70, h - 70),
                  a.stroke(),
                  a.beginPath(),
                  a.moveTo(70, h - 70),
                  a.lineTo(r - 50, h - 70),
                  a.stroke(),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'right'),
                  (a.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 50 + (k / 5) * e,
                    s = b - ((b - u) / 5) * e;
                  a.fillText(s.toFixed(2), 62, t);
                }
                ((a.textAlign = 'center'), (a.textBaseline = 'top'));
                for (let e = 0; e <= 5; e++) {
                  let t = 70 + (p / 5) * e,
                    s = m + ((d - m) / 5) * e;
                  a.fillText(s.toFixed(2), t, h - 70 + 6);
                }
                ((a.fillStyle = n),
                  e.forEach(({ x: e, y: t }) => {
                    (a.beginPath(),
                      a.arc(
                        70 + ((e - m) / (d - m)) * p,
                        50 + ((b - t) / (b - u)) * k,
                        5,
                        0,
                        2 * Math.PI
                      ),
                      a.fill());
                  }),
                  (a.fillStyle = '#374151'),
                  (a.font = '14px sans-serif'),
                  (a.textAlign = 'center'),
                  a.fillText(s, r / 2, h - 20),
                  a.save(),
                  a.translate(20, h / 2),
                  a.rotate(-Math.PI / 2),
                  a.fillText(l, 0, 0),
                  a.restore(),
                  a.fillText(c, r / 2, 30));
                let j = r - 150;
                ((a.fillStyle = n),
                  a.beginPath(),
                  a.arc(j + 8, 48, 8, 0, 2 * Math.PI),
                  a.fill(),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  a.fillText('Data Points', j + 16 + 8, 48));
              }, [e, s, l, c, n]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: i,
                  width: 400,
                  height: 300,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          {
            data: [
              { x: 1, y: 2 },
              { x: 2, y: 3.5 },
              { x: 3, y: 1.2 },
              { x: 4, y: 4 },
              { x: 5, y: 2.5 },
            ],
            xLabel: 'Time (s)',
            yLabel: 'Value',
            title: 'Sample Scatter Plot',
          }
        ),
      };
    e.s(
      [
        '__N_SSG',
        () => !0,
        'default',
        0,
        ({ charts: e = [] }) => {
          let [{ query: n = '' }, i] = (0, a.useState)({ query: '' }),
            h = e.filter(
              ({ id: e, name: t }) =>
                e.toLowerCase().includes(n.toLowerCase()) ||
                t.toLowerCase().includes(n.toLowerCase())
            );
          return (0, t.jsx)(l.PageTemplate, {
            query: n,
            setState: i,
            id: 'ui-charts',
            emoji: '📊',
            title: 'atomic/charts',
            description:
              'is a curated set of responsive, customizable charts tailored specifically for SaaS products and marketing websites.',
            children: (0, t.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, t.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, t.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, t.jsxs)('h2', {
                      className: 'text-2xl font-bold',
                      children: [
                        (0, t.jsx)('span', {
                          className: 'capitalize',
                          children: 'Charts',
                        }),
                        ' (',
                        h.length,
                        ')',
                      ],
                    }),
                    h.length > 0 &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)('div', {
                            className:
                              'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                            children: h.map(({ id: e = '', name: a = '' }) =>
                              (0, t.jsx)(
                                c.default,
                                {
                                  href: `#${e}`,
                                  children: (0, t.jsx)('div', {
                                    className: 'col-span-1',
                                    children: (0, t.jsx)('div', {
                                      className:
                                        'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                      children: (0, t.jsxs)('p', {
                                        className: 'font-semibold capitalize',
                                        children: [r[e] ?? '', ' ', a],
                                      }),
                                    }),
                                  }),
                                },
                                e
                              )
                            ),
                          }),
                          (0, t.jsx)('div', {
                            className: 'flex flex-col gap-y-4 md:gap-y-8',
                            children: h.map(
                              ({ id: e = '', name: a = '', code: l = '' }) =>
                                (0, t.jsxs)(
                                  'div',
                                  {
                                    className: 'flex flex-col gap-y-4',
                                    children: [
                                      (0, t.jsxs)('h2', {
                                        className:
                                          'text-2xl font-bold capitalize',
                                        children: [r[e] ?? '', ' ', a],
                                      }),
                                      (0, t.jsx)(s.ReactPreview, {
                                        id: e,
                                        emoji: r[e] ?? '',
                                        group: 'Chart',
                                        name: a,
                                        code: l,
                                        chart: f[a],
                                      }),
                                    ],
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
      20917
    );
  },
  85865,
  (e, t, a) => {
    let s = '/ui/charts';
    ((window.__NEXT_P = window.__NEXT_P || []).push([s, () => e.r(20917)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([s]);
        }));
  },
  28806,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/261c5859d8db67e8.js'].map((t) => e.l(t))
      ).then(() => t(41618))
    );
  },
  27403,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2a89fbec7884c2cb.js'].map((t) => e.l(t))
      ).then(() => t(45367))
    );
  },
  63563,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9cf99cd0e4dcb138.js'].map((t) => e.l(t))
      ).then(() => t(25260))
    );
  },
  84775,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/88d15d99d470580e.js'].map((t) => e.l(t))
      ).then(() => t(31835))
    );
  },
  25866,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/389eac4a0bcde9ff.js'].map((t) => e.l(t))
      ).then(() => t(98842))
    );
  },
  55496,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c4ad5d382d66c7b2.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(48848))
    );
  },
  43144,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/35aa6cb995b399de.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8cea5e1cd41e4f06.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(5290))
    );
  },
  84991,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fffc2ff293a5a050.js'].map((t) => e.l(t))
      ).then(() => t(37650))
    );
  },
  8319,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2ff398cf759b7e86.js'].map((t) => e.l(t))
      ).then(() => t(52052))
    );
  },
  5839,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/1100f429f3860636.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(15009))
    );
  },
  99058,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c32fb79ef691a3fd.js'].map((t) => e.l(t))
      ).then(() => t(89264))
    );
  },
  41436,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1ee176b6805b035a.js'].map((t) => e.l(t))
      ).then(() => t(20648))
    );
  },
  78790,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8b8a295feda4fb89.js'].map((t) => e.l(t))
      ).then(() => t(96616))
    );
  },
  35967,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/cc113370f4a7752f.js'].map((t) => e.l(t))
      ).then(() => t(62439))
    );
  },
  9162,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/08d72a90a6e5ba7b.js',
          'static/chunks/ca4fcc27436708e6.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/8892982d807f7af3.js',
        ].map((t) => e.l(t))
      ).then(() => t(29678))
    );
  },
  15453,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/cdceb5e7e909d4d0.js'].map((t) => e.l(t))
      ).then(() => t(52307))
    );
  },
  77317,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0790153153557aa2.js'].map((t) => e.l(t))
      ).then(() => t(57703))
    );
  },
  29538,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7bb6263fb385a36d.js'].map((t) => e.l(t))
      ).then(() => t(36921))
    );
  },
  25290,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/294da1940773772e.js'].map((t) => e.l(t))
      ).then(() => t(11002))
    );
  },
  28038,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/caaad7897005585f.js'].map((t) => e.l(t))
      ).then(() => t(94888))
    );
  },
  61145,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d0ddd62c06986d59.js'].map((t) => e.l(t))
      ).then(() => t(31520))
    );
  },
  45290,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5f19ee3ac9dfc5fc.js'].map((t) => e.l(t))
      ).then(() => t(13593))
    );
  },
  54301,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8c3c9486bd7b3ceb.js',
          'static/chunks/a891ec16d5886f45.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(22751))
    );
  },
  30550,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/88d4cc7a4a39cf5d.js'].map((t) => e.l(t))
      ).then(() => t(32554))
    );
  },
  24251,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6a0b2a199a3f5ea2.js'].map((t) => e.l(t))
      ).then(() => t(64050))
    );
  },
  36760,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4823a37fc0c3a6cd.js'].map((t) => e.l(t))
      ).then(() => t(41273))
    );
  },
  99877,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6a5c6885fc1a34bc.js'].map((t) => e.l(t))
      ).then(() => t(9809))
    );
  },
  92123,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/4633c77633381916.js',
          'static/chunks/8781a1f28087745c.js',
        ].map((t) => e.l(t))
      ).then(() => t(79663))
    );
  },
  41345,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/46d32c98cde67e2b.js'].map((t) => e.l(t))
      ).then(() => t(6057))
    );
  },
  82565,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/82ea180c720c145a.js'].map((t) => e.l(t))
      ).then(() => t(39282))
    );
  },
  71436,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/016881ebd4c3ec6b.js'].map((t) => e.l(t))
      ).then(() => t(2728))
    );
  },
  51375,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/35074340c2ee740e.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(74381))
    );
  },
  34554,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c0f92f82c3553cd9.js'].map((t) => e.l(t))
      ).then(() => t(95347))
    );
  },
  42949,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1b0b5d2753d0ef70.js'].map((t) => e.l(t))
      ).then(() => t(49516))
    );
  },
  12968,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8cd072d971c4335a.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(31391))
    );
  },
  29045,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e2a76a39540403f8.js'].map((t) => e.l(t))
      ).then(() => t(74877))
    );
  },
  54392,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fc15cf4d3f8f499d.js'].map((t) => e.l(t))
      ).then(() => t(70769))
    );
  },
  11747,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/2a546e1d09060974.js',
          'static/chunks/05ff49a23babe45a.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
        ].map((t) => e.l(t))
      ).then(() => t(23508))
    );
  },
  3701,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/0c55515ee0c2f332.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(42808))
    );
  },
  27963,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c085e74b52eac802.js'].map((t) => e.l(t))
      ).then(() => t(56499))
    );
  },
  95138,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8d89fe77e45aa58a.js'].map((t) => e.l(t))
      ).then(() => t(94330))
    );
  },
  25297,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/15d6ebe66b8022e1.js'].map((t) => e.l(t))
      ).then(() => t(74619))
    );
  },
  36140,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/74cd0b2f5e61afc2.js'].map((t) => e.l(t))
      ).then(() => t(18521))
    );
  },
  48482,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/81b256823ef62262.js'].map((t) => e.l(t))
      ).then(() => t(27231))
    );
  },
  61380,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5fb333072805e08f.js'].map((t) => e.l(t))
      ).then(() => t(75019))
    );
  },
  11628,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e79fec121afaed86.js'].map((t) => e.l(t))
      ).then(() => t(76149))
    );
  },
  24832,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ecff13b0696d096c.js'].map((t) => e.l(t))
      ).then(() => t(19153))
    );
  },
  9799,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6916b8ee783dbfda.js'].map((t) => e.l(t))
      ).then(() => t(29953))
    );
  },
  23324,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/930c024375e0a7a4.js'].map((t) => e.l(t))
      ).then(() => t(8362))
    );
  },
  38253,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5ba07d6b402ec2ec.js'].map((t) => e.l(t))
      ).then(() => t(51672))
    );
  },
  81214,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bf7cffd4b384693d.js'].map((t) => e.l(t))
      ).then(() => t(43155))
    );
  },
  76204,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7b4686466f202132.js'].map((t) => e.l(t))
      ).then(() => t(79085))
    );
  },
  73122,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/e0af1970d0170e30.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(79652))
    );
  },
  44025,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/e3edc01ad705da2f.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(4249))
    );
  },
  58972,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c019498df3c32399.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
        ].map((t) => e.l(t))
      ).then(() => t(3224))
    );
  },
  61921,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b0e67947861d2a4b.js'].map((t) => e.l(t))
      ).then(() => t(94716))
    );
  },
  75455,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/9c62b4345a105c17.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/05ff49a23babe45a.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/df89320d2e6f1c32.js',
          'static/chunks/195619d1894b948a.js',
          'static/chunks/ca4fcc27436708e6.js',
        ].map((t) => e.l(t))
      ).then(() => t(91473))
    );
  },
  81329,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8dbb809c2cc6ce2c.js'].map((t) => e.l(t))
      ).then(() => t(10575))
    );
  },
  45983,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/20ef3eee083b53dc.js'].map((t) => e.l(t))
      ).then(() => t(4341))
    );
  },
  1211,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/551c1bd69ae3c62c.js'].map((t) => e.l(t))
      ).then(() => t(16458))
    );
  },
  16892,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/acd6558d2d868769.js'].map((t) => e.l(t))
      ).then(() => t(79223))
    );
  },
  95664,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/f0f3854d2bdf16d3.js',
          'static/chunks/186ddd09c2f7df6a.js',
        ].map((t) => e.l(t))
      ).then(() => t(62841))
    );
  },
  29805,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/186ddd09c2f7df6a.js'].map((t) => e.l(t))
      ).then(() => t(34573))
    );
  },
  22984,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/96c9c1fc7ca0f2e9.js'].map((t) => e.l(t))
      ).then(() => t(55345))
    );
  },
  28779,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5258f3b4b14a285e.js'].map((t) => e.l(t))
      ).then(() => t(58734))
    );
  },
  47789,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a70975e9ba4a806a.js'].map((t) => e.l(t))
      ).then(() => t(809))
    );
  },
  11256,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/31479a61db8da610.js'].map((t) => e.l(t))
      ).then(() => t(60452))
    );
  },
  33267,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2f741ddabb86ed68.js'].map((t) => e.l(t))
      ).then(() => t(33829))
    );
  },
  20181,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6c2ff842ce3cf1f6.js'].map((t) => e.l(t))
      ).then(() => t(37203))
    );
  },
  38011,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ebd054ba021256c4.js'].map((t) => e.l(t))
      ).then(() => t(54931))
    );
  },
  34716,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3e8a153372c2a48c.js'].map((t) => e.l(t))
      ).then(() => t(1906))
    );
  },
  91443,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/63946585666be653.js'].map((t) => e.l(t))
      ).then(() => t(32351))
    );
  },
  50866,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/1a339da4dd482df7.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/8892982d807f7af3.js',
        ].map((t) => e.l(t))
      ).then(() => t(51549))
    );
  },
  65226,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/800ac88f2c2cddd7.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(69782))
    );
  },
  15044,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/a7237a74a592429b.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
        ].map((t) => e.l(t))
      ).then(() => t(32216))
    );
  },
  19872,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/728db6fa9d7be07a.js'].map((t) => e.l(t))
      ).then(() => t(98645))
    );
  },
  12336,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/81cb4adb6db31798.js'].map((t) => e.l(t))
      ).then(() => t(86744))
    );
  },
  63581,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/89349999d4896f35.js'].map((t) => e.l(t))
      ).then(() => t(98665))
    );
  },
  51209,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/83bc4b930dcf5c26.js',
          'static/chunks/df89320d2e6f1c32.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/ca4fcc27436708e6.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(33339))
    );
  },
  97045,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6e6448995e2f7baa.js'].map((t) => e.l(t))
      ).then(() => t(73735))
    );
  },
  55947,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8dbd647119ce6066.js',
          'static/chunks/b02a6543cbced146.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(5269))
    );
  },
  69228,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/b50fe448ffe9867b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(25579))
    );
  },
  9344,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/9f96f9ce42ab340b.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(61886))
    );
  },
  72407,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/aacf1f56ecf5d219.js'].map((t) => e.l(t))
      ).then(() => t(65668))
    );
  },
  28401,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1317656316bf0b71.js'].map((t) => e.l(t))
      ).then(() => t(83971))
    );
  },
  26807,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e669f3511dc2863a.js'].map((t) => e.l(t))
      ).then(() => t(53178))
    );
  },
  73879,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3e7748668de70c1b.js'].map((t) => e.l(t))
      ).then(() => t(89462))
    );
  },
  89292,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/58ace7637318385b.js'].map((t) => e.l(t))
      ).then(() => t(64156))
    );
  },
  78731,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(46438))
    );
  },
  59359,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/cecf23be8ec08798.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(18369))
    );
  },
  54348,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/ab414b1e03297b03.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/df89320d2e6f1c32.js',
          'static/chunks/ca4fcc27436708e6.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(23294))
    );
  },
  76293,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/f631cfe1ef8cf129.js',
          'static/chunks/ca4fcc27436708e6.js',
          'static/chunks/df89320d2e6f1c32.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/8892982d807f7af3.js',
        ].map((t) => e.l(t))
      ).then(() => t(47931))
    );
  },
  49517,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/551956e9a008404f.js'].map((t) => e.l(t))
      ).then(() => t(34120))
    );
  },
  4997,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ca368042f15a6d31.js'].map((t) => e.l(t))
      ).then(() => t(18048))
    );
  },
  57146,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/080dcc00955942ae.js'].map((t) => e.l(t))
      ).then(() => t(108))
    );
  },
  38614,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/834c758f4d3e453f.js'].map((t) => e.l(t))
      ).then(() => t(88522))
    );
  },
  8494,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6736bac556322556.js'].map((t) => e.l(t))
      ).then(() => t(8007))
    );
  },
  24735,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8b92c041bac5f8c8.js'].map((t) => e.l(t))
      ).then(() => t(61049))
    );
  },
  90484,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/ba8f387658307473.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(98698))
    );
  },
  91715,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/906d693486272cc8.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(55161))
    );
  },
  96344,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/faf379ac8f8074fe.js'].map((t) => e.l(t))
      ).then(() => t(35651))
    );
  },
  34970,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/12bdfe33429bcd07.js'].map((t) => e.l(t))
      ).then(() => t(31595))
    );
  },
  38377,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6d13681a6ae3e408.js'].map((t) => e.l(t))
      ).then(() => t(23714))
    );
  },
  64255,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bdcdb9123b15b9cf.js'].map((t) => e.l(t))
      ).then(() => t(70472))
    );
  },
  68983,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e406ed743d3c5c1f.js'].map((t) => e.l(t))
      ).then(() => t(79442))
    );
  },
  6359,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bb1d930297a3ff18.js'].map((t) => e.l(t))
      ).then(() => t(21623))
    );
  },
  74200,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/df89320d2e6f1c32.js'].map((t) => e.l(t))
      ).then(() => t(74365))
    );
  },
  27132,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8781a1f28087745c.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/05ff49a23babe45a.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/0c1acc8a8ddc2b16.js',
        ].map((t) => e.l(t))
      ).then(() => t(53497))
    );
  },
  21205,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ce95c8999d87fa11.js'].map((t) => e.l(t))
      ).then(() => t(68065))
    );
  },
  97835,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/56889be7eede3d1a.js'].map((t) => e.l(t))
      ).then(() => t(66983))
    );
  },
  59815,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8c1b639fd1abcee2.js'].map((t) => e.l(t))
      ).then(() => t(34883))
    );
  },
  88306,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/88b8c28e7e8c67ef.js',
          'static/chunks/1dbccd86ebe6d4fa.js',
        ].map((t) => e.l(t))
      ).then(() => t(59108))
    );
  },
  49659,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1db8e3de3742fa15.js'].map((t) => e.l(t))
      ).then(() => t(47227))
    );
  },
  67682,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e48e673b5c210e7b.js'].map((t) => e.l(t))
      ).then(() => t(96177))
    );
  },
  58128,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/4bda103caae2b4f0.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(20925))
    );
  },
  64509,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0a1b89bf01ca156b.js'].map((t) => e.l(t))
      ).then(() => t(28135))
    );
  },
  67737,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/786b1a7f3ed4f5d7.js'].map((t) => e.l(t))
      ).then(() => t(40663))
    );
  },
  35594,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/234687a207c05fdd.js'].map((t) => e.l(t))
      ).then(() => t(32346))
    );
  },
  47799,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/d7ff3a197a599329.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
        ].map((t) => e.l(t))
      ).then(() => t(28157))
    );
  },
  3615,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7064111f733b8d73.js'].map((t) => e.l(t))
      ).then(() => t(91067))
    );
  },
  64927,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e14033c828f7b542.js'].map((t) => e.l(t))
      ).then(() => t(24371))
    );
  },
  17039,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2c4b70fc3c850b99.js'].map((t) => e.l(t))
      ).then(() => t(39465))
    );
  },
  15014,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/e48e673b5c210e7b.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/a14ae230ed580bce.js',
        ].map((t) => e.l(t))
      ).then(() => t(8718))
    );
  },
  89658,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/477f826b85a7fd22.js'].map((t) => e.l(t))
      ).then(() => t(61880))
    );
  },
  68608,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/2e7625970ecb703e.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(80948))
    );
  },
  689,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/00c881e034ded376.js'].map((t) => e.l(t))
      ).then(() => t(91359))
    );
  },
  48429,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/145e74393da834cf.js'].map((t) => e.l(t))
      ).then(() => t(32228))
    );
  },
  36518,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b817e88d42504162.js'].map((t) => e.l(t))
      ).then(() => t(24322))
    );
  },
  89467,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e070e5b8902d5bee.js'].map((t) => e.l(t))
      ).then(() => t(43440))
    );
  },
  74653,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d94149faf539b37d.js'].map((t) => e.l(t))
      ).then(() => t(3742))
    );
  },
  49888,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8dfa85aae82b06e3.js'].map((t) => e.l(t))
      ).then(() => t(83270))
    );
  },
  38648,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0d6972a11ba1a32a.js'].map((t) => e.l(t))
      ).then(() => t(79751))
    );
  },
  71448,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/318f4d02292f732a.js'].map((t) => e.l(t))
      ).then(() => t(84691))
    );
  },
  36721,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/3dd496e9ee5dd1a9.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
        ].map((t) => e.l(t))
      ).then(() => t(86150))
    );
  },
  98209,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/243e5fb508a61cee.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(59719))
    );
  },
  841,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9c9ad0c556b9986b.js'].map((t) => e.l(t))
      ).then(() => t(13928))
    );
  },
  69831,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1fa6b63b60dfcde6.js'].map((t) => e.l(t))
      ).then(() => t(57393))
    );
  },
  26220,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c9a21d4b3b791de7.js'].map((t) => e.l(t))
      ).then(() => t(9363))
    );
  },
  58644,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/690a08fb972bcf77.js'].map((t) => e.l(t))
      ).then(() => t(22560))
    );
  },
  11793,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/504a3d6f0995cfee.js'].map((t) => e.l(t))
      ).then(() => t(87179))
    );
  },
  85447,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d42c578c2bd21440.js'].map((t) => e.l(t))
      ).then(() => t(26227))
    );
  },
  34897,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5ed72bbf37e8ddc8.js'].map((t) => e.l(t))
      ).then(() => t(62469))
    );
  },
  15604,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c9a95763c7768a92.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(22534))
    );
  },
  80495,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/d4f448ac58526783.js',
          'static/chunks/105432ae9a10e444.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(44198))
    );
  },
  27710,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fe498861a7b26edd.js'].map((t) => e.l(t))
      ).then(() => t(85148))
    );
  },
  11340,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/21ec6379a2226fc7.js'].map((t) => e.l(t))
      ).then(() => t(59633))
    );
  },
  87372,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3aab4023e333266f.js'].map((t) => e.l(t))
      ).then(() => t(43274))
    );
  },
  13903,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d9510f5ef4263eb9.js'].map((t) => e.l(t))
      ).then(() => t(29716))
    );
  },
  59203,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e5ae60c0bdd31143.js'].map((t) => e.l(t))
      ).then(() => t(4811))
    );
  },
  32848,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/04b8299221a9fe5e.js'].map((t) => e.l(t))
      ).then(() => t(17910))
    );
  },
  51268,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1356c24cee9dd255.js'].map((t) => e.l(t))
      ).then(() => t(13876))
    );
  },
  43363,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/72dcf58c1c19d862.js'].map((t) => e.l(t))
      ).then(() => t(81721))
    );
  },
  34581,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f53ad1a9bb4e7825.js'].map((t) => e.l(t))
      ).then(() => t(68657))
    );
  },
  19628,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/be3926ca928de731.js'].map((t) => e.l(t))
      ).then(() => t(19577))
    );
  },
  61499,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8d1c0e60a4399273.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(64252))
    );
  },
  8506,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3a2ad548a2e0d9b6.js'].map((t) => e.l(t))
      ).then(() => t(22834))
    );
  },
  18090,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5692eac47e37548f.js'].map((t) => e.l(t))
      ).then(() => t(28502))
    );
  },
  27389,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8781a1f28087745c.js'].map((t) => e.l(t))
      ).then(() => t(89240))
    );
  },
  91124,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/2b0b0aae6bd74ced.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(73341))
    );
  },
  35846,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6c8cdecca1edfd43.js'].map((t) => e.l(t))
      ).then(() => t(74756))
    );
  },
  46995,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/36a9032fa3d80593.js'].map((t) => e.l(t))
      ).then(() => t(34310))
    );
  },
  30051,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/11443dce5315466e.js'].map((t) => e.l(t))
      ).then(() => t(89596))
    );
  },
  28646,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9bf11c079f1455f0.js'].map((t) => e.l(t))
      ).then(() => t(66936))
    );
  },
  4190,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7256e02bd2c24a5a.js'].map((t) => e.l(t))
      ).then(() => t(27154))
    );
  },
  57658,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/4ae8e0151488e7ce.js',
          'static/chunks/c085e74b52eac802.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(11062))
    );
  },
  23810,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4f09399d22e6bde5.js'].map((t) => e.l(t))
      ).then(() => t(11758))
    );
  },
  34649,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0ae7a705257331cf.js'].map((t) => e.l(t))
      ).then(() => t(54441))
    );
  },
  20612,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/274e73878435ffb9.js'].map((t) => e.l(t))
      ).then(() => t(34436))
    );
  },
  29251,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a788eced3c71a255.js'].map((t) => e.l(t))
      ).then(() => t(52242))
    );
  },
  55931,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/480776af5d4be70f.js'].map((t) => e.l(t))
      ).then(() => t(33314))
    );
  },
  44713,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/e678b4797a3bdccc.js',
          'static/chunks/8781a1f28087745c.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/05ff49a23babe45a.js',
          'static/chunks/ca4fcc27436708e6.js',
          'static/chunks/195619d1894b948a.js',
          'static/chunks/df89320d2e6f1c32.js',
        ].map((t) => e.l(t))
      ).then(() => t(22045))
    );
  },
  58437,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/66c9a9fbd313ef5b.js',
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/05ff49a23babe45a.js',
          'static/chunks/df89320d2e6f1c32.js',
          'static/chunks/ca4fcc27436708e6.js',
          'static/chunks/195619d1894b948a.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(58208))
    );
  },
  85140,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/92641de60c1cb355.js'].map((t) => e.l(t))
      ).then(() => t(74961))
    );
  },
  86530,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/261f27d221722069.js'].map((t) => e.l(t))
      ).then(() => t(48776))
    );
  },
  94498,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/40c3f6c6adcc38d5.js'].map((t) => e.l(t))
      ).then(() => t(77383))
    );
  },
  79496,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7f6eb34b45f84037.js'].map((t) => e.l(t))
      ).then(() => t(27488))
    );
  },
  27709,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/86e26b0d387401f5.js'].map((t) => e.l(t))
      ).then(() => t(3967))
    );
  },
  86499,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1c289d9c27ee2222.js'].map((t) => e.l(t))
      ).then(() => t(40638))
    );
  },
  37780,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fd9200998e792aad.js'].map((t) => e.l(t))
      ).then(() => t(53643))
    );
  },
  80306,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3784cf7d63619fea.js'].map((t) => e.l(t))
      ).then(() => t(40477))
    );
  },
  26749,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c29e6c40668e0989.js'].map((t) => e.l(t))
      ).then(() => t(43673))
    );
  },
  30536,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/64f832d72e2222ae.js'].map((t) => e.l(t))
      ).then(() => t(17215))
    );
  },
  56302,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/06fcd26dbaa9fbfe.js'].map((t) => e.l(t))
      ).then(() => t(17263))
    );
  },
  27077,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1455a45fe4ad28bf.js'].map((t) => e.l(t))
      ).then(() => t(57063))
    );
  },
  81436,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/0333a56037344861.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(36972))
    );
  },
  74165,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/001795f5a64aa066.js'].map((t) => e.l(t))
      ).then(() => t(8736))
    );
  },
  13156,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0f23069347641e31.js'].map((t) => e.l(t))
      ).then(() => t(6238))
    );
  },
  57862,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8dbd647119ce6066.js'].map((t) => e.l(t))
      ).then(() => t(16250))
    );
  },
  54442,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b23ce0a863ddeeb5.js'].map((t) => e.l(t))
      ).then(() => t(48448))
    );
  },
  68601,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5f74f3a672cb4e50.js'].map((t) => e.l(t))
      ).then(() => t(34605))
    );
  },
  79876,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/552a311617e810d8.js'].map((t) => e.l(t))
      ).then(() => t(38755))
    );
  },
  42335,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8dc195a4292cacff.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/8892982d807f7af3.js',
        ].map((t) => e.l(t))
      ).then(() => t(14275))
    );
  },
  71119,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7209445beeecf3ed.js'].map((t) => e.l(t))
      ).then(() => t(98071))
    );
  },
  36800,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/dec0b1bfff838fe6.js'].map((t) => e.l(t))
      ).then(() => t(71514))
    );
  },
  54358,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f2342012703bba31.js'].map((t) => e.l(t))
      ).then(() => t(90400))
    );
  },
  36315,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e88116eb3c96d9fe.js'].map((t) => e.l(t))
      ).then(() => t(40759))
    );
  },
  81025,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5673b07bab34716c.js'].map((t) => e.l(t))
      ).then(() => t(44951))
    );
  },
  309,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9fb0ab3614cdcc5e.js'].map((t) => e.l(t))
      ).then(() => t(55187))
    );
  },
  18978,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/0aee21f9dd7d8fea.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(59874))
    );
  },
  22671,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/dfe4d157d7885617.js'].map((t) => e.l(t))
      ).then(() => t(50756))
    );
  },
  8130,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/88b8c28e7e8c67ef.js'].map((t) => e.l(t))
      ).then(() => t(13343))
    );
  },
  8019,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/684d8c25d6367ba7.js'].map((t) => e.l(t))
      ).then(() => t(2928))
    );
  },
  30993,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/21e575f99a8cda2f.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/faf7dfe71ac1a23b.js',
        ].map((t) => e.l(t))
      ).then(() => t(29328))
    );
  },
  34111,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9ab8b2a30176c525.js'].map((t) => e.l(t))
      ).then(() => t(36529))
    );
  },
  83529,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ca4fcc27436708e6.js'].map((t) => e.l(t))
      ).then(() => t(46830))
    );
  },
  67160,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/01042a046aa1753b.js'].map((t) => e.l(t))
      ).then(() => t(65444))
    );
  },
  18228,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/6a0b2a199a3f5ea2.js',
          'static/chunks/8781a1f28087745c.js',
          'static/chunks/105432ae9a10e444.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/ac2dc6c0c0ef64d6.js',
          'static/chunks/df89320d2e6f1c32.js',
          'static/chunks/05ff49a23babe45a.js',
          'static/chunks/8892982d807f7af3.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/195619d1894b948a.js',
          'static/chunks/ca4fcc27436708e6.js',
        ].map((t) => e.l(t))
      ).then(() => t(63122))
    );
  },
  82725,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8892982d807f7af3.js'].map((t) => e.l(t))
      ).then(() => t(69246))
    );
  },
  65663,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/67b0b933b2452080.js'].map((t) => e.l(t))
      ).then(() => t(22513))
    );
  },
  45869,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a3aef693bf109783.js'].map((t) => e.l(t))
      ).then(() => t(83107))
    );
  },
  57912,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3b6b7cb30af3014b.js'].map((t) => e.l(t))
      ).then(() => t(35296))
    );
  },
  25517,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e410d5b77955b089.js'].map((t) => e.l(t))
      ).then(() => t(99545))
    );
  },
  82562,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/cb761085d2c2c1b7.js'].map((t) => e.l(t))
      ).then(() => t(80594))
    );
  },
  37013,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4b8cc5fcb61d0131.js'].map((t) => e.l(t))
      ).then(() => t(58203))
    );
  },
  27676,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b051eb84ba7d9cfd.js'].map((t) => e.l(t))
      ).then(() => t(10675))
    );
  },
  58334,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/419894c794b6eb0d.js'].map((t) => e.l(t))
      ).then(() => t(67398))
    );
  },
  8282,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/aead57b1fed95028.js',
          'static/chunks/faf7dfe71ac1a23b.js',
          'static/chunks/8b92c041bac5f8c8.js',
          'static/chunks/8892982d807f7af3.js',
        ].map((t) => e.l(t))
      ).then(() => t(17945))
    );
  },
  63808,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/dea1bfa3ece16175.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(96089))
    );
  },
  33570,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/e48e673b5c210e7b.js',
          'static/chunks/2f7df66f4105cc79.js',
          'static/chunks/b078362ef8029dbf.js',
          'static/chunks/8b92c041bac5f8c8.js',
        ].map((t) => e.l(t))
      ).then(() => t(45630))
    );
  },
  35177,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/62c6aca3eae0c385.js'].map((t) => e.l(t))
      ).then(() => t(23949))
    );
  },
  91195,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/11b01177dd411ef3.js'].map((t) => e.l(t))
      ).then(() => t(81277))
    );
  },
  13936,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/21d9dd7d08f009e2.js'].map((t) => e.l(t))
      ).then(() => t(21957))
    );
  },
  24559,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9d07523928e8eb07.js'].map((t) => e.l(t))
      ).then(() => t(92504))
    );
  },
  59500,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/220ad54a79dd96ba.js'].map((t) => e.l(t))
      ).then(() => t(55901))
    );
  },
  71551,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4b32221edcf3cb08.js'].map((t) => e.l(t))
      ).then(() => t(40772))
    );
  },
  90058,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/08bc5202eab1d982.js'].map((t) => e.l(t))
      ).then(() => t(94323))
    );
  },
  68577,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/66c9a9fbd313ef5b.js'].map((t) => e.l(t))
      ).then(() => t(83220))
    );
  },
  85479,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2c34c3645efbf7e3.js'].map((t) => e.l(t))
      ).then(() => t(39188))
    );
  },
  98960,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/68dc711d5104e70f.js'].map((t) => e.l(t))
      ).then(() => t(46935))
    );
  },
  50746,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bf4c9e8727b25448.js'].map((t) => e.l(t))
      ).then(() => t(95734))
    );
  },
  39991,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7b3efb4ce5822758.js'].map((t) => e.l(t))
      ).then(() => t(78565))
    );
  },
  15620,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e43a661554e795c4.js'].map((t) => e.l(t))
      ).then(() => t(6513))
    );
  },
  8283,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/556bb837f81308f3.js'].map((t) => e.l(t))
      ).then(() => t(71633))
    );
  },
  1881,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3e0fa766f2ead962.js'].map((t) => e.l(t))
      ).then(() => t(78932))
    );
  },
  45929,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3c63cdeb633f0ff9.js'].map((t) => e.l(t))
      ).then(() => t(332))
    );
  },
  50139,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d34b1be65db2490f.js'].map((t) => e.l(t))
      ).then(() => t(9495))
    );
  },
  22231,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2f81ce53de12f557.js'].map((t) => e.l(t))
      ).then(() => t(36163))
    );
  },
  21694,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0ba9b8bcf941dd69.js'].map((t) => e.l(t))
      ).then(() => t(13152))
    );
  },
  54354,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2dab08e3dbd44cad.js'].map((t) => e.l(t))
      ).then(() => t(95962))
    );
  },
  4918,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/19467ea2a61a4093.js'].map((t) => e.l(t))
      ).then(() => t(76622))
    );
  },
  62142,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c9330a4877ae58b5.js'].map((t) => e.l(t))
      ).then(() => t(7532))
    );
  },
  12449,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9d372627d65452a4.js'].map((t) => e.l(t))
      ).then(() => t(3300))
    );
  },
  18656,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/80847fc5cb57af34.js'].map((t) => e.l(t))
      ).then(() => t(84563))
    );
  },
  22752,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5ba06b9badea53d9.js'].map((t) => e.l(t))
      ).then(() => t(11970))
    );
  },
  77036,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7de49352f0f3fde1.js'].map((t) => e.l(t))
      ).then(() => t(48638))
    );
  },
  7875,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/16190d553ca0354f.js'].map((t) => e.l(t))
      ).then(() => t(55714))
    );
  },
  41048,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a63056a3106eb07a.js'].map((t) => e.l(t))
      ).then(() => t(6329))
    );
  },
  56124,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b82cacae98538a2a.js'].map((t) => e.l(t))
      ).then(() => t(39379))
    );
  },
  387,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0f34c26a54bf3bc4.js'].map((t) => e.l(t))
      ).then(() => t(25815))
    );
  },
  61465,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c0c11f0121b01372.js'].map((t) => e.l(t))
      ).then(() => t(43819))
    );
  },
  40207,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a8dc5f3dfaeb511d.js'].map((t) => e.l(t))
      ).then(() => t(81892))
    );
  },
  73538,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a2490358598a8fde.js'].map((t) => e.l(t))
      ).then(() => t(19558))
    );
  },
  35558,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fae2e35c1d383224.js'].map((t) => e.l(t))
      ).then(() => t(2709))
    );
  },
  86157,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/29c92387156daa7b.js'].map((t) => e.l(t))
      ).then(() => t(69181))
    );
  },
  33874,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/67f1578a8b9c984f.js'].map((t) => e.l(t))
      ).then(() => t(15587))
    );
  },
  74825,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0668d5a518fa8337.js'].map((t) => e.l(t))
      ).then(() => t(3764))
    );
  },
  92040,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/da7e01d056b0170d.js'].map((t) => e.l(t))
      ).then(() => t(47451))
    );
  },
  50128,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5fc28d2d514b169b.js'].map((t) => e.l(t))
      ).then(() => t(66510))
    );
  },
  70662,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/913e78d5484ff575.js'].map((t) => e.l(t))
      ).then(() => t(55225))
    );
  },
  46597,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2bdb519bddf62931.js'].map((t) => e.l(t))
      ).then(() => t(31097))
    );
  },
  76896,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/28783181e9412b0d.js'].map((t) => e.l(t))
      ).then(() => t(19767))
    );
  },
  40848,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/42a1e45e27d52a56.js'].map((t) => e.l(t))
      ).then(() => t(36031))
    );
  },
  42797,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/50d56b2ff757a3cc.js'].map((t) => e.l(t))
      ).then(() => t(51239))
    );
  },
  4246,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f94506593574bae0.js'].map((t) => e.l(t))
      ).then(() => t(13703))
    );
  },
  30763,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3ecaeed96dc71b91.js'].map((t) => e.l(t))
      ).then(() => t(83326))
    );
  },
  45935,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4006228f8f6afff7.js'].map((t) => e.l(t))
      ).then(() => t(74437))
    );
  },
  84453,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a9393e7ec24077b7.js'].map((t) => e.l(t))
      ).then(() => t(96521))
    );
  },
  88540,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/04dc50132331d749.js'].map((t) => e.l(t))
      ).then(() => t(85706))
    );
  },
  30604,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d78bbfc7f0b31ce9.js'].map((t) => e.l(t))
      ).then(() => t(20468))
    );
  },
  9851,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fc0f8853d87c7ae7.js'].map((t) => e.l(t))
      ).then(() => t(62477))
    );
  },
  39710,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d48689fe3eca7c4c.js'].map((t) => e.l(t))
      ).then(() => t(76036))
    );
  },
  91167,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/649f2461ec2bd269.js'].map((t) => e.l(t))
      ).then(() => t(3446))
    );
  },
  67539,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/deb67a5e094e55fb.js'].map((t) => e.l(t))
      ).then(() => t(63149))
    );
  },
  6355,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/afc3c7b4a973ba56.js'].map((t) => e.l(t))
      ).then(() => t(32112))
    );
  },
  18062,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b8ffbbecad5a18bc.js'].map((t) => e.l(t))
      ).then(() => t(63540))
    );
  },
  82505,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/dfb197405de11e0e.js'].map((t) => e.l(t))
      ).then(() => t(74817))
    );
  },
  32613,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/78182b4a51e14c42.js'].map((t) => e.l(t))
      ).then(() => t(83273))
    );
  },
  62402,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1df394882da31582.js'].map((t) => e.l(t))
      ).then(() => t(75814))
    );
  },
  17820,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/40d859167ae719ab.js'].map((t) => e.l(t))
      ).then(() => t(42643))
    );
  },
  19924,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e274514713ffbbbf.js'].map((t) => e.l(t))
      ).then(() => t(46242))
    );
  },
  92049,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9a02022441987955.js'].map((t) => e.l(t))
      ).then(() => t(93094))
    );
  },
  48864,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5dc3e21db8f9620a.js'].map((t) => e.l(t))
      ).then(() => t(33034))
    );
  },
  2780,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4b9f2da2879da2eb.js'].map((t) => e.l(t))
      ).then(() => t(43178))
    );
  },
  91099,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a8ab51fec1ce4b7f.js'].map((t) => e.l(t))
      ).then(() => t(28849))
    );
  },
  98688,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/21f50a86932438c0.js'].map((t) => e.l(t))
      ).then(() => t(75156))
    );
  },
  125,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/da0d9e0b8d9bb8f2.js'].map((t) => e.l(t))
      ).then(() => t(109))
    );
  },
  2842,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3e095aed2cd473ab.js'].map((t) => e.l(t))
      ).then(() => t(85036))
    );
  },
  54629,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/022cf317d9507c3a.js'].map((t) => e.l(t))
      ).then(() => t(72087))
    );
  },
  72348,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/acbc9c4f0385f398.js'].map((t) => e.l(t))
      ).then(() => t(31742))
    );
  },
  68336,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a8d95171e8621d4b.js'].map((t) => e.l(t))
      ).then(() => t(23593))
    );
  },
  8704,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7a62dae7c4dd6e31.js'].map((t) => e.l(t))
      ).then(() => t(21273))
    );
  },
  32557,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/73688f39a04b7f91.js'].map((t) => e.l(t))
      ).then(() => t(95339))
    );
  },
]);
