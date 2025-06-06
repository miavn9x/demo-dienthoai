/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = "".trim,
    l = {},
    m = "1.11.0",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return n.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                        : (f = a && n.isPlainObject(a) ? a : {}),
                      (g[d] = n.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return a - parseFloat(a) >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (l.ownLast) for (b in a) return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim:
        k && !k.call("\ufeff\xa0")
          ? function (a) {
              return null == a ? "" : k.call(a);
            }
          : function (a) {
              return null == a ? "" : (a + "").replace(o, "");
            },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (g) return g.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a)
            ? ((c = d.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || n.guid++),
              e)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s = "sizzle" + -new Date(),
      t = a.document,
      u = 0,
      v = 0,
      w = eb(),
      x = eb(),
      y = eb(),
      z = function (a, b) {
        return a === b && (j = !0), 0;
      },
      A = "undefined",
      B = 1 << 31,
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I =
        D.indexOf ||
        function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a) return b;
          return -1;
        },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      M = L.replace("w", "w#"),
      N =
        "\\[" +
        K +
        "*(" +
        L +
        ")" +
        K +
        "*(?:([*^$|!~]?=)" +
        K +
        "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        M +
        ")|)|)" +
        K +
        "*\\]",
      O =
        ":(" +
        L +
        ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
        N.replace(3, 8) +
        ")*)|.*)\\)|)",
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(O),
      U = new RegExp("^" + M + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = /'|\\/g,
      ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      bb = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      };
    try {
      G.apply((D = H.call(t.childNodes)), t.childNodes),
        D[t.childNodes.length].nodeType;
    } catch (cb) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function db(a, b, d, e) {
      var f, g, h, i, j, m, p, q, u, v;
      if (
        ((b ? b.ownerDocument || b : t) !== l && k(b),
        (b = b || l),
        (d = d || []),
        !a || "string" != typeof a)
      )
        return d;
      if (1 !== (i = b.nodeType) && 9 !== i) return [];
      if (n && !e) {
        if ((f = Z.exec(a)))
          if ((h = f[1])) {
            if (9 === i) {
              if (((g = b.getElementById(h)), !g || !g.parentNode)) return d;
              if (g.id === h) return d.push(g), d;
            } else if (
              b.ownerDocument &&
              (g = b.ownerDocument.getElementById(h)) &&
              r(b, g) &&
              g.id === h
            )
              return d.push(g), d;
          } else {
            if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (h = f[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(h)), d;
          }
        if (c.qsa && (!o || !o.test(a))) {
          if (
            ((q = p = s),
            (u = b),
            (v = 9 === i && a),
            1 === i && "object" !== b.nodeName.toLowerCase())
          ) {
            (m = ob(a)),
              (p = b.getAttribute("id"))
                ? (q = p.replace(_, "\\$&"))
                : b.setAttribute("id", q),
              (q = "[id='" + q + "'] "),
              (j = m.length);
            while (j--) m[j] = q + pb(m[j]);
            (u = ($.test(a) && mb(b.parentNode)) || b), (v = m.join(","));
          }
          if (v)
            try {
              return G.apply(d, u.querySelectorAll(v)), d;
            } catch (w) {
            } finally {
              p || b.removeAttribute("id");
            }
        }
      }
      return xb(a.replace(P, "$1"), b, d, e);
    }
    function eb() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function fb(a) {
      return (a[s] = !0), a;
    }
    function gb(a) {
      var b = l.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function hb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ib(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || B) - (~a.sourceIndex || B);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function jb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function kb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function lb(a) {
      return fb(function (b) {
        return (
          (b = +b),
          fb(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function mb(a) {
      return a && typeof a.getElementsByTagName !== A && a;
    }
    (c = db.support = {}),
      (f = db.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (k = db.setDocument =
        function (a) {
          var b,
            e = a ? a.ownerDocument || a : t,
            g = e.defaultView;
          return e !== l && 9 === e.nodeType && e.documentElement
            ? ((l = e),
              (m = e.documentElement),
              (n = !f(e)),
              g &&
                g !== g.top &&
                (g.addEventListener
                  ? g.addEventListener(
                      "unload",
                      function () {
                        k();
                      },
                      !1
                    )
                  : g.attachEvent &&
                    g.attachEvent("onunload", function () {
                      k();
                    })),
              (c.attributes = gb(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = gb(function (a) {
                return (
                  a.appendChild(e.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName =
                Y.test(e.getElementsByClassName) &&
                gb(function (a) {
                  return (
                    (a.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (a.firstChild.className = "i"),
                    2 === a.getElementsByClassName("i").length
                  );
                })),
              (c.getById = gb(function (a) {
                return (
                  (m.appendChild(a).id = s),
                  !e.getElementsByName || !e.getElementsByName(s).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if (typeof b.getElementById !== A && n) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ab, bb);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ab, bb);
                    return function (a) {
                      var c =
                        typeof a.getAttributeNode !== A &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return typeof b.getElementsByTagName !== A
                      ? b.getElementsByTagName(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return typeof b.getElementsByClassName !== A && n
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (p = []),
              (o = []),
              (c.qsa = Y.test(e.querySelectorAll)) &&
                (gb(function (a) {
                  (a.innerHTML =
                    "<select t=''><option selected=''></option></select>"),
                    a.querySelectorAll("[t^='']").length &&
                      o.push("[*^$]=" + K + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      o.push("\\[" + K + "*(?:value|" + J + ")"),
                    a.querySelectorAll(":checked").length || o.push(":checked");
                }),
                gb(function (a) {
                  var b = e.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      o.push("name" + K + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      o.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    o.push(",.*:");
                })),
              (c.matchesSelector = Y.test(
                (q =
                  m.webkitMatchesSelector ||
                  m.mozMatchesSelector ||
                  m.oMatchesSelector ||
                  m.msMatchesSelector)
              )) &&
                gb(function (a) {
                  (c.disconnectedMatch = q.call(a, "div")),
                    q.call(a, "[s!='']:x"),
                    p.push("!=", O);
                }),
              (o = o.length && new RegExp(o.join("|"))),
              (p = p.length && new RegExp(p.join("|"))),
              (b = Y.test(m.compareDocumentPosition)),
              (r =
                b || Y.test(m.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (z = b
                ? function (a, b) {
                    if (a === b) return (j = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === e || (a.ownerDocument === t && r(t, a))
                            ? -1
                            : b === e || (b.ownerDocument === t && r(t, b))
                            ? 1
                            : i
                            ? I.call(i, a) - I.call(i, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (j = !0), 0;
                    var c,
                      d = 0,
                      f = a.parentNode,
                      g = b.parentNode,
                      h = [a],
                      k = [b];
                    if (!f || !g)
                      return a === e
                        ? -1
                        : b === e
                        ? 1
                        : f
                        ? -1
                        : g
                        ? 1
                        : i
                        ? I.call(i, a) - I.call(i, b)
                        : 0;
                    if (f === g) return ib(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) k.unshift(c);
                    while (h[d] === k[d]) d++;
                    return d
                      ? ib(h[d], k[d])
                      : h[d] === t
                      ? -1
                      : k[d] === t
                      ? 1
                      : 0;
                  }),
              e)
            : l;
        }),
      (db.matches = function (a, b) {
        return db(a, null, null, b);
      }),
      (db.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== l && k(a),
          (b = b.replace(S, "='$1']")),
          !(!c.matchesSelector || !n || (p && p.test(b)) || (o && o.test(b))))
        )
          try {
            var d = q.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return db(b, l, null, [a]).length > 0;
      }),
      (db.contains = function (a, b) {
        return (a.ownerDocument || a) !== l && k(a), r(a, b);
      }),
      (db.attr = function (a, b) {
        (a.ownerDocument || a) !== l && k(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !n
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (db.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (db.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((j = !c.detectDuplicates),
          (i = !c.sortStable && a.slice(0)),
          a.sort(z),
          j)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (i = null), a;
      }),
      (e = db.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = db.selectors =
        {
          cacheLength: 50,
          createPseudo: fb,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ab, bb)),
                (a[3] = (a[4] || a[5] || "").replace(ab, bb)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || db.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && db.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[5] && a[2];
              return V.CHILD.test(a[0])
                ? null
                : (a[3] && void 0 !== a[4]
                    ? (a[2] = a[4])
                    : c &&
                      T.test(c) &&
                      (b = ob(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ab, bb).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = w[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                  w(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        (typeof a.getAttribute !== A &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = db.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      t = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && t)) {
                        (k = q[s] || (q[s] = {})),
                          (j = k[a] || []),
                          (n = j[0] === u && j[1]),
                          (m = j[0] === u && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [u, n, m];
                            break;
                          }
                      } else if (
                        t &&
                        (j = (b[s] || (b[s] = {}))[a]) &&
                        j[0] === u
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  db.error("unsupported pseudo: " + a);
              return e[s]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? fb(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--)
                          (d = I.call(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: fb(function (a) {
              var b = [],
                c = [],
                d = g(a.replace(P, "$1"));
              return d[s]
                ? fb(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop();
                  };
            }),
            has: fb(function (a) {
              return function (b) {
                return db(a, b).length > 0;
              };
            }),
            contains: fb(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              };
            }),
            lang: fb(function (a) {
              return (
                U.test(a || "") || db.error("unsupported lang: " + a),
                (a = a.replace(ab, bb).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = n
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === m;
            },
            focus: function (a) {
              return (
                a === l.activeElement &&
                (!l.hasFocus || l.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return X.test(a.nodeName);
            },
            input: function (a) {
              return W.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: lb(function () {
              return [0];
            }),
            last: lb(function (a, b) {
              return [b - 1];
            }),
            eq: lb(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: lb(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: lb(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: lb(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: lb(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = jb(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b);
    function nb() {}
    (nb.prototype = d.filters = d.pseudos), (d.setFilters = new nb());
    function ob(a, b) {
      var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k = x[a + " "];
      if (k) return b ? 0 : k.slice(0);
      (h = a), (i = []), (j = d.preFilter);
      while (h) {
        (!c || (e = Q.exec(h))) &&
          (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
          (c = !1),
          (e = R.exec(h)) &&
            ((c = e.shift()),
            f.push({ value: c, type: e[0].replace(P, " ") }),
            (h = h.slice(c.length)));
        for (g in d.filter)
          !(e = V[g].exec(h)) ||
            (j[g] && !(e = j[g](e))) ||
            ((c = e.shift()),
            f.push({ value: c, type: g, matches: e }),
            (h = h.slice(c.length)));
        if (!c) break;
      }
      return b ? h.length : h ? db.error(a) : x(a, i).slice(0);
    }
    function pb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function qb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = v++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [u, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[s] || (b[s] = {})),
                    (h = i[d]) && h[0] === u && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function rb(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function sb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function tb(a, b, c, d, e, f) {
      return (
        d && !d[s] && (d = tb(d)),
        e && !e[s] && (e = tb(e, f)),
        fb(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || wb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : sb(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = sb(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I.call(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = sb(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ub(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          i = g || d.relative[" "],
          j = g ? 1 : 0,
          k = qb(
            function (a) {
              return a === b;
            },
            i,
            !0
          ),
          l = qb(
            function (a) {
              return I.call(b, a) > -1;
            },
            i,
            !0
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== h)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
              );
            },
          ];
        f > j;
        j++
      )
        if ((c = d.relative[a[j].type])) m = [qb(rb(m), c)];
        else {
          if (((c = d.filter[a[j].type].apply(null, a[j].matches)), c[s])) {
            for (e = ++j; f > e; e++) if (d.relative[a[e].type]) break;
            return tb(
              j > 1 && rb(m),
              j > 1 &&
                pb(
                  a
                    .slice(0, j - 1)
                    .concat({ value: " " === a[j - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              e > j && ub(a.slice(j, e)),
              f > e && ub((a = a.slice(e))),
              f > e && pb(a)
            );
          }
          m.push(c);
        }
      return rb(m);
    }
    function vb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, i, j, k) {
          var m,
            n,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = h,
            v = f || (e && d.find.TAG("*", k)),
            w = (u += null == t ? 1 : Math.random() || 0.1),
            x = v.length;
          for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
            if (e && m) {
              n = 0;
              while ((o = a[n++]))
                if (o(m, g, i)) {
                  j.push(m);
                  break;
                }
              k && (u = w);
            }
            c && ((m = !o && m) && p--, f && r.push(m));
          }
          if (((p += q), c && q !== p)) {
            n = 0;
            while ((o = b[n++])) o(r, s, g, i);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j));
              s = sb(s);
            }
            G.apply(j, s),
              k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j);
          }
          return k && ((u = w), (h = t)), r;
        };
      return c ? fb(f) : f;
    }
    g = db.compile = function (a, b) {
      var c,
        d = [],
        e = [],
        f = y[a + " "];
      if (!f) {
        b || (b = ob(a)), (c = b.length);
        while (c--) (f = ub(b[c])), f[s] ? d.push(f) : e.push(f);
        f = y(a, vb(e, d));
      }
      return f;
    };
    function wb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
      return c;
    }
    function xb(a, b, e, f) {
      var h,
        i,
        j,
        k,
        l,
        m = ob(a);
      if (!f && 1 === m.length) {
        if (
          ((i = m[0] = m[0].slice(0)),
          i.length > 2 &&
            "ID" === (j = i[0]).type &&
            c.getById &&
            9 === b.nodeType &&
            n &&
            d.relative[i[1].type])
        ) {
          if (((b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0]), !b))
            return e;
          a = a.slice(i.shift().value.length);
        }
        h = V.needsContext.test(a) ? 0 : i.length;
        while (h--) {
          if (((j = i[h]), d.relative[(k = j.type)])) break;
          if (
            (l = d.find[k]) &&
            (f = l(
              j.matches[0].replace(ab, bb),
              ($.test(i[0].type) && mb(b.parentNode)) || b
            ))
          ) {
            if ((i.splice(h, 1), (a = f.length && pb(i)), !a))
              return G.apply(e, f), e;
            break;
          }
        }
      }
      return g(a, m)(f, b, !n, e, ($.test(a) && mb(b.parentNode)) || b), e;
    }
    return (
      (c.sortStable = s.split("").sort(z).join("") === s),
      (c.detectDuplicates = !!j),
      k(),
      (c.sortDetached = gb(function (a) {
        return 1 & a.compareDocumentPosition(l.createElement("div"));
      })),
      gb(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        hb("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        gb(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        hb("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      gb(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        hb(J, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      db
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) >= 0 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = a.document,
    A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    B = (n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : A.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || y).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)
            ),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        if (((d = z.getElementById(c[2])), d && d.parentNode)) {
          if (d.id !== c[2]) return y.find(a);
          (this.length = 1), (this[0] = d);
        }
        return (this.context = z), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (B.prototype = n.fn), (y = n(z));
  var C = /^(?:parents|prev(?:Until|All))/,
    D = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = a[b];
      while (
        e &&
        9 !== e.nodeType &&
        (void 0 === c || 1 !== e.nodeType || !n(e).is(c))
      )
        1 === e.nodeType && d.push(e), (e = e[b]);
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b,
          c = n(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? n.inArray(this[0], n(a))
            : n.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function E(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function (a) {
        return E(a, "nextSibling");
      },
      prev: function (a) {
        return E(a, "previousSibling");
      },
      nextAll: function (a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return n.sibling(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var F = /\S+/g,
    G = {};
  function H(a) {
    var b = (G[a] = {});
    return (
      n.each(a.match(F) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0;
          h && e > f;
          f++
        )
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (b = !1),
          h && (i ? i.length && j(i.shift()) : c ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var d = h.length;
            !(function f(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              b ? (e = h.length) : c && ((g = d), j(c));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, c) {
                var d;
                while ((d = n.inArray(c, h, d)) > -1)
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (e = 0), this;
        },
        disable: function () {
          return (h = i = c = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return (
            !h ||
              (d && !i) ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              b ? i.push(c) : j(c)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? !--n.readyWait : !n.isReady) {
          if (!z.body) return setTimeout(n.ready);
          (n.isReady = !0),
            (a !== !0 && --n.readyWait > 0) ||
              (I.resolveWith(z, [n]),
              n.fn.trigger && n(z).trigger("ready").off("ready"));
        }
      },
    });
  function J() {
    z.addEventListener
      ? (z.removeEventListener("DOMContentLoaded", K, !1),
        a.removeEventListener("load", K, !1))
      : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }
  function K() {
    (z.addEventListener ||
      "load" === event.type ||
      "complete" === z.readyState) &&
      (J(), n.ready());
  }
  n.ready.promise = function (b) {
    if (!I)
      if (((I = n.Deferred()), "complete" === z.readyState))
        setTimeout(n.ready);
      else if (z.addEventListener)
        z.addEventListener("DOMContentLoaded", K, !1),
          a.addEventListener("load", K, !1);
      else {
        z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
        var c = !1;
        try {
          c = null == a.frameElement && z.documentElement;
        } catch (d) {}
        c &&
          c.doScroll &&
          !(function e() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(e, 50);
              }
              J(), n.ready();
            }
          })();
      }
    return I.promise(b);
  };
  var L = "undefined",
    M;
  for (M in n(l)) break;
  (l.ownLast = "0" !== M),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a,
        b,
        c = z.getElementsByTagName("body")[0];
      c &&
        ((a = z.createElement("div")),
        (a.style.cssText =
          "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
        (b = z.createElement("div")),
        c.appendChild(a).appendChild(b),
        typeof b.style.zoom !== L &&
          ((b.style.cssText =
            "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1"),
          (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) &&
            (c.style.zoom = 1)),
        c.removeChild(a),
        (a = b = null));
    }),
    (function () {
      var a = z.createElement("div");
      if (null == l.deleteExpando) {
        l.deleteExpando = !0;
        try {
          delete a.test;
        } catch (b) {
          l.deleteExpando = !1;
        }
      }
      a = null;
    })(),
    (n.acceptData = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    });
  var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function R(a, b, d, e) {
    if (n.acceptData(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = n.extend(j[k], b))
              : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function S(a, b, c) {
    if (n.acceptData(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = null));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
      );
    },
    data: function (a, b, c) {
      return R(a, b, c);
    },
    removeData: function (a, b) {
      return S(a, b);
    },
    _data: function (a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return S(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              (d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d]));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              n.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              n.data(this, a, b);
            })
          : f
          ? P(f, a, n.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = n._data(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    W = (n.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) n.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }),
    X = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = z.createDocumentFragment(),
      b = z.createElement("div"),
      c = z.createElement("input");
    if (
      (b.setAttribute("className", "t"),
      (b.innerHTML = "  <link/><table></table><a href='/a'>a</a>"),
      (l.leadingWhitespace = 3 === b.firstChild.nodeType),
      (l.tbody = !b.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!b.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      a.appendChild(c),
      (l.appendChecked = c.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
      a.appendChild(b),
      (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !0),
      b.attachEvent &&
        (b.attachEvent("onclick", function () {
          l.noCloneEvent = !1;
        }),
        b.cloneNode(!0).click()),
      null == l.deleteExpando)
    ) {
      l.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        l.deleteExpando = !1;
      }
    }
    a = b = c = null;
  })(),
    (function () {
      var b,
        c,
        d = z.createElement("div");
      for (b in { submit: !0, change: !0, focusin: !0 })
        (c = "on" + b),
          (l[b + "Bubbles"] = c in a) ||
            (d.setAttribute(c, "t"),
            (l[b + "Bubbles"] = d.attributes[c].expando === !1));
      d = null;
    })();
  var Y = /^(?:input|select|textarea)$/i,
    Z = /^key/,
    $ = /^(?:mouse|contextmenu)|click/,
    _ = /^(?:focusinfocus|focusoutblur)$/,
    ab = /^([^.]*)(?:\.(.+)|)$/;
  function bb() {
    return !0;
  }
  function cb() {
    return !1;
  }
  function db() {
    try {
      return z.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return typeof n === L || (a && n.event.triggered === a.type)
                  ? void 0
                  : n.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(F) || [""]),
          (h = b.length);
        while (h--)
          (f = ab.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
                ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(F) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ab.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        l,
        m,
        o = [d || z],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = l = d = d || z),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !_.test(p + n.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (g = p.indexOf(":") < 0 && "on" + p),
          (b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (k = n.event.special[p] || {}),
          e || !k.trigger || k.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !k.noBubble && !n.isWindow(d)) {
          for (
            i = k.delegateType || p, _.test(i + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (l = h);
          l === (d.ownerDocument || z) &&
            o.push(l.defaultView || l.parentWindow || a);
        }
        m = 0;
        while ((h = o[m++]) && !b.isPropagationStopped())
          (b.type = m > 1 ? i : k.bindType || p),
            (f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle")),
            f && f.apply(h, c),
            (f = g && h[g]),
            f &&
              f.apply &&
              n.acceptData(h) &&
              ((b.result = f.apply(h, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = p),
          !e &&
            !b.isDefaultPrevented() &&
            (!k._default || k._default.apply(o.pop(), c) === !1) &&
            n.acceptData(d) &&
            g &&
            d[p] &&
            !n.isWindow(d))
        ) {
          (l = d[g]), l && (d[g] = null), (n.event.triggered = p);
          try {
            d[p]();
          } catch (r) {}
          (n.event.triggered = void 0), l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (g = 0);
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(e.namespace)) &&
              ((a.handleObj = e),
              (a.data = e.data),
              (c = (
                (n.event.special[e.origType] || {}).handle || e.handler
              ).apply(f.elem, i)),
              void 0 !== c &&
                (a.result = c) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              (d = b[f]),
                (c = d.selector + " "),
                void 0 === e[c] &&
                  (e[c] = d.needsContext
                    ? n(c, this).index(i) >= 0
                    : n.find(c, this, null, [i]).length),
                e[c] && e.push(d);
            e.length && g.push({ elem: i, handlers: e });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = f.srcElement || z),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        g.filter ? g.filter(a, f) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button,
          g = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((d = a.target.ownerDocument || z),
            (e = d.documentElement),
            (c = d.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (c && c.scrollTop) || 0) -
              ((e && e.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            g &&
            (a.relatedTarget = g === a.target ? b.toElement : g),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== db() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === db() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = z.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c));
        }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented &&
                  (a.returnValue === !1 ||
                    (a.getPreventDefault && a.getPreventDefault())))
                  ? bb
                  : cb))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: cb,
      isPropagationStopped: cb,
      isImmediatePropagationStopped: cb,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = bb),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = bb),
          a &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = bb), this.stopPropagation();
      },
    }),
    n.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submitBubbles ||
      (n.event.special.submit = {
        setup: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      n.nodeName(b, "input") || n.nodeName(b, "button")
                        ? b.form
                        : void 0;
                  c &&
                    !n._data(c, "submitBubbles") &&
                    (n.event.add(c, "submit._submit", function (a) {
                      a._submit_bubble = !0;
                    }),
                    n._data(c, "submitBubbles", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              n.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.remove(this, "._submit");
        },
      }),
    l.changeBubbles ||
      (n.event.special.change = {
        setup: function () {
          return Y.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (n.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                n.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    n.event.simulate("change", this, a, !0);
                })),
              !1)
            : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Y.test(b.nodeName) &&
                  !n._data(b, "changeBubbles") &&
                  (n.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      n.event.simulate("change", this.parentNode, a, !0);
                  }),
                  n._data(b, "changeBubbles", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return n.event.remove(this, "._change"), !Y.test(this.nodeName);
        },
      }),
    l.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (f in a) this.on(f, b, c, a[f], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = cb;
        else if (!d) return this;
        return (
          1 === e &&
            ((g = d),
            (d = function (a) {
              return n().off(a), g.apply(this, arguments);
            }),
            (d.guid = g.guid || (g.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = cb),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  function eb(a) {
    var b = fb.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  var fb =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gb = / jQuery\d+="(?:null|\d+)"/g,
    hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
    ib = /^\s+/,
    jb =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    kb = /<([\w:]+)/,
    lb = /<tbody/i,
    mb = /<|&#?\w+;/,
    nb = /<(?:script|style|link)/i,
    ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pb = /^$|\/(?:java|ecma)script/i,
    qb = /^true\/(.*)/,
    rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sb = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    tb = eb(z),
    ub = tb.appendChild(z.createElement("div"));
  (sb.optgroup = sb.option),
    (sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead),
    (sb.th = sb.td);
  function vb(a, b) {
    var c,
      d,
      e = 0,
      f =
        typeof a.getElementsByTagName !== L
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== L
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }
  function wb(a) {
    X.test(a.type) && (a.defaultChecked = a.checked);
  }
  function xb(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function yb(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }
  function zb(a) {
    var b = qb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ab(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  function Bb(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }
  function Cb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((yb(b).text = a.text), zb(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && X.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((ub.innerHTML = a.outerHTML), ub.removeChild((f = ub.firstChild))),
        !(
          (l.noCloneEvent && l.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        ))
      )
        for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Cb(e, d[g]);
      if (b)
        if (c)
          for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++)
            Bb(e, d[g]);
        else Bb(a, f);
      return (
        (d = vb(f, "script")),
        d.length > 0 && Ab(d, !i && vb(a, "script")),
        (d = h = e = null),
        f
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0;
        m > q;
        q++
      )
        if (((f = a[q]), f || 0 === f))
          if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
          else if (mb.test(f)) {
            (h = h || o.appendChild(b.createElement("div"))),
              (i = (kb.exec(f) || ["", ""])[1].toLowerCase()),
              (k = sb[i] || sb._default),
              (h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2]),
              (e = k[0]);
            while (e--) h = h.lastChild;
            if (
              (!l.leadingWhitespace &&
                ib.test(f) &&
                p.push(b.createTextNode(ib.exec(f)[0])),
              !l.tbody)
            ) {
              (f =
                "table" !== i || lb.test(f)
                  ? "<table>" !== k[1] || lb.test(f)
                    ? 0
                    : h
                  : h.firstChild),
                (e = f && f.childNodes.length);
              while (e--)
                n.nodeName((j = f.childNodes[e]), "tbody") &&
                  !j.childNodes.length &&
                  f.removeChild(j);
            }
            n.merge(p, h.childNodes), (h.textContent = "");
            while (h.firstChild) h.removeChild(h.firstChild);
            h = o.lastChild;
          } else p.push(b.createTextNode(f));
      h && o.removeChild(h),
        l.appendChecked || n.grep(vb(p, "input"), wb),
        (q = 0);
      while ((f = p[q++]))
        if (
          (!d || -1 === n.inArray(f, d)) &&
          ((g = n.contains(f.ownerDocument, f)),
          (h = vb(o.appendChild(f), "script")),
          g && Ab(h),
          c)
        ) {
          e = 0;
          while ((f = h[e++])) pb.test(f.type || "") && c.push(f);
        }
      return (h = null), o;
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = n.expando,
          j = n.cache,
          k = l.deleteExpando,
          m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || n.acceptData(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            k
              ? delete d[i]
              : typeof d.removeAttribute !== L
              ? d.removeAttribute(i)
              : (d[i] = null),
            c.push(f));
        }
    },
  }),
    n.fn.extend({
      text: function (a) {
        return W(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || z).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = xb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = xb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(vb(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(vb(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return W(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
            if (
              !(
                "string" != typeof a ||
                nb.test(a) ||
                (!l.htmlSerialize && hb.test(a)) ||
                (!l.leadingWhitespace && ib.test(a)) ||
                sb[(kb.exec(a) || ["", ""])[1].toLowerCase()]
              )
            ) {
              a = a.replace(jb, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(vb(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(vb(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          k = this.length,
          m = this,
          o = k - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          k &&
          ((i = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (c = i.firstChild),
          1 === i.childNodes.length && (i = c),
          c)
        ) {
          for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++)
            (d = i),
              j !== o &&
                ((d = n.clone(d, !0, !0)), f && n.merge(g, vb(d, "script"))),
              b.call(this[j], d, j);
          if (f)
            for (
              h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0;
              f > j;
              j++
            )
              (d = g[j]),
                pb.test(d.type || "") &&
                  !n._data(d, "globalEval") &&
                  n.contains(h, d) &&
                  (d.src
                    ? n._evalUrl && n._evalUrl(d.src)
                    : n.globalEval(
                        (d.text || d.textContent || d.innerHTML || "").replace(
                          rb,
                          ""
                        )
                      ));
          i = c = null;
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              n(g[d])[b](c),
              f.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Db,
    Eb = {};
  function Fb(b, c) {
    var d = n(c.createElement(b)).appendTo(c.body),
      e = a.getDefaultComputedStyle
        ? a.getDefaultComputedStyle(d[0]).display
        : n.css(d[0], "display");
    return d.detach(), e;
  }
  function Gb(a) {
    var b = z,
      c = Eb[a];
    return (
      c ||
        ((c = Fb(a, b)),
        ("none" !== c && c) ||
          ((Db = (
            Db || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Db[0].contentWindow || Db[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Fb(a, b)),
          Db.detach()),
        (Eb[a] = c)),
      c
    );
  }
  !(function () {
    var a,
      b,
      c = z.createElement("div"),
      d =
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    (c.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (a = c.getElementsByTagName("a")[0]),
      (a.style.cssText = "float:left;opacity:.5"),
      (l.opacity = /^0.5/.test(a.style.opacity)),
      (l.cssFloat = !!a.style.cssFloat),
      (c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (l.clearCloneStyle = "content-box" === c.style.backgroundClip),
      (a = c = null),
      (l.shrinkWrapBlocks = function () {
        var a, c, e, f;
        if (null == b) {
          if (((a = z.getElementsByTagName("body")[0]), !a)) return;
          (f =
            "border:0;width:0;height:0;position:absolute;top:0;left:-9999px"),
            (c = z.createElement("div")),
            (e = z.createElement("div")),
            a.appendChild(c).appendChild(e),
            (b = !1),
            typeof e.style.zoom !== L &&
              ((e.style.cssText = d + ";width:1px;padding:1px;zoom:1"),
              (e.innerHTML = "<div></div>"),
              (e.firstChild.style.width = "5px"),
              (b = 3 !== e.offsetWidth)),
            a.removeChild(c),
            (a = c = e = null);
        }
        return b;
      });
  })();
  var Hb = /^margin/,
    Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Jb,
    Kb,
    Lb = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Jb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
      }),
      (Kb = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Jb(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          c &&
            ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
            Ib.test(g) &&
              Hb.test(b) &&
              ((d = h.width),
              (e = h.minWidth),
              (f = h.maxWidth),
              (h.minWidth = h.maxWidth = h.width = g),
              (g = c.width),
              (h.width = d),
              (h.minWidth = e),
              (h.maxWidth = f))),
          void 0 === g ? g : g + ""
        );
      }))
    : z.documentElement.currentStyle &&
      ((Jb = function (a) {
        return a.currentStyle;
      }),
      (Kb = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Jb(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Ib.test(g) &&
            !Lb.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Mb(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = z.createElement("div"),
      i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
      j =
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    (h.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (b = h.getElementsByTagName("a")[0]),
      (b.style.cssText = "float:left;opacity:.5"),
      (l.opacity = /^0.5/.test(b.style.opacity)),
      (l.cssFloat = !!b.style.cssFloat),
      (h.style.backgroundClip = "content-box"),
      (h.cloneNode(!0).style.backgroundClip = ""),
      (l.clearCloneStyle = "content-box" === h.style.backgroundClip),
      (b = h = null),
      n.extend(l, {
        reliableHiddenOffsets: function () {
          if (null != c) return c;
          var a,
            b,
            d,
            e = z.createElement("div"),
            f = z.getElementsByTagName("body")[0];
          if (f)
            return (
              e.setAttribute("className", "t"),
              (e.innerHTML =
                "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
              (a = z.createElement("div")),
              (a.style.cssText = i),
              f.appendChild(a).appendChild(e),
              (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (b = e.getElementsByTagName("td")),
              (b[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
              (d = 0 === b[0].offsetHeight),
              (b[0].style.display = ""),
              (b[1].style.display = "none"),
              (c = d && 0 === b[0].offsetHeight),
              f.removeChild(a),
              (e = f = null),
              c
            );
        },
        boxSizing: function () {
          return null == d && k(), d;
        },
        boxSizingReliable: function () {
          return null == e && k(), e;
        },
        pixelPosition: function () {
          return null == f && k(), f;
        },
        reliableMarginRight: function () {
          var b, c, d, e;
          if (null == g && a.getComputedStyle) {
            if (((b = z.getElementsByTagName("body")[0]), !b)) return;
            (c = z.createElement("div")),
              (d = z.createElement("div")),
              (c.style.cssText = i),
              b.appendChild(c).appendChild(d),
              (e = d.appendChild(z.createElement("div"))),
              (e.style.cssText = d.style.cssText = j),
              (e.style.marginRight = e.style.width = "0"),
              (d.style.width = "1px"),
              (g = !parseFloat(
                (a.getComputedStyle(e, null) || {}).marginRight
              )),
              b.removeChild(c);
          }
          return g;
        },
      });
    function k() {
      var b,
        c,
        h = z.getElementsByTagName("body")[0];
      h &&
        ((b = z.createElement("div")),
        (c = z.createElement("div")),
        (b.style.cssText = i),
        h.appendChild(b).appendChild(c),
        (c.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%"),
        n.swap(h, null != h.style.zoom ? { zoom: 1 } : {}, function () {
          d = 4 === c.offsetWidth;
        }),
        (e = !0),
        (f = !1),
        (g = !0),
        a.getComputedStyle &&
          ((f = "1%" !== (a.getComputedStyle(c, null) || {}).top),
          (e =
            "4px" === (a.getComputedStyle(c, null) || { width: "4px" }).width)),
        h.removeChild(b),
        (c = h = null));
    }
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Nb = /alpha\([^)]*\)/i,
    Ob = /opacity\s*=\s*([^)]*)/,
    Pb = /^(none|table(?!-c[ea]).+)/,
    Qb = new RegExp("^(" + T + ")(.*)$", "i"),
    Rb = new RegExp("^([+-])=(" + T + ")", "i"),
    Sb = { position: "absolute", visibility: "hidden", display: "block" },
    Tb = { letterSpacing: 0, fontWeight: 400 },
    Ub = ["Webkit", "O", "Moz", "ms"];
  function Vb(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Ub.length;
    while (e--) if (((b = Ub[e] + c), b in a)) return b;
    return d;
  }
  function Wb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                V(d) &&
                (f[g] = n._data(d, "olddisplay", Gb(d.nodeName))))
            : f[g] ||
              ((e = V(d)),
              ((c && "none" !== c) || !e) &&
                n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Xb(a, b, c) {
    var d = Qb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Yb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + U[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g;
  }
  function Zb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Jb(a),
      g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Kb(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ib.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Kb(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = Rb.exec(c)) &&
            ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))), (f = "number")),
          null != c &&
            c === c &&
            ("number" !== f || n.cssNumber[h] || (c += "px"),
            l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            (i[b] = ""), (i[b] = c);
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Kb(a, b, d)),
        "normal" === f && b in Tb && (f = Tb[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || n.isNumeric(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? 0 === a.offsetWidth && Pb.test(n.css(a, "display"))
              ? n.swap(a, Sb, function () {
                  return Zb(a, b, d);
                })
              : Zb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Jb(a);
          return Xb(
            a,
            c,
            d
              ? Yb(
                  a,
                  b,
                  d,
                  l.boxSizing() &&
                    "border-box" === n.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    l.opacity ||
      (n.cssHooks.opacity = {
        get: function (a, b) {
          return Ob.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === n.trim(f.replace(Nb, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e);
        },
      }),
    (n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, Kb, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Hb.test(a) || (n.cssHooks[a + b].set = Xb);
    }),
    n.fn.extend({
      css: function (a, b) {
        return W(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Jb(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Wb(this, !0);
      },
      hide: function () {
        return Wb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function $b(a, b, c, d, e) {
    return new $b.prototype.init(a, b, c, d, e);
  }
  (n.Tween = $b),
    ($b.prototype = {
      constructor: $b,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = $b.propHooks[this.prop];
        return a && a.get ? a.get(this) : $b.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = $b.propHooks[this.prop];
        return (
          (this.pos = b =
            this.options.duration
              ? n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                )
              : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : $b.propHooks._default.set(this),
          this
        );
      },
    }),
    ($b.prototype.init.prototype = $b.prototype),
    ($b.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    ($b.propHooks.scrollTop = $b.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = $b.prototype.init),
    (n.fx.step = {});
  var _b,
    ac,
    bc = /^(?:toggle|show|hide)$/,
    cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    dc = /queueHooks$/,
    ec = [jc],
    fc = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = cc.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              cc.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function gc() {
    return (
      setTimeout(function () {
        _b = void 0;
      }),
      (_b = n.now())
    );
  }
  function hc(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = U[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function ic(a, b, c) {
    for (
      var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function jc(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && V(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      m.always(function () {
        m.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        (k = Gb(a.nodeName)),
        "none" === j && (j = k),
        "inline" === j &&
          "none" === n.css(a, "float") &&
          (l.inlineBlockNeedsLayout && "inline" !== k
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
          m.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), bc.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      }
    if (!n.isEmptyObject(o)) {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
              n(a).hide();
            }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = ic(q ? r[d] : 0, d, m)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function kc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function lc(a, b, c) {
    var d,
      e,
      f = 0,
      g = ec.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = _b || gc(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: _b || gc(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (kc(k, j.opts.specialEasing); g > f; f++)
      if ((d = ec[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, ic, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(lc, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (fc[c] = fc[c] || []), fc[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? ec.unshift(a) : ec.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = lc(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(hc(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: hc("show"),
        slideUp: hc("hide"),
        slideToggle: hc("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (_b = n.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (_b = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      ac || (ac = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(ac), (ac = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a,
        b,
        c,
        d,
        e = z.createElement("div");
      e.setAttribute("className", "t"),
        (e.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = e.getElementsByTagName("a")[0]),
        (c = z.createElement("select")),
        (d = c.appendChild(z.createElement("option"))),
        (b = e.getElementsByTagName("input")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== e.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = d.selected),
        (l.enctype = !!z.createElement("form").enctype),
        (c.disabled = !0),
        (l.optDisabled = !d.disabled),
        (b = z.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value),
        (a = b = c = d = e = null);
    })();
  var mc = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.text(a);
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (l.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var nc,
    oc,
    pc = n.expr.attrHandle,
    qc = /^(?:checked|selected)$/i,
    rc = l.getSetAttribute,
    sc = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return W(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === L
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(F);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (sc && rc) || !qc.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(rc ? c : d);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (oc = {
      set: function (a, b, c) {
        return (
          b === !1
            ? n.removeAttr(a, c)
            : (sc && rc) || !qc.test(c)
            ? a.setAttribute((!rc && n.propFix[c]) || c, c)
            : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = pc[b] || n.find.attr;
      pc[b] =
        (sc && rc) || !qc.test(b)
          ? function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = pc[b]),
                  (pc[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (pc[b] = f)),
                e
              );
            }
          : function (a, b, c) {
              return c
                ? void 0
                : a[n.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            };
    }),
    (sc && rc) ||
      (n.attrHooks.value = {
        set: function (a, b, c) {
          return n.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : nc && nc.set(a, b, c);
        },
      }),
    rc ||
      ((nc = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (pc.id =
        pc.name =
        pc.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: nc.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          nc.set(a, "" === b ? !1 : b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    l.style ||
      (n.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var tc = /^(?:input|select|textarea|button|object)$/i,
    uc = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return W(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : tc.test(a.nodeName) || (uc.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    l.hrefNormalized ||
      n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var vc = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(F) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = 0 === arguments.length || ("string" == typeof a && a);
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(F) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(vc, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(F) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === L || "boolean" === c) &&
                      (this.className &&
                        n._data(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : n._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var wc = n.now(),
    xc = /\?/,
    yc =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(yc, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var zc,
    Ac,
    Bc = /#.*$/,
    Cc = /([?&])_=[^&]*/,
    Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Fc = /^(?:GET|HEAD)$/,
    Gc = /^\/\//,
    Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ic = {},
    Jc = {},
    Kc = "*/".concat("*");
  try {
    Ac = location.href;
  } catch (Lc) {
    (Ac = z.createElement("a")), (Ac.href = ""), (Ac = Ac.href);
  }
  zc = Hc.exec(Ac.toLowerCase()) || [];
  function Mc(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(F) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nc(a, b, c, d) {
    var e = {},
      f = a === Jc;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Oc(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }
  function Pc(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Qc(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ac,
      type: "GET",
      isLocal: Ec.test(zc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a);
    },
    ajaxPrefilter: Mc(Ic),
    ajaxTransport: Mc(Jc),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while ((b = Dc.exec(f))) j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || Ac) + "")
          .replace(Bc, "")
          .replace(Gc, zc[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(F) || [""]),
        null == k.crossDomain &&
          ((c = Hc.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !c ||
            (c[1] === zc[1] &&
              c[2] === zc[2] &&
              (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                (zc[3] || ("http:" === zc[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = n.param(k.data, k.traditional)),
        Nc(Ic, k, b, v),
        2 === t)
      )
        return v;
      (h = k.global),
        h && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !Fc.test(k.type)),
        (e = k.url),
        k.hasContent ||
          (k.data &&
            ((e = k.url += (xc.test(e) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = Cc.test(e)
              ? e.replace(Cc, "$1_=" + wc++)
              : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)),
        k.ifModified &&
          (n.lastModified[e] &&
            v.setRequestHeader("If-Modified-Since", n.lastModified[e]),
          n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
      if ((i = Nc(Jc, k, b, v))) {
        (v.readyState = 1),
          h && m.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, c, d) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (i = void 0),
          (f = d || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          c && (u = Pc(k, v, c)),
          (u = Qc(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (n.lastModified[e] = w),
                (w = v.getResponseHeader("etag")),
                w && (n.etag[e] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          h &&
            (m.trigger("ajaxComplete", [v, k]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return (
        (a.offsetWidth <= 0 && a.offsetHeight <= 0) ||
        (!l.reliableHiddenOffsets() &&
          "none" === ((a.style && a.style.display) || n.css(a, "display")))
      );
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var Rc = /%20/g,
    Sc = /\[\]$/,
    Tc = /\r?\n/g,
    Uc = /^(?:submit|button|image|reset|file)$/i,
    Vc = /^(?:input|select|textarea|keygen)/i;
  function Wc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || Sc.test(a)
          ? d(a, e)
          : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Wc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Wc(c, a[c], b, e);
    return d.join("&").replace(Rc, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              Vc.test(this.nodeName) &&
              !Uc.test(a) &&
              (this.checked || !X.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(Tc, "\r\n") };
                })
              : { name: b.name, value: c.replace(Tc, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                $c()) ||
              _c()
            );
          }
        : $c);
  var Xc = 0,
    Yc = {},
    Zc = n.ajaxSettings.xhr();
  a.ActiveXObject &&
    n(a).on("unload", function () {
      for (var a in Yc) Yc[a](void 0, !0);
    }),
    (l.cors = !!Zc && "withCredentials" in Zc),
    (Zc = l.ajax = !!Zc),
    Zc &&
      n.ajaxTransport(function (a) {
        if (!a.crossDomain || l.cors) {
          var b;
          return {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Xc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
              f.send((a.hasContent && a.data) || null),
                (b = function (c, e) {
                  var h, i, j;
                  if (b && (e || 4 === f.readyState))
                    if (
                      (delete Yc[g],
                      (b = void 0),
                      (f.onreadystatechange = n.noop),
                      e)
                    )
                      4 !== f.readyState && f.abort();
                    else {
                      (j = {}),
                        (h = f.status),
                        "string" == typeof f.responseText &&
                          (j.text = f.responseText);
                      try {
                        i = f.statusText;
                      } catch (k) {
                        i = "";
                      }
                      h || !a.isLocal || a.crossDomain
                        ? 1223 === h && (h = 204)
                        : (h = j.text ? 200 : 404);
                    }
                  j && d(h, i, j, f.getAllResponseHeaders());
                }),
                a.async
                  ? 4 === f.readyState
                    ? setTimeout(b)
                    : (f.onreadystatechange = Yc[g] = b)
                  : b();
            },
            abort: function () {
              b && b(void 0, !0);
            },
          };
        }
      });
  function $c() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function _c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      },
    },
  }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = z.head || n("head")[0] || z.documentElement;
        return {
          send: function (d, e) {
            (b = z.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || e(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var ad = [],
    bd = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = ad.pop() || n.expando + "_" + wc++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (bd.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              bd.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(bd, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), ad.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || z);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var cd = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && cd) return cd.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = a.slice(h, a.length)), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (f = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: f, dataType: "html", data: b })
          .done(function (a) {
            (e = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, e || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var dd = a.document.documentElement;
  function ed(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? (typeof e.getBoundingClientRect !== L &&
                  (d = e.getBoundingClientRect()),
                (c = ed(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || dd;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || dd;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return W(
            this,
            function (a, d, e) {
              var f = ed(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? n(f).scrollLeft() : e,
                        c ? e : n(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Kb(a, b)), Ib.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return W(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var fd = a.jQuery,
    gd = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n;
    }),
    typeof b === L && (a.jQuery = a.$ = n),
    n
  );
}); /*! jQuery & Zepto Lazy v1.7.5 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!(function (t, e) {
  "use strict";
  function r(r, a, i, l, u) {
    function f() {
      (L = t.devicePixelRatio > 1),
        c(i),
        a.delay >= 0 &&
          setTimeout(function () {
            s(!0);
          }, a.delay),
        (a.delay < 0 || a.combined) &&
          ((l.e = v(a.throttle, function (t) {
            "resize" === t.type && (w = B = -1), s(t.all);
          })),
          (l.a = function (t) {
            c(t), i.push.apply(i, t);
          }),
          (l.g = function () {
            return (i = n(i).filter(function () {
              return !n(this).data(a.loadedName);
            }));
          }),
          (l.f = function (t) {
            for (var e = 0; e < t.length; e++) {
              var r = i.filter(function () {
                return this === t[e];
              });
              r.length && s(!1, r);
            }
          }),
          s(),
          n(a.appendScroll).on("scroll." + u + " resize." + u, l.e));
    }
    function c(t) {
      var i = a.defaultImage,
        o = a.placeholder,
        l = a.imageBase,
        u = a.srcsetAttribute,
        f = a.loaderAttribute,
        c = a._f || {};
      t = n(t)
        .filter(function () {
          var t = n(this),
            r = m(this);
          return (
            !t.data(a.handledName) &&
            (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e)
          );
        })
        .data("plugin_" + a.name, r);
      for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
          g = m(t[s]),
          h = A.attr(a.imageBaseAttribute) || l;
        g === N && h && A.attr(u) && A.attr(u, b(A.attr(u), h)),
          c[g] === e || A.attr(f) || A.attr(f, c[g]),
          g === N && i && !A.attr(E)
            ? A.attr(E, i)
            : g === N ||
              !o ||
              (A.css(O) && "none" !== A.css(O)) ||
              A.css(O, "url('" + o + "')");
      }
    }
    function s(t, e) {
      if (!i.length) return void (a.autoDestroy && r.destroy());
      for (
        var o = e || i,
          l = !1,
          u = a.imageBase || "",
          f = a.srcsetAttribute,
          c = a.handledName,
          s = 0;
        s < o.length;
        s++
      )
        if (t || e || A(o[s])) {
          var g = n(o[s]),
            h = m(o[s]),
            b = g.attr(a.attribute),
            v = g.attr(a.imageBaseAttribute) || u,
            p = g.attr(a.loaderAttribute);
          g.data(c) ||
            (a.visibleOnly && !g.is(":visible")) ||
            !(
              ((b || g.attr(f)) &&
                ((h === N &&
                  (v + b !== g.attr(E) || g.attr(f) !== g.attr(F))) ||
                  (h !== N && v + b !== g.css(O)))) ||
              p
            ) ||
            ((l = !0), g.data(c, !0), d(g, h, v, p));
        }
      l &&
        (i = n(i).filter(function () {
          return !n(this).data(c);
        }));
    }
    function d(t, e, r, i) {
      ++z;
      var o = function () {
        y("onError", t), p(), (o = n.noop);
      };
      y("beforeLoad", t);
      var l = a.attribute,
        u = a.srcsetAttribute,
        f = a.sizesAttribute,
        c = a.retinaAttribute,
        s = a.removeAttribute,
        d = a.loadedName,
        A = t.attr(c);
      if (i) {
        var g = function () {
          s && t.removeAttr(a.loaderAttribute),
            t.data(d, !0),
            y(T, t),
            setTimeout(p, 1),
            (g = n.noop);
        };
        t.off(I).one(I, o).one(D, g),
          y(i, t, function (e) {
            e ? (t.off(D), g()) : (t.off(I), o());
          }) || t.trigger(I);
      } else {
        var h = n(new Image());
        h.one(I, o).one(D, function () {
          t.hide(),
            e === N
              ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E))
              : t.css(O, "url('" + h.attr(E) + "')"),
            t[a.effect](a.effectTime),
            s &&
              (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute),
              f !== C && t.removeAttr(f)),
            t.data(d, !0),
            y(T, t),
            h.remove(),
            p();
        });
        var m = (L && A ? A : t.attr(l)) || "";
        h
          .attr(C, t.attr(f))
          .attr(F, t.attr(u))
          .attr(E, m ? r + m : null),
          h.complete && h.trigger(D);
      }
    }
    function A(t) {
      var e = t.getBoundingClientRect(),
        r = a.scrollDirection,
        n = a.threshold,
        i = h() + n > e.top && -n < e.bottom,
        o = g() + n > e.left && -n < e.right;
      return "vertical" === r ? i : "horizontal" === r ? o : i && o;
    }
    function g() {
      return w >= 0 ? w : (w = n(t).width());
    }
    function h() {
      return B >= 0 ? B : (B = n(t).height());
    }
    function m(t) {
      return t.tagName.toLowerCase();
    }
    function b(t, e) {
      if (e) {
        var r = t.split(",");
        t = "";
        for (var a = 0, n = r.length; a < n; a++)
          t += e + r[a].trim() + (a !== n - 1 ? "," : "");
      }
      return t;
    }
    function v(t, e) {
      var n,
        i = 0;
      return function (o, l) {
        function u() {
          (i = +new Date()), e.call(r, o);
        }
        var f = +new Date() - i;
        n && clearTimeout(n),
          f > t || !a.enableThrottle || l ? u() : (n = setTimeout(u, t - f));
      };
    }
    function p() {
      --z, i.length || z || y("onFinishedAll");
    }
    function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
    }
    var z = 0,
      w = -1,
      B = -1,
      L = !1,
      T = "afterLoad",
      D = "load",
      I = "error",
      N = "img",
      E = "src",
      F = "srcset",
      C = "sizes",
      O = "background-image";
    "event" === a.bind || o ? f() : n(t).on(D + "." + u, f);
  }
  function a(a, o) {
    var l = this,
      u = n.extend({}, l.config, o),
      f = {},
      c = u.name + "-" + ++i;
    return (
      (l.config = function (t, r) {
        return r === e ? u[t] : ((u[t] = r), l);
      }),
      (l.addItems = function (t) {
        return f.a && f.a("string" === n.type(t) ? n(t) : t), l;
      }),
      (l.getItems = function () {
        return f.g ? f.g() : {};
      }),
      (l.update = function (t) {
        return f.e && f.e({}, !t), l;
      }),
      (l.force = function (t) {
        return f.f && f.f("string" === n.type(t) ? n(t) : t), l;
      }),
      (l.loadAll = function () {
        return f.e && f.e({ all: !0 }, !0), l;
      }),
      (l.destroy = function () {
        return (
          n(u.appendScroll).off("." + c, f.e), n(t).off("." + c), (f = {}), e
        );
      }),
      r(l, u, a, f, c),
      u.chainable ? a : l
    );
  }
  var n = t.jQuery || t.Zepto,
    i = 0,
    o = !1;
  (n.fn.Lazy = n.fn.lazy =
    function (t) {
      return new a(this, t);
    }),
    (n.Lazy = n.lazy =
      function (t, r, i) {
        if ((n.isFunction(r) && ((i = r), (r = [])), n.isFunction(i))) {
          (t = n.isArray(t) ? t : [t]), (r = n.isArray(r) ? r : [r]);
          for (
            var o = a.prototype.config,
              l = o._f || (o._f = {}),
              u = 0,
              f = t.length;
            u < f;
            u++
          )
            (o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i);
          for (var c = 0, s = r.length; c < s; c++) l[r[c]] = t[0];
        }
      }),
    (a.prototype.config = {
      name: "lazy",
      chainable: !0,
      autoDestroy: !0,
      bind: "load",
      threshold: 500,
      visibleOnly: !1,
      appendScroll: t,
      scrollDirection: "both",
      imageBase: null,
      defaultImage:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      placeholder: null,
      delay: -1,
      combined: !1,
      attribute: "data-src",
      srcsetAttribute: "data-srcset",
      sizesAttribute: "data-sizes",
      retinaAttribute: "data-retina",
      loaderAttribute: "data-loader",
      imageBaseAttribute: "data-imagebase",
      removeAttribute: !0,
      handledName: "handled",
      loadedName: "loaded",
      effect: "show",
      effectTime: 0,
      enableThrottle: !0,
      throttle: 250,
      beforeLoad: e,
      afterLoad: e,
      onError: e,
      onFinishedAll: e,
    }),
    n(t).on("load", function () {
      o = !0;
    });
})(window);
var root = "/";
$(document).ready(function () {
  call_lazy();
  change_region();
  fb_support_online();
  load_fb();
});

function call_lazy() {
  $("img.lazy").lazy({
    effect: "fadeIn",
    data_attribute: "src",
    afterLoad: function (element) {
      element.addClass("after-lazy");
    },
  });
}

function load_fb() {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.10&appId=140517186551584";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

$(function () {
  $("#fixed-bar").css({ position: "fixed", bottom: "100px" }).hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $("#fixed-bar").fadeIn(200);
    } else {
      $("#fixed-bar").fadeOut(200);
    }
  });
  $(".go-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});

function change_region() {
  $("#regions_footer").change(function () {
    var id = $(this).val();
    if (id == 0) {
      $(".address_regions .regions").show();
    } else {
      $(".address_regions .regions").hide();
      $(".regions_" + id).show();
    }
  });
}

$(function () {
  var width = $(window).width();
  $(window).resize(function () {
    width = $(window).width();
  });

  $(".go-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
  // trigger buy now
  $("#buy_now_bt").click(function () {
    $("#buy-now").trigger("click");
  });
});

function fb_support_online() {
  jQuery(".chat_fb").click(function () {
    jQuery(".fchat").toggle("slow", function (display) {
      if ($(".fchat").css("display") == "none") {
        $(".chat_fb").addClass("chat_fb_closed").removeClass("chat_fb_openned");
        $("#cfacebook").css("width", "auto");
      } else {
        // $('#cfacebook').css('top','0%');
        $(".chat_fb").removeClass("chat_fb_closed").addClass("chat_fb_openned");
        $("#cfacebook").css("width", "310px");
      }
    });
  });
}

$(function () {
  var date = new Date();
  var minutes = 60;
  date.setTime(date.getTime() + minutes * 60 * 24);
  $(".close_banner_top").click(function () {
    $.cookie("promotion_cookie", "Promotion Cookie", { expires: date });
    $(".banner_top").slideToggle();
  });
});

$(function () {
  if ($.cookie("promotion_cookie") == null) {
    $(".banner_top").removeClass("banner-off");
  } else {
    $(".banner_top").addClass("banner-off");
  }
});

function close_modal_alert() {
  $("#modal_alert").hide();
}
function closePopup() {
  $(".mask-popup").removeClass("active");
}

$(".click-tab-pos4 .item").click(function () {
  $(".click-tab-pos4 .item").removeClass("active");
  $(this).addClass("active");
  var id = $(this).attr("data");
  $(".block-bot-tab").hide();
  $(".block-bot-tab" + id).show();
});

$("#show_phone").click(function () {
  $(".wrap-fix-content-mb").slideToggle("display_open");
});

$(function () {
  var width = $(window).width();
  $(window).resize(function () {
    width = $(window).width();
  });

  var lastScrollTop = 0;

  $(window).scroll(function () {
    st = $(this).scrollTop();
    Itid = $("#Itid").val();

    // if(width > 950){ // pc
    //   if (st >64) {
    //       $('body').css('margin-top','64px');
    //       $(".header_wrapper").removeClass("slide-down").addClass("slide-up").css({position:'fixed',top:'0px'});

    //   } else {
    //       $(".header_wrapper").css({position:'initial'}).removeClass("slide-up").removeClass("slide-down");
    //       $('body').css('margin-top','0px');
    //   }
    // }
    // else{ // mobile
    //   if (st > 100) {
    //     if(st <  lastScrollTop) {
    //       $(".header_wrapper").css({position:'fixed',top:'0px'});
    //     }
    //     else {
    //        $(".header_wrapper").css({position:'fixed',top:'0px'});
    //     }

    //   } else {
    //     $(".header_wrapper").css('position','initial');
    //   }
    // }
    lastScrollTop = st;
  });
});
function arCuGetCookie(t) {
  return document.cookie.length > 0 &&
    ((c_start = document.cookie.indexOf(t + "=")), -1 != c_start)
    ? ((c_start = c_start + t.length + 1),
      (c_end = document.cookie.indexOf(";", c_start)),
      -1 == c_end && (c_end = document.cookie.length),
      unescape(document.cookie.substring(c_start, c_end)))
    : 0;
}
function arCuCreateCookie(t, e, s) {
  var n;
  if (s) {
    var i = new Date();
    i.setTime(i.getTime() + 24 * s * 60 * 60 * 1e3),
      (n = "; expires=" + i.toGMTString());
  } else n = "";
  document.cookie = t + "=" + e + n + "; path=/";
}
function arCuShowMessage(t) {
  if (arCuPromptClosed) return !1;
  void 0 !== arCuMessages[t]
    ? (jQuery("#arcontactus").contactUs("showPromptTyping"),
      (_arCuTimeOut = setTimeout(function () {
        if (arCuPromptClosed) return !1;
        jQuery("#arcontactus").contactUs("showPrompt", {
          content: arCuMessages[t],
        }),
          t++,
          (_arCuTimeOut = setTimeout(function () {
            if (arCuPromptClosed) return !1;
            arCuShowMessage(t);
          }, arCuMessageTime));
      }, arCuTypingTime)))
    : (arCuCloseLastMessage && jQuery("#arcontactus").contactUs("hidePrompt"),
      arCuLoop && arCuShowMessage(0));
}
function arCuShowMessages() {
  setTimeout(function () {
    clearTimeout(_arCuTimeOut), arCuShowMessage(0);
  }, arCuDelayFirst);
}
!(function (t) {
  function e(s, n) {
    (this._initialized = !1),
      (this.settings = null),
      (this.options = t.extend({}, e.Defaults, n)),
      (this.$element = t(s)),
      this.init(),
      (this.x = 0),
      (this.y = 0),
      this._interval,
      (this._menuOpened = !1),
      (this._callbackOpened = !1),
      (this.countdown = null);
  }
  (e.Defaults = {
    align: "right",
    countdown: 0,
    drag: !1,
    buttonText: "Liên hệ",
    buttonSize: "large",
    menuSize: "normal",
    items: [],
    iconsAnimationSpeed: 1200,
    theme: "#c60100",
    buttonIcon:
      '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-825 -308)"><g id="Vector"><use xlink:href="#path0_fill0123" transform="translate(825 308)" fill="#FFFFFF"/></g></g><defs><path id="path0_fill0123" d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z"/></defs></svg>',
    closeIcon:
      '<svg width="12" height="13" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-4087 108)"><g id="Vector"><use xlink:href="#path0_fill" transform="translate(4087 -108)" fill="currentColor"></use></g></g><defs><path id="path0_fill" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path></defs></svg>',
  }),
    (e.prototype.init = function () {
      this.destroy(),
        (this.settings = t.extend({}, this.options)),
        this.$element
          .addClass("arcontactus-widget")
          .addClass("arcontactus-message"),
        "left" === this.settings.align
          ? this.$element.addClass("left")
          : this.$element.addClass("right"),
        this.settings.items.length
          ? (this._initCallbackBlock(),
            this._initMessengersBlock(),
            this._initMessageButton(),
            this._initPrompt(),
            this._initEvents(),
            this.startAnimation(),
            this.$element.addClass("active"))
          : console.info("jquery.contactus:no items"),
        (this._initialized = !0),
        this.$element.trigger("arcontactus.init");
    }),
    (e.prototype.destroy = function () {
      if (!this._initialized) return !1;
      this.$element.html(""),
        (this._initialized = !1),
        this.$element.trigger("arcontactus.destroy");
    }),
    (e.prototype._initCallbackBlock = function () {}),
    (e.prototype._initMessengersBlock = function () {
      var e = t("<div>", { class: "messangers-block" });
      ("normal" !== this.settings.menuSize &&
        "large" !== this.settings.menuSize) ||
        e.addClass("lg"),
        "small" === this.settings.menuSize && e.addClass("sm"),
        this._appendMessengerIcons(e),
        this.$element.append(e);
    }),
    (e.prototype._appendMessengerIcons = function (e) {
      t.each(this.settings.items, function (s) {
        if ("callback" == this.href)
          var n = t("<div>", {
            class: "messanger call-back " + (this.class ? this.class : ""),
          });
        else if (
          ((n = t("<a>", {
            class: "messanger " + (this.class ? this.class : ""),
            id: this.id ? this.id : null,
            href: this.href,
            target: this.target ? this.target : "_blank",
          })),
          this.onClick)
        ) {
          var i = this;
          n.on("click", function (t) {
            i.onClick(t);
          });
        }
        var a = t("<span>", {
          style: this.color ? "background-color:" + this.color : null,
        });
        a.append(this.icon),
          n.append(a),
          n.append("<p>" + this.title + "</p>"),
          e.append(n);
      });
    }),
    (e.prototype._initMessageButton = function () {
      var e = this,
        s = t("<div>", {
          class: "arcontactus-message-button",
          style: this._backgroundStyle(),
        });
      "large" === this.settings.buttonSize && this.$element.addClass("lg"),
        "medium" === this.settings.buttonSize && this.$element.addClass("md"),
        "small" === this.settings.buttonSize && this.$element.addClass("sm");
      var n = t("<div>", { class: "static" });
      n.append(this.settings.buttonIcon),
        !1 !== this.settings.buttonText
          ? n.append("<p>" + this.settings.buttonText + "</p>")
          : s.addClass("no-text");
      var i = t("<div>", { class: "callback-state", style: e._colorStyle() });
      i.append(this.settings.callbackStateIcon);
      var a = t("<div>", { class: "icons hide" }),
        o = t("<div>", { class: "icons-line" });
      t.each(this.settings.items, function (s) {
        var n = t("<span>", { style: e._colorStyle() });
        n.append(this.icon), o.append(n);
      }),
        a.append(o);
      var r = t("<div>", { class: "arcontactus-close" });
      r.append(this.settings.closeIcon);
      var c = t("<div>", { class: "pulsation", style: e._backgroundStyle() }),
        l = t("<div>", { class: "pulsation", style: e._backgroundStyle() });
      s.append(n).append(i).append(a).append(r).append(c).append(l),
        this.$element.append(s);
    }),
    (e.prototype._initPrompt = function () {
      var e = t("<div>", { class: "arcontactus-prompt" }),
        s = t("<div>", {
          class: "arcontactus-prompt-close",
          style: this._colorStyle(),
        });
      s.append(this.settings.closeIcon);
      var n = t("<div>", { class: "arcontactus-prompt-inner" });
      e.append(s).append(n), this.$element.append(e);
    }),
    (e.prototype._initEvents = function () {
      var e = this.$element,
        s = this;
      e
        .find(".arcontactus-message-button")
        .on("mousedown", function (t) {
          (s.x = t.pageX), (s.y = t.pageY);
        })
        .on("mouseup", function (t) {
          t.pageX === s.x &&
            t.pageY === s.y &&
            (s.toggleMenu(), t.preventDefault());
        }),
        this.settings.drag &&
          (e.draggable(),
          e.get(0).addEventListener(
            "touchmove",
            function (t) {
              var s = t.targetTouches[0];
              (e.get(0).style.left = s.pageX - 25 + "px"),
                (e.get(0).style.top = s.pageY - 25 + "px"),
                t.preventDefault();
            },
            !1
          )),
        t(document).on("click", function (t) {
          s.closeMenu();
        }),
        e.on("click", function (t) {
          t.stopPropagation();
        }),
        e.find(".call-back").on("click", function () {
          s.openCallbackPopup();
        }),
        e.find(".callback-countdown-block-close").on("click", function () {
          null != s.countdown &&
            (clearInterval(s.countdown), (s.countdown = null)),
            s.closeCallbackPopup();
        }),
        e.find(".arcontactus-prompt-close").on("click", function () {
          s.hidePrompt();
        });
    }),
    (e.prototype.show = function () {
      this.$element.addClass("active"),
        this.$element.trigger("arcontactus.show");
    }),
    (e.prototype.hide = function () {
      this.$element.removeClass("active"),
        this.$element.trigger("arcontactus.hide");
    }),
    (e.prototype.openMenu = function () {
      var t = this.$element;
      t.find(".messangers-block").hasClass("show-messageners-block") ||
        (this.stopAnimation(),
        t
          .find(".messangers-block, .arcontactus-close")
          .addClass("show-messageners-block"),
        t.find(".icons, .static").addClass("hide"),
        t.find(".pulsation").addClass("stop"),
        (this._menuOpened = !0),
        this.$element.trigger("arcontactus.openMenu"));
    }),
    (e.prototype.closeMenu = function () {
      var t = this.$element;
      t.find(".messangers-block").hasClass("show-messageners-block") &&
        (t
          .find(".messangers-block, .arcontactus-close")
          .removeClass("show-messageners-block"),
        t.find(".icons, .static").removeClass("hide"),
        t.find(".pulsation").removeClass("stop"),
        this.startAnimation(),
        (this._menuOpened = !1),
        this.$element.trigger("arcontactus.closeMenu"));
    }),
    (e.prototype.toggleMenu = function () {
      var t = this.$element;
      if (
        (this.hidePrompt(),
        t.find(".callback-countdown-block").hasClass("display-flex"))
      )
        return !1;
      t.find(".messangers-block").hasClass("show-messageners-block")
        ? this.closeMenu()
        : this.openMenu(),
        this.$element.trigger("arcontactus.toggleMenu");
    }),
    (e.prototype.openCallbackPopup = function () {
      var t = this.$element;
      t.addClass("opened"),
        this.closeMenu(),
        this.stopAnimation(),
        t.find(".icons, .static").addClass("hide"),
        t.find(".pulsation").addClass("stop"),
        t.find(".callback-countdown-block").addClass("display-flex"),
        (this._callbackOpened = !0),
        this.$element.trigger("arcontactus.openCallbackPopup");
    }),
    (e.prototype.closeCallbackPopup = function () {
      var t = this.$element;
      t.removeClass("opened"),
        t.find(".messangers-block").removeClass("show-messageners-block"),
        t.find(".arcontactus-close").removeClass("show-messageners-block"),
        t.find(".icons, .static").removeClass("hide"),
        this.startAnimation(),
        (this._callbackOpened = !1),
        this.$element.trigger("arcontactus.closeCallbackPopup");
    }),
    (e.prototype.startAnimation = function () {
      var t = this.$element,
        e = t.find(".icons-line"),
        s = t.find(".static"),
        n = t.find(".icons-line>span:first-child").width() + 40;
      if ("large" === this.settings.buttonSize)
        var i = 2,
          a = 0;
      "medium" === this.settings.buttonSize && ((i = 4), (a = -2)),
        "small" === this.settings.buttonSize && ((i = 4), (a = -2));
      var o = t.find(".icons-line>span").length,
        r = 0;
      if ((this.stopAnimation(), 0 === this.settings.iconsAnimationSpeed))
        return !1;
      this._interval = setInterval(function () {
        0 === r && (e.parent().removeClass("hide"), s.addClass("hide"));
        var t = "translate(" + -(n * r + i) + "px, " + a + "px)";
        e.css({ "-webkit-transform": t, "-ms-transform": t, transform: t }),
          ++r > o &&
            (r > o + 1 && (r = 0),
            e.parent().addClass("hide"),
            s.removeClass("hide"),
            (t = "translate(" + -i + "px, " + a + "px)"),
            e.css({
              "-webkit-transform": t,
              "-ms-transform": t,
              transform: t,
            }));
      }, this.settings.iconsAnimationSpeed);
    }),
    (e.prototype.stopAnimation = function () {
      clearInterval(this._interval);
      var t = this.$element,
        e = t.find(".icons-line"),
        s = t.find(".static");
      e.parent().addClass("hide"), s.removeClass("hide");
      var n = "translate(-2px, 0px)";
      e.css({ "-webkit-transform": n, "-ms-transform": n, transform: n });
    }),
    (e.prototype.showPrompt = function (t) {
      var e = this.$element.find(".arcontactus-prompt");
      t && t.content && e.find(".arcontactus-prompt-inner").html(t.content),
        e.addClass("active"),
        this.$element.trigger("arcontactus.showPrompt");
    }),
    (e.prototype.hidePrompt = function () {
      this.$element.find(".arcontactus-prompt").removeClass("active"),
        this.$element.trigger("arcontactus.hidePrompt");
    }),
    (e.prototype.showPromptTyping = function () {
      this.$element
        .find(".arcontactus-prompt")
        .find(".arcontactus-prompt-inner")
        .html(""),
        this._insertPromptTyping(),
        this.showPrompt({}),
        this.$element.trigger("arcontactus.showPromptTyping");
    }),
    (e.prototype._insertPromptTyping = function () {
      var e = this.$element.find(".arcontactus-prompt-inner"),
        s = t("<div>", { class: "arcontactus-prompt-typing" }),
        n = t("<div>");
      s.append(n), s.append(n.clone()), s.append(n.clone()), e.append(s);
    }),
    (e.prototype.hidePromptTyping = function () {
      this.$element.find(".arcontactus-prompt").removeClass("active"),
        this.$element.trigger("arcontactus.hidePromptTyping");
    }),
    (e.prototype._backgroundStyle = function () {
      return "background-color: " + this.settings.theme;
    }),
    (e.prototype._colorStyle = function () {
      return "color: " + this.settings.theme;
    }),
    (t.fn.contactUs = function (s) {
      var n = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var i = t(this),
          a = i.data("ar.contactus");
        a ||
          ((a = new e(this, "object" == typeof s && s)),
          i.data("ar.contactus", a)),
          "string" == typeof s && "_" !== s.charAt(0) && a[s].apply(a, n);
      });
    }),
    (t.fn.contactUs.Constructor = e);
})(jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    factory(require("jquery"));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, " "));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = ($.cookie = function (key, value, options) {
    // Write

    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === "number") {
        var days = options.expires,
          t = (options.expires = new Date());
        t.setTime(+t + days * 864e5);
      }

      return (document.cookie = [
        encode(key),
        "=",
        stringifyCookieValue(value),
        options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
        options.path ? "; path=" + options.path : "",
        options.domain ? "; domain=" + options.domain : "",
        options.secure ? "; secure" : "",
      ].join(""));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split("; ") : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split("=");
      var name = decode(parts.shift());
      var cookie = parts.join("=");

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  });

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }

    // Must not alter options, thus extending a fresh object...
    $.cookie(key, "", $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };
});
$(document).ready(function () {
  $(".products_blocks_slideshow_hot .item").removeClass("hide");
  $(".products_blocks_slideshow_hot .item").removeClass("item-block");
  $(".item .owl-lazy").css({ display: "block" });

  var sync1 = $(".product_grid_slishow_home");
  var flag = false;
  var duration = 300;
  sync1.owlCarousel({
    loop: true,
    nav: true,
    navText: ["‹", "›"],
    margin: 0,
    dots: false,
    pagination: false,
    autoplay: false,
    smartSpeed: 400,
    margin: 10,
    responsiveClass: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 1,
      },
    },
  });
});

!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this.drag = a.extend({}, m)),
      (this.state = a.extend({}, n)),
      (this.e = a.extend({}, o)),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._invalidated = {}),
      (this._pipe = []),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Pipe,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  function f(a) {
    if (a.touches !== d)
      return { x: a.touches[0].pageX, y: a.touches[0].pageY };
    if (a.touches === d) {
      if (a.pageX !== d) return { x: a.pageX, y: a.pageY };
      if (a.pageX === d) return { x: a.clientX, y: a.clientY };
    }
  }
  function g(a) {
    var b,
      d,
      e = c.createElement("div"),
      f = a;
    for (b in f)
      if (((d = f[b]), "undefined" != typeof e.style[d]))
        return (e = null), [d, b];
    return [!1];
  }
  function h() {
    return g([
      "transition",
      "WebkitTransition",
      "MozTransition",
      "OTransition",
    ])[1];
  }
  function i() {
    return g([
      "transform",
      "WebkitTransform",
      "MozTransform",
      "OTransform",
      "msTransform",
    ])[0];
  }
  function j() {
    return g([
      "perspective",
      "webkitPerspective",
      "MozPerspective",
      "OPerspective",
      "MsPerspective",
    ])[0];
  }
  function k() {
    return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
  }
  function l() {
    return b.navigator.msPointerEnabled;
  }
  var m, n, o;
  (m = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null,
  }),
    (n = {
      isTouch: !1,
      isScrolling: !1,
      isSwiping: !1,
      direction: !1,
      inMotion: !1,
    }),
    (o = {
      _onDragStart: null,
      _onDragMove: null,
      _onDragEnd: null,
      _transitionEnd: null,
      _resizer: null,
      _responsiveCall: null,
      _goToLoop: null,
      _checkVisibile: null,
    }),
    (e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      responsiveClass: !1,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      themeClass: "owl-theme",
      baseClass: "owl-carousel",
      itemClass: "owl-item",
      centerClass: "center",
      activeClass: "active",
    }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Plugins = {}),
    (e.Pipe = [
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var a = this._clones,
            b = this.$stage.children(".cloned");
          (b.length !== a.length || (!this.settings.loop && a.length > 0)) &&
            (this.$stage.children(".cloned").remove(), (this._clones = []));
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var a,
            b,
            c = this._clones,
            d = this._items,
            e = this.settings.loop
              ? c.length - Math.max(2 * this.settings.items, 4)
              : 0;
          for (a = 0, b = Math.abs(e / 2); b > a; a++)
            e > 0
              ? (this.$stage
                  .children()
                  .eq(d.length + c.length - 1)
                  .remove(),
                c.pop(),
                this.$stage.children().eq(0).remove(),
                c.pop())
              : (c.push(c.length / 2),
                this.$stage.append(
                  d[c[c.length - 1]].clone().addClass("cloned")
                ),
                c.push(d.length - 1 - (c.length - 1) / 2),
                this.$stage.prepend(
                  d[c[c.length - 1]].clone().addClass("cloned")
                ));
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d = this.settings.rtl ? 1 : -1,
            e = (this.width() / this.settings.items).toFixed(3),
            f = 0;
          for (
            this._coordinates = [],
              b = 0,
              c = this._clones.length + this._items.length;
            c > b;
            b++
          )
            (a = this._mergers[this.relative(b)]),
              (a =
                (this.settings.mergeFit && Math.min(a, this.settings.items)) ||
                a),
              (f +=
                (this.settings.autoWidth
                  ? this._items[this.relative(b)].width() + this.settings.margin
                  : e * a) * d),
              this._coordinates.push(f);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var b,
            c,
            d = (this.width() / this.settings.items).toFixed(3),
            e = {
              width:
                Math.abs(this._coordinates[this._coordinates.length - 1]) +
                2 * this.settings.stagePadding,
              "padding-left": this.settings.stagePadding || "",
              "padding-right": this.settings.stagePadding || "",
            };
          if (
            (this.$stage.css(e),
            (e = {
              width: this.settings.autoWidth
                ? "auto"
                : d - this.settings.margin,
            }),
            (e[this.settings.rtl ? "margin-left" : "margin-right"] =
              this.settings.margin),
            !this.settings.autoWidth &&
              a.grep(this._mergers, function (a) {
                return a > 1;
              }).length > 0)
          )
            for (b = 0, c = this._coordinates.length; c > b; b++)
              (e.width =
                Math.abs(this._coordinates[b]) -
                Math.abs(this._coordinates[b - 1] || 0) -
                this.settings.margin),
                this.$stage.children().eq(b).css(e);
          else this.$stage.children().css(e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current && this.reset(this.$stage.children().index(a.current));
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; d > c; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage
            .children("." + this.settings.activeClass)
            .removeClass(this.settings.activeClass),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass(this.settings.activeClass),
            this.settings.center &&
              (this.$stage
                .children("." + this.settings.centerClass)
                .removeClass(this.settings.centerClass),
              this.$stage
                .children()
                .eq(this.current())
                .addClass(this.settings.centerClass));
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.trigger("initialize"),
        this.$element
          .addClass(this.settings.baseClass)
          .addClass(this.settings.themeClass)
          .toggleClass("owl-rtl", this.settings.rtl),
        this.browserSupport(),
        this.settings.autoWidth && this.state.imagesLoaded !== !0)
      ) {
        var b, c, e;
        if (
          ((b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && 0 >= e)
        )
          return this.preloadAutoWidthImages(b), !1;
      }
      this.$element.addClass("owl-loading"),
        (this.$stage = a(
          "<" + this.settings.stageElement + ' class="owl-stage"/>'
        ).wrap('<div class="owl-stage-outer">')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        (this._width = this.$element.width()),
        this.refresh(),
        this.$element.removeClass("owl-loading").addClass("owl-loaded"),
        this.eventsCall(),
        this.internalEvents(),
        this.addTriggerableEvents(),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          delete e.responsive,
          e.responsiveClass &&
            this.$element
              .attr("class", function (a, b) {
                return b.replace(/\b owl-responsive-\S+/g, "");
              })
              .addClass("owl-responsive-" + d))
        : (e = a.extend({}, this.options)),
        (null === this.settings || this._breakpoint !== d) &&
          (this.trigger("change", { property: { name: "settings", value: e } }),
          (this._breakpoint = d),
          (this.settings = e),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          }));
    }),
    (e.prototype.optionsLogic = function () {
      this.$element.toggleClass("owl-center", this.settings.center),
        this.settings.loop &&
          this._items.length < this.settings.items &&
          (this.settings.loop = !1),
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.settings.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        c > b;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      this._invalidated = {};
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      if (0 === this._items.length) return !1;
      new Date().getTime();
      this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$stage.addClass("owl-refresh"),
        this.update(),
        this.$stage.removeClass("owl-refresh"),
        (this.state.orientation = b.orientation),
        this.watchVisibility(),
        this.trigger("refreshed");
    }),
    (e.prototype.eventsCall = function () {
      (this.e._onDragStart = a.proxy(function (a) {
        this.onDragStart(a);
      }, this)),
        (this.e._onDragMove = a.proxy(function (a) {
          this.onDragMove(a);
        }, this)),
        (this.e._onDragEnd = a.proxy(function (a) {
          this.onDragEnd(a);
        }, this)),
        (this.e._onResize = a.proxy(function (a) {
          this.onResize(a);
        }, this)),
        (this.e._transitionEnd = a.proxy(function (a) {
          this.transitionEnd(a);
        }, this)),
        (this.e._preventClick = a.proxy(function (a) {
          this.preventClick(a);
        }, this));
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this.e._onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return this._items.length
        ? this._width === this.$element.width()
          ? !1
          : this.trigger("resize").isDefaultPrevented()
          ? !1
          : ((this._width = this.$element.width()),
            this.invalidate("width"),
            this.refresh(),
            void this.trigger("resized"))
        : !1;
    }),
    (e.prototype.eventsRouter = function (a) {
      var b = a.type;
      "mousedown" === b || "touchstart" === b
        ? this.onDragStart(a)
        : "mousemove" === b || "touchmove" === b
        ? this.onDragMove(a)
        : "mouseup" === b || "touchend" === b
        ? this.onDragEnd(a)
        : "touchcancel" === b && this.onDragEnd(a);
    }),
    (e.prototype.internalEvents = function () {
      var c = (k(), l());
      this.settings.mouseDrag
        ? (this.$stage.on(
            "mousedown",
            a.proxy(function (a) {
              this.eventsRouter(a);
            }, this)
          ),
          this.$stage.on("dragstart", function () {
            return !1;
          }),
          (this.$stage.get(0).onselectstart = function () {
            return !1;
          }))
        : this.$element.addClass("owl-text-select-on"),
        this.settings.touchDrag &&
          !c &&
          this.$stage.on(
            "touchstart touchcancel",
            a.proxy(function (a) {
              this.eventsRouter(a);
            }, this)
          ),
        this.transitionEndVendor &&
          this.on(
            this.$stage.get(0),
            this.transitionEndVendor,
            this.e._transitionEnd,
            !1
          ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", a.proxy(this.onThrottledResize, this));
    }),
    (e.prototype.onDragStart = function (d) {
      var e, g, h, i;
      if (
        ((e = d.originalEvent || d || b.event),
        3 === e.which || this.state.isTouch)
      )
        return !1;
      if (
        ("mousedown" === e.type && this.$stage.addClass("owl-grab"),
        this.trigger("drag"),
        (this.drag.startTime = new Date().getTime()),
        this.speed(0),
        (this.state.isTouch = !0),
        (this.state.isScrolling = !1),
        (this.state.isSwiping = !1),
        (this.drag.distance = 0),
        (g = f(e).x),
        (h = f(e).y),
        (this.drag.offsetX = this.$stage.position().left),
        (this.drag.offsetY = this.$stage.position().top),
        this.settings.rtl &&
          (this.drag.offsetX =
            this.$stage.position().left +
            this.$stage.width() -
            this.width() +
            this.settings.margin),
        this.state.inMotion && this.support3d)
      )
        (i = this.getTransformProperty()),
          (this.drag.offsetX = i),
          this.animate(i),
          (this.state.inMotion = !0);
      else if (this.state.inMotion && !this.support3d)
        return (this.state.inMotion = !1), !1;
      (this.drag.startX = g - this.drag.offsetX),
        (this.drag.startY = h - this.drag.offsetY),
        (this.drag.start = g - this.drag.startX),
        (this.drag.targetEl = e.target || e.srcElement),
        (this.drag.updatedX = this.drag.start),
        ("IMG" === this.drag.targetEl.tagName ||
          "A" === this.drag.targetEl.tagName) &&
          (this.drag.targetEl.draggable = !1),
        a(c).on(
          "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
          a.proxy(function (a) {
            this.eventsRouter(a);
          }, this)
        );
    }),
    (e.prototype.onDragMove = function (a) {
      var c, e, g, h, i, j;
      this.state.isTouch &&
        (this.state.isScrolling ||
          ((c = a.originalEvent || a || b.event),
          (e = f(c).x),
          (g = f(c).y),
          (this.drag.currentX = e - this.drag.startX),
          (this.drag.currentY = g - this.drag.startY),
          (this.drag.distance = this.drag.currentX - this.drag.offsetX),
          this.drag.distance < 0
            ? (this.state.direction = this.settings.rtl ? "right" : "left")
            : this.drag.distance > 0 &&
              (this.state.direction = this.settings.rtl ? "left" : "right"),
          this.settings.loop
            ? this.op(
                this.drag.currentX,
                ">",
                this.coordinates(this.minimum())
              ) && "right" === this.state.direction
              ? (this.drag.currentX -=
                  (this.settings.center && this.coordinates(0)) -
                  this.coordinates(this._items.length))
              : this.op(
                  this.drag.currentX,
                  "<",
                  this.coordinates(this.maximum())
                ) &&
                "left" === this.state.direction &&
                (this.drag.currentX +=
                  (this.settings.center && this.coordinates(0)) -
                  this.coordinates(this._items.length))
            : ((h = this.coordinates(
                this.settings.rtl ? this.maximum() : this.minimum()
              )),
              (i = this.coordinates(
                this.settings.rtl ? this.minimum() : this.maximum()
              )),
              (j = this.settings.pullDrag ? this.drag.distance / 5 : 0),
              (this.drag.currentX = Math.max(
                Math.min(this.drag.currentX, h + j),
                i + j
              ))),
          (this.drag.distance > 8 || this.drag.distance < -8) &&
            (c.preventDefault !== d ? c.preventDefault() : (c.returnValue = !1),
            (this.state.isSwiping = !0)),
          (this.drag.updatedX = this.drag.currentX),
          (this.drag.currentY > 16 || this.drag.currentY < -16) &&
            this.state.isSwiping === !1 &&
            ((this.state.isScrolling = !0),
            (this.drag.updatedX = this.drag.start)),
          this.animate(this.drag.updatedX)));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d, e, f;
      if (this.state.isTouch) {
        if (
          ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
          this.trigger("dragged"),
          this.drag.targetEl.removeAttribute("draggable"),
          (this.state.isTouch = !1),
          (this.state.isScrolling = !1),
          (this.state.isSwiping = !1),
          0 === this.drag.distance && this.state.inMotion !== !0)
        )
          return (this.state.inMotion = !1), !1;
        (this.drag.endTime = new Date().getTime()),
          (d = this.drag.endTime - this.drag.startTime),
          (e = Math.abs(this.drag.distance)),
          (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
          (f = this.closest(this.drag.updatedX)),
          this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(f),
          this.invalidate("position"),
          this.update(),
          this.settings.pullDrag ||
            this.drag.updatedX !== this.coordinates(f) ||
            this.transitionEnd(),
          (this.drag.distance = 0),
          a(c).off(".owl.dragEvents");
      }
    }),
    (e.prototype.removeClick = function (c) {
      (this.drag.targetEl = c),
        a(c).on("click.preventClick", this.e._preventClick),
        b.setTimeout(function () {
          a(c).off("click.preventClick");
        }, 300);
    }),
    (e.prototype.preventClick = function (b) {
      b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
        b.stopPropagation && b.stopPropagation(),
        a(b.target).off("click.preventClick");
    }),
    (e.prototype.getTransformProperty = function () {
      var a, c;
      return (
        (a = b
          .getComputedStyle(this.$stage.get(0), null)
          .getPropertyValue(this.vendorName + "transform")),
        (a = a.replace(/matrix(3d)?\(|\)/g, "").split(",")),
        (c = 16 === a.length),
        c !== !0 ? a[4] : a[12]
      );
    }),
    (e.prototype.closest = function (b) {
      var c = -1,
        d = 30,
        e = this.width(),
        f = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            f,
            a.proxy(function (a, g) {
              return (
                b > g - d && g + d > b
                  ? (c = a)
                  : this.op(b, "<", g) &&
                    this.op(b, ">", f[a + 1] || g - e) &&
                    (c = "left" === this.state.direction ? a + 1 : a),
                -1 === c
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", f[this.minimum()])
            ? (c = b = this.minimum())
            : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
        c
      );
    }),
    (e.prototype.animate = function (b) {
      this.trigger("translate"),
        (this.state.inMotion = this.speed() > 0),
        this.support3d
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px, 0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : this.state.isTouch
          ? this.$stage.css({ left: b + "px" })
          : this.$stage.animate(
              { left: b },
              this.speed() / 1e3,
              this.settings.fallbackEasing,
              a.proxy(function () {
                this.state.inMotion && this.transitionEnd();
              }, this)
            );
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (a) {
      this._invalidated[a] = !0;
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (b, c) {
      var e = c ? this._items.length : this._items.length + this._clones.length;
      return !a.isNumeric(b) || 1 > e
        ? d
        : (b = this._clones.length
            ? ((b % e) + e) % e
            : Math.max(this.minimum(c), Math.min(this.maximum(c), b)));
    }),
    (e.prototype.relative = function (a) {
      return (
        (a = this.normalize(a)),
        (a -= this._clones.length / 2),
        this.normalize(a, !0)
      );
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = 0,
        f = this.settings;
      if (a) return this._items.length - 1;
      if (!f.loop && f.center) b = this._items.length - 1;
      else if (f.loop || f.center)
        if (f.loop || f.center) b = this._items.length + f.items;
        else {
          if (!f.autoWidth && !f.merge)
            throw "Can not detect maximum absolute position.";
          for (
            revert = f.rtl ? 1 : -1,
              c = this.$stage.width() - this.$element.width();
            (d = this.coordinates(e)) && !(d * revert >= c);

          )
            b = ++e;
        }
      else b = this._items.length - f.items;
      return b;
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c = null;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? ((c = this._coordinates[b]),
              (c +=
                ((this.width() - c + (this._coordinates[b - 1] || 0)) / 2) *
                (this.settings.rtl ? -1 : 1)))
            : (c = this._coordinates[b - 1] || 0),
          c);
    }),
    (e.prototype.duration = function (a, b, c) {
      return (
        Math.min(Math.max(Math.abs(b - a), 1), 6) *
        Math.abs(c || this.settings.smartSpeed)
      );
    }),
    (e.prototype.to = function (c, d) {
      if (this.settings.loop) {
        var e = c - this.relative(this.current()),
          f = this.current(),
          g = this.current(),
          h = this.current() + e,
          i = 0 > g - h ? !0 : !1,
          j = this._clones.length + this._items.length;
        h < this.settings.items && i === !1
          ? ((f = g + this._items.length), this.reset(f))
          : h >= j - this.settings.items &&
            i === !0 &&
            ((f = g - this._items.length), this.reset(f)),
          b.clearTimeout(this.e._goToLoop),
          (this.e._goToLoop = b.setTimeout(
            a.proxy(function () {
              this.speed(this.duration(this.current(), f + e, d)),
                this.current(f + e),
                this.update();
            }, this),
            30
          ));
      } else
        this.speed(this.duration(this.current(), c, d)),
          this.current(c),
          this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.transitionEnd = function (a) {
      return a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
        ? !1
        : ((this.state.inMotion = !1), void this.trigger("translated"));
    }),
    (e.prototype.viewport = function () {
      var d;
      if (this.options.responsiveBaseElement !== b)
        d = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth) d = b.innerWidth;
      else {
        if (!c.documentElement || !c.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        d = c.documentElement.clientWidth;
      }
      return d;
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .andSelf("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          a.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (a, b) {
      (b = b === d ? this._items.length : this.normalize(b, !0)),
        this.trigger("add", { content: a, position: b }),
        0 === this._items.length || b === this._items.length
          ? (this.$stage.append(a),
            this._items.push(a),
            this._mergers.push(
              1 *
                a
                  .find("[data-merge]")
                  .andSelf("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[b].before(a),
            this._items.splice(b, 0, a),
            this._mergers.splice(
              b,
              0,
              1 *
                a
                  .find("[data-merge]")
                  .andSelf("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this.invalidate("items"),
        this.trigger("added", { content: a, position: b });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.addTriggerableEvents = function () {
      var b = a.proxy(function (b, c) {
        return a.proxy(function (a) {
          a.relatedTarget !== this &&
            (this.suppress([c]),
            b.apply(this, [].slice.call(arguments, 1)),
            this.release([c]));
        }, this);
      }, this);
      a.each(
        {
          next: this.next,
          prev: this.prev,
          to: this.to,
          destroy: this.destroy,
          refresh: this.refresh,
          replace: this.replace,
          add: this.add,
          remove: this.remove,
        },
        a.proxy(function (a, c) {
          this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
        }, this)
      );
    }),
    (e.prototype.watchVisibility = function () {
      function c(a) {
        return a.offsetWidth > 0 && a.offsetHeight > 0;
      }
      function d() {
        c(this.$element.get(0)) &&
          (this.$element.removeClass("owl-hidden"),
          this.refresh(),
          b.clearInterval(this.e._checkVisibile));
      }
      c(this.$element.get(0)) ||
        (this.$element.addClass("owl-hidden"),
        b.clearInterval(this.e._checkVisibile),
        (this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      var c, d, e, f;
      (c = 0),
        (d = this),
        b.each(function (g, h) {
          (e = a(h)),
            (f = new Image()),
            (f.onload = function () {
              c++,
                e.attr("src", f.src),
                e.css("opacity", 1),
                c >= b.length && ((d.state.imagesLoaded = !0), d.initialize());
            }),
            (f.src =
              e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
        });
    }),
    (e.prototype.destroy = function () {
      this.$element.hasClass(this.settings.themeClass) &&
        this.$element.removeClass(this.settings.themeClass),
        this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
        this.transitionEndVendor &&
          this.off(
            this.$stage.get(0),
            this.transitionEndVendor,
            this.e._transitionEnd
          );
      for (var d in this._plugins) this._plugins[d].destroy();
      (this.settings.mouseDrag || this.settings.touchDrag) &&
        (this.$stage.off("mousedown touchstart touchcancel"),
        a(c).off(".owl.dragEvents"),
        (this.$stage.get(0).onselectstart = function () {}),
        this.$stage.off("dragstart", function () {
          return !1;
        })),
        this.$element.off(".owl"),
        this.$stage.children(".cloned").remove(),
        (this.e = null),
        this.$element.removeData("owlCarousel"),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.unwrap();
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : c > a;
        case ">":
          return d ? c > a : a > c;
        case ">=":
          return d ? c >= a : a >= c;
        case "<=":
          return d ? a >= c : c >= a;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d) {
      var e = { item: { count: this._items.length, index: this.current() } },
        f = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        g = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, e, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g);
          }),
          this.$element.trigger(g),
          this.settings &&
            "function" == typeof this.settings[f] &&
            this.settings[f].apply(this, g)),
        g
      );
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.browserSupport = function () {
      if (((this.support3d = j()), this.support3d)) {
        this.transformVendor = i();
        var a = [
          "transitionend",
          "webkitTransitionEnd",
          "transitionend",
          "oTransitionEnd",
        ];
        (this.transitionEndVendor = a[h()]),
          (this.vendorName = this.transformVendor.replace(/Transform/i, "")),
          (this.vendorName =
            "" !== this.vendorName
              ? "-" + this.vendorName.toLowerCase() + "-"
              : "");
      }
      this.state.orientation = b.orientation;
    }),
    (a.fn.owlCarousel = function (b) {
      return this.each(function () {
        a(this).data("owlCarousel") ||
          a(this).data("owlCarousel", new e(this, b));
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b) {
    var c = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
            if (
              b.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((b.property && "position" == b.property.name) ||
                "initialized" == b.type)
            )
              for (
                var c = this._core.settings,
                  d = (c.center && Math.ceil(c.items / 2)) || c.items,
                  e = (c.center && -1 * d) || 0,
                  f =
                    ((b.property && b.property.value) || this._core.current()) +
                    e,
                  g = this._core.clones().length,
                  h = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                e++ < d;

              )
                this.load(g / 2 + this._core.relative(f)),
                  g && a.each(this._core.clones(this._core.relative(f++)), h);
          }, this),
        }),
        (this._core.options = a.extend({}, c.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (c.Defaults = { lazyLoad: !1 }),
      (c.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (c.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = c);
  })(window.Zepto || window.jQuery, window, document),
  (function (a) {
    var b = function (c) {
      (this._core = c),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function () {
            this._core.settings.autoHeight && this.update();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass) ===
                this._core.$stage.children().eq(this._core.current()) &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, b.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (b.prototype.update = function () {
        this._core.$stage
          .parent()
          .height(
            this._core.$stage.children().eq(this._core.current()).height()
          )
          .addClass(this._core.settings.autoHeightClass);
      }),
      (b.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c) {
    var d = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._fullscreen = !1),
        (this._handlers = {
          "resize.owl.carousel": a.proxy(function (a) {
            this._core.settings.video &&
              !this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
            this._playing && this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            var c = a(b.content).find(".owl-video");
            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
          }, this),
        }),
        (this._core.options = a.extend({}, d.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (d.prototype.fetch = function (a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else {
          if (!(d[3].indexOf("vimeo") > -1))
            throw new Error("Video URL not supported.");
          c = "vimeo";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (d.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        return (
          b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length
            ? (l(h.attr(i)), h.remove(), !1)
            : void ("youtube" === c.type
                ? ((f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                  l(f))
                : "vimeo" === c.type &&
                  a.ajax({
                    type: "GET",
                    url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a[0].thumbnail_large), l(f);
                    },
                  }))
        );
      }),
      (d.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null);
      }),
      (d.prototype.play = function (b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c,
          d,
          e = a(b.target || b.srcElement),
          f = e.closest("." + this._core.settings.itemClass),
          g = this._videos[f.attr("data-video")],
          h = g.width || "100%",
          i = g.height || this._core.$stage.height();
        "youtube" === g.type
          ? (c =
              '<iframe width="' +
              h +
              '" height="' +
              i +
              '" src="http://www.youtube.com/embed/' +
              g.id +
              "?autoplay=1&v=" +
              g.id +
              '" frameborder="0" allowfullscreen></iframe>')
          : "vimeo" === g.type &&
            (c =
              '<iframe src="http://player.vimeo.com/video/' +
              g.id +
              '?autoplay=1" width="' +
              h +
              '" height="' +
              i +
              '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
          f.addClass("owl-video-playing"),
          (this._playing = f),
          (d = a(
            '<div style="height:' +
              i +
              "px; width:" +
              h +
              'px" class="owl-video-frame">' +
              c +
              "</div>"
          )),
          e.after(d);
      }),
      (d.prototype.isInFullScreen = function () {
        var d =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return (
          d &&
            a(d).parent().hasClass("owl-video-frame") &&
            (this._core.speed(0), (this._fullscreen = !0)),
          d && this._fullscreen && this._playing
            ? !1
            : this._fullscreen
            ? ((this._fullscreen = !1), !1)
            : this._playing && this._core.state.orientation !== b.orientation
            ? ((this._core.state.orientation = b.orientation), !1)
            : !0
        );
      }),
      (d.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = d);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              this.swapping = "translated" == a.type;
            }, this),
          "translate.owl.carousel": a.proxy(function () {
            this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)
                .one(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  c
                )),
            f &&
              e
                .addClass("animated owl-animated-in")
                .addClass(f)
                .one(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  c
                ));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.transitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c) {
    var d = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, d.Defaults, this.core.options)),
        (this.handlers = {
          "translated.owl.carousel refreshed.owl.carousel": a.proxy(
            function () {
              this.autoplay();
            },
            this
          ),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function () {
            this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this.core.settings.autoplayHoverPause && this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this.core.settings.autoplayHoverPause && this.autoplay();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (d.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (d.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay
          ? (b.clearInterval(this.interval),
            (this.interval = b.setInterval(
              a.proxy(function () {
                this.play();
              }, this),
              this.core.settings.autoplayTimeout
            )))
          : b.clearInterval(this.interval);
      }),
      (d.prototype.play = function () {
        return c.hidden === !0 ||
          this.core.state.isTouch ||
          this.core.state.isScrolling ||
          this.core.state.isSwiping ||
          this.core.state.inMotion
          ? void 0
          : this.core.settings.autoplay === !1
          ? void b.clearInterval(this.interval)
          : void this.core.next(this.core.settings.autoplaySpeed);
      }),
      (d.prototype.stop = function () {
        b.clearInterval(this.interval);
      }),
      (d.prototype.pause = function () {
        b.clearInterval(this.interval);
      }),
      (d.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = d);
  })(window.Zepto || window.jQuery, window, document),
  (function (a) {
    "use strict";
    var b = function (c) {
      (this._core = c),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            this._core.settings.dotsData &&
              this._templates.push(
                a(b.content)
                  .find("[data-dot]")
                  .andSelf("[data-dot]")
                  .attr("data-dot")
              );
          }, this),
          "add.owl.carousel": a.proxy(function (b) {
            this._core.settings.dotsData &&
              this._templates.splice(
                b.position,
                0,
                a(b.content)
                  .find("[data-dot]")
                  .andSelf("[data-dot]")
                  .attr("data-dot")
              );
          }, this),
          "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
            this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "change.owl.carousel": a.proxy(function (a) {
            if (
              "position" == a.property.name &&
              !this._core.state.revert &&
              !this._core.settings.loop &&
              this._core.settings.navRewind
            ) {
              var b = this._core.current(),
                c = this._core.maximum(),
                d = this._core.minimum();
              a.data =
                a.property.value > c
                  ? b >= c
                    ? d
                    : c
                  : a.property.value < d
                  ? c
                  : a.property.value;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            "position" == a.property.name && this.draw();
          }, this),
          "refreshed.owl.carousel": a.proxy(function () {
            this._initialized || (this.initialize(), (this._initialized = !0)),
              this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation");
          }, this),
        }),
        (this._core.options = a.extend({}, b.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (b.Defaults = {
      nav: !1,
      navRewind: !0,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      controlsClass: "owl-controls",
    }),
      (b.prototype.initialize = function () {
        var b,
          c,
          d = this._core.settings;
        d.dotsData ||
          (this._templates = [
            a("<div>")
              .addClass(d.dotClass)
              .append(a("<span>"))
              .prop("outerHTML"),
          ]),
          (d.navContainer && d.dotsContainer) ||
            (this._controls.$container = a("<div>")
              .addClass(d.controlsClass)
              .appendTo(this.$element)),
          (this._controls.$indicators = d.dotsContainer
            ? a(d.dotsContainer)
            : a("<div>")
                .hide()
                .addClass(d.dotsClass)
                .appendTo(this._controls.$container)),
          this._controls.$indicators.on(
            "click",
            "div",
            a.proxy(function (b) {
              var c = a(b.target).parent().is(this._controls.$indicators)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(c, d.dotsSpeed);
            }, this)
          ),
          (b = d.navContainer
            ? a(d.navContainer)
            : a("<div>")
                .addClass(d.navContainerClass)
                .prependTo(this._controls.$container)),
          (this._controls.$next = a("<" + d.navElement + ">")),
          (this._controls.$previous = this._controls.$next.clone()),
          this._controls.$previous
            .addClass(d.navClass[0])
            .html(d.navText[0])
            .hide()
            .prependTo(b)
            .on(
              "click",
              a.proxy(function () {
                this.prev(d.navSpeed);
              }, this)
            ),
          this._controls.$next
            .addClass(d.navClass[1])
            .html(d.navText[1])
            .hide()
            .appendTo(b)
            .on(
              "click",
              a.proxy(function () {
                this.next(d.navSpeed);
              }, this)
            );
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this);
      }),
      (b.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (b.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.settings,
          e = this._core.clones().length / 2,
          f = e + this._core.items().length,
          g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if (
          ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)),
          d.dots || "page" == d.slideBy)
        )
          for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)
            (b >= g || 0 === b) &&
              (this._pages.push({ start: a - e, end: a - e + g - 1 }),
              (b = 0),
              ++c),
              (b += this._core.mergers(this._core.relative(a)));
      }),
      (b.prototype.draw = function () {
        var b,
          c,
          d = "",
          e = this._core.settings,
          f =
            (this._core.$stage.children(),
            this._core.relative(this._core.current()));
        if (
          (!e.nav ||
            e.loop ||
            e.navRewind ||
            (this._controls.$previous.toggleClass("disabled", 0 >= f),
            this._controls.$next.toggleClass(
              "disabled",
              f >= this._core.maximum()
            )),
          this._controls.$previous.toggle(e.nav),
          this._controls.$next.toggle(e.nav),
          e.dots)
        ) {
          if (
            ((b =
              this._pages.length -
              this._controls.$indicators.children().length),
            e.dotData && 0 !== b)
          ) {
            for (c = 0; c < this._controls.$indicators.children().length; c++)
              d += this._templates[this._core.relative(c)];
            this._controls.$indicators.html(d);
          } else
            b > 0
              ? ((d = new Array(b + 1).join(this._templates[0])),
                this._controls.$indicators.append(d))
              : 0 > b &&
                this._controls.$indicators.children().slice(b).remove();
          this._controls.$indicators.find(".active").removeClass("active"),
            this._controls.$indicators
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active");
        }
        this._controls.$indicators.toggle(e.dots);
      }),
      (b.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items),
        };
      }),
      (b.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(this._pages, function (a) {
            return a.start <= b && a.end >= b;
          })
          .pop();
      }),
      (b.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (b.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (b.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (b.prototype.to = function (b, c, d) {
        var e;
        d
          ? a.proxy(this._overrides.to, this._core)(b, c)
          : ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ));
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = b);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b) {
    "use strict";
    var c = function (d) {
      (this._core = d),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function () {
            "URLHash" == this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            var c = a(b.content)
              .find("[data-hash]")
              .andSelf("[data-hash]")
              .attr("data-hash");
            this._hashes[c] = b.content;
          }, this),
        }),
        (this._core.options = a.extend({}, c.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function () {
            var a = b.location.hash.substring(1),
              c = this._core.$stage.children(),
              d = (this._hashes[a] && c.index(this._hashes[a])) || 0;
            return a ? void this._core.to(d, !1, !0) : !1;
          }, this)
        );
    };
    (c.Defaults = { URLhashListener: !1 }),
      (c.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = c);
  })(window.Zepto || window.jQuery, window, document);
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(
        "object" == typeof exports && "function" == typeof require
          ? require("jquery")
          : jQuery
      );
})(function (e) {
  "use strict";
  function t(n, o) {
    var s = this;
    (s.element = n),
      (s.el = e(n)),
      (s.suggestions = []),
      (s.badQueries = []),
      (s.selectedIndex = -1),
      (s.currentValue = s.element.value),
      (s.timeoutId = null),
      (s.cachedResponse = {}),
      (s.onChangeTimeout = null),
      (s.onChange = null),
      (s.isLocal = !1),
      (s.suggestionsContainer = null),
      (s.noSuggestionsContainer = null),
      (s.options = e.extend({}, t.defaults, o)),
      (s.classes = {
        selected: "autocomplete-selected",
        suggestion: "autocomplete-suggestion",
      }),
      (s.hint = null),
      (s.hintValue = ""),
      (s.selection = null),
      s.initialize(),
      s.setOptions(o);
  }
  var n = {
      escapeRegExChars: function (e) {
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
      },
      createNode: function (e) {
        var t = document.createElement("div");
        return (
          (t.className = e),
          (t.style.position = "absolute"),
          (t.style.display = "none"),
          t
        );
      },
    },
    o = { ESC: 27, TAB: 9, RETURN: 13, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
    s = e.noop;
  (t.utils = n),
    (e.Autocomplete = t),
    (t.defaults = {
      ajaxSettings: {},
      autoSelectFirst: !1,
      appendTo: "body",
      serviceUrl: null,
      lookup: null,
      onSelect: null,
      width: "auto",
      minChars: 1,
      maxHeight: 300,
      deferRequestBy: 0,
      params: {},
      formatResult: function (e, t) {
        if (!t) return e.value;
        var o = "(" + n.escapeRegExChars(t) + ")";
        return e.value
          .replace(new RegExp(o, "gi"), "<strong>$1</strong>")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/&lt;(\/?strong)&gt;/g, "<$1>");
      },
      formatGroup: function (e, t) {
        return '<div class="autocomplete-group">' + t + "</div>";
      },
      delimiter: null,
      zIndex: 9999,
      type: "GET",
      noCache: !1,
      onSearchStart: s,
      onSearchComplete: s,
      onSearchError: s,
      preserveInput: !1,
      containerClass: "autocomplete-suggestions",
      tabDisabled: !1,
      dataType: "text",
      currentRequest: null,
      triggerSelectOnValidInput: !0,
      preventBadQueries: !0,
      lookupFilter: function (e, t, n) {
        return -1 !== e.value.toLowerCase().indexOf(n);
      },
      paramName: "query",
      transformResult: function (t) {
        return "string" == typeof t ? e.parseJSON(t) : t;
      },
      showNoSuggestionNotice: !1,
      noSuggestionNotice: "No results",
      orientation: "bottom",
      forceFixPosition: !1,
    }),
    (t.prototype = {
      initialize: function () {
        var n,
          o = this,
          s = "." + o.classes.suggestion,
          i = o.classes.selected,
          a = o.options;
        o.element.setAttribute("autocomplete", "off"),
          (o.noSuggestionsContainer = e(
            '<div class="autocomplete-no-suggestion"></div>'
          )
            .html(this.options.noSuggestionNotice)
            .get(0)),
          (o.suggestionsContainer = t.utils.createNode(a.containerClass)),
          (n = e(o.suggestionsContainer)).appendTo(a.appendTo || "body"),
          "auto" !== a.width && n.css("width", a.width),
          n.on("mouseover.autocomplete", s, function () {
            o.activate(e(this).data("index"));
          }),
          n.on("mouseout.autocomplete", function () {
            (o.selectedIndex = -1), n.children("." + i).removeClass(i);
          }),
          n.on("click.autocomplete", s, function () {
            o.select(e(this).data("index"));
          }),
          n.on("click.autocomplete", function () {
            clearTimeout(o.blurTimeoutId);
          }),
          (o.fixPositionCapture = function () {
            o.visible && o.fixPosition();
          }),
          e(window).on("resize.autocomplete", o.fixPositionCapture),
          o.el.on("keydown.autocomplete", function (e) {
            o.onKeyPress(e);
          }),
          o.el.on("keyup.autocomplete", function (e) {
            o.onKeyUp(e);
          }),
          o.el.on("blur.autocomplete", function () {
            o.onBlur();
          }),
          o.el.on("focus.autocomplete", function () {
            o.onFocus();
          }),
          o.el.on("change.autocomplete", function (e) {
            o.onKeyUp(e);
          }),
          o.el.on("input.autocomplete", function (e) {
            o.onKeyUp(e);
          });
      },
      onFocus: function () {
        var e = this;
        e.fixPosition(),
          e.el.val().length >= e.options.minChars && e.onValueChange();
      },
      onBlur: function () {
        var e = this;
        e.blurTimeoutId = setTimeout(function () {
          e.hide();
        }, 200);
      },
      abortAjax: function () {
        var e = this;
        e.currentRequest &&
          (e.currentRequest.abort(), (e.currentRequest = null));
      },
      setOptions: function (t) {
        var n = this,
          o = e.extend({}, n.options, t);
        (n.isLocal = Array.isArray(o.lookup)),
          n.isLocal && (o.lookup = n.verifySuggestionsFormat(o.lookup)),
          (o.orientation = n.validateOrientation(o.orientation, "bottom")),
          e(n.suggestionsContainer).css({
            "max-height": o.maxHeight + "px",
            width: o.width + "px",
            "z-index": o.zIndex,
          }),
          (this.options = o);
      },
      clearCache: function () {
        (this.cachedResponse = {}), (this.badQueries = []);
      },
      clear: function () {
        this.clearCache(), (this.currentValue = ""), (this.suggestions = []);
      },
      disable: function () {
        var e = this;
        (e.disabled = !0), clearTimeout(e.onChangeTimeout), e.abortAjax();
      },
      enable: function () {
        this.disabled = !1;
      },
      fixPosition: function () {
        var t = this,
          n = e(t.suggestionsContainer),
          o = n.parent().get(0);
        if (o === document.body || t.options.forceFixPosition) {
          var s = t.options.orientation,
            i = n.outerHeight(),
            a = t.el.outerHeight(),
            u = t.el.offset(),
            r = { top: u.top, left: u.left };
          if ("auto" === s) {
            var l = e(window).height(),
              c = e(window).scrollTop(),
              g = -c + u.top - i,
              d = c + l - (u.top + a + i);
            s = Math.max(g, d) === g ? "top" : "bottom";
          }
          if (((r.top += "top" === s ? -i : a), o !== document.body)) {
            var p,
              h = n.css("opacity");
            t.visible || n.css("opacity", 0).show(),
              (p = n.offsetParent().offset()),
              (r.top -= p.top),
              (r.top += o.scrollTop),
              (r.left -= p.left),
              t.visible || n.css("opacity", h).hide();
          }
          "auto" === t.options.width && (r.width = t.el.outerWidth() + "px"),
            n.css(r);
        }
      },
      isCursorAtEnd: function () {
        var e,
          t = this,
          n = t.el.val().length,
          o = t.element.selectionStart;
        return "number" == typeof o
          ? o === n
          : !document.selection ||
              ((e = document.selection.createRange()).moveStart(
                "character",
                -n
              ),
              n === e.text.length);
      },
      onKeyPress: function (e) {
        var t = this;
        if (t.disabled || t.visible || e.which !== o.DOWN || !t.currentValue) {
          if (!t.disabled && t.visible) {
            switch (e.which) {
              case o.ESC:
                t.el.val(t.currentValue), t.hide();
                break;
              case o.RIGHT:
                if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
                  t.selectHint();
                  break;
                }
                return;
              case o.TAB:
                if (t.hint && t.options.onHint) return void t.selectHint();
                if (-1 === t.selectedIndex) return void t.hide();
                if ((t.select(t.selectedIndex), !1 === t.options.tabDisabled))
                  return;
                break;
              case o.RETURN:
                if (-1 === t.selectedIndex) return void t.hide();
                t.select(t.selectedIndex);
                break;
              case o.UP:
                t.moveUp();
                break;
              case o.DOWN:
                t.moveDown();
                break;
              default:
                return;
            }
            e.stopImmediatePropagation(), e.preventDefault();
          }
        } else t.suggest();
      },
      onKeyUp: function (e) {
        var t = this;
        if (!t.disabled) {
          switch (e.which) {
            case o.UP:
            case o.DOWN:
              return;
          }
          clearTimeout(t.onChangeTimeout),
            t.currentValue !== t.el.val() &&
              (t.findBestHint(),
              t.options.deferRequestBy > 0
                ? (t.onChangeTimeout = setTimeout(function () {
                    t.onValueChange();
                  }, t.options.deferRequestBy))
                : t.onValueChange());
        }
      },
      onValueChange: function () {
        if (this.ignoreValueChange) this.ignoreValueChange = !1;
        else {
          var t = this,
            n = t.options,
            o = t.el.val(),
            s = t.getQuery(o);
          t.selection &&
            t.currentValue !== s &&
            ((t.selection = null),
            (n.onInvalidateSelection || e.noop).call(t.element)),
            clearTimeout(t.onChangeTimeout),
            (t.currentValue = o),
            (t.selectedIndex = -1),
            n.triggerSelectOnValidInput && t.isExactMatch(s)
              ? t.select(0)
              : s.length < n.minChars
              ? t.hide()
              : t.getSuggestions(s);
        }
      },
      isExactMatch: function (e) {
        var t = this.suggestions;
        return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase();
      },
      getQuery: function (t) {
        var n,
          o = this.options.delimiter;
        return o ? ((n = t.split(o)), e.trim(n[n.length - 1])) : t;
      },
      getSuggestionsLocal: function (t) {
        var n,
          o = this.options,
          s = t.toLowerCase(),
          i = o.lookupFilter,
          a = parseInt(o.lookupLimit, 10);
        return (
          (n = {
            suggestions: e.grep(o.lookup, function (e) {
              return i(e, t, s);
            }),
          }),
          a &&
            n.suggestions.length > a &&
            (n.suggestions = n.suggestions.slice(0, a)),
          n
        );
      },
      getSuggestions: function (t) {
        var n,
          o,
          s,
          i,
          a = this,
          u = a.options,
          r = u.serviceUrl;
        (u.params[u.paramName] = t),
          !1 !== u.onSearchStart.call(a.element, u.params) &&
            ((o = u.ignoreParams ? null : u.params),
            e.isFunction(u.lookup)
              ? u.lookup(t, function (e) {
                  (a.suggestions = e.suggestions),
                    a.suggest(),
                    u.onSearchComplete.call(a.element, t, e.suggestions);
                })
              : (a.isLocal
                  ? (n = a.getSuggestionsLocal(t))
                  : (e.isFunction(r) && (r = r.call(a.element, t)),
                    (s = r + "?" + e.param(o || {})),
                    (n = a.cachedResponse[s])),
                n && Array.isArray(n.suggestions)
                  ? ((a.suggestions = n.suggestions),
                    a.suggest(),
                    u.onSearchComplete.call(a.element, t, n.suggestions))
                  : a.isBadQuery(t)
                  ? u.onSearchComplete.call(a.element, t, [])
                  : (a.abortAjax(),
                    (i = {
                      url: r,
                      data: o,
                      type: u.type,
                      dataType: u.dataType,
                    }),
                    e.extend(i, u.ajaxSettings),
                    (a.currentRequest = e
                      .ajax(i)
                      .done(function (e) {
                        var n;
                        (a.currentRequest = null),
                          (n = u.transformResult(e, t)),
                          a.processResponse(n, t, s),
                          u.onSearchComplete.call(a.element, t, n.suggestions);
                      })
                      .fail(function (e, n, o) {
                        u.onSearchError.call(a.element, t, e, n, o);
                      })))));
      },
      isBadQuery: function (e) {
        if (!this.options.preventBadQueries) return !1;
        for (var t = this.badQueries, n = t.length; n--; )
          if (0 === e.indexOf(t[n])) return !0;
        return !1;
      },
      hide: function () {
        var t = this,
          n = e(t.suggestionsContainer);
        e.isFunction(t.options.onHide) &&
          t.visible &&
          t.options.onHide.call(t.element, n),
          (t.visible = !1),
          (t.selectedIndex = -1),
          clearTimeout(t.onChangeTimeout),
          e(t.suggestionsContainer).hide(),
          t.signalHint(null);
      },
      suggest: function () {
        if (this.suggestions.length) {
          var t,
            n = this,
            o = n.options,
            s = o.groupBy,
            i = o.formatResult,
            a = n.getQuery(n.currentValue),
            u = n.classes.suggestion,
            r = n.classes.selected,
            l = e(n.suggestionsContainer),
            c = e(n.noSuggestionsContainer),
            g = o.beforeRender,
            d = "",
            p = function (e, n) {
              var i = e.data[s];
              return t === i ? "" : ((t = i), o.formatGroup(e, t));
            };
          o.triggerSelectOnValidInput && n.isExactMatch(a)
            ? n.select(0)
            : (e.each(n.suggestions, function (e, t) {
                s && (d += p(t, 0)),
                  (d +=
                    '<div class="' +
                    u +
                    '" data-index="' +
                    e +
                    '">' +
                    i(t, a, e) +
                    "</div>");
              }),
              this.adjustContainerWidth(),
              c.detach(),
              l.html(d),
              e.isFunction(g) && g.call(n.element, l, n.suggestions),
              n.fixPosition(),
              l.show(),
              o.autoSelectFirst &&
                ((n.selectedIndex = 0),
                l.scrollTop(0),
                l
                  .children("." + u)
                  .first()
                  .addClass(r)),
              (n.visible = !0),
              n.findBestHint());
        } else
          this.options.showNoSuggestionNotice
            ? this.noSuggestions()
            : this.hide();
      },
      noSuggestions: function () {
        var t = this,
          n = t.options.beforeRender,
          o = e(t.suggestionsContainer),
          s = e(t.noSuggestionsContainer);
        this.adjustContainerWidth(),
          s.detach(),
          o.empty(),
          o.append(s),
          e.isFunction(n) && n.call(t.element, o, t.suggestions),
          t.fixPosition(),
          o.show(),
          (t.visible = !0);
      },
      adjustContainerWidth: function () {
        var t,
          n = this,
          o = n.options,
          s = e(n.suggestionsContainer);
        "auto" === o.width
          ? ((t = n.el.outerWidth()), s.css("width", t > 0 ? t : 300))
          : "flex" === o.width && s.css("width", "");
      },
      findBestHint: function () {
        var t = this,
          n = t.el.val().toLowerCase(),
          o = null;
        n &&
          (e.each(t.suggestions, function (e, t) {
            var s = 0 === t.value.toLowerCase().indexOf(n);
            return s && (o = t), !s;
          }),
          t.signalHint(o));
      },
      signalHint: function (t) {
        var n = "",
          o = this;
        t && (n = o.currentValue + t.value.substr(o.currentValue.length)),
          o.hintValue !== n &&
            ((o.hintValue = n),
            (o.hint = t),
            (this.options.onHint || e.noop)(n));
      },
      verifySuggestionsFormat: function (t) {
        return t.length && "string" == typeof t[0]
          ? e.map(t, function (e) {
              return { value: e, data: null };
            })
          : t;
      },
      validateOrientation: function (t, n) {
        return (
          (t = e.trim(t || "").toLowerCase()),
          -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = n),
          t
        );
      },
      processResponse: function (e, t, n) {
        var o = this,
          s = o.options;
        (e.suggestions = o.verifySuggestionsFormat(e.suggestions)),
          s.noCache ||
            ((o.cachedResponse[n] = e),
            s.preventBadQueries &&
              !e.suggestions.length &&
              o.badQueries.push(t)),
          t === o.getQuery(o.currentValue) &&
            ((o.suggestions = e.suggestions), o.suggest());
      },
      activate: function (t) {
        var n,
          o = this,
          s = o.classes.selected,
          i = e(o.suggestionsContainer),
          a = i.find("." + o.classes.suggestion);
        return (
          i.find("." + s).removeClass(s),
          (o.selectedIndex = t),
          -1 !== o.selectedIndex && a.length > o.selectedIndex
            ? ((n = a.get(o.selectedIndex)), e(n).addClass(s), n)
            : null
        );
      },
      selectHint: function () {
        var t = this,
          n = e.inArray(t.hint, t.suggestions);
        t.select(n);
      },
      select: function (e) {
        var t = this;
        t.hide(), t.onSelect(e);
      },
      moveUp: function () {
        var t = this;
        if (-1 !== t.selectedIndex)
          return 0 === t.selectedIndex
            ? (e(t.suggestionsContainer)
                .children("." + t.classes.suggestion)
                .first()
                .removeClass(t.classes.selected),
              (t.selectedIndex = -1),
              (t.ignoreValueChange = !1),
              t.el.val(t.currentValue),
              void t.findBestHint())
            : void t.adjustScroll(t.selectedIndex - 1);
      },
      moveDown: function () {
        var e = this;
        e.selectedIndex !== e.suggestions.length - 1 &&
          e.adjustScroll(e.selectedIndex + 1);
      },
      adjustScroll: function (t) {
        var n = this,
          o = n.activate(t);
        if (o) {
          var s,
            i,
            a,
            u = e(o).outerHeight();
          (s = o.offsetTop),
            (a =
              (i = e(n.suggestionsContainer).scrollTop()) +
              n.options.maxHeight -
              u),
            s < i
              ? e(n.suggestionsContainer).scrollTop(s)
              : s > a &&
                e(n.suggestionsContainer).scrollTop(
                  s - n.options.maxHeight + u
                ),
            n.options.preserveInput ||
              ((n.ignoreValueChange = !0),
              n.el.val(n.getValue(n.suggestions[t].value))),
            n.signalHint(null);
        }
      },
      onSelect: function (t) {
        var n = this,
          o = n.options.onSelect,
          s = n.suggestions[t];
        (n.currentValue = n.getValue(s.value)),
          n.currentValue === n.el.val() ||
            n.options.preserveInput ||
            n.el.val(n.currentValue),
          n.signalHint(null),
          (n.suggestions = []),
          (n.selection = s),
          e.isFunction(o) && o.call(n.element, s);
      },
      getValue: function (e) {
        var t,
          n,
          o = this,
          s = o.options.delimiter;
        return s
          ? ((t = o.currentValue),
            (n = t.split(s)),
            1 === n.length
              ? e
              : t.substr(0, t.length - n[n.length - 1].length) + e)
          : e;
      },
      dispose: function () {
        var t = this;
        t.el.off(".autocomplete").removeData("autocomplete"),
          e(window).off("resize.autocomplete", t.fixPositionCapture),
          e(t.suggestionsContainer).remove();
      },
    }),
    (e.fn.devbridgeAutocomplete = function (n, o) {
      return arguments.length
        ? this.each(function () {
            var s = e(this),
              i = s.data("autocomplete");
            "string" == typeof n
              ? i && "function" == typeof i[n] && i[n](o)
              : (i && i.dispose && i.dispose(),
                (i = new t(this, n)),
                s.data("autocomplete", i));
          })
        : this.first().data("autocomplete");
    }),
    e.fn.autocomplete || (e.fn.autocomplete = e.fn.devbridgeAutocomplete);
});
function submit_form_search2() {
  itemid = 10;
  url = "";
  var keyword = $("#keyword2").val();
  keyword = keyword.replace(" ", "+");
  keyword = encodeURIComponent(encodeURIComponent(keyword));
  var link_search = $("#link_search2").val();
  if (keyword != "") {
    url += "&keyword=" + keyword;
    var check = 1;
  } else {
    var check = 0;
  }
  if (check == 0) {
    alert("Bạn phải nhập tham số tìm kiếm");
    return false;
  }
  link = link_search.replace("keyword", keyword);
  window.location.href = link;
  return false;
}
$(document).ready(function () {
  $("#keyword2").autocomplete({
    serviceUrl:
      "/index.php?module=products&view=search&raw=1&task=get_ajax_search",
    groupBy: "brand",
    minChars: 2,
    formatResult: function (n, t) {
      t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      var i = n.data.text.split(" "),
        r = "";
      for (j = 0; j < i.length; j++)
        r +=
          t.toLowerCase().indexOf(i[j].toLowerCase()) >= 0
            ? "<strong>" + i[j] + "</strong> "
            : i[j] + " ";
      return (
        ' <a href = "' +
        n.value +
        '" > <img src = "' +
        n.data.image +
        '" /> <label> <span> ' +
        r +
        ' </span> <span class = "price"> ' +
        n.data.price +
        "</span></label></a>"
      );
    },
    onSelect: function (n) {
      $(".control input[name=kwd]").val(n.data.text);
    },
  });
});
function submit_form_search() {
  (itemid = 10), (url = "");
  var e = $("#keyword").val();
  (e = e.replace(" ", "+")), (e = encodeURIComponent(encodeURIComponent(e)));
  var a = $("#link_search").val();
  if ("" != e) {
    url += "&keyword=" + e;
    r = 1;
  } else var r = 0;
  return 0 == r
    ? (alert("Bạn phải nhập tham số tìm kiếm"), !1)
    : ((link = a.replace("keyword", e)), (window.location.href = link), !1);
}
$(document).ready(function () {
  $("#keyword").autocomplete({
    serviceUrl:
      "/index.php?module=products&view=search&raw=1&task=get_ajax_search",
    groupBy: "brand",
    minChars: 2,
    formatResult: function (e, a) {
      a = a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      var r = e.data.text.split(" "),
        n = "";
      for (j = 0; j < r.length; j++)
        n +=
          a.toLowerCase().indexOf(r[j].toLowerCase()) >= 0
            ? "<strong>" + r[j] + "</strong> "
            : r[j] + " ";
      return (
        ' <a href = "' +
        e.value +
        '" > <img src = "' +
        e.data.image +
        '" /> <label> <span> ' +
        n +
        ' </span> <span class = "price"> ' +
        e.data.price +
        "</span></label></a>"
      );
    },
    onSelect: function (e) {
      $(".control input[name=kwd]").val(e.data.text);
    },
  });
});
$(document).ready(function () {
  $(".strengths_left_icon .item_0").hover(
    function () {
      $(".strengths_left_icon .fix-content").show();
    },
    function () {
      // un hover
      $(".strengths_left_icon .fix-content").hide();
    }
  );

  $(".wrap-fix-content").hover(
    function () {
      $(".strengths_left_icon .fix-content").show();
    },
    function () {
      // un hover
      $(".wrap-fix-content .fix-content").hide();
    }
  );
});
$(document).ready(function () {
  $("#product_menu_ul .view_all").click(function () {
    $("#product_menu_ul >ul").toggleClass("height_auto");
    $(this).toggleClass("position_auto");
    if ($("#product_menu_ul >ul").hasClass("height_auto")) {
      $("#product_menu_ul .view_all a").html("Thu gọn");
    } else {
      $("#product_menu_ul .view_all a").html("Xem thêm");
    }
  });

  // $('.div_megamenu_left').click(function(){
  // 	$('.product_menu').toggleClass('hide');
  // });
}); //$(document).ready(function() {

$(function () {
  $("#fs-slider .item").removeClass("hide");
  $("#sync2 .item").removeClass("hide");

  var sync1 = $("#fs-slider");

  var flag = false;
  var duration = 300;

  sync1
    .owlCarousel({
      items: 1,
      nav: true,
      navText: ["‹", "›"],
      autoplay: true,
      autoplayTimeout: 4000,
      loop: true,
      lazyLoad: true,
      pagination: true,
      dots: true,
    })
    .on("changed.owl.carousel", function (e) {
      var syncedPosition = syncPosition(e.item.index);

      if (syncedPosition != "stayStill") {
        sync2.trigger("to.owl.carousel", [syncedPosition, duration, true]);
      }
    });

  var sync2 = $("#sync2");
  sync2
    .on("initialized.owl.carousel", function () {
      //must go before owl carousel initialization
      addClassCurrent(0);
    })
    .owlCarousel({
      items: 8,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsMobile: [479, 1],
      pagination: false,
      dots: false,
      navText: ["‹", "›"],
      loop: false,
      autoplay: false,

      responsive: {
        0: {
          items: 3,
        },
        400: {
          items: 4,
        },
        500: {
          items: 5,
        },
        600: {
          items: 3,
        },
        700: {
          items: 4,
        },
        800: {
          items: 5,
        },
        900: {
          items: 5,
        },
        1000: {
          items: 5,
        },
        1100: {
          items: 5,
        },
      },
      //		responsiveRefreshRate : 100,
      //		afterInit : function(el){
      //			el.find(".owl-item").eq(0).addClass("synced");
      //		}
    })
    .on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      addClassCurrent(number);
      sync1.trigger("to.owl.carousel", [number, 1, true]);

      var img_current = sync2
        .find(".owl-item")
        .eq(number)
        .find("img")
        .attr("src");
      img_current = img_current.replace("/small/", "/large/");
      $("#Zoomer img")
        .fadeTo(300, 0.3, function () {
          $("#Zoomer img").attr("src", img_current);
        })
        .fadeTo(300, 1);
      $("#Zoomer").attr("href", img_current);
      $("#Zoomer").attr("data-image", img_current);

      //		 MagicZoom.update('#Zoomer', img_current,img_current, 'show-title: false');
      MagicZoom.refresh();
    });

  //syncs positions. argument 'index' represents absolute position of the element
  function syncPosition(index) {
    //PART 1 (adds 'current' class to thumbnail)
    addClassCurrent(index);

    //PART 2 (counts position)

    var itemsNo = sync2.find(".owl-item").length; //total items
    var visibleItemsNo = sync2.find(".owl-item.active").length; //visible items

    //if all items are visible
    if (itemsNo === visibleItemsNo) {
      return "stayStill";
    }

    //relative index (if 4 elements are visible and the 2nd of them has class 'current', returns index = 1)
    var visibleCurrentIndex = sync2
      .find(".owl-item.active")
      .index(sync2.find(".owl-item.current"));

    //if it's first visible element and if there is hidden element before it
    if (visibleCurrentIndex == 0 && index != 0) {
      return index - 1;
    }

    //if it's last visible element and if there is hidden element after it
    if (visibleCurrentIndex == visibleItemsNo - 1 && index != itemsNo - 1) {
      return index - visibleItemsNo + 2;
    }

    return "stayStill";
  }
  // ./SYNCED OWL CAROUSEL

  //adds 'current' class to the thumbnail
  function addClassCurrent(index) {
    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(index)
      .addClass("current");
  }

  //    	$(".cb-image-inner-content").colorbox({maxHeight:"640px"});
  $(window).resize(function () {
    if (window.innerWidth <= 768) {
      sync1.trigger("next.owl.carousel");
      sync1.trigger("prev.owl.carousel");
    }
  });
});

$(function () {
  $(".products_tab").each(function (index) {
    var count_block = $(this).attr("data-count");
    var id_block = $(this).attr("id");
    var identity = id_block.replace("products_tab_", "");
    initialize_owl(
      $(".product_grid_slishow_home#products_tab_" + identity + "")
    );
    $("#products_tab_" + identity + "").removeClass("hiden");
    return false;
  });
  run_tab();
});

function initialize_owl(el) {
  $(".product_grid_slishow_home .product_grid").removeClass("hide");
  el.owlCarousel({
    loop: true,
    nav: true,
    navText: ["‹", "›"],
    dots: false,
    pagination: false,
    autoplay: false,
    responsiveClass: true,
    lazyLoad: true,
    smartSpeed: 400,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 1,
      },
    },
  });
}

function run_tab() {
  $(".id_tab").click(function () {
    var id = $(this).attr("id");
    var data_id = $(this).attr("data-id");
    $(".filter_price").hide();
    $(".filter_price_" + data_id).show();

    $(".tab_title li").removeClass("activated");
    $(this).addClass("activated");
    content_id = id.replace("tab_", "products_tab_wrapper_");
    $(".products_tab_wrapper").addClass("opacity-off");
    $("#" + content_id).removeClass("opacity-off");
    content_owl_id = id.replace("tab_", "products_tab_");
    initialize_owl($(".product_grid_slishow_home#" + content_owl_id));
  });
}
expand_filter();
function expand_filter() {
  $(".click-mobile").click(function (e) {
    var id = $(this).attr("data-id");
    $(this).toggleClass("active");
    $("#" + id).toggle("slow");
  });
}
var width = $(window).width();
$(window).resize(function () {
  width = $(window).width();
});

$(".menu_show").click(function () {
  if (width < 1141) {
    $(".megamenu_mb").toggleClass("megamenu_mb_show");
    $(".modal-menu-full-screen-menu").addClass("show_screen");
  }
});

$(".close_all").click(function () {
  $(".megamenu_mb").toggleClass("megamenu_mb_show");
  $(".highlight").removeClass("megamenu_mb_show");
  $(".modal-menu-full-screen-menu").removeClass("show_screen");
});

$(".modal-menu-full-screen-menu").click(function () {
  $(".megamenu_mb").toggleClass("megamenu_mb_show");
  $(".highlight").removeClass("megamenu_mb_show");
  $(".modal-menu-full-screen-menu").removeClass("show_screen");
});

$(".megamenu_mb .next_menu").click(function () {
  var id = $(this).attr("id");
  content_id = id.replace("next_", "sub_menu_");
  $("#" + content_id).addClass("megamenu_mb_show");
});

$(".megamenu_mb .label").click(function () {
  var id = $(this).attr("id");
  content_id = id.replace("close_", "sub_menu_");
  $("#" + content_id).removeClass("megamenu_mb_show");
});
