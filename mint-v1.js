	//<![CDATA[
	/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
	"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	    function (a, b, c) {
	        function d(c) {
	            var d = b.console;
	            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
	        }

	        function e(b, c, e, f) {
	            if (Object.defineProperty) try {
	                return void Object.defineProperty(b, c, {
	                    configurable: !0,
	                    enumerable: !0,
	                    get: function () {
	                        return d(f), e
	                    },
	                    set: function (a) {
	                        d(f), e = a
	                    }
	                })
	            } catch (g) {}
	            a._definePropertyBroken = !0, b[c] = e
	        }
	        a.migrateVersion = "1.4.1";
	        var f = {};
	        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
	            f = {}, a.migrateWarnings.length = 0
	        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
	        var g = a("<input/>", {
	                size: 1
	            }).attr("size") && a.attrFn,
	            h = a.attr,
	            i = a.attrHooks.value && a.attrHooks.value.get || function () {
	                return null
	            },
	            j = a.attrHooks.value && a.attrHooks.value.set || function () {
	                return c
	            },
	            k = /^(?:input|button)$/i,
	            l = /^[238]$/,
	            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	            n = /^(?:checked|selected)$/i;
	        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
	            var j = e.toLowerCase(),
	                o = b && b.nodeType;
	            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
	                get: function (b, d) {
	                    var e, f = a.prop(b, d);
	                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
	                },
	                set: function (b, c, d) {
	                    var e;
	                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
	                }
	            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
	        }, a.attrHooks.value = {
	            get: function (a, b) {
	                var c = (a.nodeName || "").toLowerCase();
	                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
	            },
	            set: function (a, b) {
	                var c = (a.nodeName || "").toLowerCase();
	                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
	            }
	        };
	        var o, p, q = a.fn.init,
	            r = a.find,
	            s = a.parseJSON,
	            t = /^\s*</,
	            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
	            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
	            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
	        a.fn.init = function (b, e, f) {
	            var g, h;
	            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
	        }, a.fn.init.prototype = a.fn, a.find = function (a) {
	            var b = Array.prototype.slice.call(arguments);
	            if ("string" == typeof a && u.test(a)) try {
	                document.querySelector(a)
	            } catch (c) {
	                a = a.replace(v, function (a, b, c, d) {
	                    return "[" + b + c + '"' + d + '"]'
	                });
	                try {
	                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
	                } catch (e) {
	                    d("Attribute selector with '#' was not fixed: " + b[0])
	                }
	            }
	            return r.apply(this, b)
	        };
	        var x;
	        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
	        a.parseJSON = function (a) {
	            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
	        }, a.uaMatch = function (a) {
	            a = a.toLowerCase();
	            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
	            return {
	                browser: b[1] || "",
	                version: b[2] || "0"
	            }
	        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
	            function b(a, c) {
	                return new b.fn.init(a, c)
	            }
	            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
	                var f = a.fn.init.call(this, d, e, c);
	                return f instanceof b ? f : b(f)
	            }, b.fn.init.prototype = b.fn;
	            var c = b(document);
	            return d("jQuery.sub() is deprecated"), b
	        }, a.fn.size = function () {
	            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
	        };
	        var y = !1;
	        a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
	            var d = a.cssHooks[c] && a.cssHooks[c].get;
	            d && (a.cssHooks[c].get = function () {
	                var a;
	                return y = !0, a = d.apply(this, arguments), y = !1, a
	            })
	        }), a.swap = function (a, b, c, e) {
	            var f, g, h = {};
	            y || d("jQuery.swap() is undocumented and deprecated");
	            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
	            f = c.apply(a, e || []);
	            for (g in b) a.style[g] = h[g];
	            return f
	        }, a.ajaxSetup({
	            converters: {
	                "text json": a.parseJSON
	            }
	        });
	        var z = a.fn.data;
	        a.fn.data = function (b) {
	            var e, f, g = this[0];
	            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
	        };
	        var A = /\/(java|ecma)script/i;
	        a.clean || (a.clean = function (b, c, e, f) {
	            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
	            var g, h, i, j, k = [];
	            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
	                for (i = function (a) {
	                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
	                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
	            return k
	        });
	        var B = a.event.add,
	            C = a.event.remove,
	            D = a.event.trigger,
	            E = a.fn.toggle,
	            F = a.fn.live,
	            G = a.fn.die,
	            H = a.fn.load,
	            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	            J = new RegExp("\\b(?:" + I + ")\\b"),
	            K = /(?:^|\s)hover(\.\S+|)\b/,
	            L = function (b) {
	                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
	            };
	        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
	            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
	        }, a.event.remove = function (a, b, c, d, e) {
	            C.call(this, a, L(b) || "", c, d, e)
	        }, a.each(["load", "unload", "error"], function (b, c) {
	            a.fn[c] = function () {
	                var a = Array.prototype.slice.call(arguments, 0);
	                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
	            }
	        }), a.fn.toggle = function (b, c) {
	            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
	            d("jQuery.fn.toggle(handler, handler...) is deprecated");
	            var e = arguments,
	                f = b.guid || a.guid++,
	                g = 0,
	                h = function (c) {
	                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
	                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
	                };
	            for (h.guid = f; g < e.length;) e[g++].guid = f;
	            return this.click(h)
	        }, a.fn.live = function (b, c, e) {
	            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
	        }, a.fn.die = function (b, c) {
	            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
	        }, a.event.trigger = function (a, b, c, e) {
	            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
	        }, a.each(I.split("|"), function (b, c) {
	            a.event.special[c] = {
	                setup: function () {
	                    var b = this;
	                    return b !== document && (a.event.add(document, c + "." + a.guid, function () {
	                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
	                    }), a._data(this, c, a.guid++)), !1
	                },
	                teardown: function () {
	                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
	                }
	            }
	        }), a.event.special.ready = {
	            setup: function () {
	                this === document && d("'ready' event is deprecated")
	            }
	        };
	        var M = a.fn.andSelf || a.fn.addBack,
	            N = a.fn.find;
	        if (a.fn.andSelf = function () {
	                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
	            }, a.fn.find = function (a) {
	                var b = N.apply(this, arguments);
	                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
	            }, a.Callbacks) {
	            var O = a.Deferred,
	                P = [
	                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
	                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
	                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
	                ];
	            a.Deferred = function (b) {
	                var c = O(),
	                    e = c.promise();
	                return c.pipe = e.pipe = function () {
	                    var b = arguments;
	                    return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
	                        a.each(P, function (f, g) {
	                            var h = a.isFunction(b[f]) && b[f];
	                            c[g[1]](function () {
	                                var b = h && h.apply(this, arguments);
	                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
	                            })
	                        }), b = null
	                    }).promise()
	                }, c.isResolved = function () {
	                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
	                }, c.isRejected = function () {
	                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
	                }, b && b.call(c, c), c
	            }
	        }
	    }(jQuery, window);

	/*! jQuery & Zepto Lazy v1.7.7 */
	! function (t, e) {
	    "use strict";

	    function r(r, a, o, l, s) {
	        function u() {
	            L = t.devicePixelRatio > 1, o = c(o), a.delay >= 0 && setTimeout(function () {
	                d(!0)
	            }, a.delay), (a.delay < 0 || a.combined) && (l.e = function (t, e) {
	                var n, o = 0;
	                return function (i, l) {
	                    function s() {
	                        o = +new Date, e.call(r, i)
	                    }
	                    var u = +new Date - o;
	                    n && clearTimeout(n), u > t || !a.enableThrottle || l ? s() : n = setTimeout(s, t - u)
	                }
	            }(a.throttle, function (t) {
	                "resize" === t.type && (w = z = -1), d(t.all)
	            }), l.a = function (t) {
	                t = c(t), o.push.apply(o, t)
	            }, l.g = function () {
	                return o = n(o).filter(function () {
	                    return !n(this).data(a.loadedName)
	                })
	            }, l.f = function (t) {
	                for (var e = 0; e < t.length; e++) {
	                    var r = o.filter(function () {
	                        return this === t[e]
	                    });
	                    r.length && d(!1, r)
	                }
	            }, d(), n(a.appendScroll).on("scroll." + s + " resize." + s, l.e))
	        }

	        function c(t) {
	            for (var o = a.defaultImage, i = a.placeholder, l = a.imageBase, s = a.srcsetAttribute, u = a.loaderAttribute, c = a._f || {}, d = 0, f = (t = n(t).filter(function () {
	                    var t = n(this),
	                        r = A(this);
	                    return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(s) || t.attr(u) || c[r] !== e)
	                }).data("plugin_" + a.name, r)).length; d < f; d++) {
	                var h = n(t[d]),
	                    g = A(t[d]),
	                    m = h.attr(a.imageBaseAttribute) || l;
	                g === C && m && h.attr(s) && h.attr(s, p(h.attr(s), m)), c[g] === e || h.attr(u) || h.attr(u, c[g]), g === C && o && !h.attr(D) ? h.attr(D, o) : g === C || !i || h.css(j) && "none" !== h.css(j) || h.css(j, "url('" + i + "')")
	            }
	            return t
	        }

	        function d(t, e) {
	            if (o.length) {
	                for (var i = e || o, l = !1, s = a.imageBase || "", u = a.srcsetAttribute, c = a.handledName, d = 0; d < i.length; d++)
	                    if (t || e || h(i[d])) {
	                        var g = n(i[d]),
	                            m = A(i[d]),
	                            p = g.attr(a.attribute),
	                            v = g.attr(a.imageBaseAttribute) || s,
	                            b = g.attr(a.loaderAttribute);
	                        g.data(c) || a.visibleOnly && !g.is(":visible") || !((p || g.attr(u)) && (m === C && (v + p !== g.attr(D) || g.attr(u) !== g.attr(I)) || m !== C && v + p !== g.css(j)) || b) || (l = !0, g.data(c, !0), f(g, m, v, b))
	                    } l && (o = n(o).filter(function () {
	                    return !n(this).data(c)
	                }))
	            } else a.autoDestroy && r.destroy()
	        }

	        function f(t, e, r, o) {
	            ++y;
	            var i = function () {
	                b("onError", t), v(), i = n.noop
	            };
	            b("beforeLoad", t);
	            var l = a.attribute,
	                s = a.srcsetAttribute,
	                u = a.sizesAttribute,
	                c = a.retinaAttribute,
	                d = a.removeAttribute,
	                f = a.loadedName,
	                h = t.attr(c);
	            if (o) {
	                var g = function () {
	                    d && t.removeAttr(a.loaderAttribute), t.data(f, !0), b(T, t), setTimeout(v, 1), g = n.noop
	                };
	                t.off(O).one(O, i).one(B, g), b(o, t, function (e) {
	                    e ? (t.off(B), g()) : (t.off(O), i())
	                }) || t.trigger(O)
	            } else {
	                var m = n(new Image);
	                m.one(O, i).one(B, function () {
	                    t.hide(), e === C ? t.attr(N, m.attr(N)).attr(I, m.attr(I)).attr(D, m.attr(D)) : t.css(j, "url('" + m.attr(D) + "')"), t[a.effect](a.effectTime), d && (t.removeAttr(l + " " + s + " " + c + " " + a.imageBaseAttribute), u !== N && t.removeAttr(u)), t.data(f, !0), b(T, t), m.remove(), v()
	                });
	                var A = (L && h ? h : t.attr(l)) || "";
	                m.attr(N, t.attr(u)).attr(I, t.attr(s)).attr(D, A ? r + A : null), m.complete && m.trigger(B)
	            }
	        }

	        function h(t) {
	            var e = t.getBoundingClientRect(),
	                r = a.scrollDirection,
	                n = a.threshold,
	                o = m() + n > e.top && -n < e.bottom,
	                i = g() + n > e.left && -n < e.right;
	            return "vertical" === r ? o : "horizontal" === r ? i : o && i
	        }

	        function g() {
	            return w >= 0 ? w : w = n(t).width()
	        }

	        function m() {
	            return z >= 0 ? z : z = n(t).height()
	        }

	        function A(t) {
	            return t.tagName.toLowerCase()
	        }

	        function p(t, e) {
	            if (e) {
	                var r = t.split(",");
	                t = "";
	                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
	            }
	            return t
	        }

	        function v() {
	            --y, o.length || y || b("onFinishedAll")
	        }

	        function b(t, e, n) {
	            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
	        }
	        var y = 0,
	            w = -1,
	            z = -1,
	            L = !1,
	            T = "afterLoad",
	            B = "load",
	            O = "error",
	            C = "img",
	            D = "src",
	            I = "srcset",
	            N = "sizes",
	            j = "background-image";
	        "event" === a.bind || i ? u() : n(t).on(B + "." + s, u)
	    }

	    function a(a, i) {
	        var l = this,
	            s = n.extend({}, l.config, i),
	            u = {},
	            c = s.name + "-" + ++o;
	        return l.config = function (t, r) {
	            return r === e ? s[t] : (s[t] = r, l)
	        }, l.addItems = function (t) {
	            return u.a && u.a("string" === n.type(t) ? n(t) : t), l
	        }, l.getItems = function () {
	            return u.g ? u.g() : {}
	        }, l.update = function (t) {
	            return u.e && u.e({}, !t), l
	        }, l.force = function (t) {
	            return u.f && u.f("string" === n.type(t) ? n(t) : t), l
	        }, l.loadAll = function () {
	            return u.e && u.e({
	                all: !0
	            }, !0), l
	        }, l.destroy = function () {
	            return n(s.appendScroll).off("." + c, u.e), n(t).off("." + c), u = {}, e
	        }, r(l, s, a, u, c), s.chainable ? a : l
	    }
	    var n = t.jQuery || t.Zepto,
	        o = 0,
	        i = !1;
	    n.fn.Lazy = n.fn.lazy = function (t) {
	        return new a(this, t)
	    }, n.Lazy = n.lazy = function (t, r, o) {
	        if (n.isFunction(r) && (o = r, r = []), n.isFunction(o)) {
	            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
	            for (var i = a.prototype.config, l = i._f || (i._f = {}), s = 0, u = t.length; s < u; s++)(i[t[s]] === e || n.isFunction(i[t[s]])) && (i[t[s]] = o);
	            for (var c = 0, d = r.length; c < d; c++) l[r[c]] = t[0]
	        }
	    }, a.prototype.config = {
	        name: "lazy",
	        chainable: !0,
	        autoDestroy: !0,
	        bind: "load",
	        threshold: 500,
	        visibleOnly: !1,
	        appendScroll: t,
	        scrollDirection: "both",
	        imageBase: null,
	        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
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
	        onFinishedAll: e
	    }, n(t).on("load", function () {
	        i = !0
	    })
	}(window),
	function (t) {
	    t.lazy(["frame", "iframe"], "iframe", function (e, r) {
	        var a = this;
	        if ("iframe" === e[0].tagName.toLowerCase()) {
	            var n = e.attr("data-error-detect");
	            "true" !== n && "1" !== n ? (e.attr("src", e.attr("data-src")), a.config("removeAttribute") && e.removeAttr("data-src data-error-detect")) : t.ajax({
	                url: e.attr("data-src"),
	                dataType: "html",
	                crossDomain: !0,
	                xhrFields: {
	                    withCredentials: !0
	                },
	                success: function (t) {
	                    e.html(t).attr("src", e.attr("data-src")), a.config("removeAttribute") && e.removeAttr("data-src data-error-detect")
	                },
	                error: function () {
	                    r(!1)
	                }
	            })
	        } else r(!1)
	    })
	}(window.jQuery || window.Zepto),
	function (t, e, r, a) {
	    "use strict";
	    var n = t(e),
	        o = function (t, e) {
	            var r, a;
	            return function () {
	                var n = this,
	                    o = arguments,
	                    i = +new Date;
	                r && i < r + t ? (clearTimeout(a), a = setTimeout(function () {
	                    r = i, e.apply(n, o)
	                }, t)) : (r = i, e.apply(n, o))
	            }
	        },
	        i = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
	        l = !1,
	        s = 250,
	        u = t([]),
	        c = t([]),
	        d = t([]),
	        f = function (t) {
	            (adsbygoogle = e.adsbygoogle || []).push({});
	            var r = t.data("alOptions").onLoad;
	            "function" == typeof r && t.find("iframe").one("load", function () {
	                r(t)
	            })
	        },
	        h = function (t) {
	            return parseInt(e.getComputedStyle(t, ":before").getPropertyValue("content").slice(1, -1) || 9999)
	        },
	        g = function () {
	            if (!c.length) return !0;
	            var e = n.scrollTop(),
	                r = n.height();
	            c.each(function () {
	                var a = t(this),
	                    n = a.data("alOptions").laziness + 1,
	                    o = a.offset().top;
	                if (o - e > r * n || e - o - a.outerHeight() - r * n > 0) return !0;
	                c = c.not(a), u = u.add(a), a.data("alOriginalHTML", a.html()).data("alWidth", h(this)).children(":first").addClass("adsbygoogle"), "undefined" != typeof adsbygoogle ? f(a) : d = d.add(a), l || (l = !0, t.ajax({
	                    url: i,
	                    async: !0,
	                    cache: !0,
	                    dataType: "script",
	                    success: function () {
	                        d.each(function () {
	                            f(t(this))
	                        }), d = t([])
	                    }
	                }))
	            })
	        };
	    n.on("scroll resize", o(s, g)).on("resize", o(s, function () {
	        if (!u.length) return !0;
	        var e = !1;
	        u.each(function () {
	            var r = t(this);
	            r.data("alWidth") != h(this) && (u = u.not(r), r.html(r.data("alOriginalHTML")), c = c.add(r), e = !0)
	        }), e && g()
	    })), t.fn.adsenseLoader = function (e) {
	        return "string" != typeof e && (e = t.extend({}, {
	            laziness: 1,
	            onLoad: !1
	        }, e)), this.each(function () {
	            var r = t(this);
	            "destroy" === e ? (r.html(r.data("alOriginalHTML")), c = c.not(r), u = u.not(r), d = d.not(r)) : (r.data("alOptions", e), c = c.add(r))
	        }), "destroy" !== e && g(), this
	    }, t.adsenseLoaderConfig = function (t) {
	        void 0 !== t.scriptUrl && (i = t.scriptUrl), void 0 !== t.throttle && (s = t.throttle)
	    }
	}(jQuery, window, document);

	/* aos.js?ver=3.1.4 */
	! function (e, t) {
	    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
	}(this, function () {
	    return function (e) {
	        function t(o) {
	            if (n[o]) return n[o].exports;
	            var i = n[o] = {
	                exports: {},
	                id: o,
	                loaded: !1
	            };
	            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
	        }
	        var n = {};
	        return t.m = e, t.c = n, t.p = "dist/", t(0)
	    }([function (e, t, n) {
	        "use strict";

	        function o(e) {
	            return e && e.__esModule ? e : {
	                default: e
	            }
	        }
	        var i = Object.assign || function (e) {
	                for (var t = 1; t < arguments.length; t++) {
	                    var n = arguments[t];
	                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
	                }
	                return e
	            },
	            r = n(1),
	            a = (o(r), n(6)),
	            u = o(a),
	            c = n(7),
	            f = o(c),
	            s = n(8),
	            d = o(s),
	            l = n(9),
	            p = o(l),
	            m = n(10),
	            b = o(m),
	            v = n(11),
	            y = o(v),
	            g = n(14),
	            h = o(g),
	            w = [],
	            k = !1,
	            x = document.all && !window.atob,
	            j = {
	                offset: 120,
	                delay: 0,
	                easing: "ease",
	                duration: 400,
	                disable: !1,
	                once: !1,
	                startEvent: "DOMContentLoaded"
	            },
	            O = function () {
	                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
	                if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
	            },
	            S = function () {
	                w = (0, h.default)(), O()
	            },
	            _ = function () {
	                w.forEach(function (e, t) {
	                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
	                })
	            },
	            E = function (e) {
	                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
	            },
	            z = function (e) {
	                return j = i(j, e), w = (0, h.default)(), E(j.disable) || x ? _() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function () {
	                    O(!0)
	                }) : document.addEventListener(j.startEvent, function () {
	                    O(!0)
	                }), window.addEventListener("resize", (0, f.default)(O, 50, !0)), window.addEventListener("orientationchange", (0, f.default)(O, 50, !0)), window.addEventListener("scroll", (0, u.default)(function () {
	                    (0, b.default)(w, j.once)
	                }, 99)), document.addEventListener("DOMNodeRemoved", function (e) {
	                    var t = e.target;
	                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, f.default)(S, 50, !0)
	                }), (0, d.default)("[data-aos]", S), w)
	            };
	        e.exports = {
	            init: z,
	            refresh: O,
	            refreshHard: S
	        }
	    }, function (e, t) {}, , , , , function (e, t) {
	        (function (t) {
	            "use strict";

	            function n(e, t, n) {
	                function o(t) {
	                    var n = b,
	                        o = v;
	                    return b = v = void 0, k = t, g = e.apply(o, n)
	                }

	                function r(e) {
	                    return k = e, h = setTimeout(s, t), S ? o(e) : g
	                }

	                function a(e) {
	                    var n = e - w,
	                        o = e - k,
	                        i = t - n;
	                    return _ ? j(i, y - o) : i
	                }

	                function c(e) {
	                    var n = e - w,
	                        o = e - k;
	                    return void 0 === w || n >= t || n < 0 || _ && o >= y
	                }

	                function s() {
	                    var e = O();
	                    return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
	                }

	                function d(e) {
	                    return h = void 0, E && b ? o(e) : (b = v = void 0, g)
	                }

	                function l() {
	                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
	                }

	                function p() {
	                    return void 0 === h ? g : d(O())
	                }

	                function m() {
	                    var e = O(),
	                        n = c(e);
	                    if (b = arguments, v = this, w = e, n) {
	                        if (void 0 === h) return r(w);
	                        if (_) return h = setTimeout(s, t), o(w)
	                    }
	                    return void 0 === h && (h = setTimeout(s, t)), g
	                }
	                var b, v, y, g, h, w, k = 0,
	                    S = !1,
	                    _ = !1,
	                    E = !0;
	                if ("function" != typeof e) throw new TypeError(f);
	                return t = u(t) || 0, i(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? x(u(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m
	            }

	            function o(e, t, o) {
	                var r = !0,
	                    a = !0;
	                if ("function" != typeof e) throw new TypeError(f);
	                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
	                    leading: r,
	                    maxWait: t,
	                    trailing: a
	                })
	            }

	            function i(e) {
	                var t = "undefined" == typeof e ? "undefined" : c(e);
	                return !!e && ("object" == t || "function" == t)
	            }

	            function r(e) {
	                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
	            }

	            function a(e) {
	                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
	            }

	            function u(e) {
	                if ("number" == typeof e) return e;
	                if (a(e)) return s;
	                if (i(e)) {
	                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
	                    e = i(t) ? t + "" : t
	                }
	                if ("string" != typeof e) return 0 === e ? e : +e;
	                e = e.replace(l, "");
	                var n = m.test(e);
	                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
	            }
	            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
	                    return typeof e
	                } : function (e) {
	                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	                },
	                f = "Expected a function",
	                s = NaN,
	                d = "[object Symbol]",
	                l = /^\s+|\s+$/g,
	                p = /^[-+]0x[0-9a-f]+$/i,
	                m = /^0b[01]+$/i,
	                b = /^0o[0-7]+$/i,
	                v = parseInt,
	                y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
	                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
	                h = y || g || Function("return this")(),
	                w = Object.prototype,
	                k = w.toString,
	                x = Math.max,
	                j = Math.min,
	                O = function () {
	                    return h.Date.now()
	                };
	            e.exports = o
	        }).call(t, function () {
	            return this
	        }())
	    }, function (e, t) {
	        (function (t) {
	            "use strict";

	            function n(e, t, n) {
	                function i(t) {
	                    var n = b,
	                        o = v;
	                    return b = v = void 0, O = t, g = e.apply(o, n)
	                }

	                function r(e) {
	                    return O = e, h = setTimeout(s, t), S ? i(e) : g
	                }

	                function u(e) {
	                    var n = e - w,
	                        o = e - O,
	                        i = t - n;
	                    return _ ? x(i, y - o) : i
	                }

	                function f(e) {
	                    var n = e - w,
	                        o = e - O;
	                    return void 0 === w || n >= t || n < 0 || _ && o >= y
	                }

	                function s() {
	                    var e = j();
	                    return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
	                }

	                function d(e) {
	                    return h = void 0, E && b ? i(e) : (b = v = void 0, g)
	                }

	                function l() {
	                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
	                }

	                function p() {
	                    return void 0 === h ? g : d(j())
	                }

	                function m() {
	                    var e = j(),
	                        n = f(e);
	                    if (b = arguments, v = this, w = e, n) {
	                        if (void 0 === h) return r(w);
	                        if (_) return h = setTimeout(s, t), i(w)
	                    }
	                    return void 0 === h && (h = setTimeout(s, t)), g
	                }
	                var b, v, y, g, h, w, O = 0,
	                    S = !1,
	                    _ = !1,
	                    E = !0;
	                if ("function" != typeof e) throw new TypeError(c);
	                return t = a(t) || 0, o(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? k(a(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m
	            }

	            function o(e) {
	                var t = "undefined" == typeof e ? "undefined" : u(e);
	                return !!e && ("object" == t || "function" == t)
	            }

	            function i(e) {
	                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
	            }

	            function r(e) {
	                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
	            }

	            function a(e) {
	                if ("number" == typeof e) return e;
	                if (r(e)) return f;
	                if (o(e)) {
	                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
	                    e = o(t) ? t + "" : t
	                }
	                if ("string" != typeof e) return 0 === e ? e : +e;
	                e = e.replace(d, "");
	                var n = p.test(e);
	                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
	            }
	            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
	                    return typeof e
	                } : function (e) {
	                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	                },
	                c = "Expected a function",
	                f = NaN,
	                s = "[object Symbol]",
	                d = /^\s+|\s+$/g,
	                l = /^[-+]0x[0-9a-f]+$/i,
	                p = /^0b[01]+$/i,
	                m = /^0o[0-7]+$/i,
	                b = parseInt,
	                v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
	                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
	                g = v || y || Function("return this")(),
	                h = Object.prototype,
	                w = h.toString,
	                k = Math.max,
	                x = Math.min,
	                j = function () {
	                    return g.Date.now()
	                };
	            e.exports = n
	        }).call(t, function () {
	            return this
	        }())
	    }, function (e, t) {
	        "use strict";

	        function n(e, t) {
	            a.push({
	                selector: e,
	                fn: t
	            }), !u && r && (u = new r(o), u.observe(i.documentElement, {
	                childList: !0,
	                subtree: !0,
	                removedNodes: !0
	            })), o()
	        }

	        function o() {
	            for (var e, t, n = 0, o = a.length; n < o; n++) {
	                e = a[n], t = i.querySelectorAll(e.selector);
	                for (var r, u = 0, c = t.length; u < c; u++) r = t[u], r.ready || (r.ready = !0, e.fn.call(r, r))
	            }
	        }
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var i = window.document,
	            r = window.MutationObserver || window.WebKitMutationObserver,
	            a = [],
	            u = void 0;
	        t.default = n
	    }, function (e, t) {
	        "use strict";

	        function n(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	        }

	        function o() {
	            return navigator.userAgent || navigator.vendor || window.opera || ""
	        }
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var i = function () {
	                function e(e, t) {
	                    for (var n = 0; n < t.length; n++) {
	                        var o = t[n];
	                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
	                    }
	                }
	                return function (t, n, o) {
	                    return n && e(t.prototype, n), o && e(t, o), t
	                }
	            }(),
	            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
	            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
	            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
	            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
	            f = function () {
	                function e() {
	                    n(this, e)
	                }
	                return i(e, [{
	                    key: "phone",
	                    value: function () {
	                        var e = o();
	                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
	                    }
	                }, {
	                    key: "mobile",
	                    value: function () {
	                        var e = o();
	                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
	                    }
	                }, {
	                    key: "tablet",
	                    value: function () {
	                        return this.mobile() && !this.phone()
	                    }
	                }]), e
	            }();
	        t.default = new f
	    }, function (e, t) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var n = function (e, t, n) {
	                var o = e.node.getAttribute("data-aos-once");
	                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
	            },
	            o = function (e, t) {
	                var o = window.pageYOffset,
	                    i = window.innerHeight;
	                e.forEach(function (e, r) {
	                    n(e, i + o, t)
	                })
	            };
	        t.default = o
	    }, function (e, t, n) {
	        "use strict";

	        function o(e) {
	            return e && e.__esModule ? e : {
	                default: e
	            }
	        }
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var i = n(12),
	            r = o(i),
	            a = function (e, t) {
	                return e.forEach(function (e, n) {
	                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
	                }), e
	            };
	        t.default = a
	    }, function (e, t, n) {
	        "use strict";

	        function o(e) {
	            return e && e.__esModule ? e : {
	                default: e
	            }
	        }
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var i = n(13),
	            r = o(i),
	            a = function (e, t) {
	                var n = 0,
	                    o = 0,
	                    i = window.innerHeight,
	                    a = {
	                        offset: e.getAttribute("data-aos-offset"),
	                        anchor: e.getAttribute("data-aos-anchor"),
	                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
	                    };
	                switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
	                    case "top-bottom":
	                        break;
	                    case "center-bottom":
	                        n += e.offsetHeight / 2;
	                        break;
	                    case "bottom-bottom":
	                        n += e.offsetHeight;
	                        break;
	                    case "top-center":
	                        n += i / 2;
	                        break;
	                    case "bottom-center":
	                        n += i / 2 + e.offsetHeight;
	                        break;
	                    case "center-center":
	                        n += i / 2 + e.offsetHeight / 2;
	                        break;
	                    case "top-top":
	                        n += i;
	                        break;
	                    case "bottom-top":
	                        n += e.offsetHeight + i;
	                        break;
	                    case "center-top":
	                        n += e.offsetHeight / 2 + i
	                }
	                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
	            };
	        t.default = a
	    }, function (e, t) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var n = function (e) {
	            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
	            return {
	                top: n,
	                left: t
	            }
	        };
	        t.default = n
	    }, function (e, t) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var n = function (e) {
	            e = e || document.querySelectorAll("[data-aos]");
	            var t = [];
	            return [].forEach.call(e, function (e, n) {
	                t.push({
	                    node: e
	                })
	            }), t
	        };
	        t.default = n
	    }])
	});


	/* http://kenwheeler.github.io/slick */
	! function (i) {
	    "use strict";
	    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
	}(function (i) {
	    "use strict";
	    var e = window.Slick || {};
	    (e = function () {
	        var e = 0;
	        return function (t, o) {
	            var s, n = this;
	            n.defaults = {
	                accessibility: !0,
	                adaptiveHeight: !1,
	                appendArrows: i(t),
	                appendDots: i(t),
	                arrows: !0,
	                asNavFor: null,
	                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
	                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
	                autoplay: !1,
	                autoplaySpeed: 3e3,
	                centerMode: !1,
	                centerPadding: "50px",
	                cssEase: "ease",
	                customPaging: function (e, t) {
	                    return i('<button type="button" />').text(t + 1)
	                },
	                dots: !1,
	                dotsClass: "slick-dots",
	                draggable: !0,
	                easing: "linear",
	                edgeFriction: .35,
	                fade: !1,
	                focusOnSelect: !1,
	                focusOnChange: !1,
	                infinite: !0,
	                initialSlide: 0,
	                lazyLoad: "ondemand",
	                mobileFirst: !1,
	                pauseOnHover: !0,
	                pauseOnFocus: !0,
	                pauseOnDotsHover: !1,
	                respondTo: "window",
	                responsive: null,
	                rows: 1,
	                rtl: !1,
	                slide: "",
	                slidesPerRow: 1,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                speed: 500,
	                swipe: !0,
	                swipeToSlide: !1,
	                touchMove: !0,
	                touchThreshold: 5,
	                useCSS: !0,
	                useTransform: !0,
	                variableWidth: !1,
	                vertical: !1,
	                verticalSwiping: !1,
	                waitForAnimate: !0,
	                zIndex: 1e3
	            }, n.initials = {
	                animating: !1,
	                dragging: !1,
	                autoPlayTimer: null,
	                currentDirection: 0,
	                currentLeft: null,
	                currentSlide: 0,
	                direction: 1,
	                $dots: null,
	                listWidth: null,
	                listHeight: null,
	                loadIndex: 0,
	                $nextArrow: null,
	                $prevArrow: null,
	                scrolling: !1,
	                slideCount: null,
	                slideWidth: null,
	                $slideTrack: null,
	                $slides: null,
	                sliding: !1,
	                slideOffset: 0,
	                swipeLeft: null,
	                swiping: !1,
	                $list: null,
	                touchObject: {},
	                transformsEnabled: !1,
	                unslicked: !1
	            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
	        }
	    }()).prototype.activateADA = function () {
	        this.$slideTrack.find(".slick-active").attr({
	            "aria-hidden": "false"
	        }).find("a, input, button, select").attr({
	            tabindex: "0"
	        })
	    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
	        var s = this;
	        if ("boolean" == typeof t) o = t, t = null;
	        else if (t < 0 || t >= s.slideCount) return !1;
	        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
	            i(t).attr("data-slick-index", e)
	        }), s.$slidesCache = s.$slides, s.reinit()
	    }, e.prototype.animateHeight = function () {
	        var i = this;
	        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
	            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
	            i.$list.animate({
	                height: e
	            }, i.options.speed)
	        }
	    }, e.prototype.animateSlide = function (e, t) {
	        var o = {},
	            s = this;
	        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
	            left: e
	        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
	            top: e
	        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
	            animStart: s.currentLeft
	        }).animate({
	            animStart: e
	        }, {
	            duration: s.options.speed,
	            easing: s.options.easing,
	            step: function (i) {
	                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
	            },
	            complete: function () {
	                t && t.call()
	            }
	        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
	            s.disableTransition(), t.call()
	        }, s.options.speed))
	    }, e.prototype.getNavTarget = function () {
	        var e = this.options.asNavFor;
	        return e && null !== e && (e = i(e).not(this.$slider)), e
	    }, e.prototype.asNavFor = function (e) {
	        var t = this.getNavTarget();
	        null !== t && "object" == typeof t && t.each(function () {
	            var t = i(this).slick("getSlick");
	            t.unslicked || t.slideHandler(e, !0)
	        })
	    }, e.prototype.applyTransition = function (i) {
	        var e = this,
	            t = {};
	        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	    }, e.prototype.autoPlay = function () {
	        var i = this;
	        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
	    }, e.prototype.autoPlayClear = function () {
	        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	    }, e.prototype.autoPlayIterator = function () {
	        var i = this,
	            e = i.currentSlide + i.options.slidesToScroll;
	        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
	    }, e.prototype.buildArrows = function () {
	        var e = this;
	        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
	            "aria-disabled": "true",
	            tabindex: "-1"
	        }))
	    }, e.prototype.buildDots = function () {
	        var e, t, o = this;
	        if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
	            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
	            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
	        }
	    }, e.prototype.buildOut = function () {
	        var e = this;
	        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
	            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
	        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	    }, e.prototype.buildRows = function () {
	        var i, e, t, o, s, n, r, l = this;
	        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
	            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
	                var d = document.createElement("div");
	                for (e = 0; e < l.options.rows; e++) {
	                    var a = document.createElement("div");
	                    for (t = 0; t < l.options.slidesPerRow; t++) {
	                        var c = i * r + (e * l.options.slidesPerRow + t);
	                        n.get(c) && a.appendChild(n.get(c))
	                    }
	                    d.appendChild(a)
	                }
	                o.appendChild(d)
	            }
	            l.$slider.empty().append(o), l.$slider.children().children().children().css({
	                width: 100 / l.options.slidesPerRow + "%",
	                display: "inline-block"
	            })
	        }
	    }, e.prototype.checkResponsive = function (e, t) {
	        var o, s, n, r = this,
	            l = !1,
	            d = r.$slider.width(),
	            a = window.innerWidth || i(window).width();
	        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
	            for (o in s = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
	            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
	        }
	    }, e.prototype.changeSlide = function (e, t) {
	        var o, s, n = this,
	            r = i(e.currentTarget);
	        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, e.data.message) {
	            case "previous":
	                s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, t);
	                break;
	            case "next":
	                s = 0 === o ? n.options.slidesToScroll : o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, t);
	                break;
	            case "index":
	                var l = 0 === e.data.index ? 0 : e.data.index || r.index() * n.options.slidesToScroll;
	                n.slideHandler(n.checkNavigable(l), !1, t), r.children().trigger("focus");
	                break;
	            default:
	                return
	        }
	    }, e.prototype.checkNavigable = function (i) {
	        var e, t;
	        if (t = 0, i > (e = this.getNavigableIndexes())[e.length - 1]) i = e[e.length - 1];
	        else
	            for (var o in e) {
	                if (i < e[o]) {
	                    i = t;
	                    break
	                }
	                t = e[o]
	            }
	        return i
	    }, e.prototype.cleanUpEvents = function () {
	        var e = this;
	        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
	    }, e.prototype.cleanUpSlideEvents = function () {
	        var e = this;
	        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	    }, e.prototype.cleanUpRows = function () {
	        var i, e = this;
	        e.options.rows > 0 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
	    }, e.prototype.clickHandler = function (i) {
	        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
	    }, e.prototype.destroy = function (e) {
	        var t = this;
	        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
	            i(this).attr("style", i(this).data("originalStyling"))
	        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
	    }, e.prototype.disableTransition = function (i) {
	        var e = this,
	            t = {};
	        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	    }, e.prototype.fadeSlide = function (i, e) {
	        var t = this;
	        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
	            zIndex: t.options.zIndex
	        }), t.$slides.eq(i).animate({
	            opacity: 1
	        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
	            opacity: 1,
	            zIndex: t.options.zIndex
	        }), e && setTimeout(function () {
	            t.disableTransition(i), e.call()
	        }, t.options.speed))
	    }, e.prototype.fadeSlideOut = function (i) {
	        var e = this;
	        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
	            opacity: 0,
	            zIndex: e.options.zIndex - 2
	        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
	            opacity: 0,
	            zIndex: e.options.zIndex - 2
	        }))
	    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
	        var e = this;
	        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
	    }, e.prototype.focusHandler = function () {
	        var e = this;
	        e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) {
	            var o = i(this);
	            setTimeout(function () {
	                e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay())
	            }, 0)
	        }).on("blur.slick", "*", function (t) {
	            i(this), e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay())
	        })
	    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
	        return this.currentSlide
	    }, e.prototype.getDotCount = function () {
	        var i = this,
	            e = 0,
	            t = 0,
	            o = 0;
	        if (!0 === i.options.infinite)
	            if (i.slideCount <= i.options.slidesToShow) ++o;
	            else
	                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
	        else if (!0 === i.options.centerMode) o = i.slideCount;
	        else if (i.options.asNavFor)
	            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
	        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
	        return o - 1
	    }, e.prototype.getLeft = function (i) {
	        var e, t, o, s, n = this,
	            r = 0;
	        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
	    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
	        return this.options[i]
	    }, e.prototype.getNavigableIndexes = function () {
	        var i, e = this,
	            t = 0,
	            o = 0,
	            s = [];
	        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
	        return s
	    }, e.prototype.getSlick = function () {
	        return this
	    }, e.prototype.getSlideCount = function () {
	        var e, t, o, s = this;
	        return o = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0, t = -1 * s.swipeLeft + o, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (o, n) {
	            var r, l;
	            if (r = i(n).outerWidth(), l = n.offsetLeft, !0 !== s.options.centerMode && (l += r / 2), t < l + r) return e = n, !1
	        }), Math.abs(i(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
	    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
	        this.changeSlide({
	            data: {
	                message: "index",
	                index: parseInt(i)
	            }
	        }, e)
	    }, e.prototype.init = function (e) {
	        var t = this;
	        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
	    }, e.prototype.initADA = function () {
	        var e = this,
	            t = Math.ceil(e.slideCount / e.options.slidesToShow),
	            o = e.getNavigableIndexes().filter(function (i) {
	                return i >= 0 && i < e.slideCount
	            });
	        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
	            "aria-hidden": "true",
	            tabindex: "-1"
	        }).find("a, input, button, select").attr({
	            tabindex: "-1"
	        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
	            var s = o.indexOf(t);
	            if (i(this).attr({
	                    role: "tabpanel",
	                    id: "slick-slide" + e.instanceUid + t,
	                    tabindex: -1
	                }), -1 !== s) {
	                var n = "slick-slide-control" + e.instanceUid + s;
	                i("#" + n).length && i(this).attr({
	                    "aria-describedby": n
	                })
	            }
	        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
	            var n = o[s];
	            i(this).attr({
	                role: "presentation"
	            }), i(this).find("button").first().attr({
	                role: "tab",
	                id: "slick-slide-control" + e.instanceUid + s,
	                "aria-controls": "slick-slide" + e.instanceUid + n,
	                "aria-label": s + 1 + " of " + t,
	                "aria-selected": null,
	                tabindex: "-1"
	            })
	        }).eq(e.currentSlide).find("button").attr({
	            "aria-selected": "true",
	            tabindex: "0"
	        }).end());
	        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
	            tabindex: "0"
	        }) : e.$slides.eq(s).removeAttr("tabindex");
	        e.activateADA()
	    }, e.prototype.initArrowEvents = function () {
	        var i = this;
	        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
	            message: "previous"
	        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
	            message: "next"
	        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
	    }, e.prototype.initDotEvents = function () {
	        var e = this;
	        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
	            message: "index"
	        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	    }, e.prototype.initSlideEvents = function () {
	        var e = this;
	        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
	    }, e.prototype.initializeEvents = function () {
	        var e = this;
	        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
	            action: "start"
	        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
	            action: "move"
	        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
	            action: "end"
	        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
	            action: "end"
	        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
	    }, e.prototype.initUI = function () {
	        var i = this;
	        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
	    }, e.prototype.keyHandler = function (i) {
	        var e = this;
	        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
	            data: {
	                message: !0 === e.options.rtl ? "next" : "previous"
	            }
	        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
	            data: {
	                message: !0 === e.options.rtl ? "previous" : "next"
	            }
	        }))
	    }, e.prototype.lazyLoad = function () {
	        function e(e) {
	            i("img[data-lazy]", e).each(function () {
	                var e = i(this),
	                    t = i(this).attr("data-lazy"),
	                    o = i(this).attr("data-srcset"),
	                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
	                    r = document.createElement("img");
	                r.onload = function () {
	                    e.animate({
	                        opacity: 0
	                    }, 100, function () {
	                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
	                            opacity: 1
	                        }, 200, function () {
	                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
	                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
	                    })
	                }, r.onerror = function () {
	                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
	                }, r.src = t
	            })
	        }
	        var t, o, s, n = this;
	        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
	            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
	        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
	    }, e.prototype.loadSlider = function () {
	        var i = this;
	        i.setPosition(), i.$slideTrack.css({
	            opacity: 1
	        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
	    }, e.prototype.next = e.prototype.slickNext = function () {
	        this.changeSlide({
	            data: {
	                message: "next"
	            }
	        })
	    }, e.prototype.orientationChange = function () {
	        this.checkResponsive(), this.setPosition()
	    }, e.prototype.pause = e.prototype.slickPause = function () {
	        this.autoPlayClear(), this.paused = !0
	    }, e.prototype.play = e.prototype.slickPlay = function () {
	        var i = this;
	        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
	    }, e.prototype.postSlide = function (e) {
	        var t = this;
	        !t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange)) && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()
	    }, e.prototype.prev = e.prototype.slickPrev = function () {
	        this.changeSlide({
	            data: {
	                message: "previous"
	            }
	        })
	    }, e.prototype.preventDefault = function (i) {
	        i.preventDefault()
	    }, e.prototype.progressiveLazyLoad = function (e) {
	        e = e || 1;
	        var t, o, s, n, r, l = this,
	            d = i("img[data-lazy]", l.$slider);
	        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
	            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
	        }, r.onerror = function () {
	            e < 3 ? setTimeout(function () {
	                l.progressiveLazyLoad(e + 1)
	            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
	        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
	    }, e.prototype.refresh = function (e) {
	        var t, o, s = this;
	        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
	            currentSlide: t
	        }), s.init(), e || s.changeSlide({
	            data: {
	                message: "index",
	                index: t
	            }
	        }, !1)
	    }, e.prototype.registerBreakpoints = function () {
	        var e, t, o, s = this,
	            n = s.options.responsive || null;
	        if ("array" === i.type(n) && n.length) {
	            for (e in s.respondTo = s.options.respondTo || "window", n)
	                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
	                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
	                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
	                } s.breakpoints.sort(function (i, e) {
	                return s.options.mobileFirst ? i - e : e - i
	            })
	        }
	    }, e.prototype.reinit = function () {
	        var e = this;
	        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	    }, e.prototype.resize = function () {
	        var e = this;
	        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
	            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
	        }, 50))
	    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
	        var o = this;
	        return "boolean" == typeof i ? i = !0 === (e = i) ? 0 : o.slideCount - 1 : i = !0 === e ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
	    }, e.prototype.setCSS = function (i) {
	        var e, t, o = this,
	            s = {};
	        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
	    }, e.prototype.setDimensions = function () {
	        var i = this;
	        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
	            padding: "0px " + i.options.centerPadding
	        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
	            padding: i.options.centerPadding + " 0px"
	        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
	        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
	        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
	    }, e.prototype.setFade = function () {
	        var e, t = this;
	        t.$slides.each(function (o, s) {
	            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
	                position: "relative",
	                right: e,
	                top: 0,
	                zIndex: t.options.zIndex - 2,
	                opacity: 0
	            }) : i(s).css({
	                position: "relative",
	                left: e,
	                top: 0,
	                zIndex: t.options.zIndex - 2,
	                opacity: 0
	            })
	        }), t.$slides.eq(t.currentSlide).css({
	            zIndex: t.options.zIndex - 1,
	            opacity: 1
	        })
	    }, e.prototype.setHeight = function () {
	        var i = this;
	        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
	            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
	            i.$list.css("height", e)
	        }
	    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
	        var e, t, o, s, n, r = this,
	            l = !1;
	        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
	        else if ("multiple" === n) i.each(o, function (i, e) {
	            r.options[i] = e
	        });
	        else if ("responsive" === n)
	            for (t in s)
	                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
	                else {
	                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
	                    r.options.responsive.push(s[t])
	                } l && (r.unload(), r.reinit())
	    }, e.prototype.setPosition = function () {
	        var i = this;
	        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
	    }, e.prototype.setProps = function () {
	        var i = this,
	            e = document.body.style;
	        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
	    }, e.prototype.setSlideClasses = function (i) {
	        var e, t, o, s, n = this;
	        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
	            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
	            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
	        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
	        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
	    }, e.prototype.setupInfinite = function () {
	        var e, t, o, s = this;
	        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
	            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
	            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
	            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
	                i(this).attr("id", "")
	            })
	        }
	    }, e.prototype.interrupt = function (i) {
	        i || this.autoPlay(), this.interrupted = i
	    }, e.prototype.selectHandler = function (e) {
	        var t = this,
	            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
	            s = parseInt(o.attr("data-slick-index"));
	        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
	    }, e.prototype.slideHandler = function (i, e, t) {
	        var o, s, n, r, l, d = null,
	            a = this;
	        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) return !1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void(!1 === a.options.fade && (o = a.currentSlide, !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
	            a.postSlide(o)
	        }) : a.postSlide(o))) : !1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void(!1 === a.options.fade && (o = a.currentSlide, !0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
	            a.postSlide(o)
	        }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && ((l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), !0 === a.options.fade ? (!0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
	            a.postSlide(s)
	        })) : a.postSlide(s), void a.animateHeight()) : void(!0 !== t && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () {
	            a.postSlide(s)
	        }) : a.postSlide(s)))
	    }, e.prototype.startLoad = function () {
	        var i = this;
	        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
	    }, e.prototype.swipeDirection = function () {
	        var i, e, t, o, s = this;
	        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
	    }, e.prototype.swipeEnd = function (i) {
	        var e, t, o = this;
	        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
	        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
	        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
	            switch (t = o.swipeDirection()) {
	                case "left":
	                case "down":
	                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
	                    break;
	                case "right":
	                case "up":
	                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
	            }
	            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
	        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
	    }, e.prototype.swipeHandler = function (i) {
	        var e = this;
	        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
	            case "start":
	                e.swipeStart(i);
	                break;
	            case "move":
	                e.swipeMove(i);
	                break;
	            case "end":
	                e.swipeEnd(i)
	        }
	    }, e.prototype.swipeMove = function (i) {
	        var e, t, o, s, n, r, l = this;
	        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
	    }, e.prototype.swipeStart = function (i) {
	        var e, t = this;
	        return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
	    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
	        var i = this;
	        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
	    }, e.prototype.unload = function () {
	        var e = this;
	        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	    }, e.prototype.unslick = function (i) {
	        var e = this;
	        e.$slider.trigger("unslick", [e, i]), e.destroy()
	    }, e.prototype.updateArrows = function () {
	        var i = this;
	        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	    }, e.prototype.updateDots = function () {
	        var i = this;
	        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
	    }, e.prototype.visibility = function () {
	        var i = this;
	        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
	    }, i.fn.slick = function () {
	        var i, t, o = this,
	            s = arguments[0],
	            n = Array.prototype.slice.call(arguments, 1),
	            r = o.length;
	        for (i = 0; i < r; i++)
	            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
	        return o
	    }
	});

	/*  jQuery Nice Select - v1.0
	https://github.com/hernansartorio/jquery-nice-select
	Made by HernÃ¡n Sartorio  */
	! function (e) {
	    e.fn.niceSelect = function (t) {
	        function s(t) {
	            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
	            var s = t.next(),
	                n = t.find("option"),
	                i = t.find("option:selected");
	            s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
	                var n = e(this),
	                    i = n.data("display");
	                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
	            })
	        }
	        if ("string" == typeof t) return "update" == t ? this.each(function () {
	            var t = e(this),
	                n = e(this).next(".nice-select"),
	                i = n.hasClass("open");
	            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
	        }) : "destroy" == t ? (this.each(function () {
	            var t = e(this),
	                s = e(this).next(".nice-select");
	            s.length && (s.remove(), t.css("display", ""))
	        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
	        this.hide(), this.each(function () {
	            var t = e(this);
	            t.next().hasClass("nice-select") || s(t)
	        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
	            var s = e(this);
	            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
	        }), e(document).on("click.nice_select", function (t) {
	            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
	        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
	            var s = e(this),
	                n = s.closest(".nice-select");
	            n.find(".selected").removeClass("selected"), s.addClass("selected");
	            var i = s.data("display") || s.text();
	            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
	        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
	            var s = e(this),
	                n = e(s.find(".focus") || s.find(".list .option.selected"));
	            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
	            if (40 == t.keyCode) {
	                if (s.hasClass("open")) {
	                    var i = n.nextAll(".option:not(.disabled)").first();
	                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
	                } else s.trigger("click");
	                return !1
	            }
	            if (38 == t.keyCode) {
	                if (s.hasClass("open")) {
	                    var l = n.prevAll(".option:not(.disabled)").first();
	                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
	                } else s.trigger("click");
	                return !1
	            }
	            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
	            else if (9 == t.keyCode && s.hasClass("open")) return !1
	        });
	        var n = document.createElement("a").style;
	        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
	    }
	}(jQuery);

	/*! Magnific Popup - v0.9.9 - 2013-12-27
	 * http://dimsemenov.com/plugins/magnific-popup/
	 * Copyright (c) 2013 Dmitry Semenov; */
	(function (e) {
	    var t, n, i, o, r, a, s, l = "Close",
	        c = "BeforeClose",
	        d = "AfterClose",
	        u = "BeforeAppend",
	        p = "MarkupParse",
	        f = "Open",
	        m = "Change",
	        g = "mfp",
	        h = "." + g,
	        v = "mfp-ready",
	        C = "mfp-removing",
	        y = "mfp-prevent-close",
	        w = function () {},
	        b = !!window.jQuery,
	        I = e(window),
	        x = function (e, n) {
	            t.ev.on(g + e + h, n)
	        },
	        k = function (t, n, i, o) {
	            var r = document.createElement("div");
	            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
	        },
	        T = function (n, i) {
	            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
	        },
	        E = function (n) {
	            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
	        },
	        _ = function () {
	            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
	        },
	        S = function () {
	            var e = document.createElement("p").style,
	                t = ["ms", "O", "Moz", "Webkit"];
	            if (void 0 !== e.transition) return !0;
	            for (; t.length;)
	                if (t.pop() + "Transition" in e) return !0;
	            return !1
	        };
	    w.prototype = {
	        constructor: w,
	        init: function () {
	            var n = navigator.appVersion;
	            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
	        },
	        open: function (n) {
	            i || (i = e(document.body));
	            var r;
	            if (n.isObj === !1) {
	                t.items = n.items.toArray(), t.index = 0;
	                var s, l = n.items;
	                for (r = 0; l.length > r; r++)
	                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
	                        t.index = r;
	                        break
	                    }
	            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
	            if (t.isOpen) return t.updateItemHTML(), void 0;
	            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {
	                t.close()
	            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {
	                t._checkIfClose(e.target) && t.close()
	            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
	            var c = e.magnificPopup.modules;
	            for (r = 0; c.length > r; r++) {
	                var d = c[r];
	                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
	            }
	            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
	                n.close_replaceWith = E(i.type)
	            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
	                overflow: t.st.overflowY,
	                overflowX: "hidden",
	                overflowY: t.st.overflowY
	            }) : t.wrap.css({
	                top: I.scrollTop(),
	                position: "absolute"
	            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
	                height: o.height(),
	                position: "absolute"
	            }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {
	                27 === e.keyCode && t.close()
	            }), I.on("resize" + h, function () {
	                t.updateSize()
	            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
	            var u = t.wH = I.height(),
	                m = {};
	            if (t.fixedContentPos && t._hasScrollBar(u)) {
	                var g = t._getScrollbarSize();
	                g && (m.marginRight = g)
	            }
	            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
	            var C = t.st.mainClass;
	            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {
	                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
	            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
	        },
	        close: function () {
	            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
	                t._close()
	            }, t.st.removalDelay)) : t._close())
	        },
	        _close: function () {
	            T(l);
	            var n = C + " " + v + " ";
	            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
	                var i = {
	                    marginRight: ""
	                };
	                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
	            }
	            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
	        },
	        updateSize: function (e) {
	            if (t.isIOS) {
	                var n = document.documentElement.clientWidth / window.innerWidth,
	                    i = window.innerHeight * n;
	                t.wrap.css("height", i), t.wH = i
	            } else t.wH = e || I.height();
	            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
	        },
	        updateItemHTML: function () {
	            var n = t.items[t.index];
	            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
	            var i = n.type;
	            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
	                var o = t.st[i] ? t.st[i].markup : !1;
	                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
	            }
	            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
	            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
	            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
	        },
	        appendContent: function (e, n) {
	            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
	        },
	        parseEl: function (n) {
	            var i, o = t.items[n];
	            if (o.tagName ? o = {
	                    el: e(o)
	                } : (i = o.type, o = {
	                    data: o,
	                    src: o.src
	                }), o.el) {
	                for (var r = t.types, a = 0; r.length > a; a++)
	                    if (o.el.hasClass("mfp-" + r[a])) {
	                        i = r[a];
	                        break
	                    } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
	            }
	            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
	        },
	        addGroup: function (e, n) {
	            var i = function (i) {
	                i.mfpEl = this, t._openClick(i, e, n)
	            };
	            n || (n = {});
	            var o = "click.magnificPopup";
	            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
	        },
	        _openClick: function (n, i, o) {
	            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
	            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
	                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
	                if (a)
	                    if (e.isFunction(a)) {
	                        if (!a.call(t)) return !0
	                    } else if (a > I.width()) return !0;
	                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
	            }
	        },
	        updateStatus: function (e, i) {
	            if (t.preloader) {
	                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
	                var o = {
	                    status: e,
	                    text: i
	                };
	                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
	                    e.stopImmediatePropagation()
	                }), t.container.addClass("mfp-s-" + e), n = e
	            }
	        },
	        _checkIfClose: function (n) {
	            if (!e(n).hasClass(y)) {
	                var i = t.st.closeOnContentClick,
	                    o = t.st.closeOnBgClick;
	                if (i && o) return !0;
	                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
	                if (n === t.content[0] || e.contains(t.content[0], n)) {
	                    if (i) return !0
	                } else if (o && e.contains(document, n)) return !0;
	                return !1
	            }
	        },
	        _addClassToMFP: function (e) {
	            t.bgOverlay.addClass(e), t.wrap.addClass(e)
	        },
	        _removeClassFromMFP: function (e) {
	            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
	        },
	        _hasScrollBar: function (e) {
	            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
	        },
	        _setFocus: function () {
	            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
	        },
	        _onFocusIn: function (n) {
	            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
	        },
	        _parseMarkup: function (t, n, i) {
	            var o;
	            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
	                if (void 0 === n || n === !1) return !0;
	                if (o = e.split("_"), o.length > 1) {
	                    var i = t.find(h + "-" + o[0]);
	                    if (i.length > 0) {
	                        var r = o[1];
	                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
	                    }
	                } else t.find(h + "-" + e).html(n)
	            })
	        },
	        _getScrollbarSize: function () {
	            if (void 0 === t.scrollbarSize) {
	                var e = document.createElement("div");
	                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
	            }
	            return t.scrollbarSize
	        }
	    }, e.magnificPopup = {
	        instance: null,
	        proto: w.prototype,
	        modules: [],
	        open: function (t, n) {
	            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
	        },
	        close: function () {
	            return e.magnificPopup.instance && e.magnificPopup.instance.close()
	        },
	        registerModule: function (t, n) {
	            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
	        },
	        defaults: {
	            disableOn: 0,
	            key: null,
	            midClick: !1,
	            mainClass: "",
	            preloader: !0,
	            focus: "",
	            closeOnContentClick: !1,
	            closeOnBgClick: !0,
	            closeBtnInside: !0,
	            showCloseBtn: !0,
	            enableEscapeKey: !0,
	            modal: !1,
	            alignTop: !1,
	            removalDelay: 0,
	            prependTo: null,
	            fixedContentPos: "auto",
	            fixedBgPos: "auto",
	            overflowY: "auto",
	            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
	            tClose: "Close (Esc)",
	            tLoading: "Loading..."
	        }
	    }, e.fn.magnificPopup = function (n) {
	        _();
	        var i = e(this);
	        if ("string" == typeof n)
	            if ("open" === n) {
	                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
	                    a = parseInt(arguments[1], 10) || 0;
	                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
	                    mfpEl: o
	                }, i, r)
	            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
	        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
	        return i
	    };
	    var P, O, z, M = "inline",
	        B = function () {
	            z && (O.after(z.addClass(P)).detach(), z = null)
	        };
	    e.magnificPopup.registerModule(M, {
	        options: {
	            hiddenClass: "hide",
	            markup: "",
	            tNotFound: "Content not found"
	        },
	        proto: {
	            initInline: function () {
	                t.types.push(M), x(l + "." + M, function () {
	                    B()
	                })
	            },
	            getInline: function (n, i) {
	                if (B(), n.src) {
	                    var o = t.st.inline,
	                        r = e(n.src);
	                    if (r.length) {
	                        var a = r[0].parentNode;
	                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
	                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
	                    return n.inlineElement = r, r
	                }
	                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
	            }
	        }
	    });
	    var F, H = "ajax",
	        L = function () {
	            F && i.removeClass(F)
	        },
	        A = function () {
	            L(), t.req && t.req.abort()
	        };
	    e.magnificPopup.registerModule(H, {
	        options: {
	            settings: null,
	            cursor: "mfp-ajax-cur",
	            tError: '<a href="%url%">The content</a> could not be loaded.'
	        },
	        proto: {
	            initAjax: function () {
	                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
	            },
	            getAjax: function (n) {
	                F && i.addClass(F), t.updateStatus("loading");
	                var o = e.extend({
	                    url: n.src,
	                    success: function (i, o, r) {
	                        var a = {
	                            data: i,
	                            xhr: r
	                        };
	                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
	                            t.wrap.addClass(v)
	                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
	                    },
	                    error: function () {
	                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
	                    }
	                }, t.st.ajax.settings);
	                return t.req = e.ajax(o), ""
	            }
	        }
	    });
	    var j, N = function (n) {
	        if (n.data && void 0 !== n.data.title) return n.data.title;
	        var i = t.st.image.titleSrc;
	        if (i) {
	            if (e.isFunction(i)) return i.call(t, n);
	            if (n.el) return n.el.attr(i) || ""
	        }
	        return ""
	    };
	    e.magnificPopup.registerModule("image", {
	        options: {
	            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
	            cursor: "mfp-zoom-out-cur",
	            titleSrc: "title",
	            verticalFit: !0,
	            tError: '<a href="%url%">The image</a> could not be loaded.'
	        },
	        proto: {
	            initImage: function () {
	                var e = t.st.image,
	                    n = ".image";
	                t.types.push("image"), x(f + n, function () {
	                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
	                }), x(l + n, function () {
	                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
	                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
	            },
	            resizeImage: function () {
	                var e = t.currItem;
	                if (e && e.img && t.st.image.verticalFit) {
	                    var n = 0;
	                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
	                }
	            },
	            _onImageHasSize: function (e) {
	                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
	            },
	            findImageSize: function (e) {
	                var n = 0,
	                    i = e.img[0],
	                    o = function (r) {
	                        j && clearInterval(j), j = setInterval(function () {
	                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
	                        }, r)
	                    };
	                o(1)
	            },
	            getImage: function (n, i) {
	                var o = 0,
	                    r = function () {
	                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
	                    },
	                    a = function () {
	                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
	                    },
	                    s = t.st.image,
	                    l = i.find(".mfp-img");
	                if (l.length) {
	                    var c = document.createElement("img");
	                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
	                }
	                return t._parseMarkup(i, {
	                    title: N(n),
	                    img_replaceWith: n.img
	                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
	            }
	        }
	    });
	    var W, R = function () {
	        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
	    };
	    e.magnificPopup.registerModule("zoom", {
	        options: {
	            enabled: !1,
	            easing: "ease-in-out",
	            duration: 300,
	            opener: function (e) {
	                return e.is("img") ? e : e.find("img")
	            }
	        },
	        proto: {
	            initZoom: function () {
	                var e, n = t.st.zoom,
	                    i = ".zoom";
	                if (n.enabled && t.supportsTransition) {
	                    var o, r, a = n.duration,
	                        s = function (e) {
	                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
	                                i = "all " + n.duration / 1e3 + "s " + n.easing,
	                                o = {
	                                    position: "fixed",
	                                    zIndex: 9999,
	                                    left: 0,
	                                    top: 0,
	                                    "-webkit-backface-visibility": "hidden"
	                                },
	                                r = "transition";
	                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
	                        },
	                        d = function () {
	                            t.content.css("visibility", "visible")
	                        };
	                    x("BuildControls" + i, function () {
	                        if (t._allowZoom()) {
	                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
	                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
	                                r.css(t._getOffset(!0)), o = setTimeout(function () {
	                                    d(), setTimeout(function () {
	                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
	                                    }, 16)
	                                }, a)
	                            }, 16)
	                        }
	                    }), x(c + i, function () {
	                        if (t._allowZoom()) {
	                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
	                                if (e = t._getItemToZoom(), !e) return;
	                                r = s(e)
	                            }
	                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
	                                r.css(t._getOffset())
	                            }, 16)
	                        }
	                    }), x(l + i, function () {
	                        t._allowZoom() && (d(), r && r.remove(), e = null)
	                    })
	                }
	            },
	            _allowZoom: function () {
	                return "image" === t.currItem.type
	            },
	            _getItemToZoom: function () {
	                return t.currItem.hasSize ? t.currItem.img : !1
	            },
	            _getOffset: function (n) {
	                var i;
	                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
	                var o = i.offset(),
	                    r = parseInt(i.css("padding-top"), 10),
	                    a = parseInt(i.css("padding-bottom"), 10);
	                o.top -= e(window).scrollTop() - r;
	                var s = {
	                    width: i.width(),
	                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
	                };
	                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
	            }
	        }
	    });
	    var Z = "iframe",
	        q = "//about:blank",
	        D = function (e) {
	            if (t.currTemplate[Z]) {
	                var n = t.currTemplate[Z].find("iframe");
	                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
	            }
	        };
	    e.magnificPopup.registerModule(Z, {
	        options: {
	            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
	            srcAction: "iframe_src",
	            patterns: {
	                youtube: {
	                    index: "youtube.com",
	                    id: "v=",
	                    src: "//www.youtube.com/embed/%id%?autoplay=1"
	                },
	                vimeo: {
	                    index: "vimeo.com/",
	                    id: "/",
	                    src: "//player.vimeo.com/video/%id%?autoplay=1"
	                },
	                gmaps: {
	                    index: "//maps.google.",
	                    src: "%id%&output=embed"
	                }
	            }
	        },
	        proto: {
	            initIframe: function () {
	                t.types.push(Z), x("BeforeChange", function (e, t, n) {
	                    t !== n && (t === Z ? D() : n === Z && D(!0))
	                }), x(l + "." + Z, function () {
	                    D()
	                })
	            },
	            getIframe: function (n, i) {
	                var o = n.src,
	                    r = t.st.iframe;
	                e.each(r.patterns, function () {
	                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
	                });
	                var a = {};
	                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
	            }
	        }
	    });
	    var K = function (e) {
	            var n = t.items.length;
	            return e > n - 1 ? e - n : 0 > e ? n + e : e
	        },
	        Y = function (e, t, n) {
	            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
	        };
	    e.magnificPopup.registerModule("gallery", {
	        options: {
	            enabled: !1,
	            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
	            preload: [0, 2],
	            navigateByImgClick: !0,
	            arrows: !0,
	            tPrev: "Previous (Left arrow key)",
	            tNext: "Next (Right arrow key)",
	            tCounter: "%curr% of %total%"
	        },
	        proto: {
	            initGallery: function () {
	                var n = t.st.gallery,
	                    i = ".mfp-gallery",
	                    r = Boolean(e.fn.mfpFastClick);
	                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
	                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
	                        return t.items.length > 1 ? (t.next(), !1) : void 0
	                    }), o.on("keydown" + i, function (e) {
	                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
	                    })
	                }), x("UpdateStatus" + i, function (e, n) {
	                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
	                }), x(p + i, function (e, i, o, r) {
	                    var a = t.items.length;
	                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
	                }), x("BuildControls" + i, function () {
	                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
	                        var i = n.arrowMarkup,
	                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
	                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
	                            s = r ? "mfpFastClick" : "click";
	                        o[s](function () {
	                            t.prev()
	                        }), a[s](function () {
	                            t.next()
	                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
	                    }
	                }), x(m + i, function () {
	                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
	                        t.preloadNearbyImages(), t._preloadTimeout = null
	                    }, 16)
	                }), x(l + i, function () {
	                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
	                }), void 0) : !1
	            },
	            next: function () {
	                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
	            },
	            prev: function () {
	                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
	            },
	            goTo: function (e) {
	                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
	            },
	            preloadNearbyImages: function () {
	                var e, n = t.st.gallery.preload,
	                    i = Math.min(n[0], t.items.length),
	                    o = Math.min(n[1], t.items.length);
	                for (e = 1;
	                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
	                for (e = 1;
	                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
	            },
	            _preloadItem: function (n) {
	                if (n = K(n), !t.items[n].preloaded) {
	                    var i = t.items[n];
	                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
	                        i.hasSize = !0
	                    }).on("error.mfploader", function () {
	                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
	                    }).attr("src", i.src)), i.preloaded = !0
	                }
	            }
	        }
	    });
	    var U = "retina";
	    e.magnificPopup.registerModule(U, {
	            options: {
	                replaceSrc: function (e) {
	                    return e.src.replace(/\.\w+$/, function (e) {
	                        return "@2x" + e
	                    })
	                },
	                ratio: 1
	            },
	            proto: {
	                initRetina: function () {
	                    if (window.devicePixelRatio > 1) {
	                        var e = t.st.retina,
	                            n = e.ratio;
	                        n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
	                            t.img.css({
	                                "max-width": t.img[0].naturalWidth / n,
	                                width: "100%"
	                            })
	                        }), x("ElementParse." + U, function (t, i) {
	                            i.src = e.replaceSrc(i, n)
	                        }))
	                    }
	                }
	            }
	        }),
	        function () {
	            var t = 1e3,
	                n = "ontouchstart" in window,
	                i = function () {
	                    I.off("touchmove" + r + " touchend" + r)
	                },
	                o = "mfpFastClick",
	                r = "." + o;
	            e.fn.mfpFastClick = function (o) {
	                return e(this).each(function () {
	                    var a, s = e(this);
	                    if (n) {
	                        var l, c, d, u, p, f;
	                        s.on("touchstart" + r, function (e) {
	                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
	                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
	                            }).on("touchend" + r, function (e) {
	                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
	                                    a = !1
	                                }, t), o())
	                            })
	                        })
	                    }
	                    s.on("click" + r, function () {
	                        a || o()
	                    })
	                })
	            }, e.fn.destroyMfpFastClick = function () {
	                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
	            }
	        }(), _()
	})(window.jQuery || window.Zepto);

	! function (t, e) {
	    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e()
	}(this, function () {
	    "use strict";
	    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

	    function t(t) {
	        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
	    }

	    function e(t, e) {
	        return t(e = {
	            exports: {}
	        }, e.exports), e.exports
	    }
	    var i = e(function (t, e) {
	        (function (t) {
	            Object.defineProperty(t, "__esModule", {
	                value: !0
	            });
	            var l, n, e = function () {
	                    function n(t, e) {
	                        for (var i = 0; i < e.length; i++) {
	                            var n = e[i];
	                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
	                        }
	                    }
	                    return function (t, e, i) {
	                        return e && n(t.prototype, e), i && n(t, i), t
	                    }
	                }(),
	                i = (l = ".stickySidebar", n = {
	                    topSpacing: 0,
	                    bottomSpacing: 0,
	                    containerSelector: !1,
	                    innerWrapperSelector: ".inner-wrapper-sticky",
	                    stickyClass: "is-affixed",
	                    resizeSensor: !0,
	                    minWidth: !1
	                }, function () {
	                    function c(t) {
	                        var e = this,
	                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
	                        if (function (t, e) {
	                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	                            }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
	                        this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
	                            transform: !1,
	                            transform3d: !1
	                        }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
	                            translateY: 0,
	                            maxTranslateY: 0,
	                            topSpacing: 0,
	                            lastTopSpacing: 0,
	                            bottomSpacing: 0,
	                            lastBottomSpacing: 0,
	                            sidebarHeight: 0,
	                            sidebarWidth: 0,
	                            containerTop: 0,
	                            containerHeight: 0,
	                            viewportHeight: 0,
	                            viewportTop: 0,
	                            lastViewportTop: 0
	                        }, ["handleEvent"].forEach(function (t) {
	                            e[t] = e[t].bind(e)
	                        }), this.initialize()
	                    }
	                    return e(c, [{
	                        key: "initialize",
	                        value: function () {
	                            var i = this;
	                            if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
	                                var t = document.createElement("div");
	                                for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
	                                this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
	                            }
	                            if (this.options.containerSelector) {
	                                var e = document.querySelectorAll(this.options.containerSelector);
	                                if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
	                                        t.contains(i.sidebar) && (i.container = t)
	                                    }), !e.length) throw new Error("The container does not contains on the sidebar.")
	                            }
	                            "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
	                        }
	                    }, {
	                        key: "bindEvents",
	                        value: function () {
	                            window.addEventListener("resize", this, {
	                                passive: !0,
	                                capture: !1
	                            }), window.addEventListener("scroll", this, {
	                                passive: !0,
	                                capture: !1
	                            }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
	                        }
	                    }, {
	                        key: "handleEvent",
	                        value: function (t) {
	                            this.updateSticky(t)
	                        }
	                    }, {
	                        key: "calcDimensions",
	                        value: function () {
	                            if (!this._breakpoint) {
	                                var t = this.dimensions;
	                                t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll()
	                            }
	                        }
	                    }, {
	                        key: "_calcDimensionsWithScroll",
	                        value: function () {
	                            var t = this.dimensions;
	                            t.sidebarright = c.offsetRelative(this.sidebar).right, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportright = document.documentElement.scrollright || document.body.scrollright, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing
	                        }
	                    }, {
	                        key: "isSidebarFitsViewport",
	                        value: function () {
	                            var t = this.dimensions,
	                                e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
	                            return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
	                        }
	                    }, {
	                        key: "observeScrollDir",
	                        value: function () {
	                            var t = this.dimensions;
	                            if (t.lastViewportTop !== t.viewportTop) {
	                                var e = "down" === this.direction ? Math.min : Math.max;
	                                t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
	                            }
	                        }
	                    }, {
	                        key: "getAffixType",
	                        value: function () {
	                            this._calcDimensionsWithScroll();
	                            var t = this.dimensions,
	                                e = t.viewportTop + t.topSpacing,
	                                i = this.affixedType;
	                            return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
	                        }
	                    }, {
	                        key: "_getAffixTypeScrollingDown",
	                        value: function () {
	                            var t = this.dimensions,
	                                e = t.sidebarHeight + t.containerTop,
	                                i = t.viewportTop + t.topSpacing,
	                                n = t.viewportBottom - t.bottomSpacing,
	                                o = this.affixedType;
	                            return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
	                        }
	                    }, {
	                        key: "_getAffixTypeScrollingUp",
	                        value: function () {
	                            var t = this.dimensions,
	                                e = t.sidebarHeight + t.containerTop,
	                                i = t.viewportTop + t.topSpacing,
	                                n = t.viewportBottom - t.bottomSpacing,
	                                o = this.affixedType;
	                            return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
	                        }
	                    }, {
	                        key: "_getStyle",
	                        value: function (t) {
	                            if (void 0 !== t) {
	                                var e = {
	                                        inner: {},
	                                        outer: {}
	                                    },
	                                    i = this.dimensions;
	                                switch (t) {
	                                    case "VIEWPORT-TOP":
	                                        e.inner = {
	                                            position: "fixed",
	                                            top: i.topSpacing,
	                                            right: i.sidebarright - i.viewportright,
	                                            width: i.sidebarWidth
	                                        };
	                                        break;
	                                    case "VIEWPORT-BOTTOM":
	                                        e.inner = {
	                                            position: "fixed",
	                                            top: "auto",
	                                            right: i.sidebarright,
	                                            bottom: i.bottomSpacing,
	                                            width: i.sidebarWidth
	                                        };
	                                        break;
	                                    case "CONTAINER-BOTTOM":
	                                    case "VIEWPORT-UNBOTTOM":
	                                        var n = this._getTranslate(0, i.translateY + "px");
	                                        e.inner = n ? {
	                                            transform: n
	                                        } : {
	                                            position: "absolute",
	                                            top: i.translateY,
	                                            width: i.sidebarWidth
	                                        }
	                                }
	                                switch (t) {
	                                    case "VIEWPORT-TOP":
	                                    case "VIEWPORT-BOTTOM":
	                                    case "VIEWPORT-UNBOTTOM":
	                                    case "CONTAINER-BOTTOM":
	                                        e.outer = {
	                                            height: i.sidebarHeight,
	                                            position: "relative"
	                                        }
	                                }
	                                return e.outer = c.extend({
	                                    height: "",
	                                    position: ""
	                                }, e.outer), e.inner = c.extend({
	                                    position: "relative",
	                                    top: "",
	                                    right: "",
	                                    bottom: "",
	                                    width: "",
	                                    transform: ""
	                                }, e.inner), e
	                            }
	                        }
	                    }, {
	                        key: "stickyPosition",
	                        value: function (t) {
	                            if (!this._breakpoint) {
	                                t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;
	                                var e = this.getAffixType(),
	                                    i = this._getStyle(e);
	                                if ((this.affixedType != e || t) && e) {
	                                    var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
	                                    for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
	                                        var s = "number" == typeof i.outer[o] ? "px" : "";
	                                        this.sidebar.style[o] = i.outer[o] + s
	                                    }
	                                    for (var r in i.inner) {
	                                        var a = "number" == typeof i.inner[r] ? "px" : "";
	                                        this.sidebarInner.style[r] = i.inner[r] + a
	                                    }
	                                    var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
	                                    c.eventTrigger(this.sidebar, p)
	                                } else this._initialized && (this.sidebarInner.style.right = i.inner.right);
	                                this.affixedType = e
	                            }
	                        }
	                    }, {
	                        key: "_widthBreakpoint",
	                        value: function () {
	                            window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
	                        }
	                    }, {
	                        key: "updateSticky",
	                        value: function () {
	                            var t, e = this,
	                                i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
	                            this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () {
	                                switch (t) {
	                                    case "scroll":
	                                        e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
	                                        break;
	                                    case "resize":
	                                    default:
	                                        e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0)
	                                }
	                                e._running = !1
	                            }))
	                        }
	                    }, {
	                        key: "_setSupportFeatures",
	                        value: function () {
	                            var t = this.support;
	                            t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0)
	                        }
	                    }, {
	                        key: "_getTranslate",
	                        value: function () {
	                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
	                                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
	                                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
	                            return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
	                        }
	                    }, {
	                        key: "destroy",
	                        value: function () {
	                            window.removeEventListener("resize", this, {
	                                capture: !1
	                            }), window.removeEventListener("scroll", this, {
	                                capture: !1
	                            }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
	                            var t = {
	                                inner: {},
	                                outer: {}
	                            };
	                            for (var e in t.inner = {
	                                    position: "",
	                                    top: "",
	                                    right: "",
	                                    bottom: "",
	                                    width: "",
	                                    transform: ""
	                                }, t.outer = {
	                                    height: "",
	                                    position: ""
	                                }, t.outer) this.sidebar.style[e] = t.outer[e];
	                            for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i];
	                            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
	                        }
	                    }], [{
	                        key: "supportTransform",
	                        value: function (t) {
	                            var i = !1,
	                                e = t ? "perspective" : "transform",
	                                n = e.charAt(0).toUpperCase() + e.slice(1),
	                                o = document.createElement("support").style;
	                            return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
	                                if (void 0 !== o[t]) return i = t, !1
	                            }), i
	                        }
	                    }, {
	                        key: "eventTrigger",
	                        value: function (t, e, i) {
	                            try {
	                                var n = new CustomEvent(e, {
	                                    detail: i
	                                })
	                            } catch (t) {
	                                (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
	                            }
	                            t.dispatchEvent(n)
	                        }
	                    }, {
	                        key: "extend",
	                        value: function (t, e) {
	                            var i = {};
	                            for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
	                            return i
	                        }
	                    }, {
	                        key: "offsetRelative",
	                        value: function (t) {
	                            var e = {
	                                right: 0,
	                                top: 0
	                            };
	                            do {
	                                var i = t.offsetTop,
	                                    n = t.offsetright;
	                                isNaN(i) || (e.top += i), isNaN(n) || (e.right += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
	                            } while (t);
	                            return e
	                        }
	                    }, {
	                        key: "addClass",
	                        value: function (t, e) {
	                            c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
	                        }
	                    }, {
	                        key: "removeClass",
	                        value: function (t, e) {
	                            c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
	                        }
	                    }, {
	                        key: "hasClass",
	                        value: function (t, e) {
	                            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
	                        }
	                    }, {
	                        key: "defaults",
	                        get: function () {
	                            return n
	                        }
	                    }]), c
	                }());
	            t.default = i, window.StickySidebar = i
	        })(e)
	    });
	    return t(i), t(e(function (t, e) {
	        (function (t) {
	            var e, s = (e = t) && e.__esModule ? e : {
	                default: e
	            };
	            ! function () {
	                if ("undefined" != typeof window) {
	                    var n = window.$ || window.jQuery || window.Zepto,
	                        o = "stickySidebar";
	                    if (n) {
	                        n.fn.stickySidebar = function (i) {
	                            return this.each(function () {
	                                var t = n(this),
	                                    e = n(this).data(o);
	                                if (e || (e = new s.default(this, "object" == typeof i && i), t.data(o, e)), "string" == typeof i) {
	                                    if (void 0 === e[i] && -1 === ["destroy", "updateSticky"].indexOf(i)) throw new Error('No method named "' + i + '"');
	                                    e[i]()
	                                }
	                            })
	                        }, n.fn.stickySidebar.Constructor = s.default;
	                        var t = n.fn.stickySidebar;
	                        n.fn.stickySidebar.noConflict = function () {
	                            return n.fn.stickySidebar = t, this
	                        }
	                    }
	                }
	            }()
	        })(i)
	    }))
	});

	! function (i) {
	    i.fn.theiaStickySidebar = function (t) {
	        function e(t, e) {
	            var a = o(t, e);
	            a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
	                return function (a) {
	                    var n = o(t, e);
	                    n && i(this).unbind(a)
	                }
	            }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
	                return function (a) {
	                    var n = o(t, e);
	                    n && i(this).unbind(a)
	                }
	            }(t, e)))
	        }

	        function o(t, e) {
	            return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0)
	        }

	        function a(t, e) {
	            t.initialized = !0;
	            var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
	            0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
	                function e() {
	                    a.fixedScrollTop = 0, a.sidebar.css({
	                        "min-height": "1px"
	                    }), a.stickySidebar.css({
	                        position: "static",
	                        width: "",
	                        transform: "none"
	                    })
	                }

	                function o(t) {
	                    var e = t.height();
	                    return t.children().each(function () {
	                        e = Math.max(e, i(this).height())
	                    }), e
	                }
	                var a = {};
	                if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
	                        position: a.options.defaultPosition,
	                        overflow: "visible",
	                        "-webkit-box-sizing": "border-box",
	                        "-moz-box-sizing": "border-box",
	                        "box-sizing": "border-box"
	                    }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) {
	                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
	                    a.sidebar.find("script").filter(function (i, t) {
	                        return 0 === t.type.length || t.type.match(s)
	                    }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)
	                }
	                a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
	                var r = a.stickySidebar.offset().top,
	                    d = a.stickySidebar.outerHeight();
	                a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
	                    if (a.stickySidebar.is(":visible")) {
	                        if (i("body").width() < a.options.minWidth) return void e();
	                        if (a.options.disableOnResponsiveLayouts) {
	                            var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
	                            if (s + 50 > a.container.width()) return void e()
	                        }
	                        var r = i(document).scrollTop(),
	                            d = "static";
	                        if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
	                            var c, p = a.paddingTop + t.additionalMarginTop,
	                                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
	                                l = a.sidebar.offset().top,
	                                f = a.sidebar.offset().top + o(a.container),
	                                h = 0 + t.additionalMarginTop,
	                                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
	                            c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
	                            var u = l - r + a.paddingTop,
	                                S = f - r - a.paddingBottom - a.marginBottom,
	                                y = a.stickySidebar.offset().top - r,
	                                m = a.previousScrollTop - r;
	                            "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
	                            var k = a.container.height() == a.stickySidebar.outerHeight();
	                            d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
	                        }
	                        if ("fixed" == d) {
	                            var v = i(document).scrollLeft();
	                            a.stickySidebar.css({
	                                position: "fixed",
	                                width: n(a.stickySidebar) + "px",
	                                transform: "translateY(" + y + "px)",
	                                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
	                                top: "0px"
	                            })
	                        } else if ("absolute" == d) {
	                            var x = {};
	                            "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x)
	                        } else "static" == d && e();
	                        "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({
	                            "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom
	                        }), a.previousScrollTop = r
	                    }
	                }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
	                    return function () {
	                        i.onScroll(i)
	                    }
	                }(a)), i(window).on("resize." + a.options.namespace, function (i) {
	                    return function () {
	                        i.stickySidebar.css({
	                            position: "static"
	                        }), i.onScroll(i)
	                    }
	                }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
	                    return function () {
	                        i.onScroll(i)
	                    }
	                }(a))
	            })
	        }

	        function n(i) {
	            var t;
	            try {
	                t = i[0].getBoundingClientRect().width
	            } catch (i) {}
	            return "undefined" == typeof t && (t = i.width()), t
	        }
	        var s = {
	            containerSelector: "",
	            additionalMarginTop: 0,
	            additionalMarginBottom: 0,
	            updateSidebarHeight: !0,
	            minWidth: 0,
	            disableOnResponsiveLayouts: !0,
	            sidebarBehavior: "modern",
	            defaultPosition: "relative",
	            namespace: "TSS"
	        };
	        return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this
	    }
	}(jQuery);

	! function (t) {
	    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function (t) {
	    var e = Array.prototype.slice,
	        i = Array.prototype.splice,
	        n = {
	            topSpacing: 0,
	            bottomSpacing: 0,
	            className: "is-sticky",
	            wrapperClassName: "sticky-wrapper",
	            center: !1,
	            getWidthFrom: "",
	            widthFromWrapper: !0,
	            responsiveWidth: !1,
	            zIndex: 100
	        },
	        r = t(window),
	        s = t(document),
	        o = [],
	        c = r.height(),
	        p = function () {
	            for (var e = r.scrollTop(), i = s.height(), n = i - c, p = e > n ? n - e : 0, a = 0, d = o.length; a < d; a++) {
	                var l = o[a],
	                    h = l.stickyWrapper.offset().top - l.topSpacing - p;
	                if (l.stickyWrapper.css("height", l.stickyElement.outerHeight()), e <= h) null !== l.currentTop && (l.stickyElement.css({
	                    width: "",
	                    position: "",
	                    top: "",
	                    "z-index": ""
	                }), l.stickyElement.parent().removeClass(l.className), l.stickyElement.trigger("sticky-end", [l]), l.currentTop = null);
	                else {
	                    var u, g = i - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - p;
	                    if (g < 0 ? g += l.topSpacing : g = l.topSpacing, l.currentTop !== g) l.getWidthFrom ? (padding = l.stickyElement.innerWidth() - l.stickyElement.width(), u = t(l.getWidthFrom).width() - padding || null) : l.widthFromWrapper && (u = l.stickyWrapper.width()), null == u && (u = l.stickyElement.width()), l.stickyElement.css("width", u).css("position", "fixed").css("top", g).css("z-index", l.zIndex), l.stickyElement.parent().addClass(l.className), null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]), l.currentTop === l.topSpacing && l.currentTop > g || null === l.currentTop && g < l.topSpacing ? l.stickyElement.trigger("sticky-bottom-reached", [l]) : null !== l.currentTop && g === l.topSpacing && l.currentTop < g && l.stickyElement.trigger("sticky-bottom-unreached", [l]), l.currentTop = g;
	                    var m = l.stickyWrapper.parent();
	                    l.stickyElement.offset().top + l.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && l.stickyElement.offset().top <= l.topSpacing ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : l.stickyElement.css("position", "fixed").css("top", g).css("bottom", "").css("z-index", l.zIndex)
	                }
	            }
	        },
	        a = function () {
	            c = r.height();
	            for (var e = 0, i = o.length; e < i; e++) {
	                var n = o[e],
	                    s = null;
	                n.getWidthFrom ? n.responsiveWidth && (s = t(n.getWidthFrom).width()) : n.widthFromWrapper && (s = n.stickyWrapper.width()), null != s && n.stickyElement.css("width", s)
	            }
	        },
	        d = {
	            init: function (e) {
	                return this.each(function () {
	                    var i = t.extend({}, n, e),
	                        r = t(this),
	                        s = r.attr("id"),
	                        c = s ? s + "-" + n.wrapperClassName : n.wrapperClassName,
	                        p = t("<div></div>").attr("id", c).addClass(i.wrapperClassName);
	                    r.wrapAll(function () {
	                        if (0 == t(this).parent("#" + c).length) return p
	                    });
	                    var a = r.parent();
	                    i.center && a.css({
	                        width: r.outerWidth(),
	                        marginLeft: "auto",
	                        marginRight: "auto"
	                    }), "right" === r.css("float") && r.css({
	                        float: "none"
	                    }).parent().css({
	                        float: "right"
	                    }), i.stickyElement = r, i.stickyWrapper = a, i.currentTop = null, o.push(i), d.setWrapperHeight(this), d.setupChangeListeners(this)
	                })
	            },
	            setWrapperHeight: function (e) {
	                var i = t(e),
	                    n = i.parent();
	                n && n.css("height", i.outerHeight())
	            },
	            setupChangeListeners: function (t) {
	                window.MutationObserver ? new window.MutationObserver(function (e) {
	                    (e[0].addedNodes.length || e[0].removedNodes.length) && d.setWrapperHeight(t)
	                }).observe(t, {
	                    subtree: !0,
	                    childList: !0
	                }) : window.addEventListener ? (t.addEventListener("DOMNodeInserted", function () {
	                    d.setWrapperHeight(t)
	                }, !1), t.addEventListener("DOMNodeRemoved", function () {
	                    d.setWrapperHeight(t)
	                }, !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", function () {
	                    d.setWrapperHeight(t)
	                }), t.attachEvent("onDOMNodeRemoved", function () {
	                    d.setWrapperHeight(t)
	                }))
	            },
	            update: p,
	            unstick: function (e) {
	                return this.each(function () {
	                    for (var e = t(this), n = -1, r = o.length; r-- > 0;) o[r].stickyElement.get(0) === this && (i.call(o, r, 1), n = r); - 1 !== n && (e.unwrap(), e.css({
	                        width: "",
	                        position: "",
	                        top: "",
	                        float: "",
	                        "z-index": ""
	                    }))
	                })
	            }
	        };
	    window.addEventListener ? (window.addEventListener("scroll", p, !1), window.addEventListener("resize", a, !1)) : window.attachEvent && (window.attachEvent("onscroll", p), window.attachEvent("onresize", a)), t.fn.sticky = function (i) {
	        return d[i] ? d[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : d.init.apply(this, arguments)
	    }, t.fn.unstick = function (i) {
	        return d[i] ? d[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : d.unstick.apply(this, arguments)
	    }, t(function () {
	        setTimeout(p, 0)
	    })
	});

	/*! pace 1.0.0 */
	(function () {
	    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
	        Y = {}.hasOwnProperty,
	        Z = function (a, b) {
	            function c() {
	                this.constructor = a
	            }
	            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
	            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
	        },
	        $ = [].indexOf || function (a) {
	            for (var b = 0, c = this.length; c > b; b++)
	                if (b in this && this[b] === a) return b;
	            return -1
	        };
	    for (u = {
	            catchupTime: 100,
	            initialRate: .03,
	            minTime: 250,
	            ghostTime: 100,
	            maxProgressPerFrame: 20,
	            easeFactor: 1.25,
	            startOnPageLoad: !0,
	            restartOnPushState: !0,
	            restartOnRequestAfter: 500,
	            target: "body",
	            elements: {
	                checkInterval: 100,
	                selectors: ["body"]
	            },
	            eventLag: {
	                minSamples: 10,
	                sampleCount: 3,
	                lagThreshold: 3
	            },
	            ajax: {
	                trackMethods: ["GET"],
	                trackWebSockets: !0,
	                ignoreURLs: []
	            }
	        }, C = function () {
	            var a;
	            return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
	        }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (a) {
	            return setTimeout(a, 50)
	        }, t = function (a) {
	            return clearTimeout(a)
	        }), G = function (a) {
	            var b, c;
	            return b = C(), (c = function () {
	                var d;
	                return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
	                    return E(c)
	                })) : setTimeout(c, 33 - d)
	            })()
	        }, F = function () {
	            var a, b, c;
	            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
	        }, v = function () {
	            var a, b, c, d, e, f, g;
	            for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
	                if (c = d[f])
	                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
	            return b
	        }, q = function (a) {
	            var b, c, d, e, f;
	            for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
	            return c / b
	        }, x = function (a, b) {
	            var c, d, e;
	            if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
	                if (c = e.getAttribute("data-pace-" + a), !b) return c;
	                try {
	                    return JSON.parse(c)
	                } catch (f) {
	                    return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
	                }
	            }
	        }, g = function () {
	            function a() {}
	            return a.prototype.on = function (a, b, c, d) {
	                var e;
	                return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
	                    handler: b,
	                    ctx: c,
	                    once: d
	                })
	            }, a.prototype.once = function (a, b, c) {
	                return this.on(a, b, c, !0)
	            }, a.prototype.off = function (a, b) {
	                var c, d, e;
	                if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
	                    if (null == b) return delete this.bindings[a];
	                    for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
	                    return e
	                }
	            }, a.prototype.trigger = function () {
	                var a, b, c, d, e, f, g, h, i;
	                if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
	                    for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
	                    return i
	                }
	            }, a
	        }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
	    i = function (a) {
	        function b() {
	            return V = b.__super__.constructor.apply(this, arguments)
	        }
	        return Z(b, a), b
	    }(Error), b = function () {
	        function a() {
	            this.progress = 0
	        }
	        return a.prototype.getElement = function () {
	            var a;
	            if (null == this.el) {
	                if (a = document.querySelector(D.target), !a) throw new i;
	                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
	            }
	            return this.el
	        }, a.prototype.finish = function () {
	            var a;
	            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
	        }, a.prototype.update = function (a) {
	            return this.progress = a, this.render()
	        }, a.prototype.destroy = function () {
	            try {
	                this.getElement().parentNode.removeChild(this.getElement())
	            } catch (a) {
	                i = a
	            }
	            return this.el = void 0
	        }, a.prototype.render = function () {
	            var a, b, c, d, e, f, g;
	            if (null == document.querySelector(D.target)) return !1;
	            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
	            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
	        }, a.prototype.done = function () {
	            return this.progress >= 100
	        }, a
	    }(), h = function () {
	        function a() {
	            this.bindings = {}
	        }
	        return a.prototype.trigger = function (a, b) {
	            var c, d, e, f, g;
	            if (null != this.bindings[a]) {
	                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
	                return g
	            }
	        }, a.prototype.on = function (a, b) {
	            var c;
	            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
	        }, a
	    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function (a, b) {
	        var c, d, e, f;
	        f = [];
	        for (d in b.prototype) try {
	            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
	        } catch (g) {
	            c = g
	        }
	        return f
	    }, A = [], j.ignore = function () {
	        var a, b, c;
	        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
	    }, j.track = function () {
	        var a, b, c;
	        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
	    }, J = function (a) {
	        var b;
	        if (null == a && (a = "GET"), "track" === A[0]) return "force";
	        if (!A.length && D.ajax) {
	            if ("socket" === a && D.ajax.trackWebSockets) return !0;
	            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
	        }
	        return !1
	    }, k = function (a) {
	        function b() {
	            var a, c = this;
	            b.__super__.constructor.apply(this, arguments), a = function (a) {
	                var b;
	                return b = a.open, a.open = function (d, e) {
	                    return J(d) && c.trigger("request", {
	                        type: d,
	                        url: e,
	                        request: a
	                    }), b.apply(a, arguments)
	                }
	            }, window.XMLHttpRequest = function (b) {
	                var c;
	                return c = new P(b), a(c), c
	            };
	            try {
	                w(window.XMLHttpRequest, P)
	            } catch (d) {}
	            if (null != O) {
	                window.XDomainRequest = function () {
	                    var b;
	                    return b = new O, a(b), b
	                };
	                try {
	                    w(window.XDomainRequest, O)
	                } catch (d) {}
	            }
	            if (null != N && D.ajax.trackWebSockets) {
	                window.WebSocket = function (a, b) {
	                    var d;
	                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
	                        type: "socket",
	                        url: a,
	                        protocols: b,
	                        request: d
	                    }), d
	                };
	                try {
	                    w(window.WebSocket, N)
	                } catch (d) {}
	            }
	        }
	        return Z(b, a), b
	    }(h), R = null, y = function () {
	        return null == R && (R = new k), R
	    }, I = function (a) {
	        var b, c, d, e;
	        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
	            if (b = e[c], "string" == typeof b) {
	                if (-1 !== a.indexOf(b)) return !0
	            } else if (b.test(a)) return !0;
	        return !1
	    }, y().on("request", function (b) {
	        var c, d, e, f, g;
	        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
	            var b, c, g, h, i, k;
	            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
	                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
	                    if (K = i[c], K instanceof a) {
	                        K.watch.apply(K, d);
	                        break
	                    }
	                    k.push(void 0)
	                }
	                return k
	            }
	        }, c))
	    }), a = function () {
	        function a() {
	            var a = this;
	            this.elements = [], y().on("request", function () {
	                return a.watch.apply(a, arguments)
	            })
	        }
	        return a.prototype.watch = function (a) {
	            var b, c, d, e;
	            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
	        }, a
	    }(), o = function () {
	        function a(a) {
	            var b, c, d, e, f, g, h = this;
	            if (this.progress = 0, null != window.ProgressEvent)
	                for (c = null, a.addEventListener("progress", function (a) {
	                        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
	                    }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
	                    return h.progress = 100
	                }, !1);
	            else f = a.onreadystatechange, a.onreadystatechange = function () {
	                var b;
	                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
	            }
	        }
	        return a
	    }(), n = function () {
	        function a(a) {
	            var b, c, d, e, f = this;
	            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
	                return f.progress = 100
	            }, !1)
	        }
	        return a
	    }(), d = function () {
	        function a(a) {
	            var b, c, d, f;
	            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
	        }
	        return a
	    }(), e = function () {
	        function a(a) {
	            this.selector = a, this.progress = 0, this.check()
	        }
	        return a.prototype.check = function () {
	            var a = this;
	            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
	                return a.check()
	            }, D.elements.checkInterval)
	        }, a.prototype.done = function () {
	            return this.progress = 100
	        }, a
	    }(), c = function () {
	        function a() {
	            var a, b, c = this;
	            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
	                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
	            }
	        }
	        return a.prototype.states = {
	            loading: 0,
	            interactive: 50,
	            complete: 100
	        }, a
	    }(), f = function () {
	        function a() {
	            var a, b, c, d, e, f = this;
	            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
	                var g;
	                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
	            }, 50)
	        }
	        return a
	    }(), m = function () {
	        function a(a) {
	            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
	        }
	        return a.prototype.tick = function (a, b) {
	            var c;
	            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
	        }, a
	    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function () {
	        return D.restartOnPushState ? j.restart() : void 0
	    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
	        return z(), T.apply(window.history, arguments)
	    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
	        return z(), W.apply(window.history, arguments)
	    }), l = {
	        ajax: a,
	        elements: d,
	        document: c,
	        eventLag: f
	    }, (B = function () {
	        var a, c, d, e, f, g, h, i;
	        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
	        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
	        return j.bar = r = new b, H = [], M = new m
	    })(), j.stop = function () {
	        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
	    }, j.restart = function () {
	        return j.trigger("restart"), j.stop(), j.start()
	    }, j.go = function () {
	        var a;
	        return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
	            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
	            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
	                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
	            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
	                return r.finish(), j.running = !1, j.trigger("hide")
	            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
	        })
	    }, j.start = function (a) {
	        v(D, a), j.running = !0;
	        try {
	            r.render()
	        } catch (b) {
	            i = b
	        }
	        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
	    }, "function" == typeof define && define.amd ? define(function () {
	        return j
	    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
	}).call(this);

	/*loadCss*/
	! function (w) {
	    "use strict";
	    var loadCSS = function (href, before, media) {
	        function ready(cb) {
	            return doc.body ? cb() : void setTimeout(function () {
	                ready(cb)
	            })
	        }

	        function loadCB() {
	            ss.addEventListener && ss.removeEventListener("load", loadCB), ss.media = media || "all"
	        }
	        var ref, doc = w.document,
	            ss = doc.createElement("link");
	        if (before) ref = before;
	        else {
	            var refs = (doc.body || doc.getElementsByTagName("head")[0]).childNodes;
	            ref = refs[refs.length - 1]
	        }
	        var sheets = doc.styleSheets;
	        ss.rel = "stylesheet", ss.href = href, ss.media = "only x", ready(function () {
	            ref.parentNode.insertBefore(ss, before ? ref : ref.nextSibling)
	        });
	        var onloadcssdefined = function (cb) {
	            for (var resolvedHref = ss.href, i = sheets.length; i--;)
	                if (sheets[i].href === resolvedHref) return cb();
	            setTimeout(function () {
	                onloadcssdefined(cb)
	            })
	        };
	        return ss.addEventListener && ss.addEventListener("load", loadCB), ss.onloadcssdefined = onloadcssdefined, onloadcssdefined(loadCB), ss
	    };
	    "undefined" != typeof exports ? exports.loadCSS = loadCSS : w.loadCSS = loadCSS
	}("undefined" != typeof global ? global : this);
	/*link[rel=preload] polyfill*/
	! function (w) {
	    if (w.loadCSS) {
	        var rp = loadCSS.relpreload = {};
	        if (rp.support = function () {
	                try {
	                    return w.document.createElement("link").relList.supports("preload")
	                } catch (e) {
	                    return !1
	                }
	            }, rp.poly = function () {
	                for (var links = w.document.getElementsByTagName("link"), i = 0; i < links.length; i++) {
	                    var link = links[i];
	                    "preload" === link.rel && "style" === link.getAttribute("as") && (w.loadCSS(link.href, link), link.rel = null)
	                }
	            }, !rp.support()) {
	            rp.poly();
	            var run = w.setInterval(rp.poly, 300);
	            w.addEventListener && w.addEventListener("load", function () {
	                w.clearInterval(run)
	            }), w.attachEvent && w.attachEvent("onload", function () {
	                w.clearInterval(run)
	            })
	        }
	    }
	}(this); <
	script type = 'text/javascript' >
	    /*<![CDATA[*/
	    var idBlog = "401209566305587071"; // معرف المدونة التي وضعت عليها لوحة التفعيل
	var idPage = "2526024361151060241"; // معرف الصفحة التي وضعت عليها لوحة التفعيل
	$.ajax({
	    dataType: "json",
	    url: "https://www.blogger.com/feeds/" + idBlog + "/pages/default/" + idPage + "?alt=json-in-script",
	    method: "GET",
	    dataType: "jsonp",
	    success: function (e) {
	        var o, t = $(e.entry.content.$t),
	            n = t.find("li"),
	            a = t.find("script"),
	            l = [];
	        $allow = !0, $("body").append(a);
	        for (o = 0; o < n.length; o += 1) l.push($(n[o]).text());
	        o = window.location.hostname.toLowerCase(), n = window.location.href.toLowerCase();
	        var s;
	        l.length;
	        for (s = 0; s < l.length; s += 1) {
	            if (-1 != o.indexOf(l[s])) {
	                break
	            }
	            s == l.length - 1 && $('body *').remove() && $('body').addClass('RE').append("<style>body.RE {background: url(//2.bp.blogspot.com/-do3kTvbcSfk/WrwXWhWRh3I/AAAAAAAAANA/YxjG53tSZTQo3vSCt9KxZ-SPDj5z5jzPQCK4BGAYYCw/s1600/%25D8%25B3%25D9%258A%25D9%2588%25D8%25A8%25D9%2584%25D8%25B3.png) no-repeat center #eee;background-position: center center;height: 98vh;}</style>")
	        }
	    }
	});
	/*]]>*/
	<
	/script>! function (e) {
	    "use strict";
	    e(window).load(function () {
	        e("#header nav ul.menu > li.menu-item:last").addClass("last-menu-item"),
	            function () {
	                var a = e("#header div.menu-wrapper").outerHeight();
	                if (e("#header").height(a), !e("#header").hasClass("enable-sticky") && !e("#header").hasClass("enable-sticky")) return;
	                e(window).scroll(function () {
	                    var a = e(document).width();
	                    a > 1200 && e("#header").hasClass("enable-sticky") ? e(window).scrollTop() >= 300 ? e("#header").addClass("is-sticky") : e("#header").removeClass("is-sticky") : a < 1200 && e("#header").hasClass("enable-sticky") && e(window).scrollTop() >= 300 ? e("#header").addClass("is-sticky") : e("#header").removeClass("is-sticky")
	                }), e(window).resize(function () {
	                    var a = e(document).width(),
	                        t = e("#header div.menu-wrapper").outerHeight();
	                    e("#header").height(t), a < 1200 && !e("#header").hasClass("enable-sticky") && e("#header").removeClass("is-sticky")
	                })
	            }(), e(document).width() > 767 && (e("div.epcl-share-container").stickySidebar({
	                topSpacing: 80,
	                bottomSpacing: 0
	            }), e("#sidebar").hasClass("sticky-enabled") && e("#sidebar").outerHeight() < e("div.right-content").outerHeight() && e("#sidebar.sticky-enabled").theiaStickySidebar({
	                additionalMarginTop: 60,
	                additionalMarginBottom: 60
	            })), AOS.init({
	                offset: 220,
	                duration: 700,
	                disable: window.innerWidth < 1024,
	                easing: "ease",
	                once: !0
	            })
	    }), e(document).ready(function (e) {
	        e("#commentform").removeAttr("novalidate"), e(document).width() < 768 && e("#header li.menu-item-has-children > a").on("click", function (a) {
	            e(this).parent().toggleClass("menu-open"), a.preventDefault()
	        }), e(".lazy, img[data-src], iframe[data-src]").Lazy({
	            afterLoad: function (e) {
	                e.addClass("loaded")
	            }
	        }), e("body").hasClass("enable-lazy-adsense") && e("ins[data-ad-slot]").adsenseLoader(), e(".count").each(function () {
	            e(this).prop("Counter", 0).animate({
	                Counter: e(this).data("total")
	            }, {
	                duration: 1500,
	                easing: "swing",
	                step: function (a) {
	                    e(this).text(Math.ceil(a))
	                }
	            })
	        }), e("div.epcl-download a").on("click", function () {
	            var a = e(this).data("post-id");
	            e.ajax({
	                type: "post",
	                url: ajax_var.url,
	                data: {
	                    action: "epcl_download",
	                    nonce: ajax_var.nonce,
	                    post_id: a
	                },
	                success: function (e) {}
	            })
	        }), e("select.custom-select, aside select, #footer select").niceSelect(), e("#header div.menu-mobile").on("click", function () {
	            e("#header").toggleClass("menu-open")
	        }), e(".filters select").change(function () {
	            var a = e(this).val();
	            a && (document.location = a)
	        }), e("#back-to-top").on("click", function (a) {
	            return a.preventDefault(), e("html, body").animate({
	                scrollTop: 0
	            }, 500), !1
	        }), e(".permalink .copy").on("click", function () {
	            e("#copy-link").select(), document.execCommand("copy")
	        }), e(".post-format-gallery .slick-slider").each(function () {
	            var a = !1;
	            parseInt(e(this).data("rtl")) > 0 && (a = !0), e(this).slick({
	                cssEase: "ease",
	                fade: !0,
	                arrows: !0,
	                infinite: !0,
	                dots: !1,
	                autoplay: !1,
	                speed: 600,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                rtl: a
	            })
	        }), e(".epcl-carousel").each(function (a, t) {
	            var s = parseInt(e(this).data("show")),
	                i = !1;
	            parseInt(e(this).data("rtl")) > 0 && (i = !0), e(this).slick({
	                cssEase: "ease",
	                fade: !1,
	                arrows: !0,
	                infinite: !0,
	                dots: !1,
	                autoplay: !1,
	                speed: 600,
	                rtl: i,
	                slidesToShow: s,
	                slidesToScroll: s,
	                responsive: [, {
	                    breakpoint: 1700,
	                    settings: {
	                        slidesToShow: 4,
	                        slidesToScroll: 4
	                    }
	                }, {
	                    breakpoint: 1200,
	                    settings: {
	                        slidesToShow: 3,
	                        slidesToScroll: 3
	                    }
	                }, {
	                    breakpoint: 980,
	                    settings: {
	                        slidesToShow: 2,
	                        slidesToScroll: 2
	                    }
	                }, {
	                    breakpoint: 767,
	                    settings: {
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                }]
	            })
	        }), e(".lightbox").magnificPopup({
	            mainClass: "my-mfp-zoom-in",
	            removalDelay: 300,
	            closeMarkup: '<i title="%title%" class="mfp-close fa fa-times"></i>',
	            fixedContentPos: !0
	        }), e(".epcl-gallery").each(function () {
	            e(this).find("ul").magnificPopup({
	                type: "image",
	                gallery: {
	                    enabled: !0,
	                    arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>',
	                    tCounter: "%curr% / %total%"
	                },
	                delegate: "a",
	                mainClass: "my-mfp-zoom-in",
	                removalDelay: 300,
	                closeMarkup: '<span title="%title%" class="mfp-close">&times;</span>'
	            })
	        }), e(".wp-block-gallery, .woocommerce-product-gallery").each(function () {
	            e(this).magnificPopup({
	                type: "image",
	                gallery: {
	                    enabled: !0,
	                    arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>',
	                    tCounter: "%curr% / %total%"
	                },
	                delegate: "a[href$='.jpg'],a[href$='.png'],a[href$='.gif']",
	                mainClass: "my-mfp-zoom-in",
	                removalDelay: 300,
	                closeMarkup: '<span title="%title%" class="mfp-close">&times;</span>'
	            })
	        })
	    })
	}(jQuery);

	function kodein_checkelement(e) {
	    return document.getElementById(e) ? 1 : 0
	}

	function kodein_insertelement(e, n, t) {
	    var r = n.parentNode;
	    "after" == t && r.insertBefore(e, n.nextSibling), "before" == t && r.insertBefore(e, n)
	}

	function kodein_moveElement(e, n, t, r, i, o) {
	    if (!kodein_checkelement(r)) return !1;
	    var m = document.getElementById(i),
	        d = m.getElementsByTagName(n),
	        l = document.getElementById(r);
	    if (0 == t || d.length < 0 || d.length < t) return m.insertAdjacentElement(o, l), !1;
	    kodein_insertelement(l, d[t -= 1], e)
	}

	function kodein_MoveByID(e, n) {
	    var t = document.createDocumentFragment();
	    t.appendChild(document.getElementById(e)), document.getElementById(n).appendChild(t)
	}
