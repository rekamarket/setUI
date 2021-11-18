;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1180: function (e, t, r) {
      'use strict'
      r.d(t, {
        BU: function () {
          return s
        },
        e8: function () {
          return b
        },
        KI: function () {
          return p
        },
        gX: function () {
          return f
        },
        Jr: function () {
          return l
        },
        x_: function () {
          return u
        },
        rO: function () {
          return c
        },
      })
      const n = [
          {
            appendCss: () => {},
            registerClassName: () => {},
            onEndFileScope: () => {},
            registerComposition: () => {},
            markCompositionUsed: () => {},
            getIdentOption: () => 'short',
          },
        ],
        o = () => {
          if (n.length < 1) throw new Error('No adapter configured')
          return n[n.length - 1]
        }
      let i = !1
      const c = (e) => {
          i || a(e)
        },
        a = (e) => {
          ;(i = !0), n.push(e)
        },
        s = (...e) => o().appendCss(...e),
        l = (...e) => o().registerClassName(...e),
        u = (...e) => o().registerComposition(...e),
        p = (...e) => o().markCompositionUsed(...e),
        f = (...e) => o().onEndFileScope(...e),
        b = (...e) => {
          const t = o()
          return 'getIdentOption' in t ? t.getIdentOption(...e) : 'short'
        }
    },
    1206: function (e, t, r) {
      'use strict'
      r.d(t, {
        KP: function () {
          return _
        },
        oB: function () {
          return N
        },
        DA: function () {
          return B
        },
      })
      const n = {}
      var o = r(3506),
        i = r.n(o),
        c = r(1180),
        a = r(9751),
        s = r(3071)
      function l(e, t) {
        for (const r in e) t(e[r], r)
      }
      function u(e, t) {
        let r = {}
        for (const n in e) -1 === t.indexOf(n) && (r[n] = e[n])
        return r
      }
      function p(e, t) {
        let r = {}
        for (const n in e) r[t(e[n], n)] = e[n]
        return r
      }
      function f(e, ...t) {
        for (const r of t)
          0 !== r.length &&
            ('string' === typeof r
              ? r.includes(' ')
                ? f(e, ...r.trim().split(' '))
                : e.add(r)
              : Array.isArray(r) && f(e, ...r))
      }
      function b(e) {
        const t = new Set()
        return f(t, ...e), Array.from(t).join(' ')
      }
      class y {
        constructor() {
          ;(this.ruleset = []), (this.precedenceLookup = new Map())
        }
        findOrCreateCondition(e) {
          let t = this.ruleset.find((t) => t.query === e)
          return (
            t ||
              ((t = { query: e, rules: [], children: new y() }),
              this.ruleset.push(t)),
            t
          )
        }
        getConditionalRulesetByPath(e) {
          let t = this
          for (const r of e) {
            const e = t.findOrCreateCondition(r)
            t = e.children
          }
          return t
        }
        addRule(e, t, r) {
          const n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t)
          if (!n) throw new Error('Failed to add conditional rule')
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          const r = this.getConditionalRulesetByPath(e)
          for (let o = 0; o < t.length; o++) {
            var n
            const e = t[o],
              i =
                null !== (n = r.precedenceLookup.get(e)) && void 0 !== n
                  ? n
                  : new Set()
            for (const r of t.slice(o + 1)) i.add(r)
            r.precedenceLookup.set(e, i)
          }
        }
        isCompatible(e) {
          for (const [r, n] of this.precedenceLookup.entries())
            for (const o of n) {
              var t
              if (
                null !== (t = e.precedenceLookup.get(o)) &&
                void 0 !== t &&
                t.has(r)
              )
                return !1
            }
          for (const { query: r, children: n } of e.ruleset) {
            const e = this.ruleset.find((e) => e.query === r)
            if (e && !e.children.isCompatible(n)) return !1
          }
          return !0
        }
        merge(e) {
          for (const { query: r, rules: n, children: o } of e.ruleset) {
            const e = this.ruleset.find((e) => e.query === r)
            e
              ? (e.rules.push(...n), e.children.merge(o))
              : this.ruleset.push({ query: r, rules: n, children: o })
          }
          for (const [r, n] of e.precedenceLookup.entries()) {
            var t
            const e =
              null !== (t = this.precedenceLookup.get(r)) && void 0 !== t
                ? t
                : new Set()
            this.precedenceLookup.set(r, new Set([...e, ...n]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        sort() {
          this.ruleset.sort((e, t) => {
            const r = this.precedenceLookup.get(e.query)
            if (null !== r && void 0 !== r && r.has(t.query)) return -1
            const n = this.precedenceLookup.get(t.query)
            return null !== n && void 0 !== n && n.has(e.query) ? 1 : 0
          })
        }
        renderToArray() {
          this.sort()
          const e = []
          for (const { query: t, rules: r, children: n } of this.ruleset) {
            const o = {}
            for (const e of r) o[e.selector] = e.rule
            Object.assign(o, ...n.renderToArray()), e.push({ [t]: o })
          }
          return e
        }
      }
      const O = {
          ':-moz-any-link': !0,
          ':-moz-full-screen': !0,
          ':-moz-placeholder': !0,
          ':-moz-read-only': !0,
          ':-moz-read-write': !0,
          ':-ms-fullscreen': !0,
          ':-ms-input-placeholder': !0,
          ':-webkit-any-link': !0,
          ':-webkit-full-screen': !0,
          '::-moz-placeholder': !0,
          '::-moz-progress-bar': !0,
          '::-moz-range-progress': !0,
          '::-moz-range-thumb': !0,
          '::-moz-range-track': !0,
          '::-moz-selection': !0,
          '::-ms-backdrop': !0,
          '::-ms-browse': !0,
          '::-ms-check': !0,
          '::-ms-clear': !0,
          '::-ms-fill': !0,
          '::-ms-fill-lower': !0,
          '::-ms-fill-upper': !0,
          '::-ms-reveal': !0,
          '::-ms-thumb': !0,
          '::-ms-ticks-after': !0,
          '::-ms-ticks-before': !0,
          '::-ms-tooltip': !0,
          '::-ms-track': !0,
          '::-ms-value': !0,
          '::-webkit-backdrop': !0,
          '::-webkit-input-placeholder': !0,
          '::-webkit-progress-bar': !0,
          '::-webkit-progress-inner-value': !0,
          '::-webkit-progress-value': !0,
          '::-webkit-resizer': !0,
          '::-webkit-scrollbar-button': !0,
          '::-webkit-scrollbar-corner': !0,
          '::-webkit-scrollbar-thumb': !0,
          '::-webkit-scrollbar-track-piece': !0,
          '::-webkit-scrollbar-track': !0,
          '::-webkit-scrollbar': !0,
          '::-webkit-slider-runnable-track': !0,
          '::-webkit-slider-thumb': !0,
          '::after': !0,
          '::backdrop': !0,
          '::before': !0,
          '::cue': !0,
          '::first-letter': !0,
          '::first-line': !0,
          '::grammar-error': !0,
          '::placeholder': !0,
          '::selection': !0,
          '::spelling-error': !0,
          ':active': !0,
          ':after': !0,
          ':any-link': !0,
          ':before': !0,
          ':blank': !0,
          ':checked': !0,
          ':default': !0,
          ':defined': !0,
          ':disabled': !0,
          ':empty': !0,
          ':enabled': !0,
          ':first': !0,
          ':first-child': !0,
          ':first-letter': !0,
          ':first-line': !0,
          ':first-of-type': !0,
          ':focus': !0,
          ':focus-visible': !0,
          ':focus-within': !0,
          ':fullscreen': !0,
          ':hover': !0,
          ':in-range': !0,
          ':indeterminate': !0,
          ':invalid': !0,
          ':last-child': !0,
          ':last-of-type': !0,
          ':left': !0,
          ':link': !0,
          ':only-child': !0,
          ':only-of-type': !0,
          ':optional': !0,
          ':out-of-range': !0,
          ':placeholder-shown': !0,
          ':read-only': !0,
          ':read-write': !0,
          ':required': !0,
          ':right': !0,
          ':root': !0,
          ':scope': !0,
          ':target': !0,
          ':valid': !0,
          ':visited': !0,
        },
        g = Object.keys(O),
        d = O,
        h = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        }
      const m = [...g, '@media', '@supports', 'selectors']
      class j {
        constructor(e, t) {
          ;(this.rules = []),
            (this.conditionalRulesets = [new y()]),
            (this.fontFaceRules = []),
            (this.keyframesRules = []),
            (this.localClassNameRegex =
              e.length > 0 ? RegExp(`(${e.join('|')})`, 'g') : null),
            (this.composedClassLists = t
              .map(({ identifier: e, classList: t }) => ({
                identifier: e,
                regex: RegExp(`(${t})`, 'g'),
              }))
              .reverse())
        }
        processCssObj(e) {
          if ('fontFace' === e.type) return void this.fontFaceRules.push(e.rule)
          if ('keyframes' === e.type) return void this.keyframesRules.push(e)
          const t = u(e.rule, m)
          this.addRule({ selector: e.selector, rule: t }),
            (this.currConditionalRuleset = new y()),
            this.transformMedia(e, e.rule['@media']),
            this.transformSupports(e, e.rule['@supports']),
            this.transformSimplePseudos(e, e.rule),
            this.transformSelectors(e, e.rule)
          this.conditionalRulesets[
            this.conditionalRulesets.length - 1
          ].mergeIfCompatible(this.currConditionalRuleset) ||
            this.conditionalRulesets.push(this.currConditionalRuleset)
        }
        addConditionalRule(e, t) {
          const r = this.transformVars(
              this.transformContent(this.pixelifyProperties(e.rule))
            ),
            n = this.transformSelector(e.selector)
          if (!this.currConditionalRuleset)
            throw new Error("Couldn't add conditional rule")
          const o = t[t.length - 1],
            i = t.slice(0, t.length - 1)
          this.currConditionalRuleset.addRule({ selector: n, rule: r }, o, i)
        }
        addRule(e) {
          const t = this.transformVars(
              this.transformContent(this.pixelifyProperties(e.rule))
            ),
            r = this.transformSelector(e.selector)
          this.rules.push({ selector: r, rule: t })
        }
        pixelifyProperties(e) {
          return (
            l(e, (t, r) => {
              'number' !== typeof t || 0 === t || h[r] || (e[r] = `${t}px`)
            }),
            e
          )
        }
        transformVars({ vars: e, ...t }) {
          return e
            ? {
                ...p(e, (e, t) =>
                  (function (e) {
                    const t = e.match(/^var\((.*)\)$/)
                    return t ? t[1] : e
                  })(t)
                ),
                ...t,
              }
            : t
        }
        transformContent({ content: e, ...t }) {
          if ('undefined' === typeof e) return t
          return {
            content: (Array.isArray(e) ? e : [e]).map((e) =>
              e &&
              (e.includes('"') ||
                e.includes("'") ||
                /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(
                  e
                ))
                ? e
                : `"${e}"`
            ),
            ...t,
          }
        }
        transformSelector(e) {
          let t = e
          for (const { identifier: r, regex: n } of this.composedClassLists)
            t = t.replace(n, () => ((0, c.KI)(r), r))
          return this.localClassNameRegex
            ? t.replace(this.localClassNameRegex, (e, r, n) =>
                n > 0 && '.' === t[n - 1]
                  ? r
                  : `.${i()(r, { isIdentifier: !0 })}`
              )
            : t
        }
        transformSelectors(e, t, r) {
          l(t.selectors, (t, n) => {
            if ('local' !== e.type)
              throw new Error(
                'Selectors are not allowed within ' +
                  ('global' === e.type ? '"globalStyle"' : '"selectors"')
              )
            const o = this.transformSelector(
              n.replace(RegExp('&', 'g'), e.selector)
            )
            ;((e, t) => {
              const r = () => {
                const r = new RegExp(
                  `.${
                    ((n = i()(t, { isIdentifier: !0 })),
                    n.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
                  }`,
                  'g'
                )
                var n
                return e.replace(r, '&')
              }
              let n
              try {
                n = (0, a.parse)(e)
              } catch (o) {
                throw new Error(`Invalid selector: ${r()}`)
              }
              n.forEach((e) => {
                try {
                  for (let r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error()
                    const n = e[r]
                    if (
                      'child' === n.type ||
                      'parent' === n.type ||
                      'sibling' === n.type ||
                      'adjacent' === n.type ||
                      'descendant' === n.type
                    )
                      throw new Error()
                    if (
                      'attribute' === n.type &&
                      'class' === n.name &&
                      n.value === t
                    )
                      return
                  }
                } catch (o) {
                  throw new Error(s.Z`
        Invalid selector: ${r()}
    
        Style selectors must target the '&' character (along with any modifiers), e.g. ${'`${parent} &`'} or ${'`${parent} &:hover`'}.
        
        This is to ensure that each style block only affects the styling of a single class.
        
        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ${'`& ${child}`'}) to 'parent', you should add ${'`${parent} &`'} to 'child').
        
        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ${'`& h1`'}, you should instead write 'globalStyle(${'`${parent} h1`'}, { ... })'
      `)
                }
              })
            })(o, e.selector)
            const c = { selector: o, rule: u(t, m) }
            r ? this.addConditionalRule(c, r) : this.addRule(c)
            const l = { type: 'selector', selector: o, rule: t }
            this.transformSupports(l, t['@supports'], r),
              this.transformMedia(l, t['@media'], r)
          })
        }
        transformMedia(e, t, r = []) {
          var n
          t &&
            (null === (n = this.currConditionalRuleset) ||
              void 0 === n ||
              n.addConditionPrecedence(
                r,
                Object.keys(t).map((e) => `@media ${e}`)
              ),
            l(t, (t, n) => {
              const o = [...r, `@media ${n}`]
              this.addConditionalRule(
                { selector: e.selector, rule: u(t, m) },
                o
              ),
                'local' === e.type &&
                  (this.transformSimplePseudos(e, t, o),
                  this.transformSelectors(e, t, o)),
                this.transformSupports(e, t['@supports'], o)
            }))
        }
        transformSupports(e, t, r = []) {
          var n
          t &&
            (null === (n = this.currConditionalRuleset) ||
              void 0 === n ||
              n.addConditionPrecedence(
                r,
                Object.keys(t).map((e) => `@supports ${e}`)
              ),
            l(t, (t, n) => {
              const o = [...r, `@supports ${n}`]
              this.addConditionalRule(
                { selector: e.selector, rule: u(t, m) },
                o
              ),
                'local' === e.type &&
                  (this.transformSimplePseudos(e, t, o),
                  this.transformSelectors(e, t, o)),
                this.transformMedia(e, t['@media'], o)
            }))
        }
        transformSimplePseudos(e, t, r) {
          for (const n of Object.keys(t))
            if (d[n]) {
              if ('local' !== e.type)
                throw new Error(
                  'Simple pseudos are not valid in ' +
                    ('global' === e.type ? '"globalStyle"' : '"selectors"')
                )
              r
                ? this.addConditionalRule(
                    { selector: `${e.selector}${n}`, rule: t[n] },
                    r
                  )
                : this.addRule({
                    conditions: r,
                    selector: `${e.selector}${n}`,
                    rule: t[n],
                  })
            }
        }
        toCss() {
          const e = []
          for (const t of this.fontFaceRules) e.push(v({ '@font-face': t }))
          for (const t of this.keyframesRules)
            e.push(v({ [`@keyframes ${t.name}`]: t.rule }))
          for (const t of this.rules) e.push(v({ [t.selector]: t.rule }))
          for (const t of this.conditionalRulesets)
            for (const r of t.renderToArray()) e.push(v(r))
          return e.filter(Boolean)
        }
      }
      function v(e, t = '') {
        const r = []
        for (const o of Object.keys(e)) {
          const i = e[o]
          if (i && Array.isArray(i)) r.push(...i.map((e) => v({ [o]: e }, t)))
          else if (i && 'object' === typeof i) {
            0 === Object.keys(i).length ||
              r.push(`${t}${o} {\n${v(i, t + '  ')}\n${t}}`)
          } else
            r.push(
              `${t}${
                o.startsWith('--')
                  ? o
                  : ((n = o),
                    n
                      .replace(/([A-Z])/g, '-$1')
                      .replace(/^ms-/, '-ms-')
                      .toLowerCase())
              }: ${i};`
            )
        }
        var n
        return r.join('\n')
      }
      var P = function (e) {
          for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)))
          switch (o) {
            case 3:
              r ^= (255 & e.charCodeAt(n + 2)) << 16
            case 2:
              r ^= (255 & e.charCodeAt(n + 1)) << 8
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16)
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36)
        },
        w = r(6034),
        x = (r(190), r(4061), r(9996)),
        S = r.n(x)
      const D = new Set(),
        k = []
      let C = []
      const E = {
        appendCss: (e) => {
          C.push(e)
        },
        registerClassName: (e) => {
          D.add(e)
        },
        registerComposition: (e) => {
          k.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: (e) => {
          ;(({ fileScope: e, css: t }) => {
            const r = e.packageName
              ? [e.packageName, e.filePath].join('/')
              : e.filePath
            let o = n[r]
            if (!o) {
              const t = document.createElement('style')
              e.packageName && t.setAttribute('data-package', e.packageName),
                t.setAttribute('data-file', e.filePath),
                t.setAttribute('type', 'text/css'),
                (o = n[r] = t),
                document.head.appendChild(t)
            }
            o.innerHTML = t
          })({
            fileScope: e,
            css: (function ({
              localClassNames: e,
              cssObjs: t,
              composedClassLists: r,
            }) {
              const n = new j(e, r)
              for (const o of t) n.processCssObj(o)
              return n.toCss()
            })({
              localClassNames: Array.from(D),
              composedClassLists: k,
              cssObjs: C,
            }).join('\n'),
          }),
            (C = [])
        },
        getIdentOption: () => 'short',
      }
      function A(e) {
        const t = (0, w.vY)().toString(36),
          { filePath: r, packageName: n } = (0, w.tZ)()
        let o = `${P(n ? `${n}${r}` : r)}${t}`
        if ('debug' === (0, c.e8)()) {
          const t = (function (e) {
            const t = e ? [e] : [],
              { filePath: r } = (0, w.tZ)(),
              n = r.match(
                /(?<dir>[^\/\\]*)?[\/\\]?(?<file>[^\/\\]*)\.css\.(ts|js|tsx|jsx)$/
              )
            if (n && n.groups) {
              const { dir: e, file: r } = n.groups
              t.unshift(r && 'index' !== r ? r : e)
            }
            return t.join('_')
          })(e)
          t && (o = `${t}__${o}`)
        }
        return o.match(/^[0-9]/) ? `_${o}` : o
      }
      ;(0, c.rO)(E)
      function Z(e, t) {
        const r = A(t)
        ;(0, c.Jr)(r)
        const n = [],
          o = []
        for (const c of e) 'string' === typeof c ? n.push(c) : o.push(c)
        let i = r
        if (
          (n.length > 0 &&
            ((i = `${r} ${b(n)}`),
            (0, c.x_)({ identifier: r, classList: i }),
            o.length > 0 && (0, c.KI)(r)),
          o.length > 0)
        ) {
          const e = S().all(o, { arrayMerge: (e, t) => t })
          ;(0, c.BU)({ type: 'local', selector: r, rule: e }, (0, w.tZ)())
        }
        return i
      }
      function N(e, t) {
        if (Array.isArray(e)) return Z(e, t)
        const r = A(t)
        return (
          (0, c.Jr)(r),
          (0, c.BU)({ type: 'local', selector: r, rule: e }, (0, w.tZ)()),
          r
        )
      }
      function _(e, t) {
        ;(0, c.BU)({ type: 'global', selector: e, rule: t }, (0, w.tZ)())
      }
      function B(...e) {
        if ('function' === typeof e[1]) {
          const t = e[0],
            r = e[1],
            n = e[2],
            o = {}
          for (const e in t) o[e] = N(r(t[e], e), n ? `${n}_${e}` : e)
          return o
        }
        const t = e[0],
          r = e[1],
          n = {}
        for (const o in t) n[o] = N(t[o], r ? `${r}_${o}` : o)
        return n
      }
    },
    6034: function (e, t, r) {
      'use strict'
      r.d(t, {
        _K: function () {
          return s
        },
        vY: function () {
          return u
        },
        tZ: function () {
          return l
        },
        xA: function () {
          return a
        },
      })
      var n = r(3071),
        o = r(1180)
      let i = 0
      const c = []
      function a(e, t) {
        ;(i = 0), c.unshift({ filePath: e, packageName: t })
      }
      function s() {
        ;(0, o.gX)(l()), (i = 0), c.splice(0, 1)
      }
      function l() {
        if (0 === c.length)
          throw new Error(n.Z`
        Styles were unable to be assigned to a file. This is generally caused by one of the following:

        - You may have created styles outside of a '.css.ts' context
        - You may have incorrect configuration. See https://vanilla-extract.style/documentation/setup
      `)
        return c[0]
      }
      function u() {
        return i++
      }
    },
    6434: function (e, t, r) {
      'use strict'
      e = r.nmd(e)
      const n =
          (e, t) =>
          (...r) =>
            `\x1b[${e(...r) + t}m`,
        o =
          (e, t) =>
          (...r) => {
            const n = e(...r)
            return `\x1b[${38 + t};5;${n}m`
          },
        i =
          (e, t) =>
          (...r) => {
            const n = e(...r)
            return `\x1b[${38 + t};2;${n[0]};${n[1]};${n[2]}m`
          },
        c = (e) => e,
        a = (e, t, r) => [e, t, r],
        s = (e, t, r) => {
          Object.defineProperty(e, t, {
            get: () => {
              const n = r()
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                }),
                n
              )
            },
            enumerable: !0,
            configurable: !0,
          })
        }
      let l
      const u = (e, t, n, o) => {
        void 0 === l && (l = r(2085))
        const i = o ? 10 : 0,
          c = {}
        for (const [r, a] of Object.entries(l)) {
          const o = 'ansi16' === r ? 'ansi' : r
          r === t
            ? (c[o] = e(n, i))
            : 'object' === typeof a && (c[o] = e(a[t], i))
        }
        return c
      }
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        get: function () {
          const e = new Map(),
            t = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29],
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39],
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49],
              },
            }
          ;(t.color.gray = t.color.blackBright),
            (t.bgColor.bgGray = t.bgColor.bgBlackBright),
            (t.color.grey = t.color.blackBright),
            (t.bgColor.bgGrey = t.bgColor.bgBlackBright)
          for (const [r, n] of Object.entries(t)) {
            for (const [r, o] of Object.entries(n))
              (t[r] = { open: `\x1b[${o[0]}m`, close: `\x1b[${o[1]}m` }),
                (n[r] = t[r]),
                e.set(o[0], o[1])
            Object.defineProperty(t, r, { value: n, enumerable: !1 })
          }
          return (
            Object.defineProperty(t, 'codes', { value: e, enumerable: !1 }),
            (t.color.close = '\x1b[39m'),
            (t.bgColor.close = '\x1b[49m'),
            s(t.color, 'ansi', () => u(n, 'ansi16', c, !1)),
            s(t.color, 'ansi256', () => u(o, 'ansi256', c, !1)),
            s(t.color, 'ansi16m', () => u(i, 'rgb', a, !1)),
            s(t.bgColor, 'ansi', () => u(n, 'ansi16', c, !0)),
            s(t.bgColor, 'ansi256', () => u(o, 'ansi256', c, !0)),
            s(t.bgColor, 'ansi16m', () => u(i, 'rgb', a, !0)),
            t
          )
        },
      })
    },
    4061: function (e, t, r) {
      'use strict'
      const n = r(6434),
        { stdout: o, stderr: i } = r(8555),
        { stringReplaceAll: c, stringEncaseCRLFWithFirstIndex: a } = r(3559),
        { isArray: s } = Array,
        l = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        u = Object.create(null)
      class p {
        constructor(e) {
          return f(e)
        }
      }
      const f = (e) => {
        const t = {}
        return (
          ((e, t = {}) => {
            if (
              t.level &&
              !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)
            )
              throw new Error(
                'The `level` option should be an integer from 0 to 3'
              )
            const r = o ? o.level : 0
            e.level = void 0 === t.level ? r : t.level
          })(t, e),
          (t.template = (...e) => j(t.template, ...e)),
          Object.setPrototypeOf(t, b.prototype),
          Object.setPrototypeOf(t.template, t),
          (t.template.constructor = () => {
            throw new Error(
              '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.'
            )
          }),
          (t.template.Instance = p),
          t.template
        )
      }
      function b(e) {
        return f(e)
      }
      for (const [P, w] of Object.entries(n))
        u[P] = {
          get() {
            const e = d(this, g(w.open, w.close, this._styler), this._isEmpty)
            return Object.defineProperty(this, P, { value: e }), e
          },
        }
      u.visible = {
        get() {
          const e = d(this, this._styler, !0)
          return Object.defineProperty(this, 'visible', { value: e }), e
        },
      }
      const y = [
        'rgb',
        'hex',
        'keyword',
        'hsl',
        'hsv',
        'hwb',
        'ansi',
        'ansi256',
      ]
      for (const P of y)
        u[P] = {
          get() {
            const { level: e } = this
            return function (...t) {
              const r = g(n.color[l[e]][P](...t), n.color.close, this._styler)
              return d(this, r, this._isEmpty)
            }
          },
        }
      for (const P of y) {
        u['bg' + P[0].toUpperCase() + P.slice(1)] = {
          get() {
            const { level: e } = this
            return function (...t) {
              const r = g(
                n.bgColor[l[e]][P](...t),
                n.bgColor.close,
                this._styler
              )
              return d(this, r, this._isEmpty)
            }
          },
        }
      }
      const O = Object.defineProperties(() => {}, {
          ...u,
          level: {
            enumerable: !0,
            get() {
              return this._generator.level
            },
            set(e) {
              this._generator.level = e
            },
          },
        }),
        g = (e, t, r) => {
          let n, o
          return (
            void 0 === r
              ? ((n = e), (o = t))
              : ((n = r.openAll + e), (o = t + r.closeAll)),
            { open: e, close: t, openAll: n, closeAll: o, parent: r }
          )
        },
        d = (e, t, r) => {
          const n = (...e) =>
            s(e[0]) && s(e[0].raw)
              ? h(n, j(n, ...e))
              : h(n, 1 === e.length ? '' + e[0] : e.join(' '))
          return (
            Object.setPrototypeOf(n, O),
            (n._generator = e),
            (n._styler = t),
            (n._isEmpty = r),
            n
          )
        },
        h = (e, t) => {
          if (e.level <= 0 || !t) return e._isEmpty ? '' : t
          let r = e._styler
          if (void 0 === r) return t
          const { openAll: n, closeAll: o } = r
          if (-1 !== t.indexOf('\x1b'))
            for (; void 0 !== r; ) (t = c(t, r.close, r.open)), (r = r.parent)
          const i = t.indexOf('\n')
          return -1 !== i && (t = a(t, o, n, i)), n + t + o
        }
      let m
      const j = (e, ...t) => {
        const [n] = t
        if (!s(n) || !s(n.raw)) return t.join(' ')
        const o = t.slice(1),
          i = [n.raw[0]]
        for (let r = 1; r < n.length; r++)
          i.push(String(o[r - 1]).replace(/[{}\\]/g, '\\$&'), String(n.raw[r]))
        return void 0 === m && (m = r(9515)), m(e, i.join(''))
      }
      Object.defineProperties(b.prototype, u)
      const v = b()
      ;(v.supportsColor = o),
        (v.stderr = b({ level: i ? i.level : 0 })),
        (v.stderr.supportsColor = i),
        (e.exports = v)
    },
    9515: function (e) {
      'use strict'
      const t =
          /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        r = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        n = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        o = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
        i = new Map([
          ['n', '\n'],
          ['r', '\r'],
          ['t', '\t'],
          ['b', '\b'],
          ['f', '\f'],
          ['v', '\v'],
          ['0', '\0'],
          ['\\', '\\'],
          ['e', '\x1b'],
          ['a', '\x07'],
        ])
      function c(e) {
        const t = 'u' === e[0],
          r = '{' === e[1]
        return (t && !r && 5 === e.length) || ('x' === e[0] && 3 === e.length)
          ? String.fromCharCode(parseInt(e.slice(1), 16))
          : t && r
          ? String.fromCodePoint(parseInt(e.slice(2, -1), 16))
          : i.get(e) || e
      }
      function a(e, t) {
        const r = [],
          i = t.trim().split(/\s*,\s*/g)
        let a
        for (const s of i) {
          const t = Number(s)
          if (Number.isNaN(t)) {
            if (!(a = s.match(n)))
              throw new Error(
                `Invalid Chalk template style argument: ${s} (in style '${e}')`
              )
            r.push(a[2].replace(o, (e, t, r) => (t ? c(t) : r)))
          } else r.push(t)
        }
        return r
      }
      function s(e) {
        r.lastIndex = 0
        const t = []
        let n
        for (; null !== (n = r.exec(e)); ) {
          const e = n[1]
          if (n[2]) {
            const r = a(e, n[2])
            t.push([e].concat(r))
          } else t.push([e])
        }
        return t
      }
      function l(e, t) {
        const r = {}
        for (const o of t)
          for (const e of o.styles) r[e[0]] = o.inverse ? null : e.slice(1)
        let n = e
        for (const [o, i] of Object.entries(r))
          if (Array.isArray(i)) {
            if (!(o in n)) throw new Error(`Unknown Chalk style: ${o}`)
            n = i.length > 0 ? n[o](...i) : n[o]
          }
        return n
      }
      e.exports = (e, r) => {
        const n = [],
          o = []
        let i = []
        if (
          (r.replace(t, (t, r, a, u, p, f) => {
            if (r) i.push(c(r))
            else if (u) {
              const t = i.join('')
              ;(i = []),
                o.push(0 === n.length ? t : l(e, n)(t)),
                n.push({ inverse: a, styles: s(u) })
            } else if (p) {
              if (0 === n.length)
                throw new Error('Found extraneous } in Chalk template literal')
              o.push(l(e, n)(i.join(''))), (i = []), n.pop()
            } else i.push(f)
          }),
          o.push(i.join('')),
          n.length > 0)
        ) {
          const e = `Chalk template literal is missing ${
            n.length
          } closing bracket${1 === n.length ? '' : 's'} (\`}\`)`
          throw new Error(e)
        }
        return o.join('')
      }
    },
    3559: function (e) {
      'use strict'
      e.exports = {
        stringReplaceAll: (e, t, r) => {
          let n = e.indexOf(t)
          if (-1 === n) return e
          const o = t.length
          let i = 0,
            c = ''
          do {
            ;(c += e.substr(i, n - i) + t + r),
              (i = n + o),
              (n = e.indexOf(t, i))
          } while (-1 !== n)
          return (c += e.substr(i)), c
        },
        stringEncaseCRLFWithFirstIndex: (e, t, r, n) => {
          let o = 0,
            i = ''
          do {
            const c = '\r' === e[n - 1]
            ;(i +=
              e.substr(o, (c ? n - 1 : n) - o) + t + (c ? '\r\n' : '\n') + r),
              (o = n + 1),
              (n = e.indexOf('\n', o))
          } while (-1 !== n)
          return (i += e.substr(o)), i
        },
      }
    },
    4184: function (e, t) {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var i = typeof r
              if ('string' === i || 'number' === i) e.push(r)
              else if (Array.isArray(r)) {
                if (r.length) {
                  var c = o.apply(null, r)
                  c && e.push(c)
                }
              } else if ('object' === i)
                if (r.toString === Object.prototype.toString)
                  for (var a in r) n.call(r, a) && r[a] && e.push(a)
                else e.push(r.toString())
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function () {
                return o
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    8168: function (e, t, r) {
      const n = r(8874),
        o = {}
      for (const c of Object.keys(n)) o[n[c]] = c
      const i = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      }
      e.exports = i
      for (const c of Object.keys(i)) {
        if (!('channels' in i[c]))
          throw new Error('missing channels property: ' + c)
        if (!('labels' in i[c]))
          throw new Error('missing channel labels property: ' + c)
        if (i[c].labels.length !== i[c].channels)
          throw new Error('channel and label counts mismatch: ' + c)
        const { channels: e, labels: t } = i[c]
        delete i[c].channels,
          delete i[c].labels,
          Object.defineProperty(i[c], 'channels', { value: e }),
          Object.defineProperty(i[c], 'labels', { value: t })
      }
      ;(i.rgb.hsl = function (e) {
        const t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          o = Math.min(t, r, n),
          i = Math.max(t, r, n),
          c = i - o
        let a, s
        i === o
          ? (a = 0)
          : t === i
          ? (a = (r - n) / c)
          : r === i
          ? (a = 2 + (n - t) / c)
          : n === i && (a = 4 + (t - r) / c),
          (a = Math.min(60 * a, 360)),
          a < 0 && (a += 360)
        const l = (o + i) / 2
        return (
          (s = i === o ? 0 : l <= 0.5 ? c / (i + o) : c / (2 - i - o)),
          [a, 100 * s, 100 * l]
        )
      }),
        (i.rgb.hsv = function (e) {
          let t, r, n, o, i
          const c = e[0] / 255,
            a = e[1] / 255,
            s = e[2] / 255,
            l = Math.max(c, a, s),
            u = l - Math.min(c, a, s),
            p = function (e) {
              return (l - e) / 6 / u + 0.5
            }
          return (
            0 === u
              ? ((o = 0), (i = 0))
              : ((i = u / l),
                (t = p(c)),
                (r = p(a)),
                (n = p(s)),
                c === l
                  ? (o = n - r)
                  : a === l
                  ? (o = 1 / 3 + t - n)
                  : s === l && (o = 2 / 3 + r - t),
                o < 0 ? (o += 1) : o > 1 && (o -= 1)),
            [360 * o, 100 * i, 100 * l]
          )
        }),
        (i.rgb.hwb = function (e) {
          const t = e[0],
            r = e[1]
          let n = e[2]
          const o = i.rgb.hsl(e)[0],
            c = (1 / 255) * Math.min(t, Math.min(r, n))
          return (
            (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))),
            [o, 100 * c, 100 * n]
          )
        }),
        (i.rgb.cmyk = function (e) {
          const t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255,
            o = Math.min(1 - t, 1 - r, 1 - n)
          return [
            100 * ((1 - t - o) / (1 - o) || 0),
            100 * ((1 - r - o) / (1 - o) || 0),
            100 * ((1 - n - o) / (1 - o) || 0),
            100 * o,
          ]
        }),
        (i.rgb.keyword = function (e) {
          const t = o[e]
          if (t) return t
          let r,
            i = 1 / 0
          for (const o of Object.keys(n)) {
            const t = n[o],
              s =
                ((a = t),
                ((c = e)[0] - a[0]) ** 2 +
                  (c[1] - a[1]) ** 2 +
                  (c[2] - a[2]) ** 2)
            s < i && ((i = s), (r = o))
          }
          var c, a
          return r
        }),
        (i.keyword.rgb = function (e) {
          return n[e]
        }),
        (i.rgb.xyz = function (e) {
          let t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255
          ;(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
            (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
            (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92)
          return [
            100 * (0.4124 * t + 0.3576 * r + 0.1805 * n),
            100 * (0.2126 * t + 0.7152 * r + 0.0722 * n),
            100 * (0.0193 * t + 0.1192 * r + 0.9505 * n),
          ]
        }),
        (i.rgb.lab = function (e) {
          const t = i.rgb.xyz(e)
          let r = t[0],
            n = t[1],
            o = t[2]
          ;(r /= 95.047),
            (n /= 100),
            (o /= 108.883),
            (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
            (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
            (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116)
          return [116 * n - 16, 500 * (r - n), 200 * (n - o)]
        }),
        (i.hsl.rgb = function (e) {
          const t = e[0] / 360,
            r = e[1] / 100,
            n = e[2] / 100
          let o, i, c
          if (0 === r) return (c = 255 * n), [c, c, c]
          o = n < 0.5 ? n * (1 + r) : n + r - n * r
          const a = 2 * n - o,
            s = [0, 0, 0]
          for (let l = 0; l < 3; l++)
            (i = t + (1 / 3) * -(l - 1)),
              i < 0 && i++,
              i > 1 && i--,
              (c =
                6 * i < 1
                  ? a + 6 * (o - a) * i
                  : 2 * i < 1
                  ? o
                  : 3 * i < 2
                  ? a + (o - a) * (2 / 3 - i) * 6
                  : a),
              (s[l] = 255 * c)
          return s
        }),
        (i.hsl.hsv = function (e) {
          const t = e[0]
          let r = e[1] / 100,
            n = e[2] / 100,
            o = r
          const i = Math.max(n, 0.01)
          ;(n *= 2), (r *= n <= 1 ? n : 2 - n), (o *= i <= 1 ? i : 2 - i)
          return [
            t,
            100 * (0 === n ? (2 * o) / (i + o) : (2 * r) / (n + r)),
            100 * ((n + r) / 2),
          ]
        }),
        (i.hsv.rgb = function (e) {
          const t = e[0] / 60,
            r = e[1] / 100
          let n = e[2] / 100
          const o = Math.floor(t) % 6,
            i = t - Math.floor(t),
            c = 255 * n * (1 - r),
            a = 255 * n * (1 - r * i),
            s = 255 * n * (1 - r * (1 - i))
          switch (((n *= 255), o)) {
            case 0:
              return [n, s, c]
            case 1:
              return [a, n, c]
            case 2:
              return [c, n, s]
            case 3:
              return [c, a, n]
            case 4:
              return [s, c, n]
            case 5:
              return [n, c, a]
          }
        }),
        (i.hsv.hsl = function (e) {
          const t = e[0],
            r = e[1] / 100,
            n = e[2] / 100,
            o = Math.max(n, 0.01)
          let i, c
          c = (2 - r) * n
          const a = (2 - r) * o
          return (
            (i = r * o),
            (i /= a <= 1 ? a : 2 - a),
            (i = i || 0),
            (c /= 2),
            [t, 100 * i, 100 * c]
          )
        }),
        (i.hwb.rgb = function (e) {
          const t = e[0] / 360
          let r = e[1] / 100,
            n = e[2] / 100
          const o = r + n
          let i
          o > 1 && ((r /= o), (n /= o))
          const c = Math.floor(6 * t),
            a = 1 - n
          ;(i = 6 * t - c), 0 !== (1 & c) && (i = 1 - i)
          const s = r + i * (a - r)
          let l, u, p
          switch (c) {
            default:
            case 6:
            case 0:
              ;(l = a), (u = s), (p = r)
              break
            case 1:
              ;(l = s), (u = a), (p = r)
              break
            case 2:
              ;(l = r), (u = a), (p = s)
              break
            case 3:
              ;(l = r), (u = s), (p = a)
              break
            case 4:
              ;(l = s), (u = r), (p = a)
              break
            case 5:
              ;(l = a), (u = r), (p = s)
          }
          return [255 * l, 255 * u, 255 * p]
        }),
        (i.cmyk.rgb = function (e) {
          const t = e[0] / 100,
            r = e[1] / 100,
            n = e[2] / 100,
            o = e[3] / 100
          return [
            255 * (1 - Math.min(1, t * (1 - o) + o)),
            255 * (1 - Math.min(1, r * (1 - o) + o)),
            255 * (1 - Math.min(1, n * (1 - o) + o)),
          ]
        }),
        (i.xyz.rgb = function (e) {
          const t = e[0] / 100,
            r = e[1] / 100,
            n = e[2] / 100
          let o, i, c
          return (
            (o = 3.2406 * t + -1.5372 * r + -0.4986 * n),
            (i = -0.9689 * t + 1.8758 * r + 0.0415 * n),
            (c = 0.0557 * t + -0.204 * r + 1.057 * n),
            (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : 12.92 * o),
            (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : 12.92 * i),
            (c = c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : 12.92 * c),
            (o = Math.min(Math.max(0, o), 1)),
            (i = Math.min(Math.max(0, i), 1)),
            (c = Math.min(Math.max(0, c), 1)),
            [255 * o, 255 * i, 255 * c]
          )
        }),
        (i.xyz.lab = function (e) {
          let t = e[0],
            r = e[1],
            n = e[2]
          ;(t /= 95.047),
            (r /= 100),
            (n /= 108.883),
            (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
            (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
            (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116)
          return [116 * r - 16, 500 * (t - r), 200 * (r - n)]
        }),
        (i.lab.xyz = function (e) {
          let t, r, n
          ;(r = (e[0] + 16) / 116), (t = e[1] / 500 + r), (n = r - e[2] / 200)
          const o = r ** 3,
            i = t ** 3,
            c = n ** 3
          return (
            (r = o > 0.008856 ? o : (r - 16 / 116) / 7.787),
            (t = i > 0.008856 ? i : (t - 16 / 116) / 7.787),
            (n = c > 0.008856 ? c : (n - 16 / 116) / 7.787),
            (t *= 95.047),
            (r *= 100),
            (n *= 108.883),
            [t, r, n]
          )
        }),
        (i.lab.lch = function (e) {
          const t = e[0],
            r = e[1],
            n = e[2]
          let o
          ;(o = (360 * Math.atan2(n, r)) / 2 / Math.PI), o < 0 && (o += 360)
          return [t, Math.sqrt(r * r + n * n), o]
        }),
        (i.lch.lab = function (e) {
          const t = e[0],
            r = e[1],
            n = (e[2] / 360) * 2 * Math.PI
          return [t, r * Math.cos(n), r * Math.sin(n)]
        }),
        (i.rgb.ansi16 = function (e, t = null) {
          const [r, n, o] = e
          let c = null === t ? i.rgb.hsv(e)[2] : t
          if (((c = Math.round(c / 50)), 0 === c)) return 30
          let a =
            30 +
            ((Math.round(o / 255) << 2) |
              (Math.round(n / 255) << 1) |
              Math.round(r / 255))
          return 2 === c && (a += 60), a
        }),
        (i.hsv.ansi16 = function (e) {
          return i.rgb.ansi16(i.hsv.rgb(e), e[2])
        }),
        (i.rgb.ansi256 = function (e) {
          const t = e[0],
            r = e[1],
            n = e[2]
          if (t === r && r === n)
            return t < 8
              ? 16
              : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
          return (
            16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5)
          )
        }),
        (i.ansi16.rgb = function (e) {
          let t = e % 10
          if (0 === t || 7 === t)
            return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]
          const r = 0.5 * (1 + ~~(e > 50))
          return [
            (1 & t) * r * 255,
            ((t >> 1) & 1) * r * 255,
            ((t >> 2) & 1) * r * 255,
          ]
        }),
        (i.ansi256.rgb = function (e) {
          if (e >= 232) {
            const t = 10 * (e - 232) + 8
            return [t, t, t]
          }
          let t
          e -= 16
          return [
            (Math.floor(e / 36) / 5) * 255,
            (Math.floor((t = e % 36) / 6) / 5) * 255,
            ((t % 6) / 5) * 255,
          ]
        }),
        (i.rgb.hex = function (e) {
          const t = (
            ((255 & Math.round(e[0])) << 16) +
            ((255 & Math.round(e[1])) << 8) +
            (255 & Math.round(e[2]))
          )
            .toString(16)
            .toUpperCase()
          return '000000'.substring(t.length) + t
        }),
        (i.hex.rgb = function (e) {
          const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
          if (!t) return [0, 0, 0]
          let r = t[0]
          3 === t[0].length &&
            (r = r
              .split('')
              .map((e) => e + e)
              .join(''))
          const n = parseInt(r, 16)
          return [(n >> 16) & 255, (n >> 8) & 255, 255 & n]
        }),
        (i.rgb.hcg = function (e) {
          const t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255,
            o = Math.max(Math.max(t, r), n),
            i = Math.min(Math.min(t, r), n),
            c = o - i
          let a, s
          return (
            (a = c < 1 ? i / (1 - c) : 0),
            (s =
              c <= 0
                ? 0
                : o === t
                ? ((r - n) / c) % 6
                : o === r
                ? 2 + (n - t) / c
                : 4 + (t - r) / c),
            (s /= 6),
            (s %= 1),
            [360 * s, 100 * c, 100 * a]
          )
        }),
        (i.hsl.hcg = function (e) {
          const t = e[1] / 100,
            r = e[2] / 100,
            n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r)
          let o = 0
          return (
            n < 1 && (o = (r - 0.5 * n) / (1 - n)), [e[0], 100 * n, 100 * o]
          )
        }),
        (i.hsv.hcg = function (e) {
          const t = e[1] / 100,
            r = e[2] / 100,
            n = t * r
          let o = 0
          return n < 1 && (o = (r - n) / (1 - n)), [e[0], 100 * n, 100 * o]
        }),
        (i.hcg.rgb = function (e) {
          const t = e[0] / 360,
            r = e[1] / 100,
            n = e[2] / 100
          if (0 === r) return [255 * n, 255 * n, 255 * n]
          const o = [0, 0, 0],
            i = (t % 1) * 6,
            c = i % 1,
            a = 1 - c
          let s = 0
          switch (Math.floor(i)) {
            case 0:
              ;(o[0] = 1), (o[1] = c), (o[2] = 0)
              break
            case 1:
              ;(o[0] = a), (o[1] = 1), (o[2] = 0)
              break
            case 2:
              ;(o[0] = 0), (o[1] = 1), (o[2] = c)
              break
            case 3:
              ;(o[0] = 0), (o[1] = a), (o[2] = 1)
              break
            case 4:
              ;(o[0] = c), (o[1] = 0), (o[2] = 1)
              break
            default:
              ;(o[0] = 1), (o[1] = 0), (o[2] = a)
          }
          return (
            (s = (1 - r) * n),
            [255 * (r * o[0] + s), 255 * (r * o[1] + s), 255 * (r * o[2] + s)]
          )
        }),
        (i.hcg.hsv = function (e) {
          const t = e[1] / 100,
            r = t + (e[2] / 100) * (1 - t)
          let n = 0
          return r > 0 && (n = t / r), [e[0], 100 * n, 100 * r]
        }),
        (i.hcg.hsl = function (e) {
          const t = e[1] / 100,
            r = (e[2] / 100) * (1 - t) + 0.5 * t
          let n = 0
          return (
            r > 0 && r < 0.5
              ? (n = t / (2 * r))
              : r >= 0.5 && r < 1 && (n = t / (2 * (1 - r))),
            [e[0], 100 * n, 100 * r]
          )
        }),
        (i.hcg.hwb = function (e) {
          const t = e[1] / 100,
            r = t + (e[2] / 100) * (1 - t)
          return [e[0], 100 * (r - t), 100 * (1 - r)]
        }),
        (i.hwb.hcg = function (e) {
          const t = e[1] / 100,
            r = 1 - e[2] / 100,
            n = r - t
          let o = 0
          return n < 1 && (o = (r - n) / (1 - n)), [e[0], 100 * n, 100 * o]
        }),
        (i.apple.rgb = function (e) {
          return [
            (e[0] / 65535) * 255,
            (e[1] / 65535) * 255,
            (e[2] / 65535) * 255,
          ]
        }),
        (i.rgb.apple = function (e) {
          return [
            (e[0] / 255) * 65535,
            (e[1] / 255) * 65535,
            (e[2] / 255) * 65535,
          ]
        }),
        (i.gray.rgb = function (e) {
          return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255]
        }),
        (i.gray.hsl = function (e) {
          return [0, 0, e[0]]
        }),
        (i.gray.hsv = i.gray.hsl),
        (i.gray.hwb = function (e) {
          return [0, 100, e[0]]
        }),
        (i.gray.cmyk = function (e) {
          return [0, 0, 0, e[0]]
        }),
        (i.gray.lab = function (e) {
          return [e[0], 0, 0]
        }),
        (i.gray.hex = function (e) {
          const t = 255 & Math.round((e[0] / 100) * 255),
            r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase()
          return '000000'.substring(r.length) + r
        }),
        (i.rgb.gray = function (e) {
          return [((e[0] + e[1] + e[2]) / 3 / 255) * 100]
        })
    },
    2085: function (e, t, r) {
      const n = r(8168),
        o = r(4111),
        i = {}
      Object.keys(n).forEach((e) => {
        ;(i[e] = {}),
          Object.defineProperty(i[e], 'channels', { value: n[e].channels }),
          Object.defineProperty(i[e], 'labels', { value: n[e].labels })
        const t = o(e)
        Object.keys(t).forEach((r) => {
          const n = t[r]
          ;(i[e][r] = (function (e) {
            const t = function (...t) {
              const r = t[0]
              if (void 0 === r || null === r) return r
              r.length > 1 && (t = r)
              const n = e(t)
              if ('object' === typeof n)
                for (let e = n.length, o = 0; o < e; o++)
                  n[o] = Math.round(n[o])
              return n
            }
            return 'conversion' in e && (t.conversion = e.conversion), t
          })(n)),
            (i[e][r].raw = (function (e) {
              const t = function (...t) {
                const r = t[0]
                return void 0 === r || null === r
                  ? r
                  : (r.length > 1 && (t = r), e(t))
              }
              return 'conversion' in e && (t.conversion = e.conversion), t
            })(n))
        })
      }),
        (e.exports = i)
    },
    4111: function (e, t, r) {
      const n = r(8168)
      function o(e) {
        const t = (function () {
            const e = {},
              t = Object.keys(n)
            for (let r = t.length, n = 0; n < r; n++)
              e[t[n]] = { distance: -1, parent: null }
            return e
          })(),
          r = [e]
        for (t[e].distance = 0; r.length; ) {
          const e = r.pop(),
            o = Object.keys(n[e])
          for (let n = o.length, i = 0; i < n; i++) {
            const n = o[i],
              c = t[n]
            ;-1 === c.distance &&
              ((c.distance = t[e].distance + 1), (c.parent = e), r.unshift(n))
          }
        }
        return t
      }
      function i(e, t) {
        return function (r) {
          return t(e(r))
        }
      }
      function c(e, t) {
        const r = [t[e].parent, e]
        let o = n[t[e].parent][e],
          c = t[e].parent
        for (; t[c].parent; )
          r.unshift(t[c].parent),
            (o = i(n[t[c].parent][c], o)),
            (c = t[c].parent)
        return (o.conversion = r), o
      }
      e.exports = function (e) {
        const t = o(e),
          r = {},
          n = Object.keys(t)
        for (let o = n.length, i = 0; i < o; i++) {
          const e = n[i]
          null !== t[e].parent && (r[e] = c(e, t))
        }
        return r
      }
    },
    8874: function (e) {
      'use strict'
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      }
    },
    9751: function (e, t, r) {
      'use strict'
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  })
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r])
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              'default' === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r)
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.stringify = t.parse = void 0),
        o(r(675), t)
      var c = r(675)
      Object.defineProperty(t, 'parse', {
        enumerable: !0,
        get: function () {
          return i(c).default
        },
      })
      var a = r(6868)
      Object.defineProperty(t, 'stringify', {
        enumerable: !0,
        get: function () {
          return i(a).default
        },
      })
    },
    675: function (e, t) {
      'use strict'
      var r =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
            e[o] = t[r]
          return e
        }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isTraversal = void 0)
      var n = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        o = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        i = new Map([
          ['~', 'element'],
          ['^', 'start'],
          ['$', 'end'],
          ['*', 'any'],
          ['!', 'not'],
          ['|', 'hyphen'],
        ]),
        c = { '>': 'child', '<': 'parent', '~': 'sibling', '+': 'adjacent' },
        a = { '#': ['id', 'equals'], '.': ['class', 'element'] },
        s = new Set(['has', 'not', 'matches', 'is', 'host', 'host-context']),
        l = new Set(
          r(
            ['descendant'],
            Object.keys(c).map(function (e) {
              return c[e]
            })
          )
        ),
        u = new Set([
          'accept',
          'accept-charset',
          'align',
          'alink',
          'axis',
          'bgcolor',
          'charset',
          'checked',
          'clear',
          'codetype',
          'color',
          'compact',
          'declare',
          'defer',
          'dir',
          'direction',
          'disabled',
          'enctype',
          'face',
          'frame',
          'hreflang',
          'http-equiv',
          'lang',
          'language',
          'link',
          'media',
          'method',
          'multiple',
          'nohref',
          'noresize',
          'noshade',
          'nowrap',
          'readonly',
          'rel',
          'rev',
          'rules',
          'scope',
          'scrolling',
          'selected',
          'shape',
          'target',
          'text',
          'type',
          'valign',
          'valuetype',
          'vlink',
        ])
      function p(e) {
        return l.has(e.type)
      }
      t.isTraversal = p
      var f = new Set(['contains', 'icontains']),
        b = new Set(['"', "'"])
      function y(e, t, r) {
        var n = parseInt(t, 16) - 65536
        return n !== n || r
          ? t
          : n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320)
      }
      function O(e) {
        return e.replace(o, y)
      }
      function g(e) {
        return ' ' === e || '\n' === e || '\t' === e || '\f' === e || '\r' === e
      }
      function d(e, t, r, o) {
        var l, y
        void 0 === r && (r = {})
        var m = [],
          j = !1
        function v(e) {
          var r = t.slice(o + e).match(n)
          if (!r) throw new Error('Expected name, found ' + t.slice(o))
          var i = r[0]
          return (o += e + i.length), O(i)
        }
        function P(e) {
          for (; g(t.charAt(o + e)); ) e++
          o += e
        }
        function w(e) {
          for (var r = 0; '\\' === t.charAt(--e); ) r++
          return 1 === (1 & r)
        }
        function x() {
          if (m.length > 0 && p(m[m.length - 1]))
            throw new Error('Did not expect successive traversals.')
        }
        for (P(0); '' !== t; ) {
          var S = t.charAt(o)
          if (g(S)) (j = !0), P(1)
          else if (S in c) x(), m.push({ type: c[S] }), (j = !1), P(1)
          else if (',' === S) {
            if (0 === m.length) throw new Error('Empty sub-selector')
            e.push(m), (m = []), (j = !1), P(1)
          } else if (t.startsWith('/*', o)) {
            var D = t.indexOf('*/', o + 2)
            if (D < 0) throw new Error('Comment was not terminated')
            o = D + 2
          } else if (
            (j && (x(), m.push({ type: 'descendant' }), (j = !1)), S in a)
          ) {
            var k = a[S],
              C = k[0],
              E = k[1]
            m.push({
              type: 'attribute',
              name: C,
              action: E,
              value: v(1),
              namespace: null,
              ignoreCase: !!r.xmlMode && null,
            })
          } else if ('[' === S) {
            P(1)
            var A = void 0,
              Z = null
            '|' === t.charAt(o) && ((Z = ''), (o += 1)),
              t.startsWith('*|', o) && ((Z = '*'), (o += 2)),
              (A = v(0)),
              null === Z &&
                '|' === t.charAt(o) &&
                '=' !== t.charAt(o + 1) &&
                ((Z = A), (A = v(1))),
              (null !== (l = r.lowerCaseAttributeNames) && void 0 !== l
                ? l
                : !r.xmlMode) && (A = A.toLowerCase()),
              P(0)
            E = 'exists'
            var N = i.get(t.charAt(o))
            if (N) {
              if (((E = N), '=' !== t.charAt(o + 1)))
                throw new Error('Expected `=`')
              P(2)
            } else '=' === t.charAt(o) && ((E = 'equals'), P(1))
            var _ = '',
              B = null
            if ('exists' !== E) {
              if (b.has(t.charAt(o))) {
                for (
                  var T = t.charAt(o), I = o + 1;
                  I < t.length && (t.charAt(I) !== T || w(I));

                )
                  I += 1
                if (t.charAt(I) !== T)
                  throw new Error("Attribute value didn't end")
                ;(_ = O(t.slice(o + 1, I))), (o = I + 1)
              } else {
                for (
                  var R = o;
                  o < t.length &&
                  ((!g(t.charAt(o)) && ']' !== t.charAt(o)) || w(o));

                )
                  o += 1
                _ = O(t.slice(R, o))
              }
              P(0)
              var W = t.charAt(o)
              's' === W || 'S' === W
                ? ((B = !1), P(1))
                : ('i' !== W && 'I' !== W) || ((B = !0), P(1))
            }
            if (
              (r.xmlMode || (null !== B && void 0 !== B) || (B = u.has(A)),
              ']' !== t.charAt(o))
            )
              throw new Error("Attribute selector didn't terminate")
            o += 1
            var z = {
              type: 'attribute',
              name: A,
              action: E,
              value: _,
              namespace: Z,
              ignoreCase: B,
            }
            m.push(z)
          } else if (':' === S) {
            if (':' === t.charAt(o + 1)) {
              m.push({ type: 'pseudo-element', name: v(2).toLowerCase() })
              continue
            }
            var L = v(1).toLowerCase(),
              F = null
            if ('(' === t.charAt(o))
              if (s.has(L)) {
                if (b.has(t.charAt(o + 1)))
                  throw new Error('Pseudo-selector ' + L + ' cannot be quoted')
                if (((o = d((F = []), t, r, o + 1)), ')' !== t.charAt(o)))
                  throw new Error(
                    'Missing closing parenthesis in :' + L + ' (' + t + ')'
                  )
                o += 1
              } else {
                for (var U = (o += 1), K = 1; K > 0 && o < t.length; o++)
                  '(' !== t.charAt(o) || w(o)
                    ? ')' !== t.charAt(o) || w(o) || K--
                    : K++
                if (K) throw new Error('Parenthesis not matched')
                if (((F = t.slice(U, o - 1)), f.has(L))) {
                  var M = F.charAt(0)
                  M === F.slice(-1) && b.has(M) && (F = F.slice(1, -1)),
                    (F = O(F))
                }
              }
            m.push({ type: 'pseudo', name: L, data: F })
          } else {
            Z = null
            var $ = void 0
            if ('*' === S) (o += 1), ($ = '*')
            else {
              if (!n.test(t.slice(o)))
                return (
                  m.length && 'descendant' === m[m.length - 1].type && m.pop(),
                  h(e, m),
                  o
                )
              '|' === t.charAt(o) && ((Z = ''), (o += 1)), ($ = v(0))
            }
            '|' === t.charAt(o) &&
              ((Z = $),
              '*' === t.charAt(o + 1) ? (($ = '*'), (o += 2)) : ($ = v(1))),
              '*' === $
                ? m.push({ type: 'universal', namespace: Z })
                : ((null !== (y = r.lowerCaseTags) && void 0 !== y
                    ? y
                    : !r.xmlMode) && ($ = $.toLowerCase()),
                  m.push({ type: 'tag', name: $, namespace: Z }))
          }
        }
        return h(e, m), o
      }
      function h(e, t) {
        if (e.length > 0 && 0 === t.length)
          throw new Error('Empty sub-selector')
        e.push(t)
      }
      t.default = function (e, t) {
        var r = [],
          n = d(r, '' + e, t, 0)
        if (n < e.length) throw new Error('Unmatched selector: ' + e.slice(n))
        return r
      }
    },
    6868: function (e, t) {
      'use strict'
      var r =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
            e[o] = t[r]
          return e
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
          equals: '',
          element: '~',
          start: '^',
          end: '$',
          any: '*',
          not: '!',
          hyphen: '|',
        },
        o = new Set(
          r(
            r(
              [],
              Object.keys(n)
                .map(function (e) {
                  return n[e]
                })
                .filter(Boolean)
            ),
            [':', '[', ']', ' ', '\\', '(', ')', "'"]
          )
        )
      function i(e) {
        return e.map(c).join(', ')
      }
      function c(e) {
        return e.map(a).join('')
      }
      function a(e) {
        switch (e.type) {
          case 'child':
            return ' > '
          case 'parent':
            return ' < '
          case 'sibling':
            return ' ~ '
          case 'adjacent':
            return ' + '
          case 'descendant':
            return ' '
          case 'universal':
            return l(e.namespace) + '*'
          case 'tag':
            return s(e)
          case 'pseudo-element':
            return '::' + u(e.name)
          case 'pseudo':
            return null === e.data
              ? ':' + u(e.name)
              : 'string' === typeof e.data
              ? ':' + u(e.name) + '(' + u(e.data) + ')'
              : ':' + u(e.name) + '(' + i(e.data) + ')'
          case 'attribute':
            if (
              'id' === e.name &&
              'equals' === e.action &&
              !e.ignoreCase &&
              !e.namespace
            )
              return '#' + u(e.value)
            if (
              'class' === e.name &&
              'element' === e.action &&
              !e.ignoreCase &&
              !e.namespace
            )
              return '.' + u(e.value)
            var t = s(e)
            return 'exists' === e.action
              ? '[' + t + ']'
              : '[' +
                  t +
                  n[e.action] +
                  "='" +
                  u(e.value) +
                  "'" +
                  (e.ignoreCase ? 'i' : !1 === e.ignoreCase ? 's' : '') +
                  ']'
        }
      }
      function s(e) {
        return '' + l(e.namespace) + u(e.name)
      }
      function l(e) {
        return null !== e ? ('*' === e ? '*' : u(e)) + '|' : ''
      }
      function u(e) {
        return e
          .split('')
          .map(function (e) {
            return o.has(e) ? '\\' + e : e
          })
          .join('')
      }
      t.default = i
    },
    3506: function (e) {
      'use strict'
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, c) {
          'single' !=
            (c = (function (e, r) {
              if (!e) return r
              var n = {}
              for (var o in r) n[o] = t.call(e, o) ? e[o] : r[o]
              return n
            })(c, e.options)).quotes &&
            'double' != c.quotes &&
            (c.quotes = 'single')
          for (
            var a = 'double' == c.quotes ? '"' : "'",
              s = c.isIdentifier,
              l = i.charAt(0),
              u = '',
              p = 0,
              f = i.length;
            p < f;

          ) {
            var b = i.charAt(p++),
              y = b.charCodeAt(),
              O = void 0
            if (y < 32 || y > 126) {
              if (y >= 55296 && y <= 56319 && p < f) {
                var g = i.charCodeAt(p++)
                56320 == (64512 & g)
                  ? (y = ((1023 & y) << 10) + (1023 & g) + 65536)
                  : p--
              }
              O = '\\' + y.toString(16).toUpperCase() + ' '
            } else
              O = c.escapeEverything
                ? r.test(b)
                  ? '\\' + b
                  : '\\' + y.toString(16).toUpperCase() + ' '
                : /[\t\n\f\r\x0B]/.test(b)
                ? '\\' + y.toString(16).toUpperCase() + ' '
                : '\\' == b ||
                  (!s && (('"' == b && a == b) || ("'" == b && a == b))) ||
                  (s && n.test(b))
                ? '\\' + b
                : b
            u += O
          }
          return (
            s &&
              (/^-[-\d]/.test(u)
                ? (u = '\\-' + u.slice(1))
                : /\d/.test(l) && (u = '\\3' + l + ' ' + u.slice(1))),
            (u = u.replace(o, function (e, t, r) {
              return t && t.length % 2 ? e : (t || '') + r
            })),
            !s && c.wrap ? a + u + a : u
          )
        }
      ;(i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: 'single',
        wrap: !1,
      }),
        (i.version = '3.0.0'),
        (e.exports = i)
    },
    5689: function (e, t, r) {
      var n, o, i
      ;(o = [e, t, r(3921)]),
        void 0 ===
          (i =
            'function' ===
            typeof (n = function (e, t, r) {
              'use strict'
              function n(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                )
              }
              Object.defineProperty(t, '__esModule', { value: !0 })
              var o =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n])
                    }
                    return e
                  },
                i = function e(t, i) {
                  if (t === i || !(0, r.isObject)(t) || !(0, r.isObject)(i))
                    return {}
                  var c = (0, r.properObject)(t),
                    a = (0, r.properObject)(i)
                  return Object.keys(a).reduce(function (t, i) {
                    if (c.hasOwnProperty(i)) {
                      var s = e(c[i], a[i])
                      return (0, r.isObject)(s) && (0, r.isEmpty)(s)
                        ? t
                        : o({}, t, n({}, i, s))
                    }
                    return o({}, t, n({}, i, a[i]))
                  }, {})
                }
              ;(t.default = i), (e.exports = t.default)
            })
              ? n.apply(t, o)
              : n) || (e.exports = i)
    },
    1511: function (e, t, r) {
      var n, o, i
      ;(o = [e, t, r(3921)]),
        void 0 ===
          (i =
            'function' ===
            typeof (n = function (e, t, r) {
              'use strict'
              function n(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                )
              }
              Object.defineProperty(t, '__esModule', { value: !0 })
              var o =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n])
                    }
                    return e
                  },
                i = function e(t, i) {
                  if (t === i || !(0, r.isObject)(t) || !(0, r.isObject)(i))
                    return {}
                  var c = (0, r.properObject)(t),
                    a = (0, r.properObject)(i)
                  return Object.keys(c).reduce(function (t, i) {
                    if (a.hasOwnProperty(i)) {
                      var s = e(c[i], a[i])
                      return (0, r.isObject)(s) && (0, r.isEmpty)(s)
                        ? t
                        : o({}, t, n({}, i, s))
                    }
                    return o({}, t, n({}, i, void 0))
                  }, {})
                }
              ;(t.default = i), (e.exports = t.default)
            })
              ? n.apply(t, o)
              : n) || (e.exports = i)
    },
    397: function (e, t, r) {
      var n, o, i
      ;(o = [e, t, r(5689), r(1511), r(858)]),
        void 0 ===
          (i =
            'function' ===
            typeof (n = function (e, t, r, n, o) {
              'use strict'
              Object.defineProperty(t, '__esModule', { value: !0 })
              var i = s(r),
                c = s(n),
                a = s(o)
              function s(e) {
                return e && e.__esModule ? e : { default: e }
              }
              var l = function (e, t) {
                return {
                  added: (0, i.default)(e, t),
                  deleted: (0, c.default)(e, t),
                  updated: (0, a.default)(e, t),
                }
              }
              ;(t.default = l), (e.exports = t.default)
            })
              ? n.apply(t, o)
              : n) || (e.exports = i)
    },
    7839: function (e, t, r) {
      var n, o, i
      ;(o = [e, t, r(3921)]),
        void 0 ===
          (i =
            'function' ===
            typeof (n = function (e, t, r) {
              'use strict'
              function n(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                )
              }
              Object.defineProperty(t, '__esModule', { value: !0 })
              var o =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n])
                    }
                    return e
                  },
                i = function e(t, i) {
                  if (t === i) return {}
                  if (!(0, r.isObject)(t) || !(0, r.isObject)(i)) return i
                  var c = (0, r.properObject)(t),
                    a = (0, r.properObject)(i),
                    s = Object.keys(c).reduce(function (e, t) {
                      return a.hasOwnProperty(t)
                        ? e
                        : o({}, e, n({}, t, void 0))
                    }, {})
                  return (0, r.isDate)(c) || (0, r.isDate)(a)
                    ? c.valueOf() == a.valueOf()
                      ? {}
                      : a
                    : Object.keys(a).reduce(function (t, i) {
                        if (!c.hasOwnProperty(i))
                          return o({}, t, n({}, i, a[i]))
                        var s = e(c[i], a[i])
                        return (0, r.isObject)(s) &&
                          (0, r.isEmpty)(s) &&
                          !(0, r.isDate)(s)
                          ? t
                          : o({}, t, n({}, i, s))
                      }, s)
                }
              ;(t.default = i), (e.exports = t.default)
            })
              ? n.apply(t, o)
              : n) || (e.exports = i)
    },
    190: function (e, t, r) {
      var n, o, i
      ;(o = [t, r(7839), r(5689), r(1511), r(858), r(397)]),
        void 0 ===
          (i =
            'function' ===
            typeof (n = function (e, t, r, n, o, i) {
              'use strict'
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.detailedDiff =
                  e.updatedDiff =
                  e.deletedDiff =
                  e.diff =
                  e.addedDiff =
                    void 0)
              var c = p(t),
                a = p(r),
                s = p(n),
                l = p(o),
                u = p(i)
              function p(e) {
                return e && e.__esModule ? e : { default: e }
              }
              ;(e.addedDiff = a.default),
                (e.diff = c.default),
                (e.deletedDiff = s.default),
                (e.updatedDiff = l.default),
                (e.detailedDiff = u.default)
            })
              ? n.apply(t, o)
              : n) || (e.exports = i)
    },
    858: function (e, t, r) {
      var n, o, i
      ;(o = [e, t, r(3921)]),
        void 0 ===
          (i =
            'function' ===
            typeof (n = function (e, t, r) {
              'use strict'
              function n(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                )
              }
              Object.defineProperty(t, '__esModule', { value: !0 })
              var o =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n])
                    }
                    return e
                  },
                i = function e(t, i) {
                  if (t === i) return {}
                  if (!(0, r.isObject)(t) || !(0, r.isObject)(i)) return i
                  var c = (0, r.properObject)(t),
                    a = (0, r.properObject)(i)
                  return (0, r.isDate)(c) || (0, r.isDate)(a)
                    ? c.valueOf() == a.valueOf()
                      ? {}
                      : a
                    : Object.keys(a).reduce(function (t, i) {
                        if (c.hasOwnProperty(i)) {
                          var s = e(c[i], a[i])
                          return (0, r.isObject)(s) &&
                            (0, r.isEmpty)(s) &&
                            !(0, r.isDate)(s)
                            ? t
                            : o({}, t, n({}, i, s))
                        }
                        return t
                      }, {})
                }
              ;(t.default = i), (e.exports = t.default)
            })
              ? n.apply(t, o)
              : n) || (e.exports = i)
    },
    3921: function (e, t) {
      var r, n, o
      ;(n = [t]),
        void 0 ===
          (o =
            'function' ===
            typeof (r = function (e) {
              'use strict'
              Object.defineProperty(e, '__esModule', { value: !0 })
              var t =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n])
                    }
                    return e
                  },
                r =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (e) {
                        return typeof e
                      }
                    : function (e) {
                        return e &&
                          'function' === typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e
                      },
                n =
                  ((e.isDate = function (e) {
                    return e instanceof Date
                  }),
                  (e.isEmpty = function (e) {
                    return 0 === Object.keys(e).length
                  }),
                  (e.isObject = function (e) {
                    return (
                      null != e &&
                      'object' ===
                        ('undefined' === typeof e ? 'undefined' : r(e))
                    )
                  }))
              e.properObject = function (e) {
                return n(e) && !e.hasOwnProperty ? t({}, e) : e
              }
            })
              ? r.apply(t, n)
              : r) || (e.exports = o)
    },
    9996: function (e) {
      'use strict'
      var t = function (e) {
        return (
          (function (e) {
            return !!e && 'object' === typeof e
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e)
            return (
              '[object RegExp]' === t ||
              '[object Date]' === t ||
              (function (e) {
                return e.$$typeof === r
              })(e)
            )
          })(e)
        )
      }
      var r =
        'function' === typeof Symbol && Symbol.for
          ? Symbol.for('react.element')
          : 60103
      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? s(((r = e), Array.isArray(r) ? [] : {}), e, t)
          : e
        var r
      }
      function o(e, t, r) {
        return e.concat(t).map(function (e) {
          return n(e, r)
        })
      }
      function i(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return e.propertyIsEnumerable(t)
                })
              : []
          })(e)
        )
      }
      function c(e, t) {
        try {
          return t in e
        } catch (r) {
          return !1
        }
      }
      function a(e, t, r) {
        var o = {}
        return (
          r.isMergeableObject(e) &&
            i(e).forEach(function (t) {
              o[t] = n(e[t], r)
            }),
          i(t).forEach(function (i) {
            ;(function (e, t) {
              return (
                c(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              )
            })(e, i) ||
              (c(e, i) && r.isMergeableObject(t[i])
                ? (o[i] = (function (e, t) {
                    if (!t.customMerge) return s
                    var r = t.customMerge(e)
                    return 'function' === typeof r ? r : s
                  })(i, r)(e[i], t[i], r))
                : (o[i] = n(t[i], r)))
          }),
          o
        )
      }
      function s(e, r, i) {
        ;((i = i || {}).arrayMerge = i.arrayMerge || o),
          (i.isMergeableObject = i.isMergeableObject || t),
          (i.cloneUnlessOtherwiseSpecified = n)
        var c = Array.isArray(r)
        return c === Array.isArray(e)
          ? c
            ? i.arrayMerge(e, r, i)
            : a(e, r, i)
          : n(r, i)
      }
      s.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error('first argument should be an array')
        return e.reduce(function (e, r) {
          return s(e, r, t)
        }, {})
      }
      var l = s
      e.exports = l
    },
    395: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return y
          },
        })
      var n = r(2809),
        o = r(6311),
        i = r(7294),
        c = r(3794),
        a = r(4271),
        s = r.n(a),
        l = r(5893),
        u = ['gmail.com', 'yandex.ru', 'ya.ru'],
        p = function () {
          var e = (0, i.useState)(''),
            t = e[0],
            r = e[1],
            n = (0, i.useState)(!1),
            a = n[0],
            p = n[1],
            f = (0, i.useMemo)(
              function () {
                var e = t.split('@'),
                  r = (0, o.Z)(e, 1)[0],
                  n = void 0 === r ? '' : r
                return n
                  ? u.map(function (e) {
                      return ''.concat(n, '@').concat(e)
                    })
                  : []
              },
              [t]
            ),
            b = (0, i.useCallback)(function (e) {
              var t = e.target.value
              r(t)
            }, []),
            y = (0, i.useCallback)(
              function (e) {
                e.preventDefault(),
                  a ||
                    p(function (e) {
                      return (
                        setTimeout(function () {
                          p(e)
                        }, 5e3),
                        !e
                      )
                    })
              },
              [a]
            )
          return (0, l.jsxs)('footer', {
            className: s().footer,
            children: [
              (0, l.jsx)(c.H2, {
                textAlign: 'center',
                children:
                  '\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u043b\u043e\u0433\u0430',
              }),
              (0, l.jsxs)('form', {
                className: s().form,
                onSubmit: y,
                children: [
                  (0, l.jsxs)('label', {
                    className: s().label,
                    children: [
                      (0, l.jsx)('span', {
                        className: 'sr-only',
                        children: 'Email',
                      }),
                      (0, l.jsx)('input', {
                        name: 'email',
                        type: 'email',
                        required: !0,
                        'aria-required': 'true',
                        placeholder: 'ivanov@gmail.com',
                        className: s().input,
                        value: t,
                        onChange: b,
                        list: 'emailList',
                      }),
                      (0, l.jsx)('datalist', {
                        id: 'emailList',
                        children: f.map(function (e) {
                          return (0, l.jsx)('option', { value: e }, e)
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)('button', {
                    className: s().button,
                    children:
                      '\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f',
                  }),
                ],
              }),
              (0, l.jsx)('hr', { className: s().hr }),
              (0, l.jsxs)('ul', {
                className: s().list,
                children: [
                  (0, l.jsx)('li', {
                    className: s().item,
                    children: (0, l.jsx)('a', {
                      href: '/',
                      className: s().link,
                      children: (0, l.jsx)('svg', {
                        viewBox: '0 0 48 48',
                        children: (0, l.jsx)('path', {
                          d: 'M47.761,24c0,13.121-10.638,23.76-23.758,23.76C10.877,47.76,0.239,37.121,0.239,24c0-13.124,10.638-23.76,23.764-23.76C37.123,0.24,47.761,10.876,47.761,24 M20.033,38.85H26.2V24.01h4.163l0.539-5.242H26.2v-3.083c0-1.156,0.769-1.427,1.308-1.427h3.318V9.168L26.258,9.15c-5.072,0-6.225,3.796-6.225,6.224v3.394H17.1v5.242h2.933V38.85z',
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)('li', {
                    className: s().item,
                    children: (0, l.jsx)('a', {
                      href: '/',
                      className: s().link,
                      children: (0, l.jsx)('svg', {
                        viewBox: '0 0 48 48',
                        children: (0, l.jsx)('path', {
                          d: 'M47.762,24c0,13.121-10.639,23.76-23.761,23.76S0.24,37.121,0.24,24c0-13.124,10.639-23.76,23.761-23.76 S47.762,10.876,47.762,24 M38.031,12.375c-1.177,0.7-2.481,1.208-3.87,1.481c-1.11-1.186-2.694-1.926-4.455-1.926 c-3.364,0-6.093,2.729-6.093,6.095c0,0.478,0.054,0.941,0.156,1.388c-5.063-0.255-9.554-2.68-12.559-6.367 c-0.524,0.898-0.825,1.947-0.825,3.064c0,2.113,1.076,3.978,2.711,5.07c-0.998-0.031-1.939-0.306-2.761-0.762v0.077 c0,2.951,2.1,5.414,4.889,5.975c-0.512,0.14-1.05,0.215-1.606,0.215c-0.393,0-0.775-0.039-1.146-0.109 c0.777,2.42,3.026,4.182,5.692,4.232c-2.086,1.634-4.712,2.607-7.567,2.607c-0.492,0-0.977-0.027-1.453-0.084 c2.696,1.729,5.899,2.736,9.34,2.736c11.209,0,17.337-9.283,17.337-17.337c0-0.263-0.004-0.527-0.017-0.789 c1.19-0.858,2.224-1.932,3.039-3.152c-1.091,0.485-2.266,0.811-3.498,0.958C36.609,14.994,37.576,13.8,38.031,12.375',
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)('li', {
                    className: s().item,
                    children: (0, l.jsx)('a', {
                      href: '/',
                      className: s().link,
                      children: (0, l.jsxs)('svg', {
                        viewBox: '0 0 30 30',
                        children: [
                          (0, l.jsx)('path', {
                            d: 'M15,11.014 C12.801,11.014 11.015,12.797 11.015,15 C11.015,17.202 12.802,18.987 15,18.987 C17.199,18.987 18.987,17.202 18.987,15 C18.987,12.797 17.199,11.014 15,11.014 L15,11.014 Z M15,17.606 C13.556,17.606 12.393,16.439 12.393,15 C12.393,13.561 13.556,12.394 15,12.394 C16.429,12.394 17.607,13.561 17.607,15 C17.607,16.439 16.444,17.606 15,17.606 L15,17.606 Z',
                          }),
                          (0, l.jsx)('path', {
                            d: 'M19.385,9.556 C18.872,9.556 18.465,9.964 18.465,10.477 C18.465,10.989 18.872,11.396 19.385,11.396 C19.898,11.396 20.306,10.989 20.306,10.477 C20.306,9.964 19.897,9.556 19.385,9.556 L19.385,9.556 Z',
                          }),
                          (0, l.jsx)('path', {
                            d: 'M15.002,0.15 C6.798,0.15 0.149,6.797 0.149,15 C0.149,23.201 6.798,29.85 15.002,29.85 C23.201,29.85 29.852,23.202 29.852,15 C29.852,6.797 23.201,0.15 15.002,0.15 L15.002,0.15 Z M22.666,18.265 C22.666,20.688 20.687,22.666 18.25,22.666 L11.75,22.666 C9.312,22.666 7.333,20.687 7.333,18.28 L7.333,11.734 C7.333,9.312 9.311,7.334 11.75,7.334 L18.25,7.334 C20.688,7.334 22.666,9.312 22.666,11.734 L22.666,18.265 L22.666,18.265 Z',
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)('li', {
                    className: s().item,
                    children: (0, l.jsx)('a', {
                      href: '/',
                      className: s().link,
                      children: (0, l.jsx)('svg', {
                        viewBox: '0 0 49 48',
                        children: (0, l.jsx)('path', {
                          d: 'M49 24C49 37.254 38.254 48 25.001 48C11.744 48 0.997986 37.254 0.997986 24C0.997986 10.744 11.744 0 25.001 0C38.254 0 49 10.744 49 24ZM18.372 38.811C18.399 39.016 18.662 39.065 18.781 38.911C18.951 38.688 21.146 35.979 21.892 33.272C22.103 32.504 23.104 28.534 23.104 28.534C23.703 29.679 25.453 30.682 27.314 30.682C32.853 30.682 36.611 25.633 36.611 18.873C36.611 13.762 32.282 9 25.702 9C17.516 9 13.388 14.871 13.388 19.766C13.388 22.729 14.51 25.366 16.915 26.348C17.31 26.51 17.664 26.354 17.778 25.918C17.858 25.615 18.046 24.853 18.131 24.533C18.245 24.101 18.201 23.951 17.883 23.574C17.189 22.756 16.745 21.695 16.745 20.193C16.745 15.84 20.004 11.941 25.229 11.941C29.856 11.941 32.398 14.769 32.398 18.544C32.398 23.513 30.2 27.706 26.937 27.706C25.133 27.706 23.784 26.216 24.215 24.386C24.733 22.204 25.737 19.849 25.737 18.273C25.737 16.863 24.979 15.685 23.413 15.685C21.57 15.685 20.09 17.593 20.09 20.146C20.09 21.773 20.64 22.873 20.64 22.873C20.64 22.873 18.754 30.863 18.423 32.264C17.766 35.051 18.324 38.467 18.372 38.811Z',
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              a &&
                (0, l.jsx)('div', {
                  className: s().alert,
                  'aria-live': 'assertive',
                  children:
                    '\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0430',
                }),
            ],
          })
        }
      r(3146)
      function f(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var y = function (e) {
        var t = e.Component,
          r = e.pageProps
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(t, b({}, r)), (0, l.jsx)(p, {})],
        })
      }
    },
    7104: function (e, t, r) {
      'use strict'
      r.d(t, {
        oM: function () {
          return u
        },
        sS: function () {
          return d
        },
        Lu: function () {
          return k
        },
        KN: function () {
          return Z
        },
      })
      var n = r(2809),
        o = r(6034),
        i = r(1206),
        c = r(1264)
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o.xA('src/CSS/aspectRatio/styles.css.ts', 'setUI')
      c.b.apply(void 0, [
        'content',
        '1x1',
        '9x16',
        '4x3',
        'auto',
        'inherit',
        'initial',
        'unset',
      ])
      var l = (0, i.DA)(
          {
            content: 'attr(width) / attr(height)',
            '1x1': '1 / 1',
            '16x9': '16 / 9',
            '4x3': '4 / 3',
            auto: 'auto',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
          },
          function (e) {
            return { aspectRatio: e }
          },
          'Styles'
        ),
        u = s(s({}, l), {}, { default: l.auto })
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o._K(), o.xA('src/CSS/boxShadow/styles.css.ts', 'setUI')
      c.b.numeric.apply(c.b, [4, 8, 16, 64])
      var b = (0, i.DA)(
        {
          4: '0px 0.3px  0.9px rgba(0, 0, 0, 0.1 ), 0px  1.6px  3.6px rgba(0, 0, 0, 0.13)',
          8: '0px 0.6px  1.8px rgba(0, 0, 0, 0.1 ), 0px  3.2px  7.2px rgba(0, 0, 0, 0.13)',
          16: '0px 1.2px  3.6px rgba(0, 0, 0, 0.1 ), 0px  6.4px 14.4px rgba(0, 0, 0, 0.13)',
          64: '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)',
        },
        function (e) {
          return { boxShadow: e }
        },
        'Styles'
      )
      f(f({}, b), {}, { default: b[4] })
      function y(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o._K(), o.xA('src/CSS/display/styles.css.ts', 'setUI')
      c.b.apply(void 0, [
        'block',
        'inline',
        'inline',
        'flex',
        'inline',
        'grid',
        'inline',
        'flow',
        'none',
        'contents',
        'block_flow',
        'inline_flow',
        'inline_flowRoot',
        'block_flex',
        'inline_flex',
        'block_grid',
        'inline_grid',
        'block_flowRoot',
        'table',
        'table',
        'list',
        'inherit',
        'initial',
        'unset',
      ])
      var g = (0, i.DA)(
          {
            block: 'block',
            inline: 'inline',
            inlineBlock: 'inline-block',
            flex: 'flex',
            inlineFlex: 'inline-flex',
            grid: 'grid',
            inlineGrid: 'inline-grid',
            flowRoot: 'flow-root',
            none: 'none',
            contents: 'contents',
            block_flow: 'block flow',
            inline_flow: 'inline flow',
            inline_flowRoot: 'inline flow-root',
            block_flex: 'block flex',
            inline_flex: 'inline flex',
            block_grid: 'block grid',
            inline_grid: 'inline grid',
            block_flowRoot: 'block flow-root',
            table: 'table',
            tableRow: 'table-row',
            listItem: 'list-item',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
          },
          function (e) {
            return { display: e }
          },
          'Styles'
        ),
        d = O(O({}, g), {}, { default: g.block })
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
      function m(e) {
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
      o._K(), o.xA('src/CSS/opacity/styles.css.ts', 'setUI')
      c.b.numeric.apply(c.b, [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      var j = (0, i.DA)(
        {
          0: '0',
          10: '.1',
          20: '.2',
          30: '.3',
          40: '.4',
          50: '.5',
          60: '.6',
          70: '.7',
          80: '.8',
          90: '.9',
          100: '1',
        },
        function (e) {
          return { opacity: e }
        },
        'Styles'
      )
      m(m({}, j), {}, { default: j[0] })
      function v(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o._K(), o.xA('src/CSS/position/styles.css.ts', 'setUI')
      c.b.apply(void 0, ['static', 'relative', 'absolute', 'sticky', 'fixed'])
      var w = (0, i.DA)(
        {
          static: 'static',
          relative: 'relative',
          absolute: 'absolute',
          sticky: 'sticky',
          fixed: 'fixed',
        },
        function (e) {
          return { position: e }
        },
        'Styles'
      )
      P(P({}, w), {}, { default: w.static })
      function x(e, t) {
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
            ? x(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o._K(), o.xA('src/CSS/width/styles.css.ts', 'setUI')
      c.b.apply(void 0, [
        'max-content',
        'min-content',
        'auto',
        'inherit',
        'initial',
        'unset',
      ])
      var D = (0, i.DA)(
          {
            maxContent: 'max-content',
            minContent: 'min-content',
            auto: 'auto',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
          },
          function (e) {
            return { width: e }
          },
          'Styles'
        ),
        k = S(S({}, D), {}, { default: D.auto, initial: D.auto })
      function C(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o._K(), o.xA('src/CSS/zIndex/styles.css.ts', 'setUI')
      c.b.mixed.apply(c.b, [
        0,
        1,
        2,
        'dropdownBackdrop',
        'dropdown',
        'sticky',
        'modalBackdrop',
        'modal',
        'notification',
      ])
      var A = (0, i.DA)(
          {
            0: 0,
            1: 1,
            2: 2,
            dropdownBackdrop: 8,
            dropdown: 16,
            sticky: 32,
            modalBackdrop: 64,
            modal: 128,
            notification: 256,
          },
          function (e) {
            return { zIndex: e }
          },
          'Styles'
        ),
        Z = E(E({}, A), {}, { default: A[0] })
      o._K()
    },
    1905: function (e, t, r) {
      'use strict'
      r.d(t, {
        _h: function () {
          return f
        },
        m_: function () {
          return h
        },
        $n: function () {
          return x
        },
        y5: function () {
          return A
        },
        Kg: function () {
          return F
        },
        ZP: function () {
          return M
        },
      })
      var n = r(8216),
        o = r(5997),
        i = r(2809),
        c = r(6034),
        a = r(1206),
        s = r(1264)
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c.xA('src/layers/Flex/alignContent/styles.css.ts', 'setUI')
      var p = [
          'center',
          'start',
          'end',
          'flexStart',
          'flexEnd',
          'normal',
          'baseline',
          'firstBaseline',
          'lastBaseline',
          'spaceBetween',
          'spaceAround',
          'spaceEvenly',
          'stretch',
          'safeCenter',
          'unsafeCenter',
          'unset',
          'normal',
        ],
        f =
          (s.b.apply(void 0, p),
          {
            center: 'center',
            start: 'start',
            end: 'end',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            normal: 'normal',
            baseline: 'baseline',
            firstBaseline: 'first baseline',
            lastBaseline: 'last baseline',
            spaceBetween: 'space-between',
            spaceAround: 'space-around',
            spaceEvenly: 'space-evenly',
            stretch: 'stretch',
            safeCenter: 'safe center',
            unsafeCenter: 'unsafe center',
            unset: 'unset',
          }),
        b = (0, a.DA)(
          f,
          function (e) {
            return { alignContent: e }
          },
          'Styles'
        ),
        y = u(u({}, b), {}, { default: b.normal })
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      }
      c._K(), c.xA('src/layers/Flex/alignItems/styles.css.ts', 'setUI')
      var d = [
          'normal',
          'stretch',
          'center',
          'start',
          'end',
          'flexStart',
          'flexEnd',
          'baseline',
          'firstBaseline',
          'lastBaseline',
          'safeCenter',
          'unsafeCenter',
          'unset',
        ],
        h =
          (s.b.apply(void 0, d),
          {
            normal: 'normal',
            stretch: 'stretch',
            center: 'center',
            start: 'start',
            end: 'end',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            baseline: 'baseline',
            firstBaseline: 'first baseline',
            lastBaseline: 'last baseline',
            safeCenter: 'safe center',
            unsafeCenter: 'unsafe center',
            unset: 'unset',
          }),
        m = (0, a.DA)(
          h,
          function (e) {
            return { alignItems: e }
          },
          'Styles'
        ),
        j = g(g({}, m), {}, { default: m.stretch })
      function v(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Flex/flexDirection/styles.css.ts', 'setUI')
      var w = ['row', 'rowReverse', 'column', 'columnReverse'],
        x =
          (s.b.apply(void 0, w),
          {
            row: 'row',
            rowReverse: 'row-reverse',
            column: 'column',
            columnReverse: 'column-reverse',
          }),
        S = (0, a.DA)(
          x,
          function (e) {
            return { flexDirection: e }
          },
          'Styles'
        ),
        D = P(P({}, S), {}, { default: S.row })
      function k(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Flex/flexWrap/styles.css.ts', 'setUI')
      var E = ['nowrap', 'wrap', 'wrap-reverse'],
        A =
          (s.b.apply(void 0, E),
          { nowrap: 'nowrap', wrap: 'wrap', wrapReverse: 'wrap-reverse' }),
        Z = (0, a.DA)(
          A,
          function (e) {
            return { flexWrap: e }
          },
          'Styles'
        ),
        N = C(C({}, Z), {}, { default: Z.nowrap })
      function _(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Flex/gap/styles.css.ts', 'setUI')
      var T = [
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
        I =
          (s.b.apply(void 0, T),
          (0, a.DA)(
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
              return { '--gap': e, gap: e }
            },
            'Styles'
          )),
        R = B(B({}, I), {}, { default: I.none })
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : W(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Flex/justifyContent/styles.css.ts', 'setUI')
      var L = [
          'center',
          'start',
          'end',
          'flexStart',
          'flexEnd',
          'left',
          'right',
          'normal',
          'spaceBetween',
          'spaceAround',
          'spaceEvenly',
          'stretch',
          'safeCenter',
          'unsafeCenter',
        ],
        F =
          (s.b.apply(void 0, L),
          {
            center: 'center',
            start: 'start',
            end: 'end',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            left: 'left',
            right: 'right',
            normal: 'normal',
            spaceBetween: 'space-between',
            spaceAround: 'space-around',
            spaceEvenly: 'space-evenly',
            stretch: 'stretch',
            safeCenter: 'safe center',
            unsafeCenter: 'unsafe center',
            unset: 'unset',
          }),
        U = (0, a.DA)(
          F,
          function (e) {
            return { justifyContent: e }
          },
          'Styles'
        ),
        K = z(z({}, U), {}, { default: U.flexStart })
      c._K()
      var M = (function () {
        function e() {
          ;(0, n.Z)(this, e),
            (0, i.Z)(this, 'CSSalignContent', void 0),
            (0, i.Z)(this, 'CSSalignItems', void 0),
            (0, i.Z)(this, 'CSSflexDirection', void 0),
            (0, i.Z)(this, 'CSSflexWrap', void 0),
            (0, i.Z)(this, 'CSSgap', void 0),
            (0, i.Z)(this, 'CSSjustifyContent', void 0)
        }
        return (
          (0, o.Z)(e, [
            {
              key: 'set',
              value: function (e) {
                return (
                  (this.CSSalignContent = (function (e) {
                    switch (!0) {
                      case 'alignContent' in e:
                        return e.alignContent
                      default:
                        return
                    }
                  })(e)),
                  (this.CSSalignItems = (function (e) {
                    switch (!0) {
                      case 'alignItems' in e:
                        return e.alignItems
                      default:
                        return
                    }
                  })(e)),
                  (this.CSSflexDirection = (function (e) {
                    switch (!0) {
                      case 'flexDirection' in e:
                        return e.flexDirection
                      default:
                        return
                    }
                  })(e)),
                  (this.CSSflexWrap = (function (e) {
                    switch (!0) {
                      case 'flexWrap' in e:
                        return e.flexWrap
                      default:
                        return
                    }
                  })(e)),
                  (this.CSSgap = (function (e) {
                    switch (!0) {
                      case 'gap' in e:
                        return e.gap
                      default:
                        return
                    }
                  })(e)),
                  (this.CSSjustifyContent = (function (e) {
                    switch (!0) {
                      case 'justifyContent' in e:
                        return e.justifyContent
                      default:
                        return
                    }
                  })(e)),
                  this
                )
              },
            },
            {
              key: 'alignContent',
              get: function () {
                return y[this.CSSalignContent]
              },
            },
            {
              key: 'alignItems',
              get: function () {
                return j[this.CSSalignItems]
              },
            },
            {
              key: 'flexDirection',
              get: function () {
                return D[this.CSSflexDirection]
              },
            },
            {
              key: 'flexWrap',
              get: function () {
                return N[this.CSSflexWrap]
              },
            },
            {
              key: 'gap',
              get: function () {
                return R[this.CSSgap]
              },
            },
            {
              key: 'justifyContent',
              get: function () {
                return K[this.CSSjustifyContent]
              },
            },
            {
              key: 'box',
              get: function () {
                return [
                  this.alignContent,
                  this.alignItems,
                  this.flexDirection,
                  this.flexWrap,
                  this.gap,
                  this.justifyContent,
                ]
                  .filter(Boolean)
                  .join(' ')
              },
            },
          ]),
          e
        )
      })()
    },
    9387: function (e, t, r) {
      'use strict'
      r.d(t, {
        bt: function () {
          return p
        },
        u8: function () {
          return l
        },
        Bf: function () {
          return m
        },
        hf: function () {
          return v
        },
        A9: function () {
          return g
        },
        k5: function () {
          return d
        },
        Hd: function () {
          return k
        },
        Cp: function () {
          return S
        },
        U9: function () {
          return B
        },
        Zq: function () {
          return Z
        },
        m6: function () {
          return N
        },
        hT: function () {
          return f
        },
        TK: function () {
          return j
        },
        ec: function () {
          return C
        },
        d6: function () {
          return T
        },
        V1: function () {
          return P
        },
      })
      var n = r(2809),
        o = r(6034),
        i = r(1206),
        c = r(1264)
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o.xA('src/layers/Text/font/family/styles.css.ts', 'setUI')
      var l = ['primary', 'monospace'],
        u =
          (c.b.apply(void 0, l),
          (0, i.DA)(
            {
              primary: "'Montserrat', Arial, sans-serif",
              monospace: 'monospace',
            },
            function (e) {
              return { fontFamily: e }
            },
            'Styles'
          )),
        p = s(s({}, u), {}, { default: u.primary })
      function f(e) {
        switch (!0) {
          case 'fontFamily' in e:
            return e.fontFamily
          default:
            return
        }
      }
      o._K()
      var b = r(7294)
      function y(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      o.xA('src/layers/Text/font/size/styles.css.ts', 'setUI')
      var g = [
          'LAYOUT',
          'xxxsmall',
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
          'xxxlarge',
          'xxxxlarge',
          'smaller',
          'larger',
        ],
        d =
          (c.b.mixed.apply(c.b, g),
          {
            LAYOUT: { fontSize: 0, lineHeight: 0 },
            xxxsmall: {
              fontSize: 'clamp('
                .concat(0.5, 'rem, calc(')
                .concat(0.5, 'rem + ((1vw - 0.48rem) * 0.3472)), ')
                .concat(0.75, 'rem)'),
              lineHeight: 1,
            },
            xxsmall: {
              fontSize: 'clamp('
                .concat(0.625, 'rem, calc(')
                .concat(0.625, 'rem + ((1vw - 0.48rem) * 0.434)), ')
                .concat(0.9375, 'rem)'),
              lineHeight: 1,
            },
            xsmall: {
              fontSize: 'clamp('
                .concat(0.75, 'rem, calc(')
                .concat(0.75, 'rem + ((1vw - 0.48rem) * 0.5208)), ')
                .concat(1.125, 'rem)'),
              lineHeight: 1.2,
            },
            small: {
              fontSize: 'clamp('
                .concat(0.875, 'rem, calc(')
                .concat(0.875, 'rem + ((1vw - 0.48rem) * 0.6076)), ')
                .concat(1.3125, 'rem)'),
              lineHeight: 1.2,
            },
            medium: {
              fontSize: 'clamp('
                .concat(1, 'rem, calc(')
                .concat(1, 'rem + ((1vw - 0.48rem) * 0.6944)), ')
                .concat(1.5, 'rem)'),
              lineHeight: 1.2,
            },
            large: {
              fontSize: 'clamp('
                .concat(1.5, 'rem, calc(')
                .concat(1.5, 'rem + ((1vw - 0.48rem) * 1.0417)), ')
                .concat(2.25, 'rem)'),
              lineHeight: 1.2,
            },
            xlarge: {
              fontSize: 'clamp('
                .concat(2.25, 'rem, calc(')
                .concat(2.25, 'rem + ((1vw - 0.48rem) * 1.5625)), ')
                .concat(3.375, 'rem)'),
              lineHeight: 1,
            },
            xxlarge: {
              fontSize: 'clamp('
                .concat(3, 'rem, calc(')
                .concat(3, 'rem + ((1vw - 0.48rem) * 1.5625)), ')
                .concat(4.5, 'rem)'),
              lineHeight: 1,
            },
            xxxlarge: {
              fontSize: 'clamp('
                .concat(3.75, 'rem, calc(')
                .concat(3.75, 'rem + ((1vw - 0.48rem) * 2.6042)), ')
                .concat(5.625, 'rem)'),
              lineHeight: 1,
            },
            xxxxlarge: {
              fontSize: 'clamp('
                .concat(4.5, 'rem, calc(')
                .concat(4.5, 'rem + ((1vw - 0.48rem) * 3.125)), ')
                .concat(6.75, 'rem)'),
              lineHeight: 1,
            },
            smaller: { fontSize: 'smaller' },
            larger: { fontSize: 'larger' },
          }),
        h = (0, i.DA)(
          d,
          function (e) {
            return e
          },
          'Styles'
        ),
        m = O(O({}, h), {}, { default: h.medium, initial: h.medium })
      function j(e) {
        switch (!0) {
          case 'fontSize' in e:
            return e.fontSize
          default:
            return
        }
      }
      o._K()
      var v = (0, b.createContext)(void 0),
        P = function () {
          return (0, b.useContext)(v)
        }
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
      o.xA('src/layers/Text/font/style/styles.css.ts', 'setUI')
      var S = ['normal', 'italic', 'oblique', 'inherit', 'initial', 'unset'],
        D =
          (c.b.apply(void 0, S),
          (0, i.DA)(
            {
              normal: 'normal',
              italic: 'italic',
              oblique: 'oblique',
              inherit: 'inherit',
              initial: 'initial',
              unset: 'unset',
            },
            function (e) {
              return { fontStyle: e }
            },
            'Styles'
          )),
        k = x(x({}, D), {}, { default: D.normal, initial: D.normal })
      function C(e) {
        switch (!0) {
          case 'style' in e:
            return e.style
          default:
            return
        }
      }
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
      function A(e) {
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
      o._K(), o.xA('src/layers/Text/font/weight/styles.css.ts', 'setUI')
      var Z = [
          'thin',
          'extraLight',
          'light',
          'normal',
          'medium',
          'semiBold',
          'bold',
          'extraBold',
          'heavy',
          'lighter',
          'bolder',
          'inherit',
          'initial',
          'unset',
        ],
        N =
          (c.b.apply(void 0, Z),
          {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            heavy: 900,
            lighter: 'lighter',
            bolder: 'bolder',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
          }),
        _ = (0, i.DA)(
          N,
          function (e) {
            return { fontWeight: e }
          },
          'Styles'
        ),
        B = A(A({}, _), {}, { default: _.regular, initial: _.regular })
      function T(e) {
        switch (!0) {
          case 'fontWeight' in e:
            return e.fontWeight
          default:
            return
        }
      }
      o._K()
    },
    6260: function (e, t, r) {
      'use strict'
      r.d(t, {
        dx: function () {
          return O
        },
        hf: function () {
          return d.hf
        },
        ZP: function () {
          return le
        },
        rd: function () {
          return g
        },
        V1: function () {
          return d.V1
        },
      })
      var n = r(8216),
        o = r(5997),
        i = r(2809),
        c = r(7294),
        a = r(6034),
        s = r(1206),
        l = r(1264)
      function u(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a.xA('src/layers/Text/color/styles.css.ts', 'setUI')
      var f = ['primary', 'secondary', 'black', 'white'],
        b =
          (l.b.apply(void 0, f),
          (0, s.DA)(
            {
              primary: '#0078D4',
              secondary: '#2B88D8',
              black: '#000000',
              white: '#FFFFFF',
            },
            function (e) {
              return { color: e }
            },
            'Styles'
          )),
        y = p(p({}, b), {}, { default: b.primary, initial: b.inherit })
      a._K()
      var O = (0, c.createContext)(void 0),
        g = function () {
          return (0, c.useContext)(O)
        },
        d = r(9387)
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      a.xA('src/layers/Text/outline/styles.css.ts', 'setUI')
      var j = ['none', 'transparent', 'primary', 'black', 'white'],
        v =
          (l.b.apply(void 0, j),
          (0, s.DA)(
            {
              none: 'none',
              transparent: 'transparent',
              primary: '#0078D4',
              black: '#000000',
              white: '#FFFFFF',
            },
            function (e) {
              return { backgroundColor: e }
            },
            'Styles'
          )),
        P = m(m({}, v), {}, { default: v.none, initial: v.inherit })
      a._K(), a.xA('src/layers/Text/spacing/styles.css.ts', 'setUI')
      l.b.apply(void 0, [
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
      ])
      var w = {
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
      }
      function x(e, t) {
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
            ? x(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K(), a.xA('src/layers/Text/spacing/after/styles.css.ts', 'setUI')
      var D = (0, s.DA)(
          w,
          function (e) {
            return { paddingInlineEnd: e }
          },
          'Style'
        ),
        k = S(S({}, D), {}, { default: D.none })
      function C(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K(), a.xA('src/layers/Text/spacing/before/styles.css.ts', 'setUI')
      var A = (0, s.DA)(
          w,
          function (e) {
            return { paddingInlineStart: e }
          },
          'Style'
        ),
        Z = E(E({}, A), {}, { default: A.none })
      function N(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K(),
        a.xA('src/layers/Text/text/decorationColor/styles.css.ts', 'setUI')
      var B = [
          'currentColor',
          'primary',
          'secondary',
          'black',
          'white',
          'inherit',
          'initial',
          'unset',
        ],
        T =
          (l.b.apply(void 0, B),
          (0, s.DA)(
            {
              currentColor: 'currentColor',
              primary: '#0078D4',
              secondary: '#2B88D8',
              black: '#000000',
              white: '#FFFFFF',
              inherit: 'inherit',
              initial: 'initial',
              unset: 'unset',
            },
            function (e) {
              return { textDecorationColor: e }
            },
            'Styles'
          )),
        I = _(
          _({}, T),
          {},
          { default: T.currentColor, initial: T.currentColor }
        )
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K(), a.xA('src/layers/Text/text/decorationLine/styles.css.ts', 'setUI')
      var z = [
          'none',
          'underline',
          'overline',
          'lineThrough',
          'blink',
          'overline_lineThrough',
          'overline_underline',
          'lineThrough_underline',
          'overline_lineThrough_underline',
          'inherit',
          'initial',
          'unset',
        ],
        L =
          (l.b.apply(void 0, z),
          (0, s.DA)(
            {
              none: 'none',
              underline: 'underline',
              overline: 'overline',
              lineThrough: 'line-through',
              blink: 'blink',
              overline_lineThrough: 'overline line-through',
              overline_underline: 'overline underline',
              lineThrough_underline: 'line-through underline',
              overline_lineThrough_underline: 'overline line-through underline',
              inherit: 'inherit',
              initial: 'initial',
              unset: 'unset',
            },
            function (e) {
              return { textDecorationLine: e }
            },
            'Styles'
          )),
        F = W(W({}, L), {}, { default: L.unset })
      function U(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K(),
        a.xA('src/layers/Text/text/decorationStyle/styles.css.ts', 'setUI')
      var M = [
          'solid',
          'double',
          'dotted',
          'dashed',
          'wavy',
          'inherit',
          'initial',
          'unset',
        ],
        $ =
          (l.b.apply(void 0, M),
          (0, s.DA)(
            {
              solid: 'solid',
              double: 'double',
              dotted: 'dotted',
              dashed: 'dashed',
              wavy: 'wavy',
              inherit: 'inherit',
              initial: 'initial',
              unset: 'unset',
            },
            function (e) {
              return { textDecorationStyle: e }
            },
            'Styles'
          )),
        H = K(K({}, $), {}, { default: $.unset, initial: $.solid })
      function q(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K(),
        a.xA('src/layers/Text/text/decorationThickness/styles.css.ts', 'setUI')
      var X = [
          'auto',
          'fromFont',
          'thin',
          'light',
          'medium',
          'bold',
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
          'inherit',
          'initial',
          'unset',
        ],
        V =
          (l.b.mixed.apply(l.b, X),
          (0, s.DA)(
            {
              auto: 'auto',
              fromFont: 'from-font',
              thin: 1,
              light: 2,
              medium: 3,
              bold: 4,
              10: '10',
              20: '20',
              30: '30',
              40: '40',
              50: '50',
              60: '60',
              70: '70',
              80: '80',
              90: '90',
              100: '100',
              inherit: 'inherit',
              initial: 'initial',
              unset: 'unset',
            },
            function (e) {
              return { textDecorationThickness: e }
            },
            'Styles'
          )),
        Q = Y(Y({}, V), {}, { default: V.thin, initial: V.auto })
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      a._K(), a.xA('src/layers/Text/text/transform/styles.css.ts', 'setUI')
      var ee = [
          'none',
          'uppercase',
          'lowercase',
          'capitalize',
          'fullWidth',
          'fullSizeKana',
        ],
        te =
          (l.b.apply(void 0, ee),
          (0, s.DA)(
            {
              none: 'none',
              uppercase: 'uppercase',
              lowercase: 'lowercase',
              capitalize: 'capitalize',
              fullWidth: 'full-width',
              fullSizeKana: 'full-size-kana',
            },
            function (e) {
              return { textTransform: e }
            },
            'Styles'
          )),
        re = J(J({}, te), {}, { default: te.none })
      function ne(e, t) {
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
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ne(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      a._K()
      var ie = { color: { options: f, control: { type: 'select' } } },
        ce = {
          fontFamily: { options: d.u8, control: { type: 'select' } },
          fontSize: { options: d.A9, control: { type: 'select' } },
          fontStyle: { options: d.Cp, control: { type: 'select' } },
          fontWeight: { options: d.Zq, control: { type: 'select' } },
        },
        ae = { outline: { options: j, control: { type: 'select' } } },
        se = {
          textDecorationColor: { options: B, control: { type: 'select' } },
          textDecorationLine: { options: z, control: { type: 'select' } },
          textDecorationStyle: { options: M, control: { type: 'select' } },
          textDecorationThickness: { options: X, control: { type: 'select' } },
          textTransform: { options: ee, control: { type: 'select' } },
        },
        le =
          (oe(oe(oe(oe({}, ie), ce), ae), se),
          (function () {
            function e(t) {
              var r = this
              ;(0, n.Z)(this, e),
                (0, i.Z)(this, 'CSScolor', void 0),
                (0, i.Z)(this, 'CSSfontFamily', void 0),
                (0, i.Z)(this, 'CSSfontSize', void 0),
                (0, i.Z)(this, 'CSSfontStyle', void 0),
                (0, i.Z)(this, 'CSSfontWeight', void 0),
                (0, i.Z)(this, 'FontWeight', void 0),
                (0, i.Z)(this, 'fontWeightResolve', void 0),
                (0, i.Z)(this, 'CSSoutline', void 0),
                (0, i.Z)(this, 'spacing', void 0),
                (0, i.Z)(this, 'spacingBefore', void 0),
                (0, i.Z)(this, 'spacingAfter', void 0),
                (0, i.Z)(this, 'CSStextDecorationColor', void 0),
                (0, i.Z)(this, 'CSStextDecorationLine', void 0),
                (0, i.Z)(this, 'CSStextDecorationStyle', void 0),
                (0, i.Z)(this, 'CSStextDecorationThickness', void 0),
                (0, i.Z)(this, 'CSStextTransform', void 0),
                t && 'fontWeight' in t
                  ? ((this.fontWeightResolve = t.fontWeight.resolver),
                    (this.FontWeight = t.fontWeight.Style))
                  : ((this.fontWeightResolve = d.d6), (this.FontWeight = d.U9)),
                null !== t && void 0 !== t && t.useSpacing
                  ? (this.spacing = function () {
                      return [r.spacingBefore, r.spacingAfter]
                        .filter(Boolean)
                        .join(' ')
                    })
                  : (this.spacing = function () {
                      return ''
                    })
            }
            return (
              (0, o.Z)(e, [
                {
                  key: 'set',
                  value: function (e) {
                    ;(this.CSScolor = (function (e) {
                      switch (!0) {
                        case 'color' in e:
                          return e.color
                        default:
                          return
                      }
                    })(e)),
                      (this.CSSfontFamily = (0, d.hT)(e)),
                      (this.CSSfontSize = (0, d.TK)(e)),
                      (this.CSSfontStyle = (0, d.ec)(e)),
                      (this.CSSfontWeight = this.fontWeightResolve(e)),
                      (this.CSSoutline = (function (e) {
                        switch (!0) {
                          case 'outline' in e:
                            return e.outline
                          default:
                            return
                        }
                      })(e))
                    var t = (function (e) {
                      var t = Z.none
                      'spacingBefore' in e && e.spacingBefore
                        ? (t = Z[e.spacingBefore])
                        : 'spacing' in e && e.spacing && (t = Z[e.spacing])
                      var r = k.none
                      return (
                        'spacingAfter' in e && e.spacingAfter
                          ? (r = k[e.spacingAfter])
                          : 'spacing' in e && e.spacing && (r = k[e.spacing]),
                        { start: t, end: r }
                      )
                    })(e)
                    return (
                      (this.spacingBefore = t.start),
                      (this.spacingAfter = t.end),
                      (this.CSStextDecorationColor = (function (e) {
                        switch (!0) {
                          case 'textDecorationColor' in e:
                            return e.textDecorationColor
                          default:
                            return
                        }
                      })(e)),
                      (this.CSStextDecorationLine = (function (e) {
                        return 'overline' in e &&
                          'lineThrough' in e &&
                          'underline' in e
                          ? 'overline line-through underline'
                          : 'overline' in e && 'lineThrough' in e
                          ? 'overline line-through'
                          : 'overline' in e && 'underline' in e
                          ? 'overline underline'
                          : 'lineThrough' in e && 'underline' in e
                          ? 'line-through underline'
                          : 'overline' in e
                          ? 'overline'
                          : 'lineThrough' in e
                          ? 'line-through'
                          : 'underline' in e
                          ? 'underline'
                          : 'textDecorationLine' in e
                          ? e.textDecorationLine
                          : void 0
                      })(e)),
                      (this.CSStextDecorationStyle = (function (e) {
                        switch (!0) {
                          case 'textDecorationStyle' in e:
                            return e.textDecorationStyle
                          default:
                            return
                        }
                      })(e)),
                      (this.CSStextDecorationThickness = (function (e) {
                        switch (!0) {
                          case 'textDecorationThickness' in e:
                            return e.textDecorationThickness
                          default:
                            return
                        }
                      })(e)),
                      (this.CSStextTransform = (function (e) {
                        switch (!0) {
                          case 'uppercase' in e:
                            return 'uppercase'
                          case 'lowercase' in e:
                            return 'lowercase'
                          case 'capitalize' in e:
                            return 'capitalize'
                          case 'textTransform' in e:
                            return e.textTransform
                          default:
                            return
                        }
                      })(e)),
                      this
                    )
                  },
                },
                {
                  key: 'color',
                  get: function () {
                    return y[this.CSScolor]
                  },
                },
                {
                  key: 'font',
                  get: function () {
                    return [
                      d.bt[this.CSSfontFamily],
                      d.Bf[this.CSSfontSize],
                      d.Hd[this.CSSfontStyle],
                      this.FontWeight[this.CSSfontWeight],
                    ]
                      .filter(Boolean)
                      .join(' ')
                  },
                },
                {
                  key: 'outline',
                  get: function () {
                    return P[this.CSSoutline]
                  },
                },
                {
                  key: 'text',
                  get: function () {
                    return [
                      I[this.CSStextDecorationColor],
                      F[this.CSStextDecorationLine],
                      H[this.CSStextDecorationStyle],
                      Q[this.CSStextDecorationThickness],
                      re[this.CSStextTransform],
                    ]
                      .filter(Boolean)
                      .join(' ')
                  },
                },
                {
                  key: 'box',
                  get: function () {
                    return [
                      this.color,
                      this.font,
                      this.outline,
                      this.text,
                      this.spacing(),
                    ]
                      .filter(Boolean)
                      .join(' ')
                  },
                },
              ]),
              e
            )
          })())
    },
    7613: function (e, t, r) {
      'use strict'
      r.d(t, {
        DK: function () {
          return ut
        },
        gh: function () {
          return Zt.ZP
        },
        Ek: function () {
          return At
        },
        AB: function () {
          return Nt.ZP
        },
      })
      var n = r(8216),
        o = r(5997),
        i = r(2809),
        c = r(6034),
        a = r(1206),
        s = r(1264)
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c.xA('src/layers/Block/background/attachment/styles.css.ts', 'setUI')
      var p = [
          'scroll',
          'fixed',
          'local',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        f =
          (s.b.apply(void 0, p),
          (0, a.DA)(
            {
              scroll: 'scroll',
              fixed: 'fixed',
              local: 'local',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { backgroundAttachment: e }
            },
            'Styles'
          )),
        b = u(u({}, f), {}, { initial: f.scroll, default: f.scroll })
      function y(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/background/clip/styles.css.ts', 'setUI')
      var g = [
          'borderBox',
          'paddingBox',
          'contentBox',
          'text',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        d =
          (s.b.apply(void 0, g),
          (0, a.DA)(
            {
              borderBox: 'border-box',
              paddingBox: 'padding-box',
              contentBox: 'content-box',
              text: 'text',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { backgroundClip: e }
            },
            'Styles'
          )),
        h = O(O({}, d), {}, { default: d.borderBox, initial: d.borderBox })
      function m(e, t) {
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
            ? m(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/background/color/styles.css.ts', 'setUI')
      var v = ['primary', 'secondary', 'black', 'white'],
        P =
          (s.b.apply(void 0, v),
          (0, a.DA)(
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
                '--background-hue': String(e.hue),
                '--background-saturation': String(e.saturation),
                '--background-lightness': String(e.lightness),
                '--background-color':
                  'hsl(var(--background-hue) var(--background-saturation) var(--background-lightness) / var(--background-opacity))',
                backgroundColor: 'var(--background-color)',
              }
            },
            'Styles'
          )),
        w = j(j({}, P), {}, { default: P.primary, initial: P.inherit })
      function x(e, t) {
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
            ? x(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/background/opacity/styles.css.ts', 'setUI')
      var D = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        k =
          (s.b.numeric.apply(s.b, D),
          (0, a.DA)(
            {
              0: '0',
              10: '.1',
              20: '.2',
              30: '.3',
              40: '.4',
              50: '.5',
              60: '.6',
              70: '.7',
              80: '.8',
              90: '.9',
              100: '1',
            },
            function (e) {
              return { '--background-opacity': e }
            },
            'Styles'
          )),
        C = S(S({}, k), {}, { default: k[100] })
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      c._K(), c.xA('src/layers/Block/background/origin/styles.css.ts', 'setUI')
      var Z = [
          'borderBox',
          'paddingBox',
          'contentBox',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        N =
          (s.b.apply(void 0, Z),
          (0, a.DA)(
            {
              borderBox: 'border-box',
              paddingBox: 'padding-box',
              contentBox: 'content-box',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { backgroundOrigin: e }
            },
            'Styles'
          )),
        _ = A(A({}, N), {}, { initial: N.paddingBox, default: N.paddingBox })
      function B(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : B(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(),
        c.xA('src/layers/Block/background/position/styles.css.ts', 'setUI')
      var I = [
          'top',
          'bottom',
          'left',
          'right',
          'center',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        R =
          (s.b.apply(void 0, I),
          (0, a.DA)(
            {
              top: 'top',
              bottom: 'bottom',
              left: 'left',
              right: 'right',
              center: 'center',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { backgroundPosition: e }
            },
            'Styles'
          )),
        W = T(T({}, R), {}, { default: R.center })
      function z(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : z(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/background/repeat/styles.css.ts', 'setUI')
      var F = [
          'repeatX',
          'repeatY',
          'repeat',
          'space',
          'round',
          'noRepeat',
          'repeat_Space',
          'repeat_Repeat',
          'round_Space',
          'noRepeat_Round',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        U =
          (s.b.apply(void 0, F),
          (0, a.DA)(
            {
              repeatX: 'repeat-x',
              repeatY: 'repeat-y',
              repeat: 'repeat',
              space: 'space',
              round: 'round',
              noRepeat: 'no-repeat',
              repeat_Space: 'repeat space',
              repeat_Repeat: 'repeat repeat',
              round_Space: 'round space',
              noRepeat_Round: 'no-repeat round',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { backgroundRepeat: e }
            },
            'Styles'
          )),
        K = L(L({}, U), {}, { initial: U.repeat, default: U['no-repeat'] })
      function M(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/background/size/styles.css.ts', 'setUI')
      var H = [
          'cover',
          'contain',
          50,
          'auto',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        q =
          (s.b.mixed.apply(s.b, H),
          (0, a.DA)(
            {
              cover: 'cover',
              contain: 'contain',
              50: '50%',
              auto: 'auto',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { backgroundSize: e }
            },
            'Styles'
          )),
        Y = $($({}, q), {}, { initial: q.auto, default: q.auto })
      function X(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : X(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/border/color/styles.css.ts', 'setUI')
      var Q = ['primary', 'secondary', 'white', 'black'],
        G =
          (s.b.apply(void 0, Q),
          (0, a.DA)(
            {
              primary: '#0078D4',
              secondary: '#2B88D8',
              white: '#FFF',
              black: '#000',
            },
            function (e) {
              return { borderColor: e }
            },
            'Styles'
          )),
        J = V(V({}, G), {}, { default: G.primary })
      function ee(e, t) {
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
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ee(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/border/style/styles.css.ts', 'setUI')
      var re = [
          'none',
          'hidden',
          'dotted',
          'dashed',
          'solid',
          'double',
          'groove',
          'ridge',
          'inset',
          'outset',
          'inherit',
          'initial',
          'revert',
          'unset',
        ],
        ne =
          (s.b.apply(void 0, re),
          (0, a.DA)(
            {
              none: 'none',
              hidden: 'hidden',
              dotted: 'dotted',
              dashed: 'dashed',
              solid: 'solid',
              double: 'double',
              groove: 'groove',
              ridge: 'ridge',
              inset: 'inset',
              outset: 'outset',
              inherit: 'inherit',
              initial: 'initial',
              revert: 'revert',
              unset: 'unset',
            },
            function (e) {
              return { borderStyle: e }
            },
            'Styles'
          )),
        oe = te(te({}, ne), {}, { default: ne.none })
      function ie(e, t) {
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
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ie(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/border/thickness/styles.css.ts', 'setUI')
      var ae = ['none', 'thin', 'light', 'medium', 'bold'],
        se =
          (s.b.apply(void 0, ae),
          (0, a.DA)(
            { none: 0, thin: 1, light: 2, medium: 3, bold: 4 },
            function (e) {
              return { borderWidth: e }
            },
            'Styles'
          )),
        le = ce(ce({}, se), {}, { default: se.none })
      function ue(e, t) {
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
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ue(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/corner/radius/styles.css.ts', 'setUI')
      var fe = ['none', 'small', 'medium', 'large', 'pill', 'circle'],
        be =
          (s.b.apply(void 0, fe),
          (0, a.DA)(
            {
              none: 0,
              small: 4,
              medium: 8,
              large: 12,
              pill: 9999,
              circle: '50%',
            },
            function (e) {
              return { borderRadius: e }
            },
            'Styles'
          )),
        ye = pe(pe({}, be), {}, { default: be.none })
      c._K(), c.xA('src/layers/Block/margin/styles.css.ts', 'setUI')
      var Oe = [
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
        ge =
          (s.b.apply(void 0, Oe),
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
          })
      function de(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? de(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : de(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/margin/bottom/styles.css.ts', 'setUI')
      var me = (0, a.DA)(
          ge,
          function (e) {
            return { marginBottom: e }
          },
          'Style'
        ),
        je = he(he({}, me), {}, { default: me.none })
      function ve(e, t) {
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
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ve(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ve(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/margin/left/styles.css.ts', 'setUI')
      var we = (0, a.DA)(
          ge,
          function (e) {
            return { marginLeft: e }
          },
          'Style'
        ),
        xe = Pe(Pe({}, we), {}, { default: we.none })
      function Se(e, t) {
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
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Se(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/margin/right/styles.css.ts', 'setUI')
      var ke = (0, a.DA)(
          ge,
          function (e) {
            return { marginRight: e }
          },
          'Style'
        ),
        Ce = De(De({}, ke), {}, { default: ke.none })
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ee(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      c._K(), c.xA('src/layers/Block/margin/top/styles.css.ts', 'setUI')
      var Ze = (0, a.DA)(
          ge,
          function (e) {
            return { marginTop: e }
          },
          'Style'
        ),
        Ne = Ae(Ae({}, Ze), {}, { default: Ze.none })
      c._K(), c.xA('src/layers/Block/padding/styles.css.ts', 'setUI')
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
          (s.b.apply(void 0, _e),
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
          })
      function Te(e, t) {
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
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Te(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/padding/bottom/styles.css.ts', 'setUI')
      var Re = (0, a.DA)(
          Be,
          function (e) {
            return { paddingBottom: e }
          },
          'Style'
        ),
        We = Ie(Ie({}, Re), {}, { default: Re.none })
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ze(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      c._K(), c.xA('src/layers/Block/padding/left/styles.css.ts', 'setUI')
      var Fe = (0, a.DA)(
          Be,
          function (e) {
            return { paddingLeft: e }
          },
          'Style'
        ),
        Ue = Le(Le({}, Fe), {}, { default: Fe.none })
      function Ke(e, t) {
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
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ke(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ke(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/padding/right/styles.css.ts', 'setUI')
      var $e = (0, a.DA)(
          Be,
          function (e) {
            return { paddingRight: e }
          },
          'Style'
        ),
        He = Me(Me({}, $e), {}, { default: $e.none })
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
      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
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
      c._K(), c.xA('src/layers/Block/padding/top/styles.css.ts', 'setUI')
      var Xe = (0, a.DA)(
          Be,
          function (e) {
            return { paddingTop: e }
          },
          'Style'
        ),
        Ve = Ye(Ye({}, Xe), {}, { default: Xe.none })
      function Qe(e, t) {
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
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Qe(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Qe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K(), c.xA('src/layers/Block/text/align/styles.css.ts', 'setUI')
      var Je = [
          'left',
          'right',
          'center',
          'justify',
          'justifyAll',
          'start',
          'end',
          'matchParent',
          'dot',
          'dotCenter',
          'inherit',
          'initial',
          'unset',
        ],
        et =
          (s.b.apply(void 0, Je),
          (0, a.DA)(
            {
              left: 'left',
              right: 'right',
              center: 'center',
              justify: 'justify',
              justifyAll: 'justify-all',
              start: 'start',
              end: 'end',
              matchParent: 'match-parent',
              dot: '"."',
              dotCenter: '"." center',
              inherit: 'inherit',
              initial: 'initial',
              unset: 'unset',
            },
            function (e) {
              return { textAlign: e }
            },
            'Styles'
          )),
        tt = Ge(Ge({}, et), {}, { default: et.start, initial: et.start })
      function rt(e, t) {
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
      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rt(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : rt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c._K()
      var ot = {
          backgroundAttachment: { options: p, control: { type: 'select' } },
          backgroundClip: { options: g, control: { type: 'select' } },
          backgroundColor: { options: v, control: { type: 'select' } },
          backgroundOpacity: { options: D, control: { type: 'select' } },
          backgroundOrigin: { options: Z, control: { type: 'select' } },
          backgroundPosition: { options: I, control: { type: 'select' } },
          backgroundRepeat: { options: F, control: { type: 'select' } },
          backgroundSize: { options: H, control: { type: 'select' } },
        },
        it = {
          borderColor: { options: Q, control: { type: 'select' } },
          borderStyle: { options: re, control: { type: 'select' } },
          borderThickness: { options: ae, control: { type: 'select' } },
        },
        ct = { cornerRadius: { options: fe, control: { type: 'select' } } },
        at = nt(
          {
            marginTop: { options: Oe, control: { type: 'select' } },
            marginRight: { options: Oe, control: { type: 'select' } },
            marginBottom: { options: Oe, control: { type: 'select' } },
            marginLeft: { options: Oe, control: { type: 'select' } },
            marginX: { options: Oe, control: { type: 'select' } },
            marginY: { options: Oe, control: { type: 'select' } },
          },
          { margin: { options: Oe, control: { type: 'select' } } }
        ),
        st = nt(
          {
            paddingTop: { options: _e, control: { type: 'select' } },
            paddingRight: { options: _e, control: { type: 'select' } },
            paddingBottom: { options: _e, control: { type: 'select' } },
            paddingLeft: { options: _e, control: { type: 'select' } },
            paddingX: { options: _e, control: { type: 'select' } },
            paddingY: { options: _e, control: { type: 'select' } },
          },
          { padding: { options: _e, control: { type: 'select' } } }
        ),
        lt = { textAlign: { options: Je, control: { type: 'select' } } },
        ut =
          (nt(nt(nt(nt(nt(nt({}, ot), it), ct), at), st), lt),
          (function () {
            function e(t) {
              var r = this
              ;(0, n.Z)(this, e),
                (0, i.Z)(this, 'background', void 0),
                (0, i.Z)(this, 'backgroundAttachment', void 0),
                (0, i.Z)(this, 'backgroundClip', void 0),
                (0, i.Z)(this, 'backgroundColor', void 0),
                (0, i.Z)(this, 'backgroundOpacity', void 0),
                (0, i.Z)(this, 'backgroundOrigin', void 0),
                (0, i.Z)(this, 'backgroundPosition', void 0),
                (0, i.Z)(this, 'backgroundRepeat', void 0),
                (0, i.Z)(this, 'backgroundSize', void 0),
                (0, i.Z)(this, 'border', void 0),
                (0, i.Z)(this, 'borderColor', void 0),
                (0, i.Z)(this, 'borderStyle', void 0),
                (0, i.Z)(this, 'borderThickness', void 0),
                (0, i.Z)(this, 'corner', void 0),
                (0, i.Z)(this, 'cornerRadius', void 0),
                (0, i.Z)(this, 'margin', void 0),
                (0, i.Z)(this, 'marginTop', void 0),
                (0, i.Z)(this, 'marginRight', void 0),
                (0, i.Z)(this, 'marginBottom', void 0),
                (0, i.Z)(this, 'marginLeft', void 0),
                (0, i.Z)(this, 'padding', void 0),
                (0, i.Z)(this, 'paddingTop', void 0),
                (0, i.Z)(this, 'paddingRight', void 0),
                (0, i.Z)(this, 'paddingBottom', void 0),
                (0, i.Z)(this, 'paddingLeft', void 0),
                (0, i.Z)(this, 'text', void 0),
                (0, i.Z)(this, 'textAlign', void 0),
                null !== t && void 0 !== t && t.useBackground
                  ? (this.background = function () {
                      return [
                        b[r.backgroundAttachment],
                        h[r.backgroundClip],
                        w[r.backgroundColor],
                        C[r.backgroundOpacity],
                        _[r.backgroundOrigin],
                        W[r.backgroundPosition],
                        K[r.backgroundRepeat],
                        Y[r.backgroundSize],
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })
                  : (this.background = function () {
                      return ''
                    }),
                null !== t && void 0 !== t && t.useBorder
                  ? (this.border = function () {
                      return [
                        J[r.borderColor],
                        oe[r.borderStyle],
                        le[r.borderThickness],
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })
                  : (this.border = function () {
                      return ''
                    }),
                null !== t && void 0 !== t && t.useMargin
                  ? (this.margin = function () {
                      return [
                        r.marginTop,
                        r.marginRight,
                        r.marginBottom,
                        r.marginLeft,
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })
                  : (this.margin = function () {
                      return ''
                    }),
                null !== t && void 0 !== t && t.usePadding
                  ? (this.padding = function () {
                      return [
                        r.paddingTop,
                        r.paddingRight,
                        r.paddingBottom,
                        r.paddingLeft,
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })
                  : (this.padding = function () {
                      return ''
                    }),
                null !== t && void 0 !== t && t.useCorner,
                (this.corner = function () {
                  return [ye[r.cornerRadius]].filter(Boolean).join(' ')
                }),
                null !== t && void 0 !== t && t.useText,
                (this.text = function () {
                  return [tt[r.textAlign]].filter(Boolean).join(' ')
                })
            }
            return (
              (0, o.Z)(e, [
                {
                  key: 'set',
                  value: function (e) {
                    var t = (function (e) {
                      var t = Ne.none
                      'marginTop' in e && e.marginTop
                        ? (t = Ne[e.marginTop])
                        : 'marginY' in e && e.marginY
                        ? (t = Ne[e.marginY])
                        : 'margin' in e && e.margin && (t = Ne[e.margin])
                      var r = je.none
                      'marginBottom' in e && e.marginBottom
                        ? (r = je[e.marginBottom])
                        : 'marginY' in e && e.marginY
                        ? (r = je[e.marginY])
                        : 'margin' in e && e.margin && (r = je[e.margin])
                      var n = xe.none
                      'marginLeft' in e && e.marginLeft
                        ? (n = xe[e.marginLeft])
                        : 'marginX' in e && e.marginX
                        ? (n = xe[e.marginX])
                        : 'margin' in e && e.margin && (n = xe[e.margin])
                      var o = Ce.none
                      return (
                        'marginLeft' in e && e.marginLeft
                          ? (o = Ce[e.marginLeft])
                          : 'marginX' in e && e.marginX
                          ? (o = Ce[e.marginX])
                          : 'margin' in e && e.margin && (o = Ce[e.margin]),
                        { top: t, bottom: r, left: n, right: o }
                      )
                    })(e)
                    ;(this.marginTop = t.top),
                      (this.marginRight = t.right),
                      (this.marginBottom = t.bottom),
                      (this.marginLeft = t.left),
                      (this.borderColor = (function (e) {
                        switch (!0) {
                          case 'borderColor' in e:
                            return e.borderColor
                          default:
                            return
                        }
                      })(e)),
                      (this.borderStyle = (function (e) {
                        switch (!0) {
                          case 'borderStyle' in e:
                            return e.borderStyle
                          default:
                            return
                        }
                      })(e)),
                      (this.borderThickness = (function (e) {
                        switch (!0) {
                          case 'borderThickness' in e:
                            return e.borderThickness
                          default:
                            return
                        }
                      })(e)),
                      (this.cornerRadius = (function (e) {
                        switch (!0) {
                          case 'cornerRadius' in e:
                            return e.cornerRadius
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundAttachment = (function (e) {
                        switch (!0) {
                          case 'backgroundAttachment' in e:
                            return e.backgroundAttachment
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundClip = (function (e) {
                        switch (!0) {
                          case 'backgroundClip' in e:
                            return e.backgroundClip
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundColor = (function (e) {
                        switch (!0) {
                          case 'backgroundColor' in e:
                            return e.backgroundColor
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundOpacity = (function (e) {
                        switch (!0) {
                          case 'backgroundOpacity' in e:
                            return e.backgroundOpacity
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundOrigin = (function (e) {
                        switch (!0) {
                          case 'backgroundOrigin' in e:
                            return e.backgroundOrigin
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundPosition = (function (e) {
                        switch (!0) {
                          case 'backgroundPosition' in e:
                            return e.backgroundPosition
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundRepeat = (function (e) {
                        switch (!0) {
                          case 'backgroundRepeat' in e:
                            return e.backgroundRepeat
                          default:
                            return
                        }
                      })(e)),
                      (this.backgroundSize = (function (e) {
                        switch (!0) {
                          case 'backgroundSize' in e:
                            return e.backgroundSize
                          default:
                            return
                        }
                      })(e))
                    var r = (function (e) {
                      var t = Ve.none
                      'paddingTop' in e && e.paddingTop
                        ? (t = Ve[e.paddingTop])
                        : 'paddingY' in e && e.paddingY
                        ? (t = Ve[e.paddingY])
                        : 'padding' in e && e.padding && (t = Ve[e.padding])
                      var r = We.none
                      'paddingBottom' in e && e.paddingBottom
                        ? (r = We[e.paddingBottom])
                        : 'paddingY' in e && e.paddingY
                        ? (r = We[e.paddingY])
                        : 'padding' in e && e.padding && (r = We[e.padding])
                      var n = Ue.none
                      'paddingLeft' in e && e.paddingLeft
                        ? (n = Ue[e.paddingLeft])
                        : 'paddingX' in e && e.paddingX
                        ? (n = Ue[e.paddingX])
                        : 'padding' in e && e.padding && (n = Ue[e.padding])
                      var o = He.none
                      return (
                        'paddingLeft' in e && e.paddingLeft
                          ? (o = He[e.paddingLeft])
                          : 'paddingX' in e && e.paddingX
                          ? (o = He[e.paddingX])
                          : 'padding' in e && e.padding && (o = He[e.padding]),
                        { top: t, bottom: r, left: n, right: o }
                      )
                    })(e)
                    return (
                      (this.paddingTop = r.top),
                      (this.paddingRight = r.right),
                      (this.paddingBottom = r.bottom),
                      (this.paddingLeft = r.left),
                      (this.textAlign = (function (e) {
                        switch (!0) {
                          case 'textAlign' in e:
                            return e.textAlign
                          default:
                            return
                        }
                      })(e)),
                      this
                    )
                  },
                },
                {
                  key: 'outer',
                  get: function () {
                    return [
                      this.margin(),
                      this.border(),
                      this.background(),
                      this.corner(),
                    ]
                      .filter(Boolean)
                      .join(' ')
                  },
                },
                {
                  key: 'inner',
                  get: function () {
                    return [this.padding(), this.text()]
                      .filter(Boolean)
                      .join(' ')
                  },
                },
                {
                  key: 'box',
                  get: function () {
                    return [this.outer, this.inner].filter(Boolean).join(' ')
                  },
                },
              ]),
              e
            )
          })())
      r(7294)
      function pt(e, t) {
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
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pt(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c.xA('src/layers/Focusable/css/theme/styles.css.ts', 'setUI')
      var bt = ['primary', 'secondary', 'critical', 'white', 'black'],
        yt =
          (s.b.apply(void 0, bt),
          (0, a.DA)(
            {
              primary: {
                hue: 218,
                saturation: '100%',
                lightness: '40%',
                alpha: 1,
                textColor: '#fff',
              },
              secondary: {
                hue: 0,
                saturation: '0%',
                lightness: '16.1%',
                alpha: 1,
                textColor: '#F8F8F8',
              },
              critical: {
                hue: 352.3,
                saturation: '79.5%',
                lightness: '59.8%',
                alpha: 1,
                textColor: '#F8F8F8',
              },
              white: {
                hue: 0,
                saturation: '0%',
                lightness: '100%',
                alpha: 1,
                textColor: '#EA475C',
              },
              black: {
                hue: 0,
                saturation: '0%',
                lightness: '16.1%',
                alpha: 1,
                textColor: '#F8F8F8',
              },
            },
            function (e) {
              return {
                '--h': String(e.hue),
                '--s': String(e.saturation),
                '--l': String(e.lightness),
                '--a': String(e.alpha),
                '--color': 'hsl(var(--h) var(--s) var(--l) / var(--a))',
                opacity: 1,
                '--text-color': String(e.textColor),
              }
            },
            'Styles'
          )),
        Ot = ft(ft({}, yt), {}, { default: yt.primary })
      c._K()
      function gt(e, t) {
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
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gt(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : gt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c.xA('src/layers/Focusable/Button/css/shape/styles.css.ts', 'setUI')
      var ht = ['rect', 'square', 'fit'],
        mt =
          (s.b.apply(void 0, ht),
          (0, a.DA)(
            {
              rect: {
                height: 'var(--size)',
                minHeight: 'initial',
                maxHeight: 'initial',
                width: 'initial',
                minWidth: 'initial',
                maxWidth: 'initial',
              },
              square: {
                height: 'var(--size)',
                minHeight: 'var(--size)',
                maxHeight: 'var(--size)',
                width: 'var(--size)',
                minWidth: 'var(--size)',
                maxWidth: 'var(--size)',
              },
              fit: {
                height: 'var(--size)',
                minHeight: 'initial',
                maxHeight: 'initial',
                width: 'fit-content',
                minWidth: 'fit-content',
                maxWidth: 'fit-content',
              },
            },
            function (e) {
              return e
            },
            'Styles'
          ))
      dt(dt({}, mt), {}, { default: mt.rect })
      c._K()
      function jt(e, t) {
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
      function vt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jt(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : jt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c.xA('src/layers/Focusable/Button/css/size/styles.css.ts', 'setUI')
      var Pt = ['xsmall', 'small', 'medium', 'large', 'xlarge'],
        wt =
          (s.b.apply(void 0, Pt),
          (0, a.DA)(
            {
              xsmall: {
                height: 24,
                fontSize: 14,
                borderWidth: 1.5,
                outlineWidth: 1.5,
                outlineOffset: -3,
                paddingRight: 24,
                paddingLeft: 24,
              },
              small: {
                height: 36,
                fontSize: 18,
                borderWidth: 2.25,
                outlineWidth: 2.25,
                outlineOffset: -4.5,
                paddingRight: 36,
                paddingLeft: 36,
              },
              medium: {
                height: 48,
                fontSize: 20,
                borderWidth: 3,
                outlineWidth: 3,
                outlineOffset: -6,
                paddingRight: 48,
                paddingLeft: 48,
              },
              large: {
                height: 60,
                fontSize: 30,
                borderWidth: 3.75,
                outlineWidth: 3.75,
                outlineOffset: -7.5,
                paddingRight: 60,
                paddingLeft: 60,
              },
              xlarge: {
                height: 72,
                fontSize: 36,
                borderWidth: 4.5,
                outlineWidth: 4.5,
                outlineOffset: -9,
                paddingRight: 72,
                paddingLeft: 72,
              },
            },
            function (e) {
              return {
                '--size': e.height,
                height: e.height,
                fontSize: e.fontSize,
                borderWidth: e.borderWidth,
                outlineWidth: e.outlineWidth,
                outlineOffset: e.outlineOffset,
                lineHeight: 1,
                paddingRight: e.paddingRight,
                paddingLeft: e.paddingLeft,
              }
            },
            'Styles'
          ))
      vt(vt({}, wt), {}, { default: wt.medium })
      c._K()
      function xt(e, t) {
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
      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xt(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      c.xA('src/layers/Focusable/Button/css/variant/styles.css.ts', 'setUI')
      var Dt = ['solid', 'ghost', 'soft', 'text', 'INHERIT'],
        kt =
          (s.b.apply(void 0, Dt),
          {
            solid: {
              color: 'var(--text-color)',
              backgroundColor: 'var(--color)',
              borderColor: 'var(--color)',
              hover: {
                backgroundColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
                borderColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
              },
              active: {
                backgroundColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
                borderColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
              },
              focus: {
                outlineColor: 'hsl(0 0% 100% / .8)',
                outlineStyle: 'solid',
                backgroundColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
                borderColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
              },
              disabled: {
                color: '#A19F9D',
                backgroundColor: '#F3F2F1',
                borderColor: '#F3F2F1',
              },
            },
            ghost: {
              color: 'var(--color)',
              backgroundColor: 'transparent',
              borderColor: 'var(--color)',
              hover: {
                color: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
                borderColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
              },
              active: {
                color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
                borderColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
              },
              focus: {
                outlineColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / .5)',
                outlineStyle: 'solid',
                color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
                borderColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
              },
              disabled: { color: '#A19F9D', borderColor: '#F3F2F1' },
            },
            soft: {
              color: 'var(--color)',
              backgroundColor: 'hsl(var(--h) var(--s) 90% / var(--a))',
              borderColor: 'hsl(var(--h) var(--s) 90% / var(--a))',
              hover: {
                backgroundColor: 'hsl(var(--h) var(--s) 80% / var(--a))',
                borderColor: 'hsl(var(--h) var(--s) 80% / var(--a))',
              },
              active: {
                backgroundColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
                borderColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
              },
              focus: {
                outlineColor: 'hsl(0 0% 100% / .5)',
                outlineStyle: 'solid',
                backgroundColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
                borderColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
              },
              disabled: {
                color: '#A19F9D',
                backgroundColor: '#F3F2F1',
                borderColor: '#F3F2F1',
              },
            },
            text: {
              color: 'var(--color)',
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              hover: {
                color: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
              },
              active: {
                color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
              },
              focus: {
                outlineColor:
                  'hsl(var(--h) var(--s) calc(var(--l) - 20%) / .5)',
                outlineStyle: 'solid',
                color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
              },
              disabled: { color: '#A19F9D' },
            },
            INHERIT: {
              color: 'inherit',
              backgroundColor: 'inherit',
              borderColor: 'inherit',
              hover: { backgroundColor: 'inherit)', borderColor: 'inherit' },
              active: { backgroundColor: 'inherit', borderColor: 'inherit' },
              focus: {
                outlineColor: 'inherit',
                outlineStyle: 'inherit',
                backgroundColor: 'inherit',
                borderColor: 'inherit',
              },
              disabled: {
                color: 'inherit',
                backgroundColor: 'inherit',
                borderColor: 'inherit',
              },
            },
          }),
        Ct = (0, a.DA)(
          kt,
          function (e) {
            return {
              color: String(e.color),
              borderColor: String(e.borderColor),
              backgroundColor: String(e.backgroundColor),
              borderStyle: 'solid',
              outlineStyle: 'none',
              transition:
                '.2s color ease-in, .2s border ease-in, .2s background ease-in',
              ':hover': e.hover,
              ':active': e.active,
              ':focus': e.focus,
              ':disabled': e.disabled,
            }
          },
          'Styles'
        ),
        Et =
          (St(St({}, Ct), {}, { default: Ct.solid }),
          (0, a.DA)(
            kt,
            function (e) {
              return {
                color: String(e.color),
                borderColor: String(e.borderColor),
                backgroundColor: String(e.backgroundColor),
                borderStyle: 'solid',
                outlineStyle: 'none',
              }
            },
            'BasicStyles'
          ))
      St(St({}, Et), {}, { default: Et.solid })
      c._K()
      var At = (function () {
          function e(t) {
            ;(0, n.Z)(this, e), (0, i.Z)(this, 'CSStheme', void 0)
          }
          return (
            (0, o.Z)(e, [
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.CSStheme = (function (e) {
                      switch (!0) {
                        case 'primary' in e:
                          return 'primary'
                        case 'secondary' in e:
                          return 'secondary'
                        case 'critical' in e:
                          return 'critical'
                        case 'white' in e:
                          return 'white'
                        case 'black' in e:
                          return 'black'
                        case 'theme' in e:
                          return e.theme
                        default:
                          return
                      }
                    })(e)),
                    this
                  )
                },
              },
              {
                key: 'theme',
                get: function () {
                  return Ot[this.CSStheme]
                },
              },
              {
                key: 'box',
                get: function () {
                  return [this.theme].filter(Boolean).join(' ')
                },
              },
            ]),
            e
          )
        })(),
        Zt = r(1905),
        Nt = r(6260)
    },
    1147: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return E
        },
      })
      var n = r(219),
        o = (r(7294), r(4184)),
        i = r.n(o),
        c = r(7104),
        a = r(7613),
        s = r(2809),
        l = r(6034),
        u = r(1206),
        p = r(9387)
      function f(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                ;(0, s.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      l.xA('src/layout/Flex/Component/styles.css.ts', 'setUI')
      var y = (0, u.oB)(
        b(b({}, p.k5.LAYOUT), {}, { display: 'flex' }),
        'ClassName'
      )
      l._K()
      var O = r(5893),
        g = ['className', 'zIndex', 'width', 'children'],
        d = new a.DK(),
        h = new a.gh(),
        m = function (e) {
          var t = e.className,
            r = e.zIndex,
            o = e.width,
            a = e.children,
            s = (0, n.Z)(e, g)
          return (0, O.jsx)('div', {
            className: i()([
              t,
              y,
              d.set(s).box,
              h.set(s).box,
              c.KN[r] || c.KN.default,
              c.Lu[o] || c.Lu.default,
            ]),
            children: a,
          })
        },
        j = r(1905)
      function v(e, t) {
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
      function P(e, t) {
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
      var w = function (e) {
        return m(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? P(Object(r), !0).forEach(function (t) {
                    ;(0, s.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : P(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({ direction: j.$n.row }, e)
        )
      }
      function x(e, t) {
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
      var S = function (e) {
        return m(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? x(Object(r), !0).forEach(function (t) {
                    ;(0, s.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : x(Object(r)).forEach(function (t) {
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
              direction: j.$n.row,
              alignContent: j._h.default,
              alignItems: j.m_.default,
              wrap: j.y5.nowrap,
            },
            e
          )
        )
      }
      function D(e, t) {
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
      var k = function (e) {
          return m(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? D(Object(r), !0).forEach(function (t) {
                      ;(0, s.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : D(Object(r)).forEach(function (t) {
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
                direction: j.$n.row,
                alignContent: j._h.default,
                alignItems: j.m_.default,
                wrap: j.y5.nowrap,
                justifyContent: j.Kg.center,
              },
              e
            )
          )
        },
        C = function (e) {
          return m(e)
        }
      ;(C.Column = function (e) {
        return m(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? v(Object(r), !0).forEach(function (t) {
                    ;(0, s.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : v(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          })({ direction: j.$n.column }, e)
        )
      }),
        (C.Row = w),
        (C.Inline = S),
        (C.Center = k)
      var E = C
    },
    3794: function (e, t, r) {
      'use strict'
      r.d(t, {
        H1: function () {
          return Ee
        },
        H2: function () {
          return Ke
        },
        lm: function () {
          return bi
        },
        $N: function () {
          return Ha
        },
        nv: function () {
          return Yr
        },
        T: function () {
          return Ka
        },
        al: function () {
          return Hr
        },
        wT: function () {
          return Ec
        },
        qp: function () {
          return ls
        },
        h1: function () {
          return he
        },
        h2: function () {
          return _e
        },
        h3: function () {
          return qe
        },
        h4: function () {
          return at
        },
        h5: function () {
          return vt
        },
        h6: function () {
          return Tt
        },
        An: function () {
          return mr
        },
        $U: function () {
          return Br
        },
      })
      var n = r(2809),
        o = r(219),
        i = r(4184),
        c = r.n(i),
        a = r(1264),
        s = {
          symbol: 'LeftDoubleQuotation',
          symbolGap: 'medium',
          symbolSize: 'medium',
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'small',
          fontStyle: 'normal',
          fontWeight: 'regular',
          outline: 'none',
          textAlign: 'start',
          textDecorationColor: 'currentColor',
          textDecorationLine: 'none',
          textDecorationStyle: 'inherit',
          textDecorationThickness: 'initial',
          textTransform: 'none',
          margin: 'none',
          padding: 'none',
        },
        l = r(7613),
        u = r(6034),
        p = r(1206)
      u.xA(
        'src/typography/BlockQuote/ProtoSet/Component/styles.css.ts',
        'setUI'
      )
      var f = (0, p.oB)(
        {
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          selectors: {
            '&:before': {
              content: 'var(--symbol)',
              paddingRight: 'var(--symbol-gap)',
              fontSize: 'var(--symbol-size)',
              lineHeight: 1,
              marginTop: '-0.1309em',
            },
          },
        },
        'ClassName'
      )
      u._K()
      var b = r(8216),
        y = r(5997),
        O = r(7294)
      function g(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/BlockQuote/ProtoSet/Component/layers/Symbol/css/symbol/styles.css.ts',
        'setUI'
      )
      var h = ['none', 'Quote', 'DoubleQuote', 'LeftDoubleQuotation'],
        m =
          (a.b.apply(void 0, h),
          (0, p.DA)(
            {
              none: 'none',
              Quote: '"\'"',
              DoubleQuote: '"\'\'"',
              LeftDoubleQuotation: '"\u201c"',
            },
            function (e) {
              return { '--symbol': e, opacity: 1 }
            },
            'Styles'
          )),
        j = d(d({}, m), {}, { default: m.none })
      u._K()
      function v(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/BlockQuote/ProtoSet/Component/layers/Symbol/css/symbolGap/styles.css.ts',
        'setUI'
      )
      var w = [
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
        x =
          (a.b.apply(void 0, w),
          (0, p.DA)(
            {
              none: 0,
              xxxsmall: 10,
              xxsmall: 12,
              xsmall: 14,
              small: 16,
              medium: 18,
              large: 20,
              xlarge: 28,
              xxlarge: 32,
              xxxlarge: 42,
            },
            function (e) {
              return { '--symbol-gap': e, opacity: 1 }
            },
            'Styles'
          )),
        S = P(P({}, x), {}, { default: x.none })
      u._K()
      function D(e, t) {
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/BlockQuote/ProtoSet/Component/layers/Symbol/css/symbolSize/styles.css.ts',
        'setUI'
      )
      var C = ['none', 'small', 'medium', 'large'],
        E =
          (a.b.apply(void 0, C),
          (0, p.DA)(
            { none: 0, small: 64, medium: 128, large: 256 },
            function (e) {
              return { '--symbol-size': e, opacity: 1 }
            },
            'Styles'
          )),
        A = k(k({}, E), {}, { default: E.none })
      u._K()
      var Z = (function () {
          function e(t) {
            var r = this
            ;(0, b.Z)(this, e),
              (0, n.Z)(this, 'style', void 0),
              (0, n.Z)(this, 'symbol', void 0),
              (0, n.Z)(this, 'symbolGap', void 0),
              (0, n.Z)(this, 'symbolSize', void 0),
              (this.style = function () {
                return [j[r.symbol], S[r.symbolGap], A[r.symbolSize]]
                  .filter(Boolean)
                  .join(' ')
              })
          }
          return (
            (0, y.Z)(e, [
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.symbol = (function (e) {
                      switch (!0) {
                        case 'symbol' in e:
                          return e.symbol
                        default:
                          return
                      }
                    })(e)),
                    (this.symbolGap = (function (e) {
                      switch (!0) {
                        case 'symbolGap' in e:
                          return e.symbolGap
                        default:
                          return
                      }
                    })(e)),
                    (this.symbolSize = (function (e) {
                      switch (!0) {
                        case 'symbolSize' in e:
                          return e.symbolSize
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
        N = r(5893),
        _ = ['cite', 'className', 'children'],
        B = new l.DK({ usePadding: !0, useMargin: !0 }),
        T = new l.AB(),
        I = new Z(),
        R = function (e) {
          var t = e.cite,
            r = e.className,
            n = e.children,
            i = (0, o.Z)(e, _)
          return (0, N.jsx)('blockquote', {
            cite: t,
            className: c()([r, f, B.set(i).box, T.set(i).box, I.set(i).box]),
            children: n,
          })
        }
      u.xA('src/typography/BlockQuote/Set/styles.css.ts', 'setUI')
      var W = (0, p.oB)({}, 'ClassName')
      u._K()
      var z = ['className']
      function L(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var U = 'BlockQuote',
        K = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, z)
          return R(
            F(
              F({}, a.R.mergePropsWithWarning(s, r, U)),
              {},
              { className: c()(W, t) }
            )
          )
        }
      K.displayName = U
      var M = K,
        $ = r(3425),
        H =
          ((0, $.ZP)(
            (0, N.jsx)(M, {
              children:
                '\u0411\u043b\u043e\u043a \u0441 \u0446\u0438\u0442\u0430\u0442\u043e\u0439',
            })
          ),
          {
            level: 1,
            color: 'black',
            fontFamily: 'primary',
            fontSize: 'xxxxlarge',
            fontStyle: 'normal',
            fontWeight: 'bold',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            margin: 'none',
            paddingX: 'none',
            paddingY: 'medium',
            charsPerLine: 'medium',
          }),
        q = r(7104)
      function Y(e, t) {
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
            ? Y(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/Heading/ProtoSet/css/charsPerLine/styles.css.ts',
        'setUI'
      )
      a.b.apply(void 0, ['small', 'medium', 'large'])
      var V = (0, p.DA)(
          { none: 'none', medium: 24 },
          function (e) {
            return { maxWidth: 'number' === typeof e ? ''.concat(e, 'ch') : e }
          },
          'Styles'
        ),
        Q = X(X({}, V), {}, { default: V.medium })
      u._K()
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
      function J(e) {
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
      u.xA('src/typography/Heading/ProtoSet/css/weight/styles.css.ts', 'setUI')
      a.b.apply(void 0, ['regular', 'bold'])
      var ee = (0, p.DA)(
          { regular: 400, bold: 700 },
          function (e) {
            return { fontWeight: e }
          },
          'Styles'
        ),
        te = J(J({}, ee), {}, { default: ee.bold })
      u._K()
      var re = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' }
      u.xA('src/typography/Heading/ProtoSet/Component/styles.css.ts', 'setUI')
      var ne = (0, p.oB)(
        {
          selectors: {
            '&::before': {
              content: '""',
              marginBottom: '-0.0085em',
              display: 'table',
            },
            '&::after': {
              content: '""',
              marginTop: '0.0085em',
              display: 'table',
            },
          },
        },
        'ClassName'
      )
      u._K()
      var oe = [
          'level',
          'className',
          'title',
          'display',
          'children',
          'charsPerLine',
        ],
        ie = new l.DK({ usePadding: !0, useMargin: !0 }),
        ce = new l.AB({
          fontWeight: {
            resolver: function (e) {
              switch (!0) {
                case 'regular' in e:
                  return 'regular'
                case 'bold' in e:
                  return 'bold'
                case 'fontWeight' in e:
                  return e.fontWeight
                default:
                  return
              }
            },
            Style: te,
          },
        }),
        ae = function (e) {
          var t = e.level,
            r = e.className,
            n = (e.title, e.display),
            i = e.children,
            a = e.charsPerLine,
            s = (0, o.Z)(e, oe)
          return (0, O.createElement)(
            re[t],
            {
              className: c()([
                r,
                ne,
                Q[a],
                q.sS[n],
                ie.set(s).box,
                ce.set(s).box,
              ]),
            },
            i
          )
        }
      u.xA('src/typography/Heading/Set/styles.css.ts', 'setUI')
      var se = (0, p.oB)({}, 'ClassName')
      u._K()
      var le = ['className']
      function ue(e, t) {
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
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ue(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var fe = 'Heading',
        be = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, le)
          return ae(
            pe(
              pe({}, a.R.mergePropsWithWarning(H, r, fe)),
              {},
              { className: c()(se, t) }
            )
          )
        }
      be.displayName = fe
      var ye = be
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
      var de = ge(
        ge(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'inherit',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            charsPerLine: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xxlarge',
          fontWeight: 'bold',
          margin: 'none',
          paddingX: 'none',
          paddingY: 'medium',
        }
      )
      u.xA('src/typography/Heading/Subsets/H1/styles.css.ts', 'setUI')
      var he = (0, p.oB)({}, 'ClassName')
      u._K()
      var me = ['className']
      function je(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : je(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Pe = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, me)
        return ae(
          ve(
            ve({}, a.R.mergePropsWithWarning(de, r)),
            {},
            { level: 1, className: c()(he, t) }
          )
        )
      }
      Pe.displayName = 'Heading.H1'
      var we = Pe,
        xe = r(6260),
        Se = ['className']
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
      function ke(e) {
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
      var Ce = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Se),
          n = (0, xe.rd)(),
          i = (0, xe.V1)()
        return ae(
          ke(
            ke(ke({}, de), r),
            {},
            {
              level: 1,
              className: c()(he, t),
              color:
                (null === r || void 0 === r ? void 0 : r.color) ||
                n ||
                de.color,
              fontSize:
                (null === r || void 0 === r ? void 0 : r.fontSize) ||
                i ||
                de.fontSize,
            }
          )
        )
      }
      Ce.displayName = 'H1'
      var Ee = Ce
      ;(0, $.ZP)(
        (0, N.jsx)(Ee, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Ae(e, t) {
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
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ae(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ne = Ze(
        Ze(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'inherit',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            charsPerLine: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xlarge',
          fontWeight: 'bold',
          margin: 'none',
          paddingX: 'none',
          paddingY: 'medium',
        }
      )
      u.xA('src/typography/Heading/Subsets/H2/styles.css.ts', 'setUI')
      var _e = (0, p.oB)({}, 'ClassName')
      u._K()
      var Be = ['className']
      function Te(e, t) {
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
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Te(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Re = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Be)
        return ae(
          Ie(
            Ie({}, a.R.mergePropsWithWarning(Ne, r)),
            {},
            { level: 2, className: c()(_e, t) }
          )
        )
      }
      Re.displayName = 'Heading.H2'
      var We = Re,
        ze = ['className']
      function Le(e, t) {
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
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Le(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Le(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ue = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, ze),
          n = (0, xe.rd)(),
          i = (0, xe.V1)()
        return ae(
          Fe(
            Fe(Fe({}, Ne), r),
            {},
            {
              level: 2,
              className: c()(_e, t),
              color:
                (null === r || void 0 === r ? void 0 : r.color) ||
                n ||
                Ne.color,
              fontSize:
                (null === r || void 0 === r ? void 0 : r.fontSize) ||
                i ||
                Ne.fontSize,
            }
          )
        )
      }
      Ue.displayName = 'H2'
      var Ke = Ue
      ;(0, $.ZP)(
        (0, N.jsx)(Ke, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Me(e, t) {
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
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Me(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Me(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var He = $e(
        $e(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'inherit',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            charsPerLine: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'large',
          fontWeight: 'bold',
          margin: 'none',
          paddingX: 'none',
          paddingY: 'medium',
        }
      )
      u.xA('src/typography/Heading/Subsets/H3/styles.css.ts', 'setUI')
      var qe = (0, p.oB)({}, 'ClassName')
      u._K()
      var Ye = ['className']
      function Xe(e, t) {
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
            ? Xe(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Xe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Qe = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Ye)
        return ae(
          Ve(
            Ve({}, a.R.mergePropsWithWarning(He, r)),
            {},
            { level: 3, className: c()(qe, t) }
          )
        )
      }
      Qe.displayName = 'Heading.H3'
      var Ge = Qe,
        Je = ['className']
      function et(e, t) {
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
      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? et(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : et(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var rt = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Je),
          n = (0, xe.rd)(),
          i = (0, xe.V1)()
        return ae(
          tt(
            tt(tt({}, He), r),
            {},
            {
              level: 3,
              className: c()(qe, t),
              color:
                (null === r || void 0 === r ? void 0 : r.color) ||
                n ||
                He.color,
              fontSize:
                (null === r || void 0 === r ? void 0 : r.fontSize) ||
                i ||
                He.fontSize,
            }
          )
        )
      }
      rt.displayName = 'H3'
      var nt = rt
      ;(0, $.ZP)(
        (0, N.jsx)(nt, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function ot(e, t) {
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
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ot(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ot(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ct = it(
        it(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'inherit',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            charsPerLine: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'medium',
          fontWeight: 'bold',
          margin: 'none',
          paddingX: 'none',
          paddingY: 'medium',
        }
      )
      u.xA('src/typography/Heading/Subsets/H4/styles.css.ts', 'setUI')
      var at = (0, p.oB)({}, 'ClassName')
      u._K()
      var st = ['className']
      function lt(e, t) {
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
      function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? lt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : lt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var pt = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, st)
        return ae(
          ut(
            ut({}, a.R.mergePropsWithWarning(ct, r)),
            {},
            { level: 4, className: c()(at, t) }
          )
        )
      }
      pt.displayName = 'Heading.H4'
      var ft = pt,
        bt = ['className']
      function yt(e, t) {
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
      function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? yt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var gt = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, bt),
          n = (0, xe.rd)(),
          i = (0, xe.V1)()
        return ae(
          Ot(
            Ot(Ot({}, ct), r),
            {},
            {
              level: 4,
              className: c()(at, t),
              color:
                (null === r || void 0 === r ? void 0 : r.color) ||
                n ||
                ct.color,
              fontSize:
                (null === r || void 0 === r ? void 0 : r.fontSize) ||
                i ||
                ct.fontSize,
            }
          )
        )
      }
      gt.displayName = 'H4'
      var dt = gt
      ;(0, $.ZP)(
        (0, N.jsx)(dt, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function ht(e, t) {
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
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ht(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ht(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var jt = mt(
        mt(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            charsPerLine: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'small',
          fontWeight: 'bold',
          margin: 'none',
          paddingX: 'none',
          paddingY: 'medium',
        }
      )
      u.xA('src/typography/Heading/Subsets/H5/styles.css.ts', 'setUI')
      var vt = (0, p.oB)({}, 'ClassName')
      u._K()
      var Pt = ['className']
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
      var St = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Pt)
        return ae(
          xt(
            xt({}, a.R.mergePropsWithWarning(jt, r)),
            {},
            { level: 5, className: c()(vt, t) }
          )
        )
      }
      St.displayName = 'Heading.H5'
      var Dt = St,
        kt = ['className']
      function Ct(e, t) {
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
      function Et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ct(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ct(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var At = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, kt),
          n = (0, xe.rd)(),
          i = (0, xe.V1)()
        return ae(
          Et(
            Et(Et({}, jt), r),
            {},
            {
              level: 5,
              className: c()(vt, t),
              color:
                (null === r || void 0 === r ? void 0 : r.color) ||
                n ||
                jt.color,
              fontSize:
                (null === r || void 0 === r ? void 0 : r.fontSize) ||
                i ||
                jt.fontSize,
            }
          )
        )
      }
      At.displayName = 'H5'
      var Zt = At
      ;(0, $.ZP)(
        (0, N.jsx)(Zt, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u044f\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
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
      function _t(e) {
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
      var Bt = _t(
        _t(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            charsPerLine: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xsmall',
          fontWeight: 'bold',
          margin: 'none',
          paddingX: 'none',
          paddingY: 'medium',
        }
      )
      u.xA('src/typography/Heading/Subsets/H6/styles.css.ts', 'setUI')
      var Tt = (0, p.oB)({}, 'ClassName')
      u._K()
      var It = ['className']
      function Rt(e, t) {
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
      function Wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Rt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Rt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var zt = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, It)
        return ae(
          Wt(
            Wt({}, a.R.mergePropsWithWarning(Bt, r)),
            {},
            { level: 6, className: c()(Tt, t) }
          )
        )
      }
      zt.displayName = 'Heading.H6'
      var Lt = zt,
        Ft = ['className']
      function Ut(e, t) {
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
      function Kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ut(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ut(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Mt = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Ft),
          n = (0, xe.rd)(),
          i = (0, xe.V1)()
        return ae(
          Kt(
            Kt(Kt({}, Bt), r),
            {},
            {
              level: 6,
              className: c()(Tt, t),
              color:
                (null === r || void 0 === r ? void 0 : r.color) ||
                n ||
                Bt.color,
              fontSize:
                (null === r || void 0 === r ? void 0 : r.fontSize) ||
                i ||
                Bt.fontSize,
            }
          )
        )
      }
      Mt.displayName = 'H6'
      var $t = Mt,
        Ht =
          ((0, $.ZP)(
            (0, N.jsx)($t, {
              children:
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0448\u0435\u0441\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
            })
          ),
          (0, $.ZP)(
            (0, N.jsx)(ye, {
              textAlign: 'center',
              children:
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439',
            })
          ),
          function (e) {
            return ye(e)
          })
      ;(Ht.H1 = we),
        (Ht.H2 = We),
        (Ht.H3 = Ge),
        (Ht.H4 = ft),
        (Ht.H5 = Dt),
        (Ht.H6 = Lt)
      function qt(e, t) {
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
      function Yt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qt(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Xt = Yt(
        Yt(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        { color: 'black', fontSize: 'medium', fontWeight: 'regular' }
      )
      u.xA('src/typography/Link/ProtoSet/Component/styles.css.ts', 'setUI')
      var Vt = (0, p.oB)({}, 'ClassName')
      u._K()
      var Qt = ['href', 'title', 'className', 'children'],
        Gt = new l.Ek(),
        Jt = new l.AB({ useSpacing: !0 }),
        er = function (e) {
          var t = e.href,
            r = e.title,
            n = e.className,
            i = e.children,
            a = (0, o.Z)(e, Qt)
          return (0, N.jsx)('a', {
            href: t,
            className: c()([n, Vt, Gt.set(a).box, Jt.set(a).box]),
            title: r,
            children: i,
          })
        }
      u.xA('src/typography/Link/Set/styles.css.ts', 'setUI')
      var tr = (0, p.oB)({}, 'ClassName')
      u._K()
      var rr = ['className']
      function nr(e, t) {
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
      function or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : nr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ir = 'Link',
        cr = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, rr),
            n = (0, xe.rd)(),
            i = (0, xe.V1)()
          return er(
            or(
              or({}, a.R.mergePropsWithWarning(Xt, r, ir)),
              {},
              {
                className: c()(tr, t),
                color:
                  (null === r || void 0 === r ? void 0 : r.color) ||
                  n ||
                  Xt.color,
                fontSize:
                  (null === r || void 0 === r ? void 0 : r.fontSize) ||
                  i ||
                  Xt.fontSize,
              }
            )
          )
        }
      cr.displayName = ir
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
      function sr(e) {
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
      var lr = sr(
        sr(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            paddingX: 'none',
            paddingY: 'medium',
          }
        ),
        {},
        { as: 'p', color: 'black', fontSize: 'medium', fontWeight: 'regular' }
      )
      u.xA('src/typography/Paragraph/ProtoSet/Component/styles.css.ts', 'setUI')
      var ur = (0, p.oB)({}, 'ClassName')
      u._K()
      var pr = { p: 'p', div: 'div' },
        fr = ['as', 'className', 'zIndex', 'children'],
        br = new l.DK({ usePadding: !0, useMargin: !0 }),
        yr = new l.AB(),
        Or = function (e) {
          var t = e.as,
            r = e.className,
            n = e.zIndex,
            i = e.children,
            a = (0, o.Z)(e, fr)
          return (0, O.createElement)(
            pr[t],
            {
              className: c()([
                r,
                ur,
                br.set(a).box,
                yr.set(a).box,
                q.KN[n] || q.KN.default,
              ]),
            },
            i
          )
        },
        gr = ['fontSize']
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
      var hr = function (e) {
        var t = e.fontSize,
          r = (0, o.Z)(e, gr)
        return [(0, N.jsx)(xe.hf.Provider, { value: t })].reduce(
          function (e, t) {
            return O.cloneElement(t, {}, e)
          },
          (0, N.jsx)(
            Or,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? dr(Object(r), !0).forEach(function (t) {
                      ;(0, n.Z)(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : dr(Object(r)).forEach(function (t) {
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
      u.xA('src/typography/Paragraph/Set/styles.css.ts', 'setUI')
      var mr = (0, p.oB)({}, 'ClassName')
      u._K()
      var jr = ['className']
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
      function Pr(e) {
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
      var wr = 'Q.Paragraph',
        xr = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, jr)
          return hr(
            Pr(
              Pr({}, a.R.mergePropsWithWarning(lr, r, wr)),
              {},
              { className: c()(mr, t) }
            )
          )
        }
      xr.displayName = wr
      var Sr = ['className']
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
      function kr(e) {
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
      var Cr = 'Paragraph',
        Er = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Sr),
            n = (0, xe.V1)()
          return hr(
            kr(
              kr({}, a.R.mergePropsWithWarning(lr, r, Cr)),
              {},
              {
                className: c()(mr, t),
                fontSize:
                  (null === r || void 0 === r ? void 0 : r.fontSize) ||
                  n ||
                  lr.fontSize,
              }
            )
          )
        }
      Er.displayName = Cr
      var Ar = Er
      '<'
        .concat(Cr, '>\u041f\u0430\u0440\u0430\u0433\u0440\u0430\u0444</')
        .concat(Cr, '>')
      function Zr(e, t) {
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
      function Nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zr(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Zr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var _r = Nr(
        Nr(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
            paddingX: 'none',
            paddingY: 'medium',
          }
        ),
        {},
        { color: 'black', fontSize: 'medium', fontWeight: 'regular' }
      )
      u.xA('src/typography/Paragraph/Subsets/TextBlock/styles.css.ts', 'setUI')
      var Br = (0, p.oB)({}, 'ClassName')
      u._K()
      var Tr = ['className']
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
      function Rr(e) {
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
      var Wr = 'TextBlock',
        zr = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Tr)
          return hr(
            Rr(
              Rr({}, a.R.mergePropsWithWarning(_r, r, Wr)),
              {},
              { as: 'div', className: c()(Br, t) }
            )
          )
        }
      zr.displayName = Wr
      var Lr = zr,
        Fr = ['className']
      function Ur(e, t) {
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
            ? Ur(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ur(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Mr = 'TextBlock',
        $r = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Fr)
          return hr(
            Kr(
              Kr({}, a.R.mergePropsWithWarning(_r, r, Mr)),
              {},
              { as: 'div', className: c()(Br, t) }
            )
          )
        }
      $r.displayName = Mr
      var Hr = $r,
        qr =
          ((0, $.ZP)(
            (0, N.jsx)(Hr, {
              children:
                '\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442',
            })
          ),
          function (e) {
            return Ar(e)
          })
      qr.TextBlock = Lr
      var Yr = qr
      u.xA('src/typography/Placeholder/Component/styles.css.ts', 'setUI')
      ;(0, p.oB)(
        {
          border: 'none !important',
          fontFamily: 'monospace',
          verticalAlign: 'bottom',
          letterSpacing: -1,
          position: 'relative',
        },
        'Sentence'
      ),
        (0, p.oB)(
          { border: 'none !important', position: 'relative', bottom: 5 },
          'Letter'
        )
      u._K()
      var Xr = { as: 'span', padding: 'none' },
        Vr = {
          span: 'span',
          strong: 'strong',
          em: 'em',
          i: 'i',
          b: 'b',
          dfn: 'dfn',
          abbr: 'abbr',
          sup: 'sup',
          sub: 'sub',
          mark: 'mark',
          cite: 'cite',
          u: 'u',
          s: 's',
          small: 'small',
        }
      u.xA('src/typography/Text/ProtoSet/Component/styles.css.ts', 'setUI')
      var Qr = (0, p.oB)({}, 'ClassName')
      u._K()
      var Gr = ['as', 'title', 'className', 'children'],
        Jr = new l.AB({ useSpacing: !0 }),
        en = function (e) {
          var t = e.as,
            r = e.title,
            n = e.className,
            i = e.children,
            a = (0, o.Z)(e, Gr)
          return (0, O.createElement)(
            Vr[t],
            { className: c()([n, Qr, Jr.set(a).box]), title: r },
            i
          )
        }
      u.xA('src/typography/Text/Set/styles.css.ts', 'setUI')
      var tn = (0, p.oB)({}, 'ClassName')
      u._K()
      var rn = ['className']
      function nn(e, t) {
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
      function on(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : nn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var cn = 'Text',
        an = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, rn)
          return en(
            on(
              on({}, a.R.mergePropsWithWarning(Xr, r, cn)),
              {},
              { className: c()(tn, t) }
            )
          )
        }
      an.displayName = cn
      var sn = an
      function ln(e, t) {
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
      function un(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ln(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ln(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var pn = un(
        un(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        { color: 'black', fontSize: 'medium', fontWeight: 'regular' }
      )
      u.xA('src/typography/Text/Subsets/Abbreviation/styles.css.ts', 'setUI')
      var fn = (0, p.oB)({}, 'ClassName')
      u._K()
      var bn = ['className']
      function yn(e, t) {
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
      function On(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? yn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var gn = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, bn)
        return en(
          On(
            On({}, a.R.mergePropsWithWarning(pn, r)),
            {},
            { as: 'abbr', className: c()(fn, t) }
          )
        )
      }
      gn.displayName = 'Text.Abbreviation'
      var dn = gn
      function hn(e, t) {
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
      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? hn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : hn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var jn = 'Abbreviation',
        vn = function (e) {
          return en(mn(mn(mn({}, pn), e), {}, { as: 'abbr' }))
        }
      vn.displayName = jn
      var Pn = vn
      ;(0, $.ZP)(
        (0, N.jsx)(Pn, { title: 'HyperText Markup Language', children: 'HTML' })
      )
      function wn(e, t) {
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
      function xn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : wn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Sn = xn(
        xn(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        { color: 'black', fontSize: 'medium', fontWeight: 'bold' }
      )
      u.xA('src/typography/Text/Subsets/Attention/styles.css.ts', 'setUI')
      var Dn = (0, p.oB)({}, 'ClassName')
      u._K()
      var kn = ['className']
      function Cn(e, t) {
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
      function En(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Cn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Cn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var An = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, kn)
        return en(
          En(
            En({}, a.R.mergePropsWithWarning(Sn, r)),
            {},
            { as: 'b', className: c()(Dn, t) }
          )
        )
      }
      An.displayName = 'Text.Attention'
      var Zn = An
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
      function _n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Nn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Bn = 'Attention',
        Tn = function (e) {
          return en(_n(_n(_n({}, Sn), e), {}, { as: 'b' }))
        }
      Tn.displayName = Bn
      var In = Tn
      ;(0, $.ZP)(
        (0, N.jsx)(In, {
          children:
            '\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432 \u0442\u0430\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u0430\u043a \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u0432 \u043a\u0440\u0430\u0442\u043a\u043e\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0438, \u0438\u043c\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0432 \u043e\u0442\u0437\u044b\u0432\u0435, \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0447\u0430\u0441\u0442\u044f\u0445 \u0442\u0435\u043a\u0441\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044b\u0447\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0442 \u0436\u0438\u0440\u043d\u044b\u043c',
        })
      )
      function Rn(e, t) {
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
      function Wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Rn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Rn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var zn = Wn(
        Wn(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xxxlarge',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Citation/styles.css.ts', 'setUI')
      var Ln = (0, p.oB)({}, 'ClassName')
      u._K()
      var Fn = ['className']
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
      function Kn(e) {
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
      var Mn = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Fn)
        return en(
          Kn(
            Kn({}, a.R.mergePropsWithWarning(zn, r)),
            {},
            { as: 'cite', className: c()(Ln, t) }
          )
        )
      }
      Mn.displayName = 'Text.Citation'
      var $n = Mn
      function Hn(e, t) {
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
      function qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Hn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Hn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Yn = 'Citation',
        Xn = function (e) {
          return en(qn(qn(qn({}, zn), e), {}, { as: 'cite' }))
        }
      Xn.displayName = Yn
      var Vn = Xn
      ;(0, $.ZP)(
        (0, N.jsx)(Vn, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Qn(e, t) {
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
      function Gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Qn(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Qn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Jn = Gn(
        Gn(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xxxlarge',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/DefinedTerm/styles.css.ts', 'setUI')
      var eo = (0, p.oB)({}, 'ClassName')
      u._K()
      var to = ['className']
      function ro(e, t) {
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
      function no(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ro(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ro(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var oo = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, to)
        return en(
          no(
            no({}, a.R.mergePropsWithWarning(Jn, r)),
            {},
            { as: 'dfn', className: c()(eo, t) }
          )
        )
      }
      oo.displayName = 'Text.DefinedTerm'
      var io = oo
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
      var so = 'DefinedTerm',
        lo = function (e) {
          return en(ao(ao(ao({}, Jn), e), {}, { as: 'dfn' }))
        }
      lo.displayName = so
      var uo = lo
      ;(0, $.ZP)(
        (0, N.jsx)(uo, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function po(e, t) {
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
      function fo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? po(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : po(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var bo = fo(
        fo(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xxlarge',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Disclaimer/styles.css.ts', 'setUI')
      var yo = (0, p.oB)({}, 'ClassName')
      u._K()
      var Oo = ['className']
      function go(e, t) {
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
      function ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? go(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : go(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var mo = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Oo)
        return en(
          ho(
            ho({}, a.R.mergePropsWithWarning(bo, r)),
            {},
            { as: 'small', className: c()(yo, t) }
          )
        )
      }
      mo.displayName = 'Text.Disclaimer'
      var jo = mo
      function vo(e, t) {
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
      function Po(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? vo(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var wo = 'Disclaimer',
        xo = function (e) {
          return en(Po(Po(Po({}, bo), e), {}, { as: 'small' }))
        }
      xo.displayName = wo
      var So = xo
      ;(0, $.ZP)(
        (0, N.jsx)(So, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Do(e, t) {
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
      function ko(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Do(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Do(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Co = ko(
        ko(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xxlarge',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Highlight/styles.css.ts', 'setUI')
      var Eo = (0, p.oB)({}, 'ClassName')
      u._K()
      var Ao = ['className']
      function Zo(e, t) {
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
      function No(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zo(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Zo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var _o = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Ao)
        return en(
          No(
            No({}, a.R.mergePropsWithWarning(Co, r)),
            {},
            { as: 'mark', className: c()(Eo, t) }
          )
        )
      }
      _o.displayName = 'Text.Highlight'
      var Bo = _o
      function To(e, t) {
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
      function Io(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? To(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : To(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ro = 'Highlight',
        Wo = function (e) {
          return en(Io(Io(Io({}, Co), e), {}, { as: 'mark' }))
        }
      Wo.displayName = Ro
      var zo = Wo
      ;(0, $.ZP)(
        (0, N.jsx)(zo, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Lo(e, t) {
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
      function Fo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Lo(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Lo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Uo = Fo(
        Fo(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'xlarge',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Idiomatic/styles.css.ts', 'setUI')
      var Ko = (0, p.oB)({}, 'ClassName')
      u._K()
      var Mo = ['className']
      function $o(e, t) {
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
      function Ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $o(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var qo = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Mo)
        return en(
          Ho(
            Ho({}, a.R.mergePropsWithWarning(Uo, r)),
            {},
            { as: 'i', className: c()(Ko, t) }
          )
        )
      }
      qo.displayName = 'Text.Idiomatic'
      var Yo = qo
      function Xo(e, t) {
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
      function Vo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xo(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Xo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Qo = 'Idiomatic',
        Go = function (e) {
          return en(Vo(Vo(Vo({}, Uo), e), {}, { as: 'i' }))
        }
      Go.displayName = Qo
      var Jo = Go
      ;(0, $.ZP)(
        (0, N.jsx)(Jo, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function ei(e, t) {
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
      function ti(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ei(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ei(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ri = ti(
        ti(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        { color: 'black', fontSize: 'medium', fontWeight: 'bold' }
      )
      u.xA('src/typography/Text/Subsets/Important/styles.css.ts', 'setUI')
      var ni = (0, p.oB)({}, 'ClassName')
      u._K()
      var oi = ['className']
      function ii(e, t) {
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
      function ci(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ii(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ii(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ai = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, oi)
        return en(
          ci(
            ci({}, a.R.mergePropsWithWarning(ri, r)),
            {},
            { as: 'strong', className: c()(ni, t) }
          )
        )
      }
      ai.displayName = 'Text.Important'
      var si = ai
      function li(e, t) {
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
      function ui(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? li(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : li(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var pi = 'Important',
        fi = function (e) {
          var t = (0, xe.rd)(),
            r = (0, xe.V1)()
          return en(
            ui(
              ui(ui({}, ri), e),
              {},
              {
                as: 'strong',
                color:
                  (null === e || void 0 === e ? void 0 : e.color) ||
                  t ||
                  ri.color,
                fontSize:
                  (null === e || void 0 === e ? void 0 : e.fontSize) ||
                  r ||
                  ri.fontSize,
              }
            )
          )
        }
      fi.displayName = pi
      var bi = fi
      ;(0, $.ZP)(
        (0, N.jsx)(bi, {
          children:
            '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u0438',
        })
      )
      function yi(e, t) {
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
      function Oi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? yi(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yi(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var gi = Oi(
        Oi(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'large',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Outdated/styles.css.ts', 'setUI')
      var di = (0, p.oB)({}, 'ClassName')
      u._K()
      var hi = ['className']
      function mi(e, t) {
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
      function ji(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? mi(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mi(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var vi = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, hi)
        return en(
          ji(
            ji({}, a.R.mergePropsWithWarning(gi, r)),
            {},
            { as: 's', className: c()(di, t) }
          )
        )
      }
      vi.displayName = 'Text.Outdated'
      var Pi = vi
      function wi(e, t) {
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
      function xi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wi(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : wi(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Si = 'Outdated',
        Di = function (e) {
          return en(xi(xi(xi({}, gi), e), {}, { as: 's' }))
        }
      Di.displayName = Si
      var ki = Di
      ;(0, $.ZP)(
        (0, N.jsx)(ki, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u044f\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Ci(e, t) {
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
      function Ei(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ci(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ci(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ai = Ei(
        Ei(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'medium',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/StressEmphasis/styles.css.ts', 'setUI')
      var Zi = (0, p.oB)({}, 'ClassName')
      u._K()
      var Ni = ['className']
      function _i(e, t) {
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
      function Bi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _i(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ti = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Ni)
        return en(
          Bi(
            Bi({}, a.R.mergePropsWithWarning(Ai, r)),
            {},
            { as: 'em', className: c()(Zi, t) }
          )
        )
      }
      Ti.displayName = 'Text.StressEmphasis'
      var Ii = Ti
      function Ri(e, t) {
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
      function Wi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ri(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ri(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var zi = 'StressEmphasis',
        Li = function (e) {
          return en(Wi(Wi(Wi({}, Ai), e), {}, { as: 'em' }))
        }
      Li.displayName = zi
      var Fi = Li
      ;(0, $.ZP)(
        (0, N.jsx)(Fi, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0448\u0435\u0441\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function Ui(e, t) {
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
      function Ki(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ui(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ui(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Mi = Ki(
        Ki(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'medium',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Subscript/styles.css.ts', 'setUI')
      var $i = (0, p.oB)({}, 'ClassName')
      u._K()
      var Hi = ['className']
      function qi(e, t) {
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
      function Yi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qi(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qi(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Xi = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Hi)
        return en(
          Yi(
            Yi({}, a.R.mergePropsWithWarning(Mi, r)),
            {},
            { as: 'sub', className: c()($i, t) }
          )
        )
      }
      Xi.displayName = 'Text.Subscript'
      var Vi = Xi
      function Qi(e, t) {
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
      function Gi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Qi(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Qi(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ji = 'Subscript',
        ec = function (e) {
          return en(Gi(Gi(Gi({}, Mi), e), {}, { as: 'sub' }))
        }
      ec.displayName = Ji
      var tc = ec
      ;(0, $.ZP)(
        (0, N.jsx)(tc, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0448\u0435\u0441\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function rc(e, t) {
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
      function nc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : rc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var oc = nc(
        nc(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'medium',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA('src/typography/Text/Subsets/Superscript/styles.css.ts', 'setUI')
      var ic = (0, p.oB)({}, 'ClassName')
      u._K()
      var cc = ['className']
      function ac(e, t) {
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
      function sc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ac(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ac(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var lc = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, cc)
        return en(
          sc(
            sc({}, a.R.mergePropsWithWarning(oc, r)),
            {},
            { as: 'sup', className: c()(ic, t) }
          )
        )
      }
      lc.displayName = 'Text.Superscript'
      var uc = lc
      function pc(e, t) {
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
      function fc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var bc = 'Superscript',
        yc = function (e) {
          return en(fc(fc(fc({}, oc), e), {}, { as: 'sup' }))
        }
      yc.displayName = bc
      var Oc = yc
      ;(0, $.ZP)(
        (0, N.jsx)(Oc, {
          children:
            '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0448\u0435\u0441\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
        })
      )
      function gc(e, t) {
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
      function dc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : gc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var hc = dc(
        dc(
          {},
          {
            fontFamily: 'primary',
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        { color: 'black', fontSize: 'medium', fontWeight: 'regular' }
      )
      u.xA('src/typography/Text/Subsets/TextInline/styles.css.ts', 'setUI')
      var mc = (0, p.oB)({}, 'ClassName')
      u._K()
      var jc = ['className']
      function vc(e, t) {
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
      function Pc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? vc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var wc = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, jc)
        return en(
          Pc(
            Pc({}, a.R.mergePropsWithWarning(hc, r)),
            {},
            { as: 'span', className: c()(mc, t) }
          )
        )
      }
      wc.displayName = 'Text.TextInline'
      var xc = wc
      function Sc(e, t) {
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
      function Dc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Sc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Sc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var kc = 'TextInline',
        Cc = function (e) {
          return en(Dc(Dc(Dc({}, hc), e), {}, { as: 'span' }))
        }
      Cc.displayName = kc
      var Ec = Cc
      ;(0, $.ZP)(
        (0, N.jsx)(Ec, {
          children:
            '\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442',
        })
      )
      function Ac(e, t) {
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
      function Zc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ac(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ac(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Nc = Zc(
        Zc(
          {},
          {
            fontStyle: 'normal',
            outline: 'none',
            textAlign: 'start',
            textDecorationColor: 'currentColor',
            textDecorationLine: 'none',
            textDecorationStyle: 'inherit',
            textDecorationThickness: 'initial',
            textTransform: 'none',
          }
        ),
        {},
        {
          color: 'black',
          fontFamily: 'primary',
          fontSize: 'medium',
          fontWeight: 'bold',
          padding: 'none',
        }
      )
      u.xA(
        'src/typography/Text/Subsets/UnarticulatedAnnotation/styles.css.ts',
        'setUI'
      )
      var _c = (0, p.oB)({}, 'ClassName')
      u._K()
      var Bc = ['className']
      function Tc(e, t) {
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
      function Ic(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Tc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Tc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Rc = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, Bc)
        return en(
          Ic(
            Ic({}, a.R.mergePropsWithWarning(Nc, r)),
            {},
            { as: 'u', className: c()(_c, t) }
          )
        )
      }
      Rc.displayName = 'Text.UnarticulatedAnnotation'
      var Wc = Rc
      function zc(e, t) {
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
      function Lc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? zc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : zc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Fc = 'UnarticulatedAnnotation',
        Uc = function (e) {
          return en(Lc(Lc(Lc({}, Nc), e), {}, { as: 'u' }))
        }
      Uc.displayName = Fc
      var Kc = Uc,
        Mc =
          ((0, $.ZP)(
            (0, N.jsx)(Kc, {
              children:
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0448\u0435\u0441\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f',
            })
          ),
          function (e) {
            return sn(e)
          })
      ;(Mc.Abbreviation = dn),
        (Mc.Attention = Zn),
        (Mc.Citation = $n),
        (Mc.DefinedTerm = io),
        (Mc.Disclaimer = jo),
        (Mc.Highlight = Bo),
        (Mc.Idiomatic = Yo),
        (Mc.Important = si),
        (Mc.Outdated = Pi),
        (Mc.Reference = $n),
        (Mc.StressEmphasis = Ii),
        (Mc.Subscript = Vi),
        (Mc.Superscript = uc),
        (Mc.TextInline = xc),
        (Mc.UnarticulatedAnnotation = Wc)
      var $c = {
        axis: 'horizontal',
        color: 'black',
        offset: 'none',
        weight: 'thin',
      }
      function Hc(e, t) {
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
      function qc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Hc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Hc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ProtoComponent/css/axis/styles.css.ts',
        'setUI'
      )
      a.b.apply(void 0, ['vertical', 'horizontal'])
      var Yc = (0, p.DA)(
          {
            vertical: {
              borderTop: 'var(--divider-offset) solid transparent',
              borderRight: 'none',
              borderBottom: 'var(--divider-offset) solid transparent',
              borderLeft: 'none',
              height: 'initial',
              width: 'var(--divider-weight)',
              backgroundColor: 'var(--divider-color)',
              backgroundClip: 'padding-box',
            },
            horizontal: {
              borderTop: 'none',
              borderRight: 'var(--divider-offset) solid transparent',
              borderBottom: 'none',
              borderLeft: 'var(--divider-offset) solid transparent',
              height: 'var(--divider-weight)',
              width: 'initial',
              backgroundColor: 'var(--divider-color)',
              backgroundClip: 'padding-box',
            },
          },
          function (e) {
            return e
          },
          'Styles'
        ),
        Xc = qc(qc({}, Yc), {}, { default: Yc.horizontal })
      function Vc(e) {
        switch (!0) {
          case 'axis' in e:
            return e.axis
          default:
            return
        }
      }
      u._K()
      var Qc = (0, O.createContext)(void 0)
      function Gc(e, t) {
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
      function Jc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Gc(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Gc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ProtoComponent/css/color/styles.css.ts',
        'setUI'
      )
      a.b.apply(void 0, ['primary', 'secondary', 'black', 'white'])
      var ea = (0, p.DA)(
          {
            primary: { hue: 206, saturation: '100%', lightness: '41.6%' },
            secondary: { hue: 207.7, saturation: '68.9%', lightness: '50.8%' },
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
        ),
        ta = Jc(Jc({}, ea), {}, { default: ea.primary, initial: ea.inherit })
      function ra(e) {
        switch (!0) {
          case 'color' in e:
            return e.color
          default:
            return
        }
      }
      u._K()
      var na = (0, O.createContext)(void 0)
      function oa(e, t) {
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
      function ia(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? oa(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : oa(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ProtoComponent/css/offset/styles.css.ts',
        'setUI'
      )
      a.b.apply(void 0, [
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
      ])
      var ca = (0, p.DA)(
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
        ),
        aa = ia(ia({}, ca), {}, { default: ca.none })
      function sa(e) {
        switch (!0) {
          case 'offset' in e:
            return e.offset
          default:
            return
        }
      }
      u._K()
      var la = (0, O.createContext)(void 0)
      function ua(e, t) {
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
      function pa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ua(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ua(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ProtoComponent/css/weight/styles.css.ts',
        'setUI'
      )
      a.b.apply(void 0, ['none', 'thin', 'light', 'medium', 'bold'])
      var fa = (0, p.DA)(
          { none: 0, thin: 1, light: 2, medium: 3, bold: 4 },
          function (e) {
            return { '--divider-weight': e }
          },
          'Styles'
        ),
        ba = pa(pa({}, fa), {}, { default: fa.none })
      function ya(e) {
        switch (!0) {
          case 'weight' in e:
            return e.weight
          default:
            return
        }
      }
      u._K()
      var Oa = (0, O.createContext)(void 0)
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ProtoComponent/styles.css.ts',
        'setUI'
      )
      var ga = (0, p.oB)({ margin: 0 }, 'ClassName')
      u._K()
      var da = function (e) {
        var t = e.className,
          r = e.axis,
          n = e.color,
          o = e.offset,
          i = e.weight
        return (0, N.jsx)('hr', {
          className: c()([ga, t, Xc[r], ta[n], aa[o], ba[i]]),
        })
      }
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ResolveDefaultStyles/styles.css.ts',
        'setUI'
      )
      var ha = (0, p.oB)({}, 'ClassName')
      u._K()
      var ma = ['defaultStyle', 'className']
      function ja(e, t) {
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
      function va(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ja(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ja(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Pa = function (e) {
        var t = e.defaultStyle,
          r = e.className,
          n = (0, o.Z)(e, ma)
        return da(
          va(
            va({}, n),
            {},
            {
              className: c()(ha, r),
              axis:
                Vc(n) ||
                (null === n || void 0 === n ? void 0 : n.axis) ||
                t.axis ||
                'default',
              color:
                ra(n) ||
                (null === n || void 0 === n ? void 0 : n.color) ||
                (null === t || void 0 === t ? void 0 : t.color) ||
                'default',
              offset:
                sa(n) ||
                (null === n || void 0 === n ? void 0 : n.offset) ||
                t.offset ||
                'default',
              weight:
                ya(n) ||
                (null === n || void 0 === n ? void 0 : n.weight) ||
                t.weight ||
                'default',
            }
          )
        )
      }
      u.xA(
        'src/typography/ThematicBreak/ProtoSet/ResolveContext/styles.css.ts',
        'setUI'
      )
      var wa = (0, p.oB)({}, 'ClassName')
      u._K()
      var xa = ['className']
      function Sa(e, t) {
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
      function Da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Sa(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Sa(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ka = function (e) {
        var t = e.className,
          r = (0, o.Z)(e, xa),
          n = (0, O.useContext)(Qc),
          i = (0, O.useContext)(na),
          a = (0, O.useContext)(la),
          s = (0, O.useContext)(Oa)
        return Pa(
          Da(
            Da({}, r),
            {},
            {
              className: c()(wa, t),
              axis: (null === r || void 0 === r ? void 0 : r.axis) || n,
              color: (null === r || void 0 === r ? void 0 : r.color) || i,
              offset: (null === r || void 0 === r ? void 0 : r.offset) || a,
              weight: (null === r || void 0 === r ? void 0 : r.weight) || s,
            }
          )
        )
      }
      u.xA('src/typography/ThematicBreak/Set/styles.css.ts', 'setUI')
      var Ca = (0, p.oB)({}, 'ClassName')
      u._K()
      var Ea = ['className']
      function Aa(e, t) {
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
      function Za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Aa(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Aa(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Na = 'ThematicBreak',
        _a = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, Ea)
          return ka(
            Za(
              Za({}, a.R.mergePropsWithWarning($c, r, Na)),
              {},
              { defaultStyle: $c, className: c()(Ca, t) }
            )
          )
        }
      _a.displayName = Na
      var Ba = _a,
        Ta = r(1147)
      u.xA('src/typography/ThematicBreak/Supersets/Flex/styles.css.ts', 'setUI')
      var Ia = (0, p.oB)({}, 'ClassName')
      u._K()
      var Ra = ['axis', 'color', 'offset', 'weight', 'className']
      function Wa(e, t) {
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
      function za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Wa(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Wa(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var La = function (e) {
        return Ba(e)
      }
      La.$Flex = function (e) {
        var t = e.axis,
          r = e.color,
          n = e.offset,
          i = e.weight,
          a = e.className,
          s = (0, o.Z)(e, Ra)
        return [
          (0, N.jsx)(Qc.Provider, { value: t }),
          (0, N.jsx)(na.Provider, { value: r }),
          (0, N.jsx)(la.Provider, { value: n }),
          (0, N.jsx)(Oa.Provider, { value: i }),
        ].reduce(function (e, t) {
          return O.cloneElement(t, {}, e)
        }, (0, N.jsx)(Ta.Z, za(za({}, s), {}, { className: c()(Ia, a) })))
      }
      var Fa = 'Space',
        Ua = function () {
          return (0, N.jsx)(N.Fragment, { children: ' ' })
        }
      Ua.displayName = Fa
      var Ka = Ua,
        Ma = 'NonBreakable',
        $a = function () {
          return (0, N.jsx)(N.Fragment, { children: '\xa0' })
        }
      $a.displayName = Ma
      var Ha = $a
      ;(0, $.ZP)((0, N.jsx)(Ka, {})), (0, $.ZP)((0, N.jsx)(Ha, {}))
      function qa(e, t) {
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
      function Ya(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? qa(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qa(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Xa = Ya(
          Ya(
            {},
            {
              fontFamily: 'primary',
              fontStyle: 'normal',
              outline: 'none',
              textAlign: 'start',
              textDecorationColor: 'currentColor',
              textDecorationLine: 'none',
              textDecorationStyle: 'inherit',
              textDecorationThickness: 'initial',
              textTransform: 'none',
            }
          ),
          {},
          { color: 'black', fontSize: 'medium', fontWeight: 'regular' }
        ),
        Va = r(9387)
      u.xA('src/typography/Time/ProtoSet/Component/styles.css.ts', 'setUI')
      var Qa = (0, p.oB)({ fontWeight: Va.m6.bold }, 'ClassName')
      u._K()
      var Ga = ['datetime', 'title', 'children'],
        Ja = new l.DK({ useMargin: !0, usePadding: !0 }),
        es = new l.AB(),
        ts = function (e) {
          var t = e.datetime,
            r = e.title,
            n = e.children,
            i = (0, o.Z)(e, Ga)
          return (0, N.jsx)('time', {
            className: c()([Qa, Ja.set(i).padding, es.set(i).box]),
            dateTime: t,
            title: r,
            children: n,
          })
        }
      u.xA('src/typography/Time/Set/styles.css.ts', 'setUI')
      var rs = (0, p.oB)({}, 'ClassName')
      u._K()
      var ns = ['className']
      function os(e, t) {
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
      function is(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? os(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : os(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var cs = 'Time',
        as = function (e) {
          var t = e.className,
            r = (0, o.Z)(e, ns),
            n = (0, xe.rd)(),
            i = (0, xe.V1)()
          return ts(
            is(
              is({}, a.R.mergePropsWithWarning(Xa, r, cs)),
              {},
              {
                className: c()(rs, t),
                color:
                  (null === r || void 0 === r ? void 0 : r.color) ||
                  n ||
                  Xa.color,
                fontSize:
                  (null === r || void 0 === r ? void 0 : r.fontSize) ||
                  i ||
                  Xa.fontSize,
              }
            )
          )
        }
      as.displayName = cs
      var ss = as,
        ls =
          ('<'.concat(cs, '>04.12.1995</').concat(cs, '>'),
          function (e) {
            return ss(e)
          })
    },
    1264: function (e, t, r) {
      'use strict'
      r.d(t, {
        R: function () {
          return a
        },
        b: function () {
          return l
        },
      })
      var n = r(2809),
        o = r(6311)
      function i(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var a = {
          mergePropsWithWarning: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 'Component'
            return (
              Object.entries(t).forEach(function (t) {
                var n = (0, o.Z)(t, 2),
                  i = n[0],
                  c = n[1]
                Object.prototype.hasOwnProperty.call(e, i) &&
                  e[i] === c &&
                  console.warn(
                    '%cYou are passing %c'
                      .concat(i, ' %cwith %c')
                      .concat(
                        c,
                        ' %cvalue, which is already a default value for %c<'
                      )
                      .concat(r, ' />'),
                    '',
                    'color:orange;font-weight:bold',
                    '',
                    'color:orange;font-weight:bold',
                    '',
                    'color:red;font-weight:bold'
                  )
              }),
              c(c({}, e), t)
            )
          },
        },
        s = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return t
        }
      ;(s.numeric = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return t
      }),
        (s.mixed = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return t
        })
      var l = s
    },
    6363: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(395)
        },
      ])
    },
    4271: function (e) {
      e.exports = {
        footer: 'styles_footer__2qsce',
        form: 'styles_form__2bF8n',
        label: 'styles_label__2ZoVv',
        input: 'styles_input__yUqCP',
        button: 'styles_button__1_6KQ',
        hr: 'styles_hr__lRKJP',
        list: 'styles_list__2d5li',
        item: 'styles_item__3CglY',
        link: 'styles_link__2xqfx',
        alert: 'styles_alert__3h2qz',
      }
    },
    3146: function () {},
    3071: function (e, t, r) {
      'use strict'
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      }
      function o() {
        return 'undefined' !== typeof WeakMap
          ? new WeakMap()
          : {
              add: n,
              delete: n,
              get: n,
              set: n,
              has: function (e) {
                return !1
              },
            }
      }
      e = r.hmd(e)
      var i = Object.prototype.hasOwnProperty,
        c = function (e, t) {
          return i.call(e, t)
        }
      function a(e, t) {
        for (var r in t) c(t, r) && (e[r] = t[r])
        return e
      }
      var s = /^[ \t]*(?:\r\n|\r|\n)/,
        l = /(?:\r\n|\r|\n)[ \t]*$/,
        u = /^(?:[\r\n]|$)/,
        p = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        f = /^[ \t]*[\r\n][ \t\r\n]*$/
      function b(e, t, r) {
        var n = 0,
          o = e[0].match(p)
        o && (n = o[1].length)
        var i = new RegExp('(\\r\\n|\\r|\\n).{0,' + n + '}', 'g')
        t && (e = e.slice(1))
        var c = r.newline,
          a = r.trimLeadingNewline,
          u = r.trimTrailingNewline,
          f = 'string' === typeof c,
          b = e.length
        return e.map(function (e, t) {
          return (
            (e = e.replace(i, '$1')),
            0 === t && a && (e = e.replace(s, '')),
            t === b - 1 && u && (e = e.replace(l, '')),
            f &&
              (e = e.replace(/\r\n|\n|\r/g, function (e) {
                return c
              })),
            e
          )
        })
      }
      function y(e, t) {
        for (var r = '', n = 0, o = e.length; n < o; n++)
          (r += e[n]), n < o - 1 && (r += t[n])
        return r
      }
      function O(e) {
        return c(e, 'raw') && c(e, 'length')
      }
      var g = (function e(t) {
        var r = o(),
          n = o()
        return a(
          function o(i) {
            for (var c = [], s = 1; s < arguments.length; s++)
              c[s - 1] = arguments[s]
            if (O(i)) {
              var l = i,
                p = (c[0] === o || c[0] === g) && f.test(l[0]) && u.test(l[1]),
                d = p ? n : r,
                h = d.get(l)
              if ((h || ((h = b(l, p, t)), d.set(l, h)), 0 === c.length))
                return h[0]
              var m = y(h, p ? c.slice(1) : c)
              return m
            }
            return e(a(a({}, t), i || {}))
          },
          {
            string: function (e) {
              return b([e], !1, t)[0]
            },
          }
        )
      })({ trimLeadingNewline: !0, trimTrailingNewline: !0 })
      t.Z = g
      try {
        ;(e.exports = g),
          Object.defineProperty(g, '__esModule', { value: !0 }),
          (g.default = g),
          (g.outdent = g)
      } catch (d) {}
    },
    3425: function (e, t, r) {
      'use strict'
      var n,
        o = r(7294),
        i = (n = o) && 'object' === typeof n && 'default' in n ? n.default : n,
        c = function (e, t) {
          return 0 === e ? '' : new Array(e * t).fill(' ').join('')
        }
      function a(e) {
        return (a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e)
          })(e) ||
          (function (e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return l(e, t)
            var r = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === r && e.constructor && (r = e.constructor.name)
            if ('Map' === r || 'Set' === r) return Array.from(e)
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return l(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function l(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function u(e) {
        return (
          !0 ===
            (null != (t = e) &&
              'object' === typeof t &&
              !1 === Array.isArray(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        )
        var t
      }
      var p =
        'undefined' !== typeof globalThis
          ? globalThis
          : 'undefined' !== typeof window
          ? window
          : 'undefined' !== typeof r.g
          ? r.g
          : 'undefined' !== typeof self
          ? self
          : {}
      var f,
        b,
        y =
          ((function (e, t) {
            var r =
                (p && p.__assign) ||
                function () {
                  return (r =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o])
                      return e
                    }).apply(this, arguments)
                },
              n =
                (p && p.__spreadArrays) ||
                function () {
                  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                    e += arguments[t].length
                  var n = Array(e),
                    o = 0
                  for (t = 0; t < r; t++)
                    for (
                      var i = arguments[t], c = 0, a = i.length;
                      c < a;
                      c++, o++
                    )
                      n[o] = i[c]
                  return n
                }
            Object.defineProperty(t, '__esModule', { value: !0 })
            var o = []
            t.prettyPrint = function e(t, i, c) {
              void 0 === c && (c = '')
              var a,
                s = r(r({}, { indent: '\t', singleQuotes: !0 }), i)
              a =
                void 0 === s.inlineCharacterLimit
                  ? {
                      newLine: '\n',
                      newLineOrSpace: '\n',
                      pad: c,
                      indent: c + s.indent,
                    }
                  : {
                      newLine: '@@__PRETTY_PRINT_NEW_LINE__@@',
                      newLineOrSpace: '@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@',
                      pad: '@@__PRETTY_PRINT_PAD__@@',
                      indent: '@@__PRETTY_PRINT_INDENT__@@',
                    }
              var l,
                u,
                p = function (e) {
                  if (void 0 === s.inlineCharacterLimit) return e
                  var t = e
                    .replace(new RegExp(a.newLine, 'g'), '')
                    .replace(new RegExp(a.newLineOrSpace, 'g'), ' ')
                    .replace(new RegExp(a.pad + '|' + a.indent, 'g'), '')
                  return t.length <= s.inlineCharacterLimit
                    ? t
                    : e
                        .replace(
                          new RegExp(a.newLine + '|' + a.newLineOrSpace, 'g'),
                          '\n'
                        )
                        .replace(new RegExp(a.pad, 'g'), c)
                        .replace(new RegExp(a.indent, 'g'), c + s.indent)
                }
              if (-1 !== o.indexOf(t)) return '"[Circular]"'
              if (
                null === t ||
                void 0 === t ||
                'number' === typeof t ||
                'boolean' === typeof t ||
                'function' === typeof t ||
                'symbol' === typeof t ||
                ((l = t),
                '[object RegExp]' === Object.prototype.toString.call(l))
              )
                return String(t)
              if (t instanceof Date)
                return "new Date('" + t.toISOString() + "')"
              if (Array.isArray(t)) {
                if (0 === t.length) return '[]'
                o.push(t)
                var f =
                  '[' +
                  a.newLine +
                  t
                    .map(function (r, n) {
                      var o =
                          t.length - 1 === n
                            ? a.newLine
                            : ',' + a.newLineOrSpace,
                        i = e(r, s, c + s.indent)
                      return (
                        s.transform && (i = s.transform(t, n, i)),
                        a.indent + i + o
                      )
                    })
                    .join('') +
                  a.pad +
                  ']'
                return o.pop(), p(f)
              }
              if (
                (function (e) {
                  var t = typeof e
                  return null !== e && ('object' === t || 'function' === t)
                })(t)
              ) {
                var b = n(
                  Object.keys(t),
                  ((u = t),
                  Object.getOwnPropertySymbols(u).filter(function (e) {
                    return Object.prototype.propertyIsEnumerable.call(u, e)
                  }))
                )
                return (
                  s.filter &&
                    (b = b.filter(function (e) {
                      return s.filter && s.filter(t, e)
                    })),
                  0 === b.length
                    ? '{}'
                    : (o.push(t),
                      (f =
                        '{' +
                        a.newLine +
                        b
                          .map(function (r, n) {
                            var o =
                                b.length - 1 === n
                                  ? a.newLine
                                  : ',' + a.newLineOrSpace,
                              i = 'symbol' === typeof r,
                              l =
                                !i &&
                                /^[a-z$_][a-z$_0-9]*$/i.test(r.toString()),
                              u = i || l ? r : e(r, s),
                              p = e(t[r], s, c + s.indent)
                            return (
                              s.transform && (p = s.transform(t, r, p)),
                              a.indent + String(u) + ': ' + p + o
                            )
                          })
                          .join('') +
                        a.pad +
                        '}'),
                      o.pop(),
                      p(f))
                )
              }
              return (
                (t = String(t).replace(/[\r\n]/g, function (e) {
                  return '\n' === e ? '\\n' : '\\r'
                })),
                s.singleQuotes
                  ? "'" + (t = t.replace(/\\?'/g, "\\'")) + "'"
                  : '"' + (t = t.replace(/"/g, '\\"')) + '"'
              )
            }
          })((f = { exports: {} }), f.exports),
          f.exports)
      ;(b = y) &&
        b.__esModule &&
        Object.prototype.hasOwnProperty.call(b, 'default') &&
        b.default
      var O = y.prettyPrint
      function g(e) {
        return null === e ||
          'object' !== a(e) ||
          e instanceof Date ||
          e instanceof RegExp
          ? e
          : Array.isArray(e)
          ? e.map(g)
          : Object.keys(e)
              .sort()
              .reduce(function (t, r) {
                return (
                  '_owner' === r ||
                    (t[r] = 'current' === r ? '[Circular]' : g(e[r])),
                  t
                )
              }, {})
      }
      var d = function (e) {
          return { type: 'string', value: e }
        },
        h = Boolean(o.Fragment),
        m = function (e) {
          return (
            e.type.displayName ||
            ('_default' !== e.type.name ? e.type.name : null) ||
            ('function' === typeof e.type ? 'No Display Name' : e.type)
          )
        },
        j = function (e, t) {
          return 'children' !== t
        },
        v = function (e) {
          return !0 !== e && !1 !== e && null !== e && '' !== e
        },
        P = function (e, t) {
          var r = {}
          return (
            Object.keys(e)
              .filter(function (r) {
                return t(e[r], r)
              })
              .forEach(function (t) {
                return (r[t] = e[t])
              }),
            r
          )
        },
        w = function e(t, r) {
          var n = r.displayName,
            c = void 0 === n ? m : n
          if ('string' === typeof t) return d(t)
          if ('number' === typeof t) return { type: 'number', value: t }
          if (!i.isValidElement(t))
            throw new Error(
              'react-element-to-jsx-string: Expected a React.Element, got `'.concat(
                a(t),
                '`'
              )
            )
          var s = c(t),
            l = P(t.props, j)
          null !== t.ref && (l.ref = t.ref)
          var u = t.key
          'string' === typeof u && u.search(/^\./) && (l.key = u)
          var p = P(t.type.defaultProps || {}, j),
            f = i.Children.toArray(t.props.children)
              .filter(v)
              .map(function (t) {
                return e(t, r)
              })
          return h && t.type === o.Fragment
            ? (function (e, t) {
                return { type: 'ReactFragment', key: e, childrens: t }
              })(u, f)
            : (function (e, t, r, n) {
                return {
                  type: 'ReactElement',
                  displayName: e,
                  props: t,
                  defaultProps: r,
                  childrens: n,
                }
              })(s, l, p, f)
        }
      function x() {}
      var S = function (e) {
          return e
            .toString()
            .split('\n')
            .map(function (e) {
              return e.trim()
            })
            .join('')
        },
        D = S,
        k = function (e, t) {
          var r = t.functionValue,
            n = void 0 === r ? D : r
          return n(t.showFunctions || n !== D ? e : x)
        },
        C = function (e, t, r, n) {
          if ('number' === typeof e) return '{'.concat(String(e), '}')
          if ('string' === typeof e)
            return '"'.concat(e.replace(/"/g, '&quot;'), '"')
          if ('symbol' === a(e)) {
            var i = e
              .valueOf()
              .toString()
              .replace(/Symbol\((.*)\)/, '$1')
            return i ? "{Symbol('".concat(i, "')}") : '{Symbol()}'
          }
          return 'function' === typeof e
            ? '{'.concat(k(e, n), '}')
            : o.isValidElement(e)
            ? '{'.concat(R(w(e, n), !0, r, n), '}')
            : e instanceof Date
            ? '{new Date("'.concat(e.toISOString(), '")}')
            : (function (e) {
                var t, r
                return (
                  !1 !== u(e) &&
                  'function' === typeof (t = e.constructor) &&
                  !1 !== u((r = t.prototype)) &&
                  !1 !== r.hasOwnProperty('isPrototypeOf')
                )
              })(e) || Array.isArray(e)
            ? '{'.concat(
                (function (e, t, r, n) {
                  var i = g(e),
                    a = O(i, {
                      transform: function (e, t, i) {
                        var c = e[t]
                        return c && o.isValidElement(c)
                          ? R(w(c, n), !0, r, n)
                          : 'function' === typeof c
                          ? k(c, n)
                          : i
                      },
                    })
                  return t
                    ? a
                        .replace(/\s+/g, ' ')
                        .replace(/{ /g, '{')
                        .replace(/ }/g, '}')
                        .replace(/\[ /g, '[')
                        .replace(/ ]/g, ']')
                    : a
                        .replace(/\t/g, c(1, n.tabStop))
                        .replace(
                          /\n([^$])/g,
                          '\n'.concat(c(r + 1, n.tabStop), '$1')
                        )
                })(e, t, r, n),
                '}'
              )
            : '{'.concat(String(e), '}')
        },
        E = function (e, t) {
          var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
            n = e[e.length - 1]
          return (
            !n ||
            ('string' !== t.type && 'number' !== t.type) ||
            ('string' !== n.type && 'number' !== n.type)
              ? (n && r.push(n), r.push(t))
              : r.push(d(String(n.value) + String(t.value))),
            r
          )
        }
      var A = function (e, t, r) {
          return function (n) {
            return (function (e, t, r, n, o) {
              var i = o.tabStop
              return 'string' === e.type
                ? t
                    .split('\n')
                    .map(function (e, t) {
                      return 0 === t ? e : ''.concat(c(n, i)).concat(e)
                    })
                    .join('\n')
                : t
            })(n, R(n, e, t, r), 0, t, r)
          }
        },
        Z = function (e, t, r, n, o) {
          return o ? c(r, n).length + t.length > o : e.length > 1
        },
        N = function (e, t, r, n) {
          var o = e.type,
            i = e.displayName,
            a = void 0 === i ? '' : i,
            l = e.childrens,
            u = e.props,
            p = void 0 === u ? {} : u,
            f = e.defaultProps,
            b = void 0 === f ? {} : f
          if ('ReactElement' !== o)
            throw new Error(
              'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
                o
              )
            )
          var y = n.filterProps,
            O = n.maxInlineAttributesLineLength,
            g = n.showDefaultProps,
            d = n.sortProps,
            h = n.tabStop,
            m = '<'.concat(a),
            j = m,
            v = m,
            P = !1,
            w = [],
            x = (function (e, t) {
              return Array.isArray(t)
                ? function (e) {
                    return -1 === t.indexOf(e)
                  }
                : function (r) {
                    return t(e[r], r)
                  }
            })(p, y)
          Object.keys(p)
            .filter(x)
            .filter(
              (function (e, t) {
                return function (r) {
                  var n = Object.keys(e).includes(r)
                  return !n || (n && e[r] !== t[r])
                }
              })(b, p)
            )
            .forEach(function (e) {
              return w.push(e)
            }),
            Object.keys(b)
              .filter(x)
              .filter(function () {
                return g
              })
              .filter(function (e) {
                return !w.includes(e)
              })
              .forEach(function (e) {
                return w.push(e)
              })
          var S,
            D = ((S = d),
            function (e) {
              var t = e.includes('key'),
                r = e.includes('ref'),
                n = e.filter(function (e) {
                  return !['key', 'ref'].includes(e)
                }),
                o = s(S ? n.sort() : n)
              return r && o.unshift('ref'), t && o.unshift('key'), o
            })(w)
          if (
            (D.forEach(function (e) {
              var o = (function (e, t, r, n, o, i, a, s) {
                  if (!t && !n)
                    throw new Error(
                      'The prop "'.concat(
                        e,
                        '" has no value and no default: could not be formatted'
                      )
                    )
                  var l = t ? r : o,
                    u = s.useBooleanShorthandSyntax,
                    p = s.tabStop,
                    f = C(l, i, a, s),
                    b = ' ',
                    y = '\n'.concat(c(a + 1, p)),
                    O = f.includes('\n')
                  return (
                    u && '{false}' === f && !n
                      ? ((b = ''), (y = ''))
                      : u && '{true}' === f
                      ? ((b += ''.concat(e)), (y += ''.concat(e)))
                      : ((b += ''.concat(e, '=').concat(f)),
                        (y += ''.concat(e, '=').concat(f))),
                    {
                      attributeFormattedInline: b,
                      attributeFormattedMultiline: y,
                      isMultilineAttribute: O,
                    }
                  )
                })(
                  e,
                  Object.keys(p).includes(e),
                  p[e],
                  Object.keys(b).includes(e),
                  b[e],
                  t,
                  r,
                  n
                ),
                i = o.attributeFormattedInline,
                a = o.attributeFormattedMultiline
              o.isMultilineAttribute && (P = !0), (j += i), (v += a)
            }),
            (v += '\n'.concat(c(r, h))),
            (m = (function (e, t, r, n, o, i, c) {
              return (Z(e, t, o, i, c) || r) && !n
            })(D, j, P, t, r, h, O)
              ? v
              : j),
            l && l.length > 0)
          ) {
            var k = r + 1
            ;(m += '>'),
              t || ((m += '\n'), (m += c(k, h))),
              (m += l
                .reduce(E, [])
                .map(A(t, k, n))
                .join(t ? '' : '\n'.concat(c(k, h)))),
              t || ((m += '\n'), (m += c(k - 1, h))),
              (m += '</'.concat(a, '>'))
          } else Z(D, j, r, h, O) || (m += ' '), (m += '/>')
          return m
        },
        _ = 'React.Fragment',
        B = function (e, t, r, n) {
          var o,
            i = e.type,
            c = e.key,
            a = e.childrens
          if ('ReactFragment' !== i)
            throw new Error(
              'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
                i
              )
            )
          return (
            (o = n.useFragmentShortSyntax
              ? 0 === e.childrens.length ||
                (function (e) {
                  var t = e.key
                  return Boolean(t)
                })(e)
                ? _
                : ''
              : _),
            N(
              (function (e, t, r) {
                var n = {}
                return (
                  t && (n = { key: t }),
                  {
                    type: 'ReactElement',
                    displayName: e,
                    props: n,
                    defaultProps: {},
                    childrens: r,
                  }
                )
              })(o, c, a),
              t,
              r,
              n
            )
          )
        },
        T = ['<', '>', '{', '}'],
        I = function (e) {
          return (function (e) {
            return T.some(function (t) {
              return e.includes(t)
            })
          })(e)
            ? '{`'.concat(e, '`}')
            : e
        },
        R = function (e, t, r, n) {
          if ('number' === e.type) return String(e.value)
          if ('string' === e.type)
            return e.value
              ? ''.concat(
                  (function (e) {
                    var t = e
                    return (
                      t.endsWith(' ') &&
                        (t = t.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
                      t.startsWith(' ') &&
                        (t = t.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
                      t
                    )
                  })(I(String(e.value)))
                )
              : ''
          if ('ReactElement' === e.type) return N(e, t, r, n)
          if ('ReactFragment' === e.type) return B(e, t, r, n)
          throw new TypeError('Unknow format type "'.concat(e.type, '"'))
        },
        W = function (e, t) {
          return R(e, !1, 0, t)
        }
      t.ZP = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.filterProps,
          n = void 0 === r ? [] : r,
          o = t.showDefaultProps,
          i = void 0 === o || o,
          c = t.showFunctions,
          a = void 0 !== c && c,
          s = t.functionValue,
          l = t.tabStop,
          u = void 0 === l ? 2 : l,
          p = t.useBooleanShorthandSyntax,
          f = void 0 === p || p,
          b = t.useFragmentShortSyntax,
          y = void 0 === b || b,
          O = t.sortProps,
          g = void 0 === O || O,
          d = t.maxInlineAttributesLineLength,
          h = t.displayName
        if (!e)
          throw new Error(
            'react-element-to-jsx-string: Expected a ReactElement'
          )
        var m = {
          filterProps: n,
          showDefaultProps: i,
          showFunctions: a,
          functionValue: s,
          tabStop: u,
          useBooleanShorthandSyntax: f,
          useFragmentShortSyntax: y,
          sortProps: g,
          maxInlineAttributesLineLength: d,
          displayName: h,
        }
        return W(w(e, m), m)
      }
    },
    8555: function (e) {
      'use strict'
      e.exports = { stdout: !1, stderr: !1 }
    },
    8216: function (e, t, r) {
      'use strict'
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    5997: function (e, t, r) {
      'use strict'
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function o(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
      }
      r.d(t, {
        Z: function () {
          return o
        },
      })
    },
    2809: function (e, t, r) {
      'use strict'
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    219: function (e, t, r) {
      'use strict'
      function n(e, t) {
        if (null == e) return {}
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]))
        }
        return o
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    6311: function (e, t, r) {
      'use strict'
      function n(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator']
            if (null != r) {
              var n,
                o,
                i = [],
                c = !0,
                a = !1
              try {
                for (
                  r = r.call(e);
                  !(c = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  c = !0
                );
              } catch (s) {
                ;(a = !0), (o = s)
              } finally {
                try {
                  c || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              return i
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return n(e, t)
              var r = Object.prototype.toString.call(e).slice(8, -1)
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(e, t)
                  : void 0
              )
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      r.d(t, {
        Z: function () {
          return o
        },
      })
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [774, 179], function () {
      return t(6363), t(4651)
    })
    var r = e.O()
    _N_E = r
  },
])
