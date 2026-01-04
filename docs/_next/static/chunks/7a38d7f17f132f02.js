(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  93967,
  (e, t, n) => {
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
            function n(e, t) {
              for (
                var n, r = '', o = 0, a = -1, i = 0, l = 0;
                l <= e.length;
                ++l
              ) {
                if (l < e.length) n = e.charCodeAt(l);
                else if (47 === n) break;
                else n = 47;
                if (47 === n) {
                  if (a === l - 1 || 1 === i);
                  else if (a !== l - 1 && 2 === i) {
                    if (
                      r.length < 2 ||
                      2 !== o ||
                      46 !== r.charCodeAt(r.length - 1) ||
                      46 !== r.charCodeAt(r.length - 2)
                    ) {
                      if (r.length > 2) {
                        var c = r.lastIndexOf('/');
                        if (c !== r.length - 1) {
                          (-1 === c
                            ? ((r = ''), (o = 0))
                            : (o =
                                (r = r.slice(0, c)).length -
                                1 -
                                r.lastIndexOf('/')),
                            (a = l),
                            (i = 0));
                          continue;
                        }
                      } else if (2 === r.length || 1 === r.length) {
                        ((r = ''), (o = 0), (a = l), (i = 0));
                        continue;
                      }
                    }
                    t && (r.length > 0 ? (r += '/..') : (r = '..'), (o = 2));
                  } else
                    (r.length > 0
                      ? (r += '/' + e.slice(a + 1, l))
                      : (r = e.slice(a + 1, l)),
                      (o = l - a - 1));
                  ((a = l), (i = 0));
                } else 46 === n && -1 !== i ? ++i : (i = -1);
              }
              return r;
            }
            var r = {
              resolve: function () {
                for (
                  var e, r, o = '', a = !1, i = arguments.length - 1;
                  i >= -1 && !a;
                  i--
                )
                  (i >= 0
                    ? (r = arguments[i])
                    : (void 0 === e && (e = ''), (r = e)),
                    t(r),
                    0 !== r.length &&
                      ((o = r + '/' + o), (a = 47 === r.charCodeAt(0))));
                if (((o = n(o, !a)), a))
                  if (o.length > 0) return '/' + o;
                  else return '/';
                return o.length > 0 ? o : '.';
              },
              normalize: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                var r = 47 === e.charCodeAt(0),
                  o = 47 === e.charCodeAt(e.length - 1);
                return (0 !== (e = n(e, !r)).length || r || (e = '.'),
                e.length > 0 && o && (e += '/'),
                r)
                  ? '/' + e
                  : e;
              },
              isAbsolute: function (e) {
                return (t(e), e.length > 0 && 47 === e.charCodeAt(0));
              },
              join: function () {
                if (0 == arguments.length) return '.';
                for (var e, n = 0; n < arguments.length; ++n) {
                  var o = arguments[n];
                  (t(o),
                    o.length > 0 && (void 0 === e ? (e = o) : (e += '/' + o)));
                }
                return void 0 === e ? '.' : r.normalize(e);
              },
              relative: function (e, n) {
                if (
                  (t(e),
                  t(n),
                  e === n || (e = r.resolve(e)) === (n = r.resolve(n)))
                )
                  return '';
                for (var o = 1; o < e.length && 47 === e.charCodeAt(o); ++o);
                for (
                  var a = e.length, i = a - o, l = 1;
                  l < n.length && 47 === n.charCodeAt(l);
                  ++l
                );
                for (
                  var c = n.length - l, s = i < c ? i : c, u = -1, p = 0;
                  p <= s;
                  ++p
                ) {
                  if (p === s) {
                    if (c > s) {
                      if (47 === n.charCodeAt(l + p)) return n.slice(l + p + 1);
                      else if (0 === p) return n.slice(l + p);
                    } else
                      i > s &&
                        (47 === e.charCodeAt(o + p)
                          ? (u = p)
                          : 0 === p && (u = 0));
                    break;
                  }
                  var f = e.charCodeAt(o + p);
                  if (f !== n.charCodeAt(l + p)) break;
                  47 === f && (u = p);
                }
                var m = '';
                for (p = o + u + 1; p <= a; ++p)
                  (p === a || 47 === e.charCodeAt(p)) &&
                    (0 === m.length ? (m += '..') : (m += '/..'));
                return m.length > 0
                  ? m + n.slice(l + u)
                  : ((l += u), 47 === n.charCodeAt(l) && ++l, n.slice(l));
              },
              _makeLong: function (e) {
                return e;
              },
              dirname: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                for (
                  var n = e.charCodeAt(0),
                    r = 47 === n,
                    o = -1,
                    a = !0,
                    i = e.length - 1;
                  i >= 1;
                  --i
                )
                  if (47 === (n = e.charCodeAt(i))) {
                    if (!a) {
                      o = i;
                      break;
                    }
                  } else a = !1;
                return -1 === o
                  ? r
                    ? '/'
                    : '.'
                  : r && 1 === o
                    ? '//'
                    : e.slice(0, o);
              },
              basename: function (e, n) {
                if (void 0 !== n && 'string' != typeof n)
                  throw TypeError('"ext" argument must be a string');
                t(e);
                var r,
                  o = 0,
                  a = -1,
                  i = !0;
                if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                  if (n.length === e.length && n === e) return '';
                  var l = n.length - 1,
                    c = -1;
                  for (r = e.length - 1; r >= 0; --r) {
                    var s = e.charCodeAt(r);
                    if (47 === s) {
                      if (!i) {
                        o = r + 1;
                        break;
                      }
                    } else
                      (-1 === c && ((i = !1), (c = r + 1)),
                        l >= 0 &&
                          (s === n.charCodeAt(l)
                            ? -1 == --l && (a = r)
                            : ((l = -1), (a = c))));
                  }
                  return (
                    o === a ? (a = c) : -1 === a && (a = e.length),
                    e.slice(o, a)
                  );
                }
                for (r = e.length - 1; r >= 0; --r)
                  if (47 === e.charCodeAt(r)) {
                    if (!i) {
                      o = r + 1;
                      break;
                    }
                  } else -1 === a && ((i = !1), (a = r + 1));
                return -1 === a ? '' : e.slice(o, a);
              },
              extname: function (e) {
                t(e);
                for (
                  var n = -1, r = 0, o = -1, a = !0, i = 0, l = e.length - 1;
                  l >= 0;
                  --l
                ) {
                  var c = e.charCodeAt(l);
                  if (47 === c) {
                    if (!a) {
                      r = l + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === o && ((a = !1), (o = l + 1)),
                    46 === c
                      ? -1 === n
                        ? (n = l)
                        : 1 !== i && (i = 1)
                      : -1 !== n && (i = -1));
                }
                return -1 === n ||
                  -1 === o ||
                  0 === i ||
                  (1 === i && n === o - 1 && n === r + 1)
                  ? ''
                  : e.slice(n, o);
              },
              format: function (e) {
                var t, n;
                if (null === e || 'object' != typeof e)
                  throw TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof e
                  );
                return (
                  (t = e.dir || e.root),
                  (n = e.base || (e.name || '') + (e.ext || '')),
                  t ? (t === e.root ? t + n : t + '/' + n) : n
                );
              },
              parse: function (e) {
                t(e);
                var n,
                  r = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === e.length) return r;
                var o = e.charCodeAt(0),
                  a = 47 === o;
                a ? ((r.root = '/'), (n = 1)) : (n = 0);
                for (
                  var i = -1, l = 0, c = -1, s = !0, u = e.length - 1, p = 0;
                  u >= n;
                  --u
                ) {
                  if (47 === (o = e.charCodeAt(u))) {
                    if (!s) {
                      l = u + 1;
                      break;
                    }
                    continue;
                  }
                  (-1 === c && ((s = !1), (c = u + 1)),
                    46 === o
                      ? -1 === i
                        ? (i = u)
                        : 1 !== p && (p = 1)
                      : -1 !== i && (p = -1));
                }
                return (
                  -1 === i ||
                  -1 === c ||
                  0 === p ||
                  (1 === p && i === c - 1 && i === l + 1)
                    ? -1 !== c &&
                      (0 === l && a
                        ? (r.base = r.name = e.slice(1, c))
                        : (r.base = r.name = e.slice(l, c)))
                    : (0 === l && a
                        ? ((r.name = e.slice(1, i)), (r.base = e.slice(1, c)))
                        : ((r.name = e.slice(l, i)), (r.base = e.slice(l, c))),
                      (r.ext = e.slice(i, c))),
                  l > 0 ? (r.dir = e.slice(0, l - 1)) : a && (r.dir = '/'),
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
        n = {};
      function r(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var a = (n[t] = { exports: {} }),
          i = !0;
        try {
          (e[t](a, a.exports, r), (i = !1));
        } finally {
          i && delete n[t];
        }
        return a.exports;
      }
      ((r.ab =
        '/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/path-browserify/'),
        (t.exports = r(114)));
    })();
  },
  299,
  (e, t, n) => {
    !(function () {
      'use strict';
      var e = {
          815: function (e) {
            e.exports = function (e, n, r, o) {
              ((n = n || '&'), (r = r || '='));
              var a = {};
              if ('string' != typeof e || 0 === e.length) return a;
              var i = /\+/g;
              e = e.split(n);
              var l = 1e3;
              o && 'number' == typeof o.maxKeys && (l = o.maxKeys);
              var c = e.length;
              l > 0 && c > l && (c = l);
              for (var s = 0; s < c; ++s) {
                var u,
                  p,
                  f,
                  m,
                  d = e[s].replace(i, '%20'),
                  h = d.indexOf(r);
                (h >= 0
                  ? ((u = d.substr(0, h)), (p = d.substr(h + 1)))
                  : ((u = d), (p = '')),
                (f = decodeURIComponent(u)),
                (m = decodeURIComponent(p)),
                Object.prototype.hasOwnProperty.call(a, f))
                  ? t(a[f])
                    ? a[f].push(m)
                    : (a[f] = [a[f], m])
                  : (a[f] = m);
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
            e.exports = function (e, a, i, l) {
              return ((a = a || '&'),
              (i = i || '='),
              null === e && (e = void 0),
              'object' == typeof e)
                ? r(o(e), function (o) {
                    var l = encodeURIComponent(t(o)) + i;
                    return n(e[o])
                      ? r(e[o], function (e) {
                          return l + encodeURIComponent(t(e));
                        }).join(a)
                      : l + encodeURIComponent(t(e[o]));
                  }).join(a)
                : l
                  ? encodeURIComponent(t(l)) + i + encodeURIComponent(t(e))
                  : '';
            };
            var n =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
            function r(e, t) {
              if (e.map) return e.map(t);
              for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
              return n;
            }
            var o =
              Object.keys ||
              function (e) {
                var t = [];
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t;
              };
          },
        },
        n = {};
      function r(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var a = (n[t] = { exports: {} }),
          i = !0;
        try {
          (e[t](a, a.exports, r), (i = !1));
        } finally {
          i && delete n[t];
        }
        return a.exports;
      }
      r.ab =
        '/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/querystring-es3/';
      var o = {};
      ((o.decode = o.parse = r(815)),
        (o.encode = o.stringify = r(577)),
        (t.exports = o));
    })();
  },
  71805,
  (e, t, n) => {
    var r = {
        452: function (t) {
          'use strict';
          t.exports = e.r(299);
        },
      },
      o = {};
    function a(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var n = (o[e] = { exports: {} }),
        i = !0;
      try {
        (r[e](n, n.exports, a), (i = !1));
      } finally {
        i && delete o[e];
      }
      return n.exports;
    }
    a.ab =
      '/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/native-url/';
    var i = {};
    (!(function () {
      var e,
        t =
          (e = a(452)) && 'object' == typeof e && 'default' in e
            ? e.default
            : e,
        n = /https?|ftp|gopher|file/;
      function r(e) {
        'string' == typeof e && (e = y(e));
        var r,
          o,
          a,
          i,
          l,
          c,
          s,
          u,
          p,
          f =
            ((o = (r = e).auth),
            (a = r.hostname),
            (i = r.protocol || ''),
            (l = r.pathname || ''),
            (c = r.hash || ''),
            (s = r.query || ''),
            (u = !1),
            (o = o ? encodeURIComponent(o).replace(/%3A/i, ':') + '@' : ''),
            r.host
              ? (u = o + r.host)
              : a &&
                ((u = o + (~a.indexOf(':') ? '[' + a + ']' : a)),
                r.port && (u += ':' + r.port)),
            s && 'object' == typeof s && (s = t.encode(s)),
            (p = r.search || (s && '?' + s) || ''),
            i && ':' !== i.substr(-1) && (i += ':'),
            r.slashes || ((!i || n.test(i)) && !1 !== u)
              ? ((u = '//' + (u || '')), l && '/' !== l[0] && (l = '/' + l))
              : u || (u = ''),
            c && '#' !== c[0] && (c = '#' + c),
            p && '?' !== p[0] && (p = '?' + p),
            {
              protocol: i,
              host: u,
              pathname: (l = l.replace(/[?#]/g, encodeURIComponent)),
              search: (p = p.replace('#', '%23')),
              hash: c,
            });
        return '' + f.protocol + f.host + f.pathname + f.search + f.hash;
      }
      var o = 'http://',
        l = o + 'w.w',
        c = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
        s = /https?|ftp|gopher|file/;
      function u(e, t) {
        var n = 'string' == typeof e ? y(e) : e;
        e = 'object' == typeof e ? r(e) : e;
        var a = y(t),
          i = '';
        (n.protocol &&
          !n.slashes &&
          ((i = n.protocol),
          (e = e.replace(n.protocol, '')),
          (i += '/' === t[0] || '/' === e[0] ? '/' : '')),
          i &&
            a.protocol &&
            ((i = ''),
            a.slashes || ((i = a.protocol), (t = t.replace(a.protocol, '')))));
        var u = e.match(c);
        u &&
          !a.protocol &&
          ((e = e.substr((i = u[1] + (u[2] || '')).length)),
          /^\/\/[^/]/.test(t) && (i = i.slice(0, -1)));
        var p = new URL(e, l + '/'),
          f = new URL(t, p).toString().replace(l, ''),
          m = a.protocol || n.protocol;
        return (
          (m += n.slashes || a.slashes ? '//' : ''),
          !i && m ? (f = f.replace(o, m)) : i && (f = f.replace(o, '')),
          s.test(f) ||
            ~t.indexOf('.') ||
            '/' === e.slice(-1) ||
            '/' === t.slice(-1) ||
            '/' !== f.slice(-1) ||
            (f = f.slice(0, -1)),
          i && (f = i + ('/' === f[0] ? f.substr(1) : f)),
          f
        );
      }
      function p() {}
      ((p.prototype.parse = y),
        (p.prototype.format = r),
        (p.prototype.resolve = u),
        (p.prototype.resolveObject = u));
      var f = /^https?|ftp|gopher|file/,
        m = /^(.*?)([#?].*)/,
        d = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
        h = /^([a-z0-9.+-]*:)?\/\/\/*/i,
        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
      function y(e, n, o) {
        if (
          (void 0 === n && (n = !1),
          void 0 === o && (o = !1),
          e && 'object' == typeof e && e instanceof p)
        )
          return e;
        var a = (e = e.trim()).match(m);
        ((e = a ? a[1].replace(/\\/g, '/') + a[2] : e.replace(/\\/g, '/')),
          g.test(e) && '/' !== e.slice(-1) && (e += '/'));
        var i = !/(^javascript)/.test(e) && e.match(d),
          c = h.test(e),
          s = '';
        i &&
          (f.test(i[1]) || ((s = i[1].toLowerCase()), (e = '' + i[2] + i[3])),
          i[2] ||
            ((c = !1),
            f.test(i[1]) ? ((s = i[1]), (e = '' + i[3])) : (e = '//' + i[3])),
          (3 !== i[2].length && 1 !== i[2].length) ||
            ((s = i[1]), (e = '/' + i[3])));
        var u,
          y = (a ? a[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
          b = y && y[1],
          T = new p(),
          v = '',
          A = '';
        try {
          u = new URL(e);
        } catch (t) {
          ((v = t),
            s ||
              o ||
              !/^\/\//.test(e) ||
              /^\/\/.+[@.]/.test(e) ||
              ((A = '/'), (e = e.substr(1))));
          try {
            u = new URL(e, l);
          } catch (e) {
            return ((T.protocol = s), (T.href = s), T);
          }
        }
        ((T.slashes = c && !A),
          (T.host = 'w.w' === u.host ? '' : u.host),
          (T.hostname =
            'w.w' === u.hostname ? '' : u.hostname.replace(/(\[|\])/g, '')),
          (T.protocol = v ? s || null : u.protocol),
          (T.search = u.search.replace(/\\/g, '%5C')),
          (T.hash = u.hash.replace(/\\/g, '%5C')));
        var _ = e.split('#');
        (!T.search && ~_[0].indexOf('?') && (T.search = '?'),
          T.hash || '' !== _[1] || (T.hash = '#'),
          (T.query = n ? t.decode(u.search.substr(1)) : T.search.substr(1)),
          (T.pathname =
            A +
            (i
              ? u.pathname
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
              : u.pathname)),
          'about:' === T.protocol &&
            'blank' === T.pathname &&
            ((T.protocol = ''), (T.pathname = '')),
          v && '/' !== e[0] && (T.pathname = T.pathname.substr(1)),
          s &&
            !f.test(s) &&
            '/' !== e.slice(-1) &&
            '/' === T.pathname &&
            (T.pathname = ''),
          (T.path = T.pathname + T.search),
          (T.auth = [u.username, u.password]
            .map(decodeURIComponent)
            .filter(Boolean)
            .join(':')),
          (T.port = u.port),
          b && !T.host.endsWith(b) && ((T.host += b), (T.port = b.slice(1))),
          (T.href = A ? '' + T.pathname + T.search + T.hash : r(T)));
        var E = /^(file)/.test(T.href) ? ['host', 'hostname'] : [];
        return (
          Object.keys(T).forEach(function (e) {
            ~E.indexOf(e) || (T[e] = T[e] || null);
          }),
          T
        );
      }
      ((i.parse = y),
        (i.format = r),
        (i.resolve = u),
        (i.resolveObject = function (e, t) {
          return y(u(e, t));
        }),
        (i.Url = p));
    })(),
      (t.exports = i));
  },
  53791,
  (e) => {
    'use strict';
    let {
        entries: t,
        setPrototypeOf: n,
        isFrozen: r,
        getPrototypeOf: o,
        getOwnPropertyDescriptor: a,
      } = Object,
      { freeze: i, seal: l, create: c } = Object,
      { apply: s, construct: u } = 'undefined' != typeof Reflect && Reflect;
    (i ||
      (i = function (e) {
        return e;
      }),
      l ||
        (l = function (e) {
          return e;
        }),
      s ||
        (s = function (e, t) {
          for (
            var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            r[o - 2] = arguments[o];
          return e.apply(t, r);
        }),
      u ||
        (u = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return new e(...n);
        }));
    let p = S(Array.prototype.forEach),
      f = S(Array.prototype.lastIndexOf),
      m = S(Array.prototype.pop),
      d = S(Array.prototype.push),
      h = S(Array.prototype.splice),
      g = S(String.prototype.toLowerCase),
      y = S(String.prototype.toString),
      b = S(String.prototype.match),
      T = S(String.prototype.replace),
      v = S(String.prototype.indexOf),
      A = S(String.prototype.trim),
      _ = S(Object.prototype.hasOwnProperty),
      E = S(RegExp.prototype.test),
      C =
        ((X = TypeError),
        function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return u(X, t);
        });
    function S(e) {
      return function (t) {
        t instanceof RegExp && (t.lastIndex = 0);
        for (
          var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        return s(e, t, r);
      };
    }
    function x(e, t) {
      let o =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
      n && n(e, null);
      let a = t.length;
      for (; a--; ) {
        let n = t[a];
        if ('string' == typeof n) {
          let e = o(n);
          e !== n && (r(t) || (t[a] = e), (n = e));
        }
        e[n] = !0;
      }
      return e;
    }
    function N(e) {
      let n = c(null);
      for (let [r, o] of t(e))
        _(e, r) &&
          (Array.isArray(o)
            ? (n[r] = (function (e) {
                for (let t = 0; t < e.length; t++) _(e, t) || (e[t] = null);
                return e;
              })(o))
            : o && 'object' == typeof o && o.constructor === Object
              ? (n[r] = N(o))
              : (n[r] = o));
      return n;
    }
    function O(e, t) {
      for (; null !== e; ) {
        let n = a(e, t);
        if (n) {
          if (n.get) return S(n.get);
          if ('function' == typeof n.value) return S(n.value);
        }
        e = o(e);
      }
      return function () {
        return null;
      };
    }
    let w = i([
        'a',
        'abbr',
        'acronym',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'bdi',
        'bdo',
        'big',
        'blink',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'center',
        'cite',
        'code',
        'col',
        'colgroup',
        'content',
        'data',
        'datalist',
        'dd',
        'decorator',
        'del',
        'details',
        'dfn',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'element',
        'em',
        'fieldset',
        'figcaption',
        'figure',
        'font',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'img',
        'input',
        'ins',
        'kbd',
        'label',
        'legend',
        'li',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meter',
        'nav',
        'nobr',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'search',
        'section',
        'select',
        'shadow',
        'slot',
        'small',
        'source',
        'spacer',
        'span',
        'strike',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'tr',
        'track',
        'tt',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
      ]),
      R = i([
        'svg',
        'a',
        'altglyph',
        'altglyphdef',
        'altglyphitem',
        'animatecolor',
        'animatemotion',
        'animatetransform',
        'circle',
        'clippath',
        'defs',
        'desc',
        'ellipse',
        'enterkeyhint',
        'exportparts',
        'filter',
        'font',
        'g',
        'glyph',
        'glyphref',
        'hkern',
        'image',
        'inputmode',
        'line',
        'lineargradient',
        'marker',
        'mask',
        'metadata',
        'mpath',
        'part',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialgradient',
        'rect',
        'stop',
        'style',
        'switch',
        'symbol',
        'text',
        'textpath',
        'title',
        'tref',
        'tspan',
        'view',
        'vkern',
      ]),
      k = i([
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
      ]),
      D = i([
        'animate',
        'color-profile',
        'cursor',
        'discard',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-src',
        'font-face-uri',
        'foreignobject',
        'hatch',
        'hatchpath',
        'mesh',
        'meshgradient',
        'meshpatch',
        'meshrow',
        'missing-glyph',
        'script',
        'set',
        'solidcolor',
        'unknown',
        'use',
      ]),
      L = i([
        'math',
        'menclose',
        'merror',
        'mfenced',
        'mfrac',
        'mglyph',
        'mi',
        'mlabeledtr',
        'mmultiscripts',
        'mn',
        'mo',
        'mover',
        'mpadded',
        'mphantom',
        'mroot',
        'mrow',
        'ms',
        'mspace',
        'msqrt',
        'mstyle',
        'msub',
        'msup',
        'msubsup',
        'mtable',
        'mtd',
        'mtext',
        'mtr',
        'munder',
        'munderover',
        'mprescripts',
      ]),
      I = i([
        'maction',
        'maligngroup',
        'malignmark',
        'mlongdiv',
        'mscarries',
        'mscarry',
        'msgroup',
        'mstack',
        'msline',
        'msrow',
        'semantics',
        'annotation',
        'annotation-xml',
        'mprescripts',
        'none',
      ]),
      M = i(['#text']),
      U = i([
        'accept',
        'action',
        'align',
        'alt',
        'autocapitalize',
        'autocomplete',
        'autopictureinpicture',
        'autoplay',
        'background',
        'bgcolor',
        'border',
        'capture',
        'cellpadding',
        'cellspacing',
        'checked',
        'cite',
        'class',
        'clear',
        'color',
        'cols',
        'colspan',
        'controls',
        'controlslist',
        'coords',
        'crossorigin',
        'datetime',
        'decoding',
        'default',
        'dir',
        'disabled',
        'disablepictureinpicture',
        'disableremoteplayback',
        'download',
        'draggable',
        'enctype',
        'enterkeyhint',
        'exportparts',
        'face',
        'for',
        'headers',
        'height',
        'hidden',
        'high',
        'href',
        'hreflang',
        'id',
        'inert',
        'inputmode',
        'integrity',
        'ismap',
        'kind',
        'label',
        'lang',
        'list',
        'loading',
        'loop',
        'low',
        'max',
        'maxlength',
        'media',
        'method',
        'min',
        'minlength',
        'multiple',
        'muted',
        'name',
        'nonce',
        'noshade',
        'novalidate',
        'nowrap',
        'open',
        'optimum',
        'part',
        'pattern',
        'placeholder',
        'playsinline',
        'popover',
        'popovertarget',
        'popovertargetaction',
        'poster',
        'preload',
        'pubdate',
        'radiogroup',
        'readonly',
        'rel',
        'required',
        'rev',
        'reversed',
        'role',
        'rows',
        'rowspan',
        'spellcheck',
        'scope',
        'selected',
        'shape',
        'size',
        'sizes',
        'slot',
        'span',
        'srclang',
        'start',
        'src',
        'srcset',
        'step',
        'style',
        'summary',
        'tabindex',
        'title',
        'translate',
        'type',
        'usemap',
        'valign',
        'value',
        'width',
        'wrap',
        'xmlns',
        'slot',
      ]),
      z = i([
        'accent-height',
        'accumulate',
        'additive',
        'alignment-baseline',
        'amplitude',
        'ascent',
        'attributename',
        'attributetype',
        'azimuth',
        'basefrequency',
        'baseline-shift',
        'begin',
        'bias',
        'by',
        'class',
        'clip',
        'clippathunits',
        'clip-path',
        'clip-rule',
        'color',
        'color-interpolation',
        'color-interpolation-filters',
        'color-profile',
        'color-rendering',
        'cx',
        'cy',
        'd',
        'dx',
        'dy',
        'diffuseconstant',
        'direction',
        'display',
        'divisor',
        'dur',
        'edgemode',
        'elevation',
        'end',
        'exponent',
        'fill',
        'fill-opacity',
        'fill-rule',
        'filter',
        'filterunits',
        'flood-color',
        'flood-opacity',
        'font-family',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-variant',
        'font-weight',
        'fx',
        'fy',
        'g1',
        'g2',
        'glyph-name',
        'glyphref',
        'gradientunits',
        'gradienttransform',
        'height',
        'href',
        'id',
        'image-rendering',
        'in',
        'in2',
        'intercept',
        'k',
        'k1',
        'k2',
        'k3',
        'k4',
        'kerning',
        'keypoints',
        'keysplines',
        'keytimes',
        'lang',
        'lengthadjust',
        'letter-spacing',
        'kernelmatrix',
        'kernelunitlength',
        'lighting-color',
        'local',
        'marker-end',
        'marker-mid',
        'marker-start',
        'markerheight',
        'markerunits',
        'markerwidth',
        'maskcontentunits',
        'maskunits',
        'max',
        'mask',
        'mask-type',
        'media',
        'method',
        'mode',
        'min',
        'name',
        'numoctaves',
        'offset',
        'operator',
        'opacity',
        'order',
        'orient',
        'orientation',
        'origin',
        'overflow',
        'paint-order',
        'path',
        'pathlength',
        'patterncontentunits',
        'patterntransform',
        'patternunits',
        'points',
        'preservealpha',
        'preserveaspectratio',
        'primitiveunits',
        'r',
        'rx',
        'ry',
        'radius',
        'refx',
        'refy',
        'repeatcount',
        'repeatdur',
        'restart',
        'result',
        'rotate',
        'scale',
        'seed',
        'shape-rendering',
        'slope',
        'specularconstant',
        'specularexponent',
        'spreadmethod',
        'startoffset',
        'stddeviation',
        'stitchtiles',
        'stop-color',
        'stop-opacity',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke',
        'stroke-width',
        'style',
        'surfacescale',
        'systemlanguage',
        'tabindex',
        'tablevalues',
        'targetx',
        'targety',
        'transform',
        'transform-origin',
        'text-anchor',
        'text-decoration',
        'text-rendering',
        'textlength',
        'type',
        'u1',
        'u2',
        'unicode',
        'values',
        'viewbox',
        'visibility',
        'version',
        'vert-adv-y',
        'vert-origin-x',
        'vert-origin-y',
        'width',
        'word-spacing',
        'wrap',
        'writing-mode',
        'xchannelselector',
        'ychannelselector',
        'x',
        'x1',
        'x2',
        'xmlns',
        'y',
        'y1',
        'y2',
        'z',
        'zoomandpan',
      ]),
      P = i([
        'accent',
        'accentunder',
        'align',
        'bevelled',
        'close',
        'columnsalign',
        'columnlines',
        'columnspan',
        'denomalign',
        'depth',
        'dir',
        'display',
        'displaystyle',
        'encoding',
        'fence',
        'frame',
        'height',
        'href',
        'id',
        'largeop',
        'length',
        'linethickness',
        'lspace',
        'lquote',
        'mathbackground',
        'mathcolor',
        'mathsize',
        'mathvariant',
        'maxsize',
        'minsize',
        'movablelimits',
        'notation',
        'numalign',
        'open',
        'rowalign',
        'rowlines',
        'rowspacing',
        'rowspan',
        'rspace',
        'rquote',
        'scriptlevel',
        'scriptminsize',
        'scriptsizemultiplier',
        'selection',
        'separator',
        'separators',
        'stretchy',
        'subscriptshift',
        'supscriptshift',
        'symmetric',
        'voffset',
        'width',
        'xmlns',
      ]),
      F = i([
        'xlink:href',
        'xml:id',
        'xlink:title',
        'xml:space',
        'xmlns:xlink',
      ]),
      j = l(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
      H = l(/<%[\w\W]*|[\w\W]*%>/gm),
      B = l(/\$\{[\w\W]*/gm),
      G = l(/^data-[\-\w.\u00B7-\uFFFF]+$/),
      W = l(/^aria-[\-\w]+$/),
      Y = l(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ),
      q = l(/^(?:\w+script|data):/i),
      K = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      $ = l(/^html$/i);
    var X,
      V = Object.freeze({
        __proto__: null,
        ARIA_ATTR: W,
        ATTR_WHITESPACE: K,
        CUSTOM_ELEMENT: l(/^[a-z][.\w]*(-[.\w]+)+$/i),
        DATA_ATTR: G,
        DOCTYPE_NAME: $,
        ERB_EXPR: H,
        IS_ALLOWED_URI: Y,
        IS_SCRIPT_OR_DATA: q,
        MUSTACHE_EXPR: j,
        TMPLIT_EXPR: B,
      });
    let Z = function (e, t) {
        if ('object' != typeof e || 'function' != typeof e.createPolicy)
          return null;
        let n = null,
          r = 'data-tt-policy-suffix';
        t && t.hasAttribute(r) && (n = t.getAttribute(r));
        let o = 'dompurify' + (n ? '#' + n : '');
        try {
          return e.createPolicy(o, {
            createHTML: (e) => e,
            createScriptURL: (e) => e,
          });
        } catch (e) {
          return (
            console.warn('TrustedTypes policy ' + o + ' could not be created.'),
            null
          );
        }
      },
      J = function () {
        return {
          afterSanitizeAttributes: [],
          afterSanitizeElements: [],
          afterSanitizeShadowDOM: [],
          beforeSanitizeAttributes: [],
          beforeSanitizeElements: [],
          beforeSanitizeShadowDOM: [],
          uponSanitizeAttribute: [],
          uponSanitizeElement: [],
          uponSanitizeShadowNode: [],
        };
      };
    var Q = (function e() {
      let n,
        r =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'undefined' == typeof window
              ? null
              : window,
        o = (t) => e(t);
      if (
        ((o.version = '3.3.1'),
        (o.removed = []),
        !r || !r.document || 9 !== r.document.nodeType || !r.Element)
      )
        return ((o.isSupported = !1), o);
      let { document: a } = r,
        l = a,
        s = l.currentScript,
        {
          DocumentFragment: u,
          HTMLTemplateElement: S,
          Node: j,
          Element: H,
          NodeFilter: B,
          NamedNodeMap: G = r.NamedNodeMap || r.MozNamedAttrMap,
          HTMLFormElement: W,
          DOMParser: q,
          trustedTypes: K,
        } = r,
        X = H.prototype,
        Q = O(X, 'cloneNode'),
        ee = O(X, 'remove'),
        et = O(X, 'nextSibling'),
        en = O(X, 'childNodes'),
        er = O(X, 'parentNode');
      if ('function' == typeof S) {
        let e = a.createElement('template');
        e.content && e.content.ownerDocument && (a = e.content.ownerDocument);
      }
      let eo = '',
        {
          implementation: ea,
          createNodeIterator: ei,
          createDocumentFragment: el,
          getElementsByTagName: ec,
        } = a,
        { importNode: es } = l,
        eu = J();
      o.isSupported =
        'function' == typeof t &&
        'function' == typeof er &&
        ea &&
        void 0 !== ea.createHTMLDocument;
      let {
          MUSTACHE_EXPR: ep,
          ERB_EXPR: ef,
          TMPLIT_EXPR: em,
          DATA_ATTR: ed,
          ARIA_ATTR: eh,
          IS_SCRIPT_OR_DATA: eg,
          ATTR_WHITESPACE: ey,
          CUSTOM_ELEMENT: eb,
        } = V,
        { IS_ALLOWED_URI: eT } = V,
        ev = null,
        eA = x({}, [...w, ...R, ...k, ...L, ...M]),
        e_ = null,
        eE = x({}, [...U, ...z, ...P, ...F]),
        eC = Object.seal(
          c(null, {
            tagNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        eS = null,
        ex = null,
        eN = Object.seal(
          c(null, {
            tagCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
          })
        ),
        eO = !0,
        ew = !0,
        eR = !1,
        ek = !0,
        eD = !1,
        eL = !0,
        eI = !1,
        eM = !1,
        eU = !1,
        ez = !1,
        eP = !1,
        eF = !1,
        ej = !0,
        eH = !1,
        eB = !0,
        eG = !1,
        eW = {},
        eY = null,
        eq = x({}, [
          'annotation-xml',
          'audio',
          'colgroup',
          'desc',
          'foreignobject',
          'head',
          'iframe',
          'math',
          'mi',
          'mn',
          'mo',
          'ms',
          'mtext',
          'noembed',
          'noframes',
          'noscript',
          'plaintext',
          'script',
          'style',
          'svg',
          'template',
          'thead',
          'title',
          'video',
          'xmp',
        ]),
        eK = null,
        e$ = x({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
        eX = null,
        eV = x({}, [
          'alt',
          'class',
          'for',
          'id',
          'label',
          'name',
          'pattern',
          'placeholder',
          'role',
          'summary',
          'title',
          'value',
          'style',
          'xmlns',
        ]),
        eZ = 'http://www.w3.org/1998/Math/MathML',
        eJ = 'http://www.w3.org/2000/svg',
        eQ = 'http://www.w3.org/1999/xhtml',
        e1 = eQ,
        e0 = !1,
        e2 = null,
        e9 = x({}, [eZ, eJ, eQ], y),
        e7 = x({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
        e3 = x({}, ['annotation-xml']),
        e4 = x({}, ['title', 'style', 'font', 'a', 'script']),
        e5 = null,
        e6 = ['application/xhtml+xml', 'text/html'],
        e8 = null,
        te = null,
        tt = a.createElement('form'),
        tn = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        tr = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!te || te !== e) {
            if (
              ((e && 'object' == typeof e) || (e = {}),
              (e = N(e)),
              (e8 =
                'application/xhtml+xml' ===
                (e5 =
                  -1 === e6.indexOf(e.PARSER_MEDIA_TYPE)
                    ? 'text/html'
                    : e.PARSER_MEDIA_TYPE)
                  ? y
                  : g),
              (ev = _(e, 'ALLOWED_TAGS') ? x({}, e.ALLOWED_TAGS, e8) : eA),
              (e_ = _(e, 'ALLOWED_ATTR') ? x({}, e.ALLOWED_ATTR, e8) : eE),
              (e2 = _(e, 'ALLOWED_NAMESPACES')
                ? x({}, e.ALLOWED_NAMESPACES, y)
                : e9),
              (eX = _(e, 'ADD_URI_SAFE_ATTR')
                ? x(N(eV), e.ADD_URI_SAFE_ATTR, e8)
                : eV),
              (eK = _(e, 'ADD_DATA_URI_TAGS')
                ? x(N(e$), e.ADD_DATA_URI_TAGS, e8)
                : e$),
              (eY = _(e, 'FORBID_CONTENTS')
                ? x({}, e.FORBID_CONTENTS, e8)
                : eq),
              (eS = _(e, 'FORBID_TAGS') ? x({}, e.FORBID_TAGS, e8) : N({})),
              (ex = _(e, 'FORBID_ATTR') ? x({}, e.FORBID_ATTR, e8) : N({})),
              (eW = !!_(e, 'USE_PROFILES') && e.USE_PROFILES),
              (eO = !1 !== e.ALLOW_ARIA_ATTR),
              (ew = !1 !== e.ALLOW_DATA_ATTR),
              (eR = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (ek = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
              (eD = e.SAFE_FOR_TEMPLATES || !1),
              (eL = !1 !== e.SAFE_FOR_XML),
              (eI = e.WHOLE_DOCUMENT || !1),
              (ez = e.RETURN_DOM || !1),
              (eP = e.RETURN_DOM_FRAGMENT || !1),
              (eF = e.RETURN_TRUSTED_TYPE || !1),
              (eU = e.FORCE_BODY || !1),
              (ej = !1 !== e.SANITIZE_DOM),
              (eH = e.SANITIZE_NAMED_PROPS || !1),
              (eB = !1 !== e.KEEP_CONTENT),
              (eG = e.IN_PLACE || !1),
              (eT = e.ALLOWED_URI_REGEXP || Y),
              (e1 = e.NAMESPACE || eQ),
              (e7 = e.MATHML_TEXT_INTEGRATION_POINTS || e7),
              (e3 = e.HTML_INTEGRATION_POINTS || e3),
              (eC = e.CUSTOM_ELEMENT_HANDLING || {}),
              e.CUSTOM_ELEMENT_HANDLING &&
                tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (eC.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (eC.attributeNameCheck =
                  e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                'boolean' ==
                  typeof e.CUSTOM_ELEMENT_HANDLING
                    .allowCustomizedBuiltInElements &&
                (eC.allowCustomizedBuiltInElements =
                  e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              eD && (ew = !1),
              eP && (ez = !0),
              eW &&
                ((ev = x({}, M)),
                (e_ = []),
                !0 === eW.html && (x(ev, w), x(e_, U)),
                !0 === eW.svg && (x(ev, R), x(e_, z), x(e_, F)),
                !0 === eW.svgFilters && (x(ev, k), x(e_, z), x(e_, F)),
                !0 === eW.mathMl && (x(ev, L), x(e_, P), x(e_, F))),
              e.ADD_TAGS &&
                ('function' == typeof e.ADD_TAGS
                  ? (eN.tagCheck = e.ADD_TAGS)
                  : (ev === eA && (ev = N(ev)), x(ev, e.ADD_TAGS, e8))),
              e.ADD_ATTR &&
                ('function' == typeof e.ADD_ATTR
                  ? (eN.attributeCheck = e.ADD_ATTR)
                  : (e_ === eE && (e_ = N(e_)), x(e_, e.ADD_ATTR, e8))),
              e.ADD_URI_SAFE_ATTR && x(eX, e.ADD_URI_SAFE_ATTR, e8),
              e.FORBID_CONTENTS &&
                (eY === eq && (eY = N(eY)), x(eY, e.FORBID_CONTENTS, e8)),
              e.ADD_FORBID_CONTENTS &&
                (eY === eq && (eY = N(eY)), x(eY, e.ADD_FORBID_CONTENTS, e8)),
              eB && (ev['#text'] = !0),
              eI && x(ev, ['html', 'head', 'body']),
              ev.table && (x(ev, ['tbody']), delete eS.tbody),
              e.TRUSTED_TYPES_POLICY)
            ) {
              if ('function' != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                throw C(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                );
              if ('function' != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                throw C(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                );
              eo = (n = e.TRUSTED_TYPES_POLICY).createHTML('');
            } else
              (void 0 === n && (n = Z(K, s)),
                null !== n && 'string' == typeof eo && (eo = n.createHTML('')));
            (i && i(e), (te = e));
          }
        },
        to = x({}, [...R, ...k, ...D]),
        ta = x({}, [...L, ...I]),
        ti = function (e) {
          let t = er(e);
          (t && t.tagName) || (t = { namespaceURI: e1, tagName: 'template' });
          let n = g(e.tagName),
            r = g(t.tagName);
          return (
            !!e2[e.namespaceURI] &&
            (e.namespaceURI === eJ
              ? t.namespaceURI === eQ
                ? 'svg' === n
                : t.namespaceURI === eZ
                  ? 'svg' === n && ('annotation-xml' === r || e7[r])
                  : !!to[n]
              : e.namespaceURI === eZ
                ? t.namespaceURI === eQ
                  ? 'math' === n
                  : t.namespaceURI === eJ
                    ? 'math' === n && e3[r]
                    : !!ta[n]
                : e.namespaceURI === eQ
                  ? (t.namespaceURI !== eJ || !!e3[r]) &&
                    (t.namespaceURI !== eZ || !!e7[r]) &&
                    !ta[n] &&
                    (e4[n] || !to[n])
                  : 'application/xhtml+xml' === e5 && !!e2[e.namespaceURI])
          );
        },
        tl = function (e) {
          d(o.removed, { element: e });
          try {
            er(e).removeChild(e);
          } catch (t) {
            ee(e);
          }
        },
        tc = function (e, t) {
          try {
            d(o.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            d(o.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), 'is' === e))
            if (ez || eP)
              try {
                tl(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, '');
              } catch (e) {}
        },
        ts = function (e) {
          let t = null,
            r = null;
          if (eU) e = '<remove></remove>' + e;
          else {
            let t = b(e, /^[\r\n\t ]+/);
            r = t && t[0];
          }
          'application/xhtml+xml' === e5 &&
            e1 === eQ &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              '</body></html>');
          let o = n ? n.createHTML(e) : e;
          if (e1 === eQ)
            try {
              t = new q().parseFromString(o, e5);
            } catch (e) {}
          if (!t || !t.documentElement) {
            t = ea.createDocument(e1, 'template', null);
            try {
              t.documentElement.innerHTML = e0 ? eo : o;
            } catch (e) {}
          }
          let i = t.body || t.documentElement;
          return (e &&
            r &&
            i.insertBefore(a.createTextNode(r), i.childNodes[0] || null),
          e1 === eQ)
            ? ec.call(t, eI ? 'html' : 'body')[0]
            : eI
              ? t.documentElement
              : i;
        },
        tu = function (e) {
          return ei.call(
            e.ownerDocument || e,
            e,
            B.SHOW_ELEMENT |
              B.SHOW_COMMENT |
              B.SHOW_TEXT |
              B.SHOW_PROCESSING_INSTRUCTION |
              B.SHOW_CDATA_SECTION,
            null
          );
        },
        tp = function (e) {
          return (
            e instanceof W &&
            ('string' != typeof e.nodeName ||
              'string' != typeof e.textContent ||
              'function' != typeof e.removeChild ||
              !(e.attributes instanceof G) ||
              'function' != typeof e.removeAttribute ||
              'function' != typeof e.setAttribute ||
              'string' != typeof e.namespaceURI ||
              'function' != typeof e.insertBefore ||
              'function' != typeof e.hasChildNodes)
          );
        },
        tf = function (e) {
          return 'function' == typeof j && e instanceof j;
        };
      function tm(e, t, n) {
        p(e, (e) => {
          e.call(o, t, n, te);
        });
      }
      let td = function (e) {
          let t = null;
          if ((tm(eu.beforeSanitizeElements, e, null), tp(e)))
            return (tl(e), !0);
          let n = e8(e.nodeName);
          if (
            (tm(eu.uponSanitizeElement, e, { tagName: n, allowedTags: ev }),
            (eL &&
              e.hasChildNodes() &&
              !tf(e.firstElementChild) &&
              E(/<[/\w!]/g, e.innerHTML) &&
              E(/<[/\w!]/g, e.textContent)) ||
              7 === e.nodeType ||
              (eL && 8 === e.nodeType && E(/<[/\w]/g, e.data)))
          )
            return (tl(e), !0);
          if (
            !(eN.tagCheck instanceof Function && eN.tagCheck(n)) &&
            (!ev[n] || eS[n])
          ) {
            if (
              !eS[n] &&
              tg(n) &&
              ((eC.tagNameCheck instanceof RegExp && E(eC.tagNameCheck, n)) ||
                (eC.tagNameCheck instanceof Function && eC.tagNameCheck(n)))
            )
              return !1;
            if (eB && !eY[n]) {
              let t = er(e) || e.parentNode,
                n = en(e) || e.childNodes;
              if (n && t) {
                let r = n.length;
                for (let o = r - 1; o >= 0; --o) {
                  let r = Q(n[o], !0);
                  ((r.__removalCount = (e.__removalCount || 0) + 1),
                    t.insertBefore(r, et(e)));
                }
              }
            }
            return (tl(e), !0);
          }
          return (e instanceof H && !ti(e)) ||
            (('noscript' === n || 'noembed' === n || 'noframes' === n) &&
              E(/<\/no(script|embed|frames)/i, e.innerHTML))
            ? (tl(e), !0)
            : (eD &&
                3 === e.nodeType &&
                ((t = e.textContent),
                p([ep, ef, em], (e) => {
                  t = T(t, e, ' ');
                }),
                e.textContent !== t &&
                  (d(o.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              tm(eu.afterSanitizeElements, e, null),
              !1);
        },
        th = function (e, t, n) {
          if (ej && ('id' === t || 'name' === t) && (n in a || n in tt))
            return !1;
          if (ew && !ex[t] && E(ed, t));
          else if (eO && E(eh, t));
          else if (
            eN.attributeCheck instanceof Function &&
            eN.attributeCheck(t, e)
          );
          else if (!e_[t] || ex[t]) {
            if (
              !(
                (tg(e) &&
                  ((eC.tagNameCheck instanceof RegExp &&
                    E(eC.tagNameCheck, e)) ||
                    (eC.tagNameCheck instanceof Function &&
                      eC.tagNameCheck(e))) &&
                  ((eC.attributeNameCheck instanceof RegExp &&
                    E(eC.attributeNameCheck, t)) ||
                    (eC.attributeNameCheck instanceof Function &&
                      eC.attributeNameCheck(t, e)))) ||
                ('is' === t &&
                  eC.allowCustomizedBuiltInElements &&
                  ((eC.tagNameCheck instanceof RegExp &&
                    E(eC.tagNameCheck, n)) ||
                    (eC.tagNameCheck instanceof Function &&
                      eC.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (eX[t]);
          else if (E(eT, T(n, ey, '')));
          else if (
            ('src' === t || 'xlink:href' === t || 'href' === t) &&
            'script' !== e &&
            0 === v(n, 'data:') &&
            eK[e]
          );
          else if (eR && !E(eg, T(n, ey, '')));
          else if (n) return !1;
          return !0;
        },
        tg = function (e) {
          return 'annotation-xml' !== e && b(e, eb);
        },
        ty = function (e) {
          tm(eu.beforeSanitizeAttributes, e, null);
          let { attributes: t } = e;
          if (!t || tp(e)) return;
          let r = {
              attrName: '',
              attrValue: '',
              keepAttr: !0,
              allowedAttributes: e_,
              forceKeepAttr: void 0,
            },
            a = t.length;
          for (; a--; ) {
            let { name: i, namespaceURI: l, value: c } = t[a],
              s = e8(i),
              u = 'value' === i ? c : A(c);
            if (
              ((r.attrName = s),
              (r.attrValue = u),
              (r.keepAttr = !0),
              (r.forceKeepAttr = void 0),
              tm(eu.uponSanitizeAttribute, e, r),
              (u = r.attrValue),
              eH &&
                ('id' === s || 'name' === s) &&
                (tc(i, e), (u = 'user-content-' + u)),
              (eL && E(/((--!?|])>)|<\/(style|title|textarea)/i, u)) ||
                ('attributename' === s && b(u, 'href')))
            ) {
              tc(i, e);
              continue;
            }
            if (r.forceKeepAttr) continue;
            if (!r.keepAttr || (!ek && E(/\/>/i, u))) {
              tc(i, e);
              continue;
            }
            eD &&
              p([ep, ef, em], (e) => {
                u = T(u, e, ' ');
              });
            let f = e8(e.nodeName);
            if (!th(f, s, u)) {
              tc(i, e);
              continue;
            }
            if (
              n &&
              'object' == typeof K &&
              'function' == typeof K.getAttributeType
            )
              if (l);
              else
                switch (K.getAttributeType(f, s)) {
                  case 'TrustedHTML':
                    u = n.createHTML(u);
                    break;
                  case 'TrustedScriptURL':
                    u = n.createScriptURL(u);
                }
            if (u !== c)
              try {
                (l ? e.setAttributeNS(l, i, u) : e.setAttribute(i, u),
                  tp(e) ? tl(e) : m(o.removed));
              } catch (t) {
                tc(i, e);
              }
          }
          tm(eu.afterSanitizeAttributes, e, null);
        },
        tb = function e(t) {
          let n = null,
            r = tu(t);
          for (tm(eu.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
            (tm(eu.uponSanitizeShadowNode, n, null),
              td(n),
              ty(n),
              n.content instanceof u && e(n.content));
          tm(eu.afterSanitizeShadowDOM, t, null);
        };
      return (
        (o.sanitize = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = null,
            a = null,
            i = null,
            c = null;
          if (((e0 = !e) && (e = '<!-->'), 'string' != typeof e && !tf(e)))
            if ('function' == typeof e.toString) {
              if ('string' != typeof (e = e.toString()))
                throw C('dirty is not a string, aborting');
            } else throw C('toString is not a function');
          if (!o.isSupported) return e;
          if (
            (eM || tr(t),
            (o.removed = []),
            'string' == typeof e && (eG = !1),
            eG)
          ) {
            if (e.nodeName) {
              let t = e8(e.nodeName);
              if (!ev[t] || eS[t])
                throw C(
                  'root node is forbidden and cannot be sanitized in-place'
                );
            }
          } else if (e instanceof j)
            (1 ===
              (a = (r = ts('<!---->')).ownerDocument.importNode(e, !0))
                .nodeType &&
              'BODY' === a.nodeName) ||
            'HTML' === a.nodeName
              ? (r = a)
              : r.appendChild(a);
          else {
            if (!ez && !eD && !eI && -1 === e.indexOf('<'))
              return n && eF ? n.createHTML(e) : e;
            if (!(r = ts(e))) return ez ? null : eF ? eo : '';
          }
          r && eU && tl(r.firstChild);
          let s = tu(eG ? e : r);
          for (; (i = s.nextNode()); )
            (td(i), ty(i), i.content instanceof u && tb(i.content));
          if (eG) return e;
          if (ez) {
            if (eP)
              for (c = el.call(r.ownerDocument); r.firstChild; )
                c.appendChild(r.firstChild);
            else c = r;
            return (
              (e_.shadowroot || e_.shadowrootmode) && (c = es.call(l, c, !0)),
              c
            );
          }
          let f = eI ? r.outerHTML : r.innerHTML;
          return (
            eI &&
              ev['!doctype'] &&
              r.ownerDocument &&
              r.ownerDocument.doctype &&
              r.ownerDocument.doctype.name &&
              E($, r.ownerDocument.doctype.name) &&
              (f = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + f),
            eD &&
              p([ep, ef, em], (e) => {
                f = T(f, e, ' ');
              }),
            n && eF ? n.createHTML(f) : f
          );
        }),
        (o.setConfig = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (tr(e), (eM = !0));
        }),
        (o.clearConfig = function () {
          ((te = null), (eM = !1));
        }),
        (o.isValidAttribute = function (e, t, n) {
          return (te || tr({}), th(e8(e), e8(t), n));
        }),
        (o.addHook = function (e, t) {
          'function' == typeof t && d(eu[e], t);
        }),
        (o.removeHook = function (e, t) {
          if (void 0 !== t) {
            let n = f(eu[e], t);
            return -1 === n ? void 0 : h(eu[e], n, 1)[0];
          }
          return m(eu[e]);
        }),
        (o.removeHooks = function (e) {
          eu[e] = [];
        }),
        (o.removeAllHooks = function () {
          eu = J();
        }),
        o
      );
    })();
    e.s(['default', () => Q]);
  },
]);
