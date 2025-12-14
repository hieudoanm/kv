(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  10583,
  (e, t, r) => {
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
            function r(e, t) {
              for (
                var r, o = '', n = 0, a = -1, l = 0, s = 0;
                s <= e.length;
                ++s
              ) {
                if (s < e.length) r = e.charCodeAt(s);
                else if (47 === r) break;
                else r = 47;
                if (47 === r) {
                  if (a === s - 1 || 1 === l);
                  else if (a !== s - 1 && 2 === l) {
                    if (
                      o.length < 2 ||
                      2 !== n ||
                      46 !== o.charCodeAt(o.length - 1) ||
                      46 !== o.charCodeAt(o.length - 2)
                    ) {
                      if (o.length > 2) {
                        var i = o.lastIndexOf('/');
                        if (i !== o.length - 1) {
                          (-1 === i
                            ? ((o = ''), (n = 0))
                            : (n =
                                (o = o.slice(0, i)).length -
                                1 -
                                o.lastIndexOf('/')),
                            (a = s),
                            (l = 0));
                          continue;
                        }
                      } else if (2 === o.length || 1 === o.length) {
                        ((o = ''), (n = 0), (a = s), (l = 0));
                        continue;
                      }
                    }
                    t && (o.length > 0 ? (o += '/..') : (o = '..'), (n = 2));
                  } else
                    (o.length > 0
                      ? (o += '/' + e.slice(a + 1, s))
                      : (o = e.slice(a + 1, s)),
                      (n = s - a - 1));
                  ((a = s), (l = 0));
                } else 46 === r && -1 !== l ? ++l : (l = -1);
              }
              return o;
            }
            var o = {
              resolve: function () {
                for (
                  var e, o, n = '', a = !1, l = arguments.length - 1;
                  l >= -1 && !a;
                  l--
                )
                  (l >= 0
                    ? (o = arguments[l])
                    : (void 0 === e && (e = ''), (o = e)),
                    t(o),
                    0 !== o.length &&
                      ((n = o + '/' + n), (a = 47 === o.charCodeAt(0))));
                if (((n = r(n, !a)), a))
                  if (n.length > 0) return '/' + n;
                  else return '/';
                return n.length > 0 ? n : '.';
              },
              normalize: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                var o = 47 === e.charCodeAt(0),
                  n = 47 === e.charCodeAt(e.length - 1);
                return (0 !== (e = r(e, !o)).length || o || (e = '.'),
                e.length > 0 && n && (e += '/'),
                o)
                  ? '/' + e
                  : e;
              },
              isAbsolute: function (e) {
                return (t(e), e.length > 0 && 47 === e.charCodeAt(0));
              },
              join: function () {
                if (0 == arguments.length) return '.';
                for (var e, r = 0; r < arguments.length; ++r) {
                  var n = arguments[r];
                  (t(n),
                    n.length > 0 && (void 0 === e ? (e = n) : (e += '/' + n)));
                }
                return void 0 === e ? '.' : o.normalize(e);
              },
              relative: function (e, r) {
                if (
                  (t(e),
                  t(r),
                  e === r || (e = o.resolve(e)) === (r = o.resolve(r)))
                )
                  return '';
                for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                for (
                  var a = e.length, l = a - n, s = 1;
                  s < r.length && 47 === r.charCodeAt(s);
                  ++s
                );
                for (
                  var i = r.length - s, c = l < i ? l : i, h = -1, u = 0;
                  u <= c;
                  ++u
                ) {
                  if (u === c) {
                    if (i > c) {
                      if (47 === r.charCodeAt(s + u)) return r.slice(s + u + 1);
                      else if (0 === u) return r.slice(s + u);
                    } else
                      l > c &&
                        (47 === e.charCodeAt(n + u)
                          ? (h = u)
                          : 0 === u && (h = 0));
                    break;
                  }
                  var d = e.charCodeAt(n + u);
                  if (d !== r.charCodeAt(s + u)) break;
                  47 === d && (h = u);
                }
                var p = '';
                for (u = n + h + 1; u <= a; ++u)
                  (u === a || 47 === e.charCodeAt(u)) &&
                    (0 === p.length ? (p += '..') : (p += '/..'));
                return p.length > 0
                  ? p + r.slice(s + h)
                  : ((s += h), 47 === r.charCodeAt(s) && ++s, r.slice(s));
              },
              _makeLong: function (e) {
                return e;
              },
              dirname: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                for (
                  var r = e.charCodeAt(0),
                    o = 47 === r,
                    n = -1,
                    a = !0,
                    l = e.length - 1;
                  l >= 1;
                  --l
                )
                  if (47 === (r = e.charCodeAt(l))) {
                    if (!a) {
                      n = l;
                      break;
                    }
                  } else a = !1;
                return -1 === n
                  ? o
                    ? '/'
                    : '.'
                  : o && 1 === n
                    ? '//'
                    : e.slice(0, n);
              },
              basename: function (e, r) {
                if (void 0 !== r && 'string' != typeof r)
                  throw TypeError('"ext" argument must be a string');
                t(e);
                var o,
                  n = 0,
                  a = -1,
                  l = !0;
                if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                  if (r.length === e.length && r === e) return '';
                  var s = r.length - 1,
                    i = -1;
                  for (o = e.length - 1; o >= 0; --o) {
                    var c = e.charCodeAt(o);
                    if (47 === c) {
                      if (!l) {
                        n = o + 1;
                        break;
                      }
                    } else
                      (-1 === i && ((l = !1), (i = o + 1)),
                        s >= 0 &&
                          (c === r.charCodeAt(s)
                            ? -1 == --s && (a = o)
                            : ((s = -1), (a = i))));
                  }
                  return (
                    n === a ? (a = i) : -1 === a && (a = e.length),
                    e.slice(n, a)
                  );
                }
                for (o = e.length - 1; o >= 0; --o)
                  if (47 === e.charCodeAt(o)) {
                    if (!l) {
                      n = o + 1;
                      break;
                    }
                  } else -1 === a && ((l = !1), (a = o + 1));
                return -1 === a ? '' : e.slice(n, a);
              },
              extname: function (e) {
                t(e);
                for (
                  var r = -1, o = 0, n = -1, a = !0, l = 0, s = e.length - 1;
                  s >= 0;
                  --s
                ) {
                  var i = e.charCodeAt(s);
                  if (47 === i) {
                    if (!a) {
                      o = s + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === n && ((a = !1), (n = s + 1)),
                    46 === i
                      ? -1 === r
                        ? (r = s)
                        : 1 !== l && (l = 1)
                      : -1 !== r && (l = -1));
                }
                return -1 === r ||
                  -1 === n ||
                  0 === l ||
                  (1 === l && r === n - 1 && r === o + 1)
                  ? ''
                  : e.slice(r, n);
              },
              format: function (e) {
                var t, r;
                if (null === e || 'object' != typeof e)
                  throw TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof e
                  );
                return (
                  (t = e.dir || e.root),
                  (r = e.base || (e.name || '') + (e.ext || '')),
                  t ? (t === e.root ? t + r : t + '/' + r) : r
                );
              },
              parse: function (e) {
                t(e);
                var r,
                  o = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === e.length) return o;
                var n = e.charCodeAt(0),
                  a = 47 === n;
                a ? ((o.root = '/'), (r = 1)) : (r = 0);
                for (
                  var l = -1, s = 0, i = -1, c = !0, h = e.length - 1, u = 0;
                  h >= r;
                  --h
                ) {
                  if (47 === (n = e.charCodeAt(h))) {
                    if (!c) {
                      s = h + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === i && ((c = !1), (i = h + 1)),
                    46 === n
                      ? -1 === l
                        ? (l = h)
                        : 1 !== u && (u = 1)
                      : -1 !== l && (u = -1));
                }
                return (
                  -1 === l ||
                  -1 === i ||
                  0 === u ||
                  (1 === u && l === i - 1 && l === s + 1)
                    ? -1 !== i &&
                      (0 === s && a
                        ? (o.base = o.name = e.slice(1, i))
                        : (o.base = o.name = e.slice(s, i)))
                    : (0 === s && a
                        ? ((o.name = e.slice(1, l)), (o.base = e.slice(1, i)))
                        : ((o.name = e.slice(s, l)), (o.base = e.slice(s, i))),
                      (o.ext = e.slice(l, i))),
                  s > 0 ? (o.dir = e.slice(0, s - 1)) : a && (o.dir = '/'),
                  o
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null,
            };
            ((o.posix = o), (e.exports = o));
          },
        },
        r = {};
      function o(t) {
        var n = r[t];
        if (void 0 !== n) return n.exports;
        var a = (r[t] = { exports: {} }),
          l = !0;
        try {
          (e[t](a, a.exports, o), (l = !1));
        } finally {
          l && delete r[t];
        }
        return a.exports;
      }
      ((o.ab =
        '/ROOT/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/path-browserify/'),
        (t.exports = o(114)));
    })();
  },
  25594,
  (e, t, r) => {
    !(function () {
      'use strict';
      var e = {
          815: function (e) {
            e.exports = function (e, r, o, n) {
              ((r = r || '&'), (o = o || '='));
              var a = {};
              if ('string' != typeof e || 0 === e.length) return a;
              var l = /\+/g;
              e = e.split(r);
              var s = 1e3;
              n && 'number' == typeof n.maxKeys && (s = n.maxKeys);
              var i = e.length;
              s > 0 && i > s && (i = s);
              for (var c = 0; c < i; ++c) {
                var h,
                  u,
                  d,
                  p,
                  f = e[c].replace(l, '%20'),
                  m = f.indexOf(o);
                (m >= 0
                  ? ((h = f.substr(0, m)), (u = f.substr(m + 1)))
                  : ((h = f), (u = '')),
                (d = decodeURIComponent(h)),
                (p = decodeURIComponent(u)),
                Object.prototype.hasOwnProperty.call(a, d))
                  ? t(a[d])
                    ? a[d].push(p)
                    : (a[d] = [a[d], p])
                  : (a[d] = p);
              }
              return a;
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
            e.exports = function (e, a, l, s) {
              return ((a = a || '&'),
              (l = l || '='),
              null === e && (e = void 0),
              'object' == typeof e)
                ? o(n(e), function (n) {
                    var s = encodeURIComponent(t(n)) + l;
                    return r(e[n])
                      ? o(e[n], function (e) {
                          return s + encodeURIComponent(t(e));
                        }).join(a)
                      : s + encodeURIComponent(t(e[n]));
                  }).join(a)
                : s
                  ? encodeURIComponent(t(s)) + l + encodeURIComponent(t(e))
                  : '';
            };
            var r =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
            function o(e, t) {
              if (e.map) return e.map(t);
              for (var r = [], o = 0; o < e.length; o++) r.push(t(e[o], o));
              return r;
            }
            var n =
              Object.keys ||
              function (e) {
                var t = [];
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t;
              };
          },
        },
        r = {};
      function o(t) {
        var n = r[t];
        if (void 0 !== n) return n.exports;
        var a = (r[t] = { exports: {} }),
          l = !0;
        try {
          (e[t](a, a.exports, o), (l = !1));
        } finally {
          l && delete r[t];
        }
        return a.exports;
      }
      o.ab =
        '/ROOT/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/querystring-es3/';
      var n = {};
      ((n.decode = n.parse = o(815)),
        (n.encode = n.stringify = o(577)),
        (t.exports = n));
    })();
  },
  50148,
  (e, t, r) => {
    var o = {
        452: function (t) {
          'use strict';
          t.exports = e.r(25594);
        },
      },
      n = {};
    function a(e) {
      var t = n[e];
      if (void 0 !== t) return t.exports;
      var r = (n[e] = { exports: {} }),
        l = !0;
      try {
        (o[e](r, r.exports, a), (l = !1));
      } finally {
        l && delete n[e];
      }
      return r.exports;
    }
    a.ab =
      '/ROOT/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/native-url/';
    var l = {};
    (!(function () {
      var e,
        t =
          (e = a(452)) && 'object' == typeof e && 'default' in e
            ? e.default
            : e,
        r = /https?|ftp|gopher|file/;
      function o(e) {
        'string' == typeof e && (e = v(e));
        var o,
          n,
          a,
          l,
          s,
          i,
          c,
          h,
          u,
          d =
            ((n = (o = e).auth),
            (a = o.hostname),
            (l = o.protocol || ''),
            (s = o.pathname || ''),
            (i = o.hash || ''),
            (c = o.query || ''),
            (h = !1),
            (n = n ? encodeURIComponent(n).replace(/%3A/i, ':') + '@' : ''),
            o.host
              ? (h = n + o.host)
              : a &&
                ((h = n + (~a.indexOf(':') ? '[' + a + ']' : a)),
                o.port && (h += ':' + o.port)),
            c && 'object' == typeof c && (c = t.encode(c)),
            (u = o.search || (c && '?' + c) || ''),
            l && ':' !== l.substr(-1) && (l += ':'),
            o.slashes || ((!l || r.test(l)) && !1 !== h)
              ? ((h = '//' + (h || '')), s && '/' !== s[0] && (s = '/' + s))
              : h || (h = ''),
            i && '#' !== i[0] && (i = '#' + i),
            u && '?' !== u[0] && (u = '?' + u),
            {
              protocol: l,
              host: h,
              pathname: (s = s.replace(/[?#]/g, encodeURIComponent)),
              search: (u = u.replace('#', '%23')),
              hash: i,
            });
        return '' + d.protocol + d.host + d.pathname + d.search + d.hash;
      }
      var n = 'http://',
        s = n + 'w.w',
        i = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
        c = /https?|ftp|gopher|file/;
      function h(e, t) {
        var r = 'string' == typeof e ? v(e) : e;
        e = 'object' == typeof e ? o(e) : e;
        var a = v(t),
          l = '';
        (r.protocol &&
          !r.slashes &&
          ((l = r.protocol),
          (e = e.replace(r.protocol, '')),
          (l += '/' === t[0] || '/' === e[0] ? '/' : '')),
          l &&
            a.protocol &&
            ((l = ''),
            a.slashes || ((l = a.protocol), (t = t.replace(a.protocol, '')))));
        var h = e.match(i);
        h &&
          !a.protocol &&
          ((e = e.substr((l = h[1] + (h[2] || '')).length)),
          /^\/\/[^/]/.test(t) && (l = l.slice(0, -1)));
        var u = new URL(e, s + '/'),
          d = new URL(t, u).toString().replace(s, ''),
          p = a.protocol || r.protocol;
        return (
          (p += r.slashes || a.slashes ? '//' : ''),
          !l && p ? (d = d.replace(n, p)) : l && (d = d.replace(n, '')),
          c.test(d) ||
            ~t.indexOf('.') ||
            '/' === e.slice(-1) ||
            '/' === t.slice(-1) ||
            '/' !== d.slice(-1) ||
            (d = d.slice(0, -1)),
          l && (d = l + ('/' === d[0] ? d.substr(1) : d)),
          d
        );
      }
      function u() {}
      ((u.prototype.parse = v),
        (u.prototype.format = o),
        (u.prototype.resolve = h),
        (u.prototype.resolveObject = h));
      var d = /^https?|ftp|gopher|file/,
        p = /^(.*?)([#?].*)/,
        f = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
        m = /^([a-z0-9.+-]*:)?\/\/\/*/i,
        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
      function v(e, r, n) {
        if (
          (void 0 === r && (r = !1),
          void 0 === n && (n = !1),
          e && 'object' == typeof e && e instanceof u)
        )
          return e;
        var a = (e = e.trim()).match(p);
        ((e = a ? a[1].replace(/\\/g, '/') + a[2] : e.replace(/\\/g, '/')),
          g.test(e) && '/' !== e.slice(-1) && (e += '/'));
        var l = !/(^javascript)/.test(e) && e.match(f),
          i = m.test(e),
          c = '';
        l &&
          (d.test(l[1]) || ((c = l[1].toLowerCase()), (e = '' + l[2] + l[3])),
          l[2] ||
            ((i = !1),
            d.test(l[1]) ? ((c = l[1]), (e = '' + l[3])) : (e = '//' + l[3])),
          (3 !== l[2].length && 1 !== l[2].length) ||
            ((c = l[1]), (e = '/' + l[3])));
        var h,
          v = (a ? a[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
          b = v && v[1],
          x = new u(),
          y = '',
          w = '';
        try {
          h = new URL(e);
        } catch (t) {
          ((y = t),
            c ||
              n ||
              !/^\/\//.test(e) ||
              /^\/\/.+[@.]/.test(e) ||
              ((w = '/'), (e = e.substr(1))));
          try {
            h = new URL(e, s);
          } catch (e) {
            return ((x.protocol = c), (x.href = c), x);
          }
        }
        ((x.slashes = i && !w),
          (x.host = 'w.w' === h.host ? '' : h.host),
          (x.hostname =
            'w.w' === h.hostname ? '' : h.hostname.replace(/(\[|\])/g, '')),
          (x.protocol = y ? c || null : h.protocol),
          (x.search = h.search.replace(/\\/g, '%5C')),
          (x.hash = h.hash.replace(/\\/g, '%5C')));
        var j = e.split('#');
        (!x.search && ~j[0].indexOf('?') && (x.search = '?'),
          x.hash || '' !== j[1] || (x.hash = '#'),
          (x.query = r ? t.decode(h.search.substr(1)) : x.search.substr(1)),
          (x.pathname =
            w +
            (l
              ? h.pathname
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
              : h.pathname)),
          'about:' === x.protocol &&
            'blank' === x.pathname &&
            ((x.protocol = ''), (x.pathname = '')),
          y && '/' !== e[0] && (x.pathname = x.pathname.substr(1)),
          c &&
            !d.test(c) &&
            '/' !== e.slice(-1) &&
            '/' === x.pathname &&
            (x.pathname = ''),
          (x.path = x.pathname + x.search),
          (x.auth = [h.username, h.password]
            .map(decodeURIComponent)
            .filter(Boolean)
            .join(':')),
          (x.port = h.port),
          b && !x.host.endsWith(b) && ((x.host += b), (x.port = b.slice(1))),
          (x.href = w ? '' + x.pathname + x.search + x.hash : o(x)));
        var C = /^(file)/.test(x.href) ? ['host', 'hostname'] : [];
        return (
          Object.keys(x).forEach(function (e) {
            ~C.indexOf(e) || (x[e] = x[e] || null);
          }),
          x
        );
      }
      ((l.parse = v),
        (l.format = o),
        (l.resolve = h),
        (l.resolveObject = function (e, t) {
          return v(h(e, t));
        }),
        (l.Url = u));
    })(),
      (t.exports = l));
  },
  93002,
  (e) => {
    'use strict';
    var t = e.i(68601),
      r = e.i(75705),
      o = e.i(98726);
    e.s([
      'ReactPreview',
      0,
      ({
        id: e = '',
        emoji: n = '',
        group: a = '',
        name: l = '',
        code: s = '',
        chart: i = (0, t.jsx)(t.Fragment, {}),
      }) => {
        let [c, h] = (0, r.useState)(!0);
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
                    (0, t.jsx)('span', { className: 'text-4xl', children: n }),
                    (0, t.jsxs)('div', {
                      children: [
                        (0, t.jsx)('p', {
                          className: 'text-xs capitalize',
                          children: a,
                        }),
                        (0, t.jsx)('h3', {
                          className: 'text-xl font-bold capitalize md:text-2xl',
                          children: l,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => h((e) => !e),
                  children: c ? 'Preview' : 'Code',
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: c
                ? (0, t.jsx)('div', {
                    className:
                      'flex w-full items-center justify-center p-4 md:p-8',
                    children: i,
                  })
                : (0, t.jsx)(o.Shiki, { code: s, lang: 'html' }),
            }),
          ],
        });
      },
    ]);
  },
  18104,
  (e) => {
    'use strict';
    var t = e.i(68601),
      r = e.i(93002),
      o = e.i(75705);
    let n = ({
        columns: e,
        data: r,
        rowHeight: n,
        height: a,
        renderCell: l,
      }) => {
        let s = (0, o.useRef)(null),
          [i, c] = (0, o.useState)(0),
          [h, u] = (0, o.useState)(new Set()),
          [d, p] = (0, o.useState)(null),
          f = r.length * n,
          m = Math.ceil(a / n),
          g = Math.floor(i / n),
          v = Math.min(g + m + 1, r.length),
          b = r.slice(g, v),
          x = (0, o.useCallback)(() => {
            s.current && c(s.current.scrollTop);
          }, []),
          y = (e) => {
            if (!s.current) return;
            let t = s.current,
              r = t.scrollTop,
              o = e * n,
              l = o + n;
            o < r ? (t.scrollTop = o) : l > r + a && (t.scrollTop = l - a);
          },
          w = (e, t) => {
            let r = Math.min(e, t),
              o = Math.max(e, t),
              n = new Set(h);
            for (let e = r; e <= o; e++) n.add(e);
            return n;
          };
        return (
          (0, o.useEffect)(() => {
            let e = s.current;
            if (e)
              return (
                e.addEventListener('scroll', x),
                () => e.removeEventListener('scroll', x)
              );
          }, [x]),
          (0, t.jsxs)('div', {
            className:
              'overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800',
            tabIndex: 0,
            onKeyDown: (e) => {
              if (0 === r.length) return;
              let t = null !== d ? d : h.size > 0 ? Math.min(...h) : 0;
              if ('ArrowDown' === e.key) {
                e.preventDefault();
                let o = Math.min(t + 1, r.length - 1);
                (e.shiftKey ? u(w(d ?? o, o)) : (u(new Set([o])), p(o)),
                  y(o),
                  p(o));
              }
              if ('ArrowUp' === e.key) {
                e.preventDefault();
                let r = Math.max(t - 1, 0);
                (e.shiftKey ? u(w(d ?? r, r)) : (u(new Set([r])), p(r)),
                  y(r),
                  p(r));
              }
            },
            role: 'grid',
            'aria-rowcount': r.length,
            'aria-colcount': e.length,
            children: [
              (0, t.jsx)('table', {
                className: 'w-full border-collapse',
                role: 'rowgroup',
                children: (0, t.jsx)('thead', {
                  children: (0, t.jsx)('tr', {
                    children: e.map((e) =>
                      (0, t.jsx)(
                        'th',
                        {
                          className:
                            'border-b border-neutral-200 bg-neutral-100 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900',
                          style: { width: e.width ?? 'auto' },
                          role: 'columnheader',
                          children: e.label,
                        },
                        String(e.key)
                      )
                    ),
                  }),
                }),
              }),
              (0, t.jsx)('div', {
                ref: s,
                className: 'relative overflow-y-auto focus:outline-none',
                style: { height: a },
                role: 'rowgroup',
                children: (0, t.jsx)('div', {
                  className: 'relative',
                  style: { height: f },
                  children: b.map((r, o) => {
                    let a = g + o,
                      s = h.has(a);
                    return (0, t.jsx)(
                      'div',
                      {
                        style: {
                          position: 'absolute',
                          top: a * n,
                          height: n,
                          left: 0,
                          right: 0,
                          display: 'table',
                          width: '100%',
                          tableLayout: 'fixed',
                          background: s ? '#e2e8f0' : void 0,
                          cursor: 'pointer',
                        },
                        onClick: (e) => {
                          let t;
                          return (
                            (t = e.ctrlKey || e.metaKey),
                            void (e.shiftKey && null !== d
                              ? u(w(d, a))
                              : (t
                                  ? u((e) => {
                                      let t = new Set(e);
                                      return (
                                        t.has(a) ? t.delete(a) : t.add(a),
                                        t
                                      );
                                    })
                                  : u(new Set([a])),
                                p(a)),
                            y(a))
                          );
                        },
                        role: 'row',
                        'aria-selected': s,
                        tabIndex: -1,
                        children: (0, t.jsx)('table', {
                          className: 'w-full border-collapse',
                          role: 'presentation',
                          children: (0, t.jsx)('tbody', {
                            children: (0, t.jsx)('tr', {
                              children: e.map((e) =>
                                (0, t.jsx)(
                                  'td',
                                  {
                                    className:
                                      'border-b border-neutral-200 p-2 text-left dark:border-neutral-800',
                                    style: { width: e.width ?? 'auto' },
                                    role: 'gridcell',
                                    children: l
                                      ? l(r, e, a, s)
                                      : String(r[e.key]),
                                  },
                                  String(e.key)
                                )
                              ),
                            }),
                          }),
                        }),
                      },
                      a
                    );
                  }),
                }),
              }),
            ],
          })
        );
      },
      a = () => {
        let e = Array.from({ length: 1e4 }, (e, t) => ({
          id: t + 1,
          name: `Person ${t + 1}`,
          age: 20 + (t % 50),
          email: `user${t + 1}@example.com`,
        }));
        return (0, t.jsx)('div', {
          className: 'w-full',
          children: (0, t.jsx)(n, {
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
    var l = e.i(60373),
      s = e.i(10583);
    let i = (0, e.i(50148).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/react/virtual-table/index.tsx')}`;
        },
      }.url
    );
    (console.log((0, s.join)((0, s.dirname)(i), '../../../..')),
      e.s(
        [
          '__N_SSG',
          () => !0,
          'default',
          0,
          ({ code: e = '' }) =>
            (0, t.jsx)(l.PageTemplate, {
              disabledSearch: !0,
              query: 'query',
              setState: () => {},
              id: 'react-virtual-table',
              emoji: '📋',
              title: 'atomic/virtual-table',
              description:
                'is a high-performance virtualized table component for React that supports large datasets by rendering only visible rows. Includes keyboard navigation for row selection (arrow keys) and mouse click to select rows with automatic scrolling to keep the selected row in view.',
              children: (0, t.jsx)('section', {
                className: 'py-8 md:py-16',
                children: (0, t.jsx)('div', {
                  className: 'container mx-auto px-8',
                  children: (0, t.jsx)('div', {
                    className: 'flex flex-col gap-y-4 md:gap-y-8',
                    children: (0, t.jsx)(r.ReactPreview, {
                      id: 'virtual-table',
                      emoji: '📋',
                      group: 'React',
                      name: 'Virtual Table',
                      code: e,
                      chart: (0, t.jsx)(a, {}),
                    }),
                  }),
                }),
              }),
            }),
        ],
        18104
      ));
  },
  63414,
  (e, t, r) => {
    let o = '/react/virtual-table';
    ((window.__NEXT_P = window.__NEXT_P || []).push([o, () => e.r(18104)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([o]);
        }));
  },
]);
