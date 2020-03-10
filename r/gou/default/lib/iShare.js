var QRCode;
! function () {
  function r(t) {
    this.mode = o.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
    for (var e = 0, r = this.data.length; e < r; e++) {
      var i = [],
        n = this.data.charCodeAt(e);
      65536 < n ? (i[0] = 240 | (1835008 & n) >>> 18, i[1] = 128 | (258048 & n) >>> 12, i[2] = 128 | (4032 & n) >>> 6, i[3] = 128 | 63 & n) : 2048 < n ? (i[0] = 224 | (61440 & n) >>> 12, i[1] = 128 | (4032 & n) >>> 6, i[2] = 128 | 63 & n) : 128 < n ? (i[0] = 192 | (1984 & n) >>> 6, i[1] = 128 | 63 & n) : i[0] = n, this.parsedData.push(i)
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
  }

  function h(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
  }
  r.prototype = {
    getLength: function (t) {
      return this.parsedData.length
    },
    write: function (t) {
      for (var e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8)
    }
  }, h.prototype = {
    addData: function (t) {
      var e = new r(t);
      this.dataList.push(e), this.dataCache = null
    },
    isDark: function (t, e) {
      if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
      return this.modules[t][e]
    },
    getModuleCount: function () {
      return this.moduleCount
    },
    make: function () {
      this.makeImpl(!1, this.getBestMaskPattern())
    },
    makeImpl: function (t, e) {
      this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
      for (var r = 0; r < this.moduleCount; r++) {
        this.modules[r] = new Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) this.modules[r][i] = null
      }
      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = h.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
    },
    setupPositionProbePattern: function (t, e) {
      for (var r = -1; r <= 7; r++)
        if (!(t + r <= -1 || this.moduleCount <= t + r))
          for (var i = -1; i <= 7; i++) e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + r][e + i] = 0 <= r && r <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= i && i <= 4)
    },
    getBestMaskPattern: function () {
      for (var t = 0, e = 0, r = 0; r < 8; r++) {
        this.makeImpl(!0, r);
        var i = v.getLostPoint(this);
        (0 == r || i < t) && (t = i, e = r)
      }
      return e
    },
    createMovieClip: function (t, e, r) {
      var i = t.createEmptyMovieClip(e, r);
      this.make();
      for (var n = 0; n < this.modules.length; n++)
        for (var o = 1 * n, a = 0; a < this.modules[n].length; a++) {
          var s = 1 * a;
          this.modules[n][a] && (i.beginFill(0, 100), i.moveTo(s, o), i.lineTo(s + 1, o), i.lineTo(s + 1, o + 1), i.lineTo(s, o + 1), i.endFill())
        }
      return i
    },
    setupTimingPattern: function () {
      for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
      for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
    },
    setupPositionAdjustPattern: function () {
      for (var t = v.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
        for (var r = 0; r < t.length; r++) {
          var i = t[e],
            n = t[r];
          if (null == this.modules[i][n])
            for (var o = -2; o <= 2; o++)
              for (var a = -2; a <= 2; a++) this.modules[i + o][n + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
        }
    },
    setupTypeNumber: function (t) {
      for (var e = v.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
        var i = !t && 1 == (e >> r & 1);
        this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = i
      }
      for (r = 0; r < 18; r++) {
        i = !t && 1 == (e >> r & 1);
        this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = i
      }
    },
    setupTypeInfo: function (t, e) {
      for (var r = this.errorCorrectLevel << 3 | e, i = v.getBCHTypeInfo(r), n = 0; n < 15; n++) {
        var o = !t && 1 == (i >> n & 1);
        n < 6 ? this.modules[n][8] = o : n < 8 ? this.modules[n + 1][8] = o : this.modules[this.moduleCount - 15 + n][8] = o
      }
      for (n = 0; n < 15; n++) {
        o = !t && 1 == (i >> n & 1);
        n < 8 ? this.modules[8][this.moduleCount - n - 1] = o : n < 9 ? this.modules[8][15 - n - 1 + 1] = o : this.modules[8][15 - n - 1] = o
      }
      this.modules[this.moduleCount - 8][8] = !t
    },
    mapData: function (t, e) {
      for (var r = -1, i = this.moduleCount - 1, n = 7, o = 0, a = this.moduleCount - 1; 0 < a; a -= 2)
        for (6 == a && a--;;) {
          for (var s = 0; s < 2; s++)
            if (null == this.modules[i][a - s]) {
              var h = !1;
              o < t.length && (h = 1 == (t[o] >>> n & 1)), v.getMask(e, i, a - s) && (h = !h), this.modules[i][a - s] = h, -1 == --n && (o++, n = 7)
            } if ((i += r) < 0 || this.moduleCount <= i) {
            i -= r, r = -r;
            break
          }
        }
    }
  }, h.PAD0 = 236, h.PAD1 = 17, h.createData = function (t, e, r) {
    for (var i = p.getRSBlocks(t, e), n = new m, o = 0; o < r.length; o++) {
      var a = r[o];
      n.put(a.mode, 4), n.put(a.getLength(), v.getLengthInBits(a.mode, t)), a.write(n)
    }
    var s = 0;
    for (o = 0; o < i.length; o++) s += i[o].dataCount;
    if (n.getLengthInBits() > 8 * s) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * s + ")");
    for (n.getLengthInBits() + 4 <= 8 * s && n.put(0, 4); n.getLengthInBits() % 8 != 0;) n.putBit(!1);
    for (; !(n.getLengthInBits() >= 8 * s || (n.put(h.PAD0, 8), n.getLengthInBits() >= 8 * s));) n.put(h.PAD1, 8);
    return h.createBytes(n, i)
  }, h.createBytes = function (t, e) {
    for (var r = 0, i = 0, n = 0, o = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
      var h = e[s].dataCount,
        l = e[s].totalCount - h;
      i = Math.max(i, h), n = Math.max(n, l), o[s] = new Array(h);
      for (var u = 0; u < o[s].length; u++) o[s][u] = 255 & t.buffer[u + r];
      r += h;
      var c = v.getErrorCorrectPolynomial(l),
        f = new w(o[s], c.getLength() - 1).mod(c);
      a[s] = new Array(c.getLength() - 1);
      for (u = 0; u < a[s].length; u++) {
        var d = u + f.getLength() - a[s].length;
        a[s][u] = 0 <= d ? f.get(d) : 0
      }
    }
    var g = 0;
    for (u = 0; u < e.length; u++) g += e[u].totalCount;
    var p = new Array(g),
      m = 0;
    for (u = 0; u < i; u++)
      for (s = 0; s < e.length; s++) u < o[s].length && (p[m++] = o[s][u]);
    for (u = 0; u < n; u++)
      for (s = 0; s < e.length; s++) u < a[s].length && (p[m++] = a[s][u]);
    return p
  };
  for (var o = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, l = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, i = 0, n = 1, a = 2, s = 3, u = 4, c = 5, f = 6, d = 7, v = {
      PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function (t) {
        for (var e = t << 10; 0 <= v.getBCHDigit(e) - v.getBCHDigit(v.G15);) e ^= v.G15 << v.getBCHDigit(e) - v.getBCHDigit(v.G15);
        return (t << 10 | e) ^ v.G15_MASK
      },
      getBCHTypeNumber: function (t) {
        for (var e = t << 12; 0 <= v.getBCHDigit(e) - v.getBCHDigit(v.G18);) e ^= v.G18 << v.getBCHDigit(e) - v.getBCHDigit(v.G18);
        return t << 12 | e
      },
      getBCHDigit: function (t) {
        for (var e = 0; 0 != t;) e++, t >>>= 1;
        return e
      },
      getPatternPosition: function (t) {
        return v.PATTERN_POSITION_TABLE[t - 1]
      },
      getMask: function (t, e, r) {
        switch (t) {
          case i:
            return (e + r) % 2 == 0;
          case n:
            return e % 2 == 0;
          case a:
            return r % 3 == 0;
          case s:
            return (e + r) % 3 == 0;
          case u:
            return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
          case c:
            return e * r % 2 + e * r % 3 == 0;
          case f:
            return (e * r % 2 + e * r % 3) % 2 == 0;
          case d:
            return (e * r % 3 + (e + r) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + t)
        }
      },
      getErrorCorrectPolynomial: function (t) {
        for (var e = new w([1], 0), r = 0; r < t; r++) e = e.multiply(new w([1, g.gexp(r)], 0));
        return e
      },
      getLengthInBits: function (t, e) {
        if (1 <= e && e < 10) switch (t) {
          case o.MODE_NUMBER:
            return 10;
          case o.MODE_ALPHA_NUM:
            return 9;
          case o.MODE_8BIT_BYTE:
          case o.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + t)
        } else if (e < 27) switch (t) {
          case o.MODE_NUMBER:
            return 12;
          case o.MODE_ALPHA_NUM:
            return 11;
          case o.MODE_8BIT_BYTE:
            return 16;
          case o.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + t)
        } else {
          if (!(e < 41)) throw new Error("type:" + e);
          switch (t) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + t)
          }
        }
      },
      getLostPoint: function (t) {
        for (var e = t.getModuleCount(), r = 0, i = 0; i < e; i++)
          for (var n = 0; n < e; n++) {
            for (var o = 0, a = t.isDark(i, n), s = -1; s <= 1; s++)
              if (!(i + s < 0 || e <= i + s))
                for (var h = -1; h <= 1; h++) n + h < 0 || e <= n + h || 0 == s && 0 == h || a == t.isDark(i + s, n + h) && o++;
            5 < o && (r += 3 + o - 5)
          }
        for (i = 0; i < e - 1; i++)
          for (n = 0; n < e - 1; n++) {
            var l = 0;
            t.isDark(i, n) && l++, t.isDark(i + 1, n) && l++, t.isDark(i, n + 1) && l++, t.isDark(i + 1, n + 1) && l++, 0 != l && 4 != l || (r += 3)
          }
        for (i = 0; i < e; i++)
          for (n = 0; n < e - 6; n++) t.isDark(i, n) && !t.isDark(i, n + 1) && t.isDark(i, n + 2) && t.isDark(i, n + 3) && t.isDark(i, n + 4) && !t.isDark(i, n + 5) && t.isDark(i, n + 6) && (r += 40);
        for (n = 0; n < e; n++)
          for (i = 0; i < e - 6; i++) t.isDark(i, n) && !t.isDark(i + 1, n) && t.isDark(i + 2, n) && t.isDark(i + 3, n) && t.isDark(i + 4, n) && !t.isDark(i + 5, n) && t.isDark(i + 6, n) && (r += 40);
        var u = 0;
        for (n = 0; n < e; n++)
          for (i = 0; i < e; i++) t.isDark(i, n) && u++;
        return r += 10 * (Math.abs(100 * u / e / e - 50) / 5)
      }
    }, g = {
      glog: function (t) {
        if (t < 1) throw new Error("glog(" + t + ")");
        return g.LOG_TABLE[t]
      },
      gexp: function (t) {
        for (; t < 0;) t += 255;
        for (; 256 <= t;) t -= 255;
        return g.EXP_TABLE[t]
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    }, t = 0; t < 8; t++) g.EXP_TABLE[t] = 1 << t;
  for (t = 8; t < 256; t++) g.EXP_TABLE[t] = g.EXP_TABLE[t - 4] ^ g.EXP_TABLE[t - 5] ^ g.EXP_TABLE[t - 6] ^ g.EXP_TABLE[t - 8];
  for (t = 0; t < 255; t++) g.LOG_TABLE[g.EXP_TABLE[t]] = t;

  function w(t, e) {
    if (null == t.length) throw new Error(t.length + "/" + e);
    for (var r = 0; r < t.length && 0 == t[r];) r++;
    this.num = new Array(t.length - r + e);
    for (var i = 0; i < t.length - r; i++) this.num[i] = t[i + r]
  }

  function p(t, e) {
    this.totalCount = t, this.dataCount = e
  }

  function m() {
    this.buffer = [], this.length = 0
  }
  w.prototype = {
    get: function (t) {
      return this.num[t]
    },
    getLength: function () {
      return this.num.length
    },
    multiply: function (t) {
      for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
        for (var i = 0; i < t.getLength(); i++) e[r + i] ^= g.gexp(g.glog(this.get(r)) + g.glog(t.get(i)));
      return new w(e, 0)
    },
    mod: function (t) {
      if (this.getLength() - t.getLength() < 0) return this;
      for (var e = g.glog(this.get(0)) - g.glog(t.get(0)), r = new Array(this.getLength()), i = 0; i < this.getLength(); i++) r[i] = this.get(i);
      for (i = 0; i < t.getLength(); i++) r[i] ^= g.gexp(g.glog(t.get(i)) + e);
      return new w(r, 0).mod(t)
    }
  }, p.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ], p.getRSBlocks = function (t, e) {
    var r = p.getRsBlockTable(t, e);
    if (null == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
    for (var i = r.length / 3, n = [], o = 0; o < i; o++)
      for (var a = r[3 * o + 0], s = r[3 * o + 1], h = r[3 * o + 2], l = 0; l < a; l++) n.push(new p(s, h));
    return n
  }, p.getRsBlockTable = function (t, e) {
    switch (e) {
      case l.L:
        return p.RS_BLOCK_TABLE[4 * (t - 1) + 0];
      case l.M:
        return p.RS_BLOCK_TABLE[4 * (t - 1) + 1];
      case l.Q:
        return p.RS_BLOCK_TABLE[4 * (t - 1) + 2];
      case l.H:
        return p.RS_BLOCK_TABLE[4 * (t - 1) + 3];
      default:
        return
    }
  }, m.prototype = {
    get: function (t) {
      var e = Math.floor(t / 8);
      return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
    },
    put: function (t, e) {
      for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1))
    },
    getLengthInBits: function () {
      return this.length
    },
    putBit: function (t) {
      var e = Math.floor(this.length / 8);
      this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
    }
  };
  var _ = [
    [17, 14, 11, 7],
    [32, 26, 20, 14],
    [53, 42, 32, 24],
    [78, 62, 46, 34],
    [106, 84, 60, 44],
    [134, 106, 74, 58],
    [154, 122, 86, 64],
    [192, 152, 108, 84],
    [230, 180, 130, 98],
    [271, 213, 151, 119],
    [321, 251, 177, 137],
    [367, 287, 203, 155],
    [425, 331, 241, 177],
    [458, 362, 258, 194],
    [520, 412, 292, 220],
    [586, 450, 322, 250],
    [644, 504, 364, 280],
    [718, 560, 394, 310],
    [792, 624, 442, 338],
    [858, 666, 482, 382],
    [929, 711, 509, 403],
    [1003, 779, 565, 439],
    [1091, 857, 611, 461],
    [1171, 911, 661, 511],
    [1273, 997, 715, 535],
    [1367, 1059, 751, 593],
    [1465, 1125, 805, 625],
    [1528, 1190, 868, 658],
    [1628, 1264, 908, 698],
    [1732, 1370, 982, 742],
    [1840, 1452, 1030, 790],
    [1952, 1538, 1112, 842],
    [2068, 1628, 1168, 898],
    [2188, 1722, 1228, 958],
    [2303, 1809, 1283, 983],
    [2431, 1911, 1351, 1051],
    [2563, 1989, 1423, 1093],
    [2699, 2099, 1499, 1139],
    [2809, 2213, 1579, 1219],
    [2953, 2331, 1663, 1273]
  ];

  function C() {
    var t = !1,
      e = navigator.userAgent;
    if (/android/i.test(e)) {
      t = !0;
      var r = e.toString().match(/android ([0-9]\.[0-9])/i);
      r && r[1] && (t = parseFloat(r[1]))
    }
    return t
  }
  var e, y, E = ((e = function (t, e) {
      this._el = t, this._htOption = e
    }).prototype.draw = function (t) {
      var e = this._htOption,
        r = this._el,
        i = t.getModuleCount();

      function n(t, e) {
        var r = document.createElementNS("http://www.w3.org/2000/svg", t);
        for (var i in e) e.hasOwnProperty(i) && r.setAttribute(i, e[i]);
        return r
      }
      Math.floor(e.width / i), Math.floor(e.height / i), this.clear();
      var o = n("svg", {
        viewBox: "0 0 " + String(i) + " " + String(i),
        width: "100%",
        height: "100%",
        fill: e.colorLight
      });
      o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(o), o.appendChild(n("rect", {
        fill: e.colorLight,
        width: "100%",
        height: "100%"
      })), o.appendChild(n("rect", {
        fill: e.colorDark,
        width: "1",
        height: "1",
        id: "template"
      }));
      for (var a = 0; a < i; a++)
        for (var s = 0; s < i; s++)
          if (t.isDark(a, s)) {
            var h = n("use", {
              x: String(s),
              y: String(a)
            });
            h.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(h)
          }
    }, e.prototype.clear = function () {
      for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
    }, e),
    L = "svg" === document.documentElement.tagName.toLowerCase() ? E : "undefined" == typeof CanvasRenderingContext2D ? ((y = function (t, e) {
      this._el = t, this._htOption = e
    }).prototype.draw = function (t) {
      for (var e = this._htOption, r = this._el, i = t.getModuleCount(), n = Math.floor(e.width / i), o = Math.floor(e.height / i), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < i; s++) {
        a.push("<tr>");
        for (var h = 0; h < i; h++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + o + "px;background-color:" + (t.isDark(s, h) ? e.colorDark : e.colorLight) + ';"></td>');
        a.push("</tr>")
      }
      a.push("</table>"), r.innerHTML = a.join("");
      var l = r.childNodes[0],
        u = (e.width - l.offsetWidth) / 2,
        c = (e.height - l.offsetHeight) / 2;
      0 < u && 0 < c && (l.style.margin = c + "px " + u + "px")
    }, y.prototype.clear = function () {
      this._el.innerHTML = ""
    }, y) : function () {
      function t() {
        this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
      }
      if (this._android && this._android <= 2.1) {
        var u = 1 / window.devicePixelRatio,
          c = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function (t, e, r, i, n, o, a, s, h) {
          if ("nodeName" in t && /img/i.test(t.nodeName))
            for (var l = arguments.length - 1; 1 <= l; l--) arguments[l] = arguments[l] * u;
          else void 0 === s && (e *= u, r *= u, i *= u, n *= u);
          c.apply(this, arguments)
        }
      }
      var e = function (t, e) {
        this._bIsPainted = !1, this._android = C(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
      };
      return e.prototype.draw = function (t) {
        var e = this._elImage,
          r = this._oContext,
          i = this._htOption,
          n = t.getModuleCount(),
          o = i.width / n,
          a = i.height / n,
          s = Math.round(o),
          h = Math.round(a);
        e.style.display = "none", this.clear();
        for (var l = 0; l < n; l++)
          for (var u = 0; u < n; u++) {
            var c = t.isDark(l, u),
              f = u * o,
              d = l * a;
            r.strokeStyle = c ? i.colorDark : i.colorLight, r.lineWidth = 1, r.fillStyle = c ? i.colorDark : i.colorLight, r.fillRect(f, d, o, a), r.strokeRect(Math.floor(f) + .5, Math.floor(d) + .5, s, h), r.strokeRect(Math.ceil(f) - .5, Math.ceil(d) - .5, s, h)
          }
        this._bIsPainted = !0
      }, e.prototype.makeImage = function () {
        this._bIsPainted && function (t, e) {
          var r = this;
          if (r._fFail = e, r._fSuccess = t, null === r._bSupportDataURI) {
            var i = document.createElement("img"),
              n = function () {
                r._bSupportDataURI = !1, r._fFail && r._fFail.call(r)
              };
            return i.onabort = n, i.onerror = n, i.onload = function () {
              r._bSupportDataURI = !0, r._fSuccess && r._fSuccess.call(r)
            }, void(i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
          }!0 === r._bSupportDataURI && r._fSuccess ? r._fSuccess.call(r) : !1 === r._bSupportDataURI && r._fFail && r._fFail.call(r)
        }.call(this, t)
      }, e.prototype.isPainted = function () {
        return this._bIsPainted
      }, e.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
      }, e.prototype.round = function (t) {
        return t ? Math.floor(1e3 * t) / 1e3 : t
      }, e
    }();

  function D(t, e) {
    for (var r, i, n = 1, o = (r = t, (i = encodeURI(r).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (i.length != r ? 3 : 0)), a = 0, s = _.length; a <= s; a++) {
      var h = 0;
      switch (e) {
        case l.L:
          h = _[a][0];
          break;
        case l.M:
          h = _[a][1];
          break;
        case l.Q:
          h = _[a][2];
          break;
        case l.H:
          h = _[a][3]
      }
      if (o <= h) break;
      n++
    }
    if (_.length < n) throw new Error("Too long data");
    return n
  }(QRCode = function (t, e) {
    if (this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: l.H
      }, "string" == typeof e && (e = {
        text: e
      }), e)
      for (var r in e) this._htOption[r] = e[r];
    "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (L = E), this._android = C(), this._el = t, this._oQRCode = null, this._oDrawing = new L(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
  }).prototype.makeCode = function (t) {
    this._oQRCode = new h(D(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
  }, QRCode.prototype.makeImage = function () {
    "function" == typeof this._oDrawing.makeImage && (!this._android || 3 <= this._android) && this._oDrawing.makeImage()
  }, QRCode.prototype.clear = function () {
    this._oDrawing.clear()
  }, QRCode.CorrectLevel = l
}(),
function (r, o, h) {
  var i, n, a, l = Array.prototype.indexOf,
    u = Object.assign,
    c = /MicroMessenger/i.test(navigator.userAgent),
    f = o.documentElement.clientWidth <= 768,
    t = (o.images[0] || 0).src || "",
    e = v("site") || v("Site") || o.title,
    s = v("title") || v("Title") || o.title,
    d = v("description") || v("Description") || "",
    g = {
      url: location.href,
      origin: location.origin,
      source: e,
      title: s,
      description: d,
      image: t,
      imageSelector: h,
      weiboKey: "",
      wechatQrcodeTitle: "微信扫一扫：分享",
      wechatQrcodeHelper: "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",
      wechatQrcodeSize: 100,
      sites: ["weibo", "qq", "wechat", "douban", "qzone", "linkedin", "facebook", "twitter", "google"],
      mobileSites: [],
      disabled: [],
      initialized: !1
    },
    p = {
      qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",
      qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"',
      weibo: "https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",
      wechat: "javascript:",
      douban: "http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",
      linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",
      facebook: "https://www.facebook.com/sharer/sharer.php?u={{URL}}",
      twitter: "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",
      google: "https://plus.google.com/share?url={{URL}}"
    };

  function m(t) {
    return (o.querySelectorAll || r.jQuery || r.Zepto || function (i) {
      var n = [];
      return C(i.split(/\s*,\s*/), function (t) {
        var e = t.match(/([#.])(\w+)/);
        if (null === e) throw Error("Supports only simple single #ID or .CLASS selector.");
        if (e[1]) {
          var r = o.getElementById(e[2]);
          r && n.push(r)
        }
        n = n.concat(w(i))
      }), n
    }).call(o, t)
  }

  function v(t) {
    return (o.getElementsByName(t)[0] || 0).content
  }

  function w(t, e, r) {
    if (t.getElementsByClassName) return t.getElementsByClassName(e);
    var i = [],
      n = t.getElementsByTagName(r || "*");
    return e = " " + e + " ", C(n, function (t) {
      0 <= (" " + (t.className || "") + " ").indexOf(e) && i.push(t)
    }), i
  }

  function _(t) {
    var e = o.createElement("div");
    return e.innerHTML = t, e.childNodes
  }

  function C(t, e) {
    var r = t.length;
    if (r === h) {
      for (var i in t)
        if (t.hasOwnProperty(i) && !1 === e.call(t[i], t[i], i)) break
    } else
      for (var n = 0; n < r && !1 !== e.call(t[n], t[n], n); n++);
  }
  r.socialShare = function (t, e) {
    (t = "string" == typeof t ? m(t) : t).length === h && (t = [t]), C(t, function (t) {
      t.initialized || function (t, e) {
        var r = function () {
          var t = arguments;
          if (u) return u.apply(null, t);
          var r = {};
          return C(t, function (t) {
            C(t, function (t, e) {
              r[e] = t
            })
          }), t[0] = r
        }({}, g, e || {}, function (t) {
          if (t.dataset) return JSON.parse(JSON.stringify(t.dataset));
          var r = {};
          if (t.hasAttributes()) return C(t.attributes, function (t) {
            var e = t.name;
            if (0 !== e.indexOf("data-")) return !0;
            e = e.replace(/^data-/i, "").replace(/-(\w)/g, function (t, e) {
              return e.toUpperCase()
            }), r[e] = t.value
          }), r;
          return {}
        }(t));
        r.imageSelector && (r.image = m(r.imageSelector).map(function (t) {
          return t.src
        }).join("||"));
        (function (t, e) {
          if (e && "string" == typeof e) {
            var r = (t.className + " " + e).split(/\s+/),
              i = " ";
            C(r, function (t) {
              i.indexOf(" " + t + " ") < 0 && (i += t + " ")
            }), t.className = i.slice(1, -1)
          }
        })(t, "share-component social-share"), i = t, a = r, n = function (t) {
            t.mobileSites.length || (t.mobileSites = t.sites);
            var e = (f ? t.mobileSites : t.sites).slice(0),
              r = t.disabled;
            "string" == typeof e && (e = e.split(/\s*,\s*/));
            "string" == typeof r && (r = r.split(/\s*,\s*/));
            c && r.push("wechat");
            return r.length && C(r, function (t) {
              e.splice(function (t, e, r) {
                var i;
                if (e) {
                  if (l) return l.call(e, t, r);
                  for (i = e.length, r = r ? r < 0 ? Math.max(0, i + r) : r : 0; r < i; r++)
                    if (r in e && e[r] === t) return r
                }
                return -1
              }(t, e), 1)
            }), e
          }(a), s = "prepend" == a.mode, C(s ? n.reverse() : n, function (t) {
            var n, o, e = (n = t, (o = a).summary || (o.summary = o.description), p[n].replace(/\{\{(\w)(\w*)\}\}/g, function (t, e, r) {
                var i = n + e + r.toLowerCase();
                return r = (e + r).toLowerCase(), encodeURIComponent((o[i] === h ? o[r] : o[i]) || "")
              })),
              r = a.initialized ? w(i, "icon-" + t) : _('<a class="social-share-icon icon-' + t + '"></a>');
            if (!r.length) return !0;
            r[0].href = e, "wechat" === t ? r[0].tabindex = -1 : r[0].target = "_blank", a.initialized || (s ? i.insertBefore(r[0], i.firstChild) : i.appendChild(r[0]))
          }),
          function (t, e) {
            var r = w(t, "icon-wechat", "a");
            if (0 === r.length) return;
            var i = _('<div class="wechat-qrcode"><h4>' + e.wechatQrcodeTitle + '</h4><div class="qrcode"></div><div class="help">' + e.wechatQrcodeHelper + "</div></div>"),
              n = w(i[0], "qrcode", "div");
            new QRCode(n[0], {
              text: e.url,
              width: e.wechatQrcodeSize,
              height: e.wechatQrcodeSize
            }), r[0].appendChild(i[0])
          }(t, r), t.initialized = !0;
        var i, a, n, s
      }(t, e)
    })
  }, i = function () {
    socialShare(".social-share, .share-component")
  }, a = o[n = "addEventListener"] ? "" : "on", ~o.readyState.indexOf("m") ? i() : "load DOMContentLoaded readystatechange".replace(/\w+/g, function (t, e) {
    (e ? o : r)[a ? "attachEvent" : n](a + t, function () {
      i && (e < 6 || ~o.readyState.indexOf("m")) && (i(), i = 0)
    }, !1)
  })
}(window, document);