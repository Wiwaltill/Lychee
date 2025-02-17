function _taggedTemplateLiteral(e, t) {
    return Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}
function gup(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = "[\\?&]" + e + "=([^&#]*)",
        n = new RegExp(t),
        r = n.exec(window.location.href);
    return null === r ? "" : r[1]
}
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = me.type(e);
        return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function o(e, t, n) {
        return me.isFunction(t) ? me.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? me.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? me.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : ke.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function s(e) {
        var t = {};
        return me.each(e.match($e) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function l(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function c(e, t, n, r) {
        var i;
        try {
            e && me.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && me.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function d() {
        ne.removeEventListener("DOMContentLoaded", d),
        e.removeEventListener("load", d),
        me.ready()
    }
    function f() {
        this.expando = me.expando + f.uid++
    }
    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
    }
    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = p(n)
                } catch (e) {}
                Pe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function m(e, t, n, r) {
        var i,
            o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return me.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            c = (me.cssNumber[t] || "px" !== u && +l) && Ie.exec(me.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do {
                o = o || ".5",
                c /= o,
                me.style(e, t, c + u)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    function g(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = Ue[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = me.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ue[r] = i, i)
    }
    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            r = e[o],
            r.style && (n = r.style.display, t ? ("none" === n && (i[o] = qe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && We(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", qe.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function b(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? me.merge([e], n) : n
    }
    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
    }
    function x(e, t, n, r, i) {
        for (var o, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === me.type(o))
                    me.merge(f, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
                    for (a = a || d.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), l = Ve[s] || Ve._default, a.innerHTML = l[1] + me.htmlPrefilter(o) + l[2], c = l[0]; c--;)
                        a = a.lastChild;
                    me.merge(f, a.childNodes),
                    a = d.firstChild,
                    a.textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];)
            if (r && me.inArray(o, r) > -1)
                i && i.push(o);
            else if (u = me.contains(o.ownerDocument, o), a = b(d.appendChild(o), "script"), u && y(a), n)
                for (c = 0; o = a[c++];)
                    Ye.test(o.type || "") && n.push(o);
        return d
    }
    function w() {
        return !0
    }
    function T() {
        return !1
    }
    function C() {
        try {
            return ne.activeElement
        } catch (e) {}
    }
    function _(e, t, n, r, i, o) {
        var a,
            s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t)
                _(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
            i = T;
        else if (!i)
            return e;
        return 1 === o && (a = i, i = function(e) {
            return me().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = me.guid++)), e.each(function() {
            me.event.add(this, t, i, r, n)
        })
    }
    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e
    }
    function j(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function E(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function D(e, t) {
        var n,
            r,
            i,
            o,
            a,
            s,
            l,
            u;
        if (1 === t.nodeType) {
            if (qe.hasData(e) && (o = qe.access(e), a = qe.set(t, o), u = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++)
                        me.event.add(t, i, u[i][n])
            }
            Pe.hasData(e) && (s = Pe.access(e), l = me.extend({}, s), Pe.set(t, l))
        }
    }
    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function $(e, t, r, i) {
        t = oe.apply([], t);
        var o,
            a,
            s,
            l,
            u,
            c,
            d = 0,
            f = e.length,
            p = f - 1,
            h = t[0],
            m = me.isFunction(h);
        if (m || f > 1 && "string" == typeof h && !pe.checkClone && nt.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                m && (t[0] = h.call(this, n, o.html())),
                $(o, t, r, i)
            });
        if (f && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = me.map(b(o, "script"), j), l = s.length; d < f; d++)
                u = o,
                d !== p && (u = me.clone(u, !0, !0), l && me.merge(s, b(u, "script"))),
                r.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument, me.map(s, E), d = 0; d < l; d++)
                    u = s[d],
                    Ye.test(u.type || "") && !qe.access(u, "globalEval") && me.contains(c, u) && (u.src ? me._evalUrl && me._evalUrl(u.src) : n(u.textContent.replace(it, ""), c))
        }
        return e
    }
    function A(e, t, n) {
        for (var r, i = t ? me.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || me.cleanData(b(r)),
            r.parentNode && (n && me.contains(r.ownerDocument, r) && y(b(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    function N(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || me.contains(e.ownerDocument, e) || (a = me.style(e, t)), !pe.pixelMarginRight() && at.test(a) && ot.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    function L(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function O(e) {
        if (e in pt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if ((e = ft[n] + t) in pt)
                return e
    }
    function q(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = O(e) || e), t
    }
    function P(e, t, n) {
        var r = Ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function H(e, t, n, r, i) {
        var o,
            a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += me.css(e, n + Re[o], !0, i)),
            r ? ("content" === n && (a -= me.css(e, "padding" + Re[o], !0, i)), "margin" !== n && (a -= me.css(e, "border" + Re[o] + "Width", !0, i))) : (a += me.css(e, "padding" + Re[o], !0, i), "padding" !== n && (a += me.css(e, "border" + Re[o] + "Width", !0, i)));
        return a
    }
    function M(e, t, n) {
        var r,
            i = st(e),
            o = N(e, t, i),
            a = "border-box" === me.css(e, "boxSizing", !1, i);
        return at.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + H(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }
    function F(e, t, n, r, i) {
        return new F.prototype.init(e, t, n, r, i)
    }
    function I() {
        mt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(I) : e.setTimeout(I, me.fx.interval), me.fx.tick())
    }
    function R() {
        return e.setTimeout(function() {
            ht = void 0
        }), ht = me.now()
    }
    function W(e, t) {
        var n,
            r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = Re[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function B(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function U(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            d = "width" in t || "height" in t,
            f = this,
            p = {},
            h = e.style,
            m = e.nodeType && We(e),
            g = qe.get(e, "fxshow");
        n.queue || (a = me._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--,
                me.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], gt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    m = !0
                }
                p[r] = g && g[r] || me.style(e, r)
            }
        if ((l = !me.isEmptyObject(t)) || !me.isEmptyObject(p)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = g && g.display, null == u && (u = qe.get(e, "display")), c = me.css(e, "display"), "none" === c && (u ? c = u : (v([e], !0), u = e.style.display || u, c = me.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === me.css(e, "float") && (l || (f.done(function() {
                h.display = u
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden", f.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            l = !1;
            for (r in p)
                l || (g ? "hidden" in g && (m = g.hidden) : g = qe.access(e, "fxshow", {
                    display: u
                }), o && (g.hidden = !m), m && v([e], !0), f.done(function() {
                    m || v([e]),
                    qe.remove(e, "fxshow");
                    for (r in p)
                        me.style(e, r, p[r])
                })),
                l = B(m ? g[r] : 0, r, f),
                r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }
    function z(e, t) {
        var n,
            r,
            i,
            o,
            a;
        for (n in e)
            if (r = me.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = me.cssHooks[r]) && "expand" in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i)
            } else
                t[r] = i
    }
    function X(e, t, n) {
        var r,
            i,
            o = 0,
            a = X.prefilters.length,
            s = me.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i)
                    return !1;
                for (var t = ht || R(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; a < l; a++)
                    u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (l || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: me.extend({}, t),
                opts: me.extend(!0, {
                    specialEasing: {},
                    easing: me.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = me.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (z(c, u.opts.specialEasing); o < a; o++)
            if (r = X.prefilters[o].call(u, e, c, u.opts))
                return me.isFunction(r.stop) && (me._queueHooks(u.elem, u.opts.queue).stop = me.proxy(r.stop, r)), r;
        return me.map(c, B, u), me.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), me.fx.timer(me.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    function Y(e) {
        return (e.match($e) || []).join(" ")
    }
    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            me.each(t, function(t, i) {
                n || Et.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== me.type(t))
            r(e, t);
        else
            for (i in t)
                G(e + "[" + i + "]", t[i], n, r)
    }
    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r,
                i = 0,
                o = t.toLowerCase().match($e) || [];
            if (me.isFunction(n))
                for (; r = o[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function J(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, me.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === Ft;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function K(e, t) {
        var n,
            r,
            i = me.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && me.extend(!0, e, r), e
    }
    function Z(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n)
            o = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== l[0] && l.unshift(o), n[o]
    }
    function ee(e, t, n, r) {
        var i,
            o,
            a,
            s,
            l,
            u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(a = u[l + " " + o] || u["* " + o]))
                        for (i in u)
                            if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        re = Object.getPrototypeOf,
        ie = te.slice,
        oe = te.concat,
        ae = te.push,
        se = te.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = ce.toString,
        fe = de.call(Object),
        pe = {},
        he = "3.2.1",
        me = function(e, t) {
            return new me.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        be = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    me.fn = me.prototype = {
        jquery: he,
        constructor: me,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return me.each(this, e)
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: te.sort,
        splice: te.splice
    },
    me.extend = me.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || me.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    r = e[t],
                    a !== r && (u && r && (me.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, a[t] = me.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    },
    me.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = me.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t,
                n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = re(e)) && ("function" != typeof (n = ce.call(t, "constructor") && t.constructor) || de.call(n) !== fe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(be, ye)
        },
        each: function(e, t) {
            var n,
                i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var i,
                o,
                a = 0,
                s = [];
            if (r(e))
                for (i = e.length; a < i; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                r,
                i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e))
                return r = ie.call(arguments, 2), i = function() {
                    return e.apply(t || this, r.concat(ie.call(arguments)))
                }, i.guid = e.guid = e.guid || me.guid++, i
        },
        now: Date.now,
        support: pe
    }),
    "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]),
    me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(e) {
        function t(e, t, n, r) {
            var i,
                o,
                a,
                s,
                l,
                c,
                f,
                p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : F) !== A && $(t), t = t || A, L)) {
                if (11 !== h && (l = me.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && H(t, a) && a.id === i)
                            return n.push(a), n
                    } else {
                        if (l[2])
                            return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(i)), n
                    }
                if (x.qsa && !U[e + " "] && (!O || !O.test(e))) {
                    if (1 !== h)
                        p = t,
                        f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ye, xe) : t.setAttribute("id", s = M), c = _(e), o = c.length; o--;)
                            c[o] = "#" + s + " " + d(c[o]);
                        f = c.join(","),
                        p = ge.test(e) && u(t.parentNode) || t
                    }
                    if (f)
                        try {
                            return Q.apply(n, p.querySelectorAll(f)), n
                        } catch (e) {} finally {
                            s === M && t.removeAttribute("id")
                        }
                }
            }
            return j(e.replace(oe, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[M] = !0, e
        }
        function i(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)
                w.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = R++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u,
                    c,
                    d,
                    f = [I, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (d = t[M] || (t[M] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === I && u[1] === s)
                                    return f[2] = u[2];
                                if (c[o] = f, f[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }
        function g(e, t, n, i, o, a) {
            return i && !i[M] && (i = g(i)), o && !o[M] && (o = g(o, a)), r(function(r, a, s, l) {
                var u,
                    c,
                    d,
                    f = [],
                    p = [],
                    g = a.length,
                    v = r || h(t || "*", s.nodeType ? [s] : s, []),
                    b = !e || !r && t ? v : m(v, f, e, s, l),
                    y = n ? o || (r ? e : g || i) ? [] : a : b;
                if (n && n(b, y, s, l), i)
                    for (u = m(y, p), i(u, [], s, l), c = u.length; c--;)
                        (d = u[c]) && (y[p[c]] = !(b[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = y.length; c--;)
                                (d = y[c]) && u.push(b[c] = d);
                            o(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)
                            (d = y[c]) && (u = o ? K(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else
                    y = m(y === a ? y.splice(g, y.length) : y),
                    o ? o(null, a, y, l) : Q.apply(a, y)
            })
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), u = f(function(e) {
                    return K(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== E) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = w.relative[e[s].type])
                    c = [f(p(c), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++)
                            ;
                        return g(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c,
                        d,
                        f,
                        p = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        b = E,
                        y = r || o && w.find.TAG("*", u),
                        x = I += null == b ? 1 : Math.random() || .1,
                        T = y.length;
                    for (u && (E = a === A || a || u); h !== T && null != (c = y[h]); h++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === A || ($(c), s = !L); f = e[d++];)
                                if (f(c, a || A, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (I = x)
                        }
                        i && ((c = !f && c) && p--, r && g.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];)
                            f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;)
                                    g[h] || v[h] || (v[h] = V.call(l));
                            v = m(v)
                        }
                        Q.apply(l, v),
                        u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (I = x, E = b), g
                };
            return i ? r(a) : a
        }
        var y,
            x,
            w,
            T,
            C,
            _,
            k,
            j,
            E,
            D,
            S,
            $,
            A,
            N,
            L,
            O,
            q,
            P,
            H,
            M = "sizzle" + 1 * new Date,
            F = e.document,
            I = 0,
            R = 0,
            W = n(),
            B = n(),
            U = n(),
            z = function(e, t) {
                return e === t && (S = !0), 0
            },
            X = {}.hasOwnProperty,
            Y = [],
            V = Y.pop,
            G = Y.push,
            Q = Y.push,
            J = Y.slice,
            K = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            be = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                $()
            },
            Te = f(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(Y = J.call(F.childNodes), F.childNodes),
            Y[F.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: Y.length ? function(e, t) {
                    G.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];)
                        ;
                    e.length = n - 1
                }
            }
        }
        x = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        },
        $ = t.setDocument = function(e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : F;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, N = A.documentElement, L = !C(A), F !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(A.getElementsByClassName), x.getById = i(function(e) {
                return N.appendChild(e).id = M, !A.getElementsByName || !A.getElementsByName(M).length
            }), x.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ve, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(ve, be);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && L)
                    return t.getElementsByClassName(e)
            }, q = [], O = [], (x.qsa = he.test(A.querySelectorAll)) && (i(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + M + "-]").length || O.push("~="),
                e.querySelectorAll(":checked").length || O.push(":checked"),
                e.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
                N.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })), (x.matchesSelector = he.test(P = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = P.call(e, "*"),
                P.call(e, "[s!='']:x"),
                q.push("!=", re)
            }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = he.test(N.compareDocumentPosition), H = t || he.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t)
                    return S = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === F && H(F, e) ? -1 : t === A || t.ownerDocument === F && H(F, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return S = !0, 0;
                var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!i || !o)
                    return e === A ? -1 : t === A ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode;)
                    s.unshift(n);
                for (n = t; n = n.parentNode;)
                    l.unshift(n);
                for (; s[r] === l[r];)
                    r++;
                return r ? a(s[r], l[r]) : s[r] === F ? -1 : l[r] === F ? 1 : 0
            }, A) : A
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && $(e), n = n.replace(le, "='$1']"), x.matchesSelector && L && !U[n + " "] && (!q || !q.test(n)) && (!O || !O.test(n)))
                try {
                    var r = P.call(e, n);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, A, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && $(e), H(e, t)
        },
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && $(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : x.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        },
        t.escape = function(e) {
            return (e + "").replace(ye, xe)
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (S = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(z), S) {
                for (; t = e[i++];)
                    t === e[i] && (r = n.push(i));
                for (; r--;)
                    e.splice(n[r], 1)
            }
            return D = null, e
        },
        T = t.getText = function(e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++];)
                    n += T(t);
            return n
        },
        w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
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
                    return e[1] = e[1].replace(ve, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u,
                            c,
                            d,
                            f,
                            p,
                            h,
                            m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            b = !l && !s,
                            y = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && b) {
                                for (f = g, d = f[M] || (f[M] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], y = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++y && f === t) {
                                        c[e] = [I, p, y];
                                        break
                                    }
                            } else if (b && (f = t, d = f[M] || (f[M] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], y = p), !1 === y)
                                for (; (f = ++p && f && f[m] || (y = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && (d = f[M] || (f[M] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [I, y]), f !== t));)
                                    ;
                            return (y -= i) === r || y % r == 0 && y / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i,
                        o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;)
                            r = K(e, i[a]),
                            e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(oe, "$1"));
                    return i[M] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ve, be), function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, be).toLowerCase(), function(t) {
                        var n;
                        do {
                            if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash
                    ;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            w.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, _ = t.tokenize = function(e, n) {
            var r,
                i,
                o,
                a,
                s,
                l,
                u,
                c = B[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e, l = [], u = w.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])),
                r = !1,
                (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter)
                    !(i = de[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n,
                r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = _(e)), n = t.length; n--;)
                    o = v(t[n]),
                    o[M] ? r.push(o) : i.push(o);
                o = U(e, b(i, r)),
                o.selector = e
            }
            return o
        }, j = t.select = function(e, t, n, r) {
            var i,
                o,
                a,
                s,
                l,
                c = "function" == typeof e && e,
                f = !r && _(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ve, be), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(ve, be), ge.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && d(o)))
                            return Q.apply(n, r), n;
                        break
                    }
            }
            return (c || k(e, f))(r, t, !L, n, !t || ge.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = M.split("").sort(z).join("") === M, x.detectDuplicates = !!S, $(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    me.find = xe,
    me.expr = xe.selectors,
    me.expr[":"] = me.expr.pseudos,
    me.uniqueSort = me.unique = xe.uniqueSort,
    me.text = xe.getText,
    me.isXMLDoc = xe.isXML,
    me.contains = xe.contains,
    me.escapeSelector = xe.escape;
    var we = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && me(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        Te = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = me.expr.match.needsContext,
        _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ke = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? me.find.matchesSelector(r, e) ? [r] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },
    me.fn.extend({
        find: function(e) {
            var t,
                n,
                r = this.length,
                i = this;
            if ("string" != typeof e)
                return this.pushStack(me(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (me.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]), t = 0; t < r; t++)
                me.find(e, i[t], n);
            return r > 1 ? me.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Ce.test(e) ? me(e) : e || [], !1).length
        }
    });
    var je,
        Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (me.fn.init = function(e, t, n) {
        var r,
            i;
        if (!e)
            return this;
        if (n = n || je, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), _e.test(r[1]) && me.isPlainObject(t))
                    for (r in t)
                        me.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = ne.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
    }).prototype = me.fn,
    je = me(ne);
    var De = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (me.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && me(e);
            if (!Ce.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(me(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    me.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Te((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Te(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), me.merge([], e.childNodes))
        }
    }, function(e, t) {
        me.fn[e] = function(n, r) {
            var i = me.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = me.filter(r, i)), this.length > 1 && (Se[e] || me.uniqueSort(i), De.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var $e = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : me.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            l = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;)
                        !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1),
                t = !1,
                i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                        me.each(n, function(n, r) {
                            me.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== me.type(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return me.each(arguments, function(e, t) {
                        for (var n; (n = me.inArray(t, o, n)) > -1;)
                            o.splice(n, 1),
                            n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? me.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    },
    me.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2], ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]],
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
                        return me.Deferred(function(t) {
                            me.each(n, function(n, r) {
                                var i = me.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var s = this,
                                    c = arguments,
                                    d = function() {
                                        var e,
                                            d;
                                        if (!(t < a)) {
                                            if ((e = r.apply(s, c)) === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                            me.isFunction(d) ? i ? d.call(e, o(a, n, l, i), o(a, n, u, i)) : (a++, d.call(e, o(a, n, l, i), o(a, n, u, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                        }
                                    },
                                    f = i ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, f.stackTrace),
                                            t + 1 >= a && (r !== u && (s = void 0, c = [e]), n.rejectWith(s, c))
                                        }
                                    };
                                t ? f() : (me.Deferred.getStackHook && (f.stackTrace = me.Deferred.getStackHook()), e.setTimeout(f))
                            }
                        }
                        var a = 0;
                        return me.Deferred(function(e) {
                            n[0][3].add(o(0, e, me.isFunction(i) ? i : l, e.notifyWith)),
                            n[1][3].add(o(0, e, me.isFunction(t) ? t : l)),
                            n[2][3].add(o(0, e, me.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? me.extend(e, i) : i
                    }
                },
                o = {};
            return me.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                },
                o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = ie.call(arguments),
                o = me.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this,
                        i[e] = arguments.length > 1 ? ie.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || me.isFunction(i[n] && i[n].then)))
                return o.then();
            for (; n--;)
                c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    },
    me.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ne = me.Deferred();
    me.fn.ready = function(e) {
        return Ne.then(e).catch(function(e) {
            me.readyException(e)
        }), this
    },
    me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --me.readyWait : me.isReady) || (me.isReady = !0, !0 !== e && --me.readyWait > 0 || Ne.resolveWith(ne, [me]))
        }
    }),
    me.ready.then = Ne.then,
    "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Le = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === me.type(n)) {
                i = !0;
                for (s in n)
                    Le(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, me.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                return u.call(me(e), n)
            })), t))
                for (; s < l; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Oe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    f.uid = 1,
    f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t)
                i[me.camelCase(t)] = n;
            else
                for (r in t)
                    i[me.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n,
                r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in r ? [t] : t.match($e) || []),
                    n = t.length;
                    for (; n--;)
                        delete r[t[n]]
                }
                (void 0 === t || me.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t)
        }
    };
    var qe = new f,
        Pe = new f,
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    me.extend({
        hasData: function(e) {
            return Pe.hasData(e) || qe.hasData(e)
        },
        data: function(e, t, n) {
            return Pe.access(e, t, n)
        },
        removeData: function(e, t) {
            Pe.remove(e, t)
        },
        _data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        _removeData: function(e, t) {
            qe.remove(e, t)
        }
    }),
    me.fn.extend({
        data: function(e, t) {
            var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Pe.get(o), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = me.camelCase(r.slice(5)), h(o, r, i[r])));
                    qe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Pe.set(this, e)
            }) : Le(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Pe.get(o, e)))
                        return n;
                    if (void 0 !== (n = h(o, e)))
                        return n
                } else
                    this.each(function() {
                        Pe.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Pe.remove(this, e)
            })
        }
    }),
    me.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = qe.get(e, t), n && (!r || Array.isArray(n) ? r = qe.access(e, t, me.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = me.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = me._queueHooks(e, t),
                a = function() {
                    me.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return qe.get(e, n) || qe.access(e, n, {
                    empty: me.Callbacks("once memory").add(function() {
                        qe.remove(e, [t + "queue", n])
                    })
                })
        }
    }),
    me.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                me.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                r = 1,
                i = me.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                (n = qe.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Re = ["Top", "Right", "Bottom", "Left"],
        We = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
        },
        Be = function(e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        },
        Ue = {};
    me.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                We(this) ? me(this).show() : me(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ye = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option,
    Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
    Ve.th = Ve.td;
    var Ge = /<|&#?\w+;/;
    !function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = ne.documentElement,
        Je = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                p,
                h,
                m,
                g = qe.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && me.find.matchesSelector(Qe, i), n.guid || (n.guid = me.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                    return void 0 !== me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match($e) || [""], u = t.length; u--;)
                    s = Ze.exec(t[u]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = me.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = me.event.special[p] || {}, c = me.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && me.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), me.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                p,
                h,
                m,
                g = qe.hasData(e) && qe.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match($e) || [""], u = t.length; u--;)
                    if (s = Ze.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = me.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;)
                            c = f[o],
                            !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || me.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l)
                            me.event.remove(e, p + t[u], n, r, !0);
                me.isEmptyObject(l) && qe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = me.event.fix(e),
                l = new Array(arguments.length),
                u = (qe.get(this, "events") || {})[s.type] || [],
                c = me.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = me.event.handlers.call(this, s, u), t = 0; (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((me.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++)
                            r = t[n],
                            i = r.selector + " ",
                            void 0 === a[i] && (a[i] = r.needsContext ? me(i, this).index(u) > -1 : me.find(i, this, null, [u]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
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
            return e[me.expando] ? e : new me.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input"))
                        return this.click(), !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    me.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void (this[me.expando] = !0)) : new me.Event(e, t)
    },
    me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    me.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, me.event.addProp),
    me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || me.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }),
    me.fn.extend({
        on: function(e, t, n, r) {
            return _(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return _(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r,
                i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, me(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function() {
                me.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                l = me.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (a = b(s), o = b(e), r = 0, i = o.length; r < i; r++)
                    S(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || b(e), a = a || b(s), r = 0, i = o.length; r < i; r++)
                        D(o[r], a[r]);
                else
                    D(e, s);
            return a = b(s, "script"), a.length > 0 && y(a, !l && b(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Oe(n)) {
                    if (t = n[qe.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? me.event.remove(n, r) : me.removeEvent(n, r, t.handle);
                        n[qe.expando] = void 0
                    }
                    n[Pe.expando] && (n[Pe.expando] = void 0)
                }
        }
    }),
    me.fn.extend({
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return $(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (me.cleanData(b(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return me.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (me.cleanData(b(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return $(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(b(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }),
    me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var n, r = [], i = me(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                me(i[a])[t](n),
                ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ot = /^margin/,
        at = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        st = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                Qe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                o = "2px" === t.marginLeft,
                r = "4px" === t.width,
                s.style.marginRight = "50%",
                i = "4px" === t.marginRight,
                Qe.removeChild(a),
                s = null
            }
        }
        var n,
            r,
            i,
            o,
            a = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), me.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var lt = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "Moz", "ms"],
        pt = ne.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = me.camelCase(t),
                    l = ut.test(t),
                    u = e.style;
                return l || (t = q(s)), a = me.cssHooks[t] || me.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ie.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), void (null != n && n === n && ("number" === o && (n += i && i[3] || (me.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i,
                o,
                a,
                s = me.camelCase(t);
            return ut.test(t) || (t = q(s)), a = me.cssHooks[t] || me.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = N(e, t, r)), "normal" === i && t in dt && (i = dt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !lt.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : Be(e, ct, function() {
                        return M(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i,
                    o = r && st(e),
                    a = r && H(e, t, r, "border-box" === me.css(e, "boxSizing", !1, o), o);
                return a && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = me.css(e, t)), P(e, n, a)
            }
        }
    }),
    me.cssHooks.marginLeft = L(pe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + Re[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ot.test(e) || (me.cssHooks[e + t].set = P)
    }),
    me.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = st(e), i = t.length; a < i; a++)
                        o[t[a]] = me.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    me.Tween = F,
    F.prototype = {
        constructor: F,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || me.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (me.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    },
    F.prototype.init.prototype = F.prototype,
    F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    me.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    me.fx = F.prototype.init,
    me.fx.step = {};
    var ht,
        mt,
        gt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    me.Animation = me.extend(X, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, Ie.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match($e);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                X.tweeners[n] = X.tweeners[n] || [],
                X.tweeners[n].unshift(t)
        },
        prefilters: [U],
        prefilter: function(e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }),
    me.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? me.extend({}, e) : {
            complete: n || !n && t || me.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !me.isFunction(t) && t
        };
        return me.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in me.fx.speeds ? r.duration = me.fx.speeds[r.duration] : r.duration = me.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            me.isFunction(r.old) && r.old.call(this),
            r.queue && me.dequeue(this, r.queue)
        }, r
    },
    me.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(We).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = me.isEmptyObject(e),
                o = me.speed(t, n, r),
                a = function() {
                    var t = X(this, me.extend({}, e), o);
                    (i || qe.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = me.timers,
                    a = qe.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && vt.test(i) && r(a[i]);
                for (i = o.length; i--;)
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || me.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t,
                    n = qe.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = me.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, me.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    me.each(["toggle", "show", "hide"], function(e, t) {
        var n = me.fn[t];
        me.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }),
    me.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
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
        me.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    me.timers = [],
    me.fx.tick = function() {
        var e,
            t = 0,
            n = me.timers;
        for (ht = me.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || me.fx.stop(),
        ht = void 0
    },
    me.fx.timer = function(e) {
        me.timers.push(e),
        me.fx.start()
    },
    me.fx.interval = 13,
    me.fx.start = function() {
        mt || (mt = !0, I())
    },
    me.fx.stop = function() {
        mt = null
    },
    me.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    me.fn.delay = function(t, n) {
        return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
    function() {
        var e = ne.createElement("input"),
            t = ne.createElement("select"),
            n = t.appendChild(ne.createElement("option"));
        e.type = "checkbox",
        pe.checkOn = "" !== e.value,
        pe.optSelected = n.selected,
        e = ne.createElement("input"),
        e.value = "t",
        e.type = "radio",
        pe.radioValue = "t" === e.value
    }();
    var bt,
        yt = me.expr.attrHandle;
    me.fn.extend({
        attr: function(e, t) {
            return Le(this, me.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e)
            })
        }
    }),
    me.extend({
        attr: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (i = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = me.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n,
                r = 0,
                i = t && t.match($e);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];)
                    e.removeAttribute(n)
        }
    }),
    bt = {
        set: function(e, t, n) {
            return !1 === t ? me.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    },
    me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || me.find.attr;
        yt[t] = function(e, t, r) {
            var i,
                o,
                a = t.toLowerCase();
            return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), i
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return Le(this, me.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[me.propFix[e] || e]
            })
        }
    }),
    me.extend({
        prop: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, i = me.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    pe.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        me.propFix[this.toLowerCase()] = this
    }),
    me.fn.extend({
        addClass: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l = 0;
            if (me.isFunction(e))
                return this.each(function(t) {
                    me(this).addClass(e.call(this, t, V(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match($e) || []; n = this[l++];)
                    if (i = V(n), r = 1 === n.nodeType && " " + Y(i) + " ") {
                        for (a = 0; o = t[a++];)
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = Y(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l = 0;
            if (me.isFunction(e))
                return this.each(function(t) {
                    me(this).removeClass(e.call(this, t, V(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match($e) || []; n = this[l++];)
                    if (i = V(n), r = 1 === n.nodeType && " " + Y(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;)
                                r = r.replace(" " + o + " ", " ");
                        s = Y(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                me(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function() {
                var t,
                    r,
                    i,
                    o;
                if ("string" === n)
                    for (r = 0, i = me(this), o = e.match($e) || []; t = o[r++];)
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = V(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : qe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t,
                n,
                r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + Y(V(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t,
                n,
                r,
                i = this[0];
            return arguments.length ? (r = me.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, me(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = me.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = me.valHooks[i.type] || me.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)) : void 0
        }
    }),
    me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : Y(me.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t,
                        n,
                        r,
                        o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        u = s ? a + 1 : o.length;
                    for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                        if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), s)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = me.makeArray(t), a = i.length; a--;)
                        r = i[a],
                        (r.selected = me.inArray(me.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }),
    me.each(["radio", "checkbox"], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = me.inArray(me(e).val(), t) > -1
            }
        },
        pe.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f = [r || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(p + me.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[me.expando] ? t : new me.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : me.makeArray(n, [t]), d = me.event.special[p] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !me.isWindow(r)) {
                    for (l = d.delegateType || p, Ct.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a),
                        s = a;
                    s === (r.ownerDocument || ne) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped();)
                    t.type = o > 1 ? l : d.bindType || p,
                    c = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle"),
                    c && c.apply(a, n),
                    (c = u && a[u]) && c.apply && Oe(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Oe(r) || u && me.isFunction(r[p]) && !me.isWindow(r) && (s = r[u], s && (r[u] = null), me.event.triggered = p, r[p](), me.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = me.extend(new me.Event, n, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(r, null, t)
        }
    }),
    me.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return me.event.trigger(e, t, n, !0)
        }
    }),
    me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    pe.focusin = "onfocusin" in e,
    pe.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e))
        };
        me.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = qe.access(r, t);
                i || r.addEventListener(e, n, !0),
                qe.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = qe.access(r, t) - 1;
                i ? qe.access(r, t, i) : (r.removeEventListener(e, n, !0), qe.remove(r, t))
            }
        }
    });
    var _t = e.location,
        kt = me.now(),
        jt = /\?/;
    me.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n
    };
    var Et = /\[\]$/,
        Dt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                var n = me.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e))
            me.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                G(n, e[n], t, i);
        return r.join("&")
    },
    me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && $t.test(this.nodeName) && !St.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = me(this).val();
                return null == n ? null : Array.isArray(n) ? me.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        Nt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Mt = {},
        Ft = {},
        It = "*/".concat("*"),
        Rt = ne.createElement("a");
    Rt.href = _t.href,
    me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: qt.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
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
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, me.ajaxSettings), t) : K(me.ajaxSettings, e)
        },
        ajaxPrefilter: Q(Mt),
        ajaxTransport: Q(Ft),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u,
                    f,
                    p,
                    x,
                    w,
                    T = n;
                c || (c = !0, l && e.clearTimeout(l), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (x = Z(h, C, r)), x = ee(h, x, C, u), u ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (me.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (me.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, f = x.data, p = x.error, u = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", u ? v.resolveWith(m, [f, T, C]) : v.rejectWith(m, [C, T, p]), C.statusCode(y), y = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, h, u ? f : p]), b.fireWith(m, [C, T]), d && (g.trigger("ajaxComplete", [C, h]), --me.active || me.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0),
            n = n || {};
            var i,
                o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                p,
                h = me.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                v = me.Deferred(),
                b = me.Callbacks("once memory"),
                y = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ot.exec(a);)
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                C.always(e[C.status]);
                            else
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || _t.href) + "").replace(Ht, _t.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match($e) || [""], null == h.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = h.url,
                    u.href = u.href,
                    h.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), J(Mt, h, n, C), c)
                return C;
            d = me.event && h.global,
            d && 0 == me.active++ && me.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Pt.test(h.type),
            o = h.url.replace(Nt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (p = h.url.slice(o.length), h.data && (o += (jt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), p = (jt.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p),
            h.ifModified && (me.lastModified[o] && C.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && C.setRequestHeader("If-None-Match", me.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers)
                C.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || c))
                return C.abort();
            if (T = "abort", b.add(h.complete), C.done(h.success), C.fail(h.error), i = J(Ft, h, n, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, h]), c)
                    return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(x, r)
                } catch (e) {
                    if (c)
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return me.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script")
        }
    }),
    me.each(["get", "post"], function(e, t) {
        me[t] = function(e, n, r, i) {
            return me.isFunction(n) && (i = i || r, r = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, me.isPlainObject(e) && e))
        }
    }),
    me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    },
    me.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(n) {
                me(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                me(this).replaceWith(this.childNodes)
            }), this
        }
    }),
    me.expr.pseudos.hidden = function(e) {
        return !me.expr.pseudos.visible(e)
    },
    me.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    },
    me.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Bt = me.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt,
    pe.ajax = Bt = !!Bt,
    me.ajaxTransport(function(t) {
        var n,
            r;
        if (pe.cors || Bt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a,
                        s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    },
                    s.onload = n(),
                    r = s.onerror = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    },
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e), e
            }
        }
    }),
    me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t,
                n;
            return {
                send: function(r, i) {
                    t = me("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }),
                    ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ut = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || me.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }),
    me.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i,
            o,
            a,
            s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return a || me.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === o ? me(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback, Ut.push(i)),
                a && me.isFunction(o) && o(a[0]),
                a = o = void 0
            }), "script"
    }),
    pe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(),
    me.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r,
            i,
            o;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ne.location.href, t.head.appendChild(r)) : t = ne), i = _e.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, o), o && o.length && me(o).remove(), me.merge([], i.childNodes))
    },
    me.fn.load = function(e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = Y(e.slice(s)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && me.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? me("<div>").append(me.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    },
    me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    me.expr.pseudos.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem
        }).length
    },
    me.offset = {
        setOffset: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l,
                u,
                c = me.css(e, "position"),
                d = me(e),
                f = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            o = me.css(e, "top"),
            l = me.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1,
            u ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0),
            me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : d.css(f)
        }
    },
    me.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    me.offset.setOffset(this, e, t)
                });
            var t,
                n,
                r,
                i,
                o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + me.css(e[0], "borderTopWidth", !0),
                    left: r.left + me.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - me.css(n, "marginTop", !0),
                    left: t.left - r.left - me.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position");)
                    e = e.offsetParent;
                return e || Qe
            })
        }
    }),
    me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function(r) {
            return Le(this, function(e, r, i) {
                var o;
                return me.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),
    me.each(["top", "left"], function(e, t) {
        me.cssHooks[t] = L(pe.pixelPosition, function(e, n) {
            if (n)
                return n = N(e, t), at.test(n) ? me(e).position()[t] + "px" : n
        })
    }),
    me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            me.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Le(this, function(t, n, i) {
                    var o;
                    return me.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? me.css(t, n, s) : me.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    me.fn.extend({
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
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    me.holdReady = function(e) {
        e ? me.readyWait++ : me.ready(!0)
    },
    me.isArray = Array.isArray,
    me.parseJSON = JSON.parse,
    me.nodeName = i,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return me
    });
    var Xt = e.jQuery,
        Yt = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = Yt), t && e.jQuery === me && (e.jQuery = Xt), me
    }, t || (e.jQuery = e.$ = me), me
}),
function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : window.basicContext = t()
}(0, function() {
    var e = null,
        t = "item",
        n = "separator",
        r = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
            return document.querySelector(".basicContext " + e)
        },
        i = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            return !0 == (0 === Object.keys(e).length) && (e.type = n), null == e.type && (e.type = t), null == e.class && (e.class = ""), !1 !== e.visible && (e.visible = !0), null == e.icon && (e.icon = null), null == e.title && (e.title = "Undefined"), !0 !== e.disabled && (e.disabled = !1), !0 === e.disabled && (e.class += " basicContext__item--disabled"), null != e.fn || e.type === n || !1 !== e.disabled || (console.warn("Missing fn for item '" + e.title + "'"), !1)
        },
        o = function(e, r) {
            var o = "",
                a = "";
            return !1 === i(e) ? "" : !1 === e.visible ? "" : (e.num = r, null !== e.icon && (a = "<span class='basicContext__icon " + e.icon + "'></span>"), e.type === t ? o = "\n\t\t       <tr class='basicContext__item " + e.class + "'>\n\t\t           <td class='basicContext__data' data-num='" + e.num + "'>" + a + e.title + "</td>\n\t\t       </tr>\n\t\t       " : e.type === n && (o = "\n\t\t       <tr class='basicContext__item basicContext__item--separator'></tr>\n\t\t       "), o)
        },
        a = function(e) {
            var t = "";
            return t += "\n\t        <div class='basicContextContainer'>\n\t            <div class='basicContext'>\n\t                <table>\n\t                    <tbody>\n\t        ", e.forEach(function(e, n) {
                return t += o(e, n)
            }), t += "\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t        "
        },
        s = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = {
                    x: e.clientX,
                    y: e.clientY
                };
            if ("touchend" === e.type && (null == t.x || null == t.y)) {
                var n = e.changedTouches;
                null != n && n.length > 0 && (t.x = n[0].clientX, t.y = n[0].clientY)
            }
            return (null == t.x || t.x < 0) && (t.x = 0), (null == t.y || t.y < 0) && (t.y = 0), t
        },
        l = function(e, t) {
            var n = s(e),
                r = n.x,
                i = n.y,
                o = {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                a = {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                };
            return r + a.width > o.width && (r -= r + a.width - o.width), i + a.height > o.height && (i -= i + a.height - o.height), a.height > o.height && (i = 0, t.classList.add("basicContext--scrollable")), {
                x: r,
                y: i,
                rx: n.x - r,
                ry: n.y - i
            }
        },
        u = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            return null != e.fn && (!1 !== e.visible && (!0 !== e.disabled && (r("td[data-num='" + e.num + "']").onclick = e.fn, r("td[data-num='" + e.num + "']").oncontextmenu = e.fn, !0)))
        },
        c = function(t, n, i, o) {
            var s = a(t);
            document.body.insertAdjacentHTML("beforeend", s),
            null == e && (e = document.body.style.overflow, document.body.style.overflow = "hidden");
            var c = r(),
                d = l(n, c);
            return c.style.left = d.x + "px", c.style.top = d.y + "px", c.style.transformOrigin = d.rx + "px " + d.ry + "px", c.style.opacity = 1, null == i && (i = f), c.parentElement.onclick = i, c.parentElement.oncontextmenu = i, t.forEach(u), "function" == typeof n.preventDefault && n.preventDefault(), "function" == typeof n.stopPropagation && n.stopPropagation(), "function" == typeof o && o(), !0
        },
        d = function() {
            var e = r();
            return null != e && 0 !== e.length
        },
        f = function() {
            if (!1 === d())
                return !1;
            var t = document.querySelector(".basicContextContainer");
            return t.parentElement.removeChild(t), null != e && (document.body.style.overflow = e, e = null), !0
        };
    return {
        ITEM: t,
        SEPARATOR: n,
        show: c,
        visible: d,
        close: f
    }
})
;
var _templateObject = _taggedTemplateLiteral(["<svg class='iconic $", "'><use xlink:href='#$", "' /></svg>"], ["<svg class='iconic $", "'><use xlink:href='#$", "' /></svg>"]),
    _templateObject2 = _taggedTemplateLiteral(["<div class='divider'><h1>$", "</h1></div>"], ["<div class='divider'><h1>$", "</h1></div>"]),
    _templateObject3 = _taggedTemplateLiteral(["<div id='$", "' class='edit'>", "</div>"], ["<div id='$", "' class='edit'>", "</div>"]),
    _templateObject4 = _taggedTemplateLiteral(["<div id='multiselect' style='top: $", "px; left: $", "px;'></div>"], ["<div id='multiselect' style='top: $", "px; left: $", "px;'></div>"]),
    _templateObject5 = _taggedTemplateLiteral(["\n\t        <div class='album' data-id='$", "'>\n\t            <img src='$", "' width='200' height='200' alt='Photo thumbnail' data-overlay='false' draggable='false'>\n\t            <img src='$", "' width='200' height='200' alt='Photo thumbnail' data-overlay='false' draggable='false'>\n\t            <img src='$", "' srcset='$", " 1.5x' width='200' height='200' alt='Photo thumbnail' data-overlay='$", "' draggable='false'>\n\t            <div class='overlay'>\n\t                <h1 title='$", "'>$", "</h1>\n\t                <a>$", "</a>\n\t            </div>\n\t        "], ["\n\t        <div class='album' data-id='$", "'>\n\t            <img src='$", "' width='200' height='200' alt='Photo thumbnail' data-overlay='false' draggable='false'>\n\t            <img src='$", "' width='200' height='200' alt='Photo thumbnail' data-overlay='false' draggable='false'>\n\t            <img src='$", "' srcset='$", " 1.5x' width='200' height='200' alt='Photo thumbnail' data-overlay='$", "' draggable='false'>\n\t            <div class='overlay'>\n\t                <h1 title='$", "'>$", "</h1>\n\t                <a>$", "</a>\n\t            </div>\n\t        "]),
    _templateObject6 = _taggedTemplateLiteral(["\n\t\t        <div class='badges'>\n\t\t            <a class='badge $", " icn-star'>", "</a>\n\t\t            <a class='badge $", " icn-share'>", "</a>\n\t\t            <a class='badge $", "'>", "</a>\n\t\t            <a class='badge $", "'>", "</a>\n\t\t            <a class='badge $", "'>", "</a>\n\t\t        </div>\n\t\t        "], ["\n\t\t        <div class='badges'>\n\t\t            <a class='badge $", " icn-star'>", "</a>\n\t\t            <a class='badge $", " icn-share'>", "</a>\n\t\t            <a class='badge $", "'>", "</a>\n\t\t            <a class='badge $", "'>", "</a>\n\t\t            <a class='badge $", "'>", "</a>\n\t\t        </div>\n\t\t        "]),
    _templateObject7 = _taggedTemplateLiteral(["\n\t        <div class='photo' data-album-id='$", "' data-id='$", "'>\n\t            <img src='$", "' srcset='$", " 1.5x' width='200' height='200' alt='Photo thumbnail' draggable='false'>\n\t            <div class='overlay'>\n\t                <h1 title='$", "'>$", "</h1>\n\t        "], ["\n\t        <div class='photo' data-album-id='$", "' data-id='$", "'>\n\t            <img src='$", "' srcset='$", " 1.5x' width='200' height='200' alt='Photo thumbnail' draggable='false'>\n\t            <div class='overlay'>\n\t                <h1 title='$", "'>$", "</h1>\n\t        "]),
    _templateObject8 = _taggedTemplateLiteral(["<a><span title='Camera Date'>", "</span>$", "</a>"], ["<a><span title='Camera Date'>", "</span>$", "</a>"]),
    _templateObject9 = _taggedTemplateLiteral(["<a>$", "</a>"], ["<a>$", "</a>"]),
    _templateObject10 = _taggedTemplateLiteral(["\n\t\t        <div class='badges'>\n\t\t            <a class='badge $", " icn-star'>", "</a>\n\t\t            <a class='badge $", " icn-share'>", "</a>\n\t\t        </div>\n\t\t        "], ["\n\t\t        <div class='badges'>\n\t\t            <a class='badge $", " icn-star'>", "</a>\n\t\t            <a class='badge $", " icn-share'>", "</a>\n\t\t        </div>\n\t\t        "]),
    _templateObject11 = _taggedTemplateLiteral(["<img id='image' class='$", "' src='$", "' draggable='false'>"], ["<img id='image' class='$", "' src='$", "' draggable='false'>"]),
    _templateObject12 = _taggedTemplateLiteral(["<img id='image' class='$", "' src='$", "' srcset='$", " 1920w, $", " $", "w' draggable='false'>"], ["<img id='image' class='$", "' src='$", "' srcset='$", " 1920w, $", " $", "w' draggable='false'>"]),
    _templateObject13 = _taggedTemplateLiteral(["\n\t        <h1>$", "</h1>\n\t        <div class='rows'>\n\t        "], ["\n\t        <h1>$", "</h1>\n\t        <div class='rows'>\n\t        "]),
    _templateObject14 = _taggedTemplateLiteral(["\n\t\t        <div class='row'>\n\t\t            <a class='name'>$", "</a>\n\t\t            <a class='status'></a>\n\t\t            <p class='notice'></p>\n\t\t        </div>\n\t\t        "], ["\n\t\t        <div class='row'>\n\t\t            <a class='name'>$", "</a>\n\t\t            <a class='status'></a>\n\t\t            <p class='notice'></p>\n\t\t        </div>\n\t\t        "]),
    _templateObject15 = _taggedTemplateLiteral(["<a class='tag'>$", "<span data-index='$", "'>", "</span></a>"], ["<a class='tag'>$", "<span data-index='$", "'>", "</span></a>"]),
    _templateObject16 = _taggedTemplateLiteral(["$", "", ""], ["$", "", ""]),
    _templateObject17 = _taggedTemplateLiteral(["<span class='attr_$", "'>$", "</span>"], ["<span class='attr_$", "'>$", "</span>"]),
    _templateObject18 = _taggedTemplateLiteral(["\n\t\t\t         <tr>\n\t\t\t             <td>$", "</td>\n\t\t\t             <td>", "</td>\n\t\t\t         </tr>\n\t\t\t         "], ["\n\t\t\t         <tr>\n\t\t\t             <td>$", "</td>\n\t\t\t             <td>", "</td>\n\t\t\t         </tr>\n\t\t\t         "]),
    _templateObject19 = _taggedTemplateLiteral(["\n\t\t         <div class='sidebar__divider'>\n\t\t             <h1>$", "</h1>\n\t\t         </div>\n\t\t         <div id='tags'>\n\t\t             <div class='attr_$", "'>", "</div>\n\t\t             ", "\n\t\t         </div>\n\t\t         "], ["\n\t\t         <div class='sidebar__divider'>\n\t\t             <h1>$", "</h1>\n\t\t         </div>\n\t\t         <div id='tags'>\n\t\t             <div class='attr_$", "'>", "</div>\n\t\t             ", "\n\t\t         </div>\n\t\t         "]);
build = {},
build.iconic = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = "";
    return n += lychee.html(_templateObject, t, e)
},
build.divider = function(e) {
    var t = "";
    return t += lychee.html(_templateObject2, e)
},
build.editIcon = function(e) {
    var t = "";
    return t += lychee.html(_templateObject3, e, build.iconic("pencil"))
},
build.multiselect = function(e, t) {
    return lychee.html(_templateObject4, e, t)
},
build.album = function(e) {
    var t = "",
        n = lychee.retinize(e.thumbs[0]),
        r = n.path,
        i = n.isPhoto;
    return t += lychee.html(_templateObject5, e.id, e.thumbs[2], e.thumbs[1], e.thumbs[0], r, i, e.title, e.title, e.sysdate), !1 === lychee.publicMode && (t += lychee.html(_templateObject6, "1" === e.star ? "badge--visible" : "", build.iconic("star"), "1" === e.public ? "badge--visible" : "", build.iconic("eye"), "1" === e.unsorted ? "badge--visible" : "", build.iconic("list"), "1" === e.recent ? "badge--visible" : "", build.iconic("clock"), "1" === e.password ? "badge--visible" : "", build.iconic("lock-locked"))), t += "</div>"
},
build.photo = function(e) {
    var t = "",
        n = lychee.retinize(e.thumbUrl),
        r = n.path;
    return t += lychee.html(_templateObject7, e.album, e.id, e.thumbUrl, r, e.title, e.title), "1" === e.cameraDate ? t += lychee.html(_templateObject8, build.iconic("camera-slr"), e.sysdate) : t += lychee.html(_templateObject9, e.sysdate), t += "</div>", !1 === lychee.publicMode && (t += lychee.html(_templateObject10, "1" === e.star ? "badge--visible" : "", build.iconic("star"), "1" === e.public && "1" !== album.json.public ? "badge--visible" : "", build.iconic("eye"))), t += "</div>"
},
build.imageview = function(e, t) {
    var n = "";
    return n += !1 == ("" !== e.medium) ? lychee.html(_templateObject11, !0 === t ? "" : "full", e.url) : lychee.html(_templateObject12, !0 === t ? "" : "full", e.url, e.medium, e.url, e.width), n += "\n\t        <div class='arrow_wrapper arrow_wrapper--previous'><a id='previous'>" + build.iconic("caret-left") + "</a></div>\n\t        <div class='arrow_wrapper arrow_wrapper--next'><a id='next'>" + build.iconic("caret-right") + "</a></div>\n\t        "
},
build.no_content = function(e) {
    var t = "";
    switch (t += "\n\t        <div class='no_content fadeIn'>\n\t            " + build.iconic(e) + "\n\t        ", e) {
    case "magnifying-glass":
        t += "<p>No results</p>";
        break;
    case "eye":
        t += "<p>No public albums</p>";
        break;
    case "cog":
        t += "<p>No configuration</p>";
        break;
    case "question-mark":
        t += "<p>Photo not found</p>"
    }
    return t += "</div>"
},
build.uploadModal = function(e, t) {
    var n = "";
    n += lychee.html(_templateObject13, e);
    for (var r = 0; r < t.length;) {
        var i = t[r];
        i.name.length > 40 && (i.name = i.name.substr(0, 17) + "..." + i.name.substr(i.name.length - 20, 20)),
        n += lychee.html(_templateObject14, i.name),
        r++
    }
    return n += "</div>"
},
build.tags = function(e) {
    var t = "";
    return "" !== e ? (e = e.split(","), e.forEach(function(e, n, r) {
        t += lychee.html(_templateObject15, e, n, build.iconic("x"))
    })) : t = "<div class='empty'>No Tags</div>", t
},
api = {
    path: "php/index.php",
    onError: null
},
api.post = function(e, t, n) {
    loadingBar.show(),
    t = $.extend({
        function: e
    }, t);
    var r = function(e) {
            if (setTimeout(loadingBar.hide, 100), "string" == typeof e && "Error: " === e.substring(0, 7))
                return api.onError(e.substring(7, e.length), t, e), !1;
            n(e)
        },
        i = function(e, n, r) {
            api.onError("Server error or API not found.", t, r)
        };
    $.ajax({
        type: "POST",
        url: api.path,
        data: t,
        dataType: "json",
        success: r,
        error: i
    })
},
header = {
    _dom: $(".header")
},
header.dom = function(e) {
    return null == e || "" === e ? header._dom : header._dom.find(e)
},
header.bind = function() {
    var e = lychee.getEventName();
    return header.dom(".header__title").on(e, function(e) {
        if (!1 === $(this).hasClass("header__title--editable"))
            return !1;
        visible.photo() ? contextMenu.photoTitle(album.getID(), photo.getID(), e) : contextMenu.albumTitle(album.getID(), e)
    }), header.dom("#button_share").on(e, function(e) {
        "1" === photo.json.public || "2" === photo.json.public ? contextMenu.sharePhoto(photo.getID(), e) : photo.setPublic(photo.getID(), e)
    }), header.dom("#button_share_album").on(e, function(e) {
        "1" === album.json.public ? contextMenu.shareAlbum(album.getID(), e) : album.setPublic(album.getID(), !0, e)
    }), header.dom("#button_signin").on(e, lychee.loginDialog), header.dom("#button_settings").on(e, contextMenu.settings), header.dom("#button_info_album").on(e, sidebar.toggle), header.dom("#button_info").on(e, sidebar.toggle), header.dom(".button_add").on(e, contextMenu.add), header.dom("#button_more").on(e, function(e) {
        contextMenu.photoMore(photo.getID(), e)
    }), header.dom("#button_move").on(e, function(e) {
        contextMenu.move([photo.getID()], e)
    }), header.dom(".header__hostedwith").on(e, function() {
        window.open(lychee.website)
    }), header.dom("#button_trash_album").on(e, function() {
        album.delete([album.getID()])
    }), header.dom("#button_trash").on(e, function() {
        photo.delete([photo.getID()])
    }), header.dom("#button_archive").on(e, function() {
        album.getArchive(album.getID())
    }), header.dom("#button_star").on(e, function() {
        photo.setStar([photo.getID()])
    }), header.dom("#button_back_home").on(e, function() {
        lychee.goto()
    }), header.dom("#button_back").on(e, function() {
        lychee.goto(album.getID())
    }), header.dom(".header__search").on("keyup click", function() {
        search.find($(this).val())
    }), header.dom(".header__clear").on(e, function() {
        header.dom(".header__search").focus(),
        search.reset()
    }), !0
},
header.show = function() {
    return lychee.imageview.removeClass("full"), header.dom().removeClass("header--hidden"), !0
},
header.hide = function(e) {
    return !(!visible.photo() || visible.sidebar() || visible.contextMenu() || !1 !== basicModal.visible()) && (lychee.imageview.addClass("full"), header.dom().addClass("header--hidden"), !0)
},
header.setTitle = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Untitled",
        t = header.dom(".header__title"),
        n = lychee.html(_templateObject16, e, build.iconic("caret-bottom"));
    return t.html(n), !0
},
header.setMode = function(e) {
    switch ("albums" === e && !0 === lychee.publicMode && (e = "public"), e) {
    case "public":
        return header.dom().removeClass("header--view"), header.dom(".header__toolbar--albums, .header__toolbar--album, .header__toolbar--photo").removeClass("header__toolbar--visible"), header.dom(".header__toolbar--public").addClass("header__toolbar--visible"), !0;
    case "albums":
        return header.dom().removeClass("header--view"), header.dom(".header__toolbar--public, .header__toolbar--album, .header__toolbar--photo").removeClass("header__toolbar--visible"), header.dom(".header__toolbar--albums").addClass("header__toolbar--visible"), !0;
    case "album":
        var t = album.getID();
        return header.dom().removeClass("header--view"), header.dom(".header__toolbar--public, .header__toolbar--albums, .header__toolbar--photo").removeClass("header__toolbar--visible"), header.dom(".header__toolbar--album").addClass("header__toolbar--visible"), !1 === album.json.content ? $("#button_archive").hide() : $("#button_archive").show(), !0 === lychee.publicMode && "0" === album.json.downloadable && $("#button_archive").hide(), "s" === t || "f" === t || "r" === t ? $("#button_info_album, #button_trash_album, #button_share_album").hide() : "0" === t ? ($("#button_info_album, #button_share_album").hide(), $("#button_trash_album").show()) : $("#button_info_album, #button_trash_album, #button_share_album").show(), !0;
    case "photo":
        return header.dom().addClass("header--view"), header.dom(".header__toolbar--public, .header__toolbar--albums, .header__toolbar--album").removeClass("header__toolbar--visible"), header.dom(".header__toolbar--photo").addClass("header__toolbar--visible"), !0
    }
    return !1
},
header.setEditable = function(e) {
    var t = header.dom(".header__title");
    return !0 === lychee.publicMode && (e = !1), e ? t.addClass("header__title--editable") : t.removeClass("header__title--editable"), !0
},
visible = {},
visible.albums = function() {
    return !!header.dom(".header__toolbar--public").hasClass("header__toolbar--visible") || !!header.dom(".header__toolbar--albums").hasClass("header__toolbar--visible")
},
visible.album = function() {
    return !!header.dom(".header__toolbar--album").hasClass("header__toolbar--visible")
},
visible.photo = function() {
    return $("#imageview.fadeIn").length > 0
},
visible.search = function() {
    return null != search.hash
},
visible.sidebar = function() {
    return !0 === sidebar.dom().hasClass("active")
},
visible.sidebarbutton = function() {
    return !!visible.photo() || !!(visible.album() && $("#button_info_album:visible").length > 0)
},
visible.header = function() {
    return !0 !== header.dom().hasClass("header--hidden")
},
visible.contextMenu = function() {
    return basicContext.visible()
},
visible.multiselect = function() {
    return $("#multiselect").length > 0
},
sidebar = {
    _dom: $(".sidebar"),
    types: {
        DEFAULT: 0,
        TAGS: 1
    },
    createStructure: {}
},
sidebar.dom = function(e) {
    return null == e || "" === e ? sidebar._dom : sidebar._dom.find(e)
},
sidebar.bind = function() {
    var e = lychee.getEventName();
    return sidebar.dom("#edit_title").off(e).on(e, function() {
        visible.photo() ? photo.setTitle([photo.getID()]) : visible.album() && album.setTitle([album.getID()])
    }), sidebar.dom("#edit_description").off(e).on(e, function() {
        visible.photo() ? photo.setDescription(photo.getID()) : visible.album() && album.setDescription(album.getID())
    }), sidebar.dom("#edit_tags").off(e).on(e, function() {
        photo.editTags([photo.getID()])
    }), sidebar.dom("#tags .tag span").off(e).on(e, function() {
        photo.deleteTag(photo.getID(), $(this).data("index"))
    }), !0
},
sidebar.toggle = function() {
    return !(!visible.sidebar() && !visible.sidebarbutton()) && (header.dom(".button--info").toggleClass("active"), lychee.content.toggleClass("content--sidebar"), sidebar.dom().toggleClass("active"), !0)
},
sidebar.setSelectable = function() {
    !0 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? sidebar.dom().removeClass("notSelectable") : sidebar.dom().addClass("notSelectable")
},
sidebar.changeAttr = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != e && "" !== e && (null != t && "" !== t || (t = "-"), !1 === n && (t = lychee.escapeHTML(t)), sidebar.dom(".attr_" + e).html(t), !0)
},
sidebar.createStructure.photo = function(e) {
    if (null == e || "" === e)
        return !1;
    var t = !1,
        n = e.takestamp + e.make + e.model + e.shutter + e.aperture + e.focal + e.iso,
        r = {},
        i = "";
    switch (!1 === lychee.publicMode && (t = !0), e.public) {
    case "0":
        i = "No";
        break;
    case "1":
        i = "Yes";
        break;
    case "2":
        i = "Yes (Album)";
        break;
    default:
        i = "-"
    }
    return r.basics = {
        title: "Basics",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Title",
            value: e.title,
            editable: t
        }, {
            title: "Uploaded",
            value: e.sysdate
        }, {
            title: "Description",
            value: e.description,
            editable: t
        }]
    }, r.image = {
        title: "Image",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Size",
            value: e.size
        }, {
            title: "Format",
            value: e.type
        }, {
            title: "Resolution",
            value: e.width + " x " + e.height
        }]
    }, !1 === lychee.publicMode ? r.tags = {
        title: "Tags",
        type: sidebar.types.TAGS,
        value: build.tags(e.tags),
        editable: t
    } : r.tags = {}, r.exif = "0" !== n ? {
        title: "Camera",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Captured",
            value: e.takedate
        }, {
            title: "Make",
            value: e.make
        }, {
            title: "Type/Model",
            value: e.model
        }, {
            title: "Shutter Speed",
            value: e.shutter
        }, {
            title: "Aperture",
            value: e.aperture
        }, {
            title: "Focal Length",
            value: e.focal
        }, {
            title: "ISO",
            value: e.iso
        }]
    } : {}, r.sharing = {
        title: "Sharing",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Public",
            value: i
        }]
    }, r = [r.basics, r.image, r.tags, r.exif, r.sharing]
},
sidebar.createStructure.album = function(e) {
    if (null == e || "" === e)
        return !1;
    var t = !1,
        n = {},
        r = "",
        i = "",
        o = "",
        a = "";
    switch (!1 === lychee.publicMode && (t = !0), e.public) {
    case "0":
        r = "No";
        break;
    case "1":
        r = "Yes";
        break;
    default:
        r = "-"
    }
    switch (e.visible) {
    case "0":
        i = "Yes";
        break;
    case "1":
        i = "No";
        break;
    default:
        i = "-"
    }
    switch (e.downloadable) {
    case "0":
        o = "No";
        break;
    case "1":
        o = "Yes";
        break;
    default:
        o = "-"
    }
    switch (e.password) {
    case "0":
        a = "No";
        break;
    case "1":
        a = "Yes";
        break;
    default:
        a = "-"
    }
    return n.basics = {
        title: "Basics",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Title",
            value: e.title,
            editable: t
        }, {
            title: "Description",
            value: e.description,
            editable: t
        }]
    }, n.album = {
        title: "Album",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Created",
            value: e.sysdate
        }, {
            title: "Images",
            value: e.num
        }]
    }, n.share = {
        title: "Share",
        type: sidebar.types.DEFAULT,
        rows: [{
            title: "Public",
            value: r
        }, {
            title: "Hidden",
            value: i
        }, {
            title: "Downloadable",
            value: o
        }, {
            title: "Password",
            value: a
        }]
    }, n = [n.basics, n.album, n.share]
},
sidebar.render = function(e) {
    if (null == e || "" === e || !1 === e)
        return !1;
    var t = "",
        n = function(e) {
            var t = "";
            return t += "\n\t\t         <div class='sidebar__divider'>\n\t\t             <h1>" + e.title + "</h1>\n\t\t         </div>\n\t\t         <table>\n\t\t         ", e.rows.forEach(function(e) {
                var n = e.value;
                "" !== n && null != n || (n = "-"),
                n = lychee.html(_templateObject17, e.title.toLowerCase(), n),
                !0 === e.editable && (n += " " + build.editIcon("edit_" + e.title.toLowerCase())),
                t += lychee.html(_templateObject18, e.title, n)
            }), t += "\n\t\t         </table>\n\t\t         "
        },
        r = function(e) {
            var t = "",
                n = "";
            return !0 === e.editable && (n = build.editIcon("edit_tags")), t += lychee.html(_templateObject19, e.title, e.title.toLowerCase(), e.value, n)
        };
    return e.forEach(function(e) {
        e.type === sidebar.types.DEFAULT ? t += n(e) : e.type === sidebar.types.TAGS && (t += r(e))
    }), t
};
var lychee = {};
lychee.content = $(".content"),
lychee.escapeHTML = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e += "", e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#96;")
},
lychee.html = function(e) {
    for (var t = e.raw, n = "", r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        i[o - 1] = arguments[o];
    return i.forEach(function(e, r) {
        var i = t[r];
        "$" === i.slice(-1) && (e = lychee.escapeHTML(e), i = i.slice(0, -1)),
        n += i,
        n += e
    }), n += t[t.length - 1]
},
lychee.getEventName = function() {
    return !0 === (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && "ontouchend" in document.documentElement) ? "touchend" : "click"
};
var photo = {};
photo.share = function(e, t) {
    var n = location.toString();
    switch (t) {
    case "twitter":
        window.open("https://twitter.com/share?url=" + encodeURI(n));
        break;
    case "facebook":
        window.open("http://www.facebook.com/sharer.php?u=" + encodeURI(n));
        break;
    case "mail":
        location.href = "mailto:?subject=&body=" + encodeURI(n)
    }
},
photo.getDirectLink = function() {
    return $("#imageview img").attr("src").replace(/"/g, "").replace(/url\(|\)$/gi, "")
};
var contextMenu = {};
contextMenu.sharePhoto = function(e, t) {
    var n = [{
        title: build.iconic("twitter", "ionicons") + "Twitter",
        fn: function() {
            return photo.share(e, "twitter")
        }
    }, {
        title: build.iconic("facebook", "ionicons") + "Facebook",
        fn: function() {
            return photo.share(e, "facebook")
        }
    }, {
        title: build.iconic("envelope-closed") + "Mail",
        fn: function() {
            return photo.share(e, "mail")
        }
    }, {
        title: build.iconic("link-intact") + "Direct Link",
        fn: function() {
            return window.open(photo.getDirectLink(), "_newtab")
        }
    }];
    basicContext.show(n, t.originalEvent)
};
var loadingBar = {
        show: function() {},
        hide: function() {}
    },
    imageview = $("#imageview");
$(document).ready(function() {
    var e = gup("p");
    api.onError = error,
    header.dom("#button_share").on("click", function(t) {
        contextMenu.sharePhoto(e, t)
    }),
    header.dom("#button_info").on("click", sidebar.toggle),
    loadPhotoInfo(e)
});
var loadPhotoInfo = function(e) {
        var t = {
            photoID: e,
            albumID: 0,
            password: ""
        };
        api.post("Photo::get", t, function(e) {
            if ("Warning: Photo private!" === e || "Warning: Wrong password!" === e)
                return $("body").append(build.no_content("question-mark")), $("body").removeClass("view"), header.dom().remove(), !1;
            e.title || (e.title = "Untitled"),
            document.title = "IDP – Fotos | " + e.title,
            header.dom(".header__title").html(lychee.escapeHTML(e.title)),
            imageview.html(build.imageview(e, !0)),
            imageview.find(".arrow_wrapper").remove(),
            imageview.addClass("fadeIn").show();
            var t = sidebar.createStructure.photo(e),
                n = sidebar.render(t);
            sidebar.dom(".sidebar__wrapper").html(n),
            sidebar.bind()
        })
    },
    error = function(e, t, n) {
        console.error({
            description: e,
            params: t,
            response: n
        }),
        loadingBar.show("error", e)
    };
