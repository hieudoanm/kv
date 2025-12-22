(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  23402,
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
                  var d = e.charCodeAt(l + f);
                  if (d !== a.charCodeAt(i + f)) break;
                  47 === d && (o = f);
                }
                var m = '';
                for (f = l + o + 1; f <= c; ++f)
                  (f === c || 47 === e.charCodeAt(f)) &&
                    (0 === m.length ? (m += '..') : (m += '/..'));
                return m.length > 0
                  ? m + a.slice(i + o)
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
        '/ROOT/node_modules/.pnpm/next@16.1.0_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/path-browserify/'),
        (t.exports = s(114)));
    })();
  },
  9077,
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
                  d,
                  m,
                  u = e[h].replace(n, '%20'),
                  b = u.indexOf(s);
                (b >= 0
                  ? ((o = u.substr(0, b)), (f = u.substr(b + 1)))
                  : ((o = u), (f = '')),
                (d = decodeURIComponent(o)),
                (m = decodeURIComponent(f)),
                Object.prototype.hasOwnProperty.call(c, d))
                  ? t(c[d])
                    ? c[d].push(m)
                    : (c[d] = [c[d], m])
                  : (c[d] = m);
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
        '/ROOT/node_modules/.pnpm/next@16.1.0_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/querystring-es3/';
      var l = {};
      ((l.decode = l.parse = s(815)),
        (l.encode = l.stringify = s(577)),
        (t.exports = l));
    })();
  },
  38414,
  (e, t, a) => {
    var s = {
        452: function (t) {
          'use strict';
          t.exports = e.r(9077);
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
      '/ROOT/node_modules/.pnpm/next@16.1.0_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/native-url/';
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
          d =
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
        return '' + d.protocol + d.host + d.pathname + d.search + d.hash;
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
          d = new URL(t, f).toString().replace(i, ''),
          m = c.protocol || a.protocol;
        return (
          (m += a.slashes || c.slashes ? '//' : ''),
          !n && m ? (d = d.replace(l, m)) : n && (d = d.replace(l, '')),
          h.test(d) ||
            ~t.indexOf('.') ||
            '/' === e.slice(-1) ||
            '/' === t.slice(-1) ||
            '/' !== d.slice(-1) ||
            (d = d.slice(0, -1)),
          n && (d = n + ('/' === d[0] ? d.substr(1) : d)),
          d
        );
      }
      function f() {}
      ((f.prototype.parse = k),
        (f.prototype.format = s),
        (f.prototype.resolve = o),
        (f.prototype.resolveObject = o));
      var d = /^https?|ftp|gopher|file/,
        m = /^(.*?)([#?].*)/,
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
        var c = (e = e.trim()).match(m);
        ((e = c ? c[1].replace(/\\/g, '/') + c[2] : e.replace(/\\/g, '/')),
          p.test(e) && '/' !== e.slice(-1) && (e += '/'));
        var n = !/(^javascript)/.test(e) && e.match(u),
          r = b.test(e),
          h = '';
        n &&
          (d.test(n[1]) || ((h = n[1].toLowerCase()), (e = '' + n[2] + n[3])),
          n[2] ||
            ((r = !1),
            d.test(n[1]) ? ((h = n[1]), (e = '' + n[3])) : (e = '//' + n[3])),
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
            !d.test(h) &&
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
    var t = e.i(68601),
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
    var t = e.i(68601),
      a = e.i(75705),
      s = e.i(93002),
      l = e.i(60373),
      c = e.i(51953),
      n = e.i(23402);
    let i = (0, e.i(38414).fileURLToPath)(
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
                let d = c / 2 - 16;
                ((a.fillStyle = '#3b82f6'),
                  a.fillRect(d, 0, 12, 12),
                  (a.fillStyle = '#374151'),
                  (a.font = '12px sans-serif'),
                  (a.textAlign = 'left'),
                  (a.textBaseline = 'middle'),
                  a.fillText('Revenue', d + 16, 6));
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
                  d = e.map((e) => e.x),
                  m = e.map((e) => e.y),
                  u = Math.min(...d),
                  b = Math.max(...d),
                  p = Math.min(...m),
                  k = Math.max(...m);
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
                let d = e.reduce((e, t) => e + t, 0),
                  m = -Math.PI / 2;
                (e.forEach((e, t) => {
                  let s = m + (e / d) * 2 * Math.PI;
                  (a.beginPath(),
                    a.moveTo(h, o),
                    a.arc(h, o, f, m, s),
                    a.closePath(),
                    (a.fillStyle = i[t % i.length]),
                    a.fill(),
                    (m = s));
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
                  d = s.length,
                  m = (2 * Math.PI) / d,
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
                for (let e = 0; e < d; e++) {
                  let t = e * m - Math.PI / 2,
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
                for (let t = 0; t < d; t++) {
                  let s = f * ((e[t] - 0) / (u - 0)),
                    l = t * m - Math.PI / 2,
                    c = l + m;
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
                for (let e = 0; e < d; e++)
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
                  d = s.length,
                  m = (2 * Math.PI) / d,
                  u = l ?? Math.max(...e, 1);
                ((a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1));
                for (let e = 1; e <= 5; e++) {
                  let t = (f / 5) * e;
                  a.beginPath();
                  for (let e = 0; e < d; e++) {
                    let s = e * m - Math.PI / 2,
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
                for (let e = 0; e < d; e++) {
                  let t = e * m - Math.PI / 2,
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
                for (let t = 0; t < d; t++) {
                  let s = f * ((e[t] - 0) / (u - 0)),
                    l = t * m - Math.PI / 2,
                    c = h + s * Math.cos(l),
                    n = o + s * Math.sin(l);
                  0 === t ? a.moveTo(c, n) : a.lineTo(c, n);
                }
                (a.closePath(),
                  a.fill(),
                  a.stroke(),
                  (a.fillStyle = '#1e40af'));
                for (let t = 0; t < d; t++) {
                  let s = f * ((e[t] - 0) / (u - 0)),
                    l = t * m - Math.PI / 2,
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
                  d = Math.min(...o),
                  m = Math.max(...o),
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
                    s = d + ((m - d) / 5) * e;
                  a.fillText(s.toFixed(2), t, h - 70 + 6);
                }
                ((a.fillStyle = n),
                  e.forEach(({ x: e, y: t }) => {
                    (a.beginPath(),
                      a.arc(
                        70 + ((e - d) / (m - d)) * p,
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
  81489,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/77de16e9cf8b9ce2.js'].map((t) => e.l(t))
      ).then(() => t(43113))
    );
  },
  24706,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/510412e70dc4a40c.js'].map((t) => e.l(t))
      ).then(() => t(8757))
    );
  },
  41402,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3503e8e1d7821776.js'].map((t) => e.l(t))
      ).then(() => t(76971))
    );
  },
  91936,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/032e13ba4906d7aa.js'].map((t) => e.l(t))
      ).then(() => t(85167))
    );
  },
  36544,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2b4fd8bf3139547a.js'].map((t) => e.l(t))
      ).then(() => t(75522))
    );
  },
  21988,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/ccdc76cd5018bb85.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(52761))
    );
  },
  54495,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/1f46c04fdb00ca07.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/228147ca408bb8c3.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(96871))
    );
  },
  83986,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/42a1f69965188ca9.js'].map((t) => e.l(t))
      ).then(() => t(64804))
    );
  },
  1972,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/212f24bc9d2a94da.js'].map((t) => e.l(t))
      ).then(() => t(83643))
    );
  },
  5416,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8eb29cf5fdf375c9.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(42801))
    );
  },
  8645,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1685107b31ab26a3.js'].map((t) => e.l(t))
      ).then(() => t(25138))
    );
  },
  88387,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f731c775cfbf9535.js'].map((t) => e.l(t))
      ).then(() => t(2215))
    );
  },
  33734,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d5ffddc0c349b9cf.js'].map((t) => e.l(t))
      ).then(() => t(76519))
    );
  },
  91680,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2786143356d89e98.js'].map((t) => e.l(t))
      ).then(() => t(44961))
    );
  },
  28226,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/0659d0883223eac5.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
        ].map((t) => e.l(t))
      ).then(() => t(82187))
    );
  },
  92253,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/599e87cb52e8c923.js'].map((t) => e.l(t))
      ).then(() => t(35526))
    );
  },
  42173,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c5e54762266147eb.js'].map((t) => e.l(t))
      ).then(() => t(50521))
    );
  },
  44277,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/92379501c2235e6d.js'].map((t) => e.l(t))
      ).then(() => t(41812))
    );
  },
  45272,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f8fc0e2eb95e324e.js'].map((t) => e.l(t))
      ).then(() => t(78049))
    );
  },
  74891,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/676d985129101743.js'].map((t) => e.l(t))
      ).then(() => t(22782))
    );
  },
  50388,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/57921de2aecceb5a.js'].map((t) => e.l(t))
      ).then(() => t(16946))
    );
  },
  61615,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/becea513649a114b.js'].map((t) => e.l(t))
      ).then(() => t(96997))
    );
  },
  89693,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/eface6f963a91b16.js',
          'static/chunks/c6dab7061a4a4df9.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(82339))
    );
  },
  34547,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c2efe8e5eb6c5475.js'].map((t) => e.l(t))
      ).then(() => t(43824))
    );
  },
  67563,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/210b475e72b12e72.js'].map((t) => e.l(t))
      ).then(() => t(64851))
    );
  },
  58155,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/34a013db7f5c4019.js'].map((t) => e.l(t))
      ).then(() => t(41818))
    );
  },
  43634,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/b259b971d7a50d12.js',
          'static/chunks/458623e2e2425faf.js',
        ].map((t) => e.l(t))
      ).then(() => t(97664))
    );
  },
  45017,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/eafa96e1219fbd85.js'].map((t) => e.l(t))
      ).then(() => t(31796))
    );
  },
  90570,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/53dbb02be23ed862.js'].map((t) => e.l(t))
      ).then(() => t(47499))
    );
  },
  7599,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4b5539f611ac6d12.js'].map((t) => e.l(t))
      ).then(() => t(69410))
    );
  },
  41447,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/f3cccbcc6a060781.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(3475))
    );
  },
  58884,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/454333733da27594.js'].map((t) => e.l(t))
      ).then(() => t(53584))
    );
  },
  67591,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/87488ac67a79a093.js'].map((t) => e.l(t))
      ).then(() => t(96595))
    );
  },
  53703,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/8ac719ab998bed28.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(63085))
    );
  },
  9766,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/44fbaa47d77ab676.js'].map((t) => e.l(t))
      ).then(() => t(36523))
    );
  },
  36909,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ac1e1f9051105dc6.js'].map((t) => e.l(t))
      ).then(() => t(55969))
    );
  },
  99869,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/3ec4a1a82478da1c.js',
          'static/chunks/855ba5902c38ac57.js',
          'static/chunks/210b475e72b12e72.js',
        ].map((t) => e.l(t))
      ).then(() => t(30380))
    );
  },
  71006,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/ea129e6b7fba4114.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(58860))
    );
  },
  12160,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/43dd1278dbfd7d03.js'].map((t) => e.l(t))
      ).then(() => t(74003))
    );
  },
  90929,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/30d56a2e4cd05cdb.js'].map((t) => e.l(t))
      ).then(() => t(56778))
    );
  },
  70261,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/36fd89cc3488285f.js'].map((t) => e.l(t))
      ).then(() => t(41015))
    );
  },
  63356,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/767ab366c97e29c8.js'].map((t) => e.l(t))
      ).then(() => t(4066))
    );
  },
  52146,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/97e677eb6ed2cd9e.js'].map((t) => e.l(t))
      ).then(() => t(38113))
    );
  },
  55141,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/971964f43a7c8508.js'].map((t) => e.l(t))
      ).then(() => t(40230))
    );
  },
  6587,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d25c1dbcf0193051.js'].map((t) => e.l(t))
      ).then(() => t(44584))
    );
  },
  19026,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/adccfc96c4fecfd6.js'].map((t) => e.l(t))
      ).then(() => t(41066))
    );
  },
  27880,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0a457ea752a57e86.js'].map((t) => e.l(t))
      ).then(() => t(58758))
    );
  },
  10643,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3961b04c0f9a875c.js'].map((t) => e.l(t))
      ).then(() => t(35865))
    );
  },
  83450,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b44201e92bbf8185.js'].map((t) => e.l(t))
      ).then(() => t(14056))
    );
  },
  27451,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/22a3eab2335cf4ae.js'].map((t) => e.l(t))
      ).then(() => t(60673))
    );
  },
  71038,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6aa0f16ad041951f.js'].map((t) => e.l(t))
      ).then(() => t(29069))
    );
  },
  10860,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/d3121e24742ff2fd.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(97595))
    );
  },
  47564,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/77e096bc850883d5.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(73342))
    );
  },
  80884,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/5994421c18420220.js',
          'static/chunks/210b475e72b12e72.js',
        ].map((t) => e.l(t))
      ).then(() => t(74350))
    );
  },
  70498,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/830a91dda8b5c69e.js'].map((t) => e.l(t))
      ).then(() => t(22102))
    );
  },
  95882,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/3b914799e2658952.js',
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/855ba5902c38ac57.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/5153f3a8ff194306.js',
          'static/chunks/4236c233723ebe29.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
        ].map((t) => e.l(t))
      ).then(() => t(48439))
    );
  },
  71271,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1f86e77975c42d64.js'].map((t) => e.l(t))
      ).then(() => t(57355))
    );
  },
  61809,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9a23139774ba8c77.js'].map((t) => e.l(t))
      ).then(() => t(6528))
    );
  },
  11879,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ca9dbd54f9061948.js'].map((t) => e.l(t))
      ).then(() => t(21796))
    );
  },
  81545,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ef567d3b9c6e89b5.js'].map((t) => e.l(t))
      ).then(() => t(65717))
    );
  },
  58663,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/543497a049254562.js',
          'static/chunks/52838ef1ff2deca9.js',
        ].map((t) => e.l(t))
      ).then(() => t(32156))
    );
  },
  40263,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/52838ef1ff2deca9.js'].map((t) => e.l(t))
      ).then(() => t(93142))
    );
  },
  62200,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a001b00d5baf5988.js'].map((t) => e.l(t))
      ).then(() => t(93247))
    );
  },
  43268,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a0a92df3bb2992c5.js'].map((t) => e.l(t))
      ).then(() => t(82701))
    );
  },
  42822,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/65cd2d10bbf9090c.js'].map((t) => e.l(t))
      ).then(() => t(6473))
    );
  },
  6368,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/19141362b1295d29.js'].map((t) => e.l(t))
      ).then(() => t(7461))
    );
  },
  13041,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/13bef52301b9719b.js'].map((t) => e.l(t))
      ).then(() => t(43946))
    );
  },
  73632,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5bc534fb08fab583.js'].map((t) => e.l(t))
      ).then(() => t(54531))
    );
  },
  56565,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/13d041f8669b0bf0.js'].map((t) => e.l(t))
      ).then(() => t(65442))
    );
  },
  46490,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3b8297bdbd96d750.js'].map((t) => e.l(t))
      ).then(() => t(60489))
    );
  },
  51926,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3674d618f39a0726.js'].map((t) => e.l(t))
      ).then(() => t(10064))
    );
  },
  36798,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/57fa94c75fa84c4b.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
        ].map((t) => e.l(t))
      ).then(() => t(36645))
    );
  },
  61005,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c20dd42266b759c5.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(59841))
    );
  },
  89996,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/a362815cb4912664.js',
          'static/chunks/210b475e72b12e72.js',
        ].map((t) => e.l(t))
      ).then(() => t(74370))
    );
  },
  3041,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/63b2465bfb226405.js'].map((t) => e.l(t))
      ).then(() => t(61846))
    );
  },
  93284,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f93acf0381d2c6ec.js'].map((t) => e.l(t))
      ).then(() => t(10672))
    );
  },
  25895,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/833c996fb284e864.js',
          'static/chunks/5153f3a8ff194306.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(86633))
    );
  },
  85264,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/723d03bbeba6df40.js'].map((t) => e.l(t))
      ).then(() => t(45901))
    );
  },
  94063,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/2a7c2b3759800c9c.js',
          'static/chunks/27783c7948b49ce7.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(56067))
    );
  },
  68944,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/a4c1fb53449d2178.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(68185))
    );
  },
  94738,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/50f7a904f290488c.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(52297))
    );
  },
  26400,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d4b7a81bab759a76.js'].map((t) => e.l(t))
      ).then(() => t(56461))
    );
  },
  797,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d7776eac3b647ece.js'].map((t) => e.l(t))
      ).then(() => t(8433))
    );
  },
  57996,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2764e468f2d80e6c.js'].map((t) => e.l(t))
      ).then(() => t(58452))
    );
  },
  66728,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/460a7089e76c3d7d.js'].map((t) => e.l(t))
      ).then(() => t(86751))
    );
  },
  74834,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9de7c19582eb9de3.js'].map((t) => e.l(t))
      ).then(() => t(13603))
    );
  },
  57389,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(76834))
    );
  },
  29610,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/01b77ce94e253818.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(67204))
    );
  },
  88259,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/23660a79ae166de8.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/5153f3a8ff194306.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(43949))
    );
  },
  24237,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/eda5080d50ff616f.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
          'static/chunks/5153f3a8ff194306.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
        ].map((t) => e.l(t))
      ).then(() => t(44231))
    );
  },
  90655,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6c9875c8701c208d.js'].map((t) => e.l(t))
      ).then(() => t(56366))
    );
  },
  22972,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/eb2c994bbaac13ac.js'].map((t) => e.l(t))
      ).then(() => t(98227))
    );
  },
  74696,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/02d429d8321912ab.js'].map((t) => e.l(t))
      ).then(() => t(5236))
    );
  },
  43109,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4da0638a37658fcf.js'].map((t) => e.l(t))
      ).then(() => t(64656))
    );
  },
  27405,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/eca3aa88b42c85ba.js'].map((t) => e.l(t))
      ).then(() => t(77387))
    );
  },
  22841,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f7445ad5d6a689af.js'].map((t) => e.l(t))
      ).then(() => t(33053))
    );
  },
  83655,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/713407fab56ed198.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(64854))
    );
  },
  79045,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/9c4075d7eef25a3f.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(43772))
    );
  },
  87693,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/28844e8dc4e24842.js'].map((t) => e.l(t))
      ).then(() => t(6837))
    );
  },
  65900,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/885d3484b113c4fb.js'].map((t) => e.l(t))
      ).then(() => t(19878))
    );
  },
  6180,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9a39902aceb47e3d.js'].map((t) => e.l(t))
      ).then(() => t(76627))
    );
  },
  85524,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/793789d648175d9c.js'].map((t) => e.l(t))
      ).then(() => t(71782))
    );
  },
  88571,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a221951baa6d828a.js'].map((t) => e.l(t))
      ).then(() => t(25142))
    );
  },
  17365,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/cfba2543df69e0bd.js'].map((t) => e.l(t))
      ).then(() => t(68374))
    );
  },
  69789,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5153f3a8ff194306.js'].map((t) => e.l(t))
      ).then(() => t(21553))
    );
  },
  92899,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/458623e2e2425faf.js',
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/855ba5902c38ac57.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/4f7c2bcb38d1c401.js',
        ].map((t) => e.l(t))
      ).then(() => t(31347))
    );
  },
  1847,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/31fa06345f031610.js'].map((t) => e.l(t))
      ).then(() => t(86026))
    );
  },
  20184,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/78c60661159e4b3a.js'].map((t) => e.l(t))
      ).then(() => t(22897))
    );
  },
  72341,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bdb2e1734799340d.js'].map((t) => e.l(t))
      ).then(() => t(13728))
    );
  },
  18880,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/328b54038cb6fe22.js',
          'static/chunks/cae774c63efc8852.js',
        ].map((t) => e.l(t))
      ).then(() => t(75641))
    );
  },
  84719,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5d17f54e22db836a.js'].map((t) => e.l(t))
      ).then(() => t(87973))
    );
  },
  66546,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c9df65f99d3bc5c6.js'].map((t) => e.l(t))
      ).then(() => t(949))
    );
  },
  11484,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/ddfd4a4e8eb77833.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(22787))
    );
  },
  11407,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/128623929f211c49.js'].map((t) => e.l(t))
      ).then(() => t(64459))
    );
  },
  36211,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/89327b474e170889.js'].map((t) => e.l(t))
      ).then(() => t(56474))
    );
  },
  30252,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3e9089c73e0ac78d.js'].map((t) => e.l(t))
      ).then(() => t(92072))
    );
  },
  16366,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/96a4437c123843d1.js',
          'static/chunks/210b475e72b12e72.js',
        ].map((t) => e.l(t))
      ).then(() => t(24033))
    );
  },
  18449,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/daa13b369d3ea21f.js'].map((t) => e.l(t))
      ).then(() => t(91719))
    );
  },
  32299,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/42a87073f27e93d7.js'].map((t) => e.l(t))
      ).then(() => t(61554))
    );
  },
  14694,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1684a3bb262ad76c.js'].map((t) => e.l(t))
      ).then(() => t(51824))
    );
  },
  97600,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c9df65f99d3bc5c6.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/05270aa27a4489a9.js',
        ].map((t) => e.l(t))
      ).then(() => t(52054))
    );
  },
  89703,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7e926b6fc321938d.js'].map((t) => e.l(t))
      ).then(() => t(23617))
    );
  },
  2209,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/76293a39b4e46b5b.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(75267))
    );
  },
  63163,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/72e2874e3bc739f0.js'].map((t) => e.l(t))
      ).then(() => t(36714))
    );
  },
  47453,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4e2ae18cef70142f.js'].map((t) => e.l(t))
      ).then(() => t(1368))
    );
  },
  39807,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3e2f689222d79b33.js'].map((t) => e.l(t))
      ).then(() => t(94801))
    );
  },
  33732,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/12cf285697cb7187.js'].map((t) => e.l(t))
      ).then(() => t(37031))
    );
  },
  58602,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d1d8474ed4fc6afe.js'].map((t) => e.l(t))
      ).then(() => t(45061))
    );
  },
  56680,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/11957ee2168326c2.js'].map((t) => e.l(t))
      ).then(() => t(34252))
    );
  },
  9896,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5e9c2189dc78b7aa.js'].map((t) => e.l(t))
      ).then(() => t(42090))
    );
  },
  45128,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/906df0706c2e98f1.js',
          'static/chunks/210b475e72b12e72.js',
        ].map((t) => e.l(t))
      ).then(() => t(3261))
    );
  },
  72122,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/1bca4826baee4c17.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(30680))
    );
  },
  12931,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6f00a857d2a496ac.js'].map((t) => e.l(t))
      ).then(() => t(47801))
    );
  },
  71412,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ba1599eecfce894c.js'].map((t) => e.l(t))
      ).then(() => t(74936))
    );
  },
  635,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d7b4fee0c7df6285.js'].map((t) => e.l(t))
      ).then(() => t(38140))
    );
  },
  92308,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9540b95d2e2d41f0.js'].map((t) => e.l(t))
      ).then(() => t(26764))
    );
  },
  58989,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7bd78cfc3e62f152.js'].map((t) => e.l(t))
      ).then(() => t(1823))
    );
  },
  5068,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/362d5d96cb8258e5.js'].map((t) => e.l(t))
      ).then(() => t(87705))
    );
  },
  47799,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5a46b6872827ddd0.js'].map((t) => e.l(t))
      ).then(() => t(65993))
    );
  },
  73216,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c7f0c6fc1cbcc771.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(22675))
    );
  },
  26902,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/7a63c2c8cbedc9d9.js',
          'static/chunks/60e33c345072360d.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(41527))
    );
  },
  42719,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b8846c1ee82ecfa1.js'].map((t) => e.l(t))
      ).then(() => t(12591))
    );
  },
  62588,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/805def04a7bd8a90.js'].map((t) => e.l(t))
      ).then(() => t(37305))
    );
  },
  25015,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/31a78fcb6916656b.js'].map((t) => e.l(t))
      ).then(() => t(10631))
    );
  },
  21199,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/daa1aafad1e08680.js'].map((t) => e.l(t))
      ).then(() => t(53002))
    );
  },
  54949,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/20d0878367750436.js'].map((t) => e.l(t))
      ).then(() => t(26412))
    );
  },
  40084,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bed26b18e0f3ebe1.js'].map((t) => e.l(t))
      ).then(() => t(12910))
    );
  },
  92324,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/030eed16ec288515.js'].map((t) => e.l(t))
      ).then(() => t(94310))
    );
  },
  39258,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/856ff3c93415e5a8.js'].map((t) => e.l(t))
      ).then(() => t(62605))
    );
  },
  66026,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/103ce58394c0885a.js'].map((t) => e.l(t))
      ).then(() => t(271))
    );
  },
  71218,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4421d2197ef390d1.js'].map((t) => e.l(t))
      ).then(() => t(77168))
    );
  },
  3940,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/a37869b069dfa75a.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(72787))
    );
  },
  12204,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/869f7429a7fcf428.js'].map((t) => e.l(t))
      ).then(() => t(54563))
    );
  },
  58527,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/cd94430be19411dd.js'].map((t) => e.l(t))
      ).then(() => t(15993))
    );
  },
  89395,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/458623e2e2425faf.js'].map((t) => e.l(t))
      ).then(() => t(47557))
    );
  },
  69529,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/4197b239f084b81f.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(22033))
    );
  },
  71922,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7ad477e6de72badd.js'].map((t) => e.l(t))
      ).then(() => t(31897))
    );
  },
  69482,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d79be7d065f4c87a.js'].map((t) => e.l(t))
      ).then(() => t(53061))
    );
  },
  18953,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2479729ad79d056f.js'].map((t) => e.l(t))
      ).then(() => t(27044))
    );
  },
  96400,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/23dbc5cdf2dba477.js'].map((t) => e.l(t))
      ).then(() => t(28570))
    );
  },
  51209,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f3380472bbe45a89.js'].map((t) => e.l(t))
      ).then(() => t(59125))
    );
  },
  82724,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/28a5f25db09638b8.js',
          'static/chunks/43dd1278dbfd7d03.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(12272))
    );
  },
  7922,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b30360a030751909.js'].map((t) => e.l(t))
      ).then(() => t(49478))
    );
  },
  50968,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/32ab903fe2c11721.js'].map((t) => e.l(t))
      ).then(() => t(68410))
    );
  },
  78137,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/66b00b8321382882.js'].map((t) => e.l(t))
      ).then(() => t(31386))
    );
  },
  32949,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/50a0ff43961c1415.js'].map((t) => e.l(t))
      ).then(() => t(99011))
    );
  },
  72353,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e247b2e4c5eed564.js'].map((t) => e.l(t))
      ).then(() => t(96544))
    );
  },
  82489,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/5a13f4a630730e48.js',
          'static/chunks/458623e2e2425faf.js',
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/855ba5902c38ac57.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
          'static/chunks/4236c233723ebe29.js',
          'static/chunks/5153f3a8ff194306.js',
        ].map((t) => e.l(t))
      ).then(() => t(66066))
    );
  },
  64679,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/c1714dcd22876a97.js',
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/855ba5902c38ac57.js',
          'static/chunks/5153f3a8ff194306.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
          'static/chunks/4236c233723ebe29.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(76995))
    );
  },
  4864,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/df1db03c9ea576d7.js'].map((t) => e.l(t))
      ).then(() => t(45818))
    );
  },
  81747,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f3e3488510be8bb7.js'].map((t) => e.l(t))
      ).then(() => t(10896))
    );
  },
  29157,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/74eacf8bb49ca66f.js'].map((t) => e.l(t))
      ).then(() => t(85682))
    );
  },
  84377,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6efb5a2aa73d6967.js'].map((t) => e.l(t))
      ).then(() => t(76210))
    );
  },
  4264,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f3291f1e766d628b.js'].map((t) => e.l(t))
      ).then(() => t(43335))
    );
  },
  75717,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c7c27a079371dd4d.js'].map((t) => e.l(t))
      ).then(() => t(48658))
    );
  },
  52020,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9d73b2946fcef921.js'].map((t) => e.l(t))
      ).then(() => t(82459))
    );
  },
  32105,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ee5f584aef48426c.js'].map((t) => e.l(t))
      ).then(() => t(24536))
    );
  },
  96998,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0ab64e2b048266ed.js'].map((t) => e.l(t))
      ).then(() => t(98559))
    );
  },
  2751,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2d728dd5ba4835b3.js'].map((t) => e.l(t))
      ).then(() => t(40267))
    );
  },
  79913,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6182ccd31f0b3aca.js'].map((t) => e.l(t))
      ).then(() => t(12220))
    );
  },
  67964,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/08d8b82f7d56f109.js'].map((t) => e.l(t))
      ).then(() => t(60525))
    );
  },
  92099,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/2cc0fea1b42969b7.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(74056))
    );
  },
  84052,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/90ed812c52b896aa.js'].map((t) => e.l(t))
      ).then(() => t(39845))
    );
  },
  58221,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5cc3736157a63e96.js'].map((t) => e.l(t))
      ).then(() => t(50974))
    );
  },
  70661,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2a7c2b3759800c9c.js'].map((t) => e.l(t))
      ).then(() => t(38864))
    );
  },
  93944,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/184f50d9e8bc553c.js'].map((t) => e.l(t))
      ).then(() => t(39025))
    );
  },
  39261,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8c5bc5017712fec5.js'].map((t) => e.l(t))
      ).then(() => t(72570))
    );
  },
  50719,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e61fa42d65ab3faf.js'].map((t) => e.l(t))
      ).then(() => t(31776))
    );
  },
  97106,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/94d0ab0521f2f536.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
        ].map((t) => e.l(t))
      ).then(() => t(12767))
    );
  },
  49743,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3c2b16d6dae7db80.js'].map((t) => e.l(t))
      ).then(() => t(88025))
    );
  },
  75380,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b1f3c94bf6533947.js'].map((t) => e.l(t))
      ).then(() => t(31113))
    );
  },
  465,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3af4124d6b9e0866.js'].map((t) => e.l(t))
      ).then(() => t(82658))
    );
  },
  65075,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b9dda9b9aab3ffee.js'].map((t) => e.l(t))
      ).then(() => t(47133))
    );
  },
  3583,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/887a3c8df8f994d6.js'].map((t) => e.l(t))
      ).then(() => t(719))
    );
  },
  60101,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f96887abcd8cfc1a.js'].map((t) => e.l(t))
      ).then(() => t(18035))
    );
  },
  70442,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/77c60a5440dbe384.js',
          'static/chunks/f7445ad5d6a689af.js',
        ].map((t) => e.l(t))
      ).then(() => t(29087))
    );
  },
  54136,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b0b2c1dc4fa867cc.js'].map((t) => e.l(t))
      ).then(() => t(90586))
    );
  },
  57877,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/328b54038cb6fe22.js'].map((t) => e.l(t))
      ).then(() => t(98110))
    );
  },
  64810,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c183c055e7029f0d.js'].map((t) => e.l(t))
      ).then(() => t(27667))
    );
  },
  15004,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/b1da26ac7882bf72.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/59f3baab3b7d6ab6.js',
        ].map((t) => e.l(t))
      ).then(() => t(4650))
    );
  },
  29680,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ca6138bbab0c248a.js'].map((t) => e.l(t))
      ).then(() => t(91503))
    );
  },
  23211,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/b69d2a6a6ec5dcf6.js'].map((t) => e.l(t))
      ).then(() => t(75593))
    );
  },
  79072,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ca4c623b49d98e86.js'].map((t) => e.l(t))
      ).then(() => t(39916))
    );
  },
  73610,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/210b475e72b12e72.js',
          'static/chunks/458623e2e2425faf.js',
          'static/chunks/60e33c345072360d.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/31ff7e74b51dee79.js',
          'static/chunks/5153f3a8ff194306.js',
          'static/chunks/855ba5902c38ac57.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/4236c233723ebe29.js',
          'static/chunks/b69d2a6a6ec5dcf6.js',
        ].map((t) => e.l(t))
      ).then(() => t(24470))
    );
  },
  49585,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3fcf5823787dee1c.js'].map((t) => e.l(t))
      ).then(() => t(43159))
    );
  },
  77535,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/434be49ad7fe95a6.js'].map((t) => e.l(t))
      ).then(() => t(7775))
    );
  },
  1788,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3a84fb65eb0b95e9.js'].map((t) => e.l(t))
      ).then(() => t(63011))
    );
  },
  33786,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/96f0616ff9d8b1f0.js'].map((t) => e.l(t))
      ).then(() => t(62070))
    );
  },
  58381,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/94aa25fcb72e742c.js'].map((t) => e.l(t))
      ).then(() => t(71785))
    );
  },
  21734,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e2738d430cf3b938.js'].map((t) => e.l(t))
      ).then(() => t(44487))
    );
  },
  19721,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bd4a43ce661930d1.js'].map((t) => e.l(t))
      ).then(() => t(61561))
    );
  },
  55462,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d2d94633e5b0fdc3.js'].map((t) => e.l(t))
      ).then(() => t(50202))
    );
  },
  56435,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1d69a339f9f7994d.js'].map((t) => e.l(t))
      ).then(() => t(15324))
    );
  },
  1960,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/7a92ac19f568b882.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
        ].map((t) => e.l(t))
      ).then(() => t(81887))
    );
  },
  99197,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/f289f0c913855dc0.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
        ].map((t) => e.l(t))
      ).then(() => t(22571))
    );
  },
  11289,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          'static/chunks/6acb77faac34a314.js',
          'static/chunks/59f3baab3b7d6ab6.js',
          'static/chunks/c9df65f99d3bc5c6.js',
          'static/chunks/f7445ad5d6a689af.js',
          'static/chunks/3fcf5823787dee1c.js',
          'static/chunks/0e3e319433dbf1ea.js',
        ].map((t) => e.l(t))
      ).then(() => t(1495))
    );
  },
  28686,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/35f2bb17d4ba6b7e.js'].map((t) => e.l(t))
      ).then(() => t(9991))
    );
  },
  86687,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4ac976aa1f3e1756.js'].map((t) => e.l(t))
      ).then(() => t(84149))
    );
  },
  35283,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/294dd1d1c9cd3fec.js'].map((t) => e.l(t))
      ).then(() => t(83920))
    );
  },
  53783,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a0e9cae5b81f5baa.js'].map((t) => e.l(t))
      ).then(() => t(56055))
    );
  },
  40019,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/03df430c91ffd366.js'].map((t) => e.l(t))
      ).then(() => t(26585))
    );
  },
  92739,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3d4938a1e461fb28.js'].map((t) => e.l(t))
      ).then(() => t(94118))
    );
  },
  75505,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3f493158286103e1.js'].map((t) => e.l(t))
      ).then(() => t(2029))
    );
  },
  20034,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c1714dcd22876a97.js'].map((t) => e.l(t))
      ).then(() => t(42781))
    );
  },
  80418,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a594dd5e85c29f33.js'].map((t) => e.l(t))
      ).then(() => t(78933))
    );
  },
  45497,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2762616f62c96949.js'].map((t) => e.l(t))
      ).then(() => t(62529))
    );
  },
  3816,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/623fce5c95cdc285.js'].map((t) => e.l(t))
      ).then(() => t(35217))
    );
  },
  89867,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d17f25f9ad31f939.js'].map((t) => e.l(t))
      ).then(() => t(45992))
    );
  },
  24325,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/37988284da93d3a6.js'].map((t) => e.l(t))
      ).then(() => t(77213))
    );
  },
  57166,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a16141302a329565.js'].map((t) => e.l(t))
      ).then(() => t(64678))
    );
  },
  28215,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5f4a7d201fbf4b75.js'].map((t) => e.l(t))
      ).then(() => t(74074))
    );
  },
  21392,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/153980e72e1bbf3c.js'].map((t) => e.l(t))
      ).then(() => t(82361))
    );
  },
  93157,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/498b84eeab5619d0.js'].map((t) => e.l(t))
      ).then(() => t(11711))
    );
  },
  21411,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/cb70440b2d01a4c3.js'].map((t) => e.l(t))
      ).then(() => t(58918))
    );
  },
  32460,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c777755611f34ef6.js'].map((t) => e.l(t))
      ).then(() => t(68613))
    );
  },
  6131,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4b8a4f35a4ad8e4f.js'].map((t) => e.l(t))
      ).then(() => t(99943))
    );
  },
  30678,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6f46334a6c560afc.js'].map((t) => e.l(t))
      ).then(() => t(14837))
    );
  },
  35792,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ba0397d34dc58653.js'].map((t) => e.l(t))
      ).then(() => t(37009))
    );
  },
  91329,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/37d679b78830e26a.js'].map((t) => e.l(t))
      ).then(() => t(24405))
    );
  },
  80034,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d3d071299bdcd2cf.js'].map((t) => e.l(t))
      ).then(() => t(2596))
    );
  },
  4833,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2fb6b7e71fb885fb.js'].map((t) => e.l(t))
      ).then(() => t(24533))
    );
  },
  35318,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/86b936973548abc3.js'].map((t) => e.l(t))
      ).then(() => t(28825))
    );
  },
  6186,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5299bc811911f170.js'].map((t) => e.l(t))
      ).then(() => t(42055))
    );
  },
  73515,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f6b4197edc1d5aa8.js'].map((t) => e.l(t))
      ).then(() => t(62775))
    );
  },
  45947,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f012fe490fc4bf03.js'].map((t) => e.l(t))
      ).then(() => t(68606))
    );
  },
  46926,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/2da1ac8cba1d7f72.js'].map((t) => e.l(t))
      ).then(() => t(62640))
    );
  },
  40575,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e0eb74645cebdb2b.js'].map((t) => e.l(t))
      ).then(() => t(1779))
    );
  },
  23274,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/748cc97248f1bf2b.js'].map((t) => e.l(t))
      ).then(() => t(33859))
    );
  },
  89755,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/48f1f77afa8f6437.js'].map((t) => e.l(t))
      ).then(() => t(20709))
    );
  },
  70689,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1026e1580c8169eb.js'].map((t) => e.l(t))
      ).then(() => t(8118))
    );
  },
  59559,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/ea28fbd1c16d130f.js'].map((t) => e.l(t))
      ).then(() => t(78462))
    );
  },
  50755,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/61df0272c2bd8e9a.js'].map((t) => e.l(t))
      ).then(() => t(56625))
    );
  },
  20385,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d12d6048bf459559.js'].map((t) => e.l(t))
      ).then(() => t(77450))
    );
  },
  87753,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/49cf7f7d51253c20.js'].map((t) => e.l(t))
      ).then(() => t(99964))
    );
  },
  84785,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/6d14cec880077a5a.js'].map((t) => e.l(t))
      ).then(() => t(50654))
    );
  },
  28765,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/71479d37e269df2f.js'].map((t) => e.l(t))
      ).then(() => t(56429))
    );
  },
  68022,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d7d65a7a492c0267.js'].map((t) => e.l(t))
      ).then(() => t(39039))
    );
  },
  38376,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/0a5c8bbc7a031a65.js'].map((t) => e.l(t))
      ).then(() => t(90594))
    );
  },
  81795,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/12853aac1e8abec8.js'].map((t) => e.l(t))
      ).then(() => t(3429))
    );
  },
  8110,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/463429c1b6be26ac.js'].map((t) => e.l(t))
      ).then(() => t(2152))
    );
  },
  8082,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/dfd738deb7421744.js'].map((t) => e.l(t))
      ).then(() => t(83540))
    );
  },
  73284,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d81d5c079344ab28.js'].map((t) => e.l(t))
      ).then(() => t(83333))
    );
  },
  87638,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/81d13e250871fbb7.js'].map((t) => e.l(t))
      ).then(() => t(47359))
    );
  },
  82513,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/4cdd90da9c647c23.js'].map((t) => e.l(t))
      ).then(() => t(1314))
    );
  },
  81657,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c7ca00b13e64b9ff.js'].map((t) => e.l(t))
      ).then(() => t(9249))
    );
  },
  49038,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/fee50b4cca816a46.js'].map((t) => e.l(t))
      ).then(() => t(23255))
    );
  },
  52458,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/3ee7ce3bb3207f84.js'].map((t) => e.l(t))
      ).then(() => t(34350))
    );
  },
  74421,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/f625ddcffcfe9fb7.js'].map((t) => e.l(t))
      ).then(() => t(95279))
    );
  },
  79151,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9a46d7fc07b79b63.js'].map((t) => e.l(t))
      ).then(() => t(69246))
    );
  },
  79937,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/92856b64ed01a366.js'].map((t) => e.l(t))
      ).then(() => t(7007))
    );
  },
  16700,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c5f456c78c4e2fc1.js'].map((t) => e.l(t))
      ).then(() => t(55385))
    );
  },
  58764,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/a43a22a853f3af9e.js'].map((t) => e.l(t))
      ).then(() => t(6684))
    );
  },
  45902,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/48de5cba630e5897.js'].map((t) => e.l(t))
      ).then(() => t(16654))
    );
  },
  10802,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/5a6ce3d4b281788f.js'].map((t) => e.l(t))
      ).then(() => t(62364))
    );
  },
  56997,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/7371415fd23c328d.js'].map((t) => e.l(t))
      ).then(() => t(45682))
    );
  },
  90307,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/87a4d5e428e89caa.js'].map((t) => e.l(t))
      ).then(() => t(26112))
    );
  },
  61207,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1357c4880a711bfe.js'].map((t) => e.l(t))
      ).then(() => t(86533))
    );
  },
  65640,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/e5d845e542f7e5ee.js'].map((t) => e.l(t))
      ).then(() => t(15158))
    );
  },
  75763,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/9f4ce494eaacacde.js'].map((t) => e.l(t))
      ).then(() => t(87669))
    );
  },
  26512,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/76e56290b1d0bc9f.js'].map((t) => e.l(t))
      ).then(() => t(17143))
    );
  },
  31196,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/254decf984688547.js'].map((t) => e.l(t))
      ).then(() => t(90924))
    );
  },
  98964,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/bfd2723d51bfb9fa.js'].map((t) => e.l(t))
      ).then(() => t(53819))
    );
  },
  84264,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8677c41131f522f4.js'].map((t) => e.l(t))
      ).then(() => t(11559))
    );
  },
  98663,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/1d351c2c149be9de.js'].map((t) => e.l(t))
      ).then(() => t(56567))
    );
  },
  99368,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8d0191d939643971.js'].map((t) => e.l(t))
      ).then(() => t(8456))
    );
  },
  66017,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/d81ec433cf8cfbc1.js'].map((t) => e.l(t))
      ).then(() => t(39912))
    );
  },
  92017,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/dc8946589438f505.js'].map((t) => e.l(t))
      ).then(() => t(81596))
    );
  },
  37102,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/93fcddeab3a7d791.js'].map((t) => e.l(t))
      ).then(() => t(65256))
    );
  },
  71395,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/983e61548ff7e20f.js'].map((t) => e.l(t))
      ).then(() => t(17625))
    );
  },
]);
