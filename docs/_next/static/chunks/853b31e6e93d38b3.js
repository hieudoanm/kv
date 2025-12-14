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
                var r, o = '', n = 0, a = -1, s = 0, i = 0;
                i <= e.length;
                ++i
              ) {
                if (i < e.length) r = e.charCodeAt(i);
                else if (47 === r) break;
                else r = 47;
                if (47 === r) {
                  if (a === i - 1 || 1 === s);
                  else if (a !== i - 1 && 2 === s) {
                    if (
                      o.length < 2 ||
                      2 !== n ||
                      46 !== o.charCodeAt(o.length - 1) ||
                      46 !== o.charCodeAt(o.length - 2)
                    ) {
                      if (o.length > 2) {
                        var c = o.lastIndexOf('/');
                        if (c !== o.length - 1) {
                          (-1 === c
                            ? ((o = ''), (n = 0))
                            : (n =
                                (o = o.slice(0, c)).length -
                                1 -
                                o.lastIndexOf('/')),
                            (a = i),
                            (s = 0));
                          continue;
                        }
                      } else if (2 === o.length || 1 === o.length) {
                        ((o = ''), (n = 0), (a = i), (s = 0));
                        continue;
                      }
                    }
                    t && (o.length > 0 ? (o += '/..') : (o = '..'), (n = 2));
                  } else
                    (o.length > 0
                      ? (o += '/' + e.slice(a + 1, i))
                      : (o = e.slice(a + 1, i)),
                      (n = i - a - 1));
                  ((a = i), (s = 0));
                } else 46 === r && -1 !== s ? ++s : (s = -1);
              }
              return o;
            }
            var o = {
              resolve: function () {
                for (
                  var e, o, n = '', a = !1, s = arguments.length - 1;
                  s >= -1 && !a;
                  s--
                )
                  (s >= 0
                    ? (o = arguments[s])
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
                  var a = e.length, s = a - n, i = 1;
                  i < r.length && 47 === r.charCodeAt(i);
                  ++i
                );
                for (
                  var c = r.length - i, l = s < c ? s : c, h = -1, p = 0;
                  p <= l;
                  ++p
                ) {
                  if (p === l) {
                    if (c > l) {
                      if (47 === r.charCodeAt(i + p)) return r.slice(i + p + 1);
                      else if (0 === p) return r.slice(i + p);
                    } else
                      s > l &&
                        (47 === e.charCodeAt(n + p)
                          ? (h = p)
                          : 0 === p && (h = 0));
                    break;
                  }
                  var u = e.charCodeAt(n + p);
                  if (u !== r.charCodeAt(i + p)) break;
                  47 === u && (h = p);
                }
                var d = '';
                for (p = n + h + 1; p <= a; ++p)
                  (p === a || 47 === e.charCodeAt(p)) &&
                    (0 === d.length ? (d += '..') : (d += '/..'));
                return d.length > 0
                  ? d + r.slice(i + h)
                  : ((i += h), 47 === r.charCodeAt(i) && ++i, r.slice(i));
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
                    s = e.length - 1;
                  s >= 1;
                  --s
                )
                  if (47 === (r = e.charCodeAt(s))) {
                    if (!a) {
                      n = s;
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
                  s = !0;
                if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                  if (r.length === e.length && r === e) return '';
                  var i = r.length - 1,
                    c = -1;
                  for (o = e.length - 1; o >= 0; --o) {
                    var l = e.charCodeAt(o);
                    if (47 === l) {
                      if (!s) {
                        n = o + 1;
                        break;
                      }
                    } else
                      (-1 === c && ((s = !1), (c = o + 1)),
                        i >= 0 &&
                          (l === r.charCodeAt(i)
                            ? -1 == --i && (a = o)
                            : ((i = -1), (a = c))));
                  }
                  return (
                    n === a ? (a = c) : -1 === a && (a = e.length),
                    e.slice(n, a)
                  );
                }
                for (o = e.length - 1; o >= 0; --o)
                  if (47 === e.charCodeAt(o)) {
                    if (!s) {
                      n = o + 1;
                      break;
                    }
                  } else -1 === a && ((s = !1), (a = o + 1));
                return -1 === a ? '' : e.slice(n, a);
              },
              extname: function (e) {
                t(e);
                for (
                  var r = -1, o = 0, n = -1, a = !0, s = 0, i = e.length - 1;
                  i >= 0;
                  --i
                ) {
                  var c = e.charCodeAt(i);
                  if (47 === c) {
                    if (!a) {
                      o = i + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === n && ((a = !1), (n = i + 1)),
                    46 === c
                      ? -1 === r
                        ? (r = i)
                        : 1 !== s && (s = 1)
                      : -1 !== r && (s = -1));
                }
                return -1 === r ||
                  -1 === n ||
                  0 === s ||
                  (1 === s && r === n - 1 && r === o + 1)
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
                  var s = -1, i = 0, c = -1, l = !0, h = e.length - 1, p = 0;
                  h >= r;
                  --h
                ) {
                  if (47 === (n = e.charCodeAt(h))) {
                    if (!l) {
                      i = h + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === c && ((l = !1), (c = h + 1)),
                    46 === n
                      ? -1 === s
                        ? (s = h)
                        : 1 !== p && (p = 1)
                      : -1 !== s && (p = -1));
                }
                return (
                  -1 === s ||
                  -1 === c ||
                  0 === p ||
                  (1 === p && s === c - 1 && s === i + 1)
                    ? -1 !== c &&
                      (0 === i && a
                        ? (o.base = o.name = e.slice(1, c))
                        : (o.base = o.name = e.slice(i, c)))
                    : (0 === i && a
                        ? ((o.name = e.slice(1, s)), (o.base = e.slice(1, c)))
                        : ((o.name = e.slice(i, s)), (o.base = e.slice(i, c))),
                      (o.ext = e.slice(s, c))),
                  i > 0 ? (o.dir = e.slice(0, i - 1)) : a && (o.dir = '/'),
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
          s = !0;
        try {
          (e[t](a, a.exports, o), (s = !1));
        } finally {
          s && delete r[t];
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
              var s = /\+/g;
              e = e.split(r);
              var i = 1e3;
              n && 'number' == typeof n.maxKeys && (i = n.maxKeys);
              var c = e.length;
              i > 0 && c > i && (c = i);
              for (var l = 0; l < c; ++l) {
                var h,
                  p,
                  u,
                  d,
                  f = e[l].replace(s, '%20'),
                  m = f.indexOf(o);
                (m >= 0
                  ? ((h = f.substr(0, m)), (p = f.substr(m + 1)))
                  : ((h = f), (p = '')),
                (u = decodeURIComponent(h)),
                (d = decodeURIComponent(p)),
                Object.prototype.hasOwnProperty.call(a, u))
                  ? t(a[u])
                    ? a[u].push(d)
                    : (a[u] = [a[u], d])
                  : (a[u] = d);
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
            e.exports = function (e, a, s, i) {
              return ((a = a || '&'),
              (s = s || '='),
              null === e && (e = void 0),
              'object' == typeof e)
                ? o(n(e), function (n) {
                    var i = encodeURIComponent(t(n)) + s;
                    return r(e[n])
                      ? o(e[n], function (e) {
                          return i + encodeURIComponent(t(e));
                        }).join(a)
                      : i + encodeURIComponent(t(e[n]));
                  }).join(a)
                : i
                  ? encodeURIComponent(t(i)) + s + encodeURIComponent(t(e))
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
          s = !0;
        try {
          (e[t](a, a.exports, o), (s = !1));
        } finally {
          s && delete r[t];
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
        s = !0;
      try {
        (o[e](r, r.exports, a), (s = !1));
      } finally {
        s && delete n[e];
      }
      return r.exports;
    }
    a.ab =
      '/ROOT/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/native-url/';
    var s = {};
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
          s,
          i,
          c,
          l,
          h,
          p,
          u =
            ((n = (o = e).auth),
            (a = o.hostname),
            (s = o.protocol || ''),
            (i = o.pathname || ''),
            (c = o.hash || ''),
            (l = o.query || ''),
            (h = !1),
            (n = n ? encodeURIComponent(n).replace(/%3A/i, ':') + '@' : ''),
            o.host
              ? (h = n + o.host)
              : a &&
                ((h = n + (~a.indexOf(':') ? '[' + a + ']' : a)),
                o.port && (h += ':' + o.port)),
            l && 'object' == typeof l && (l = t.encode(l)),
            (p = o.search || (l && '?' + l) || ''),
            s && ':' !== s.substr(-1) && (s += ':'),
            o.slashes || ((!s || r.test(s)) && !1 !== h)
              ? ((h = '//' + (h || '')), i && '/' !== i[0] && (i = '/' + i))
              : h || (h = ''),
            c && '#' !== c[0] && (c = '#' + c),
            p && '?' !== p[0] && (p = '?' + p),
            {
              protocol: s,
              host: h,
              pathname: (i = i.replace(/[?#]/g, encodeURIComponent)),
              search: (p = p.replace('#', '%23')),
              hash: c,
            });
        return '' + u.protocol + u.host + u.pathname + u.search + u.hash;
      }
      var n = 'http://',
        i = n + 'w.w',
        c = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
        l = /https?|ftp|gopher|file/;
      function h(e, t) {
        var r = 'string' == typeof e ? v(e) : e;
        e = 'object' == typeof e ? o(e) : e;
        var a = v(t),
          s = '';
        (r.protocol &&
          !r.slashes &&
          ((s = r.protocol),
          (e = e.replace(r.protocol, '')),
          (s += '/' === t[0] || '/' === e[0] ? '/' : '')),
          s &&
            a.protocol &&
            ((s = ''),
            a.slashes || ((s = a.protocol), (t = t.replace(a.protocol, '')))));
        var h = e.match(c);
        h &&
          !a.protocol &&
          ((e = e.substr((s = h[1] + (h[2] || '')).length)),
          /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
        var p = new URL(e, i + '/'),
          u = new URL(t, p).toString().replace(i, ''),
          d = a.protocol || r.protocol;
        return (
          (d += r.slashes || a.slashes ? '//' : ''),
          !s && d ? (u = u.replace(n, d)) : s && (u = u.replace(n, '')),
          l.test(u) ||
            ~t.indexOf('.') ||
            '/' === e.slice(-1) ||
            '/' === t.slice(-1) ||
            '/' !== u.slice(-1) ||
            (u = u.slice(0, -1)),
          s && (u = s + ('/' === u[0] ? u.substr(1) : u)),
          u
        );
      }
      function p() {}
      ((p.prototype.parse = v),
        (p.prototype.format = o),
        (p.prototype.resolve = h),
        (p.prototype.resolveObject = h));
      var u = /^https?|ftp|gopher|file/,
        d = /^(.*?)([#?].*)/,
        f = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
        m = /^([a-z0-9.+-]*:)?\/\/\/*/i,
        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
      function v(e, r, n) {
        if (
          (void 0 === r && (r = !1),
          void 0 === n && (n = !1),
          e && 'object' == typeof e && e instanceof p)
        )
          return e;
        var a = (e = e.trim()).match(d);
        ((e = a ? a[1].replace(/\\/g, '/') + a[2] : e.replace(/\\/g, '/')),
          g.test(e) && '/' !== e.slice(-1) && (e += '/'));
        var s = !/(^javascript)/.test(e) && e.match(f),
          c = m.test(e),
          l = '';
        s &&
          (u.test(s[1]) || ((l = s[1].toLowerCase()), (e = '' + s[2] + s[3])),
          s[2] ||
            ((c = !1),
            u.test(s[1]) ? ((l = s[1]), (e = '' + s[3])) : (e = '//' + s[3])),
          (3 !== s[2].length && 1 !== s[2].length) ||
            ((l = s[1]), (e = '/' + s[3])));
        var h,
          v = (a ? a[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
          b = v && v[1],
          x = new p(),
          y = '',
          C = '';
        try {
          h = new URL(e);
        } catch (t) {
          ((y = t),
            l ||
              n ||
              !/^\/\//.test(e) ||
              /^\/\/.+[@.]/.test(e) ||
              ((C = '/'), (e = e.substr(1))));
          try {
            h = new URL(e, i);
          } catch (e) {
            return ((x.protocol = l), (x.href = l), x);
          }
        }
        ((x.slashes = c && !C),
          (x.host = 'w.w' === h.host ? '' : h.host),
          (x.hostname =
            'w.w' === h.hostname ? '' : h.hostname.replace(/(\[|\])/g, '')),
          (x.protocol = y ? l || null : h.protocol),
          (x.search = h.search.replace(/\\/g, '%5C')),
          (x.hash = h.hash.replace(/\\/g, '%5C')));
        var j = e.split('#');
        (!x.search && ~j[0].indexOf('?') && (x.search = '?'),
          x.hash || '' !== j[1] || (x.hash = '#'),
          (x.query = r ? t.decode(h.search.substr(1)) : x.search.substr(1)),
          (x.pathname =
            C +
            (s
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
          l &&
            !u.test(l) &&
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
          (x.href = C ? '' + x.pathname + x.search + x.hash : o(x)));
        var A = /^(file)/.test(x.href) ? ['host', 'hostname'] : [];
        return (
          Object.keys(x).forEach(function (e) {
            ~A.indexOf(e) || (x[e] = x[e] || null);
          }),
          x
        );
      }
      ((s.parse = v),
        (s.format = o),
        (s.resolve = h),
        (s.resolveObject = function (e, t) {
          return v(h(e, t));
        }),
        (s.Url = p));
    })(),
      (t.exports = s));
  },
  39186,
  (e) => {
    'use strict';
    e.s([
      'copy',
      0,
      (e) => {
        navigator.clipboard
          .writeText(e)
          .then(() => {
            alert('Copied to clipboard!');
          })
          .catch((e) => {
            console.error('Failed to copy: ', e);
          });
      },
    ]);
  },
  52531,
  (e) => {
    'use strict';
    var t = e.i(68601),
      r = e.i(98726),
      o = e.i(60373),
      n = e.i(39186),
      a = e.i(10583);
    let s = (0, e.i(50148).fileURLToPath)(
      {
        get url() {
          return `file://${e.P('src/pages/react/router/index.tsx')}`;
        },
      }.url
    );
    (console.log((0, a.join)((0, a.dirname)(s), '../../../..')),
      e.s([
        '__N_SSG',
        () => !0,
        'default',
        0,
        ({ code: e = '' }) =>
          (0, t.jsx)(o.PageTemplate, {
            disabledSearch: !0,
            query: '',
            setState: () => {},
            id: 'react-router',
            emoji: '🧭',
            title: 'atomic/router',
            description: '',
            children: (0, t.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, t.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, t.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'flex items-center justify-between gap-x-2',
                      children: [
                        (0, t.jsxs)('div', {
                          className: 'flex items-center gap-x-2',
                          children: [
                            (0, t.jsx)('span', {
                              className: 'text-4xl',
                              children: '🧭',
                            }),
                            (0, t.jsxs)('div', {
                              children: [
                                (0, t.jsx)('p', {
                                  className: 'text-xs capitalize',
                                  children: 'React',
                                }),
                                (0, t.jsx)('h3', {
                                  className:
                                    'text-xl font-bold capitalize md:text-2xl',
                                  children: 'Router',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                          onClick: () => (0, n.copy)(e),
                          children: 'Copy',
                        }),
                      ],
                    }),
                    (0, t.jsx)('div', {
                      className:
                        'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                      children: (0, t.jsx)(r.Shiki, { code: e, lang: 'tsx' }),
                    }),
                  ],
                }),
              }),
            }),
          }),
      ]));
  },
  59457,
  (e, t, r) => {
    let o = '/react/router';
    ((window.__NEXT_P = window.__NEXT_P || []).push([o, () => e.r(52531)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([o]);
        }));
  },
]);
