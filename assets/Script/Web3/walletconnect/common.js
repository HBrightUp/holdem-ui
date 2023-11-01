import 'regenerator-runtime/runtime';
/*! For license information please see common.js.LICENSE.txt */
(self.webpackChunkmy_webpack_project =
  self.webpackChunkmy_webpack_project || []).push([
  [592],
  {
    8099: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(7117);
      function n(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 8),
          (t[r + 1] = e >>> 0),
          t
        );
      }
      function o(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(2)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 0),
          (t[r + 1] = e >>> 8),
          t
        );
      }
      function s(e, t) {
        return (
          void 0 === t && (t = 0),
          (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
        );
      }
      function a(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      function l(e, t) {
        return (
          void 0 === t && (t = 0),
          (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
        );
      }
      function c(e, t) {
        return (
          void 0 === t && (t = 0),
          ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
        );
      }
      function h(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 24),
          (t[r + 1] = e >>> 16),
          (t[r + 2] = e >>> 8),
          (t[r + 3] = e >>> 0),
          t
        );
      }
      function u(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(4)),
          void 0 === r && (r = 0),
          (t[r + 0] = e >>> 0),
          (t[r + 1] = e >>> 8),
          (t[r + 2] = e >>> 16),
          (t[r + 3] = e >>> 24),
          t
        );
      }
      function d(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === r && (r = 0),
          h((e / 4294967296) >>> 0, t, r),
          h(e >>> 0, t, r + 4),
          t
        );
      }
      function p(e, t, r) {
        return (
          void 0 === t && (t = new Uint8Array(8)),
          void 0 === r && (r = 0),
          u(e >>> 0, t, r),
          u((e / 4294967296) >>> 0, t, r + 4),
          t
        );
      }
      (t.readInt16BE = function (e, t) {
        return (
          void 0 === t && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16
        );
      }),
        (t.readUint16BE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
        }),
        (t.readInt16LE = function (e, t) {
          return (
            void 0 === t && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16
          );
        }),
        (t.readUint16LE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
        }),
        (t.writeUint16BE = n),
        (t.writeInt16BE = n),
        (t.writeUint16LE = o),
        (t.writeInt16LE = o),
        (t.readInt32BE = s),
        (t.readUint32BE = a),
        (t.readInt32LE = l),
        (t.readUint32LE = c),
        (t.writeUint32BE = h),
        (t.writeInt32BE = h),
        (t.writeUint32LE = u),
        (t.writeInt32LE = u),
        (t.readInt64BE = function (e, t) {
          void 0 === t && (t = 0);
          var r = s(e, t),
            i = s(e, t + 4);
          return 4294967296 * r + i - 4294967296 * (i >> 31);
        }),
        (t.readUint64BE = function (e, t) {
          return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4);
        }),
        (t.readInt64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = l(e, t);
          return 4294967296 * l(e, t + 4) + r - 4294967296 * (r >> 31);
        }),
        (t.readUint64LE = function (e, t) {
          void 0 === t && (t = 0);
          var r = c(e, t);
          return 4294967296 * c(e, t + 4) + r;
        }),
        (t.writeUint64BE = d),
        (t.writeInt64BE = d),
        (t.writeUint64LE = p),
        (t.writeInt64LE = p),
        (t.readUintBE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 != 0))
            throw new Error(
              "readUintBE supports only bitLengths divisible by 8",
            );
          if (e / 8 > t.length - r)
            throw new Error(
              "readUintBE: array is too short for the given bitLength",
            );
          for (var i = 0, n = 1, o = e / 8 + r - 1; o >= r; o--)
            (i += t[o] * n), (n *= 256);
          return i;
        }),
        (t.readUintLE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 != 0))
            throw new Error(
              "readUintLE supports only bitLengths divisible by 8",
            );
          if (e / 8 > t.length - r)
            throw new Error(
              "readUintLE: array is too short for the given bitLength",
            );
          for (var i = 0, n = 1, o = r; o < r + e / 8; o++)
            (i += t[o] * n), (n *= 256);
          return i;
        }),
        (t.writeUintBE = function (e, t, r, n) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === n && (n = 0),
            e % 8 != 0)
          )
            throw new Error(
              "writeUintBE supports only bitLengths divisible by 8",
            );
          if (!i.isSafeInteger(t))
            throw new Error("writeUintBE value must be an integer");
          for (var o = 1, s = e / 8 + n - 1; s >= n; s--)
            (r[s] = (t / o) & 255), (o *= 256);
          return r;
        }),
        (t.writeUintLE = function (e, t, r, n) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === n && (n = 0),
            e % 8 != 0)
          )
            throw new Error(
              "writeUintLE supports only bitLengths divisible by 8",
            );
          if (!i.isSafeInteger(t))
            throw new Error("writeUintLE value must be an integer");
          for (var o = 1, s = n; s < n + e / 8; s++)
            (r[s] = (t / o) & 255), (o *= 256);
          return r;
        }),
        (t.readFloat32BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
          );
        }),
        (t.readFloat32LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
          );
        }),
        (t.readFloat64BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
          );
        }),
        (t.readFloat64LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
          );
        }),
        (t.writeFloat32BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e),
            t
          );
        }),
        (t.writeFloat32LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(
              r,
              e,
              !0,
            ),
            t
          );
        }),
        (t.writeFloat64BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e),
            t
          );
        }),
        (t.writeFloat64LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(
              r,
              e,
              !0,
            ),
            t
          );
        });
    },
    5501: (e, t, r) => {
      "use strict";
      var i = r(5439),
        n = r(3027),
        o = r(7309),
        s = r(8099),
        a = r(4153);
      (t.Cv = 32), (t.WH = 12), (t.pg = 16);
      var l = new Uint8Array(16),
        c = (function () {
          function e(e) {
            if (
              ((this.nonceLength = t.WH),
              (this.tagLength = t.pg),
              e.length !== t.Cv)
            )
              throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(e);
          }
          return (
            (e.prototype.seal = function (e, t, r, n) {
              if (e.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              var s = new Uint8Array(16);
              s.set(e, s.length - e.length);
              var a = new Uint8Array(32);
              i.stream(this._key, s, a, 4);
              var l,
                c = t.length + this.tagLength;
              if (n) {
                if (n.length !== c)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length",
                  );
                l = n;
              } else l = new Uint8Array(c);
              return (
                i.streamXOR(this._key, s, t, l, 4),
                this._authenticate(
                  l.subarray(l.length - this.tagLength, l.length),
                  a,
                  l.subarray(0, l.length - this.tagLength),
                  r,
                ),
                o.wipe(s),
                l
              );
            }),
            (e.prototype.open = function (e, t, r, n) {
              if (e.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
              if (t.length < this.tagLength) return null;
              var s = new Uint8Array(16);
              s.set(e, s.length - e.length);
              var l = new Uint8Array(32);
              i.stream(this._key, s, l, 4);
              var c = new Uint8Array(this.tagLength);
              if (
                (this._authenticate(
                  c,
                  l,
                  t.subarray(0, t.length - this.tagLength),
                  r,
                ),
                !a.equal(c, t.subarray(t.length - this.tagLength, t.length)))
              )
                return null;
              var h,
                u = t.length - this.tagLength;
              if (n) {
                if (n.length !== u)
                  throw new Error(
                    "ChaCha20Poly1305: incorrect destination length",
                  );
                h = n;
              } else h = new Uint8Array(u);
              return (
                i.streamXOR(
                  this._key,
                  s,
                  t.subarray(0, t.length - this.tagLength),
                  h,
                  4,
                ),
                o.wipe(s),
                h
              );
            }),
            (e.prototype.clean = function () {
              return o.wipe(this._key), this;
            }),
            (e.prototype._authenticate = function (e, t, r, i) {
              var a = new n.Poly1305(t);
              i &&
                (a.update(i),
                i.length % 16 > 0 && a.update(l.subarray(i.length % 16))),
                a.update(r),
                r.length % 16 > 0 && a.update(l.subarray(r.length % 16));
              var c = new Uint8Array(8);
              i && s.writeUint64LE(i.length, c),
                a.update(c),
                s.writeUint64LE(r.length, c),
                a.update(c);
              for (var h = a.digest(), u = 0; u < h.length; u++) e[u] = h[u];
              a.clean(), o.wipe(h), o.wipe(c);
            }),
            e
          );
        })();
      t.OK = c;
    },
    5439: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(8099),
        n = r(7309),
        o = 20;
      function s(e, t, r) {
        for (
          var n = 1634760805,
            s = 857760878,
            a = 2036477234,
            l = 1797285236,
            c = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
            h = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
            u = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
            d = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
            p = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
            f = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
            g = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
            m = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
            w = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
            y = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
            v = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
            b = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
            _ = n,
            E = s,
            x = a,
            C = l,
            O = c,
            I = h,
            S = u,
            A = d,
            P = p,
            T = f,
            k = g,
            N = m,
            R = w,
            $ = y,
            L = v,
            M = b,
            j = 0;
          j < o;
          j += 2
        )
          (O =
            ((O ^= P =
              (P + (R = ((R ^= _ = (_ + O) | 0) >>> 16) | (R << 16))) | 0) >>>
              20) |
            (O << 12)),
            (I =
              ((I ^= T =
                (T + ($ = (($ ^= E = (E + I) | 0) >>> 16) | ($ << 16))) | 0) >>>
                20) |
              (I << 12)),
            (S =
              ((S ^= k =
                (k + (L = ((L ^= x = (x + S) | 0) >>> 16) | (L << 16))) | 0) >>>
                20) |
              (S << 12)),
            (A =
              ((A ^= N =
                (N + (M = ((M ^= C = (C + A) | 0) >>> 16) | (M << 16))) | 0) >>>
                20) |
              (A << 12)),
            (S =
              ((S ^= k =
                (k + (L = ((L ^= x = (x + S) | 0) >>> 24) | (L << 8))) | 0) >>>
                25) |
              (S << 7)),
            (A =
              ((A ^= N =
                (N + (M = ((M ^= C = (C + A) | 0) >>> 24) | (M << 8))) | 0) >>>
                25) |
              (A << 7)),
            (I =
              ((I ^= T =
                (T + ($ = (($ ^= E = (E + I) | 0) >>> 24) | ($ << 8))) | 0) >>>
                25) |
              (I << 7)),
            (O =
              ((O ^= P =
                (P + (R = ((R ^= _ = (_ + O) | 0) >>> 24) | (R << 8))) | 0) >>>
                25) |
              (O << 7)),
            (I =
              ((I ^= k =
                (k + (M = ((M ^= _ = (_ + I) | 0) >>> 16) | (M << 16))) | 0) >>>
                20) |
              (I << 12)),
            (S =
              ((S ^= N =
                (N + (R = ((R ^= E = (E + S) | 0) >>> 16) | (R << 16))) | 0) >>>
                20) |
              (S << 12)),
            (A =
              ((A ^= P =
                (P + ($ = (($ ^= x = (x + A) | 0) >>> 16) | ($ << 16))) | 0) >>>
                20) |
              (A << 12)),
            (O =
              ((O ^= T =
                (T + (L = ((L ^= C = (C + O) | 0) >>> 16) | (L << 16))) | 0) >>>
                20) |
              (O << 12)),
            (A =
              ((A ^= P =
                (P + ($ = (($ ^= x = (x + A) | 0) >>> 24) | ($ << 8))) | 0) >>>
                25) |
              (A << 7)),
            (O =
              ((O ^= T =
                (T + (L = ((L ^= C = (C + O) | 0) >>> 24) | (L << 8))) | 0) >>>
                25) |
              (O << 7)),
            (S =
              ((S ^= N =
                (N + (R = ((R ^= E = (E + S) | 0) >>> 24) | (R << 8))) | 0) >>>
                25) |
              (S << 7)),
            (I =
              ((I ^= k =
                (k + (M = ((M ^= _ = (_ + I) | 0) >>> 24) | (M << 8))) | 0) >>>
                25) |
              (I << 7));
        i.writeUint32LE((_ + n) | 0, e, 0),
          i.writeUint32LE((E + s) | 0, e, 4),
          i.writeUint32LE((x + a) | 0, e, 8),
          i.writeUint32LE((C + l) | 0, e, 12),
          i.writeUint32LE((O + c) | 0, e, 16),
          i.writeUint32LE((I + h) | 0, e, 20),
          i.writeUint32LE((S + u) | 0, e, 24),
          i.writeUint32LE((A + d) | 0, e, 28),
          i.writeUint32LE((P + p) | 0, e, 32),
          i.writeUint32LE((T + f) | 0, e, 36),
          i.writeUint32LE((k + g) | 0, e, 40),
          i.writeUint32LE((N + m) | 0, e, 44),
          i.writeUint32LE((R + w) | 0, e, 48),
          i.writeUint32LE(($ + y) | 0, e, 52),
          i.writeUint32LE((L + v) | 0, e, 56),
          i.writeUint32LE((M + b) | 0, e, 60);
      }
      function a(e, t, r, i, o) {
        if ((void 0 === o && (o = 0), 32 !== e.length))
          throw new Error("ChaCha: key size must be 32 bytes");
        if (i.length < r.length)
          throw new Error("ChaCha: destination is shorter than source");
        var a, c;
        if (0 === o) {
          if (8 !== t.length && 12 !== t.length)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
          (c = (a = new Uint8Array(16)).length - t.length), a.set(t, c);
        } else {
          if (16 !== t.length)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
          (a = t), (c = o);
        }
        for (var h = new Uint8Array(64), u = 0; u < r.length; u += 64) {
          s(h, a, e);
          for (var d = u; d < u + 64 && d < r.length; d++)
            i[d] = r[d] ^ h[d - u];
          l(a, 0, c);
        }
        return n.wipe(h), 0 === o && n.wipe(a), i;
      }
      function l(e, t, r) {
        for (var i = 1; r--; )
          (i = (i + (255 & e[t])) | 0), (e[t] = 255 & i), (i >>>= 8), t++;
        if (i > 0) throw new Error("ChaCha: counter overflow");
      }
      (t.streamXOR = a),
        (t.stream = function (e, t, r, i) {
          return void 0 === i && (i = 0), n.wipe(r), a(e, t, r, r, i);
        });
    },
    4153: (e, t) => {
      "use strict";
      function r(e, t) {
        if (e.length !== t.length) return 0;
        for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
        return 1 & ((r - 1) >>> 8);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.select = function (e, t, r) {
          return (~(e - 1) & t) | ((e - 1) & r);
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1;
        }),
        (t.compare = r),
        (t.equal = function (e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== r(e, t);
        });
    },
    1050: (e, t, r) => {
      "use strict";
      t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
      r(1416);
      const i = r(3350);
      r(7309);
      function n(e) {
        const t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.jQ = 64), (t.KS = 64), (t.aP = 32), (new Uint8Array(32)[0] = 9);
      const o = n(),
        s = n([1]),
        a =
          (n([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          n([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ])),
        l = n([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        c = n([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]);
      n([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
      function h(e, t) {
        for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function u(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function d(e, t, r) {
        const i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          const n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function p(e, t) {
        const r = n(),
          i = n();
        for (let e = 0; e < 16; e++) i[e] = t[e];
        u(i), u(i), u(i);
        for (let e = 0; e < 2; e++) {
          r[0] = i[0] - 65517;
          for (let e = 1; e < 15; e++)
            (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
          r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
          const e = (r[15] >> 16) & 1;
          (r[14] &= 65535), d(i, r, 1 - e);
        }
        for (let t = 0; t < 16; t++)
          (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
      }
      function f(e) {
        const t = new Uint8Array(32);
        return p(t, e), 1 & t[0];
      }
      function g(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function m(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function w(e, t, r) {
        let i,
          n,
          o = 0,
          s = 0,
          a = 0,
          l = 0,
          c = 0,
          h = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          g = 0,
          m = 0,
          w = 0,
          y = 0,
          v = 0,
          b = 0,
          _ = 0,
          E = 0,
          x = 0,
          C = 0,
          O = 0,
          I = 0,
          S = 0,
          A = 0,
          P = 0,
          T = 0,
          k = 0,
          N = 0,
          R = 0,
          $ = 0,
          L = 0,
          M = r[0],
          j = r[1],
          U = r[2],
          D = r[3],
          B = r[4],
          z = r[5],
          W = r[6],
          H = r[7],
          V = r[8],
          q = r[9],
          F = r[10],
          K = r[11],
          G = r[12],
          Z = r[13],
          Y = r[14],
          J = r[15];
        (i = t[0]),
          (o += i * M),
          (s += i * j),
          (a += i * U),
          (l += i * D),
          (c += i * B),
          (h += i * z),
          (u += i * W),
          (d += i * H),
          (p += i * V),
          (f += i * q),
          (g += i * F),
          (m += i * K),
          (w += i * G),
          (y += i * Z),
          (v += i * Y),
          (b += i * J),
          (i = t[1]),
          (s += i * M),
          (a += i * j),
          (l += i * U),
          (c += i * D),
          (h += i * B),
          (u += i * z),
          (d += i * W),
          (p += i * H),
          (f += i * V),
          (g += i * q),
          (m += i * F),
          (w += i * K),
          (y += i * G),
          (v += i * Z),
          (b += i * Y),
          (_ += i * J),
          (i = t[2]),
          (a += i * M),
          (l += i * j),
          (c += i * U),
          (h += i * D),
          (u += i * B),
          (d += i * z),
          (p += i * W),
          (f += i * H),
          (g += i * V),
          (m += i * q),
          (w += i * F),
          (y += i * K),
          (v += i * G),
          (b += i * Z),
          (_ += i * Y),
          (E += i * J),
          (i = t[3]),
          (l += i * M),
          (c += i * j),
          (h += i * U),
          (u += i * D),
          (d += i * B),
          (p += i * z),
          (f += i * W),
          (g += i * H),
          (m += i * V),
          (w += i * q),
          (y += i * F),
          (v += i * K),
          (b += i * G),
          (_ += i * Z),
          (E += i * Y),
          (x += i * J),
          (i = t[4]),
          (c += i * M),
          (h += i * j),
          (u += i * U),
          (d += i * D),
          (p += i * B),
          (f += i * z),
          (g += i * W),
          (m += i * H),
          (w += i * V),
          (y += i * q),
          (v += i * F),
          (b += i * K),
          (_ += i * G),
          (E += i * Z),
          (x += i * Y),
          (C += i * J),
          (i = t[5]),
          (h += i * M),
          (u += i * j),
          (d += i * U),
          (p += i * D),
          (f += i * B),
          (g += i * z),
          (m += i * W),
          (w += i * H),
          (y += i * V),
          (v += i * q),
          (b += i * F),
          (_ += i * K),
          (E += i * G),
          (x += i * Z),
          (C += i * Y),
          (O += i * J),
          (i = t[6]),
          (u += i * M),
          (d += i * j),
          (p += i * U),
          (f += i * D),
          (g += i * B),
          (m += i * z),
          (w += i * W),
          (y += i * H),
          (v += i * V),
          (b += i * q),
          (_ += i * F),
          (E += i * K),
          (x += i * G),
          (C += i * Z),
          (O += i * Y),
          (I += i * J),
          (i = t[7]),
          (d += i * M),
          (p += i * j),
          (f += i * U),
          (g += i * D),
          (m += i * B),
          (w += i * z),
          (y += i * W),
          (v += i * H),
          (b += i * V),
          (_ += i * q),
          (E += i * F),
          (x += i * K),
          (C += i * G),
          (O += i * Z),
          (I += i * Y),
          (S += i * J),
          (i = t[8]),
          (p += i * M),
          (f += i * j),
          (g += i * U),
          (m += i * D),
          (w += i * B),
          (y += i * z),
          (v += i * W),
          (b += i * H),
          (_ += i * V),
          (E += i * q),
          (x += i * F),
          (C += i * K),
          (O += i * G),
          (I += i * Z),
          (S += i * Y),
          (A += i * J),
          (i = t[9]),
          (f += i * M),
          (g += i * j),
          (m += i * U),
          (w += i * D),
          (y += i * B),
          (v += i * z),
          (b += i * W),
          (_ += i * H),
          (E += i * V),
          (x += i * q),
          (C += i * F),
          (O += i * K),
          (I += i * G),
          (S += i * Z),
          (A += i * Y),
          (P += i * J),
          (i = t[10]),
          (g += i * M),
          (m += i * j),
          (w += i * U),
          (y += i * D),
          (v += i * B),
          (b += i * z),
          (_ += i * W),
          (E += i * H),
          (x += i * V),
          (C += i * q),
          (O += i * F),
          (I += i * K),
          (S += i * G),
          (A += i * Z),
          (P += i * Y),
          (T += i * J),
          (i = t[11]),
          (m += i * M),
          (w += i * j),
          (y += i * U),
          (v += i * D),
          (b += i * B),
          (_ += i * z),
          (E += i * W),
          (x += i * H),
          (C += i * V),
          (O += i * q),
          (I += i * F),
          (S += i * K),
          (A += i * G),
          (P += i * Z),
          (T += i * Y),
          (k += i * J),
          (i = t[12]),
          (w += i * M),
          (y += i * j),
          (v += i * U),
          (b += i * D),
          (_ += i * B),
          (E += i * z),
          (x += i * W),
          (C += i * H),
          (O += i * V),
          (I += i * q),
          (S += i * F),
          (A += i * K),
          (P += i * G),
          (T += i * Z),
          (k += i * Y),
          (N += i * J),
          (i = t[13]),
          (y += i * M),
          (v += i * j),
          (b += i * U),
          (_ += i * D),
          (E += i * B),
          (x += i * z),
          (C += i * W),
          (O += i * H),
          (I += i * V),
          (S += i * q),
          (A += i * F),
          (P += i * K),
          (T += i * G),
          (k += i * Z),
          (N += i * Y),
          (R += i * J),
          (i = t[14]),
          (v += i * M),
          (b += i * j),
          (_ += i * U),
          (E += i * D),
          (x += i * B),
          (C += i * z),
          (O += i * W),
          (I += i * H),
          (S += i * V),
          (A += i * q),
          (P += i * F),
          (T += i * K),
          (k += i * G),
          (N += i * Z),
          (R += i * Y),
          ($ += i * J),
          (i = t[15]),
          (b += i * M),
          (_ += i * j),
          (E += i * U),
          (x += i * D),
          (C += i * B),
          (O += i * z),
          (I += i * W),
          (S += i * H),
          (A += i * V),
          (P += i * q),
          (T += i * F),
          (k += i * K),
          (N += i * G),
          (R += i * Z),
          ($ += i * Y),
          (L += i * J),
          (o += 38 * _),
          (s += 38 * E),
          (a += 38 * x),
          (l += 38 * C),
          (c += 38 * O),
          (h += 38 * I),
          (u += 38 * S),
          (d += 38 * A),
          (p += 38 * P),
          (f += 38 * T),
          (g += 38 * k),
          (m += 38 * N),
          (w += 38 * R),
          (y += 38 * $),
          (v += 38 * L),
          (n = 1),
          (i = o + n + 65535),
          (n = Math.floor(i / 65536)),
          (o = i - 65536 * n),
          (i = s + n + 65535),
          (n = Math.floor(i / 65536)),
          (s = i - 65536 * n),
          (i = a + n + 65535),
          (n = Math.floor(i / 65536)),
          (a = i - 65536 * n),
          (i = l + n + 65535),
          (n = Math.floor(i / 65536)),
          (l = i - 65536 * n),
          (i = c + n + 65535),
          (n = Math.floor(i / 65536)),
          (c = i - 65536 * n),
          (i = h + n + 65535),
          (n = Math.floor(i / 65536)),
          (h = i - 65536 * n),
          (i = u + n + 65535),
          (n = Math.floor(i / 65536)),
          (u = i - 65536 * n),
          (i = d + n + 65535),
          (n = Math.floor(i / 65536)),
          (d = i - 65536 * n),
          (i = p + n + 65535),
          (n = Math.floor(i / 65536)),
          (p = i - 65536 * n),
          (i = f + n + 65535),
          (n = Math.floor(i / 65536)),
          (f = i - 65536 * n),
          (i = g + n + 65535),
          (n = Math.floor(i / 65536)),
          (g = i - 65536 * n),
          (i = m + n + 65535),
          (n = Math.floor(i / 65536)),
          (m = i - 65536 * n),
          (i = w + n + 65535),
          (n = Math.floor(i / 65536)),
          (w = i - 65536 * n),
          (i = y + n + 65535),
          (n = Math.floor(i / 65536)),
          (y = i - 65536 * n),
          (i = v + n + 65535),
          (n = Math.floor(i / 65536)),
          (v = i - 65536 * n),
          (i = b + n + 65535),
          (n = Math.floor(i / 65536)),
          (b = i - 65536 * n),
          (o += n - 1 + 37 * (n - 1)),
          (n = 1),
          (i = o + n + 65535),
          (n = Math.floor(i / 65536)),
          (o = i - 65536 * n),
          (i = s + n + 65535),
          (n = Math.floor(i / 65536)),
          (s = i - 65536 * n),
          (i = a + n + 65535),
          (n = Math.floor(i / 65536)),
          (a = i - 65536 * n),
          (i = l + n + 65535),
          (n = Math.floor(i / 65536)),
          (l = i - 65536 * n),
          (i = c + n + 65535),
          (n = Math.floor(i / 65536)),
          (c = i - 65536 * n),
          (i = h + n + 65535),
          (n = Math.floor(i / 65536)),
          (h = i - 65536 * n),
          (i = u + n + 65535),
          (n = Math.floor(i / 65536)),
          (u = i - 65536 * n),
          (i = d + n + 65535),
          (n = Math.floor(i / 65536)),
          (d = i - 65536 * n),
          (i = p + n + 65535),
          (n = Math.floor(i / 65536)),
          (p = i - 65536 * n),
          (i = f + n + 65535),
          (n = Math.floor(i / 65536)),
          (f = i - 65536 * n),
          (i = g + n + 65535),
          (n = Math.floor(i / 65536)),
          (g = i - 65536 * n),
          (i = m + n + 65535),
          (n = Math.floor(i / 65536)),
          (m = i - 65536 * n),
          (i = w + n + 65535),
          (n = Math.floor(i / 65536)),
          (w = i - 65536 * n),
          (i = y + n + 65535),
          (n = Math.floor(i / 65536)),
          (y = i - 65536 * n),
          (i = v + n + 65535),
          (n = Math.floor(i / 65536)),
          (v = i - 65536 * n),
          (i = b + n + 65535),
          (n = Math.floor(i / 65536)),
          (b = i - 65536 * n),
          (o += n - 1 + 37 * (n - 1)),
          (e[0] = o),
          (e[1] = s),
          (e[2] = a),
          (e[3] = l),
          (e[4] = c),
          (e[5] = h),
          (e[6] = u),
          (e[7] = d),
          (e[8] = p),
          (e[9] = f),
          (e[10] = g),
          (e[11] = m),
          (e[12] = w),
          (e[13] = y),
          (e[14] = v),
          (e[15] = b);
      }
      function y(e, t) {
        w(e, t, t);
      }
      function v(e, t) {
        const r = n(),
          i = n(),
          o = n(),
          s = n(),
          l = n(),
          c = n(),
          h = n(),
          u = n(),
          d = n();
        m(r, e[1], e[0]),
          m(d, t[1], t[0]),
          w(r, r, d),
          g(i, e[0], e[1]),
          g(d, t[0], t[1]),
          w(i, i, d),
          w(o, e[3], t[3]),
          w(o, o, a),
          w(s, e[2], t[2]),
          g(s, s, s),
          m(l, i, r),
          m(c, s, o),
          g(h, s, o),
          g(u, i, r),
          w(e[0], l, c),
          w(e[1], u, h),
          w(e[2], h, c),
          w(e[3], l, u);
      }
      function b(e, t, r) {
        for (let i = 0; i < 4; i++) d(e[i], t[i], r);
      }
      function _(e, t) {
        const r = n(),
          i = n(),
          o = n();
        (function (e, t) {
          const r = n();
          let i;
          for (i = 0; i < 16; i++) r[i] = t[i];
          for (i = 253; i >= 0; i--) y(r, r), 2 !== i && 4 !== i && w(r, r, t);
          for (i = 0; i < 16; i++) e[i] = r[i];
        })(o, t[2]),
          w(r, t[0], o),
          w(i, t[1], o),
          p(e, i),
          (e[31] ^= f(r) << 7);
      }
      function E(e, t) {
        const r = [n(), n(), n(), n()];
        h(r[0], l),
          h(r[1], c),
          h(r[2], s),
          w(r[3], l, c),
          (function (e, t, r) {
            h(e[0], o), h(e[1], s), h(e[2], s), h(e[3], o);
            for (let i = 255; i >= 0; --i) {
              const n = (r[(i / 8) | 0] >> (7 & i)) & 1;
              b(e, t, n), v(t, e), v(e, e), b(e, t, n);
            }
          })(e, r, t);
      }
      t._w = function (e) {
        if (e.length !== t.aP)
          throw new Error(`ed25519: seed must be ${t.aP} bytes`);
        const r = (0, i.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        const o = new Uint8Array(32),
          s = [n(), n(), n(), n()];
        E(s, r), _(o, s);
        const a = new Uint8Array(64);
        return a.set(e), a.set(o, 32), { publicKey: o, secretKey: a };
      };
      const x = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function C(e, t) {
        let r, i, n, o;
        for (i = 63; i >= 32; --i) {
          for (r = 0, n = i - 32, o = i - 12; n < o; ++n)
            (t[n] += r - 16 * t[i] * x[n - (i - 32)]),
              (r = Math.floor((t[n] + 128) / 256)),
              (t[n] -= 256 * r);
          (t[n] += r), (t[i] = 0);
        }
        for (r = 0, n = 0; n < 32; n++)
          (t[n] += r - (t[31] >> 4) * x[n]), (r = t[n] >> 8), (t[n] &= 255);
        for (n = 0; n < 32; n++) t[n] -= r * x[n];
        for (i = 0; i < 32; i++) (t[i + 1] += t[i] >> 8), (e[i] = 255 & t[i]);
      }
      function O(e) {
        const t = new Float64Array(64);
        for (let r = 0; r < 64; r++) t[r] = e[r];
        for (let t = 0; t < 64; t++) e[t] = 0;
        C(e, t);
      }
      t.Xx = function (e, t) {
        const r = new Float64Array(64),
          o = [n(), n(), n(), n()],
          s = (0, i.hash)(e.subarray(0, 32));
        (s[0] &= 248), (s[31] &= 127), (s[31] |= 64);
        const a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        const l = new i.SHA512();
        l.update(a.subarray(32)), l.update(t);
        const c = l.digest();
        l.clean(),
          O(c),
          E(o, c),
          _(a, o),
          l.reset(),
          l.update(a.subarray(0, 32)),
          l.update(e.subarray(32)),
          l.update(t);
        const h = l.digest();
        O(h);
        for (let e = 0; e < 32; e++) r[e] = c[e];
        for (let e = 0; e < 32; e++)
          for (let t = 0; t < 32; t++) r[e + t] += h[e] * s[t];
        return C(a.subarray(32), r), a;
      };
    },
    9984: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSerializableHash = function (e) {
          return (
            void 0 !== e.saveState &&
            void 0 !== e.restoreState &&
            void 0 !== e.cleanSavedState
          );
        });
    },
    512: (e, t, r) => {
      "use strict";
      var i = r(5629),
        n = r(7309),
        o = (function () {
          function e(e, t, r, n) {
            void 0 === r && (r = new Uint8Array(0)),
              (this._counter = new Uint8Array(1)),
              (this._hash = e),
              (this._info = n);
            var o = i.hmac(this._hash, r, t);
            (this._hmac = new i.HMAC(e, o)),
              (this._buffer = new Uint8Array(this._hmac.digestLength)),
              (this._bufpos = this._buffer.length);
          }
          return (
            (e.prototype._fillBuffer = function () {
              this._counter[0]++;
              var e = this._counter[0];
              if (0 === e) throw new Error("hkdf: cannot expand more");
              this._hmac.reset(),
                e > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                (this._bufpos = 0);
            }),
            (e.prototype.expand = function (e) {
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                this._bufpos === this._buffer.length && this._fillBuffer(),
                  (t[r] = this._buffer[this._bufpos++]);
              return t;
            }),
            (e.prototype.clean = function () {
              this._hmac.clean(),
                n.wipe(this._buffer),
                n.wipe(this._counter),
                (this._bufpos = 0);
            }),
            e
          );
        })();
      t.t = o;
    },
    5629: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(9984),
        n = r(4153),
        o = r(7309),
        s = (function () {
          function e(e, t) {
            (this._finished = !1),
              (this._inner = new e()),
              (this._outer = new e()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var r = new Uint8Array(this.blockSize);
            t.length > this.blockSize
              ? this._inner.update(t).finish(r).clean()
              : r.set(t);
            for (var n = 0; n < r.length; n++) r[n] ^= 54;
            for (this._inner.update(r), n = 0; n < r.length; n++) r[n] ^= 106;
            this._outer.update(r),
              i.isSerializableHash(this._inner) &&
                i.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              o.wipe(r);
          }
          return (
            (e.prototype.reset = function () {
              if (
                !i.isSerializableHash(this._inner) ||
                !i.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()",
                );
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.clean = function () {
              i.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                i.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this;
            }),
            (e.prototype.finish = function (e) {
              return this._finished
                ? (this._outer.finish(e), this)
                : (this._inner.finish(e),
                  this._outer
                    .update(e.subarray(0, this.digestLength))
                    .finish(e),
                  (this._finished = !0),
                  this);
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (!i.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't saveState() because hash doesn't implement it",
                );
              return this._inner.saveState();
            }),
            (e.prototype.restoreState = function (e) {
              if (
                !i.isSerializableHash(this._inner) ||
                !i.isSerializableHash(this._outer)
              )
                throw new Error(
                  "hmac: can't restoreState() because hash doesn't implement it",
                );
              return (
                this._inner.restoreState(e),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!i.isSerializableHash(this._inner))
                throw new Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it",
                );
              this._inner.cleanSavedState(e);
            }),
            e
          );
        })();
      (t.HMAC = s),
        (t.hmac = function (e, t, r) {
          var i = new s(e, t);
          i.update(r);
          var n = i.digest();
          return i.clean(), n;
        }),
        (t.equal = n.equal);
    },
    7117: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mul =
          Math.imul ||
          function (e, t) {
            var r = 65535 & e,
              i = 65535 & t;
            return (
              (r * i +
                (((((e >>> 16) & 65535) * i + r * ((t >>> 16) & 65535)) <<
                  16) >>>
                  0)) |
              0
            );
          }),
        (t.add = function (e, t) {
          return (e + t) | 0;
        }),
        (t.sub = function (e, t) {
          return (e - t) | 0;
        }),
        (t.rotl = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.isInteger =
          Number.isInteger ||
          function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (t.MAX_SAFE_INTEGER = 9007199254740991),
        (t.isSafeInteger = function (e) {
          return (
            t.isInteger(e) &&
            e >= -t.MAX_SAFE_INTEGER &&
            e <= t.MAX_SAFE_INTEGER
          );
        });
    },
    3027: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(4153),
        n = r(7309);
      t.DIGEST_LENGTH = 16;
      var o = (function () {
        function e(e) {
          (this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var r = e[0] | (e[1] << 8);
          this._r[0] = 8191 & r;
          var i = e[2] | (e[3] << 8);
          this._r[1] = 8191 & ((r >>> 13) | (i << 3));
          var n = e[4] | (e[5] << 8);
          this._r[2] = 7939 & ((i >>> 10) | (n << 6));
          var o = e[6] | (e[7] << 8);
          this._r[3] = 8191 & ((n >>> 7) | (o << 9));
          var s = e[8] | (e[9] << 8);
          (this._r[4] = 255 & ((o >>> 4) | (s << 12))),
            (this._r[5] = (s >>> 1) & 8190);
          var a = e[10] | (e[11] << 8);
          this._r[6] = 8191 & ((s >>> 14) | (a << 2));
          var l = e[12] | (e[13] << 8);
          this._r[7] = 8065 & ((a >>> 11) | (l << 5));
          var c = e[14] | (e[15] << 8);
          (this._r[8] = 8191 & ((l >>> 8) | (c << 8))),
            (this._r[9] = (c >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8));
        }
        return (
          (e.prototype._blocks = function (e, t, r) {
            for (
              var i = this._fin ? 0 : 2048,
                n = this._h[0],
                o = this._h[1],
                s = this._h[2],
                a = this._h[3],
                l = this._h[4],
                c = this._h[5],
                h = this._h[6],
                u = this._h[7],
                d = this._h[8],
                p = this._h[9],
                f = this._r[0],
                g = this._r[1],
                m = this._r[2],
                w = this._r[3],
                y = this._r[4],
                v = this._r[5],
                b = this._r[6],
                _ = this._r[7],
                E = this._r[8],
                x = this._r[9];
              r >= 16;

            ) {
              var C = e[t + 0] | (e[t + 1] << 8);
              n += 8191 & C;
              var O = e[t + 2] | (e[t + 3] << 8);
              o += 8191 & ((C >>> 13) | (O << 3));
              var I = e[t + 4] | (e[t + 5] << 8);
              s += 8191 & ((O >>> 10) | (I << 6));
              var S = e[t + 6] | (e[t + 7] << 8);
              a += 8191 & ((I >>> 7) | (S << 9));
              var A = e[t + 8] | (e[t + 9] << 8);
              (l += 8191 & ((S >>> 4) | (A << 12))), (c += (A >>> 1) & 8191);
              var P = e[t + 10] | (e[t + 11] << 8);
              h += 8191 & ((A >>> 14) | (P << 2));
              var T = e[t + 12] | (e[t + 13] << 8);
              u += 8191 & ((P >>> 11) | (T << 5));
              var k = e[t + 14] | (e[t + 15] << 8),
                N = 0,
                R = N;
              (R += n * f),
                (R += o * (5 * x)),
                (R += s * (5 * E)),
                (R += a * (5 * _)),
                (N = (R += l * (5 * b)) >>> 13),
                (R &= 8191),
                (R += c * (5 * v)),
                (R += h * (5 * y)),
                (R += u * (5 * w)),
                (R += (d += 8191 & ((T >>> 8) | (k << 8))) * (5 * m));
              var $ = (N += (R += (p += (k >>> 5) | i) * (5 * g)) >>> 13);
              ($ += n * g),
                ($ += o * f),
                ($ += s * (5 * x)),
                ($ += a * (5 * E)),
                (N = ($ += l * (5 * _)) >>> 13),
                ($ &= 8191),
                ($ += c * (5 * b)),
                ($ += h * (5 * v)),
                ($ += u * (5 * y)),
                ($ += d * (5 * w)),
                (N += ($ += p * (5 * m)) >>> 13),
                ($ &= 8191);
              var L = N;
              (L += n * m),
                (L += o * g),
                (L += s * f),
                (L += a * (5 * x)),
                (N = (L += l * (5 * E)) >>> 13),
                (L &= 8191),
                (L += c * (5 * _)),
                (L += h * (5 * b)),
                (L += u * (5 * v)),
                (L += d * (5 * y));
              var M = (N += (L += p * (5 * w)) >>> 13);
              (M += n * w),
                (M += o * m),
                (M += s * g),
                (M += a * f),
                (N = (M += l * (5 * x)) >>> 13),
                (M &= 8191),
                (M += c * (5 * E)),
                (M += h * (5 * _)),
                (M += u * (5 * b)),
                (M += d * (5 * v));
              var j = (N += (M += p * (5 * y)) >>> 13);
              (j += n * y),
                (j += o * w),
                (j += s * m),
                (j += a * g),
                (N = (j += l * f) >>> 13),
                (j &= 8191),
                (j += c * (5 * x)),
                (j += h * (5 * E)),
                (j += u * (5 * _)),
                (j += d * (5 * b));
              var U = (N += (j += p * (5 * v)) >>> 13);
              (U += n * v),
                (U += o * y),
                (U += s * w),
                (U += a * m),
                (N = (U += l * g) >>> 13),
                (U &= 8191),
                (U += c * f),
                (U += h * (5 * x)),
                (U += u * (5 * E)),
                (U += d * (5 * _));
              var D = (N += (U += p * (5 * b)) >>> 13);
              (D += n * b),
                (D += o * v),
                (D += s * y),
                (D += a * w),
                (N = (D += l * m) >>> 13),
                (D &= 8191),
                (D += c * g),
                (D += h * f),
                (D += u * (5 * x)),
                (D += d * (5 * E));
              var B = (N += (D += p * (5 * _)) >>> 13);
              (B += n * _),
                (B += o * b),
                (B += s * v),
                (B += a * y),
                (N = (B += l * w) >>> 13),
                (B &= 8191),
                (B += c * m),
                (B += h * g),
                (B += u * f),
                (B += d * (5 * x));
              var z = (N += (B += p * (5 * E)) >>> 13);
              (z += n * E),
                (z += o * _),
                (z += s * b),
                (z += a * v),
                (N = (z += l * y) >>> 13),
                (z &= 8191),
                (z += c * w),
                (z += h * m),
                (z += u * g),
                (z += d * f);
              var W = (N += (z += p * (5 * x)) >>> 13);
              (W += n * x),
                (W += o * E),
                (W += s * _),
                (W += a * b),
                (N = (W += l * v) >>> 13),
                (W &= 8191),
                (W += c * y),
                (W += h * w),
                (W += u * m),
                (W += d * g),
                (n = R =
                  8191 &
                  (N =
                    ((N = (((N += (W += p * f) >>> 13) << 2) + N) | 0) +
                      (R &= 8191)) |
                    0)),
                (o = $ += N >>>= 13),
                (s = L &= 8191),
                (a = M &= 8191),
                (l = j &= 8191),
                (c = U &= 8191),
                (h = D &= 8191),
                (u = B &= 8191),
                (d = z &= 8191),
                (p = W &= 8191),
                (t += 16),
                (r -= 16);
            }
            (this._h[0] = n),
              (this._h[1] = o),
              (this._h[2] = s),
              (this._h[3] = a),
              (this._h[4] = l),
              (this._h[5] = c),
              (this._h[6] = h),
              (this._h[7] = u),
              (this._h[8] = d),
              (this._h[9] = p);
          }),
          (e.prototype.finish = function (e, t) {
            void 0 === t && (t = 0);
            var r,
              i,
              n,
              o,
              s = new Uint16Array(10);
            if (this._leftover) {
              for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++)
                this._buffer[o] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, o = 2; o < 10; o++)
              (this._h[o] += r), (r = this._h[o] >>> 13), (this._h[o] &= 8191);
            for (
              this._h[0] += 5 * r,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                s[0] = this._h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                o = 1;
              o < 10;
              o++
            )
              (s[o] = this._h[o] + r), (r = s[o] >>> 13), (s[o] &= 8191);
            for (s[9] -= 8192, i = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= i;
            for (i = ~i, o = 0; o < 10; o++)
              this._h[o] = (this._h[o] & i) | s[o];
            for (
              this._h[0] = 65535 & (this._h[0] | (this._h[1] << 13)),
                this._h[1] = 65535 & ((this._h[1] >>> 3) | (this._h[2] << 10)),
                this._h[2] = 65535 & ((this._h[2] >>> 6) | (this._h[3] << 7)),
                this._h[3] = 65535 & ((this._h[3] >>> 9) | (this._h[4] << 4)),
                this._h[4] =
                  65535 &
                  ((this._h[4] >>> 12) |
                    (this._h[5] << 1) |
                    (this._h[6] << 14)),
                this._h[5] = 65535 & ((this._h[6] >>> 2) | (this._h[7] << 11)),
                this._h[6] = 65535 & ((this._h[7] >>> 5) | (this._h[8] << 8)),
                this._h[7] = 65535 & ((this._h[8] >>> 8) | (this._h[9] << 5)),
                n = this._h[0] + this._pad[0],
                this._h[0] = 65535 & n,
                o = 1;
              o < 8;
              o++
            )
              (n = (((this._h[o] + this._pad[o]) | 0) + (n >>> 16)) | 0),
                (this._h[o] = 65535 & n);
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t,
              r = 0,
              i = e.length;
            if (this._leftover) {
              (t = 16 - this._leftover) > i && (t = i);
              for (var n = 0; n < t; n++)
                this._buffer[this._leftover + n] = e[r + n];
              if (
                ((i -= t), (r += t), (this._leftover += t), this._leftover < 16)
              )
                return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if (
              (i >= 16 &&
                ((t = i - (i % 16)), this._blocks(e, r, t), (r += t), (i -= t)),
              i)
            ) {
              for (n = 0; n < i; n++)
                this._buffer[this._leftover + n] = e[r + n];
              this._leftover += i;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw new Error("Poly1305 was finished");
            var e = new Uint8Array(16);
            return this.finish(e), e;
          }),
          (e.prototype.clean = function () {
            return (
              n.wipe(this._buffer),
              n.wipe(this._r),
              n.wipe(this._h),
              n.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          e
        );
      })();
      (t.Poly1305 = o),
        (t.oneTimeAuth = function (e, t) {
          var r = new o(e);
          r.update(t);
          var i = r.digest();
          return r.clean(), i;
        }),
        (t.equal = function (e, r) {
          return (
            e.length === t.DIGEST_LENGTH &&
            r.length === t.DIGEST_LENGTH &&
            i.equal(e, r)
          );
        });
    },
    1416: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomStringForEntropy =
          t.randomString =
          t.randomUint32 =
          t.randomBytes =
          t.defaultRandomSource =
            void 0);
      const i = r(6008),
        n = r(8099),
        o = r(7309);
      function s(e, r = t.defaultRandomSource) {
        return r.randomBytes(e);
      }
      (t.defaultRandomSource = new i.SystemRandomSource()),
        (t.randomBytes = s),
        (t.randomUint32 = function (e = t.defaultRandomSource) {
          const r = s(4, e),
            i = (0, n.readUint32LE)(r);
          return (0, o.wipe)(r), i;
        });
      const a =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function l(e, r = a, i = t.defaultRandomSource) {
        if (r.length < 2) throw new Error("randomString charset is too short");
        if (r.length > 256) throw new Error("randomString charset is too long");
        let n = "";
        const l = r.length,
          c = 256 - (256 % l);
        for (; e > 0; ) {
          const t = s(Math.ceil((256 * e) / c), i);
          for (let i = 0; i < t.length && e > 0; i++) {
            const o = t[i];
            o < c && ((n += r.charAt(o % l)), e--);
          }
          (0, o.wipe)(t);
        }
        return n;
      }
      (t.randomString = l),
        (t.randomStringForEntropy = function (
          e,
          r = a,
          i = t.defaultRandomSource,
        ) {
          return l(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i);
        });
    },
    5455: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BrowserRandomSource = void 0),
        (t.BrowserRandomSource = class {
          constructor() {
            (this.isAvailable = !1), (this.isInstantiated = !1);
            const e =
              "undefined" != typeof self ? self.crypto || self.msCrypto : null;
            e &&
              void 0 !== e.getRandomValues &&
              ((this._crypto = e),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
          randomBytes(e) {
            if (!this.isAvailable || !this._crypto)
              throw new Error(
                "Browser random byte generator is not available.",
              );
            const t = new Uint8Array(e);
            for (let e = 0; e < t.length; e += 65536)
              this._crypto.getRandomValues(
                t.subarray(e, e + Math.min(t.length - e, 65536)),
              );
            return t;
          }
        });
    },
    8871: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NodeRandomSource = void 0);
      const i = r(7309);
      t.NodeRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          {
            const e = r(5883);
            e &&
              e.randomBytes &&
              ((this._crypto = e),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
        }
        randomBytes(e) {
          if (!this.isAvailable || !this._crypto)
            throw new Error("Node.js random byte generator is not available.");
          let t = this._crypto.randomBytes(e);
          if (t.length !== e)
            throw new Error("NodeRandomSource: got fewer bytes than requested");
          const r = new Uint8Array(e);
          for (let e = 0; e < r.length; e++) r[e] = t[e];
          return (0, i.wipe)(t), r;
        }
      };
    },
    6008: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SystemRandomSource = void 0);
      const i = r(5455),
        n = r(8871);
      t.SystemRandomSource = class {
        constructor() {
          return (
            (this.isAvailable = !1),
            (this.name = ""),
            (this._source = new i.BrowserRandomSource()),
            this._source.isAvailable
              ? ((this.isAvailable = !0), void (this.name = "Browser"))
              : ((this._source = new n.NodeRandomSource()),
                this._source.isAvailable
                  ? ((this.isAvailable = !0), void (this.name = "Node"))
                  : void 0)
          );
        }
        randomBytes(e) {
          if (!this.isAvailable)
            throw new Error("System random byte generator is not available.");
          return this._source.randomBytes(e);
        }
      };
    },
    3294: (e, t, r) => {
      "use strict";
      var i = r(8099),
        n = r(7309);
      (t.k = 32), (t.cn = 64);
      var o = (function () {
        function e() {
          (this.digestLength = t.k),
            (this.blockSize = t.cn),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer), n.wipe(this._temp), this.reset();
          }),
          (e.prototype.update = function (e, t) {
            if ((void 0 === t && (t = e.length), this._finished))
              throw new Error(
                "SHA256: can't update because hash was finished.",
              );
            var r = 0;
            if (((this._bytesHashed += t), this._bufferLength > 0)) {
              for (; this._bufferLength < this.blockSize && t > 0; )
                (this._buffer[this._bufferLength++] = e[r++]), t--;
              this._bufferLength === this.blockSize &&
                (a(this._temp, this._state, this._buffer, 0, this.blockSize),
                (this._bufferLength = 0));
            }
            for (
              t >= this.blockSize &&
              ((r = a(this._temp, this._state, e, r, t)),
              (t %= this.blockSize));
              t > 0;

            )
              (this._buffer[this._bufferLength++] = e[r++]), t--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = (t / 536870912) | 0,
                o = t << 3,
                s = t % 64 < 56 ? 64 : 128;
              this._buffer[r] = 128;
              for (var l = r + 1; l < s - 8; l++) this._buffer[l] = 0;
              i.writeUint32BE(n, this._buffer, s - 8),
                i.writeUint32BE(o, this._buffer, s - 4),
                a(this._temp, this._state, this._buffer, 0, s),
                (this._finished = !0);
            }
            for (l = 0; l < this.digestLength / 4; l++)
              i.writeUint32BE(this._state[l], e, 4 * l);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              state: new Int32Array(this._state),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._state.set(e.state),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.state),
              e.buffer && n.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.mE = o;
      var s = new Int32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      function a(e, t, r, n, o) {
        for (; o >= 64; ) {
          for (
            var a = t[0],
              l = t[1],
              c = t[2],
              h = t[3],
              u = t[4],
              d = t[5],
              p = t[6],
              f = t[7],
              g = 0;
            g < 16;
            g++
          ) {
            var m = n + 4 * g;
            e[g] = i.readUint32BE(r, m);
          }
          for (g = 16; g < 64; g++) {
            var w = e[g - 2],
              y =
                ((w >>> 17) | (w << 15)) ^
                ((w >>> 19) | (w << 13)) ^
                (w >>> 10),
              v =
                (((w = e[g - 15]) >>> 7) | (w << 25)) ^
                ((w >>> 18) | (w << 14)) ^
                (w >>> 3);
            e[g] = ((y + e[g - 7]) | 0) + ((v + e[g - 16]) | 0);
          }
          for (g = 0; g < 64; g++)
            (y =
              ((((((u >>> 6) | (u << 26)) ^
                ((u >>> 11) | (u << 21)) ^
                ((u >>> 25) | (u << 7))) +
                ((u & d) ^ (~u & p))) |
                0) +
                ((f + ((s[g] + e[g]) | 0)) | 0)) |
              0),
              (v =
                ((((a >>> 2) | (a << 30)) ^
                  ((a >>> 13) | (a << 19)) ^
                  ((a >>> 22) | (a << 10))) +
                  ((a & l) ^ (a & c) ^ (l & c))) |
                0),
              (f = p),
              (p = d),
              (d = u),
              (u = (h + y) | 0),
              (h = c),
              (c = l),
              (l = a),
              (a = (y + v) | 0);
          (t[0] += a),
            (t[1] += l),
            (t[2] += c),
            (t[3] += h),
            (t[4] += u),
            (t[5] += d),
            (t[6] += p),
            (t[7] += f),
            (n += 64),
            (o -= 64);
        }
        return n;
      }
      t.vp = function (e) {
        var t = new o();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    3350: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(8099),
        n = r(7309);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var o = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer),
              n.wipe(this._tempHi),
              n.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished.",
              );
            var i = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = e[i++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize,
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((i = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                i,
                r,
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = e[i++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = (t / 536870912) | 0,
                o = t << 3,
                s = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var l = r + 1; l < s - 8; l++) this._buffer[l] = 0;
              i.writeUint32BE(n, this._buffer, s - 8),
                i.writeUint32BE(o, this._buffer, s - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  s,
                ),
                (this._finished = !0);
            }
            for (l = 0; l < this.digestLength / 8; l++)
              i.writeUint32BE(this._stateHi[l], e, 8 * l),
                i.writeUint32BE(this._stateLo[l], e, 8 * l + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.stateHi),
              n.wipe(e.stateLo),
              e.buffer && n.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = o;
      var s = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, n, o, a, l) {
        for (
          var c,
            h,
            u,
            d,
            p,
            f,
            g,
            m,
            w = r[0],
            y = r[1],
            v = r[2],
            b = r[3],
            _ = r[4],
            E = r[5],
            x = r[6],
            C = r[7],
            O = n[0],
            I = n[1],
            S = n[2],
            A = n[3],
            P = n[4],
            T = n[5],
            k = n[6],
            N = n[7];
          l >= 128;

        ) {
          for (var R = 0; R < 16; R++) {
            var $ = 8 * R + a;
            (e[R] = i.readUint32BE(o, $)), (t[R] = i.readUint32BE(o, $ + 4));
          }
          for (R = 0; R < 80; R++) {
            var L,
              M,
              j = w,
              U = y,
              D = v,
              B = b,
              z = _,
              W = E,
              H = x,
              V = O,
              q = I,
              F = S,
              K = A,
              G = P,
              Z = T,
              Y = k;
            if (
              ((p = 65535 & (h = N)),
              (f = h >>> 16),
              (g = 65535 & (c = C)),
              (m = c >>> 16),
              (p +=
                65535 &
                (h =
                  ((P >>> 14) | (_ << 18)) ^
                  ((P >>> 18) | (_ << 14)) ^
                  ((_ >>> 9) | (P << 23)))),
              (f += h >>> 16),
              (g +=
                65535 &
                (c =
                  ((_ >>> 14) | (P << 18)) ^
                  ((_ >>> 18) | (P << 14)) ^
                  ((P >>> 9) | (_ << 23)))),
              (m += c >>> 16),
              (p += 65535 & (h = (P & T) ^ (~P & k))),
              (f += h >>> 16),
              (g += 65535 & (c = (_ & E) ^ (~_ & x))),
              (m += c >>> 16),
              (c = s[2 * R]),
              (p += 65535 & (h = s[2 * R + 1])),
              (f += h >>> 16),
              (g += 65535 & c),
              (m += c >>> 16),
              (c = e[R % 16]),
              (f += (h = t[R % 16]) >>> 16),
              (g += 65535 & c),
              (m += c >>> 16),
              (g += (f += (p += 65535 & h) >>> 16) >>> 16),
              (p = 65535 & (h = d = (65535 & p) | (f << 16))),
              (f = h >>> 16),
              (g = 65535 & (c = u = (65535 & g) | ((m += g >>> 16) << 16))),
              (m = c >>> 16),
              (p +=
                65535 &
                (h =
                  ((O >>> 28) | (w << 4)) ^
                  ((w >>> 2) | (O << 30)) ^
                  ((w >>> 7) | (O << 25)))),
              (f += h >>> 16),
              (g +=
                65535 &
                (c =
                  ((w >>> 28) | (O << 4)) ^
                  ((O >>> 2) | (w << 30)) ^
                  ((O >>> 7) | (w << 25)))),
              (m += c >>> 16),
              (f += (h = (O & I) ^ (O & S) ^ (I & S)) >>> 16),
              (g += 65535 & (c = (w & y) ^ (w & v) ^ (y & v))),
              (m += c >>> 16),
              (L =
                (65535 & (g += (f += (p += 65535 & h) >>> 16) >>> 16)) |
                ((m += g >>> 16) << 16)),
              (M = (65535 & p) | (f << 16)),
              (p = 65535 & (h = K)),
              (f = h >>> 16),
              (g = 65535 & (c = B)),
              (m = c >>> 16),
              (f += (h = d) >>> 16),
              (g += 65535 & (c = u)),
              (m += c >>> 16),
              (y = j),
              (v = U),
              (b = D),
              (_ = B =
                (65535 & (g += (f += (p += 65535 & h) >>> 16) >>> 16)) |
                ((m += g >>> 16) << 16)),
              (E = z),
              (x = W),
              (C = H),
              (w = L),
              (I = V),
              (S = q),
              (A = F),
              (P = K = (65535 & p) | (f << 16)),
              (T = G),
              (k = Z),
              (N = Y),
              (O = M),
              R % 16 == 15)
            )
              for ($ = 0; $ < 16; $++)
                (c = e[$]),
                  (p = 65535 & (h = t[$])),
                  (f = h >>> 16),
                  (g = 65535 & c),
                  (m = c >>> 16),
                  (c = e[($ + 9) % 16]),
                  (p += 65535 & (h = t[($ + 9) % 16])),
                  (f += h >>> 16),
                  (g += 65535 & c),
                  (m += c >>> 16),
                  (u = e[($ + 1) % 16]),
                  (p +=
                    65535 &
                    (h =
                      (((d = t[($ + 1) % 16]) >>> 1) | (u << 31)) ^
                      ((d >>> 8) | (u << 24)) ^
                      ((d >>> 7) | (u << 25)))),
                  (f += h >>> 16),
                  (g +=
                    65535 &
                    (c =
                      ((u >>> 1) | (d << 31)) ^
                      ((u >>> 8) | (d << 24)) ^
                      (u >>> 7))),
                  (m += c >>> 16),
                  (u = e[($ + 14) % 16]),
                  (f +=
                    (h =
                      (((d = t[($ + 14) % 16]) >>> 19) | (u << 13)) ^
                      ((u >>> 29) | (d << 3)) ^
                      ((d >>> 6) | (u << 26))) >>> 16),
                  (g +=
                    65535 &
                    (c =
                      ((u >>> 19) | (d << 13)) ^
                      ((d >>> 29) | (u << 3)) ^
                      (u >>> 6))),
                  (m += c >>> 16),
                  (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                  (e[$] = (65535 & g) | (m << 16)),
                  (t[$] = (65535 & p) | (f << 16));
          }
          (p = 65535 & (h = O)),
            (f = h >>> 16),
            (g = 65535 & (c = w)),
            (m = c >>> 16),
            (c = r[0]),
            (f += (h = n[0]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[0] = w = (65535 & g) | (m << 16)),
            (n[0] = O = (65535 & p) | (f << 16)),
            (p = 65535 & (h = I)),
            (f = h >>> 16),
            (g = 65535 & (c = y)),
            (m = c >>> 16),
            (c = r[1]),
            (f += (h = n[1]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[1] = y = (65535 & g) | (m << 16)),
            (n[1] = I = (65535 & p) | (f << 16)),
            (p = 65535 & (h = S)),
            (f = h >>> 16),
            (g = 65535 & (c = v)),
            (m = c >>> 16),
            (c = r[2]),
            (f += (h = n[2]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[2] = v = (65535 & g) | (m << 16)),
            (n[2] = S = (65535 & p) | (f << 16)),
            (p = 65535 & (h = A)),
            (f = h >>> 16),
            (g = 65535 & (c = b)),
            (m = c >>> 16),
            (c = r[3]),
            (f += (h = n[3]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[3] = b = (65535 & g) | (m << 16)),
            (n[3] = A = (65535 & p) | (f << 16)),
            (p = 65535 & (h = P)),
            (f = h >>> 16),
            (g = 65535 & (c = _)),
            (m = c >>> 16),
            (c = r[4]),
            (f += (h = n[4]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[4] = _ = (65535 & g) | (m << 16)),
            (n[4] = P = (65535 & p) | (f << 16)),
            (p = 65535 & (h = T)),
            (f = h >>> 16),
            (g = 65535 & (c = E)),
            (m = c >>> 16),
            (c = r[5]),
            (f += (h = n[5]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[5] = E = (65535 & g) | (m << 16)),
            (n[5] = T = (65535 & p) | (f << 16)),
            (p = 65535 & (h = k)),
            (f = h >>> 16),
            (g = 65535 & (c = x)),
            (m = c >>> 16),
            (c = r[6]),
            (f += (h = n[6]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[6] = x = (65535 & g) | (m << 16)),
            (n[6] = k = (65535 & p) | (f << 16)),
            (p = 65535 & (h = N)),
            (f = h >>> 16),
            (g = 65535 & (c = C)),
            (m = c >>> 16),
            (c = r[7]),
            (f += (h = n[7]) >>> 16),
            (g += 65535 & c),
            (m += c >>> 16),
            (m += (g += (f += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[7] = C = (65535 & g) | (m << 16)),
            (n[7] = N = (65535 & p) | (f << 16)),
            (a += 128),
            (l -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new o();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    7309: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wipe = function (e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
          return e;
        });
    },
    7664: (e, t, r) => {
      "use strict";
      t.gi = t.Au = t.KS = t.kz = void 0;
      const i = r(1416),
        n = r(7309);
      function o(e) {
        const t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.kz = 32), (t.KS = 32);
      const s = new Uint8Array(32);
      s[0] = 9;
      const a = o([56129, 1]);
      function l(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function c(e, t, r) {
        const i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          const n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function h(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function u(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function d(e, t, r) {
        let i,
          n,
          o = 0,
          s = 0,
          a = 0,
          l = 0,
          c = 0,
          h = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          g = 0,
          m = 0,
          w = 0,
          y = 0,
          v = 0,
          b = 0,
          _ = 0,
          E = 0,
          x = 0,
          C = 0,
          O = 0,
          I = 0,
          S = 0,
          A = 0,
          P = 0,
          T = 0,
          k = 0,
          N = 0,
          R = 0,
          $ = 0,
          L = 0,
          M = r[0],
          j = r[1],
          U = r[2],
          D = r[3],
          B = r[4],
          z = r[5],
          W = r[6],
          H = r[7],
          V = r[8],
          q = r[9],
          F = r[10],
          K = r[11],
          G = r[12],
          Z = r[13],
          Y = r[14],
          J = r[15];
        (i = t[0]),
          (o += i * M),
          (s += i * j),
          (a += i * U),
          (l += i * D),
          (c += i * B),
          (h += i * z),
          (u += i * W),
          (d += i * H),
          (p += i * V),
          (f += i * q),
          (g += i * F),
          (m += i * K),
          (w += i * G),
          (y += i * Z),
          (v += i * Y),
          (b += i * J),
          (i = t[1]),
          (s += i * M),
          (a += i * j),
          (l += i * U),
          (c += i * D),
          (h += i * B),
          (u += i * z),
          (d += i * W),
          (p += i * H),
          (f += i * V),
          (g += i * q),
          (m += i * F),
          (w += i * K),
          (y += i * G),
          (v += i * Z),
          (b += i * Y),
          (_ += i * J),
          (i = t[2]),
          (a += i * M),
          (l += i * j),
          (c += i * U),
          (h += i * D),
          (u += i * B),
          (d += i * z),
          (p += i * W),
          (f += i * H),
          (g += i * V),
          (m += i * q),
          (w += i * F),
          (y += i * K),
          (v += i * G),
          (b += i * Z),
          (_ += i * Y),
          (E += i * J),
          (i = t[3]),
          (l += i * M),
          (c += i * j),
          (h += i * U),
          (u += i * D),
          (d += i * B),
          (p += i * z),
          (f += i * W),
          (g += i * H),
          (m += i * V),
          (w += i * q),
          (y += i * F),
          (v += i * K),
          (b += i * G),
          (_ += i * Z),
          (E += i * Y),
          (x += i * J),
          (i = t[4]),
          (c += i * M),
          (h += i * j),
          (u += i * U),
          (d += i * D),
          (p += i * B),
          (f += i * z),
          (g += i * W),
          (m += i * H),
          (w += i * V),
          (y += i * q),
          (v += i * F),
          (b += i * K),
          (_ += i * G),
          (E += i * Z),
          (x += i * Y),
          (C += i * J),
          (i = t[5]),
          (h += i * M),
          (u += i * j),
          (d += i * U),
          (p += i * D),
          (f += i * B),
          (g += i * z),
          (m += i * W),
          (w += i * H),
          (y += i * V),
          (v += i * q),
          (b += i * F),
          (_ += i * K),
          (E += i * G),
          (x += i * Z),
          (C += i * Y),
          (O += i * J),
          (i = t[6]),
          (u += i * M),
          (d += i * j),
          (p += i * U),
          (f += i * D),
          (g += i * B),
          (m += i * z),
          (w += i * W),
          (y += i * H),
          (v += i * V),
          (b += i * q),
          (_ += i * F),
          (E += i * K),
          (x += i * G),
          (C += i * Z),
          (O += i * Y),
          (I += i * J),
          (i = t[7]),
          (d += i * M),
          (p += i * j),
          (f += i * U),
          (g += i * D),
          (m += i * B),
          (w += i * z),
          (y += i * W),
          (v += i * H),
          (b += i * V),
          (_ += i * q),
          (E += i * F),
          (x += i * K),
          (C += i * G),
          (O += i * Z),
          (I += i * Y),
          (S += i * J),
          (i = t[8]),
          (p += i * M),
          (f += i * j),
          (g += i * U),
          (m += i * D),
          (w += i * B),
          (y += i * z),
          (v += i * W),
          (b += i * H),
          (_ += i * V),
          (E += i * q),
          (x += i * F),
          (C += i * K),
          (O += i * G),
          (I += i * Z),
          (S += i * Y),
          (A += i * J),
          (i = t[9]),
          (f += i * M),
          (g += i * j),
          (m += i * U),
          (w += i * D),
          (y += i * B),
          (v += i * z),
          (b += i * W),
          (_ += i * H),
          (E += i * V),
          (x += i * q),
          (C += i * F),
          (O += i * K),
          (I += i * G),
          (S += i * Z),
          (A += i * Y),
          (P += i * J),
          (i = t[10]),
          (g += i * M),
          (m += i * j),
          (w += i * U),
          (y += i * D),
          (v += i * B),
          (b += i * z),
          (_ += i * W),
          (E += i * H),
          (x += i * V),
          (C += i * q),
          (O += i * F),
          (I += i * K),
          (S += i * G),
          (A += i * Z),
          (P += i * Y),
          (T += i * J),
          (i = t[11]),
          (m += i * M),
          (w += i * j),
          (y += i * U),
          (v += i * D),
          (b += i * B),
          (_ += i * z),
          (E += i * W),
          (x += i * H),
          (C += i * V),
          (O += i * q),
          (I += i * F),
          (S += i * K),
          (A += i * G),
          (P += i * Z),
          (T += i * Y),
          (k += i * J),
          (i = t[12]),
          (w += i * M),
          (y += i * j),
          (v += i * U),
          (b += i * D),
          (_ += i * B),
          (E += i * z),
          (x += i * W),
          (C += i * H),
          (O += i * V),
          (I += i * q),
          (S += i * F),
          (A += i * K),
          (P += i * G),
          (T += i * Z),
          (k += i * Y),
          (N += i * J),
          (i = t[13]),
          (y += i * M),
          (v += i * j),
          (b += i * U),
          (_ += i * D),
          (E += i * B),
          (x += i * z),
          (C += i * W),
          (O += i * H),
          (I += i * V),
          (S += i * q),
          (A += i * F),
          (P += i * K),
          (T += i * G),
          (k += i * Z),
          (N += i * Y),
          (R += i * J),
          (i = t[14]),
          (v += i * M),
          (b += i * j),
          (_ += i * U),
          (E += i * D),
          (x += i * B),
          (C += i * z),
          (O += i * W),
          (I += i * H),
          (S += i * V),
          (A += i * q),
          (P += i * F),
          (T += i * K),
          (k += i * G),
          (N += i * Z),
          (R += i * Y),
          ($ += i * J),
          (i = t[15]),
          (b += i * M),
          (_ += i * j),
          (E += i * U),
          (x += i * D),
          (C += i * B),
          (O += i * z),
          (I += i * W),
          (S += i * H),
          (A += i * V),
          (P += i * q),
          (T += i * F),
          (k += i * K),
          (N += i * G),
          (R += i * Z),
          ($ += i * Y),
          (L += i * J),
          (o += 38 * _),
          (s += 38 * E),
          (a += 38 * x),
          (l += 38 * C),
          (c += 38 * O),
          (h += 38 * I),
          (u += 38 * S),
          (d += 38 * A),
          (p += 38 * P),
          (f += 38 * T),
          (g += 38 * k),
          (m += 38 * N),
          (w += 38 * R),
          (y += 38 * $),
          (v += 38 * L),
          (n = 1),
          (i = o + n + 65535),
          (n = Math.floor(i / 65536)),
          (o = i - 65536 * n),
          (i = s + n + 65535),
          (n = Math.floor(i / 65536)),
          (s = i - 65536 * n),
          (i = a + n + 65535),
          (n = Math.floor(i / 65536)),
          (a = i - 65536 * n),
          (i = l + n + 65535),
          (n = Math.floor(i / 65536)),
          (l = i - 65536 * n),
          (i = c + n + 65535),
          (n = Math.floor(i / 65536)),
          (c = i - 65536 * n),
          (i = h + n + 65535),
          (n = Math.floor(i / 65536)),
          (h = i - 65536 * n),
          (i = u + n + 65535),
          (n = Math.floor(i / 65536)),
          (u = i - 65536 * n),
          (i = d + n + 65535),
          (n = Math.floor(i / 65536)),
          (d = i - 65536 * n),
          (i = p + n + 65535),
          (n = Math.floor(i / 65536)),
          (p = i - 65536 * n),
          (i = f + n + 65535),
          (n = Math.floor(i / 65536)),
          (f = i - 65536 * n),
          (i = g + n + 65535),
          (n = Math.floor(i / 65536)),
          (g = i - 65536 * n),
          (i = m + n + 65535),
          (n = Math.floor(i / 65536)),
          (m = i - 65536 * n),
          (i = w + n + 65535),
          (n = Math.floor(i / 65536)),
          (w = i - 65536 * n),
          (i = y + n + 65535),
          (n = Math.floor(i / 65536)),
          (y = i - 65536 * n),
          (i = v + n + 65535),
          (n = Math.floor(i / 65536)),
          (v = i - 65536 * n),
          (i = b + n + 65535),
          (n = Math.floor(i / 65536)),
          (b = i - 65536 * n),
          (o += n - 1 + 37 * (n - 1)),
          (n = 1),
          (i = o + n + 65535),
          (n = Math.floor(i / 65536)),
          (o = i - 65536 * n),
          (i = s + n + 65535),
          (n = Math.floor(i / 65536)),
          (s = i - 65536 * n),
          (i = a + n + 65535),
          (n = Math.floor(i / 65536)),
          (a = i - 65536 * n),
          (i = l + n + 65535),
          (n = Math.floor(i / 65536)),
          (l = i - 65536 * n),
          (i = c + n + 65535),
          (n = Math.floor(i / 65536)),
          (c = i - 65536 * n),
          (i = h + n + 65535),
          (n = Math.floor(i / 65536)),
          (h = i - 65536 * n),
          (i = u + n + 65535),
          (n = Math.floor(i / 65536)),
          (u = i - 65536 * n),
          (i = d + n + 65535),
          (n = Math.floor(i / 65536)),
          (d = i - 65536 * n),
          (i = p + n + 65535),
          (n = Math.floor(i / 65536)),
          (p = i - 65536 * n),
          (i = f + n + 65535),
          (n = Math.floor(i / 65536)),
          (f = i - 65536 * n),
          (i = g + n + 65535),
          (n = Math.floor(i / 65536)),
          (g = i - 65536 * n),
          (i = m + n + 65535),
          (n = Math.floor(i / 65536)),
          (m = i - 65536 * n),
          (i = w + n + 65535),
          (n = Math.floor(i / 65536)),
          (w = i - 65536 * n),
          (i = y + n + 65535),
          (n = Math.floor(i / 65536)),
          (y = i - 65536 * n),
          (i = v + n + 65535),
          (n = Math.floor(i / 65536)),
          (v = i - 65536 * n),
          (i = b + n + 65535),
          (n = Math.floor(i / 65536)),
          (b = i - 65536 * n),
          (o += n - 1 + 37 * (n - 1)),
          (e[0] = o),
          (e[1] = s),
          (e[2] = a),
          (e[3] = l),
          (e[4] = c),
          (e[5] = h),
          (e[6] = u),
          (e[7] = d),
          (e[8] = p),
          (e[9] = f),
          (e[10] = g),
          (e[11] = m),
          (e[12] = w),
          (e[13] = y),
          (e[14] = v),
          (e[15] = b);
      }
      function p(e, t) {
        d(e, t, t);
      }
      function f(e, t) {
        const r = new Uint8Array(32),
          i = new Float64Array(80),
          n = o(),
          s = o(),
          f = o(),
          g = o(),
          m = o(),
          w = o();
        for (let t = 0; t < 31; t++) r[t] = e[t];
        (r[31] = (127 & e[31]) | 64),
          (r[0] &= 248),
          (function (e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(i, t);
        for (let e = 0; e < 16; e++) s[e] = i[e];
        n[0] = g[0] = 1;
        for (let e = 254; e >= 0; --e) {
          const t = (r[e >>> 3] >>> (7 & e)) & 1;
          c(n, s, t),
            c(f, g, t),
            h(m, n, f),
            u(n, n, f),
            h(f, s, g),
            u(s, s, g),
            p(g, m),
            p(w, n),
            d(n, f, n),
            d(f, s, m),
            h(m, n, f),
            u(n, n, f),
            p(s, n),
            u(f, g, w),
            d(n, f, a),
            h(n, n, g),
            d(f, f, n),
            d(n, g, w),
            d(g, s, i),
            p(s, m),
            c(n, s, t),
            c(f, g, t);
        }
        for (let e = 0; e < 16; e++)
          (i[e + 16] = n[e]),
            (i[e + 32] = f[e]),
            (i[e + 48] = s[e]),
            (i[e + 64] = g[e]);
        const y = i.subarray(32),
          v = i.subarray(16);
        !(function (e, t) {
          const r = o();
          for (let e = 0; e < 16; e++) r[e] = t[e];
          for (let e = 253; e >= 0; e--)
            p(r, r), 2 !== e && 4 !== e && d(r, r, t);
          for (let t = 0; t < 16; t++) e[t] = r[t];
        })(y, y),
          d(v, v, y);
        const b = new Uint8Array(32);
        return (
          (function (e, t) {
            const r = o(),
              i = o();
            for (let e = 0; e < 16; e++) i[e] = t[e];
            l(i), l(i), l(i);
            for (let e = 0; e < 2; e++) {
              r[0] = i[0] - 65517;
              for (let e = 1; e < 15; e++)
                (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)),
                  (r[e - 1] &= 65535);
              r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
              const e = (r[15] >> 16) & 1;
              (r[14] &= 65535), c(i, r, 1 - e);
            }
            for (let t = 0; t < 16; t++)
              (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
          })(b, v),
          b
        );
      }
      (t.Au = function (e) {
        const r = (0, i.randomBytes)(32, e),
          o = (function (e) {
            if (e.length !== t.KS)
              throw new Error(`x25519: seed must be ${t.KS} bytes`);
            const r = new Uint8Array(e);
            return { publicKey: ((i = r), f(i, s)), secretKey: r };
            var i;
          })(r);
        return (0, n.wipe)(r), o;
      }),
        (t.gi = function (e, r, i = !1) {
          if (e.length !== t.kz)
            throw new Error("X25519: incorrect secret key length");
          if (r.length !== t.kz)
            throw new Error("X25519: incorrect public key length");
          const n = f(e, r);
          if (i) {
            let e = 0;
            for (let t = 0; t < n.length; t++) e |= n[t];
            if (0 === e) throw new Error("X25519: invalid shared key");
          }
          return n;
        });
    },
    926: (e, t, r) => {
      "use strict";
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function n() {
        const e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = n),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!n();
        });
    },
    8618: (e, t) => {
      "use strict";
      function r() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function i() {
        return (
          "undefined" != typeof process &&
          void 0 !== process.versions &&
          void 0 !== process.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = r),
        (t.isNode = i),
        (t.isBrowser = function () {
          return !r() && !i();
        });
    },
    1468: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4308);
      i.__exportStar(r(926), t), i.__exportStar(r(8618), t);
    },
    4308: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => y,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => I,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => C,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => c,
          __param: () => l,
          __read: () => g,
          __rest: () => s,
          __spread: () => m,
          __spreadArrays: () => w,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function s(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function l(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function c(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, o) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          l((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (n = (n = s.trys).length > 0 && n[n.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        (s.label = n[1]), (n = o);
                        break;
                      }
                      if (n && s.label < n[2]) {
                        (s.label = n[2]), s.ops.push(o);
                        break;
                      }
                      n[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            s.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return s;
      }
      function m() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++)
            i[n] = o[s];
        return i;
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          o = [];
        return (
          (i = {}),
          s("next"),
          s("throw"),
          s("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function s(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                o.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof y
              ? Promise.resolve(r.value.v).then(l, c)
              : h(o[0][2], r);
          } catch (e) {
            h(o[0][3], e);
          }
          var r;
        }
        function l(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: y(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function I(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    8200: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => i });
      class i {}
    },
    997: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { IEvents: () => i.q });
      var i = r(8200);
    },
    2568: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      const i = r(6736);
      (t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    3401: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(9653).__exportStar(r(2568), t);
    },
    8969: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      const i = r(9653),
        n = r(7187),
        o = r(6736),
        s = r(1614),
        a = r(3401);
      class l extends s.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new n.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            const t = new l(e);
            return yield t.init(), t;
          });
        }
        init() {
          return i.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              o.toMiliseconds(this.interval),
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = l;
    },
    772: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(9653);
      i.__exportStar(r(8969), t),
        i.__exportStar(r(1614), t),
        i.__exportStar(r(3401), t);
    },
    4174: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      const i = r(997);
      class n extends i.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = n;
    },
    1614: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(9653).__exportStar(r(4174), t);
    },
    9653: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => y,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => I,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => C,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => c,
          __param: () => l,
          __read: () => g,
          __rest: () => s,
          __spread: () => m,
          __spreadArrays: () => w,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function s(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function l(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function c(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, o) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          l((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (n = (n = s.trys).length > 0 && n[n.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        (s.label = n[1]), (n = o);
                        break;
                      }
                      if (n && s.label < n[2]) {
                        (s.label = n[2]), s.ops.push(o);
                        break;
                      }
                      n[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            s.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return s;
      }
      function m() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++)
            i[n] = o[s];
        return i;
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          o = [];
        return (
          (i = {}),
          s("next"),
          s("throw"),
          s("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function s(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                o.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof y
              ? Promise.resolve(r.value.v).then(l, c)
              : h(o[0][2], r);
          } catch (e) {
            h(o[0][3], e);
          }
          var r;
        }
        function l(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: y(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function I(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    2030: (e) => {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object",
        );
      };
    },
    5150: (e, t, r) => {
      "use strict";
      const i = r(3893),
        n = r(3954),
        o = i.__importDefault(r(653)),
        s = r(9728);
      t.ZP = class {
        constructor() {
          this.localStorage = o.default;
        }
        getKeys() {
          return i.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
          });
        }
        getEntries() {
          return i.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(s.parseEntry);
          });
        }
        getItem(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            const t = this.localStorage.getItem(e);
            if (null !== t) return n.safeJsonParse(t);
          });
        }
        setItem(e, t) {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(e, n.safeJsonStringify(t));
          });
        }
        removeItem(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(e);
          });
        }
      };
    },
    653: (e, t, r) => {
      "use strict";
      !(function () {
        let t;
        function i() {}
        (t = i),
          (t.prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null;
          }),
          (t.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (t.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (t.prototype.clear = function () {
            const e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (t.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          void 0 !== r.g && r.g.localStorage
            ? (e.exports = r.g.localStorage)
            : "undefined" != typeof window && window.localStorage
            ? (e.exports = window.localStorage)
            : (e.exports = new i());
      })();
    },
    9728: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(3893);
      i.__exportStar(r(9076), t), i.__exportStar(r(496), t);
    },
    9076: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IKeyValueStorage = void 0),
        (t.IKeyValueStorage = class {});
    },
    496: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseEntry = void 0);
      const i = r(3954);
      t.parseEntry = function (e) {
        var t;
        return [
          e[0],
          i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : ""),
        ];
      };
    },
    3893: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => y,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => I,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => C,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => c,
          __param: () => l,
          __read: () => g,
          __rest: () => s,
          __spread: () => m,
          __spreadArrays: () => w,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function s(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function l(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function c(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, o) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          l((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (n = (n = s.trys).length > 0 && n[n.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        (s.label = n[1]), (n = o);
                        break;
                      }
                      if (n && s.label < n[2]) {
                        (s.label = n[2]), s.ops.push(o);
                        break;
                      }
                      n[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            s.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return s;
      }
      function m() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++)
            i[n] = o[s];
        return i;
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          o = [];
        return (
          (i = {}),
          s("next"),
          s("throw"),
          s("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function s(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                o.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof y
              ? Promise.resolve(r.value.v).then(l, c)
              : h(o[0][2], r);
          } catch (e) {
            h(o[0][3], e);
          }
          var r;
        }
        function l(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: y(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function I(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    5727: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0),
        (t.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (t.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    9107: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.pino = void 0);
      const i = r(7121),
        n = i.__importDefault(r(6559));
      Object.defineProperty(t, "pino", {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      }),
        i.__exportStar(r(5727), t),
        i.__exportStar(r(8048), t);
    },
    8048: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateChildLogger =
          t.formatChildLoggerContext =
          t.getLoggerContext =
          t.setBrowserLoggerContext =
          t.getBrowserLoggerContext =
          t.getDefaultLoggerOptions =
            void 0);
      const i = r(5727);
      function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
        return e[t] || "";
      }
      function o(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        return (e[r] = t), e;
      }
      function s(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
        let r = "";
        return (
          (r = void 0 === e.bindings ? n(e, t) : e.bindings().context || ""), r
        );
      }
      function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
        const n = s(e, r);
        return n.trim() ? `${n}/${t}` : t;
      }
      (t.getDefaultLoggerOptions = function (e) {
        return Object.assign(Object.assign({}, e), {
          level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (t.getBrowserLoggerContext = n),
        (t.setBrowserLoggerContext = o),
        (t.getLoggerContext = s),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (
          e,
          t,
          r = i.PINO_CUSTOM_CONTEXT_KEY,
        ) {
          const n = a(e, t, r);
          return o(e.child({ context: n }), n, r);
        });
    },
    7121: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => y,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => I,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => C,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => c,
          __param: () => l,
          __read: () => g,
          __rest: () => s,
          __spread: () => m,
          __spreadArrays: () => w,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function s(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function l(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function c(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, o) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          l((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (n = (n = s.trys).length > 0 && n[n.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        (s.label = n[1]), (n = o);
                        break;
                      }
                      if (n && s.label < n[2]) {
                        (s.label = n[2]), s.ops.push(o);
                        break;
                      }
                      n[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            s.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return s;
      }
      function m() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++)
            i[n] = o[s];
        return i;
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          o = [];
        return (
          (i = {}),
          s("next"),
          s("throw"),
          s("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function s(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                o.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof y
              ? Promise.resolve(r.value.v).then(l, c)
              : h(o[0][2], r);
          } catch (e) {
            h(o[0][3], e);
          }
          var r;
        }
        function l(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: y(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function I(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    1882: () => {},
    3014: () => {},
    7087: (e, t, r) => {
      "use strict";
      r.d(t, { ZP: () => Vs });
      var i = {};
      r.r(i), r.d(i, { identity: () => ae });
      var n = {};
      r.r(n), r.d(n, { base2: () => le });
      var o = {};
      r.r(o), r.d(o, { base8: () => ce });
      var s = {};
      r.r(s), r.d(s, { base10: () => he });
      var a = {};
      r.r(a), r.d(a, { base16: () => ue, base16upper: () => de });
      var l = {};
      r.r(l),
        r.d(l, {
          base32: () => pe,
          base32hex: () => we,
          base32hexpad: () => ve,
          base32hexpadupper: () => be,
          base32hexupper: () => ye,
          base32pad: () => ge,
          base32padupper: () => me,
          base32upper: () => fe,
          base32z: () => _e,
        });
      var c = {};
      r.r(c), r.d(c, { base36: () => Ee, base36upper: () => xe });
      var h = {};
      r.r(h), r.d(h, { base58btc: () => Ce, base58flickr: () => Oe });
      var u = {};
      r.r(u),
        r.d(u, {
          base64: () => Ie,
          base64pad: () => Se,
          base64url: () => Ae,
          base64urlpad: () => Pe,
        });
      var d = {};
      r.r(d), r.d(d, { base256emoji: () => Re });
      var p = {};
      r.r(p), r.d(p, { sha256: () => tt, sha512: () => rt });
      var f = {};
      r.r(f), r.d(f, { identity: () => nt });
      var g = {};
      r.r(g),
        r.d(g, {
          code: () => st,
          decode: () => lt,
          encode: () => at,
          name: () => ot,
        });
      var m = {};
      r.r(m),
        r.d(m, {
          code: () => dt,
          decode: () => ft,
          encode: () => pt,
          name: () => ut,
        });
      var w = r(7187),
        y = r.n(w),
        v = r(5150),
        b = r(772),
        _ = r(9107),
        E = r(8200);
      class x extends E.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class C extends E.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class O {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class I extends E.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class S extends E.q {
        constructor(e) {
          super();
        }
      }
      class A {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class P extends E.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class T extends E.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class k {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class N {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class R {
        constructor(e) {
          this.client = e;
        }
      }
      const $ = (e) =>
        JSON.stringify(e, (e, t) =>
          "bigint" == typeof t ? t.toString() + "n" : t,
        );
      function L(e) {
        if ("string" != typeof e)
          throw new Error("Cannot safe json parse value of type " + typeof e);
        try {
          return ((e) => {
            const t = e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3',
            );
            return JSON.parse(t, (e, t) =>
              "string" == typeof t && t.match(/^\d+n$/)
                ? BigInt(t.substring(0, t.length - 1))
                : t,
            );
          })(e);
        } catch (t) {
          return e;
        }
      }
      function M(e) {
        return "string" == typeof e ? e : $(e) || "";
      }
      var j = r(1050),
        U = r(1416),
        D = r(6736);
      const B = "base64url",
        z = "utf8",
        W = ":",
        H = "did",
        V = "key",
        q = "base58btc",
        F = "z",
        K = "K36";
      function G(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function Z(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? G(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function Y(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = Z(t);
        let i = 0;
        for (const t of e) r.set(t, i), (i += t.length);
        return G(r);
      }
      const J = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var o = e.charAt(n),
              s = o.charCodeAt(0);
            if (255 !== r[s]) throw new TypeError(o + " is ambiguous");
            r[s] = n;
          }
          var a = e.length,
            l = e.charAt(0),
            c = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var i = 0, n = 0; e[t] === l; ) i++, t++;
              for (
                var o = ((e.length - t) * c + 1) >>> 0, s = new Uint8Array(o);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = o - 1;
                  (0 !== h || u < n) && -1 !== d;
                  d--, u++
                )
                  (h += (a * s[d]) >>> 0),
                    (s[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (n = u), t++;
              }
              if (" " !== e[t]) {
                for (var p = o - n; p !== o && 0 === s[p]; ) p++;
                for (var f = new Uint8Array(i + (o - p)), g = i; p !== o; )
                  f[g++] = s[p++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, i = 0, n = 0, o = t.length;
                n !== o && 0 === t[n];

              )
                n++, r++;
              for (
                var s = ((o - n) * h + 1) >>> 0, c = new Uint8Array(s);
                n !== o;

              ) {
                for (
                  var u = t[n], d = 0, p = s - 1;
                  (0 !== u || d < i) && -1 !== p;
                  p--, d++
                )
                  (u += (256 * c[p]) >>> 0),
                    (c[p] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw new Error("Non-zero carry");
                (i = d), n++;
              }
              for (var f = s - i; f !== s && 0 === c[f]; ) f++;
              for (var g = l.repeat(r); f < s; ++f) g += e.charAt(c[f]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var r = u(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        },
        Q =
          (new Uint8Array(0),
          (e) => {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
              return e;
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            throw new Error("Unknown type, must be binary type");
          });
      class X {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class ee {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`,
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return re(this, e);
        }
      }
      class te {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return re(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e,
            )}, only inputs prefixed with ${Object.keys(
              this.decoders,
            )} are supported`,
          );
        }
      }
      const re = (e, t) =>
        new te({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class ie {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new X(e, t, r)),
            (this.decoder = new ee(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const ne = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new ie(e, t, r, i),
        oe = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: i, decode: n } = J(r, t);
          return ne({ prefix: e, name: t, encode: i, decode: (e) => Q(n(e)) });
        },
        se = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          ne({
            prefix: t,
            name: e,
            encode: (e) =>
              ((e, t, r) => {
                const i = "=" === t[t.length - 1],
                  n = (1 << r) - 1;
                let o = "",
                  s = 0,
                  a = 0;
                for (let i = 0; i < e.length; ++i)
                  for (a = (a << 8) | e[i], s += 8; s > r; )
                    (s -= r), (o += t[n & (a >> s)]);
                if ((s && (o += t[n & (a << (r - s))]), i))
                  for (; (o.length * r) & 7; ) o += "=";
                return o;
              })(e, i, r),
            decode: (t) =>
              ((e, t, r, i) => {
                const n = {};
                for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                let o = e.length;
                for (; "=" === e[o - 1]; ) --o;
                const s = new Uint8Array(((o * r) / 8) | 0);
                let a = 0,
                  l = 0,
                  c = 0;
                for (let t = 0; t < o; ++t) {
                  const o = n[e[t]];
                  if (void 0 === o) throw new SyntaxError(`Non-${i} character`);
                  (l = (l << r) | o),
                    (a += r),
                    a >= 8 && ((a -= 8), (s[c++] = 255 & (l >> a)));
                }
                if (a >= r || 255 & (l << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return s;
              })(t, i, r, e),
          }),
        ae = ne({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        }),
        le = se({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        ce = se({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        he = oe({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        ue = se({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        de = se({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        pe = se({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        fe = se({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        ge = se({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        me = se({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        we = se({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        ye = se({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        ve = se({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        be = se({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        _e = se({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        Ee = oe({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        xe = oe({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        Ce = oe({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Oe = oe({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        Ie = se({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Se = se({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Ae = se({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Pe = se({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        Te = Array.from(
          "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂",
        ),
        ke = Te.reduce((e, t, r) => ((e[r] = t), e), []),
        Ne = Te.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        Re = ne({
          prefix: "🚀",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => e + ke[t], "");
          },
          decode: function (e) {
            const t = [];
            for (const r of e) {
              const e = Ne[r.codePointAt(0)];
              if (void 0 === e)
                throw new Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var $e = 128,
        Le = -128,
        Me = Math.pow(2, 31),
        je = Math.pow(2, 7),
        Ue = Math.pow(2, 14),
        De = Math.pow(2, 21),
        Be = Math.pow(2, 28),
        ze = Math.pow(2, 35),
        We = Math.pow(2, 42),
        He = Math.pow(2, 49),
        Ve = Math.pow(2, 56),
        qe = Math.pow(2, 63);
      const Fe = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= Me; )
            (r[i++] = (255 & t) | $e), (t /= 128);
          for (; t & Le; ) (r[i++] = (255 & t) | $e), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        Ke = function (e) {
          return e < je
            ? 1
            : e < Ue
            ? 2
            : e < De
            ? 3
            : e < Be
            ? 4
            : e < ze
            ? 5
            : e < We
            ? 6
            : e < He
            ? 7
            : e < Ve
            ? 8
            : e < qe
            ? 9
            : 10;
        },
        Ge = (e, t, r = 0) => (Fe(e, t, r), t),
        Ze = (e) => Ke(e),
        Ye = (e, t) => {
          const r = t.byteLength,
            i = Ze(e),
            n = i + Ze(r),
            o = new Uint8Array(n + r);
          return Ge(e, o, 0), Ge(r, o, i), o.set(t, n), new Je(e, r, t, o);
        };
      class Je {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const Qe = ({ name: e, code: t, encode: r }) => new Xe(e, t, r);
      class Xe {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Ye(this.code, t)
              : t.then((e) => Ye(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const et = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        tt = Qe({ name: "sha2-256", code: 18, encode: et("SHA-256") }),
        rt = Qe({ name: "sha2-512", code: 19, encode: et("SHA-512") }),
        it = Q,
        nt = {
          code: 0,
          name: "identity",
          encode: it,
          digest: (e) => Ye(0, it(e)),
        },
        ot = "raw",
        st = 85,
        at = (e) => Q(e),
        lt = (e) => Q(e),
        ct = new TextEncoder(),
        ht = new TextDecoder(),
        ut = "json",
        dt = 512,
        pt = (e) => ct.encode(JSON.stringify(e)),
        ft = (e) => JSON.parse(ht.decode(e));
      Symbol.toStringTag,
        Symbol.for("nodejs.util.inspect.custom"),
        Symbol.for("@ipld/js-cid/CID");
      const gt = { ...i, ...n, ...o, ...s, ...a, ...l, ...c, ...h, ...u, ...d };
      function mt(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const wt = mt(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1)),
        ),
        yt = mt(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = Z((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          },
        ),
        vt = {
          utf8: wt,
          "utf-8": wt,
          hex: gt.base16,
          latin1: yt,
          ascii: yt,
          binary: yt,
          ...gt,
        };
      function bt(e, t = "utf8") {
        const r = vt[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength,
            ).toString("utf8");
      }
      function _t(e, t = "utf8") {
        const r = vt[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : G(globalThis.Buffer.from(e, "utf-8"));
      }
      function Et(e) {
        return bt(_t(M(e), z), B);
      }
      function xt(e) {
        const t = _t(K, q),
          r = F + bt(Y([t, e]), q);
        return [H, V, r].join(W);
      }
      function Ct(e = (0, U.randomBytes)(32)) {
        return j._w(e);
      }
      r(3014);
      var Ot = r(5501),
        It = r(512),
        St = r(3294),
        At = r(7664),
        Pt = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var i, n = 0, o = t.length; n < o; n++)
              (!i && n in t) ||
                (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        Tt = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        kt = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        Nt = function (e, t, r, i) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = i),
            (this.type = "bot-device");
        },
        Rt = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        $t = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        Lt =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        Mt = 3,
        jt = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        Ut = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function Dt(e) {
        var t = (function (e) {
          return (
            "" !== e &&
            jt.reduce(function (t, r) {
              var i = r[0],
                n = r[1];
              if (t) return t;
              var o = n.exec(e);
              return !!o && [i, o];
            }, !1)
          );
        })(e);
        if (!t) return null;
        var r = t[0],
          i = t[1];
        if ("searchbot" === r) return new Rt();
        var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
        n
          ? n.length < Mt &&
            (n = Pt(
              Pt([], n, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(Mt - n.length),
              !0,
            ))
          : (n = []);
        var o = n.join("."),
          s = (function (e) {
            for (var t = 0, r = Ut.length; t < r; t++) {
              var i = Ut[t],
                n = i[0];
              if (i[1].exec(e)) return n;
            }
            return null;
          })(e),
          a = Lt.exec(e);
        return a && a[1] ? new Nt(r, o, s, a[1]) : new Tt(r, o, s);
      }
      var Bt = r(2873),
        zt = r(5755),
        Wt = r(7563);
      r(1882);
      const Ht = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
        },
      };
      function Vt(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      const qt = "base10",
        Ft = "base16",
        Kt = "base64pad",
        Gt = "utf8";
      function Zt() {
        return bt((0, U.randomBytes)(32), Ft);
      }
      function Yt(e) {
        return bt((0, St.vp)(_t(e, Gt)), Ft);
      }
      function Jt(e) {
        return Number(bt(e, qt));
      }
      function Qt(e) {
        const t = _t(e, Kt),
          r = t.slice(0, 1);
        if (1 === Jt(r)) {
          const e = 33,
            i = e + 12,
            n = t.slice(1, e),
            o = t.slice(e, i);
          return { type: r, sealed: t.slice(i), iv: o, senderPublicKey: n };
        }
        const i = t.slice(1, 13);
        return { type: r, sealed: t.slice(13), iv: i };
      }
      function Xt(e) {
        const t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw new Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function er(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var tr = Object.defineProperty,
        rr = Object.getOwnPropertySymbols,
        ir = Object.prototype.hasOwnProperty,
        nr = Object.prototype.propertyIsEnumerable,
        or = (e, t, r) =>
          t in e
            ? tr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        sr = (e, t) => {
          for (var r in t || (t = {})) ir.call(t, r) && or(e, r, t[r]);
          if (rr) for (var r of rr(t)) nr.call(t, r) && or(e, r, t[r]);
          return e;
        };
      const ar = "ReactNative",
        lr = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        },
        cr = "js";
      function hr() {
        return (
          typeof process < "u" &&
          typeof process.versions < "u" &&
          typeof process.versions.node < "u"
        );
      }
      function ur() {
        return (
          !(0, Bt.getDocument)() &&
          !!(0, Bt.getNavigator)() &&
          navigator.product === ar
        );
      }
      function dr() {
        return !hr() && !!(0, Bt.getNavigator)();
      }
      function pr() {
        return ur()
          ? lr.reactNative
          : hr()
          ? lr.node
          : dr()
          ? lr.browser
          : lr.unknown;
      }
      function fr(e, t, i) {
        const n = (function () {
            if (
              pr() === lr.reactNative &&
              typeof r.g < "u" &&
              typeof (null == r.g ? void 0 : r.g.Platform) < "u"
            ) {
              const { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            const e = t
              ? Dt(t)
              : "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? new $t()
              : "undefined" != typeof navigator
              ? Dt(navigator.userAgent)
              : "undefined" != typeof process && process.version
              ? new kt(process.version.slice(1))
              : null;
            var t;
            if (null === e) return "unknown";
            const i = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [i, e.name, e.version].join("-")
              : [i, e.version].join("-");
          })(),
          o = (function () {
            var e;
            const t = pr();
            return t === lr.browser
              ? [
                  t,
                  (null == (e = (0, Bt.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [cr, i].join("-"), n, o].join("/");
      }
      function gr(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function mr(e) {
        return Object.fromEntries(e.entries());
      }
      function wr(e) {
        return new Map(Object.entries(e));
      }
      function yr(e = D.FIVE_MINUTES, t) {
        const r = (0, D.toMiliseconds)(e || D.FIVE_MINUTES);
        let i, n, o;
        return {
          resolve: (e) => {
            o && i && (clearTimeout(o), i(e));
          },
          reject: (e) => {
            o && n && (clearTimeout(o), n(e));
          },
          done: () =>
            new Promise((e, s) => {
              (o = setTimeout(() => {
                s(new Error(t));
              }, r)),
                (i = e),
                (n = s);
            }),
        };
      }
      function vr(e, t, r) {
        return new Promise(async (i, n) => {
          const o = setTimeout(() => n(new Error(r)), t);
          try {
            i(await e);
          } catch (e) {
            n(e);
          }
          clearTimeout(o);
        });
      }
      function br(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic',
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id',
            );
          return `id:${t}`;
        }
        throw new Error(`Unknown expirer target type: ${e}`);
      }
      function _r(e) {
        const [t, r] = e.split(":"),
          i = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) i.topic = r;
        else {
          if ("id" !== t || !Number.isInteger(Number(r)))
            throw new Error(
              `Invalid target, expected id:number or topic:string, got ${t}:${r}`,
            );
          i.id = Number(r);
        }
        return i;
      }
      function Er(e, t) {
        return (0, D.fromMiliseconds)(
          (t || Date.now()) + (0, D.toMiliseconds)(e),
        );
      }
      function xr(e) {
        return Date.now() >= (0, D.toMiliseconds)(e);
      }
      function Cr(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function Or(e) {
        return e?.relay || { protocol: "irn" };
      }
      function Ir(e) {
        const t = Ht[e];
        if (typeof t > "u")
          throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var Sr = Object.defineProperty,
        Ar = Object.getOwnPropertySymbols,
        Pr = Object.prototype.hasOwnProperty,
        Tr = Object.prototype.propertyIsEnumerable,
        kr = (e, t, r) =>
          t in e
            ? Sr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function Nr(e, t = "-") {
        const r = {},
          i = "relay" + t;
        return (
          Object.keys(e).forEach((t) => {
            if (t.startsWith(i)) {
              const n = t.replace(i, ""),
                o = e[t];
              r[n] = o;
            }
          }),
          r
        );
      }
      function Rr(e) {
        return e.startsWith("//") ? e.substring(2) : e;
      }
      function $r(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, i] = e.split(":");
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const Lr = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        Mr = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function jr(e, t) {
        const { message: r, code: i } = Mr[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Ur(e, t) {
        const { message: r, code: i } = Lr[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Dr(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function Br(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function zr(e) {
        return typeof e > "u";
      }
      function Wr(e, t) {
        return !(!t || !zr(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function Hr(e, t) {
        return !(!t || !zr(e)) || ("number" == typeof e && !isNaN(e));
      }
      function Vr(e) {
        return !(!Wr(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function qr(e) {
        let t = !0;
        return (
          Dr(e) ? e.length && (t = e.every((e) => Wr(e, !1))) : (t = !1), t
        );
      }
      function Fr(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const i = (function (e, t) {
              let r = null;
              return (
                qr(e?.methods)
                  ? qr(e?.events) ||
                    (r = Ur(
                      "UNSUPPORTED_EVENTS",
                      `${t}, events should be an array of strings or empty array for no events`,
                    ))
                  : (r = Ur(
                      "UNSUPPORTED_METHODS",
                      `${t}, methods should be an array of strings or empty array for no methods`,
                    )),
                r
              );
            })(e, `${t}, namespace`);
            i && (r = i);
          }),
          r
        );
      }
      function Kr(e, t) {
        let r = null;
        if (e && Br(e)) {
          const i = Fr(e, t);
          i && (r = i);
          const n = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const i = (function (e, t) {
                  let r = null;
                  return (
                    Dr(e)
                      ? e.forEach((e) => {
                          r ||
                            (function (e) {
                              if (Wr(e, !1) && e.includes(":")) {
                                const t = e.split(":");
                                if (3 === t.length) {
                                  const e = t[0] + ":" + t[1];
                                  return !!t[2] && Vr(e);
                                }
                              }
                              return !1;
                            })(e) ||
                            (r = Ur(
                              "UNSUPPORTED_ACCOUNTS",
                              `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`,
                            ));
                        })
                      : (r = Ur(
                          "UNSUPPORTED_ACCOUNTS",
                          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`,
                        )),
                    r
                  );
                })(e?.accounts, `${t} namespace`);
                i && (r = i);
              }),
              r
            );
          })(e, t);
          n && (r = n);
        } else
          r = jr(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`,
          );
        return r;
      }
      function Gr(e) {
        return Wr(e.protocol, !0);
      }
      function Zr(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function Yr(e, t) {
        return !(
          !Vr(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...$r(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function Jr(e, t, r) {
        let i = null;
        const n = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          o = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  const i = $r(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${i}:`),
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          s = Object.keys(n),
          a = Object.keys(o),
          l = Qr(Object.keys(e)),
          c = Qr(Object.keys(t)),
          h = l.filter((e) => !c.includes(e));
        return (
          h.length &&
            (i = jr(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${h.toString()}\n      Received: ${Object.keys(
                t,
              ).toString()}`,
            )),
          gr(s, a) ||
            (i = jr(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${s.toString()}\n      Approved: ${a.toString()}`,
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || i) return;
            const n = $r(t[e].accounts);
            n.includes(e) ||
              (i = jr(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${n.toString()}`,
              ));
          }),
          s.forEach((e) => {
            i ||
              (gr(n[e].methods, o[e].methods)
                ? gr(n[e].events, o[e].events) ||
                  (i = jr(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`,
                  ))
                : (i = jr(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`,
                  )));
          }),
          i
        );
      }
      function Qr(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function Xr() {
        const e = pr();
        return new Promise((t) => {
          switch (e) {
            case lr.browser:
              t(dr() && navigator?.onLine);
              break;
            case lr.reactNative:
              t(
                (async function () {
                  if (ur() && typeof r.g < "u" && null != r.g && r.g.NetInfo) {
                    const e = await (null == r.g
                      ? void 0
                      : r.g.NetInfo.fetch());
                    return e?.isConnected;
                  }
                  return !0;
                })(),
              );
              break;
            case lr.node:
            default:
              t(!0);
          }
        });
      }
      const ei = {};
      class ti {
        static get(e) {
          return ei[e];
        }
        static set(e, t) {
          ei[e] = t;
        }
        static delete(e) {
          delete ei[e];
        }
      }
      const ri = "INTERNAL_ERROR",
        ii = "SERVER_ERROR",
        ni = [-32700, -32600, -32601, -32602, -32603],
        oi = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [ri]: { code: -32603, message: "Internal error" },
          [ii]: { code: -32e3, message: "Server error" },
        },
        si = ii;
      function ai(e) {
        return Object.keys(oi).includes(e) ? oi[e] : oi[si];
      }
      var li = r(1468);
      function ci(e = 3) {
        return (
          Date.now() * Math.pow(10, e) +
          Math.floor(Math.random() * Math.pow(10, e))
        );
      }
      function hi(e = 6) {
        return BigInt(ci(e));
      }
      function ui(e, t, r) {
        return { id: r || ci(), jsonrpc: "2.0", method: e, params: t };
      }
      function di(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function pi(e, t, r) {
        return { id: e, jsonrpc: "2.0", error: fi(t, r) };
      }
      function fi(e, t) {
        return void 0 === e
          ? ai(ri)
          : ("string" == typeof e &&
              (e = Object.assign(Object.assign({}, ai(ii)), { message: e })),
            void 0 !== t && (e.data = t),
            (r = e.code),
            ni.includes(r) &&
              (e = (function (e) {
                return Object.values(oi).find((t) => t.code === e) || oi[si];
              })(e.code)),
            e);
        var r;
      }
      class gi {}
      class mi extends gi {
        constructor() {
          super();
        }
      }
      class wi extends mi {
        constructor(e) {
          super();
        }
      }
      function yi(e) {
        return (function (e, t) {
          const r = (function (e) {
            const t = e.match(new RegExp(/^\w+:/, "gi"));
            if (t && t.length) return t[0];
          })(e);
          return void 0 !== r && new RegExp(t).test(r);
        })(e, "^wss?:");
      }
      function vi(e) {
        return new RegExp("wss?://localhost(:d{2,5})?").test(e);
      }
      function bi(e) {
        return (
          "object" == typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function _i(e) {
        return bi(e) && "method" in e;
      }
      function Ei(e) {
        return bi(e) && (xi(e) || Ci(e));
      }
      function xi(e) {
        return "result" in e;
      }
      function Ci(e) {
        return "error" in e;
      }
      class Oi extends wi {
        constructor(e) {
          super(e),
            (this.events = new w.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            ui(e.method, e.params || [], e.id || hi().toString()),
            t,
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              Ci(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            Ei(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`,
              ),
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const Ii = (e) => e.split("?")[0],
        Si =
          "undefined" != typeof WebSocket
            ? WebSocket
            : void 0 !== r.g && void 0 !== r.g.WebSocket
            ? r.g.WebSocket
            : "undefined" != typeof window && void 0 !== window.WebSocket
            ? window.WebSocket
            : "undefined" != typeof self && void 0 !== self.WebSocket
            ? self.WebSocket
            : r(2030);
      var Ai = r(2307),
        Pi = r.n(Ai),
        Ti = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var o = e.charAt(n),
              s = o.charCodeAt(0);
            if (255 !== r[s]) throw new TypeError(o + " is ambiguous");
            r[s] = n;
          }
          var a = e.length,
            l = e.charAt(0),
            c = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var i = 0, n = 0; e[t] === l; ) i++, t++;
              for (
                var o = ((e.length - t) * c + 1) >>> 0, s = new Uint8Array(o);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = o - 1;
                  (0 !== h || u < n) && -1 !== d;
                  d--, u++
                )
                  (h += (a * s[d]) >>> 0),
                    (s[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (n = u), t++;
              }
              if (" " !== e[t]) {
                for (var p = o - n; p !== o && 0 === s[p]; ) p++;
                for (var f = new Uint8Array(i + (o - p)), g = i; p !== o; )
                  f[g++] = s[p++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, i = 0, n = 0, o = t.length;
                n !== o && 0 === t[n];

              )
                n++, r++;
              for (
                var s = ((o - n) * h + 1) >>> 0, c = new Uint8Array(s);
                n !== o;

              ) {
                for (
                  var u = t[n], d = 0, p = s - 1;
                  (0 !== u || d < i) && -1 !== p;
                  p--, d++
                )
                  (u += (256 * c[p]) >>> 0),
                    (c[p] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw new Error("Non-zero carry");
                (i = d), n++;
              }
              for (var f = s - i; f !== s && 0 === c[f]; ) f++;
              for (var g = l.repeat(r); f < s; ++f) g += e.charAt(c[f]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var r = u(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        };
      const ki = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class Ni {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class Ri {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`,
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return Li(this, e);
        }
      }
      class $i {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Li(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e,
            )}, only inputs prefixed with ${Object.keys(
              this.decoders,
            )} are supported`,
          );
        }
      }
      const Li = (e, t) =>
        new $i({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class Mi {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new Ni(e, t, r)),
            (this.decoder = new Ri(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const ji = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new Mi(e, t, r, i),
        Ui = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: i, decode: n } = Ti(r, t);
          return ji({ prefix: e, name: t, encode: i, decode: (e) => ki(n(e)) });
        },
        Di = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          ji({
            prefix: t,
            name: e,
            encode: (e) =>
              ((e, t, r) => {
                const i = "=" === t[t.length - 1],
                  n = (1 << r) - 1;
                let o = "",
                  s = 0,
                  a = 0;
                for (let i = 0; i < e.length; ++i)
                  for (a = (a << 8) | e[i], s += 8; s > r; )
                    (s -= r), (o += t[n & (a >> s)]);
                if ((s && (o += t[n & (a << (r - s))]), i))
                  for (; (o.length * r) & 7; ) o += "=";
                return o;
              })(e, i, r),
            decode: (t) =>
              ((e, t, r, i) => {
                const n = {};
                for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                let o = e.length;
                for (; "=" === e[o - 1]; ) --o;
                const s = new Uint8Array(((o * r) / 8) | 0);
                let a = 0,
                  l = 0,
                  c = 0;
                for (let t = 0; t < o; ++t) {
                  const o = n[e[t]];
                  if (void 0 === o) throw new SyntaxError(`Non-${i} character`);
                  (l = (l << r) | o),
                    (a += r),
                    a >= 8 && ((a -= 8), (s[c++] = 255 & (l >> a)));
                }
                if (a >= r || 255 & (l << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return s;
              })(t, i, r, e),
          }),
        Bi = ji({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var zi = Object.freeze({ __proto__: null, identity: Bi });
      const Wi = Di({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var Hi = Object.freeze({ __proto__: null, base2: Wi });
      const Vi = Di({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var qi = Object.freeze({ __proto__: null, base8: Vi });
      const Fi = Ui({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var Ki = Object.freeze({ __proto__: null, base10: Fi });
      const Gi = Di({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Zi = Di({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var Yi = Object.freeze({ __proto__: null, base16: Gi, base16upper: Zi });
      const Ji = Di({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        Qi = Di({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Xi = Di({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        en = Di({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        tn = Di({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        rn = Di({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        nn = Di({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        on = Di({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        sn = Di({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var an = Object.freeze({
        __proto__: null,
        base32: Ji,
        base32upper: Qi,
        base32pad: Xi,
        base32padupper: en,
        base32hex: tn,
        base32hexupper: rn,
        base32hexpad: nn,
        base32hexpadupper: on,
        base32z: sn,
      });
      const ln = Ui({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        cn = Ui({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var hn = Object.freeze({ __proto__: null, base36: ln, base36upper: cn });
      const un = Ui({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        dn = Ui({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var pn = Object.freeze({
        __proto__: null,
        base58btc: un,
        base58flickr: dn,
      });
      const fn = Di({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        gn = Di({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        mn = Di({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        wn = Di({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var yn = Object.freeze({
        __proto__: null,
        base64: fn,
        base64pad: gn,
        base64url: mn,
        base64urlpad: wn,
      });
      const vn = Array.from(
          "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂",
        ),
        bn = vn.reduce((e, t, r) => ((e[r] = t), e), []),
        _n = vn.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        En = ji({
          prefix: "🚀",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => e + bn[t], "");
          },
          decode: function (e) {
            const t = [];
            for (const r of e) {
              const e = _n[r.codePointAt(0)];
              if (void 0 === e)
                throw new Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var xn = Object.freeze({ __proto__: null, base256emoji: En }),
        Cn = 128,
        On = -128,
        In = Math.pow(2, 31),
        Sn = Math.pow(2, 7),
        An = Math.pow(2, 14),
        Pn = Math.pow(2, 21),
        Tn = Math.pow(2, 28),
        kn = Math.pow(2, 35),
        Nn = Math.pow(2, 42),
        Rn = Math.pow(2, 49),
        $n = Math.pow(2, 56),
        Ln = Math.pow(2, 63),
        Mn = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= In; )
            (r[i++] = (255 & t) | Cn), (t /= 128);
          for (; t & On; ) (r[i++] = (255 & t) | Cn), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        jn = function (e) {
          return e < Sn
            ? 1
            : e < An
            ? 2
            : e < Pn
            ? 3
            : e < Tn
            ? 4
            : e < kn
            ? 5
            : e < Nn
            ? 6
            : e < Rn
            ? 7
            : e < $n
            ? 8
            : e < Ln
            ? 9
            : 10;
        };
      const Un = (e, t, r = 0) => (Mn(e, t, r), t),
        Dn = (e) => jn(e),
        Bn = (e, t) => {
          const r = t.byteLength,
            i = Dn(e),
            n = i + Dn(r),
            o = new Uint8Array(n + r);
          return Un(e, o, 0), Un(r, o, i), o.set(t, n), new zn(e, r, t, o);
        };
      class zn {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const Wn = ({ name: e, code: t, encode: r }) => new Hn(e, t, r);
      class Hn {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Bn(this.code, t)
              : t.then((e) => Bn(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const Vn = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        qn = Wn({ name: "sha2-256", code: 18, encode: Vn("SHA-256") }),
        Fn = Wn({ name: "sha2-512", code: 19, encode: Vn("SHA-512") });
      Object.freeze({ __proto__: null, sha256: qn, sha512: Fn });
      const Kn = ki,
        Gn = {
          code: 0,
          name: "identity",
          encode: Kn,
          digest: (e) => Bn(0, Kn(e)),
        };
      Object.freeze({ __proto__: null, identity: Gn }),
        new TextEncoder(),
        new TextDecoder();
      const Zn = {
        ...zi,
        ...Hi,
        ...qi,
        ...Ki,
        ...Yi,
        ...an,
        ...hn,
        ...pn,
        ...yn,
        ...xn,
      };
      function Yn(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function Jn(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const Qn = Jn(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1)),
        ),
        Xn = Jn(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? Yn(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          },
        ),
        eo = {
          utf8: Qn,
          "utf-8": Qn,
          hex: Zn.base16,
          latin1: Xn,
          ascii: Xn,
          binary: Xn,
          ...Zn,
        },
        to = "core",
        ro = `wc@2:${to}:`,
        io = { database: ":memory:" },
        no = "client_ed25519_seed",
        oo = D.ONE_DAY,
        so = D.SIX_HOURS,
        ao = "wss://relay.walletconnect.com",
        lo = "wss://relay.walletconnect.org",
        co = "relayer_message",
        ho = "relayer_message_ack",
        uo = "relayer_connect",
        po = "relayer_disconnect",
        fo = "relayer_connection_stalled",
        go = "relayer_publish",
        mo = "payload",
        wo = "connect",
        yo = "disconnect",
        vo = "error",
        bo = D.ONE_SECOND,
        _o = "subscription_created",
        Eo = "subscription_deleted",
        xo = "subscription_resubscribed",
        Co = 1e3 * D.FIVE_SECONDS,
        Oo = {
          wc_pairingDelete: {
            req: { ttl: D.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: D.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: D.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: D.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        Io = "history_created",
        So = "history_updated",
        Ao = "history_deleted",
        Po = "expirer_created",
        To = "expirer_deleted",
        ko = "expirer_expired",
        No = "verify-api",
        Ro = "https://verify.walletconnect.com",
        $o = "https://verify.walletconnect.org";
      class Lo {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = ro),
            (this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const { message: t } = jr(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`,
                );
                throw new Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, _.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, mr(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? wr(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Mo {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => (
              this.isInitialized(), xt(Ct(await this.getClientSeed()).publicKey)
            )),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const e = (function () {
                const e = At.Au();
                return {
                  privateKey: bt(e.secretKey, Ft),
                  publicKey: bt(e.publicKey, Ft),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              const t = Ct(await this.getClientSeed()),
                r = Zt(),
                i = oo;
              return await (async function (
                e,
                t,
                r,
                i,
                n = (0, D.fromMiliseconds)(Date.now()),
              ) {
                const o = { alg: "EdDSA", typ: "JWT" },
                  s = {
                    iss: xt(i.publicKey),
                    sub: e,
                    aud: t,
                    iat: n,
                    exp: n + r,
                  },
                  a = _t(
                    [
                      Et((l = { header: o, payload: s }).header),
                      Et(l.payload),
                    ].join("."),
                    "utf8",
                  );
                var l;
                return (function (e) {
                  return [
                    Et(e.header),
                    Et(e.payload),
                    ((t = e.signature), bt(t, B)),
                  ].join(".");
                  var t;
                })({ header: o, payload: s, signature: j.Xx(i.secretKey, a) });
              })(r, e, i, t);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              const i = (function (e, t) {
                const r = At.gi(_t(e, Ft), _t(t, Ft));
                return bt(new It.t(St.mE, r).expand(32), Ft);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(i, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              const r =
                t ||
                (function (e) {
                  return bt((0, St.vp)(_t(e, Ft)), Ft);
                })(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              const i = Xt(r),
                n = M(t);
              if (er(i)) {
                const t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const o = this.getSymKey(e),
                { type: s, senderPublicKey: a } = i;
              return (function (e) {
                const t = (function (e) {
                  return _t(`${e}`, qt);
                })(typeof e.type < "u" ? e.type : 0);
                if (1 === Jt(t) && typeof e.senderPublicKey > "u")
                  throw new Error(
                    "Missing sender public key for type 1 envelope",
                  );
                const r =
                    typeof e.senderPublicKey < "u"
                      ? _t(e.senderPublicKey, Ft)
                      : void 0,
                  i = typeof e.iv < "u" ? _t(e.iv, Ft) : (0, U.randomBytes)(12);
                return (function (e) {
                  if (1 === Jt(e.type)) {
                    if (typeof e.senderPublicKey > "u")
                      throw new Error(
                        "Missing sender public key for type 1 envelope",
                      );
                    return bt(
                      Y([e.type, e.senderPublicKey, e.iv, e.sealed]),
                      Kt,
                    );
                  }
                  return bt(Y([e.type, e.iv, e.sealed]), Kt);
                })({
                  type: t,
                  sealed: new Ot.OK(_t(e.symKey, Ft)).seal(
                    i,
                    _t(e.message, Gt),
                  ),
                  iv: i,
                  senderPublicKey: r,
                });
              })({ type: s, symKey: o, message: n, senderPublicKey: a });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              const i = (function (e, t) {
                const r = Qt(e);
                return Xt({
                  type: Jt(r.type),
                  senderPublicKey:
                    typeof r.senderPublicKey < "u"
                      ? bt(r.senderPublicKey, Ft)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (er(i)) {
                const t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                const r = (function (e) {
                  const t = new Ot.OK(_t(e.symKey, Ft)),
                    { sealed: r, iv: i } = Qt(e.encoded),
                    n = t.open(i, r);
                  if (null === n) throw new Error("Failed to decrypt");
                  return bt(n, Gt);
                })({ symKey: this.getSymKey(e), encoded: t });
                return L(r);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`,
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e) => Jt(Qt(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              const t = Qt(e);
              return t.senderPublicKey ? bt(t.senderPublicKey, Ft) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.keychain = r || new Lo(this.core, this.logger));
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(no);
          } catch {
            (e = Zt()), await this.keychain.set(no, e);
          }
          return (function (e, t = "utf8") {
            const r = eo[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return ("utf8" !== t && "utf-8" !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${e}`)
              : Yn(globalThis.Buffer.from(e, "utf-8"));
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class jo extends O {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = ro),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`,
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`,
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              const r = Yt(t);
              let i = this.messages.get(e);
              return (
                typeof i > "u" && (i = {}),
                typeof i[r] < "u" ||
                  ((i[r] = t), this.messages.set(e, i), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), typeof this.get(e)[Yt(t)] < "u"
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, _.generateChildLogger)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, mr(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? wr(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Uo extends I {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new w.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, D.toMiliseconds)(D.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              try {
                const n = r?.ttl || so,
                  o = Or(r),
                  s = r?.prompt || !1,
                  a = r?.tag || 0,
                  l = r?.id || hi().toString(),
                  c = {
                    topic: e,
                    message: t,
                    opts: { ttl: n, relay: o, prompt: s, tag: a, id: l },
                  },
                  h = setTimeout(
                    () => this.queue.set(l, c),
                    this.publishTimeout,
                  );
                try {
                  await await vr(
                    this.rpcPublish(e, t, n, o, s, a, l),
                    this.publishTimeout,
                    "Failed to publish payload, please try again.",
                  ),
                    this.removeRequestFromQueue(l),
                    this.relayer.events.emit(go, c);
                } catch (e) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null != (i = r?.internal) && i.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(l), e);
                  return;
                } finally {
                  clearTimeout(h);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: r },
                  });
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        rpcPublish(e, t, r, i, n, o, s) {
          var a, l, c, h;
          const u = {
            method: Ir(i.protocol).publish,
            params: { topic: e, message: t, ttl: r, prompt: n, tag: o },
            id: s,
          };
          return (
            zr(null == (a = u.params) ? void 0 : a.prompt) &&
              (null == (l = u.params) || delete l.prompt),
            zr(null == (c = u.params) ? void 0 : c.tag) &&
              (null == (h = u.params) || delete h.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: u,
            }),
            this.relayer.request(u)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            const { topic: t, message: r, opts: i } = e;
            await this.publish(t, r, i);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(b.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(fo)
              );
            this.checkQueue();
          }),
            this.relayer.on(ho, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class Do {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const i = r.filter((e) => e !== t);
              i.length ? this.map.set(e, i) : this.map.delete(e);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var Bo = Object.defineProperty,
        zo = Object.defineProperties,
        Wo = Object.getOwnPropertyDescriptors,
        Ho = Object.getOwnPropertySymbols,
        Vo = Object.prototype.hasOwnProperty,
        qo = Object.prototype.propertyIsEnumerable,
        Fo = (e, t, r) =>
          t in e
            ? Bo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ko = (e, t) => {
          for (var r in t || (t = {})) Vo.call(t, r) && Fo(e, r, t[r]);
          if (Ho) for (var r of Ho(t)) qo.call(t, r) && Fo(e, r, t[r]);
          return e;
        },
        Go = (e, t) => zo(e, Wo(t));
      class Zo extends P {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new Do()),
            (this.events = new w.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = ro),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                const r = Or(t),
                  i = { topic: e, relay: r };
                this.pending.set(e, i);
                const n = await this.rpcSubscribe(e, r);
                return (
                  this.onSubscribe(n, i),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  n
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof t?.id < "u"
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) =>
              !!this.topics.includes(e) ||
              (await new Promise((t, r) => {
                const i = new D.Watch();
                i.start(this.pendingSubscriptionWatchLabel);
                const n = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(n),
                    i.stop(this.pendingSubscriptionWatchLabel),
                    t(!0)),
                    i.elapsed(this.pendingSubscriptionWatchLabel) >= Co &&
                      (clearInterval(n),
                      i.stop(this.pendingSubscriptionWatchLabel),
                      r(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t)),
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            const i = Or(r);
            await this.rpcUnsubscribe(e, t, i);
            const n = Ur("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t) {
          const r = { method: Ir(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await vr(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(fo);
          }
          return Yt(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = {
            method: Ir(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await vr(
              this.relayer.request(t),
              this.subscribeTimeout,
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(fo);
          }
        }
        rpcUnsubscribe(e, t, r) {
          const i = {
            method: Ir(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, Go(Ko({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, Ko({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, Ko({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(_o, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = jr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          const r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(Eo, Go(Ko({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit("subscription_sync");
        }
        async reset() {
          if (this.cached.length) {
            const e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit,
            );
            for (let t = 0; t < e; t++) {
              const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(xo);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = jr("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`,
                ),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`,
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          const t = await this.rpcBatchSubscribe(e);
          Dr(t) &&
            this.onBatchSubscribe(t.map((t, r) => Go(Ko({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          const e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(b.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending();
          }),
            this.relayer.on(uo, async () => {
              await this.onConnect();
            }),
            this.relayer.on(po, () => {
              this.onDisconnect();
            }),
            this.events.on(_o, async (e) => {
              const t = _o;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(Eo, async (e) => {
              const t = Eo;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var Yo = Object.defineProperty,
        Jo = Object.getOwnPropertySymbols,
        Qo = Object.prototype.hasOwnProperty,
        Xo = Object.prototype.propertyIsEnumerable,
        es = (e, t, r) =>
          t in e
            ? Yo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      class ts extends S {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new w.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(e)
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(uo);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e), this.events.emit("relayer_error", e);
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(mo, this.onPayloadHandler),
                this.provider.on(wo, this.onConnectHandler),
                this.provider.on(yo, this.onDisconnectHandler),
                this.provider.on(vo, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < "u" && "string" != typeof e.logger
                ? (0, _.generateChildLogger)(e.logger, this.name)
                : (0, _.pino)(
                    (0, _.getDefaultLoggerOptions)({
                      level: e.logger || "error",
                    }),
                  )),
            (this.messages = new jo(this.logger, e.core)),
            (this.subscriber = new Zo(this, this.logger)),
            (this.publisher = new Uo(this, this.logger)),
            (this.relayUrl = e?.relayUrl || ao),
            (this.projectId = e.projectId),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${lo}...`,
            ),
              await this.restartTransport(lo);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport",
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var r;
          this.isInitialized();
          let i =
            (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) ||
            "";
          return (
            i ||
            (await Promise.all([
              new Promise((t) => {
                this.subscriber.once(_o, (r) => {
                  r.topic === e && t();
                });
              }),
              new Promise(async (r) => {
                (i = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            i)
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await vr(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()",
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(e) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  if (!this.initialized) return e();
                  this.subscriber.once(xo, () => {
                    e();
                  });
                }),
                new Promise(async (e, t) => {
                  try {
                    await vr(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`,
                    );
                  } catch (e) {
                    return void t(e);
                  }
                  e();
                }),
              ]);
            } catch (e) {
              this.logger.error(e);
              const t = e;
              if (!this.isConnectionStalled(t.message)) throw e;
              this.provider.events.emit(yo);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(e) {
          await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress &&
              ((this.relayUrl = e || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await Xr()))
            throw new Error(
              "No internet connection detected. Please restart your network and try again.",
            );
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new Oi(
            new (class {
              constructor(e) {
                if (
                  ((this.url = e),
                  (this.events = new w.EventEmitter()),
                  (this.registering = !1),
                  !yi(e))
                )
                  throw new Error(
                    `Provided URL is not compatible with WebSocket connection: ${e}`,
                  );
                this.url = e;
              }
              get connected() {
                return void 0 !== this.socket;
              }
              get connecting() {
                return this.registering;
              }
              on(e, t) {
                this.events.on(e, t);
              }
              once(e, t) {
                this.events.once(e, t);
              }
              off(e, t) {
                this.events.off(e, t);
              }
              removeListener(e, t) {
                this.events.removeListener(e, t);
              }
              async open(e = this.url) {
                await this.register(e);
              }
              async close() {
                return new Promise((e, t) => {
                  void 0 !== this.socket
                    ? ((this.socket.onclose = (t) => {
                        this.onClose(t), e();
                      }),
                      this.socket.close())
                    : t(new Error("Connection already closed"));
                });
              }
              async send(e, t) {
                void 0 === this.socket && (this.socket = await this.register());
                try {
                  this.socket.send(M(e));
                } catch (t) {
                  this.onError(e.id, t);
                }
              }
              register(e = this.url) {
                if (!yi(e))
                  throw new Error(
                    `Provided URL is not compatible with WebSocket connection: ${e}`,
                  );
                if (this.registering) {
                  const e = this.events.getMaxListeners();
                  return (
                    (this.events.listenerCount("register_error") >= e ||
                      this.events.listenerCount("open") >= e) &&
                      this.events.setMaxListeners(e + 1),
                    new Promise((e, t) => {
                      this.events.once("register_error", (e) => {
                        this.resetMaxListeners(), t(e);
                      }),
                        this.events.once("open", () => {
                          if (
                            (this.resetMaxListeners(), void 0 === this.socket)
                          )
                            return t(
                              new Error(
                                "WebSocket connection is missing or invalid",
                              ),
                            );
                          e(this.socket);
                        });
                    })
                  );
                }
                return (
                  (this.url = e),
                  (this.registering = !0),
                  new Promise((t, i) => {
                    const n = (0, li.isReactNative)()
                        ? void 0
                        : { rejectUnauthorized: !vi(e) },
                      o = new Si(e, [], n);
                    "undefined" != typeof WebSocket ||
                    (void 0 !== r.g && void 0 !== r.g.WebSocket) ||
                    ("undefined" != typeof window &&
                      void 0 !== window.WebSocket) ||
                    ("undefined" != typeof self && void 0 !== self.WebSocket)
                      ? (o.onerror = (e) => {
                          const t = e;
                          i(this.emitError(t.error));
                        })
                      : o.on("error", (e) => {
                          i(this.emitError(e));
                        }),
                      (o.onopen = () => {
                        this.onOpen(o), t(o);
                      });
                  })
                );
              }
              onOpen(e) {
                (e.onmessage = (e) => this.onPayload(e)),
                  (e.onclose = (e) => this.onClose(e)),
                  (this.socket = e),
                  (this.registering = !1),
                  this.events.emit("open");
              }
              onClose(e) {
                (this.socket = void 0),
                  (this.registering = !1),
                  this.events.emit("close", e);
              }
              onPayload(e) {
                if (void 0 === e.data) return;
                const t = "string" == typeof e.data ? L(e.data) : e.data;
                this.events.emit("payload", t);
              }
              onError(e, t) {
                const r = this.parseError(t),
                  i = pi(e, r.message || r.toString());
                this.events.emit("payload", i);
              }
              parseError(e, t = this.url) {
                return (function (e, t, r) {
                  return e.message.includes("getaddrinfo ENOTFOUND") ||
                    e.message.includes("connect ECONNREFUSED")
                    ? new Error(`Unavailable WS RPC url at ${t}`)
                    : e;
                })(e, Ii(t));
              }
              resetMaxListeners() {
                this.events.getMaxListeners() > 10 &&
                  this.events.setMaxListeners(10);
              }
              emitError(e) {
                const t = this.parseError(
                  new Error(
                    (null == e ? void 0 : e.message) ||
                      `WebSocket connection failed for host: ${Ii(this.url)}`,
                  ),
                );
                return this.events.emit("register_error", t), t;
              }
            })(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: i,
                auth: n,
                projectId: o,
                useOnCloseEvent: s,
              }) {
                const a = r.split("?"),
                  l = {
                    auth: n,
                    ua: fr(e, t, i),
                    projectId: o,
                    useOnCloseEvent: s || void 0,
                  },
                  c = (function (e, t) {
                    let r = Wt.parse(e);
                    return (r = sr(sr({}, r), t)), Wt.stringify(r);
                  })(a[1] || "", l);
                return a[0] + "?" + c;
              })({
                sdkVersion: "2.10.0",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
              }),
            ),
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          const { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`,
              ),
              !0
            );
          const i = this.messages.has(t, r);
          return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            _i(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
              { topic: r, message: i, publishedAt: n } = t.data,
              o = { topic: r, message: i, publishedAt: n };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((e, t) => {
                  for (var r in t || (t = {})) Qo.call(t, r) && es(e, r, t[r]);
                  if (Jo) for (var r of Jo(t)) Xo.call(t, r) && es(e, r, t[r]);
                  return e;
                })({ type: "event", event: t.id }, o),
              ),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else Ei(e) && this.events.emit(ho, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(co, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          const t = di(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(mo, this.onPayloadHandler),
            this.provider.off(wo, this.onConnectHandler),
            this.provider.off(yo, this.onDisconnectHandler),
            this.provider.off(vo, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(fo, () => {
            this.restartTransport().catch((e) => this.logger.error(e));
          });
          let e = await Xr();
          !(function (e) {
            switch (pr()) {
              case lr.browser:
                !(function (e) {
                  dr() &&
                    (window.addEventListener("online", () => e(!0)),
                    window.addEventListener("offline", () => e(!1)));
                })(e);
                break;
              case lr.reactNative:
                !(function (e) {
                  ur() &&
                    typeof r.g < "u" &&
                    null != r.g &&
                    r.g.NetInfo &&
                    r.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
                })(e);
              case lr.node:
            }
          })(async (t) => {
            this.initialized &&
              e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e),
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((e) =>
                    this.logger.error(e),
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(po), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(
              async () => {
                await this.restartTransport().catch((e) =>
                  this.logger.error(e),
                );
              },
              (0, D.toMiliseconds)(bo),
            ));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((e) => {
                const t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var rs = Object.defineProperty,
        is = Object.getOwnPropertySymbols,
        ns = Object.prototype.hasOwnProperty,
        os = Object.prototype.propertyIsEnumerable,
        ss = (e, t, r) =>
          t in e
            ? rs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        as = (e, t) => {
          for (var r in t || (t = {})) ns.call(t, r) && ss(e, r, t[r]);
          if (is) for (var r of is(t)) os.call(t, r) && ss(e, r, t[r]);
          return e;
        };
      class ls extends A {
        constructor(e, t, r, i = ro, n = void 0) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = ro),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !zr(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null == (t = e?.proposer) ? void 0 : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : (function (e) {
                        return e?.topic;
                      })(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => Pi()(t[r], e[r])),
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              const r = as(as({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          const t = this.map.get(e);
          if (!t) {
            const { message: t } = jr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              const { message: e } = jr("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class cs {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (y())()),
            (this.initialized = !1),
            (this.storagePrefix = ro),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              const e = Zt(),
                t = await this.core.crypto.setSymKey(e),
                r = Er(D.FIVE_MINUTES),
                i = { protocol: "irn" },
                n = { topic: t, expiry: r, relay: i, active: !1 },
                o = (function (e) {
                  return (
                    `${e.protocol}:${e.topic}@${e.version}?` +
                    Wt.stringify(
                      ((e, t) => {
                        for (var r in t || (t = {}))
                          Pr.call(t, r) && kr(e, r, t[r]);
                        if (Ar)
                          for (var r of Ar(t)) Tr.call(t, r) && kr(e, r, t[r]);
                        return e;
                      })(
                        { symKey: e.symKey },
                        (function (e, t = "-") {
                          const r = {};
                          return (
                            Object.keys(e).forEach((i) => {
                              const n = "relay" + t + i;
                              e[i] && (r[n] = e[i]);
                            }),
                            r
                          );
                        })(e.relay),
                      ),
                    )
                  );
                })({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: e,
                  relay: i,
                });
              return (
                await this.pairings.set(t, n),
                await this.core.relayer.subscribe(t),
                this.core.expirer.set(t, r),
                { topic: t, uri: o }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              const {
                topic: t,
                symKey: r,
                relay: i,
              } = (function (e) {
                const t = e.indexOf(":"),
                  r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                  i = e.substring(0, t),
                  n = e.substring(t + 1, r).split("@"),
                  o = typeof r < "u" ? e.substring(r) : "",
                  s = Wt.parse(o);
                return {
                  protocol: i,
                  topic: Rr(n[0]),
                  version: parseInt(n[1], 10),
                  symKey: s.symKey,
                  relay: Nr(s),
                };
              })(e.uri);
              if (this.pairings.keys.includes(t))
                throw new Error(`Pairing already exists: ${t}`);
              if (this.core.crypto.hasKeys(t))
                throw new Error(`Keychain already exists: ${t}`);
              const n = Er(D.FIVE_MINUTES),
                o = { topic: t, relay: i, expiry: n, active: !1 };
              return (
                await this.pairings.set(t, o),
                await this.core.crypto.setSymKey(r, t),
                await this.core.relayer.subscribe(t, { relay: i }),
                this.core.expirer.set(t, n),
                e.activatePairing && (await this.activate({ topic: t })),
                o
              );
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              const t = Er(D.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }),
                this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: n } = yr();
                this.events.once(Cr("pairing_ping", e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  Ur("USER_DISCONNECTED"),
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              const i = ui(t, r),
                n = await this.core.crypto.encode(e, i),
                o = Oo[t].req;
              return (
                this.core.history.set(e, i),
                this.core.relayer.publish(e, n, o),
                i.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const i = di(e, r),
                n = await this.core.crypto.encode(t, i),
                o = await this.core.history.get(t, e),
                s = Oo[o.request.method].res;
              await this.core.relayer.publish(t, n, s),
                await this.core.history.resolve(i);
            }),
            (this.sendError = async (e, t, r) => {
              const i = pi(e, r),
                n = await this.core.crypto.encode(t, i),
                o = await this.core.history.get(t, e),
                s = Oo[o.request.method]
                  ? Oo[o.request.method].res
                  : Oo.unregistered_method.res;
              await this.core.relayer.publish(t, n, s),
                await this.core.history.resolve(i);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, Ur("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e) => xr(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit("pairing_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                xi(t)
                  ? this.events.emit(Cr("pairing_ping", r), {})
                  : Ci(t) &&
                    this.events.emit(Cr("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit("pairing_delete", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              const { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                const t = Ur("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(Ur("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`,
                );
                throw new Error(t);
              }
              if (
                !(function (e) {
                  if (Wr(e, !1))
                    try {
                      return typeof new URL(e) < "u";
                    } catch {
                      return !1;
                    }
                  return !1;
                })(e.uri)
              ) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`,
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!Wr(e, !1)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`,
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = jr(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`,
                );
                throw new Error(t);
              }
              if (xr(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = jr("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.pairings = new ls(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix,
            ));
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(co, async (e) => {
            const { topic: t, message: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r),
              )
            )
              return;
            const i = await this.core.crypto.decode(t, r);
            try {
              _i(i)
                ? (this.core.history.set(t, i),
                  this.onRelayEventRequest({ topic: t, payload: i }))
                : Ei(i) &&
                  (await this.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: t, payload: i }),
                  this.core.history.delete(t, i.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(ko, async (e) => {
            const { topic: t } = _r(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit("pairing_expire", { topic: t }));
          });
        }
      }
      class hs extends C {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new w.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = ro),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              const i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: Er(D.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.events.emit(Io, i);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = Ci(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(So, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < "u" && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(Ao, r);
                  }
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, _.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const r = {
                topic: t.topic,
                request: ui(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = jr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values),
            this.events.emit("history_sync");
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              const { message: e } = jr("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(Io, (e) => {
            const t = Io;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(So, (e) => {
              const t = So;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(Ao, (e) => {
              const t = Ao;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(b.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, D.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class us extends T {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new w.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = ro),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(Po, { target: r, expiration: i });
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(To, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, _.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e)
            return (function (e) {
              return br("topic", e);
            })(e);
          if ("number" == typeof e)
            return (function (e) {
              return br("id", e);
            })(e);
          const { message: t } = jr("UNKNOWN_TYPE", "Target type: " + typeof e);
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values),
            this.events.emit("expirer_sync");
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = jr("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = jr("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: r } = t;
          (0, D.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(ko, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(b.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations(),
          ),
            this.events.on(Po, (e) => {
              const t = Po;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(ko, (e) => {
              const t = ko;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(To, (e) => {
              const t = To;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class ds extends k {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = No),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (e) => {
              if (this.verifyDisabled || ur() || !dr()) return;
              const t = e?.verifyUrl || Ro;
              this.verifyUrl !== t && this.removeIframe(), (this.verifyUrl = t);
              try {
                await this.createIframe();
              } catch (e) {
                this.logger.warn(
                  `Verify iframe failed to load: ${this.verifyUrl}`,
                ),
                  this.logger.warn(e);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = $o);
                try {
                  await this.createIframe();
                } catch (e) {
                  this.logger.error(
                    `Verify iframe failed to load: ${this.verifyUrl}`,
                  ),
                    this.logger.error(e),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (e) => {
              this.initialized
                ? this.sendPost(e.attestationId)
                : (this.addToQueue(e.attestationId), await this.init());
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              const t = e?.verifyUrl || Ro;
              let r = "";
              try {
                r = await this.fetchAttestation(e.attestationId, t);
              } catch (i) {
                this.logger.warn(
                  `failed to resolve attestation: ${e.attestationId} from url: ${t}`,
                ),
                  this.logger.warn(i),
                  (r = await this.fetchAttestation(e.attestationId, $o));
              }
              return r;
            }),
            (this.fetchAttestation = async (e, t) => {
              var r;
              this.logger.info(`resolving attestation: ${e} from url: ${t}`);
              const i = this.startAbortTimer(2 * D.ONE_SECOND),
                n = await fetch(`${t}/attestation/${e}`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(i),
                200 === n.status
                  ? null == (r = await n.json())
                    ? void 0
                    : r.origin
                  : ""
              );
            }),
            (this.addToQueue = (e) => {
              this.queue.push(e);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((e) => this.sendPost(e)),
                (this.queue = []));
            }),
            (this.sendPost = (e) => {
              var t;
              try {
                if (!this.iframe) return;
                null == (t = this.iframe.contentWindow) ||
                  t.postMessage(e, "*"),
                  this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = async () => {
              let e;
              const t = (r) => {
                "verify_ready" === r.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", t),
                  e());
              };
              await Promise.race([
                new Promise((r) => {
                  if (document.getElementById(No)) return r();
                  window.addEventListener("message", t);
                  const i = document.createElement("iframe");
                  (i.id = No),
                    (i.src = `${this.verifyUrl}/${this.projectId}`),
                    (i.style.display = "none"),
                    document.body.append(i),
                    (this.iframe = i),
                    (e = r);
                }),
                new Promise((e, r) =>
                  setTimeout(
                    () => {
                      window.removeEventListener("message", t),
                        r("verify iframe load timeout");
                    },
                    (0, D.toMiliseconds)(D.FIVE_SECONDS),
                  ),
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.verifyUrl = Ro),
            (this.abortController = new AbortController()),
            (this.isDevEnv = hr() && process.env.IS_VITEST);
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, D.toMiliseconds)(e),
            )
          );
        }
      }
      var ps = Object.defineProperty,
        fs = Object.getOwnPropertySymbols,
        gs = Object.prototype.hasOwnProperty,
        ms = Object.prototype.propertyIsEnumerable,
        ws = (e, t, r) =>
          t in e
            ? ps(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ys = (e, t) => {
          for (var r in t || (t = {})) gs.call(t, r) && ws(e, r, t[r]);
          if (fs) for (var r of fs(t)) ms.call(t, r) && ws(e, r, t[r]);
          return e;
        };
      class vs extends x {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = to),
            (this.events = new w.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || ao);
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : (0, _.pino)(
                  (0, _.getDefaultLoggerOptions)({
                    level: e?.logger || "error",
                  }),
                );
          (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.heartbeat = new b.HeartBeat()),
            (this.crypto = new Mo(this, this.logger, e?.keychain)),
            (this.history = new hs(this, this.logger)),
            (this.expirer = new us(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new v.ZP(ys(ys({}, io), e?.storageOptions))),
            (this.relayer = new ts({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new cs(this, this.logger)),
            (this.verify = new ds(this.projectId || "", this.logger));
        }
        static async init(e) {
          const t = new vs(e);
          await t.initialize();
          const r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e,
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      const bs = vs,
        _s = "client",
        Es = `wc@2:${_s}:`,
        xs = _s,
        Cs = "WALLETCONNECT_DEEPLINK_CHOICE",
        Os = D.SEVEN_DAYS,
        Is = {
          wc_sessionPropose: {
            req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: D.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: D.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: D.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: D.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: D.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: D.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        Ss = { min: D.FIVE_MINUTES, max: D.SEVEN_DAYS },
        As = "IDLE",
        Ps = "ACTIVE",
        Ts = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var ks = Object.defineProperty,
        Ns = Object.defineProperties,
        Rs = Object.getOwnPropertyDescriptors,
        $s = Object.getOwnPropertySymbols,
        Ls = Object.prototype.hasOwnProperty,
        Ms = Object.prototype.propertyIsEnumerable,
        js = (e, t, r) =>
          t in e
            ? ks(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Us = (e, t) => {
          for (var r in t || (t = {})) Ls.call(t, r) && js(e, r, t[r]);
          if ($s) for (var r of $s(t)) Ms.call(t, r) && js(e, r, t[r]);
          return e;
        },
        Ds = (e, t) => Ns(e, Rs(t));
      class Bs extends R {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (y())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.requestQueue = { state: As, queue: [] }),
            (this.sessionRequestQueue = { state: As, queue: [] }),
            (this.requestQueueDelay = D.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.client.core.pairing.register({ methods: Object.keys(Is) }),
                (this.initialized = !0),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.queue =
                      this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  },
                  (0, D.toMiliseconds)(this.requestQueueDelay),
                ));
            }),
            (this.connect = async (e) => {
              await this.isInitialized();
              const t = Ds(Us({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: n,
                sessionProperties: o,
                relays: s,
              } = t;
              let a,
                l = r,
                c = !1;
              if (
                (l && (c = this.client.core.pairing.pairings.get(l).active),
                !l || !c)
              ) {
                const { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (l = e), (a = t);
              }
              const h = await this.client.core.crypto.generateKeyPair(),
                u = Us(
                  {
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    relays: s ?? [{ protocol: "irn" }],
                    proposer: { publicKey: h, metadata: this.client.metadata },
                  },
                  o && { sessionProperties: o },
                ),
                {
                  reject: d,
                  resolve: p,
                  done: f,
                } = yr(D.FIVE_MINUTES, "Proposal expired");
              if (
                (this.events.once(
                  Cr("session_connect"),
                  async ({ error: e, session: t }) => {
                    if (e) d(e);
                    else if (t) {
                      t.self.publicKey = h;
                      const e = Ds(Us({}, t), {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                      });
                      await this.client.session.set(t.topic, e),
                        await this.setExpiry(t.topic, t.expiry),
                        l &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: l,
                            metadata: t.peer.metadata,
                          })),
                        p(e);
                    }
                  },
                ),
                !l)
              ) {
                const { message: e } = jr(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${l}`,
                );
                throw new Error(e);
              }
              const g = await this.sendRequest({
                  topic: l,
                  method: "wc_sessionPropose",
                  params: u,
                }),
                m = Er(D.FIVE_MINUTES);
              return (
                await this.setProposal(g, Us({ id: g, expiry: m }, u)),
                { uri: a, approval: f }
              );
            }),
            (this.pair = async (e) => (
              await this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              await this.isInitialized(), await this.isValidApprove(e);
              const {
                  id: t,
                  relayProtocol: r,
                  namespaces: i,
                  sessionProperties: n,
                } = e,
                o = this.client.proposal.get(t);
              let {
                pairingTopic: s,
                proposer: a,
                requiredNamespaces: l,
                optionalNamespaces: c,
              } = o;
              (s = s || ""),
                Br(l) ||
                  (l = (function (e, t) {
                    const r = Kr(e, "approve()");
                    if (r) throw new Error(r.message);
                    const i = {};
                    for (const [t, r] of Object.entries(e))
                      i[t] = {
                        methods: r.methods,
                        events: r.events,
                        chains: r.accounts.map(
                          (e) => `${e.split(":")[0]}:${e.split(":")[1]}`,
                        ),
                      };
                    return i;
                  })(i));
              const h = await this.client.core.crypto.generateKeyPair(),
                u = a.publicKey,
                d = await this.client.core.crypto.generateSharedKey(h, u);
              s &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: s,
                  metadata: a.metadata,
                }),
                await this.sendResult({
                  id: t,
                  topic: s,
                  result: {
                    relay: { protocol: r ?? "irn" },
                    responderPublicKey: h,
                  },
                }),
                await this.client.proposal.delete(t, Ur("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: s }));
              const p = Us(
                {
                  relay: { protocol: r ?? "irn" },
                  namespaces: i,
                  requiredNamespaces: l,
                  optionalNamespaces: c,
                  pairingTopic: s,
                  controller: { publicKey: h, metadata: this.client.metadata },
                  expiry: Er(Os),
                },
                n && { sessionProperties: n },
              );
              await this.client.core.relayer.subscribe(d),
                await this.sendRequest({
                  topic: d,
                  method: "wc_sessionSettle",
                  params: p,
                  throwOnFailedPublish: !0,
                });
              const f = Ds(Us({}, p), {
                topic: d,
                pairingTopic: s,
                acknowledged: !1,
                self: p.controller,
                peer: { publicKey: a.publicKey, metadata: a.metadata },
                controller: h,
              });
              return (
                await this.client.session.set(d, f),
                await this.setExpiry(d, Er(Os)),
                {
                  topic: d,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(d)), 500),
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              await this.isInitialized(), await this.isValidReject(e);
              const { id: t, reason: r } = e,
                { pairingTopic: i } = this.client.proposal.get(t);
              i &&
                (await this.sendError(t, i, r),
                await this.client.proposal.delete(t, Ur("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              await this.isInitialized(), await this.isValidUpdate(e);
              const { topic: t, namespaces: r } = e,
                i = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                }),
                { done: n, resolve: o, reject: s } = yr();
              return (
                this.events.once(Cr("session_update", i), ({ error: e }) => {
                  e ? s(e) : o();
                }),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: n }
              );
            }),
            (this.extend = async (e) => {
              await this.isInitialized(), await this.isValidExtend(e);
              const { topic: t } = e,
                r = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: i, resolve: n, reject: o } = yr();
              return (
                this.events.once(Cr("session_extend", r), ({ error: e }) => {
                  e ? o(e) : n();
                }),
                await this.setExpiry(t, Er(Os)),
                { acknowledged: i }
              );
            }),
            (this.request = async (e) => {
              await this.isInitialized(), await this.isValidRequest(e);
              const { chainId: t, request: i, topic: n, expiry: o } = e,
                s = ci(),
                { done: a, resolve: l, reject: c } = yr(o);
              return (
                this.events.once(
                  Cr("session_request", s),
                  ({ error: e, result: t }) => {
                    e ? c(e) : l(t);
                  },
                ),
                await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: s,
                      topic: n,
                      method: "wc_sessionRequest",
                      params: { request: i, chainId: t },
                      expiry: o,
                      throwOnFailedPublish: !0,
                    }).catch((e) => c(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: n,
                        request: i,
                        chainId: t,
                        id: s,
                      }),
                      e();
                  }),
                  new Promise(async (e) => {
                    const t = await this.client.core.storage.getItem(Cs);
                    (async function ({ id: e, topic: t, wcDeepLink: i }) {
                      try {
                        if (!i) return;
                        const n = "string" == typeof i ? JSON.parse(i) : i;
                        let o = n?.href;
                        if ("string" != typeof o) return;
                        o.endsWith("/") && (o = o.slice(0, -1));
                        const s = `${o}/wc?requestId=${e}&sessionTopic=${t}`,
                          a = pr();
                        a === lr.browser
                          ? s.startsWith("https://")
                            ? window.open(s, "_blank", "noreferrer noopener")
                            : window.open(s, "_self", "noreferrer noopener")
                          : a === lr.reactNative &&
                            typeof (null == r.g ? void 0 : r.g.Linking) < "u" &&
                            (await r.g.Linking.openURL(s));
                      } catch (e) {
                        console.error(e);
                      }
                    })({ id: s, topic: n, wcDeepLink: t }),
                      e();
                  }),
                  a(),
                ]).then((e) => e[2])
              );
            }),
            (this.respond = async (e) => {
              await this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: i } = r;
              xi(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                  })
                : Ci(r) && (await this.sendError(i, t, r.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              await this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: r, resolve: i, reject: n } = yr();
                this.events.once(Cr("session_ping", e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              await this.isInitialized(), await this.isValidEmit(e);
              const { topic: t, event: r, chainId: i } = e;
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
              });
            }),
            (this.disconnect = async (e) => {
              await this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.client.session.keys.includes(t)
                ? (await this.sendRequest({
                    topic: t,
                    method: "wc_sessionDelete",
                    params: Ur("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0,
                  }),
                  await this.deleteSession(t))
                : await this.client.core.pairing.disconnect({ topic: t });
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  const { requiredNamespaces: r } = t,
                    i = Object.keys(e.namespaces),
                    n = Object.keys(r);
                  let o = !0;
                  return (
                    !!gr(n, i) &&
                    (i.forEach((t) => {
                      const {
                          accounts: i,
                          methods: n,
                          events: s,
                        } = e.namespaces[t],
                        a = $r(i),
                        l = r[t];
                      (gr(Vt(t, l), a) &&
                        gr(l.methods, n) &&
                        gr(l.events, s)) ||
                        (o = !1);
                    }),
                    o)
                  );
                })(t, e),
              )
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(
                      e.pairingTopic,
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, n;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (n = r.peerMetadata) ? void 0 : n.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`,
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic }),
                      ),
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished",
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e, t) => {
              const { self: r } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                this.client.session.delete(e, Ur("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(r.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(r.publicKey)),
                this.client.core.crypto.keychain.has(e) &&
                  (await this.client.core.crypto.deleteSymKey(e)),
                t || this.client.core.expirer.del(e),
                this.client.core.storage
                  .removeItem(Cs)
                  .catch((e) => this.client.logger.warn(e));
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, Ur("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                r && (this.sessionRequestQueue.state = As);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(e, t.expiry);
            }),
            (this.setPendingSessionRequest = async (e) => {
              const t = Is.wc_sessionRequest.req.ttl,
                { id: r, topic: i, params: n } = e;
              await this.client.pendingRequest.set(r, {
                id: r,
                topic: i,
                params: n,
              }),
                t && this.client.core.expirer.set(r, Er(t));
            }),
            (this.sendRequest = async (e) => {
              const {
                  topic: t,
                  method: r,
                  params: i,
                  expiry: n,
                  relayRpcId: o,
                  clientRpcId: s,
                  throwOnFailedPublish: a,
                } = e,
                l = ui(r, i, s);
              if (dr() && Ts.includes(r)) {
                const e = Yt(JSON.stringify(l));
                this.client.core.verify.register({ attestationId: e });
              }
              const c = await this.client.core.crypto.encode(t, l),
                h = Is[r].req;
              return (
                n && (h.ttl = n),
                o && (h.id = o),
                this.client.core.history.set(t, l),
                a
                  ? ((h.internal = Ds(Us({}, h.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(t, c, h))
                  : this.client.core.relayer
                      .publish(t, c, h)
                      .catch((e) => this.client.logger.error(e)),
                l.id
              );
            }),
            (this.sendResult = async (e) => {
              const { id: t, topic: r, result: i, throwOnFailedPublish: n } = e,
                o = di(t, i),
                s = await this.client.core.crypto.encode(r, o),
                a = await this.client.core.history.get(r, t),
                l = Is[a.request.method].res;
              n
                ? ((l.internal = Ds(Us({}, l.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(r, s, l))
                : this.client.core.relayer
                    .publish(r, s, l)
                    .catch((e) => this.client.logger.error(e)),
                await this.client.core.history.resolve(o);
            }),
            (this.sendError = async (e, t, r) => {
              const i = pi(e, r),
                n = await this.client.core.crypto.encode(t, i),
                o = await this.client.core.history.get(t, e),
                s = Is[o.request.method].res;
              this.client.core.relayer.publish(t, n, s),
                await this.client.core.history.resolve(i);
            }),
            (this.cleanup = async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                xr(t.expiry) && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  xr(e.expiry) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession(e)),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state !== Ps) {
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`,
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = Ps;
                  const e = this.requestQueue.queue.shift();
                  if (e)
                    try {
                      this.processRequest(e),
                        await new Promise((e) => setTimeout(e, 300));
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = As;
              } else
                this.client.logger.info(
                  "Request queue already active, skipping...",
                );
            }),
            (this.processRequest = (e) => {
              const { topic: t, payload: r } = e,
                i = r.method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${i}`,
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                i = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${i}`,
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              const { topic: t } = e,
                { message: r } = jr(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`,
                );
              throw new Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              const { params: r, id: i } = t;
              try {
                this.isValidConnect(Us({}, t.params));
                const n = Er(D.FIVE_MINUTES),
                  o = Us({ id: i, pairingTopic: e, expiry: n }, r);
                await this.setProposal(i, o);
                const s = Yt(JSON.stringify(t)),
                  a = await this.getVerifyContext(s, o.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: i,
                  params: o,
                  verifyContext: a,
                });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              const { id: r } = t;
              if (xi(t)) {
                const { result: i } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: i,
                });
                const n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                const o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: o,
                });
                const s = i.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: s,
                });
                const a = await this.client.core.crypto.generateSharedKey(o, s);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const l = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                Ci(t) &&
                  (await this.client.proposal.delete(
                    r,
                    Ur("USER_DISCONNECTED"),
                  ),
                  this.events.emit(Cr("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              const { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                const {
                    relay: r,
                    controller: n,
                    expiry: o,
                    namespaces: s,
                    requiredNamespaces: a,
                    optionalNamespaces: l,
                    sessionProperties: c,
                    pairingTopic: h,
                  } = t.params,
                  u = Us(
                    {
                      topic: e,
                      relay: r,
                      expiry: o,
                      namespaces: s,
                      acknowledged: !0,
                      pairingTopic: h,
                      requiredNamespaces: a,
                      optionalNamespaces: l,
                      controller: n.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: n.publicKey, metadata: n.metadata },
                    },
                    c && { sessionProperties: c },
                  );
                await this.sendResult({ id: t.id, topic: e, result: !0 }),
                  this.events.emit(Cr("session_connect"), { session: u }),
                  this.cleanupDuplicatePairings(u);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              const { id: r } = t;
              xi(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(Cr("session_approve", r), {}))
                : Ci(t) &&
                  (await this.client.session.delete(e, Ur("USER_DISCONNECTED")),
                  this.events.emit(Cr("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              const { params: r, id: i } = t;
              try {
                const t = `${e}_session_update`,
                  n = ti.get(t);
                if (n && this.isRequestOutOfSync(n, i))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${i}`,
                  );
                this.isValidUpdate(Us({ topic: e }, r)),
                  await this.client.session.update(e, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult({ id: i, topic: e, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  ti.set(t, i);
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              const { id: r } = t;
              xi(t)
                ? this.events.emit(Cr("session_update", r), {})
                : Ci(t) &&
                  this.events.emit(Cr("session_update", r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, Er(Os)),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              const { id: r } = t;
              xi(t)
                ? this.events.emit(Cr("session_extend", r), {})
                : Ci(t) &&
                  this.events.emit(Cr("session_extend", r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                xi(t)
                  ? this.events.emit(Cr("session_ping", r), {})
                  : Ci(t) &&
                    this.events.emit(Cr("session_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(go, async () => {
                        t(await this.deleteSession(e));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0 }),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: r,
                    topic: e,
                  });
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              const { id: r, params: i } = t;
              try {
                this.isValidRequest(Us({ topic: e }, i)),
                  await this.setPendingSessionRequest({
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  this.addSessionRequestToSessionRequestQueue({
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  await this.processSessionRequestQueue();
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              const { id: r } = t;
              xi(t)
                ? this.events.emit(Cr("session_request", r), {
                    result: t.result,
                  })
                : Ci(t) &&
                  this.events.emit(Cr("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              const { id: r, params: i } = t;
              try {
                const t = `${e}_session_event_${i.event.name}`,
                  n = ti.get(t);
                if (n && this.isRequestOutOfSync(n, r))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${r}`,
                  );
                this.isValidEmit(Us({ topic: e }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  ti.set(t, r);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = As),
                      this.processSessionRequestQueue();
                  },
                  (0, D.toMiliseconds)(this.requestQueueDelay),
                );
            }),
            (this.processSessionRequestQueue = async () => {
              if (this.sessionRequestQueue.state === Ps)
                return void this.client.logger.info(
                  "session request queue is already active.",
                );
              const e = this.sessionRequestQueue.queue[0];
              if (e)
                try {
                  const { id: t, topic: r, params: i } = e,
                    n = Yt(JSON.stringify(ui("wc_sessionRequest", i, t))),
                    o = this.client.session.get(r),
                    s = await this.getVerifyContext(n, o.peer.metadata);
                  (this.sessionRequestQueue.state = Ps),
                    this.client.events.emit("session_request", {
                      id: t,
                      topic: r,
                      params: i,
                      verifyContext: s,
                    });
                } catch (e) {
                  this.client.logger.error(e);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.isValidConnect = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`,
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: n,
                relays: o,
              } = e;
              if (
                (zr(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    e
                      ? e &&
                        Dr(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = Gr(e);
                        })
                      : (r = !0),
                    r
                  );
                })(o))
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`,
                );
                throw new Error(e);
              }
              !zr(r) &&
                0 !== Br(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !zr(i) &&
                  0 !== Br(i) &&
                  this.validateNamespaces(i, "optionalNamespaces"),
                zr(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              const r = (function (e, t, r) {
                let i = null;
                if (e && Br(e)) {
                  const n = Fr(e, t);
                  n && (i = n);
                  const o = (function (e, t, r) {
                    let i = null;
                    return (
                      Object.entries(e).forEach(([e, n]) => {
                        if (i) return;
                        const o = (function (e, t, r) {
                          let i = null;
                          return (
                            Dr(t) && t.length
                              ? t.forEach((e) => {
                                  i ||
                                    Vr(e) ||
                                    (i = Ur(
                                      "UNSUPPORTED_CHAINS",
                                      `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`,
                                    ));
                                })
                              : Vr(e) ||
                                (i = Ur(
                                  "UNSUPPORTED_CHAINS",
                                  `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`,
                                )),
                            i
                          );
                        })(e, Vt(e, n), `${t} ${r}`);
                        o && (i = o);
                      }),
                      i
                    );
                  })(e, t, r);
                  o && (i = o);
                } else
                  i = jr(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`,
                  );
                return i;
              })(e, "connect()", t);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!Zr(e))
                throw new Error(
                  jr("MISSING_OR_INVALID", `approve() params: ${e}`).message,
                );
              const {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n,
              } = e;
              await this.isValidProposalId(t);
              const o = this.client.proposal.get(t),
                s = Kr(r, "approve()");
              if (s) throw new Error(s.message);
              const a = Jr(o.requiredNamespaces, r, "approve()");
              if (a) throw new Error(a.message);
              if (!Wr(i, !0)) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${i}`,
                );
                throw new Error(e);
              }
              zr(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`,
                );
                throw new Error(t);
              }
              const { id: t, reason: r } = e;
              if (
                (await this.isValidProposalId(t),
                !(function (e) {
                  return !!(
                    e &&
                    "object" == typeof e &&
                    e.code &&
                    Hr(e.code, !1) &&
                    e.message &&
                    Wr(e.message, !1)
                  );
                })(r))
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`,
                );
                throw new Error(t);
              }
              const { relay: t, controller: r, namespaces: i, expiry: n } = e;
              if (!Gr(t)) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string",
                );
                throw new Error(e);
              }
              const o = (function (e, t) {
                let r = null;
                return (
                  Wr(e?.publicKey, !1) ||
                    (r = jr(
                      "MISSING_OR_INVALID",
                      "onSessionSettleRequest() controller public key should be a string",
                    )),
                  r
                );
              })(r);
              if (o) throw new Error(o.message);
              const s = Kr(i, "onSessionSettleRequest()");
              if (s) throw new Error(s.message);
              if (xr(n)) {
                const { message: e } = jr(
                  "EXPIRED",
                  "onSessionSettleRequest()",
                );
                throw new Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              const i = this.client.session.get(t),
                n = Kr(r, "update()");
              if (n) throw new Error(n.message);
              const o = Jr(i.requiredNamespaces, r, "update()");
              if (o) throw new Error(o.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, request: r, chainId: i, expiry: n } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: o } = this.client.session.get(t);
              if (!Yr(o, i)) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${i}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(zr(e) || !Wr(e.method, !1));
                })(r)
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!Wr(r, !1) &&
                    (function (e, t) {
                      const r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          $r(e.accounts).includes(t) && r.push(...e.methods);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(o, i, r.method)
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`,
                );
                throw new Error(e);
              }
              if (
                n &&
                !(function (e, t) {
                  return Hr(e, !1) && e <= t.max && e >= t.min;
                })(n, Ss)
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${Ss.min} and ${Ss.max}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, response: r } = e;
              if (
                (await this.isValidSessionTopic(t),
                !(function (e) {
                  return !(
                    zr(e) ||
                    (zr(e.result) && zr(e.error)) ||
                    !Hr(e.id, !1) ||
                    !Wr(e.jsonrpc, !1)
                  );
                })(r))
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: n } = this.client.session.get(t);
              if (!Yr(n, i)) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${i}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(zr(e) || !Wr(e.name, !1));
                })(r)
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!Wr(r, !1) &&
                    (function (e, t) {
                      const r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          $r(e.accounts).includes(t) && r.push(...e.events);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(n, i, r.name)
              ) {
                const { message: e } = jr(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Zr(e)) {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              const r = {
                verified: {
                  verifyUrl: t.verifyUrl || Ro,
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                const i = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                i &&
                  ((r.verified.origin = i),
                  (r.verified.validation =
                    i === new URL(t.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.error(e);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!Wr(e, !1)) {
                  const { message: r } = jr(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e,
                    )}`,
                  );
                  throw new Error(r);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            const { message: e } = jr("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(co, async (e) => {
            const { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r),
              )
            )
              return;
            const i = await this.client.core.crypto.decode(t, r);
            try {
              _i(i)
                ? (this.client.core.history.set(t, i),
                  this.onRelayEventRequest({ topic: t, payload: i }))
                : Ei(i)
                ? (await this.client.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: t, payload: i }),
                  this.client.core.history.delete(t, i.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: i });
            } catch (e) {
              this.client.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(ko, async (e) => {
            const { topic: t, id: r } = _r(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                jr("EXPIRED"),
                !0,
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession(t, !0),
                this.client.events.emit("session_expire", { topic: t }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        isValidPairingTopic(e) {
          if (!Wr(e, !1)) {
            const { message: t } = jr(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = jr(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if (xr(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = jr("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!Wr(e, !1)) {
            const { message: t } = jr(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            const { message: t } = jr(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if (xr(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            const { message: t } = jr("EXPIRED", `session topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if (Wr(e, !1)) {
                const { message: t } = jr(
                  "NO_MATCHING_KEY",
                  `session or pairing topic doesn't exist: ${e}`,
                );
                throw new Error(t);
              }
              {
                const { message: t } = jr(
                  "MISSING_OR_INVALID",
                  `session or pairing topic should be a string: ${e}`,
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            const { message: t } = jr(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = jr(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if (xr(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            const { message: t } = jr("EXPIRED", `proposal id: ${e}`);
            throw new Error(t);
          }
        }
      }
      class zs extends ls {
        constructor(e, t) {
          super(e, t, "proposal", Es), (this.core = e), (this.logger = t);
        }
      }
      class Ws extends ls {
        constructor(e, t) {
          super(e, t, "session", Es), (this.core = e), (this.logger = t);
        }
      }
      class Hs extends ls {
        constructor(e, t) {
          super(e, t, "request", Es, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class Vs extends N {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = xs),
            (this.events = new w.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || xs),
            (this.metadata = e?.metadata ||
              (0, zt.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : (0, _.pino)(
                  (0, _.getDefaultLoggerOptions)({
                    level: e?.logger || "error",
                  }),
                );
          (this.core = e?.core || new bs(e)),
            (this.logger = (0, _.generateChildLogger)(t, this.name)),
            (this.session = new Ws(this.core, this.logger)),
            (this.proposal = new zs(this.core, this.logger)),
            (this.pendingRequest = new Hs(this.core, this.logger)),
            (this.engine = new Bs(this));
        }
        static async init(e) {
          const t = new Vs(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, _.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
    },
    6900: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4);
      i.__exportStar(r(6869), t), i.__exportStar(r(8033), t);
    },
    6869: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    8033: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    6736: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4);
      i.__exportStar(r(4273), t),
        i.__exportStar(r(7001), t),
        i.__exportStar(r(2939), t),
        i.__exportStar(r(6900), t);
    },
    2939: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(4).__exportStar(r(8766), t);
    },
    8766: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0),
        (t.IWatch = class {});
    },
    3207: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      const i = r(6900);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    3873: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    4273: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4);
      i.__exportStar(r(3873), t), i.__exportStar(r(3207), t);
    },
    7001: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e))
            throw new Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          const t = this.get(e);
          if (void 0 !== t.elapsed)
            throw new Error(`Watch already stopped for label: ${e}`);
          const r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          const t = this.timestamps.get(e);
          if (void 0 === t)
            throw new Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          const t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    4: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => o,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => y,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => I,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => C,
          __importStar: () => x,
          __makeTemplateObject: () => E,
          __metadata: () => c,
          __param: () => l,
          __read: () => g,
          __rest: () => s,
          __spread: () => m,
          __spreadArrays: () => w,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function s(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
        return o > 3 && s && Object.defineProperty(t, r, s), s;
      }
      function l(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function c(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, o) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          l((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (n = (n = s.trys).length > 0 && n[n.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        (s.label = n[1]), (n = o);
                        break;
                      }
                      if (n && s.label < n[2]) {
                        (s.label = n[2]), s.ops.push(o);
                        break;
                      }
                      n[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
            s.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return s;
      }
      function m() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++)
            i[n] = o[s];
        return i;
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          o = [];
        return (
          (i = {}),
          s("next"),
          s("throw"),
          s("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function s(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                o.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof y
              ? Promise.resolve(r.value.v).then(l, c)
              : h(o[0][2], r);
          } catch (e) {
            h(o[0][3], e);
          }
          var r;
        }
        function l(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: y(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function I(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    2873: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function i(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    5755: (e, t, r) => {
      "use strict";
      t.D = void 0;
      const i = r(2873);
      t.D = function () {
        let e, t;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function r(...t) {
          const r = e.getElementsByTagName("meta");
          for (let e = 0; e < r.length; e++) {
            const i = r[e],
              n = ["itemprop", "property", "name"]
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (n.length && n) {
              const e = i.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        const n = (function () {
          let t = r("name", "og:site_name", "og:title", "twitter:title");
          return t || (t = e.title), t;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords",
          ),
          url: t.origin,
          icons: (function () {
            const r = e.getElementsByTagName("link"),
              i = [];
            for (let e = 0; e < r.length; e++) {
              const n = r[e],
                o = n.getAttribute("rel");
              if (o && o.toLowerCase().indexOf("icon") > -1) {
                const e = n.getAttribute("href");
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      const i = t.pathname.split("/");
                      i.pop(), (r += i.join("/") + "/" + e);
                    }
                    i.push(r);
                  } else if (0 === e.indexOf("//")) {
                    const r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
              }
            }
            return i;
          })(),
          name: n,
        };
      };
    },
    4249: (e, t, r) => {
      const i = r(5293),
        n = r(6999),
        o = r(1250),
        s = r(8390);
      function a(e, t, r, o, s) {
        const a = [].slice.call(arguments, 1),
          l = a.length,
          c = "function" == typeof a[l - 1];
        if (!c && !i()) throw new Error("Callback required as last argument");
        if (!c) {
          if (l < 1) throw new Error("Too few arguments provided");
          return (
            1 === l
              ? ((r = t), (t = o = void 0))
              : 2 !== l || t.getContext || ((o = r), (r = t), (t = void 0)),
            new Promise(function (i, s) {
              try {
                const s = n.create(r, o);
                i(e(s, t, o));
              } catch (e) {
                s(e);
              }
            })
          );
        }
        if (l < 2) throw new Error("Too few arguments provided");
        2 === l
          ? ((s = r), (r = t), (t = o = void 0))
          : 3 === l &&
            (t.getContext && void 0 === s
              ? ((s = o), (o = void 0))
              : ((s = o), (o = r), (r = t), (t = void 0)));
        try {
          const i = n.create(r, o);
          s(null, e(i, t, o));
        } catch (e) {
          s(e);
        }
      }
      (t.create = n.create),
        (t.toCanvas = a.bind(null, o.render)),
        (t.toDataURL = a.bind(null, o.renderToDataURL)),
        (t.toString = a.bind(null, function (e, t, r) {
          return s.render(e, r);
        }));
    },
    5293: (e) => {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    1201: (e, t, r) => {
      const i = r(7052).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        const t = Math.floor(e / 7) + 2,
          r = i(e),
          n = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)),
          o = [r - 7];
        for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - n;
        return o.push(6), o.reverse();
      }),
        (t.getPositions = function (e) {
          const r = [],
            i = t.getRowColCoords(e),
            n = i.length;
          for (let e = 0; e < n; e++)
            for (let t = 0; t < n; t++)
              (0 === e && 0 === t) ||
                (0 === e && t === n - 1) ||
                (e === n - 1 && 0 === t) ||
                r.push([i[e], i[t]]);
          return r;
        });
    },
    4691: (e, t, r) => {
      const i = r(1730),
        n = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(e) {
        (this.mode = i.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let r = 45 * n.indexOf(this.data[t]);
            (r += n.indexOf(this.data[t + 1])), e.put(r, 11);
          }
          this.data.length % 2 && e.put(n.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    7611: (e) => {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          const t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (let r = 0; r < t; r++)
            this.putBit(1 == ((e >>> (t - r - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          const t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    6424: (e) => {
      function t(e) {
        if (!e || e < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, r, i) {
        const n = e * this.size + t;
        (this.data[n] = r), i && (this.reservedBit[n] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, r) {
          this.data[e * this.size + t] ^= r;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    2470: (e, t, r) => {
      const i = r(2378),
        n = r(1730);
      function o(e) {
        (this.mode = n.BYTE),
          "string" == typeof e && (e = i(e)),
          (this.data = new Uint8Array(e));
      }
      (o.getBitsLength = function (e) {
        return 8 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (let t = 0, r = this.data.length; t < r; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = o);
    },
    719: (e, t, r) => {
      const i = r(8906),
        n = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case i.L:
            return n[4 * (e - 1) + 0];
          case i.M:
            return n[4 * (e - 1) + 1];
          case i.Q:
            return n[4 * (e - 1) + 2];
          case i.H:
            return n[4 * (e - 1) + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case i.L:
              return o[4 * (e - 1) + 0];
            case i.M:
              return o[4 * (e - 1) + 1];
            case i.Q:
              return o[4 * (e - 1) + 2];
            case i.H:
              return o[4 * (e - 1) + 3];
            default:
              return;
          }
        });
    },
    8906: (e, t) => {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e)
                throw new Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw new Error("Unknown EC Level: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    2381: (e, t, r) => {
      const i = r(7052).getSymbolSize;
      t.getPositions = function (e) {
        const t = i(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    8208: (e, t, r) => {
      const i = r(7052),
        n = i.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        const r = (e.bit << 3) | t;
        let o = r << 10;
        for (; i.getBCHDigit(o) - n >= 0; ) o ^= 1335 << (i.getBCHDigit(o) - n);
        return 21522 ^ ((r << 10) | o);
      };
    },
    9198: (e, t) => {
      const r = new Uint8Array(512),
        i = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (r[t] = e), (i[e] = t), (e <<= 1), 256 & e && (e ^= 285);
        for (let e = 255; e < 512; e++) r[e] = r[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw new Error("log(" + e + ")");
          return i[e];
        }),
        (t.exp = function (e) {
          return r[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : r[i[e] + i[t]];
        });
    },
    771: (e, t, r) => {
      const i = r(1730),
        n = r(7052);
      function o(e) {
        (this.mode = i.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let r = n.toSJIS(this.data[t]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else {
              if (!(r >= 57408 && r <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[t] +
                    "\nMake sure your charset is UTF-8",
                );
              r -= 49472;
            }
            (r = 192 * ((r >>> 8) & 255) + (255 & r)), e.put(r, 13);
          }
        }),
        (e.exports = o);
    },
    9746: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      function r(e, r, i) {
        switch (e) {
          case t.Patterns.PATTERN000:
            return (r + i) % 2 == 0;
          case t.Patterns.PATTERN001:
            return r % 2 == 0;
          case t.Patterns.PATTERN010:
            return i % 3 == 0;
          case t.Patterns.PATTERN011:
            return (r + i) % 3 == 0;
          case t.Patterns.PATTERN100:
            return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 == 0;
          case t.Patterns.PATTERN101:
            return ((r * i) % 2) + ((r * i) % 3) == 0;
          case t.Patterns.PATTERN110:
            return (((r * i) % 2) + ((r * i) % 3)) % 2 == 0;
          case t.Patterns.PATTERN111:
            return (((r * i) % 3) + ((r + i) % 2)) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + e);
        }
      }
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          const t = e.size;
          let r = 0,
            i = 0,
            n = 0,
            o = null,
            s = null;
          for (let a = 0; a < t; a++) {
            (i = n = 0), (o = s = null);
            for (let l = 0; l < t; l++) {
              let t = e.get(a, l);
              t === o ? i++ : (i >= 5 && (r += i - 5 + 3), (o = t), (i = 1)),
                (t = e.get(l, a)),
                t === s ? n++ : (n >= 5 && (r += n - 5 + 3), (s = t), (n = 1));
            }
            i >= 5 && (r += i - 5 + 3), n >= 5 && (r += n - 5 + 3);
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          const t = e.size;
          let r = 0;
          for (let i = 0; i < t - 1; i++)
            for (let n = 0; n < t - 1; n++) {
              const t =
                e.get(i, n) +
                e.get(i, n + 1) +
                e.get(i + 1, n) +
                e.get(i + 1, n + 1);
              (4 !== t && 0 !== t) || r++;
            }
          return 3 * r;
        }),
        (t.getPenaltyN3 = function (e) {
          const t = e.size;
          let r = 0,
            i = 0,
            n = 0;
          for (let o = 0; o < t; o++) {
            i = n = 0;
            for (let s = 0; s < t; s++)
              (i = ((i << 1) & 2047) | e.get(o, s)),
                s >= 10 && (1488 === i || 93 === i) && r++,
                (n = ((n << 1) & 2047) | e.get(s, o)),
                s >= 10 && (1488 === n || 93 === n) && r++;
          }
          return 40 * r;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0;
          const r = e.data.length;
          for (let i = 0; i < r; i++) t += e.data[i];
          return 10 * Math.abs(Math.ceil((100 * t) / r / 5) - 10);
        }),
        (t.applyMask = function (e, t) {
          const i = t.size;
          for (let n = 0; n < i; n++)
            for (let o = 0; o < i; o++)
              t.isReserved(o, n) || t.xor(o, n, r(e, o, n));
        }),
        (t.getBestMask = function (e, r) {
          const i = Object.keys(t.Patterns).length;
          let n = 0,
            o = 1 / 0;
          for (let s = 0; s < i; s++) {
            r(s), t.applyMask(s, e);
            const i =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(s, e), i < o && ((o = i), (n = s));
          }
          return n;
        });
    },
    1730: (e, t, r) => {
      const i = r(8122),
        n = r(1445);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw new Error("Invalid mode: " + e);
          if (!i.isValid(t)) throw new Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return n.testNumeric(e)
            ? t.NUMERIC
            : n.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : n.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw new Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e)
                throw new Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw new Error("Unknown mode: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    1308: (e, t, r) => {
      const i = r(1730);
      function n(e) {
        (this.mode = i.NUMERIC), (this.data = e.toString());
      }
      (n.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (e) {
          let t, r, i;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = this.data.substr(t, 3)), (i = parseInt(r, 10)), e.put(i, 10);
          const n = this.data.length - t;
          n > 0 &&
            ((r = this.data.substr(t)),
            (i = parseInt(r, 10)),
            e.put(i, 3 * n + 1));
        }),
        (e.exports = n);
    },
    9261: (e, t, r) => {
      const i = r(9198);
      (t.mul = function (e, t) {
        const r = new Uint8Array(e.length + t.length - 1);
        for (let n = 0; n < e.length; n++)
          for (let o = 0; o < t.length; o++) r[n + o] ^= i.mul(e[n], t[o]);
        return r;
      }),
        (t.mod = function (e, t) {
          let r = new Uint8Array(e);
          for (; r.length - t.length >= 0; ) {
            const e = r[0];
            for (let n = 0; n < t.length; n++) r[n] ^= i.mul(t[n], e);
            let n = 0;
            for (; n < r.length && 0 === r[n]; ) n++;
            r = r.slice(n);
          }
          return r;
        }),
        (t.generateECPolynomial = function (e) {
          let r = new Uint8Array([1]);
          for (let n = 0; n < e; n++)
            r = t.mul(r, new Uint8Array([1, i.exp(n)]));
          return r;
        });
    },
    6999: (e, t, r) => {
      const i = r(7052),
        n = r(8906),
        o = r(7611),
        s = r(6424),
        a = r(1201),
        l = r(2381),
        c = r(9746),
        h = r(719),
        u = r(8986),
        d = r(2850),
        p = r(8208),
        f = r(1730),
        g = r(9409);
      function m(e, t, r) {
        const i = e.size,
          n = p.getEncodedBits(t, r);
        let o, s;
        for (o = 0; o < 15; o++)
          (s = 1 == ((n >> o) & 1)),
            o < 6
              ? e.set(o, 8, s, !0)
              : o < 8
              ? e.set(o + 1, 8, s, !0)
              : e.set(i - 15 + o, 8, s, !0),
            o < 8
              ? e.set(8, i - o - 1, s, !0)
              : o < 9
              ? e.set(8, 15 - o - 1 + 1, s, !0)
              : e.set(8, 15 - o - 1, s, !0);
        e.set(i - 8, 8, 1, !0);
      }
      function w(e, t, r, n) {
        let p;
        if (Array.isArray(e)) p = g.fromArray(e);
        else {
          if ("string" != typeof e) throw new Error("Invalid data");
          {
            let i = t;
            if (!i) {
              const t = g.rawSplit(e);
              i = d.getBestVersionForData(t, r);
            }
            p = g.fromString(e, i || 40);
          }
        }
        const w = d.getBestVersionForData(p, r);
        if (!w)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code",
          );
        if (t) {
          if (t < w)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                w +
                ".\n",
            );
        } else t = w;
        const y = (function (e, t, r) {
            const n = new o();
            r.forEach(function (t) {
              n.put(t.mode.bit, 4),
                n.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
                t.write(n);
            });
            const s =
              8 *
              (i.getSymbolTotalCodewords(e) - h.getTotalCodewordsCount(e, t));
            for (
              n.getLengthInBits() + 4 <= s && n.put(0, 4);
              n.getLengthInBits() % 8 != 0;

            )
              n.putBit(0);
            const a = (s - n.getLengthInBits()) / 8;
            for (let e = 0; e < a; e++) n.put(e % 2 ? 17 : 236, 8);
            return (function (e, t, r) {
              const n = i.getSymbolTotalCodewords(t),
                o = n - h.getTotalCodewordsCount(t, r),
                s = h.getBlocksCount(t, r),
                a = s - (n % s),
                l = Math.floor(n / s),
                c = Math.floor(o / s),
                d = c + 1,
                p = l - c,
                f = new u(p);
              let g = 0;
              const m = new Array(s),
                w = new Array(s);
              let y = 0;
              const v = new Uint8Array(e.buffer);
              for (let e = 0; e < s; e++) {
                const t = e < a ? c : d;
                (m[e] = v.slice(g, g + t)),
                  (w[e] = f.encode(m[e])),
                  (g += t),
                  (y = Math.max(y, t));
              }
              const b = new Uint8Array(n);
              let _,
                E,
                x = 0;
              for (_ = 0; _ < y; _++)
                for (E = 0; E < s; E++) _ < m[E].length && (b[x++] = m[E][_]);
              for (_ = 0; _ < p; _++) for (E = 0; E < s; E++) b[x++] = w[E][_];
              return b;
            })(n, e, t);
          })(t, r, p),
          v = i.getSymbolSize(t),
          b = new s(v);
        return (
          (function (e, t) {
            const r = e.size,
              i = l.getPositions(t);
            for (let t = 0; t < i.length; t++) {
              const n = i[t][0],
                o = i[t][1];
              for (let t = -1; t <= 7; t++)
                if (!(n + t <= -1 || r <= n + t))
                  for (let i = -1; i <= 7; i++)
                    o + i <= -1 ||
                      r <= o + i ||
                      ((t >= 0 && t <= 6 && (0 === i || 6 === i)) ||
                      (i >= 0 && i <= 6 && (0 === t || 6 === t)) ||
                      (t >= 2 && t <= 4 && i >= 2 && i <= 4)
                        ? e.set(n + t, o + i, !0, !0)
                        : e.set(n + t, o + i, !1, !0));
            }
          })(b, t),
          (function (e) {
            const t = e.size;
            for (let r = 8; r < t - 8; r++) {
              const t = r % 2 == 0;
              e.set(r, 6, t, !0), e.set(6, r, t, !0);
            }
          })(b),
          (function (e, t) {
            const r = a.getPositions(t);
            for (let t = 0; t < r.length; t++) {
              const i = r[t][0],
                n = r[t][1];
              for (let t = -2; t <= 2; t++)
                for (let r = -2; r <= 2; r++)
                  -2 === t ||
                  2 === t ||
                  -2 === r ||
                  2 === r ||
                  (0 === t && 0 === r)
                    ? e.set(i + t, n + r, !0, !0)
                    : e.set(i + t, n + r, !1, !0);
            }
          })(b, t),
          m(b, r, 0),
          t >= 7 &&
            (function (e, t) {
              const r = e.size,
                i = d.getEncodedBits(t);
              let n, o, s;
              for (let t = 0; t < 18; t++)
                (n = Math.floor(t / 3)),
                  (o = (t % 3) + r - 8 - 3),
                  (s = 1 == ((i >> t) & 1)),
                  e.set(n, o, s, !0),
                  e.set(o, n, s, !0);
            })(b, t),
          (function (e, t) {
            const r = e.size;
            let i = -1,
              n = r - 1,
              o = 7,
              s = 0;
            for (let a = r - 1; a > 0; a -= 2)
              for (6 === a && a--; ; ) {
                for (let r = 0; r < 2; r++)
                  if (!e.isReserved(n, a - r)) {
                    let i = !1;
                    s < t.length && (i = 1 == ((t[s] >>> o) & 1)),
                      e.set(n, a - r, i),
                      o--,
                      -1 === o && (s++, (o = 7));
                  }
                if (((n += i), n < 0 || r <= n)) {
                  (n -= i), (i = -i);
                  break;
                }
              }
          })(b, y),
          isNaN(n) && (n = c.getBestMask(b, m.bind(null, b, r))),
          c.applyMask(n, b),
          m(b, r, n),
          {
            modules: b,
            version: t,
            errorCorrectionLevel: r,
            maskPattern: n,
            segments: p,
          }
        );
      }
      t.create = function (e, t) {
        if (void 0 === e || "" === e) throw new Error("No input text");
        let r,
          o,
          s = n.M;
        return (
          void 0 !== t &&
            ((s = n.from(t.errorCorrectionLevel, n.M)),
            (r = d.from(t.version)),
            (o = c.from(t.maskPattern)),
            t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)),
          w(e, r, s, o)
        );
      };
    },
    8986: (e, t, r) => {
      const i = r(9261);
      function n(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (n.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = i.generateECPolynomial(this.degree));
      }),
        (n.prototype.encode = function (e) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          const t = new Uint8Array(e.length + this.degree);
          t.set(e);
          const r = i.mod(t, this.genPoly),
            n = this.degree - r.length;
          if (n > 0) {
            const e = new Uint8Array(this.degree);
            return e.set(r, n), e;
          }
          return r;
        }),
        (e.exports = n);
    },
    1445: (e, t) => {
      const r = "[0-9]+";
      let i =
        "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      i = i.replace(/u/g, "\\u");
      const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + ")(?:.|[\r\n]))+";
      (t.KANJI = new RegExp(i, "g")),
        (t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = new RegExp(n, "g")),
        (t.NUMERIC = new RegExp(r, "g")),
        (t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      const o = new RegExp("^" + i + "$"),
        s = new RegExp("^" + r + "$"),
        a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return o.test(e);
      }),
        (t.testNumeric = function (e) {
          return s.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return a.test(e);
        });
    },
    9409: (e, t, r) => {
      const i = r(1730),
        n = r(1308),
        o = r(4691),
        s = r(2470),
        a = r(771),
        l = r(1445),
        c = r(7052),
        h = r(5987);
      function u(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function d(e, t, r) {
        const i = [];
        let n;
        for (; null !== (n = e.exec(r)); )
          i.push({ data: n[0], index: n.index, mode: t, length: n[0].length });
        return i;
      }
      function p(e) {
        const t = d(l.NUMERIC, i.NUMERIC, e),
          r = d(l.ALPHANUMERIC, i.ALPHANUMERIC, e);
        let n, o;
        return (
          c.isKanjiModeEnabled()
            ? ((n = d(l.BYTE, i.BYTE, e)), (o = d(l.KANJI, i.KANJI, e)))
            : ((n = d(l.BYTE_KANJI, i.BYTE, e)), (o = [])),
          t
            .concat(r, n, o)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function f(e, t) {
        switch (t) {
          case i.NUMERIC:
            return n.getBitsLength(e);
          case i.ALPHANUMERIC:
            return o.getBitsLength(e);
          case i.KANJI:
            return a.getBitsLength(e);
          case i.BYTE:
            return s.getBitsLength(e);
        }
      }
      function g(e, t) {
        let r;
        const l = i.getBestModeForData(e);
        if (((r = i.from(t, l)), r !== i.BYTE && r.bit < l.bit))
          throw new Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              i.toString(r) +
              ".\n Suggested mode is: " +
              i.toString(l),
          );
        switch ((r !== i.KANJI || c.isKanjiModeEnabled() || (r = i.BYTE), r)) {
          case i.NUMERIC:
            return new n(e);
          case i.ALPHANUMERIC:
            return new o(e);
          case i.KANJI:
            return new a(e);
          case i.BYTE:
            return new s(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(g(t, null))
              : t.data && e.push(g(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, r) {
          const n = (function (e) {
              const t = [];
              for (let r = 0; r < e.length; r++) {
                const n = e[r];
                switch (n.mode) {
                  case i.NUMERIC:
                    t.push([
                      n,
                      { data: n.data, mode: i.ALPHANUMERIC, length: n.length },
                      { data: n.data, mode: i.BYTE, length: n.length },
                    ]);
                    break;
                  case i.ALPHANUMERIC:
                    t.push([
                      n,
                      { data: n.data, mode: i.BYTE, length: n.length },
                    ]);
                    break;
                  case i.KANJI:
                    t.push([
                      n,
                      { data: n.data, mode: i.BYTE, length: u(n.data) },
                    ]);
                    break;
                  case i.BYTE:
                    t.push([{ data: n.data, mode: i.BYTE, length: u(n.data) }]);
                }
              }
              return t;
            })(p(e, c.isKanjiModeEnabled())),
            o = (function (e, t) {
              const r = {},
                n = { start: {} };
              let o = ["start"];
              for (let s = 0; s < e.length; s++) {
                const a = e[s],
                  l = [];
                for (let e = 0; e < a.length; e++) {
                  const c = a[e],
                    h = "" + s + e;
                  l.push(h), (r[h] = { node: c, lastCount: 0 }), (n[h] = {});
                  for (let e = 0; e < o.length; e++) {
                    const s = o[e];
                    r[s] && r[s].node.mode === c.mode
                      ? ((n[s][h] =
                          f(r[s].lastCount + c.length, c.mode) -
                          f(r[s].lastCount, c.mode)),
                        (r[s].lastCount += c.length))
                      : (r[s] && (r[s].lastCount = c.length),
                        (n[s][h] =
                          f(c.length, c.mode) +
                          4 +
                          i.getCharCountIndicator(c.mode, t)));
                  }
                }
                o = l;
              }
              for (let e = 0; e < o.length; e++) n[o[e]].end = 0;
              return { map: n, table: r };
            })(n, r),
            s = h.find_path(o.map, "start", "end"),
            a = [];
          for (let e = 1; e < s.length - 1; e++) a.push(o.table[s[e]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              const r = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return r && r.mode === t.mode
                ? ((e[e.length - 1].data += t.data), e)
                : (e.push(t), e);
            }, []),
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(p(e, c.isKanjiModeEnabled()));
        });
    },
    7052: (e, t) => {
      let r;
      const i = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (t.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return i[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw new Error('"toSJISFunc" is not a valid function.');
          r = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (t.toSJIS = function (e) {
          return r(e);
        });
    },
    8122: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    2850: (e, t, r) => {
      const i = r(7052),
        n = r(719),
        o = r(8906),
        s = r(1730),
        a = r(8122),
        l = i.getBCHDigit(7973);
      function c(e, t) {
        return s.getCharCountIndicator(e, t) + 4;
      }
      function h(e, t) {
        let r = 0;
        return (
          e.forEach(function (e) {
            const i = c(e.mode, t);
            r += i + e.getBitsLength();
          }),
          r
        );
      }
      (t.from = function (e, t) {
        return a.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, r) {
          if (!a.isValid(e)) throw new Error("Invalid QR Code version");
          void 0 === r && (r = s.BYTE);
          const o =
            8 * (i.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, t));
          if (r === s.MIXED) return o;
          const l = o - c(r, e);
          switch (r) {
            case s.NUMERIC:
              return Math.floor((l / 10) * 3);
            case s.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case s.KANJI:
              return Math.floor(l / 13);
            case s.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (t.getBestVersionForData = function (e, r) {
          let i;
          const n = o.from(r, o.M);
          if (Array.isArray(e)) {
            if (e.length > 1)
              return (function (e, r) {
                for (let i = 1; i <= 40; i++)
                  if (h(e, i) <= t.getCapacity(i, r, s.MIXED)) return i;
              })(e, n);
            if (0 === e.length) return 1;
            i = e[0];
          } else i = e;
          return (function (e, r, i) {
            for (let n = 1; n <= 40; n++)
              if (r <= t.getCapacity(n, i, e)) return n;
          })(i.mode, i.getLength(), n);
        }),
        (t.getEncodedBits = function (e) {
          if (!a.isValid(e) || e < 7)
            throw new Error("Invalid QR Code version");
          let t = e << 12;
          for (; i.getBCHDigit(t) - l >= 0; )
            t ^= 7973 << (i.getBCHDigit(t) - l);
          return (e << 12) | t;
        });
    },
    1250: (e, t, r) => {
      const i = r(4786);
      (t.render = function (e, t, r) {
        let n = r,
          o = t;
        void 0 !== n || (t && t.getContext) || ((n = t), (t = void 0)),
          t ||
            (o = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (n = i.getOptions(n));
        const s = i.getImageWidth(e.modules.size, n),
          a = o.getContext("2d"),
          l = a.createImageData(s, s);
        return (
          i.qrToImageData(l.data, e, n),
          (function (e, t, r) {
            e.clearRect(0, 0, t.width, t.height),
              t.style || (t.style = {}),
              (t.height = r),
              (t.width = r),
              (t.style.height = r + "px"),
              (t.style.width = r + "px");
          })(a, o, s),
          a.putImageData(l, 0, 0),
          o
        );
      }),
        (t.renderToDataURL = function (e, r, i) {
          let n = i;
          void 0 !== n || (r && r.getContext) || ((n = r), (r = void 0)),
            n || (n = {});
          const o = t.render(e, r, n),
            s = n.type || "image/png",
            a = n.rendererOpts || {};
          return o.toDataURL(s, a.quality);
        });
    },
    8390: (e, t, r) => {
      const i = r(4786);
      function n(e, t) {
        const r = e.a / 255,
          i = t + '="' + e.hex + '"';
        return r < 1
          ? i + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : i;
      }
      function o(e, t, r) {
        let i = e + t;
        return void 0 !== r && (i += " " + r), i;
      }
      t.render = function (e, t, r) {
        const s = i.getOptions(t),
          a = e.modules.size,
          l = e.modules.data,
          c = a + 2 * s.margin,
          h = s.color.light.a
            ? "<path " +
              n(s.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          u =
            "<path " +
            n(s.color.dark, "stroke") +
            ' d="' +
            (function (e, t, r) {
              let i = "",
                n = 0,
                s = !1,
                a = 0;
              for (let l = 0; l < e.length; l++) {
                const c = Math.floor(l % t),
                  h = Math.floor(l / t);
                c || s || (s = !0),
                  e[l]
                    ? (a++,
                      (l > 0 && c > 0 && e[l - 1]) ||
                        ((i += s ? o("M", c + r, 0.5 + h + r) : o("m", n, 0)),
                        (n = 0),
                        (s = !1)),
                      (c + 1 < t && e[l + 1]) || ((i += o("h", a)), (a = 0)))
                    : n++;
              }
              return i;
            })(l, a, s.margin) +
            '"/>',
          d = 'viewBox="0 0 ' + c + " " + c + '"',
          p =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (s.width
              ? 'width="' + s.width + '" height="' + s.width + '" '
              : "") +
            d +
            ' shape-rendering="crispEdges">' +
            h +
            u +
            "</svg>\n";
        return "function" == typeof r && r(null, p), p;
      };
    },
    4786: (e, t) => {
      function r(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw new Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw new Error("Invalid hex color: " + e);
        (3 !== t.length && 4 !== t.length) ||
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            }),
          )),
          6 === t.length && t.push("F", "F");
        const r = parseInt(t.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        const t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          i = e.width && e.width >= 21 ? e.width : void 0,
          n = e.scale || 4;
        return {
          width: i,
          scale: i ? 4 : n,
          margin: t,
          color: {
            dark: r(e.color.dark || "#000000ff"),
            light: r(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, r) {
          const i = t.getScale(e, r);
          return Math.floor((e + 2 * r.margin) * i);
        }),
        (t.qrToImageData = function (e, r, i) {
          const n = r.modules.size,
            o = r.modules.data,
            s = t.getScale(n, i),
            a = Math.floor((n + 2 * i.margin) * s),
            l = i.margin * s,
            c = [i.color.light, i.color.dark];
          for (let t = 0; t < a; t++)
            for (let r = 0; r < a; r++) {
              let h = 4 * (t * a + r),
                u = i.color.light;
              t >= l &&
                r >= l &&
                t < a - l &&
                r < a - l &&
                (u =
                  c[
                    o[Math.floor((t - l) / s) * n + Math.floor((r - l) / s)]
                      ? 1
                      : 0
                  ]),
                (e[h++] = u.r),
                (e[h++] = u.g),
                (e[h++] = u.b),
                (e[h] = u.a);
            }
        });
    },
    9742: (e, t) => {
      "use strict";
      (t.byteLength = function (e) {
        var t = a(e),
          r = t[0],
          i = t[1];
        return (3 * (r + i)) / 4 - i;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            o = a(e),
            s = o[0],
            l = o[1],
            c = new n(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, s, l),
            ),
            h = 0,
            u = l > 0 ? s - 4 : s;
          for (r = 0; r < u; r += 4)
            (t =
              (i[e.charCodeAt(r)] << 18) |
              (i[e.charCodeAt(r + 1)] << 12) |
              (i[e.charCodeAt(r + 2)] << 6) |
              i[e.charCodeAt(r + 3)]),
              (c[h++] = (t >> 16) & 255),
              (c[h++] = (t >> 8) & 255),
              (c[h++] = 255 & t);
          return (
            2 === l &&
              ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
              (c[h++] = 255 & t)),
            1 === l &&
              ((t =
                (i[e.charCodeAt(r)] << 10) |
                (i[e.charCodeAt(r + 1)] << 4) |
                (i[e.charCodeAt(r + 2)] >> 2)),
              (c[h++] = (t >> 8) & 255),
              (c[h++] = 255 & t)),
            c
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, i = e.length, n = i % 3, o = [], s = 16383, a = 0, c = i - n;
            a < c;
            a += s
          )
            o.push(l(e, a, a + s > c ? c : a + s));
          return (
            1 === n
              ? ((t = e[i - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
              : 2 === n &&
                ((t = (e[i - 2] << 8) + e[i - 1]),
                o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "=")),
            o.join("")
          );
        });
      for (
        var r = [],
          i = [],
          n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0;
        s < 64;
        ++s
      )
        (r[s] = o[s]), (i[o.charCodeAt(s)] = s);
      function a(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function l(e, t, i) {
        for (var n, o, s = [], a = t; a < i; a += 3)
          (n =
            ((e[a] << 16) & 16711680) +
            ((e[a + 1] << 8) & 65280) +
            (255 & e[a + 2])),
            s.push(
              r[((o = n) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o],
            );
        return s.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    8764: (e, t, r) => {
      "use strict";
      const i = r(9742),
        n = r(645),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (t.lW = l), (t.h2 = 50);
      const s = 2147483647;
      function a(e) {
        if (e > s)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
        const t = new Uint8Array(e);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return u(e);
        }
        return c(e, t, r);
      }
      function c(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            if (
              (("string" == typeof t && "" !== t) || (t = "utf8"),
              !l.isEncoding(t))
            )
              throw new TypeError("Unknown encoding: " + t);
            const r = 0 | g(e, t);
            let i = a(r);
            const n = i.write(e, t);
            return n !== r && (i = i.slice(0, n)), i;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (Z(e, Uint8Array)) {
              const t = new Uint8Array(e);
              return p(t.buffer, t.byteOffset, t.byteLength);
            }
            return d(e);
          })(e);
        if (null == e)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e,
          );
        if (Z(e, ArrayBuffer) || (e && Z(e.buffer, ArrayBuffer)))
          return p(e, t, r);
        if (
          "undefined" != typeof SharedArrayBuffer &&
          (Z(e, SharedArrayBuffer) || (e && Z(e.buffer, SharedArrayBuffer)))
        )
          return p(e, t, r);
        if ("number" == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        const i = e.valueOf && e.valueOf();
        if (null != i && i !== e) return l.from(i, t, r);
        const n = (function (e) {
          if (l.isBuffer(e)) {
            const t = 0 | f(e.length),
              r = a(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          return void 0 !== e.length
            ? "number" != typeof e.length || Y(e.length)
              ? a(0)
              : d(e)
            : "Buffer" === e.type && Array.isArray(e.data)
            ? d(e.data)
            : void 0;
        })(e);
        if (n) return n;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return l.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
        );
      }
      function h(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
      }
      function u(e) {
        return h(e), a(e < 0 ? 0 : 0 | f(e));
      }
      function d(e) {
        const t = e.length < 0 ? 0 : 0 | f(e.length),
          r = a(t);
        for (let i = 0; i < t; i += 1) r[i] = 255 & e[i];
        return r;
      }
      function p(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let i;
        return (
          (i =
            void 0 === t && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, r)),
          Object.setPrototypeOf(i, l.prototype),
          i
        );
      }
      function f(e) {
        if (e >= s)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s.toString(16) +
              " bytes",
          );
        return 0 | e;
      }
      function g(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || Z(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          );
        const r = e.length,
          i = arguments.length > 2 && !0 === arguments[2];
        if (!i && 0 === r) return 0;
        let n = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return F(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return K(e).length;
            default:
              if (n) return i ? -1 : F(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function m(e, t, r) {
        let i = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return T(this, t, r);
            case "utf8":
            case "utf-8":
              return I(this, t, r);
            case "ascii":
              return A(this, t, r);
            case "latin1":
            case "binary":
              return P(this, t, r);
            case "base64":
              return O(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return k(this, t, r);
            default:
              if (i) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (i = !0);
          }
      }
      function w(e, t, r) {
        const i = e[t];
        (e[t] = e[r]), (e[r] = i);
      }
      function y(e, t, r, i, n) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((i = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          Y((r = +r)) && (r = n ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (n) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!n) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, i, n);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? n
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : v(e, [t], r, i, n)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(e, t, r, i, n) {
        let o,
          s = 1,
          a = e.length,
          l = t.length;
        if (
          void 0 !== i &&
          ("ucs2" === (i = String(i).toLowerCase()) ||
            "ucs-2" === i ||
            "utf16le" === i ||
            "utf-16le" === i)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (l /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (n) {
          let i = -1;
          for (o = r; o < a; o++)
            if (c(e, o) === c(t, -1 === i ? 0 : o - i)) {
              if ((-1 === i && (i = o), o - i + 1 === l)) return i * s;
            } else -1 !== i && (o -= o - i), (i = -1);
        } else
          for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
            let r = !0;
            for (let i = 0; i < l; i++)
              if (c(e, o + i) !== c(t, i)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function b(e, t, r, i) {
        r = Number(r) || 0;
        const n = e.length - r;
        i ? (i = Number(i)) > n && (i = n) : (i = n);
        const o = t.length;
        let s;
        for (i > o / 2 && (i = o / 2), s = 0; s < i; ++s) {
          const i = parseInt(t.substr(2 * s, 2), 16);
          if (Y(i)) return s;
          e[r + s] = i;
        }
        return s;
      }
      function _(e, t, r, i) {
        return G(F(t, e.length - r), e, r, i);
      }
      function E(e, t, r, i) {
        return G(
          (function (e) {
            const t = [];
            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          i,
        );
      }
      function x(e, t, r, i) {
        return G(K(t), e, r, i);
      }
      function C(e, t, r, i) {
        return G(
          (function (e, t) {
            let r, i, n;
            const o = [];
            for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (r = e.charCodeAt(s)),
                (i = r >> 8),
                (n = r % 256),
                o.push(n),
                o.push(i);
            return o;
          })(t, e.length - r),
          e,
          r,
          i,
        );
      }
      function O(e, t, r) {
        return 0 === t && r === e.length
          ? i.fromByteArray(e)
          : i.fromByteArray(e.slice(t, r));
      }
      function I(e, t, r) {
        r = Math.min(e.length, r);
        const i = [];
        let n = t;
        for (; n < r; ) {
          const t = e[n];
          let o = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (n + s <= r) {
            let r, i, a, l;
            switch (s) {
              case 1:
                t < 128 && (o = t);
                break;
              case 2:
                (r = e[n + 1]),
                  128 == (192 & r) &&
                    ((l = ((31 & t) << 6) | (63 & r)), l > 127 && (o = l));
                break;
              case 3:
                (r = e[n + 1]),
                  (i = e[n + 2]),
                  128 == (192 & r) &&
                    128 == (192 & i) &&
                    ((l = ((15 & t) << 12) | ((63 & r) << 6) | (63 & i)),
                    l > 2047 && (l < 55296 || l > 57343) && (o = l));
                break;
              case 4:
                (r = e[n + 1]),
                  (i = e[n + 2]),
                  (a = e[n + 3]),
                  128 == (192 & r) &&
                    128 == (192 & i) &&
                    128 == (192 & a) &&
                    ((l =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & i) << 6) |
                      (63 & a)),
                    l > 65535 && l < 1114112 && (o = l));
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              i.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            i.push(o),
            (n += s);
        }
        return (function (e) {
          const t = e.length;
          if (t <= S) return String.fromCharCode.apply(String, e);
          let r = "",
            i = 0;
          for (; i < t; )
            r += String.fromCharCode.apply(String, e.slice(i, (i += S)));
          return r;
        })(i);
      }
      (l.TYPED_ARRAY_SUPPORT = (function () {
        try {
          const e = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            42 === e.foo()
          );
        } catch (e) {
          return !1;
        }
      })()),
        l.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          ),
        Object.defineProperty(l.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(l.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        }),
        (l.poolSize = 8192),
        (l.from = function (e, t, r) {
          return c(e, t, r);
        }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        (l.alloc = function (e, t, r) {
          return (function (e, t, r) {
            return (
              h(e),
              e <= 0
                ? a(e)
                : void 0 !== t
                ? "string" == typeof r
                  ? a(e).fill(t, r)
                  : a(e).fill(t)
                : a(e)
            );
          })(e, t, r);
        }),
        (l.allocUnsafe = function (e) {
          return u(e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return u(e);
        }),
        (l.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== l.prototype;
        }),
        (l.compare = function (e, t) {
          if (
            (Z(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            Z(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(e) || !l.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (e === t) return 0;
          let r = e.length,
            i = t.length;
          for (let n = 0, o = Math.min(r, i); n < o; ++n)
            if (e[n] !== t[n]) {
              (r = e[n]), (i = t[n]);
              break;
            }
          return r < i ? -1 : i < r ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          let r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          const i = l.allocUnsafe(t);
          let n = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (Z(t, Uint8Array))
              n + t.length > i.length
                ? (l.isBuffer(t) || (t = l.from(t)), t.copy(i, n))
                : Uint8Array.prototype.set.call(i, t, n);
            else {
              if (!l.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              t.copy(i, n);
            }
            n += t.length;
          }
          return i;
        }),
        (l.byteLength = g),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          const e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) w(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          const e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            w(this, t, t + 3), w(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          const e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            w(this, t, t + 7),
              w(this, t + 1, t + 6),
              w(this, t + 2, t + 5),
              w(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          const e = this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? I(this, 0, e)
            : m.apply(this, arguments);
        }),
        (l.prototype.toLocaleString = l.prototype.toString),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          let e = "";
          const r = t.h2;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        o && (l.prototype[o] = l.prototype.inspect),
        (l.prototype.compare = function (e, t, r, i, n) {
          if (
            (Z(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = this.length),
            t < 0 || r > e.length || i < 0 || n > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= n && t >= r) return 0;
          if (i >= n) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          let o = (n >>>= 0) - (i >>>= 0),
            s = (r >>>= 0) - (t >>>= 0);
          const a = Math.min(o, s),
            c = this.slice(i, n),
            h = e.slice(t, r);
          for (let e = 0; e < a; ++e)
            if (c[e] !== h[e]) {
              (o = c[e]), (s = h[e]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (l.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (l.prototype.write = function (e, t, r, i) {
          if (void 0 === t) (i = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (i = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === i && (i = "utf8"))
                : ((i = r), (r = void 0));
          }
          const n = this.length - t;
          if (
            ((void 0 === r || r > n) && (r = n),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          let o = !1;
          for (;;)
            switch (i) {
              case "hex":
                return b(this, e, t, r);
              case "utf8":
              case "utf-8":
                return _(this, e, t, r);
              case "ascii":
              case "latin1":
              case "binary":
                return E(this, e, t, r);
              case "base64":
                return x(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return C(this, e, t, r);
              default:
                if (o) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (o = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const S = 4096;
      function A(e, t, r) {
        let i = "";
        r = Math.min(e.length, r);
        for (let n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
        return i;
      }
      function P(e, t, r) {
        let i = "";
        r = Math.min(e.length, r);
        for (let n = t; n < r; ++n) i += String.fromCharCode(e[n]);
        return i;
      }
      function T(e, t, r) {
        const i = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
        let n = "";
        for (let i = t; i < r; ++i) n += J[e[i]];
        return n;
      }
      function k(e, t, r) {
        const i = e.slice(t, r);
        let n = "";
        for (let e = 0; e < i.length - 1; e += 2)
          n += String.fromCharCode(i[e] + 256 * i[e + 1]);
        return n;
      }
      function N(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function R(e, t, r, i, n, o) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > n || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + i > e.length) throw new RangeError("Index out of range");
      }
      function $(e, t, r, i, n) {
        W(t, i, n, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          r
        );
      }
      function L(e, t, r, i, n) {
        W(t, i, n, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        (e[r + 7] = o),
          (o >>= 8),
          (e[r + 6] = o),
          (o >>= 8),
          (e[r + 5] = o),
          (o >>= 8),
          (e[r + 4] = o);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r + 3] = s),
          (s >>= 8),
          (e[r + 2] = s),
          (s >>= 8),
          (e[r + 1] = s),
          (s >>= 8),
          (e[r] = s),
          r + 8
        );
      }
      function M(e, t, r, i, n, o) {
        if (r + i > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function j(e, t, r, i, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o || M(e, 0, r, 4),
          n.write(e, t, r, i, 23, 4),
          r + 4
        );
      }
      function U(e, t, r, i, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o || M(e, 0, r, 8),
          n.write(e, t, r, i, 52, 8),
          r + 8
        );
      }
      (l.prototype.slice = function (e, t) {
        const r = this.length;
        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e);
        const i = this.subarray(e, t);
        return Object.setPrototypeOf(i, l.prototype), i;
      }),
        (l.prototype.readUintLE = l.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || N(e, t, this.length);
            let i = this[e],
              n = 1,
              o = 0;
            for (; ++o < t && (n *= 256); ) i += this[e + o] * n;
            return i;
          }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || N(e, t, this.length);
            let i = this[e + --t],
              n = 1;
            for (; t > 0 && (n *= 256); ) i += this[e + --t] * n;
            return i;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || N(e, 1, this.length), this[e];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || N(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || N(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || N(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || N(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (l.prototype.readBigUInt64LE = Q(function (e) {
          H((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
          const i =
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            n = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
          return BigInt(i) + (BigInt(n) << BigInt(32));
        })),
        (l.prototype.readBigUInt64BE = Q(function (e) {
          H((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
          const i =
              t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            n = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(i) << BigInt(32)) + BigInt(n);
        })),
        (l.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || N(e, t, this.length);
          let i = this[e],
            n = 1,
            o = 0;
          for (; ++o < t && (n *= 256); ) i += this[e + o] * n;
          return (n *= 128), i >= n && (i -= Math.pow(2, 8 * t)), i;
        }),
        (l.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || N(e, t, this.length);
          let i = t,
            n = 1,
            o = this[e + --i];
          for (; i > 0 && (n *= 256); ) o += this[e + --i] * n;
          return (n *= 128), o >= n && (o -= Math.pow(2, 8 * t)), o;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            (e >>>= 0),
            t || N(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || N(e, 2, this.length);
          const r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || N(e, 2, this.length);
          const r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || N(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || N(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readBigInt64LE = Q(function (e) {
          H((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
          const i =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
          return (
            (BigInt(i) << BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            )
          );
        })),
        (l.prototype.readBigInt64BE = Q(function (e) {
          H((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
          const i = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(i) << BigInt(32)) +
            BigInt(
              this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r,
            )
          );
        })),
        (l.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || N(e, 4, this.length), n.read(this, e, !0, 23, 4)
          );
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || N(e, 4, this.length), n.read(this, e, !1, 23, 4)
          );
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || N(e, 8, this.length), n.read(this, e, !0, 52, 8)
          );
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || N(e, 8, this.length), n.read(this, e, !1, 52, 8)
          );
        }),
        (l.prototype.writeUintLE = l.prototype.writeUIntLE =
          function (e, t, r, i) {
            (e = +e),
              (t >>>= 0),
              (r >>>= 0),
              i || R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            let n = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < r && (n *= 256); )
              this[t + o] = (e / n) & 255;
            return t + r;
          }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (e, t, r, i) {
            (e = +e),
              (t >>>= 0),
              (r >>>= 0),
              i || R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            let n = r - 1,
              o = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (o *= 256); )
              this[t + n] = (e / o) & 255;
            return t + r;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || R(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || R(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || R(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || R(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || R(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
          return $(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
          return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeIntLE = function (e, t, r, i) {
          if (((e = +e), (t >>>= 0), !i)) {
            const i = Math.pow(2, 8 * r - 1);
            R(this, e, t, r, i - 1, -i);
          }
          let n = 0,
            o = 1,
            s = 0;
          for (this[t] = 255 & e; ++n < r && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + n - 1] && (s = 1),
              (this[t + n] = (((e / o) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeIntBE = function (e, t, r, i) {
          if (((e = +e), (t >>>= 0), !i)) {
            const i = Math.pow(2, 8 * r - 1);
            R(this, e, t, r, i - 1, -i);
          }
          let n = r - 1,
            o = 1,
            s = 0;
          for (this[t + n] = 255 & e; --n >= 0 && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + n + 1] && (s = 1),
              (this[t + n] = (((e / o) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || R(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || R(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || R(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || R(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || R(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (l.prototype.writeBigInt64LE = Q(function (e, t = 0) {
          return $(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeBigInt64BE = Q(function (e, t = 0) {
          return L(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeFloatLE = function (e, t, r) {
          return j(this, e, t, !0, r);
        }),
        (l.prototype.writeFloatBE = function (e, t, r) {
          return j(this, e, t, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (e, t, r) {
          return U(this, e, t, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (e, t, r) {
          return U(this, e, t, !1, r);
        }),
        (l.prototype.copy = function (e, t, r, i) {
          if (!l.isBuffer(e))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < r && (i = r),
            i === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            e.length - t < i - r && (i = e.length - t + r);
          const n = i - r;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, i)
              : Uint8Array.prototype.set.call(e, this.subarray(r, i), t),
            n
          );
        }),
        (l.prototype.fill = function (e, t, r, i) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((i = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((i = r), (r = this.length)),
              void 0 !== i && "string" != typeof i)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !l.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
            if (1 === e.length) {
              const t = e.charCodeAt(0);
              (("utf8" === i && t < 128) || "latin1" === i) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          let n;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (n = t; n < r; ++n) this[n] = e;
          else {
            const o = l.isBuffer(e) ? e : l.from(e, i),
              s = o.length;
            if (0 === s)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              );
            for (n = 0; n < r - t; ++n) this[n + t] = o[n % s];
          }
          return this;
        });
      const D = {};
      function B(e, t, r) {
        D[e] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function z(e) {
        let t = "",
          r = e.length;
        const i = "-" === e[0] ? 1 : 0;
        for (; r >= i + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function W(e, t, r, i, n, o) {
        if (e > r || e < t) {
          const i = "bigint" == typeof t ? "n" : "";
          let n;
          throw (
            ((n =
              o > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${8 * (o + 1)}${i}`
                  : `>= -(2${i} ** ${8 * (o + 1) - 1}${i}) and < 2 ** ${
                      8 * (o + 1) - 1
                    }${i}`
                : `>= ${t}${i} and <= ${r}${i}`),
            new D.ERR_OUT_OF_RANGE("value", n, e))
          );
        }
        !(function (e, t, r) {
          H(t, "offset"),
            (void 0 !== e[t] && void 0 !== e[t + r]) ||
              V(t, e.length - (r + 1));
        })(i, n, o);
      }
      function H(e, t) {
        if ("number" != typeof e)
          throw new D.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function V(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (H(e, r), new D.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
          );
        if (t < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new D.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e,
        );
      }
      B(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError,
      ),
        B(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError,
        ),
        B(
          "ERR_OUT_OF_RANGE",
          function (e, t, r) {
            let i = `The value of "${e}" is out of range.`,
              n = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (n = z(String(r)))
                : "bigint" == typeof r &&
                  ((n = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (n = z(n)),
                  (n += "n")),
              (i += ` It must be ${t}. Received ${n}`),
              i
            );
          },
          RangeError,
        );
      const q = /[^+/0-9A-Za-z-_]/g;
      function F(e, t) {
        let r;
        t = t || 1 / 0;
        const i = e.length;
        let n = null;
        const o = [];
        for (let s = 0; s < i; ++s) {
          if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
            if (!n) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (s + 1 === i) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              n = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (n = r);
              continue;
            }
            r = 65536 + (((n - 55296) << 10) | (r - 56320));
          } else n && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((n = null), r < 128)) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            );
          }
        }
        return o;
      }
      function K(e) {
        return i.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(q, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e),
        );
      }
      function G(e, t, r, i) {
        let n;
        for (n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n)
          t[n + r] = e[n];
        return n;
      }
      function Z(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      function Y(e) {
        return e != e;
      }
      const J = (function () {
        const e = "0123456789abcdef",
          t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const i = 16 * r;
          for (let n = 0; n < 16; ++n) t[i + n] = e[r] + e[n];
        }
        return t;
      })();
      function Q(e) {
        return "undefined" == typeof BigInt ? X : e;
      }
      function X() {
        throw new Error("BigInt not supported");
      }
    },
    4020: (e) => {
      "use strict";
      var t = "%[a-f0-9]{2}",
        r = new RegExp("(" + t + ")|([^%]+?)", "gi"),
        i = new RegExp("(" + t + ")+", "gi");
      function n(e, t) {
        try {
          return [decodeURIComponent(e.join(""))];
        } catch (e) {}
        if (1 === e.length) return e;
        t = t || 1;
        var r = e.slice(0, t),
          i = e.slice(t);
        return Array.prototype.concat.call([], n(r), n(i));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (o) {
          for (var t = e.match(r) || [], i = 1; i < t.length; i++)
            t = (e = n(t, i).join("")).match(r) || [];
          return e;
        }
      }
      e.exports = function (e) {
        if ("string" != typeof e)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`",
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var t = { "%FE%FF": "��", "%FF%FE": "��" }, r = i.exec(e);
              r;

            ) {
              try {
                t[r[0]] = decodeURIComponent(r[0]);
              } catch (e) {
                var n = o(r[0]);
                n !== r[0] && (t[r[0]] = n);
              }
              r = i.exec(e);
            }
            t["%C2"] = "�";
            for (var s = Object.keys(t), a = 0; a < s.length; a++) {
              var l = s[a];
              e = e.replace(new RegExp(l, "g"), t[l]);
            }
            return e;
          })(e);
        }
      };
    },
    5987: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, r, i) {
          var n = {},
            o = {};
          o[r] = 0;
          var s,
            a,
            l,
            c,
            h,
            u,
            d,
            p = t.PriorityQueue.make();
          for (p.push(r, 0); !p.empty(); )
            for (l in ((a = (s = p.pop()).value),
            (c = s.cost),
            (h = e[a] || {})))
              h.hasOwnProperty(l) &&
                ((u = c + h[l]),
                (d = o[l]),
                (void 0 === o[l] || d > u) &&
                  ((o[l] = u), p.push(l, u), (n[l] = a)));
          if (void 0 !== i && void 0 === o[i]) {
            var f = ["Could not find a path from ", r, " to ", i, "."].join("");
            throw new Error(f);
          }
          return n;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var r = [], i = t; i; ) r.push(i), e[i], (i = e[i]);
          return r.reverse(), r;
        },
        find_path: function (e, r, i) {
          var n = t.single_source_shortest_paths(e, r, i);
          return t.extract_shortest_path_from_predecessor_list(n, i);
        },
        PriorityQueue: {
          make: function (e) {
            var r,
              i = t.PriorityQueue,
              n = {};
            for (r in ((e = e || {}), i)) i.hasOwnProperty(r) && (n[r] = i[r]);
            return (n.queue = []), (n.sorter = e.sorter || i.default_sorter), n;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            var r = { value: e, cost: t };
            this.queue.push(r), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    2378: (e) => {
      "use strict";
      e.exports = function (e) {
        for (var t = [], r = e.length, i = 0; i < r; i++) {
          var n = e.charCodeAt(i);
          if (n >= 55296 && n <= 56319 && r > i + 1) {
            var o = e.charCodeAt(i + 1);
            o >= 56320 &&
              o <= 57343 &&
              ((n = 1024 * (n - 55296) + o - 56320 + 65536), (i += 1));
          }
          n < 128
            ? t.push(n)
            : n < 2048
            ? (t.push((n >> 6) | 192), t.push((63 & n) | 128))
            : n < 55296 || (n >= 57344 && n < 65536)
            ? (t.push((n >> 12) | 224),
              t.push(((n >> 6) & 63) | 128),
              t.push((63 & n) | 128))
            : n >= 65536 && n <= 1114111
            ? (t.push((n >> 18) | 240),
              t.push(((n >> 12) & 63) | 128),
              t.push(((n >> 6) & 63) | 128),
              t.push((63 & n) | 128))
            : t.push(239, 191, 189);
        }
        return new Uint8Array(t).buffer;
      };
    },
    7187: (e) => {
      "use strict";
      var t,
        r = "object" == typeof Reflect ? Reflect : null,
        i =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e),
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var n =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, i) {
            function n(r) {
              e.removeListener(t, o), i(r);
            }
            function o() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", n),
                r([].slice.call(arguments));
            }
            g(e, t, o, { once: !0 }),
              "error" !== t &&
                (function (e, t, r) {
                  "function" == typeof e.on && g(e, "error", t, { once: !0 });
                })(e, n);
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var s = 10;
      function a(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e,
          );
      }
      function l(e) {
        return void 0 === e._maxListeners
          ? o.defaultMaxListeners
          : e._maxListeners;
      }
      function c(e, t, r, i) {
        var n, o, s, c;
        if (
          (a(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = o[t] = i ? [r, s] : [s, r])
            : i
            ? s.unshift(r)
            : s.push(r),
          (n = l(e)) > 0 && s.length > n && !s.warned)
        ) {
          s.warned = !0;
          var h = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit",
          );
          (h.name = "MaxListenersExceededWarning"),
            (h.emitter = e),
            (h.type = t),
            (h.count = s.length),
            (c = h),
            console && console.warn && console.warn(c);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function u(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          n = h.bind(i);
        return (n.listener = r), (i.wrapFn = n), n;
      }
      function d(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n
          ? []
          : "function" == typeof n
          ? r
            ? [n.listener || n]
            : [n]
          : r
          ? (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(n)
          : f(n, n.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function f(e, t) {
        for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      function g(e, t, r, i) {
        if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else {
          if ("function" != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e,
            );
          e.addEventListener(t, function n(o) {
            i.once && e.removeEventListener(t, n), r(o);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || n(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          s = e;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || n(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var n = "error" === e,
            o = this._events;
          if (void 0 !== o) n = n && void 0 === o.error;
          else if (!n) return !1;
          if (n) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var a = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : ""),
            );
            throw ((a.context = s), a);
          }
          var l = o[e];
          if (void 0 === l) return !1;
          if ("function" == typeof l) i(l, this, t);
          else {
            var c = l.length,
              h = f(l, c);
            for (r = 0; r < c; ++r) i(h[r], this, t);
          }
          return !0;
        }),
        (o.prototype.addListener = function (e, t) {
          return c(this, e, t, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return c(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return a(t), this.on(e, u(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, u(this, e, t)), this;
        }),
        (o.prototype.removeListener = function (e, t) {
          var r, i, n, o, s;
          if ((a(t), void 0 === (i = this._events))) return this;
          if (void 0 === (r = i[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (n = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (s = r[o].listener), (n = o);
                break;
              }
            if (n < 0) return this;
            0 === n
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, n),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var n,
              o = Object.keys(r);
            for (i = 0; i < o.length; ++i)
              "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (o.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (o.prototype.listenerCount = p),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    2806: (e) => {
      "use strict";
      e.exports = function (e, t) {
        for (
          var r = {}, i = Object.keys(e), n = Array.isArray(t), o = 0;
          o < i.length;
          o++
        ) {
          var s = i[o],
            a = e[s];
          (n ? -1 !== t.indexOf(s) : t(s, a, e)) && (r[s] = a);
        }
        return r;
      };
    },
    645: (e, t) => {
      (t.read = function (e, t, r, i, n) {
        var o,
          s,
          a = 8 * n - i - 1,
          l = (1 << a) - 1,
          c = l >> 1,
          h = -7,
          u = r ? n - 1 : 0,
          d = r ? -1 : 1,
          p = e[t + u];
        for (
          u += d, o = p & ((1 << -h) - 1), p >>= -h, h += a;
          h > 0;
          o = 256 * o + e[t + u], u += d, h -= 8
        );
        for (
          s = o & ((1 << -h) - 1), o >>= -h, h += i;
          h > 0;
          s = 256 * s + e[t + u], u += d, h -= 8
        );
        if (0 === o) o = 1 - c;
        else {
          if (o === l) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, i)), (o -= c);
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - i);
      }),
        (t.write = function (e, t, r, i, n, o) {
          var s,
            a,
            l,
            c = 8 * o - n - 1,
            h = (1 << c) - 1,
            u = h >> 1,
            d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : o - 1,
            f = i ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = h))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                  (t += s + u >= 1 ? d / l : d * Math.pow(2, 1 - u)) * l >= 2 &&
                    (s++, (l /= 2)),
                  s + u >= h
                    ? ((a = 0), (s = h))
                    : s + u >= 1
                    ? ((a = (t * l - 1) * Math.pow(2, n)), (s += u))
                    : ((a = t * Math.pow(2, u - 1) * Math.pow(2, n)), (s = 0)));
            n >= 8;
            e[r + p] = 255 & a, p += f, a /= 256, n -= 8
          );
          for (
            s = (s << n) | a, c += n;
            c > 0;
            e[r + p] = 255 & s, p += f, s /= 256, c -= 8
          );
          e[r + p - f] |= 128 * g;
        });
    },
    2307: (e, t, r) => {
      e = r.nmd(e);
      var i = "__lodash_hash_undefined__",
        n = 1,
        o = 2,
        s = 9007199254740991,
        a = "[object Arguments]",
        l = "[object Array]",
        c = "[object AsyncFunction]",
        h = "[object Boolean]",
        u = "[object Date]",
        d = "[object Error]",
        p = "[object Function]",
        f = "[object GeneratorFunction]",
        g = "[object Map]",
        m = "[object Number]",
        w = "[object Null]",
        y = "[object Object]",
        v = "[object Promise]",
        b = "[object Proxy]",
        _ = "[object RegExp]",
        E = "[object Set]",
        x = "[object String]",
        C = "[object Undefined]",
        O = "[object WeakMap]",
        I = "[object ArrayBuffer]",
        S = "[object DataView]",
        A = /^\[object .+?Constructor\]$/,
        P = /^(?:0|[1-9]\d*)$/,
        T = {};
      (T["[object Float32Array]"] =
        T["[object Float64Array]"] =
        T["[object Int8Array]"] =
        T["[object Int16Array]"] =
        T["[object Int32Array]"] =
        T["[object Uint8Array]"] =
        T["[object Uint8ClampedArray]"] =
        T["[object Uint16Array]"] =
        T["[object Uint32Array]"] =
          !0),
        (T[a] =
          T[l] =
          T[I] =
          T[h] =
          T[S] =
          T[u] =
          T[d] =
          T[p] =
          T[g] =
          T[m] =
          T[y] =
          T[_] =
          T[E] =
          T[x] =
          T[O] =
            !1);
      var k = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        N = "object" == typeof self && self && self.Object === Object && self,
        R = k || N || Function("return this")(),
        $ = t && !t.nodeType && t,
        L = $ && e && !e.nodeType && e,
        M = L && L.exports === $,
        j = M && k.process,
        U = (function () {
          try {
            return j && j.binding && j.binding("util");
          } catch (e) {}
        })(),
        D = U && U.isTypedArray;
      function B(e, t) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      function z(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      }
      function W(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var H,
        V,
        q,
        F = Array.prototype,
        K = Function.prototype,
        G = Object.prototype,
        Z = R["__core-js_shared__"],
        Y = K.toString,
        J = G.hasOwnProperty,
        Q = (H = /[^.]+$/.exec((Z && Z.keys && Z.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + H
          : "",
        X = G.toString,
        ee = RegExp(
          "^" +
            Y.call(J)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        ),
        te = M ? R.Buffer : void 0,
        re = R.Symbol,
        ie = R.Uint8Array,
        ne = G.propertyIsEnumerable,
        oe = F.splice,
        se = re ? re.toStringTag : void 0,
        ae = Object.getOwnPropertySymbols,
        le = te ? te.isBuffer : void 0,
        ce =
          ((V = Object.keys),
          (q = Object),
          function (e) {
            return V(q(e));
          }),
        he = Le(R, "DataView"),
        ue = Le(R, "Map"),
        de = Le(R, "Promise"),
        pe = Le(R, "Set"),
        fe = Le(R, "WeakMap"),
        ge = Le(Object, "create"),
        me = De(he),
        we = De(ue),
        ye = De(de),
        ve = De(pe),
        be = De(fe),
        _e = re ? re.prototype : void 0,
        Ee = _e ? _e.valueOf : void 0;
      function xe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function Ce(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function Oe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function Ie(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new Oe(); ++t < r; ) this.add(e[t]);
      }
      function Se(e) {
        var t = (this.__data__ = new Ce(e));
        this.size = t.size;
      }
      function Ae(e, t) {
        for (var r = e.length; r--; ) if (Be(e[r][0], t)) return r;
        return -1;
      }
      function Pe(e) {
        return null == e
          ? void 0 === e
            ? C
            : w
          : se && se in Object(e)
          ? (function (e) {
              var t = J.call(e, se),
                r = e[se];
              try {
                e[se] = void 0;
                var i = !0;
              } catch (e) {}
              var n = X.call(e);
              return i && (t ? (e[se] = r) : delete e[se]), n;
            })(e)
          : (function (e) {
              return X.call(e);
            })(e);
      }
      function Te(e) {
        return Ke(e) && Pe(e) == a;
      }
      function ke(e, t, r, i, s) {
        return (
          e === t ||
          (null == e || null == t || (!Ke(e) && !Ke(t))
            ? e != e && t != t
            : (function (e, t, r, i, s, c) {
                var p = We(e),
                  f = We(t),
                  w = p ? l : je(e),
                  v = f ? l : je(t),
                  b = (w = w == a ? y : w) == y,
                  C = (v = v == a ? y : v) == y,
                  O = w == v;
                if (O && He(e)) {
                  if (!He(t)) return !1;
                  (p = !0), (b = !1);
                }
                if (O && !b)
                  return (
                    c || (c = new Se()),
                    p || Ge(e)
                      ? Ne(e, t, r, i, s, c)
                      : (function (e, t, r, i, s, a, l) {
                          switch (r) {
                            case S:
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case I:
                              return !(
                                e.byteLength != t.byteLength ||
                                !a(new ie(e), new ie(t))
                              );
                            case h:
                            case u:
                            case m:
                              return Be(+e, +t);
                            case d:
                              return e.name == t.name && e.message == t.message;
                            case _:
                            case x:
                              return e == t + "";
                            case g:
                              var c = z;
                            case E:
                              var p = i & n;
                              if ((c || (c = W), e.size != t.size && !p))
                                return !1;
                              var f = l.get(e);
                              if (f) return f == t;
                              (i |= o), l.set(e, t);
                              var w = Ne(c(e), c(t), i, s, a, l);
                              return l.delete(e), w;
                            case "[object Symbol]":
                              if (Ee) return Ee.call(e) == Ee.call(t);
                          }
                          return !1;
                        })(e, t, w, r, i, s, c)
                  );
                if (!(r & n)) {
                  var A = b && J.call(e, "__wrapped__"),
                    P = C && J.call(t, "__wrapped__");
                  if (A || P) {
                    var T = A ? e.value() : e,
                      k = P ? t.value() : t;
                    return c || (c = new Se()), s(T, k, r, i, c);
                  }
                }
                return (
                  !!O &&
                  (c || (c = new Se()),
                  (function (e, t, r, i, o, s) {
                    var a = r & n,
                      l = Re(e),
                      c = l.length;
                    if (c != Re(t).length && !a) return !1;
                    for (var h = c; h--; ) {
                      var u = l[h];
                      if (!(a ? u in t : J.call(t, u))) return !1;
                    }
                    var d = s.get(e);
                    if (d && s.get(t)) return d == t;
                    var p = !0;
                    s.set(e, t), s.set(t, e);
                    for (var f = a; ++h < c; ) {
                      var g = e[(u = l[h])],
                        m = t[u];
                      if (i)
                        var w = a ? i(m, g, u, t, e, s) : i(g, m, u, e, t, s);
                      if (!(void 0 === w ? g === m || o(g, m, r, i, s) : w)) {
                        p = !1;
                        break;
                      }
                      f || (f = "constructor" == u);
                    }
                    if (p && !f) {
                      var y = e.constructor,
                        v = t.constructor;
                      y == v ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof y &&
                          y instanceof y &&
                          "function" == typeof v &&
                          v instanceof v) ||
                        (p = !1);
                    }
                    return s.delete(e), s.delete(t), p;
                  })(e, t, r, i, s, c))
                );
              })(e, t, r, i, ke, s))
        );
      }
      function Ne(e, t, r, i, s, a) {
        var l = r & n,
          c = e.length,
          h = t.length;
        if (c != h && !(l && h > c)) return !1;
        var u = a.get(e);
        if (u && a.get(t)) return u == t;
        var d = -1,
          p = !0,
          f = r & o ? new Ie() : void 0;
        for (a.set(e, t), a.set(t, e); ++d < c; ) {
          var g = e[d],
            m = t[d];
          if (i) var w = l ? i(m, g, d, t, e, a) : i(g, m, d, e, t, a);
          if (void 0 !== w) {
            if (w) continue;
            p = !1;
            break;
          }
          if (f) {
            if (
              !B(t, function (e, t) {
                if (((n = t), !f.has(n) && (g === e || s(g, e, r, i, a))))
                  return f.push(t);
                var n;
              })
            ) {
              p = !1;
              break;
            }
          } else if (g !== m && !s(g, m, r, i, a)) {
            p = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), p;
      }
      function Re(e) {
        return (function (e, t, r) {
          var i = t(e);
          return We(e)
            ? i
            : (function (e, t) {
                for (var r = -1, i = t.length, n = e.length; ++r < i; )
                  e[n + r] = t[r];
                return e;
              })(i, r(e));
        })(e, Ze, Me);
      }
      function $e(e, t) {
        var r,
          i,
          n = e.__data__;
        return (
          "string" == (i = typeof (r = t)) ||
          "number" == i ||
          "symbol" == i ||
          "boolean" == i
            ? "__proto__" !== r
            : null === r
        )
          ? n["string" == typeof t ? "string" : "hash"]
          : n.map;
      }
      function Le(e, t) {
        var r = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return (function (e) {
          return (
            !(
              !Fe(e) ||
              (function (e) {
                return !!Q && Q in e;
              })(e)
            ) && (Ve(e) ? ee : A).test(De(e))
          );
        })(r)
          ? r
          : void 0;
      }
      (xe.prototype.clear = function () {
        (this.__data__ = ge ? ge(null) : {}), (this.size = 0);
      }),
        (xe.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (xe.prototype.get = function (e) {
          var t = this.__data__;
          if (ge) {
            var r = t[e];
            return r === i ? void 0 : r;
          }
          return J.call(t, e) ? t[e] : void 0;
        }),
        (xe.prototype.has = function (e) {
          var t = this.__data__;
          return ge ? void 0 !== t[e] : J.call(t, e);
        }),
        (xe.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = ge && void 0 === t ? i : t),
            this
          );
        }),
        (Ce.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (Ce.prototype.delete = function (e) {
          var t = this.__data__,
            r = Ae(t, e);
          return !(
            r < 0 ||
            (r == t.length - 1 ? t.pop() : oe.call(t, r, 1), --this.size, 0)
          );
        }),
        (Ce.prototype.get = function (e) {
          var t = this.__data__,
            r = Ae(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (Ce.prototype.has = function (e) {
          return Ae(this.__data__, e) > -1;
        }),
        (Ce.prototype.set = function (e, t) {
          var r = this.__data__,
            i = Ae(r, e);
          return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
        }),
        (Oe.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new xe(),
              map: new (ue || Ce)(),
              string: new xe(),
            });
        }),
        (Oe.prototype.delete = function (e) {
          var t = $e(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (Oe.prototype.get = function (e) {
          return $e(this, e).get(e);
        }),
        (Oe.prototype.has = function (e) {
          return $e(this, e).has(e);
        }),
        (Oe.prototype.set = function (e, t) {
          var r = $e(this, e),
            i = r.size;
          return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
        }),
        (Ie.prototype.add = Ie.prototype.push =
          function (e) {
            return this.__data__.set(e, i), this;
          }),
        (Ie.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Se.prototype.clear = function () {
          (this.__data__ = new Ce()), (this.size = 0);
        }),
        (Se.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (Se.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (Se.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Se.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof Ce) {
            var i = r.__data__;
            if (!ue || i.length < 199)
              return i.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new Oe(i);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var Me = ae
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function (t, r) {
                    for (
                      var i = -1, n = null == t ? 0 : t.length, o = 0, s = [];
                      ++i < n;

                    ) {
                      var a = t[i];
                      (l = a), ne.call(e, l) && (s[o++] = a);
                    }
                    var l;
                    return s;
                  })(ae(e)));
            }
          : function () {
              return [];
            },
        je = Pe;
      function Ue(e, t) {
        return (
          !!(t = null == t ? s : t) &&
          ("number" == typeof e || P.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function De(e) {
        if (null != e) {
          try {
            return Y.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function Be(e, t) {
        return e === t || (e != e && t != t);
      }
      ((he && je(new he(new ArrayBuffer(1))) != S) ||
        (ue && je(new ue()) != g) ||
        (de && je(de.resolve()) != v) ||
        (pe && je(new pe()) != E) ||
        (fe && je(new fe()) != O)) &&
        (je = function (e) {
          var t = Pe(e),
            r = t == y ? e.constructor : void 0,
            i = r ? De(r) : "";
          if (i)
            switch (i) {
              case me:
                return S;
              case we:
                return g;
              case ye:
                return v;
              case ve:
                return E;
              case be:
                return O;
            }
          return t;
        });
      var ze = Te(
          (function () {
            return arguments;
          })(),
        )
          ? Te
          : function (e) {
              return Ke(e) && J.call(e, "callee") && !ne.call(e, "callee");
            },
        We = Array.isArray,
        He =
          le ||
          function () {
            return !1;
          };
      function Ve(e) {
        if (!Fe(e)) return !1;
        var t = Pe(e);
        return t == p || t == f || t == c || t == b;
      }
      function qe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
      }
      function Fe(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function Ke(e) {
        return null != e && "object" == typeof e;
      }
      var Ge = D
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })(D)
        : function (e) {
            return Ke(e) && qe(e.length) && !!T[Pe(e)];
          };
      function Ze(e) {
        return null != (t = e) && qe(t.length) && !Ve(t)
          ? (function (e, t) {
              var r = We(e),
                i = !r && ze(e),
                n = !r && !i && He(e),
                o = !r && !i && !n && Ge(e),
                s = r || i || n || o,
                a = s
                  ? (function (e, t) {
                      for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
                      return i;
                    })(e.length, String)
                  : [],
                l = a.length;
              for (var c in e)
                (!t && !J.call(e, c)) ||
                  (s &&
                    ("length" == c ||
                      (n && ("offset" == c || "parent" == c)) ||
                      (o &&
                        ("buffer" == c ||
                          "byteLength" == c ||
                          "byteOffset" == c)) ||
                      Ue(c, l))) ||
                  a.push(c);
              return a;
            })(e)
          : (function (e) {
              if (
                ((r = (t = e) && t.constructor),
                t !== (("function" == typeof r && r.prototype) || G))
              )
                return ce(e);
              var t,
                r,
                i = [];
              for (var n in Object(e))
                J.call(e, n) && "constructor" != n && i.push(n);
              return i;
            })(e);
        var t;
      }
      e.exports = function (e, t) {
        return ke(e, t);
      };
    },
    7563: (e, t, r) => {
      "use strict";
      const i = r(610),
        n = r(4020),
        o = r(500),
        s = r(2806),
        a = Symbol("encodeFragmentIdentifier");
      function l(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function c(e, t) {
        return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
      }
      function h(e, t) {
        return t.decode ? n(e) : e;
      }
      function u(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? u(Object.keys(e))
              .sort((e, t) => Number(e) - Number(t))
              .map((t) => e[t])
          : e;
      }
      function d(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function p(e) {
        const t = (e = d(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function f(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        l(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, i) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === i[e] && (i[e] = {}), (i[e][t[1]] = r))
                      : (i[e] = r);
                };
              case "bracket":
                return (e, r, i) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== i[e]
                        ? (i[e] = [].concat(i[e], r))
                        : (i[e] = [r])
                      : (i[e] = r);
                };
              case "colon-list-separator":
                return (e, r, i) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== i[e]
                        ? (i[e] = [].concat(i[e], r))
                        : (i[e] = [r])
                      : (i[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, i) => {
                  const n =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    o =
                      "string" == typeof r &&
                      !n &&
                      h(r, e).includes(e.arrayFormatSeparator);
                  r = o ? h(r, e) : r;
                  const s =
                    n || o
                      ? r.split(e.arrayFormatSeparator).map((t) => h(t, e))
                      : null === r
                      ? r
                      : h(r, e);
                  i[t] = s;
                };
              case "bracket-separator":
                return (t, r, i) => {
                  const n = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !n))
                    return void (i[t] = r ? h(r, e) : r);
                  const o =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => h(t, e));
                  void 0 !== i[t] ? (i[t] = [].concat(i[t], o)) : (i[t] = o);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          i = Object.create(null);
        if ("string" != typeof e) return i;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return i;
        for (const n of e.split("&")) {
          if ("" === n) continue;
          let [e, s] = o(t.decode ? n.replace(/\+/g, " ") : n, "=");
          (s =
            void 0 === s
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  t.arrayFormat,
                )
              ? s
              : h(s, t)),
            r(h(e, t), s, i);
        }
        for (const e of Object.keys(i)) {
          const r = i[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = f(r[e], t);
          else i[e] = f(r, t);
        }
        return !1 === t.sort
          ? i
          : (!0 === t.sort
              ? Object.keys(i).sort()
              : Object.keys(i).sort(t.sort)
            ).reduce((e, t) => {
              const r = i[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = u(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = p),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          l(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            i = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, i) => {
                    const n = r.length;
                    return void 0 === i ||
                      (e.skipNull && null === i) ||
                      (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, [c(t, e), "[", n, "]"].join("")]
                      : [...r, [c(t, e), "[", c(n, e), "]=", c(i, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, [c(t, e), "[]"].join("")]
                      : [...r, [c(t, e), "[]=", c(i, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, [c(t, e), ":list="].join("")]
                      : [...r, [c(t, e), ":list=", c(i, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (i, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? i
                      : ((n = null === n ? "" : n),
                        0 === i.length
                          ? [[c(r, e), t, c(n, e)].join("")]
                          : [[i, c(n, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, c(t, e)]
                      : [...r, [c(t, e), "=", c(i, e)].join("")];
              }
            })(t),
            n = {};
          for (const t of Object.keys(e)) r(t) || (n[t] = e[t]);
          const o = Object.keys(n);
          return (
            !1 !== t.sort && o.sort(t.sort),
            o
              .map((r) => {
                const n = e[r];
                return void 0 === n
                  ? ""
                  : null === n
                  ? c(r, t)
                  : Array.isArray(n)
                  ? 0 === n.length && "bracket-separator" === t.arrayFormat
                    ? c(r, t) + "[]"
                    : n.reduce(i(r), []).join("&")
                  : c(r, t) + "=" + c(n, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, i] = o(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(p(e), t) },
            t && t.parseFragmentIdentifier && i
              ? { fragmentIdentifier: h(i, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const i = d(e.url).split("?")[0] || "",
            n = t.extract(e.url),
            o = t.parse(n, { sort: !1 }),
            s = Object.assign(o, e.query);
          let l = t.stringify(s, r);
          l && (l = `?${l}`);
          let h = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (h = `#${
                r[a] ? c(e.fragmentIdentifier, r) : e.fragmentIdentifier
              }`),
            `${i}${l}${h}`
          );
        }),
        (t.pick = (e, r, i) => {
          i = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, i);
          const { url: n, query: o, fragmentIdentifier: l } = t.parseUrl(e, i);
          return t.stringifyUrl(
            { url: n, query: s(o, r), fragmentIdentifier: l },
            i,
          );
        }),
        (t.exclude = (e, r, i) => {
          const n = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, n, i);
        });
    },
    5346: (e) => {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var n = (i && i.stringify) || t;
        if ("object" == typeof e && null !== e) {
          var o = r.length + 1;
          if (1 === o) return e;
          var s = new Array(o);
          s[0] = n(e);
          for (var a = 1; a < o; a++) s[a] = n(r[a]);
          return s.join(" ");
        }
        if ("string" != typeof e) return e;
        var l = r.length;
        if (0 === l) return e;
        for (
          var c = "", h = 0, u = -1, d = (e && e.length) || 0, p = 0;
          p < d;

        ) {
          if (37 === e.charCodeAt(p) && p + 1 < d) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= l) break;
                if (null == r[h]) break;
                u < p && (c += e.slice(u, p)),
                  (c += Number(r[h])),
                  (u = p + 2),
                  p++;
                break;
              case 105:
                if (h >= l) break;
                if (null == r[h]) break;
                u < p && (c += e.slice(u, p)),
                  (c += Math.floor(Number(r[h]))),
                  (u = p + 2),
                  p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= l) break;
                if (void 0 === r[h]) break;
                u < p && (c += e.slice(u, p));
                var f = typeof r[h];
                if ("string" === f) {
                  (c += "'" + r[h] + "'"), (u = p + 2), p++;
                  break;
                }
                if ("function" === f) {
                  (c += r[h].name || "<anonymous>"), (u = p + 2), p++;
                  break;
                }
                (c += n(r[h])), (u = p + 2), p++;
                break;
              case 115:
                if (h >= l) break;
                u < p && (c += e.slice(u, p)),
                  (c += String(r[h])),
                  (u = p + 2),
                  p++;
                break;
              case 37:
                u < p && (c += e.slice(u, p)),
                  (c += "%"),
                  (u = p + 2),
                  p++,
                  h--;
            }
            ++h;
          }
          ++p;
        }
        return -1 === u ? e : (u < d && (c += e.slice(u)), c);
      };
    },
    3954: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.safeJsonParse = function (e) {
          if ("string" != typeof e)
            throw new Error("Cannot safe json parse value of type " + typeof e);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }),
        (t.safeJsonStringify = function (e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(e, (e, t) => (void 0 === t ? null : t));
        });
    },
    500: (e) => {
      "use strict";
      e.exports = (e, t) => {
        if ("string" != typeof e || "string" != typeof t)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    610: (e) => {
      "use strict";
      e.exports = (e) =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
        );
    },
    6559: (e, t, r) => {
      "use strict";
      const i = r(5346);
      e.exports = s;
      const n =
          (function () {
            function e(e) {
              return void 0 !== e && e;
            }
            try {
              return (
                "undefined" != typeof globalThis ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {},
        o = {
          mapHttpRequest: d,
          mapHttpResponse: d,
          wrapRequestSerializer: p,
          wrapResponseSerializer: p,
          wrapErrorSerializer: p,
          req: d,
          res: d,
          err: function (e) {
            const t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (const r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        };
      function s(e) {
        (e = e || {}).browser = e.browser || {};
        const t = e.browser.transmit;
        if (t && "function" != typeof t.send)
          throw Error("pino: transmit option must have a send function");
        const r = e.browser.write || n;
        e.browser.write && (e.browser.asObject = !0);
        const i = e.serializers || {},
          o = (function (e, t) {
            return Array.isArray(e)
              ? e.filter(function (e) {
                  return "!stdSerializers.err" !== e;
                })
              : !0 === e && Object.keys(t);
          })(e.browser.serialize, i);
        let d = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (d = !1),
          "function" == typeof r &&
            (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = "silent");
        const p = e.level || "info",
          g = Object.create(r);
        g.log || (g.log = f),
          Object.defineProperty(g, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(g, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                a(m, g, "error", "log"),
                a(m, g, "fatal", "error"),
                a(m, g, "warn", "error"),
                a(m, g, "info", "log"),
                a(m, g, "debug", "log"),
                a(m, g, "trace", "log");
            },
          });
        const m = {
          transmit: t,
          serialize: o,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: u(e),
        };
        return (
          (g.levels = s.levels),
          (g.level = p),
          (g.setMaxListeners =
            g.getMaxListeners =
            g.emit =
            g.addListener =
            g.on =
            g.prependListener =
            g.once =
            g.prependOnceListener =
            g.removeListener =
            g.removeAllListeners =
            g.listeners =
            g.listenerCount =
            g.eventNames =
            g.write =
            g.flush =
              f),
          (g.serializers = i),
          (g._serialize = o),
          (g._stdErrSerialize = d),
          (g.child = function (r, n) {
            if (!r) throw new Error("missing bindings for child Pino");
            (n = n || {}),
              o && r.serializers && (n.serializers = r.serializers);
            const s = n.serializers;
            if (o && s) {
              var a = Object.assign({}, i, s),
                u = !0 === e.browser.serialize ? Object.keys(a) : o;
              delete r.serializers, l([r], u, a, this._stdErrSerialize);
            }
            function d(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = c(e, r, "error")),
                (this.fatal = c(e, r, "fatal")),
                (this.warn = c(e, r, "warn")),
                (this.info = c(e, r, "info")),
                (this.debug = c(e, r, "debug")),
                (this.trace = c(e, r, "trace")),
                a && ((this.serializers = a), (this._serialize = u)),
                t && (this._logEvent = h([].concat(e._logEvent.bindings, r)));
            }
            return (d.prototype = this), new d(this);
          }),
          t && (g._logEvent = h()),
          g
        );
      }
      function a(e, t, r, o) {
        const a = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? f
            : a[r]
            ? a[r]
            : n[r] || n[o] || f),
          (function (e, t, r) {
            var o;
            (e.transmit || t[r] !== f) &&
              (t[r] =
                ((o = t[r]),
                function () {
                  const a = e.timestamp(),
                    c = new Array(arguments.length),
                    u =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === n
                        ? n
                        : this;
                  for (var d = 0; d < c.length; d++) c[d] = arguments[d];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      l(
                        c,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize,
                      ),
                    e.asObject
                      ? o.call(
                          u,
                          (function (e, t, r, n) {
                            e._serialize &&
                              l(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize,
                              );
                            const o = r.slice();
                            let a = o[0];
                            const c = {};
                            n && (c.time = n), (c.level = s.levels.values[t]);
                            let h = 1 + (0 | e._childLevel);
                            if (
                              (h < 1 && (h = 1),
                              null !== a && "object" == typeof a)
                            ) {
                              for (; h-- && "object" == typeof o[0]; )
                                Object.assign(c, o.shift());
                              a = o.length ? i(o.shift(), o) : void 0;
                            } else
                              "string" == typeof a && (a = i(o.shift(), o));
                            return void 0 !== a && (c.msg = a), c;
                          })(this, r, c, a),
                        )
                      : o.apply(u, c),
                    e.transmit)
                  ) {
                    const i = e.transmit.level || t.level,
                      n = s.levels.values[i],
                      o = s.levels.values[r];
                    if (o < n) return;
                    !(function (e, t, r) {
                      const i = t.send,
                        n = t.ts,
                        o = t.methodLevel,
                        s = t.methodValue,
                        a = t.val,
                        c = e._logEvent.bindings;
                      l(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize,
                      ),
                        (e._logEvent.ts = n),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === c.indexOf(e);
                        })),
                        (e._logEvent.level.label = o),
                        (e._logEvent.level.value = s),
                        i(o, e._logEvent, a),
                        (e._logEvent = h(c));
                    })(
                      this,
                      {
                        ts: a,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue:
                          s.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      c,
                    );
                  }
                }));
          })(e, t, r);
      }
      function l(e, t, r, i) {
        for (const n in e)
          if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
          else if ("object" == typeof e[n] && !Array.isArray(e[n]))
            for (const i in e[n])
              t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
      }
      function c(e, t, r) {
        return function () {
          const i = new Array(1 + arguments.length);
          i[0] = t;
          for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
          return e[r].apply(this, i);
        };
      }
      function h(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function u(e) {
        return "function" == typeof e.timestamp
          ? e.timestamp
          : !1 === e.timestamp
          ? g
          : m;
      }
      function d() {
        return {};
      }
      function p(e) {
        return e;
      }
      function f() {}
      function g() {
        return !1;
      }
      function m() {
        return Date.now();
      }
      (s.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (s.stdSerializers = o),
        (s.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: g,
            epochTime: m,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          },
        ));
    },
    329: (e, t, r) => {
      "use strict";
      r.d(t, {
        AccountCtrl: () => I,
        Id: () => g,
        ConfigCtrl: () => C,
        zv: () => y,
        uA: () => b,
        ExplorerCtrl: () => W,
        jb: () => F,
        OptionsCtrl: () => E,
        AV: () => w,
        ThemeCtrl: () => X,
        ToastCtrl: () => te,
        WcConnectionCtrl: () => V,
      }),
        Symbol();
      const i = Symbol(),
        n = Object.getPrototypeOf,
        o = new WeakMap(),
        s = (e, t = !0) => {
          o.set(e, t);
        },
        a = (e) => "object" == typeof e && null !== e,
        l = new WeakMap(),
        c = new WeakSet(),
        [h] = ((
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          r = (e) =>
            a(e) &&
            !c.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          h = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          u = new WeakMap(),
          d = (e, t, r = h) => {
            const i = u.get(e);
            if ((null == i ? void 0 : i[0]) === t) return i[1];
            const n = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              s(n, !0),
              u.set(e, [t, n]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(n, t)) return;
                const i = Reflect.get(e, t),
                  o = { value: i, enumerable: !0, configurable: !0 };
                if (c.has(i)) s(i, !1);
                else if (i instanceof Promise)
                  delete o.value, (o.get = () => r(i));
                else if (l.has(i)) {
                  const [e, t] = l.get(i);
                  o.value = d(e, t(), r);
                }
                Object.defineProperty(n, t, o);
              }),
              n
            );
          },
          p = new WeakMap(),
          f = [1, 1],
          g = (s) => {
            if (!a(s)) throw new Error("object required");
            const h = p.get(s);
            if (h) return h;
            let u = f[0];
            const m = new Set(),
              w = (e, t = ++f[0]) => {
                u !== t && ((u = t), m.forEach((r) => r(e, t)));
              };
            let y = f[1];
            const v = (e) => (t, r) => {
                const i = [...t];
                (i[1] = [e, ...i[1]]), w(i, r);
              },
              b = new Map(),
              _ = (e) => {
                var t;
                const r = b.get(e);
                r && (b.delete(e), null == (t = r[1]) || t.call(r));
              },
              E = Array.isArray(s)
                ? []
                : Object.create(Object.getPrototypeOf(s)),
              x = t(E, {
                deleteProperty(e, t) {
                  const r = Reflect.get(e, t);
                  _(t);
                  const i = Reflect.deleteProperty(e, t);
                  return i && w(["delete", [t], r]), i;
                },
                set(t, s, h, u) {
                  const d = Reflect.has(t, s),
                    f = Reflect.get(t, s, u);
                  if (d && (e(f, h) || (p.has(h) && e(f, p.get(h))))) return !0;
                  var y;
                  _(s),
                    a(h) &&
                      (h =
                        (((e) =>
                          e &&
                          (o.has(e)
                            ? o.get(e)
                            : n(e) === Object.prototype ||
                              n(e) === Array.prototype))((y = h)) &&
                          y[i]) ||
                        null ||
                        h);
                  let E = h;
                  if (h instanceof Promise)
                    h.then((e) => {
                      (h.status = "fulfilled"),
                        (h.value = e),
                        w(["resolve", [s], e]);
                    }).catch((e) => {
                      (h.status = "rejected"),
                        (h.reason = e),
                        w(["reject", [s], e]);
                    });
                  else {
                    !l.has(h) && r(h) && (E = g(h));
                    const e = !c.has(E) && l.get(E);
                    e &&
                      ((e, t) => {
                        if (b.has(e))
                          throw new Error("prop listener already exists");
                        if (m.size) {
                          const r = t[3](v(e));
                          b.set(e, [t, r]);
                        } else b.set(e, [t]);
                      })(s, e);
                  }
                  return Reflect.set(t, s, E, u), w(["set", [s], h, f]), !0;
                },
              });
            p.set(s, x);
            const C = [
              E,
              (e = ++f[1]) => (
                y === e ||
                  m.size ||
                  ((y = e),
                  b.forEach(([t]) => {
                    const r = t[1](e);
                    r > u && (u = r);
                  })),
                u
              ),
              d,
              (e) => (
                m.add(e),
                1 === m.size &&
                  b.forEach(([e, t], r) => {
                    if (t) throw new Error("remove already exists");
                    const i = e[3](v(r));
                    b.set(r, [e, i]);
                  }),
                () => {
                  m.delete(e),
                    0 === m.size &&
                      b.forEach(([e, t], r) => {
                        t && (t(), b.set(r, [e]));
                      });
                }
              ),
            ];
            return (
              l.set(x, C),
              Reflect.ownKeys(s).forEach((e) => {
                const t = Object.getOwnPropertyDescriptor(s, e);
                "value" in t &&
                  ((x[e] = s[e]), delete t.value, delete t.writable),
                  Object.defineProperty(E, e, t);
              }),
              x
            );
          },
        ) => [g, l, c, e, t, r, h, u, d, p, f])();
      function u(e = {}) {
        return h(e);
      }
      function d(e, t, r) {
        const i = l.get(e);
        let n;
        i || console.warn("Please use proxy object");
        const o = [],
          s = i[3];
        let a = !1;
        const c = s((e) => {
          o.push(e),
            r
              ? t(o.splice(0))
              : n ||
                (n = Promise.resolve().then(() => {
                  (n = void 0), a && t(o.splice(0));
                }));
        });
        return (
          (a = !0),
          () => {
            (a = !1), c();
          }
        );
      }
      var p = r(8764);
      let f;
      const g = {
          ethereumClient: void 0,
          setEthereumClient(e) {
            f = e;
          },
          client() {
            if (f) return f;
            throw new Error("ClientCtrl has no client set");
          },
        },
        m = u({
          history: ["ConnectWallet"],
          view: "ConnectWallet",
          data: void 0,
        }),
        w = {
          state: m,
          subscribe: (e) => d(m, () => e(m)),
          push(e, t) {
            e !== m.view &&
              ((m.view = e), t && (m.data = t), m.history.push(e));
          },
          reset(e) {
            (m.view = e), (m.history = [e]);
          },
          replace(e) {
            m.history.length > 1 &&
              ((m.history[m.history.length - 1] = e), (m.view = e));
          },
          goBack() {
            if (m.history.length > 1) {
              m.history.pop();
              const [e] = m.history.slice(-1);
              m.view = e;
            }
          },
          setData(e) {
            m.data = e;
          },
        },
        y = {
          WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          W3M_VERSION: "W3M_VERSION",
          W3M_PREFER_INJECTED_URL_FLAG: "w3mPreferInjected",
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            typeof window < "u" &&
            !(
              !window.matchMedia("(pointer:coarse)").matches &&
              !/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent,
              )
            ),
          isAndroid: () =>
            y.isMobile() &&
            navigator.userAgent.toLowerCase().includes("android"),
          isIos() {
            const e = navigator.userAgent.toLowerCase();
            return y.isMobile() && (e.includes("iphone") || e.includes("ipad"));
          },
          isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          formatNativeUrl(e, t, r) {
            if (y.isHttpUrl(e)) return this.formatUniversalUrl(e, t, r);
            let i = e;
            return (
              i.includes("://") ||
                ((i = e.replaceAll("/", "").replaceAll(":", "")),
                (i = `${i}://`)),
              this.setWalletConnectDeepLink(i, r),
              `${i}wc?uri=${encodeURIComponent(t)}`
            );
          },
          formatUniversalUrl(e, t, r) {
            if (!y.isHttpUrl(e)) return this.formatNativeUrl(e, t, r);
            let i = e;
            return (
              e.endsWith("/") && (i = e.slice(0, -1)),
              this.setWalletConnectDeepLink(i, r),
              `${i}/wc?uri=${encodeURIComponent(t)}`
            );
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            window.open(e, t, "noreferrer noopener");
          },
          setWalletConnectDeepLink(e, t) {
            localStorage.setItem(
              y.WALLETCONNECT_DEEPLINK_CHOICE,
              JSON.stringify({ href: e, name: t }),
            );
          },
          setWalletConnectAndroidDeepLink(e) {
            const [t] = e.split("?");
            localStorage.setItem(
              y.WALLETCONNECT_DEEPLINK_CHOICE,
              JSON.stringify({ href: t, name: "Android" }),
            );
          },
          removeWalletConnectDeepLink() {
            localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE);
          },
          setWeb3ModalVersionInStorage() {
            typeof localStorage < "u" &&
              localStorage.setItem(y.W3M_VERSION, "2.4.2");
          },
          getWalletRouterData() {
            var e;
            const t = null == (e = w.state.data) ? void 0 : e.Wallet;
            if (!t) throw new Error('Missing "Wallet" view data');
            return t;
          },
          getSwitchNetworkRouterData() {
            var e;
            const t = null == (e = w.state.data) ? void 0 : e.SwitchNetwork;
            if (!t) throw new Error('Missing "SwitchNetwork" view data');
            return t;
          },
          isPreferInjectedFlag: () =>
            typeof location < "u" &&
            new URLSearchParams(location.search).has(
              y.W3M_PREFER_INJECTED_URL_FLAG,
            ),
        },
        v = u({
          enabled:
            typeof location < "u" &&
            (location.hostname.includes("localhost") ||
              location.protocol.includes("https")),
          userSessionId: "",
          events: [],
          connectedWalletId: void 0,
        }),
        b = {
          state: v,
          subscribe: (e) =>
            d(v.events, () =>
              e(
                (function (e, t) {
                  const r = l.get(e);
                  r || console.warn("Please use proxy object");
                  const [i, n, o] = r;
                  return o(i, n(), void 0);
                })(v.events[v.events.length - 1]),
              ),
            ),
          initialize() {
            v.enabled &&
              typeof crypto < "u" &&
              (v.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            v.connectedWalletId = e;
          },
          click(e) {
            if (v.enabled) {
              const t = {
                type: "CLICK",
                name: e.name,
                userSessionId: v.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              v.events.push(t);
            }
          },
          track(e) {
            if (v.enabled) {
              const t = {
                type: "TRACK",
                name: e.name,
                userSessionId: v.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              v.events.push(t);
            }
          },
          view(e) {
            if (v.enabled) {
              const t = {
                type: "VIEW",
                name: e.name,
                userSessionId: v.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              v.events.push(t);
            }
          },
        },
        _ = u({
          selectedChain: void 0,
          chains: void 0,
          standaloneChains: void 0,
          standaloneUri: void 0,
          isStandalone: !1,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
          isPreferInjected: !1,
          walletConnectVersion: 1,
        }),
        E = {
          state: _,
          subscribe: (e) => d(_, () => e(_)),
          setChains(e) {
            _.chains = e;
          },
          setStandaloneChains(e) {
            _.standaloneChains = e;
          },
          setStandaloneUri(e) {
            _.standaloneUri = e;
          },
          getSelectedChain() {
            const e = g.client().getNetwork().chain;
            return e && (_.selectedChain = e), _.selectedChain;
          },
          setSelectedChain(e) {
            _.selectedChain = e;
          },
          setIsStandalone(e) {
            _.isStandalone = e;
          },
          setIsCustomDesktop(e) {
            _.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            _.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            _.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            _.isUiLoaded = e;
          },
          setWalletConnectVersion(e) {
            _.walletConnectVersion = e;
          },
          setIsPreferInjected(e) {
            _.isPreferInjected = e;
          },
          setIsAuth(e) {
            _.isAuth = e;
          },
        },
        x = u({
          projectId: "",
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chainImages: void 0,
          tokenImages: void 0,
          tokenContracts: void 0,
          standaloneChains: void 0,
          enableStandaloneMode: !1,
          enableAuthMode: !1,
          enableNetworkView: !1,
          enableAccountView: !0,
          enableExplorer: !0,
          defaultChain: void 0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        C = {
          state: x,
          subscribe: (e) => d(x, () => e(x)),
          setConfig(e) {
            var t, r, i, n;
            b.initialize(),
              E.setStandaloneChains(e.standaloneChains),
              E.setIsStandalone(
                !(null == (t = e.standaloneChains) || !t.length) ||
                  !!e.enableStandaloneMode,
              ),
              E.setIsAuth(!!e.enableAuthMode),
              E.setIsCustomMobile(
                !(null == (r = e.mobileWallets) || !r.length),
              ),
              E.setIsCustomDesktop(
                !(null == (i = e.desktopWallets) || !i.length),
              ),
              E.setWalletConnectVersion(
                null != (n = e.walletConnectVersion) ? n : 1,
              ),
              E.state.isStandalone ||
                (E.setChains(g.client().chains),
                E.setIsPreferInjected(
                  g.client().isInjectedProviderInstalled() &&
                    y.isPreferInjectedFlag(),
                )),
              e.defaultChain && E.setSelectedChain(e.defaultChain),
              y.setWeb3ModalVersionInStorage(),
              Object.assign(x, e);
          },
        },
        O = u({
          address: void 0,
          profileName: void 0,
          profileAvatar: void 0,
          profileLoading: !1,
          balanceLoading: !1,
          balance: void 0,
          isConnected: !1,
        }),
        I = {
          state: O,
          subscribe: (e) => d(O, () => e(O)),
          getAccount() {
            const e = g.client().getAccount();
            (O.address = e.address), (O.isConnected = e.isConnected);
          },
          async fetchProfile(e, t) {
            var r;
            try {
              O.profileLoading = !0;
              const i = t ?? O.address,
                n =
                  null == (r = E.state.chains)
                    ? void 0
                    : r.find((e) => 1 === e.id);
              if (i && n) {
                const t = await g
                  .client()
                  .fetchEnsName({ address: i, chainId: 1 });
                if (t) {
                  const r = await g
                    .client()
                    .fetchEnsAvatar({ name: t, chainId: 1 });
                  r && (await e(r)), (O.profileAvatar = r);
                }
                O.profileName = t;
              }
            } finally {
              O.profileLoading = !1;
            }
          },
          async fetchBalance(e) {
            try {
              const { chain: t } = g.client().getNetwork(),
                { tokenContracts: r } = C.state;
              let i;
              t && r && (i = r[t.id]), (O.balanceLoading = !0);
              const n = e ?? O.address;
              if (n) {
                const e = await g
                  .client()
                  .fetchBalance({ address: n, token: i });
                O.balance = { amount: e.formatted, symbol: e.symbol };
              }
            } finally {
              O.balanceLoading = !1;
            }
          },
          setAddress(e) {
            O.address = e;
          },
          setIsConnected(e) {
            O.isConnected = e;
          },
          resetBalance() {
            O.balance = void 0;
          },
          resetAccount() {
            (O.address = void 0),
              (O.isConnected = !1),
              (O.profileName = void 0),
              (O.profileAvatar = void 0),
              (O.balance = void 0);
          },
        },
        S = "https://explorer-api.walletconnect.com";
      async function A(e, t) {
        const r = new URL(e, S);
        return (
          r.searchParams.append("projectId", C.state.projectId),
          Object.entries(t).forEach(([e, t]) => {
            t && r.searchParams.append(e, String(t));
          }),
          (await fetch(r)).json()
        );
      }
      const P = async (e) => A("/w3m/v1/getDesktopListings", e),
        T = async (e) => A("/w3m/v1/getMobileListings", e),
        k = async (e) => A("/w3m/v1/getInjectedListings", e),
        N = async (e) => A("/w3m/v1/getAllListings", e),
        R = (e) =>
          `${S}/w3m/v1/getWalletImage/${e}?projectId=${C.state.projectId}`,
        $ = (e) =>
          `${S}/w3m/v1/getAssetImage/${e}?projectId=${C.state.projectId}`;
      var L = Object.defineProperty,
        M = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        D = (e, t, r) =>
          t in e
            ? L(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const B = y.isMobile(),
        z = u({
          wallets: { listings: [], total: 0, page: 1 },
          injectedWallets: [],
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        W = {
          state: z,
          async getRecomendedWallets() {
            const {
              explorerRecommendedWalletIds: e,
              explorerExcludedWalletIds: t,
            } = C.state;
            if ("NONE" === e || ("ALL" === t && !e)) return z.recomendedWallets;
            if (y.isArray(e)) {
              const t = { recommendedIds: e.join(",") },
                { listings: r } = await N(t),
                i = Object.values(r);
              i.sort((t, r) => e.indexOf(t.id) - e.indexOf(r.id)),
                (z.recomendedWallets = i);
            } else {
              const {
                  standaloneChains: e,
                  walletConnectVersion: r,
                  isAuth: i,
                } = E.state,
                n = e?.join(","),
                o = y.isArray(t),
                s = {
                  page: 1,
                  sdks: i ? "auth_v1" : void 0,
                  entries: y.RECOMMENDED_WALLET_AMOUNT,
                  chains: n,
                  version: r,
                  excludedIds: o ? t.join(",") : void 0,
                },
                { listings: a } = B ? await T(s) : await P(s);
              z.recomendedWallets = Object.values(a);
            }
            return z.recomendedWallets;
          },
          async getWallets(e) {
            const t = ((e, t) => {
                for (var r in t || (t = {})) j.call(t, r) && D(e, r, t[r]);
                if (M) for (var r of M(t)) U.call(t, r) && D(e, r, t[r]);
                return e;
              })({}, e),
              {
                explorerRecommendedWalletIds: r,
                explorerExcludedWalletIds: i,
              } = C.state,
              { recomendedWallets: n } = z;
            if ("ALL" === i) return z.wallets;
            t.search ||
              (n.length
                ? (t.excludedIds = n.map((e) => e.id).join(","))
                : y.isArray(r) && (t.excludedIds = r.join(","))),
              y.isArray(i) &&
                (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")),
              E.state.isAuth && (t.sdks = "auth_v1");
            const { page: o, search: s } = e,
              { listings: a, total: l } = B ? await T(t) : await P(t),
              c = Object.values(a),
              h = s ? "search" : "wallets";
            return (
              (z[h] = {
                listings: [...z[h].listings, ...c],
                total: l,
                page: o ?? 1,
              }),
              { listings: c, total: l }
            );
          },
          async getInjectedWallets() {
            const { listings: e } = await k({}),
              t = Object.values(e);
            return (z.injectedWallets = t), z.injectedWallets;
          },
          getWalletImageUrl: (e) => R(e),
          getAssetImageUrl: (e) => $(e),
          resetSearch() {
            z.search = { listings: [], total: 0, page: 1 };
          },
        },
        H = u({ pairingUri: "", pairingError: !1 }),
        V = {
          state: H,
          subscribe: (e) => d(H, () => e(H)),
          setPairingUri(e) {
            H.pairingUri = e;
          },
          setPairingError(e) {
            H.pairingError = e;
          },
        },
        q = u({ open: !1 }),
        F = {
          state: q,
          subscribe: (e) => d(q, () => e(q)),
          open: async (e) =>
            new Promise((t) => {
              const {
                  isStandalone: r,
                  isUiLoaded: i,
                  isDataLoaded: n,
                  isPreferInjected: o,
                  selectedChain: s,
                } = E.state,
                { isConnected: a } = I.state,
                { enableNetworkView: l } = C.state;
              if (r)
                E.setStandaloneUri(e?.uri),
                  E.setStandaloneChains(e?.standaloneChains),
                  w.reset("ConnectWallet");
              else if (null != e && e.route) w.reset(e.route);
              else if (a) w.reset("Account");
              else if (l) w.reset("SelectNetwork");
              else {
                if (o)
                  return (
                    g
                      .client()
                      .connectConnector("injected", s?.id)
                      .catch((e) => console.error(e)),
                    void t()
                  );
                w.reset("ConnectWallet");
              }
              const { pairingUri: c } = V.state;
              if (i && n && (r || c || a)) (q.open = !0), t();
              else {
                const e = setInterval(() => {
                  const r = E.state,
                    i = V.state;
                  r.isUiLoaded &&
                    r.isDataLoaded &&
                    (r.isStandalone || i.pairingUri || a) &&
                    (clearInterval(e), (q.open = !0), t());
                }, 200);
              }
            }),
          close() {
            q.open = !1;
          },
        };
      var K = Object.defineProperty,
        G = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        Y = Object.prototype.propertyIsEnumerable,
        J = (e, t, r) =>
          t in e
            ? K(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Q = u({
          themeMode:
            typeof matchMedia < "u" &&
            matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        }),
        X = {
          state: Q,
          subscribe: (e) => d(Q, () => e(Q)),
          setThemeConfig(e) {
            const { themeMode: t, themeVariables: r } = e;
            t && (Q.themeMode = t),
              r &&
                (Q.themeVariables = ((e, t) => {
                  for (var r in t || (t = {})) Z.call(t, r) && J(e, r, t[r]);
                  if (G) for (var r of G(t)) Y.call(t, r) && J(e, r, t[r]);
                  return e;
                })({}, r));
          },
        },
        ee = u({ open: !1, message: "", variant: "success" }),
        te = {
          state: ee,
          subscribe: (e) => d(ee, () => e(ee)),
          openToast(e, t) {
            (ee.open = !0), (ee.message = e), (ee.variant = t);
          },
          closeToast() {
            ee.open = !1;
          },
        };
      typeof window < "u" &&
        (window.Buffer || (window.Buffer = p.lW),
        window.global || (window.global = window),
        window.process || (window.process = { env: {} }));
    },
    4599: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => c });
      var i = r(329),
        n = Object.defineProperty,
        o = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable,
        l = (e, t, r) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      class c {
        constructor(e) {
          (this.openModal = i.jb.open),
            (this.closeModal = i.jb.close),
            (this.subscribeModal = i.jb.subscribe),
            (this.setTheme = i.ThemeCtrl.setThemeConfig),
            i.ThemeCtrl.setThemeConfig(e),
            i.ConfigCtrl.setConfig(
              ((e, t) => {
                for (var r in t || (t = {})) s.call(t, r) && l(e, r, t[r]);
                if (o) for (var r of o(t)) a.call(t, r) && l(e, r, t[r]);
                return e;
              })({ enableStandaloneMode: !0 }, e),
            ),
            this.initUi();
        }
        async initUi() {
          if (typeof window < "u") {
            await r.e(592).then(r.bind(r, 3504));
            const e = document.createElement("w3m-modal");
            document.body.insertAdjacentElement("beforeend", e),
              i.OptionsCtrl.setIsUiLoaded(!0);
          }
        }
      }
    },
    3504: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          W3mAccountButton: () => Ni,
          W3mConnectButton: () => an,
          W3mCoreButton: () => mn,
          W3mModal: () => Sn,
          W3mNetworkSwitch: () => Nn,
          W3mQrCode: () => Wr,
        });
      const i = window,
        n =
          i.ShadowRoot &&
          (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        o = Symbol(),
        s = new WeakMap();
      class a {
        constructor(e, t, r) {
          if (((this._$cssResult$ = !0), r !== o))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
            );
          (this.cssText = e), (this.t = t);
        }
        get styleSheet() {
          let e = this.o;
          const t = this.t;
          if (n && void 0 === e) {
            const r = void 0 !== t && 1 === t.length;
            r && (e = s.get(t)),
              void 0 === e &&
                ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
                r && s.set(t, e));
          }
          return e;
        }
        toString() {
          return this.cssText;
        }
      }
      const l = (e, ...t) => {
          const r =
            1 === e.length
              ? e[0]
              : t.reduce(
                  (t, r, i) =>
                    t +
                    ((e) => {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          e +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                      );
                    })(r) +
                    e[i + 1],
                  e[0],
                );
          return new a(r, e, o);
        },
        c = n
          ? (e) => e
          : (e) =>
              e instanceof CSSStyleSheet
                ? ((e) => {
                    let t = "";
                    for (const r of e.cssRules) t += r.cssText;
                    return ((e) =>
                      new a("string" == typeof e ? e : e + "", void 0, o))(t);
                  })(e)
                : e;
      var h;
      const u = window,
        d = u.trustedTypes,
        p = d ? d.emptyScript : "",
        f = u.reactiveElementPolyfillSupport,
        g = {
          toAttribute(e, t) {
            switch (t) {
              case Boolean:
                e = e ? p : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute(e, t) {
            let r = e;
            switch (t) {
              case Boolean:
                r = null !== e;
                break;
              case Number:
                r = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  r = JSON.parse(e);
                } catch (e) {
                  r = null;
                }
            }
            return r;
          },
        },
        m = (e, t) => t !== e && (t == t || e == e),
        w = {
          attribute: !0,
          type: String,
          converter: g,
          reflect: !1,
          hasChanged: m,
        },
        y = "finalized";
      class v extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this._$Eu();
        }
        static addInitializer(e) {
          var t;
          this.finalize(),
            (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
        }
        static get observedAttributes() {
          this.finalize();
          const e = [];
          return (
            this.elementProperties.forEach((t, r) => {
              const i = this._$Ep(r, t);
              void 0 !== i && (this._$Ev.set(i, r), e.push(i));
            }),
            e
          );
        }
        static createProperty(e, t = w) {
          if (
            (t.state && (t.attribute = !1),
            this.finalize(),
            this.elementProperties.set(e, t),
            !t.noAccessor && !this.prototype.hasOwnProperty(e))
          ) {
            const r = "symbol" == typeof e ? Symbol() : "__" + e,
              i = this.getPropertyDescriptor(e, r, t);
            void 0 !== i && Object.defineProperty(this.prototype, e, i);
          }
        }
        static getPropertyDescriptor(e, t, r) {
          return {
            get() {
              return this[t];
            },
            set(i) {
              const n = this[e];
              (this[t] = i), this.requestUpdate(e, n, r);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(e) {
          return this.elementProperties.get(e) || w;
        }
        static finalize() {
          if (this.hasOwnProperty(y)) return !1;
          this[y] = !0;
          const e = Object.getPrototypeOf(this);
          if (
            (e.finalize(),
            void 0 !== e.h && (this.h = [...e.h]),
            (this.elementProperties = new Map(e.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            const e = this.properties,
              t = [
                ...Object.getOwnPropertyNames(e),
                ...Object.getOwnPropertySymbols(e),
              ];
            for (const r of t) this.createProperty(r, e[r]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(e) {
          const t = [];
          if (Array.isArray(e)) {
            const r = new Set(e.flat(1 / 0).reverse());
            for (const e of r) t.unshift(c(e));
          } else void 0 !== e && t.push(c(e));
          return t;
        }
        static _$Ep(e, t) {
          const r = t.attribute;
          return !1 === r
            ? void 0
            : "string" == typeof r
            ? r
            : "string" == typeof e
            ? e.toLowerCase()
            : void 0;
        }
        _$Eu() {
          var e;
          (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (e = this.constructor.h) ||
              void 0 === e ||
              e.forEach((e) => e(this));
        }
        addController(e) {
          var t, r;
          (null !== (t = this._$ES) && void 0 !== t
            ? t
            : (this._$ES = [])
          ).push(e),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (r = e.hostConnected) || void 0 === r || r.call(e));
        }
        removeController(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.splice(this._$ES.indexOf(e) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((e, t) => {
            this.hasOwnProperty(t) &&
              (this._$Ei.set(t, this[t]), delete this[t]);
          });
        }
        createRenderRoot() {
          var e;
          const t =
            null !== (e = this.shadowRoot) && void 0 !== e
              ? e
              : this.attachShadow(this.constructor.shadowRootOptions);
          return (
            ((e, t) => {
              n
                ? (e.adoptedStyleSheets = t.map((e) =>
                    e instanceof CSSStyleSheet ? e : e.styleSheet,
                  ))
                : t.forEach((t) => {
                    const r = document.createElement("style"),
                      n = i.litNonce;
                    void 0 !== n && r.setAttribute("nonce", n),
                      (r.textContent = t.cssText),
                      e.appendChild(r);
                  });
            })(t, this.constructor.elementStyles),
            t
          );
        }
        connectedCallback() {
          var e;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (e = this._$ES) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostConnected) || void 0 === t
                  ? void 0
                  : t.call(e);
              });
        }
        enableUpdating(e) {}
        disconnectedCallback() {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((e) => {
              var t;
              return null === (t = e.hostDisconnected) || void 0 === t
                ? void 0
                : t.call(e);
            });
        }
        attributeChangedCallback(e, t, r) {
          this._$AK(e, r);
        }
        _$EO(e, t, r = w) {
          var i;
          const n = this.constructor._$Ep(e, r);
          if (void 0 !== n && !0 === r.reflect) {
            const o = (
              void 0 !==
              (null === (i = r.converter) || void 0 === i
                ? void 0
                : i.toAttribute)
                ? r.converter
                : g
            ).toAttribute(t, r.type);
            (this._$El = e),
              null == o ? this.removeAttribute(n) : this.setAttribute(n, o),
              (this._$El = null);
          }
        }
        _$AK(e, t) {
          var r;
          const i = this.constructor,
            n = i._$Ev.get(e);
          if (void 0 !== n && this._$El !== n) {
            const e = i.getPropertyOptions(n),
              o =
                "function" == typeof e.converter
                  ? { fromAttribute: e.converter }
                  : void 0 !==
                    (null === (r = e.converter) || void 0 === r
                      ? void 0
                      : r.fromAttribute)
                  ? e.converter
                  : g;
            (this._$El = n),
              (this[n] = o.fromAttribute(t, e.type)),
              (this._$El = null);
          }
        }
        requestUpdate(e, t, r) {
          let i = !0;
          void 0 !== e &&
            ((
              (r = r || this.constructor.getPropertyOptions(e)).hasChanged || m
            )(this[e], t)
              ? (this._$AL.has(e) || this._$AL.set(e, t),
                !0 === r.reflect &&
                  this._$El !== e &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(e, r)))
              : (i = !1)),
            !this.isUpdatePending && i && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (e) {
            Promise.reject(e);
          }
          const e = this.scheduleUpdate();
          return null != e && (await e), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var e;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei &&
              (this._$Ei.forEach((e, t) => (this[t] = e)),
              (this._$Ei = void 0));
          let t = !1;
          const r = this._$AL;
          try {
            (t = this.shouldUpdate(r)),
              t
                ? (this.willUpdate(r),
                  null === (e = this._$ES) ||
                    void 0 === e ||
                    e.forEach((e) => {
                      var t;
                      return null === (t = e.hostUpdate) || void 0 === t
                        ? void 0
                        : t.call(e);
                    }),
                  this.update(r))
                : this._$Ek();
          } catch (e) {
            throw ((t = !1), this._$Ek(), e);
          }
          t && this._$AE(r);
        }
        willUpdate(e) {}
        _$AE(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((e) => {
              var t;
              return null === (t = e.hostUpdated) || void 0 === t
                ? void 0
                : t.call(e);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
            this.updated(e);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(e) {
          return !0;
        }
        update(e) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(e) {}
        firstUpdated(e) {}
      }
      var b;
      (v[y] = !0),
        (v.elementProperties = new Map()),
        (v.elementStyles = []),
        (v.shadowRootOptions = { mode: "open" }),
        null == f || f({ ReactiveElement: v }),
        (null !== (h = u.reactiveElementVersions) && void 0 !== h
          ? h
          : (u.reactiveElementVersions = [])
        ).push("1.6.3");
      const _ = window,
        E = _.trustedTypes,
        x = E ? E.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
        C = "$lit$",
        O = `lit$${(Math.random() + "").slice(9)}$`,
        I = "?" + O,
        S = `<${I}>`,
        A = document,
        P = () => A.createComment(""),
        T = (e) =>
          null === e || ("object" != typeof e && "function" != typeof e),
        k = Array.isArray,
        N = "[ \t\n\f\r]",
        R = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        $ = /-->/g,
        L = />/g,
        M = RegExp(
          `>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
          "g",
        ),
        j = /'/g,
        U = /"/g,
        D = /^(?:script|style|textarea|title)$/i,
        B =
          (e) =>
          (t, ...r) => ({ _$litType$: e, strings: t, values: r }),
        z = B(1),
        W = B(2),
        H = Symbol.for("lit-noChange"),
        V = Symbol.for("lit-nothing"),
        q = new WeakMap(),
        F = A.createTreeWalker(A, 129, null, !1);
      function K(e, t) {
        if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== x ? x.createHTML(t) : t;
      }
      const G = (e, t) => {
        const r = e.length - 1,
          i = [];
        let n,
          o = 2 === t ? "<svg>" : "",
          s = R;
        for (let t = 0; t < r; t++) {
          const r = e[t];
          let a,
            l,
            c = -1,
            h = 0;
          for (
            ;
            h < r.length && ((s.lastIndex = h), (l = s.exec(r)), null !== l);

          )
            (h = s.lastIndex),
              s === R
                ? "!--" === l[1]
                  ? (s = $)
                  : void 0 !== l[1]
                  ? (s = L)
                  : void 0 !== l[2]
                  ? (D.test(l[2]) && (n = RegExp("</" + l[2], "g")), (s = M))
                  : void 0 !== l[3] && (s = M)
                : s === M
                ? ">" === l[0]
                  ? ((s = null != n ? n : R), (c = -1))
                  : void 0 === l[1]
                  ? (c = -2)
                  : ((c = s.lastIndex - l[2].length),
                    (a = l[1]),
                    (s = void 0 === l[3] ? M : '"' === l[3] ? U : j))
                : s === U || s === j
                ? (s = M)
                : s === $ || s === L
                ? (s = R)
                : ((s = M), (n = void 0));
          const u = s === M && e[t + 1].startsWith("/>") ? " " : "";
          o +=
            s === R
              ? r + S
              : c >= 0
              ? (i.push(a), r.slice(0, c) + C + r.slice(c) + O + u)
              : r + O + (-2 === c ? (i.push(void 0), t) : u);
        }
        return [K(e, o + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), i];
      };
      class Z {
        constructor({ strings: e, _$litType$: t }, r) {
          let i;
          this.parts = [];
          let n = 0,
            o = 0;
          const s = e.length - 1,
            a = this.parts,
            [l, c] = G(e, t);
          if (
            ((this.el = Z.createElement(l, r)),
            (F.currentNode = this.el.content),
            2 === t)
          ) {
            const e = this.el.content,
              t = e.firstChild;
            t.remove(), e.append(...t.childNodes);
          }
          for (; null !== (i = F.nextNode()) && a.length < s; ) {
            if (1 === i.nodeType) {
              if (i.hasAttributes()) {
                const e = [];
                for (const t of i.getAttributeNames())
                  if (t.endsWith(C) || t.startsWith(O)) {
                    const r = c[o++];
                    if ((e.push(t), void 0 !== r)) {
                      const e = i.getAttribute(r.toLowerCase() + C).split(O),
                        t = /([.?@])?(.*)/.exec(r);
                      a.push({
                        type: 1,
                        index: n,
                        name: t[2],
                        strings: e,
                        ctor:
                          "." === t[1]
                            ? ee
                            : "?" === t[1]
                            ? re
                            : "@" === t[1]
                            ? ie
                            : X,
                      });
                    } else a.push({ type: 6, index: n });
                  }
                for (const t of e) i.removeAttribute(t);
              }
              if (D.test(i.tagName)) {
                const e = i.textContent.split(O),
                  t = e.length - 1;
                if (t > 0) {
                  i.textContent = E ? E.emptyScript : "";
                  for (let r = 0; r < t; r++)
                    i.append(e[r], P()),
                      F.nextNode(),
                      a.push({ type: 2, index: ++n });
                  i.append(e[t], P());
                }
              }
            } else if (8 === i.nodeType)
              if (i.data === I) a.push({ type: 2, index: n });
              else {
                let e = -1;
                for (; -1 !== (e = i.data.indexOf(O, e + 1)); )
                  a.push({ type: 7, index: n }), (e += O.length - 1);
              }
            n++;
          }
        }
        static createElement(e, t) {
          const r = A.createElement("template");
          return (r.innerHTML = e), r;
        }
      }
      function Y(e, t, r = e, i) {
        var n, o, s, a;
        if (t === H) return t;
        let l =
          void 0 !== i
            ? null === (n = r._$Co) || void 0 === n
              ? void 0
              : n[i]
            : r._$Cl;
        const c = T(t) ? void 0 : t._$litDirective$;
        return (
          (null == l ? void 0 : l.constructor) !== c &&
            (null === (o = null == l ? void 0 : l._$AO) ||
              void 0 === o ||
              o.call(l, !1),
            void 0 === c ? (l = void 0) : ((l = new c(e)), l._$AT(e, r, i)),
            void 0 !== i
              ? ((null !== (s = (a = r)._$Co) && void 0 !== s
                  ? s
                  : (a._$Co = []))[i] = l)
              : (r._$Cl = l)),
          void 0 !== l && (t = Y(e, l._$AS(e, t.values), l, i)),
          t
        );
      }
      class J {
        constructor(e, t) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = e),
            (this._$AM = t);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(e) {
          var t;
          const {
              el: { content: r },
              parts: i,
            } = this._$AD,
            n = (
              null !== (t = null == e ? void 0 : e.creationScope) &&
              void 0 !== t
                ? t
                : A
            ).importNode(r, !0);
          F.currentNode = n;
          let o = F.nextNode(),
            s = 0,
            a = 0,
            l = i[0];
          for (; void 0 !== l; ) {
            if (s === l.index) {
              let t;
              2 === l.type
                ? (t = new Q(o, o.nextSibling, this, e))
                : 1 === l.type
                ? (t = new l.ctor(o, l.name, l.strings, this, e))
                : 6 === l.type && (t = new ne(o, this, e)),
                this._$AV.push(t),
                (l = i[++a]);
            }
            s !== (null == l ? void 0 : l.index) && ((o = F.nextNode()), s++);
          }
          return (F.currentNode = A), n;
        }
        v(e) {
          let t = 0;
          for (const r of this._$AV)
            void 0 !== r &&
              (void 0 !== r.strings
                ? (r._$AI(e, r, t), (t += r.strings.length - 2))
                : r._$AI(e[t])),
              t++;
        }
      }
      class Q {
        constructor(e, t, r, i) {
          var n;
          (this.type = 2),
            (this._$AH = V),
            (this._$AN = void 0),
            (this._$AA = e),
            (this._$AB = t),
            (this._$AM = r),
            (this.options = i),
            (this._$Cp =
              null === (n = null == i ? void 0 : i.isConnected) ||
              void 0 === n ||
              n);
        }
        get _$AU() {
          var e, t;
          return null !==
            (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
            void 0 !== t
            ? t
            : this._$Cp;
        }
        get parentNode() {
          let e = this._$AA.parentNode;
          const t = this._$AM;
          return (
            void 0 !== t &&
              11 === (null == e ? void 0 : e.nodeType) &&
              (e = t.parentNode),
            e
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          (e = Y(this, e, t)),
            T(e)
              ? e === V || null == e || "" === e
                ? (this._$AH !== V && this._$AR(), (this._$AH = V))
                : e !== this._$AH && e !== H && this._(e)
              : void 0 !== e._$litType$
              ? this.g(e)
              : void 0 !== e.nodeType
              ? this.$(e)
              : ((e) =>
                  k(e) ||
                  "function" ==
                    typeof (null == e ? void 0 : e[Symbol.iterator]))(e)
              ? this.T(e)
              : this._(e);
        }
        k(e) {
          return this._$AA.parentNode.insertBefore(e, this._$AB);
        }
        $(e) {
          this._$AH !== e && (this._$AR(), (this._$AH = this.k(e)));
        }
        _(e) {
          this._$AH !== V && T(this._$AH)
            ? (this._$AA.nextSibling.data = e)
            : this.$(A.createTextNode(e)),
            (this._$AH = e);
        }
        g(e) {
          var t;
          const { values: r, _$litType$: i } = e,
            n =
              "number" == typeof i
                ? this._$AC(e)
                : (void 0 === i.el &&
                    (i.el = Z.createElement(K(i.h, i.h[0]), this.options)),
                  i);
          if (
            (null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n
          )
            this._$AH.v(r);
          else {
            const e = new J(n, this),
              t = e.u(this.options);
            e.v(r), this.$(t), (this._$AH = e);
          }
        }
        _$AC(e) {
          let t = q.get(e.strings);
          return void 0 === t && q.set(e.strings, (t = new Z(e))), t;
        }
        T(e) {
          k(this._$AH) || ((this._$AH = []), this._$AR());
          const t = this._$AH;
          let r,
            i = 0;
          for (const n of e)
            i === t.length
              ? t.push(
                  (r = new Q(this.k(P()), this.k(P()), this, this.options)),
                )
              : (r = t[i]),
              r._$AI(n),
              i++;
          i < t.length &&
            (this._$AR(r && r._$AB.nextSibling, i), (t.length = i));
        }
        _$AR(e = this._$AA.nextSibling, t) {
          var r;
          for (
            null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t);
            e && e !== this._$AB;

          ) {
            const t = e.nextSibling;
            e.remove(), (e = t);
          }
        }
        setConnected(e) {
          var t;
          void 0 === this._$AM &&
            ((this._$Cp = e),
            null === (t = this._$AP) || void 0 === t || t.call(this, e));
        }
      }
      class X {
        constructor(e, t, r, i, n) {
          (this.type = 1),
            (this._$AH = V),
            (this._$AN = void 0),
            (this.element = e),
            (this.name = t),
            (this._$AM = i),
            (this.options = n),
            r.length > 2 || "" !== r[0] || "" !== r[1]
              ? ((this._$AH = Array(r.length - 1).fill(new String())),
                (this.strings = r))
              : (this._$AH = V);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e, t = this, r, i) {
          const n = this.strings;
          let o = !1;
          if (void 0 === n)
            (e = Y(this, e, t, 0)),
              (o = !T(e) || (e !== this._$AH && e !== H)),
              o && (this._$AH = e);
          else {
            const i = e;
            let s, a;
            for (e = n[0], s = 0; s < n.length - 1; s++)
              (a = Y(this, i[r + s], t, s)),
                a === H && (a = this._$AH[s]),
                o || (o = !T(a) || a !== this._$AH[s]),
                a === V
                  ? (e = V)
                  : e !== V && (e += (null != a ? a : "") + n[s + 1]),
                (this._$AH[s] = a);
          }
          o && !i && this.j(e);
        }
        j(e) {
          e === V
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != e ? e : "");
        }
      }
      class ee extends X {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(e) {
          this.element[this.name] = e === V ? void 0 : e;
        }
      }
      const te = E ? E.emptyScript : "";
      class re extends X {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(e) {
          e && e !== V
            ? this.element.setAttribute(this.name, te)
            : this.element.removeAttribute(this.name);
        }
      }
      class ie extends X {
        constructor(e, t, r, i, n) {
          super(e, t, r, i, n), (this.type = 5);
        }
        _$AI(e, t = this) {
          var r;
          if (
            (e = null !== (r = Y(this, e, t, 0)) && void 0 !== r ? r : V) === H
          )
            return;
          const i = this._$AH,
            n =
              (e === V && i !== V) ||
              e.capture !== i.capture ||
              e.once !== i.once ||
              e.passive !== i.passive,
            o = e !== V && (i === V || n);
          n && this.element.removeEventListener(this.name, this, i),
            o && this.element.addEventListener(this.name, this, e),
            (this._$AH = e);
        }
        handleEvent(e) {
          var t, r;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (r =
                    null === (t = this.options) || void 0 === t
                      ? void 0
                      : t.host) && void 0 !== r
                  ? r
                  : this.element,
                e,
              )
            : this._$AH.handleEvent(e);
        }
      }
      class ne {
        constructor(e, t, r) {
          (this.element = e),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = t),
            (this.options = r);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          Y(this, e);
        }
      }
      const oe = _.litHtmlPolyfillSupport;
      var se, ae;
      null == oe || oe(Z, Q),
        (null !== (b = _.litHtmlVersions) && void 0 !== b
          ? b
          : (_.litHtmlVersions = [])
        ).push("2.8.0");
      class le extends v {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var e, t;
          const r = super.createRenderRoot();
          return (
            (null !== (e = (t = this.renderOptions).renderBefore) &&
              void 0 !== e) ||
              (t.renderBefore = r.firstChild),
            r
          );
        }
        update(e) {
          const t = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            (this._$Do = ((e, t, r) => {
              var i, n;
              const o =
                null !== (i = null == r ? void 0 : r.renderBefore) &&
                void 0 !== i
                  ? i
                  : t;
              let s = o._$litPart$;
              if (void 0 === s) {
                const e =
                  null !== (n = null == r ? void 0 : r.renderBefore) &&
                  void 0 !== n
                    ? n
                    : null;
                o._$litPart$ = s = new Q(
                  t.insertBefore(P(), e),
                  e,
                  void 0,
                  null != r ? r : {},
                );
              }
              return s._$AI(e), s;
            })(t, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var e;
          super.connectedCallback(),
            null === (e = this._$Do) || void 0 === e || e.setConnected(!0);
        }
        disconnectedCallback() {
          var e;
          super.disconnectedCallback(),
            null === (e = this._$Do) || void 0 === e || e.setConnected(!1);
        }
        render() {
          return H;
        }
      }
      (le.finalized = !0),
        (le._$litElement$ = !0),
        null === (se = globalThis.litElementHydrateSupport) ||
          void 0 === se ||
          se.call(globalThis, { LitElement: le });
      const ce = globalThis.litElementPolyfillSupport;
      null == ce || ce({ LitElement: le }),
        (null !== (ae = globalThis.litElementVersions) && void 0 !== ae
          ? ae
          : (globalThis.litElementVersions = [])
        ).push("3.3.3");
      const he = (e) => (t) =>
          "function" == typeof t
            ? ((e, t) => (customElements.define(e, t), t))(e, t)
            : ((e, t) => {
                const { kind: r, elements: i } = t;
                return {
                  kind: r,
                  elements: i,
                  finisher(t) {
                    customElements.define(e, t);
                  },
                };
              })(e, t),
        ue = (e, t) =>
          "method" === t.kind && t.descriptor && !("value" in t.descriptor)
            ? {
                ...t,
                finisher(r) {
                  r.createProperty(t.key, e);
                },
              }
            : {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: t.key,
                initializer() {
                  "function" == typeof t.initializer &&
                    (this[t.key] = t.initializer.call(this));
                },
                finisher(r) {
                  r.createProperty(t.key, e);
                },
              },
        de = (e, t, r) => {
          t.constructor.createProperty(r, e);
        };
      function pe(e) {
        return (t, r) => (void 0 !== r ? de(e, t, r) : ue(e, t));
      }
      function fe(e) {
        return pe({ ...e, state: !0 });
      }
      var ge;
      null === (ge = window.HTMLSlotElement) ||
        void 0 === ge ||
        ge.prototype.assignedElements;
      var me = r(329);
      class we {
        constructor(e) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(e, t, r) {
          (this._$Ct = e), (this._$AM = t), (this._$Ci = r);
        }
        _$AS(e, t) {
          return this.update(e, t);
        }
        update(e, t) {
          return this.render(...t);
        }
      }
      const ye =
          ((Ce = class extends we {
            constructor(e) {
              var t;
              if (
                (super(e),
                1 !== e.type ||
                  "class" !== e.name ||
                  (null === (t = e.strings) || void 0 === t
                    ? void 0
                    : t.length) > 2)
              )
                throw Error(
                  "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.",
                );
            }
            render(e) {
              return (
                " " +
                Object.keys(e)
                  .filter((t) => e[t])
                  .join(" ") +
                " "
              );
            }
            update(e, [t]) {
              var r, i;
              if (void 0 === this.it) {
                (this.it = new Set()),
                  void 0 !== e.strings &&
                    (this.nt = new Set(
                      e.strings
                        .join(" ")
                        .split(/\s/)
                        .filter((e) => "" !== e),
                    ));
                for (const e in t)
                  t[e] &&
                    !(null === (r = this.nt) || void 0 === r
                      ? void 0
                      : r.has(e)) &&
                    this.it.add(e);
                return this.render(t);
              }
              const n = e.element.classList;
              this.it.forEach((e) => {
                e in t || (n.remove(e), this.it.delete(e));
              });
              for (const e in t) {
                const r = !!t[e];
                r === this.it.has(e) ||
                  (null === (i = this.nt) || void 0 === i
                    ? void 0
                    : i.has(e)) ||
                  (r
                    ? (n.add(e), this.it.add(e))
                    : (n.remove(e), this.it.delete(e)));
              }
              return H;
            }
          }),
          (...e) => ({ _$litDirective$: Ce, values: e })),
        ve = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        be = (e) => 1e3 * e,
        _e = (e) => e / 1e3,
        Ee = () => {},
        xe = (e) => e;
      var Ce;
      function Oe(e, t = !0) {
        if (e && "finished" !== e.playState)
          try {
            e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
          } catch (e) {}
      }
      const Ie = (e) => e(),
        Se = (e, t, r = ve.duration) =>
          new Proxy(
            { animations: e.map(Ie).filter(Boolean), duration: r, options: t },
            Ae,
          ),
        Ae = {
          get: (e, t) => {
            const r = e.animations[0];
            switch (t) {
              case "duration":
                return e.duration;
              case "currentTime":
                return _e((null == r ? void 0 : r[t]) || 0);
              case "playbackRate":
              case "playState":
                return null == r ? void 0 : r[t];
              case "finished":
                return (
                  e.finished ||
                    (e.finished = Promise.all(e.animations.map(Pe)).catch(Ee)),
                  e.finished
                );
              case "stop":
                return () => {
                  e.animations.forEach((e) => Oe(e));
                };
              case "forEachNative":
                return (t) => {
                  e.animations.forEach((r) => t(r, e));
                };
              default:
                return void 0 === (null == r ? void 0 : r[t])
                  ? void 0
                  : () => e.animations.forEach((e) => e[t]());
            }
          },
          set: (e, t, r) => {
            switch (t) {
              case "currentTime":
                r = be(r);
              case "currentTime":
              case "playbackRate":
                for (let i = 0; i < e.animations.length; i++)
                  e.animations[i][t] = r;
                return !0;
            }
            return !1;
          },
        },
        Pe = (e) => e.finished,
        Te = (e) => "object" == typeof e && Boolean(e.createAnimation),
        ke = (e) => "number" == typeof e,
        Ne = (e) => Array.isArray(e) && !ke(e[0]),
        Re = (e, t, r) => -r * e + r * t + e,
        $e = (e, t, r) => (t - e == 0 ? 1 : (r - e) / (t - e));
      function Le(e, t) {
        const r = e[e.length - 1];
        for (let i = 1; i <= t; i++) {
          const n = $e(0, t, i);
          e.push(Re(r, 1, n));
        }
      }
      const Me = (e, t, r) => Math.min(Math.max(r, e), t);
      const je = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
        Ue = 1e-7,
        De = 12;
      function Be(e, t, r, i) {
        if (e === t && r === i) return xe;
        return (n) =>
          0 === n || 1 === n
            ? n
            : je(
                (function (e, t, r, i, n) {
                  let o,
                    s,
                    a = 0;
                  do {
                    (s = t + (r - t) / 2),
                      (o = je(s, i, n) - e),
                      o > 0 ? (r = s) : (t = s);
                  } while (Math.abs(o) > Ue && ++a < De);
                  return s;
                })(n, 0, 1, e, r),
                t,
                i,
              );
      }
      const ze = (e) => "function" == typeof e,
        We = (e) => Array.isArray(e) && ke(e[0]),
        He = {
          ease: Be(0.25, 0.1, 0.25, 1),
          "ease-in": Be(0.42, 0, 1, 1),
          "ease-in-out": Be(0.42, 0, 0.58, 1),
          "ease-out": Be(0, 0, 0.58, 1),
        },
        Ve = /\((.*?)\)/;
      function qe(e) {
        if (ze(e)) return e;
        if (We(e)) return Be(...e);
        if (He[e]) return He[e];
        if (e.startsWith("steps")) {
          const t = Ve.exec(e);
          if (t) {
            const e = t[1].split(",");
            return (
              (e, t = "end") =>
              (r) => {
                const i =
                    (r =
                      "end" === t ? Math.min(r, 0.999) : Math.max(r, 0.001)) *
                    e,
                  n = "end" === t ? Math.floor(i) : Math.ceil(i);
                return Me(0, 1, n / e);
              }
            )(parseFloat(e[0]), e[1].trim());
          }
        }
        return xe;
      }
      class Fe {
        constructor(
          e,
          t = [0, 1],
          {
            easing: r,
            duration: i = ve.duration,
            delay: n = ve.delay,
            endDelay: o = ve.endDelay,
            repeat: s = ve.repeat,
            offset: a,
            direction: l = "normal",
          } = {},
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = xe),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            })),
            (r = r || ve.easing),
            Te(r))
          ) {
            const e = r.createAnimation(t);
            (r = e.easing), (t = e.keyframes || t), (i = e.duration || i);
          }
          (this.repeat = s),
            (this.easing = Ne(r) ? xe : qe(r)),
            this.updateDuration(i);
          const c = (function (
            e,
            t = (function (e) {
              const t = [0];
              return Le(t, e - 1), t;
            })(e.length),
            r = xe,
          ) {
            const i = e.length,
              n = i - t.length;
            return (
              n > 0 && Le(t, n),
              (n) => {
                let o = 0;
                for (; o < i - 2 && !(n < t[o + 1]); o++);
                let s = Me(0, 1, $e(t[o], t[o + 1], n));
                const a = (function (e, t) {
                  return Ne(e)
                    ? e[
                        ((e, t, r) => {
                          const i = t - e;
                          return ((((r - e) % i) + i) % i) + e;
                        })(0, e.length, t)
                      ]
                    : e;
                })(r, o);
                return (s = a(s)), Re(e[o], e[o + 1], s);
              }
            );
          })(t, a, Ne(r) ? r.map(qe) : xe);
          (this.tick = (t) => {
            var r;
            let i = 0;
            (i =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (t - this.startTime) * this.rate),
              (this.t = i),
              (i /= 1e3),
              (i = Math.max(i - n, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (i = this.totalDuration);
            const s = i / this.duration;
            let a = Math.floor(s),
              h = s % 1;
            !h && s >= 1 && (h = 1), 1 === h && a--;
            const u = a % 2;
            ("reverse" === l ||
              ("alternate" === l && u) ||
              ("alternate-reverse" === l && !u)) &&
              (h = 1 - h);
            const d = i >= this.totalDuration ? 1 : Math.min(h, 1),
              p = c(this.easing(d));
            e(p),
              void 0 === this.pauseTime &&
              ("finished" === this.playState || i >= this.totalDuration + o)
                ? ((this.playState = "finished"),
                  null === (r = this.resolve) ||
                    void 0 === r ||
                    r.call(this, p))
                : "idle" !== this.playState &&
                  (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            this.play();
        }
        play() {
          const e = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = e - this.pauseTime)
              : this.startTime || (this.startTime = e),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var e;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (e = this.reject) || void 0 === e || e.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(e) {
          (this.duration = e), (this.totalDuration = e * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(e) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = e)
            : (this.startTime = performance.now() - e / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(e) {
          this.rate = e;
        }
      }
      class Ke {
        setAnimation(e) {
          (this.animation = e),
            null == e ||
              e.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      const Ge = new WeakMap();
      function Ze(e) {
        return (
          Ge.has(e) || Ge.set(e, { transforms: [], values: new Map() }),
          Ge.get(e)
        );
      }
      const Ye = ["", "X", "Y", "Z"],
        Je = { x: "translateX", y: "translateY", z: "translateZ" },
        Qe = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (e) => e + "deg",
        },
        Xe = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (e) => e + "px",
          },
          rotate: Qe,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: xe },
          skew: Qe,
        },
        et = new Map(),
        tt = (e) => `--motion-${e}`,
        rt = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((e) => {
        Ye.forEach((t) => {
          rt.push(e + t), et.set(tt(e + t), Xe[e]);
        });
      });
      const it = (e, t) => rt.indexOf(e) - rt.indexOf(t),
        nt = new Set(rt),
        ot = (e) => nt.has(e),
        st = (e) => e.sort(it).reduce(at, "").trim(),
        at = (e, t) => `${e} ${t}(var(${tt(t)}))`,
        lt = (e) => e.startsWith("--"),
        ct = new Set(),
        ht = (e, t) => document.createElement("div").animate(e, t),
        ut = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              ht({ opacity: [1] });
            } catch (e) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            Boolean(ht({ opacity: [0, 1] }, { duration: 0.001 }).finished),
          linearEasing: () => {
            try {
              ht({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (e) {
              return !1;
            }
            return !0;
          },
        },
        dt = {},
        pt = {};
      for (const e in ut)
        pt[e] = () => (void 0 === dt[e] && (dt[e] = ut[e]()), dt[e]);
      const ft = (e, t) =>
          ze(e)
            ? pt.linearEasing()
              ? `linear(${((e, t) => {
                  let r = "";
                  const i = Math.round(t / 0.015);
                  for (let t = 0; t < i; t++) r += e($e(0, i - 1, t)) + ", ";
                  return r.substring(0, r.length - 2);
                })(e, t)})`
              : ve.easing
            : We(e)
            ? gt(e)
            : e,
        gt = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`;
      function mt(e) {
        return Je[e] && (e = Je[e]), ot(e) ? tt(e) : e;
      }
      const wt = (e, t) => {
          t = mt(t);
          let r = lt(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
          if (!r && 0 !== r) {
            const e = et.get(t);
            e && (r = e.initialValue);
          }
          return r;
        },
        yt = (e, t, r) => {
          (t = mt(t)), lt(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
        };
      function vt(e, t, r, i = {}, n) {
        const o = window.__MOTION_DEV_TOOLS_RECORD,
          s = !1 !== i.record && o;
        let a,
          {
            duration: l = ve.duration,
            delay: c = ve.delay,
            endDelay: h = ve.endDelay,
            repeat: u = ve.repeat,
            easing: d = ve.easing,
            persist: p = !1,
            direction: f,
            offset: g,
            allowWebkitAcceleration: m = !1,
          } = i;
        const w = Ze(e),
          y = ot(t);
        let v = pt.waapi();
        y &&
          ((e, t) => {
            Je[t] && (t = Je[t]);
            const { transforms: r } = Ze(e);
            var i, n;
            (n = t),
              -1 === (i = r).indexOf(n) && i.push(n),
              (e.style.transform = st(r));
          })(e, t);
        const b = mt(t),
          _ = (function (e, t) {
            return e.has(t) || e.set(t, new Ke()), e.get(t);
          })(w.values, b),
          E = et.get(b);
        return (
          Oe(_.animation, !(Te(d) && _.generator) && !1 !== i.record),
          () => {
            const w = () => {
              var t, r;
              return null !==
                (r =
                  null !== (t = wt(e, b)) && void 0 !== t
                    ? t
                    : null == E
                    ? void 0
                    : E.initialValue) && void 0 !== r
                ? r
                : 0;
            };
            let x = (function (e, t) {
              for (let r = 0; r < e.length; r++)
                null === e[r] && (e[r] = r ? e[r - 1] : t());
              return e;
            })(((e) => (Array.isArray(e) ? e : [e]))(r), w);
            const C = (function (e, t) {
              var r;
              let i = (null == t ? void 0 : t.toDefaultUnit) || xe;
              const n = e[e.length - 1];
              if ("string" == typeof n) {
                const e =
                  (null === (r = n.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === r
                    ? void 0
                    : r[2]) || "";
                e && (i = (t) => t + e);
              }
              return i;
            })(x, E);
            if (Te(d)) {
              const e = d.createAnimation(x, "opacity" !== t, w, b, _);
              (d = e.easing), (x = e.keyframes || x), (l = e.duration || l);
            }
            if (
              (lt(b) &&
                (pt.cssRegisterProperty()
                  ? (function (e) {
                      if (!ct.has(e)) {
                        ct.add(e);
                        try {
                          const { syntax: t, initialValue: r } = et.has(e)
                            ? et.get(e)
                            : {};
                          CSS.registerProperty({
                            name: e,
                            inherits: !1,
                            syntax: t,
                            initialValue: r,
                          });
                        } catch (e) {}
                      }
                    })(b)
                  : (v = !1)),
              y &&
                !pt.linearEasing() &&
                (ze(d) || (Ne(d) && d.some(ze))) &&
                (v = !1),
              v)
            ) {
              E && (x = x.map((e) => (ke(e) ? E.toDefaultUnit(e) : e))),
                1 !== x.length ||
                  (pt.partialKeyframes() && !s) ||
                  x.unshift(w());
              const t = {
                delay: be(c),
                duration: be(l),
                endDelay: be(h),
                easing: Ne(d) ? void 0 : ft(d, l),
                direction: f,
                iterations: u + 1,
                fill: "both",
              };
              (a = e.animate(
                {
                  [b]: x,
                  offset: g,
                  easing: Ne(d) ? d.map((e) => ft(e, l)) : void 0,
                },
                t,
              )),
                a.finished ||
                  (a.finished = new Promise((e, t) => {
                    (a.onfinish = e), (a.oncancel = t);
                  }));
              const r = x[x.length - 1];
              a.finished
                .then(() => {
                  p || (yt(e, b, r), a.cancel());
                })
                .catch(Ee),
                m || (a.playbackRate = 1.000001);
            } else if (n && y)
              (x = x.map((e) => ("string" == typeof e ? parseFloat(e) : e))),
                1 === x.length && x.unshift(parseFloat(w())),
                (a = new n(
                  (t) => {
                    yt(e, b, C ? C(t) : t);
                  },
                  x,
                  Object.assign(Object.assign({}, i), {
                    duration: l,
                    easing: d,
                  }),
                ));
            else {
              const t = x[x.length - 1];
              yt(e, b, E && ke(t) ? E.toDefaultUnit(t) : t);
            }
            return (
              s &&
                o(
                  e,
                  t,
                  x,
                  { duration: l, delay: c, easing: d, repeat: u, offset: g },
                  "motion-one",
                ),
              _.setAnimation(a),
              a
            );
          }
        );
      }
      const bt = (e, t) =>
        e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
      function _t(e, t, r) {
        return ze(e) ? e(t, r) : e;
      }
      const Et =
        ((xt = Fe),
        function (e, t, r = {}) {
          const i = (e = (function (e, t) {
            return (
              "string" == typeof e
                ? (e = document.querySelectorAll(e))
                : e instanceof Element && (e = [e]),
              Array.from(e || [])
            );
          })(e)).length;
          Boolean(i), Boolean(t);
          const n = [];
          for (let o = 0; o < i; o++) {
            const s = e[o];
            for (const e in t) {
              const a = bt(r, e);
              a.delay = _t(a.delay, o, i);
              const l = vt(s, e, t[e], a, xt);
              n.push(l);
            }
          }
          return Se(n, r, r.duration);
        });
      var xt;
      function Ct(e, t = {}) {
        return Se(
          [
            () => {
              const r = new Fe(e, [0, 1], t);
              return r.finished.catch(() => {}), r;
            },
          ],
          t,
          t.duration,
        );
      }
      function Ot(e, t, r) {
        return (ze(e) ? Ct : Et)(e, t, r);
      }
      var It = r(4249),
        St = Object.defineProperty,
        At = Object.getOwnPropertySymbols,
        Pt = Object.prototype.hasOwnProperty,
        Tt = Object.prototype.propertyIsEnumerable,
        kt = (e, t, r) =>
          t in e
            ? St(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Nt = (e, t) => {
          for (var r in t || (t = {})) Pt.call(t, r) && kt(e, r, t[r]);
          if (At) for (var r of At(t)) Tt.call(t, r) && kt(e, r, t[r]);
          return e;
        };
      const Rt = {
          getPreset: (e) =>
            ({
              "--w3m-accent-color": "#3396FF",
              "--w3m-accent-fill-color": "#FFFFFF",
              "--w3m-z-index": "89",
              "--w3m-background-color": "#3396FF",
              "--w3m-background-border-radius": "8px",
              "--w3m-container-border-radius": "30px",
              "--w3m-wallet-icon-border-radius": "15px",
              "--w3m-wallet-icon-large-border-radius": "30px",
              "--w3m-wallet-icon-small-border-radius": "7px",
              "--w3m-input-border-radius": "28px",
              "--w3m-button-border-radius": "10px",
              "--w3m-notification-border-radius": "36px",
              "--w3m-secondary-button-border-radius": "28px",
              "--w3m-icon-button-border-radius": "50%",
              "--w3m-button-hover-highlight-border-radius": "10px",
              "--w3m-text-big-bold-size": "20px",
              "--w3m-text-big-bold-weight": "600",
              "--w3m-text-big-bold-line-height": "24px",
              "--w3m-text-big-bold-letter-spacing": "-0.03em",
              "--w3m-text-big-bold-text-transform": "none",
              "--w3m-text-xsmall-bold-size": "10px",
              "--w3m-text-xsmall-bold-weight": "700",
              "--w3m-text-xsmall-bold-line-height": "12px",
              "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
              "--w3m-text-xsmall-bold-text-transform": "uppercase",
              "--w3m-text-xsmall-regular-size": "12px",
              "--w3m-text-xsmall-regular-weight": "600",
              "--w3m-text-xsmall-regular-line-height": "14px",
              "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
              "--w3m-text-xsmall-regular-text-transform": "none",
              "--w3m-text-small-thin-size": "14px",
              "--w3m-text-small-thin-weight": "500",
              "--w3m-text-small-thin-line-height": "16px",
              "--w3m-text-small-thin-letter-spacing": "-0.03em",
              "--w3m-text-small-thin-text-transform": "none",
              "--w3m-text-small-regular-size": "14px",
              "--w3m-text-small-regular-weight": "600",
              "--w3m-text-small-regular-line-height": "16px",
              "--w3m-text-small-regular-letter-spacing": "-0.03em",
              "--w3m-text-small-regular-text-transform": "none",
              "--w3m-text-medium-regular-size": "16px",
              "--w3m-text-medium-regular-weight": "600",
              "--w3m-text-medium-regular-line-height": "20px",
              "--w3m-text-medium-regular-letter-spacing": "-0.03em",
              "--w3m-text-medium-regular-text-transform": "none",
              "--w3m-font-family":
                "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
              "--w3m-success-color": "rgb(38,181,98)",
              "--w3m-error-color": "rgb(242, 90, 103)",
            })[e],
          setTheme() {
            const e = document.querySelector(":root"),
              { themeVariables: t } = me.ThemeCtrl.state;
            if (e) {
              const r = Nt(
                Nt(
                  Nt(
                    Nt(
                      {},
                      (function () {
                        var e;
                        const t = {
                          light: {
                            foreground: {
                              1: "rgb(20,20,20)",
                              2: "rgb(121,134,134)",
                              3: "rgb(158,169,169)",
                            },
                            background: {
                              1: "rgb(255,255,255)",
                              2: "rgb(241,243,243)",
                              3: "rgb(228,231,231)",
                            },
                            overlay: "rgba(0,0,0,0.1)",
                          },
                          dark: {
                            foreground: {
                              1: "rgb(228,231,231)",
                              2: "rgb(148,158,158)",
                              3: "rgb(110,119,119)",
                            },
                            background: {
                              1: "rgb(20,20,20)",
                              2: "rgb(39,42,42)",
                              3: "rgb(59,64,64)",
                            },
                            overlay: "rgba(255,255,255,0.1)",
                          },
                        }[
                          null != (e = me.ThemeCtrl.state.themeMode)
                            ? e
                            : "dark"
                        ];
                        return {
                          "--w3m-color-fg-1": t.foreground[1],
                          "--w3m-color-fg-2": t.foreground[2],
                          "--w3m-color-fg-3": t.foreground[3],
                          "--w3m-color-bg-1": t.background[1],
                          "--w3m-color-bg-2": t.background[2],
                          "--w3m-color-bg-3": t.background[3],
                          "--w3m-color-overlay": t.overlay,
                        };
                      })(),
                    ),
                    {
                      "--w3m-accent-color": "#3396FF",
                      "--w3m-accent-fill-color": "#FFFFFF",
                      "--w3m-z-index": "89",
                      "--w3m-background-color": "#3396FF",
                      "--w3m-background-border-radius": "8px",
                      "--w3m-container-border-radius": "30px",
                      "--w3m-wallet-icon-border-radius": "15px",
                      "--w3m-wallet-icon-large-border-radius": "30px",
                      "--w3m-wallet-icon-small-border-radius": "7px",
                      "--w3m-input-border-radius": "28px",
                      "--w3m-button-border-radius": "10px",
                      "--w3m-notification-border-radius": "36px",
                      "--w3m-secondary-button-border-radius": "28px",
                      "--w3m-icon-button-border-radius": "50%",
                      "--w3m-button-hover-highlight-border-radius": "10px",
                      "--w3m-text-big-bold-size": "20px",
                      "--w3m-text-big-bold-weight": "600",
                      "--w3m-text-big-bold-line-height": "24px",
                      "--w3m-text-big-bold-letter-spacing": "-0.03em",
                      "--w3m-text-big-bold-text-transform": "none",
                      "--w3m-text-xsmall-bold-size": "10px",
                      "--w3m-text-xsmall-bold-weight": "700",
                      "--w3m-text-xsmall-bold-line-height": "12px",
                      "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                      "--w3m-text-xsmall-bold-text-transform": "uppercase",
                      "--w3m-text-xsmall-regular-size": "12px",
                      "--w3m-text-xsmall-regular-weight": "600",
                      "--w3m-text-xsmall-regular-line-height": "14px",
                      "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                      "--w3m-text-xsmall-regular-text-transform": "none",
                      "--w3m-text-small-thin-size": "14px",
                      "--w3m-text-small-thin-weight": "500",
                      "--w3m-text-small-thin-line-height": "16px",
                      "--w3m-text-small-thin-letter-spacing": "-0.03em",
                      "--w3m-text-small-thin-text-transform": "none",
                      "--w3m-text-small-regular-size": "14px",
                      "--w3m-text-small-regular-weight": "600",
                      "--w3m-text-small-regular-line-height": "16px",
                      "--w3m-text-small-regular-letter-spacing": "-0.03em",
                      "--w3m-text-small-regular-text-transform": "none",
                      "--w3m-text-medium-regular-size": "16px",
                      "--w3m-text-medium-regular-weight": "600",
                      "--w3m-text-medium-regular-line-height": "20px",
                      "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                      "--w3m-text-medium-regular-text-transform": "none",
                      "--w3m-font-family":
                        "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                      "--w3m-success-color": "rgb(38,181,98)",
                      "--w3m-error-color": "rgb(242, 90, 103)",
                    },
                  ),
                  t,
                ),
                (function () {
                  const { themeVariables: e } = me.ThemeCtrl.state;
                  return {
                    "--w3m-background-image-url":
                      null != e && e["--w3m-background-image-url"]
                        ? `url(${e["--w3m-background-image-url"]})`
                        : "none",
                  };
                })(),
              );
              Object.entries(r).forEach(([t, r]) => e.style.setProperty(t, r));
            }
          },
          globalCss: l`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`,
        },
        $t = l`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
      var Lt = Object.defineProperty,
        Mt = Object.getOwnPropertyDescriptor,
        jt = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Mt(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Lt(t, r, o), o;
        };
      let Ut = class extends le {
        constructor() {
          super(...arguments),
            (this.icon = void 0),
            (this.label = ""),
            (this.onClick = () => null);
        }
        render() {
          return z`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
        }
      };
      (Ut.styles = [Rt.globalCss, $t]),
        jt([pe()], Ut.prototype, "icon", 2),
        jt([pe()], Ut.prototype, "label", 2),
        jt([pe()], Ut.prototype, "onClick", 2),
        (Ut = jt([he("w3m-box-button")], Ut));
      const Dt = l`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:active::after{background-color:var(--w3m-color-overlay)}.w3m-ghost,.w3m-ghost:active::after,.w3m-outline{background-color:transparent}.w3m-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}.w3m-ghost:hover::after{background-color:transparent}.w3m-ghost:hover{opacity:.5}}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
      var Bt = Object.defineProperty,
        zt = Object.getOwnPropertyDescriptor,
        Wt = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? zt(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Bt(t, r, o), o;
        };
      let Ht = class extends le {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          const e = {
            "w3m-icon-left": void 0 !== this.iconLeft,
            "w3m-icon-right": void 0 !== this.iconRight,
            "w3m-ghost": "ghost" === this.variant,
            "w3m-outline": "outline" === this.variant,
          };
          let t = "inverse";
          return (
            "ghost" === this.variant && (t = "secondary"),
            "outline" === this.variant && (t = "accent"),
            z`<button class="${ye(e)}" ?disabled="${this.disabled}" @click="${
              this.onClick
            }">${
              this.iconLeft
            }<w3m-text variant="small-regular" color="${t}"><slot></slot></w3m-text>${
              this.iconRight
            }</button>`
          );
        }
      };
      (Ht.styles = [Rt.globalCss, Dt]),
        Wt([pe()], Ht.prototype, "disabled", 2),
        Wt([pe()], Ht.prototype, "iconLeft", 2),
        Wt([pe()], Ht.prototype, "iconRight", 2),
        Wt([pe()], Ht.prototype, "onClick", 2),
        Wt([pe()], Ht.prototype, "variant", 2),
        (Ht = Wt([he("w3m-button")], Ht));
      const Vt = l`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:active::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}}`;
      var qt = Object.defineProperty,
        Ft = Object.getOwnPropertyDescriptor,
        Kt = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Ft(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && qt(t, r, o), o;
        };
      let Gt = class extends le {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          const e = { "w3m-secondary": "secondary" === this.variant };
          return z`<button ?disabled="${this.disabled}" class="${ye(
            e,
          )}"><slot></slot></button>`;
        }
      };
      (Gt.styles = [Rt.globalCss, Vt]),
        Kt([pe()], Gt.prototype, "disabled", 2),
        Kt([pe()], Gt.prototype, "variant", 2),
        (Gt = Kt([he("w3m-button-big")], Gt));
      const Zt = l`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Yt = class extends le {
        render() {
          return z`<div><slot></slot></div>`;
        }
      };
      (Yt.styles = [Rt.globalCss, Zt]),
        (Yt = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-info-footer")], Yt));
      const Jt = {
          CROSS_ICON: W`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: W`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: W`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: W`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: W`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: W`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: W`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: W`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: W`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: W`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: W`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: W`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: W`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: W`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: W`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          HELP_ETH_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
          HELP_PAINTING_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
          HELP_CHART_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          HELP_KEY_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          HELP_USER_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
          HELP_LOCK_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
          HELP_COMPAS_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
          HELP_NOUN_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
          HELP_DAO_IMG: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          SEARCH_ICON: W`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          HELP_ICON: W`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
          WALLET_ICON: W`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
          NETWORK_PLACEHOLDER: W`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
          WALLET_PLACEHOLDER: W`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          TOKEN_PLACEHOLDER: W`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
          ACCOUNT_COPY: W`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
          ACCOUNT_DISCONNECT: W`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
          GLOBE_ICON: W`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        Qt = l`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}@media(hover:hover){button:hover{background-color:var(--w3m-color-bg-2)}}`;
      var Xt = Object.defineProperty,
        er = Object.getOwnPropertyDescriptor,
        tr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? er(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Xt(t, r, o), o;
        };
      let rr = class extends le {
        constructor() {
          super(),
            (this.isHelp = !1),
            (this.unsubscribeRouter = void 0),
            (this.unsubscribeRouter = me.AV.subscribe((e) => {
              this.isHelp = "Help" === e.view;
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeRouter) || e.call(this);
        }
        onHelp() {
          me.AV.push("Help");
        }
        logoTemplate() {
          var e;
          const t =
            null == (e = me.ThemeCtrl.state.themeVariables)
              ? void 0
              : e["--w3m-logo-image-url"];
          return t ? z`<img src="${t}">` : Jt.WALLET_CONNECT_LOGO;
        }
        render() {
          const e = { "w3m-help-active": this.isHelp };
          return z`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${ye(
            e,
          )}"><button @click="${this.onHelp}">${
            Jt.HELP_ICON
          }</button> <button @click="${me.jb.close}">${
            Jt.CROSS_ICON
          }</button></div></div>`;
        }
      };
      (rr.styles = [Rt.globalCss, Qt]),
        tr([fe()], rr.prototype, "isHelp", 2),
        (rr = tr([he("w3m-modal-backcard")], rr));
      const ir = l`main{padding:20px;padding-top:0;width:100%}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let nr = class extends le {
        render() {
          return z`<main><slot></slot></main>`;
        }
      };
      (nr.styles = [Rt.globalCss, ir]),
        (nr = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-modal-content")], nr));
      const or = l`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let sr = class extends le {
        render() {
          return z`<footer><slot></slot></footer>`;
        }
      };
      (sr.styles = [Rt.globalCss, or]),
        (sr = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-modal-footer")], sr));
      const ar = l`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
      var lr = Object.defineProperty,
        cr = Object.getOwnPropertyDescriptor,
        hr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? cr(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && lr(t, r, o), o;
        };
      let ur = class extends le {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return z`<button class="w3m-back-btn" @click="${me.AV.goBack}">${Jt.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return z`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          const e = { "w3m-border": this.border },
            t = me.AV.state.history.length > 1,
            r = this.title
              ? z`<w3m-text variant="big-bold">${this.title}</w3m-text>`
              : z`<slot></slot>`;
          return z`<header class="${ye(e)}">${
            t ? this.backBtnTemplate() : null
          } ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (ur.styles = [Rt.globalCss, ar]),
        hr([pe()], ur.prototype, "title", 2),
        hr([pe()], ur.prototype, "onAction", 2),
        hr([pe()], ur.prototype, "actionIcon", 2),
        hr([pe()], ur.prototype, "border", 2),
        (ur = hr([he("w3m-modal-header")], ur));
      const dr = {
          1: "692ed6ba-e569-459a-556a-776476829e00",
          42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
          43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
          56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
          250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
          10: "ab9c186a-c52f-464b-2906-ca59d760a400",
          137: "41d04d42-da3b-4453-8506-668cc0727900",
          100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
          9001: "f926ff41-260d-4028-635e-91913fc28e00",
          324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
          314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
          4689: "34e68754-e536-40da-c153-6ef2e7188a00",
          1088: "3897a66d-40b9-4833-162f-a2c90531c900",
          1284: "161038da-44ae-4ec7-1208-0ea569454b00",
          1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
        },
        pr = {
          ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" },
          FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" },
          BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" },
          MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" },
          OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" },
          xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" },
          EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" },
          METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" },
          IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" },
        },
        fr = {
          externalWallets() {
            const { isStandalone: e } = me.OptionsCtrl.state;
            if (e) return [];
            let t = me.Id.client().getConnectors();
            return (t = t.filter((e) => "injected" !== e.id)), t;
          },
          manualWallets() {
            var e, t;
            const { mobileWallets: r, desktopWallets: i } = me.ConfigCtrl.state,
              n = null == (e = fr.recentWallet()) ? void 0 : e.id,
              o = me.zv.isMobile() ? r : i,
              s = o?.filter((e) => n !== e.id);
            return null !=
              (t = me.zv.isMobile()
                ? s?.map(({ id: e, name: t, links: r }) => ({
                    id: e,
                    name: t,
                    mobile: r,
                    links: r,
                  }))
                : s?.map(({ id: e, name: t, links: r }) => ({
                    id: e,
                    name: t,
                    desktop: r,
                    links: r,
                  })))
              ? t
              : [];
          },
          installedInjectedWallets() {
            const { isStandalone: e } = me.OptionsCtrl.state;
            if (e) return [];
            if (!me.Id.client().isInjectedProviderInstalled()) return [];
            const { namespace: t } = me.Id.client(),
              { injectedWallets: r } = me.ExplorerCtrl.state;
            let i = r.filter(
              ({ injected: e }) =>
                !!e.some(
                  (e) =>
                    me.Id.client().safeCheckInjectedProvider(e.injected_id) &&
                    e.namespace === t,
                ),
            );
            return (
              i.length > 1 &&
                (i = i.filter(
                  ({ injected: e }) =>
                    !!e
                      .map(({ injected_id: e }) => e)
                      .every((e) => "isMetaMask" !== e),
                )),
              i.length
                ? i
                : [{ name: "Browser", id: "browser", image_id: void 0 }]
            );
          },
          injectedWallets() {
            const { isStandalone: e } = me.OptionsCtrl.state,
              {
                explorerExcludedWalletIds: t,
                explorerRecommendedWalletIds: r,
              } = me.ConfigCtrl.state,
              i = me.zv.isMobile();
            if (e || "ALL" === t || i) return [];
            const { namespace: n } = me.Id.client(),
              { injectedWallets: o } = me.ExplorerCtrl.state;
            return o.filter(({ id: e, injected: i }) => {
              const o = me.zv.isArray(t) ? t : [],
                s = me.zv.isArray(r) ? r : [];
              return !!i.some(
                (t) => t.namespace === n && !o.includes(e) && !s.includes(e),
              );
            });
          },
          recentWallet: () => gr.getRecentWallet(),
          recomendedWallets(e = !1) {
            var t;
            const r = fr.installedInjectedWallets().map(({ id: e }) => e),
              i = [...r, e || null == (t = fr.recentWallet()) ? void 0 : t.id],
              { recomendedWallets: n } = me.ExplorerCtrl.state;
            return n.filter((e) => !i.includes(e.id));
          },
        },
        gr = {
          MOBILE_BREAKPOINT: 600,
          W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          rejectStandaloneButtonComponent() {
            const { isStandalone: e } = me.OptionsCtrl.state;
            if (e)
              throw new Error(
                "Web3Modal button components are not available in standalone mode.",
              );
          },
          getShadowRootElement(e, t) {
            const r = e.renderRoot.querySelector(t);
            if (!r) throw new Error(`${t} not found`);
            return r;
          },
          getWalletIcon({ id: e, image_id: t }) {
            const { walletImages: r } = me.ConfigCtrl.state;
            return null != r && r[e]
              ? r[e]
              : t
              ? me.ExplorerCtrl.getWalletImageUrl(t)
              : "";
          },
          getWalletName: (e, t = !1) => (t ? e.split(" ")[0] : e),
          getChainIcon(e) {
            var t;
            const r = dr[e],
              { projectId: i, chainImages: n } = me.ConfigCtrl.state;
            return null != (t = n?.[e])
              ? t
              : i && r
              ? me.ExplorerCtrl.getAssetImageUrl(r)
              : "";
          },
          getTokenIcon(e) {
            var t, r;
            const i = null == (t = pr[e]) ? void 0 : t.icon,
              { projectId: n, tokenImages: o } = me.ConfigCtrl.state;
            return null != (r = o?.[e])
              ? r
              : n && i
              ? me.ExplorerCtrl.getAssetImageUrl(i)
              : "";
          },
          isMobileAnimation: () => window.innerWidth <= gr.MOBILE_BREAKPOINT,
          async preloadImage(e) {
            const t = new Promise((t, r) => {
              const i = new Image();
              (i.onload = t), (i.onerror = r), (i.src = e);
            });
            return Promise.race([t, me.zv.wait(3e3)]);
          },
          getErrorMessage: (e) =>
            e instanceof Error ? e.message : "Unknown Error",
          debounce(e, t = 500) {
            let r;
            return (...i) => {
              r && clearTimeout(r),
                (r = setTimeout(function () {
                  e(...i);
                }, t));
            };
          },
          handleMobileLinking(e) {
            const { standaloneUri: t } = me.OptionsCtrl.state,
              { pairingUri: r } = me.WcConnectionCtrl.state,
              { mobile: i, name: n } = e,
              o = i?.native,
              s = i?.universal;
            gr.setRecentWallet(e),
              (function (e) {
                let t = "";
                o
                  ? (t = me.zv.formatUniversalUrl(o, e, n))
                  : s && (t = me.zv.formatNativeUrl(s, e, n)),
                  me.zv.openHref(t, "_self");
              })(t || r);
          },
          handleAndroidLinking() {
            const { standaloneUri: e } = me.OptionsCtrl.state,
              { pairingUri: t } = me.WcConnectionCtrl.state;
            e
              ? (me.zv.setWalletConnectAndroidDeepLink(e),
                me.zv.openHref(e, "_self"))
              : (me.zv.setWalletConnectAndroidDeepLink(t),
                me.zv.openHref(t, "_self"));
          },
          async handleUriCopy() {
            const { standaloneUri: e } = me.OptionsCtrl.state,
              { pairingUri: t } = me.WcConnectionCtrl.state;
            e
              ? await navigator.clipboard.writeText(e)
              : await navigator.clipboard.writeText(t),
              me.ToastCtrl.openToast("Link copied", "success");
          },
          async handleConnectorConnection(e, t) {
            try {
              const { selectedChain: t } = me.OptionsCtrl.state;
              await me.Id.client().connectConnector(e, t?.id), me.jb.close();
            } catch (e) {
              console.error(e),
                t
                  ? t()
                  : me.ToastCtrl.openToast(gr.getErrorMessage(e), "error");
            }
          },
          getCustomImageUrls() {
            const { chainImages: e, walletImages: t } = me.ConfigCtrl.state,
              r = Object.values(e ?? {}),
              i = Object.values(t ?? {});
            return Object.values([...r, ...i]);
          },
          truncate: (e, t = 8) =>
            e.length <= t
              ? e
              : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`,
          generateAvatarColors(e) {
            var t;
            const r =
                null == (t = e.match(/.{1,7}/g)) ? void 0 : t.splice(0, 5),
              i = [];
            r?.forEach((e) => {
              let t = 0;
              for (let r = 0; r < e.length; r += 1)
                (t = e.charCodeAt(r) + ((t << 5) - t)), (t &= t);
              const r = [0, 0, 0];
              for (let e = 0; e < 3; e += 1) {
                const i = (t >> (8 * e)) & 255;
                r[e] = i;
              }
              i.push(`rgb(${r[0]}, ${r[1]}, ${r[2]})`);
            });
            const n = document.querySelector(":root");
            if (n) {
              const e = {
                "--w3m-color-av-1": i[0],
                "--w3m-color-av-2": i[1],
                "--w3m-color-av-3": i[2],
                "--w3m-color-av-4": i[3],
                "--w3m-color-av-5": i[4],
              };
              Object.entries(e).forEach(([e, t]) => n.style.setProperty(e, t));
            }
          },
          setRecentWallet(e) {
            const { walletConnectVersion: t } = me.OptionsCtrl.state;
            localStorage.setItem(
              gr.W3M_RECENT_WALLET_DATA,
              JSON.stringify({ [t]: e }),
            );
          },
          getRecentWallet() {
            const e = localStorage.getItem(gr.W3M_RECENT_WALLET_DATA);
            if (e) {
              const { walletConnectVersion: t } = me.OptionsCtrl.state,
                r = JSON.parse(e);
              if (r[t]) return r[t];
            }
          },
          caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
          openWalletExplorerUrl() {
            me.zv.openHref(gr.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            const {
                id: e,
                desktop: t,
                mobile: r,
                injected: i,
              } = me.zv.getWalletRouterData(),
              n = fr.installedInjectedWallets(),
              o = !(null == i || !i.length),
              s = n.some((t) => t.id === e),
              a = !(null == t || !t.native),
              l = !(null == t || !t.universal);
            return {
              isInjectedInstalled: s,
              isInjected: o,
              isDesktop: a,
              isMobile:
                !(null == r || !r.native) || !(null == r || !r.universal),
              isWeb: l,
            };
          },
          goToConnectingView(e) {
            me.AV.setData({ Wallet: e });
            const t = me.zv.isMobile(),
              {
                isDesktop: r,
                isWeb: i,
                isMobile: n,
                isInjectedInstalled: o,
              } = gr.getCachedRouterWalletPlatforms();
            t
              ? o
                ? me.AV.push("InjectedConnecting")
                : n
                ? me.AV.push("MobileConnecting")
                : i
                ? me.AV.push("WebConnecting")
                : me.AV.push("InstallWallet")
              : o
              ? me.AV.push("InjectedConnecting")
              : r
              ? me.AV.push("DesktopConnecting")
              : i
              ? me.AV.push("WebConnecting")
              : n
              ? me.AV.push("MobileQrcodeConnecting")
              : me.AV.push("InstallWallet");
          },
        },
        mr = l`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
      var wr = Object.defineProperty,
        yr = Object.getOwnPropertyDescriptor,
        vr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? yr(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && wr(t, r, o), o;
        };
      let br = class extends le {
        constructor() {
          super(),
            (this.view = me.AV.state.view),
            (this.prevView = me.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = me.AV.subscribe((e) => {
              this.view !== e.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([e]) => {
            const t = `${e.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              Ot(
                this.routerEl,
                { height: [this.oldHeight, t] },
                { duration: 0.2 },
              ),
              (this.oldHeight = t);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var e, t;
          null == (e = this.unsubscribe) || e.call(this),
            null == (t = this.resizeObserver) || t.disconnect();
        }
        get routerEl() {
          return gr.getShadowRootElement(this, ".w3m-router");
        }
        get contentEl() {
          return gr.getShadowRootElement(this, ".w3m-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return z`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
            case "SelectNetwork":
              return z`<w3m-select-network-view></w3m-select-network-view>`;
            case "InjectedConnecting":
              return z`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
            case "DesktopConnecting":
              return z`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
            case "MobileConnecting":
              return z`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
            case "WebConnecting":
              return z`<w3m-web-connecting-view></w3m-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return z`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
            case "GetWallet":
              return z`<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case "WalletExplorer":
              return z`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
            case "Qrcode":
              return z`<w3m-qrcode-view></w3m-qrcode-view>`;
            case "Help":
              return z`<w3m-help-view></w3m-help-view>`;
            case "Account":
              return z`<w3m-account-view></w3m-account-view>`;
            case "SwitchNetwork":
              return z`<w3m-switch-network-view></w3m-switch-network-view>`;
            case "InstallWallet":
              return z`<w3m-install-wallet-view></w3m-install-wallet-view>`;
            default:
              return z`<div>Not Found</div>`;
          }
        }
        async onChangeRoute() {
          await Ot(
            this.routerEl,
            { opacity: [1, 0], scale: [1, 1.02] },
            { duration: 0.15, delay: 0.1 },
          ).finished,
            (this.view = me.AV.state.view),
            Ot(
              this.routerEl,
              { opacity: [0, 1], scale: [0.99, 1] },
              { duration: 0.37, delay: 0.05 },
            );
        }
        render() {
          return z`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (br.styles = [Rt.globalCss, mr]),
        vr([fe()], br.prototype, "view", 2),
        vr([fe()], br.prototype, "prevView", 2),
        (br = vr([he("w3m-modal-router")], br));
      const _r = l`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
      var Er = Object.defineProperty,
        xr = Object.getOwnPropertyDescriptor,
        Cr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? xr(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Er(t, r, o), o;
        };
      let Or = class extends le {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = me.ToastCtrl.subscribe((e) => {
              e.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(
                    () => me.ToastCtrl.closeToast(),
                    2200,
                  )))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribe) || e.call(this),
            clearTimeout(this.timeout),
            me.ToastCtrl.closeToast();
        }
        render() {
          const { message: e, variant: t } = me.ToastCtrl.state,
            r = { "w3m-success": "success" === t, "w3m-error": "error" === t };
          return this.open
            ? z`<div class="${ye(r)}">${
                "success" === t ? Jt.CHECKMARK_ICON : null
              } ${
                "error" === t ? Jt.CROSS_ICON : null
              }<w3m-text variant="small-regular">${e}</w3m-text></div>`
            : null;
        }
      };
      (Or.styles = [Rt.globalCss, _r]),
        Cr([fe()], Or.prototype, "open", 2),
        (Or = Cr([he("w3m-modal-toast")], Or));
      const Ir = l`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px;position:relative}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:active{background-color:var(--w3m-color-overlay)}.w3m-unsupported{opacity:.3}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}`;
      var Sr = Object.defineProperty,
        Ar = Object.getOwnPropertyDescriptor,
        Pr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Ar(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Sr(t, r, o), o;
        };
      let Tr = class extends le {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.chainId = ""),
            (this.unsupported = !1);
        }
        render() {
          const e = { "w3m-unsupported": this.unsupported };
          return z`<button @click="${this.onClick}" class="${ye(
            e,
          )}"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="xsmall-regular">${
            this.name
          }</w3m-text></button>`;
        }
      };
      (Tr.styles = [Rt.globalCss, Ir]),
        Pr([pe()], Tr.prototype, "onClick", 2),
        Pr([pe()], Tr.prototype, "name", 2),
        Pr([pe()], Tr.prototype, "chainId", 2),
        Pr([pe()], Tr.prototype, "unsupported", 2),
        (Tr = Pr([he("w3m-network-button")], Tr));
      const kr = l`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
      var Nr = Object.defineProperty,
        Rr = Object.getOwnPropertyDescriptor,
        $r = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Rr(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Nr(t, r, o), o;
        };
      let Lr = class extends le {
        constructor() {
          super(...arguments), (this.chainId = "");
        }
        render() {
          const e = gr.getChainIcon(this.chainId);
          return e
            ? z`<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${e}"/><image href="${e}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>`
            : z`${Jt.NETWORK_PLACEHOLDER}`;
        }
      };
      function Mr(e, t, r) {
        return e !== t && (e - t < 0 ? t - e : e - t) <= r + 0.1;
      }
      (Lr.styles = [Rt.globalCss, kr]),
        $r([pe()], Lr.prototype, "chainId", 2),
        (Lr = $r([he("w3m-network-image")], Lr));
      const jr = {
          generate(e, t, r, i) {
            const n = "light" === i ? "#141414" : "#fff",
              o = "light" === i ? "#fff" : "#141414",
              s = [],
              a = (function (e, t) {
                const r = Array.prototype.slice.call(
                    It.create(e, { errorCorrectionLevel: "Q" }).modules.data,
                    0,
                  ),
                  i = Math.sqrt(r.length);
                return r.reduce(
                  (e, t, r) =>
                    (r % i == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e,
                  [],
                );
              })(e),
              l = t / a.length,
              c = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            c.forEach(({ x: e, y: t }) => {
              const r = (a.length - 7) * l * e,
                i = (a.length - 7) * l * t;
              for (let e = 0; e < c.length; e += 1) {
                const t = l * (7 - 2 * e);
                s.push(
                  W`<rect fill="${e % 2 == 0 ? n : o}" height="${t}" rx="${
                    0.32 * t
                  }" ry="${0.32 * t}" width="${t}" x="${r + l * e}" y="${
                    i + l * e
                  }">`,
                );
              }
            });
            const h = Math.floor((r + 25) / l),
              u = a.length / 2 - h / 2,
              d = a.length / 2 + h / 2 - 1,
              p = [];
            a.forEach((e, t) => {
              e.forEach((e, r) => {
                if (
                  a[t][r] &&
                  !(
                    (t < 7 && r < 7) ||
                    (t > a.length - 8 && r < 7) ||
                    (t < 7 && r > a.length - 8)
                  ) &&
                  !(t > u && t < d && r > u && r < d)
                ) {
                  const e = t * l + l / 2,
                    i = r * l + l / 2;
                  p.push([e, i]);
                }
              });
            });
            const f = {};
            return (
              p.forEach(([e, t]) => {
                f[e] ? f[e].push(t) : (f[e] = [t]);
              }),
              Object.entries(f)
                .map(([e, t]) => {
                  const r = t.filter((e) => t.every((t) => !Mr(e, t, l)));
                  return [Number(e), r];
                })
                .forEach(([e, t]) => {
                  t.forEach((t) => {
                    s.push(
                      W`<circle cx="${e}" cy="${t}" fill="${n}" r="${
                        l / 2.5
                      }">`,
                    );
                  });
                }),
              Object.entries(f)
                .filter(([e, t]) => t.length > 1)
                .map(([e, t]) => {
                  const r = t.filter((e) => t.some((t) => Mr(e, t, l)));
                  return [Number(e), r];
                })
                .map(([e, t]) => {
                  t.sort((e, t) => (e < t ? -1 : 1));
                  const r = [];
                  for (const e of t) {
                    const t = r.find((t) => t.some((t) => Mr(e, t, l)));
                    t ? t.push(e) : r.push([e]);
                  }
                  return [e, r.map((e) => [e[0], e[e.length - 1]])];
                })
                .forEach(([e, t]) => {
                  t.forEach(([t, r]) => {
                    s.push(
                      W`<line x1="${e}" x2="${e}" y1="${t}" y2="${r}" stroke="${n}" stroke-width="${
                        l / 1.25
                      }" stroke-linecap="round">`,
                    );
                  });
                }),
              s
            );
          },
        },
        Ur = l`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
      var Dr = Object.defineProperty,
        Br = Object.getOwnPropertyDescriptor,
        zr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Br(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Dr(t, r, o), o;
        };
      let Wr = class extends le {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          var e;
          const t = null != (e = me.ThemeCtrl.state.themeMode) ? e : "light";
          return W`<svg height="${this.size}" width="${
            this.size
          }">${jr.generate(this.uri, this.size, this.size / 4, t)}</svg>`;
        }
        render() {
          return z`<div>${
            this.walletId || this.imageUrl
              ? z`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>`
              : Jt.WALLET_CONNECT_ICON_COLORED
          } ${this.svgTemplate()}<w3m-theme-context></w3m-theme-context></div>`;
        }
      };
      (Wr.styles = [Rt.globalCss, Ur]),
        zr([pe()], Wr.prototype, "uri", 2),
        zr([pe({ type: Number })], Wr.prototype, "size", 2),
        zr([pe()], Wr.prototype, "imageId", 2),
        zr([pe()], Wr.prototype, "walletId", 2),
        zr([pe()], Wr.prototype, "imageUrl", 2),
        (Wr = zr([he("w3m-qrcode")], Wr));
      const Hr = l`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--w3m-color-fg-1);background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);caret-color:var(--w3m-accent-color)}input::placeholder{color:var(--w3m-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
      var Vr = Object.defineProperty,
        qr = Object.getOwnPropertyDescriptor,
        Fr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? qr(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Vr(t, r, o), o;
        };
      let Kr = class extends le {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          return z`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${Jt.SEARCH_ICON}`;
        }
      };
      (Kr.styles = [Rt.globalCss, Hr]),
        Fr([pe()], Kr.prototype, "onChange", 2),
        (Kr = Fr([he("w3m-search-input")], Kr));
      const Gr = l`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Zr = class extends le {
        render() {
          return z`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (Zr.styles = [Rt.globalCss, Gr]),
        (Zr = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-spinner")], Zr));
      const Yr = l`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
      var Jr = Object.defineProperty,
        Qr = Object.getOwnPropertyDescriptor,
        Xr = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Qr(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Jr(t, r, o), o;
        };
      let ei = class extends le {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          const e = {
            "w3m-big-bold": "big-bold" === this.variant,
            "w3m-medium-regular": "medium-regular" === this.variant,
            "w3m-small-regular": "small-regular" === this.variant,
            "w3m-small-thin": "small-thin" === this.variant,
            "w3m-xsmall-regular": "xsmall-regular" === this.variant,
            "w3m-xsmall-bold": "xsmall-bold" === this.variant,
            "w3m-color-primary": "primary" === this.color,
            "w3m-color-secondary": "secondary" === this.color,
            "w3m-color-tertiary": "tertiary" === this.color,
            "w3m-color-inverse": "inverse" === this.color,
            "w3m-color-accnt": "accent" === this.color,
            "w3m-color-error": "error" === this.color,
          };
          return z`<span><slot class="${ye(e)}"></slot></span>`;
        }
      };
      (ei.styles = [Rt.globalCss, Yr]),
        Xr([pe()], ei.prototype, "variant", 2),
        Xr([pe()], ei.prototype, "color", 2),
        (ei = Xr([he("w3m-text")], ei));
      const ti = l`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var ri = Object.defineProperty,
        ii = Object.getOwnPropertyDescriptor,
        ni = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? ii(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && ri(t, r, o), o;
        };
      let oi = class extends le {
        constructor() {
          super(...arguments), (this.symbol = void 0);
        }
        render() {
          var e;
          const t = gr.getTokenIcon(null != (e = this.symbol) ? e : "");
          return t
            ? z`<div><img src="${t}" alt="${this.id}"></div>`
            : Jt.TOKEN_PLACEHOLDER;
        }
      };
      (oi.styles = [Rt.globalCss, ti]),
        ni([pe()], oi.prototype, "symbol", 2),
        (oi = ni([he("w3m-token-image")], oi));
      const si = l`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
      var ai = Object.defineProperty,
        li = Object.getOwnPropertyDescriptor,
        ci = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? li(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && ai(t, r, o), o;
        };
      let hi = class extends le {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? z`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>`
            : this.installed
            ? z`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>`
            : null;
        }
        handleClick() {
          me.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var e;
          return z`<button @click="${this.handleClick.bind(
            this,
          )}"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${
            this.imageId
          }"></w3m-wallet-image><w3m-text variant="xsmall-regular">${
            null != (e = this.label) ? e : gr.getWalletName(this.name, !0)
          }</w3m-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (hi.styles = [Rt.globalCss, si]),
        ci([pe()], hi.prototype, "onClick", 2),
        ci([pe()], hi.prototype, "name", 2),
        ci([pe()], hi.prototype, "walletId", 2),
        ci([pe()], hi.prototype, "label", 2),
        ci([pe()], hi.prototype, "imageId", 2),
        ci([pe()], hi.prototype, "installed", 2),
        ci([pe()], hi.prototype, "recent", 2),
        (hi = ci([he("w3m-wallet-button")], hi));
      const ui = l`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var di = Object.defineProperty,
        pi = Object.getOwnPropertyDescriptor,
        fi = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? pi(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && di(t, r, o), o;
        };
      let gi = class extends le {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var e;
          const t =
            null != (e = this.imageUrl) && e.length
              ? this.imageUrl
              : gr.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return z`${
            t.length
              ? z`<div><img src="${t}" alt="${this.id}"></div>`
              : Jt.WALLET_PLACEHOLDER
          }`;
        }
      };
      (gi.styles = [Rt.globalCss, ui]),
        fi([pe()], gi.prototype, "walletId", 2),
        fi([pe()], gi.prototype, "imageId", 2),
        fi([pe()], gi.prototype, "imageUrl", 2),
        (gi = fi([he("w3m-wallet-image")], gi));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let mi = class extends le {
        constructor() {
          super(),
            (this.unwatchAccount = void 0),
            me.AccountCtrl.getAccount(),
            this.fetchProfile(),
            this.fetchBalance(),
            (this.unwatchAccount = me.Id.client().watchAccount((e) => {
              const { address: t, isConnected: r } = me.AccountCtrl.state;
              e.isConnected &&
                e.address !== t &&
                (this.fetchProfile(e.address),
                this.fetchBalance(e.address),
                me.AccountCtrl.setAddress(e.address)),
                e.isConnected || me.AccountCtrl.resetAccount(),
                r !== e.isConnected && me.jb.close(),
                !r && e.isConnected
                  ? me.uA.track({ name: "ACCOUNT_CONNECTED" })
                  : r &&
                    !e.isConnected &&
                    me.uA.track({ name: "ACCOUNT_DISCONNECTED" }),
                me.AccountCtrl.setIsConnected(e.isConnected);
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unwatchAccount) || e.call(this);
        }
        async fetchProfile(e) {
          var t;
          const r =
            null == (t = me.OptionsCtrl.state.chains)
              ? void 0
              : t.find((e) => 1 === e.id);
          if (me.ConfigCtrl.state.enableAccountView && r)
            try {
              await me.AccountCtrl.fetchProfile(gr.preloadImage, e);
            } catch (e) {
              console.error(e),
                me.ToastCtrl.openToast(gr.getErrorMessage(e), "error");
            }
        }
        async fetchBalance(e) {
          if (me.ConfigCtrl.state.enableAccountView)
            try {
              await me.AccountCtrl.fetchBalance(e);
            } catch (e) {
              console.error(e),
                me.ToastCtrl.openToast(gr.getErrorMessage(e), "error");
            }
        }
      };
      mi = ((e, t, r, i) => {
        for (var n, o = t, s = e.length - 1; s >= 0; s--)
          (n = e[s]) && (o = n(o) || o);
        return o;
      })([he("w3m-account-context")], mi);
      var wi = Object.defineProperty,
        yi = Object.getOwnPropertyDescriptor,
        vi = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? yi(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && wi(t, r, o), o;
        };
      let bi = class extends le {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        async loadImages(e) {
          try {
            null != e &&
              e.length &&
              (await Promise.all(e.map(async (e) => gr.preloadImage(e))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images", e);
          }
        }
        async preloadListings() {
          var e;
          if (me.ConfigCtrl.state.enableExplorer) {
            const { chains: t } = me.OptionsCtrl.state;
            await Promise.all([
              me.ExplorerCtrl.getRecomendedWallets(),
              me.ExplorerCtrl.getInjectedWallets(),
            ]),
              me.OptionsCtrl.setIsDataLoaded(!0);
            const { recomendedWallets: r } = me.ExplorerCtrl.state,
              i = fr.installedInjectedWallets(),
              n = null != (e = t?.map((e) => gr.getChainIcon(e.id))) ? e : [],
              o = r.map((e) => gr.getWalletIcon(e)),
              s = i.map((e) => gr.getWalletIcon(e));
            await this.loadImages([...n, ...o, ...s]);
          } else me.OptionsCtrl.setIsDataLoaded(!0);
        }
        async preloadCustomImages() {
          const e = gr.getCustomImageUrls();
          await this.loadImages(e);
        }
        async preloadData() {
          try {
            this.preload &&
              ((this.preload = !1),
              await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages(),
              ]));
          } catch (e) {
            console.error(e),
              me.ToastCtrl.openToast("Failed preloading", "error");
          }
        }
      };
      vi([fe()], bi.prototype, "preload", 2),
        (bi = vi([he("w3m-explorer-context")], bi));
      var _i = Object.defineProperty,
        Ei = Object.getOwnPropertyDescriptor,
        xi = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Ei(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && _i(t, r, o), o;
        };
      let Ci = class extends le {
        constructor() {
          super(),
            (this.activeChainId = void 0),
            (this.unwatchNetwork = void 0);
          const e = me.OptionsCtrl.getSelectedChain();
          (this.activeChainId = e?.id),
            (this.unwatchNetwork = me.Id.client().watchNetwork((e) => {
              const t = e.chain;
              t &&
                this.activeChainId !== t.id &&
                (me.OptionsCtrl.setSelectedChain(t),
                (this.activeChainId = t.id),
                me.AccountCtrl.resetBalance(),
                this.fetchBalance());
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unwatchNetwork) || e.call(this);
        }
        async fetchBalance() {
          if (me.ConfigCtrl.state.enableAccountView)
            try {
              await me.AccountCtrl.fetchBalance();
            } catch (e) {
              console.error(e),
                me.ToastCtrl.openToast(gr.getErrorMessage(e), "error");
            }
        }
      };
      xi([fe()], Ci.prototype, "activeChainId", 2),
        (Ci = xi([he("w3m-network-context")], Ci));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Oi = class extends le {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            Rt.setTheme(),
            (this.unsubscribeTheme = me.ThemeCtrl.subscribe(Rt.setTheme)),
            this.preloadThemeImages();
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeTheme) || e.call(this);
        }
        async preloadThemeImages() {
          try {
            const { themeVariables: e } = me.ThemeCtrl.state,
              t = [
                e?.["--w3m-background-image-url"],
                e?.["--w3m-logo-image-url"],
              ].filter(Boolean);
            t.length &&
              (await Promise.all(t.map(async (e) => gr.preloadImage(e))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images");
          }
        }
      };
      Oi = ((e, t, r, i) => {
        for (var n, o = t, s = e.length - 1; s >= 0; s--)
          (n = e[s]) && (o = n(o) || o);
        return o;
      })([he("w3m-theme-context")], Oi);
      var Ii;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Si = class extends le {
        constructor() {
          super(),
            (this.unwatchOptions = void 0),
            (this.unwatchAccount = void 0),
            (this.timeout = void 0),
            (this.isGenerated = !1),
            (this.selectedChainId =
              null == (Ii = me.OptionsCtrl.state.selectedChain)
                ? void 0
                : Ii.id),
            (this.isAccountConnected = me.AccountCtrl.state.isConnected),
            (this.lastRetry = Date.now()),
            (this.unwatchOptions = me.OptionsCtrl.subscribe((e) => {
              var t, r;
              (null == (t = e.selectedChain) ? void 0 : t.id) !==
                this.selectedChainId &&
                ((this.selectedChainId =
                  null == (r = e.selectedChain) ? void 0 : r.id),
                this.connectAndWait());
            })),
            (this.unwatchAccount = me.AccountCtrl.subscribe((e) => {
              (this.isAccountConnected !== e.isConnected ||
                !this.isGenerated) &&
                ((this.isAccountConnected = e.isConnected),
                setTimeout(this.connectAndWait.bind(this), 0));
            }));
        }
        disconnectedCallback() {
          var e, t;
          null == (e = this.unwatchOptions) || e.call(this),
            null == (t = this.unwatchAccount) || t.call(this);
        }
        async connectAndWait() {
          if ((clearTimeout(this.timeout), !this.isAccountConnected)) {
            (this.isGenerated = !0),
              (this.timeout = setTimeout(this.connectAndWait.bind(this), 24e4));
            try {
              const { standaloneUri: e, selectedChain: t } =
                me.OptionsCtrl.state;
              e
                ? me.WcConnectionCtrl.setPairingUri(e)
                : await me.Id.client().connectWalletConnect(
                    (e) => me.WcConnectionCtrl.setPairingUri(e),
                    t?.id,
                  );
            } catch (e) {
              console.error(e),
                me.WcConnectionCtrl.setPairingError(!0),
                me.ToastCtrl.openToast("Connection request declined", "error"),
                Date.now() - this.lastRetry >= 1e3 &&
                  ((this.lastRetry = Date.now()), this.connectAndWait());
            }
          }
        }
      };
      Si = ((e, t, r, i) => {
        for (var n, o = t, s = e.length - 1; s >= 0; s--)
          (n = e[s]) && (o = n(o) || o);
        return o;
      })([he("w3m-wc-connection-context")], Si);
      const Ai = l`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
      var Pi = Object.defineProperty,
        Ti = Object.getOwnPropertyDescriptor,
        ki = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Ti(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Pi(t, r, o), o;
        };
      let Ni = class extends le {
        constructor() {
          super(),
            (this.balance = "hide"),
            (this.avatar = "show"),
            gr.rejectStandaloneButtonComponent();
        }
        onOpen() {
          const { isStandalone: e } = me.OptionsCtrl.state;
          e ||
            (me.uA.click({ name: "ACCOUNT_BUTTON" }),
            me.jb.open({ route: "Account" }));
        }
        accountTemplate() {
          const e = "show" === this.avatar;
          return z`${
            e ? z`<w3m-avatar></w3m-avatar>` : null
          }<w3m-address-text></w3m-address-text>`;
        }
        render() {
          const e = "show" === this.balance,
            t = { "w3m-no-avatar": "hide" === this.avatar };
          return e
            ? z`<div><w3m-balance></w3m-balance><button @click="${
                this.onOpen
              }" class="${ye(t)}">${this.accountTemplate()}</button></div>`
            : z`<w3m-button-big @click="${
                this.onOpen
              }">${this.accountTemplate()}</w3m-button-big>`;
        }
      };
      (Ni.styles = [Rt.globalCss, Ai]),
        ki([pe()], Ni.prototype, "balance", 2),
        ki([pe()], Ni.prototype, "avatar", 2),
        (Ni = ki([he("w3m-account-button")], Ni));
      const Ri = l`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
      var $i = Object.defineProperty,
        Li = Object.getOwnPropertyDescriptor,
        Mi = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Li(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && $i(t, r, o), o;
        };
      let ji = class extends le {
        constructor() {
          super(),
            (this.chainId = 0),
            (this.label = ""),
            (this.unsubscribeNetwork = void 0);
          const { selectedChain: e } = me.OptionsCtrl.state;
          (this.chainId = e?.id),
            (this.label = e?.name),
            (this.unsubscribeNetwork = me.OptionsCtrl.subscribe(
              ({ selectedChain: e }) => {
                (this.chainId = e?.id), (this.label = e?.name);
              },
            ));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeNetwork) || e.call(this);
        }
        onClick() {
          me.AV.push("SelectNetwork");
        }
        render() {
          const { chains: e, selectedChain: t } = me.OptionsCtrl.state,
            r = e?.map((e) => e.id),
            i = t && r?.includes(t.id),
            n = e && e.length <= 1 && i;
          return z`<button @click="${this.onClick}" ?disabled="${n}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
        }
      };
      (ji.styles = [Rt.globalCss, Ri]),
        Mi([fe()], ji.prototype, "chainId", 2),
        Mi([fe()], ji.prototype, "label", 2),
        (ji = Mi([he("w3m-account-network-button")], ji));
      const Ui = l`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
      var Di = Object.defineProperty,
        Bi = Object.getOwnPropertyDescriptor,
        zi = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Bi(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Di(t, r, o), o;
        };
      let Wi = class extends le {
        constructor() {
          super(),
            (this.address = void 0),
            (this.name = void 0),
            (this.loading = !0),
            (this.variant = "button"),
            (this.unsubscribeAccount = void 0),
            (this.address = me.AccountCtrl.state.address),
            (this.name = me.AccountCtrl.state.profileName),
            (this.loading = !!me.AccountCtrl.state.profileLoading),
            (this.unsubscribeAccount = me.AccountCtrl.subscribe(
              ({ address: e, profileName: t, profileLoading: r }) => {
                (this.address = e), (this.name = t), (this.loading = !!r);
              },
            ));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeAccount) || e.call(this);
        }
        render() {
          var e;
          const t = "button" === this.variant,
            r = { "w3m-loading": this.loading };
          return z`<w3m-text class="${ye(r)}" variant="${
            t ? "medium-regular" : "big-bold"
          }" color="${t ? "inverse" : "primary"}">${
            this.name
              ? this.name
              : gr.truncate(null != (e = this.address) ? e : "")
          }</w3m-text>`;
        }
      };
      (Wi.styles = [Rt.globalCss, Ui]),
        zi([fe()], Wi.prototype, "address", 2),
        zi([fe()], Wi.prototype, "name", 2),
        zi([fe()], Wi.prototype, "loading", 2),
        zi([pe()], Wi.prototype, "variant", 2),
        (Wi = zi([he("w3m-address-text")], Wi));
      const Hi = {
          onConnecting(e) {
            gr.goToConnectingView(e);
          },
          onExternal(e) {
            gr.handleConnectorConnection(e);
          },
          manualWalletsTemplate() {
            return fr
              .manualWallets()
              .map(
                (e) =>
                  z`<w3m-wallet-button walletId="${e.id}" name="${
                    e.name
                  }" .onClick="${() =>
                    this.onConnecting(e)}"></w3m-wallet-button>`,
              );
          },
          recomendedWalletsTemplate(e = !1) {
            return fr
              .recomendedWallets(e)
              .map(
                (e) =>
                  z`<w3m-wallet-button walletId="${e.id}" imageId="${
                    e.image_id
                  }" name="${e.name}" .onClick="${() =>
                    this.onConnecting(e)}"></w3m-wallet-button>`,
              );
          },
          externalWalletsTemplate() {
            return fr
              .externalWallets()
              .map(
                (e) =>
                  z`<w3m-wallet-button name="${e.name}" walletId="${
                    e.id
                  }" .onClick="${() =>
                    this.onExternal(e.id)}"></w3m-wallet-button>`,
              );
          },
          recentWalletTemplate() {
            const e = fr.recentWallet();
            if (e)
              return z`<w3m-wallet-button name="${e.name}" walletId="${
                e.id
              }" imageId="${e.image_id}" .recent="${!0}" .onClick="${() =>
                this.onConnecting(e)}"></w3m-wallet-button>`;
          },
          installedInjectedWalletsTemplate() {
            return fr
              .installedInjectedWallets()
              .map(
                (e) =>
                  z`<w3m-wallet-button .installed="${!0}" name="${
                    e.name
                  }" walletId="${e.id}" imageId="${
                    e.image_id
                  }" .onClick="${() =>
                    this.onConnecting(e)}"></w3m-wallet-button>`,
              );
          },
          injectedWalletsTemplate() {
            return fr
              .injectedWallets()
              .map(
                (e) =>
                  z`<w3m-wallet-button name="${e.name}" walletId="${
                    e.id
                  }" imageId="${e.image_id}" .onClick="${() =>
                    this.onConnecting(e)}"></w3m-wallet-button>`,
              );
          },
        },
        Vi = l`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let qi = class extends le {
        onGoToQrcode() {
          me.AV.push("Qrcode");
        }
        onGetWallet() {
          me.AV.push("GetWallet");
        }
        render() {
          const { recomendedWallets: e } = me.ExplorerCtrl.state,
            t = [...e, ...e],
            r = Hi.externalWalletsTemplate(),
            i = Hi.installedInjectedWalletsTemplate(),
            n = [...i, ...r].length > 0,
            o = 2 * me.zv.RECOMMENDED_WALLET_AMOUNT;
          return z`<w3m-modal-header title="Connect your wallet" .onAction="${
            this.onGoToQrcode
          }" .actionIcon="${
            Jt.QRCODE_ICON
          }"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${
            Jt.MOBILE_ICON
          }<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[
            ...Array(o),
          ].map((e, r) => {
            const i = t[r % t.length];
            return i
              ? z`<w3m-wallet-image walletId="${i.id}" imageId="${i.image_id}"></w3m-wallet-image>`
              : Jt.WALLET_PLACEHOLDER;
          })}</div><w3m-button-big @click="${
            gr.handleAndroidLinking
          }"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${
            n
              ? z`<w3m-modal-footer><div class="w3m-title">${Jt.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${i} ${r}</div></w3m-modal-footer>`
              : null
          }<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${
            "Choose WalletConnect to see supported apps on your device" +
            (n ? ", or select from other options" : "")
          }</w3m-text><w3m-button variant="outline" .iconRight="${
            Jt.ARROW_UP_RIGHT_ICON
          }" .onClick="${() =>
            this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`;
        }
      };
      (qi.styles = [Rt.globalCss, Vi]),
        (qi = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-android-wallet-selection")], qi));
      const Fi = l`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
      var Ki = Object.defineProperty,
        Gi = Object.getOwnPropertyDescriptor,
        Zi = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Gi(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Ki(t, r, o), o;
        };
      let Yi = class extends le {
        constructor() {
          super(),
            (this.address = void 0),
            (this.avatar = void 0),
            (this.loading = !0),
            (this.size = "small"),
            (this.unsubscribeAccount = void 0),
            (this.address = me.AccountCtrl.state.address),
            (this.avatar = me.AccountCtrl.state.profileAvatar),
            (this.loading = !!me.AccountCtrl.state.profileLoading),
            (this.unsubscribeAccount = me.AccountCtrl.subscribe(
              ({ address: e, profileAvatar: t, profileLoading: r }) => {
                (this.address = e), (this.avatar = t), (this.loading = !!r);
              },
            ));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeAccount) || e.call(this);
        }
        render() {
          const e = {
            "w3m-placeholder": !0,
            "w3m-small": "small" === this.size,
            "w3m-medium": "medium" === this.size,
          };
          return this.avatar
            ? z`<img class="${ye(e)}" src="${this.avatar}">`
            : this.address
            ? (gr.generateAvatarColors(this.address),
              z`<div class="${ye(e)}">${
                this.loading ? z`<div class="w3m-loader"></div>` : null
              }</div>`)
            : null;
        }
      };
      (Yi.styles = [Rt.globalCss, Fi]),
        Zi([fe()], Yi.prototype, "address", 2),
        Zi([fe()], Yi.prototype, "avatar", 2),
        Zi([fe()], Yi.prototype, "loading", 2),
        Zi([pe()], Yi.prototype, "size", 2),
        (Yi = Zi([he("w3m-avatar")], Yi));
      const Ji = l`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
      var Qi = Object.defineProperty,
        Xi = Object.getOwnPropertyDescriptor,
        en = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Xi(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Qi(t, r, o), o;
        };
      let tn = class extends le {
        constructor() {
          var e, t;
          super(),
            (this.symbol = void 0),
            (this.amount = void 0),
            (this.unsubscribeAccount = void 0),
            (this.symbol =
              null == (e = me.AccountCtrl.state.balance) ? void 0 : e.symbol),
            (this.amount =
              null == (t = me.AccountCtrl.state.balance) ? void 0 : t.amount),
            (this.unsubscribeAccount = me.AccountCtrl.subscribe(
              ({ balance: e }) => {
                (this.symbol = e?.symbol), (this.amount = e?.amount);
              },
            ));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeAccount) || e.call(this);
        }
        render() {
          let e = "_._";
          return (
            "0.0" === this.amount
              ? (e = "0")
              : "string" == typeof this.amount && this.amount.length > 6
              ? (e = this.amount.substring(0, 6))
              : "string" == typeof this.amount && (e = this.amount),
            z`<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${e} ${this.symbol}</w3m-text></div>`
          );
        }
      };
      (tn.styles = [Rt.globalCss, Ji]),
        en([fe()], tn.prototype, "symbol", 2),
        en([fe()], tn.prototype, "amount", 2),
        (tn = en([he("w3m-balance")], tn));
      const rn = l`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
      var nn = Object.defineProperty,
        on = Object.getOwnPropertyDescriptor,
        sn = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? on(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && nn(t, r, o), o;
        };
      let an = class extends le {
        constructor() {
          super(),
            (this.loading = !1),
            (this.label = "Connect Wallet"),
            (this.icon = "show"),
            (this.modalUnsub = void 0),
            gr.rejectStandaloneButtonComponent(),
            (this.modalUnsub = me.jb.subscribe((e) => {
              e.open && (this.loading = !0), e.open || (this.loading = !1);
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.modalUnsub) || e.call(this);
        }
        iconTemplate() {
          return "show" === this.icon ? Jt.WALLET_CONNECT_ICON : null;
        }
        onClick() {
          me.AccountCtrl.state.isConnected
            ? this.onDisconnect()
            : this.onConnect();
        }
        async onConnect() {
          (this.loading = !0),
            me.uA.click({ name: "CONNECT_BUTTON" }),
            await me.jb.open(),
            me.jb.state.open || (this.loading = !1);
        }
        async onDisconnect() {
          me.uA.click({ name: "DISCONNECT_BUTTON" }),
            await me.Id.client().disconnect();
        }
        render() {
          return z`<w3m-button-big .disabled="${this.loading}" @click="${
            this.onClick
          }">${
            this.loading
              ? z`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>`
              : z`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${
                  this.label
                }</w3m-text>`
          }</w3m-button-big>`;
        }
      };
      (an.styles = [Rt.globalCss, rn]),
        sn([fe()], an.prototype, "loading", 2),
        sn([pe()], an.prototype, "label", 2),
        sn([pe()], an.prototype, "icon", 2),
        (an = sn([he("w3m-connect-button")], an));
      const ln = l`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
      var cn = Object.defineProperty,
        hn = Object.getOwnPropertyDescriptor,
        un = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? hn(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && cn(t, r, o), o;
        };
      let dn = class extends le {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var e, t;
          const r =
            null !=
            (t =
              null == (e = me.ThemeCtrl.state.themeVariables)
                ? void 0
                : e["--w3m-wallet-icon-large-border-radius"])
              ? t
              : Rt.getPreset("--w3m-wallet-icon-large-border-radius");
          let i = 0;
          return (
            (i = r.includes("%") ? 0.88 * parseInt(r, 10) : parseInt(r, 10)),
            (i *= 1.17),
            z`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${
              317 - 1.57 * i
            }" stroke-dashoffset="${425 - 1.8 * i}"></use></svg>`
          );
        }
        render() {
          const e = { "w3m-error": this.isError, "w3m-stale": this.isStale };
          return z`<div class="${ye(
            e,
          )}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${
            this.walletId
          }" imageId="${
            this.imageId
          }"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Connection declined" : this.label}</w3m-text>`;
        }
      };
      (dn.styles = [Rt.globalCss, ln]),
        un([pe()], dn.prototype, "walletId", 2),
        un([pe()], dn.prototype, "imageId", 2),
        un([pe()], dn.prototype, "isError", 2),
        un([pe()], dn.prototype, "isStale", 2),
        un([pe()], dn.prototype, "label", 2),
        (dn = un([he("w3m-connector-waiting")], dn));
      var pn = Object.defineProperty,
        fn = Object.getOwnPropertyDescriptor,
        gn = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? fn(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && pn(t, r, o), o;
        };
      let mn = class extends le {
        constructor() {
          super(),
            (this.isConnected = !1),
            (this.label = "Connect Wallet"),
            (this.icon = "show"),
            (this.avatar = "show"),
            (this.balance = "hide"),
            (this.unsubscribeAccount = void 0),
            gr.rejectStandaloneButtonComponent(),
            (this.isConnected = me.AccountCtrl.state.isConnected),
            (this.unsubscribeAccount = me.AccountCtrl.subscribe(
              ({ isConnected: e }) => {
                this.isConnected = e;
              },
            ));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeAccount) || e.call(this);
        }
        render() {
          const { enableAccountView: e } = me.ConfigCtrl.state,
            t = this.balance,
            r = this.label,
            i = this.icon,
            n = this.avatar;
          return this.isConnected && e
            ? z`<w3m-account-button balance="${t}" avatar="${n}"></w3m-account-button>`
            : z`<w3m-connect-button label="${
                this.isConnected ? "Disconnect" : r
              }" icon="${i}"></w3m-connect-button>`;
        }
      };
      gn([fe()], mn.prototype, "isConnected", 2),
        gn([pe()], mn.prototype, "label", 2),
        gn([pe()], mn.prototype, "icon", 2),
        gn([pe()], mn.prototype, "avatar", 2),
        gn([pe()], mn.prototype, "balance", 2),
        (mn = gn([he("w3m-core-button")], mn));
      const wn = l`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let yn = class extends le {
        render() {
          const { isStandalone: e } = me.OptionsCtrl.state,
            { explorerExcludedWalletIds: t, enableExplorer: r } =
              me.ConfigCtrl.state,
            i = "ALL" !== t && r,
            n = Hi.manualWalletsTemplate(),
            o = Hi.recomendedWalletsTemplate(),
            s = Hi.externalWalletsTemplate(),
            a = Hi.recentWalletTemplate(),
            l = Hi.installedInjectedWalletsTemplate();
          let c = [a, ...n, ...o];
          e || (c = [...l, a, ...s, ...n, ...o]), (c = c.filter(Boolean));
          const h = c.length > 4 || i;
          let u = [];
          u = h ? c.slice(0, 3) : c;
          const d = !!u.length;
          return z`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
            gr.handleUriCopy
          }" .actionIcon="${
            Jt.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${
            Jt.MOBILE_ICON
          }<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${
            Jt.SCAN_ICON
          }<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${
            d
              ? z`<w3m-modal-footer><div class="w3m-desktop-title">${
                  Jt.DESKTOP_ICON
                }<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${u} ${
                  h
                    ? z`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
                    : null
                }</div></w3m-modal-footer>`
              : null
          }`;
        }
      };
      (yn.styles = [Rt.globalCss, wn]),
        (yn = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-desktop-wallet-selection")], yn));
      const vn = l`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let bn = class extends le {
        render() {
          const { termsOfServiceUrl: e, privacyPolicyUrl: t } =
            me.ConfigCtrl.state;
          return e ?? t
            ? z`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
                e
                  ? z`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
                  : null
              } ${e && t ? "and" : null} ${
                t
                  ? z`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
                  : null
              }</w3m-text></div>`
            : null;
        }
      };
      (bn.styles = [Rt.globalCss, vn]),
        (bn = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-legal-notice")], bn));
      const _n = l`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let En = class extends le {
        onQrcode() {
          me.AV.push("Qrcode");
        }
        render() {
          const { isStandalone: e } = me.OptionsCtrl.state,
            { explorerExcludedWalletIds: t, enableExplorer: r } =
              me.ConfigCtrl.state,
            i = "ALL" !== t && r,
            n = Hi.manualWalletsTemplate(),
            o = Hi.recomendedWalletsTemplate(),
            s = Hi.externalWalletsTemplate(),
            a = Hi.recentWalletTemplate(),
            l = Hi.installedInjectedWalletsTemplate();
          let c = [a, ...n, ...o];
          e || (c = [...l, a, ...s, ...n, ...o]), (c = c.filter(Boolean));
          const h = c.length > 8 || i;
          let u = [];
          u = h ? c.slice(0, 7) : c;
          const d = !!u.length;
          return z`<w3m-modal-header title="Connect your wallet" .onAction="${
            this.onQrcode
          }" .actionIcon="${Jt.QRCODE_ICON}"></w3m-modal-header>${
            d
              ? z`<w3m-modal-content><div>${u} ${
                  h
                    ? z`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
                    : null
                }</div></w3m-modal-content>`
              : null
          }`;
        }
      };
      (En.styles = [Rt.globalCss, _n]),
        (En = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-mobile-wallet-selection")], En));
      const xn = l`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
      var Cn = Object.defineProperty,
        On = Object.getOwnPropertyDescriptor,
        In = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? On(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Cn(t, r, o), o;
        };
      let Sn = class extends le {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = me.jb.subscribe((e) => {
              e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeModal) || e.call(this);
        }
        get overlayEl() {
          return gr.getShadowRootElement(this, ".w3m-overlay");
        }
        get containerEl() {
          return gr.getShadowRootElement(this, ".w3m-container");
        }
        toggleBodyScroll(e) {
          if (document.querySelector("body"))
            if (e) {
              const e = document.getElementById("w3m-styles");
              e?.remove();
            } else
              document.head.insertAdjacentHTML(
                "beforeend",
                '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>',
              );
        }
        onCloseModal(e) {
          e.target === e.currentTarget && me.jb.close();
        }
        onOpenModalEvent() {
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(async () => {
              const e = gr.isMobileAnimation()
                ? { y: ["50vh", "0vh"] }
                : { scale: [0.98, 1] };
              await Promise.all([
                Ot(
                  this.overlayEl,
                  { opacity: [0, 1] },
                  { delay: 0.1, duration: 0.2 },
                ).finished,
                Ot(this.containerEl, e, { delay: 0.1, duration: 0.2 }).finished,
              ]),
                (this.active = !0);
            }, 0);
        }
        async onCloseModalEvent() {
          this.toggleBodyScroll(!0), this.removeKeyboardEvents();
          const e = gr.isMobileAnimation()
            ? { y: ["0vh", "50vh"] }
            : { scale: [1, 0.98] };
          await Promise.all([
            Ot(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished,
            Ot(this.containerEl, e, { duration: 0.2 }).finished,
          ]),
            this.containerEl.removeAttribute("style"),
            (this.active = !1),
            (this.open = !1);
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (e) => {
                var t;
                "Escape" === e.key
                  ? me.jb.close()
                  : "Tab" === e.key &&
                    ((null != (t = e.target) && t.tagName.includes("W3M-")) ||
                      this.containerEl.focus());
              },
              this.abortController,
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var e;
          null == (e = this.abortController) || e.abort(),
            (this.abortController = void 0);
        }
        managedModalContextTemplate() {
          const { isStandalone: e } = me.OptionsCtrl.state;
          return e
            ? null
            : z`<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`;
        }
        render() {
          const e = { "w3m-overlay": !0, "w3m-active": this.active };
          return z`<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${ye(
            e,
          )}" @click="${
            this.onCloseModal
          }" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${
            this.open
              ? z`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`
              : null
          }</div></div>`;
        }
      };
      (Sn.styles = [Rt.globalCss, xn]),
        In([fe()], Sn.prototype, "open", 2),
        In([fe()], Sn.prototype, "active", 2),
        (Sn = In([he("w3m-modal")], Sn));
      const An = l`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
      var Pn = Object.defineProperty,
        Tn = Object.getOwnPropertyDescriptor,
        kn = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Tn(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Pn(t, r, o), o;
        };
      let Nn = class extends le {
        constructor() {
          super(),
            (this.chainId = ""),
            (this.label = ""),
            (this.wrongNetwork = !1),
            (this.unsubscribeNetwork = void 0),
            gr.rejectStandaloneButtonComponent();
          const { selectedChain: e } = me.OptionsCtrl.state;
          this.onSetChainData(e),
            (this.unsubscribeNetwork = me.OptionsCtrl.subscribe(
              ({ selectedChain: e }) => {
                this.onSetChainData(e);
              },
            ));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeNetwork) || e.call(this);
        }
        onSetChainData(e) {
          if (e) {
            const { chains: t } = me.OptionsCtrl.state,
              r = t?.map((e) => e.id);
            (this.chainId = e.id.toString()),
              (this.wrongNetwork = !(null != r && r.includes(e.id))),
              (this.label = this.wrongNetwork ? "Wrong Network" : e.name);
          }
        }
        onClick() {
          me.uA.click({ name: "NETWORK_BUTTON" }),
            me.jb.open({ route: "SelectNetwork" });
        }
        render() {
          var e;
          const { chains: t } = me.OptionsCtrl.state,
            r = t && t.length > 1;
          return z`<w3m-button-big @click="${
            this.onClick
          }" ?disabled="${!r}"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${
            null != (e = this.label) && e.length ? this.label : "Select Network"
          }</w3m-text></w3m-button-big>`;
        }
      };
      (Nn.styles = [Rt.globalCss, An]),
        kn([fe()], Nn.prototype, "chainId", 2),
        kn([fe()], Nn.prototype, "label", 2),
        kn([fe()], Nn.prototype, "wrongNetwork", 2),
        (Nn = kn([he("w3m-network-switch")], Nn));
      const Rn = l`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
      var $n = Object.defineProperty,
        Ln = Object.getOwnPropertyDescriptor,
        Mn = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Ln(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && $n(t, r, o), o;
        };
      let jn = class extends le {
        constructor() {
          super(...arguments),
            (this.chainId = void 0),
            (this.isError = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          return z`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`;
        }
        render() {
          const e = { "w3m-error": this.isError };
          return z`<div class="${ye(
            e,
          )}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image></div><w3m-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Switch declined" : this.label}</w3m-text>`;
        }
      };
      (jn.styles = [Rt.globalCss, Rn]),
        Mn([pe()], jn.prototype, "chainId", 2),
        Mn([pe()], jn.prototype, "isError", 2),
        Mn([pe()], jn.prototype, "label", 2),
        (jn = Mn([he("w3m-network-waiting")], jn));
      const Un = l`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
      var Dn = Object.defineProperty,
        Bn = Object.getOwnPropertyDescriptor,
        zn = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Bn(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Dn(t, r, o), o;
        };
      let Wn = class extends le {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isInjected = !1),
            (this.isInjectedInstalled = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          me.zv.isMobile()
            ? me.AV.replace("MobileConnecting")
            : me.AV.replace("MobileQrcodeConnecting");
        }
        onInjected() {
          this.isInjectedInstalled
            ? me.AV.replace("InjectedConnecting")
            : me.AV.replace("InstallWallet");
        }
        onDesktop() {
          me.AV.replace("DesktopConnecting");
        }
        onWeb() {
          me.AV.replace("WebConnecting");
        }
        render() {
          const { isStandalone: e } = me.OptionsCtrl.state;
          return z`<div>${this.isRetry ? z`<slot></slot>` : null} ${
            this.isMobile
              ? z`<w3m-button .onClick="${this.onMobile}" .iconLeft="${Jt.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`
              : null
          } ${
            this.isInjected && !e
              ? z`<w3m-button .onClick="${this.onInjected}" .iconLeft="${Jt.WALLET_ICON}" variant="outline">Browser</w3m-button>`
              : null
          } ${
            this.isDesktop
              ? z`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${Jt.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`
              : null
          } ${
            this.isWeb
              ? z`<w3m-button .onClick="${this.onWeb}" .iconLeft="${Jt.GLOBE_ICON}" variant="outline">Web</w3m-button>`
              : null
          }</div>`;
        }
      };
      (Wn.styles = [Rt.globalCss, Un]),
        zn([pe()], Wn.prototype, "isMobile", 2),
        zn([pe()], Wn.prototype, "isInjected", 2),
        zn([pe()], Wn.prototype, "isInjectedInstalled", 2),
        zn([pe()], Wn.prototype, "isDesktop", 2),
        zn([pe()], Wn.prototype, "isWeb", 2),
        zn([pe()], Wn.prototype, "isRetry", 2),
        (Wn = zn([he("w3m-platform-selection")], Wn));
      const Hn = l`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Vn = class extends le {
        onClick() {
          me.AV.push("WalletExplorer");
        }
        render() {
          const { recomendedWallets: e } = me.ExplorerCtrl.state,
            t = [...e, ...fr.manualWallets()].reverse().slice(0, 4);
          return z`<button @click="${
            this.onClick
          }"><div class="w3m-icons">${t.map((e) => {
            const t = gr.getWalletIcon(e);
            if (t) return z`<img src="${t}">`;
            const r = gr.getWalletIcon({ id: e.id });
            return r ? z`<img src="${r}">` : Jt.WALLET_PLACEHOLDER;
          })} ${[...Array(4 - t.length)].map(
            () => Jt.WALLET_PLACEHOLDER,
          )}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`;
        }
      };
      (Vn.styles = [Rt.globalCss, Hn]),
        (Vn = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-view-all-wallets-button")], Vn));
      const qn = l`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var Fn = Object.defineProperty,
        Kn = Object.getOwnPropertyDescriptor,
        Gn = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Kn(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Fn(t, r, o), o;
        };
      let Zn = class extends le {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            (this.unwatchWcConnection = void 0),
            setTimeout(() => {
              const { pairingUri: e } = me.WcConnectionCtrl.state,
                { standaloneUri: t } = me.OptionsCtrl.state;
              this.uri = t ?? e;
            }, 0),
            (this.unwatchWcConnection = me.WcConnectionCtrl.subscribe((e) => {
              e.pairingUri && (this.uri = e.pairingUri);
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unwatchWcConnection) || e.call(this);
        }
        get overlayEl() {
          return gr.getShadowRootElement(this, ".w3m-qr-container");
        }
        render() {
          return z`<div class="w3m-qr-container">${
            this.uri
              ? z`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>`
              : z`<w3m-spinner></w3m-spinner>`
          }</div>`;
        }
      };
      (Zn.styles = [Rt.globalCss, qn]),
        Gn([pe()], Zn.prototype, "walletId", 2),
        Gn([pe()], Zn.prototype, "imageId", 2),
        Gn([fe()], Zn.prototype, "uri", 2),
        (Zn = Gn([he("w3m-walletconnect-qr")], Zn));
      const Yn = l`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Jn = class extends le {
        async onDisconnect() {
          await me.Id.client().disconnect();
        }
        async onCopyAddress() {
          var e;
          await navigator.clipboard.writeText(
            null != (e = me.AccountCtrl.state.address) ? e : "",
          ),
            me.ToastCtrl.openToast("Address copied", "success");
        }
        render() {
          return z`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${Jt.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${Jt.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
        }
      };
      (Jn.styles = [Rt.globalCss, Yn]),
        (Jn = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-account-view")], Jn));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Qn = class extends le {
        viewTemplate() {
          return me.zv.isAndroid()
            ? z`<w3m-android-wallet-selection></w3m-android-wallet-selection>`
            : me.zv.isMobile()
            ? z`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>`
            : z`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
        }
        render() {
          return z`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
        }
      };
      (Qn.styles = [Rt.globalCss]),
        (Qn = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-connect-wallet-view")], Qn));
      const Xn = l`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var eo = Object.defineProperty,
        to = Object.getOwnPropertyDescriptor,
        ro = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? to(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && eo(t, r, o), o;
        };
      let io = class extends le {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openDesktopApp(),
            (this.unwatchConnection = me.WcConnectionCtrl.subscribe((e) => {
              this.isError = e.pairingError;
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unwatchConnection) || e.call(this);
        }
        onFormatAndRedirect(e) {
          const { desktop: t, name: r } = me.zv.getWalletRouterData(),
            i = t?.native;
          if (i) {
            const t = me.zv.formatNativeUrl(i, e, r);
            me.zv.openHref(t, "_self");
          }
        }
        openDesktopApp() {
          me.WcConnectionCtrl.setPairingError(!1);
          const { standaloneUri: e } = me.OptionsCtrl.state,
            { pairingUri: t } = me.WcConnectionCtrl.state,
            r = me.zv.getWalletRouterData();
          gr.setRecentWallet(r),
            e ? this.onFormatAndRedirect(e) : this.onFormatAndRedirect(t);
        }
        render() {
          const { name: e, id: t, image_id: r } = me.zv.getWalletRouterData(),
            {
              isMobile: i,
              isInjected: n,
              isWeb: o,
            } = gr.getCachedRouterWalletPlatforms();
          return z`<w3m-modal-header title="${e}" .onAction="${
            gr.handleUriCopy
          }" .actionIcon="${
            Jt.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${r}" label="${`Continue in ${e}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${i}" .isInjected="${n}" .isWeb="${o}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(
            this,
          )}" .iconRight="${
            Jt.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (io.styles = [Rt.globalCss, Xn]),
        ro([fe()], io.prototype, "isError", 2),
        (io = ro([he("w3m-desktop-connecting-view")], io));
      const no = l`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let oo = class extends le {
        onGet(e) {
          me.zv.openHref(e, "_blank");
        }
        render() {
          const e = me.ExplorerCtrl.state.recomendedWallets.slice(0, 5),
            t = fr.manualWallets().slice(0, 5),
            r = e.length,
            i = t.length;
          return z`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${
            r
              ? e.map(
                  (e) =>
                    z`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                      e.id
                    }" imageId="${
                      e.image_id
                    }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                      e.name
                    }</w3m-text><w3m-button .iconRight="${
                      Jt.ARROW_RIGHT_ICON
                    }" .onClick="${() =>
                      this.onGet(e.homepage)}">Get</w3m-button></div></div>`,
                )
              : null
          } ${
            i
              ? t.map(
                  (e) =>
                    z`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                      e.id
                    }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                      e.name
                    }</w3m-text><w3m-button .iconRight="${
                      Jt.ARROW_RIGHT_ICON
                    }" .onClick="${() =>
                      this.onGet(
                        e.links.universal,
                      )}">Get</w3m-button></div></div>`,
                )
              : null
          }</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${
            gr.openWalletExplorerUrl
          }" .iconRight="${
            Jt.ARROW_UP_RIGHT_ICON
          }">Explore Wallets</w3m-button></div>`;
        }
      };
      (oo.styles = [Rt.globalCss, no]),
        (oo = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-get-wallet-view")], oo));
      const so = l`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let ao = class extends le {
        constructor() {
          super(...arguments),
            (this.learnUrl = "https://ethereum.org/en/wallets/");
        }
        onGet() {
          me.ConfigCtrl.state.enableExplorer
            ? me.AV.push("GetWallet")
            : gr.openWalletExplorerUrl();
        }
        onLearnMore() {
          me.zv.openHref(this.learnUrl, "_blank");
        }
        render() {
          return z`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${
            Jt.HELP_CHART_IMG
          } ${Jt.HELP_PAINTING_IMG} ${
            Jt.HELP_ETH_IMG
          }</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
            Jt.HELP_KEY_IMG
          } ${Jt.HELP_USER_IMG} ${
            Jt.HELP_LOCK_IMG
          }</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
            Jt.HELP_COMPAS_IMG
          } ${Jt.HELP_NOUN_IMG} ${
            Jt.HELP_DAO_IMG
          }</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(
            this,
          )}" .iconLeft="${
            Jt.WALLET_ICON
          }">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(
            this,
          )}" .iconRight="${
            Jt.ARROW_UP_RIGHT_ICON
          }">Learn More</w3m-button></div></w3m-modal-content>`;
        }
      };
      (ao.styles = [Rt.globalCss, so]),
        (ao = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-help-view")], ao));
      const lo = l`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var co = Object.defineProperty,
        ho = Object.getOwnPropertyDescriptor,
        uo = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? ho(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && co(t, r, o), o;
        };
      let po = class extends le {
        constructor() {
          super(),
            (this.isError = !1),
            (this.connector = me.Id.client().getConnectorById("injected")),
            this.openInjectedApp();
        }
        async openInjectedApp() {
          const { ready: e } = this.connector;
          e &&
            ((this.isError = !1),
            await gr.handleConnectorConnection("injected", () => {
              this.isError = !0;
            }));
        }
        render() {
          const { name: e, id: t, image_id: r } = me.zv.getWalletRouterData(),
            {
              isMobile: i,
              isDesktop: n,
              isWeb: o,
            } = gr.getCachedRouterWalletPlatforms();
          return z`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${r}" label="${`Continue in ${e}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${i}" .isDesktop="${n}" .isWeb="${o}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(
            this,
          )}" .disabled="${!this.isError}" .iconRight="${
            Jt.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (po.styles = [Rt.globalCss, lo]),
        uo([fe()], po.prototype, "isError", 2),
        (po = uo([he("w3m-injected-connecting-view")], po));
      const fo = l`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let go = class extends le {
        onInstall(e) {
          e && me.zv.openHref(e, "_blank");
        }
        render() {
          const {
            name: e,
            id: t,
            image_id: r,
            homepage: i,
          } = me.zv.getWalletRouterData();
          return z`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${r}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</w3m-text><w3m-button .onClick="${() =>
            this.onInstall(i)}" .iconLeft="${
            Jt.ARROW_DOWN_ICON
          }">Download</w3m-button></w3m-info-footer>`;
        }
      };
      (go.styles = [Rt.globalCss, fo]),
        (go = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-install-wallet-view")], go));
      const mo = l`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection{margin-top:-15px}.w3m-note w3m-text{margin-top:15px}.w3m-note w3m-text span{color:var(--w3m-accent-color)}`;
      var wo = Object.defineProperty,
        yo = Object.getOwnPropertyDescriptor,
        vo = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? yo(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && wo(t, r, o), o;
        };
      let bo = class extends le {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openMobileApp(),
            (this.unwatchConnection = me.WcConnectionCtrl.subscribe((e) => {
              this.isError = e.pairingError;
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unwatchConnection) || e.call(this);
        }
        onFormatAndRedirect(e, t = !1) {
          const { mobile: r, name: i } = me.zv.getWalletRouterData(),
            n = r?.native,
            o = r?.universal;
          if (n && !t) {
            const t = me.zv.formatNativeUrl(n, e, i);
            me.zv.openHref(t, "_self");
          } else if (o) {
            const t = me.zv.formatUniversalUrl(o, e, i);
            me.zv.openHref(t, "_self");
          }
        }
        openMobileApp(e = !1) {
          me.WcConnectionCtrl.setPairingError(!1);
          const { standaloneUri: t } = me.OptionsCtrl.state,
            { pairingUri: r } = me.WcConnectionCtrl.state,
            i = me.zv.getWalletRouterData();
          gr.setRecentWallet(i),
            t ? this.onFormatAndRedirect(t, e) : this.onFormatAndRedirect(r, e);
        }
        onGoToAppStore(e) {
          e && me.zv.openHref(e, "_blank");
        }
        render() {
          const {
              name: e,
              id: t,
              image_id: r,
              app: i,
              mobile: n,
            } = me.zv.getWalletRouterData(),
            { isWeb: o } = gr.getCachedRouterWalletPlatforms(),
            s = i?.ios,
            a = n?.universal;
          return z`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${r}" label="Tap 'Open' to continue…" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-platform-selection .isWeb="${o}" .isRetry="${!0}"><w3m-button .onClick="${() =>
            this.openMobileApp(!1)}" .iconRight="${
            Jt.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection>${
            a
              ? z`<w3m-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
                  this.openMobileApp(
                    !0,
                  )}">Try this alternate link</span></w3m-text>`
              : null
          }</w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${t}" imageId="${r}"></w3m-wallet-image><w3m-text>${`Get ${e}`}</w3m-text></div><w3m-button .iconRight="${
            Jt.ARROW_RIGHT_ICON
          }" .onClick="${() =>
            this.onGoToAppStore(
              s,
            )}" variant="ghost">App Store</w3m-button></w3m-info-footer>`;
        }
      };
      (bo.styles = [Rt.globalCss, mo]),
        vo([fe()], bo.prototype, "isError", 2),
        (bo = vo([he("w3m-mobile-connecting-view")], bo));
      const _o = l`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Eo = class extends le {
        render() {
          const { name: e, id: t, image_id: r } = me.zv.getWalletRouterData(),
            {
              isInjected: i,
              isDesktop: n,
              isWeb: o,
            } = gr.getCachedRouterWalletPlatforms();
          return z`<w3m-modal-header title="${e}" .onAction="${
            gr.handleUriCopy
          }" .actionIcon="${
            Jt.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${t}" imageId="${r}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</w3m-text><w3m-platform-selection .isDesktop="${n}" .isInjected="${i}" .isWeb="${o}"></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (Eo.styles = [Rt.globalCss, _o]),
        (Eo = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-mobile-qr-connecting-view")], Eo));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let xo = class extends le {
        render() {
          return z`<w3m-modal-header title="Scan the code" .onAction="${gr.handleUriCopy}" .actionIcon="${Jt.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
        }
      };
      (xo.styles = [Rt.globalCss]),
        (xo = ((e, t, r, i) => {
          for (var n, o = t, s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (o = n(o) || o);
          return o;
        })([he("w3m-qrcode-view")], xo));
      const Co = l`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center}`;
      var Oo = Object.defineProperty,
        Io = Object.defineProperties,
        So = Object.getOwnPropertyDescriptor,
        Ao = Object.getOwnPropertyDescriptors,
        Po = Object.getOwnPropertySymbols,
        To = Object.prototype.hasOwnProperty,
        ko = Object.prototype.propertyIsEnumerable,
        No = (e, t, r) =>
          t in e
            ? Oo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ro = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? So(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Oo(t, r, o), o;
        };
      let $o = class extends le {
        constructor() {
          super(),
            (this.connectedChains = "ALL"),
            (this.isUnsupportedChains = !1),
            this.getConnectedChainIds();
        }
        async getConnectedChainIds() {
          this.connectedChains = await me.Id.client().getConnectedChainIds();
        }
        async onSelectChain(e) {
          try {
            const {
                selectedChain: t,
                walletConnectVersion: r,
                isPreferInjected: i,
              } = me.OptionsCtrl.state,
              { isConnected: n } = me.AccountCtrl.state;
            n
              ? t?.id === e.id
                ? me.AV.reset("Account")
                : 2 === r
                ? (await me.Id.client().switchNetwork({ chainId: e.id }),
                  me.AV.reset("Account"))
                : me.AV.push("SwitchNetwork", { SwitchNetwork: e })
              : i
              ? (me.OptionsCtrl.setSelectedChain(e), me.jb.close())
              : (me.OptionsCtrl.setSelectedChain(e),
                me.AV.push("ConnectWallet"));
          } catch (e) {
            console.error(e),
              me.ToastCtrl.openToast("Unsupported chain", "error");
          }
        }
        isUnsuportedChainId(e) {
          return (
            (("string" == typeof this.connectedChains &&
              "ALL" !== this.connectedChains) ||
              !(
                !Array.isArray(this.connectedChains) ||
                this.connectedChains.includes(String(e))
              )) &&
            ((this.isUnsupportedChains = !0), !0)
          );
        }
        render() {
          const { chains: e } = me.OptionsCtrl.state,
            t = e?.map((e) =>
              ((e, t) => Io(e, Ao(t)))(
                ((e, t) => {
                  for (var r in t || (t = {})) To.call(t, r) && No(e, r, t[r]);
                  if (Po) for (var r of Po(t)) ko.call(t, r) && No(e, r, t[r]);
                  return e;
                })({}, e),
                { unsupported: this.isUnsuportedChainId(e.id) },
              ),
            ),
            r = t?.sort(
              (e, t) => Number(e.unsupported) - Number(t.unsupported),
            );
          return z`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${r?.map(
            (e) =>
              z`<w3m-network-button name="${e.name}" chainId="${
                e.id
              }" .unsupported="${e.unsupported}" .onClick="${async () =>
                this.onSelectChain(e)}">${e.name}</w3m-network-button>`,
          )}</div></w3m-modal-content>${
            this.isUnsupportedChains
              ? z`<w3m-info-footer><w3m-text color="secondary" variant="small-thin">Your connected wallet may not support some of the networks available for this dapp</w3m-text></w3m-info-footer>`
              : null
          }`;
        }
      };
      ($o.styles = [Rt.globalCss, Co]),
        Ro([fe()], $o.prototype, "connectedChains", 2),
        Ro([fe()], $o.prototype, "isUnsupportedChains", 2),
        ($o = Ro([he("w3m-select-network-view")], $o));
      const Lo = l`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
      var Mo = Object.defineProperty,
        jo = Object.getOwnPropertyDescriptor,
        Uo = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? jo(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Mo(t, r, o), o;
        };
      let Do = class extends le {
        constructor() {
          super(), (this.isError = !1), this.onSwitchNetwork();
        }
        async onSwitchNetwork() {
          try {
            this.isError = !1;
            const e = me.zv.getSwitchNetworkRouterData();
            await me.Id.client().switchNetwork({ chainId: e.id }),
              me.OptionsCtrl.setSelectedChain(e),
              me.AV.reset("Account");
          } catch {
            this.isError = !0;
          }
        }
        render() {
          const { id: e, name: t } = me.zv.getSwitchNetworkRouterData();
          return z`<w3m-modal-header title="${`Connect to ${t}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${e}" label="Approve in your wallet" .isError="${
            this.isError
          }"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(
            this,
          )}" .disabled="${!this.isError}" .iconRight="${
            Jt.RETRY_ICON
          }">Try Again</w3m-button></w3m-info-footer>`;
        }
      };
      (Do.styles = [Rt.globalCss, Lo]),
        Uo([fe()], Do.prototype, "isError", 2),
        (Do = Uo([he("w3m-switch-network-view")], Do));
      const Bo = l`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var zo = Object.defineProperty,
        Wo = Object.getOwnPropertyDescriptor,
        Ho = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Wo(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && zo(t, r, o), o;
        };
      let Vo = class extends le {
        constructor() {
          super(...arguments),
            (this.loading = !me.ExplorerCtrl.state.wallets.listings.length),
            (this.firstFetch = !me.ExplorerCtrl.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = gr.debounce((e) => {
              e.length >= 3
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = e),
                  me.ExplorerCtrl.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  me.ExplorerCtrl.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var e;
          null == (e = this.intersectionObserver) || e.disconnect();
        }
        get placeholderEl() {
          return gr.getShadowRootElement(this, ".w3m-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([e]) => {
            e.isIntersecting &&
              (!this.search || !this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          const { wallets: e, search: t } = me.ExplorerCtrl.state,
            { listings: r, total: i } = this.search ? t : e;
          return i <= 40 || r.length >= i;
        }
        async fetchWallets() {
          var e;
          const {
              wallets: t,
              search: r,
              injectedWallets: i,
            } = me.ExplorerCtrl.state,
            { listings: n, total: o, page: s } = this.search ? r : t;
          if (!this.endReached && (this.firstFetch || (o > 40 && n.length < o)))
            try {
              this.loading = !0;
              const t =
                  null == (e = me.OptionsCtrl.state.standaloneChains)
                    ? void 0
                    : e.join(","),
                { listings: r } = await me.ExplorerCtrl.getWallets({
                  page: this.firstFetch ? 1 : s + 1,
                  entries: 40,
                  search: this.search,
                  version: me.OptionsCtrl.state.walletConnectVersion,
                  chains: t,
                }),
                n = r.map((e) => gr.getWalletIcon(e)),
                o = i.map((e) => gr.getWalletIcon(e));
              await Promise.all([
                ...n.map(async (e) => gr.preloadImage(e)),
                ...o.map(async (e) => gr.preloadImage(e)),
                me.zv.wait(300),
              ]),
                (this.endReached = this.isLastPage());
            } catch (e) {
              console.error(e),
                me.ToastCtrl.openToast(gr.getErrorMessage(e), "error");
            } finally {
              (this.loading = !1), (this.firstFetch = !1);
            }
        }
        onConnect(e) {
          me.zv.isAndroid()
            ? gr.handleMobileLinking(e)
            : gr.goToConnectingView(e);
        }
        onSearchChange(e) {
          const { value: t } = e.target;
          this.searchDebounce(t);
        }
        render() {
          const { wallets: e, search: t } = me.ExplorerCtrl.state,
            { listings: r } = this.search ? t : e,
            i = this.loading && !r.length,
            n = this.search.length >= 3;
          let o = Hi.injectedWalletsTemplate(),
            s = Hi.manualWalletsTemplate(),
            a = Hi.recomendedWalletsTemplate(!0);
          n &&
            ((o = o.filter(({ values: e }) =>
              gr.caseSafeIncludes(e[0], this.search),
            )),
            (s = s.filter(({ values: e }) =>
              gr.caseSafeIncludes(e[0], this.search),
            )),
            (a = a.filter(({ values: e }) =>
              gr.caseSafeIncludes(e[0], this.search),
            )));
          const l = !(this.loading || r.length || o.length || a.length),
            c = Math.max(o.length, r.length),
            h = {
              "w3m-loading": i,
              "w3m-end-reached": this.endReached || !this.loading,
              "w3m-empty": l,
            };
          return z`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(
            this,
          )}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${ye(
            h,
          )}"><div class="w3m-grid">${i ? null : a} ${
            i
              ? null
              : [...Array(c)].map(
                  (e, t) =>
                    z`${s[t]} ${o[t]} ${
                      r[t]
                        ? z`<w3m-wallet-button imageId="${
                            r[t].image_id
                          }" name="${r[t].name}" walletId="${
                            r[t].id
                          }" .onClick="${() =>
                            this.onConnect(r[t])}"></w3m-wallet-button>`
                        : null
                    }`,
                )
          }</div><div class="w3m-placeholder-block">${
            l
              ? z`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`
              : null
          } ${
            !l && this.loading ? z`<w3m-spinner></w3m-spinner>` : null
          }</div></w3m-modal-content>`;
        }
      };
      (Vo.styles = [Rt.globalCss, Bo]),
        Ho([fe()], Vo.prototype, "loading", 2),
        Ho([fe()], Vo.prototype, "firstFetch", 2),
        Ho([fe()], Vo.prototype, "search", 2),
        Ho([fe()], Vo.prototype, "endReached", 2),
        (Vo = Ho([he("w3m-wallet-explorer-view")], Vo));
      const qo = l`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var Fo = Object.defineProperty,
        Ko = Object.getOwnPropertyDescriptor,
        Go = (e, t, r, i) => {
          for (
            var n, o = i > 1 ? void 0 : i ? Ko(t, r) : t, s = e.length - 1;
            s >= 0;
            s--
          )
            (n = e[s]) && (o = (i ? n(t, r, o) : n(o)) || o);
          return i && o && Fo(t, r, o), o;
        };
      let Zo = class extends le {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openWebWallet(),
            (this.unwatchConnection = me.WcConnectionCtrl.subscribe((e) => {
              this.isError = e.pairingError;
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unwatchConnection) || e.call(this);
        }
        onFormatAndRedirect(e) {
          const { desktop: t, name: r } = me.zv.getWalletRouterData(),
            i = t?.universal;
          if (i) {
            const t = me.zv.formatUniversalUrl(i, e, r);
            me.zv.openHref(t, "_blank");
          }
        }
        openWebWallet() {
          me.WcConnectionCtrl.setPairingError(!1);
          const { standaloneUri: e } = me.OptionsCtrl.state,
            { pairingUri: t } = me.WcConnectionCtrl.state,
            r = me.zv.getWalletRouterData();
          gr.setRecentWallet(r),
            e ? this.onFormatAndRedirect(e) : this.onFormatAndRedirect(t);
        }
        render() {
          const { name: e, id: t, image_id: r } = me.zv.getWalletRouterData(),
            {
              isMobile: i,
              isInjected: n,
              isDesktop: o,
            } = gr.getCachedRouterWalletPlatforms(),
            s = me.zv.isMobile();
          return z`<w3m-modal-header title="${e}" .onAction="${
            gr.handleUriCopy
          }" .actionIcon="${
            Jt.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${r}" label="${`Continue in ${e}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${i}" .isInjected="${
            !s && n
          }" .isDesktop="${
            !s && o
          }" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(
            this,
          )}" .iconRight="${
            Jt.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (Zo.styles = [Rt.globalCss, qo]),
        Go([fe()], Zo.prototype, "isError", 2),
        (Zo = Go([he("w3m-web-connecting-view")], Zo));
    },
  },
]);
