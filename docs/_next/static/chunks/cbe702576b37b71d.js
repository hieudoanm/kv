(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  86861,
  (e, t, l) => {
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
            function l(e, t) {
              for (
                var l, r = '', a = 0, n = -1, o = 0, i = 0;
                i <= e.length;
                ++i
              ) {
                if (i < e.length) l = e.charCodeAt(i);
                else if (47 === l) break;
                else l = 47;
                if (47 === l) {
                  if (n === i - 1 || 1 === o);
                  else if (n !== i - 1 && 2 === o) {
                    if (
                      r.length < 2 ||
                      2 !== a ||
                      46 !== r.charCodeAt(r.length - 1) ||
                      46 !== r.charCodeAt(r.length - 2)
                    ) {
                      if (r.length > 2) {
                        var s = r.lastIndexOf('/');
                        if (s !== r.length - 1) {
                          (-1 === s
                            ? ((r = ''), (a = 0))
                            : (a =
                                (r = r.slice(0, s)).length -
                                1 -
                                r.lastIndexOf('/')),
                            (n = i),
                            (o = 0));
                          continue;
                        }
                      } else if (2 === r.length || 1 === r.length) {
                        ((r = ''), (a = 0), (n = i), (o = 0));
                        continue;
                      }
                    }
                    t && (r.length > 0 ? (r += '/..') : (r = '..'), (a = 2));
                  } else
                    (r.length > 0
                      ? (r += '/' + e.slice(n + 1, i))
                      : (r = e.slice(n + 1, i)),
                      (a = i - n - 1));
                  ((n = i), (o = 0));
                } else 46 === l && -1 !== o ? ++o : (o = -1);
              }
              return r;
            }
            var r = {
              resolve: function () {
                for (
                  var e, r, a = '', n = !1, o = arguments.length - 1;
                  o >= -1 && !n;
                  o--
                )
                  (o >= 0
                    ? (r = arguments[o])
                    : (void 0 === e && (e = ''), (r = e)),
                    t(r),
                    0 !== r.length &&
                      ((a = r + '/' + a), (n = 47 === r.charCodeAt(0))));
                if (((a = l(a, !n)), n))
                  if (a.length > 0) return '/' + a;
                  else return '/';
                return a.length > 0 ? a : '.';
              },
              normalize: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                var r = 47 === e.charCodeAt(0),
                  a = 47 === e.charCodeAt(e.length - 1);
                return (0 !== (e = l(e, !r)).length || r || (e = '.'),
                e.length > 0 && a && (e += '/'),
                r)
                  ? '/' + e
                  : e;
              },
              isAbsolute: function (e) {
                return (t(e), e.length > 0 && 47 === e.charCodeAt(0));
              },
              join: function () {
                if (0 == arguments.length) return '.';
                for (var e, l = 0; l < arguments.length; ++l) {
                  var a = arguments[l];
                  (t(a),
                    a.length > 0 && (void 0 === e ? (e = a) : (e += '/' + a)));
                }
                return void 0 === e ? '.' : r.normalize(e);
              },
              relative: function (e, l) {
                if (
                  (t(e),
                  t(l),
                  e === l || (e = r.resolve(e)) === (l = r.resolve(l)))
                )
                  return '';
                for (var a = 1; a < e.length && 47 === e.charCodeAt(a); ++a);
                for (
                  var n = e.length, o = n - a, i = 1;
                  i < l.length && 47 === l.charCodeAt(i);
                  ++i
                );
                for (
                  var s = l.length - i, h = o < s ? o : s, f = -1, c = 0;
                  c <= h;
                  ++c
                ) {
                  if (c === h) {
                    if (s > h) {
                      if (47 === l.charCodeAt(i + c)) return l.slice(i + c + 1);
                      else if (0 === c) return l.slice(i + c);
                    } else
                      o > h &&
                        (47 === e.charCodeAt(a + c)
                          ? (f = c)
                          : 0 === c && (f = 0));
                    break;
                  }
                  var d = e.charCodeAt(a + c);
                  if (d !== l.charCodeAt(i + c)) break;
                  47 === d && (f = c);
                }
                var u = '';
                for (c = a + f + 1; c <= n; ++c)
                  (c === n || 47 === e.charCodeAt(c)) &&
                    (0 === u.length ? (u += '..') : (u += '/..'));
                return u.length > 0
                  ? u + l.slice(i + f)
                  : ((i += f), 47 === l.charCodeAt(i) && ++i, l.slice(i));
              },
              _makeLong: function (e) {
                return e;
              },
              dirname: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                for (
                  var l = e.charCodeAt(0),
                    r = 47 === l,
                    a = -1,
                    n = !0,
                    o = e.length - 1;
                  o >= 1;
                  --o
                )
                  if (47 === (l = e.charCodeAt(o))) {
                    if (!n) {
                      a = o;
                      break;
                    }
                  } else n = !1;
                return -1 === a
                  ? r
                    ? '/'
                    : '.'
                  : r && 1 === a
                    ? '//'
                    : e.slice(0, a);
              },
              basename: function (e, l) {
                if (void 0 !== l && 'string' != typeof l)
                  throw TypeError('"ext" argument must be a string');
                t(e);
                var r,
                  a = 0,
                  n = -1,
                  o = !0;
                if (void 0 !== l && l.length > 0 && l.length <= e.length) {
                  if (l.length === e.length && l === e) return '';
                  var i = l.length - 1,
                    s = -1;
                  for (r = e.length - 1; r >= 0; --r) {
                    var h = e.charCodeAt(r);
                    if (47 === h) {
                      if (!o) {
                        a = r + 1;
                        break;
                      }
                    } else
                      (-1 === s && ((o = !1), (s = r + 1)),
                        i >= 0 &&
                          (h === l.charCodeAt(i)
                            ? -1 == --i && (n = r)
                            : ((i = -1), (n = s))));
                  }
                  return (
                    a === n ? (n = s) : -1 === n && (n = e.length),
                    e.slice(a, n)
                  );
                }
                for (r = e.length - 1; r >= 0; --r)
                  if (47 === e.charCodeAt(r)) {
                    if (!o) {
                      a = r + 1;
                      break;
                    }
                  } else -1 === n && ((o = !1), (n = r + 1));
                return -1 === n ? '' : e.slice(a, n);
              },
              extname: function (e) {
                t(e);
                for (
                  var l = -1, r = 0, a = -1, n = !0, o = 0, i = e.length - 1;
                  i >= 0;
                  --i
                ) {
                  var s = e.charCodeAt(i);
                  if (47 === s) {
                    if (!n) {
                      r = i + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === a && ((n = !1), (a = i + 1)),
                    46 === s
                      ? -1 === l
                        ? (l = i)
                        : 1 !== o && (o = 1)
                      : -1 !== l && (o = -1));
                }
                return -1 === l ||
                  -1 === a ||
                  0 === o ||
                  (1 === o && l === a - 1 && l === r + 1)
                  ? ''
                  : e.slice(l, a);
              },
              format: function (e) {
                var t, l;
                if (null === e || 'object' != typeof e)
                  throw TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof e
                  );
                return (
                  (t = e.dir || e.root),
                  (l = e.base || (e.name || '') + (e.ext || '')),
                  t ? (t === e.root ? t + l : t + '/' + l) : l
                );
              },
              parse: function (e) {
                t(e);
                var l,
                  r = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === e.length) return r;
                var a = e.charCodeAt(0),
                  n = 47 === a;
                n ? ((r.root = '/'), (l = 1)) : (l = 0);
                for (
                  var o = -1, i = 0, s = -1, h = !0, f = e.length - 1, c = 0;
                  f >= l;
                  --f
                ) {
                  if (47 === (a = e.charCodeAt(f))) {
                    if (!h) {
                      i = f + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === s && ((h = !1), (s = f + 1)),
                    46 === a
                      ? -1 === o
                        ? (o = f)
                        : 1 !== c && (c = 1)
                      : -1 !== o && (c = -1));
                }
                return (
                  -1 === o ||
                  -1 === s ||
                  0 === c ||
                  (1 === c && o === s - 1 && o === i + 1)
                    ? -1 !== s &&
                      (0 === i && n
                        ? (r.base = r.name = e.slice(1, s))
                        : (r.base = r.name = e.slice(i, s)))
                    : (0 === i && n
                        ? ((r.name = e.slice(1, o)), (r.base = e.slice(1, s)))
                        : ((r.name = e.slice(i, o)), (r.base = e.slice(i, s))),
                      (r.ext = e.slice(o, s))),
                  i > 0 ? (r.dir = e.slice(0, i - 1)) : n && (r.dir = '/'),
                  r
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null,
            };
            ((r.posix = r), (e.exports = r));
          },
        },
        l = {};
      function r(t) {
        var a = l[t];
        if (void 0 !== a) return a.exports;
        var n = (l[t] = { exports: {} }),
          o = !0;
        try {
          (e[t](n, n.exports, r), (o = !1));
        } finally {
          o && delete l[t];
        }
        return n.exports;
      }
      ((r.ab =
        '/ROOT/node_modules/.pnpm/next@16.0.8_@babel+core@7.28.5_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/path-browserify/'),
        (t.exports = r(114)));
    })();
  },
  18615,
  (e, t, l) => {
    !(function () {
      'use strict';
      var e = {
          815: function (e) {
            e.exports = function (e, l, r, a) {
              ((l = l || '&'), (r = r || '='));
              var n = {};
              if ('string' != typeof e || 0 === e.length) return n;
              var o = /\+/g;
              e = e.split(l);
              var i = 1e3;
              a && 'number' == typeof a.maxKeys && (i = a.maxKeys);
              var s = e.length;
              i > 0 && s > i && (s = i);
              for (var h = 0; h < s; ++h) {
                var f,
                  c,
                  d,
                  u,
                  x = e[h].replace(o, '%20'),
                  p = x.indexOf(r);
                (p >= 0
                  ? ((f = x.substr(0, p)), (c = x.substr(p + 1)))
                  : ((f = x), (c = '')),
                (d = decodeURIComponent(f)),
                (u = decodeURIComponent(c)),
                Object.prototype.hasOwnProperty.call(n, d))
                  ? t(n[d])
                    ? n[d].push(u)
                    : (n[d] = [n[d], u])
                  : (n[d] = u);
              }
              return n;
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
            e.exports = function (e, n, o, i) {
              return ((n = n || '&'),
              (o = o || '='),
              null === e && (e = void 0),
              'object' == typeof e)
                ? r(a(e), function (a) {
                    var i = encodeURIComponent(t(a)) + o;
                    return l(e[a])
                      ? r(e[a], function (e) {
                          return i + encodeURIComponent(t(e));
                        }).join(n)
                      : i + encodeURIComponent(t(e[a]));
                  }).join(n)
                : i
                  ? encodeURIComponent(t(i)) + o + encodeURIComponent(t(e))
                  : '';
            };
            var l =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
            function r(e, t) {
              if (e.map) return e.map(t);
              for (var l = [], r = 0; r < e.length; r++) l.push(t(e[r], r));
              return l;
            }
            var a =
              Object.keys ||
              function (e) {
                var t = [];
                for (var l in e)
                  Object.prototype.hasOwnProperty.call(e, l) && t.push(l);
                return t;
              };
          },
        },
        l = {};
      function r(t) {
        var a = l[t];
        if (void 0 !== a) return a.exports;
        var n = (l[t] = { exports: {} }),
          o = !0;
        try {
          (e[t](n, n.exports, r), (o = !1));
        } finally {
          o && delete l[t];
        }
        return n.exports;
      }
      r.ab =
        '/ROOT/node_modules/.pnpm/next@16.0.8_@babel+core@7.28.5_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/querystring-es3/';
      var a = {};
      ((a.decode = a.parse = r(815)),
        (a.encode = a.stringify = r(577)),
        (t.exports = a));
    })();
  },
  56440,
  (e, t, l) => {
    var r = {
        452: function (t) {
          'use strict';
          t.exports = e.r(18615);
        },
      },
      a = {};
    function n(e) {
      var t = a[e];
      if (void 0 !== t) return t.exports;
      var l = (a[e] = { exports: {} }),
        o = !0;
      try {
        (r[e](l, l.exports, n), (o = !1));
      } finally {
        o && delete a[e];
      }
      return l.exports;
    }
    n.ab =
      '/ROOT/node_modules/.pnpm/next@16.0.8_@babel+core@7.28.5_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/native-url/';
    var o = {};
    (!(function () {
      var e,
        t =
          (e = n(452)) && 'object' == typeof e && 'default' in e
            ? e.default
            : e,
        l = /https?|ftp|gopher|file/;
      function r(e) {
        'string' == typeof e && (e = m(e));
        var r,
          a,
          n,
          o,
          i,
          s,
          h,
          f,
          c,
          d =
            ((a = (r = e).auth),
            (n = r.hostname),
            (o = r.protocol || ''),
            (i = r.pathname || ''),
            (s = r.hash || ''),
            (h = r.query || ''),
            (f = !1),
            (a = a ? encodeURIComponent(a).replace(/%3A/i, ':') + '@' : ''),
            r.host
              ? (f = a + r.host)
              : n &&
                ((f = a + (~n.indexOf(':') ? '[' + n + ']' : n)),
                r.port && (f += ':' + r.port)),
            h && 'object' == typeof h && (h = t.encode(h)),
            (c = r.search || (h && '?' + h) || ''),
            o && ':' !== o.substr(-1) && (o += ':'),
            r.slashes || ((!o || l.test(o)) && !1 !== f)
              ? ((f = '//' + (f || '')), i && '/' !== i[0] && (i = '/' + i))
              : f || (f = ''),
            s && '#' !== s[0] && (s = '#' + s),
            c && '?' !== c[0] && (c = '?' + c),
            {
              protocol: o,
              host: f,
              pathname: (i = i.replace(/[?#]/g, encodeURIComponent)),
              search: (c = c.replace('#', '%23')),
              hash: s,
            });
        return '' + d.protocol + d.host + d.pathname + d.search + d.hash;
      }
      var a = 'http://',
        i = a + 'w.w',
        s = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
        h = /https?|ftp|gopher|file/;
      function f(e, t) {
        var l = 'string' == typeof e ? m(e) : e;
        e = 'object' == typeof e ? r(e) : e;
        var n = m(t),
          o = '';
        (l.protocol &&
          !l.slashes &&
          ((o = l.protocol),
          (e = e.replace(l.protocol, '')),
          (o += '/' === t[0] || '/' === e[0] ? '/' : '')),
          o &&
            n.protocol &&
            ((o = ''),
            n.slashes || ((o = n.protocol), (t = t.replace(n.protocol, '')))));
        var f = e.match(s);
        f &&
          !n.protocol &&
          ((e = e.substr((o = f[1] + (f[2] || '')).length)),
          /^\/\/[^/]/.test(t) && (o = o.slice(0, -1)));
        var c = new URL(e, i + '/'),
          d = new URL(t, c).toString().replace(i, ''),
          u = n.protocol || l.protocol;
        return (
          (u += l.slashes || n.slashes ? '//' : ''),
          !o && u ? (d = d.replace(a, u)) : o && (d = d.replace(a, '')),
          h.test(d) ||
            ~t.indexOf('.') ||
            '/' === e.slice(-1) ||
            '/' === t.slice(-1) ||
            '/' !== d.slice(-1) ||
            (d = d.slice(0, -1)),
          o && (d = o + ('/' === d[0] ? d.substr(1) : d)),
          d
        );
      }
      function c() {}
      ((c.prototype.parse = m),
        (c.prototype.format = r),
        (c.prototype.resolve = f),
        (c.prototype.resolveObject = f));
      var d = /^https?|ftp|gopher|file/,
        u = /^(.*?)([#?].*)/,
        x = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
        p = /^([a-z0-9.+-]*:)?\/\/\/*/i,
        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
      function m(e, l, a) {
        if (
          (void 0 === l && (l = !1),
          void 0 === a && (a = !1),
          e && 'object' == typeof e && e instanceof c)
        )
          return e;
        var n = (e = e.trim()).match(u);
        ((e = n ? n[1].replace(/\\/g, '/') + n[2] : e.replace(/\\/g, '/')),
          g.test(e) && '/' !== e.slice(-1) && (e += '/'));
        var o = !/(^javascript)/.test(e) && e.match(x),
          s = p.test(e),
          h = '';
        o &&
          (d.test(o[1]) || ((h = o[1].toLowerCase()), (e = '' + o[2] + o[3])),
          o[2] ||
            ((s = !1),
            d.test(o[1]) ? ((h = o[1]), (e = '' + o[3])) : (e = '//' + o[3])),
          (3 !== o[2].length && 1 !== o[2].length) ||
            ((h = o[1]), (e = '/' + o[3])));
        var f,
          m = (n ? n[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
          b = m && m[1],
          v = new c(),
          y = '',
          T = '';
        try {
          f = new URL(e);
        } catch (t) {
          ((y = t),
            h ||
              a ||
              !/^\/\//.test(e) ||
              /^\/\/.+[@.]/.test(e) ||
              ((T = '/'), (e = e.substr(1))));
          try {
            f = new URL(e, i);
          } catch (e) {
            return ((v.protocol = h), (v.href = h), v);
          }
        }
        ((v.slashes = s && !T),
          (v.host = 'w.w' === f.host ? '' : f.host),
          (v.hostname =
            'w.w' === f.hostname ? '' : f.hostname.replace(/(\[|\])/g, '')),
          (v.protocol = y ? h || null : f.protocol),
          (v.search = f.search.replace(/\\/g, '%5C')),
          (v.hash = f.hash.replace(/\\/g, '%5C')));
        var w = e.split('#');
        (!v.search && ~w[0].indexOf('?') && (v.search = '?'),
          v.hash || '' !== w[1] || (v.hash = '#'),
          (v.query = l ? t.decode(f.search.substr(1)) : v.search.substr(1)),
          (v.pathname =
            T +
            (o
              ? f.pathname
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
              : f.pathname)),
          'about:' === v.protocol &&
            'blank' === v.pathname &&
            ((v.protocol = ''), (v.pathname = '')),
          y && '/' !== e[0] && (v.pathname = v.pathname.substr(1)),
          h &&
            !d.test(h) &&
            '/' !== e.slice(-1) &&
            '/' === v.pathname &&
            (v.pathname = ''),
          (v.path = v.pathname + v.search),
          (v.auth = [f.username, f.password]
            .map(decodeURIComponent)
            .filter(Boolean)
            .join(':')),
          (v.port = f.port),
          b && !v.host.endsWith(b) && ((v.host += b), (v.port = b.slice(1))),
          (v.href = T ? '' + v.pathname + v.search + v.hash : r(v)));
        var k = /^(file)/.test(v.href) ? ['host', 'hostname'] : [];
        return (
          Object.keys(v).forEach(function (e) {
            ~k.indexOf(e) || (v[e] = v[e] || null);
          }),
          v
        );
      }
      ((o.parse = m),
        (o.format = r),
        (o.resolve = f),
        (o.resolveObject = function (e, t) {
          return m(f(e, t));
        }),
        (o.Url = c));
    })(),
      (t.exports = o));
  },
  93002,
  (e) => {
    'use strict';
    var t = e.i(28626),
      l = e.i(24412),
      r = e.i(98726);
    e.s([
      'ReactPreview',
      0,
      ({
        id: e = '',
        emoji: a = '',
        group: n = '',
        name: o = '',
        code: i = '',
        chart: s = (0, t.jsx)(t.Fragment, {}),
      }) => {
        let [h, f] = (0, l.useState)(!0);
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
                    (0, t.jsx)('span', { className: 'text-4xl', children: a }),
                    (0, t.jsxs)('div', {
                      children: [
                        (0, t.jsx)('p', {
                          className: 'text-xs capitalize',
                          children: n,
                        }),
                        (0, t.jsx)('h3', {
                          className: 'text-xl font-bold capitalize md:text-2xl',
                          children: o,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => f((e) => !e),
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
                    children: s,
                  })
                : (0, t.jsx)(r.Shiki, { code: i, lang: 'html' }),
            }),
          ],
        });
      },
    ]);
  },
  20917,
  (e) => {
    'use strict';
    var t = e.i(28626),
      l = e.i(24412),
      r = e.i(93002),
      a = e.i(60373),
      n = e.i(82441),
      o = e.i(86861);
    let i = (0, e.i(56440).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/ui/charts/index.tsx')}`;
        },
      }.url
    );
    console.log((0, o.join)((0, o.dirname)(i), '../../../..'));
    let s = {
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
      f = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      c = {
        area: (0, t.jsx)(
          ({ data: e = [], labels: r = [] }) => {
            let a = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = a.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let n = t.width,
                  o = t.height;
                l.clearRect(0, 0, n, o);
                let i = n - 60 - 40,
                  s = o - 60 - 40,
                  h = Math.max(...e),
                  f = (t) => 60 + (i / (e.length - 1)) * t,
                  c = (e) => 40 + ((h - e) / (h - 0)) * s;
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (s / 5) * e;
                  (l.beginPath(),
                    l.moveTo(60, t),
                    l.lineTo(n - 40, t),
                    l.stroke());
                }
                for (let e = 0; e < r.length; e++) {
                  let t = f(e);
                  (l.beginPath(),
                    l.moveTo(t, 40),
                    l.lineTo(t, o - 60),
                    l.stroke());
                }
                ((l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'right'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (s / 5) * e,
                    r = h - ((h - 0) / 5) * e;
                  l.fillText(r.toFixed(0), 52, t);
                }
                ((l.textAlign = 'center'), (l.textBaseline = 'top'));
                for (let e = 0; e < r.length; e++)
                  l.fillText(r[e], f(e), o - 60 + 6);
                ((l.strokeStyle = '#9ca3af'),
                  (l.lineWidth = 2),
                  l.beginPath(),
                  l.moveTo(60, 40),
                  l.lineTo(60, o - 60),
                  l.stroke(),
                  l.beginPath(),
                  l.moveTo(60, o - 60),
                  l.lineTo(n - 40, o - 60),
                  l.stroke(),
                  l.beginPath(),
                  l.moveTo(f(0), o - 60));
                for (let t = 0; t < e.length; t++) l.lineTo(f(t), c(e[t]));
                (l.lineTo(f(e.length - 1), o - 60),
                  l.closePath(),
                  (l.fillStyle = 'rgba(59, 130, 246, 0.3)'),
                  l.fill(),
                  l.beginPath(),
                  l.moveTo(f(0), c(e[0])));
                for (let t = 0; t < e.length - 1; t++) {
                  let r = (f(t) + f(t + 1)) / 2,
                    a = (c(e[t]) + c(e[t + 1])) / 2;
                  l.quadraticCurveTo(f(t), c(e[t]), r, a);
                }
                (l.quadraticCurveTo(
                  f(e.length - 1),
                  c(e[e.length - 1]),
                  f(e.length - 1),
                  c(e[e.length - 1])
                ),
                  (l.strokeStyle = '#3b82f6'),
                  (l.lineWidth = 2),
                  l.stroke(),
                  (l.fillStyle = '#374151'),
                  (l.font = '14px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText('Month', n / 2, o - 10),
                  l.save(),
                  l.translate(16, o / 2),
                  l.rotate(-Math.PI / 2),
                  l.fillText('Revenue ($)', 0, 0),
                  l.restore(),
                  (l.fillStyle = '#3b82f6'),
                  l.fillRect(n / 2 - 30, 0, 12, 12),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  l.fillText('Revenue', n / 2 - 12, 6));
              }, [e, r]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: a,
                  width: 400,
                  height: 200,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          { data: h, labels: f }
        ),
        bar: (0, t.jsx)(
          ({ data: e = [], labels: r = [] }) => {
            let a = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = a.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let n = t.width,
                  o = t.height;
                l.clearRect(0, 0, n, o);
                let i = n - 60 - 40,
                  s = o - 60 - 40,
                  h = Math.max(...e);
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (s / 5) * e;
                  (l.beginPath(),
                    l.moveTo(60, t),
                    l.lineTo(n - 40, t),
                    l.stroke());
                }
                let f = r.length;
                for (let e = 0; e < f; e++) {
                  let t = 60 + (i / f) * e + i / f / 2;
                  (l.beginPath(),
                    l.moveTo(t, 40),
                    l.lineTo(t, o - 60),
                    l.stroke());
                }
                ((l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'right'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (s / 5) * e,
                    r = h - ((h - 0) / 5) * e;
                  l.fillText(r.toFixed(0), 52, t);
                }
                ((l.textAlign = 'center'), (l.textBaseline = 'top'));
                for (let e = 0; e < r.length; e++) {
                  let t = 60 + (i / f) * e + i / f / 2;
                  l.fillText(r[e], t, o - 60 + 6);
                }
                ((l.strokeStyle = '#9ca3af'),
                  (l.lineWidth = 2),
                  l.beginPath(),
                  l.moveTo(60, 40),
                  l.lineTo(60, o - 60),
                  l.stroke(),
                  l.beginPath(),
                  l.moveTo(60, o - 60),
                  l.lineTo(n - 40, o - 60),
                  l.stroke());
                let c = i / f / 2;
                l.fillStyle = '#3b82f6';
                for (let t = 0; t < e.length; t++) {
                  let r = 60 + (i / f) * t + i / f / 2 - c / 2,
                    a = 40 + ((h - e[t]) / (h - 0)) * s,
                    n = o - 60 - a;
                  l.fillRect(r, a, c, n);
                }
                ((l.fillStyle = '#374151'),
                  (l.font = '14px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText('Month', n / 2, o - 10),
                  l.save(),
                  l.translate(16, o / 2),
                  l.rotate(-Math.PI / 2),
                  l.fillText('Revenue ($)', 0, 0),
                  l.restore());
                let d = n / 2 - 16;
                ((l.fillStyle = '#3b82f6'),
                  l.fillRect(d, 0, 12, 12),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'),
                  l.fillText('Revenue', d + 16, 6));
              }, [e, r]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: a,
                  width: 400,
                  height: 200,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          { data: h, labels: f }
        ),
        bubble: (0, t.jsx)(
          ({
            data: e = [],
            xLabels: r = [],
            yLabels: a = [],
            xName: n = 'X Axis',
            yName: o = 'Y Axis',
          }) => {
            let i = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = i.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let s = t.width,
                  h = t.height;
                l.clearRect(0, 0, s, h);
                let f = s - 60 - 40,
                  c = h - 60 - 40,
                  d = e.map((e) => e.x),
                  u = e.map((e) => e.y),
                  x = Math.min(...d),
                  p = Math.max(...d),
                  g = Math.min(...u),
                  m = Math.max(...u);
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                let b = a.length - 1 || 5;
                for (let e = 0; e <= b; e++) {
                  let t = 40 + (c / b) * e;
                  (l.beginPath(),
                    l.moveTo(60, t),
                    l.lineTo(s - 40, t),
                    l.stroke(),
                    (l.fillStyle = '#374151'),
                    (l.font = '12px sans-serif'),
                    (l.textAlign = 'right'),
                    (l.textBaseline = 'middle'));
                  let r = a[b - e] || (g + ((m - g) / b) * (b - e)).toFixed(0);
                  l.fillText(r.toString(), 52, t);
                }
                let v = r.length - 1 || 5;
                for (let e = 0; e <= v; e++) {
                  let t = 60 + (f / v) * e;
                  (l.beginPath(),
                    l.moveTo(t, 40),
                    l.lineTo(t, h - 60),
                    l.stroke(),
                    (l.fillStyle = '#374151'),
                    (l.font = '12px sans-serif'),
                    (l.textAlign = 'center'),
                    (l.textBaseline = 'top'));
                  let a = r[e] || (x + ((p - x) / v) * e).toFixed(0);
                  l.fillText(a.toString(), t, h - 60 + 6);
                }
                ((l.strokeStyle = '#9ca3af'),
                  (l.lineWidth = 2),
                  l.beginPath(),
                  l.moveTo(60, 40),
                  l.lineTo(60, h - 60),
                  l.stroke(),
                  l.beginPath(),
                  l.moveTo(60, h - 60),
                  l.lineTo(s - 40, h - 60),
                  l.stroke(),
                  e.forEach(({ x: e, y: t, r }) => {
                    (l.beginPath(),
                      (l.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                      (l.strokeStyle = '#3b82f6'),
                      (l.lineWidth = 1),
                      l.arc(
                        60 + ((e - x) / (p - x)) * f,
                        40 + ((m - t) / (m - g)) * c,
                        r,
                        0,
                        2 * Math.PI
                      ),
                      l.fill(),
                      l.stroke());
                  }),
                  (l.fillStyle = '#374151'),
                  (l.font = '14px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText(n, s / 2, h - 10),
                  l.save(),
                  l.translate(16, h / 2),
                  l.rotate(-Math.PI / 2),
                  l.fillText(o, 0, 0),
                  l.restore());
                let y = s / 2 - 16;
                (l.beginPath(),
                  (l.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                  (l.strokeStyle = '#3b82f6'),
                  (l.lineWidth = 1),
                  l.arc(y + 8, 8, 8, 0, 2 * Math.PI),
                  l.fill(),
                  l.stroke(),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'),
                  l.fillText('Bubble Size = Radius', y + 16 + 8, 8));
              }, [e, r, a, n, o]),
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
            labels: r = [],
            colors: a,
            title: n = 'Doughnut Chart',
          }) => {
            let o = (0, l.useRef)(null),
              i = a || [
                '#3b82f6',
                '#ef4444',
                '#f59e0b',
                '#10b981',
                '#8b5cf6',
                '#ec4899',
                '#14b8a6',
              ];
            return (
              (0, l.useEffect)(() => {
                let t = o.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let a = t.width,
                  s = t.height,
                  h = a / 2,
                  f = s / 2,
                  c = Math.min(a, s) / 2 - 40;
                l.clearRect(0, 0, a, s);
                let d = e.reduce((e, t) => e + t, 0),
                  u = -Math.PI / 2;
                (e.forEach((e, t) => {
                  let r = u + (e / d) * 2 * Math.PI;
                  (l.beginPath(),
                    l.moveTo(h, f),
                    l.arc(h, f, c, u, r),
                    l.closePath(),
                    (l.fillStyle = i[t % i.length]),
                    l.fill(),
                    (u = r));
                }),
                  l.beginPath(),
                  (l.fillStyle = '#fff'),
                  l.moveTo(h, f),
                  l.arc(h, f, 0.6 * c, 0, 2 * Math.PI),
                  l.fill());
                let x = a - 75,
                  p = 20;
                ((l.font = '14px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'),
                  r.forEach((e, t) => {
                    ((l.fillStyle = i[t % i.length]),
                      l.fillRect(x, p, 16, 16),
                      (l.fillStyle = '#374151'),
                      l.fillText(e, x + 16 + 8, p + 8),
                      (p += 24));
                  }),
                  (l.fillStyle = '#374151'),
                  (l.font = '16px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText(n, h, 20));
              }, [e, r, i, n]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: o,
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
          ({ data: e, labels: r, maxValue: a, title: n }) => {
            let o = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = o.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let i = t.width,
                  s = t.height;
                l.clearRect(0, 0, i, s);
                let h = i / 2,
                  f = s / 2,
                  c = Math.min(i, s) / 2 - 60,
                  d = r.length,
                  u = (2 * Math.PI) / d,
                  x = a ?? Math.max(...e, 1);
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                for (let e = 1; e <= 5; e++) {
                  let t = (c / 5) * e;
                  (l.beginPath(), l.arc(h, f, t, 0, 2 * Math.PI), l.stroke());
                }
                ((l.strokeStyle = '#9ca3af'),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'center'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e < d; e++) {
                  let t = e * u - Math.PI / 2,
                    a = h + c * Math.cos(t),
                    n = f + c * Math.sin(t);
                  (l.beginPath(), l.moveTo(h, f), l.lineTo(a, n), l.stroke());
                  let o = h + (c + 20) * Math.cos(t),
                    i = f + (c + 20) * Math.sin(t);
                  l.fillText(r[e], o, i);
                }
                let p = [
                  '#3b82f6',
                  '#ef4444',
                  '#f59e0b',
                  '#10b981',
                  '#8b5cf6',
                  '#ec4899',
                  '#22d3ee',
                ];
                for (let t = 0; t < d; t++) {
                  let r = c * ((e[t] - 0) / (x - 0)),
                    a = t * u - Math.PI / 2,
                    n = a + u;
                  (l.beginPath(),
                    l.moveTo(h, f),
                    l.arc(h, f, r, a, n),
                    l.closePath(),
                    (l.fillStyle = p[t % p.length] + 'cc'),
                    l.fill(),
                    (l.strokeStyle = p[t % p.length]),
                    (l.lineWidth = 2),
                    l.stroke());
                }
                n &&
                  ((l.fillStyle = '#374151'),
                  (l.font = '16px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText(n, h, 30));
                let g = i - 140,
                  m = 40;
                ((l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e < d; e++)
                  ((l.fillStyle = p[e % p.length]),
                    l.beginPath(),
                    l.arc(g + 8, m + 8, 8, 0, 2 * Math.PI),
                    l.fill(),
                    (l.fillStyle = '#374151'),
                    l.fillText(r[e], g + 16 + 8, m + 8),
                    (m += 28));
              }, [e, r, a, n]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: o,
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
          ({ data: e = [], labels: r = [] }) => {
            let a = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = a.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let n = t.width,
                  o = t.height;
                l.clearRect(0, 0, n, o);
                let i = Math.max(...e),
                  s = o - 60 - 40,
                  h = n - 60 - 40;
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (s / 5) * e;
                  (l.beginPath(),
                    l.moveTo(60, t),
                    l.lineTo(n - 40, t),
                    l.stroke());
                }
                let f = r.length;
                for (let e = 0; e < f; e++) {
                  let t = 60 + (h / (f - 1)) * e;
                  (l.beginPath(),
                    l.moveTo(t, 40),
                    l.lineTo(t, o - 60),
                    l.stroke());
                }
                ((l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'right'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 40 + (s / 5) * e,
                    r = i - ((i - 0) / 5) * e;
                  l.fillText(r.toFixed(0), 52, t);
                }
                ((l.textAlign = 'center'), (l.textBaseline = 'top'));
                for (let e = 0; e < r.length; e++) {
                  let t = 60 + (h / (r.length - 1)) * e;
                  l.fillText(r[e], t, o - 60 + 6);
                }
                ((l.strokeStyle = '#9ca3af'),
                  (l.lineWidth = 2),
                  l.beginPath(),
                  l.moveTo(60, 40),
                  l.lineTo(60, o - 60),
                  l.stroke(),
                  l.beginPath(),
                  l.moveTo(60, o - 60),
                  l.lineTo(n - 40, o - 60),
                  l.stroke(),
                  (l.strokeStyle = '#3b82f6'),
                  (l.lineWidth = 2),
                  l.beginPath(),
                  e.forEach((t, r) => {
                    let a = 60 + (h / (e.length - 1)) * r,
                      n = 40 + ((i - t) / (i - 0)) * s;
                    0 === r ? l.moveTo(a, n) : l.lineTo(a, n);
                  }),
                  l.stroke(),
                  (l.fillStyle = '#374151'),
                  (l.font = '14px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText('Month', n / 2, o - 10),
                  l.save(),
                  l.translate(16, o / 2),
                  l.rotate(-Math.PI / 2),
                  l.fillText('Revenue ($)', 0, 0),
                  l.restore());
                let c = n / 2 - 16;
                ((l.fillStyle = '#3b82f6'),
                  l.fillRect(c, 0, 12, 12),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'),
                  l.fillText('Revenue', c + 16, 6));
              }, [e, r]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: a,
                  width: 400,
                  height: 200,
                  className: 'h-auto w-full',
                }),
              })
            );
          },
          { data: h, labels: f }
        ),
        radar: (0, t.jsx)(
          ({ data: e, labels: r, maxValue: a, title: n }) => {
            let o = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = o.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let i = t.width,
                  s = t.height;
                l.clearRect(0, 0, i, s);
                let h = i / 2,
                  f = s / 2,
                  c = Math.min(i, s) / 2 - 60,
                  d = r.length,
                  u = (2 * Math.PI) / d,
                  x = a ?? Math.max(...e, 1);
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                for (let e = 1; e <= 5; e++) {
                  let t = (c / 5) * e;
                  l.beginPath();
                  for (let e = 0; e < d; e++) {
                    let r = e * u - Math.PI / 2,
                      a = h + t * Math.cos(r),
                      n = f + t * Math.sin(r);
                    0 === e ? l.moveTo(a, n) : l.lineTo(a, n);
                  }
                  (l.closePath(), l.stroke());
                }
                ((l.strokeStyle = '#9ca3af'),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'center'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e < d; e++) {
                  let t = e * u - Math.PI / 2,
                    a = h + c * Math.cos(t),
                    n = f + c * Math.sin(t);
                  (l.beginPath(), l.moveTo(h, f), l.lineTo(a, n), l.stroke());
                  let o = h + (c + 20) * Math.cos(t),
                    i = f + (c + 20) * Math.sin(t);
                  l.fillText(r[e], o, i);
                }
                ((l.strokeStyle = '#3b82f6'),
                  (l.fillStyle = 'rgba(59, 130, 246, 0.4)'),
                  (l.lineWidth = 2),
                  l.beginPath());
                for (let t = 0; t < d; t++) {
                  let r = c * ((e[t] - 0) / (x - 0)),
                    a = t * u - Math.PI / 2,
                    n = h + r * Math.cos(a),
                    o = f + r * Math.sin(a);
                  0 === t ? l.moveTo(n, o) : l.lineTo(n, o);
                }
                (l.closePath(),
                  l.fill(),
                  l.stroke(),
                  (l.fillStyle = '#1e40af'));
                for (let t = 0; t < d; t++) {
                  let r = c * ((e[t] - 0) / (x - 0)),
                    a = t * u - Math.PI / 2,
                    n = h + r * Math.cos(a),
                    o = f + r * Math.sin(a);
                  (l.beginPath(), l.arc(n, o, 4, 0, 2 * Math.PI), l.fill());
                }
                n &&
                  ((l.fillStyle = '#374151'),
                  (l.font = '16px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText(n, h, 30));
                let p = i - 140;
                ((l.fillStyle = '#3b82f6'),
                  l.beginPath(),
                  l.arc(p + 8, 48, 8, 0, 2 * Math.PI),
                  l.fill(),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'),
                  l.fillText('Dataset 1', p + 16 + 8, 48));
              }, [e, r, a, n]),
              (0, t.jsx)('div', {
                className:
                  'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, t.jsx)('canvas', {
                  ref: o,
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
            xLabel: r = 'X Axis',
            yLabel: a = 'Y Axis',
            title: n = 'Scatter Chart',
            pointColor: o = '#3b82f6',
          }) => {
            let i = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(() => {
                let t = i.current;
                if (!t) return;
                let l = t.getContext('2d');
                if (!l) return;
                let s = t.width,
                  h = t.height;
                l.clearRect(0, 0, s, h);
                let f = e.map((e) => e.x),
                  c = e.map((e) => e.y),
                  d = Math.min(...f),
                  u = Math.max(...f),
                  x = Math.min(...c),
                  p = Math.max(...c),
                  g = s - 70 - 50,
                  m = h - 70 - 50;
                ((l.strokeStyle = '#e5e7eb'), (l.lineWidth = 1));
                for (let e = 0; e <= 5; e++) {
                  let t = 50 + (m / 5) * e;
                  (l.beginPath(),
                    l.moveTo(70, t),
                    l.lineTo(s - 50, t),
                    l.stroke());
                }
                for (let e = 0; e <= 5; e++) {
                  let t = 70 + (g / 5) * e;
                  (l.beginPath(),
                    l.moveTo(t, 50),
                    l.lineTo(t, h - 70),
                    l.stroke());
                }
                ((l.strokeStyle = '#9ca3af'),
                  (l.lineWidth = 2),
                  l.beginPath(),
                  l.moveTo(70, 50),
                  l.lineTo(70, h - 70),
                  l.stroke(),
                  l.beginPath(),
                  l.moveTo(70, h - 70),
                  l.lineTo(s - 50, h - 70),
                  l.stroke(),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'right'),
                  (l.textBaseline = 'middle'));
                for (let e = 0; e <= 5; e++) {
                  let t = 50 + (m / 5) * e,
                    r = p - ((p - x) / 5) * e;
                  l.fillText(r.toFixed(2), 62, t);
                }
                ((l.textAlign = 'center'), (l.textBaseline = 'top'));
                for (let e = 0; e <= 5; e++) {
                  let t = 70 + (g / 5) * e,
                    r = d + ((u - d) / 5) * e;
                  l.fillText(r.toFixed(2), t, h - 70 + 6);
                }
                ((l.fillStyle = o),
                  e.forEach(({ x: e, y: t }) => {
                    (l.beginPath(),
                      l.arc(
                        70 + ((e - d) / (u - d)) * g,
                        50 + ((p - t) / (p - x)) * m,
                        5,
                        0,
                        2 * Math.PI
                      ),
                      l.fill());
                  }),
                  (l.fillStyle = '#374151'),
                  (l.font = '14px sans-serif'),
                  (l.textAlign = 'center'),
                  l.fillText(r, s / 2, h - 20),
                  l.save(),
                  l.translate(20, h / 2),
                  l.rotate(-Math.PI / 2),
                  l.fillText(a, 0, 0),
                  l.restore(),
                  l.fillText(n, s / 2, 30));
                let b = s - 150;
                ((l.fillStyle = o),
                  l.beginPath(),
                  l.arc(b + 8, 48, 8, 0, 2 * Math.PI),
                  l.fill(),
                  (l.fillStyle = '#374151'),
                  (l.font = '12px sans-serif'),
                  (l.textAlign = 'left'),
                  (l.textBaseline = 'middle'),
                  l.fillText('Data Points', b + 16 + 8, 48));
              }, [e, r, a, n, o]),
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
          let [{ query: o = '' }, i] = (0, l.useState)({ query: '' }),
            h = e.filter(
              ({ id: e, name: t }) =>
                e.toLowerCase().includes(o.toLowerCase()) ||
                t.toLowerCase().includes(o.toLowerCase())
            );
          return (0, t.jsx)(a.PageTemplate, {
            query: o,
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
                            children: h.map(({ id: e = '', name: l = '' }) =>
                              (0, t.jsx)(
                                n.default,
                                {
                                  href: `#${e}`,
                                  children: (0, t.jsx)('div', {
                                    className: 'col-span-1',
                                    children: (0, t.jsx)('div', {
                                      className:
                                        'flex items-center gap-x-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10',
                                      children: (0, t.jsxs)('p', {
                                        className: 'font-semibold capitalize',
                                        children: [s[e] ?? '', ' ', l],
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
                              ({ id: e = '', name: l = '', code: a = '' }) =>
                                (0, t.jsxs)(
                                  'div',
                                  {
                                    className: 'flex flex-col gap-y-4',
                                    children: [
                                      (0, t.jsxs)('h2', {
                                        className:
                                          'text-2xl font-bold capitalize',
                                        children: [s[e] ?? '', ' ', l],
                                      }),
                                      (0, t.jsx)(r.ReactPreview, {
                                        id: e,
                                        emoji: s[e] ?? '',
                                        group: 'Chart',
                                        name: l,
                                        code: a,
                                        chart: c[l],
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
  (e, t, l) => {
    let r = '/ui/charts';
    ((window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(20917)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([r]);
        }));
  },
]);
