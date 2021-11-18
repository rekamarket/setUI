'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [704],
  {
    3594: function (e, t, r) {
      r.d(t, {
        E: function () {
          return D
        },
      })
      var n = r(2809),
        o = r(219),
        c = r(4184),
        a = r.n(c),
        i = r(1264),
        s = {},
        p = r(5675),
        l = r(6034),
        u = r(1206)
      l.xA('src/image/Image/ProtoSet/Component/styles.css.ts', 'setUI')
      var b = (0, u.oB)({ display: 'block' }, 'ClassName')
      l._K()
      var d = r(5893),
        f = ['className', 'src']
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var g = function (e) {
          return e.src
        },
        y = function (e) {
          var t = e.className,
            r = e.src,
            c = (0, o.Z)(e, f)
          return (0, d.jsx)(
            p.default,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? O(Object(r), !0).forEach(function (t) {
                      ;(0, n.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : O(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      )
                    })
              }
              return e
            })({ src: r, className: a()([t, b]), loader: g }, c)
          )
        }
      l.xA('src/image/Image/Set/styles.css.ts', 'setUI')
      var m = (0, u.oB)({}, 'ClassName')
      l._K()
      var P = ['className']
      function h(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var v = 'Image',
        w = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, P)
          return y(
            j(
              j({}, i.R.mergePropsWithWarning(s, r, v)),
              {},
              { className: a()(m, t) }
            )
          )
        }
      w.displayName = v
      var x = w,
        D =
          ('<'.concat(
            v,
            ' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg" />'
          ),
          function (e) {
            return x(e)
          })
    },
    9739: function (e, t, r) {
      r.d(t, {
        Y9: function () {
          return lo
        },
        RQ: function () {
          return cr
        },
        QI: function () {
          return Mt
        },
      })
      var n = r(2809),
        o = r(219),
        c = r(4184),
        a = r.n(c),
        i = r(1264),
        s = {
          color: 'black',
          weight: 'bold',
          type: 'monospace',
          size: 'xxlarge',
          style: 'normal',
          background: 'transparent',
          borderColor: 'transparent',
          borderRadius: '0',
          borderWidth: 'none',
          padding: 'none',
        },
        p = r(7294),
        l = r(7104),
        u = r(7613),
        b = r(6034),
        d = r(1206),
        f = r(9387)
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      b.xA('src/layout/Box/ProtoSet/Component/styles.css.ts', 'setUI')
      var g = (0, d.oB)(
        (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? O(Object(r), !0).forEach(function (t) {
                  ;(0, n.Z)(e, t, r[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  )
                })
          }
          return e
        })({}, f.k5.LAYOUT),
        'ClassName'
      )
      b._K()
      var y = { div: 'div', section: 'section' },
        m = ['as', 'className', 'aspectRatio', 'zIndex', 'children'],
        P = new u.DK({ useBorder: !0, usePadding: !0 }),
        h = function (e) {
          var t = e.as,
            r = e.className,
            n = e.aspectRatio,
            c = e.zIndex,
            i = e.children,
            s = (0, o.Z)(e, m)
          return (0, p.createElement)(
            y[t],
            {
              className: a()([
                r,
                g,
                l.oM[n] || l.oM.default,
                l.KN[c] || l.KN.default,
                P.set(s).box,
              ]),
            },
            i
          )
        }
      b.xA('src/layout/Box/Set/styles.css.ts', 'setUI')
      var j = (0, d.oB)({}, 'ClassName')
      b._K()
      var v = ['className']
      function w(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var D = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, v)
        return h(
          x(
            x({}, i.R.mergePropsWithWarning(s, r)),
            {},
            { className: a()(j, t) }
          )
        )
      }
      D.displayName = 'Box'
      function K(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Container/css/direction/styles.css.ts', 'setUI')
      i.b.apply(void 0, ['left', 'center', 'right'])
      var k = (0, d.DA)(
          {
            left: { marginRight: 'auto' },
            center: { marginRight: 'auto', marginLeft: 'auto' },
            right: { marginLeft: 'auto' },
          },
          function (e) {
            return e
          },
          'Styles'
        ),
        T = S(S({}, k), {}, { default: k.left })
      function E(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b._K(), b.xA('src/layout/Container/css/maxWidth/styles.css.ts', 'setUI')
      i.b.apply(void 0, ['small', 'medium', 'large'])
      var A = (0, d.DA)(
          { small: 480, medium: 560, large: 1200 },
          function (e) {
            return { width: e }
          },
          'Styles'
        ),
        C = N(N({}, A), {}, { default: A.medium })
      b._K()
      var Z = { div: 'div', section: 'section' }
      function I(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Container/Component/styles.css.ts', 'setUI')
      var _ = (0, d.oB)(
        U(U({}, f.k5.LAYOUT), {}, { boxSizing: 'content-box' }),
        'ClassName'
      )
      b._K()
      var B = ['as', 'size', 'direction', 'aspectRatio', 'zIndex', 'children'],
        L = new u.DK(),
        z = function (e) {
          var t = e.as,
            r = e.size,
            n = e.direction,
            c = e.aspectRatio,
            i = e.zIndex,
            s = e.children,
            u = (0, o.Z)(e, B)
          return (0, p.createElement)(
            Z[t] || Z.div,
            {
              className: a()([
                _,
                C[r] || C.default,
                T[n] || T.default,
                l.oM[c] || l.oM.default,
                L.set(u).box,
                l.KN[i] || l.KN.default,
              ]),
            },
            s
          )
        }
      function R(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function W(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var M = function (e) {
        return z(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? W(Object(r), !0).forEach(function (t) {
                    ;(0, n.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : W(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({ size: 'medium' }, e)
        )
      }
      function F(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var $ = function (e) {
          return z(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? F(Object(r), !0).forEach(function (t) {
                      ;(0, n.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : F(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      )
                    })
              }
              return e
            })({ size: 'small' }, e)
          )
        },
        H = function (e) {
          return z(e)
        }
      ;(H.Large = function (e) {
        return z(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? R(Object(r), !0).forEach(function (t) {
                    ;(0, n.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : R(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({ size: 'large' }, e)
        )
      }),
        (H.Medium = M),
        (H.Small = $)
      r(1147)
      var Y = {
        color: 'black',
        fontSize: 'medium',
        fontWeight: 'regular',
        fontFamily: 'primary',
        fontStyle: 'normal',
        outline: 'none',
        textAlign: 'start',
        textDecorationColor: 'currentColor',
        textDecorationLine: 'none',
        textDecorationStyle: 'inherit',
        textDecorationThickness: 'initial',
        textTransform: 'none',
        background: 'transparent',
        borderColor: 'transparent',
        borderRadius: '0',
        borderWidth: 'none',
        paddingX: 'medium',
        paddingY: 'large',
        charsPerLine: 'medium',
      }
      function G(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : G(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Frame/ProtoSet/css/charsPerLine/styles.css.ts', 'setUI')
      i.b.apply(void 0, ['small', 'medium', 'large'])
      var Q = { small: 24, medium: 48, large: 64 },
        J = (0, d.DA)(
          Q,
          function (e) {
            return { '--length': ''.concat(e, 'ch') }
          },
          'Styles'
        ),
        q = X(X({}, J), {}, { default: J.medium })
      b._K()
      b.xA('src/layout/Frame/ProtoSet/Component/styles.css.ts', 'setUI')
      var V = (0, d.oB)(
        {
          display: 'grid',
          gridTemplateColumns: '1fr min(var(--length, '.concat(
            Q.large,
            'ch), 100%) 1fr'
          ),
        },
        'ClassName'
      )
      ;(0, d.KP)(''.concat(V, ' > *'), { gridColumn: 2 }), b._K()
      var ee = { div: 'div', section: 'section' },
        te = ['as', 'className', 'charsPerLine', 'children'],
        re = new u.DK({ useBorder: !0, usePadding: !0 }),
        ne = new u.AB(),
        oe = function (e) {
          var t = e.as,
            r = e.className,
            n = e.charsPerLine,
            c = e.children,
            i = (0, o.Z)(e, te)
          return (0, p.createElement)(
            ee[t],
            { className: a()([r, V, q[n], re.set(i).box, ne.set(i).box]) },
            c
          )
        }
      b.xA('src/layout/Frame/Set/styles.css.ts', 'setUI')
      var ce = (0, d.oB)({}, 'ClassName')
      b._K()
      var ae = r(3794),
        ie = { marker: 'bullet', markerSize: 'large', markerGap: 'large' },
        se = r(8216),
        pe = r(5997)
      function le(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? le(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : le(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/direction/styles.css.ts',
        'setUI'
      )
      var be = ['row', 'rowReverse', 'column', 'columnReverse'],
        de =
          (i.b.apply(void 0, be),
          (0, d.DA)(
            {
              row: {
                flexDirection: 'row',
                top: '-100%',
                bottom: '-100%',
                left: 'calc((var(--gap) + var(--divider-weight))/-2)',
                right: 'unset',
                dividerWidth: 'var(--divider-weight)',
                dividerHeight: 'unset',
              },
              rowReverse: {
                flexDirection: 'row',
                top: '-100%',
                bottom: '-100%',
                left: 'calc((var(--gap) + var(--divider-weight))/-2)',
                right: 'unset',
                dividerWidth: 'var(--divider-weight)',
                dividerHeight: 'unset',
              },
              column: {
                flexDirection: 'column',
                top: 'calc(var(--gap)/-2)',
                bottom: 'unset',
                left: '-100%',
                right: '-100%',
                dividerWidth: '300%',
                dividerHeight: 'var(--divider-weight)',
              },
              columnReverse: {
                flexDirection: 'column',
                top: 'calc(var(--gap)/-2)',
                bottom: 'unset',
                left: '-100%',
                right: '-100%',
                dividerWidth: '300%',
                dividerHeight: 'var(--divider-weight)',
              },
            },
            function (e) {
              return {
                flexDirection: e.flexDirection,
                '--divider-top': e.top,
                '--divider-bottom': e.bottom,
                '--divider-left': e.left,
                '--divider-width': e.dividerWidth,
                '--divider-height': e.dividerHeight,
              }
            },
            'Styles'
          )),
        fe = ue(ue({}, de), {}, { default: de.row })
      function Oe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Oe(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Oe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b._K(),
        b.xA(
          'src/layout/List/ProtoSet/Component/layers/List/css/dividerColor/styles.css.ts',
          'setUI'
        )
      var ye = ['primary', 'secondary', 'black', 'white'],
        me =
          (i.b.apply(void 0, ye),
          (0, d.DA)(
            {
              primary: { hue: 206, saturation: '100%', lightness: '41.6%' },
              secondary: {
                hue: 207.7,
                saturation: '68.9%',
                lightness: '50.8%',
              },
              white: { hue: 0, saturation: '0%', lightness: '100%' },
              black: { hue: 0, saturation: '0%', lightness: '0%' },
            },
            function (e) {
              return {
                '--divider-color': 'hsl('
                  .concat(e.hue, ' ')
                  .concat(e.saturation, ' ')
                  .concat(e.lightness, ')'),
              }
            },
            'Styles'
          )),
        Pe = ge(ge({}, me), {}, { default: me.primary, initial: me.inherit })
      b._K()
      function he(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/dividerOffset/styles.css.ts',
        'setUI'
      )
      var ve = [
          'none',
          'xxxsmall',
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
          'xxxlarge',
        ],
        we =
          (i.b.apply(void 0, ve),
          (0, d.DA)(
            {
              none: 0,
              xxxsmall: 2,
              xxsmall: 4,
              xsmall: 6,
              small: 8,
              medium: 12,
              large: 16,
              xlarge: 20,
              xxlarge: 24,
              xxxlarge: 48,
            },
            function (e) {
              return { '--divider-offset': e }
            },
            'Styles'
          )),
        xe = je(je({}, we), {}, { default: we.none })
      b._K()
      function De(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : De(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/dividerWeight/styles.css.ts',
        'setUI'
      )
      var Se = ['none', 'thin', 'light', 'medium', 'bold'],
        ke =
          (i.b.apply(void 0, Se),
          (0, d.DA)(
            { none: 0, thin: 1, light: 2, medium: 3, bold: 4 },
            function (e) {
              return { '--divider-weight': e }
            },
            'Styles'
          )),
        Te = Ke(Ke({}, ke), {}, { default: ke.none })
      b._K()
      function Ee(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ee(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ee(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/marker/styles.css.ts',
        'setUI'
      )
      var Ae = ['none', 'bullet', 'circle'],
        Ce =
          (i.b.apply(void 0, Ae),
          (0, d.DA)(
            { none: 'none', bullet: '"\u2022"', circle: '"\u25cf"' },
            function (e) {
              return { '--marker': e, listStyleType: e }
            },
            'Styles'
          )),
        Ze = Ne(Ne({}, Ce), {}, { default: Ce.none })
      b._K()
      function Ie(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ie(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/markerGap/styles.css.ts',
        'setUI'
      )
      var _e = [
          'none',
          'xxxsmall',
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
          'xxxlarge',
        ],
        Be =
          (i.b.apply(void 0, _e),
          (0, d.DA)(
            {
              none: 0,
              xxxsmall: 2,
              xxsmall: 4,
              xsmall: 6,
              small: 8,
              medium: 12,
              large: 16,
              xlarge: 20,
              xxlarge: 24,
              xxxlarge: 48,
            },
            function (e) {
              return { '--marker-gap': e }
            },
            'Styles'
          )),
        Le = Ue(Ue({}, Be), {}, { default: Be.none })
      b._K()
      function ze(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ze(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ze(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/markerPosition/styles.css.ts',
        'setUI'
      )
      var We = ['inside', 'outside'],
        Me =
          (i.b.apply(void 0, We),
          (0, d.DA)(
            { inside: 'inside', outside: 'outside' },
            function (e) {
              return { listStylePosition: e }
            },
            'Styles'
          )),
        Fe = Re(Re({}, Me), {}, { default: Me.inside, initial: Me.outside })
      b._K()
      function $e(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $e(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $e(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/List/ProtoSet/Component/layers/List/css/markerSize/styles.css.ts',
        'setUI'
      )
      var Ye = [
          'none',
          'xxxsmall',
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
          'xxxlarge',
        ],
        Ge =
          (i.b.apply(void 0, Ye),
          (0, d.DA)(
            {
              none: 0,
              xxxsmall: 4,
              xxsmall: 8,
              xsmall: 12,
              small: 16,
              medium: 24,
              large: 36,
              xlarge: 48,
              xxlarge: 96,
              xxxlarge: 128,
            },
            function (e) {
              return { '--marker-size': e }
            },
            'Styles'
          )),
        Xe = He(He({}, Ge), {}, { default: Ge.none })
      b._K()
      var Qe = (function () {
          function e(t) {
            var r = this
            ;(0, se.Z)(this, e),
              (0, n.Z)(this, 'style', void 0),
              (0, n.Z)(this, 'direction', void 0),
              (0, n.Z)(this, 'dividerColor', void 0),
              (0, n.Z)(this, 'dividerOffset', void 0),
              (0, n.Z)(this, 'dividerWeight', void 0),
              (0, n.Z)(this, 'marker', void 0),
              (0, n.Z)(this, 'markerGap', void 0),
              (0, n.Z)(this, 'markerPosition', void 0),
              (0, n.Z)(this, 'markerSize', void 0),
              (this.style = function () {
                return [
                  fe[r.direction],
                  Pe[r.dividerColor],
                  xe[r.dividerOffset],
                  Te[r.dividerWeight],
                  Ze[r.marker],
                  Le[r.markerGap],
                  Fe[r.markerPosition],
                  Xe[r.markerSize],
                ]
                  .filter(Boolean)
                  .join(' ')
              })
          }
          return (
            (0, pe.Z)(e, [
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.direction = (function (e) {
                      switch (!0) {
                        case 'direction' in e:
                          return e.direction
                        default:
                          return
                      }
                    })(e)),
                    (this.dividerColor = (function (e) {
                      switch (!0) {
                        case 'dividerColor' in e:
                          return e.dividerColor
                        default:
                          return
                      }
                    })(e)),
                    (this.dividerOffset = (function (e) {
                      switch (!0) {
                        case 'dividerOffset' in e:
                          return e.dividerOffset
                        default:
                          return
                      }
                    })(e)),
                    (this.dividerWeight = (function (e) {
                      switch (!0) {
                        case 'dividerWeight' in e:
                          return e.dividerWeight
                        default:
                          return
                      }
                    })(e)),
                    (this.marker = (function (e) {
                      switch (!0) {
                        case 'marker' in e:
                          return e.marker
                        default:
                          return
                      }
                    })(e)),
                    (this.markerGap = (function (e) {
                      switch (!0) {
                        case 'markerGap' in e:
                          return e.markerGap
                        default:
                          return
                      }
                    })(e)),
                    (this.markerPosition = (function (e) {
                      switch (!0) {
                        case 'inside' in e:
                          return 'inside'
                        case 'outside' in e:
                          return 'outside'
                        case 'markerPosition' in e:
                          return e.markerPosition
                        default:
                          return
                      }
                    })(e)),
                    (this.markerSize = (function (e) {
                      switch (!0) {
                        case 'markerSize' in e:
                          return e.markerSize
                        default:
                          return
                      }
                    })(e)),
                    this
                  )
                },
              },
              {
                key: 'box',
                get: function () {
                  return [this.style()].filter(Boolean).join(' ')
                },
              },
            ]),
            e
          )
        })(),
        Je = { ul: 'ul', ol: 'ol', menu: 'menu' }
      function qe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/List/ProtoSet/Component/styles.css.ts', 'setUI')
      var et = (0, d.oB)(
        Ve(Ve({}, f.k5.LAYOUT), {}, { display: 'grid', position: 'relative' }),
        'ClassName'
      )
      ;(0, d.KP)(''.concat(et, ' li'), {
        display: 'flex',
        alignItems: 'flex-start',
        listStyleType: 'none',
      }),
        (0, d.KP)(''.concat(et, ' li::before'), {
          content: 'var(--marker)',
          fontSize: 'var(--marker-size)',
          paddingRight: 'var(--marker-gap)',
          paddingLeft: 'var(--marker-gap)',
          marginTop: 8,
        }),
        (0, d.KP)(''.concat(et, ' li::marker'), { display: 'none' }),
        b._K()
      var tt = r(5893),
        rt = ['as', 'value', 'className', 'zIndex', 'width', 'children']
      function nt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : nt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ct = new u.DK({
          usePadding: !0,
          useMargin: !0,
          useBorder: !0,
          useBackground: !0,
        }),
        at = new u.gh(),
        it = new Qe(),
        st = function (e) {
          var t = e.as,
            r = e.value,
            n = e.className,
            c = e.zIndex,
            i = e.width,
            s = e.children,
            u = (0, o.Z)(e, rt)
          return (0, p.createElement)(
            Je[t],
            {
              className: a()([
                n,
                et,
                ct.set(u).box,
                at.set(u).box,
                it.set(u).box,
                l.KN[c] || l.KN.default,
                l.Lu[i] || l.Lu.default,
              ]),
            },
            p.Children.map(s, function (e, t) {
              return (0,
              tt.jsx)('li', ot(ot({}, 0 === t && r ? { value: r } : {}), {}, { children: e }))
            })
          )
        },
        pt = r(6260),
        lt = ['fontSize']
      function ut(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var bt = function (e) {
        var t = e.fontSize,
          r = (0, o.Z)(e, lt)
        return [(0, tt.jsx)(pt.hf.Provider, { value: t })].reduce(
          function (e, t) {
            return p.cloneElement(t, {}, e)
          },
          (0, tt.jsx)(
            st,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? ut(Object(r), !0).forEach(function (t) {
                      ;(0, n.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : ut(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      )
                    })
              }
              return e
            })({ fontSize: t }, r)
          )
        )
      }
      b.xA('src/layout/List/Set/styles.css.ts', 'setUI')
      var dt = (0, d.oB)({}, 'ClassName')
      b._K()
      var ft = ['className']
      function Ot(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ot(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ot(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var yt = 'List',
        mt = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, ft)
          return bt(
            gt(
              gt({}, i.R.mergePropsWithWarning(ie, r, yt)),
              {},
              { className: a()(dt, t) }
            )
          )
        }
      mt.displayName = yt
      var Pt = mt,
        ht = { padding: 'none' }
      b.xA('src/layout/List/Subsets/Menu/styles.css.ts', 'setUI')
      var jt = (0, d.oB)({}, 'ClassName')
      b._K()
      var vt = ['className']
      function wt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function xt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : wt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Dt = 'List.Menu',
        Kt = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, vt)
          return bt(
            xt(
              xt({}, i.R.mergePropsWithWarning(ht, r, Dt)),
              {},
              { as: 'menu', className: a()(jt, t) }
            )
          )
        }
      Kt.displayName = Dt
      var St = Kt,
        kt = { padding: 'none' }
      b.xA('src/layout/List/Subsets/Ordered/styles.css.ts', 'setUI')
      var Tt = (0, d.oB)({}, 'ClassName')
      b._K()
      var Et = ['className']
      function Nt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function At(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Nt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ct = 'List.Ordered',
        Zt = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Et)
          return bt(
            At(
              At({}, i.R.mergePropsWithWarning(kt, r, Ct)),
              {},
              { as: 'ol', className: a()(Tt, t) }
            )
          )
        }
      Zt.displayName = Ct
      var It = Zt,
        Ut = {
          marker: 'bullet',
          markerSize: 'medium',
          markerGap: 'medium',
          paddingX: 'none',
          paddingY: 'medium',
          gap: 'xxsmall',
          fontSize: 'medium',
        }
      b.xA('src/layout/List/Subsets/Unordered/styles.css.ts', 'setUI')
      var _t = (0, d.oB)({}, 'ClassName')
      b._K()
      var Bt = ['className']
      function Lt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Lt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Lt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Rt = 'UnorderedList',
        Wt = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Bt)
          return bt(
            zt(
              zt({}, i.R.mergePropsWithWarning(Ut, r, Rt)),
              {},
              { as: 'ul', className: a()(_t, t) }
            )
          )
        }
      Wt.displayName = Rt
      var Mt = Wt,
        Ft = r(3425),
        $t =
          ((0, Ft.ZP)(
            (0, tt.jsxs)(Mt, {
              children: [
                (0, tt.jsxs)(ae.wT, {
                  children: [
                    '\u041f\u0443\u043d\u043a\u0442 1 ',
                    (0, tt.jsx)(ae.lm, {
                      children:
                        '\u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c',
                    }),
                  ],
                }),
                (0, tt.jsx)(ae.wT, {
                  children: '\u041f\u0443\u043d\u043a\u0442 2',
                }),
              ],
            })
          ),
          function (e) {
            return Pt(e)
          })
      ;($t.Menu = St), ($t.Ordered = It), ($t.Unordered = Mt)
      b.xA('src/axioms/Article/styles.css.ts', 'setUI')
      var Ht = (0, d.oB)({}, 'className')
      ;(0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(ae.h1), {
        paddingTop: 0,
      }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h1, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h2, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h3, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h4, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h5, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.h6, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.An), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(ae.$U), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.An, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.An), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(ae.$U), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(ae.$U, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.An), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(ae.$U), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(dt, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.An), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(ae.$U), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(Tt, ' + ').concat(_t), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.h1), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.h2), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.h3), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.h4), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.h5), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.h6), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.An), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(ae.$U), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(dt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(Tt), {
          paddingTop: 0,
        }),
        (0, d.KP)(''.concat(Ht, ' ').concat(_t, ' + ').concat(_t), {
          paddingTop: 0,
        })
      var Yt = Ht
      b._K()
      var Gt = ['className', 'fontSize']
      function Xt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Xt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Jt = 'Frame',
        qt = function (e) {
          var t = e.className,
            r = e.fontSize,
            n = (0, o.Z)(e, Gt)
          return [(0, tt.jsx)(pt.hf.Provider, { value: r })].reduce(function (
            e,
            t
          ) {
            return (0, p.cloneElement)(t, {}, e)
          },
          oe(Qt(Qt({ as: 'div' }, i.R.mergePropsWithWarning(Y, n)), {}, { fontSize: r || Y.fontSize, className: a()(ce, t, Yt) })))
        }
      qt.displayName = Jt
      var Vt = qt
      b.xA('src/layout/Frame/Supersets/FullBleed/styles.css.ts', 'setUI')
      var er = (0, d.oB)({ gridColumn: '1 / 4' }, 'ClassName')
      b._K()
      var tr = 'Frame.FullBleed',
        rr = function (e) {
          var t = e.className,
            r = e.children
          return (0, tt.jsx)('div', { className: a()([t, er]), children: r })
        }
      rr.displayName = tr
      var nr = rr,
        or =
          ('\n      <'
            .concat(
              Jt,
              ' charsPerLine="large">\n        <H1>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</H1>\n        <Paragraph>\u041c\u043d\u043e\u0433\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442</Paragraph>\n      </'
            )
            .concat(Jt, '>\n    '),
          '\n      <Frame charsPerLine="large">\n        <H1>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</H1>\n        <Paragraph>\u041c\u043d\u043e\u0433\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442</Paragraph>\n\n        <'
            .concat(
              tr,
              '>\n          <BackgroundImage image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg" />\n        </'
            )
            .concat(tr, '>\n      </Frame>\n    '),
          function (e) {
            return Vt(e)
          })
      or.FullBleed = nr
      var cr = or
      function ar(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ir(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ar(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ar(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Grid/Component/styles.css.ts', 'setUI')
      var sr = (0, d.oB)(
        ir(ir({}, f.k5.LAYOUT), {}, { display: 'grid' }),
        'ClassName'
      )
      b._K()
      var pr = ['className', 'zIndex', 'width', 'children'],
        lr = new u.DK({
          usePadding: !0,
          useMargin: !0,
          useBorder: !0,
          useBackground: !0,
        }),
        ur = new u.gh(),
        br = function (e) {
          var t = e.className,
            r = e.zIndex,
            n = e.width,
            c = e.children,
            i = (0, o.Z)(e, pr)
          return (0, tt.jsx)('div', {
            className: a()([
              t,
              sr,
              lr.set(i).box,
              ur.set(i).box,
              l.KN[r] || l.KN.default,
              l.Lu[n] || l.Lu.default,
            ]),
            children: c,
          })
        }
      function dr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Or = fr(
        fr({}, {}),
        {},
        { margin: 'none', padding: 'none', gap: 'medium' }
      )
      b.xA('src/layout/Grid/subsets/Spiral/styles.css.ts', 'setUI')
      var gr = (0, d.oB)(
        {
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)',
          alignItems: 'stretch',
        },
        'ClassName'
      )
      ;(0, d.KP)(''.concat(gr, ' > *:first-child'), {
        gridRow: '1 / 3',
        gridColumn: '1 / 2',
      }),
        b._K()
      var yr = ['className', 'children']
      function mr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? mr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var hr = function (e) {
        var t = e.className,
          r = e.children,
          n = (0, o.Z)(e, yr)
        return 3 === p.Children.count(r)
          ? br(
              Pr(Pr(Pr({}, Or), n), {}, { children: r, className: a()(gr, t) })
            )
          : (0, tt.jsx)('span', {
              children: 'Spiral component should accept only 3 nodes',
            })
      }
      hr.displayName = 'Spiral'
      var jr = function (e) {
        return br(e)
      }
      jr.Spiral = hr
      b.xA('src/layout/Placeholder/Component/styles.css.ts', 'setUI')
      ;(0, d.oB)({}, 'ClassName')
      function vr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function wr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? vr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b._K(), b.xA('src/layout/Placeholder/css/size/styles.css.ts', 'setUI')
      i.b.apply(void 0, [
        'xxxsmall',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'xxxlarge',
      ])
      var xr = (0, d.DA)(
        {
          xxxsmall: 2,
          xxsmall: 4,
          xsmall: 6,
          small: 8,
          medium: 12,
          large: 16,
          xlarge: 20,
          xxlarge: 24,
          xxxlarge: 48,
        },
        function (e) {
          return { height: e }
        },
        'Styles'
      )
      wr(wr({}, xr), {}, { default: xr.medium })
      b._K()
      function Dr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Kr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Dr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Dr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Segment/Component/css/gridArea/styles.css.ts', 'setUI')
      i.b.apply(void 0, ['start', 'interval', 'end'])
      var Sr = { start: 'start', interval: 'interval', end: 'end' },
        kr = (0, d.DA)(
          Sr,
          function (e) {
            return { gridArea: e }
          },
          'Styles'
        )
      Kr(Kr({}, kr), {}, { default: kr.interval })
      function Tr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Tr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Tr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b._K(),
        b.xA(
          'src/layout/Segment/Component/css/direction/styles.css.ts',
          'setUI'
        )
      i.b.apply(void 0, ['row', 'rowReverse', 'column', 'columnReverse'])
      var Nr = {
          row: {
            gridTemplateColumns: 'auto 1fr auto',
            gridTemplateAreas: '"'
              .concat(Sr.start, ' ')
              .concat(Sr.interval, ' ')
              .concat(Sr.end, '"'),
          },
          rowReverse: {
            gridTemplateColumns: 'auto 1fr auto',
            gridTemplateAreas: '"'
              .concat(Sr.end, ' ')
              .concat(Sr.interval, ' ')
              .concat(Sr.start, '"'),
          },
          column: {
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateAreas: '"'
              .concat(Sr.start, '" "')
              .concat(Sr.interval, '" "')
              .concat(Sr.end, '"'),
          },
          columnReverse: {
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateAreas: '"'
              .concat(Sr.end, '" "')
              .concat(Sr.interval, '" "')
              .concat(Sr.start, '"'),
          },
        },
        Ar = (0, d.DA)(
          Nr,
          function (e) {
            return e
          },
          'Styles'
        ),
        Cr = Er(Er({}, Ar), {}, { default: Ar.row })
      b._K()
      var Zr = { main: 'main', div: 'div', span: 'span' }
      function Ir(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ur(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ir(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ir(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Segment/Component/Segment/styles.css.ts', 'setUI')
      var _r = (0, d.oB)(
        Ur(Ur({}, f.k5.LAYOUT), {}, { display: 'grid', height: '100%' }),
        'ClassName'
      )
      b._K()
      var Br = ['as', 'direction', 'aspectRatio', 'zIndex', 'children'],
        Lr = new u.DK(),
        zr = new u.gh(),
        Rr = function (e) {
          var t = e.as,
            r = e.direction,
            n = e.aspectRatio,
            c = e.zIndex,
            i = e.children,
            s = (0, o.Z)(e, Br)
          return (0, p.createElement)(
            Zr[t] || Zr.div,
            {
              className: a()([
                _r,
                Cr[r] || Cr.default,
                l.oM[n] || l.oM.default,
                Lr.set(s).box,
                zr.set(s).box,
                l.KN[c] || l.KN.default,
              ]),
            },
            i
          )
        },
        Wr = {
          section: 'section',
          article: 'article',
          div: 'div',
          span: 'span',
        }
      function Mr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Mr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Mr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Segment/Component/Interval/styles.css.ts', 'setUI')
      var $r = (0, d.oB)(
        Fr(
          Fr({}, f.k5.LAYOUT),
          {},
          { display: 'grid', gridArea: Sr.interval, overflow: 'auto' }
        ),
        'ClassName'
      )
      b._K()
      var Hr = ['as', 'aspectRatio', 'zIndex', 'children'],
        Yr = new u.DK(),
        Gr = new u.gh(),
        Xr = function (e) {
          var t = e.as,
            r = e.aspectRatio,
            n = e.zIndex,
            c = e.children,
            i = (0, o.Z)(e, Hr)
          return (0, p.createElement)(
            Wr[t] || Wr.div,
            {
              className: a()([
                $r,
                l.oM[r] || l.oM.default,
                Yr.set(i).box,
                Gr.set(i).box,
                l.KN[n] || l.KN.default,
              ]),
            },
            c
          )
        },
        Qr = { header: 'header', div: 'div', span: 'span' }
      function Jr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function qr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Jr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Segment/Component/Start/styles.css.ts', 'setUI')
      var Vr = (0, d.oB)(
        qr(qr({}, f.k5.LAYOUT), {}, { display: 'grid', gridArea: Sr.start }),
        'ClassName'
      )
      b._K()
      var en = ['as', 'aspectRatio', 'zIndex', 'children'],
        tn = new u.DK(),
        rn = new u.gh(),
        nn = function (e) {
          var t = e.as,
            r = e.aspectRatio,
            n = e.zIndex,
            c = e.children,
            i = (0, o.Z)(e, en)
          return (0, p.createElement)(
            Qr[t] || Qr.div,
            {
              className: a()([
                Vr,
                l.oM[r] || l.oM.default,
                tn.set(i).box,
                rn.set(i).box,
                l.KN[n] || l.KN.default,
              ]),
            },
            c
          )
        },
        on = { footer: 'footer', div: 'div', span: 'span' }
      function cn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? cn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : cn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Segment/Component/End/styles.css.ts', 'setUI')
      var sn = (0, d.oB)(
        an(an({}, f.k5.LAYOUT), {}, { display: 'grid', gridArea: Sr.end }),
        'ClassName'
      )
      b._K()
      var pn = ['as', 'aspectRatio', 'zIndex', 'children'],
        ln = new u.DK(),
        un = new u.gh(),
        bn = function (e) {
          var t = e.as,
            r = e.aspectRatio,
            n = e.zIndex,
            c = e.children,
            i = (0, o.Z)(e, pn)
          return (0, p.createElement)(
            on[t] || on.div,
            {
              className: a()([
                sn,
                l.oM[r] || l.oM.default,
                ln.set(i).box,
                un.set(i).box,
                l.KN[n] || l.KN.default,
              ]),
            },
            c
          )
        }
      function dn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var fn = function (e) {
        return Rr(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? dn(Object(r), !0).forEach(function (t) {
                    ;(0, n.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : dn(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({ direction: 'column' }, e)
        )
      }
      function On(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var gn = function (e) {
          return Rr(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? On(Object(r), !0).forEach(function (t) {
                      ;(0, n.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : On(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      )
                    })
              }
              return e
            })({ direction: 'row' }, e)
          )
        },
        yn = function (e) {
          return Rr(e)
        }
      ;(yn.Interval = Xr),
        (yn.Start = nn),
        (yn.End = bn),
        (yn.Column = fn),
        (yn.Row = gn)
      function mn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? mn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Stack/Component/styles.css.ts', 'setUI')
      ;(0, d.oB)(Pn(Pn({}, f.k5.LAYOUT), {}, { display: 'grid' }), 'ClassName')
      b._K()
      new u.DK(), new u.gh()
      var hn = r(2826)
      function jn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : jn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA('src/layout/Tabs/Component/css/theme/styles.css.ts', 'setUI')
      i.b.apply(void 0, [
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'info',
      ])
      var wn = (0, d.DA)(
          {
            primary: {
              hue: 206,
              saturation: '100%',
              lightness: '41.6%',
              alpha: 1,
            },
            secondary: {
              hue: 207.7,
              saturation: '68.9%',
              lightness: '50.8%',
              alpha: 1,
            },
            error: { hue: 0, saturation: '100%', lightness: '32.9%', alpha: 1 },
            success: {
              hue: 120,
              saturation: '77.1%',
              lightness: '27.5%',
              alpha: 1,
            },
            warning: {
              hue: 16.2,
              saturation: '99.1%',
              lightness: '42.5%',
              alpha: 1,
            },
            info: { hue: 30, saturation: '1.7%', lightness: '46.7%', alpha: 1 },
          },
          function (e) {
            return {
              '--h': String(e.hue),
              '--s': String(e.saturation),
              '--l': String(e.lightness),
              '--a': String(e.alpha),
              '--color': 'hsl(var(--h) var(--s) var(--l) / var(--a))',
              opacity: 1,
            }
          },
          'Styles'
        ),
        xn = vn(vn({}, wn), {}, { default: wn.primary })
      b._K(), b.xA('src/layout/Tabs/Component/Tabs/styles.css.ts', 'setUI')
      var Dn = (0, d.oB)({ border: '1px solid #333' }, 'ClassName')
      ;(0, d.KP)('.rc-tabs-dropdown', {
        position: 'absolute',
        background: '#fefefe',
        border: '1px solid black',
        maxHeight: 200,
        overflow: 'auto',
      }),
        (0, d.KP)('.rc-tabs-dropdown-hidden', { display: 'none' }),
        (0, d.KP)('.rc-tabs-dropdown-menu', {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }),
        (0, d.KP)('.rc-tabs-dropdown-menu-item', { padding: '4px 8px' }),
        (0, d.KP)('.rc-tabs-dropdown-menu-item-selected', {
          background: 'red',
        }),
        (0, d.KP)('.rc-tabs-dropdown-menu-item-disabled', {
          opacity: 0.3,
          cursor: 'not-allowed',
        }),
        (0, d.KP)('.rc-tabs-content', { display: 'flex', width: '100%' }),
        (0, d.KP)('.rc-tabs-content-holder', { flex: 'auto' }),
        (0, d.KP)('.rc-tabs-content-animated', { transition: 'margin 0.3s' }),
        (0, d.KP)('.rc-tabs-tabpane', { width: '100%', flex: 'none' }),
        (0, d.KP)('\n.rc-tabs-top,\n.rc-tabs-bottom\n', {
          flexDirection: 'column',
        }),
        (0, d.KP)('.rc-tabs-top .rc-tabs-ink-bar', { height: 3 }),
        (0, d.KP)('.rc-tabs-bottom .rc-tabs-ink-bar', { height: 3 }),
        (0, d.KP)('.rc-tabs-top .rc-tabs-ink-bar', { bottom: 0 }),
        (0, d.KP)('.rc-tabs-bottom .rc-tabs-nav', { order: 1 }),
        (0, d.KP)('.rc-tabs-bottom .rc-tabs-content', { order: 0 }),
        (0, d.KP)('.rc-tabs-bottom .rc-tabs-ink-bar', { top: 0 }),
        (0, d.KP)(
          '\n.rc-tabs-left.rc-tabs-editable .rc-tabs-tab,\n.rc-tabs-right.rc-tabs-editable .rc-tabs-tab\n',
          { paddingRight: 32 }
        ),
        (0, d.KP)(
          '\n.rc-tabs-left .rc-tabs-nav-wrap,\n.rc-tabs-right .rc-tabs-nav-wrap\n',
          { flexDirection: 'column' }
        ),
        (0, d.KP)(
          '\n.rc-tabs-left .rc-tabs-ink-bar,\n.rc-tabs-right .rc-tabs-ink-bar\n',
          { width: 3 }
        ),
        (0, d.KP)(
          '\n.rc-tabs-left .rc-tabs-nav,\n.rc-tabs-right .rc-tabs-nav\n',
          { flexDirection: 'column', minWidth: 50 }
        ),
        (0, d.KP)(
          '\n.rc-tabs-left .rc-tabs-nav-list,\n.rc-tabs-right .rc-tabs-nav-list,\n.rc-tabs-left .rc-tabs-nav-operations,\n.rc-tabs-right .rc-tabs-nav-operations\n',
          { flex: '1 0 auto', flexDirection: 'column' }
        ),
        (0, d.KP)('.rc-tabs-left .rc-tabs-ink-bar', { right: 0 }),
        (0, d.KP)('.rc-tabs-right .rc-tabs-nav', { order: 1 }),
        (0, d.KP)('.rc-tabs-right .rc-tabs-content', { order: 0 }),
        (0, d.KP)('.rc-tabs-right .rc-tabs-ink-bar', { left: 0 }),
        (0, d.KP)('.rc-tabs-rtl', { direction: 'rtl' }),
        (0, d.KP)('.rc-tabs-dropdown-rtl', { direction: 'rtl' }),
        (0, d.KP)('.rc-tabs', { display: 'grid', overflow: 'hidden' }),
        (0, d.KP)('.rc-tabs-nav', {
          display: 'flex',
          flex: 'none',
          position: 'relative',
          borderBottom: '1px solid var(--color)',
        }),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure,\n.rc-tabs-nav-wrap\n',
          (0, n.Z)(
            {
              transform: 'translate(0)',
              position: 'relative',
              display: 'inline-block',
              flex: 'auto',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            },
            'display',
            'flex'
          )
        ),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure-ping-left::before,\n.rc-tabs-nav-wrap-ping-left::before,\n.rc-tabs-nav-measure-ping-right::after,\n.rc-tabs-nav-wrap-ping-right::after\n',
          { content: '""', position: 'absolute', top: 0, bottom: 0 }
        ),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure-ping-left::before,\n.rc-tabs-nav-wrap-ping-left::before\n',
          { left: 0, borderLeft: '1px solid red' }
        ),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure-ping-right::after,\n.rc-tabs-nav-wrap-ping-right::after\n',
          { right: 0, borderRight: '1px solid red' }
        ),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure-ping-top::before,\n.rc-tabs-nav-wrap-ping-top::before,\n.rc-tabs-nav-measure-ping-bottom::after,\n.rc-tabs-nav-wrap-ping-bottom::after\n',
          { content: '""', position: 'absolute', left: 0, right: 0 }
        ),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure-ping-top::before,\n.rc-tabs-nav-wrap-ping-top::before\n',
          { top: 0, borderTop: '1px solid red' }
        ),
        (0, d.KP)(
          '\n.rc-tabs-nav-measure-ping-bottom::after,\n.rc-tabs-nav-wrap-ping-bottom::after\n',
          { bottom: 0, borderTop: '1px solid red' }
        ),
        (0, d.KP)('.rc-tabs-nav-list', {
          display: 'flex',
          position: 'relative',
          transition: 'transform 0.3s',
        }),
        (0, d.KP)('.rc-tabs-nav-operations', { display: 'flex' }),
        (0, d.KP)('.rc-tabs-nav-operations-hidden', {
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
        }),
        (0, d.KP)('.rc-tabs-nav-more', {
          border: '1px solid blue',
          background: 'rgba(255, 0, 0, 0.1)',
        }),
        (0, d.KP)('.rc-tabs-nav-add', {
          border: '1px solid green',
          background: 'rgba(0, 255, 0, 0.1)',
        }),
        (0, d.KP)('.rc-tabs-tab', {
          border: 0,
          margin: 0,
          display: 'flex',
          outline: 'none',
          cursor: 'pointer',
          position: 'relative',
          alignItems: 'center',
        }),
        (0, d.KP)('\n.rc-tabs-tab-btn,\n.rc-tabs-tab-remove\n', {
          border: 0,
          background: 'transparent',
        }),
        (0, d.KP)('.rc-tabs-tab-btn', {}),
        (0, d.KP)('.rc-tabs-tab-remove:hover', { color: 'red' }),
        (0, d.KP)('.rc-tabs-tab-active > .rc-tabs-tab-btn > *', {
          fontWeight: f.m6.bold,
        }),
        (0, d.KP)('.rc-tabs-ink-bar', {
          position: 'absolute',
          background: 'var(--color)',
          pointerEvents: 'none',
        }),
        (0, d.KP)('.rc-tabs-ink-bar-animated', { transition: 'all 0.3s' }),
        (0, d.KP)('.rc-tabs-extra-content', { flex: 'none' }),
        b._K()
      var Kn = ['theme']
      function Sn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var kn = new u.DK(),
        Tn = function (e) {
          var t = e.theme,
            r = (0, o.Z)(e, Kn)
          return (0, tt.jsx)(
            hn.Z,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Sn(Object(r), !0).forEach(function (t) {
                      ;(0, n.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : Sn(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      )
                    })
              }
              return e
            })(
              {
                className: a()([
                  Dn,
                  xn[t] || xn.default,
                  kn.set(r).padding,
                  kn.set(r).margin,
                ]),
              },
              r
            )
          )
        }
      b.xA('src/layout/Tabs/Component/Panel/styles.css.ts', 'setUI')
      var En = (0, d.oB)({}, 'ClassName')
      function Nn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      b._K()
      var An = new u.DK(),
        Cn = function (e) {
          return Tn(e)
        }
      Cn.Panel = function (e) {
        return (0, tt.jsx)(
          hn.J,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? Nn(Object(r), !0).forEach(function (t) {
                    ;(0, n.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Nn(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({ className: a()([En, An.set(e).padding, An.set(e).margin]) }, e)
        )
      }
      var Zn = {
          as: 'div',
          backgroundSize: 'cover',
          backgroundRepeat: 'noRepeat',
        },
        In = { main: 'main', section: 'section', div: 'div' }
      function Un(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Un(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Un(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b.xA(
        'src/layout/BackgroundImage/ProtoSet/Component/styles.css.ts',
        'setUI'
      )
      var Bn = (0, d.oB)(
        _n(
          _n({}, f.k5.LAYOUT),
          {},
          { display: 'flex', height: '100vh', overflow: 'hidden' }
        ),
        'ClassName'
      )
      b._K()
      var Ln = ['as', 'className', 'image', 'children'],
        zn = new u.DK({ useMargin: !0, usePadding: !0, useBackground: !0 }),
        Rn = new u.gh(),
        Wn = function (e) {
          var t = e.as,
            r = e.className,
            n = e.image,
            c = e.children,
            i = (0, o.Z)(e, Ln),
            s = (0, p.useMemo)(
              function () {
                return { backgroundImage: 'url('.concat(n, ')') }
              },
              [n]
            )
          return (0, p.createElement)(
            In[t],
            { className: a()([r, Bn, zn.set(i).box, Rn.set(i).box]), style: s },
            c
          )
        }
      b.xA('src/layout/BackgroundImage/Set/styles.css.ts', 'setUI')
      var Mn = (0, d.oB)({}, 'ClassName')
      b._K()
      var Fn = ['className']
      function $n(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $n(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $n(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Yn = 'BackgroundImage',
        Gn = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Fn)
          return Wn(
            Hn(
              Hn({}, i.R.mergePropsWithWarning(Zn, r, Yn)),
              {},
              { as: 'div', className: a()(Mn, t) }
            )
          )
        }
      Gn.displayName = Yn
      var Xn = Gn,
        Qn = {
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          alignItems: 'center',
          textAlign: 'center',
          overlay: 'primary',
          paddingX: 'medium',
          justifyContent: 'center',
        }
      b.xA(
        'src/layout/BackgroundImage/Supersets/Extensions/Cover/Component/styles.css.ts',
        'setUI'
      )
      var Jn = (0, d.oB)(
        {
          position: 'relative',
          zIndex: 1,
          selectors: {
            '&:before': {
              content: '""',
              backgroundColor: 'var(--overlay-color)',
              opacity: 0.35,
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: -1,
            },
          },
        },
        'ClassName'
      )
      function qn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      b._K(),
        b.xA(
          'src/layout/BackgroundImage/Supersets/Extensions/Cover/Component/layers/Shadow/overlay/styles.css.ts',
          'setUI'
        )
      var eo = ['primary', 'secondary', 'black', 'white'],
        to =
          (i.b.apply(void 0, eo),
          (0, d.DA)(
            {
              primary: { color: 'primary', '--overlay-color': '#2B88D8' },
              secondary: { color: 'secondary', '--overlay-color': '#0078D4' },
              black: { color: 'black', '--overlay-color': '#FFFFFF' },
              white: { color: 'white', '--overlay-color': '#000000' },
            },
            function (e) {
              return { '--overlay-color': e['--overlay-color'], opacity: 1 }
            },
            'Styles'
          )),
        ro = Vn(Vn({}, to), {}, { default: to.primary, initial: to.inherit })
      b._K()
      function no(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      !(function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? no(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : no(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
      })({}, { overlay: { options: eo, control: { type: 'select' } } })
      var oo = ['color', 'className']
      function co(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ao(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? co(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : co(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var io = new ((function () {
          function e() {
            ;(0, se.Z)(this, e), (0, n.Z)(this, 'CSSoverlay', void 0)
          }
          return (
            (0, pe.Z)(e, [
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.CSSoverlay = (function (e) {
                      switch (!0) {
                        case 'overlay' in e:
                          return e.overlay
                        default:
                          return
                      }
                    })(e)),
                    this
                  )
                },
              },
              {
                key: 'overlay',
                get: function () {
                  return ro[this.CSSoverlay]
                },
              },
              {
                key: 'box',
                get: function () {
                  return [this.overlay].filter(Boolean).join(' ')
                },
              },
            ]),
            e
          )
        })())(),
        so = 'Cover',
        po = function (e) {
          var t = e.color,
            r = e.className,
            n = (0, o.Z)(e, oo)
          return [(0, tt.jsx)(pt.dx.Provider, { value: t })].reduce(function (
            e,
            t
          ) {
            return (0, p.cloneElement)(t, {}, e)
          },
          Wn(ao(ao({}, i.R.mergePropsWithWarning(Qn, n, so)), {}, { as: 'section', className: a()(Jn, r, io.set({ overlay: t }).box), color: t })))
        }
      po.displayName = so
      var lo = po,
        uo =
          ('<'.concat(
            Yn,
            ' image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg" />'
          ),
          '\n      <'
            .concat(
              so,
              '\n        image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg"\n        color="white"\n      >\n        <H1>\u0426\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</H1>\n      </'
            )
            .concat(so, '>\n    '),
          '\n      <'
            .concat(
              so,
              '\n        image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg"\n        color="white"\n      >\n        <Time>04.12.1995</Time>\n        <H1>\u0426\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</H1>\n      </'
            )
            .concat(so, '>\n    '),
          function (e) {
            return Xn(e)
          })
      uo.Cover = lo
    },
  },
])
