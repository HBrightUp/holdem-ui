(() => {
  var e,
    r = {
      1921: (e, r, o) => {
        "use strict";
        var t = o(7087),
          n = o(4599);
        (window.SignClient = t.ZP), (window.Web3Modal = n.E);
      },
      5883: () => {},
    },
    o = {};
  function t(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var i = (o[e] = { id: e, loaded: !1, exports: {} });
    return r[e](i, i.exports, t), (i.loaded = !0), i.exports;
  }
  (t.m = r),
    (e = []),
    (t.O = (r, o, n, i) => {
      if (!o) {
        var a = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [o, n, i] = e[f], l = !0, d = 0; d < o.length; d++)
            (!1 & i || a >= i) && Object.keys(t.O).every((e) => t.O[e](o[d]))
              ? o.splice(d--, 1)
              : ((l = !1), i < a && (a = i));
          if (l) {
            e.splice(f--, 1);
            var u = n();
            void 0 !== u && (r = u);
          }
        }
        return r;
      }
      i = i || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > i; f--) e[f] = e[f - 1];
      e[f] = [o, n, i];
    }),
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
    (t.d = (e, r) => {
      for (var o in r)
        t.o(r, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (t.e = () => Promise.resolve()),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = { 179: 0 };
      t.O.j = (r) => 0 === e[r];
      var r = (r, o) => {
          var n,
            i,
            [a, l, d] = o,
            u = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (n in l) t.o(l, n) && (t.m[n] = l[n]);
            if (d) var f = d(t);
          }
          for (r && r(o); u < a.length; u++)
            (i = a[u]), t.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return t.O(f);
        },
        o = (self.webpackChunkmy_webpack_project =
          self.webpackChunkmy_webpack_project || []);
      o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
    })();
  var n = t.O(void 0, [592], () => t(1921));
  n = t.O(n);
})();
