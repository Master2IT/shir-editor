import * as f from "react";
import R, { useLayoutEffect as Qa, forwardRef as Yr, createElement as fo, useState as ei } from "react";
import * as jn from "react-dom";
import Gr from "react-dom";
var mn = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function ti() {
  if (ir) return Yt;
  ir = 1;
  var e = R, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, c, d) {
    var p, l = {}, y = null, g = null;
    d !== void 0 && (y = "" + d), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (p in c) o.call(c, p) && !s.hasOwnProperty(p) && (l[p] = c[p]);
    if (i && i.defaultProps) for (p in c = i.defaultProps, c) l[p] === void 0 && (l[p] = c[p]);
    return { $$typeof: t, type: i, key: y, ref: g, props: l, _owner: r.current };
  }
  return Yt.Fragment = n, Yt.jsx = a, Yt.jsxs = a, Yt;
}
var Gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function ni() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = R, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, h = "@@iterator";
    function v(m) {
      if (m === null || typeof m != "object")
        return null;
      var T = b && m[b] || m[h];
      return typeof T == "function" ? T : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(m) {
      {
        for (var T = arguments.length, O = new Array(T > 1 ? T - 1 : 0), H = 1; H < T; H++)
          O[H - 1] = arguments[H];
        C("error", m, O);
      }
    }
    function C(m, T, O) {
      {
        var H = w.ReactDebugCurrentFrame, ie = H.getStackAddendum();
        ie !== "" && (T += "%s", O = O.concat([ie]));
        var le = O.map(function(ne) {
          return String(ne);
        });
        le.unshift("Warning: " + T), Function.prototype.apply.call(console[m], console, le);
      }
    }
    var S = !1, k = !1, j = !1, A = !1, P = !1, B;
    B = Symbol.for("react.module.reference");
    function q(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === o || m === s || P || m === r || m === d || m === p || A || m === g || S || k || j || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === l || m.$$typeof === a || m.$$typeof === i || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === B || m.getModuleId !== void 0));
    }
    function Y(m, T, O) {
      var H = m.displayName;
      if (H)
        return H;
      var ie = T.displayName || T.name || "";
      return ie !== "" ? O + "(" + ie + ")" : O;
    }
    function G(m) {
      return m.displayName || "Context";
    }
    function $(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case r:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case i:
            var T = m;
            return G(T) + ".Consumer";
          case a:
            var O = m;
            return G(O._context) + ".Provider";
          case c:
            return Y(m, m.render, "ForwardRef");
          case l:
            var H = m.displayName || null;
            return H !== null ? H : $(m.type) || "Memo";
          case y: {
            var ie = m, le = ie._payload, ne = ie._init;
            try {
              return $(ne(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, z = 0, _, D, E, V, ce, K, te;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function J() {
      {
        if (z === 0) {
          _ = console.log, D = console.info, E = console.warn, V = console.error, ce = console.group, K = console.groupCollapsed, te = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        z++;
      }
    }
    function fe() {
      {
        if (z--, z === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, m, {
              value: _
            }),
            info: F({}, m, {
              value: D
            }),
            warn: F({}, m, {
              value: E
            }),
            error: F({}, m, {
              value: V
            }),
            group: F({}, m, {
              value: ce
            }),
            groupCollapsed: F({}, m, {
              value: K
            }),
            groupEnd: F({}, m, {
              value: te
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = w.ReactCurrentDispatcher, N;
    function Q(m, T, O) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (ie) {
            var H = ie.stack.trim().match(/\n( *(at )?)/);
            N = H && H[1] || "";
          }
        return `
` + N + m;
      }
    }
    var ae = !1, U;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      U = new oe();
    }
    function re(m, T) {
      if (!m || ae)
        return "";
      {
        var O = U.get(m);
        if (O !== void 0)
          return O;
      }
      var H;
      ae = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = Z.current, Z.current = null, J();
      try {
        if (T) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (Oe) {
              H = Oe;
            }
            Reflect.construct(m, [], ne);
          } else {
            try {
              ne.call();
            } catch (Oe) {
              H = Oe;
            }
            m.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            H = Oe;
          }
          m();
        }
      } catch (Oe) {
        if (Oe && H && typeof Oe.stack == "string") {
          for (var ee = Oe.stack.split(`
`), Pe = H.stack.split(`
`), me = ee.length - 1, he = Pe.length - 1; me >= 1 && he >= 0 && ee[me] !== Pe[he]; )
            he--;
          for (; me >= 1 && he >= 0; me--, he--)
            if (ee[me] !== Pe[he]) {
              if (me !== 1 || he !== 1)
                do
                  if (me--, he--, he < 0 || ee[me] !== Pe[he]) {
                    var Be = `
` + ee[me].replace(" at new ", " at ");
                    return m.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", m.displayName)), typeof m == "function" && U.set(m, Be), Be;
                  }
                while (me >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        ae = !1, Z.current = le, fe(), Error.prepareStackTrace = ie;
      }
      var Tt = m ? m.displayName || m.name : "", yt = Tt ? Q(Tt) : "";
      return typeof m == "function" && U.set(m, yt), yt;
    }
    function we(m, T, O) {
      return re(m, !1);
    }
    function Me(m) {
      var T = m.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ye(m, T, O) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return re(m, Me(m));
      if (typeof m == "string")
        return Q(m);
      switch (m) {
        case d:
          return Q("Suspense");
        case p:
          return Q("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return we(m.render);
          case l:
            return Ye(m.type, T, O);
          case y: {
            var H = m, ie = H._payload, le = H._init;
            try {
              return Ye(le(ie), T, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, ze = {}, Vt = w.ReactDebugCurrentFrame;
    function Ae(m) {
      if (m) {
        var T = m._owner, O = Ye(m.type, m._source, T ? T.type : null);
        Vt.setExtraStackFrame(O);
      } else
        Vt.setExtraStackFrame(null);
    }
    function Gn(m, T, O, H, ie) {
      {
        var le = Function.call.bind(Fe);
        for (var ne in m)
          if (le(m, ne)) {
            var ee = void 0;
            try {
              if (typeof m[ne] != "function") {
                var Pe = Error((H || "React class") + ": " + O + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pe.name = "Invariant Violation", Pe;
              }
              ee = m[ne](T, ne, H, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              ee = me;
            }
            ee && !(ee instanceof Error) && (Ae(ie), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", O, ne, typeof ee), Ae(null)), ee instanceof Error && !(ee.message in ze) && (ze[ee.message] = !0, Ae(ie), x("Failed %s type: %s", O, ee.message), Ae(null));
          }
      }
    }
    var Kn = Array.isArray;
    function xe(m) {
      return Kn(m);
    }
    function rt(m) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, O = T && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return O;
      }
    }
    function qn(m) {
      try {
        return an(m), !1;
      } catch {
        return !0;
      }
    }
    function an(m) {
      return "" + m;
    }
    function mt(m) {
      if (qn(m))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(m)), an(m);
    }
    var ln = w.ReactCurrentOwner, cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, Qe;
    function dn(m) {
      if (Fe.call(m, "ref")) {
        var T = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function st(m) {
      if (Fe.call(m, "key")) {
        var T = Object.getOwnPropertyDescriptor(m, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Xn(m, T) {
      typeof m.ref == "string" && ln.current;
    }
    function Jn(m, T) {
      {
        var O = function() {
          St || (St = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        O.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function un(m, T) {
      {
        var O = function() {
          Qe || (Qe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        O.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var fn = function(m, T, O, H, ie, le, ne) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: T,
        ref: O,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function Zn(m, T, O, H, ie) {
      {
        var le, ne = {}, ee = null, Pe = null;
        O !== void 0 && (mt(O), ee = "" + O), st(T) && (mt(T.key), ee = "" + T.key), dn(T) && (Pe = T.ref, Xn(T, ie));
        for (le in T)
          Fe.call(T, le) && !cn.hasOwnProperty(le) && (ne[le] = T[le]);
        if (m && m.defaultProps) {
          var me = m.defaultProps;
          for (le in me)
            ne[le] === void 0 && (ne[le] = me[le]);
        }
        if (ee || Pe) {
          var he = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ee && Jn(ne, he), Pe && un(ne, he);
        }
        return fn(m, ee, Pe, ie, H, ln.current, ne);
      }
    }
    var ht = w.ReactCurrentOwner, $e = w.ReactDebugCurrentFrame;
    function at(m) {
      if (m) {
        var T = m._owner, O = Ye(m.type, m._source, T ? T.type : null);
        $e.setExtraStackFrame(O);
      } else
        $e.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function kt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Ut() {
      {
        if (ht.current) {
          var m = $(ht.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function W(m) {
      return "";
    }
    var pe = {};
    function be(m) {
      {
        var T = Ut();
        if (!T) {
          var O = typeof m == "string" ? m : m.displayName || m.name;
          O && (T = `

Check the top-level render call using <` + O + ">.");
        }
        return T;
      }
    }
    function Ce(m, T) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var O = be(T);
        if (pe[O])
          return;
        pe[O] = !0;
        var H = "";
        m && m._owner && m._owner !== ht.current && (H = " It was passed a child from " + $(m._owner.type) + "."), at(m), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, H), at(null);
      }
    }
    function gt(m, T) {
      {
        if (typeof m != "object")
          return;
        if (xe(m))
          for (var O = 0; O < m.length; O++) {
            var H = m[O];
            kt(H) && Ce(H, T);
          }
        else if (kt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ie = v(m);
          if (typeof ie == "function" && ie !== m.entries)
            for (var le = ie.call(m), ne; !(ne = le.next()).done; )
              kt(ne.value) && Ce(ne.value, T);
        }
      }
    }
    function ve(m) {
      {
        var T = m.type;
        if (T == null || typeof T == "string")
          return;
        var O;
        if (typeof T == "function")
          O = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === l))
          O = T.propTypes;
        else
          return;
        if (O) {
          var H = $(T);
          Gn(O, m.props, "prop", H, m);
        } else if (T.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var ie = $(T);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _e(m) {
      {
        for (var T = Object.keys(m.props), O = 0; O < T.length; O++) {
          var H = T[O];
          if (H !== "children" && H !== "key") {
            at(m), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), at(null);
            break;
          }
        }
        m.ref !== null && (at(m), x("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var vt = {};
    function Ne(m, T, O, H, ie, le) {
      {
        var ne = q(m);
        if (!ne) {
          var ee = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = W();
          Pe ? ee += Pe : ee += Ut();
          var me;
          m === null ? me = "null" : xe(m) ? me = "array" : m !== void 0 && m.$$typeof === t ? (me = "<" + ($(m.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : me = typeof m, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, ee);
        }
        var he = Zn(m, T, O, ie, le);
        if (he == null)
          return he;
        if (ne) {
          var Be = T.children;
          if (Be !== void 0)
            if (H)
              if (xe(Be)) {
                for (var Tt = 0; Tt < Be.length; Tt++)
                  gt(Be[Tt], m);
                Object.freeze && Object.freeze(Be);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(Be, m);
        }
        if (Fe.call(T, "key")) {
          var yt = $(m), Oe = Object.keys(T).filter(function(Za) {
            return Za !== "key";
          }), Qn = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vt[yt + Qn]) {
            var Ja = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qn, yt, Ja, yt), vt[yt + Qn] = !0;
          }
        }
        return m === o ? _e(he) : ve(he), he;
      }
    }
    function Ie(m, T, O) {
      return Ne(m, T, O, !0);
    }
    function pn(m, T, O) {
      return Ne(m, T, O, !1);
    }
    var et = pn, ar = Ie;
    Gt.Fragment = o, Gt.jsx = et, Gt.jsxs = ar;
  }()), Gt;
}
var cr;
function oi() {
  return cr || (cr = 1, process.env.NODE_ENV === "production" ? mn.exports = ti() : mn.exports = ni()), mn.exports;
}
var u = oi(), ri = (e, t, n, o, r, s, a, i) => {
  let c = document.documentElement, d = ["light", "dark"];
  function p(g) {
    (Array.isArray(e) ? e : [e]).forEach((b) => {
      let h = b === "class", v = h && s ? r.map((w) => s[w] || w) : r;
      h ? (c.classList.remove(...v), c.classList.add(s && s[g] ? s[g] : g)) : c.setAttribute(b, g);
    }), l(g);
  }
  function l(g) {
    i && d.includes(g) && (c.style.colorScheme = g);
  }
  function y() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (o) p(o);
  else try {
    let g = localStorage.getItem(t) || n, b = a && g === "system" ? y() : g;
    p(b);
  } catch {
  }
}, si = f.createContext(void 0), ai = { setTheme: (e) => {
}, themes: [] }, ii = () => {
  var e;
  return (e = f.useContext(si)) != null ? e : ai;
};
f.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: o, enableColorScheme: r, defaultTheme: s, value: a, themes: i, nonce: c, scriptProps: d }) => {
  let p = JSON.stringify([n, t, s, e, i, a, o, r]).slice(1, -1);
  return f.createElement("script", { ...d, suppressHydrationWarning: !0, nonce: typeof window > "u" ? c : "", dangerouslySetInnerHTML: { __html: `(${ri.toString()})(${p})` } });
});
function li(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const ci = (e) => {
  switch (e) {
    case "success":
      return fi;
    case "info":
      return mi;
    case "warning":
      return pi;
    case "error":
      return hi;
    default:
      return null;
  }
}, di = Array(12).fill(0), ui = ({ visible: e, className: t }) => /* @__PURE__ */ R.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ R.createElement("div", {
  className: "sonner-spinner"
}, di.map((n, o) => /* @__PURE__ */ R.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${o}`
})))), fi = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), pi = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), mi = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), hi = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ R.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), gi = /* @__PURE__ */ R.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ R.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ R.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), vi = () => {
  const [e, t] = R.useState(document.hidden);
  return R.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let po = 1;
class yi {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: o, ...r } = t, s = typeof t?.id == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : po++, a = this.toasts.find((c) => c.id === s), i = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), a ? this.toasts = this.toasts.map((c) => c.id === s ? (this.publish({
        ...c,
        ...t,
        id: s,
        title: o
      }), {
        ...c,
        ...t,
        id: s,
        dismissible: i,
        title: o
      }) : c) : this.addToast({
        title: o,
        ...r,
        dismissible: i,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((o) => o({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let o;
      n.loading !== void 0 && (o = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const r = Promise.resolve(t instanceof Function ? t() : t);
      let s = o !== void 0, a;
      const i = r.then(async (d) => {
        if (a = [
          "resolve",
          d
        ], R.isValidElement(d))
          s = !1, this.create({
            id: o,
            type: "default",
            message: d
          });
        else if (xi(d) && !d.ok) {
          s = !1;
          const l = typeof n.error == "function" ? await n.error(`HTTP error! status: ${d.status}`) : n.error, y = typeof n.description == "function" ? await n.description(`HTTP error! status: ${d.status}`) : n.description, b = typeof l == "object" && !R.isValidElement(l) ? l : {
            message: l
          };
          this.create({
            id: o,
            type: "error",
            description: y,
            ...b
          });
        } else if (d instanceof Error) {
          s = !1;
          const l = typeof n.error == "function" ? await n.error(d) : n.error, y = typeof n.description == "function" ? await n.description(d) : n.description, b = typeof l == "object" && !R.isValidElement(l) ? l : {
            message: l
          };
          this.create({
            id: o,
            type: "error",
            description: y,
            ...b
          });
        } else if (n.success !== void 0) {
          s = !1;
          const l = typeof n.success == "function" ? await n.success(d) : n.success, y = typeof n.description == "function" ? await n.description(d) : n.description, b = typeof l == "object" && !R.isValidElement(l) ? l : {
            message: l
          };
          this.create({
            id: o,
            type: "success",
            description: y,
            ...b
          });
        }
      }).catch(async (d) => {
        if (a = [
          "reject",
          d
        ], n.error !== void 0) {
          s = !1;
          const p = typeof n.error == "function" ? await n.error(d) : n.error, l = typeof n.description == "function" ? await n.description(d) : n.description, g = typeof p == "object" && !R.isValidElement(p) ? p : {
            message: p
          };
          this.create({
            id: o,
            type: "error",
            description: l,
            ...g
          });
        }
      }).finally(() => {
        s && (this.dismiss(o), o = void 0), n.finally == null || n.finally.call(n);
      }), c = () => new Promise((d, p) => i.then(() => a[0] === "reject" ? p(a[1]) : d(a[1])).catch(p));
      return typeof o != "string" && typeof o != "number" ? {
        unwrap: c
      } : Object.assign(o, {
        unwrap: c
      });
    }, this.custom = (t, n) => {
      const o = n?.id || po++;
      return this.create({
        jsx: t(o),
        id: o,
        ...n
      }), o;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const je = new yi(), bi = (e, t) => {
  const n = t?.id || po++;
  return je.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, xi = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", wi = bi, Ci = () => je.toasts, Ei = () => je.getActiveToasts(), dr = Object.assign(wi, {
  success: je.success,
  info: je.info,
  warning: je.warning,
  error: je.error,
  custom: je.custom,
  message: je.message,
  promise: je.promise,
  dismiss: je.dismiss,
  loading: je.loading
}, {
  getHistory: Ci,
  getToasts: Ei
});
li("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function hn(e) {
  return e.label !== void 0;
}
const Si = 3, ki = "24px", Ti = "16px", ur = 4e3, Ri = 356, Pi = 14, Ai = 45, _i = 200;
function Ge(...e) {
  return e.filter(Boolean).join(" ");
}
function Ni(e) {
  const [t, n] = e.split("-"), o = [];
  return t && o.push(t), n && o.push(n), o;
}
const Oi = (e) => {
  var t, n, o, r, s, a, i, c, d;
  const { invert: p, toast: l, unstyled: y, interacting: g, setHeights: b, visibleToasts: h, heights: v, index: w, toasts: x, expanded: C, removeToast: S, defaultRichColors: k, closeButton: j, style: A, cancelButtonStyle: P, actionButtonStyle: B, className: q = "", descriptionClassName: Y = "", duration: G, position: $, gap: F, expandByDefault: z, classNames: _, icons: D, closeButtonAriaLabel: E = "Close toast" } = e, [V, ce] = R.useState(null), [K, te] = R.useState(null), [L, J] = R.useState(!1), [fe, Z] = R.useState(!1), [N, Q] = R.useState(!1), [ae, U] = R.useState(!1), [oe, re] = R.useState(!1), [we, Me] = R.useState(0), [Ye, Fe] = R.useState(0), ze = R.useRef(l.duration || G || ur), Vt = R.useRef(null), Ae = R.useRef(null), Gn = w === 0, Kn = w + 1 <= h, xe = l.type, rt = l.dismissible !== !1, qn = l.className || "", an = l.descriptionClassName || "", mt = R.useMemo(() => v.findIndex((W) => W.toastId === l.id) || 0, [
    v,
    l.id
  ]), ln = R.useMemo(() => {
    var W;
    return (W = l.closeButton) != null ? W : j;
  }, [
    l.closeButton,
    j
  ]), cn = R.useMemo(() => l.duration || G || ur, [
    l.duration,
    G
  ]), St = R.useRef(0), Qe = R.useRef(0), dn = R.useRef(0), st = R.useRef(null), [Xn, Jn] = $.split("-"), un = R.useMemo(() => v.reduce((W, pe, be) => be >= mt ? W : W + pe.height, 0), [
    v,
    mt
  ]), fn = vi(), Zn = l.invert || p, ht = xe === "loading";
  Qe.current = R.useMemo(() => mt * F + un, [
    mt,
    un
  ]), R.useEffect(() => {
    ze.current = cn;
  }, [
    cn
  ]), R.useEffect(() => {
    J(!0);
  }, []), R.useEffect(() => {
    const W = Ae.current;
    if (W) {
      const pe = W.getBoundingClientRect().height;
      return Fe(pe), b((be) => [
        {
          toastId: l.id,
          height: pe,
          position: l.position
        },
        ...be
      ]), () => b((be) => be.filter((Ce) => Ce.toastId !== l.id));
    }
  }, [
    b,
    l.id
  ]), R.useLayoutEffect(() => {
    if (!L) return;
    const W = Ae.current, pe = W.style.height;
    W.style.height = "auto";
    const be = W.getBoundingClientRect().height;
    W.style.height = pe, Fe(be), b((Ce) => Ce.find((ve) => ve.toastId === l.id) ? Ce.map((ve) => ve.toastId === l.id ? {
      ...ve,
      height: be
    } : ve) : [
      {
        toastId: l.id,
        height: be,
        position: l.position
      },
      ...Ce
    ]);
  }, [
    L,
    l.title,
    l.description,
    b,
    l.id,
    l.jsx,
    l.action,
    l.cancel
  ]);
  const $e = R.useCallback(() => {
    Z(!0), Me(Qe.current), b((W) => W.filter((pe) => pe.toastId !== l.id)), setTimeout(() => {
      S(l);
    }, _i);
  }, [
    l,
    S,
    b,
    Qe
  ]);
  R.useEffect(() => {
    if (l.promise && xe === "loading" || l.duration === 1 / 0 || l.type === "loading") return;
    let W;
    return C || g || fn ? (() => {
      if (dn.current < St.current) {
        const Ce = (/* @__PURE__ */ new Date()).getTime() - St.current;
        ze.current = ze.current - Ce;
      }
      dn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      ze.current !== 1 / 0 && (St.current = (/* @__PURE__ */ new Date()).getTime(), W = setTimeout(() => {
        l.onAutoClose == null || l.onAutoClose.call(l, l), $e();
      }, ze.current));
    })(), () => clearTimeout(W);
  }, [
    C,
    g,
    l,
    xe,
    fn,
    $e
  ]), R.useEffect(() => {
    l.delete && ($e(), l.onDismiss == null || l.onDismiss.call(l, l));
  }, [
    $e,
    l.delete
  ]);
  function at() {
    var W;
    if (D?.loading) {
      var pe;
      return /* @__PURE__ */ R.createElement("div", {
        className: Ge(_?.loader, l == null || (pe = l.classNames) == null ? void 0 : pe.loader, "sonner-loader"),
        "data-visible": xe === "loading"
      }, D.loading);
    }
    return /* @__PURE__ */ R.createElement(ui, {
      className: Ge(_?.loader, l == null || (W = l.classNames) == null ? void 0 : W.loader),
      visible: xe === "loading"
    });
  }
  const Wt = l.icon || D?.[xe] || ci(xe);
  var kt, Ut;
  return /* @__PURE__ */ R.createElement("li", {
    tabIndex: 0,
    ref: Ae,
    className: Ge(q, qn, _?.toast, l == null || (t = l.classNames) == null ? void 0 : t.toast, _?.default, _?.[xe], l == null || (n = l.classNames) == null ? void 0 : n[xe]),
    "data-sonner-toast": "",
    "data-rich-colors": (kt = l.richColors) != null ? kt : k,
    "data-styled": !(l.jsx || l.unstyled || y),
    "data-mounted": L,
    "data-promise": !!l.promise,
    "data-swiped": oe,
    "data-removed": fe,
    "data-visible": Kn,
    "data-y-position": Xn,
    "data-x-position": Jn,
    "data-index": w,
    "data-front": Gn,
    "data-swiping": N,
    "data-dismissible": rt,
    "data-type": xe,
    "data-invert": Zn,
    "data-swipe-out": ae,
    "data-swipe-direction": K,
    "data-expanded": !!(C || z && L),
    style: {
      "--index": w,
      "--toasts-before": w,
      "--z-index": x.length - w,
      "--offset": `${fe ? we : Qe.current}px`,
      "--initial-height": z ? "auto" : `${Ye}px`,
      ...A,
      ...l.style
    },
    onDragEnd: () => {
      Q(!1), ce(null), st.current = null;
    },
    onPointerDown: (W) => {
      W.button !== 2 && (ht || !rt || (Vt.current = /* @__PURE__ */ new Date(), Me(Qe.current), W.target.setPointerCapture(W.pointerId), W.target.tagName !== "BUTTON" && (Q(!0), st.current = {
        x: W.clientX,
        y: W.clientY
      })));
    },
    onPointerUp: () => {
      var W, pe, be;
      if (ae || !rt) return;
      st.current = null;
      const Ce = Number(((W = Ae.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), gt = Number(((pe = Ae.current) == null ? void 0 : pe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), ve = (/* @__PURE__ */ new Date()).getTime() - ((be = Vt.current) == null ? void 0 : be.getTime()), _e = V === "x" ? Ce : gt, vt = Math.abs(_e) / ve;
      if (Math.abs(_e) >= Ai || vt > 0.11) {
        Me(Qe.current), l.onDismiss == null || l.onDismiss.call(l, l), te(V === "x" ? Ce > 0 ? "right" : "left" : gt > 0 ? "down" : "up"), $e(), U(!0);
        return;
      } else {
        var Ne, Ie;
        (Ne = Ae.current) == null || Ne.style.setProperty("--swipe-amount-x", "0px"), (Ie = Ae.current) == null || Ie.style.setProperty("--swipe-amount-y", "0px");
      }
      re(!1), Q(!1), ce(null);
    },
    onPointerMove: (W) => {
      var pe, be, Ce;
      if (!st.current || !rt || ((pe = window.getSelection()) == null ? void 0 : pe.toString().length) > 0) return;
      const ve = W.clientY - st.current.y, _e = W.clientX - st.current.x;
      var vt;
      const Ne = (vt = e.swipeDirections) != null ? vt : Ni($);
      !V && (Math.abs(_e) > 1 || Math.abs(ve) > 1) && ce(Math.abs(_e) > Math.abs(ve) ? "x" : "y");
      let Ie = {
        x: 0,
        y: 0
      };
      const pn = (et) => 1 / (1.5 + Math.abs(et) / 20);
      if (V === "y") {
        if (Ne.includes("top") || Ne.includes("bottom"))
          if (Ne.includes("top") && ve < 0 || Ne.includes("bottom") && ve > 0)
            Ie.y = ve;
          else {
            const et = ve * pn(ve);
            Ie.y = Math.abs(et) < Math.abs(ve) ? et : ve;
          }
      } else if (V === "x" && (Ne.includes("left") || Ne.includes("right")))
        if (Ne.includes("left") && _e < 0 || Ne.includes("right") && _e > 0)
          Ie.x = _e;
        else {
          const et = _e * pn(_e);
          Ie.x = Math.abs(et) < Math.abs(_e) ? et : _e;
        }
      (Math.abs(Ie.x) > 0 || Math.abs(Ie.y) > 0) && re(!0), (be = Ae.current) == null || be.style.setProperty("--swipe-amount-x", `${Ie.x}px`), (Ce = Ae.current) == null || Ce.style.setProperty("--swipe-amount-y", `${Ie.y}px`);
    }
  }, ln && !l.jsx && xe !== "loading" ? /* @__PURE__ */ R.createElement("button", {
    "aria-label": E,
    "data-disabled": ht,
    "data-close-button": !0,
    onClick: ht || !rt ? () => {
    } : () => {
      $e(), l.onDismiss == null || l.onDismiss.call(l, l);
    },
    className: Ge(_?.closeButton, l == null || (o = l.classNames) == null ? void 0 : o.closeButton)
  }, (Ut = D?.close) != null ? Ut : gi) : null, (xe || l.icon || l.promise) && l.icon !== null && (D?.[xe] !== null || l.icon) ? /* @__PURE__ */ R.createElement("div", {
    "data-icon": "",
    className: Ge(_?.icon, l == null || (r = l.classNames) == null ? void 0 : r.icon)
  }, l.promise || l.type === "loading" && !l.icon ? l.icon || at() : null, l.type !== "loading" ? Wt : null) : null, /* @__PURE__ */ R.createElement("div", {
    "data-content": "",
    className: Ge(_?.content, l == null || (s = l.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ R.createElement("div", {
    "data-title": "",
    className: Ge(_?.title, l == null || (a = l.classNames) == null ? void 0 : a.title)
  }, l.jsx ? l.jsx : typeof l.title == "function" ? l.title() : l.title), l.description ? /* @__PURE__ */ R.createElement("div", {
    "data-description": "",
    className: Ge(Y, an, _?.description, l == null || (i = l.classNames) == null ? void 0 : i.description)
  }, typeof l.description == "function" ? l.description() : l.description) : null), /* @__PURE__ */ R.isValidElement(l.cancel) ? l.cancel : l.cancel && hn(l.cancel) ? /* @__PURE__ */ R.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: l.cancelButtonStyle || P,
    onClick: (W) => {
      hn(l.cancel) && rt && (l.cancel.onClick == null || l.cancel.onClick.call(l.cancel, W), $e());
    },
    className: Ge(_?.cancelButton, l == null || (c = l.classNames) == null ? void 0 : c.cancelButton)
  }, l.cancel.label) : null, /* @__PURE__ */ R.isValidElement(l.action) ? l.action : l.action && hn(l.action) ? /* @__PURE__ */ R.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: l.actionButtonStyle || B,
    onClick: (W) => {
      hn(l.action) && (l.action.onClick == null || l.action.onClick.call(l.action, W), !W.defaultPrevented && $e());
    },
    className: Ge(_?.actionButton, l == null || (d = l.classNames) == null ? void 0 : d.actionButton)
  }, l.action.label) : null);
};
function fr() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function ji(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((o, r) => {
    const s = r === 1, a = s ? "--mobile-offset" : "--offset", i = s ? Ti : ki;
    function c(d) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((p) => {
        n[`${a}-${p}`] = typeof d == "number" ? `${d}px` : d;
      });
    }
    typeof o == "number" || typeof o == "string" ? c(o) : typeof o == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((d) => {
      o[d] === void 0 ? n[`${a}-${d}`] = i : n[`${a}-${d}`] = typeof o[d] == "number" ? `${o[d]}px` : o[d];
    }) : c(i);
  }), n;
}
const Mi = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const { invert: o, position: r = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: i, className: c, offset: d, mobileOffset: p, theme: l = "light", richColors: y, duration: g, style: b, visibleToasts: h = Si, toastOptions: v, dir: w = fr(), gap: x = Pi, icons: C, containerAriaLabel: S = "Notifications" } = t, [k, j] = R.useState([]), A = R.useMemo(() => Array.from(new Set([
    r
  ].concat(k.filter((K) => K.position).map((K) => K.position)))), [
    k,
    r
  ]), [P, B] = R.useState([]), [q, Y] = R.useState(!1), [G, $] = R.useState(!1), [F, z] = R.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), _ = R.useRef(null), D = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), E = R.useRef(null), V = R.useRef(!1), ce = R.useCallback((K) => {
    j((te) => {
      var L;
      return (L = te.find((J) => J.id === K.id)) != null && L.delete || je.dismiss(K.id), te.filter(({ id: J }) => J !== K.id);
    });
  }, []);
  return R.useEffect(() => je.subscribe((K) => {
    if (K.dismiss) {
      requestAnimationFrame(() => {
        j((te) => te.map((L) => L.id === K.id ? {
          ...L,
          delete: !0
        } : L));
      });
      return;
    }
    setTimeout(() => {
      Gr.flushSync(() => {
        j((te) => {
          const L = te.findIndex((J) => J.id === K.id);
          return L !== -1 ? [
            ...te.slice(0, L),
            {
              ...te[L],
              ...K
            },
            ...te.slice(L + 1)
          ] : [
            K,
            ...te
          ];
        });
      });
    });
  }), [
    k
  ]), R.useEffect(() => {
    if (l !== "system") {
      z(l);
      return;
    }
    if (l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window > "u") return;
    const K = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      K.addEventListener("change", ({ matches: te }) => {
        z(te ? "dark" : "light");
      });
    } catch {
      K.addListener(({ matches: L }) => {
        try {
          z(L ? "dark" : "light");
        } catch (J) {
          console.error(J);
        }
      });
    }
  }, [
    l
  ]), R.useEffect(() => {
    k.length <= 1 && Y(!1);
  }, [
    k
  ]), R.useEffect(() => {
    const K = (te) => {
      var L;
      if (s.every((Z) => te[Z] || te.code === Z)) {
        var fe;
        Y(!0), (fe = _.current) == null || fe.focus();
      }
      te.code === "Escape" && (document.activeElement === _.current || (L = _.current) != null && L.contains(document.activeElement)) && Y(!1);
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [
    s
  ]), R.useEffect(() => {
    if (_.current)
      return () => {
        E.current && (E.current.focus({
          preventScroll: !0
        }), E.current = null, V.current = !1);
      };
  }, [
    _.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ R.createElement("section", {
    ref: n,
    "aria-label": `${S} ${D}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, A.map((K, te) => {
    var L;
    const [J, fe] = K.split("-");
    return k.length ? /* @__PURE__ */ R.createElement("ol", {
      key: K,
      dir: w === "auto" ? fr() : w,
      tabIndex: -1,
      ref: _,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": F,
      "data-y-position": J,
      "data-x-position": fe,
      style: {
        "--front-toast-height": `${((L = P[0]) == null ? void 0 : L.height) || 0}px`,
        "--width": `${Ri}px`,
        "--gap": `${x}px`,
        ...b,
        ...ji(d, p)
      },
      onBlur: (Z) => {
        V.current && !Z.currentTarget.contains(Z.relatedTarget) && (V.current = !1, E.current && (E.current.focus({
          preventScroll: !0
        }), E.current = null));
      },
      onFocus: (Z) => {
        Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || V.current || (V.current = !0, E.current = Z.relatedTarget);
      },
      onMouseEnter: () => Y(!0),
      onMouseMove: () => Y(!0),
      onMouseLeave: () => {
        G || Y(!1);
      },
      onDragEnd: () => Y(!1),
      onPointerDown: (Z) => {
        Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || $(!0);
      },
      onPointerUp: () => $(!1)
    }, k.filter((Z) => !Z.position && te === 0 || Z.position === K).map((Z, N) => {
      var Q, ae;
      return /* @__PURE__ */ R.createElement(Oi, {
        key: Z.id,
        icons: C,
        index: N,
        toast: Z,
        defaultRichColors: y,
        duration: (Q = v?.duration) != null ? Q : g,
        className: v?.className,
        descriptionClassName: v?.descriptionClassName,
        invert: o,
        visibleToasts: h,
        closeButton: (ae = v?.closeButton) != null ? ae : i,
        interacting: G,
        position: K,
        style: v?.style,
        unstyled: v?.unstyled,
        classNames: v?.classNames,
        cancelButtonStyle: v?.cancelButtonStyle,
        actionButtonStyle: v?.actionButtonStyle,
        closeButtonAriaLabel: v?.closeButtonAriaLabel,
        removeToast: ce,
        toasts: k.filter((U) => U.position == Z.position),
        heights: P.filter((U) => U.position == Z.position),
        setHeights: B,
        expandByDefault: a,
        gap: x,
        expanded: q,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), Ii = ({ ...e }) => {
  const { theme: t = "system" } = ii();
  return /* @__PURE__ */ u.jsx(
    Mi,
    {
      theme: t,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...e
    }
  );
};
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e?.(r), n === !1 || !r.defaultPrevented)
      return t?.(r);
  };
}
function pr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Kr(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = pr(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : pr(e[r], null);
        }
      };
  };
}
function ue(...e) {
  return f.useCallback(Kr(...e), e);
}
function en(e, t = []) {
  let n = [];
  function o(s, a) {
    const i = f.createContext(a), c = n.length;
    n = [...n, a];
    const d = (l) => {
      const { scope: y, children: g, ...b } = l, h = y?.[e]?.[c] || i, v = f.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ u.jsx(h.Provider, { value: v, children: g });
    };
    d.displayName = s + "Provider";
    function p(l, y) {
      const g = y?.[e]?.[c] || i, b = f.useContext(g);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${l}\` must be used within \`${s}\``);
    }
    return [d, p];
  }
  const r = () => {
    const s = n.map((a) => f.createContext(a));
    return function(i) {
      const c = i?.[e] || s;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return r.scopeName = e, [o, Di(r, ...t)];
}
function Di(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const a = o.reduce((i, { useScope: c, scopeName: d }) => {
        const l = c(s)[`__scope${d}`];
        return { ...i, ...l };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const t = /* @__PURE__ */ Fi(e), n = f.forwardRef((o, r) => {
    const { children: s, ...a } = o, i = f.Children.toArray(s), c = i.find(Bi);
    if (c) {
      const d = c.props.children, p = i.map((l) => l === c ? f.Children.count(d) > 1 ? f.Children.only(null) : f.isValidElement(d) ? d.props.children : null : l);
      return /* @__PURE__ */ u.jsx(t, { ...a, ref: r, children: f.isValidElement(d) ? f.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Li = /* @__PURE__ */ jt("Slot");
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const a = Hi(r), i = $i(s, r.props);
      return r.type !== f.Fragment && (i.ref = o ? Kr(o, a) : a), f.cloneElement(r, i);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qr = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function zi(e) {
  const t = ({ children: n }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = qr, t;
}
function Bi(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qr;
}
function $i(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      const c = s(...i);
      return r(...i), c;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Hi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], de = Vi.reduce((e, t) => {
  const n = /* @__PURE__ */ jt(`Primitive.${t}`), o = f.forwardRef((r, s) => {
    const { asChild: a, ...i } = r, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...i, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Wi(e, t) {
  e && jn.flushSync(() => e.dispatchEvent(t));
}
function xt(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...n) => t.current?.(...n), []);
}
function Ui(e, t = globalThis?.document) {
  const n = xt(e);
  f.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Yi = "DismissableLayer", mo = "dismissableLayer.update", Gi = "dismissableLayer.pointerDownOutside", Ki = "dismissableLayer.focusOutside", mr, Xr = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mn = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, d = f.useContext(Xr), [p, l] = f.useState(null), y = p?.ownerDocument ?? globalThis?.document, [, g] = f.useState({}), b = ue(t, (A) => l(A)), h = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(v), x = p ? h.indexOf(p) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= w, k = Ji((A) => {
      const P = A.target, B = [...d.branches].some((q) => q.contains(P));
      !S || B || (r?.(A), a?.(A), A.defaultPrevented || i?.());
    }, y), j = Zi((A) => {
      const P = A.target;
      [...d.branches].some((q) => q.contains(P)) || (s?.(A), a?.(A), A.defaultPrevented || i?.());
    }, y);
    return Ui((A) => {
      x === d.layers.size - 1 && (o?.(A), !A.defaultPrevented && i && (A.preventDefault(), i()));
    }, y), f.useEffect(() => {
      if (p)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (mr = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), hr(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = mr);
        };
    }, [p, y, n, d]), f.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), hr());
    }, [p, d]), f.useEffect(() => {
      const A = () => g({});
      return document.addEventListener(mo, A), () => document.removeEventListener(mo, A);
    }, []), /* @__PURE__ */ u.jsx(
      de.div,
      {
        ...c,
        ref: b,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
Mn.displayName = Yi;
var qi = "DismissableLayerBranch", Xi = f.forwardRef((e, t) => {
  const n = f.useContext(Xr), o = f.useRef(null), r = ue(t, o);
  return f.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(de.div, { ...e, ref: r });
});
Xi.displayName = qi;
function Ji(e, t = globalThis?.document) {
  const n = xt(e), o = f.useRef(!1), r = f.useRef(() => {
  });
  return f.useEffect(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let c = function() {
          Jr(
            Gi,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = c, t.addEventListener("click", r.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Zi(e, t = globalThis?.document) {
  const n = xt(e), o = f.useRef(!1);
  return f.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && Jr(Ki, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function hr() {
  const e = new CustomEvent(mo);
  document.dispatchEvent(e);
}
function Jr(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Wi(r, s) : r.dispatchEvent(s);
}
var Re = globalThis?.document ? f.useLayoutEffect : () => {
}, Qi = f[" useId ".trim().toString()] || (() => {
}), el = 0;
function tn(e) {
  const [t, n] = f.useState(Qi());
  return Re(() => {
    n((o) => o ?? String(el++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const tl = ["top", "right", "bottom", "left"], ct = Math.min, De = Math.max, Rn = Math.round, gn = Math.floor, Xe = (e) => ({
  x: e,
  y: e
}), nl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ol = {
  start: "end",
  end: "start"
};
function ho(e, t, n) {
  return De(e, ct(t, n));
}
function nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ot(e) {
  return e.split("-")[0];
}
function Lt(e) {
  return e.split("-")[1];
}
function Bo(e) {
  return e === "x" ? "y" : "x";
}
function $o(e) {
  return e === "y" ? "height" : "width";
}
const rl = /* @__PURE__ */ new Set(["top", "bottom"]);
function qe(e) {
  return rl.has(ot(e)) ? "y" : "x";
}
function Ho(e) {
  return Bo(qe(e));
}
function sl(e, t, n) {
  n === void 0 && (n = !1);
  const o = Lt(e), r = Ho(e), s = $o(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Pn(a)), [a, Pn(a)];
}
function al(e) {
  const t = Pn(e);
  return [go(e), t, go(t)];
}
function go(e) {
  return e.replace(/start|end/g, (t) => ol[t]);
}
const gr = ["left", "right"], vr = ["right", "left"], il = ["top", "bottom"], ll = ["bottom", "top"];
function cl(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? vr : gr : t ? gr : vr;
    case "left":
    case "right":
      return t ? il : ll;
    default:
      return [];
  }
}
function dl(e, t, n, o) {
  const r = Lt(e);
  let s = cl(ot(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(go)))), s;
}
function Pn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nl[t]);
}
function ul(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zr(e) {
  return typeof e != "number" ? ul(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function An(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function yr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = qe(t), a = Ho(t), i = $o(a), c = ot(t), d = s === "y", p = o.x + o.width / 2 - r.width / 2, l = o.y + o.height / 2 - r.height / 2, y = o[i] / 2 - r[i] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: p,
        y: o.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      g = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      g = {
        x: o.x - r.width,
        y: l
      };
      break;
    default:
      g = {
        x: o.x,
        y: o.y
      };
  }
  switch (Lt(t)) {
    case "start":
      g[a] -= y * (n && d ? -1 : 1);
      break;
    case "end":
      g[a] += y * (n && d ? -1 : 1);
      break;
  }
  return g;
}
const fl = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: p,
    y: l
  } = yr(d, o, c), y = o, g = {}, b = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: v,
      fn: w
    } = i[h], {
      x,
      y: C,
      data: S,
      reset: k
    } = await w({
      x: p,
      y: l,
      initialPlacement: o,
      placement: y,
      strategy: r,
      middlewareData: g,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = x ?? p, l = C ?? l, g = {
      ...g,
      [v]: {
        ...g[v],
        ...S
      }
    }, k && b <= 50 && (b++, typeof k == "object" && (k.placement && (y = k.placement), k.rects && (d = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : k.rects), {
      x: p,
      y: l
    } = yr(d, y, c)), h = -1);
  }
  return {
    x: p,
    y: l,
    placement: y,
    strategy: r,
    middlewareData: g
  };
};
async function Jt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: l = "floating",
    altBoundary: y = !1,
    padding: g = 0
  } = nt(t, e), b = Zr(g), v = i[y ? l === "floating" ? "reference" : "floating" : l], w = An(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: c
  })), x = l === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = An(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: C,
    strategy: c
  }) : x);
  return {
    top: (w.top - k.top + b.top) / S.y,
    bottom: (k.bottom - w.bottom + b.bottom) / S.y,
    left: (w.left - k.left + b.left) / S.x,
    right: (k.right - w.right + b.right) / S.x
  };
}
const pl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: d,
      padding: p = 0
    } = nt(e, t) || {};
    if (d == null)
      return {};
    const l = Zr(p), y = {
      x: n,
      y: o
    }, g = Ho(r), b = $o(g), h = await a.getDimensions(d), v = g === "y", w = v ? "top" : "left", x = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", S = s.reference[b] + s.reference[g] - y[g] - s.floating[b], k = y[g] - s.reference[g], j = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let A = j ? j[C] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(j))) && (A = i.floating[C] || s.floating[b]);
    const P = S / 2 - k / 2, B = A / 2 - h[b] / 2 - 1, q = ct(l[w], B), Y = ct(l[x], B), G = q, $ = A - h[b] - Y, F = A / 2 - h[b] / 2 + P, z = ho(G, F, $), _ = !c.arrow && Lt(r) != null && F !== z && s.reference[b] / 2 - (F < G ? q : Y) - h[b] / 2 < 0, D = _ ? F < G ? F - G : F - $ : 0;
    return {
      [g]: y[g] + D,
      data: {
        [g]: z,
        centerOffset: F - z - D,
        ..._ && {
          alignmentOffset: D
        }
      },
      reset: _
    };
  }
}), ml = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: d
      } = t, {
        mainAxis: p = !0,
        crossAxis: l = !0,
        fallbackPlacements: y,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...v
      } = nt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = ot(r), x = qe(i), C = ot(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), k = y || (C || !h ? [Pn(i)] : al(i)), j = b !== "none";
      !y && j && k.push(...dl(i, h, b, S));
      const A = [i, ...k], P = await Jt(t, v), B = [];
      let q = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (p && B.push(P[w]), l) {
        const F = sl(r, a, S);
        B.push(P[F[0]], P[F[1]]);
      }
      if (q = [...q, {
        placement: r,
        overflows: B
      }], !B.every((F) => F <= 0)) {
        var Y, G;
        const F = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, z = A[F];
        if (z && (!(l === "alignment" ? x !== qe(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        q.every((E) => E.overflows[0] > 0 && qe(E.placement) === x)))
          return {
            data: {
              index: F,
              overflows: q
            },
            reset: {
              placement: z
            }
          };
        let _ = (G = q.filter((D) => D.overflows[0] <= 0).sort((D, E) => D.overflows[1] - E.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!_)
          switch (g) {
            case "bestFit": {
              var $;
              const D = ($ = q.filter((E) => {
                if (j) {
                  const V = qe(E.placement);
                  return V === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((V) => V > 0).reduce((V, ce) => V + ce, 0)]).sort((E, V) => E[1] - V[1])[0]) == null ? void 0 : $[0];
              D && (_ = D);
              break;
            }
            case "initialPlacement":
              _ = i;
              break;
          }
        if (r !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
function br(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xr(e) {
  return tl.some((t) => e[t] >= 0);
}
const hl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = nt(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await Jt(t, {
            ...r,
            elementContext: "reference"
          }), a = br(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: xr(a)
            }
          };
        }
        case "escaped": {
          const s = await Jt(t, {
            ...r,
            altBoundary: !0
          }), a = br(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: xr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Qr = /* @__PURE__ */ new Set(["left", "top"]);
async function gl(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = ot(n), i = Lt(n), c = qe(n) === "y", d = Qr.has(a) ? -1 : 1, p = s && c ? -1 : 1, l = nt(t, e);
  let {
    mainAxis: y,
    crossAxis: g,
    alignmentAxis: b
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: l.mainAxis || 0,
    crossAxis: l.crossAxis || 0,
    alignmentAxis: l.alignmentAxis
  };
  return i && typeof b == "number" && (g = i === "end" ? b * -1 : b), c ? {
    x: g * p,
    y: y * d
  } : {
    x: y * d,
    y: g * p
  };
}
const vl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: i
      } = t, c = await gl(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, yl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (v) => {
            let {
              x: w,
              y: x
            } = v;
            return {
              x: w,
              y: x
            };
          }
        },
        ...c
      } = nt(e, t), d = {
        x: n,
        y: o
      }, p = await Jt(t, c), l = qe(ot(r)), y = Bo(l);
      let g = d[y], b = d[l];
      if (s) {
        const v = y === "y" ? "top" : "left", w = y === "y" ? "bottom" : "right", x = g + p[v], C = g - p[w];
        g = ho(x, g, C);
      }
      if (a) {
        const v = l === "y" ? "top" : "left", w = l === "y" ? "bottom" : "right", x = b + p[v], C = b - p[w];
        b = ho(x, b, C);
      }
      const h = i.fn({
        ...t,
        [y]: g,
        [l]: b
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - o,
          enabled: {
            [y]: s,
            [l]: a
          }
        }
      };
    }
  };
}, bl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = nt(e, t), p = {
        x: n,
        y: o
      }, l = qe(r), y = Bo(l);
      let g = p[y], b = p[l];
      const h = nt(i, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const C = y === "y" ? "height" : "width", S = s.reference[y] - s.floating[C] + v.mainAxis, k = s.reference[y] + s.reference[C] - v.mainAxis;
        g < S ? g = S : g > k && (g = k);
      }
      if (d) {
        var w, x;
        const C = y === "y" ? "width" : "height", S = Qr.has(ot(r)), k = s.reference[l] - s.floating[C] + (S && ((w = a.offset) == null ? void 0 : w[l]) || 0) + (S ? 0 : v.crossAxis), j = s.reference[l] + s.reference[C] + (S ? 0 : ((x = a.offset) == null ? void 0 : x[l]) || 0) - (S ? v.crossAxis : 0);
        b < k ? b = k : b > j && (b = j);
      }
      return {
        [y]: g,
        [l]: b
      };
    }
  };
}, xl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...d
      } = nt(e, t), p = await Jt(t, d), l = ot(r), y = Lt(r), g = qe(r) === "y", {
        width: b,
        height: h
      } = s.floating;
      let v, w;
      l === "top" || l === "bottom" ? (v = l, w = y === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = l, v = y === "end" ? "top" : "bottom");
      const x = h - p.top - p.bottom, C = b - p.left - p.right, S = ct(h - p[v], x), k = ct(b - p[w], C), j = !t.middlewareData.shift;
      let A = S, P = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = C), (o = t.middlewareData.shift) != null && o.enabled.y && (A = x), j && !y) {
        const q = De(p.left, 0), Y = De(p.right, 0), G = De(p.top, 0), $ = De(p.bottom, 0);
        g ? P = b - 2 * (q !== 0 || Y !== 0 ? q + Y : De(p.left, p.right)) : A = h - 2 * (G !== 0 || $ !== 0 ? G + $ : De(p.top, p.bottom));
      }
      await c({
        ...t,
        availableWidth: P,
        availableHeight: A
      });
      const B = await a.getDimensions(i.floating);
      return b !== B.width || h !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function In() {
  return typeof window < "u";
}
function Ft(e) {
  return es(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (es(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function es(e) {
  return In() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Ve(e) {
  return In() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Je(e) {
  return In() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function wr(e) {
  return !In() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
const wl = /* @__PURE__ */ new Set(["inline", "contents"]);
function nn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = We(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !wl.has(r);
}
const Cl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function El(e) {
  return Cl.has(Ft(e));
}
const Sl = [":popover-open", ":modal"];
function Dn(e) {
  return Sl.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const kl = ["transform", "translate", "scale", "rotate", "perspective"], Tl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Rl = ["paint", "layout", "strict", "content"];
function Vo(e) {
  const t = Wo(), n = Ve(e) ? We(e) : e;
  return kl.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Tl.some((o) => (n.willChange || "").includes(o)) || Rl.some((o) => (n.contain || "").includes(o));
}
function Pl(e) {
  let t = dt(e);
  for (; Je(t) && !Mt(t); ) {
    if (Vo(t))
      return t;
    if (Dn(t))
      return null;
    t = dt(t);
  }
  return null;
}
function Wo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Al = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Mt(e) {
  return Al.has(Ft(e));
}
function We(e) {
  return Le(e).getComputedStyle(e);
}
function Ln(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function dt(e) {
  if (Ft(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wr(e) && e.host || // Fallback.
    Ze(e)
  );
  return wr(t) ? t.host : t;
}
function ts(e) {
  const t = dt(e);
  return Mt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Je(t) && nn(t) ? t : ts(t);
}
function Zt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ts(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Le(r);
  if (s) {
    const i = vo(a);
    return t.concat(a, a.visualViewport || [], nn(r) ? r : [], i && n ? Zt(i) : []);
  }
  return t.concat(r, Zt(r, [], n));
}
function vo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ns(e) {
  const t = We(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Je(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = Rn(n) !== s || Rn(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function Uo(e) {
  return Ve(e) ? e : e.contextElement;
}
function Nt(e) {
  const t = Uo(e);
  if (!Je(t))
    return Xe(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = ns(t);
  let a = (s ? Rn(n.width) : n.width) / o, i = (s ? Rn(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const _l = /* @__PURE__ */ Xe(0);
function os(e) {
  const t = Le(e);
  return !Wo() || !t.visualViewport ? _l : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function wt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Uo(e);
  let a = Xe(1);
  t && (o ? Ve(o) && (a = Nt(o)) : a = Nt(e));
  const i = Nl(s, n, o) ? os(s) : Xe(0);
  let c = (r.left + i.x) / a.x, d = (r.top + i.y) / a.y, p = r.width / a.x, l = r.height / a.y;
  if (s) {
    const y = Le(s), g = o && Ve(o) ? Le(o) : o;
    let b = y, h = vo(b);
    for (; h && o && g !== b; ) {
      const v = Nt(h), w = h.getBoundingClientRect(), x = We(h), C = w.left + (h.clientLeft + parseFloat(x.paddingLeft)) * v.x, S = w.top + (h.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, d *= v.y, p *= v.x, l *= v.y, c += C, d += S, b = Le(h), h = vo(b);
    }
  }
  return An({
    width: p,
    height: l,
    x: c,
    y: d
  });
}
function Yo(e, t) {
  const n = Ln(e).scrollLeft;
  return t ? t.left + n : wt(Ze(e)).left + n;
}
function rs(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Yo(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Ol(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = Ze(o), i = t ? Dn(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Xe(1);
  const p = Xe(0), l = Je(o);
  if ((l || !l && !s) && ((Ft(o) !== "body" || nn(a)) && (c = Ln(o)), Je(o))) {
    const g = wt(o);
    d = Nt(o), p.x = g.x + o.clientLeft, p.y = g.y + o.clientTop;
  }
  const y = a && !l && !s ? rs(a, c, !0) : Xe(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + p.x + y.x,
    y: n.y * d.y - c.scrollTop * d.y + p.y + y.y
  };
}
function jl(e) {
  return Array.from(e.getClientRects());
}
function Ml(e) {
  const t = Ze(e), n = Ln(e), o = e.ownerDocument.body, r = De(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = De(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + Yo(e);
  const i = -n.scrollTop;
  return We(o).direction === "rtl" && (a += De(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function Il(e, t) {
  const n = Le(e), o = Ze(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, c = 0;
  if (r) {
    s = r.width, a = r.height;
    const d = Wo();
    (!d || d && t === "fixed") && (i = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const Dl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ll(e, t) {
  const n = wt(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Je(e) ? Nt(e) : Xe(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = r * s.x, d = o * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
function Cr(e, t, n) {
  let o;
  if (t === "viewport")
    o = Il(e, n);
  else if (t === "document")
    o = Ml(Ze(e));
  else if (Ve(t))
    o = Ll(t, n);
  else {
    const r = os(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return An(o);
}
function ss(e, t) {
  const n = dt(e);
  return n === t || !Ve(n) || Mt(n) ? !1 : We(n).position === "fixed" || ss(n, t);
}
function Fl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Zt(e, [], !1).filter((i) => Ve(i) && Ft(i) !== "body"), r = null;
  const s = We(e).position === "fixed";
  let a = s ? dt(e) : e;
  for (; Ve(a) && !Mt(a); ) {
    const i = We(a), c = Vo(a);
    !c && i.position === "fixed" && (r = null), (s ? !c && !r : !c && i.position === "static" && !!r && Dl.has(r.position) || nn(a) && !c && ss(e, a)) ? o = o.filter((p) => p !== a) : r = i, a = dt(a);
  }
  return t.set(e, o), o;
}
function zl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? Dn(t) ? [] : Fl(t, this._c) : [].concat(n), o], i = a[0], c = a.reduce((d, p) => {
    const l = Cr(t, p, r);
    return d.top = De(l.top, d.top), d.right = ct(l.right, d.right), d.bottom = ct(l.bottom, d.bottom), d.left = De(l.left, d.left), d;
  }, Cr(t, i, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Bl(e) {
  const {
    width: t,
    height: n
  } = ns(e);
  return {
    width: t,
    height: n
  };
}
function $l(e, t, n) {
  const o = Je(t), r = Ze(t), s = n === "fixed", a = wt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Xe(0);
  function d() {
    c.x = Yo(r);
  }
  if (o || !o && !s)
    if ((Ft(t) !== "body" || nn(r)) && (i = Ln(t)), o) {
      const g = wt(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else r && d();
  s && !o && r && d();
  const p = r && !o && !s ? rs(r, i) : Xe(0), l = a.left + i.scrollLeft - c.x - p.x, y = a.top + i.scrollTop - c.y - p.y;
  return {
    x: l,
    y,
    width: a.width,
    height: a.height
  };
}
function eo(e) {
  return We(e).position === "static";
}
function Er(e, t) {
  if (!Je(e) || We(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ze(e) === n && (n = n.ownerDocument.body), n;
}
function as(e, t) {
  const n = Le(e);
  if (Dn(e))
    return n;
  if (!Je(e)) {
    let r = dt(e);
    for (; r && !Mt(r); ) {
      if (Ve(r) && !eo(r))
        return r;
      r = dt(r);
    }
    return n;
  }
  let o = Er(e, t);
  for (; o && El(o) && eo(o); )
    o = Er(o, t);
  return o && Mt(o) && eo(o) && !Vo(o) ? n : o || Pl(e) || n;
}
const Hl = async function(e) {
  const t = this.getOffsetParent || as, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: $l(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Vl(e) {
  return We(e).direction === "rtl";
}
const Wl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ol,
  getDocumentElement: Ze,
  getClippingRect: zl,
  getOffsetParent: as,
  getElementRects: Hl,
  getClientRects: jl,
  getDimensions: Bl,
  getScale: Nt,
  isElement: Ve,
  isRTL: Vl
};
function is(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ul(e, t) {
  let n = null, o;
  const r = Ze(e);
  function s() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: l,
      width: y,
      height: g
    } = d;
    if (i || t(), !y || !g)
      return;
    const b = gn(l), h = gn(r.clientWidth - (p + y)), v = gn(r.clientHeight - (l + g)), w = gn(p), C = {
      rootMargin: -b + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: De(0, ct(1, c)) || 1
    };
    let S = !0;
    function k(j) {
      const A = j[0].intersectionRatio;
      if (A !== c) {
        if (!S)
          return a();
        A ? a(!1, A) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !is(d, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...C,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, C);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Yl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, d = Uo(e), p = r || s ? [...d ? Zt(d) : [], ...Zt(t)] : [];
  p.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const l = d && i ? Ul(d, n) : null;
  let y = -1, g = null;
  a && (g = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === d && g && (g.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), d && !c && g.observe(d), g.observe(t));
  let b, h = c ? wt(e) : null;
  c && v();
  function v() {
    const w = wt(e);
    h && !is(h, w) && n(), h = w, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    p.forEach((x) => {
      r && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), l?.(), (w = g) == null || w.disconnect(), g = null, c && cancelAnimationFrame(b);
  };
}
const Gl = vl, Kl = yl, ql = ml, Xl = xl, Jl = hl, Sr = pl, Zl = bl, Ql = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Wl,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return fl(e, t, {
    ...r,
    platform: s
  });
};
var ec = typeof document < "u", tc = function() {
}, Sn = ec ? Qa : tc;
function _n(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!_n(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !_n(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ls(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kr(e, t) {
  const n = ls(e);
  return Math.round(t * n) / n;
}
function to(e) {
  const t = f.useRef(e);
  return Sn(() => {
    t.current = e;
  }), t;
}
function nc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: d
  } = e, [p, l] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, g] = f.useState(o);
  _n(y, o) || g(o);
  const [b, h] = f.useState(null), [v, w] = f.useState(null), x = f.useCallback((E) => {
    E !== j.current && (j.current = E, h(E));
  }, []), C = f.useCallback((E) => {
    E !== A.current && (A.current = E, w(E));
  }, []), S = s || b, k = a || v, j = f.useRef(null), A = f.useRef(null), P = f.useRef(p), B = c != null, q = to(c), Y = to(r), G = to(d), $ = f.useCallback(() => {
    if (!j.current || !A.current)
      return;
    const E = {
      placement: t,
      strategy: n,
      middleware: y
    };
    Y.current && (E.platform = Y.current), Ql(j.current, A.current, E).then((V) => {
      const ce = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      F.current && !_n(P.current, ce) && (P.current = ce, jn.flushSync(() => {
        l(ce);
      }));
    });
  }, [y, t, n, Y, G]);
  Sn(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, l((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [d]);
  const F = f.useRef(!1);
  Sn(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Sn(() => {
    if (S && (j.current = S), k && (A.current = k), S && k) {
      if (q.current)
        return q.current(S, k, $);
      $();
    }
  }, [S, k, $, q, B]);
  const z = f.useMemo(() => ({
    reference: j,
    floating: A,
    setReference: x,
    setFloating: C
  }), [x, C]), _ = f.useMemo(() => ({
    reference: S,
    floating: k
  }), [S, k]), D = f.useMemo(() => {
    const E = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return E;
    const V = kr(_.floating, p.x), ce = kr(_.floating, p.y);
    return i ? {
      ...E,
      transform: "translate(" + V + "px, " + ce + "px)",
      ...ls(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: ce
    };
  }, [n, i, _.floating, p.x, p.y]);
  return f.useMemo(() => ({
    ...p,
    update: $,
    refs: z,
    elements: _,
    floatingStyles: D
  }), [p, $, z, _, D]);
}
const oc = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Sr({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Sr({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, rc = (e, t) => ({
  ...Gl(e),
  options: [e, t]
}), sc = (e, t) => ({
  ...Kl(e),
  options: [e, t]
}), ac = (e, t) => ({
  ...Zl(e),
  options: [e, t]
}), ic = (e, t) => ({
  ...ql(e),
  options: [e, t]
}), lc = (e, t) => ({
  ...Xl(e),
  options: [e, t]
}), cc = (e, t) => ({
  ...Jl(e),
  options: [e, t]
}), dc = (e, t) => ({
  ...oc(e),
  options: [e, t]
});
var uc = "Arrow", cs = f.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ u.jsx(
    de.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
cs.displayName = uc;
var fc = cs;
function pc(e) {
  const [t, n] = f.useState(void 0);
  return Re(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          a = d.inlineSize, i = d.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Go = "Popper", [ds, zt] = en(Go), [mc, us] = ds(Go), fs = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = f.useState(null);
  return /* @__PURE__ */ u.jsx(mc, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
fs.displayName = Go;
var ps = "PopperAnchor", ms = f.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = us(ps, n), a = f.useRef(null), i = ue(t, a);
    return f.useEffect(() => {
      s.onAnchorChange(o?.current || a.current);
    }), o ? null : /* @__PURE__ */ u.jsx(de.div, { ...r, ref: i });
  }
);
ms.displayName = ps;
var Ko = "PopperContent", [hc, gc] = ds(Ko), hs = f.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: p = 0,
      sticky: l = "partial",
      hideWhenDetached: y = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: b,
      ...h
    } = e, v = us(Ko, n), [w, x] = f.useState(null), C = ue(t, (N) => x(N)), [S, k] = f.useState(null), j = pc(S), A = j?.width ?? 0, P = j?.height ?? 0, B = o + (s !== "center" ? "-" + s : ""), q = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, Y = Array.isArray(d) ? d : [d], G = Y.length > 0, $ = {
      padding: q,
      boundary: Y.filter(yc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: G
    }, { refs: F, floatingStyles: z, placement: _, isPositioned: D, middlewareData: E } = nc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...N) => Yl(...N, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        rc({ mainAxis: r + P, alignmentAxis: a }),
        c && sc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: l === "partial" ? ac() : void 0,
          ...$
        }),
        c && ic({ ...$ }),
        lc({
          ...$,
          apply: ({ elements: N, rects: Q, availableWidth: ae, availableHeight: U }) => {
            const { width: oe, height: re } = Q.reference, we = N.floating.style;
            we.setProperty("--radix-popper-available-width", `${ae}px`), we.setProperty("--radix-popper-available-height", `${U}px`), we.setProperty("--radix-popper-anchor-width", `${oe}px`), we.setProperty("--radix-popper-anchor-height", `${re}px`);
          }
        }),
        S && dc({ element: S, padding: i }),
        bc({ arrowWidth: A, arrowHeight: P }),
        y && cc({ strategy: "referenceHidden", ...$ })
      ]
    }), [V, ce] = ys(_), K = xt(b);
    Re(() => {
      D && K?.();
    }, [D, K]);
    const te = E.arrow?.x, L = E.arrow?.y, J = E.arrow?.centerOffset !== 0, [fe, Z] = f.useState();
    return Re(() => {
      w && Z(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: D ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: fe,
          "--radix-popper-transform-origin": [
            E.transformOrigin?.x,
            E.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...E.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          hc,
          {
            scope: n,
            placedSide: V,
            onArrowChange: k,
            arrowX: te,
            arrowY: L,
            shouldHideArrow: J,
            children: /* @__PURE__ */ u.jsx(
              de.div,
              {
                "data-side": V,
                "data-align": ce,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
hs.displayName = Ko;
var gs = "PopperArrow", vc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vs = f.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = gc(gs, o), a = vc[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          fc,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
vs.displayName = gs;
function yc(e) {
  return e !== null;
}
var bc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t, a = r.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [d, p] = ys(n), l = { start: "0%", center: "50%", end: "100%" }[p], y = (r.arrow?.x ?? 0) + i / 2, g = (r.arrow?.y ?? 0) + c / 2;
    let b = "", h = "";
    return d === "bottom" ? (b = a ? l : `${y}px`, h = `${-c}px`) : d === "top" ? (b = a ? l : `${y}px`, h = `${o.floating.height + c}px`) : d === "right" ? (b = `${-c}px`, h = a ? l : `${g}px`) : d === "left" && (b = `${o.floating.width + c}px`, h = a ? l : `${g}px`), { data: { x: b, y: h } };
  }
});
function ys(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qo = fs, Fn = ms, Xo = hs, Jo = vs, xc = "Portal", zn = f.forwardRef((e, t) => {
  const { container: n, ...o } = e, [r, s] = f.useState(!1);
  Re(() => s(!0), []);
  const a = n || r && globalThis?.document?.body;
  return a ? Gr.createPortal(/* @__PURE__ */ u.jsx(de.div, { ...o, ref: t }), a) : null;
});
zn.displayName = xc;
function wc(e, t) {
  return f.useReducer((n, o) => t[n][o] ?? n, e);
}
var on = (e) => {
  const { present: t, children: n } = e, o = Cc(t), r = typeof n == "function" ? n({ present: o.isPresent }) : f.Children.only(n), s = ue(o.ref, Ec(r));
  return typeof n == "function" || o.isPresent ? f.cloneElement(r, { ref: s }) : null;
};
on.displayName = "Presence";
function Cc(e) {
  const [t, n] = f.useState(), o = f.useRef(null), r = f.useRef(e), s = f.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = wc(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return f.useEffect(() => {
    const d = vn(o.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), Re(() => {
    const d = o.current, p = r.current;
    if (p !== e) {
      const y = s.current, g = vn(d);
      e ? c("MOUNT") : g === "none" || d?.display === "none" ? c("UNMOUNT") : c(p && y !== g ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, c]), Re(() => {
    if (t) {
      let d;
      const p = t.ownerDocument.defaultView ?? window, l = (g) => {
        const h = vn(o.current).includes(g.animationName);
        if (g.target === t && h && (c("ANIMATION_END"), !r.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, y = (g) => {
        g.target === t && (s.current = vn(o.current));
      };
      return t.addEventListener("animationstart", y), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        p.clearTimeout(d), t.removeEventListener("animationstart", y), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: f.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function vn(e) {
  return e?.animationName || "none";
}
function Ec(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Sc = f[" useInsertionEffect ".trim().toString()] || Re;
function Nn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, s, a] = kc({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : r;
  {
    const p = f.useRef(e !== void 0);
    f.useEffect(() => {
      const l = p.current;
      l !== i && console.warn(
        `${o} is changing from ${l ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = i;
    }, [i, o]);
  }
  const d = f.useCallback(
    (p) => {
      if (i) {
        const l = Tc(p) ? p(e) : p;
        l !== e && a.current?.(l);
      } else
        s(p);
    },
    [i, e, s, a]
  );
  return [c, d];
}
function kc({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = f.useState(e), r = f.useRef(n), s = f.useRef(t);
  return Sc(() => {
    s.current = t;
  }, [t]), f.useEffect(() => {
    r.current !== n && (s.current?.(n), r.current = n);
  }, [n, r]), [n, o, s];
}
function Tc(e) {
  return typeof e == "function";
}
var bs = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Rc = "VisuallyHidden", xs = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    de.span,
    {
      ...e,
      ref: t,
      style: { ...bs, ...e.style }
    }
  )
);
xs.displayName = Rc;
var Pc = xs, [Bn, Wp] = en("Tooltip", [
  zt
]), $n = zt(), ws = "TooltipProvider", Ac = 700, yo = "tooltip.open", [_c, Zo] = Bn(ws), Cs = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Ac,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, a = f.useRef(!0), i = f.useRef(!1), c = f.useRef(0);
  return f.useEffect(() => {
    const d = c.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ u.jsx(
    _c,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: f.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: f.useCallback((d) => {
        i.current = d;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
};
Cs.displayName = ws;
var Qt = "Tooltip", [Nc, rn] = Bn(Qt), Es = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Zo(Qt, e.__scopeTooltip), d = $n(t), [p, l] = f.useState(null), y = tn(), g = f.useRef(0), b = a ?? c.disableHoverableContent, h = i ?? c.delayDuration, v = f.useRef(!1), [w, x] = Nn({
    prop: o,
    defaultProp: r ?? !1,
    onChange: (A) => {
      A ? (c.onOpen(), document.dispatchEvent(new CustomEvent(yo))) : c.onClose(), s?.(A);
    },
    caller: Qt
  }), C = f.useMemo(() => w ? v.current ? "delayed-open" : "instant-open" : "closed", [w]), S = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, x(!0);
  }, [x]), k = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, x(!1);
  }, [x]), j = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, x(!0), g.current = 0;
    }, h);
  }, [h, x]);
  return f.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ u.jsx(qo, { ...d, children: /* @__PURE__ */ u.jsx(
    Nc,
    {
      scope: t,
      contentId: y,
      open: w,
      stateAttribute: C,
      trigger: p,
      onTriggerChange: l,
      onTriggerEnter: f.useCallback(() => {
        c.isOpenDelayedRef.current ? j() : S();
      }, [c.isOpenDelayedRef, j, S]),
      onTriggerLeave: f.useCallback(() => {
        b ? k() : (window.clearTimeout(g.current), g.current = 0);
      }, [k, b]),
      onOpen: S,
      onClose: k,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
Es.displayName = Qt;
var bo = "TooltipTrigger", Ss = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = rn(bo, n), s = Zo(bo, n), a = $n(n), i = f.useRef(null), c = ue(t, i, r.onTriggerChange), d = f.useRef(!1), p = f.useRef(!1), l = f.useCallback(() => d.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", l), [l]), /* @__PURE__ */ u.jsx(Fn, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      de.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: c,
        onPointerMove: se(e.onPointerMove, (y) => {
          y.pointerType !== "touch" && !p.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: se(e.onPointerLeave, () => {
          r.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: se(e.onPointerDown, () => {
          r.open && r.onClose(), d.current = !0, document.addEventListener("pointerup", l, { once: !0 });
        }),
        onFocus: se(e.onFocus, () => {
          d.current || r.onOpen();
        }),
        onBlur: se(e.onBlur, r.onClose),
        onClick: se(e.onClick, r.onClose)
      }
    ) });
  }
);
Ss.displayName = bo;
var Qo = "TooltipPortal", [Oc, jc] = Bn(Qo, {
  forceMount: void 0
}), ks = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = rn(Qo, t);
  return /* @__PURE__ */ u.jsx(Oc, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(on, { present: n || s.open, children: /* @__PURE__ */ u.jsx(zn, { asChild: !0, container: r, children: o }) }) });
};
ks.displayName = Qo;
var It = "TooltipContent", Ts = f.forwardRef(
  (e, t) => {
    const n = jc(It, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, a = rn(It, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(on, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ u.jsx(Rs, { side: r, ...s, ref: t }) : /* @__PURE__ */ u.jsx(Mc, { side: r, ...s, ref: t }) });
  }
), Mc = f.forwardRef((e, t) => {
  const n = rn(It, e.__scopeTooltip), o = Zo(It, e.__scopeTooltip), r = f.useRef(null), s = ue(t, r), [a, i] = f.useState(null), { trigger: c, onClose: d } = n, p = r.current, { onPointerInTransitChange: l } = o, y = f.useCallback(() => {
    i(null), l(!1);
  }, [l]), g = f.useCallback(
    (b, h) => {
      const v = b.currentTarget, w = { x: b.clientX, y: b.clientY }, x = Fc(w, v.getBoundingClientRect()), C = zc(w, x), S = Bc(h.getBoundingClientRect()), k = Hc([...C, ...S]);
      i(k), l(!0);
    },
    [l]
  );
  return f.useEffect(() => () => y(), [y]), f.useEffect(() => {
    if (c && p) {
      const b = (v) => g(v, p), h = (v) => g(v, c);
      return c.addEventListener("pointerleave", b), p.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", b), p.removeEventListener("pointerleave", h);
      };
    }
  }, [c, p, g, y]), f.useEffect(() => {
    if (a) {
      const b = (h) => {
        const v = h.target, w = { x: h.clientX, y: h.clientY }, x = c?.contains(v) || p?.contains(v), C = !$c(w, a);
        x ? y() : C && (y(), d());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, p, a, d, y]), /* @__PURE__ */ u.jsx(Rs, { ...e, ref: s });
}), [Ic, Dc] = Bn(Qt, { isInside: !1 }), Lc = /* @__PURE__ */ zi("TooltipContent"), Rs = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = rn(It, n), d = $n(n), { onClose: p } = c;
    return f.useEffect(() => (document.addEventListener(yo, p), () => document.removeEventListener(yo, p)), [p]), f.useEffect(() => {
      if (c.trigger) {
        const l = (y) => {
          y.target?.contains(c.trigger) && p();
        };
        return window.addEventListener("scroll", l, { capture: !0 }), () => window.removeEventListener("scroll", l, { capture: !0 });
      }
    }, [c.trigger, p]), /* @__PURE__ */ u.jsx(
      Mn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (l) => l.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ u.jsxs(
          Xo,
          {
            "data-state": c.stateAttribute,
            ...d,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u.jsx(Lc, { children: o }),
              /* @__PURE__ */ u.jsx(Ic, { scope: n, isInside: !0, children: /* @__PURE__ */ u.jsx(Pc, { id: c.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
Ts.displayName = It;
var Ps = "TooltipArrow", As = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = $n(n);
    return Dc(
      Ps,
      n
    ).isInside ? null : /* @__PURE__ */ u.jsx(Jo, { ...r, ...o, ref: t });
  }
);
As.displayName = Ps;
function Fc(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function zc(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function Bc(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function $c(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, p = i.y, l = c.x, y = c.y;
    p > o != y > o && n < (l - d) * (o - p) / (y - p) + d && (r = !r);
  }
  return r;
}
function Hc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Vc(t);
}
function Vc(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Wc = Cs, Uc = Es, Yc = Ss, Gc = ks, Kc = Ts, qc = As;
function _s(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = _s(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ns() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = _s(e)) && (o && (o += " "), o += t);
  return o;
}
const er = "-", Xc = (e) => {
  const t = Zc(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(er);
      return i[0] === "" && i.length !== 1 && i.shift(), Os(i, t) || Jc(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && o[a] ? [...c, ...o[a]] : c;
    }
  };
}, Os = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Os(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(er);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}, Tr = /^\[(.+)\]$/, Jc = (e) => {
  if (Tr.test(e)) {
    const t = Tr.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Zc = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in n)
    xo(n[r], o, r, t);
  return o;
}, xo = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : Rr(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Qc(r)) {
        xo(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      xo(a, Rr(t, s), n, o);
    });
  });
}, Rr = (e, t) => {
  let n = e;
  return t.split(er).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Qc = (e) => e.isThemeGetter, ed = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = o.get(s)) !== void 0)
        return r(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : r(s, a);
    }
  };
}, wo = "!", Co = ":", td = Co.length, nd = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (r) => {
    const s = [];
    let a = 0, i = 0, c = 0, d;
    for (let b = 0; b < r.length; b++) {
      let h = r[b];
      if (a === 0 && i === 0) {
        if (h === Co) {
          s.push(r.slice(c, b)), c = b + td;
          continue;
        }
        if (h === "/") {
          d = b;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? i++ : h === ")" && i--;
    }
    const p = s.length === 0 ? r : r.substring(c), l = od(p), y = l !== p, g = d && d > c ? d - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: l,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const r = t + Co, s = o;
    o = (a) => a.startsWith(r) ? s(a.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const r = o;
    o = (s) => n({
      className: s,
      parseClassName: r
    });
  }
  return o;
}, od = (e) => e.endsWith(wo) ? e.substring(0, e.length - 1) : e.startsWith(wo) ? e.substring(1) : e, rd = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const r = [];
    let s = [];
    return o.forEach((a) => {
      a[0] === "[" || t[a] ? (r.push(...s.sort(), a), s = []) : s.push(a);
    }), r.push(...s.sort()), r;
  };
}, sd = (e) => ({
  cache: ed(e.cacheSize),
  parseClassName: nd(e),
  sortModifiers: rd(e),
  ...Xc(e)
}), ad = /\s+/, id = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(ad);
  let c = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const p = i[d], {
      isExternal: l,
      modifiers: y,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: h
    } = n(p);
    if (l) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let v = !!h, w = o(v ? b.substring(0, h) : b);
    if (!w) {
      if (!v) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = o(b), !w) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      v = !1;
    }
    const x = s(y).join(":"), C = g ? x + wo : x, S = C + w;
    if (a.includes(S))
      continue;
    a.push(S);
    const k = r(w, v);
    for (let j = 0; j < k.length; ++j) {
      const A = k[j];
      a.push(C + A);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function ld() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = js(t)) && (o && (o += " "), o += n);
  return o;
}
const js = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = js(e[o])) && (n && (n += " "), n += t);
  return n;
};
function cd(e, ...t) {
  let n, o, r, s = a;
  function a(c) {
    const d = t.reduce((p, l) => l(p), e());
    return n = sd(d), o = n.cache.get, r = n.cache.set, s = i, i(c);
  }
  function i(c) {
    const d = o(c);
    if (d)
      return d;
    const p = id(c, n);
    return r(c, p), p;
  }
  return function() {
    return s(ld.apply(null, arguments));
  };
}
const ye = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ms = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Is = /^\((?:(\w[\w-]*):)?(.+)\)$/i, dd = /^\d+\/\d+$/, ud = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, md = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Rt = (e) => dd.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), it = (e) => !!e && Number.isInteger(Number(e)), no = (e) => e.endsWith("%") && X(e.slice(0, -1)), tt = (e) => ud.test(e), gd = () => !0, vd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  fd.test(e) && !pd.test(e)
), Ds = () => !1, yd = (e) => md.test(e), bd = (e) => hd.test(e), xd = (e) => !M(e) && !I(e), wd = (e) => Bt(e, zs, Ds), M = (e) => Ms.test(e), bt = (e) => Bt(e, Bs, vd), oo = (e) => Bt(e, Td, X), Pr = (e) => Bt(e, Ls, Ds), Cd = (e) => Bt(e, Fs, bd), yn = (e) => Bt(e, $s, yd), I = (e) => Is.test(e), Kt = (e) => $t(e, Bs), Ed = (e) => $t(e, Rd), Ar = (e) => $t(e, Ls), Sd = (e) => $t(e, zs), kd = (e) => $t(e, Fs), bn = (e) => $t(e, $s, !0), Bt = (e, t, n) => {
  const o = Ms.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, $t = (e, t, n = !1) => {
  const o = Is.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, Ls = (e) => e === "position" || e === "percentage", Fs = (e) => e === "image" || e === "url", zs = (e) => e === "length" || e === "size" || e === "bg-size", Bs = (e) => e === "length", Td = (e) => e === "number", Rd = (e) => e === "family-name", $s = (e) => e === "shadow", Pd = () => {
  const e = ye("color"), t = ye("font"), n = ye("text"), o = ye("font-weight"), r = ye("tracking"), s = ye("leading"), a = ye("breakpoint"), i = ye("container"), c = ye("spacing"), d = ye("radius"), p = ye("shadow"), l = ye("inset-shadow"), y = ye("text-shadow"), g = ye("drop-shadow"), b = ye("blur"), h = ye("perspective"), v = ye("aspect"), w = ye("ease"), x = ye("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], k = () => [...S(), I, M], j = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], P = () => [I, M, c], B = () => [Rt, "full", "auto", ...P()], q = () => [it, "none", "subgrid", I, M], Y = () => ["auto", {
    span: ["full", it, I, M]
  }, it, I, M], G = () => [it, "auto", I, M], $ = () => ["auto", "min", "max", "fr", I, M], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...P()], D = () => [Rt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], E = () => [e, I, M], V = () => [...S(), Ar, Pr, {
    position: [I, M]
  }], ce = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], K = () => ["auto", "cover", "contain", Sd, wd, {
    size: [I, M]
  }], te = () => [no, Kt, bt], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    I,
    M
  ], J = () => ["", X, Kt, bt], fe = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => [X, no, Ar, Pr], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    I,
    M
  ], ae = () => ["none", X, I, M], U = () => ["none", X, I, M], oe = () => [X, I, M], re = () => [Rt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [tt],
      breakpoint: [tt],
      color: [gd],
      container: [tt],
      "drop-shadow": [tt],
      ease: ["in", "out", "in-out"],
      font: [xd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [tt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [tt],
      shadow: [tt],
      spacing: ["px", X],
      text: [tt],
      "text-shadow": [tt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Rt, M, I, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [X, M, I, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: B()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": B()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": B()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: B()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: B()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: B()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: B()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: B()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: B()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [it, "auto", I, M]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Rt, "full", "auto", i, ...P()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [X, Rt, "auto", "initial", "none", M]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", X, I, M]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", X, I, M]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [it, "first", "last", "none", I, M]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": q()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Y()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": q()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Y()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: _()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: _()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: _()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: _()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: _()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: _()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: _()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: _()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: _()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": P()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": P()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: D()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...D()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...D()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Kt, bt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, I, oo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", no, M]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ed, M, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, I, M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [X, "none", I, oo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I, M]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", I, M]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [X, "from-font", "auto", I, bt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [X, "auto", I, M]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I, M]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", I, M]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: V()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ce()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: K()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, it, I, M],
          radial: ["", I, M],
          conic: [it, I, M]
        }, kd, Cd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: te()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: te()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: te()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": J()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...fe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...fe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...fe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, I, M]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", X, Kt, bt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          bn,
          yn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", l, bn, yn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [X, bt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, bn, yn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [X, I, M]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [X]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": N()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": N()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": N()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": N()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": N()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": N()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": N()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [I, M]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": N()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [X]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": N()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: V()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ce()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: K()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", I, M]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          I,
          M
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [X, I, M]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [X, I, M]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          bn,
          yn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", X, I, M]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [X, I, M]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", X, I, M]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [X, I, M]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", X, I, M]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          I,
          M
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [X, I, M]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [X, I, M]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", X, I, M]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [X, I, M]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", X, I, M]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [X, I, M]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X, I, M]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", X, I, M]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", I, M]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [X, "initial", I, M]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, I, M]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [X, I, M]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, I, M]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, I, M]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ae()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ae()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ae()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ae()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: U()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": U()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": U()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": U()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: oe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": oe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": oe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [I, M, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: E()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: E()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I, M]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", I, M]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, Kt, bt, oo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ad = /* @__PURE__ */ cd(Pd);
function Ue(...e) {
  return Ad(Ns(e));
}
function Hs({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Wc,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Ee({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(Hs, { children: /* @__PURE__ */ u.jsx(Uc, { "data-slot": "tooltip", ...e }) });
}
function Se({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(Yc, { "data-slot": "tooltip-trigger", ...e });
}
function ke({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ u.jsx(Gc, { children: /* @__PURE__ */ u.jsxs(
    Kc,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: Ue(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ u.jsx(qc, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Up = ({ children: e }) => /* @__PURE__ */ u.jsxs(Hs, { delayDuration: 0, children: [
  e,
  /* @__PURE__ */ u.jsx(Ii, { position: "top-right" })
] });
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), _r = (e) => {
  const t = Nd(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Vs = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), Od = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = Yr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: a,
    ...i
  }, c) => fo(
    "svg",
    {
      ref: c,
      ...jd,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Vs("lucide", r),
      ...!s && !Od(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...a.map(([d, p]) => fo(d, p)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (e, t) => {
  const n = Yr(
    ({ className: o, ...r }, s) => fo(Md, {
      ref: s,
      iconNode: t,
      className: Vs(
        `lucide-${_d(_r(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = _r(e), n;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = [
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 18H5", key: "18s9l3" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Dd = ge("align-center", Id);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
], Ws = ge("align-justify", Ld);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], zd = ge("align-left", Fd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = [
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 18H7", key: "1ygte8" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], $d = ge("align-right", Bd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], tr = ge("bold", Hd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Wd = ge("check", Vd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Us = ge("chevron-down", Ud);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Gd = ge("chevron-up", Yd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
], Ys = ge("container", Kd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Gs = ge("eraser", qd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Ks = ge("italic", Xd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], Zd = ge("link-2-off", Jd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], qs = ge("link", Qd);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eu = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], tu = ge("list-ordered", eu);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nu = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], Xs = ge("list", nu);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ou = [["path", { d: "M5 12h14", key: "1ays0h" }]], Js = ge("minus", ou);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = [
  ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
  [
    "path",
    {
      d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
      key: "18tc5c"
    }
  ],
  [
    "path",
    {
      d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
      key: "ytzfxy"
    }
  ]
], su = ge("paintbrush", ru);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const au = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], iu = ge("palette", au);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lu = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], cu = ge("type", lu);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], uu = ge("x", du), Nr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Or = Ns, fu = (e, t) => (n) => {
  var o;
  if (t?.variants == null) return Or(e, n?.class, n?.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((d) => {
    const p = n?.[d], l = s?.[d];
    if (p === null) return null;
    const y = Nr(p) || Nr(l);
    return r[d][y];
  }), i = n && Object.entries(n).reduce((d, p) => {
    let [l, y] = p;
    return y === void 0 || (d[l] = y), d;
  }, {}), c = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, p) => {
    let { class: l, className: y, ...g } = p;
    return Object.entries(g).every((b) => {
      let [h, v] = b;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === v;
    }) ? [
      ...d,
      l,
      y
    ] : d;
  }, []);
  return Or(e, a, c, n?.class, n?.className);
}, pu = fu(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Te({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...r
}) {
  const s = o ? Li : "button";
  return /* @__PURE__ */ u.jsx(
    s,
    {
      "data-slot": "button",
      className: Ue(pu({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
var ro = 0;
function Zs() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? jr()), document.body.insertAdjacentElement("beforeend", e[1] ?? jr()), ro++, () => {
      ro === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ro--;
    };
  }, []);
}
function jr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var so = "focusScope.autoFocusOnMount", ao = "focusScope.autoFocusOnUnmount", Mr = { bubbles: !1, cancelable: !0 }, mu = "FocusScope", nr = f.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = f.useState(null), d = xt(r), p = xt(s), l = f.useRef(null), y = ue(t, (h) => c(h)), g = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (o) {
      let h = function(C) {
        if (g.paused || !i) return;
        const S = C.target;
        i.contains(S) ? l.current = S : lt(l.current, { select: !0 });
      }, v = function(C) {
        if (g.paused || !i) return;
        const S = C.relatedTarget;
        S !== null && (i.contains(S) || lt(l.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const k of C)
            k.removedNodes.length > 0 && lt(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const x = new MutationObserver(w);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), x.disconnect();
      };
    }
  }, [o, i, g.paused]), f.useEffect(() => {
    if (i) {
      Dr.add(g);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const w = new CustomEvent(so, Mr);
        i.addEventListener(so, d), i.dispatchEvent(w), w.defaultPrevented || (hu(xu(Qs(i)), { select: !0 }), document.activeElement === h && lt(i));
      }
      return () => {
        i.removeEventListener(so, d), setTimeout(() => {
          const w = new CustomEvent(ao, Mr);
          i.addEventListener(ao, p), i.dispatchEvent(w), w.defaultPrevented || lt(h ?? document.body, { select: !0 }), i.removeEventListener(ao, p), Dr.remove(g);
        }, 0);
      };
    }
  }, [i, d, p, g]);
  const b = f.useCallback(
    (h) => {
      if (!n && !o || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (v && w) {
        const x = h.currentTarget, [C, S] = gu(x);
        C && S ? !h.shiftKey && w === S ? (h.preventDefault(), n && lt(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), n && lt(S, { select: !0 })) : w === x && h.preventDefault();
      }
    },
    [n, o, g.paused]
  );
  return /* @__PURE__ */ u.jsx(de.div, { tabIndex: -1, ...a, ref: y, onKeyDown: b });
});
nr.displayName = mu;
function hu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (lt(o, { select: t }), document.activeElement !== n) return;
}
function gu(e) {
  const t = Qs(e), n = Ir(t, e), o = Ir(t.reverse(), e);
  return [n, o];
}
function Qs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ir(e, t) {
  for (const n of e)
    if (!vu(n, { upTo: t })) return n;
}
function vu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function yu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function lt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && yu(e) && t && e.select();
  }
}
var Dr = bu();
function bu() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Lr(e, t), e.unshift(t);
    },
    remove(t) {
      e = Lr(e, t), e[0]?.resume();
    }
  };
}
function Lr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function xu(e) {
  return e.filter((t) => t.tagName !== "A");
}
var wu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pt = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), wn = {}, io = 0, ea = function(e) {
  return e && (e.host || ea(e.parentNode));
}, Cu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ea(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Eu = function(e, t, n, o) {
  var r = Cu(t, Array.isArray(e) ? e : [e]);
  wn[n] || (wn[n] = /* @__PURE__ */ new WeakMap());
  var s = wn[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(r), d = function(l) {
    !l || i.has(l) || (i.add(l), d(l.parentNode));
  };
  r.forEach(d);
  var p = function(l) {
    !l || c.has(l) || Array.prototype.forEach.call(l.children, function(y) {
      if (i.has(y))
        p(y);
      else
        try {
          var g = y.getAttribute(o), b = g !== null && g !== "false", h = (Pt.get(y) || 0) + 1, v = (s.get(y) || 0) + 1;
          Pt.set(y, h), s.set(y, v), a.push(y), h === 1 && b && xn.set(y, !0), v === 1 && y.setAttribute(n, "true"), b || y.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", y, w);
        }
    });
  };
  return p(t), i.clear(), io++, function() {
    a.forEach(function(l) {
      var y = Pt.get(l) - 1, g = s.get(l) - 1;
      Pt.set(l, y), s.set(l, g), y || (xn.has(l) || l.removeAttribute(o), xn.delete(l)), g || l.removeAttribute(n);
    }), io--, io || (Pt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), wn = {});
  };
}, ta = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = wu(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Eu(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, Ke = function() {
  return Ke = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ke.apply(this, arguments);
};
function na(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Su(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var kn = "right-scroll-bar-position", Tn = "width-before-scroll-bar", ku = "with-scroll-bars-hidden", Tu = "--removed-body-scroll-bar-size";
function lo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ru(e, t) {
  var n = ei(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Pu = typeof window < "u" ? f.useLayoutEffect : f.useEffect, Fr = /* @__PURE__ */ new WeakMap();
function Au(e, t) {
  var n = Ru(null, function(o) {
    return e.forEach(function(r) {
      return lo(r, o);
    });
  });
  return Pu(function() {
    var o = Fr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(i) {
        s.has(i) || lo(i, null);
      }), s.forEach(function(i) {
        r.has(i) || lo(i, a);
      });
    }
    Fr.set(n, e);
  }, [e]), n;
}
function _u(e) {
  return e;
}
function Nu(e, t) {
  t === void 0 && (t = _u);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, o);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var c = function() {
        var p = a;
        a = [], p.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(p) {
          a.push(p), d();
        },
        filter: function(p) {
          return a = a.filter(p), n;
        }
      };
    }
  };
  return r;
}
function Ou(e) {
  e === void 0 && (e = {});
  var t = Nu(null);
  return t.options = Ke({ async: !0, ssr: !1 }, e), t;
}
var oa = function(e) {
  var t = e.sideCar, n = na(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return f.createElement(o, Ke({}, n));
};
oa.isSideCarExport = !0;
function ju(e, t) {
  return e.useMedium(t), oa;
}
var ra = Ou(), co = function() {
}, Hn = f.forwardRef(function(e, t) {
  var n = f.useRef(null), o = f.useState({
    onScrollCapture: co,
    onWheelCapture: co,
    onTouchMoveCapture: co
  }), r = o[0], s = o[1], a = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, p = e.enabled, l = e.shards, y = e.sideCar, g = e.noRelative, b = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, C = e.gapMode, S = na(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = y, j = Au([n, t]), A = Ke(Ke({}, S), r);
  return f.createElement(
    f.Fragment,
    null,
    p && f.createElement(k, { sideCar: ra, removeScrollBar: d, shards: l, noRelative: g, noIsolation: b, inert: h, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: C }),
    a ? f.cloneElement(f.Children.only(i), Ke(Ke({}, A), { ref: j })) : f.createElement(x, Ke({}, A, { className: c, ref: j }), i)
  );
});
Hn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hn.classNames = {
  fullWidth: Tn,
  zeroRight: kn
};
var Mu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Iu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Mu();
  return t && e.setAttribute("nonce", t), e;
}
function Du(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Fu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Iu()) && (Du(t, n), Lu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zu = function() {
  var e = Fu();
  return function(t, n) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sa = function() {
  var e = zu(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Bu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, uo = function(e) {
  return parseInt(e || "", 10) || 0;
}, $u = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [uo(n), uo(o), uo(r)];
}, Hu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Bu;
  var t = $u(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Vu = sa(), Ot = "data-scroll-locked", Wu = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ku, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(i, "px ").concat(o, `;
  }
  body[`).concat(Ot, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(kn, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(Tn, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(kn, " .").concat(kn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Tn, " .").concat(Tn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ot, `] {
    `).concat(Tu, ": ").concat(i, `px;
  }
`);
}, zr = function() {
  var e = parseInt(document.body.getAttribute(Ot) || "0", 10);
  return isFinite(e) ? e : 0;
}, Uu = function() {
  f.useEffect(function() {
    return document.body.setAttribute(Ot, (zr() + 1).toString()), function() {
      var e = zr() - 1;
      e <= 0 ? document.body.removeAttribute(Ot) : document.body.setAttribute(Ot, e.toString());
    };
  }, []);
}, Yu = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Uu();
  var s = f.useMemo(function() {
    return Hu(r);
  }, [r]);
  return f.createElement(Vu, { styles: Wu(s, !t, r, n ? "" : "!important") });
}, Eo = !1;
if (typeof window < "u")
  try {
    var Cn = Object.defineProperty({}, "passive", {
      get: function() {
        return Eo = !0, !0;
      }
    });
    window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
  } catch {
    Eo = !1;
  }
var At = Eo ? { passive: !1 } : !1, Gu = function(e) {
  return e.tagName === "TEXTAREA";
}, aa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Gu(e) && n[t] === "visible")
  );
}, Ku = function(e) {
  return aa(e, "overflowY");
}, qu = function(e) {
  return aa(e, "overflowX");
}, Br = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = ia(e, o);
    if (r) {
      var s = la(e, o), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, Xu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Ju = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, ia = function(e, t) {
  return e === "v" ? Ku(t) : qu(t);
}, la = function(e, t) {
  return e === "v" ? Xu(t) : Ju(t);
}, Zu = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Qu = function(e, t, n, o, r) {
  var s = Zu(e, window.getComputedStyle(t).direction), a = s * o, i = n.target, c = t.contains(i), d = !1, p = a > 0, l = 0, y = 0;
  do {
    if (!i)
      break;
    var g = la(e, i), b = g[0], h = g[1], v = g[2], w = h - v - s * b;
    (b || w) && ia(e, i) && (l += w, y += b);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (p && Math.abs(l) < 1 || !p && Math.abs(y) < 1) && (d = !0), d;
}, En = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $r = function(e) {
  return [e.deltaX, e.deltaY];
}, Hr = function(e) {
  return e && "current" in e ? e.current : e;
}, ef = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, tf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, nf = 0, _t = [];
function of(e) {
  var t = f.useRef([]), n = f.useRef([0, 0]), o = f.useRef(), r = f.useState(nf++)[0], s = f.useState(sa)[0], a = f.useRef(e);
  f.useEffect(function() {
    a.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = Su([e.lockRef.current], (e.shards || []).map(Hr), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = f.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var w = En(h), x = n.current, C = "deltaX" in h ? h.deltaX : x[0] - w[0], S = "deltaY" in h ? h.deltaY : x[1] - w[1], k, j = h.target, A = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && A === "h" && j.type === "range")
      return !1;
    var P = Br(A, j);
    if (!P)
      return !0;
    if (P ? k = A : (k = A === "v" ? "h" : "v", P = Br(A, j)), !P)
      return !1;
    if (!o.current && "changedTouches" in h && (C || S) && (o.current = k), !k)
      return !0;
    var B = o.current || k;
    return Qu(B, v, h, B === "h" ? C : S);
  }, []), c = f.useCallback(function(h) {
    var v = h;
    if (!(!_t.length || _t[_t.length - 1] !== s)) {
      var w = "deltaY" in v ? $r(v) : En(v), x = t.current.filter(function(k) {
        return k.name === v.type && (k.target === v.target || v.target === k.shadowParent) && ef(k.delta, w);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var C = (a.current.shards || []).map(Hr).filter(Boolean).filter(function(k) {
          return k.contains(v.target);
        }), S = C.length > 0 ? i(v, C[0]) : !a.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), d = f.useCallback(function(h, v, w, x) {
    var C = { name: h, delta: v, target: w, should: x, shadowParent: rf(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), p = f.useCallback(function(h) {
    n.current = En(h), o.current = void 0;
  }, []), l = f.useCallback(function(h) {
    d(h.type, $r(h), h.target, i(h, e.lockRef.current));
  }, []), y = f.useCallback(function(h) {
    d(h.type, En(h), h.target, i(h, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return _t.push(s), e.setCallbacks({
      onScrollCapture: l,
      onWheelCapture: l,
      onTouchMoveCapture: y
    }), document.addEventListener("wheel", c, At), document.addEventListener("touchmove", c, At), document.addEventListener("touchstart", p, At), function() {
      _t = _t.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", c, At), document.removeEventListener("touchmove", c, At), document.removeEventListener("touchstart", p, At);
    };
  }, []);
  var g = e.removeScrollBar, b = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    b ? f.createElement(s, { styles: tf(r) }) : null,
    g ? f.createElement(Yu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function rf(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const sf = ju(ra, of);
var or = f.forwardRef(function(e, t) {
  return f.createElement(Hn, Ke({}, e, { ref: t, sideCar: sf }));
});
or.classNames = Hn.classNames;
var Vn = "Popover", [ca, Yp] = en(Vn, [
  zt
]), sn = zt(), [af, ut] = ca(Vn), da = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !1
  } = e, i = sn(t), c = f.useRef(null), [d, p] = f.useState(!1), [l, y] = Nn({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: Vn
  });
  return /* @__PURE__ */ u.jsx(qo, { ...i, children: /* @__PURE__ */ u.jsx(
    af,
    {
      scope: t,
      contentId: tn(),
      triggerRef: c,
      open: l,
      onOpenChange: y,
      onOpenToggle: f.useCallback(() => y((g) => !g), [y]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: f.useCallback(() => p(!0), []),
      onCustomAnchorRemove: f.useCallback(() => p(!1), []),
      modal: a,
      children: n
    }
  ) });
};
da.displayName = Vn;
var ua = "PopoverAnchor", lf = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = ut(ua, n), s = sn(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = r;
    return f.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ u.jsx(Fn, { ...s, ...o, ref: t });
  }
);
lf.displayName = ua;
var fa = "PopoverTrigger", pa = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = ut(fa, n), s = sn(n), a = ue(t, r.triggerRef), i = /* @__PURE__ */ u.jsx(
      de.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": ya(r.open),
        ...o,
        ref: a,
        onClick: se(e.onClick, r.onOpenToggle)
      }
    );
    return r.hasCustomAnchor ? i : /* @__PURE__ */ u.jsx(Fn, { asChild: !0, ...s, children: i });
  }
);
pa.displayName = fa;
var rr = "PopoverPortal", [cf, df] = ca(rr, {
  forceMount: void 0
}), ma = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, s = ut(rr, t);
  return /* @__PURE__ */ u.jsx(cf, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(on, { present: n || s.open, children: /* @__PURE__ */ u.jsx(zn, { asChild: !0, container: r, children: o }) }) });
};
ma.displayName = rr;
var Dt = "PopoverContent", ha = f.forwardRef(
  (e, t) => {
    const n = df(Dt, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, s = ut(Dt, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(on, { present: o || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(ff, { ...r, ref: t }) : /* @__PURE__ */ u.jsx(pf, { ...r, ref: t }) });
  }
);
ha.displayName = Dt;
var uf = /* @__PURE__ */ jt("PopoverContent.RemoveScroll"), ff = f.forwardRef(
  (e, t) => {
    const n = ut(Dt, e.__scopePopover), o = f.useRef(null), r = ue(t, o), s = f.useRef(!1);
    return f.useEffect(() => {
      const a = o.current;
      if (a) return ta(a);
    }, []), /* @__PURE__ */ u.jsx(or, { as: uf, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      ga,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: se(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: se(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || c;
            s.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: se(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), pf = f.forwardRef(
  (e, t) => {
    const n = ut(Dt, e.__scopePopover), o = f.useRef(!1), r = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      ga,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (o.current || n.triggerRef.current?.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), ga = f.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: o,
      onOpenAutoFocus: r,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: d,
      onInteractOutside: p,
      ...l
    } = e, y = ut(Dt, n), g = sn(n);
    return Zs(), /* @__PURE__ */ u.jsx(
      nr,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ u.jsx(
          Mn,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: p,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: d,
            onDismiss: () => y.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              Xo,
              {
                "data-state": ya(y.open),
                role: "dialog",
                id: y.contentId,
                ...g,
                ...l,
                ref: t,
                style: {
                  ...l.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), va = "PopoverClose", mf = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = ut(va, n);
    return /* @__PURE__ */ u.jsx(
      de.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: se(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
mf.displayName = va;
var hf = "PopoverArrow", gf = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = sn(n);
    return /* @__PURE__ */ u.jsx(Jo, { ...r, ...o, ref: t });
  }
);
gf.displayName = hf;
function ya(e) {
  return e ? "open" : "closed";
}
var vf = da, yf = pa, bf = ma, xf = ha;
function ba({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(vf, { "data-slot": "popover", ...e });
}
function xa({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(yf, { "data-slot": "popover-trigger", ...e });
}
function wa({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ u.jsx(bf, { children: /* @__PURE__ */ u.jsx(
    xf,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: Ue(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
const So = {
  showJustify: !0,
  showLeft: !0,
  showCenter: !0,
  showRight: !0,
  tooltips: {
    main: "تراز متن",
    left: "چپ",
    center: "وسط",
    right: "راست"
  }
}, wf = ({
  config: e = So
}) => {
  const t = { ...So, ...e };
  return /* @__PURE__ */ u.jsxs(ba, { children: [
    /* @__PURE__ */ u.jsx(xa, { children: /* @__PURE__ */ u.jsxs(Ee, { children: [
      /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
        Te,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          children: /* @__PURE__ */ u.jsx(Ws, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltips?.main }) })
    ] }) }),
    /* @__PURE__ */ u.jsx(wa, { className: "w-auto p-2", children: /* @__PURE__ */ u.jsxs("div", { className: "flex gap-1", children: [
      t.showRight && /* @__PURE__ */ u.jsxs(Ee, { children: [
        /* @__PURE__ */ u.jsx(Se, { asChild: !0, children: /* @__PURE__ */ u.jsx(
          Te,
          {
            type: "button",
            variant: "outline",
            size: "icon",
            onClick: () => document.execCommand("justifyRight"),
            children: /* @__PURE__ */ u.jsx($d, { className: "h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltips?.right }) })
      ] }),
      t.showCenter && /* @__PURE__ */ u.jsxs(Ee, { children: [
        /* @__PURE__ */ u.jsx(Se, { asChild: !0, children: /* @__PURE__ */ u.jsx(
          Te,
          {
            type: "button",
            variant: "outline",
            size: "icon",
            onClick: () => document.execCommand("justifyCenter"),
            children: /* @__PURE__ */ u.jsx(Dd, { className: "h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltips?.center }) })
      ] }),
      t.showLeft && /* @__PURE__ */ u.jsxs(Ee, { children: [
        /* @__PURE__ */ u.jsx(Se, { asChild: !0, children: /* @__PURE__ */ u.jsx(
          Te,
          {
            type: "button",
            variant: "outline",
            size: "icon",
            onClick: () => document.execCommand("justifyLeft"),
            children: /* @__PURE__ */ u.jsx(zd, { className: "h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltips?.left }) })
      ] })
    ] }) })
  ] });
}, Cf = {
  id: "align",
  name: "Text Alignment",
  icon: Ws,
  component: wf,
  config: So
}, ko = {
  tooltip: "پررنگ",
  hotkey: "Ctrl+B"
}, Ef = ({
  config: e = ko
}) => {
  const t = { ...ko, ...e };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
      Te,
      {
        type: "button",
        variant: "outline",
        size: "icon",
        onClick: () => document.execCommand("bold"),
        children: /* @__PURE__ */ u.jsx(tr, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ u.jsxs(ke, { children: [
      /* @__PURE__ */ u.jsx("p", { children: t.tooltip }),
      t.hotkey && /* @__PURE__ */ u.jsx("p", { className: "text-xs opacity-60", children: t.hotkey })
    ] })
  ] });
}, Sf = {
  id: "bold",
  name: "Bold Text",
  icon: tr,
  component: Ef,
  config: ko
}, To = {
  tooltip: "کج",
  hotkey: "Ctrl+I"
}, kf = ({
  config: e = To
}) => {
  const t = { ...To, ...e };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
      Te,
      {
        type: "button",
        variant: "outline",
        size: "icon",
        onClick: () => document.execCommand("italic"),
        children: /* @__PURE__ */ u.jsx(Ks, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ u.jsxs(ke, { children: [
      /* @__PURE__ */ u.jsx("p", { children: t.tooltip }),
      t.hotkey && /* @__PURE__ */ u.jsx("p", { className: "text-xs opacity-60", children: t.hotkey })
    ] })
  ] });
}, Tf = {
  id: "italic",
  name: "Italic Text",
  icon: Ks,
  component: kf,
  config: To
}, Ro = {
  tooltip: "تغییر رنگ متن"
}, Rf = ({
  config: e = Ro
}) => {
  const t = { ...Ro, ...e }, n = (o) => {
    const r = window.getSelection();
    if (r && r.rangeCount > 0) {
      const s = r.getRangeAt(0);
      if (s.toString()) {
        const c = (s.commonAncestorContainer.nodeType === Node.TEXT_NODE ? s.commonAncestorContainer.parentElement : s.commonAncestorContainer)?.closest('span[style*="color"]');
        if (c && s.startContainer === s.endContainer)
          o === "auto" ? c.style.color = document.documentElement.classList.contains("dark") ? "#ffffff" : "#000000" : c.style.color = o;
        else {
          const d = document.createElement("span");
          o === "auto" ? d.style.color = document.documentElement.classList.contains("dark") ? "#ffffff" : "#000000" : d.style.color = o;
          try {
            s.surroundContents(d);
          } catch {
            d.appendChild(s.extractContents()), s.insertNode(d);
          }
        }
        r.removeAllRanges();
      }
    }
  };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsxs(ba, { children: [
      /* @__PURE__ */ u.jsx(xa, { children: /* @__PURE__ */ u.jsx(
        Te,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          children: /* @__PURE__ */ u.jsx(su, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ u.jsx(wa, { className: "w-auto p-2", children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "color",
            className: "w-full h-10 border border-gray-300 rounded cursor-pointer",
            defaultValue: "#000000",
            onChange: (o) => {
              console.log(o.target.value), n(o.target.value);
            }
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-6 gap-1", children: ["#000000", "#ffffff", "#ef4444", "#22c55e", "#0ea5e9", "#eab308"].map((o) => /* @__PURE__ */ u.jsx(
          "button",
          {
            type: "button",
            className: "w-6 h-6 rounded border border-gray-300 cursor-pointer hover:scale-110 transition-transform",
            style: { backgroundColor: o },
            onClick: () => n(o)
          },
          o
        )) }),
        /* @__PURE__ */ u.jsx(
          Te,
          {
            size: "sm",
            type: "button",
            variant: "outline",
            onClick: () => n("auto"),
            children: "رنگ پیشفرض"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltip }) })
  ] });
}, Pf = {
  id: "color",
  name: "Text Color",
  icon: iu,
  component: Rf,
  config: Ro
};
function Vr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Af(e) {
  const t = e + "CollectionProvider", [n, o] = en(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: v, children: w } = h, x = R.useRef(null), C = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(r, { scope: v, itemMap: C, collectionRef: x, children: w });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ jt(i), d = R.forwardRef(
    (h, v) => {
      const { scope: w, children: x } = h, C = s(i, w), S = ue(v, C.collectionRef);
      return /* @__PURE__ */ u.jsx(c, { ref: S, children: x });
    }
  );
  d.displayName = i;
  const p = e + "CollectionItemSlot", l = "data-radix-collection-item", y = /* @__PURE__ */ jt(p), g = R.forwardRef(
    (h, v) => {
      const { scope: w, children: x, ...C } = h, S = R.useRef(null), k = ue(v, S), j = s(p, w);
      return R.useEffect(() => (j.itemMap.set(S, { ref: S, ...C }), () => void j.itemMap.delete(S))), /* @__PURE__ */ u.jsx(y, { [l]: "", ref: k, children: x });
    }
  );
  g.displayName = p;
  function b(h) {
    const v = s(e + "CollectionConsumer", h);
    return R.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const C = Array.from(x.querySelectorAll(`[${l}]`));
      return Array.from(v.itemMap.values()).sort(
        (j, A) => C.indexOf(j.ref.current) - C.indexOf(A.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: g },
    b,
    o
  ];
}
var _f = f.createContext(void 0);
function Nf(e) {
  const t = f.useContext(_f);
  return e || t || "ltr";
}
function Of(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var jf = [" ", "Enter", "ArrowUp", "ArrowDown"], Mf = [" ", "Enter"], Ct = "Select", [Wn, Un, If] = Af(Ct), [Ht, Gp] = en(Ct, [
  If,
  zt
]), Yn = zt(), [Df, ft] = Ht(Ct), [Lf, Ff] = Ht(Ct), Ca = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: d,
    name: p,
    autoComplete: l,
    disabled: y,
    required: g,
    form: b
  } = e, h = Yn(t), [v, w] = f.useState(null), [x, C] = f.useState(null), [S, k] = f.useState(!1), j = Nf(d), [A, P] = Nn({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: Ct
  }), [B, q] = Nn({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Ct
  }), Y = f.useRef(null), G = v ? b || !!v.closest("form") : !0, [$, F] = f.useState(/* @__PURE__ */ new Set()), z = Array.from($).map((_) => _.props.value).join(";");
  return /* @__PURE__ */ u.jsx(qo, { ...h, children: /* @__PURE__ */ u.jsxs(
    Df,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: w,
      valueNode: x,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: k,
      contentId: tn(),
      value: B,
      onValueChange: q,
      open: A,
      onOpenChange: P,
      dir: j,
      triggerPointerDownPosRef: Y,
      disabled: y,
      children: [
        /* @__PURE__ */ u.jsx(Wn.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          Lf,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((_) => {
              F((D) => new Set(D).add(_));
            }, []),
            onNativeOptionRemove: f.useCallback((_) => {
              F((D) => {
                const E = new Set(D);
                return E.delete(_), E;
              });
            }, []),
            children: n
          }
        ) }),
        G ? /* @__PURE__ */ u.jsxs(
          Wa,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: p,
            autoComplete: l,
            value: B,
            onChange: (_) => q(_.target.value),
            disabled: y,
            form: b,
            children: [
              B === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from($)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
Ca.displayName = Ct;
var Ea = "SelectTrigger", Sa = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = Yn(n), a = ft(Ea, n), i = a.disabled || o, c = ue(t, a.onTriggerChange), d = Un(n), p = f.useRef("touch"), [l, y, g] = Ya((h) => {
      const v = d().filter((C) => !C.disabled), w = v.find((C) => C.value === a.value), x = Ga(v, h, w);
      x !== void 0 && a.onValueChange(x.value);
    }), b = (h) => {
      i || (a.onOpenChange(!0), g()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(Fn, { asChild: !0, ...s, children: /* @__PURE__ */ u.jsx(
      de.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Ua(a.value) ? "" : void 0,
        ...r,
        ref: c,
        onClick: se(r.onClick, (h) => {
          h.currentTarget.focus(), p.current !== "mouse" && b(h);
        }),
        onPointerDown: se(r.onPointerDown, (h) => {
          p.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (b(h), h.preventDefault());
        }),
        onKeyDown: se(r.onKeyDown, (h) => {
          const v = l.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && y(h.key), !(v && h.key === " ") && jf.includes(h.key) && (b(), h.preventDefault());
        })
      }
    ) });
  }
);
Sa.displayName = Ea;
var ka = "SelectValue", Ta = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...i } = e, c = ft(ka, n), { onValueNodeHasChildrenChange: d } = c, p = s !== void 0, l = ue(t, c.onValueNodeChange);
    return Re(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ u.jsx(
      de.span,
      {
        ...i,
        ref: l,
        style: { pointerEvents: "none" },
        children: Ua(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: a }) : s
      }
    );
  }
);
Ta.displayName = ka;
var zf = "SelectIcon", Ra = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ u.jsx(de.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
Ra.displayName = zf;
var Bf = "SelectPortal", Pa = (e) => /* @__PURE__ */ u.jsx(zn, { asChild: !0, ...e });
Pa.displayName = Bf;
var Et = "SelectContent", Aa = f.forwardRef(
  (e, t) => {
    const n = ft(Et, e.__scopeSelect), [o, r] = f.useState();
    if (Re(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? jn.createPortal(
        /* @__PURE__ */ u.jsx(_a, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(Wn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(Na, { ...e, ref: t });
  }
);
Aa.displayName = Et;
var He = 10, [_a, pt] = Ht(Et), $f = "SelectContentImpl", Hf = /* @__PURE__ */ jt("SelectContent.RemoveScroll"), Na = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: p,
      arrowPadding: l,
      collisionBoundary: y,
      collisionPadding: g,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...w
    } = e, x = ft(Et, n), [C, S] = f.useState(null), [k, j] = f.useState(null), A = ue(t, (N) => S(N)), [P, B] = f.useState(null), [q, Y] = f.useState(
      null
    ), G = Un(n), [$, F] = f.useState(!1), z = f.useRef(!1);
    f.useEffect(() => {
      if (C) return ta(C);
    }, [C]), Zs();
    const _ = f.useCallback(
      (N) => {
        const [Q, ...ae] = G().map((re) => re.ref.current), [U] = ae.slice(-1), oe = document.activeElement;
        for (const re of N)
          if (re === oe || (re?.scrollIntoView({ block: "nearest" }), re === Q && k && (k.scrollTop = 0), re === U && k && (k.scrollTop = k.scrollHeight), re?.focus(), document.activeElement !== oe)) return;
      },
      [G, k]
    ), D = f.useCallback(
      () => _([P, C]),
      [_, P, C]
    );
    f.useEffect(() => {
      $ && D();
    }, [$, D]);
    const { onOpenChange: E, triggerPointerDownPosRef: V } = x;
    f.useEffect(() => {
      if (C) {
        let N = { x: 0, y: 0 };
        const Q = (U) => {
          N = {
            x: Math.abs(Math.round(U.pageX) - (V.current?.x ?? 0)),
            y: Math.abs(Math.round(U.pageY) - (V.current?.y ?? 0))
          };
        }, ae = (U) => {
          N.x <= 10 && N.y <= 10 ? U.preventDefault() : C.contains(U.target) || E(!1), document.removeEventListener("pointermove", Q), V.current = null;
        };
        return V.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", ae, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", ae, { capture: !0 });
        };
      }
    }, [C, E, V]), f.useEffect(() => {
      const N = () => E(!1);
      return window.addEventListener("blur", N), window.addEventListener("resize", N), () => {
        window.removeEventListener("blur", N), window.removeEventListener("resize", N);
      };
    }, [E]);
    const [ce, K] = Ya((N) => {
      const Q = G().filter((oe) => !oe.disabled), ae = Q.find((oe) => oe.ref.current === document.activeElement), U = Ga(Q, N, ae);
      U && setTimeout(() => U.ref.current.focus());
    }), te = f.useCallback(
      (N, Q, ae) => {
        const U = !z.current && !ae;
        (x.value !== void 0 && x.value === Q || U) && (B(N), U && (z.current = !0));
      },
      [x.value]
    ), L = f.useCallback(() => C?.focus(), [C]), J = f.useCallback(
      (N, Q, ae) => {
        const U = !z.current && !ae;
        (x.value !== void 0 && x.value === Q || U) && Y(N);
      },
      [x.value]
    ), fe = o === "popper" ? Po : Oa, Z = fe === Po ? {
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: p,
      arrowPadding: l,
      collisionBoundary: y,
      collisionPadding: g,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ u.jsx(
      _a,
      {
        scope: n,
        content: C,
        viewport: k,
        onViewportChange: j,
        itemRefCallback: te,
        selectedItem: P,
        onItemLeave: L,
        itemTextRefCallback: J,
        focusSelectedItem: D,
        selectedItemText: q,
        position: o,
        isPositioned: $,
        searchRef: ce,
        children: /* @__PURE__ */ u.jsx(or, { as: Hf, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          nr,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (N) => {
              N.preventDefault();
            },
            onUnmountAutoFocus: se(r, (N) => {
              x.trigger?.focus({ preventScroll: !0 }), N.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              Mn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (N) => N.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  fe,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (N) => N.preventDefault(),
                    ...w,
                    ...Z,
                    onPlaced: () => F(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: se(w.onKeyDown, (N) => {
                      const Q = N.ctrlKey || N.altKey || N.metaKey;
                      if (N.key === "Tab" && N.preventDefault(), !Q && N.key.length === 1 && K(N.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(N.key)) {
                        let U = G().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes(N.key) && (U = U.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(N.key)) {
                          const oe = N.target, re = U.indexOf(oe);
                          U = U.slice(re + 1);
                        }
                        setTimeout(() => _(U)), N.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Na.displayName = $f;
var Vf = "SelectItemAlignedPosition", Oa = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = ft(Et, n), a = pt(Et, n), [i, c] = f.useState(null), [d, p] = f.useState(null), l = ue(t, (A) => p(A)), y = Un(n), g = f.useRef(!1), b = f.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: w, focusSelectedItem: x } = a, C = f.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && v && w) {
      const A = s.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), B = s.valueNode.getBoundingClientRect(), q = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const oe = q.left - P.left, re = B.left - oe, we = A.left - re, Me = A.width + we, Ye = Math.max(Me, P.width), Fe = window.innerWidth - He, ze = Vr(re, [
          He,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(He, Fe - Ye)
        ]);
        i.style.minWidth = Me + "px", i.style.left = ze + "px";
      } else {
        const oe = P.right - q.right, re = window.innerWidth - B.right - oe, we = window.innerWidth - A.right - re, Me = A.width + we, Ye = Math.max(Me, P.width), Fe = window.innerWidth - He, ze = Vr(re, [
          He,
          Math.max(He, Fe - Ye)
        ]);
        i.style.minWidth = Me + "px", i.style.right = ze + "px";
      }
      const Y = y(), G = window.innerHeight - He * 2, $ = h.scrollHeight, F = window.getComputedStyle(d), z = parseInt(F.borderTopWidth, 10), _ = parseInt(F.paddingTop, 10), D = parseInt(F.borderBottomWidth, 10), E = parseInt(F.paddingBottom, 10), V = z + _ + $ + E + D, ce = Math.min(v.offsetHeight * 5, V), K = window.getComputedStyle(h), te = parseInt(K.paddingTop, 10), L = parseInt(K.paddingBottom, 10), J = A.top + A.height / 2 - He, fe = G - J, Z = v.offsetHeight / 2, N = v.offsetTop + Z, Q = z + _ + N, ae = V - Q;
      if (Q <= J) {
        const oe = Y.length > 0 && v === Y[Y.length - 1].ref.current;
        i.style.bottom = "0px";
        const re = d.clientHeight - h.offsetTop - h.offsetHeight, we = Math.max(
          fe,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? L : 0) + re + D
        ), Me = Q + we;
        i.style.height = Me + "px";
      } else {
        const oe = Y.length > 0 && v === Y[0].ref.current;
        i.style.top = "0px";
        const we = Math.max(
          J,
          z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? te : 0) + Z
        ) + ae;
        i.style.height = we + "px", h.scrollTop = Q - J + h.offsetTop;
      }
      i.style.margin = `${He}px 0`, i.style.minHeight = ce + "px", i.style.maxHeight = G + "px", o?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    y,
    s.trigger,
    s.valueNode,
    i,
    d,
    h,
    v,
    w,
    s.dir,
    o
  ]);
  Re(() => C(), [C]);
  const [S, k] = f.useState();
  Re(() => {
    d && k(window.getComputedStyle(d).zIndex);
  }, [d]);
  const j = f.useCallback(
    (A) => {
      A && b.current === !0 && (C(), x?.(), b.current = !1);
    },
    [C, x]
  );
  return /* @__PURE__ */ u.jsx(
    Uf,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: j,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ u.jsx(
            de.div,
            {
              ...r,
              ref: l,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
Oa.displayName = Vf;
var Wf = "SelectPopperPosition", Po = f.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = He,
    ...s
  } = e, a = Yn(n);
  return /* @__PURE__ */ u.jsx(
    Xo,
    {
      ...a,
      ...s,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Po.displayName = Wf;
var [Uf, sr] = Ht(Et, {}), Ao = "SelectViewport", ja = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = pt(Ao, n), a = sr(Ao, n), i = ue(t, s.onViewportChange), c = f.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ u.jsx(Wn.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        de.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: se(r.onScroll, (d) => {
            const p = d.currentTarget, { contentWrapper: l, shouldExpandOnScrollRef: y } = a;
            if (y?.current && l) {
              const g = Math.abs(c.current - p.scrollTop);
              if (g > 0) {
                const b = window.innerHeight - He * 2, h = parseFloat(l.style.minHeight), v = parseFloat(l.style.height), w = Math.max(h, v);
                if (w < b) {
                  const x = w + g, C = Math.min(b, x), S = x - C;
                  l.style.height = C + "px", l.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, l.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ja.displayName = Ao;
var Ma = "SelectGroup", [Yf, Gf] = Ht(Ma), Kf = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = tn();
    return /* @__PURE__ */ u.jsx(Yf, { scope: n, id: r, children: /* @__PURE__ */ u.jsx(de.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
Kf.displayName = Ma;
var Ia = "SelectLabel", qf = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Gf(Ia, n);
    return /* @__PURE__ */ u.jsx(de.div, { id: r.id, ...o, ref: t });
  }
);
qf.displayName = Ia;
var On = "SelectItem", [Xf, Da] = Ht(On), La = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...a
    } = e, i = ft(On, n), c = pt(On, n), d = i.value === o, [p, l] = f.useState(s ?? ""), [y, g] = f.useState(!1), b = ue(
      t,
      (x) => c.itemRefCallback?.(x, o, r)
    ), h = tn(), v = f.useRef("touch"), w = () => {
      r || (i.onValueChange(o), i.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      Xf,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: h,
        isSelected: d,
        onItemTextChange: f.useCallback((x) => {
          l((C) => C || (x?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          Wn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: p,
            children: /* @__PURE__ */ u.jsx(
              de.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": d && y,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...a,
                ref: b,
                onFocus: se(a.onFocus, () => g(!0)),
                onBlur: se(a.onBlur, () => g(!1)),
                onClick: se(a.onClick, () => {
                  v.current !== "mouse" && w();
                }),
                onPointerUp: se(a.onPointerUp, () => {
                  v.current === "mouse" && w();
                }),
                onPointerDown: se(a.onPointerDown, (x) => {
                  v.current = x.pointerType;
                }),
                onPointerMove: se(a.onPointerMove, (x) => {
                  v.current = x.pointerType, r ? c.onItemLeave?.() : v.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: se(a.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: se(a.onKeyDown, (x) => {
                  c.searchRef?.current !== "" && x.key === " " || (Mf.includes(x.key) && w(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
La.displayName = On;
var Xt = "SelectItemText", Fa = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, a = ft(Xt, n), i = pt(Xt, n), c = Da(Xt, n), d = Ff(Xt, n), [p, l] = f.useState(null), y = ue(
      t,
      (w) => l(w),
      c.onItemTextChange,
      (w) => i.itemTextRefCallback?.(w, c.value, c.disabled)
    ), g = p?.textContent, b = f.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = d;
    return Re(() => (h(b), () => v(b)), [h, v, b]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(de.span, { id: c.textId, ...s, ref: y }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? jn.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Fa.displayName = Xt;
var za = "SelectItemIndicator", Ba = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return Da(za, n).isSelected ? /* @__PURE__ */ u.jsx(de.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Ba.displayName = za;
var _o = "SelectScrollUpButton", $a = f.forwardRef((e, t) => {
  const n = pt(_o, e.__scopeSelect), o = sr(_o, e.__scopeSelect), [r, s] = f.useState(!1), a = ue(t, o.onScrollButtonChange);
  return Re(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ u.jsx(
    Va,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
$a.displayName = _o;
var No = "SelectScrollDownButton", Ha = f.forwardRef((e, t) => {
  const n = pt(No, e.__scopeSelect), o = sr(No, e.__scopeSelect), [r, s] = f.useState(!1), a = ue(t, o.onScrollButtonChange);
  return Re(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = c.scrollHeight - c.clientHeight, p = Math.ceil(c.scrollTop) < d;
        s(p);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ u.jsx(
    Va,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Ha.displayName = No;
var Va = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = pt("SelectScrollButton", n), a = f.useRef(null), i = Un(n), c = f.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return f.useEffect(() => () => c(), [c]), Re(() => {
    i().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ u.jsx(
    de.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: se(r.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerMove: se(r.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerLeave: se(r.onPointerLeave, () => {
        c();
      })
    }
  );
}), Jf = "SelectSeparator", Zf = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(de.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Zf.displayName = Jf;
var Oo = "SelectArrow", Qf = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Yn(n), s = ft(Oo, n), a = pt(Oo, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ u.jsx(Jo, { ...r, ...o, ref: t }) : null;
  }
);
Qf.displayName = Oo;
var ep = "SelectBubbleInput", Wa = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = f.useRef(null), s = ue(o, r), a = Of(t);
    return f.useEffect(() => {
      const i = r.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && p) {
        const l = new Event("change", { bubbles: !0 });
        p.call(i, t), i.dispatchEvent(l);
      }
    }, [a, t]), /* @__PURE__ */ u.jsx(
      de.select,
      {
        ...n,
        style: { ...bs, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Wa.displayName = ep;
function Ua(e) {
  return e === "" || e === void 0;
}
function Ya(e) {
  const t = xt(e), n = f.useRef(""), o = f.useRef(0), r = f.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), function c(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => c(""), 1e3));
      }(i);
    },
    [t]
  ), s = f.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function Ga(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = tp(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function tp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var np = Ca, op = Sa, rp = Ta, sp = Ra, ap = Pa, ip = Aa, lp = ja, cp = La, dp = Fa, up = Ba, fp = $a, pp = Ha;
function mp({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(np, { "data-slot": "select", ...e });
}
function hp({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(rp, { "data-slot": "select-value", ...e });
}
function gp({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ u.jsxs(
    op,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Ue(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ u.jsx(sp, { asChild: !0, children: /* @__PURE__ */ u.jsx(Us, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function vp({
  className: e,
  children: t,
  position: n = "popper",
  ...o
}) {
  return /* @__PURE__ */ u.jsx(ap, { children: /* @__PURE__ */ u.jsxs(
    ip,
    {
      "data-slot": "select-content",
      className: Ue(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(bp, {}),
        /* @__PURE__ */ u.jsx(
          lp,
          {
            className: Ue(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ u.jsx(xp, {})
      ]
    }
  ) });
}
function yp({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsxs(
    cp,
    {
      "data-slot": "select-item",
      className: Ue(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(up, { children: /* @__PURE__ */ u.jsx(Wd, { className: "size-4" }) }) }),
        /* @__PURE__ */ u.jsx(dp, { children: t })
      ]
    }
  );
}
function bp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    fp,
    {
      "data-slot": "select-scroll-up-button",
      className: Ue(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ u.jsx(Gd, { className: "size-4" })
    }
  );
}
function xp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    pp,
    {
      "data-slot": "select-scroll-down-button",
      className: Ue(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ u.jsx(Us, { className: "size-4" })
    }
  );
}
const jo = {
  tooltip: "اندازه فونت",
  placeholder: "اندازه",
  sizes: [
    { label: "کوچک", value: "12px" },
    { label: "متوسط", value: "14px" },
    { label: "عادی", value: "16px" },
    { label: "بزرگ", value: "18px" },
    { label: "خیلی بزرگ", value: "24px" }
  ]
}, wp = ({
  config: e = jo
}) => {
  const t = { ...jo, ...e }, n = (o) => {
    const r = window.getSelection();
    if (r && r.rangeCount > 0) {
      const s = r.getRangeAt(0), a = s.toString();
      if (a) {
        const i = document.createElement("span");
        i.style.fontSize = o, i.textContent = a, s.deleteContents(), s.insertNode(i), r.removeAllRanges();
      }
    }
  };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsxs(mp, { onValueChange: n, children: [
      /* @__PURE__ */ u.jsx(gp, { className: "w-24", children: /* @__PURE__ */ u.jsx(hp, { placeholder: t.placeholder }) }),
      /* @__PURE__ */ u.jsx(vp, { children: t.sizes?.map((o) => /* @__PURE__ */ u.jsx(yp, { value: o.value, children: /* @__PURE__ */ u.jsx("span", { style: { fontSize: o.value }, children: o.label }) }, o.value)) })
    ] }) }),
    /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltip }) })
  ] });
}, Cp = {
  id: "fontsize",
  name: "Font Size",
  icon: cu,
  component: wp,
  config: jo
}, Mo = {
  bulletTooltip: "لیست نقطه‌ای",
  numberedTooltip: "لیست شماره‌دار",
  showBulletList: !0,
  showNumberedList: !0
}, Ep = ({
  config: e = Mo
}) => {
  const t = { ...Mo, ...e };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    t.showBulletList && /* @__PURE__ */ u.jsxs(Ee, { children: [
      /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
        Te,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: () => document.execCommand("insertUnorderedList"),
          children: /* @__PURE__ */ u.jsx(Xs, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.bulletTooltip }) })
    ] }),
    t.showNumberedList && /* @__PURE__ */ u.jsxs(Ee, { children: [
      /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
        Te,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: () => document.execCommand("insertOrderedList"),
          children: /* @__PURE__ */ u.jsx(tu, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.numberedTooltip }) })
    ] })
  ] });
}, Kp = {
  id: "list",
  name: "Lists",
  icon: Xs,
  component: Ep,
  config: Mo
}, Io = {
  tooltip: "تغییر حالت بلوک",
  showCopyButton: !0,
  copyButtonText: "کپی",
  copySuccessMessage: "متن با موفقیت کپی شد"
}, Sp = ({
  config: e = Io
}) => {
  const t = { ...Io, ...e }, n = () => {
    const o = window.getSelection();
    if (o && o.rangeCount > 0) {
      const r = o.getRangeAt(0), a = (r.commonAncestorContainer.nodeType === Node.TEXT_NODE ? r.commonAncestorContainer.parentElement : r.commonAncestorContainer)?.closest("blockquote");
      if (a) {
        const i = a.innerHTML, c = document.createElement("div");
        for (c.innerHTML = i, a.parentNode?.insertBefore(c, a), a.remove(); c.firstChild; )
          c.parentNode?.insertBefore(c.firstChild, c);
        const d = c.querySelector("button");
        d && d.remove(), c.remove();
      } else {
        const i = document.createElement("blockquote"), c = document.createElement("button");
        c.className = "custom-editor-copy", c.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>', c.addEventListener("click", () => {
          console.log(123);
          const d = i.textContent || i.innerText || "";
          navigator.clipboard.writeText(d).then(() => {
            dr.success("کپی شد");
          }).catch(() => {
            const p = document.createElement("textarea");
            p.value = d, document.body.appendChild(p), p.select(), document.execCommand("copy"), document.body.removeChild(p), dr.success("کپی شد");
          });
        }), i.className = "border p-4 rounded-md bg-muted/50 my-2 relative";
        try {
          r.surroundContents(i);
        } catch {
          i.appendChild(r.extractContents()), r.insertNode(i);
        }
        i.appendChild(c);
      }
    }
  };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
      Te,
      {
        type: "button",
        variant: "outline",
        size: "icon",
        onClick: n,
        children: /* @__PURE__ */ u.jsx(Ys, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltip }) })
  ] });
}, kp = {
  id: "quote",
  name: "Blockquote",
  icon: Ys,
  component: Sp,
  config: Io
}, Do = {
  addTooltip: "لینک",
  removeTooltip: "حذف لینک",
  urlPrompt: "آدرس لینک را وارد کنید:"
}, Tp = ({
  config: e = Do
}) => {
  const t = { ...Do, ...e };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(Ee, { children: [
      /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
        Te,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: () => {
            const n = prompt(t.urlPrompt);
            n && document.execCommand("createLink", !1, n);
          },
          children: /* @__PURE__ */ u.jsx(qs, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.addTooltip }) })
    ] }),
    /* @__PURE__ */ u.jsxs(Ee, { children: [
      /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
        Te,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: () => document.execCommand("unlink"),
          children: /* @__PURE__ */ u.jsx(Zd, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.removeTooltip }) })
    ] })
  ] });
}, Rp = {
  id: "link",
  name: "Link Management",
  icon: qs,
  component: Tp,
  config: Do
}, Lo = {
  tooltip: "خط جداکننده"
}, Pp = ({
  config: e = Lo
}) => {
  const t = { ...Lo, ...e }, n = () => {
    const o = window.getSelection();
    if (o && o.rangeCount > 0) {
      const r = o.getRangeAt(0), s = document.createElement("hr");
      s.className = "my-4 border-neutral-200 dark:border-neutral-700", r.deleteContents(), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), o.removeAllRanges(), o.addRange(r);
    }
  };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
      Te,
      {
        type: "button",
        variant: "outline",
        size: "icon",
        onClick: n,
        children: /* @__PURE__ */ u.jsx(Js, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ u.jsx(ke, { children: /* @__PURE__ */ u.jsx("p", { children: t.tooltip }) })
  ] });
}, Ap = {
  id: "line",
  name: "Horizontal Line",
  icon: Js,
  component: Pp,
  config: Lo
}, Fo = {
  tooltip: "پاک کردن",
  hotkey: "Ctrl+K"
}, _p = ({
  config: e = Fo
}) => {
  const t = { ...Fo, ...e }, n = () => {
    const o = document.querySelector(".custom-editor");
    if (o) {
      const r = window.getSelection();
      r && r.rangeCount > 0 && !r.isCollapsed ? r.deleteFromDocument() : o.innerHTML = "", o.dispatchEvent(new Event("input", { bubbles: !0 })), o.focus();
    }
  };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
      Te,
      {
        type: "button",
        variant: "outline",
        size: "icon",
        onClick: n,
        children: /* @__PURE__ */ u.jsx(uu, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ u.jsxs(ke, { children: [
      /* @__PURE__ */ u.jsx("p", { children: t.tooltip }),
      t.hotkey && /* @__PURE__ */ u.jsx("p", { className: "text-xs opacity-60", children: t.hotkey })
    ] })
  ] });
}, Np = {
  id: "clear",
  name: "Clear Text",
  icon: tr,
  component: _p,
  config: Fo
}, Wr = (e) => e.map((t) => t.children.map((n) => n.text).join("<br/>")).join("<br/>"), Op = (e) => {
  if (!e) return "";
  let t = e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  return t = t.replace(/<(?!\/?br\s*\/?>|\/?\ba\b[^>]*>)[^>]+>/g, "").replace(/\n/g, "<br/>").replace(/^\s+|\s+$/g, ""), t;
}, zo = {
  tooltip: "تصحیح متن",
  hotkey: "Ctrl+F"
}, jp = ({
  config: e = zo
}) => {
  const t = { ...zo, ...e }, n = () => {
    const o = document.querySelector(".custom-editor");
    if (o) {
      const r = o.innerHTML || "";
      try {
        const s = JSON.parse(r), a = Wr(s);
        o.innerHTML = a;
      } catch {
        try {
          o.innerHTML = Wr(r);
        } catch {
          o.innerHTML = Op(r);
        }
      }
      o.dispatchEvent(new Event("input", { bubbles: !0 })), o.focus();
    }
  };
  return /* @__PURE__ */ u.jsxs(Ee, { children: [
    /* @__PURE__ */ u.jsx(Se, { children: /* @__PURE__ */ u.jsx(
      Te,
      {
        type: "button",
        variant: "outline",
        size: "icon",
        onClick: n,
        children: /* @__PURE__ */ u.jsx(Gs, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ u.jsxs(ke, { children: [
      /* @__PURE__ */ u.jsx("p", { children: t.tooltip }),
      t.hotkey && /* @__PURE__ */ u.jsx("p", { className: "text-xs opacity-60", children: t.hotkey })
    ] })
  ] });
}, Mp = {
  id: "fix",
  name: "Fix Text",
  icon: Gs,
  component: jp,
  config: zo
};
var Ip = "Separator", Ur = "horizontal", Dp = ["horizontal", "vertical"], Ka = f.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Ur, ...r } = e, s = Lp(o) ? o : Ur, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ u.jsx(
    de.div,
    {
      "data-orientation": s,
      ...i,
      ...r,
      ref: t
    }
  );
});
Ka.displayName = Ip;
function Lp(e) {
  return Dp.includes(e);
}
var Fp = Ka;
function qa({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...o
}) {
  return /* @__PURE__ */ u.jsx(
    Fp,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: Ue(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...o
    }
  );
}
const zp = () => /* @__PURE__ */ u.jsx(qa, { orientation: "vertical", className: "!h-6 mx-1 my-auto" }), qt = {
  id: "separator",
  name: "Separator",
  icon: () => /* @__PURE__ */ u.jsx(qa, { orientation: "vertical" }),
  component: zp
}, Xa = [
  Cf,
  qt,
  Sf,
  Tf,
  Pf,
  qt,
  Cp,
  qt,
  Rp,
  // ListModule,
  qt,
  kp,
  Ap,
  qt,
  Np,
  Mp
], Bp = ({
  modules: e = Xa,
  config: t
}) => {
  const n = e.filter(
    (o) => !t?.excludeModules?.includes(o.id)
  );
  return /* @__PURE__ */ u.jsx("div", { className: "flex gap-2 p-2 border-b bg-muted/50", children: n.map((o) => {
    const r = o.component, s = t?.moduleConfigs?.[o.id] || o.config;
    return /* @__PURE__ */ u.jsx(
      r,
      {
        config: s
      },
      o.id
    );
  }) });
}, $p = (e) => e.map((t) => t.children.map((n) => n.text).join("")).join("<br/>"), qp = ({
  value: e,
  onChange: t,
  className: n,
  config: o
}) => {
  const r = o?.modules || o?.customModules || Xa;
  return /* @__PURE__ */ u.jsxs("div", { dir: "rtl", className: Ue("border rounded-md h-full flex flex-col w-full", n), children: [
    /* @__PURE__ */ u.jsx(Bp, { modules: r, config: o }),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: (s) => {
          if (s && s.innerHTML !== e && typeof e == "string")
            try {
              s.innerHTML = $p(JSON.parse(e));
            } catch {
              s.innerHTML = e;
            }
        },
        contentEditable: !0,
        className: `custom-editor p-4 min-h-[200px] h-[300px] !overflow-y-auto outline-none focus:ring-1 \r
        focus:ring-ring rounded-b-md [&_a]:text-blue-500 [&_a]:underline [&_a]:cursor-pointer [&_*]\r
        :relative [&_*::before]:content-[attr(data-type)] [&_*::before]:absolute [&_*::before]:top-0 [&\r
        _*::before]:left-0 [&_*::before]:text-xs [&_*::before]:bg-gray-800 [&_*::before]:text-white [&\r
        _*::before]:px-1 [&_*::before]:rounded [&_*::before]:z-10 [&_*::before]:opacity-70 [&_h1]:my-2 [&\r
        _h1]:text-2xl [&_h1]:font-bold [&_h2]:my-2 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:my-2 [&_h3]\r
        :text-lg [&_h3]:font-bold focus-visible:ring-neutral-300 dark:focus-visible:ring-neutral-700 focus-visible:shadow-sm transition-all duration-300`,
        onClick: (s) => {
          const a = s.target;
          if (a.tagName === "A" && s.ctrlKey) {
            s.preventDefault();
            const i = a.getAttribute("href");
            i && window.open(i, "_blank", "noopener,noreferrer");
          } else
            s.preventDefault();
        },
        onKeyDown: (s) => {
          if (s.key === "Enter" && !s.shiftKey) {
            const a = window.getSelection();
            if (a && a.rangeCount > 0) {
              const i = a.getRangeAt(0), d = (i.commonAncestorContainer.nodeType === Node.TEXT_NODE ? i.commonAncestorContainer.parentElement : i.commonAncestorContainer)?.closest("blockquote");
              if (d) {
                s.preventDefault();
                const p = document.createElement("p");
                p.innerHTML = "<br>", d.parentNode?.insertBefore(p, d.nextSibling);
                const l = document.createRange();
                l.setStart(p, 0), l.collapse(!0), a.removeAllRanges(), a.addRange(l);
                return;
              }
            }
            document.execCommand("formatBlock", !1, "p");
          }
        },
        onPaste: (s) => {
          s.preventDefault();
          const d = (s.clipboardData || window.clipboardData).getData("text/plain").split(`
`).map((p) => `<p>${p || "<br>"}</p>`).join("");
          document.execCommand("insertHTML", !1, d);
        },
        onBlur: (s) => {
          t(s.currentTarget.innerHTML);
        },
        onInput: (s) => {
          t(s.currentTarget.innerHTML);
        },
        suppressContentEditableWarning: !0,
        style: { direction: "rtl" }
      }
    )
  ] });
}, Xp = (e) => {
  try {
    const o = new DOMParser().parseFromString(e, "text/html").body, r = (a) => {
      if (a.nodeType === Node.TEXT_NODE)
        return { type: "text", content: a.textContent };
      if (a.nodeType === Node.ELEMENT_NODE) {
        const i = a, c = [];
        for (let d = 0; d < a.childNodes.length; d++)
          c.push(r(a.childNodes[d]));
        return {
          type: i.tagName.toLowerCase(),
          attributes: Array.from(i.attributes).reduce((d, p) => (d[p.name] = p.value, d), {}),
          children: c
        };
      }
      return null;
    }, s = [];
    for (let a = 0; a < o.childNodes.length; a++) {
      const i = r(o.childNodes[a]);
      i && s.push(i);
    }
    return { type: "document", children: s };
  } catch (t) {
    return console.error("Error converting HTML to JSON:", t), { type: "document", children: [{ type: "text", content: e }] };
  }
};
export {
  wf as AlignComponent,
  Cf as AlignModule,
  Ef as BoldComponent,
  Sf as BoldModule,
  _p as ClearComponent,
  Np as ClearModule,
  Rf as ColorComponent,
  Pf as ColorModule,
  qp as Editor,
  jp as FixComponent,
  Mp as FixModule,
  wp as FontSizeComponent,
  Cp as FontSizeModule,
  kf as ItalicComponent,
  Tf as ItalicModule,
  Pp as LineComponent,
  Ap as LineModule,
  Tp as LinkComponent,
  Rp as LinkModule,
  Ep as ListComponent,
  Kp as ListModule,
  Up as Provider,
  Sp as QuoteComponent,
  kp as QuoteModule,
  Bp as Toolbar,
  Xa as defaultModules,
  $p as toHtml,
  Xp as toJson
};
