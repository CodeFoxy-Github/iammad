var e, t, n, r = document.createElement("script");
r.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.slim.js", r.onload = () => {
    let e = io("https://cloudvarapi.kihtrak.com/"),
        t = "playground",
        n = (window.location.hostname && (t = encodeURIComponent(window.location.protocol + "//" + window.location.hostname).replace(/\./g, "%2E")), e.on("init-" + t, e => {
            for (var t in e) n[t] = JSON.parse(JSON.stringify(e[t])), null == window[t] && (window[t] = e[t])
        }), e.on("newVal-" + t, e => {
            var t = Object.keys(e)[0];
            window[t] = e[t], n[t] = JSON.parse(JSON.stringify(e[t]))
        }), {}),
        r = e => "number" == typeof e || "string" == typeof e ? e : "object" == typeof e ? JSON.stringify(e) : "function" == typeof e ? e.toString() : e;
    setInterval(() => {
        for (var t in window) 0 == t.indexOf("cloud_") && r(n[t]) !== r(window[t]) && (n[t] = "object" == typeof window[t] ? JSON.parse(JSON.stringify(window[t])) : window[t], e.emit("varChanged", {
            [t]: "function" == typeof window[t] ? window[t].toString() : window[t]
        }))
    }, 0)
}, document.head.appendChild(r), document.getElementById("formb3");
const i = document.getElementById("formb2");
i.hidden = !0, document.head.appendChild(((e = document.createElement("script")).src = "cloud.js", e));
var o = [];
setInterval(function() {
    let e = document.getElementById("messages");
    for (let t of (e.innerHTML = "", o)) e.innerHTML += `<h3>${t} &nbsp;&nbsp;&nbsp;  </h3>`;
    Date.now()
}, 0), t = "undefined" != typeof window ? window : this, n = function(e, t) {
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        p = f.call(Object),
        d = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function(e) {
            return null != e && e === e.window
        },
        v = e.document,
        y = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e, t)
            for (r in y)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var b = "3.7.1",
        w = /HTML$/i,
        T = function(e, t) {
            return new T.fn.init(e, t)
        };

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    T.fn = T.prototype = {
        jquery: b,
        constructor: T,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(e) {
            return this.pushStack(T.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(T.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(T.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, a[t] = T.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, T.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof(n = c.call(t, "constructor") && t.constructor) && f.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r++];) n += T.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !w.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (C(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: d
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = n[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var E = n.pop,
        k = n.sort,
        j = n.splice,
        A = "[\\x20\\t\\r\\n\\f]",
        D = RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g");
    T.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var N = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function q(e, t) {
        return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    T.escapeSelector = function(e) {
            return (e + "").replace(N, q)
        },
        function() {
            var t, r, o, u, l, f, p, h, g, y, m = a,
                x = T.expando,
                b = 0,
                w = 0,
                C = ee(),
                N = ee(),
                q = ee(),
                L = ee(),
                H = function(e, t) {
                    return e === t && (l = !0), 0
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "(?:\\\\[\\da-fA-F]{1,6}" + A + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
                M = "\\[" + A + "*(" + P + ")(?:" + A + "*([*^$|!~]?=)" + A + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + A + "*\\]",
                R = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                I = RegExp(A + "+", "g"),
                W = RegExp("^" + A + "*," + A + "*"),
                F = RegExp("^" + A + "*([>+~]|" + A + ")" + A + "*"),
                $ = RegExp(A + "|>"),
                B = new RegExp(R),
                _ = RegExp("^" + P + "$"),
                U = {
                    ID: RegExp("^#(" + P + ")"),
                    CLASS: RegExp("^\\.(" + P + ")"),
                    TAG: RegExp("^(" + P + "|[*])"),
                    ATTR: RegExp("^" + M),
                    PSEUDO: RegExp("^" + R),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + O + ")$", "i"),
                    needsContext: RegExp("^" + A + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + A + "*((?:-\\d)?\\d*)" + A + "*\\)|)(?=[^-]|$)", "i")
                },
                z = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                J = /[+~]/,
                G = RegExp("\\\\[\\da-fA-F]{1,6}" + A + "?|\\\\([^\\r\\n\\f])", "g"),
                Y = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                Q = function() {
                    ea()
                },
                K = ec(function(e) {
                    return !0 === e.disabled && S(e, "fieldset")
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                m.apply(n = i.call(v.childNodes), v.childNodes), n[v.childNodes.length].nodeType
            } catch (e) {
                m = {
                    apply: function(e, t) {
                        a.apply(e, i.call(t))
                    },
                    call: function(e) {
                        a.apply(e, i.call(arguments, 1))
                    }
                }
            }

            function Z(e, t, n, r) {
                var i, o, a, s, u, l, c, p = t && t.ownerDocument,
                    v = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return n;
                if (!r && (ea(t), t = t || f, h)) {
                    if (11 !== v && (u = V.exec(e))) {
                        if (i = u[1]) {
                            if (9 === v) {
                                if (!(a = t.getElementById(i))) return n;
                                if (a.id === i) return m.call(n, a), n
                            } else if (p && (a = p.getElementById(i)) && Z.contains(t, a) && a.id === i) return m.call(n, a), n
                        } else {
                            if (u[2]) return m.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = u[3]) && t.getElementsByClassName) return m.apply(n, t.getElementsByClassName(i)), n
                        }
                    }
                    if (!(L[e + " "] || g && g.test(e))) {
                        if (c = e, p = t, 1 === v && ($.test(e) || F.test(e))) {
                            for ((p = J.test(e) && eo(t.parentNode) || t) == t && d.scope || ((s = t.getAttribute("id")) ? s = T.escapeSelector(s) : t.setAttribute("id", s = x)), o = (l = eu(e)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + el(l[o]);
                            c = l.join(",")
                        }
                        try {
                            return m.apply(n, p.querySelectorAll(c)), n
                        } catch (t) {
                            L(e, !0)
                        } finally {
                            s === x && t.removeAttribute("id")
                        }
                    }
                }
                return eh(e.replace(D, "$1"), t, n, r)
            }

            function ee() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
            }

            function et(e) {
                return e[x] = !0, e
            }

            function en(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function er(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && K(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ei(e) {
                return et(function(t) {
                    return t = +t, et(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function eo(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function ea(e) {
                var t, n = e ? e.ownerDocument || e : v;
                return n != f && 9 === n.nodeType && n.documentElement && (p = (f = n).documentElement, h = !T.isXMLDoc(f), y = p.matches || p.webkitMatchesSelector || p.msMatchesSelector, p.msMatchesSelector && v != f && (t = f.defaultView) && t.top !== t && t.addEventListener("unload", Q), d.getById = en(function(e) {
                    return p.appendChild(e).id = T.expando, !f.getElementsByName || !f.getElementsByName(T.expando).length
                }), d.disconnectedMatch = en(function(e) {
                    return y.call(e, "*")
                }), d.scope = en(function() {
                    return f.querySelectorAll(":scope")
                }), d.cssHas = en(function() {
                    try {
                        return f.querySelector(":has(*,:jqfake)"), !1
                    } catch (e) {
                        return !0
                    }
                }), d.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(G, Y);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && h) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(G, Y);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && h) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                }, r.find.CLASS = function(e, t) {
                    if (void 0 !== t.getElementsByClassName && h) return t.getElementsByClassName(e)
                }, g = [], en(function(e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + x + "' href='' disabled='disabled'></a><select id='" + x + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + A + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll(":checked").length || g.push(":checked"), (t = f.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + A + "*name" + A + "*=" + A + "*(?:''|\"\")")
                }), d.cssHas || g.push(":has"), g = g.length && new RegExp(g.join("|")), H = function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === f || e.ownerDocument == v && Z.contains(v, e) ? -1 : t === f || t.ownerDocument == v && Z.contains(v, t) ? 1 : u ? s.call(u, e) - s.call(u, t) : 0 : 4 & n ? -1 : 1)
                }), f
            }
            for (t in Z.matches = function(e, t) {
                    return Z(e, null, null, t)
                }, Z.matchesSelector = function(e, t) {
                    if (ea(e), h && !L[t + " "] && (!g || !g.test(t))) try {
                        var n = y.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {
                        L(t, !0)
                    }
                    return 0 < Z(t, f, null, [e]).length
                }, Z.contains = function(e, t) {
                    return (e.ownerDocument || e) != f && ea(e), T.contains(e, t)
                }, Z.attr = function(e, t) {
                    (e.ownerDocument || e) != f && ea(e);
                    var n = r.attrHandle[t.toLowerCase()],
                        i = n && c.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !h) : void 0;
                    return void 0 !== i ? i : e.getAttribute(t)
                }, Z.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, T.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (l = !d.sortStable, u = !d.sortStable && i.call(e, 0), k.call(e, H), l) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) j.call(e, n[r], 1)
                    }
                    return u = null, e
                }, T.fn.uniqueSort = function() {
                    return this.pushStack(T.uniqueSort(i.apply(this)))
                }, (r = T.expr = {
                    cacheLength: 50,
                    createPseudo: et,
                    match: U,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(G, Y), e[3] = (e[3] || e[4] || e[5] || "").replace(G, Y), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = eu(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(G, Y).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return S(e, t)
                            }
                        },
                        CLASS: function(e) {
                            var t = C[e + " "];
                            return t || (t = RegExp("(^|" + A + ")" + e + "(" + A + "|$)"), C(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = Z.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(I, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, p, d, h = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    m = !1;
                                if (g) {
                                    if (o) {
                                        for (; h;) {
                                            for (f = t; f = f[h];)
                                                if (s ? S(f, v) : 1 === f.nodeType) return !1;
                                            d = h = "only" === e && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (m = (p = (l = (c = g[x] || (g[x] = {}))[e] || [])[0] === b && l[1]) && l[2], f = p && g.childNodes[p]; f = ++p && f && f[h] || (m = p = 0) || d.pop();)
                                            if (1 === f.nodeType && ++m && f === t) {
                                                c[e] = [b, p, m];
                                                break
                                            }
                                    } else if (y && (m = p = (l = (c = t[x] || (t[x] = {}))[e] || [])[0] === b && l[1]), !1 === m)
                                        for (;
                                            (f = ++p && f && f[h] || (m = p = 0) || d.pop()) && (!((s ? S(f, v) : 1 === f.nodeType) && ++m) || (y && ((c = f[x] || (f[x] = {}))[e] = [b, m]), f !== t)););
                                    return (m -= i) === r || m % r == 0 && 0 <= m / r
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                            return i[x] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? et(function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = s.call(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: et(function(e) {
                            var t = [],
                                n = [],
                                r = ed(e.replace(D, "$1"));
                            return r[x] ? et(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: et(function(e) {
                            return function(t) {
                                return 0 < Z(e, t).length
                            }
                        }),
                        contains: et(function(e) {
                            return e = e.replace(G, Y),
                                function(t) {
                                    return -1 < (t.textContent || T.text(t)).indexOf(e)
                                }
                        }),
                        lang: et(function(e) {
                            return _.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(G, Y).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType) return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === p
                        },
                        focus: function(e) {
                            return e === function() {
                                try {
                                    return f.activeElement
                                } catch (e) {}
                            }() && f.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: er(!1),
                        disabled: er(!0),
                        checked: function(e) {
                            return S(e, "input") && !!e.checked || S(e, "option") && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return X.test(e.nodeName)
                        },
                        input: function(e) {
                            return z.test(e.nodeName)
                        },
                        button: function(e) {
                            return S(e, "input") && "button" === e.type || S(e, "button")
                        },
                        text: function(e) {
                            var t;
                            return S(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ei(function() {
                            return [0]
                        }),
                        last: ei(function(e, t) {
                            return [t - 1]
                        }),
                        eq: ei(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ei(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ei(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ei(function(e, t, n) {
                            var r;
                            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: ei(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = function(e) {
                return function(t) {
                    return S(t, "input") && t.type === e
                }
            }(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = function(e) {
                return function(t) {
                    return (S(t, "input") || S(t, "button")) && t.type === e
                }
            }(t);

            function es() {}

            function eu(e, t) {
                var n, i, o, a, s, u, l, c = N[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s;) {
                    for (a in (!n || (i = W.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = F.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(D, " ")
                        }), s = s.slice(n.length)), r.filter)(i = U[a].exec(s)) && (!l[a] || (i = l[a](i))) && (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? Z.error(e) : N(e, u).slice(0)
            }

            function el(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ec(e, t, n) {
                var r = t.dir,
                    i = t.next,
                    o = i || r,
                    a = n && "parentNode" === o,
                    s = w++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, i);
                    return !1
                } : function(t, n, u) {
                    var l, c, f = [b, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) {
                                if (c = t[x] || (t[x] = {}), i && S(t, i)) t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === b && l[1] === s) return f[2] = l[2];
                                    if ((c[o] = f)[2] = e(t, n, u)) return !0
                                }
                            } return !1
                }
            }

            function ef(e) {
                return 1 < e.length ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function ep(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function ed(e, t) {
                var n, i, a, u, l = [],
                    c = [],
                    p = q[e + " "];
                if (!p) {
                    for (t || (t = eu(e)), n = t.length; n--;)(p = function e(t) {
                        for (var n, i, a, u = t.length, l = r.relative[t[0].type], c = l || r.relative[" "], f = l ? 1 : 0, p = ec(function(e) {
                                return e === n
                            }, c, !0), d = ec(function(e) {
                                return -1 < s.call(n, e)
                            }, c, !0), h = [function(e, t, r) {
                                var i = !l && (r || t != o) || ((n = t).nodeType ? p(e, t, r) : d(e, t, r));
                                return n = null, i
                            }]; f < u; f++)
                            if (i = r.relative[t[f].type]) h = [ec(ef(h), i)];
                            else {
                                if ((i = r.filter[t[f].type].apply(null, t[f].matches))[x]) {
                                    for (a = ++f; a < u && !r.relative[t[a].type]; a++);
                                    return function e(t, n, r, i, o, a) {
                                        return i && !i[x] && (i = e(i)), o && !o[x] && (o = e(o, a)), et(function(e, a, u, l) {
                                            var c, f, p, d, h = [],
                                                g = [],
                                                v = a.length,
                                                y = e || function(e, t, n) {
                                                    for (var r = 0, i = t.length; r < i; r++) Z(e, t[r], n);
                                                    return n
                                                }(n || "*", u.nodeType ? [u] : u, []),
                                                x = t && (e || !n) ? ep(y, h, t, u, l) : y;
                                            if (r ? r(x, d = o || (e ? t : v || i) ? [] : a, u, l) : d = x, i)
                                                for (c = ep(d, g), i(c, [], u, l), f = c.length; f--;)(p = c[f]) && (d[g[f]] = !(x[g[f]] = p));
                                            if (e) {
                                                if (o || t) {
                                                    if (o) {
                                                        for (c = [], f = d.length; f--;)(p = d[f]) && c.push(x[f] = p);
                                                        o(null, d = [], c, l)
                                                    }
                                                    for (f = d.length; f--;)(p = d[f]) && -1 < (c = o ? s.call(e, p) : h[f]) && (e[c] = !(a[c] = p))
                                                }
                                            } else d = ep(d === a ? d.splice(v, d.length) : d), o ? o(null, a, d, l) : m.apply(a, d)
                                        })
                                    }(1 < f && ef(h), 1 < f && el(t.slice(0, f - 1).concat({
                                        value: " " === t[f - 2].type ? "*" : ""
                                    })).replace(D, "$1"), i, f < a && e(t.slice(f, a)), a < u && e(t = t.slice(a)), a < u && el(t))
                                }
                                h.push(i)
                            } return ef(h)
                    }(t[n]))[x] ? l.push(p) : c.push(p);
                    (p = q(e, (i = 0 < l.length, a = 0 < c.length, u = function(e, t, n, s, u) {
                        var p, d, g, v = 0,
                            y = "0",
                            x = e && [],
                            w = [],
                            C = o,
                            S = e || a && r.find.TAG("*", u),
                            k = b += null == C ? 1 : Math.random() || .1,
                            j = S.length;
                        for (u && (o = t == f || t || u); y !== j && null != (p = S[y]); y++) {
                            if (a && p) {
                                for (d = 0, t || p.ownerDocument == f || (ea(p), n = !h); g = c[d++];)
                                    if (g(p, t || f, n)) {
                                        m.call(s, p);
                                        break
                                    } u && (b = k)
                            }
                            i && ((p = !g && p) && v--, e && x.push(p))
                        }
                        if (v += y, i && y !== v) {
                            for (d = 0; g = l[d++];) g(x, w, t, n);
                            if (e) {
                                if (0 < v)
                                    for (; y--;) x[y] || w[y] || (w[y] = E.call(s));
                                w = ep(w)
                            }
                            m.apply(s, w), u && !e && 0 < w.length && 1 < v + l.length && T.uniqueSort(s)
                        }
                        return u && (b = k, o = C), x
                    }, i ? et(u) : u))).selector = e
                }
                return p
            }

            function eh(e, t, n, i) {
                var o, a, s, u, l, c = "function" == typeof e && e,
                    f = !i && eu(e = c.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (2 < (a = f[0] = f[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && h && r.relative[a[1].type]) {
                        if (!(t = (r.find.ID(s.matches[0].replace(G, Y), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(a.shift().value.length)
                    }
                    for (o = U.needsContext.test(e) ? 0 : a.length; o-- && (s = a[o], !r.relative[u = s.type]);)
                        if ((l = r.find[u]) && (i = l(s.matches[0].replace(G, Y), J.test(a[0].type) && eo(t.parentNode) || t))) {
                            if (a.splice(o, 1), !(e = i.length && el(a))) return m.apply(n, i), n;
                            break
                        }
                }
                return (c || ed(e, f))(i, t, !h, n, !t || J.test(e) && eo(t.parentNode) || t), n
            }
            es.prototype = r.filters = r.pseudos, r.setFilters = new es, d.sortStable = x.split("").sort(H).join("") === x, ea(), d.sortDetached = en(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
            }), T.find = Z, T.expr[":"] = T.expr.pseudos, T.unique = T.uniqueSort, Z.compile = ed, Z.select = eh, Z.setDocument = ea, Z.tokenize = eu, Z.escape = T.escapeSelector, Z.getText = T.text, Z.isXML = T.isXMLDoc, Z.selectors = T.expr, Z.support = T.support, Z.uniqueSort = T.uniqueSort
        }();
    var L = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && T(e).is(n)) break;
                    r.push(e)
                } return r
        },
        H = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        O = T.expr.match.needsContext,
        P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function M(e, t, n) {
        return h(t) ? T.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? T.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? T.grep(e, function(e) {
            return -1 < s.call(t, e) !== n
        }) : T.filter(t, e, n)
    }
    T.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (T.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
            return 1 < r ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(M(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(M(this, e || [], !0))
        },
        is: function(e) {
            return !!M(this, "string" == typeof e && O.test(e) ? T(e) : e || [], !1).length
        }
    });
    var R, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || R, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), P.test(r[1]) && T.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
    }).prototype = T.fn, R = T(v);
    var W = /^(?:parents|prev(?:Until|All))/,
        F = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && T(e);
            if (!O.test(e)) {
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(T(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return L(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return L(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return L(e, "nextSibling")
        },
        prevAll: function(e) {
            return L(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return L(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return L(e, "previousSibling", n)
        },
        siblings: function(e) {
            return H((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return H(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
        }
    }, function(e, t) {
        T.fn[e] = function(n, r) {
            var i = T.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), 1 < this.length && (F[e] || T.uniqueSort(i), W.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var B = /[^\x20\t\r\n\f]+/g;

    function _(e) {
        return e
    }

    function U(e) {
        throw e
    }

    function z(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(e) {
        e = "string" == typeof e ? (t = e, n = {}, T.each(t.match(B) || [], function(e, t) {
            n[t] = !0
        }), n) : T.extend({}, e);
        var t, n, r, i, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || e.once, o = r = !0; u.length; l = -1)
                    for (i = u.shift(); ++l < s.length;) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && (l = s.length, i = !1);
                e.memory || (i = !1), r = !1, a && (s = i ? [] : "")
            },
            f = {
                add: function() {
                    return s && (i && !r && (l = s.length - 1, u.push(i)), function t(n) {
                        T.each(n, function(n, r) {
                            h(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), i && !r && c()), this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], i || r || (s = i = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, T.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return T.Deferred(function(t) {
                            T.each(n, function(n, r) {
                                var i = h(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw TypeError("Thenable self-resolution");
                                            h(l = e && ("object" == typeof e || "function" == typeof e) && e.then) ? i ? l.call(e, a(o, n, _, i), a(o, n, U, i)) : (o++, l.call(e, a(o, n, _, i), a(o, n, U, i), a(o, n, _, n.notifyWith))) : (r !== _ && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, c.error), o <= t + 1 && (r !== U && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (T.Deferred.getErrorHook ? c.error = T.Deferred.getErrorHook() : T.Deferred.getStackHook && (c.error = T.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return T.Deferred(function(e) {
                            n[0][3].add(a(0, e, h(i) ? i : _, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : _)), n[2][3].add(a(0, e, h(r) ? r : U))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, i) : i
                    }
                },
                o = {};
            return T.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = T.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = 1 < arguments.length ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (z(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
            for (; n--;) z(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && X.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, T.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var V = T.Deferred();

    function J() {
        v.removeEventListener("DOMContentLoaded", J), e.removeEventListener("load", J), T.ready()
    }
    T.fn.ready = function(e) {
        return V.then(e).catch(function(e) {
            T.readyException(e)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || V.resolveWith(v, [T])
        }
    }), T.ready.then = V.then, "complete" !== v.readyState && ("loading" === v.readyState || v.documentElement.doScroll) ? (v.addEventListener("DOMContentLoaded", J), e.addEventListener("load", J)) : e.setTimeout(T.ready);
    var G = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) G(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, h(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(T(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Y = /^-ms-/,
        Q = /-([a-z])/g;

    function K(e, t) {
        return t.toUpperCase()
    }

    function Z(e) {
        return e.replace(Y, "ms-").replace(Q, K)
    }
    var ee = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function et() {
        this.expando = T.expando + et.uid++
    }
    et.uid = 1, et.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, ee(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[Z(t)] = n;
            else
                for (r in t) i[Z(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Z(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (n = (t = Array.isArray(t) ? t.map(Z) : ((t = Z(t)) in r) ? [t] : t.match(B) || []).length; n--;) delete r[t[n]];
                (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var en = new et,
        er = new et,
        ei = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        eo = /[A-Z]/g;

    function ea(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) {
            if (r = "data-" + t.replace(eo, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : ei.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                er.set(e, t, n)
            } else n = void 0
        }
        return n
    }
    T.extend({
        hasData: function(e) {
            return er.hasData(e) || en.hasData(e)
        },
        data: function(e, t, n) {
            return er.access(e, t, n)
        },
        removeData: function(e, t) {
            er.remove(e, t)
        },
        _data: function(e, t, n) {
            return en.access(e, t, n)
        },
        _removeData: function(e, t) {
            en.remove(e, t)
        }
    }), T.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = er.get(o), 1 === o.nodeType && !en.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && ea(o, r = Z(r.slice(5)), i[r]);
                    en.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                er.set(this, e)
            }) : G(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = er.get(o, e)) ? n : void 0 !== (n = ea(o, e)) ? n : void 0;
                this.each(function() {
                    er.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                er.remove(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = en.get(e, t), n && (!r || Array.isArray(n) ? r = en.access(e, t, T.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = T._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                T.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return en.get(e, n) || en.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    en.remove(e, [t + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = T.queue(this, e, t);
                T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = T.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = en.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var es = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        eu = RegExp("^(?:([+-])=|)(" + es + ")([a-z%]*)$", "i"),
        el = ["Top", "Right", "Bottom", "Left"],
        ec = v.documentElement,
        ef = function(e) {
            return T.contains(e.ownerDocument, e)
        },
        ep = {
            composed: !0
        };
    ec.getRootNode && (ef = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(ep) === e.ownerDocument
    });
    var ed = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ef(e) && "none" === T.css(e, "display")
    };

    function eh(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return T.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (T.cssNumber[t] || "px" !== l && +u) && eu.exec(T.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) T.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, T.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var eg = {};

    function ev(e, t) {
        for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)(r = e[l]).style && (n = r.style.display, t ? ("none" === n && (u[l] = en.get(r, "display") || null, u[l] || (r.style.display = "")), "" === r.style.display && ed(r) && (u[l] = (s = o = i = void 0, o = r.ownerDocument, (s = eg[a = r.nodeName]) || (i = o.body.appendChild(o.createElement(a)), s = T.css(i, "display"), i.parentNode.removeChild(i), "none" === s && (s = "block"), eg[a] = s)))) : "none" !== n && (u[l] = "none", en.set(r, "display", n)));
        for (l = 0; l < c; l++) null != u[l] && (e[l].style.display = u[l]);
        return e
    }
    T.fn.extend({
        show: function() {
            return ev(this, !0)
        },
        hide: function() {
            return ev(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ed(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var ey, em, ex = /^(?:checkbox|radio)$/i,
        eb = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ew = /^$|^module$|\/(?:java|ecma)script/i;
    ey = v.createDocumentFragment().appendChild(v.createElement("div")), (em = v.createElement("input")).setAttribute("type", "radio"), em.setAttribute("checked", "checked"), em.setAttribute("name", "t"), ey.appendChild(em), d.checkClone = ey.cloneNode(!0).cloneNode(!0).lastChild.checked, ey.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!ey.cloneNode(!0).lastChild.defaultValue, ey.innerHTML = "<option></option>", d.option = !!ey.lastChild;
    var eT = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function eC(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? T.merge([e], n) : n
    }

    function eS(e, t) {
        for (var n = 0, r = e.length; n < r; n++) en.set(e[n], "globalEval", !t || en.get(t[n], "globalEval"))
    }
    eT.tbody = eT.tfoot = eT.colgroup = eT.caption = eT.thead, eT.th = eT.td, d.option || (eT.optgroup = eT.option = [1, "<select multiple='multiple'>", "</select>"]);
    var eE = /<|&#?\w+;/;

    function ek(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o) {
                if ("object" === x(o)) T.merge(f, o.nodeType ? [o] : o);
                else if (eE.test(o)) {
                    for (a = a || c.appendChild(t.createElement("div")), s = eT[(eb.exec(o) || ["", ""])[1].toLowerCase()] || eT._default, a.innerHTML = s[1] + T.htmlPrefilter(o) + s[2], l = s[0]; l--;) a = a.lastChild;
                    T.merge(f, a.childNodes), (a = c.firstChild).textContent = ""
                } else f.push(t.createTextNode(o))
            } for (c.textContent = "", p = 0; o = f[p++];)
            if (r && -1 < T.inArray(o, r)) i && i.push(o);
            else if (u = ef(o), a = eC(c.appendChild(o), "script"), u && eS(a), n)
            for (l = 0; o = a[l++];) ew.test(o.type || "") && n.push(o);
        return c
    }
    var ej = /^([^.]*)(?:\.(.+)|)/;

    function eA() {
        return !0
    }

    function eD() {
        return !1
    }

    function eN(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) eN(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = eD;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return T().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, i, r, n)
        })
    }

    function eq(e, t, n) {
        n ? (en.set(e, t, !1), T.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, r = en.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r)(T.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = i.call(arguments), en.set(this, t, r), this[t](), n = en.get(this, t), en.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                } else r && (en.set(this, t, T.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = eA)
            }
        })) : void 0 === en.get(e, t) && T.event.add(e, t, eA)
    }
    T.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = en.get(e);
            if (ee(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(ec, i), n.guid || (n.guid = T.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                        return T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(B) || [""]).length; l--;) d = g = (s = ej.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = T.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = T.event.special[d] || {}, c = T.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && T.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), T.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = en.hasData(e) && en.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(B) || [""]).length; l--;)
                    if (d = g = (s = ej.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = T.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || T.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) T.event.remove(e, d + t[l], n, r, !0);
                T.isEmptyObject(u) && en.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = Array(arguments.length),
                u = T.event.fix(e),
                l = (en.get(this, "events") || Object.create(null))[u.type] || [],
                c = T.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = T.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) {
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < T(i, this).index(l) : T.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return ex.test(t.type) && t.click && S(t, "input") && eq(t, "click", !0), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return ex.test(t.type) && t.click && S(t, "input") && eq(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return ex.test(t.type) && t.click && S(t, "input") && en.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? eA : eD, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: eD,
        isPropagationStopped: eD,
        isImmediatePropagationStopped: eD,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = eA, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = eA, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = eA, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            if (v.documentMode) {
                var n = en.get(this, "handle"),
                    r = T.event.fix(e);
                r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r)
            } else T.event.simulate(t, e.target, T.event.fix(e))
        }
        T.event.special[e] = {
            setup: function() {
                var r;
                if (eq(this, e, !0), !v.documentMode) return !1;
                (r = en.get(this, t)) || this.addEventListener(t, n), en.set(this, t, (r || 0) + 1)
            },
            trigger: function() {
                return eq(this, e), !0
            },
            teardown: function() {
                var e;
                if (!v.documentMode) return !1;
                (e = en.get(this, t) - 1) ? en.set(this, t, e): (this.removeEventListener(t, n), en.remove(this, t))
            },
            _default: function(t) {
                return en.get(t.target, e)
            },
            delegateType: t
        }, T.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = v.documentMode ? this : r,
                    o = en.get(i, t);
                o || (v.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), en.set(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = v.documentMode ? this : r,
                    o = en.get(i, t) - 1;
                o ? en.set(i, t, o) : (v.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), en.remove(i, t))
            }
        }
    }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        T.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || T.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, r) {
            return eN(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return eN(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = eD), this.each(function() {
                T.event.remove(this, e, n, t)
            })
        }
    });
    var eL = /<script|<style|<link/i,
        eH = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eO = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function eP(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function eM(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function eR(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function eI(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (en.hasData(e) && (s = en.get(e).events))
                for (i in en.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) T.event.add(t, i, s[i][n]);
            er.hasData(e) && (o = er.access(e), a = T.extend({}, o), er.set(t, a))
        }
    }

    function eW(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0,
            p = e.length,
            g = p - 1,
            v = t[0],
            y = h(v);
        if (y || 1 < p && "string" == typeof v && !d.checkClone && eH.test(v)) return e.each(function(i) {
            var o = e.eq(i);
            y && (t[0] = v.call(this, i, o.html())), eW(o, t, n, r)
        });
        if (p && (a = (i = ek(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = T.map(eC(i, "script"), eM)).length; f < p; f++) l = i, f !== g && (l = T.clone(l, !0, !0), u && T.merge(s, eC(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, T.map(s, eR), f = 0; f < u; f++) l = s[f], ew.test(l.type || "") && !en.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : m(l.textContent.replace(eO, ""), l, c))
        }
        return e
    }

    function eF(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(eC(r)), r.parentNode && (n && ef(r) && eS(eC(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ef(e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (a = eC(c), r = 0, i = (o = eC(e)).length; r < i; r++) s = o[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && ex.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) {
                if (n)
                    for (o = o || eC(e), a = a || eC(c), r = 0, i = o.length; r < i; r++) eI(o[r], a[r]);
                else eI(e, c)
            }
            return 0 < (a = eC(c, "script")).length && eS(a, !f && eC(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ee(n)) {
                    if (t = n[en.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                        n[en.expando] = void 0
                    }
                    n[er.expando] && (n[er.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(e) {
            return eF(this, e, !0)
        },
        remove: function(e) {
            return eF(this, e)
        },
        text: function(e) {
            return G(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return eW(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || eP(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return eW(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eP(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return eW(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return eW(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(eC(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return G(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !eL.test(e) && !eT[(eb.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(eC(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return eW(this, arguments, function(t) {
                var n = this.parentNode;
                0 > T.inArray(this, e) && (T.cleanData(eC(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        T.fn[e] = function(e) {
            for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), T(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var e$ = RegExp("^(" + es + ")(?!px)[a-z%]+$", "i"),
        eB = /^--/,
        e_ = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        eU = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        ez = RegExp(el.join("|"), "i");

    function eX(e, t, n) {
        var r, i, o, a, s = eB.test(t),
            u = e.style;
        return (n = n || e_(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(D, "$1") || void 0), "" !== a || ef(e) || (a = T.style(e, t)), !d.pixelBoxStyles() && e$.test(a) && ez.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function eV(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ec.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ec.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = v.createElement("div"),
            c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(d, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = v.createElement("table"), n = v.createElement("tr"), r = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "box-sizing:content-box;border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", ec.appendChild(t).appendChild(n).appendChild(r), s = parseInt((i = e.getComputedStyle(n)).height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, ec.removeChild(t)), s
            }
        }))
    }();
    var eJ = ["Webkit", "Moz", "ms"],
        eG = v.createElement("div").style,
        eY = {};

    function eQ(e) {
        return T.cssProps[e] || eY[e] || (e in eG ? e : eY[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = eJ.length; n--;)
                if ((e = eJ[n] + t) in eG) return e
        }(e) || e)
    }
    var eK = /^(none|table(?!-c[ea]).+)/,
        eZ = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        e0 = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function e1(e, t, n) {
        var r = eu.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function e2(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += T.css(e, n + el[a], !0, i)), r ? ("content" === n && (u -= T.css(e, "padding" + el[a], !0, i)), "margin" !== n && (u -= T.css(e, "border" + el[a] + "Width", !0, i))) : (u += T.css(e, "padding" + el[a], !0, i), "padding" !== n ? u += T.css(e, "border" + el[a] + "Width", !0, i) : s += T.css(e, "border" + el[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
    }

    function e3(e, t, n) {
        var r = e_(e),
            i = (!d.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
            o = i,
            a = eX(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (e$.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!d.boxSizingReliable() && i || !d.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + e2(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function e4(e, t, n, r, i) {
        return new e4.prototype.init(e, t, n, r, i)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = eX(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Z(t),
                    u = eB.test(t),
                    l = e.style;
                if (u || (t = eQ(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = eu.exec(n)) && i[1] && (n = eh(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (T.cssNumber[s] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = Z(t);
            return eB.test(t) || (t = eQ(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = eX(e, t, r)), "normal" === i && t in e0 && (i = e0[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), T.each(["height", "width"], function(e, t) {
        T.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !eK.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? e3(e, t, r) : eU(e, eZ, function() {
                    return e3(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = e_(e),
                    a = !d.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                    u = r ? e2(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - e2(e, t, "border", !1, o) - .5)), u && (i = eu.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), e1(0, n, u)
            }
        }
    }), T.cssHooks.marginLeft = eV(d.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(eX(e, "marginLeft")) || e.getBoundingClientRect().left - eU(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        T.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + el[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (T.cssHooks[e + t].set = e1)
    }), T.fn.extend({
        css: function(e, t) {
            return G(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = e_(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((T.Tween = e4).prototype = {
        constructor: e4,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = e4.propHooks[this.prop];
            return e && e.get ? e.get(this) : e4.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = e4.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : e4.propHooks._default.set(this), this
        }
    }).init.prototype = e4.prototype, (e4.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 === e.elem.nodeType && (T.cssHooks[e.prop] || null != e.elem.style[eQ(e.prop)]) ? T.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = e4.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = e4.prototype.init, T.fx.step = {};
    var e5, e6, e9, e8, e7 = /^(?:toggle|show|hide)$/,
        te = /queueHooks$/;

    function tt() {
        return e.setTimeout(function() {
            e5 = void 0
        }), e5 = Date.now()
    }

    function tn(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = el[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function tr(e, t, n) {
        for (var r, i = (ti.tweeners[t] || []).concat(ti.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ti(e, t, n) {
        var r, i, o = 0,
            a = ti.prefilters.length,
            s = T.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = e5 || tt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: e5 || tt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = Z(n)], Array.isArray(o = e[n]) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && ("expand" in a))
                        for (n in o = a.expand(o), delete e[r], o)(n in e) || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = ti.prefilters[o].call(l, e, c, l.opts)) return h(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return T.map(c, tr, l), h(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    T.Animation = T.extend(ti, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return eh(n.elem, e, eu.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(B);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ti.tweeners[n] = ti.tweeners[n] || [], ti.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ed(e),
                v = en.get(e, "fxshow");
            for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], e7.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || T.style(e, r)
                } if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = en.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (ev([e], !0), l = e.style.display || l, c = T.css(e, "display"), ev([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (l = "none" === (c = h.display) ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = en.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && ev([e], !0), p.done(function() {
                    for (r in g || ev([e]), en.remove(e, "fxshow"), d) T.style(e, r, d[r])
                })), u = tr(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ti.prefilters.unshift(e) : ti.prefilters.push(e)
        }
    }), T.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            h(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
        }, r
    }, T.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ed).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = T.isEmptyObject(e),
                o = T.speed(t, n, r),
                a = function() {
                    var t = ti(this, T.extend({}, e), o);
                    (i || en.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = T.timers,
                    a = en.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && te.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || T.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = en.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = T.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(e, t) {
        var n = T.fn[t];
        T.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(tn(t, !0), e, r, i)
        }
    }), T.each({
        slideDown: tn("show"),
        slideUp: tn("hide"),
        slideToggle: tn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        T.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), T.timers = [], T.fx.tick = function() {
        var e, t = 0,
            n = T.timers;
        for (e5 = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), e5 = void 0
    }, T.fx.timer = function(e) {
        T.timers.push(e), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function() {
        e6 || (e6 = !0, function t() {
            e6 && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(t) : e.setTimeout(t, T.fx.interval), T.fx.tick())
        }())
    }, T.fx.stop = function() {
        e6 = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(t, n) {
        return t = T.fx && T.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, e9 = v.createElement("input"), e8 = v.createElement("select").appendChild(v.createElement("option")), e9.type = "checkbox", d.checkOn = "" !== e9.value, d.optSelected = e8.selected, (e9 = v.createElement("input")).value = "t", e9.type = "radio", d.radioValue = "t" === e9.value;
    var to, ta = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return G(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? to : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(B);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), to = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ta[t] || T.find.attr;
        ta[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ta[a], ta[a] = i, i = null != n(e, t, r) ? a : null, ta[a] = o), i
        }
    });
    var ts = /^(?:input|select|textarea|button)$/i,
        tu = /^(?:a|area)$/i;

    function tl(e) {
        return (e.match(B) || []).join(" ")
    }

    function tc(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function tf(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return G(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }), T.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ts.test(e.nodeName) || tu.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), d.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a;
            return h(e) ? this.each(function(t) {
                T(this).addClass(e.call(this, t, tc(this)))
            }) : (t = tf(e)).length ? this.each(function() {
                if (r = tc(this), n = 1 === this.nodeType && " " + tl(r) + " ") {
                    for (o = 0; o < t.length; o++) i = t[o], 0 > n.indexOf(" " + i + " ") && (n += i + " ");
                    r !== (a = tl(n)) && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a;
            return h(e) ? this.each(function(t) {
                T(this).removeClass(e.call(this, t, tc(this)))
            }) : arguments.length ? (t = tf(e)).length ? this.each(function() {
                if (r = tc(this), n = 1 === this.nodeType && " " + tl(r) + " ") {
                    for (o = 0; o < t.length; o++)
                        for (i = t[o]; - 1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                    r !== (a = tl(n)) && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(e, t) {
            var n, r, i, o, a = typeof e,
                s = "string" === a || Array.isArray(e);
            return h(e) ? this.each(function(n) {
                T(this).toggleClass(e.call(this, n, tc(this), t), t)
            }) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = tf(e), this.each(function() {
                if (s)
                    for (o = T(this), i = 0; i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== e && "boolean" !== a || ((r = tc(this)) && en.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : en.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + tl(tc(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var tp = /\r/g;
    T.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(tp, "") : null == n ? "" : n : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : tl(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < T.inArray(T.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        }, d.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var td = e.location,
        th = {
            guid: Date.now()
        },
        tg = /\?/;
    T.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml")
        } catch (e) {}
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || T.error("Invalid XML: " + (r ? T.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var tv = /^(?:focusinfocus|focusoutblur)$/,
        ty = function(e) {
            e.stopPropagation()
        };
    T.extend(T.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, f, p, d, y = [r || v],
                m = c.call(t, "type") ? t.type : t,
                x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || v, 3 !== r.nodeType && 8 !== r.nodeType && !tv.test(m + T.event.triggered) && (-1 < m.indexOf(".") && (m = (x = m.split(".")).shift(), x.sort()), l = 0 > m.indexOf(":") && "on" + m, (t = t[T.expando] ? t : new T.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : T.makeArray(n, [t]), p = T.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !g(r)) {
                    for (u = p.delegateType || m, tv.test(u + m) || (a = a.parentNode); a; a = a.parentNode) y.push(a), s = a;
                    s === (r.ownerDocument || v) && y.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = y[o++]) && !t.isPropagationStopped();) d = a, t.type = 1 < o ? u : p.bindType || m, (f = (en.get(a, "events") || Object.create(null))[t.type] && en.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && ee(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = m, i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !ee(r) || l && h(r[m]) && !g(r) && ((s = r[l]) && (r[l] = null), T.event.triggered = m, t.isPropagationStopped() && d.addEventListener(m, ty), r[m](), t.isPropagationStopped() && d.removeEventListener(m, ty), T.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(r, null, t)
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    });
    var tm = /\[\]$/,
        tx = /\r?\n/g,
        tb = /^(?:submit|button|image|reset|file)$/i,
        tw = /^(?:input|select|textarea|keygen)/i;
    T.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e)(function e(t, n, r, i) {
                var o;
                if (Array.isArray(n)) T.each(n, function(n, o) {
                    r || tm.test(t) ? i(t, o) : e(t + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, r, i)
                });
                else if (r || "object" !== x(n)) i(t, n);
                else
                    for (o in n) e(t + "[" + o + "]", n[o], r, i)
            })(n, e[n], t, i);
        return r.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && tw.test(this.nodeName) && !tb.test(e) && (this.checked || !ex.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(tx, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(tx, "\r\n")
                }
            }).get()
        }
    });
    var tT = /%20/g,
        tC = /#.*$/,
        tS = /([?&])_=[^&]*/,
        tE = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        tk = /^(?:GET|HEAD)$/,
        tj = /^\/\//,
        tA = {},
        tD = {},
        tN = "*/".concat("*"),
        tq = v.createElement("a");

    function tL(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(B) || [];
            if (h(n))
                for (; r = o[i++];) "+" === r[0] ? (e[r = r.slice(1) || "*"] = e[r] || []).unshift(n) : (e[r] = e[r] || []).push(n)
        }
    }

    function tH(e, t, n, r) {
        var i = {},
            o = e === tD;

        function a(s) {
            var u;
            return i[s] = !0, T.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function tO(e, t) {
        var n, r, i = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e
    }
    tq.href = td.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: td.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(td.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tN,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? tO(tO(e, T.ajaxSettings), t) : tO(T.ajaxSettings, e)
        },
        ajaxPrefilter: tL(tA),
        ajaxTransport: tL(tD),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, o, a, s, u, l, c, f, p, d = T.ajaxSetup({}, n),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                y = T.Deferred(),
                m = T.Callbacks("once memory"),
                x = d.statusCode || {},
                b = {},
                w = {},
                C = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = tE.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (b[e = w[e.toLowerCase()] = w[e.toLowerCase()] || e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (l) S.always(e[S.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]]
                        }
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return r && r.abort(t), E(0, t), this
                    }
                };
            if (y.promise(S), d.url = ((t || d.url || td.href) + "").replace(tj, td.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(B) || [""], null == d.crossDomain) {
                u = v.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = tq.protocol + "//" + tq.host != u.protocol + "//" + u.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)), tH(tA, d, n, S), l) return S;
            for (f in (c = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !tk.test(d.type), i = d.url.replace(tC, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(tT, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (tg.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(tS, "$1"), p = (tg.test(i) ? "&" : "?") + "_=" + th.guid++ + p), d.url = i + p), d.ifModified && (T.lastModified[i] && S.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && S.setRequestHeader("If-None-Match", T.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tN + "; q=0.01" : "") : d.accepts["*"]), d.headers) S.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, S, d) || l)) return S.abort();
            if (C = "abort", m.add(d.complete), S.done(d.success), S.fail(d.error), r = tH(tD, d, n, S)) {
                if (S.readyState = 1, c && g.trigger("ajaxSend", [S, d]), l) return S;
                d.async && 0 < d.timeout && (s = e.setTimeout(function() {
                    S.abort("timeout")
                }, d.timeout));
                try {
                    l = !1, r.send(b, E)
                } catch (e) {
                    if (l) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(t, n, a, u) {
                var f, p, v, b, w, C = n;
                l || (l = !0, s && e.clearTimeout(s), r = void 0, o = u || "", S.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, a && (b = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) {
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(d, S, a)), !f && -1 < T.inArray("script", d.dataTypes) && 0 > T.inArray("json", d.dataTypes) && (d.converters["text script"] = function() {}), b = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) {
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o])) {
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                }
                                if (!0 !== a) {
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                                }
                            }
                        } return {
                        state: "success",
                        data: t
                    }
                }(d, b, S, f), f ? (d.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), (w = S.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, f = !(v = b.error))) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", f ? y.resolveWith(h, [p, C, S]) : y.rejectWith(h, [S, C, v]), S.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, d, f ? p : v]), m.fireWith(h, [S, C]), c && (g.trigger("ajaxComplete", [S, d]), --T.active || T.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function(e, t) {
        T[t] = function(e, n, r, i) {
            return h(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, T.isPlainObject(e) && e))
        }
    }), T.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), T._evalUrl = function(e, t, n) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                T.globalEval(e, t, n)
            }
        })
    }, T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each(function(t) {
                T(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = T(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h(e);
            return this.each(function(n) {
                T(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var tP = {
            0: 200,
            1223: 204
        },
        tM = T.ajaxSettings.xhr();
    d.cors = !!tM && "withCredentials" in tM, d.ajax = tM = !!tM, T.ajaxTransport(function(t) {
        var n, r;
        if (d.cors || tM && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(tP[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), T.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = T("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), v.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var tR, tI = [],
        tW = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tI.pop() || T.expando + "_" + th.guid++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (tW.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tW.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tW, "$1" + i) : !1 !== t.jsonp && (t.url += (tg.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || T.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? T(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tI.push(i)), a && h(o) && o(a[0]), a = o = void 0
        }), "script"
    }), d.createHTMLDocument = ((tR = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tR.childNodes.length), T.parseHTML = function(e, t, n) {
        var r, i, o;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (d.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), o = !n && [], (i = P.exec(e)) ? [t.createElement(i[1])] : (i = ek([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)))
    }, T.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = tl(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && T.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, T.expr.pseudos.animated = function(e) {
        return T.grep(T.timers, function(t) {
            return e === t.elem
        }).length
    }, T.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = T.css(e, "position"),
                c = T(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = T.css(e, "top"), u = T.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), h(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, T.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                T.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - T.css(r, "marginTop", !0),
                    left: t.left - i.left - T.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || ec
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        T.fn[e] = function(r) {
            return G(this, function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), T.each(["top", "left"], function(e, t) {
        T.cssHooks[t] = eV(d.pixelPosition, function(e, n) {
            if (n) return n = eX(e, t), e$.test(n) ? T(e).position()[t] + "px" : n
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        T.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            T.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return G(this, function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, s) : T.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        T.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var tF = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    T.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, o
    }, T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = S, T.isFunction = h, T.isWindow = g, T.camelCase = Z, T.type = x, T.now = Date.now, T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, T.trim = function(e) {
        return null == e ? "" : (e + "").replace(tF, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var t$ = e.jQuery,
        tB = e.$;
    return T.noConflict = function(t) {
        return e.$ === T && (e.$ = tB), t && e.jQuery === T && (e.jQuery = t$), T
    }, void 0 === t && (e.jQuery = e.$ = T), T
}, "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? n(t, !0) : function(e) {
    if (!e.document) throw Error("jQuery requires a window with a document");
    return n(e)
} : n(t);

const a = document.querySelector("input");
function reseting() {
 a.value = "";
  document.getElementById('sdasd').click();
  
}
async function s(e) {
    let t = new FormData,
        n = e.target.files[0];
    t.append("file", e.target.files[0]);
    let r = await fetch("https://codefoxy-server.hf.space/upload?logs=container", {
            method: "POST",
            body: t
        }),
        i = await r.text();
    o.push(' Uploaded a file: <a href="https://codefoxy-server.hf.space' + i + '" download>' + n.name + "</a>")
} //# sourceMappingURL=index.081f1dd5.js.map
a.style.opacity = 0, a.addEventListener("change", s);
//# sourceMappingURL=index.081f1dd5.js.map
