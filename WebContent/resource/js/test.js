(function(e, t) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = e.document ? t(e, true) : function(e) {
			if (!e.document) {
				throw new Error("jQuery requires a window with a document")
			}
			return t(e)
		}
	} else {
		t(e)
	}
})
		(
				typeof window !== "undefined" ? window : this,
				function(e, t) {
					function g(e) {
						var t = e.length, n = h.type(e);
						if (n === "function" || h.isWindow(e)) {
							return false
						}
						if (e.nodeType === 1 && t) {
							return true
						}
						return n === "array" || t === 0
								|| typeof t === "number" && t > 0 && t - 1 in e
					}
					function S(e, t, n) {
						if (h.isFunction(t)) {
							return h.grep(e, function(e, r) {
								return !!t.call(e, r, e) !== n
							})
						}
						if (t.nodeType) {
							return h.grep(e, function(e) {
								return e === t !== n
							})
						}
						if (typeof t === "string") {
							if (E.test(t)) {
								return h.filter(t, e, n)
							}
							t = h.filter(t, e)
						}
						return h.grep(e, function(e) {
							return h.inArray(e, t) >= 0 !== n
						})
					}
					function A(e, t) {
						do {
							e = e[t]
						} while (e && e.nodeType !== 1);
						return e
					}
					function _(e) {
						var t = M[e] = {};
						h.each(e.match(O) || [], function(e, n) {
							t[n] = true
						});
						return t
					}
					function P() {
						if (T.addEventListener) {
							T.removeEventListener("DOMContentLoaded", H, false);
							e.removeEventListener("load", H, false)
						} else {
							T.detachEvent("onreadystatechange", H);
							e.detachEvent("onload", H)
						}
					}
					function H() {
						if (T.addEventListener || event.type === "load"
								|| T.readyState === "complete") {
							P();
							h.ready()
						}
					}
					function q(e, t, n) {
						if (n === undefined && e.nodeType === 1) {
							var r = "data-" + t.replace(I, "-$1").toLowerCase();
							n = e.getAttribute(r);
							if (typeof n === "string") {
								try {
									n = n === "true" ? true
											: n === "false" ? false
													: n === "null" ? null : +n
															+ "" === n ? +n : F
															.test(n) ? h
															.parseJSON(n) : n
								} catch (i) {
								}
								h.data(e, t, n)
							} else {
								n = undefined
							}
						}
						return n
					}
					function R(e) {
						var t;
						for (t in e) {
							if (t === "data" && h.isEmptyObject(e[t])) {
								continue
							}
							if (t !== "toJSON") {
								return false
							}
						}
						return true
					}
					function U(e, t, r, i) {
						if (!h.acceptData(e)) {
							return
						}
						var s, o, u = h.expando, a = e.nodeType, f = a ? h.cache
								: e, l = a ? e[u] : e[u] && u;
						if ((!l || !f[l] || !i && !f[l].data)
								&& r === undefined && typeof t === "string") {
							return
						}
						if (!l) {
							if (a) {
								l = e[u] = n.pop() || h.guid++
							} else {
								l = u
							}
						}
						if (!f[l]) {
							f[l] = a ? {} : {
								toJSON : h.noop
							}
						}
						if (typeof t === "object" || typeof t === "function") {
							if (i) {
								f[l] = h.extend(f[l], t)
							} else {
								f[l].data = h.extend(f[l].data, t)
							}
						}
						o = f[l];
						if (!i) {
							if (!o.data) {
								o.data = {}
							}
							o = o.data
						}
						if (r !== undefined) {
							o[h.camelCase(t)] = r
						}
						if (typeof t === "string") {
							s = o[t];
							if (s == null) {
								s = o[h.camelCase(t)]
							}
						} else {
							s = o
						}
						return s
					}
					function z(e, t, n) {
						if (!h.acceptData(e)) {
							return
						}
						var r, i, s = e.nodeType, o = s ? h.cache : e, u = s ? e[h.expando]
								: h.expando;
						if (!o[u]) {
							return
						}
						if (t) {
							r = n ? o[u] : o[u].data;
							if (r) {
								if (!h.isArray(t)) {
									if (t in r) {
										t = [ t ]
									} else {
										t = h.camelCase(t);
										if (t in r) {
											t = [ t ]
										} else {
											t = t.split(" ")
										}
									}
								} else {
									t = t.concat(h.map(t, h.camelCase))
								}
								i = t.length;
								while (i--) {
									delete r[t[i]]
								}
								if (n ? !R(r) : !h.isEmptyObject(r)) {
									return
								}
							}
						}
						if (!n) {
							delete o[u].data;
							if (!R(o[u])) {
								return
							}
						}
						if (s) {
							h.cleanData([ e ], true)
						} else if (l.deleteExpando || o != o.window) {
							delete o[u]
						} else {
							o[u] = null
						}
					}
					function et() {
						return true
					}
					function tt() {
						return false
					}
					function nt() {
						try {
							return T.activeElement
						} catch (e) {
						}
					}
					function rt(e) {
						var t = it.split("|"), n = e.createDocumentFragment();
						if (n.createElement) {
							while (t.length) {
								n.createElement(t.pop())
							}
						}
						return n
					}
					function wt(e, t) {
						var n, r, i = 0, s = typeof e.getElementsByTagName !== B ? e
								.getElementsByTagName(t || "*")
								: typeof e.querySelectorAll !== B ? e
										.querySelectorAll(t || "*") : undefined;
						if (!s) {
							for (s = [], n = e.childNodes || e; (r = n[i]) != null; i++) {
								if (!t || h.nodeName(r, t)) {
									s.push(r)
								} else {
									h.merge(s, wt(r, t))
								}
							}
						}
						return t === undefined || t && h.nodeName(e, t) ? h
								.merge([ e ], s) : s
					}
					function Et(e) {
						if (J.test(e.type)) {
							e.defaultChecked = e.checked
						}
					}
					function St(e, t) {
						return h.nodeName(e, "table")
								&& h.nodeName(t.nodeType !== 11 ? t
										: t.firstChild, "tr") ? e
								.getElementsByTagName("tbody")[0]
								|| e.appendChild(e.ownerDocument
										.createElement("tbody")) : e
					}
					function xt(e) {
						e.type = (h.find.attr(e, "type") !== null) + "/"
								+ e.type;
						return e
					}
					function Tt(e) {
						var t = vt.exec(e.type);
						if (t) {
							e.type = t[1]
						} else {
							e.removeAttribute("type")
						}
						return e
					}
					function Nt(e, t) {
						var n, r = 0;
						for (; (n = e[r]) != null; r++) {
							h._data(n, "globalEval", !t
									|| h._data(t[r], "globalEval"))
						}
					}
					function Ct(e, t) {
						if (t.nodeType !== 1 || !h.hasData(e)) {
							return
						}
						var n, r, i, s = h._data(e), o = h._data(t, s), u = s.events;
						if (u) {
							delete o.handle;
							o.events = {};
							for (n in u) {
								for (r = 0, i = u[n].length; r < i; r++) {
									h.event.add(t, n, u[n][r])
								}
							}
						}
						if (o.data) {
							o.data = h.extend({}, o.data)
						}
					}
					function kt(e, t) {
						var n, r, i;
						if (t.nodeType !== 1) {
							return
						}
						n = t.nodeName.toLowerCase();
						if (!l.noCloneEvent && t[h.expando]) {
							i = h._data(t);
							for (r in i.events) {
								h.removeEvent(t, r, i.handle)
							}
							t.removeAttribute(h.expando)
						}
						if (n === "script" && t.text !== e.text) {
							xt(t).text = e.text;
							Tt(t)
						} else if (n === "object") {
							if (t.parentNode) {
								t.outerHTML = e.outerHTML
							}
							if (l.html5Clone && e.innerHTML
									&& !h.trim(t.innerHTML)) {
								t.innerHTML = e.innerHTML
							}
						} else if (n === "input" && J.test(e.type)) {
							t.defaultChecked = t.checked = e.checked;
							if (t.value !== e.value) {
								t.value = e.value
							}
						} else if (n === "option") {
							t.defaultSelected = t.selected = e.defaultSelected
						} else if (n === "input" || n === "textarea") {
							t.defaultValue = e.defaultValue
						}
					}
					function Ot(t, n) {
						var r, i = h(n.createElement(t)).appendTo(n.body), s = e.getDefaultComputedStyle
								&& (r = e.getDefaultComputedStyle(i[0])) ? r.display
								: h.css(i[0], "display");
						i.detach();
						return s
					}
					function Mt(e) {
						var t = T, n = At[e];
						if (!n) {
							n = Ot(e, t);
							if (n === "none" || !n) {
								Lt = (Lt || h("<iframe frameborder='0' width='0' height='0'/>"))
										.appendTo(t.documentElement);
								t = (Lt[0].contentWindow || Lt[0].contentDocument).document;
								t.write();
								t.close();
								n = Ot(e, t);
								Lt.detach()
							}
							At[e] = n
						}
						return n
					}
					function jt(e, t) {
						return {
							get : function() {
								var n = e();
								if (n == null) {
									return
								}
								if (n) {
									delete this.get;
									return
								}
								return (this.get = t).apply(this, arguments)
							}
						}
					}
					function Vt(e, t) {
						if (t in e) {
							return t
						}
						var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Xt.length;
						while (i--) {
							t = Xt[i] + n;
							if (t in e) {
								return t
							}
						}
						return r
					}
					function $t(e, t) {
						var n, r, i, s = [], o = 0, u = e.length;
						for (; o < u; o++) {
							r = e[o];
							if (!r.style) {
								continue
							}
							s[o] = h._data(r, "olddisplay");
							n = r.style.display;
							if (t) {
								if (!s[o] && n === "none") {
									r.style.display = ""
								}
								if (r.style.display === "" && V(r)) {
									s[o] = h._data(r, "olddisplay",
											Mt(r.nodeName))
								}
							} else {
								i = V(r);
								if (n && n !== "none" || !i) {
									h._data(r, "olddisplay", i ? n : h.css(r,
											"display"))
								}
							}
						}
						for (o = 0; o < u; o++) {
							r = e[o];
							if (!r.style) {
								continue
							}
							if (!t || r.style.display === "none"
									|| r.style.display === "") {
								r.style.display = t ? s[o] || "" : "none"
							}
						}
						return e
					}
					function Jt(e, t, n) {
						var r = Rt.exec(t);
						return r ? Math.max(0, r[1] - (n || 0))
								+ (r[2] || "px") : t
					}
					function Kt(e, t, n, r, i) {
						var s = n === (r ? "border" : "content") ? 4
								: t === "width" ? 1 : 0, o = 0;
						for (; s < 4; s += 2) {
							if (n === "margin") {
								o += h.css(e, n + X[s], true, i)
							}
							if (r) {
								if (n === "content") {
									o -= h.css(e, "padding" + X[s], true, i)
								}
								if (n !== "margin") {
									o -= h.css(e, "border" + X[s] + "Width",
											true, i)
								}
							} else {
								o += h.css(e, "padding" + X[s], true, i);
								if (n !== "padding") {
									o += h.css(e, "border" + X[s] + "Width",
											true, i)
								}
							}
						}
						return o
					}
					function Qt(e, t, n) {
						var r = true, i = t === "width" ? e.offsetWidth
								: e.offsetHeight, s = Pt(e), o = l.boxSizing
								&& h.css(e, "boxSizing", false, s) === "border-box";
						if (i <= 0 || i == null) {
							i = Ht(e, t, s);
							if (i < 0 || i == null) {
								i = e.style[t]
							}
							if (Dt.test(i)) {
								return i
							}
							r = o
									&& (l.boxSizingReliable() || i === e.style[t]);
							i = parseFloat(i) || 0
						}
						return i
								+ Kt(e, t, n || (o ? "border" : "content"), r,
										s) + "px"
					}
					function Gt(e, t, n, r, i) {
						return new Gt.prototype.init(e, t, n, r, i)
					}
					function on() {
						setTimeout(function() {
							Yt = undefined
						});
						return Yt = h.now()
					}
					function un(e, t) {
						var n, r = {
							height : e
						}, i = 0;
						t = t ? 1 : 0;
						for (; i < 4; i += 2 - t) {
							n = X[i];
							r["margin" + n] = r["padding" + n] = e
						}
						if (t) {
							r.opacity = r.width = e
						}
						return r
					}
					function an(e, t, n) {
						var r, i = (sn[t] || []).concat(sn["*"]), s = 0, o = i.length;
						for (; s < o; s++) {
							if (r = i[s].call(n, t, e)) {
								return r
							}
						}
					}
					function fn(e, t, n) {
						var r, i, s, o, u, a, f, c, p = this, d = {}, v = e.style, m = e.nodeType
								&& V(e), g = h._data(e, "fxshow");
						if (!n.queue) {
							u = h._queueHooks(e, "fx");
							if (u.unqueued == null) {
								u.unqueued = 0;
								a = u.empty.fire;
								u.empty.fire = function() {
									if (!u.unqueued) {
										a()
									}
								}
							}
							u.unqueued++;
							p.always(function() {
								p.always(function() {
									u.unqueued--;
									if (!h.queue(e, "fx").length) {
										u.empty.fire()
									}
								})
							})
						}
						if (e.nodeType === 1 && ("height" in t || "width" in t)) {
							n.overflow = [ v.overflow, v.overflowX, v.overflowY ];
							f = h.css(e, "display");
							c = f === "none" ? h._data(e, "olddisplay")
									|| Mt(e.nodeName) : f;
							if (c === "inline" && h.css(e, "float") === "none") {
								if (!l.inlineBlockNeedsLayout
										|| Mt(e.nodeName) === "inline") {
									v.display = "inline-block"
								} else {
									v.zoom = 1
								}
							}
						}
						if (n.overflow) {
							v.overflow = "hidden";
							if (!l.shrinkWrapBlocks()) {
								p.always(function() {
									v.overflow = n.overflow[0];
									v.overflowX = n.overflow[1];
									v.overflowY = n.overflow[2]
								})
							}
						}
						for (r in t) {
							i = t[r];
							if (en.exec(i)) {
								delete t[r];
								s = s || i === "toggle";
								if (i === (m ? "hide" : "show")) {
									if (i === "show" && g && g[r] !== undefined) {
										m = true
									} else {
										continue
									}
								}
								d[r] = g && g[r] || h.style(e, r)
							} else {
								f = undefined
							}
						}
						if (!h.isEmptyObject(d)) {
							if (g) {
								if ("hidden" in g) {
									m = g.hidden
								}
							} else {
								g = h._data(e, "fxshow", {})
							}
							if (s) {
								g.hidden = !m
							}
							if (m) {
								h(e).show()
							} else {
								p.done(function() {
									h(e).hide()
								})
							}
							p.done(function() {
								var t;
								h._removeData(e, "fxshow");
								for (t in d) {
									h.style(e, t, d[t])
								}
							});
							for (r in d) {
								o = an(m ? g[r] : 0, r, p);
								if (!(r in g)) {
									g[r] = o.start;
									if (m) {
										o.end = o.start;
										o.start = r === "width"
												|| r === "height" ? 1 : 0
									}
								}
							}
						} else if ((f === "none" ? Mt(e.nodeName) : f) === "inline") {
							v.display = f
						}
					}
					function ln(e, t) {
						var n, r, i, s, o;
						for (n in e) {
							r = h.camelCase(n);
							i = t[r];
							s = e[n];
							if (h.isArray(s)) {
								i = s[1];
								s = e[n] = s[0]
							}
							if (n !== r) {
								e[r] = s;
								delete e[n]
							}
							o = h.cssHooks[r];
							if (o && "expand" in o) {
								s = o.expand(s);
								delete e[r];
								for (n in s) {
									if (!(n in e)) {
										e[n] = s[n];
										t[n] = i
									}
								}
							} else {
								t[r] = i
							}
						}
					}
					function cn(e, t, n) {
						var r, i, s = 0, o = rn.length, u = h.Deferred()
								.always(function() {
									delete a.elem
								}), a = function() {
							if (i) {
								return false
							}
							var t = Yt || on(), n = Math.max(0, f.startTime
									+ f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
							for (; o < a; o++) {
								f.tweens[o].run(s)
							}
							u.notifyWith(e, [ f, s, n ]);
							if (s < 1 && a) {
								return n
							} else {
								u.resolveWith(e, [ f ]);
								return false
							}
						}, f = u.promise({
							elem : e,
							props : h.extend({}, t),
							opts : h.extend(true, {
								specialEasing : {}
							}, n),
							originalProperties : t,
							originalOptions : n,
							startTime : Yt || on(),
							duration : n.duration,
							tweens : [],
							createTween : function(t, n) {
								var r = h.Tween(e, f.opts, t, n,
										f.opts.specialEasing[t]
												|| f.opts.easing);
								f.tweens.push(r);
								return r
							},
							stop : function(t) {
								var n = 0, r = t ? f.tweens.length : 0;
								if (i) {
									return this
								}
								i = true;
								for (; n < r; n++) {
									f.tweens[n].run(1)
								}
								if (t) {
									u.resolveWith(e, [ f, t ])
								} else {
									u.rejectWith(e, [ f, t ])
								}
								return this
							}
						}), l = f.props;
						ln(l, f.opts.specialEasing);
						for (; s < o; s++) {
							r = rn[s].call(f, e, l, f.opts);
							if (r) {
								return r
							}
						}
						h.map(l, an, f);
						if (h.isFunction(f.opts.start)) {
							f.opts.start.call(e, f)
						}
						h.fx.timer(h.extend(a, {
							elem : e,
							anim : f,
							queue : f.opts.queue
						}));
						return f.progress(f.opts.progress).done(f.opts.done,
								f.opts.complete).fail(f.opts.fail).always(
								f.opts.always)
					}
					function Fn(e) {
						return function(t, n) {
							if (typeof t !== "string") {
								n = t;
								t = "*"
							}
							var r, i = 0, s = t.toLowerCase().match(O) || [];
							if (h.isFunction(n)) {
								while (r = s[i++]) {
									if (r.charAt(0) === "+") {
										r = r.slice(1) || "*";
										(e[r] = e[r] || []).unshift(n)
									} else {
										(e[r] = e[r] || []).push(n)
									}
								}
							}
						}
					}
					function In(e, t, n, r) {
						function o(u) {
							var a;
							i[u] = true;
							h.each(e[u] || [], function(e, u) {
								var f = u(t, n, r);
								if (typeof f === "string" && !s && !i[f]) {
									t.dataTypes.unshift(f);
									o(f);
									return false
								} else if (s) {
									return !(a = f)
								}
							});
							return a
						}
						var i = {}, s = e === Hn;
						return o(t.dataTypes[0]) || !i["*"] && o("*")
					}
					function qn(e, t) {
						var n, r, i = h.ajaxSettings.flatOptions || {};
						for (r in t) {
							if (t[r] !== undefined) {
								(i[r] ? e : n || (n = {}))[r] = t[r]
							}
						}
						if (n) {
							h.extend(true, e, n)
						}
						return e
					}
					function Rn(e, t, n) {
						var r, i, s, o, u = e.contents, a = e.dataTypes;
						while (a[0] === "*") {
							a.shift();
							if (i === undefined) {
								i = e.mimeType
										|| t.getResponseHeader("Content-Type")
							}
						}
						if (i) {
							for (o in u) {
								if (u[o] && u[o].test(i)) {
									a.unshift(o);
									break
								}
							}
						}
						if (a[0] in n) {
							s = a[0]
						} else {
							for (o in n) {
								if (!a[0] || e.converters[o + " " + a[0]]) {
									s = o;
									break
								}
								if (!r) {
									r = o
								}
							}
							s = s || r
						}
						if (s) {
							if (s !== a[0]) {
								a.unshift(s)
							}
							return n[s]
						}
					}
					function Un(e, t, n, r) {
						var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
						if (l[1]) {
							for (o in e.converters) {
								f[o.toLowerCase()] = e.converters[o]
							}
						}
						s = l.shift();
						while (s) {
							if (e.responseFields[s]) {
								n[e.responseFields[s]] = t
							}
							if (!a && r && e.dataFilter) {
								t = e.dataFilter(t, e.dataType)
							}
							a = s;
							s = l.shift();
							if (s) {
								if (s === "*") {
									s = a
								} else if (a !== "*" && a !== s) {
									o = f[a + " " + s] || f["* " + s];
									if (!o) {
										for (i in f) {
											u = i.split(" ");
											if (u[1] === s) {
												o = f[a + " " + u[0]]
														|| f["* " + u[0]];
												if (o) {
													if (o === true) {
														o = f[i]
													} else if (f[i] !== true) {
														s = u[0];
														l.unshift(u[1])
													}
													break
												}
											}
										}
									}
									if (o !== true) {
										if (o && e["throws"]) {
											t = o(t)
										} else {
											try {
												t = o(t)
											} catch (c) {
												return {
													state : "parsererror",
													error : o ? c
															: "No conversion from "
																	+ a
																	+ " to "
																	+ s
												}
											}
										}
									}
								}
							}
						}
						return {
							state : "success",
							data : t
						}
					}
					function Jn(e, t, n, r) {
						var i;
						if (h.isArray(t)) {
							h.each(t, function(t, i) {
								if (n || Wn.test(e)) {
									r(e, i)
								} else {
									Jn(e + "["
											+ (typeof i === "object" ? t : "")
											+ "]", i, n, r)
								}
							})
						} else if (!n && h.type(t) === "object") {
							for (i in t) {
								Jn(e + "[" + i + "]", t[i], n, r)
							}
						} else {
							r(e, t)
						}
					}
					function Yn() {
						try {
							return new e.XMLHttpRequest
						} catch (t) {
						}
					}
					function Zn() {
						try {
							return new e.ActiveXObject("Microsoft.XMLHTTP")
						} catch (t) {
						}
					}
					function ir(e) {
						return h.isWindow(e) ? e
								: e.nodeType === 9 ? e.defaultView
										|| e.parentWindow : false
					}
					var n = [];
					var r = n.slice;
					var i = n.concat;
					var s = n.push;
					var o = n.indexOf;
					var u = {};
					var a = u.toString;
					var f = u.hasOwnProperty;
					var l = {};
					var c = "1.11.1", h = function(e, t) {
						return new h.fn.init(e, t)
					}, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, d = /^-ms-/, v = /-([\da-z])/gi, m = function(
							e, t) {
						return t.toUpperCase()
					};
					h.fn = h.prototype = {
						jquery : c,
						constructor : h,
						selector : "",
						length : 0,
						toArray : function() {
							return r.call(this)
						},
						get : function(e) {
							return e != null ? e < 0 ? this[e + this.length]
									: this[e] : r.call(this)
						},
						pushStack : function(e) {
							var t = h.merge(this.constructor(), e);
							t.prevObject = this;
							t.context = this.context;
							return t
						},
						each : function(e, t) {
							return h.each(this, e, t)
						},
						map : function(e) {
							return this.pushStack(h.map(this, function(t, n) {
								return e.call(t, n, t)
							}))
						},
						slice : function() {
							return this.pushStack(r.apply(this, arguments))
						},
						first : function() {
							return this.eq(0)
						},
						last : function() {
							return this.eq(-1)
						},
						eq : function(e) {
							var t = this.length, n = +e + (e < 0 ? t : 0);
							return this.pushStack(n >= 0 && n < t ? [ this[n] ]
									: [])
						},
						end : function() {
							return this.prevObject || this.constructor(null)
						},
						push : s,
						sort : n.sort,
						splice : n.splice
					};
					h.extend = h.fn.extend = function() {
						var e, t, n, r, i, s, o = arguments[0] || {}, u = 1, a = arguments.length, f = false;
						if (typeof o === "boolean") {
							f = o;
							o = arguments[u] || {};
							u++
						}
						if (typeof o !== "object" && !h.isFunction(o)) {
							o = {}
						}
						if (u === a) {
							o = this;
							u--
						}
						for (; u < a; u++) {
							if ((i = arguments[u]) != null) {
								for (r in i) {
									e = o[r];
									n = i[r];
									if (o === n) {
										continue
									}
									if (f
											&& n
											&& (h.isPlainObject(n) || (t = h
													.isArray(n)))) {
										if (t) {
											t = false;
											s = e && h.isArray(e) ? e : []
										} else {
											s = e && h.isPlainObject(e) ? e
													: {}
										}
										o[r] = h.extend(f, s, n)
									} else if (n !== undefined) {
										o[r] = n
									}
								}
							}
						}
						return o
					};
					h.extend({
						expando : "jQuery"
								+ (c + Math.random()).replace(/\D/g, ""),
						isReady : true,
						error : function(e) {
							throw new Error(e)
						},
						noop : function() {
						},
						isFunction : function(e) {
							return h.type(e) === "function"
						},
						isArray : Array.isArray || function(e) {
							return h.type(e) === "array"
						},
						isWindow : function(e) {
							return e != null && e == e.window
						},
						isNumeric : function(e) {
							return !h.isArray(e) && e - parseFloat(e) >= 0
						},
						isEmptyObject : function(e) {
							var t;
							for (t in e) {
								return false
							}
							return true
						},
						isPlainObject : function(e) {
							var t;
							if (!e || h.type(e) !== "object" || e.nodeType
									|| h.isWindow(e)) {
								return false
							}
							try {
								if (e.constructor
										&& !f.call(e, "constructor")
										&& !f.call(e.constructor.prototype,
												"isPrototypeOf")) {
									return false
								}
							} catch (n) {
								return false
							}
							if (l.ownLast) {
								for (t in e) {
									return f.call(e, t)
								}
							}
							for (t in e) {
							}
							return t === undefined || f.call(e, t)
						},
						type : function(e) {
							if (e == null) {
								return e + ""
							}
							return typeof e === "object"
									|| typeof e === "function" ? u[a.call(e)]
									|| "object" : typeof e
						},
						globalEval : function(t) {
							if (t && h.trim(t)) {
								(e.execScript || function(t) {
									e["eval"].call(e, t)
								})(t)
							}
						},
						camelCase : function(e) {
							return e.replace(d, "ms-").replace(v, m)
						},
						nodeName : function(e, t) {
							return e.nodeName
									&& e.nodeName.toLowerCase() === t
											.toLowerCase()
						},
						each : function(e, t, n) {
							var r, i = 0, s = e.length, o = g(e);
							if (n) {
								if (o) {
									for (; i < s; i++) {
										r = t.apply(e[i], n);
										if (r === false) {
											break
										}
									}
								} else {
									for (i in e) {
										r = t.apply(e[i], n);
										if (r === false) {
											break
										}
									}
								}
							} else {
								if (o) {
									for (; i < s; i++) {
										r = t.call(e[i], i, e[i]);
										if (r === false) {
											break
										}
									}
								} else {
									for (i in e) {
										r = t.call(e[i], i, e[i]);
										if (r === false) {
											break
										}
									}
								}
							}
							return e
						},
						trim : function(e) {
							return e == null ? "" : (e + "").replace(p, "")
						},
						makeArray : function(e, t) {
							var n = t || [];
							if (e != null) {
								if (g(Object(e))) {
									h.merge(n, typeof e === "string" ? [ e ]
											: e)
								} else {
									s.call(n, e)
								}
							}
							return n
						},
						inArray : function(e, t, n) {
							var r;
							if (t) {
								if (o) {
									return o.call(t, e, n)
								}
								r = t.length;
								n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
								for (; n < r; n++) {
									if (n in t && t[n] === e) {
										return n
									}
								}
							}
							return -1
						},
						merge : function(e, t) {
							var n = +t.length, r = 0, i = e.length;
							while (r < n) {
								e[i++] = t[r++]
							}
							if (n !== n) {
								while (t[r] !== undefined) {
									e[i++] = t[r++]
								}
							}
							e.length = i;
							return e
						},
						grep : function(e, t, n) {
							var r, i = [], s = 0, o = e.length, u = !n;
							for (; s < o; s++) {
								r = !t(e[s], s);
								if (r !== u) {
									i.push(e[s])
								}
							}
							return i
						},
						map : function(e, t, n) {
							var r, s = 0, o = e.length, u = g(e), a = [];
							if (u) {
								for (; s < o; s++) {
									r = t(e[s], s, n);
									if (r != null) {
										a.push(r)
									}
								}
							} else {
								for (s in e) {
									r = t(e[s], s, n);
									if (r != null) {
										a.push(r)
									}
								}
							}
							return i.apply([], a)
						},
						guid : 1,
						proxy : function(e, t) {
							var n, i, s;
							if (typeof t === "string") {
								s = e[t];
								t = e;
								e = s
							}
							if (!h.isFunction(e)) {
								return undefined
							}
							n = r.call(arguments, 2);
							i = function() {
								return e.apply(t || this, n.concat(r
										.call(arguments)))
							};
							i.guid = e.guid = e.guid || h.guid++;
							return i
						},
						now : function() {
							return +(new Date)
						},
						support : l
					});
					h.each(
							"Boolean Number String Function Array Date RegExp Object Error"
									.split(" "), function(e, t) {
								u["[object " + t + "]"] = t.toLowerCase()
							});
					var y = function(e) {
						function st(e, t, r, i) {
							var s, u, f, l, c, d, g, y, S, x;
							if ((t ? t.ownerDocument || t : E) !== p) {
								h(t)
							}
							t = t || p;
							r = r || [];
							if (!e || typeof e !== "string") {
								return r
							}
							if ((l = t.nodeType) !== 1 && l !== 9) {
								return []
							}
							if (v && !i) {
								if (s = Z.exec(e)) {
									if (f = s[1]) {
										if (l === 9) {
											u = t.getElementById(f);
											if (u && u.parentNode) {
												if (u.id === f) {
													r.push(u);
													return r
												}
											} else {
												return r
											}
										} else {
											if (t.ownerDocument
													&& (u = t.ownerDocument
															.getElementById(f))
													&& b(t, u) && u.id === f) {
												r.push(u);
												return r
											}
										}
									} else if (s[2]) {
										P.apply(r, t.getElementsByTagName(e));
										return r
									} else if ((f = s[3])
											&& n.getElementsByClassName
											&& t.getElementsByClassName) {
										P.apply(r, t.getElementsByClassName(f));
										return r
									}
								}
								if (n.qsa && (!m || !m.test(e))) {
									y = g = w;
									S = t;
									x = l === 9 && e;
									if (l === 1
											&& t.nodeName.toLowerCase() !== "object") {
										d = o(e);
										if (g = t.getAttribute("id")) {
											y = g.replace(tt, "\\$&")
										} else {
											t.setAttribute("id", y)
										}
										y = "[id='" + y + "'] ";
										c = d.length;
										while (c--) {
											d[c] = y + mt(d[c])
										}
										S = et.test(e) && dt(t.parentNode) || t;
										x = d.join(",")
									}
									if (x) {
										try {
											P.apply(r, S.querySelectorAll(x));
											return r
										} catch (T) {
										} finally {
											if (!g) {
												t.removeAttribute("id")
											}
										}
									}
								}
							}
							return a(e.replace(z, "$1"), t, r, i)
						}
						function ot() {
							function t(n, i) {
								if (e.push(n + " ") > r.cacheLength) {
									delete t[e.shift()]
								}
								return t[n + " "] = i
							}
							var e = [];
							return t
						}
						function ut(e) {
							e[w] = true;
							return e
						}
						function at(e) {
							var t = p.createElement("div");
							try {
								return !!e(t)
							} catch (n) {
								return false
							} finally {
								if (t.parentNode) {
									t.parentNode.removeChild(t)
								}
								t = null
							}
						}
						function ft(e, t) {
							var n = e.split("|"), i = e.length;
							while (i--) {
								r.attrHandle[n[i]] = t
							}
						}
						function lt(e, t) {
							var n = t && e, r = n && e.nodeType === 1
									&& t.nodeType === 1
									&& (~t.sourceIndex || A)
									- (~e.sourceIndex || A);
							if (r) {
								return r
							}
							if (n) {
								while (n = n.nextSibling) {
									if (n === t) {
										return -1
									}
								}
							}
							return e ? 1 : -1
						}
						function ct(e) {
							return function(t) {
								var n = t.nodeName.toLowerCase();
								return n === "input" && t.type === e
							}
						}
						function ht(e) {
							return function(t) {
								var n = t.nodeName.toLowerCase();
								return (n === "input" || n === "button")
										&& t.type === e
							}
						}
						function pt(e) {
							return ut(function(t) {
								t = +t;
								return ut(function(n, r) {
									var i, s = e([], n.length, t), o = s.length;
									while (o--) {
										if (n[i = s[o]]) {
											n[i] = !(r[i] = n[i])
										}
									}
								})
							})
						}
						function dt(e) {
							return e && typeof e.getElementsByTagName !== L
									&& e
						}
						function vt() {
						}
						function mt(e) {
							var t = 0, n = e.length, r = "";
							for (; t < n; t++) {
								r += e[t].value
							}
							return r
						}
						function gt(e, t, n) {
							var r = t.dir, i = n && r === "parentNode", s = x++;
							return t.first ? function(t, n, s) {
								while (t = t[r]) {
									if (t.nodeType === 1 || i) {
										return e(t, n, s)
									}
								}
							} : function(t, n, o) {
								var u, a, f = [ S, s ];
								if (o) {
									while (t = t[r]) {
										if (t.nodeType === 1 || i) {
											if (e(t, n, o)) {
												return true
											}
										}
									}
								} else {
									while (t = t[r]) {
										if (t.nodeType === 1 || i) {
											a = t[w] || (t[w] = {});
											if ((u = a[r]) && u[0] === S
													&& u[1] === s) {
												return f[2] = u[2]
											} else {
												a[r] = f;
												if (f[2] = e(t, n, o)) {
													return true
												}
											}
										}
									}
								}
							}
						}
						function yt(e) {
							return e.length > 1 ? function(t, n, r) {
								var i = e.length;
								while (i--) {
									if (!e[i](t, n, r)) {
										return false
									}
								}
								return true
							} : e[0]
						}
						function bt(e, t, n) {
							var r = 0, i = t.length;
							for (; r < i; r++) {
								st(e, t[r], n)
							}
							return n
						}
						function wt(e, t, n, r, i) {
							var s, o = [], u = 0, a = e.length, f = t != null;
							for (; u < a; u++) {
								if (s = e[u]) {
									if (!n || n(s, r, i)) {
										o.push(s);
										if (f) {
											t.push(u)
										}
									}
								}
							}
							return o
						}
						function Et(e, t, n, r, i, s) {
							if (r && !r[w]) {
								r = Et(r)
							}
							if (i && !i[w]) {
								i = Et(i, s)
							}
							return ut(function(s, o, u, a) {
								var f, l, c, h = [], p = [], d = o.length, v = s
										|| bt(t || "*", u.nodeType ? [ u ] : u,
												[]), m = e && (s || !t) ? wt(v,
										h, e, u, a) : v, g = n ? i
										|| (s ? e : d || r) ? [] : o : m;
								if (n) {
									n(m, g, u, a)
								}
								if (r) {
									f = wt(g, p);
									r(f, [], u, a);
									l = f.length;
									while (l--) {
										if (c = f[l]) {
											g[p[l]] = !(m[p[l]] = c)
										}
									}
								}
								if (s) {
									if (i || e) {
										if (i) {
											f = [];
											l = g.length;
											while (l--) {
												if (c = g[l]) {
													f.push(m[l] = c)
												}
											}
											i(null, g = [], f, a)
										}
										l = g.length;
										while (l--) {
											if ((c = g[l])
													&& (f = i ? B.call(s, c)
															: h[l]) > -1) {
												s[f] = !(o[f] = c)
											}
										}
									}
								} else {
									g = wt(g === o ? g.splice(d, g.length) : g);
									if (i) {
										i(null, o, g, a)
									} else {
										P.apply(o, g)
									}
								}
							})
						}
						function St(e) {
							var t, n, i, s = e.length, o = r.relative[e[0].type], u = o
									|| r.relative[" "], a = o ? 1 : 0, l = gt(
									function(e) {
										return e === t
									}, u, true), c = gt(function(e) {
								return B.call(t, e) > -1
							}, u, true), h = [ function(e, n, r) {
								return !o
										&& (r || n !== f)
										|| ((t = n).nodeType ? l(e, n, r) : c(
												e, n, r))
							} ];
							for (; a < s; a++) {
								if (n = r.relative[e[a].type]) {
									h = [ gt(yt(h), n) ]
								} else {
									n = r.filter[e[a].type].apply(null,
											e[a].matches);
									if (n[w]) {
										i = ++a;
										for (; i < s; i++) {
											if (r.relative[e[i].type]) {
												break
											}
										}
										return Et(
												a > 1 && yt(h),
												a > 1
														&& mt(
																e
																		.slice(
																				0,
																				a - 1)
																		.concat(
																				{
																					value : e[a - 2].type === " " ? "*"
																							: ""
																				}))
																.replace(z,
																		"$1"),
												n, a < i && St(e.slice(a, i)),
												i < s && St(e = e.slice(i)),
												i < s && mt(e))
									}
									h.push(n)
								}
							}
							return yt(h)
						}
						function xt(e, t) {
							var n = t.length > 0, i = e.length > 0, s = function(
									s, o, u, a, l) {
								var c, h, d, v = 0, m = "0", g = s && [], y = [], b = f, w = s
										|| i && r.find["TAG"]("*", l), E = S += b == null ? 1
										: Math.random() || .1, x = w.length;
								if (l) {
									f = o !== p && o
								}
								for (; m !== x && (c = w[m]) != null; m++) {
									if (i && c) {
										h = 0;
										while (d = e[h++]) {
											if (d(c, o, u)) {
												a.push(c);
												break
											}
										}
										if (l) {
											S = E
										}
									}
									if (n) {
										if (c = !d && c) {
											v--
										}
										if (s) {
											g.push(c)
										}
									}
								}
								v += m;
								if (n && m !== v) {
									h = 0;
									while (d = t[h++]) {
										d(g, y, o, u)
									}
									if (s) {
										if (v > 0) {
											while (m--) {
												if (!(g[m] || y[m])) {
													y[m] = _.call(a)
												}
											}
										}
										y = wt(y)
									}
									P.apply(a, y);
									if (l && !s && y.length > 0
											&& v + t.length > 1) {
										st.uniqueSort(a)
									}
								}
								if (l) {
									S = E;
									f = b
								}
								return g
							};
							return n ? ut(s) : s
						}
						var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle"
								+ -(new Date), E = e.document, S = 0, x = 0, T = ot(), N = ot(), C = ot(), k = function(
								e, t) {
							if (e === t) {
								c = true
							}
							return 0
						}, L = typeof undefined, A = 1 << 31, O = {}.hasOwnProperty, M = [], _ = M.pop, D = M.push, P = M.push, H = M.slice, B = M.indexOf
								|| function(e) {
									var t = 0, n = this.length;
									for (; t < n; t++) {
										if (this[t] === e) {
											return t
										}
									}
									return -1
								}, j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", q = I
								.replace("w", "w#"), R = "\\["
								+ F
								+ "*("
								+ I
								+ ")(?:"
								+ F
								+ "*([*^$|!~]?=)"
								+ F
								+ "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("
								+ q + "))|)" + F + "*\\]", U = ":("
								+ I
								+ ")(?:\\(("
								+ "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"
								+ "((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|"
								+ ".*" + ")\\)|)", z = new RegExp("^" + F
								+ "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"), W = new RegExp(
								"^" + F + "*," + F + "*"), X = new RegExp("^"
								+ F + "*([>+~]|" + F + ")" + F + "*"), V = new RegExp(
								"=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"), $ = new RegExp(
								U), J = new RegExp("^" + q + "$"), K = {
							ID : new RegExp("^#(" + I + ")"),
							CLASS : new RegExp("^\\.(" + I + ")"),
							TAG : new RegExp("^(" + I.replace("w", "w*") + ")"),
							ATTR : new RegExp("^" + R),
							PSEUDO : new RegExp("^" + U),
							CHILD : new RegExp(
									"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("
											+ F
											+ "*(even|odd|(([+-]|)(\\d*)n|)"
											+ F + "*(?:([+-]|)" + F
											+ "*(\\d+)|))" + F + "*\\)|)", "i"),
							bool : new RegExp("^(?:" + j + ")$", "i"),
							needsContext : new RegExp(
									"^"
											+ F
											+ "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("
											+ F + "*((?:-\\d)?\\d*)" + F
											+ "*\\)|)(?=[^-]|$)", "i")
						}, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /[+~]/, tt = /'|\\/g, nt = new RegExp(
								"\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)",
								"ig"), rt = function(e, t, n) {
							var r = "0x" + t - 65536;
							return r !== r || n ? t : r < 0 ? String
									.fromCharCode(r + 65536) : String
									.fromCharCode(r >> 10 | 55296,
											r & 1023 | 56320)
						};
						try {
							P.apply(M = H.call(E.childNodes), E.childNodes);
							M[E.childNodes.length].nodeType
						} catch (it) {
							P = {
								apply : M.length ? function(e, t) {
									D.apply(e, H.call(t))
								} : function(e, t) {
									var n = e.length, r = 0;
									while (e[n++] = t[r++]) {
									}
									e.length = n - 1
								}
							}
						}
						n = st.support = {};
						s = st.isXML = function(e) {
							var t = e && (e.ownerDocument || e).documentElement;
							return t ? t.nodeName !== "HTML" : false
						};
						h = st.setDocument = function(e) {
							var t, i = e ? e.ownerDocument || e : E, o = i.defaultView;
							if (i === p || i.nodeType !== 9
									|| !i.documentElement) {
								return p
							}
							p = i;
							d = i.documentElement;
							v = !s(i);
							if (o && o !== o.top) {
								if (o.addEventListener) {
									o.addEventListener("unload", function() {
										h()
									}, false)
								} else if (o.attachEvent) {
									o.attachEvent("onunload", function() {
										h()
									})
								}
							}
							n.attributes = at(function(e) {
								e.className = "i";
								return !e.getAttribute("className")
							});
							n.getElementsByTagName = at(function(e) {
								e.appendChild(i.createComment(""));
								return !e.getElementsByTagName("*").length
							});
							n.getElementsByClassName = Y
									.test(i.getElementsByClassName)
									&& at(function(e) {
										e.innerHTML = "<div class='a'></div><div class='a i'></div>";
										e.firstChild.className = "i";
										return e.getElementsByClassName("i").length === 2
									});
							n.getById = at(function(e) {
								d.appendChild(e).id = w;
								return !i.getElementsByName
										|| !i.getElementsByName(w).length
							});
							if (n.getById) {
								r.find["ID"] = function(e, t) {
									if (typeof t.getElementById !== L && v) {
										var n = t.getElementById(e);
										return n && n.parentNode ? [ n ] : []
									}
								};
								r.filter["ID"] = function(e) {
									var t = e.replace(nt, rt);
									return function(e) {
										return e.getAttribute("id") === t
									}
								}
							} else {
								delete r.find["ID"];
								r.filter["ID"] = function(e) {
									var t = e.replace(nt, rt);
									return function(e) {
										var n = typeof e.getAttributeNode !== L
												&& e.getAttributeNode("id");
										return n && n.value === t
									}
								}
							}
							r.find["TAG"] = n.getElementsByTagName ? function(
									e, t) {
								if (typeof t.getElementsByTagName !== L) {
									return t.getElementsByTagName(e)
								}
							} : function(e, t) {
								var n, r = [], i = 0, s = t
										.getElementsByTagName(e);
								if (e === "*") {
									while (n = s[i++]) {
										if (n.nodeType === 1) {
											r.push(n)
										}
									}
									return r
								}
								return s
							};
							r.find["CLASS"] = n.getElementsByClassName
									&& function(e, t) {
										if (typeof t.getElementsByClassName !== L
												&& v) {
											return t.getElementsByClassName(e)
										}
									};
							g = [];
							m = [];
							if (n.qsa = Y.test(i.querySelectorAll)) {
								at(function(e) {
									e.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
									if (e.querySelectorAll("[msallowclip^='']").length) {
										m.push("[*^$]=" + F + "*(?:''|\"\")")
									}
									if (!e.querySelectorAll("[selected]").length) {
										m.push("\\[" + F + "*(?:value|" + j
												+ ")")
									}
									if (!e.querySelectorAll(":checked").length) {
										m.push(":checked")
									}
								});
								at(function(e) {
									var t = i.createElement("input");
									t.setAttribute("type", "hidden");
									e.appendChild(t).setAttribute("name", "D");
									if (e.querySelectorAll("[name=d]").length) {
										m.push("name" + F + "*[*^$|!~]?=")
									}
									if (!e.querySelectorAll(":enabled").length) {
										m.push(":enabled", ":disabled")
									}
									e.querySelectorAll("*,:x");
									m.push(",.*:")
								})
							}
							if (n.matchesSelector = Y.test(y = d.matches
									|| d.webkitMatchesSelector
									|| d.mozMatchesSelector
									|| d.oMatchesSelector
									|| d.msMatchesSelector)) {
								at(function(e) {
									n.disconnectedMatch = y.call(e, "div");
									y.call(e, "[s!='']:x");
									g.push("!=", U)
								})
							}
							m = m.length && new RegExp(m.join("|"));
							g = g.length && new RegExp(g.join("|"));
							t = Y.test(d.compareDocumentPosition);
							b = t || Y.test(d.contains) ? function(e, t) {
								var n = e.nodeType === 9 ? e.documentElement
										: e, r = t && t.parentNode;
								return e === r
										|| !!(r && r.nodeType === 1 && (n.contains ? n
												.contains(r)
												: e.compareDocumentPosition
														&& e
																.compareDocumentPosition(r)
														& 16))
							}
									: function(e, t) {
										if (t) {
											while (t = t.parentNode) {
												if (t === e) {
													return true
												}
											}
										}
										return false
									};
							k = t ? function(e, t) {
								if (e === t) {
									c = true;
									return 0
								}
								var r = !e.compareDocumentPosition
										- !t.compareDocumentPosition;
								if (r) {
									return r
								}
								r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e
										.compareDocumentPosition(t)
										: 1;
								if (r & 1 || !n.sortDetached
										&& t.compareDocumentPosition(e) === r) {
									if (e === i || e.ownerDocument === E
											&& b(E, e)) {
										return -1
									}
									if (t === i || t.ownerDocument === E
											&& b(E, t)) {
										return 1
									}
									return l ? B.call(l, e) - B.call(l, t) : 0
								}
								return r & 4 ? -1 : 1
							}
									: function(e, t) {
										if (e === t) {
											c = true;
											return 0
										}
										var n, r = 0, s = e.parentNode, o = t.parentNode, u = [ e ], a = [ t ];
										if (!s || !o) {
											return e === i ? -1 : t === i ? 1
													: s ? -1 : o ? 1 : l ? B
															.call(l, e)
															- B.call(l, t) : 0
										} else if (s === o) {
											return lt(e, t)
										}
										n = e;
										while (n = n.parentNode) {
											u.unshift(n)
										}
										n = t;
										while (n = n.parentNode) {
											a.unshift(n)
										}
										while (u[r] === a[r]) {
											r++
										}
										return r ? lt(u[r], a[r])
												: u[r] === E ? -1
														: a[r] === E ? 1 : 0
									};
							return i
						};
						st.matches = function(e, t) {
							return st(e, null, null, t)
						};
						st.matchesSelector = function(e, t) {
							if ((e.ownerDocument || e) !== p) {
								h(e)
							}
							t = t.replace(V, "='$1']");
							if (n.matchesSelector && v && (!g || !g.test(t))
									&& (!m || !m.test(t))) {
								try {
									var r = y.call(e, t);
									if (r || n.disconnectedMatch || e.document
											&& e.document.nodeType !== 11) {
										return r
									}
								} catch (i) {
								}
							}
							return st(t, p, null, [ e ]).length > 0
						};
						st.contains = function(e, t) {
							if ((e.ownerDocument || e) !== p) {
								h(e)
							}
							return b(e, t)
						};
						st.attr = function(e, t) {
							if ((e.ownerDocument || e) !== p) {
								h(e)
							}
							var i = r.attrHandle[t.toLowerCase()], s = i
									&& O.call(r.attrHandle, t.toLowerCase()) ? i(
									e, t, !v)
									: undefined;
							return s !== undefined ? s : n.attributes || !v ? e
									.getAttribute(t) : (s = e
									.getAttributeNode(t))
									&& s.specified ? s.value : null
						};
						st.error = function(e) {
							throw new Error(
									"Syntax error, unrecognized expression: "
											+ e)
						};
						st.uniqueSort = function(e) {
							var t, r = [], i = 0, s = 0;
							c = !n.detectDuplicates;
							l = !n.sortStable && e.slice(0);
							e.sort(k);
							if (c) {
								while (t = e[s++]) {
									if (t === e[s]) {
										i = r.push(s)
									}
								}
								while (i--) {
									e.splice(r[i], 1)
								}
							}
							l = null;
							return e
						};
						i = st.getText = function(e) {
							var t, n = "", r = 0, s = e.nodeType;
							if (!s) {
								while (t = e[r++]) {
									n += i(t)
								}
							} else if (s === 1 || s === 9 || s === 11) {
								if (typeof e.textContent === "string") {
									return e.textContent
								} else {
									for (e = e.firstChild; e; e = e.nextSibling) {
										n += i(e)
									}
								}
							} else if (s === 3 || s === 4) {
								return e.nodeValue
							}
							return n
						};
						r = st.selectors = {
							cacheLength : 50,
							createPseudo : ut,
							match : K,
							attrHandle : {},
							find : {},
							relative : {
								">" : {
									dir : "parentNode",
									first : true
								},
								" " : {
									dir : "parentNode"
								},
								"+" : {
									dir : "previousSibling",
									first : true
								},
								"~" : {
									dir : "previousSibling"
								}
							},
							preFilter : {
								ATTR : function(e) {
									e[1] = e[1].replace(nt, rt);
									e[3] = (e[3] || e[4] || e[5] || "")
											.replace(nt, rt);
									if (e[2] === "~=") {
										e[3] = " " + e[3] + " "
									}
									return e.slice(0, 4)
								},
								CHILD : function(e) {
									e[1] = e[1].toLowerCase();
									if (e[1].slice(0, 3) === "nth") {
										if (!e[3]) {
											st.error(e[0])
										}
										e[4] = +(e[4] ? e[5] + (e[6] || 1)
												: 2 * (e[3] === "even" || e[3] === "odd"));
										e[5] = +(e[7] + e[8] || e[3] === "odd")
									} else if (e[3]) {
										st.error(e[0])
									}
									return e
								},
								PSEUDO : function(e) {
									var t, n = !e[6] && e[2];
									if (K["CHILD"].test(e[0])) {
										return null
									}
									if (e[3]) {
										e[2] = e[4] || e[5] || ""
									} else if (n
											&& $.test(n)
											&& (t = o(n, true))
											&& (t = n
													.indexOf(")", n.length - t)
													- n.length)) {
										e[0] = e[0].slice(0, t);
										e[2] = n.slice(0, t)
									}
									return e.slice(0, 3)
								}
							},
							filter : {
								TAG : function(e) {
									var t = e.replace(nt, rt).toLowerCase();
									return e === "*" ? function() {
										return true
									}
											: function(e) {
												return e.nodeName
														&& e.nodeName
																.toLowerCase() === t
											}
								},
								CLASS : function(e) {
									var t = T[e + " "];
									return t
											|| (t = new RegExp("(^|" + F + ")"
													+ e + "(" + F + "|$)"))
											&& T(
													e,
													function(e) {
														return t
																.test(typeof e.className === "string"
																		&& e.className
																		|| typeof e.getAttribute !== L
																		&& e
																				.getAttribute("class")
																		|| "")
													})
								},
								ATTR : function(e, t, n) {
									return function(r) {
										var i = st.attr(r, e);
										if (i == null) {
											return t === "!="
										}
										if (!t) {
											return true
										}
										i += "";
										return t === "=" ? i === n
												: t === "!=" ? i !== n
														: t === "^=" ? n
																&& i.indexOf(n) === 0
																: t === "*=" ? n
																		&& i
																				.indexOf(n) > -1
																		: t === "$=" ? n
																				&& i
																						.slice(-n.length) === n
																				: t === "~=" ? (" "
																						+ i + " ")
																						.indexOf(n) > -1
																						: t === "|=" ? i === n
																								|| i
																										.slice(
																												0,
																												n.length + 1) === n
																										+ "-"
																								: false
									}
								},
								CHILD : function(e, t, n, r, i) {
									var s = e.slice(0, 3) !== "nth", o = e
											.slice(-4) !== "last", u = t === "of-type";
									return r === 1 && i === 0 ? function(e) {
										return !!e.parentNode
									}
											: function(t, n, a) {
												var f, l, c, h, p, d, v = s !== o ? "nextSibling"
														: "previousSibling", m = t.parentNode, g = u
														&& t.nodeName
																.toLowerCase(), y = !a
														&& !u;
												if (m) {
													if (s) {
														while (v) {
															c = t;
															while (c = c[v]) {
																if (u ? c.nodeName
																		.toLowerCase() === g
																		: c.nodeType === 1) {
																	return false
																}
															}
															d = v = e === "only"
																	&& !d
																	&& "nextSibling"
														}
														return true
													}
													d = [ o ? m.firstChild
															: m.lastChild ];
													if (o && y) {
														l = m[w] || (m[w] = {});
														f = l[e] || [];
														p = f[0] === S && f[1];
														h = f[0] === S && f[2];
														c = p
																&& m.childNodes[p];
														while (c = ++p && c
																&& c[v]
																|| (h = p = 0)
																|| d.pop()) {
															if (c.nodeType === 1
																	&& ++h
																	&& c === t) {
																l[e] = [ S, p,
																		h ];
																break
															}
														}
													} else if (y
															&& (f = (t[w] || (t[w] = {}))[e])
															&& f[0] === S) {
														h = f[1]
													} else {
														while (c = ++p && c
																&& c[v]
																|| (h = p = 0)
																|| d.pop()) {
															if ((u ? c.nodeName
																	.toLowerCase() === g
																	: c.nodeType === 1)
																	&& ++h) {
																if (y) {
																	(c[w] || (c[w] = {}))[e] = [
																			S,
																			h ]
																}
																if (c === t) {
																	break
																}
															}
														}
													}
													h -= i;
													return h === r
															|| h % r === 0
															&& h / r >= 0
												}
											}
								},
								PSEUDO : function(e, t) {
									var n, i = r.pseudos[e]
											|| r.setFilters[e.toLowerCase()]
											|| st.error("unsupported pseudo: "
													+ e);
									if (i[w]) {
										return i(t)
									}
									if (i.length > 1) {
										n = [ e, e, "", t ];
										return r.setFilters.hasOwnProperty(e
												.toLowerCase()) ? ut(function(
												e, n) {
											var r, s = i(e, t), o = s.length;
											while (o--) {
												r = B.call(e, s[o]);
												e[r] = !(n[r] = s[o])
											}
										}) : function(e) {
											return i(e, 0, n)
										}
									}
									return i
								}
							},
							pseudos : {
								not : ut(function(e) {
									var t = [], n = [], r = u(e
											.replace(z, "$1"));
									return r[w] ? ut(function(e, t, n, i) {
										var s, o = r(e, null, i, []), u = e.length;
										while (u--) {
											if (s = o[u]) {
												e[u] = !(t[u] = s)
											}
										}
									})
											: function(e, i, s) {
												t[0] = e;
												r(t, null, s, n);
												return !n.pop()
											}
								}),
								has : ut(function(e) {
									return function(t) {
										return st(e, t).length > 0
									}
								}),
								contains : ut(function(e) {
									return function(t) {
										return (t.textContent || t.innerText || i(t))
												.indexOf(e) > -1
									}
								}),
								lang : ut(function(e) {
									if (!J.test(e || "")) {
										st.error("unsupported lang: " + e)
									}
									e = e.replace(nt, rt).toLowerCase();
									return function(t) {
										var n;
										do {
											if (n = v ? t.lang : t
													.getAttribute("xml:lang")
													|| t.getAttribute("lang")) {
												n = n.toLowerCase();
												return n === e
														|| n.indexOf(e + "-") === 0
											}
										} while ((t = t.parentNode)
												&& t.nodeType === 1);
										return false
									}
								}),
								target : function(t) {
									var n = e.location && e.location.hash;
									return n && n.slice(1) === t.id
								},
								root : function(e) {
									return e === d
								},
								focus : function(e) {
									return e === p.activeElement
											&& (!p.hasFocus || p.hasFocus())
											&& !!(e.type || e.href || ~e.tabIndex)
								},
								enabled : function(e) {
									return e.disabled === false
								},
								disabled : function(e) {
									return e.disabled === true
								},
								checked : function(e) {
									var t = e.nodeName.toLowerCase();
									return t === "input" && !!e.checked
											|| t === "option" && !!e.selected
								},
								selected : function(e) {
									if (e.parentNode) {
										e.parentNode.selectedIndex
									}
									return e.selected === true
								},
								empty : function(e) {
									for (e = e.firstChild; e; e = e.nextSibling) {
										if (e.nodeType < 6) {
											return false
										}
									}
									return true
								},
								parent : function(e) {
									return !r.pseudos["empty"](e)
								},
								header : function(e) {
									return G.test(e.nodeName)
								},
								input : function(e) {
									return Q.test(e.nodeName)
								},
								button : function(e) {
									var t = e.nodeName.toLowerCase();
									return t === "input" && e.type === "button"
											|| t === "button"
								},
								text : function(e) {
									var t;
									return e.nodeName.toLowerCase() === "input"
											&& e.type === "text"
											&& ((t = e.getAttribute("type")) == null || t
													.toLowerCase() === "text")
								},
								first : pt(function() {
									return [ 0 ]
								}),
								last : pt(function(e, t) {
									return [ t - 1 ]
								}),
								eq : pt(function(e, t, n) {
									return [ n < 0 ? n + t : n ]
								}),
								even : pt(function(e, t) {
									var n = 0;
									for (; n < t; n += 2) {
										e.push(n)
									}
									return e
								}),
								odd : pt(function(e, t) {
									var n = 1;
									for (; n < t; n += 2) {
										e.push(n)
									}
									return e
								}),
								lt : pt(function(e, t, n) {
									var r = n < 0 ? n + t : n;
									for (; --r >= 0;) {
										e.push(r)
									}
									return e
								}),
								gt : pt(function(e, t, n) {
									var r = n < 0 ? n + t : n;
									for (; ++r < t;) {
										e.push(r)
									}
									return e
								})
							}
						};
						r.pseudos["nth"] = r.pseudos["eq"];
						for (t in {
							radio : true,
							checkbox : true,
							file : true,
							password : true,
							image : true
						}) {
							r.pseudos[t] = ct(t)
						}
						for (t in {
							submit : true,
							reset : true
						}) {
							r.pseudos[t] = ht(t)
						}
						vt.prototype = r.filters = r.pseudos;
						r.setFilters = new vt;
						o = st.tokenize = function(e, t) {
							var n, i, s, o, u, a, f, l = N[e + " "];
							if (l) {
								return t ? 0 : l.slice(0)
							}
							u = e;
							a = [];
							f = r.preFilter;
							while (u) {
								if (!n || (i = W.exec(u))) {
									if (i) {
										u = u.slice(i[0].length) || u
									}
									a.push(s = [])
								}
								n = false;
								if (i = X.exec(u)) {
									n = i.shift();
									s.push({
										value : n,
										type : i[0].replace(z, " ")
									});
									u = u.slice(n.length)
								}
								for (o in r.filter) {
									if ((i = K[o].exec(u))
											&& (!f[o] || (i = f[o](i)))) {
										n = i.shift();
										s.push({
											value : n,
											type : o,
											matches : i
										});
										u = u.slice(n.length)
									}
								}
								if (!n) {
									break
								}
							}
							return t ? u.length : u ? st.error(e) : N(e, a)
									.slice(0)
						};
						u = st.compile = function(e, t) {
							var n, r = [], i = [], s = C[e + " "];
							if (!s) {
								if (!t) {
									t = o(e)
								}
								n = t.length;
								while (n--) {
									s = St(t[n]);
									if (s[w]) {
										r.push(s)
									} else {
										i.push(s)
									}
								}
								s = C(e, xt(i, r));
								s.selector = e
							}
							return s
						};
						a = st.select = function(e, t, i, s) {
							var a, f, l, c, h, p = typeof e === "function" && e, d = !s
									&& o(e = p.selector || e);
							i = i || [];
							if (d.length === 1) {
								f = d[0] = d[0].slice(0);
								if (f.length > 2 && (l = f[0]).type === "ID"
										&& n.getById && t.nodeType === 9 && v
										&& r.relative[f[1].type]) {
									t = (r.find["ID"](l.matches[0].replace(nt,
											rt), t) || [])[0];
									if (!t) {
										return i
									} else if (p) {
										t = t.parentNode
									}
									e = e.slice(f.shift().value.length)
								}
								a = K["needsContext"].test(e) ? 0 : f.length;
								while (a--) {
									l = f[a];
									if (r.relative[c = l.type]) {
										break
									}
									if (h = r.find[c]) {
										if (s = h(l.matches[0].replace(nt, rt),
												et.test(f[0].type)
														&& dt(t.parentNode)
														|| t)) {
											f.splice(a, 1);
											e = s.length && mt(f);
											if (!e) {
												P.apply(i, s);
												return i
											}
											break
										}
									}
								}
							}
							(p || u(e, d))(s, t, !v, i, et.test(e)
									&& dt(t.parentNode) || t);
							return i
						};
						n.sortStable = w.split("").sort(k).join("") === w;
						n.detectDuplicates = !!c;
						h();
						n.sortDetached = at(function(e) {
							return e.compareDocumentPosition(p
									.createElement("div")) & 1
						});
						if (!at(function(e) {
							e.innerHTML = "<a href='#'></a>";
							return e.firstChild.getAttribute("href") === "#"
						})) {
							ft("type|href|height|width", function(e, t, n) {
								if (!n) {
									return e.getAttribute(t,
											t.toLowerCase() === "type" ? 1 : 2)
								}
							})
						}
						if (!n.attributes || !at(function(e) {
							e.innerHTML = "<input/>";
							e.firstChild.setAttribute("value", "");
							return e.firstChild.getAttribute("value") === ""
						})) {
							ft(
									"value",
									function(e, t, n) {
										if (!n
												&& e.nodeName.toLowerCase() === "input") {
											return e.defaultValue
										}
									})
						}
						if (!at(function(e) {
							return e.getAttribute("disabled") == null
						})) {
							ft(j, function(e, t, n) {
								var r;
								if (!n) {
									return e[t] === true ? t.toLowerCase()
											: (r = e.getAttributeNode(t))
													&& r.specified ? r.value
													: null
								}
							})
						}
						return st
					}(e);
					h.find = y;
					h.expr = y.selectors;
					h.expr[":"] = h.expr.pseudos;
					h.unique = y.uniqueSort;
					h.text = y.getText;
					h.isXMLDoc = y.isXML;
					h.contains = y.contains;
					var b = h.expr.match.needsContext;
					var w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
					var E = /^.[^:#\[\.,]*$/;
					h.filter = function(e, t, n) {
						var r = t[0];
						if (n) {
							e = ":not(" + e + ")"
						}
						return t.length === 1 && r.nodeType === 1 ? h.find
								.matchesSelector(r, e) ? [ r ] : [] : h.find
								.matches(e, h.grep(t, function(e) {
									return e.nodeType === 1
								}))
					};
					h.fn.extend({
						find : function(e) {
							var t, n = [], r = this, i = r.length;
							if (typeof e !== "string") {
								return this.pushStack(h(e).filter(function() {
									for (t = 0; t < i; t++) {
										if (h.contains(r[t], this)) {
											return true
										}
									}
								}))
							}
							for (t = 0; t < i; t++) {
								h.find(e, r[t], n)
							}
							n = this.pushStack(i > 1 ? h.unique(n) : n);
							n.selector = this.selector ? this.selector + " "
									+ e : e;
							return n
						},
						filter : function(e) {
							return this.pushStack(S(this, e || [], false))
						},
						not : function(e) {
							return this.pushStack(S(this, e || [], true))
						},
						is : function(e) {
							return !!S(this,
									typeof e === "string" && b.test(e) ? h(e)
											: e || [], false).length
						}
					});
					var x, T = e.document, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = h.fn.init = function(
							e, t) {
						var n, r;
						if (!e) {
							return this
						}
						if (typeof e === "string") {
							if (e.charAt(0) === "<"
									&& e.charAt(e.length - 1) === ">"
									&& e.length >= 3) {
								n = [ null, e, null ]
							} else {
								n = N.exec(e)
							}
							if (n && (n[1] || !t)) {
								if (n[1]) {
									t = t instanceof h ? t[0] : t;
									h.merge(this, h.parseHTML(n[1], t
											&& t.nodeType ? t.ownerDocument
											|| t : T, true));
									if (w.test(n[1]) && h.isPlainObject(t)) {
										for (n in t) {
											if (h.isFunction(this[n])) {
												this[n](t[n])
											} else {
												this.attr(n, t[n])
											}
										}
									}
									return this
								} else {
									r = T.getElementById(n[2]);
									if (r && r.parentNode) {
										if (r.id !== n[2]) {
											return x.find(e)
										}
										this.length = 1;
										this[0] = r
									}
									this.context = T;
									this.selector = e;
									return this
								}
							} else if (!t || t.jquery) {
								return (t || x).find(e)
							} else {
								return this.constructor(t).find(e)
							}
						} else if (e.nodeType) {
							this.context = this[0] = e;
							this.length = 1;
							return this
						} else if (h.isFunction(e)) {
							return typeof x.ready !== "undefined" ? x.ready(e)
									: e(h)
						}
						if (e.selector !== undefined) {
							this.selector = e.selector;
							this.context = e.context
						}
						return h.makeArray(e, this)
					};
					C.prototype = h.fn;
					x = h(T);
					var k = /^(?:parents|prev(?:Until|All))/, L = {
						children : true,
						contents : true,
						next : true,
						prev : true
					};
					h
							.extend({
								dir : function(e, t, n) {
									var r = [], i = e[t];
									while (i
											&& i.nodeType !== 9
											&& (n === undefined
													|| i.nodeType !== 1 || !h(i)
													.is(n))) {
										if (i.nodeType === 1) {
											r.push(i)
										}
										i = i[t]
									}
									return r
								},
								sibling : function(e, t) {
									var n = [];
									for (; e; e = e.nextSibling) {
										if (e.nodeType === 1 && e !== t) {
											n.push(e)
										}
									}
									return n
								}
							});
					h.fn
							.extend({
								has : function(e) {
									var t, n = h(e, this), r = n.length;
									return this.filter(function() {
										for (t = 0; t < r; t++) {
											if (h.contains(this, n[t])) {
												return true
											}
										}
									})
								},
								closest : function(e, t) {
									var n, r = 0, i = this.length, s = [], o = b
											.test(e)
											|| typeof e !== "string" ? h(e, t
											|| this.context) : 0;
									for (; r < i; r++) {
										for (n = this[r]; n && n !== t; n = n.parentNode) {
											if (n.nodeType < 11
													&& (o ? o.index(n) > -1
															: n.nodeType === 1
																	&& h.find
																			.matchesSelector(
																					n,
																					e))) {
												s.push(n);
												break
											}
										}
									}
									return this.pushStack(s.length > 1 ? h
											.unique(s) : s)
								},
								index : function(e) {
									if (!e) {
										return this[0] && this[0].parentNode ? this
												.first().prevAll().length
												: -1
									}
									if (typeof e === "string") {
										return h.inArray(this[0], h(e))
									}
									return h.inArray(e.jquery ? e[0] : e, this)
								},
								add : function(e, t) {
									return this.pushStack(h.unique(h.merge(this
											.get(), h(e, t))))
								},
								addBack : function(e) {
									return this.add(e == null ? this.prevObject
											: this.prevObject.filter(e))
								}
							});
					h
							.each(
									{
										parent : function(e) {
											var t = e.parentNode;
											return t && t.nodeType !== 11 ? t
													: null
										},
										parents : function(e) {
											return h.dir(e, "parentNode")
										},
										parentsUntil : function(e, t, n) {
											return h.dir(e, "parentNode", n)
										},
										next : function(e) {
											return A(e, "nextSibling")
										},
										prev : function(e) {
											return A(e, "previousSibling")
										},
										nextAll : function(e) {
											return h.dir(e, "nextSibling")
										},
										prevAll : function(e) {
											return h.dir(e, "previousSibling")
										},
										nextUntil : function(e, t, n) {
											return h.dir(e, "nextSibling", n)
										},
										prevUntil : function(e, t, n) {
											return h.dir(e, "previousSibling",
													n)
										},
										siblings : function(e) {
											return h
													.sibling(
															(e.parentNode || {}).firstChild,
															e)
										},
										children : function(e) {
											return h.sibling(e.firstChild)
										},
										contents : function(e) {
											return h.nodeName(e, "iframe") ? e.contentDocument
													|| e.contentWindow.document
													: h.merge([], e.childNodes)
										}
									}, function(e, t) {
										h.fn[e] = function(n, r) {
											var i = h.map(this, t, n);
											if (e.slice(-5) !== "Until") {
												r = n
											}
											if (r && typeof r === "string") {
												i = h.filter(r, i)
											}
											if (this.length > 1) {
												if (!L[e]) {
													i = h.unique(i)
												}
												if (k.test(e)) {
													i = i.reverse()
												}
											}
											return this.pushStack(i)
										}
									});
					var O = /\S+/g;
					var M = {};
					h.Callbacks = function(e) {
						e = typeof e === "string" ? M[e] || _(e) : h.extend({},
								e);
						var t, n, r, i, s, o, u = [], a = !e.once && [], f = function(
								c) {
							n = e.memory && c;
							r = true;
							s = o || 0;
							o = 0;
							i = u.length;
							t = true;
							for (; u && s < i; s++) {
								if (u[s].apply(c[0], c[1]) === false
										&& e.stopOnFalse) {
									n = false;
									break
								}
							}
							t = false;
							if (u) {
								if (a) {
									if (a.length) {
										f(a.shift())
									}
								} else if (n) {
									u = []
								} else {
									l.disable()
								}
							}
						}, l = {
							add : function() {
								if (u) {
									var r = u.length;
									(function s(t) {
										h.each(t, function(t, n) {
											var r = h.type(n);
											if (r === "function") {
												if (!e.unique || !l.has(n)) {
													u.push(n)
												}
											} else if (n && n.length
													&& r !== "string") {
												s(n)
											}
										})
									})(arguments);
									if (t) {
										i = u.length
									} else if (n) {
										o = r;
										f(n)
									}
								}
								return this
							},
							remove : function() {
								if (u) {
									h.each(arguments, function(e, n) {
										var r;
										while ((r = h.inArray(n, u, r)) > -1) {
											u.splice(r, 1);
											if (t) {
												if (r <= i) {
													i--
												}
												if (r <= s) {
													s--
												}
											}
										}
									})
								}
								return this
							},
							has : function(e) {
								return e ? h.inArray(e, u) > -1
										: !!(u && u.length)
							},
							empty : function() {
								u = [];
								i = 0;
								return this
							},
							disable : function() {
								u = a = n = undefined;
								return this
							},
							disabled : function() {
								return !u
							},
							lock : function() {
								a = undefined;
								if (!n) {
									l.disable()
								}
								return this
							},
							locked : function() {
								return !a
							},
							fireWith : function(e, n) {
								if (u && (!r || a)) {
									n = n || [];
									n = [ e, n.slice ? n.slice() : n ];
									if (t) {
										a.push(n)
									} else {
										f(n)
									}
								}
								return this
							},
							fire : function() {
								l.fireWith(this, arguments);
								return this
							},
							fired : function() {
								return !!r
							}
						};
						return l
					};
					h
							.extend({
								Deferred : function(e) {
									var t = [
											[ "resolve", "done",
													h.Callbacks("once memory"),
													"resolved" ],
											[ "reject", "fail",
													h.Callbacks("once memory"),
													"rejected" ],
											[ "notify", "progress",
													h.Callbacks("memory") ] ], n = "pending", r = {
										state : function() {
											return n
										},
										always : function() {
											i.done(arguments).fail(arguments);
											return this
										},
										then : function() {
											var e = arguments;
											return h
													.Deferred(
															function(n) {
																h
																		.each(
																				t,
																				function(
																						t,
																						s) {
																					var o = h
																							.isFunction(e[t])
																							&& e[t];
																					i[s[1]]
																							(function() {
																								var e = o
																										&& o
																												.apply(
																														this,
																														arguments);
																								if (e
																										&& h
																												.isFunction(e.promise)) {
																									e
																											.promise()
																											.done(
																													n.resolve)
																											.fail(
																													n.reject)
																											.progress(
																													n.notify)
																								} else {
																									n[s[0]
																											+ "With"]
																											(
																													this === r ? n
																															.promise()
																															: this,
																													o ? [ e ]
																															: arguments)
																								}
																							})
																				});
																e = null
															}).promise()
										},
										promise : function(e) {
											return e != null ? h.extend(e, r)
													: r
										}
									}, i = {};
									r.pipe = r.then;
									h.each(t, function(e, s) {
										var o = s[2], u = s[3];
										r[s[1]] = o.add;
										if (u) {
											o.add(function() {
												n = u
											}, t[e ^ 1][2].disable,
													t[2][2].lock)
										}
										i[s[0]] = function() {
											i[s[0] + "With"](this === i ? r
													: this, arguments);
											return this
										};
										i[s[0] + "With"] = o.fireWith
									});
									r.promise(i);
									if (e) {
										e.call(i, i)
									}
									return i
								},
								when : function(e) {
									var t = 0, n = r.call(arguments), i = n.length, s = i !== 1
											|| e && h.isFunction(e.promise) ? i
											: 0, o = s === 1 ? e : h.Deferred(), u = function(
											e, t, n) {
										return function(i) {
											t[e] = this;
											n[e] = arguments.length > 1 ? r
													.call(arguments) : i;
											if (n === a) {
												o.notifyWith(t, n)
											} else if (!--s) {
												o.resolveWith(t, n)
											}
										}
									}, a, f, l;
									if (i > 1) {
										a = new Array(i);
										f = new Array(i);
										l = new Array(i);
										for (; t < i; t++) {
											if (n[t]
													&& h
															.isFunction(n[t].promise)) {
												n[t].promise().done(u(t, l, n))
														.fail(o.reject)
														.progress(u(t, f, a))
											} else {
												--s
											}
										}
									}
									if (!s) {
										o.resolveWith(l, n)
									}
									return o.promise()
								}
							});
					var D;
					h.fn.ready = function(e) {
						h.ready.promise().done(e);
						return this
					};
					h.extend({
						isReady : false,
						readyWait : 1,
						holdReady : function(e) {
							if (e) {
								h.readyWait++
							} else {
								h.ready(true)
							}
						},
						ready : function(e) {
							if (e === true ? --h.readyWait : h.isReady) {
								return
							}
							if (!T.body) {
								return setTimeout(h.ready)
							}
							h.isReady = true;
							if (e !== true && --h.readyWait > 0) {
								return
							}
							D.resolveWith(T, [ h ]);
							if (h.fn.triggerHandler) {
								h(T).triggerHandler("ready");
								h(T).off("ready")
							}
						}
					});
					h.ready.promise = function(t) {
						if (!D) {
							D = h.Deferred();
							if (T.readyState === "complete") {
								setTimeout(h.ready)
							} else if (T.addEventListener) {
								T
										.addEventListener("DOMContentLoaded",
												H, false);
								e.addEventListener("load", H, false)
							} else {
								T.attachEvent("onreadystatechange", H);
								e.attachEvent("onload", H);
								var n = false;
								try {
									n = e.frameElement == null
											&& T.documentElement
								} catch (r) {
								}
								if (n && n.doScroll) {
									(function i() {
										if (!h.isReady) {
											try {
												n.doScroll("left")
											} catch (e) {
												return setTimeout(i, 50)
											}
											P();
											h.ready()
										}
									})()
								}
							}
						}
						return D.promise(t)
					};
					var B = typeof undefined;
					var j;
					for (j in h(l)) {
						break
					}
					l.ownLast = j !== "0";
					l.inlineBlockNeedsLayout = false;
					h(function() {
						var e, t, n, r;
						n = T.getElementsByTagName("body")[0];
						if (!n || !n.style) {
							return
						}
						t = T.createElement("div");
						r = T.createElement("div");
						r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
						n.appendChild(r).appendChild(t);
						if (typeof t.style.zoom !== B) {
							t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
							l.inlineBlockNeedsLayout = e = t.offsetWidth === 3;
							if (e) {
								n.style.zoom = 1
							}
						}
						n.removeChild(r)
					});
					(function() {
						var e = T.createElement("div");
						if (l.deleteExpando == null) {
							l.deleteExpando = true;
							try {
								delete e.test
							} catch (t) {
								l.deleteExpando = false
							}
						}
						e = null
					})();
					h.acceptData = function(e) {
						var t = h.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
						return n !== 1 && n !== 9 ? false : !t || t !== true
								&& e.getAttribute("classid") === t
					};
					var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, I = /([A-Z])/g;
					h
							.extend({
								cache : {},
								noData : {
									"applet " : true,
									"embed " : true,
									"object " : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
								},
								hasData : function(e) {
									e = e.nodeType ? h.cache[e[h.expando]]
											: e[h.expando];
									return !!e && !R(e)
								},
								data : function(e, t, n) {
									return U(e, t, n)
								},
								removeData : function(e, t) {
									return z(e, t)
								},
								_data : function(e, t, n) {
									return U(e, t, n, true)
								},
								_removeData : function(e, t) {
									return z(e, t, true)
								}
							});
					h.fn
							.extend({
								data : function(e, t) {
									var n, r, i, s = this[0], o = s
											&& s.attributes;
									if (e === undefined) {
										if (this.length) {
											i = h.data(s);
											if (s.nodeType === 1
													&& !h._data(s,
															"parsedAttrs")) {
												n = o.length;
												while (n--) {
													if (o[n]) {
														r = o[n].name;
														if (r.indexOf("data-") === 0) {
															r = h.camelCase(r
																	.slice(5));
															q(s, r, i[r])
														}
													}
												}
												h._data(s, "parsedAttrs", true)
											}
										}
										return i
									}
									if (typeof e === "object") {
										return this.each(function() {
											h.data(this, e)
										})
									}
									return arguments.length > 1 ? this
											.each(function() {
												h.data(this, e, t)
											}) : s ? q(s, e, h.data(s, e))
											: undefined
								},
								removeData : function(e) {
									return this.each(function() {
										h.removeData(this, e)
									})
								}
							});
					h
							.extend({
								queue : function(e, t, n) {
									var r;
									if (e) {
										t = (t || "fx") + "queue";
										r = h._data(e, t);
										if (n) {
											if (!r || h.isArray(n)) {
												r = h._data(e, t, h
														.makeArray(n))
											} else {
												r.push(n)
											}
										}
										return r || []
									}
								},
								dequeue : function(e, t) {
									t = t || "fx";
									var n = h.queue(e, t), r = n.length, i = n
											.shift(), s = h._queueHooks(e, t), o = function() {
										h.dequeue(e, t)
									};
									if (i === "inprogress") {
										i = n.shift();
										r--
									}
									if (i) {
										if (t === "fx") {
											n.unshift("inprogress")
										}
										delete s.stop;
										i.call(e, o, s)
									}
									if (!r && s) {
										s.empty.fire()
									}
								},
								_queueHooks : function(e, t) {
									var n = t + "queueHooks";
									return h._data(e, n)
											|| h._data(e, n, {
												empty : h.Callbacks(
														"once memory").add(
														function() {
															h._removeData(e, t
																	+ "queue");
															h._removeData(e, n)
														})
											})
								}
							});
					h.fn
							.extend({
								queue : function(e, t) {
									var n = 2;
									if (typeof e !== "string") {
										t = e;
										e = "fx";
										n--
									}
									if (arguments.length < n) {
										return h.queue(this[0], e)
									}
									return t === undefined ? this
											: this
													.each(function() {
														var n = h.queue(this,
																e, t);
														h._queueHooks(this, e);
														if (e === "fx"
																&& n[0] !== "inprogress") {
															h.dequeue(this, e)
														}
													})
								},
								dequeue : function(e) {
									return this.each(function() {
										h.dequeue(this, e)
									})
								},
								clearQueue : function(e) {
									return this.queue(e || "fx", [])
								},
								promise : function(e, t) {
									var n, r = 1, i = h.Deferred(), s = this, o = this.length, u = function() {
										if (!--r) {
											i.resolveWith(s, [ s ])
										}
									};
									if (typeof e !== "string") {
										t = e;
										e = undefined
									}
									e = e || "fx";
									while (o--) {
										n = h._data(s[o], e + "queueHooks");
										if (n && n.empty) {
											r++;
											n.empty.add(u)
										}
									}
									u();
									return i.promise(t)
								}
							});
					var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
					var X = [ "Top", "Right", "Bottom", "Left" ];
					var V = function(e, t) {
						e = t || e;
						return h.css(e, "display") === "none"
								|| !h.contains(e.ownerDocument, e)
					};
					var $ = h.access = function(e, t, n, r, i, s, o) {
						var u = 0, a = e.length, f = n == null;
						if (h.type(n) === "object") {
							i = true;
							for (u in n) {
								h.access(e, t, u, n[u], true, s, o)
							}
						} else if (r !== undefined) {
							i = true;
							if (!h.isFunction(r)) {
								o = true
							}
							if (f) {
								if (o) {
									t.call(e, r);
									t = null
								} else {
									f = t;
									t = function(e, t, n) {
										return f.call(h(e), n)
									}
								}
							}
							if (t) {
								for (; u < a; u++) {
									t(e[u], n, o ? r : r.call(e[u], u, t(e[u],
											n)))
								}
							}
						}
						return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
					};
					var J = /^(?:checkbox|radio)$/i;
					(function() {
						var e = T.createElement("input"), t = T
								.createElement("div"), n = T
								.createDocumentFragment();
						t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
						l.leadingWhitespace = t.firstChild.nodeType === 3;
						l.tbody = !t.getElementsByTagName("tbody").length;
						l.htmlSerialize = !!t.getElementsByTagName("link").length;
						l.html5Clone = T.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
						e.type = "checkbox";
						e.checked = true;
						n.appendChild(e);
						l.appendChecked = e.checked;
						t.innerHTML = "<textarea>x</textarea>";
						l.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
						n.appendChild(t);
						t.innerHTML = "<input type='radio' checked='checked' name='t'/>";
						l.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
						l.noCloneEvent = true;
						if (t.attachEvent) {
							t.attachEvent("onclick", function() {
								l.noCloneEvent = false
							});
							t.cloneNode(true).click()
						}
						if (l.deleteExpando == null) {
							l.deleteExpando = true;
							try {
								delete t.test
							} catch (r) {
								l.deleteExpando = false
							}
						}
					})();
					(function() {
						var t, n, r = T.createElement("div");
						for (t in {
							submit : true,
							change : true,
							focusin : true
						}) {
							n = "on" + t;
							if (!(l[t + "Bubbles"] = n in e)) {
								r.setAttribute(n, "t");
								l[t + "Bubbles"] = r.attributes[n].expando === false
							}
						}
						r = null
					})();
					var K = /^(?:input|select|textarea)$/i, Q = /^key/, G = /^(?:mouse|pointer|contextmenu)|click/, Y = /^(?:focusinfocus|focusoutblur)$/, Z = /^([^.]*)(?:\.(.+)|)$/;
					h.event = {
						global : {},
						add : function(e, t, n, r, i) {
							var s, o, u, a, f, l, c, p, d, v, m, g = h._data(e);
							if (!g) {
								return
							}
							if (n.handler) {
								a = n;
								n = a.handler;
								i = a.selector
							}
							if (!n.guid) {
								n.guid = h.guid++
							}
							if (!(o = g.events)) {
								o = g.events = {}
							}
							if (!(l = g.handle)) {
								l = g.handle = function(e) {
									return typeof h !== B
											&& (!e || h.event.triggered !== e.type) ? h.event.dispatch
											.apply(l.elem, arguments)
											: undefined
								};
								l.elem = e
							}
							t = (t || "").match(O) || [ "" ];
							u = t.length;
							while (u--) {
								s = Z.exec(t[u]) || [];
								d = m = s[1];
								v = (s[2] || "").split(".").sort();
								if (!d) {
									continue
								}
								f = h.event.special[d] || {};
								d = (i ? f.delegateType : f.bindType) || d;
								f = h.event.special[d] || {};
								c = h.extend({
									type : d,
									origType : m,
									data : r,
									handler : n,
									guid : n.guid,
									selector : i,
									needsContext : i
											&& h.expr.match.needsContext
													.test(i),
									namespace : v.join(".")
								}, a);
								if (!(p = o[d])) {
									p = o[d] = [];
									p.delegateCount = 0;
									if (!f.setup
											|| f.setup.call(e, r, v, l) === false) {
										if (e.addEventListener) {
											e.addEventListener(d, l, false)
										} else if (e.attachEvent) {
											e.attachEvent("on" + d, l)
										}
									}
								}
								if (f.add) {
									f.add.call(e, c);
									if (!c.handler.guid) {
										c.handler.guid = n.guid
									}
								}
								if (i) {
									p.splice(p.delegateCount++, 0, c)
								} else {
									p.push(c)
								}
								h.event.global[d] = true
							}
							e = null
						},
						remove : function(e, t, n, r, i) {
							var s, o, u, a, f, l, c, p, d, v, m, g = h
									.hasData(e)
									&& h._data(e);
							if (!g || !(l = g.events)) {
								return
							}
							t = (t || "").match(O) || [ "" ];
							f = t.length;
							while (f--) {
								u = Z.exec(t[f]) || [];
								d = m = u[1];
								v = (u[2] || "").split(".").sort();
								if (!d) {
									for (d in l) {
										h.event.remove(e, d + t[f], n, r, true)
									}
									continue
								}
								c = h.event.special[d] || {};
								d = (r ? c.delegateType : c.bindType) || d;
								p = l[d] || [];
								u = u[2]
										&& new RegExp("(^|\\.)"
												+ v.join("\\.(?:.*\\.|)")
												+ "(\\.|$)");
								a = s = p.length;
								while (s--) {
									o = p[s];
									if ((i || m === o.origType)
											&& (!n || n.guid === o.guid)
											&& (!u || u.test(o.namespace))
											&& (!r || r === o.selector || r === "**"
													&& o.selector)) {
										p.splice(s, 1);
										if (o.selector) {
											p.delegateCount--
										}
										if (c.remove) {
											c.remove.call(e, o)
										}
									}
								}
								if (a && !p.length) {
									if (!c.teardown
											|| c.teardown.call(e, v, g.handle) === false) {
										h.removeEvent(e, d, g.handle)
									}
									delete l[d]
								}
							}
							if (h.isEmptyObject(l)) {
								delete g.handle;
								h._removeData(e, "events")
							}
						},
						trigger : function(t, n, r, i) {
							var s, o, u, a, l, c, p, d = [ r || T ], v = f
									.call(t, "type") ? t.type : t, m = f.call(
									t, "namespace") ? t.namespace.split(".")
									: [];
							u = c = r = r || T;
							if (r.nodeType === 3 || r.nodeType === 8) {
								return
							}
							if (Y.test(v + h.event.triggered)) {
								return
							}
							if (v.indexOf(".") >= 0) {
								m = v.split(".");
								v = m.shift();
								m.sort()
							}
							o = v.indexOf(":") < 0 && "on" + v;
							t = t[h.expando] ? t : new h.Event(v,
									typeof t === "object" && t);
							t.isTrigger = i ? 2 : 3;
							t.namespace = m.join(".");
							t.namespace_re = t.namespace ? new RegExp("(^|\\.)"
									+ m.join("\\.(?:.*\\.|)") + "(\\.|$)")
									: null;
							t.result = undefined;
							if (!t.target) {
								t.target = r
							}
							n = n == null ? [ t ] : h.makeArray(n, [ t ]);
							l = h.event.special[v] || {};
							if (!i && l.trigger
									&& l.trigger.apply(r, n) === false) {
								return
							}
							if (!i && !l.noBubble && !h.isWindow(r)) {
								a = l.delegateType || v;
								if (!Y.test(a + v)) {
									u = u.parentNode
								}
								for (; u; u = u.parentNode) {
									d.push(u);
									c = u
								}
								if (c === (r.ownerDocument || T)) {
									d
											.push(c.defaultView
													|| c.parentWindow || e)
								}
							}
							p = 0;
							while ((u = d[p++]) && !t.isPropagationStopped()) {
								t.type = p > 1 ? a : l.bindType || v;
								s = (h._data(u, "events") || {})[t.type]
										&& h._data(u, "handle");
								if (s) {
									s.apply(u, n)
								}
								s = o && u[o];
								if (s && s.apply && h.acceptData(u)) {
									t.result = s.apply(u, n);
									if (t.result === false) {
										t.preventDefault()
									}
								}
							}
							t.type = v;
							if (!i && !t.isDefaultPrevented()) {
								if ((!l._default || l._default
										.apply(d.pop(), n) === false)
										&& h.acceptData(r)) {
									if (o && r[v] && !h.isWindow(r)) {
										c = r[o];
										if (c) {
											r[o] = null
										}
										h.event.triggered = v;
										try {
											r[v]()
										} catch (g) {
										}
										h.event.triggered = undefined;
										if (c) {
											r[o] = c
										}
									}
								}
							}
							return t.result
						},
						dispatch : function(e) {
							e = h.event.fix(e);
							var t, n, i, s, o, u = [], a = r.call(arguments), f = (h
									._data(this, "events") || {})[e.type]
									|| [], l = h.event.special[e.type] || {};
							a[0] = e;
							e.delegateTarget = this;
							if (l.preDispatch
									&& l.preDispatch.call(this, e) === false) {
								return
							}
							u = h.event.handlers.call(this, e, f);
							t = 0;
							while ((s = u[t++]) && !e.isPropagationStopped()) {
								e.currentTarget = s.elem;
								o = 0;
								while ((i = s.handlers[o++])
										&& !e.isImmediatePropagationStopped()) {
									if (!e.namespace_re
											|| e.namespace_re.test(i.namespace)) {
										e.handleObj = i;
										e.data = i.data;
										n = ((h.event.special[i.origType] || {}).handle || i.handler)
												.apply(s.elem, a);
										if (n !== undefined) {
											if ((e.result = n) === false) {
												e.preventDefault();
												e.stopPropagation()
											}
										}
									}
								}
							}
							if (l.postDispatch) {
								l.postDispatch.call(this, e)
							}
							return e.result
						},
						handlers : function(e, t) {
							var n, r, i, s, o = [], u = t.delegateCount, a = e.target;
							if (u && a.nodeType
									&& (!e.button || e.type !== "click")) {
								for (; a != this; a = a.parentNode || this) {
									if (a.nodeType === 1
											&& (a.disabled !== true || e.type !== "click")) {
										i = [];
										for (s = 0; s < u; s++) {
											r = t[s];
											n = r.selector + " ";
											if (i[n] === undefined) {
												i[n] = r.needsContext ? h(n,
														this).index(a) >= 0 : h
														.find(n, this, null,
																[ a ]).length
											}
											if (i[n]) {
												i.push(r)
											}
										}
										if (i.length) {
											o.push({
												elem : a,
												handlers : i
											})
										}
									}
								}
							}
							if (u < t.length) {
								o.push({
									elem : this,
									handlers : t.slice(u)
								})
							}
							return o
						},
						fix : function(e) {
							if (e[h.expando]) {
								return e
							}
							var t, n, r, i = e.type, s = e, o = this.fixHooks[i];
							if (!o) {
								this.fixHooks[i] = o = G.test(i) ? this.mouseHooks
										: Q.test(i) ? this.keyHooks : {}
							}
							r = o.props ? this.props.concat(o.props)
									: this.props;
							e = new h.Event(s);
							t = r.length;
							while (t--) {
								n = r[t];
								e[n] = s[n]
							}
							if (!e.target) {
								e.target = s.srcElement || T
							}
							if (e.target.nodeType === 3) {
								e.target = e.target.parentNode
							}
							e.metaKey = !!e.metaKey;
							return o.filter ? o.filter(e, s) : e
						},
						props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
								.split(" "),
						fixHooks : {},
						keyHooks : {
							props : "char charCode key keyCode".split(" "),
							filter : function(e, t) {
								if (e.which == null) {
									e.which = t.charCode != null ? t.charCode
											: t.keyCode
								}
								return e
							}
						},
						mouseHooks : {
							props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
									.split(" "),
							filter : function(e, t) {
								var n, r, i, s = t.button, o = t.fromElement;
								if (e.pageX == null && t.clientX != null) {
									r = e.target.ownerDocument || T;
									i = r.documentElement;
									n = r.body;
									e.pageX = t.clientX
											+ (i && i.scrollLeft || n
													&& n.scrollLeft || 0)
											- (i && i.clientLeft || n
													&& n.clientLeft || 0);
									e.pageY = t.clientY
											+ (i && i.scrollTop || n
													&& n.scrollTop || 0)
											- (i && i.clientTop || n
													&& n.clientTop || 0)
								}
								if (!e.relatedTarget && o) {
									e.relatedTarget = o === e.target ? t.toElement
											: o
								}
								if (!e.which && s !== undefined) {
									e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2
											: 0
								}
								return e
							}
						},
						special : {
							load : {
								noBubble : true
							},
							focus : {
								trigger : function() {
									if (this !== nt() && this.focus) {
										try {
											this.focus();
											return false
										} catch (e) {
										}
									}
								},
								delegateType : "focusin"
							},
							blur : {
								trigger : function() {
									if (this === nt() && this.blur) {
										this.blur();
										return false
									}
								},
								delegateType : "focusout"
							},
							click : {
								trigger : function() {
									if (h.nodeName(this, "input")
											&& this.type === "checkbox"
											&& this.click) {
										this.click();
										return false
									}
								},
								_default : function(e) {
									return h.nodeName(e.target, "a")
								}
							},
							beforeunload : {
								postDispatch : function(e) {
									if (e.result !== undefined
											&& e.originalEvent) {
										e.originalEvent.returnValue = e.result
									}
								}
							}
						},
						simulate : function(e, t, n, r) {
							var i = h.extend(new h.Event, n, {
								type : e,
								isSimulated : true,
								originalEvent : {}
							});
							if (r) {
								h.event.trigger(i, null, t)
							} else {
								h.event.dispatch.call(t, i)
							}
							if (i.isDefaultPrevented()) {
								n.preventDefault()
							}
						}
					};
					h.removeEvent = T.removeEventListener ? function(e, t, n) {
						if (e.removeEventListener) {
							e.removeEventListener(t, n, false)
						}
					} : function(e, t, n) {
						var r = "on" + t;
						if (e.detachEvent) {
							if (typeof e[r] === B) {
								e[r] = null
							}
							e.detachEvent(r, n)
						}
					};
					h.Event = function(e, t) {
						if (!(this instanceof h.Event)) {
							return new h.Event(e, t)
						}
						if (e && e.type) {
							this.originalEvent = e;
							this.type = e.type;
							this.isDefaultPrevented = e.defaultPrevented
									|| e.defaultPrevented === undefined
									&& e.returnValue === false ? et : tt
						} else {
							this.type = e
						}
						if (t) {
							h.extend(this, t)
						}
						this.timeStamp = e && e.timeStamp || h.now();
						this[h.expando] = true
					};
					h.Event.prototype = {
						isDefaultPrevented : tt,
						isPropagationStopped : tt,
						isImmediatePropagationStopped : tt,
						preventDefault : function() {
							var e = this.originalEvent;
							this.isDefaultPrevented = et;
							if (!e) {
								return
							}
							if (e.preventDefault) {
								e.preventDefault()
							} else {
								e.returnValue = false
							}
						},
						stopPropagation : function() {
							var e = this.originalEvent;
							this.isPropagationStopped = et;
							if (!e) {
								return
							}
							if (e.stopPropagation) {
								e.stopPropagation()
							}
							e.cancelBubble = true
						},
						stopImmediatePropagation : function() {
							var e = this.originalEvent;
							this.isImmediatePropagationStopped = et;
							if (e && e.stopImmediatePropagation) {
								e.stopImmediatePropagation()
							}
							this.stopPropagation()
						}
					};
					h
							.each(
									{
										mouseenter : "mouseover",
										mouseleave : "mouseout",
										pointerenter : "pointerover",
										pointerleave : "pointerout"
									},
									function(e, t) {
										h.event.special[e] = {
											delegateType : t,
											bindType : t,
											handle : function(e) {
												var n, r = this, i = e.relatedTarget, s = e.handleObj;
												if (!i || i !== r
														&& !h.contains(r, i)) {
													e.type = s.origType;
													n = s.handler.apply(this,
															arguments);
													e.type = t
												}
												return n
											}
										}
									});
					if (!l.submitBubbles) {
						h.event.special.submit = {
							setup : function() {
								if (h.nodeName(this, "form")) {
									return false
								}
								h.event
										.add(
												this,
												"click._submit keypress._submit",
												function(e) {
													var t = e.target, n = h
															.nodeName(t,
																	"input")
															|| h.nodeName(t,
																	"button") ? t.form
															: undefined;
													if (n
															&& !h
																	._data(n,
																			"submitBubbles")) {
														h.event
																.add(
																		n,
																		"submit._submit",
																		function(
																				e) {
																			e._submit_bubble = true
																		});
														h
																._data(
																		n,
																		"submitBubbles",
																		true)
													}
												})
							},
							postDispatch : function(e) {
								if (e._submit_bubble) {
									delete e._submit_bubble;
									if (this.parentNode && !e.isTrigger) {
										h.event.simulate("submit",
												this.parentNode, e, true)
									}
								}
							},
							teardown : function() {
								if (h.nodeName(this, "form")) {
									return false
								}
								h.event.remove(this, "._submit")
							}
						}
					}
					if (!l.changeBubbles) {
						h.event.special.change = {
							setup : function() {
								if (K.test(this.nodeName)) {
									if (this.type === "checkbox"
											|| this.type === "radio") {
										h.event
												.add(
														this,
														"propertychange._change",
														function(e) {
															if (e.originalEvent.propertyName === "checked") {
																this._just_changed = true
															}
														});
										h.event
												.add(
														this,
														"click._change",
														function(e) {
															if (this._just_changed
																	&& !e.isTrigger) {
																this._just_changed = false
															}
															h.event.simulate(
																	"change",
																	this, e,
																	true)
														})
									}
									return false
								}
								h.event
										.add(
												this,
												"beforeactivate._change",
												function(e) {
													var t = e.target;
													if (K.test(t.nodeName)
															&& !h
																	._data(t,
																			"changeBubbles")) {
														h.event
																.add(
																		t,
																		"change._change",
																		function(
																				e) {
																			if (this.parentNode
																					&& !e.isSimulated
																					&& !e.isTrigger) {
																				h.event
																						.simulate(
																								"change",
																								this.parentNode,
																								e,
																								true)
																			}
																		});
														h
																._data(
																		t,
																		"changeBubbles",
																		true)
													}
												})
							},
							handle : function(e) {
								var t = e.target;
								if (this !== t || e.isSimulated || e.isTrigger
										|| t.type !== "radio"
										&& t.type !== "checkbox") {
									return e.handleObj.handler.apply(this,
											arguments)
								}
							},
							teardown : function() {
								h.event.remove(this, "._change");
								return !K.test(this.nodeName)
							}
						}
					}
					if (!l.focusinBubbles) {
						h.each({
							focus : "focusin",
							blur : "focusout"
						}, function(e, t) {
							var n = function(e) {
								h.event.simulate(t, e.target, h.event.fix(e),
										true)
							};
							h.event.special[t] = {
								setup : function() {
									var r = this.ownerDocument || this, i = h
											._data(r, t);
									if (!i) {
										r.addEventListener(e, n, true)
									}
									h._data(r, t, (i || 0) + 1)
								},
								teardown : function() {
									var r = this.ownerDocument || this, i = h
											._data(r, t) - 1;
									if (!i) {
										r.removeEventListener(e, n, true);
										h._removeData(r, t)
									} else {
										h._data(r, t, i)
									}
								}
							}
						})
					}
					h.fn.extend({
						on : function(e, t, n, r, i) {
							var s, o;
							if (typeof e === "object") {
								if (typeof t !== "string") {
									n = n || t;
									t = undefined
								}
								for (s in e) {
									this.on(s, t, n, e[s], i)
								}
								return this
							}
							if (n == null && r == null) {
								r = t;
								n = t = undefined
							} else if (r == null) {
								if (typeof t === "string") {
									r = n;
									n = undefined
								} else {
									r = n;
									n = t;
									t = undefined
								}
							}
							if (r === false) {
								r = tt
							} else if (!r) {
								return this
							}
							if (i === 1) {
								o = r;
								r = function(e) {
									h().off(e);
									return o.apply(this, arguments)
								};
								r.guid = o.guid || (o.guid = h.guid++)
							}
							return this.each(function() {
								h.event.add(this, e, r, n, t)
							})
						},
						one : function(e, t, n, r) {
							return this.on(e, t, n, r, 1)
						},
						off : function(e, t, n) {
							var r, i;
							if (e && e.preventDefault && e.handleObj) {
								r = e.handleObj;
								h(e.delegateTarget).off(
										r.namespace ? r.origType + "."
												+ r.namespace : r.origType,
										r.selector, r.handler);
								return this
							}
							if (typeof e === "object") {
								for (i in e) {
									this.off(i, t, e[i])
								}
								return this
							}
							if (t === false || typeof t === "function") {
								n = t;
								t = undefined
							}
							if (n === false) {
								n = tt
							}
							return this.each(function() {
								h.event.remove(this, e, n, t)
							})
						},
						trigger : function(e, t) {
							return this.each(function() {
								h.event.trigger(e, t, this)
							})
						},
						triggerHandler : function(e, t) {
							var n = this[0];
							if (n) {
								return h.event.trigger(e, t, n, true)
							}
						}
					});
					var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"
							+ "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", st = / jQuery\d+="(?:null|\d+)"/g, ot = new RegExp(
							"<(?:" + it + ")[\\s/>]", "i"), ut = /^\s+/, at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ft = /<([\w:]+)/, lt = /<tbody/i, ct = /<|&#?\w+;/, ht = /<(?:script|style|link)/i, pt = /checked\s*(?:[^=]|=\s*.checked.)/i, dt = /^$|\/(?:java|ecma)script/i, vt = /^true\/(.*)/, mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gt = {
						option : [ 1, "<select multiple='multiple'>",
								"</select>" ],
						legend : [ 1, "<fieldset>", "</fieldset>" ],
						area : [ 1, "<map>", "</map>" ],
						param : [ 1, "<object>", "</object>" ],
						thead : [ 1, "<table>", "</table>" ],
						tr : [ 2, "<table><tbody>", "</tbody></table>" ],
						col : [ 2, "<table><tbody></tbody><colgroup>",
								"</colgroup></table>" ],
						td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
						_default : l.htmlSerialize ? [ 0, "", "" ] : [ 1,
								"X<div>", "</div>" ]
					}, yt = rt(T), bt = yt.appendChild(T.createElement("div"));
					gt.optgroup = gt.option;
					gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead;
					gt.th = gt.td;
					h
							.extend({
								clone : function(e, t, n) {
									var r, i, s, o, u, a = h.contains(
											e.ownerDocument, e);
									if (l.html5Clone || h.isXMLDoc(e)
											|| !ot.test("<" + e.nodeName + ">")) {
										s = e.cloneNode(true)
									} else {
										bt.innerHTML = e.outerHTML;
										bt.removeChild(s = bt.firstChild)
									}
									if ((!l.noCloneEvent || !l.noCloneChecked)
											&& (e.nodeType === 1 || e.nodeType === 11)
											&& !h.isXMLDoc(e)) {
										r = wt(s);
										u = wt(e);
										for (o = 0; (i = u[o]) != null; ++o) {
											if (r[o]) {
												kt(i, r[o])
											}
										}
									}
									if (t) {
										if (n) {
											u = u || wt(e);
											r = r || wt(s);
											for (o = 0; (i = u[o]) != null; o++) {
												Ct(i, r[o])
											}
										} else {
											Ct(e, s)
										}
									}
									r = wt(s, "script");
									if (r.length > 0) {
										Nt(r, !a && wt(e, "script"))
									}
									r = u = i = null;
									return s
								},
								buildFragment : function(e, t, n, r) {
									var i, s, o, u, a, f, c, p = e.length, d = rt(t), v = [], m = 0;
									for (; m < p; m++) {
										s = e[m];
										if (s || s === 0) {
											if (h.type(s) === "object") {
												h.merge(v, s.nodeType ? [ s ]
														: s)
											} else if (!ct.test(s)) {
												v.push(t.createTextNode(s))
											} else {
												u = u
														|| d
																.appendChild(t
																		.createElement("div"));
												a = (ft.exec(s) || [ "", "" ])[1]
														.toLowerCase();
												c = gt[a] || gt._default;
												u.innerHTML = c[1]
														+ s.replace(at,
																"<$1></$2>")
														+ c[2];
												i = c[0];
												while (i--) {
													u = u.lastChild
												}
												if (!l.leadingWhitespace
														&& ut.test(s)) {
													v.push(t.createTextNode(ut
															.exec(s)[0]))
												}
												if (!l.tbody) {
													s = a === "table"
															&& !lt.test(s) ? u.firstChild
															: c[1] === "<table>"
																	&& !lt
																			.test(s) ? u
																	: 0;
													i = s
															&& s.childNodes.length;
													while (i--) {
														if (h
																.nodeName(
																		f = s.childNodes[i],
																		"tbody")
																&& !f.childNodes.length) {
															s.removeChild(f)
														}
													}
												}
												h.merge(v, u.childNodes);
												u.textContent = "";
												while (u.firstChild) {
													u.removeChild(u.firstChild)
												}
												u = d.lastChild
											}
										}
									}
									if (u) {
										d.removeChild(u)
									}
									if (!l.appendChecked) {
										h.grep(wt(v, "input"), Et)
									}
									m = 0;
									while (s = v[m++]) {
										if (r && h.inArray(s, r) !== -1) {
											continue
										}
										o = h.contains(s.ownerDocument, s);
										u = wt(d.appendChild(s), "script");
										if (o) {
											Nt(u)
										}
										if (n) {
											i = 0;
											while (s = u[i++]) {
												if (dt.test(s.type || "")) {
													n.push(s)
												}
											}
										}
									}
									u = null;
									return d
								},
								cleanData : function(e, t) {
									var r, i, s, o, u = 0, a = h.expando, f = h.cache, c = l.deleteExpando, p = h.event.special;
									for (; (r = e[u]) != null; u++) {
										if (t || h.acceptData(r)) {
											s = r[a];
											o = s && f[s];
											if (o) {
												if (o.events) {
													for (i in o.events) {
														if (p[i]) {
															h.event
																	.remove(r,
																			i)
														} else {
															h.removeEvent(r, i,
																	o.handle)
														}
													}
												}
												if (f[s]) {
													delete f[s];
													if (c) {
														delete r[a]
													} else if (typeof r.removeAttribute !== B) {
														r.removeAttribute(a)
													} else {
														r[a] = null
													}
													n.push(s)
												}
											}
										}
									}
								}
							});
					h.fn
							.extend({
								text : function(e) {
									return $(
											this,
											function(e) {
												return e === undefined ? h
														.text(this)
														: this
																.empty()
																.append(
																		(this[0]
																				&& this[0].ownerDocument || T)
																				.createTextNode(e))
											}, null, e, arguments.length)
								},
								append : function() {
									return this
											.domManip(
													arguments,
													function(e) {
														if (this.nodeType === 1
																|| this.nodeType === 11
																|| this.nodeType === 9) {
															var t = St(this, e);
															t.appendChild(e)
														}
													})
								},
								prepend : function() {
									return this
											.domManip(
													arguments,
													function(e) {
														if (this.nodeType === 1
																|| this.nodeType === 11
																|| this.nodeType === 9) {
															var t = St(this, e);
															t
																	.insertBefore(
																			e,
																			t.firstChild)
														}
													})
								},
								before : function() {
									return this.domManip(arguments,
											function(e) {
												if (this.parentNode) {
													this.parentNode
															.insertBefore(e,
																	this)
												}
											})
								},
								after : function() {
									return this
											.domManip(
													arguments,
													function(e) {
														if (this.parentNode) {
															this.parentNode
																	.insertBefore(
																			e,
																			this.nextSibling)
														}
													})
								},
								remove : function(e, t) {
									var n, r = e ? h.filter(e, this) : this, i = 0;
									for (; (n = r[i]) != null; i++) {
										if (!t && n.nodeType === 1) {
											h.cleanData(wt(n))
										}
										if (n.parentNode) {
											if (t
													&& h.contains(
															n.ownerDocument, n)) {
												Nt(wt(n, "script"))
											}
											n.parentNode.removeChild(n)
										}
									}
									return this
								},
								empty : function() {
									var e, t = 0;
									for (; (e = this[t]) != null; t++) {
										if (e.nodeType === 1) {
											h.cleanData(wt(e, false))
										}
										while (e.firstChild) {
											e.removeChild(e.firstChild)
										}
										if (e.options
												&& h.nodeName(e, "select")) {
											e.options.length = 0
										}
									}
									return this
								},
								clone : function(e, t) {
									e = e == null ? false : e;
									t = t == null ? e : t;
									return this.map(function() {
										return h.clone(this, e, t)
									})
								},
								html : function(e) {
									return $(
											this,
											function(e) {
												var t = this[0] || {}, n = 0, r = this.length;
												if (e === undefined) {
													return t.nodeType === 1 ? t.innerHTML
															.replace(st, "")
															: undefined
												}
												if (typeof e === "string"
														&& !ht.test(e)
														&& (l.htmlSerialize || !ot
																.test(e))
														&& (l.leadingWhitespace || !ut
																.test(e))
														&& !gt[(ft.exec(e) || [
																"", "" ])[1]
																.toLowerCase()]) {
													e = e.replace(at,
															"<$1></$2>");
													try {
														for (; n < r; n++) {
															t = this[n] || {};
															if (t.nodeType === 1) {
																h.cleanData(wt(
																		t,
																		false));
																t.innerHTML = e
															}
														}
														t = 0
													} catch (i) {
													}
												}
												if (t) {
													this.empty().append(e)
												}
											}, null, e, arguments.length)
								},
								replaceWith : function() {
									var e = arguments[0];
									this.domManip(arguments, function(t) {
										e = this.parentNode;
										h.cleanData(wt(this));
										if (e) {
											e.replaceChild(t, this)
										}
									});
									return e && (e.length || e.nodeType) ? this
											: this.remove()
								},
								detach : function(e) {
									return this.remove(e, true)
								},
								domManip : function(e, t) {
									e = i.apply([], e);
									var n, r, s, o, u, a, f = 0, c = this.length, p = this, d = c - 1, v = e[0], m = h
											.isFunction(v);
									if (m || c > 1 && typeof v === "string"
											&& !l.checkClone && pt.test(v)) {
										return this
												.each(function(n) {
													var r = p.eq(n);
													if (m) {
														e[0] = v.call(this, n,
																r.html())
													}
													r.domManip(e, t)
												})
									}
									if (c) {
										a = h.buildFragment(e,
												this[0].ownerDocument, false,
												this);
										n = a.firstChild;
										if (a.childNodes.length === 1) {
											a = n
										}
										if (n) {
											o = h.map(wt(a, "script"), xt);
											s = o.length;
											for (; f < c; f++) {
												r = a;
												if (f !== d) {
													r = h.clone(r, true, true);
													if (s) {
														h.merge(o, wt(r,
																"script"))
													}
												}
												t.call(this[f], r, f)
											}
											if (s) {
												u = o[o.length - 1].ownerDocument;
												h.map(o, Tt);
												for (f = 0; f < s; f++) {
													r = o[f];
													if (dt.test(r.type || "")
															&& !h
																	._data(r,
																			"globalEval")
															&& h.contains(u, r)) {
														if (r.src) {
															if (h._evalUrl) {
																h
																		._evalUrl(r.src)
															}
														} else {
															h
																	.globalEval((r.text
																			|| r.textContent
																			|| r.innerHTML || "")
																			.replace(
																					mt,
																					""))
														}
													}
												}
											}
											a = n = null
										}
									}
									return this
								}
							});
					h.each({
						appendTo : "append",
						prependTo : "prepend",
						insertBefore : "before",
						insertAfter : "after",
						replaceAll : "replaceWith"
					}, function(e, t) {
						h.fn[e] = function(e) {
							var n, r = 0, i = [], o = h(e), u = o.length - 1;
							for (; r <= u; r++) {
								n = r === u ? this : this.clone(true);
								h(o[r])[t](n);
								s.apply(i, n.get())
							}
							return this.pushStack(i)
						}
					});
					var Lt, At = {};
					(function() {
						var e;
						l.shrinkWrapBlocks = function() {
							if (e != null) {
								return e
							}
							e = false;
							var t, n, r;
							n = T.getElementsByTagName("body")[0];
							if (!n || !n.style) {
								return
							}
							t = T.createElement("div");
							r = T.createElement("div");
							r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
							n.appendChild(r).appendChild(t);
							if (typeof t.style.zoom !== B) {
								t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"
										+ "box-sizing:content-box;display:block;margin:0;border:0;"
										+ "padding:1px;width:1px;zoom:1";
								t.appendChild(T.createElement("div")).style.width = "5px";
								e = t.offsetWidth !== 3
							}
							n.removeChild(r);
							return e
						}
					})();
					var _t = /^margin/;
					var Dt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i");
					var Pt, Ht, Bt = /^(top|right|bottom|left)$/;
					if (e.getComputedStyle) {
						Pt = function(e) {
							return e.ownerDocument.defaultView
									.getComputedStyle(e, null)
						};
						Ht = function(e, t, n) {
							var r, i, s, o, u = e.style;
							n = n || Pt(e);
							o = n ? n.getPropertyValue(t) || n[t] : undefined;
							if (n) {
								if (o === "" && !h.contains(e.ownerDocument, e)) {
									o = h.style(e, t)
								}
								if (Dt.test(o) && _t.test(t)) {
									r = u.width;
									i = u.minWidth;
									s = u.maxWidth;
									u.minWidth = u.maxWidth = u.width = o;
									o = n.width;
									u.width = r;
									u.minWidth = i;
									u.maxWidth = s
								}
							}
							return o === undefined ? o : o + ""
						}
					} else if (T.documentElement.currentStyle) {
						Pt = function(e) {
							return e.currentStyle
						};
						Ht = function(e, t, n) {
							var r, i, s, o, u = e.style;
							n = n || Pt(e);
							o = n ? n[t] : undefined;
							if (o == null && u && u[t]) {
								o = u[t]
							}
							if (Dt.test(o) && !Bt.test(t)) {
								r = u.left;
								i = e.runtimeStyle;
								s = i && i.left;
								if (s) {
									i.left = e.currentStyle.left
								}
								u.left = t === "fontSize" ? "1em" : o;
								o = u.pixelLeft + "px";
								u.left = r;
								if (s) {
									i.left = s
								}
							}
							return o === undefined ? o : o + "" || "auto"
						}
					}
					(function() {
						function a() {
							var t, n, r, a;
							n = T.getElementsByTagName("body")[0];
							if (!n || !n.style) {
								return
							}
							t = T.createElement("div");
							r = T.createElement("div");
							r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
							n.appendChild(r).appendChild(t);
							t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"
									+ "box-sizing:border-box;display:block;margin-top:1%;top:1%;"
									+ "border:1px;padding:1px;width:4px;position:absolute";
							i = s = false;
							u = true;
							if (e.getComputedStyle) {
								i = (e.getComputedStyle(t, null) || {}).top !== "1%";
								s = (e.getComputedStyle(t, null) || {
									width : "4px"
								}).width === "4px";
								a = t.appendChild(T.createElement("div"));
								a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"
										+ "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
								a.style.marginRight = a.style.width = "0";
								t.style.width = "1px";
								u = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight)
							}
							t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
							a = t.getElementsByTagName("td");
							a[0].style.cssText = "margin:0;border:0;padding:0;display:none";
							o = a[0].offsetHeight === 0;
							if (o) {
								a[0].style.display = "";
								a[1].style.display = "none";
								o = a[0].offsetHeight === 0
							}
							n.removeChild(r)
						}
						var t, n, r, i, s, o, u;
						t = T.createElement("div");
						t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
						r = t.getElementsByTagName("a")[0];
						n = r && r.style;
						if (!n) {
							return
						}
						n.cssText = "float:left;opacity:.5";
						l.opacity = n.opacity === "0.5";
						l.cssFloat = !!n.cssFloat;
						t.style.backgroundClip = "content-box";
						t.cloneNode(true).style.backgroundClip = "";
						l.clearCloneStyle = t.style.backgroundClip === "content-box";
						l.boxSizing = n.boxSizing === ""
								|| n.MozBoxSizing === ""
								|| n.WebkitBoxSizing === "";
						h.extend(l, {
							reliableHiddenOffsets : function() {
								if (o == null) {
									a()
								}
								return o
							},
							boxSizingReliable : function() {
								if (s == null) {
									a()
								}
								return s
							},
							pixelPosition : function() {
								if (i == null) {
									a()
								}
								return i
							},
							reliableMarginRight : function() {
								if (u == null) {
									a()
								}
								return u
							}
						})
					})();
					h.swap = function(e, t, n, r) {
						var i, s, o = {};
						for (s in t) {
							o[s] = e.style[s];
							e.style[s] = t[s]
						}
						i = n.apply(e, r || []);
						for (s in t) {
							e.style[s] = o[s]
						}
						return i
					};
					var Ft = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, qt = /^(none|table(?!-c[ea]).+)/, Rt = new RegExp(
							"^(" + W + ")(.*)$", "i"), Ut = new RegExp(
							"^([+-])=(" + W + ")", "i"), zt = {
						position : "absolute",
						visibility : "hidden",
						display : "block"
					}, Wt = {
						letterSpacing : "0",
						fontWeight : "400"
					}, Xt = [ "Webkit", "O", "Moz", "ms" ];
					h
							.extend({
								cssHooks : {
									opacity : {
										get : function(e, t) {
											if (t) {
												var n = Ht(e, "opacity");
												return n === "" ? "1" : n
											}
										}
									}
								},
								cssNumber : {
									columnCount : true,
									fillOpacity : true,
									flexGrow : true,
									flexShrink : true,
									fontWeight : true,
									lineHeight : true,
									opacity : true,
									order : true,
									orphans : true,
									widows : true,
									zIndex : true,
									zoom : true
								},
								cssProps : {
									"float" : l.cssFloat ? "cssFloat"
											: "styleFloat"
								},
								style : function(e, t, n, r) {
									if (!e || e.nodeType === 3
											|| e.nodeType === 8 || !e.style) {
										return
									}
									var i, s, o, u = h.camelCase(t), a = e.style;
									t = h.cssProps[u]
											|| (h.cssProps[u] = Vt(a, u));
									o = h.cssHooks[t] || h.cssHooks[u];
									if (n !== undefined) {
										s = typeof n;
										if (s === "string" && (i = Ut.exec(n))) {
											n = (i[1] + 1) * i[2]
													+ parseFloat(h.css(e, t));
											s = "number"
										}
										if (n == null || n !== n) {
											return
										}
										if (s === "number" && !h.cssNumber[u]) {
											n += "px"
										}
										if (!l.clearCloneStyle
												&& n === ""
												&& t.indexOf("background") === 0) {
											a[t] = "inherit"
										}
										if (!o
												|| !("set" in o)
												|| (n = o.set(e, n, r)) !== undefined) {
											try {
												a[t] = n
											} catch (f) {
											}
										}
									} else {
										if (o
												&& "get" in o
												&& (i = o.get(e, false, r)) !== undefined) {
											return i
										}
										return a[t]
									}
								},
								css : function(e, t, n, r) {
									var i, s, o, u = h.camelCase(t);
									t = h.cssProps[u]
											|| (h.cssProps[u] = Vt(e.style, u));
									o = h.cssHooks[t] || h.cssHooks[u];
									if (o && "get" in o) {
										s = o.get(e, true, n)
									}
									if (s === undefined) {
										s = Ht(e, t, r)
									}
									if (s === "normal" && t in Wt) {
										s = Wt[t]
									}
									if (n === "" || n) {
										i = parseFloat(s);
										return n === true || h.isNumeric(i) ? i || 0
												: s
									}
									return s
								}
							});
					h.each([ "height", "width" ], function(e, t) {
						h.cssHooks[t] = {
							get : function(e, n, r) {
								if (n) {
									return qt.test(h.css(e, "display"))
											&& e.offsetWidth === 0 ? h.swap(e,
											zt, function() {
												return Qt(e, t, r)
											}) : Qt(e, t, r)
								}
							},
							set : function(e, n, r) {
								var i = r && Pt(e);
								return Jt(e, n, r ? Kt(e, t, r,
										l.boxSizing
												&& h.css(e, "boxSizing", false,
														i) === "border-box", i)
										: 0)
							}
						}
					});
					if (!l.opacity) {
						h.cssHooks.opacity = {
							get : function(e, t) {
								return It
										.test((t && e.currentStyle ? e.currentStyle.filter
												: e.style.filter)
												|| "") ? .01
										* parseFloat(RegExp.$1) + "" : t ? "1"
										: ""
							},
							set : function(e, t) {
								var n = e.style, r = e.currentStyle, i = h
										.isNumeric(t) ? "alpha(opacity=" + t
										* 100 + ")" : "", s = r && r.filter
										|| n.filter || "";
								n.zoom = 1;
								if ((t >= 1 || t === "")
										&& h.trim(s.replace(Ft, "")) === ""
										&& n.removeAttribute) {
									n.removeAttribute("filter");
									if (t === "" || r && !r.filter) {
										return
									}
								}
								n.filter = Ft.test(s) ? s.replace(Ft, i) : s
										+ " " + i
							}
						}
					}
					h.cssHooks.marginRight = jt(l.reliableMarginRight,
							function(e, t) {
								if (t) {
									return h.swap(e, {
										display : "inline-block"
									}, Ht, [ e, "marginRight" ])
								}
							});
					h
							.each(
									{
										margin : "",
										padding : "",
										border : "Width"
									},
									function(e, t) {
										h.cssHooks[e + t] = {
											expand : function(n) {
												var r = 0, i = {}, s = typeof n === "string" ? n
														.split(" ")
														: [ n ];
												for (; r < 4; r++) {
													i[e + X[r] + t] = s[r]
															|| s[r - 2] || s[0]
												}
												return i
											}
										};
										if (!_t.test(e)) {
											h.cssHooks[e + t].set = Jt
										}
									});
					h.fn.extend({
						css : function(e, t) {
							return $(this, function(e, t, n) {
								var r, i, s = {}, o = 0;
								if (h.isArray(t)) {
									r = Pt(e);
									i = t.length;
									for (; o < i; o++) {
										s[t[o]] = h.css(e, t[o], false, r)
									}
									return s
								}
								return n !== undefined ? h.style(e, t, n) : h
										.css(e, t)
							}, e, t, arguments.length > 1)
						},
						show : function() {
							return $t(this, true)
						},
						hide : function() {
							return $t(this)
						},
						toggle : function(e) {
							if (typeof e === "boolean") {
								return e ? this.show() : this.hide()
							}
							return this.each(function() {
								if (V(this)) {
									h(this).show()
								} else {
									h(this).hide()
								}
							})
						}
					});
					h.Tween = Gt;
					Gt.prototype = {
						constructor : Gt,
						init : function(e, t, n, r, i, s) {
							this.elem = e;
							this.prop = n;
							this.easing = i || "swing";
							this.options = t;
							this.start = this.now = this.cur();
							this.end = r;
							this.unit = s || (h.cssNumber[n] ? "" : "px")
						},
						cur : function() {
							var e = Gt.propHooks[this.prop];
							return e && e.get ? e.get(this)
									: Gt.propHooks._default.get(this)
						},
						run : function(e) {
							var t, n = Gt.propHooks[this.prop];
							if (this.options.duration) {
								this.pos = t = h.easing[this.easing](e,
										this.options.duration * e, 0, 1,
										this.options.duration)
							} else {
								this.pos = t = e
							}
							this.now = (this.end - this.start) * t + this.start;
							if (this.options.step) {
								this.options.step.call(this.elem, this.now,
										this)
							}
							if (n && n.set) {
								n.set(this)
							} else {
								Gt.propHooks._default.set(this)
							}
							return this
						}
					};
					Gt.prototype.init.prototype = Gt.prototype;
					Gt.propHooks = {
						_default : {
							get : function(e) {
								var t;
								if (e.elem[e.prop] != null
										&& (!e.elem.style || e.elem.style[e.prop] == null)) {
									return e.elem[e.prop]
								}
								t = h.css(e.elem, e.prop, "");
								return !t || t === "auto" ? 0 : t
							},
							set : function(e) {
								if (h.fx.step[e.prop]) {
									h.fx.step[e.prop](e)
								} else if (e.elem.style
										&& (e.elem.style[h.cssProps[e.prop]] != null || h.cssHooks[e.prop])) {
									h.style(e.elem, e.prop, e.now + e.unit)
								} else {
									e.elem[e.prop] = e.now
								}
							}
						}
					};
					Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
						set : function(e) {
							if (e.elem.nodeType && e.elem.parentNode) {
								e.elem[e.prop] = e.now
							}
						}
					};
					h.easing = {
						linear : function(e) {
							return e
						},
						swing : function(e) {
							return .5 - Math.cos(e * Math.PI) / 2
						}
					};
					h.fx = Gt.prototype.init;
					h.fx.step = {};
					var Yt, Zt, en = /^(?:toggle|show|hide)$/, tn = new RegExp(
							"^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"), nn = /queueHooks$/, rn = [ fn ], sn = {
						"*" : [ function(e, t) {
							var n = this.createTween(e, t), r = n.cur(), i = tn
									.exec(t), s = i && i[3]
									|| (h.cssNumber[e] ? "" : "px"), o = (h.cssNumber[e] || s !== "px"
									&& +r)
									&& tn.exec(h.css(n.elem, e)), u = 1, a = 20;
							if (o && o[3] !== s) {
								s = s || o[3];
								i = i || [];
								o = +r || 1;
								do {
									u = u || ".5";
									o = o / u;
									h.style(n.elem, e, o + s)
								} while (u !== (u = n.cur() / r) && u !== 1
										&& --a)
							}
							if (i) {
								o = n.start = +o || +r || 0;
								n.unit = s;
								n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]
							}
							return n
						} ]
					};
					h.Animation = h.extend(cn, {
						tweener : function(e, t) {
							if (h.isFunction(e)) {
								t = e;
								e = [ "*" ]
							} else {
								e = e.split(" ")
							}
							var n, r = 0, i = e.length;
							for (; r < i; r++) {
								n = e[r];
								sn[n] = sn[n] || [];
								sn[n].unshift(t)
							}
						},
						prefilter : function(e, t) {
							if (t) {
								rn.unshift(e)
							} else {
								rn.push(e)
							}
						}
					});
					h.speed = function(e, t, n) {
						var r = e && typeof e === "object" ? h.extend({}, e)
								: {
									complete : n || !n && t || h.isFunction(e)
											&& e,
									duration : e,
									easing : n && t || t && !h.isFunction(t)
											&& t
								};
						r.duration = h.fx.off ? 0
								: typeof r.duration === "number" ? r.duration
										: r.duration in h.fx.speeds ? h.fx.speeds[r.duration]
												: h.fx.speeds._default;
						if (r.queue == null || r.queue === true) {
							r.queue = "fx"
						}
						r.old = r.complete;
						r.complete = function() {
							if (h.isFunction(r.old)) {
								r.old.call(this)
							}
							if (r.queue) {
								h.dequeue(this, r.queue)
							}
						};
						return r
					};
					h.fn
							.extend({
								fadeTo : function(e, t, n, r) {
									return this.filter(V).css("opacity", 0)
											.show().end().animate({
												opacity : t
											}, e, n, r)
								},
								animate : function(e, t, n, r) {
									var i = h.isEmptyObject(e), s = h.speed(t,
											n, r), o = function() {
										var t = cn(this, h.extend({}, e), s);
										if (i || h._data(this, "finish")) {
											t.stop(true)
										}
									};
									o.finish = o;
									return i || s.queue === false ? this
											.each(o) : this.queue(s.queue, o)
								},
								stop : function(e, t, n) {
									var r = function(e) {
										var t = e.stop;
										delete e.stop;
										t(n)
									};
									if (typeof e !== "string") {
										n = t;
										t = e;
										e = undefined
									}
									if (t && e !== false) {
										this.queue(e || "fx", [])
									}
									return this
											.each(function() {
												var t = true, i = e != null
														&& e + "queueHooks", s = h.timers, o = h
														._data(this);
												if (i) {
													if (o[i] && o[i].stop) {
														r(o[i])
													}
												} else {
													for (i in o) {
														if (o[i] && o[i].stop
																&& nn.test(i)) {
															r(o[i])
														}
													}
												}
												for (i = s.length; i--;) {
													if (s[i].elem === this
															&& (e == null || s[i].queue === e)) {
														s[i].anim.stop(n);
														t = false;
														s.splice(i, 1)
													}
												}
												if (t || !n) {
													h.dequeue(this, e)
												}
											})
								},
								finish : function(e) {
									if (e !== false) {
										e = e || "fx"
									}
									return this
											.each(function() {
												var t, n = h._data(this), r = n[e
														+ "queue"], i = n[e
														+ "queueHooks"], s = h.timers, o = r ? r.length
														: 0;
												n.finish = true;
												h.queue(this, e, []);
												if (i && i.stop) {
													i.stop.call(this, true)
												}
												for (t = s.length; t--;) {
													if (s[t].elem === this
															&& s[t].queue === e) {
														s[t].anim.stop(true);
														s.splice(t, 1)
													}
												}
												for (t = 0; t < o; t++) {
													if (r[t] && r[t].finish) {
														r[t].finish.call(this)
													}
												}
												delete n.finish
											})
								}
							});
					h.each([ "toggle", "show", "hide" ], function(e, t) {
						var n = h.fn[t];
						h.fn[t] = function(e, r, i) {
							return e == null || typeof e === "boolean" ? n
									.apply(this, arguments) : this.animate(un(
									t, true), e, r, i)
						}
					});
					h.each({
						slideDown : un("show"),
						slideUp : un("hide"),
						slideToggle : un("toggle"),
						fadeIn : {
							opacity : "show"
						},
						fadeOut : {
							opacity : "hide"
						},
						fadeToggle : {
							opacity : "toggle"
						}
					}, function(e, t) {
						h.fn[e] = function(e, n, r) {
							return this.animate(t, e, n, r)
						}
					});
					h.timers = [];
					h.fx.tick = function() {
						var e, t = h.timers, n = 0;
						Yt = h.now();
						for (; n < t.length; n++) {
							e = t[n];
							if (!e() && t[n] === e) {
								t.splice(n--, 1)
							}
						}
						if (!t.length) {
							h.fx.stop()
						}
						Yt = undefined
					};
					h.fx.timer = function(e) {
						h.timers.push(e);
						if (e()) {
							h.fx.start()
						} else {
							h.timers.pop()
						}
					};
					h.fx.interval = 13;
					h.fx.start = function() {
						if (!Zt) {
							Zt = setInterval(h.fx.tick, h.fx.interval)
						}
					};
					h.fx.stop = function() {
						clearInterval(Zt);
						Zt = null
					};
					h.fx.speeds = {
						slow : 600,
						fast : 200,
						_default : 400
					};
					h.fn.delay = function(e, t) {
						e = h.fx ? h.fx.speeds[e] || e : e;
						t = t || "fx";
						return this.queue(t, function(t, n) {
							var r = setTimeout(t, e);
							n.stop = function() {
								clearTimeout(r)
							}
						})
					};
					(function() {
						var e, t, n, r, i;
						t = T.createElement("div");
						t.setAttribute("className", "t");
						t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
						r = t.getElementsByTagName("a")[0];
						n = T.createElement("select");
						i = n.appendChild(T.createElement("option"));
						e = t.getElementsByTagName("input")[0];
						r.style.cssText = "top:1px";
						l.getSetAttribute = t.className !== "t";
						l.style = /top/.test(r.getAttribute("style"));
						l.hrefNormalized = r.getAttribute("href") === "/a";
						l.checkOn = !!e.value;
						l.optSelected = i.selected;
						l.enctype = !!T.createElement("form").enctype;
						n.disabled = true;
						l.optDisabled = !i.disabled;
						e = T.createElement("input");
						e.setAttribute("value", "");
						l.input = e.getAttribute("value") === "";
						e.value = "t";
						e.setAttribute("type", "radio");
						l.radioValue = e.value === "t"
					})();
					var hn = /\r/g;
					h.fn
							.extend({
								val : function(e) {
									var t, n, r, i = this[0];
									if (!arguments.length) {
										if (i) {
											t = h.valHooks[i.type]
													|| h.valHooks[i.nodeName
															.toLowerCase()];
											if (t
													&& "get" in t
													&& (n = t.get(i, "value")) !== undefined) {
												return n
											}
											n = i.value;
											return typeof n === "string" ? n
													.replace(hn, "")
													: n == null ? "" : n
										}
										return
									}
									r = h.isFunction(e);
									return this
											.each(function(n) {
												var i;
												if (this.nodeType !== 1) {
													return
												}
												if (r) {
													i = e.call(this, n, h(this)
															.val())
												} else {
													i = e
												}
												if (i == null) {
													i = ""
												} else if (typeof i === "number") {
													i += ""
												} else if (h.isArray(i)) {
													i = h.map(i, function(e) {
														return e == null ? ""
																: e + ""
													})
												}
												t = h.valHooks[this.type]
														|| h.valHooks[this.nodeName
																.toLowerCase()];
												if (!t
														|| !("set" in t)
														|| t.set(this, i,
																"value") === undefined) {
													this.value = i
												}
											})
								}
							});
					h
							.extend({
								valHooks : {
									option : {
										get : function(e) {
											var t = h.find.attr(e, "value");
											return t != null ? t : h.trim(h
													.text(e))
										}
									},
									select : {
										get : function(e) {
											var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one"
													|| i < 0, o = s ? null : [], u = s ? i + 1
													: r.length, a = i < 0 ? u
													: s ? i : 0;
											for (; a < u; a++) {
												n = r[a];
												if ((n.selected || a === i)
														&& (l.optDisabled ? !n.disabled
																: n
																		.getAttribute("disabled") === null)
														&& (!n.parentNode.disabled || !h
																.nodeName(
																		n.parentNode,
																		"optgroup"))) {
													t = h(n).val();
													if (s) {
														return t
													}
													o.push(t)
												}
											}
											return o
										},
										set : function(e, t) {
											var n, r, i = e.options, s = h
													.makeArray(t), o = i.length;
											while (o--) {
												r = i[o];
												if (h.inArray(h.valHooks.option
														.get(r), s) >= 0) {
													try {
														r.selected = n = true
													} catch (u) {
														r.scrollHeight
													}
												} else {
													r.selected = false
												}
											}
											if (!n) {
												e.selectedIndex = -1
											}
											return i
										}
									}
								}
							});
					h
							.each(
									[ "radio", "checkbox" ],
									function() {
										h.valHooks[this] = {
											set : function(e, t) {
												if (h.isArray(t)) {
													return e.checked = h
															.inArray(
																	h(e).val(),
																	t) >= 0
												}
											}
										};
										if (!l.checkOn) {
											h.valHooks[this].get = function(e) {
												return e.getAttribute("value") === null ? "on"
														: e.value
											}
										}
									});
					var pn, dn, vn = h.expr.attrHandle, mn = /^(?:checked|selected)$/i, gn = l.getSetAttribute, yn = l.input;
					h.fn.extend({
						attr : function(e, t) {
							return $(this, h.attr, e, t, arguments.length > 1)
						},
						removeAttr : function(e) {
							return this.each(function() {
								h.removeAttr(this, e)
							})
						}
					});
					h
							.extend({
								attr : function(e, t, n) {
									var r, i, s = e.nodeType;
									if (!e || s === 3 || s === 8 || s === 2) {
										return
									}
									if (typeof e.getAttribute === B) {
										return h.prop(e, t, n)
									}
									if (s !== 1 || !h.isXMLDoc(e)) {
										t = t.toLowerCase();
										r = h.attrHooks[t]
												|| (h.expr.match.bool.test(t) ? dn
														: pn)
									}
									if (n !== undefined) {
										if (n === null) {
											h.removeAttr(e, t)
										} else if (r
												&& "set" in r
												&& (i = r.set(e, n, t)) !== undefined) {
											return i
										} else {
											e.setAttribute(t, n + "");
											return n
										}
									} else if (r && "get" in r
											&& (i = r.get(e, t)) !== null) {
										return i
									} else {
										i = h.find.attr(e, t);
										return i == null ? undefined : i
									}
								},
								removeAttr : function(e, t) {
									var n, r, i = 0, s = t && t.match(O);
									if (s && e.nodeType === 1) {
										while (n = s[i++]) {
											r = h.propFix[n] || n;
											if (h.expr.match.bool.test(n)) {
												if (yn && gn || !mn.test(n)) {
													e[r] = false
												} else {
													e[h.camelCase("default-"
															+ n)] = e[r] = false
												}
											} else {
												h.attr(e, n, "")
											}
											e.removeAttribute(gn ? n : r)
										}
									}
								},
								attrHooks : {
									type : {
										set : function(e, t) {
											if (!l.radioValue && t === "radio"
													&& h.nodeName(e, "input")) {
												var n = e.value;
												e.setAttribute("type", t);
												if (n) {
													e.value = n
												}
												return t
											}
										}
									}
								}
							});
					dn = {
						set : function(e, t, n) {
							if (t === false) {
								h.removeAttr(e, n)
							} else if (yn && gn || !mn.test(n)) {
								e.setAttribute(!gn && h.propFix[n] || n, n)
							} else {
								e[h.camelCase("default-" + n)] = e[n] = true
							}
							return n
						}
					};
					h.each(h.expr.match.bool.source.match(/\w+/g),
							function(e, t) {
								var n = vn[t] || h.find.attr;
								vn[t] = yn && gn || !mn.test(t) ? function(e,
										t, r) {
									var i, s;
									if (!r) {
										s = vn[t];
										vn[t] = i;
										i = n(e, t, r) != null ? t
												.toLowerCase() : null;
										vn[t] = s
									}
									return i
								}
										: function(e, t, n) {
											if (!n) {
												return e[h.camelCase("default-"
														+ t)] ? t.toLowerCase()
														: null
											}
										}
							});
					if (!yn || !gn) {
						h.attrHooks.value = {
							set : function(e, t, n) {
								if (h.nodeName(e, "input")) {
									e.defaultValue = t
								} else {
									return pn && pn.set(e, t, n)
								}
							}
						}
					}
					if (!gn) {
						pn = {
							set : function(e, t, n) {
								var r = e.getAttributeNode(n);
								if (!r) {
									e.setAttributeNode(r = e.ownerDocument
											.createAttribute(n))
								}
								r.value = t += "";
								if (n === "value" || t === e.getAttribute(n)) {
									return t
								}
							}
						};
						vn.id = vn.name = vn.coords = function(e, t, n) {
							var r;
							if (!n) {
								return (r = e.getAttributeNode(t))
										&& r.value !== "" ? r.value : null
							}
						};
						h.valHooks.button = {
							get : function(e, t) {
								var n = e.getAttributeNode(t);
								if (n && n.specified) {
									return n.value
								}
							},
							set : pn.set
						};
						h.attrHooks.contenteditable = {
							set : function(e, t, n) {
								pn.set(e, t === "" ? false : t, n)
							}
						};
						h.each([ "width", "height" ], function(e, t) {
							h.attrHooks[t] = {
								set : function(e, n) {
									if (n === "") {
										e.setAttribute(t, "auto");
										return n
									}
								}
							}
						})
					}
					if (!l.style) {
						h.attrHooks.style = {
							get : function(e) {
								return e.style.cssText || undefined
							},
							set : function(e, t) {
								return e.style.cssText = t + ""
							}
						}
					}
					var bn = /^(?:input|select|textarea|button|object)$/i, wn = /^(?:a|area)$/i;
					h.fn.extend({
						prop : function(e, t) {
							return $(this, h.prop, e, t, arguments.length > 1)
						},
						removeProp : function(e) {
							e = h.propFix[e] || e;
							return this.each(function() {
								try {
									this[e] = undefined;
									delete this[e]
								} catch (t) {
								}
							})
						}
					});
					h
							.extend({
								propFix : {
									"for" : "htmlFor",
									"class" : "className"
								},
								prop : function(e, t, n) {
									var r, i, s, o = e.nodeType;
									if (!e || o === 3 || o === 8 || o === 2) {
										return
									}
									s = o !== 1 || !h.isXMLDoc(e);
									if (s) {
										t = h.propFix[t] || t;
										i = h.propHooks[t]
									}
									if (n !== undefined) {
										return i
												&& "set" in i
												&& (r = i.set(e, n, t)) !== undefined ? r
												: e[t] = n
									} else {
										return i && "get" in i
												&& (r = i.get(e, t)) !== null ? r
												: e[t]
									}
								},
								propHooks : {
									tabIndex : {
										get : function(e) {
											var t = h.find.attr(e, "tabindex");
											return t ? parseInt(t, 10) : bn
													.test(e.nodeName)
													|| wn.test(e.nodeName)
													&& e.href ? 0 : -1
										}
									}
								}
							});
					if (!l.hrefNormalized) {
						h.each([ "href", "src" ], function(e, t) {
							h.propHooks[t] = {
								get : function(e) {
									return e.getAttribute(t, 4)
								}
							}
						})
					}
					if (!l.optSelected) {
						h.propHooks.selected = {
							get : function(e) {
								var t = e.parentNode;
								if (t) {
									t.selectedIndex;
									if (t.parentNode) {
										t.parentNode.selectedIndex
									}
								}
								return null
							}
						}
					}
					h.each([ "tabIndex", "readOnly", "maxLength",
							"cellSpacing", "cellPadding", "rowSpan", "colSpan",
							"useMap", "frameBorder", "contentEditable" ],
							function() {
								h.propFix[this.toLowerCase()] = this
							});
					if (!l.enctype) {
						h.propFix.enctype = "encoding"
					}
					var En = /[\t\r\n\f]/g;
					h.fn
							.extend({
								addClass : function(e) {
									var t, n, r, i, s, o, u = 0, a = this.length, f = typeof e === "string"
											&& e;
									if (h.isFunction(e)) {
										return this.each(function(t) {
											h(this).addClass(
													e.call(this, t,
															this.className))
										})
									}
									if (f) {
										t = (e || "").match(O) || [];
										for (; u < a; u++) {
											n = this[u];
											r = n.nodeType === 1
													&& (n.className ? (" "
															+ n.className + " ")
															.replace(En, " ")
															: " ");
											if (r) {
												s = 0;
												while (i = t[s++]) {
													if (r
															.indexOf(" " + i
																	+ " ") < 0) {
														r += i + " "
													}
												}
												o = h.trim(r);
												if (n.className !== o) {
													n.className = o
												}
											}
										}
									}
									return this
								},
								removeClass : function(e) {
									var t, n, r, i, s, o, u = 0, a = this.length, f = arguments.length === 0
											|| typeof e === "string" && e;
									if (h.isFunction(e)) {
										return this.each(function(t) {
											h(this).removeClass(
													e.call(this, t,
															this.className))
										})
									}
									if (f) {
										t = (e || "").match(O) || [];
										for (; u < a; u++) {
											n = this[u];
											r = n.nodeType === 1
													&& (n.className ? (" "
															+ n.className + " ")
															.replace(En, " ")
															: "");
											if (r) {
												s = 0;
												while (i = t[s++]) {
													while (r.indexOf(" " + i
															+ " ") >= 0) {
														r = r.replace(" " + i
																+ " ", " ")
													}
												}
												o = e ? h.trim(r) : "";
												if (n.className !== o) {
													n.className = o
												}
											}
										}
									}
									return this
								},
								toggleClass : function(e, t) {
									var n = typeof e;
									if (typeof t === "boolean"
											&& n === "string") {
										return t ? this.addClass(e) : this
												.removeClass(e)
									}
									if (h.isFunction(e)) {
										return this.each(function(n) {
											h(this).toggleClass(
													e.call(this, n,
															this.className, t),
													t)
										})
									}
									return this.each(function() {
										if (n === "string") {
											var t, r = 0, i = h(this), s = e
													.match(O)
													|| [];
											while (t = s[r++]) {
												if (i.hasClass(t)) {
													i.removeClass(t)
												} else {
													i.addClass(t)
												}
											}
										} else if (n === B || n === "boolean") {
											if (this.className) {
												h._data(this, "__className__",
														this.className)
											}
											this.className = this.className
													|| e === false ? "" : h
													._data(this,
															"__className__")
													|| ""
										}
									})
								},
								hasClass : function(e) {
									var t = " " + e + " ", n = 0, r = this.length;
									for (; n < r; n++) {
										if (this[n].nodeType === 1
												&& (" " + this[n].className + " ")
														.replace(En, " ")
														.indexOf(t) >= 0) {
											return true
										}
									}
									return false
								}
							});
					h
							.each(
									("blur focus focusin focusout load resize scroll unload click dblclick "
											+ "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "
											+ "change select submit keydown keypress keyup error contextmenu")
											.split(" "), function(e, t) {
										h.fn[t] = function(e, n) {
											return arguments.length > 0 ? this
													.on(t, null, e, n) : this
													.trigger(t)
										}
									});
					h.fn.extend({
						hover : function(e, t) {
							return this.mouseenter(e).mouseleave(t || e)
						},
						bind : function(e, t, n) {
							return this.on(e, null, t, n)
						},
						unbind : function(e, t) {
							return this.off(e, null, t)
						},
						delegate : function(e, t, n, r) {
							return this.on(t, e, n, r)
						},
						undelegate : function(e, t, n) {
							return arguments.length === 1 ? this.off(e, "**")
									: this.off(t, e || "**", n)
						}
					});
					var Sn = h.now();
					var xn = /\?/;
					var Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
					h.parseJSON = function(t) {
						if (e.JSON && e.JSON.parse) {
							return e.JSON.parse(t + "")
						}
						var n, r = null, i = h.trim(t + "");
						return i && !h.trim(i.replace(Tn, function(e, t, i, s) {
							if (n && t) {
								r = 0
							}
							if (r === 0) {
								return e
							}
							n = i || t;
							r += !s - !i;
							return ""
						})) ? Function("return " + i)() : h
								.error("Invalid JSON: " + t)
					};
					h.parseXML = function(t) {
						var n, r;
						if (!t || typeof t !== "string") {
							return null
						}
						try {
							if (e.DOMParser) {
								r = new DOMParser;
								n = r.parseFromString(t, "text/xml")
							} else {
								n = new ActiveXObject("Microsoft.XMLDOM");
								n.async = "false";
								n.loadXML(t)
							}
						} catch (i) {
							n = undefined
						}
						if (!n || !n.documentElement
								|| n.getElementsByTagName("parsererror").length) {
							h.error("Invalid XML: " + t)
						}
						return n
					};
					var Nn, Cn, kn = /#.*$/, Ln = /([?&])_=[^&]*/, An = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mn = /^(?:GET|HEAD)$/, _n = /^\/\//, Dn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Pn = {}, Hn = {}, Bn = "*/"
							.concat("*");
					try {
						Cn = location.href
					} catch (jn) {
						Cn = T.createElement("a");
						Cn.href = "";
						Cn = Cn.href
					}
					Nn = Dn.exec(Cn.toLowerCase()) || [];
					h
							.extend({
								active : 0,
								lastModified : {},
								etag : {},
								ajaxSettings : {
									url : Cn,
									type : "GET",
									isLocal : On.test(Nn[1]),
									global : true,
									processData : true,
									async : true,
									contentType : "application/x-www-form-urlencoded; charset=UTF-8",
									accepts : {
										"*" : Bn,
										text : "text/plain",
										html : "text/html",
										xml : "application/xml, text/xml",
										json : "application/json, text/javascript"
									},
									contents : {
										xml : /xml/,
										html : /html/,
										json : /json/
									},
									responseFields : {
										xml : "responseXML",
										text : "responseText",
										json : "responseJSON"
									},
									converters : {
										"* text" : String,
										"text html" : true,
										"text json" : h.parseJSON,
										"text xml" : h.parseXML
									},
									flatOptions : {
										url : true,
										context : true
									}
								},
								ajaxSetup : function(e, t) {
									return t ? qn(qn(e, h.ajaxSettings), t)
											: qn(h.ajaxSettings, e)
								},
								ajaxPrefilter : Fn(Pn),
								ajaxTransport : Fn(Hn),
								ajax : function(e, t) {
									function x(e, t, n, r) {
										var f, g, y, w, S, x = t;
										if (b === 2) {
											return
										}
										b = 2;
										if (o) {
											clearTimeout(o)
										}
										a = undefined;
										s = r || "";
										E.readyState = e > 0 ? 4 : 0;
										f = e >= 200 && e < 300 || e === 304;
										if (n) {
											w = Rn(l, E, n)
										}
										w = Un(l, w, E, f);
										if (f) {
											if (l.ifModified) {
												S = E
														.getResponseHeader("Last-Modified");
												if (S) {
													h.lastModified[i] = S
												}
												S = E.getResponseHeader("etag");
												if (S) {
													h.etag[i] = S
												}
											}
											if (e === 204 || l.type === "HEAD") {
												x = "nocontent"
											} else if (e === 304) {
												x = "notmodified"
											} else {
												x = w.state;
												g = w.data;
												y = w.error;
												f = !y
											}
										} else {
											y = x;
											if (e || !x) {
												x = "error";
												if (e < 0) {
													e = 0
												}
											}
										}
										E.status = e;
										E.statusText = (t || x) + "";
										if (f) {
											d.resolveWith(c, [ g, x, E ])
										} else {
											d.rejectWith(c, [ E, x, y ])
										}
										E.statusCode(m);
										m = undefined;
										if (u) {
											p.trigger(f ? "ajaxSuccess"
													: "ajaxError", [ E, l,
													f ? g : y ])
										}
										v.fireWith(c, [ E, x ]);
										if (u) {
											p.trigger("ajaxComplete", [ E, l ]);
											if (!--h.active) {
												h.event.trigger("ajaxStop")
											}
										}
									}
									if (typeof e === "object") {
										t = e;
										e = undefined
									}
									t = t || {};
									var n, r, i, s, o, u, a, f, l = h
											.ajaxSetup({}, t), c = l.context
											|| l, p = l.context
											&& (c.nodeType || c.jquery) ? h(c)
											: h.event, d = h.Deferred(), v = h
											.Callbacks("once memory"), m = l.statusCode
											|| {}, g = {}, y = {}, b = 0, w = "canceled", E = {
										readyState : 0,
										getResponseHeader : function(e) {
											var t;
											if (b === 2) {
												if (!f) {
													f = {};
													while (t = An.exec(s)) {
														f[t[1].toLowerCase()] = t[2]
													}
												}
												t = f[e.toLowerCase()]
											}
											return t == null ? null : t
										},
										getAllResponseHeaders : function() {
											return b === 2 ? s : null
										},
										setRequestHeader : function(e, t) {
											var n = e.toLowerCase();
											if (!b) {
												e = y[n] = y[n] || e;
												g[e] = t
											}
											return this
										},
										overrideMimeType : function(e) {
											if (!b) {
												l.mimeType = e
											}
											return this
										},
										statusCode : function(e) {
											var t;
											if (e) {
												if (b < 2) {
													for (t in e) {
														m[t] = [ m[t], e[t] ]
													}
												} else {
													E.always(e[E.status])
												}
											}
											return this
										},
										abort : function(e) {
											var t = e || w;
											if (a) {
												a.abort(t)
											}
											x(0, t);
											return this
										}
									};
									d.promise(E).complete = v.add;
									E.success = E.done;
									E.error = E.fail;
									l.url = ((e || l.url || Cn) + "").replace(
											kn, "").replace(_n, Nn[1] + "//");
									l.type = t.method || t.type || l.method
											|| l.type;
									l.dataTypes = h.trim(l.dataType || "*")
											.toLowerCase().match(O)
											|| [ "" ];
									if (l.crossDomain == null) {
										n = Dn.exec(l.url.toLowerCase());
										l.crossDomain = !!(n && (n[1] !== Nn[1]
												|| n[2] !== Nn[2] || (n[3] || (n[1] === "http:" ? "80"
												: "443")) !== (Nn[3] || (Nn[1] === "http:" ? "80"
												: "443"))))
									}
									if (l.data && l.processData
											&& typeof l.data !== "string") {
										l.data = h.param(l.data, l.traditional)
									}
									In(Pn, l, t, E);
									if (b === 2) {
										return E
									}
									u = l.global;
									if (u && h.active++ === 0) {
										h.event.trigger("ajaxStart")
									}
									l.type = l.type.toUpperCase();
									l.hasContent = !Mn.test(l.type);
									i = l.url;
									if (!l.hasContent) {
										if (l.data) {
											i = l.url += (xn.test(i) ? "&"
													: "?")
													+ l.data;
											delete l.data
										}
										if (l.cache === false) {
											l.url = Ln.test(i) ? i.replace(Ln,
													"$1_=" + Sn++) : i
													+ (xn.test(i) ? "&" : "?")
													+ "_=" + Sn++
										}
									}
									if (l.ifModified) {
										if (h.lastModified[i]) {
											E.setRequestHeader(
													"If-Modified-Since",
													h.lastModified[i])
										}
										if (h.etag[i]) {
											E.setRequestHeader("If-None-Match",
													h.etag[i])
										}
									}
									if (l.data && l.hasContent
											&& l.contentType !== false
											|| t.contentType) {
										E.setRequestHeader("Content-Type",
												l.contentType)
									}
									E
											.setRequestHeader(
													"Accept",
													l.dataTypes[0]
															&& l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]]
															+ (l.dataTypes[0] !== "*" ? ", "
																	+ Bn
																	+ "; q=0.01"
																	: "")
															: l.accepts["*"]);
									for (r in l.headers) {
										E.setRequestHeader(r, l.headers[r])
									}
									if (l.beforeSend
											&& (l.beforeSend.call(c, E, l) === false || b === 2)) {
										return E.abort()
									}
									w = "abort";
									for (r in {
										success : 1,
										error : 1,
										complete : 1
									}) {
										E[r](l[r])
									}
									a = In(Hn, l, t, E);
									if (!a) {
										x(-1, "No Transport")
									} else {
										E.readyState = 1;
										if (u) {
											p.trigger("ajaxSend", [ E, l ])
										}
										if (l.async && l.timeout > 0) {
											o = setTimeout(function() {
												E.abort("timeout")
											}, l.timeout)
										}
										try {
											b = 1;
											a.send(g, x)
										} catch (S) {
											if (b < 2) {
												x(-1, S)
											} else {
												throw S
											}
										}
									}
									return E
								},
								getJSON : function(e, t, n) {
									return h.get(e, t, n, "json")
								},
								getScript : function(e, t) {
									return h.get(e, undefined, t, "script")
								}
							});
					h.each([ "get", "post" ], function(e, t) {
						h[t] = function(e, n, r, i) {
							if (h.isFunction(n)) {
								i = i || r;
								r = n;
								n = undefined
							}
							return h.ajax({
								url : e,
								type : t,
								dataType : i,
								data : n,
								success : r
							})
						}
					});
					h.each([ "ajaxStart", "ajaxStop", "ajaxComplete",
							"ajaxError", "ajaxSuccess", "ajaxSend" ], function(
							e, t) {
						h.fn[t] = function(e) {
							return this.on(t, e)
						}
					});
					h._evalUrl = function(e) {
						return h.ajax({
							url : e,
							type : "GET",
							dataType : "script",
							async : false,
							global : false,
							"throws" : true
						})
					};
					h.fn
							.extend({
								wrapAll : function(e) {
									if (h.isFunction(e)) {
										return this.each(function(t) {
											h(this).wrapAll(e.call(this, t))
										})
									}
									if (this[0]) {
										var t = h(e, this[0].ownerDocument).eq(
												0).clone(true);
										if (this[0].parentNode) {
											t.insertBefore(this[0])
										}
										t
												.map(
														function() {
															var e = this;
															while (e.firstChild
																	&& e.firstChild.nodeType === 1) {
																e = e.firstChild
															}
															return e
														}).append(this)
									}
									return this
								},
								wrapInner : function(e) {
									if (h.isFunction(e)) {
										return this.each(function(t) {
											h(this).wrapInner(e.call(this, t))
										})
									}
									return this.each(function() {
										var t = h(this), n = t.contents();
										if (n.length) {
											n.wrapAll(e)
										} else {
											t.append(e)
										}
									})
								},
								wrap : function(e) {
									var t = h.isFunction(e);
									return this
											.each(function(n) {
												h(this)
														.wrapAll(
																t ? e
																		.call(
																				this,
																				n)
																		: e)
											})
								},
								unwrap : function() {
									return this.parent().each(
											function() {
												if (!h.nodeName(this, "body")) {
													h(this).replaceWith(
															this.childNodes)
												}
											}).end()
								}
							});
					h.expr.filters.hidden = function(e) {
						return e.offsetWidth <= 0
								&& e.offsetHeight <= 0
								|| !l.reliableHiddenOffsets()
								&& (e.style && e.style.display || h.css(e,
										"display")) === "none"
					};
					h.expr.filters.visible = function(e) {
						return !h.expr.filters.hidden(e)
					};
					var zn = /%20/g, Wn = /\[\]$/, Xn = /\r?\n/g, Vn = /^(?:submit|button|image|reset|file)$/i, $n = /^(?:input|select|textarea|keygen)/i;
					h.param = function(e, t) {
						var n, r = [], i = function(e, t) {
							t = h.isFunction(t) ? t() : t == null ? "" : t;
							r[r.length] = encodeURIComponent(e) + "="
									+ encodeURIComponent(t)
						};
						if (t === undefined) {
							t = h.ajaxSettings && h.ajaxSettings.traditional
						}
						if (h.isArray(e) || e.jquery && !h.isPlainObject(e)) {
							h.each(e, function() {
								i(this.name, this.value)
							})
						} else {
							for (n in e) {
								Jn(n, e[n], t, i)
							}
						}
						return r.join("&").replace(zn, "+")
					};
					h.fn
							.extend({
								serialize : function() {
									return h.param(this.serializeArray())
								},
								serializeArray : function() {
									return this
											.map(
													function() {
														var e = h.prop(this,
																"elements");
														return e ? h
																.makeArray(e)
																: this
													})
											.filter(
													function() {
														var e = this.type;
														return this.name
																&& !h(this)
																		.is(
																				":disabled")
																&& $n
																		.test(this.nodeName)
																&& !Vn.test(e)
																&& (this.checked || !J
																		.test(e))
													})
											.map(
													function(e, t) {
														var n = h(this).val();
														return n == null ? null
																: h.isArray(n) ? h
																		.map(
																				n,
																				function(
																						e) {
																					return {
																						name : t.name,
																						value : e
																								.replace(
																										Xn,
																										"\r\n")
																					}
																				})
																		: {
																			name : t.name,
																			value : n
																					.replace(
																							Xn,
																							"\r\n")
																		}
													}).get()
								}
							});
					h.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
						return !this.isLocal
								&& /^(get|post|head|put|delete|options)$/i
										.test(this.type) && Yn() || Zn()
					}
							: Yn;
					var Kn = 0, Qn = {}, Gn = h.ajaxSettings.xhr();
					if (e.ActiveXObject) {
						h(e).on("unload", function() {
							for ( var e in Qn) {
								Qn[e](undefined, true)
							}
						})
					}
					l.cors = !!Gn && "withCredentials" in Gn;
					Gn = l.ajax = !!Gn;
					if (Gn) {
						h
								.ajaxTransport(function(e) {
									if (!e.crossDomain || l.cors) {
										var t;
										return {
											send : function(n, r) {
												var i, s = e.xhr(), o = ++Kn;
												s.open(e.type, e.url, e.async,
														e.username, e.password);
												if (e.xhrFields) {
													for (i in e.xhrFields) {
														s[i] = e.xhrFields[i]
													}
												}
												if (e.mimeType
														&& s.overrideMimeType) {
													s
															.overrideMimeType(e.mimeType)
												}
												if (!e.crossDomain
														&& !n["X-Requested-With"]) {
													n["X-Requested-With"] = "XMLHttpRequest"
												}
												for (i in n) {
													if (n[i] !== undefined) {
														s.setRequestHeader(i,
																n[i] + "")
													}
												}
												s.send(e.hasContent && e.data
														|| null);
												t = function(n, i) {
													var u, a, f;
													if (t
															&& (i || s.readyState === 4)) {
														delete Qn[o];
														t = undefined;
														s.onreadystatechange = h.noop;
														if (i) {
															if (s.readyState !== 4) {
																s.abort()
															}
														} else {
															f = {};
															u = s.status;
															if (typeof s.responseText === "string") {
																f.text = s.responseText
															}
															try {
																a = s.statusText
															} catch (l) {
																a = ""
															}
															if (!u
																	&& e.isLocal
																	&& !e.crossDomain) {
																u = f.text ? 200
																		: 404
															} else if (u === 1223) {
																u = 204
															}
														}
													}
													if (f) {
														r(
																u,
																a,
																f,
																s
																		.getAllResponseHeaders())
													}
												};
												if (!e.async) {
													t()
												} else if (s.readyState === 4) {
													setTimeout(t)
												} else {
													s.onreadystatechange = Qn[o] = t
												}
											},
											abort : function() {
												if (t) {
													t(undefined, true)
												}
											}
										}
									}
								})
					}
					h
							.ajaxSetup({
								accepts : {
									script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
								},
								contents : {
									script : /(?:java|ecma)script/
								},
								converters : {
									"text script" : function(e) {
										h.globalEval(e);
										return e
									}
								}
							});
					h.ajaxPrefilter("script", function(e) {
						if (e.cache === undefined) {
							e.cache = false
						}
						if (e.crossDomain) {
							e.type = "GET";
							e.global = false
						}
					});
					h
							.ajaxTransport(
									"script",
									function(e) {
										if (e.crossDomain) {
											var t, n = T.head || h("head")[0]
													|| T.documentElement;
											return {
												send : function(r, i) {
													t = T
															.createElement("script");
													t.async = true;
													if (e.scriptCharset) {
														t.charset = e.scriptCharset
													}
													t.src = e.url;
													t.onload = t.onreadystatechange = function(
															e, n) {
														if (n
																|| !t.readyState
																|| /loaded|complete/
																		.test(t.readyState)) {
															t.onload = t.onreadystatechange = null;
															if (t.parentNode) {
																t.parentNode
																		.removeChild(t)
															}
															t = null;
															if (!n) {
																i(200,
																		"success")
															}
														}
													};
													n.insertBefore(t,
															n.firstChild)
												},
												abort : function() {
													if (t) {
														t.onload(undefined,
																true)
													}
												}
											}
										}
									});
					var er = [], tr = /(=)\?(?=&|$)|\?\?/;
					h.ajaxSetup({
						jsonp : "callback",
						jsonpCallback : function() {
							var e = er.pop() || h.expando + "_" + Sn++;
							this[e] = true;
							return e
						}
					});
					h
							.ajaxPrefilter(
									"json jsonp",
									function(t, n, r) {
										var i, s, o, u = t.jsonp !== false
												&& (tr.test(t.url) ? "url"
														: typeof t.data === "string"
																&& !(t.contentType || "")
																		.indexOf("application/x-www-form-urlencoded")
																&& tr
																		.test(t.data)
																&& "data");
										if (u || t.dataTypes[0] === "jsonp") {
											i = t.jsonpCallback = h
													.isFunction(t.jsonpCallback) ? t
													.jsonpCallback()
													: t.jsonpCallback;
											if (u) {
												t[u] = t[u].replace(tr, "$1"
														+ i)
											} else if (t.jsonp !== false) {
												t.url += (xn.test(t.url) ? "&"
														: "?")
														+ t.jsonp + "=" + i
											}
											t.converters["script json"] = function() {
												if (!o) {
													h
															.error(i
																	+ " was not called")
												}
												return o[0]
											};
											t.dataTypes[0] = "json";
											s = e[i];
											e[i] = function() {
												o = arguments
											};
											r
													.always(function() {
														e[i] = s;
														if (t[i]) {
															t.jsonpCallback = n.jsonpCallback;
															er.push(i)
														}
														if (o
																&& h
																		.isFunction(s)) {
															s(o[0])
														}
														o = s = undefined
													});
											return "script"
										}
									});
					h.parseHTML = function(e, t, n) {
						if (!e || typeof e !== "string") {
							return null
						}
						if (typeof t === "boolean") {
							n = t;
							t = false
						}
						t = t || T;
						var r = w.exec(e), i = !n && [];
						if (r) {
							return [ t.createElement(r[1]) ]
						}
						r = h.buildFragment([ e ], t, i);
						if (i && i.length) {
							h(i).remove()
						}
						return h.merge([], r.childNodes)
					};
					var nr = h.fn.load;
					h.fn.load = function(e, t, n) {
						if (typeof e !== "string" && nr) {
							return nr.apply(this, arguments)
						}
						var r, i, s, o = this, u = e.indexOf(" ");
						if (u >= 0) {
							r = h.trim(e.slice(u, e.length));
							e = e.slice(0, u)
						}
						if (h.isFunction(t)) {
							n = t;
							t = undefined
						} else if (t && typeof t === "object") {
							s = "POST"
						}
						if (o.length > 0) {
							h.ajax({
								url : e,
								type : s,
								dataType : "html",
								data : t
							}).done(
									function(e) {
										i = arguments;
										o.html(r ? h("<div>").append(
												h.parseHTML(e)).find(r) : e)
									}).complete(n && function(e, t) {
								o.each(n, i || [ e.responseText, t, e ])
							})
						}
						return this
					};
					h.expr.filters.animated = function(e) {
						return h.grep(h.timers, function(t) {
							return e === t.elem
						}).length
					};
					var rr = e.document.documentElement;
					h.offset = {
						setOffset : function(e, t, n) {
							var r, i, s, o, u, a, f, l = h.css(e, "position"), c = h(e), p = {};
							if (l === "static") {
								e.style.position = "relative"
							}
							u = c.offset();
							s = h.css(e, "top");
							a = h.css(e, "left");
							f = (l === "absolute" || l === "fixed")
									&& h.inArray("auto", [ s, a ]) > -1;
							if (f) {
								r = c.position();
								o = r.top;
								i = r.left
							} else {
								o = parseFloat(s) || 0;
								i = parseFloat(a) || 0
							}
							if (h.isFunction(t)) {
								t = t.call(e, n, u)
							}
							if (t.top != null) {
								p.top = t.top - u.top + o
							}
							if (t.left != null) {
								p.left = t.left - u.left + i
							}
							if ("using" in t) {
								t.using.call(e, p)
							} else {
								c.css(p)
							}
						}
					};
					h.fn.extend({
						offset : function(e) {
							if (arguments.length) {
								return e === undefined ? this : this
										.each(function(t) {
											h.offset.setOffset(this, e, t)
										})
							}
							var t, n, r = {
								top : 0,
								left : 0
							}, i = this[0], s = i && i.ownerDocument;
							if (!s) {
								return
							}
							t = s.documentElement;
							if (!h.contains(t, i)) {
								return r
							}
							if (typeof i.getBoundingClientRect !== B) {
								r = i.getBoundingClientRect()
							}
							n = ir(s);
							return {
								top : r.top + (n.pageYOffset || t.scrollTop)
										- (t.clientTop || 0),
								left : r.left + (n.pageXOffset || t.scrollLeft)
										- (t.clientLeft || 0)
							}
						},
						position : function() {
							if (!this[0]) {
								return
							}
							var e, t, n = {
								top : 0,
								left : 0
							}, r = this[0];
							if (h.css(r, "position") === "fixed") {
								t = r.getBoundingClientRect()
							} else {
								e = this.offsetParent();
								t = this.offset();
								if (!h.nodeName(e[0], "html")) {
									n = e.offset()
								}
								n.top += h.css(e[0], "borderTopWidth", true);
								n.left += h.css(e[0], "borderLeftWidth", true)
							}
							return {
								top : t.top - n.top
										- h.css(r, "marginTop", true),
								left : t.left - n.left
										- h.css(r, "marginLeft", true)
							}
						},
						offsetParent : function() {
							return this.map(function() {
								var e = this.offsetParent || rr;
								while (e && !h.nodeName(e, "html")
										&& h.css(e, "position") === "static") {
									e = e.offsetParent
								}
								return e || rr
							})
						}
					});
					h.each({
						scrollLeft : "pageXOffset",
						scrollTop : "pageYOffset"
					}, function(e, t) {
						var n = /Y/.test(t);
						h.fn[e] = function(r) {
							return $(this, function(e, r, i) {
								var s = ir(e);
								if (i === undefined) {
									return s ? t in s ? s[t]
											: s.document.documentElement[r]
											: e[r]
								}
								if (s) {
									s.scrollTo(!n ? i : h(s).scrollLeft(),
											n ? i : h(s).scrollTop())
								} else {
									e[r] = i
								}
							}, e, r, arguments.length, null)
						}
					});
					h.each([ "top", "left" ], function(e, t) {
						h.cssHooks[t] = jt(l.pixelPosition, function(e, n) {
							if (n) {
								n = Ht(e, t);
								return Dt.test(n) ? h(e).position()[t] + "px"
										: n
							}
						})
					});
					h
							.each(
									{
										Height : "height",
										Width : "width"
									},
									function(e, t) {
										h
												.each(
														{
															padding : "inner"
																	+ e,
															content : t,
															"" : "outer" + e
														},
														function(n, r) {
															h.fn[r] = function(
																	r, i) {
																var s = arguments.length
																		&& (n || typeof r !== "boolean"), o = n
																		|| (r === true
																				|| i === true ? "margin"
																				: "border");
																return $(
																		this,
																		function(
																				t,
																				n,
																				r) {
																			var i;
																			if (h
																					.isWindow(t)) {
																				return t.document.documentElement["client"
																						+ e]
																			}
																			if (t.nodeType === 9) {
																				i = t.documentElement;
																				return Math
																						.max(
																								t.body["scroll"
																										+ e],
																								i["scroll"
																										+ e],
																								t.body["offset"
																										+ e],
																								i["offset"
																										+ e],
																								i["client"
																										+ e])
																			}
																			return r === undefined ? h
																					.css(
																							t,
																							n,
																							o)
																					: h
																							.style(
																									t,
																									n,
																									r,
																									o)
																		},
																		t,
																		s ? r
																				: undefined,
																		s, null)
															}
														})
									});
					h.fn.size = function() {
						return this.length
					};
					h.fn.andSelf = h.fn.addBack;
					if (typeof define === "function" && define.amd) {
						define("jquery", [], function() {
							return h
						})
					}
					var sr = e.jQuery, or = e.$;
					h.noConflict = function(t) {
						if (e.$ === h) {
							e.$ = or
						}
						if (t && e.jQuery === h) {
							e.jQuery = sr
						}
						return h
					};
					if (typeof t === B) {
						e.jQuery = e.$ = h
					}
					return h
				});
+function(e) {
	"use strict";
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.affix");
			var s = typeof n == "object" && n;
			if (!i)
				r.data("bs.affix", i = new t(this, s));
			if (typeof n == "string")
				i[n]()
		})
	}
	var t = function(n, r) {
		this.options = e.extend({}, t.DEFAULTS, r);
		this.$target = e(this.options.target).on("scroll.bs.affix.data-api",
				e.proxy(this.checkPosition, this)).on(
				"click.bs.affix.data-api",
				e.proxy(this.checkPositionWithEventLoop, this));
		this.$element = e(n);
		this.affixed = this.unpin = this.pinnedOffset = null;
		this.checkPosition()
	};
	t.VERSION = "3.3.2";
	t.RESET = "affix affix-top affix-bottom";
	t.DEFAULTS = {
		offset : 0,
		target : window
	};
	t.prototype.getState = function(e, t, n, r) {
		var i = this.$target.scrollTop();
		var s = this.$element.offset();
		var o = this.$target.height();
		if (n != null && this.affixed == "top")
			return i < n ? "top" : false;
		if (this.affixed == "bottom") {
			if (n != null)
				return i + this.unpin <= s.top ? false : "bottom";
			return i + o <= e - r ? false : "bottom"
		}
		var u = this.affixed == null;
		var a = u ? i : s.top;
		var f = u ? o : t;
		if (n != null && i <= n)
			return "top";
		if (r != null && a + f >= e - r)
			return "bottom";
		return false
	};
	t.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset)
			return this.pinnedOffset;
		this.$element.removeClass(t.RESET).addClass("affix");
		var e = this.$target.scrollTop();
		var n = this.$element.offset();
		return this.pinnedOffset = n.top - e
	};
	t.prototype.checkPositionWithEventLoop = function() {
		setTimeout(e.proxy(this.checkPosition, this), 1)
	};
	t.prototype.checkPosition = function() {
		if (!this.$element.is(":visible"))
			return;
		var n = this.$element.height();
		var r = this.options.offset;
		var i = r.top;
		var s = r.bottom;
		var o = e("body").height();
		if (typeof r != "object")
			s = i = r;
		if (typeof i == "function")
			i = r.top(this.$element);
		if (typeof s == "function")
			s = r.bottom(this.$element);
		var u = this.getState(o, n, i, s);
		if (this.affixed != u) {
			if (this.unpin != null)
				this.$element.css("top", "");
			var a = "affix" + (u ? "-" + u : "");
			var f = e.Event(a + ".bs.affix");
			this.$element.trigger(f);
			if (f.isDefaultPrevented())
				return;
			this.affixed = u;
			this.unpin = u == "bottom" ? this.getPinnedOffset() : null;
			this.$element.removeClass(t.RESET).addClass(a).trigger(
					a.replace("affix", "affixed") + ".bs.affix")
		}
		if (u == "bottom") {
			this.$element.offset({
				top : o - n - s
			})
		}
	};
	var r = e.fn.affix;
	e.fn.affix = n;
	e.fn.affix.Constructor = t;
	e.fn.affix.noConflict = function() {
		e.fn.affix = r;
		return this
	};
	e(window).on("load", function() {
		e('[data-spy="affix"]').each(function() {
			var t = e(this);
			var r = t.data();
			r.offset = r.offset || {};
			if (r.offsetBottom != null)
				r.offset.bottom = r.offsetBottom;
			if (r.offsetTop != null)
				r.offset.top = r.offsetTop;
			n.call(t, r)
		})
	})
}(jQuery);
+function(e) {
	"use strict";
	function r(t) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.alert");
			if (!i)
				r.data("bs.alert", i = new n(this));
			if (typeof t == "string")
				i[t].call(r)
		})
	}
	var t = '[data-dismiss="alert"]';
	var n = function(n) {
		e(n).on("click", t, this.close)
	};
	n.VERSION = "3.3.2";
	n.TRANSITION_DURATION = 150;
	n.prototype.close = function(t) {
		function o() {
			s.detach().trigger("closed.bs.alert").remove()
		}
		var r = e(this);
		var i = r.attr("data-target");
		if (!i) {
			i = r.attr("href");
			i = i && i.replace(/.*(?=#[^\s]*$)/, "")
		}
		var s = e(i);
		if (t)
			t.preventDefault();
		if (!s.length) {
			s = r.closest(".alert")
		}
		s.trigger(t = e.Event("close.bs.alert"));
		if (t.isDefaultPrevented())
			return;
		s.removeClass("in");
		e.support.transition && s.hasClass("fade") ? s
				.one("bsTransitionEnd", o).emulateTransitionEnd(
						n.TRANSITION_DURATION) : o()
	};
	var i = e.fn.alert;
	e.fn.alert = r;
	e.fn.alert.Constructor = n;
	e.fn.alert.noConflict = function() {
		e.fn.alert = i;
		return this
	};
	e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery);
+function(e) {
	"use strict";
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.button");
			var s = typeof n == "object" && n;
			if (!i)
				r.data("bs.button", i = new t(this, s));
			if (n == "toggle")
				i.toggle();
			else if (n)
				i.setState(n)
		})
	}
	var t = function(n, r) {
		this.$element = e(n);
		this.options = e.extend({}, t.DEFAULTS, r);
		this.isLoading = false
	};
	t.VERSION = "3.3.2";
	t.DEFAULTS = {
		loadingText : "loading..."
	};
	t.prototype.setState = function(t) {
		var n = "disabled";
		var r = this.$element;
		var i = r.is("input") ? "val" : "html";
		var s = r.data();
		t = t + "Text";
		if (s.resetText == null)
			r.data("resetText", r[i]());
		setTimeout(e.proxy(function() {
			r[i](s[t] == null ? this.options[t] : s[t]);
			if (t == "loadingText") {
				this.isLoading = true;
				r.addClass(n).attr(n, n)
			} else if (this.isLoading) {
				this.isLoading = false;
				r.removeClass(n).removeAttr(n)
			}
		}, this), 0)
	};
	t.prototype.toggle = function() {
		var e = true;
		var t = this.$element.closest('[data-toggle="buttons"]');
		if (t.length) {
			var n = this.$element.find("input");
			if (n.prop("type") == "radio") {
				if (n.prop("checked") && this.$element.hasClass("active"))
					e = false;
				else
					t.find(".active").removeClass("active")
			}
			if (e)
				n.prop("checked", !this.$element.hasClass("active")).trigger(
						"change")
		} else {
			this.$element.attr("aria-pressed", !this.$element
					.hasClass("active"))
		}
		if (e)
			this.$element.toggleClass("active")
	};
	var r = e.fn.button;
	e.fn.button = n;
	e.fn.button.Constructor = t;
	e.fn.button.noConflict = function() {
		e.fn.button = r;
		return this
	};
	e(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
			function(t) {
				var r = e(t.target);
				if (!r.hasClass("btn"))
					r = r.closest(".btn");
				n.call(r, "toggle");
				t.preventDefault()
			}).on(
			"focus.bs.button.data-api blur.bs.button.data-api",
			'[data-toggle^="button"]',
			function(t) {
				e(t.target).closest(".btn").toggleClass("focus",
						/^focus(in)?$/.test(t.type))
			})
}(jQuery);
+function(e) {
	"use strict";
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.carousel");
			var s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object"
					&& n);
			var o = typeof n == "string" ? n : s.slide;
			if (!i)
				r.data("bs.carousel", i = new t(this, s));
			if (typeof n == "number")
				i.to(n);
			else if (o)
				i[o]();
			else if (s.interval)
				i.pause().cycle()
		})
	}
	var t = function(t, n) {
		this.$element = e(t);
		this.$indicators = this.$element.find(".carousel-indicators");
		this.options = n;
		this.paused = this.sliding = this.interval = this.$active = this.$items = null;
		this.options.keyboard
				&& this.$element.on("keydown.bs.carousel", e.proxy(
						this.keydown, this));
		this.options.pause == "hover"
				&& !("ontouchstart" in document.documentElement)
				&& this.$element.on("mouseenter.bs.carousel",
						e.proxy(this.pause, this)).on("mouseleave.bs.carousel",
						e.proxy(this.cycle, this))
	};
	t.VERSION = "3.3.2";
	t.TRANSITION_DURATION = 600;
	t.DEFAULTS = {
		interval : 5e3,
		pause : "hover",
		wrap : true,
		keyboard : true
	};
	t.prototype.keydown = function(e) {
		if (/input|textarea/i.test(e.target.tagName))
			return;
		switch (e.which) {
		case 37:
			this.prev();
			break;
		case 39:
			this.next();
			break;
		default:
			return
		}
		e.preventDefault()
	};
	t.prototype.cycle = function(t) {
		t || (this.paused = false);
		this.interval && clearInterval(this.interval);
		this.options.interval
				&& !this.paused
				&& (this.interval = setInterval(e.proxy(this.next, this),
						this.options.interval));
		return this
	};
	t.prototype.getItemIndex = function(e) {
		this.$items = e.parent().children(".item");
		return this.$items.index(e || this.$active)
	};
	t.prototype.getItemForDirection = function(e, t) {
		var n = this.getItemIndex(t);
		var r = e == "prev" && n === 0 || e == "next"
				&& n == this.$items.length - 1;
		if (r && !this.options.wrap)
			return t;
		var i = e == "prev" ? -1 : 1;
		var s = (n + i) % this.$items.length;
		return this.$items.eq(s)
	};
	t.prototype.to = function(e) {
		var t = this;
		var n = this.getItemIndex(this.$active = this.$element
				.find(".item.active"));
		if (e > this.$items.length - 1 || e < 0)
			return;
		if (this.sliding)
			return this.$element.one("slid.bs.carousel", function() {
				t.to(e)
			});
		if (n == e)
			return this.pause().cycle();
		return this.slide(e > n ? "next" : "prev", this.$items.eq(e))
	};
	t.prototype.pause = function(t) {
		t || (this.paused = true);
		if (this.$element.find(".next, .prev").length && e.support.transition) {
			this.$element.trigger(e.support.transition.end);
			this.cycle(true)
		}
		this.interval = clearInterval(this.interval);
		return this
	};
	t.prototype.next = function() {
		if (this.sliding)
			return;
		return this.slide("next")
	};
	t.prototype.prev = function() {
		if (this.sliding)
			return;
		return this.slide("prev")
	};
	t.prototype.slide = function(n, r) {
		var i = this.$element.find(".item.active");
		var s = r || this.getItemForDirection(n, i);
		var o = this.interval;
		var u = n == "next" ? "left" : "right";
		var a = this;
		if (s.hasClass("active"))
			return this.sliding = false;
		var f = s[0];
		var l = e.Event("slide.bs.carousel", {
			relatedTarget : f,
			direction : u
		});
		this.$element.trigger(l);
		if (l.isDefaultPrevented())
			return;
		this.sliding = true;
		o && this.pause();
		if (this.$indicators.length) {
			this.$indicators.find(".active").removeClass("active");
			var c = e(this.$indicators.children()[this.getItemIndex(s)]);
			c && c.addClass("active")
		}
		var h = e.Event("slid.bs.carousel", {
			relatedTarget : f,
			direction : u
		});
		if (e.support.transition && this.$element.hasClass("slide")) {
			s.addClass(n);
			s[0].offsetWidth;
			i.addClass(u);
			s.addClass(u);
			i.one("bsTransitionEnd", function() {
				s.removeClass([ n, u ].join(" ")).addClass("active");
				i.removeClass([ "active", u ].join(" "));
				a.sliding = false;
				setTimeout(function() {
					a.$element.trigger(h)
				}, 0)
			}).emulateTransitionEnd(t.TRANSITION_DURATION)
		} else {
			i.removeClass("active");
			s.addClass("active");
			this.sliding = false;
			this.$element.trigger(h)
		}
		o && this.cycle();
		return this
	};
	var r = e.fn.carousel;
	e.fn.carousel = n;
	e.fn.carousel.Constructor = t;
	e.fn.carousel.noConflict = function() {
		e.fn.carousel = r;
		return this
	};
	var i = function(t) {
		var r;
		var i = e(this);
		var s = e(i.attr("data-target") || (r = i.attr("href"))
				&& r.replace(/.*(?=#[^\s]+$)/, ""));
		if (!s.hasClass("carousel"))
			return;
		var o = e.extend({}, s.data(), i.data());
		var u = i.attr("data-slide-to");
		if (u)
			o.interval = false;
		n.call(s, o);
		if (u) {
			s.data("bs.carousel").to(u)
		}
		t.preventDefault()
	};
	e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on(
			"click.bs.carousel.data-api", "[data-slide-to]", i);
	e(window).on("load", function() {
		e('[data-ride="carousel"]').each(function() {
			var t = e(this);
			n.call(t, t.data())
		})
	})
}(jQuery);
+function(e) {
	"use strict";
	function n(t) {
		var n;
		var r = t.attr("data-target") || (n = t.attr("href"))
				&& n.replace(/.*(?=#[^\s]+$)/, "");
		return e(r)
	}
	function r(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.collapse");
			var s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object"
					&& n);
			if (!i && s.toggle && n == "show")
				s.toggle = false;
			if (!i)
				r.data("bs.collapse", i = new t(this, s));
			if (typeof n == "string")
				i[n]()
		})
	}
	var t = function(n, r) {
		this.$element = e(n);
		this.options = e.extend({}, t.DEFAULTS, r);
		this.$trigger = e(this.options.trigger).filter(
				'[href="#' + n.id + '"], [data-target="#' + n.id + '"]');
		this.transitioning = null;
		if (this.options.parent) {
			this.$parent = this.getParent()
		} else {
			this.addAriaAndCollapsedClass(this.$element, this.$trigger)
		}
		if (this.options.toggle)
			this.toggle()
	};
	t.VERSION = "3.3.2";
	t.TRANSITION_DURATION = 350;
	t.DEFAULTS = {
		toggle : true,
		trigger : '[data-toggle="collapse"]'
	};
	t.prototype.dimension = function() {
		var e = this.$element.hasClass("width");
		return e ? "width" : "height"
	};
	t.prototype.show = function() {
		if (this.transitioning || this.$element.hasClass("in"))
			return;
		var n;
		var i = this.$parent
				&& this.$parent.children(".panel").children(".in, .collapsing");
		if (i && i.length) {
			n = i.data("bs.collapse");
			if (n && n.transitioning)
				return
		}
		var s = e.Event("show.bs.collapse");
		this.$element.trigger(s);
		if (s.isDefaultPrevented())
			return;
		if (i && i.length) {
			r.call(i, "hide");
			n || i.data("bs.collapse", null)
		}
		var o = this.dimension();
		this.$element.removeClass("collapse").addClass("collapsing")[o](0)
				.attr("aria-expanded", true);
		this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
		this.transitioning = 1;
		var u = function() {
			this.$element.removeClass("collapsing").addClass("collapse in")[o]
					("");
			this.transitioning = 0;
			this.$element.trigger("shown.bs.collapse")
		};
		if (!e.support.transition)
			return u.call(this);
		var a = e.camelCase([ "scroll", o ].join("-"));
		this.$element.one("bsTransitionEnd", e.proxy(u, this))
				.emulateTransitionEnd(t.TRANSITION_DURATION)[o]
				(this.$element[0][a])
	};
	t.prototype.hide = function() {
		if (this.transitioning || !this.$element.hasClass("in"))
			return;
		var n = e.Event("hide.bs.collapse");
		this.$element.trigger(n);
		if (n.isDefaultPrevented())
			return;
		var r = this.dimension();
		this.$element[r](this.$element[r]())[0].offsetHeight;
		this.$element.addClass("collapsing").removeClass("collapse in").attr(
				"aria-expanded", false);
		this.$trigger.addClass("collapsed").attr("aria-expanded", false);
		this.transitioning = 1;
		var i = function() {
			this.transitioning = 0;
			this.$element.removeClass("collapsing").addClass("collapse")
					.trigger("hidden.bs.collapse")
		};
		if (!e.support.transition)
			return i.call(this);
		this.$element[r](0).one("bsTransitionEnd", e.proxy(i, this))
				.emulateTransitionEnd(t.TRANSITION_DURATION)
	};
	t.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	t.prototype.getParent = function() {
		return e(this.options.parent).find(
				'[data-toggle="collapse"][data-parent="' + this.options.parent
						+ '"]').each(e.proxy(function(t, r) {
			var i = e(r);
			this.addAriaAndCollapsedClass(n(i), i)
		}, this)).end()
	};
	t.prototype.addAriaAndCollapsedClass = function(e, t) {
		var n = e.hasClass("in");
		e.attr("aria-expanded", n);
		t.toggleClass("collapsed", !n).attr("aria-expanded", n)
	};
	var i = e.fn.collapse;
	e.fn.collapse = r;
	e.fn.collapse.Constructor = t;
	e.fn.collapse.noConflict = function() {
		e.fn.collapse = i;
		return this
	};
	e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
			function(t) {
				var i = e(this);
				if (!i.attr("data-target"))
					t.preventDefault();
				var s = n(i);
				var o = s.data("bs.collapse");
				var u = o ? "toggle" : e.extend({}, i.data(), {
					trigger : this
				});
				r.call(s, u)
			})
}(jQuery);
+function(e) {
	"use strict";
	function i(r) {
		if (r && r.which === 3)
			return;
		e(t).remove();
		e(n).each(function() {
			var t = e(this);
			var n = s(t);
			var i = {
				relatedTarget : this
			};
			if (!n.hasClass("open"))
				return;
			n.trigger(r = e.Event("hide.bs.dropdown", i));
			if (r.isDefaultPrevented())
				return;
			t.attr("aria-expanded", "false");
			n.removeClass("open").trigger("hidden.bs.dropdown", i)
		})
	}
	function s(t) {
		var n = t.attr("data-target");
		if (!n) {
			n = t.attr("href");
			n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")
		}
		var r = n && e(n);
		return r && r.length ? r : t.parent()
	}
	function o(t) {
		return this.each(function() {
			var n = e(this);
			var i = n.data("bs.dropdown");
			if (!i)
				n.data("bs.dropdown", i = new r(this));
			if (typeof t == "string")
				i[t].call(n)
		})
	}
	var t = ".dropdown-backdrop";
	var n = '[data-toggle="dropdown"]';
	var r = function(t) {
		e(t).on("click.bs.dropdown", this.toggle)
	};
	r.VERSION = "3.3.2";
	r.prototype.toggle = function(t) {
		var n = e(this);
		if (n.is(".disabled, :disabled"))
			return;
		var r = s(n);
		var o = r.hasClass("open");
		i();
		if (!o) {
			if ("ontouchstart" in document.documentElement
					&& !r.closest(".navbar-nav").length) {
				e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on(
						"click", i)
			}
			var u = {
				relatedTarget : this
			};
			r.trigger(t = e.Event("show.bs.dropdown", u));
			if (t.isDefaultPrevented())
				return;
			n.trigger("focus").attr("aria-expanded", "true");
			r.toggleClass("open").trigger("shown.bs.dropdown", u)
		}
		return false
	};
	r.prototype.keydown = function(t) {
		if (!/(38|40|27|32)/.test(t.which)
				|| /input|textarea/i.test(t.target.tagName))
			return;
		var r = e(this);
		t.preventDefault();
		t.stopPropagation();
		if (r.is(".disabled, :disabled"))
			return;
		var i = s(r);
		var o = i.hasClass("open");
		if (!o && t.which != 27 || o && t.which == 27) {
			if (t.which == 27)
				i.find(n).trigger("focus");
			return r.trigger("click")
		}
		var u = " li:not(.divider):visible a";
		var a = i.find('[role="menu"]' + u + ', [role="listbox"]' + u);
		if (!a.length)
			return;
		var f = a.index(t.target);
		if (t.which == 38 && f > 0)
			f--;
		if (t.which == 40 && f < a.length - 1)
			f++;
		if (!~f)
			f = 0;
		a.eq(f).trigger("focus")
	};
	var u = e.fn.dropdown;
	e.fn.dropdown = o;
	e.fn.dropdown.Constructor = r;
	e.fn.dropdown.noConflict = function() {
		e.fn.dropdown = u;
		return this
	};
	e(document).on("click.bs.dropdown.data-api", i).on(
			"click.bs.dropdown.data-api", ".dropdown form", function(e) {
				e.stopPropagation()
			}).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on(
			"keydown.bs.dropdown.data-api", n, r.prototype.keydown).on(
			"keydown.bs.dropdown.data-api", '[role="menu"]',
			r.prototype.keydown).on("keydown.bs.dropdown.data-api",
			'[role="listbox"]', r.prototype.keydown)
}(jQuery);
+function(e) {
	"use strict";
	function n(n, r) {
		return this.each(function() {
			var i = e(this);
			var s = i.data("bs.modal");
			var o = e.extend({}, t.DEFAULTS, i.data(), typeof n == "object"
					&& n);
			if (!s)
				i.data("bs.modal", s = new t(this, o));
			if (typeof n == "string")
				s[n](r);
			else if (o.show)
				s.show(r)
		})
	}
	var t = function(t, n) {
		this.options = n;
		this.$body = e(document.body);
		this.$element = e(t);
		this.$backdrop = this.isShown = null;
		this.scrollbarWidth = 0;
		if (this.options.remote) {
			this.$element.find(".modal-content").load(this.options.remote,
					e.proxy(function() {
						this.$element.trigger("loaded.bs.modal")
					}, this))
		}
	};
	t.VERSION = "3.3.2";
	t.TRANSITION_DURATION = 300;
	t.BACKDROP_TRANSITION_DURATION = 150;
	t.DEFAULTS = {
		backdrop : true,
		keyboard : true,
		show : true
	};
	t.prototype.toggle = function(e) {
		return this.isShown ? this.hide() : this.show(e)
	};
	t.prototype.show = function(n) {
		var r = this;
		var i = e.Event("show.bs.modal", {
			relatedTarget : n
		});
		this.$element.trigger(i);
		if (this.isShown || i.isDefaultPrevented())
			return;
		this.isShown = true;
		this.checkScrollbar();
		this.setScrollbar();
		this.$body.addClass("modal-open");
		this.escape();
		this.resize();
		this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e
				.proxy(this.hide, this));
		this.backdrop(function() {
			var i = e.support.transition && r.$element.hasClass("fade");
			if (!r.$element.parent().length) {
				r.$element.appendTo(r.$body)
			}
			r.$element.show().scrollTop(0);
			if (r.options.backdrop)
				r.adjustBackdrop();
			r.adjustDialog();
			if (i) {
				r.$element[0].offsetWidth
			}
			r.$element.addClass("in").attr("aria-hidden", false);
			r.enforceFocus();
			var s = e.Event("shown.bs.modal", {
				relatedTarget : n
			});
			i ? r.$element.find(".modal-dialog").one("bsTransitionEnd",
					function() {
						r.$element.trigger("focus").trigger(s)
					}).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element
					.trigger("focus").trigger(s)
		})
	};
	t.prototype.hide = function(n) {
		if (n)
			n.preventDefault();
		n = e.Event("hide.bs.modal");
		this.$element.trigger(n);
		if (!this.isShown || n.isDefaultPrevented())
			return;
		this.isShown = false;
		this.escape();
		this.resize();
		e(document).off("focusin.bs.modal");
		this.$element.removeClass("in").attr("aria-hidden", true).off(
				"click.dismiss.bs.modal");
		e.support.transition && this.$element.hasClass("fade") ? this.$element
				.one("bsTransitionEnd", e.proxy(this.hideModal, this))
				.emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal()
	};
	t.prototype.enforceFocus = function() {
		e(document).off("focusin.bs.modal").on(
				"focusin.bs.modal",
				e.proxy(function(e) {
					if (this.$element[0] !== e.target
							&& !this.$element.has(e.target).length) {
						this.$element.trigger("focus")
					}
				}, this))
	};
	t.prototype.escape = function() {
		if (this.isShown && this.options.keyboard) {
			this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
				e.which == 27 && this.hide()
			}, this))
		} else if (!this.isShown) {
			this.$element.off("keydown.dismiss.bs.modal")
		}
	};
	t.prototype.resize = function() {
		if (this.isShown) {
			e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this))
		} else {
			e(window).off("resize.bs.modal")
		}
	};
	t.prototype.hideModal = function() {
		var e = this;
		this.$element.hide();
		this.backdrop(function() {
			e.$body.removeClass("modal-open");
			e.resetAdjustments();
			e.resetScrollbar();
			e.$element.trigger("hidden.bs.modal")
		})
	};
	t.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove();
		this.$backdrop = null
	};
	t.prototype.backdrop = function(n) {
		var r = this;
		var i = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var s = e.support.transition && i;
			this.$backdrop = e('<div class="modal-backdrop ' + i + '" />')
					.prependTo(this.$element)
					.on(
							"click.dismiss.bs.modal",
							e
									.proxy(
											function(e) {
												if (e.target !== e.currentTarget)
													return;
												this.options.backdrop == "static" ? this.$element[0].focus
														.call(this.$element[0])
														: this.hide.call(this)
											}, this));
			if (s)
				this.$backdrop[0].offsetWidth;
			this.$backdrop.addClass("in");
			if (!n)
				return;
			s ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(
					t.BACKDROP_TRANSITION_DURATION) : n()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var o = function() {
				r.removeBackdrop();
				n && n()
			};
			e.support.transition && this.$element.hasClass("fade") ? this.$backdrop
					.one("bsTransitionEnd", o).emulateTransitionEnd(
							t.BACKDROP_TRANSITION_DURATION)
					: o()
		} else if (n) {
			n()
		}
	};
	t.prototype.handleUpdate = function() {
		if (this.options.backdrop)
			this.adjustBackdrop();
		this.adjustDialog()
	};
	t.prototype.adjustBackdrop = function() {
		this.$backdrop.css("height", 0).css("height",
				this.$element[0].scrollHeight)
	};
	t.prototype.adjustDialog = function() {
		var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft : !this.bodyIsOverflowing && e ? this.scrollbarWidth
					: "",
			paddingRight : this.bodyIsOverflowing && !e ? this.scrollbarWidth
					: ""
		})
	};
	t.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft : "",
			paddingRight : ""
		})
	};
	t.prototype.checkScrollbar = function() {
		this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight;
		this.scrollbarWidth = this.measureScrollbar()
	};
	t.prototype.setScrollbar = function() {
		var e = parseInt(this.$body.css("padding-right") || 0, 10);
		if (this.bodyIsOverflowing)
			this.$body.css("padding-right", e + this.scrollbarWidth)
	};
	t.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	};
	t.prototype.measureScrollbar = function() {
		var e = document.createElement("div");
		e.className = "modal-scrollbar-measure";
		this.$body.append(e);
		var t = e.offsetWidth - e.clientWidth;
		this.$body[0].removeChild(e);
		return t
	};
	var r = e.fn.modal;
	e.fn.modal = n;
	e.fn.modal.Constructor = t;
	e.fn.modal.noConflict = function() {
		e.fn.modal = r;
		return this
	};
	e(document).on(
			"click.bs.modal.data-api",
			'[data-toggle="modal"]',
			function(t) {
				var r = e(this);
				var i = r.attr("href");
				var s = e(r.attr("data-target") || i
						&& i.replace(/.*(?=#[^\s]+$)/, ""));
				var o = s.data("bs.modal") ? "toggle" : e.extend({
					remote : !/#/.test(i) && i
				}, s.data(), r.data());
				if (r.is("a"))
					t.preventDefault();
				s.one("show.bs.modal", function(e) {
					if (e.isDefaultPrevented())
						return;
					s.one("hidden.bs.modal", function() {
						r.is(":visible") && r.trigger("focus")
					})
				});
				n.call(s, o, this)
			})
}(jQuery);
+function(e) {
	"use strict";
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.tooltip");
			var s = typeof n == "object" && n;
			if (!i && n == "destroy")
				return;
			if (!i)
				r.data("bs.tooltip", i = new t(this, s));
			if (typeof n == "string")
				i[n]()
		})
	}
	var t = function(e, t) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
		this.init("tooltip", e, t)
	};
	t.VERSION = "3.3.2";
	t.TRANSITION_DURATION = 150;
	t.DEFAULTS = {
		animation : true,
		placement : "top",
		selector : false,
		template : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger : "hover focus",
		title : "",
		delay : 0,
		html : false,
		container : false,
		viewport : {
			selector : "body",
			padding : 0
		}
	};
	t.prototype.init = function(t, n, r) {
		this.enabled = true;
		this.type = t;
		this.$element = e(n);
		this.options = this.getOptions(r);
		this.$viewport = this.options.viewport
				&& e(this.options.viewport.selector || this.options.viewport);
		var i = this.options.trigger.split(" ");
		for (var s = i.length; s--;) {
			var o = i[s];
			if (o == "click") {
				this.$element.on("click." + this.type, this.options.selector, e
						.proxy(this.toggle, this))
			} else if (o != "manual") {
				var u = o == "hover" ? "mouseenter" : "focusin";
				var a = o == "hover" ? "mouseleave" : "focusout";
				this.$element.on(u + "." + this.type, this.options.selector, e
						.proxy(this.enter, this));
				this.$element.on(a + "." + this.type, this.options.selector, e
						.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = e.extend({}, this.options, {
			trigger : "manual",
			selector : ""
		}) : this.fixTitle()
	};
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	};
	t.prototype.getOptions = function(t) {
		t = e.extend({}, this.getDefaults(), this.$element.data(), t);
		if (t.delay && typeof t.delay == "number") {
			t.delay = {
				show : t.delay,
				hide : t.delay
			}
		}
		return t
	};
	t.prototype.getDelegateOptions = function() {
		var t = {};
		var n = this.getDefaults();
		this._options && e.each(this._options, function(e, r) {
			if (n[e] != r)
				t[e] = r
		});
		return t
	};
	t.prototype.enter = function(t) {
		var n = t instanceof this.constructor ? t : e(t.currentTarget).data(
				"bs." + this.type);
		if (n && n.$tip && n.$tip.is(":visible")) {
			n.hoverState = "in";
			return
		}
		if (!n) {
			n = new this.constructor(t.currentTarget, this.getDelegateOptions());
			e(t.currentTarget).data("bs." + this.type, n)
		}
		clearTimeout(n.timeout);
		n.hoverState = "in";
		if (!n.options.delay || !n.options.delay.show)
			return n.show();
		n.timeout = setTimeout(function() {
			if (n.hoverState == "in")
				n.show()
		}, n.options.delay.show)
	};
	t.prototype.leave = function(t) {
		var n = t instanceof this.constructor ? t : e(t.currentTarget).data(
				"bs." + this.type);
		if (!n) {
			n = new this.constructor(t.currentTarget, this.getDelegateOptions());
			e(t.currentTarget).data("bs." + this.type, n)
		}
		clearTimeout(n.timeout);
		n.hoverState = "out";
		if (!n.options.delay || !n.options.delay.hide)
			return n.hide();
		n.timeout = setTimeout(function() {
			if (n.hoverState == "out")
				n.hide()
		}, n.options.delay.hide)
	};
	t.prototype.show = function() {
		var n = e.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(n);
			var r = e.contains(this.$element[0].ownerDocument.documentElement,
					this.$element[0]);
			if (n.isDefaultPrevented() || !r)
				return;
			var i = this;
			var s = this.tip();
			var o = this.getUID(this.type);
			this.setContent();
			s.attr("id", o);
			this.$element.attr("aria-describedby", o);
			if (this.options.animation)
				s.addClass("fade");
			var u = typeof this.options.placement == "function" ? this.options.placement
					.call(this, s[0], this.$element[0])
					: this.options.placement;
			var a = /\s?auto?\s?/i;
			var f = a.test(u);
			if (f)
				u = u.replace(a, "") || "top";
			s.detach().css({
				top : 0,
				left : 0,
				display : "block"
			}).addClass(u).data("bs." + this.type, this);
			this.options.container ? s.appendTo(this.options.container) : s
					.insertAfter(this.$element);
			var l = this.getPosition();
			var c = s[0].offsetWidth;
			var h = s[0].offsetHeight;
			if (f) {
				var p = u;
				var d = this.options.container ? e(this.options.container)
						: this.$element.parent();
				var v = this.getPosition(d);
				u = u == "bottom" && l.bottom + h > v.bottom ? "top"
						: u == "top" && l.top - h < v.top ? "bottom"
								: u == "right" && l.right + c > v.width ? "left"
										: u == "left" && l.left - c < v.left ? "right"
												: u;
				s.removeClass(p).addClass(u)
			}
			var m = this.getCalculatedOffset(u, l, c, h);
			this.applyPlacement(m, u);
			var g = function() {
				var e = i.hoverState;
				i.$element.trigger("shown.bs." + i.type);
				i.hoverState = null;
				if (e == "out")
					i.leave(i)
			};
			e.support.transition && this.$tip.hasClass("fade") ? s.one(
					"bsTransitionEnd", g).emulateTransitionEnd(
					t.TRANSITION_DURATION) : g()
		}
	};
	t.prototype.applyPlacement = function(t, n) {
		var r = this.tip();
		var i = r[0].offsetWidth;
		var s = r[0].offsetHeight;
		var o = parseInt(r.css("margin-top"), 10);
		var u = parseInt(r.css("margin-left"), 10);
		if (isNaN(o))
			o = 0;
		if (isNaN(u))
			u = 0;
		t.top = t.top + o;
		t.left = t.left + u;
		e.offset.setOffset(r[0], e.extend({
			using : function(e) {
				r.css({
					top : Math.round(e.top),
					left : Math.round(e.left)
				})
			}
		}, t), 0);
		r.addClass("in");
		var a = r[0].offsetWidth;
		var f = r[0].offsetHeight;
		if (n == "top" && f != s) {
			t.top = t.top + s - f
		}
		var l = this.getViewportAdjustedDelta(n, t, a, f);
		if (l.left)
			t.left += l.left;
		else
			t.top += l.top;
		var c = /top|bottom/.test(n);
		var h = c ? l.left * 2 - i + a : l.top * 2 - s + f;
		var p = c ? "offsetWidth" : "offsetHeight";
		r.offset(t);
		this.replaceArrow(h, r[0][p], c)
	};
	t.prototype.replaceArrow = function(e, t, n) {
		this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(
				n ? "top" : "left", "")
	};
	t.prototype.setContent = function() {
		var e = this.tip();
		var t = this.getTitle();
		e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
		e.removeClass("fade in top bottom left right")
	};
	t.prototype.hide = function(n) {
		function o() {
			if (r.hoverState != "in")
				i.detach();
			r.$element.removeAttr("aria-describedby").trigger(
					"hidden.bs." + r.type);
			n && n()
		}
		var r = this;
		var i = this.tip();
		var s = e.Event("hide.bs." + this.type);
		this.$element.trigger(s);
		if (s.isDefaultPrevented())
			return;
		i.removeClass("in");
		e.support.transition && this.$tip.hasClass("fade") ? i.one(
				"bsTransitionEnd", o).emulateTransitionEnd(
				t.TRANSITION_DURATION) : o();
		this.hoverState = null;
		return this
	};
	t.prototype.fixTitle = function() {
		var e = this.$element;
		if (e.attr("title") || typeof e.attr("data-original-title") != "string") {
			e.attr("data-original-title", e.attr("title") || "").attr("title",
					"")
		}
	};
	t.prototype.hasContent = function() {
		return this.getTitle()
	};
	t.prototype.getPosition = function(t) {
		t = t || this.$element;
		var n = t[0];
		var r = n.tagName == "BODY";
		var i = n.getBoundingClientRect();
		if (i.width == null) {
			i = e.extend({}, i, {
				width : i.right - i.left,
				height : i.bottom - i.top
			})
		}
		var s = r ? {
			top : 0,
			left : 0
		} : t.offset();
		var o = {
			scroll : r ? document.documentElement.scrollTop
					|| document.body.scrollTop : t.scrollTop()
		};
		var u = r ? {
			width : e(window).width(),
			height : e(window).height()
		} : null;
		return e.extend({}, i, o, u, s)
	};
	t.prototype.getCalculatedOffset = function(e, t, n, r) {
		return e == "bottom" ? {
			top : t.top + t.height,
			left : t.left + t.width / 2 - n / 2
		} : e == "top" ? {
			top : t.top - r,
			left : t.left + t.width / 2 - n / 2
		} : e == "left" ? {
			top : t.top + t.height / 2 - r / 2,
			left : t.left - n
		} : {
			top : t.top + t.height / 2 - r / 2,
			left : t.left + t.width
		}
	};
	t.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
		var i = {
			top : 0,
			left : 0
		};
		if (!this.$viewport)
			return i;
		var s = this.options.viewport && this.options.viewport.padding || 0;
		var o = this.getPosition(this.$viewport);
		if (/right|left/.test(e)) {
			var u = t.top - s - o.scroll;
			var a = t.top + s - o.scroll + r;
			if (u < o.top) {
				i.top = o.top - u
			} else if (a > o.top + o.height) {
				i.top = o.top + o.height - a
			}
		} else {
			var f = t.left - s;
			var l = t.left + s + n;
			if (f < o.left) {
				i.left = o.left - f
			} else if (l > o.width) {
				i.left = o.left + o.width - l
			}
		}
		return i
	};
	t.prototype.getTitle = function() {
		var e;
		var t = this.$element;
		var n = this.options;
		e = t.attr("data-original-title")
				|| (typeof n.title == "function" ? n.title.call(t[0]) : n.title);
		return e
	};
	t.prototype.getUID = function(e) {
		do
			e += ~~(Math.random() * 1e6);
		while (document.getElementById(e));
		return e
	};
	t.prototype.tip = function() {
		return this.$tip = this.$tip || e(this.options.template)
	};
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	};
	t.prototype.enable = function() {
		this.enabled = true
	};
	t.prototype.disable = function() {
		this.enabled = false
	};
	t.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	};
	t.prototype.toggle = function(t) {
		var n = this;
		if (t) {
			n = e(t.currentTarget).data("bs." + this.type);
			if (!n) {
				n = new this.constructor(t.currentTarget, this
						.getDelegateOptions());
				e(t.currentTarget).data("bs." + this.type, n)
			}
		}
		n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
	};
	t.prototype.destroy = function() {
		var e = this;
		clearTimeout(this.timeout);
		this.hide(function() {
			e.$element.off("." + e.type).removeData("bs." + e.type)
		})
	};
	var r = e.fn.tooltip;
	e.fn.tooltip = n;
	e.fn.tooltip.Constructor = t;
	e.fn.tooltip.noConflict = function() {
		e.fn.tooltip = r;
		return this
	}
}(jQuery);
+function(e) {
	"use strict";
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.popover");
			var s = typeof n == "object" && n;
			if (!i && n == "destroy")
				return;
			if (!i)
				r.data("bs.popover", i = new t(this, s));
			if (typeof n == "string")
				i[n]()
		})
	}
	var t = function(e, t) {
		this.init("popover", e, t)
	};
	if (!e.fn.tooltip)
		throw new Error("Popover requires tooltip.js");
	t.VERSION = "3.3.2";
	t.DEFAULTS = e
			.extend(
					{},
					e.fn.tooltip.Constructor.DEFAULTS,
					{
						placement : "right",
						trigger : "click",
						content : "",
						template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
					});
	t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype);
	t.prototype.constructor = t;
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	};
	t.prototype.setContent = function() {
		var e = this.tip();
		var t = this.getTitle();
		var n = this.getContent();
		e.find(".popover-title")[this.options.html ? "html" : "text"](t);
		e.find(".popover-content").children().detach().end()[this.options.html ? typeof n == "string" ? "html"
				: "append"
				: "text"](n);
		e.removeClass("fade top bottom left right in");
		if (!e.find(".popover-title").html())
			e.find(".popover-title").hide()
	};
	t.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	};
	t.prototype.getContent = function() {
		var e = this.$element;
		var t = this.options;
		return e.attr("data-content")
				|| (typeof t.content == "function" ? t.content.call(e[0])
						: t.content)
	};
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	t.prototype.tip = function() {
		if (!this.$tip)
			this.$tip = e(this.options.template);
		return this.$tip
	};
	var r = e.fn.popover;
	e.fn.popover = n;
	e.fn.popover.Constructor = t;
	e.fn.popover.noConflict = function() {
		e.fn.popover = r;
		return this
	}
}(jQuery);
+function(e) {
	"use strict";
	function t(n, r) {
		var i = e.proxy(this.process, this);
		this.$body = e("body");
		this.$scrollElement = e(n).is("body") ? e(window) : e(n);
		this.options = e.extend({}, t.DEFAULTS, r);
		this.selector = (this.options.target || "") + " .nav li > a";
		this.offsets = [];
		this.targets = [];
		this.activeTarget = null;
		this.scrollHeight = 0;
		this.$scrollElement.on("scroll.bs.scrollspy", i);
		this.refresh();
		this.process()
	}
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.scrollspy");
			var s = typeof n == "object" && n;
			if (!i)
				r.data("bs.scrollspy", i = new t(this, s));
			if (typeof n == "string")
				i[n]()
		})
	}
	t.VERSION = "3.3.2";
	t.DEFAULTS = {
		offset : 10
	};
	t.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight
				|| Math.max(this.$body[0].scrollHeight,
						document.documentElement.scrollHeight)
	};
	t.prototype.refresh = function() {
		var t = "offset";
		var n = 0;
		if (!e.isWindow(this.$scrollElement[0])) {
			t = "position";
			n = this.$scrollElement.scrollTop()
		}
		this.offsets = [];
		this.targets = [];
		this.scrollHeight = this.getScrollHeight();
		var r = this;
		this.$body.find(this.selector).map(
				function() {
					var r = e(this);
					var i = r.data("target") || r.attr("href");
					var s = /^#./.test(i) && e(i);
					return s && s.length && s.is(":visible")
							&& [ [ s[t]().top + n, i ] ] || null
				}).sort(function(e, t) {
			return e[0] - t[0]
		}).each(function() {
			r.offsets.push(this[0]);
			r.targets.push(this[1])
		})
	};
	t.prototype.process = function() {
		var e = this.$scrollElement.scrollTop() + this.options.offset;
		var t = this.getScrollHeight();
		var n = this.options.offset + t - this.$scrollElement.height();
		var r = this.offsets;
		var i = this.targets;
		var s = this.activeTarget;
		var o;
		if (this.scrollHeight != t) {
			this.refresh()
		}
		if (e >= n) {
			return s != (o = i[i.length - 1]) && this.activate(o)
		}
		if (s && e < r[0]) {
			this.activeTarget = null;
			return this.clear()
		}
		for (o = r.length; o--;) {
			s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1])
					&& this.activate(i[o])
		}
	};
	t.prototype.activate = function(t) {
		this.activeTarget = t;
		this.clear();
		var n = this.selector + '[data-target="' + t + '"],' + this.selector
				+ '[href="' + t + '"]';
		var r = e(n).parents("li").addClass("active");
		if (r.parent(".dropdown-menu").length) {
			r = r.closest("li.dropdown").addClass("active")
		}
		r.trigger("activate.bs.scrollspy")
	};
	t.prototype.clear = function() {
		e(this.selector).parentsUntil(this.options.target, ".active")
				.removeClass("active")
	};
	var r = e.fn.scrollspy;
	e.fn.scrollspy = n;
	e.fn.scrollspy.Constructor = t;
	e.fn.scrollspy.noConflict = function() {
		e.fn.scrollspy = r;
		return this
	};
	e(window).on("load.bs.scrollspy.data-api", function() {
		e('[data-spy="scroll"]').each(function() {
			var t = e(this);
			n.call(t, t.data())
		})
	})
}(jQuery);
+function(e) {
	"use strict";
	function n(n) {
		return this.each(function() {
			var r = e(this);
			var i = r.data("bs.tab");
			if (!i)
				r.data("bs.tab", i = new t(this));
			if (typeof n == "string")
				i[n]()
		})
	}
	var t = function(t) {
		this.element = e(t)
	};
	t.VERSION = "3.3.2";
	t.TRANSITION_DURATION = 150;
	t.prototype.show = function() {
		var t = this.element;
		var n = t.closest("ul:not(.dropdown-menu)");
		var r = t.data("target");
		if (!r) {
			r = t.attr("href");
			r = r && r.replace(/.*(?=#[^\s]*$)/, "")
		}
		if (t.parent("li").hasClass("active"))
			return;
		var i = n.find(".active:last a");
		var s = e.Event("hide.bs.tab", {
			relatedTarget : t[0]
		});
		var o = e.Event("show.bs.tab", {
			relatedTarget : i[0]
		});
		i.trigger(s);
		t.trigger(o);
		if (o.isDefaultPrevented() || s.isDefaultPrevented())
			return;
		var u = e(r);
		this.activate(t.closest("li"), n);
		this.activate(u, u.parent(), function() {
			i.trigger({
				type : "hidden.bs.tab",
				relatedTarget : t[0]
			});
			t.trigger({
				type : "shown.bs.tab",
				relatedTarget : i[0]
			})
		})
	};
	t.prototype.activate = function(n, r, i) {
		function u() {
			s.removeClass("active").find("> .dropdown-menu > .active")
					.removeClass("active").end().find('[data-toggle="tab"]')
					.attr("aria-expanded", false);
			n.addClass("active").find('[data-toggle="tab"]').attr(
					"aria-expanded", true);
			if (o) {
				n[0].offsetWidth;
				n.addClass("in")
			} else {
				n.removeClass("fade")
			}
			if (n.parent(".dropdown-menu")) {
				n.closest("li.dropdown").addClass("active").end().find(
						'[data-toggle="tab"]').attr("aria-expanded", true)
			}
			i && i()
		}
		var s = r.find("> .active");
		var o = i
				&& e.support.transition
				&& (s.length && s.hasClass("fade") || !!r.find("> .fade").length);
		s.length && o ? s.one("bsTransitionEnd", u).emulateTransitionEnd(
				t.TRANSITION_DURATION) : u();
		s.removeClass("in")
	};
	var r = e.fn.tab;
	e.fn.tab = n;
	e.fn.tab.Constructor = t;
	e.fn.tab.noConflict = function() {
		e.fn.tab = r;
		return this
	};
	var i = function(t) {
		t.preventDefault();
		n.call(e(this), "show")
	};
	e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on(
			"click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery);
+function(e) {
	"use strict";
	function t() {
		var e = document.createElement("bootstrap");
		var t = {
			WebkitTransition : "webkitTransitionEnd",
			MozTransition : "transitionend",
			OTransition : "oTransitionEnd otransitionend",
			transition : "transitionend"
		};
		for ( var n in t) {
			if (e.style[n] !== undefined) {
				return {
					end : t[n]
				}
			}
		}
		return false
	}
	e.fn.emulateTransitionEnd = function(t) {
		var n = false;
		var r = this;
		e(this).one("bsTransitionEnd", function() {
			n = true
		});
		var i = function() {
			if (!n)
				e(r).trigger(e.support.transition.end)
		};
		setTimeout(i, t);
		return this
	};
	e(function() {
		e.support.transition = t();
		if (!e.support.transition)
			return;
		e.event.special.bsTransitionEnd = {
			bindType : e.support.transition.end,
			delegateType : e.support.transition.end,
			handle : function(t) {
				if (e(t.target).is(this))
					return t.handleObj.handler.apply(this, arguments)
			}
		}
	})
}(jQuery);
(function(e) {
	"use strict";
	function n(t, n) {
		this.itemsArray = [];
		this.$element = e(t);
		this.$element.hide();
		this.isSelect = t.tagName === "SELECT";
		this.multiple = this.isSelect && t.hasAttribute("multiple");
		this.objectItems = n && n.itemValue;
		this.placeholderText = t.hasAttribute("placeholder") ? this.$element
				.attr("placeholder") : "";
		this.inputSize = Math.max(1, this.placeholderText.length);
		this.$container = e('<div class="bootstrap-tagsinput"></div>');
		this.$input = e(
				'<input type="text" placeholder="' + this.placeholderText
						+ '"/>').appendTo(this.$container);
		this.$element.after(this.$container);
		var r = (this.inputSize < 3 ? 3 : this.inputSize) + "em";
		this.build(n)
	}
	function r(e, t) {
		if (typeof e[t] !== "function") {
			var n = e[t];
			e[t] = function(e) {
				return e[n]
			}
		}
	}
	function i(e, t) {
		if (typeof e[t] !== "function") {
			var n = e[t];
			e[t] = function() {
				return n
			}
		}
	}
	function o(e) {
		if (e) {
			return s.text(e).html()
		} else {
			return ""
		}
	}
	function u(e) {
		var t = 0;
		if (document.selection) {
			e.focus();
			var n = document.selection.createRange();
			n.moveStart("character", -e.value.length);
			t = n.text.length
		} else if (e.selectionStart || e.selectionStart == "0") {
			t = e.selectionStart
		}
		return t
	}
	function a(t, n) {
		var r = false;
		e.each(n,
				function(e, n) {
					if (typeof n === "number" && t.which === n) {
						r = true;
						return false
					}
					if (t.which === n.which) {
						var i = !n.hasOwnProperty("altKey")
								|| t.altKey === n.altKey, s = !n
								.hasOwnProperty("shiftKey")
								|| t.shiftKey === n.shiftKey, o = !n
								.hasOwnProperty("ctrlKey")
								|| t.ctrlKey === n.ctrlKey;
						if (i && s && o) {
							r = true;
							return false
						}
					}
				});
		return r
	}
	var t = {
		tagClass : function(e) {
			return "label label-info"
		},
		itemValue : function(e) {
			return e ? e.toString() : e
		},
		itemText : function(e) {
			return this.itemValue(e)
		},
		freeInput : true,
		addOnBlur : true,
		maxTags : 5,
		maxChars : 20,
		confirmKeys : [ 13, 32, 44, 91, 188 ],
		onTagExists : function(e, t) {
			t.hide().fadeIn()
		},
		trimValue : false,
		allowDuplicates : false
	};
	n.prototype = {
		constructor : n,
		add : function(t, n) {
			var r = this;
			if (r.options.maxTags && r.itemsArray.length >= r.options.maxTags)
				return;
			if (t !== false && !t)
				return;
			if (typeof t === "string" && r.options.trimValue) {
				t = e.trim(t)
			}
			if (typeof t === "object" && !r.objectItems)
				throw "Can't add objects when itemValue option is not set";
			if (t.toString().match(/^\s*$/))
				return;
			if (r.isSelect && !r.multiple && r.itemsArray.length > 0)
				r.remove(r.itemsArray[0]);
			if (typeof t === "string" && this.$element[0].tagName === "INPUT") {
				var i = t.split(",");
				if (i.length > 1) {
					for (var s = 0; s < i.length; s++) {
						this.add(i[s], true)
					}
					if (!n)
						r.pushVal();
					return
				}
			}
			var u = e.Event("beforeItemAdd", {
				item : t,
				cancel : false
			});
			r.$element.trigger(u);
			if (u.cancel)
				return;
			t = u.item;
			var a = r.options.itemValue(t), f = r.options.itemText(t), l = r.options
					.tagClass(t);
			var c = e.grep(r.itemsArray, function(e) {
				return r.options.itemValue(e) === a
			})[0];
			if (c && !r.options.allowDuplicates) {
				if (r.options.onTagExists) {
					var h = e(".tag", r.$container).filter(function() {
						return e(this).data("item") === c
					});
					r.options.onTagExists(t, h)
				}
				return
			}
			if (r.items().toString().length + t.length + 1 > r.options.maxInputLength)
				return;
			r.itemsArray.push(t);
			var p = e('<span class="tag ' + o(l) + '">' + o(f)
					+ '<span data-role="remove"></span></span>');
			p.data("item", t);
			r.findInputWrapper().before(p);
			p.after(" ");
			if (r.isSelect
					&& !e('option[value="' + encodeURIComponent(a) + '"]',
							r.$element)[0]) {
				var d = e("<option selected>" + o(f) + "</option>");
				d.data("item", t);
				d.attr("value", a);
				r.$element.append(d)
			}
			if (!n)
				r.pushVal();
			if (r.options.maxTags === r.itemsArray.length
					|| r.items().toString().length === r.options.maxInputLength)
				r.$container.addClass("bootstrap-tagsinput-max");
			r.$element.trigger(e.Event("itemAdded", {
				item : t
			}))
		},
		remove : function(t, n) {
			var r = this;
			if (r.objectItems) {
				if (typeof t === "object")
					t = e.grep(r.itemsArray, function(e) {
						return r.options.itemValue(e) == r.options.itemValue(t)
					});
				else
					t = e.grep(r.itemsArray, function(e) {
						return r.options.itemValue(e) == t
					});
				t = t[t.length - 1]
			}
			if (t) {
				var i = e.Event("beforeItemRemove", {
					item : t,
					cancel : false
				});
				r.$element.trigger(i);
				if (i.cancel)
					return;
				e(".tag", r.$container).filter(function() {
					return e(this).data("item") === t
				}).remove();
				e("option", r.$element).filter(function() {
					return e(this).data("item") === t
				}).remove();
				if (e.inArray(t, r.itemsArray) !== -1)
					r.itemsArray.splice(e.inArray(t, r.itemsArray), 1)
			}
			if (!n)
				r.pushVal();
			if (r.options.maxTags > r.itemsArray.length)
				r.$container.removeClass("bootstrap-tagsinput-max");
			r.$element.trigger(e.Event("itemRemoved", {
				item : t
			}))
		},
		removeAll : function() {
			var t = this;
			e(".tag", t.$container).remove();
			e("option", t.$element).remove();
			while (t.itemsArray.length > 0)
				t.itemsArray.pop();
			t.pushVal()
		},
		refresh : function() {
			var t = this;
			e(".tag", t.$container)
					.each(
							function() {
								var n = e(this), r = n.data("item"), i = t.options
										.itemValue(r), s = t.options
										.itemText(r), u = t.options.tagClass(r);
								n.attr("class", null);
								n.addClass("tag " + o(u));
								n.contents().filter(function() {
									return this.nodeType == 3
								})[0].nodeValue = o(s);
								if (t.isSelect) {
									var a = e("option", t.$element)
											.filter(
													function() {
														return e(this).data(
																"item") === r
													});
									a.attr("value", i)
								}
							})
		},
		items : function() {
			return this.itemsArray
		},
		pushVal : function() {
			var t = this, n = e.map(t.items(), function(e) {
				return t.options.itemValue(e).toString()
			});
			t.$element.val(n, true).trigger("change")
		},
		build : function(n) {
			var s = this;
			s.options = e.extend({}, t, n);
			if (s.objectItems)
				s.options.freeInput = false;
			r(s.options, "itemValue");
			r(s.options, "itemText");
			i(s.options, "tagClass");
			if (s.options.typeahead) {
				var o = s.options.typeahead || {};
				i(o, "source");
				s.$input.typeahead(e.extend({}, o, {
					source : function(t, n) {
						function r(e) {
							var t = [];
							for (var r = 0; r < e.length; r++) {
								var o = s.options.itemText(e[r]);
								i[o] = e[r];
								t.push(o)
							}
							n(t)
						}
						this.map = {};
						var i = this.map, u = o.source(t);
						if (e.isFunction(u.success)) {
							u.success(r)
						} else if (e.isFunction(u.then)) {
							u.then(r)
						} else {
							e.when(u).then(r)
						}
					},
					updater : function(e) {
						s.add(this.map[e])
					},
					matcher : function(e) {
						return e.toLowerCase().indexOf(
								this.query.trim().toLowerCase()) !== -1
					},
					sorter : function(e) {
						return e.sort()
					},
					highlighter : function(e) {
						var t = new RegExp("(" + this.query + ")", "gi");
						return e.replace(t, "<strong>$1</strong>")
					}
				}))
			}
			if (s.options.typeaheadjs) {
				var f = s.options.typeaheadjs || {};
				s.$input.typeahead(null, f).on("typeahead:selected",
						e.proxy(function(e, t) {
							if (f.valueKey)
								s.add(t[f.valueKey]);
							else
								s.add(t);
							s.$input.typeahead("val", "")
						}, s))
			}
			s.$container.on("click", e.proxy(function(e) {
				if (!s.$element.attr("disabled")) {
					s.$input.removeAttr("disabled")
				}
				s.$input.focus()
			}, s));
			if (s.options.addOnBlur && s.options.freeInput) {
				s.$input.on("focusout", e.proxy(
						function(t) {
							if (e(".typeahead, .twitter-typeahead",
									s.$container).length === 0) {
								s.add(s.$input.val());
								s.$input.val("")
							}
						}, s))
			}
			s.$container.on("keydown", "input", e.proxy(function(t) {
				var n = e(t.target), r = s.findInputWrapper();
				if (s.$element.attr("disabled")) {
					s.$input.attr("disabled", "disabled");
					return
				}
				switch (t.which) {
				case 13:
					t.preventDefault();
					break;
				case 8:
					if (u(n[0]) === 0) {
						var i = r.prev();
						if (i) {
							s.remove(i.data("item"))
						}
					}
					break;
				case 46:
					if (u(n[0]) === 0) {
						var o = r.next();
						if (o) {
							s.remove(o.data("item"))
						}
					}
					break;
				case 37:
					var a = r.prev();
					if (n.val().length === 0 && a[0]) {
						a.before(r);
						n.focus()
					}
					break;
				case 39:
					var f = r.next();
					if (n.val().length === 0 && f[0]) {
						f.after(r);
						n.focus()
					}
					break;
				default:
				}
				var l = n.val().length, c = Math.ceil(l / 5), h = l + c + 1;
				n.attr("size", Math.max(this.inputSize, n.val().length))
			}, s));
			s.$container.on("keyup", "input", e
					.proxy(
							function(t) {
								var n = e(t.target);
								var r = n.val().substr(0, n.val().length)
										.trim(), i = s.options.maxChars
										&& r.length >= s.options.maxChars;
								if (s.options.freeInput
										&& (a(t, s.options.confirmKeys) || i)) {
									s.add(i ? r.substr(0, s.options.maxChars)
											: r);
									n.val("");
									t.preventDefault()
								}
								var o = r.length, u = Math.ceil(o / 5), f = o
										+ u + 1;
								n.attr("size", Math.max(this.inputSize, o))
							}, s));
			s.$container.on("click", "[data-role=remove]", e.proxy(function(t) {
				if (s.$element.attr("disabled")) {
					return
				}
				s.remove(e(t.target).closest(".tag").data("item"))
			}, s));
			if (s.options.itemValue === t.itemValue) {
				if (s.$element[0].tagName === "INPUT") {
					s.add(s.$element.val())
				} else {
					e("option", s.$element).each(function() {
						s.add(e(this).attr("value"), true)
					})
				}
			}
		},
		destroy : function() {
			var e = this;
			e.$container.off("keypress", "input");
			e.$container.off("click", "[role=remove]");
			e.$container.remove();
			e.$element.removeData("tagsinput");
			e.$element.show()
		},
		focus : function() {
			this.$input.focus()
		},
		input : function() {
			return this.$input
		},
		findInputWrapper : function() {
			var t = this.$input[0], n = this.$container[0];
			while (t && t.parentNode !== n)
				t = t.parentNode;
			return e(t)
		}
	};
	e.fn.tagsinput = function(t, r) {
		var i = [];
		this.each(function() {
			var s = e(this).data("tagsinput");
			if (!s) {
				s = new n(this, t);
				e(this).data("tagsinput", s);
				i.push(s);
				if (this.tagName === "SELECT") {
					e("option", e(this)).attr("selected", "selected")
				}
				e(this).val(e(this).val())
			} else if (!t && !r) {
				i.push(s)
			} else if (s[t] !== undefined) {
				var o = s[t](r);
				if (o !== undefined)
					i.push(o)
			}
		});
		if (typeof t == "string") {
			return i.length > 1 ? i : i[0]
		} else {
			return i
		}
	};
	e.fn.tagsinput.Constructor = n;
	var s = e("<div />");
	e(function() {
		e("input[data-role=tagsinput], select[multiple][data-role=tagsinput]")
				.tagsinput()
	})
})(window.jQuery);
(function(e) {
	if (typeof define === "function" && define.amd) {
		define([ "jquery" ], e)
	} else {
		e(window.jQuery)
	}
})
		(function(e) {
			if (!Array.prototype.reduce) {
				Array.prototype.reduce = function(e) {
					var t = Object(this), n = t.length >>> 0, r = 0, i;
					if (arguments.length === 2) {
						i = arguments[1]
					} else {
						while (r < n && !(r in t)) {
							r++
						}
						if (r >= n) {
							throw new TypeError(
									"Reduce of empty array with no initial value")
						}
						i = t[r++]
					}
					for (; r < n; r++) {
						if (r in t) {
							i = e(i, t[r], r, t)
						}
					}
					return i
				}
			}
			if ("function" !== typeof Array.prototype.filter) {
				Array.prototype.filter = function(e) {
					var t = Object(this), n = t.length >>> 0;
					var r = [];
					var i = arguments.length >= 2 ? arguments[1] : void 0;
					for (var s = 0; s < n; s++) {
						if (s in t) {
							var o = t[s];
							if (e.call(i, o, s, t)) {
								r.push(o)
							}
						}
					}
					return r
				}
			}
			if (!Array.prototype.map) {
				Array.prototype.map = function(e, t) {
					var n, r, i;
					if (this === null) {
						throw new TypeError(" this is null or not defined")
					}
					var s = Object(this);
					var o = s.length >>> 0;
					if (typeof e !== "function") {
						throw new TypeError(e + " is not a function")
					}
					if (arguments.length > 1) {
						n = t
					}
					r = new Array(o);
					i = 0;
					while (i < o) {
						var u, a;
						if (i in s) {
							u = s[i];
							a = e.call(n, u, i, s);
							r[i] = a
						}
						i++
					}
					return r
				}
			}
			var t = typeof define === "function" && define.amd;
			var n = function(t) {
				var n = t === "Comic Sans MS" ? "Courier New" : "Comic Sans MS";
				var r = e("<div>").css({
					position : "absolute",
					left : "-9999px",
					top : "-9999px",
					fontSize : "200px"
				}).text("mmmmmmmmmwwwwwww").appendTo(document.body);
				var i = r.css("fontFamily", n).width();
				var s = r.css("fontFamily", t + "," + n).width();
				r.remove();
				return i !== s
			};
			var r = navigator.userAgent;
			var i = /MSIE|Trident/i.test(r);
			var s;
			if (i) {
				var o = /MSIE (\d+[.]\d+)/.exec(r);
				if (o) {
					s = parseFloat(o[1])
				}
				o = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(r);
				if (o) {
					s = parseFloat(o[1])
				}
			}
			var u = {
				isMac : navigator.appVersion.indexOf("Mac") > -1,
				isMSIE : i,
				isFF : /firefox/i.test(r),
				isWebkit : /webkit/i.test(r),
				isSafari : /safari/i.test(r),
				browserVersion : s,
				jqueryVersion : parseFloat(e.fn.jquery),
				isSupportAmd : t,
				hasCodeMirror : t ? require.specified("CodeMirror")
						: !!window.CodeMirror,
				isFontInstalled : n,
				isW3CRangeSupport : !!document.createRange
			};
			var a = function() {
				var t = function(e) {
					return function(t) {
						return e === t
					}
				};
				var n = function(e, t) {
					return e === t
				};
				var r = function(e) {
					return function(t, n) {
						return t[e] === n[e]
					}
				};
				var i = function() {
					return true
				};
				var s = function() {
					return false
				};
				var o = function(e) {
					return function() {
						return !e.apply(e, arguments)
					}
				};
				var u = function(e, t) {
					return function(n) {
						return e(n) && t(n)
					}
				};
				var a = function(e) {
					return e
				};
				var f = 0;
				var l = function(e) {
					var t = ++f + "";
					return e ? e + t : t
				};
				var c = function(t) {
					var n = e(document);
					return {
						top : t.top + n.scrollTop(),
						left : t.left + n.scrollLeft(),
						width : t.right - t.left,
						height : t.bottom - t.top
					}
				};
				var h = function(e) {
					var t = {};
					for ( var n in e) {
						if (e.hasOwnProperty(n)) {
							t[e[n]] = n
						}
					}
					return t
				};
				var p = function(e, t) {
					t = t || "";
					return t + e.split(".").map(function(e) {
						return e.substring(0, 1).toUpperCase() + e.substring(1)
					}).join("")
				};
				return {
					eq : t,
					eq2 : n,
					peq2 : r,
					ok : i,
					fail : s,
					self : a,
					not : o,
					and : u,
					uniqueId : l,
					rect2bnd : c,
					invertObject : h,
					namespaceToCamel : p
				}
			}();
			var f = function() {
				var t = function(e) {
					return e[0]
				};
				var n = function(e) {
					return e[e.length - 1]
				};
				var r = function(e) {
					return e.slice(0, e.length - 1)
				};
				var i = function(e) {
					return e.slice(1)
				};
				var s = function(e, t) {
					for (var n = 0, r = e.length; n < r; n++) {
						var i = e[n];
						if (t(i)) {
							return i
						}
					}
				};
				var o = function(e, t) {
					for (var n = 0, r = e.length; n < r; n++) {
						if (!t(e[n])) {
							return false
						}
					}
					return true
				};
				var u = function(t, n) {
					return e.inArray(n, t)
				};
				var f = function(e, t) {
					return u(e, t) !== -1
				};
				var l = function(e, t) {
					t = t || a.self;
					return e.reduce(function(e, n) {
						return e + t(n)
					}, 0)
				};
				var c = function(e) {
					var t = [], n = -1, r = e.length;
					while (++n < r) {
						t[n] = e[n]
					}
					return t
				};
				var h = function(e, r) {
					if (!e.length) {
						return []
					}
					var s = i(e);
					return s.reduce(function(e, t) {
						var i = n(e);
						if (r(n(i), t)) {
							i[i.length] = t
						} else {
							e[e.length] = [ t ]
						}
						return e
					}, [ [ t(e) ] ])
				};
				var p = function(e) {
					var t = [];
					for (var n = 0, r = e.length; n < r; n++) {
						if (e[n]) {
							t.push(e[n])
						}
					}
					return t
				};
				var d = function(e) {
					var t = [];
					for (var n = 0, r = e.length; n < r; n++) {
						if (!f(t, e[n])) {
							t.push(e[n])
						}
					}
					return t
				};
				var v = function(e, t) {
					var n = u(e, t);
					if (n === -1) {
						return null
					}
					return e[n + 1]
				};
				var m = function(e, t) {
					var n = u(e, t);
					if (n === -1) {
						return null
					}
					return e[n - 1]
				};
				return {
					head : t,
					last : n,
					initial : r,
					tail : i,
					prev : m,
					next : v,
					find : s,
					contains : f,
					all : o,
					sum : l,
					from : c,
					clusterBy : h,
					compact : p,
					unique : d
				}
			}();
			var l = String.fromCharCode(160);
			var c = "﻿";
			var h = function() {
				var t = function(t) {
					return t && e(t).hasClass("note-editable")
				};
				var n = function(t) {
					return t && e(t).hasClass("note-control-sizing")
				};
				var r = function(t) {
					var n;
					if (t.hasClass("note-air-editor")) {
						var r = f.last(t.attr("id").split("-"));
						n = function(t) {
							return function() {
								return e(t + r)
							}
						};
						return {
							editor : function() {
								return t
							},
							holder : function() {
								return t.data("holder")
							},
							editable : function() {
								return t
							},
							popover : n("#note-popover-"),
							handle : n("#note-handle-"),
							dialog : n("#note-dialog-")
						}
					} else {
						n = function(e, n) {
							n = n || t;
							return function() {
								return n.find(e)
							}
						};
						var i = t.data("options");
						var s = i && i.dialogsInBody ? e(document.body) : null;
						return {
							editor : function() {
								return t
							},
							holder : function() {
								return t.data("holder")
							},
							dropzone : n(".note-dropzone"),
							toolbar : n(".note-toolbar"),
							editable : n(".note-editable"),
							codable : n(".note-codable"),
							statusbar : n(".note-statusbar"),
							popover : n(".note-popover"),
							handle : n(".note-handle"),
							dialog : n(".note-dialog", s)
						}
					}
				};
				var i = function(t) {
					var n = e(t).closest(
							".note-editor, .note-air-editor, .note-air-layout");
					if (!n.length) {
						return null
					}
					var i;
					if (n.is(".note-editor, .note-air-editor")) {
						i = n
					} else {
						i = e("#note-editor-" + f.last(n.attr("id").split("-")))
					}
					return r(i)
				};
				var s = function(e) {
					e = e.toUpperCase();
					return function(t) {
						return t && t.nodeName.toUpperCase() === e
					}
				};
				var o = function(e) {
					return e && e.nodeType === 3
				};
				var p = function(e) {
					return e
							&& /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(e.nodeName
									.toUpperCase())
				};
				var d = function(e) {
					if (t(e)) {
						return false
					}
					return e
							&& /^DIV|^P|^LI|^H[1-7]/.test(e.nodeName
									.toUpperCase())
				};
				var v = s("LI");
				var m = function(e) {
					return d(e) && !v(e)
				};
				var g = s("TABLE");
				var y = function(e) {
					return !x(e) && !b(e) && !w(e) && !d(e) && !g(e) && !S(e)
				};
				var b = function(e) {
					return e && /^UL|^OL/.test(e.nodeName.toUpperCase())
				};
				var w = s("HR");
				var E = function(e) {
					return e && /^TD|^TH/.test(e.nodeName.toUpperCase())
				};
				var S = s("BLOCKQUOTE");
				var x = function(e) {
					return E(e) || S(e) || t(e)
				};
				var T = s("A");
				var N = function(e) {
					return y(e) && !!j(e, d)
				};
				var C = function(e) {
					return y(e) && !j(e, d)
				};
				var k = s("BODY");
				var L = s("PRE");
				var A = s("CODE");
				var O = function(e) {
					return L(e) || A(e)
				};
				var M = function(e, t) {
					return e.nextSibling === t || e.previousSibling === t
				};
				var _ = function(e, t) {
					t = t || a.ok;
					var n = [];
					if (e.previousSibling && t(e.previousSibling)) {
						n.push(e.previousSibling)
					}
					n.push(e);
					if (e.nextSibling && t(e.nextSibling)) {
						n.push(e.nextSibling)
					}
					return n
				};
				var D = u.isMSIE && u.browserVersion < 11 ? "&nbsp;" : "<br>";
				var P = function(e) {
					if (o(e)) {
						return e.nodeValue.length
					}
					return e.childNodes.length
				};
				var H = function(e) {
					var t = P(e);
					if (t === 0) {
						return true
					} else if (!o(e) && t === 1 && e.innerHTML === D) {
						return true
					} else if (f.all(e.childNodes, o) && e.innerHTML === "") {
						return true
					}
					return false
				};
				var B = function(e) {
					if (!p(e) && !P(e)) {
						e.innerHTML = D
					}
				};
				var j = function(e, n) {
					while (e) {
						if (n(e)) {
							return e
						}
						if (t(e)) {
							break
						}
						e = e.parentNode
					}
					return null
				};
				var F = function(e, n) {
					e = e.parentNode;
					while (e) {
						if (P(e) !== 1) {
							break
						}
						if (n(e)) {
							return e
						}
						if (t(e)) {
							break
						}
						e = e.parentNode
					}
					return null
				};
				var I = function(e, n) {
					n = n || a.fail;
					var r = [];
					j(e, function(e) {
						if (!t(e)) {
							r.push(e)
						}
						return n(e)
					});
					return r
				};
				var q = function(e, t) {
					var n = I(e);
					return f.last(n.filter(t))
				};
				var R = function(t, n) {
					var r = I(t);
					for (var i = n; i; i = i.parentNode) {
						if (e.inArray(i, r) > -1) {
							return i
						}
					}
					return null
				};
				var U = function(e, t) {
					t = t || a.fail;
					var n = [];
					while (e) {
						if (t(e)) {
							break
						}
						n.push(e);
						e = e.previousSibling
					}
					return n
				};
				var z = function(e, t) {
					t = t || a.fail;
					var n = [];
					while (e) {
						if (t(e)) {
							break
						}
						n.push(e);
						e = e.nextSibling
					}
					return n
				};
				var W = function(e, t) {
					var n = [];
					t = t || a.ok;
					(function r(i) {
						if (e !== i && t(i)) {
							n.push(i)
						}
						for (var s = 0, o = i.childNodes.length; s < o; s++) {
							r(i.childNodes[s])
						}
					})(e);
					return n
				};
				var X = function(t, n) {
					var r = t.parentNode;
					var i = e("<" + n + ">")[0];
					r.insertBefore(i, t);
					i.appendChild(t);
					return i
				};
				var V = function(e, t) {
					var n = t.nextSibling, r = t.parentNode;
					if (n) {
						r.insertBefore(e, n)
					} else {
						r.appendChild(e)
					}
					return e
				};
				var J = function(t, n) {
					e.each(n, function(e, n) {
						t.appendChild(n)
					});
					return t
				};
				var K = function(e) {
					return e.offset === 0
				};
				var Q = function(e) {
					return e.offset === P(e.node)
				};
				var G = function(e) {
					return K(e) || Q(e)
				};
				var Y = function(e, t) {
					while (e && e !== t) {
						if (nt(e) !== 0) {
							return false
						}
						e = e.parentNode
					}
					return true
				};
				var Z = function(e, t) {
					while (e && e !== t) {
						if (nt(e) !== P(e.parentNode) - 1) {
							return false
						}
						e = e.parentNode
					}
					return true
				};
				var et = function(e, t) {
					return K(e) && Y(e.node, t)
				};
				var tt = function(e, t) {
					return Q(e) && Z(e.node, t)
				};
				var nt = function(e) {
					var t = 0;
					while (e = e.previousSibling) {
						t += 1
					}
					return t
				};
				var rt = function(e) {
					return !!(e && e.childNodes && e.childNodes.length)
				};
				var it = function(e, n) {
					var r, i;
					if (e.offset === 0) {
						if (t(e.node)) {
							return null
						}
						r = e.node.parentNode;
						i = nt(e.node)
					} else if (rt(e.node)) {
						r = e.node.childNodes[e.offset - 1];
						i = P(r)
					} else {
						r = e.node;
						i = n ? 0 : e.offset - 1
					}
					return {
						node : r,
						offset : i
					}
				};
				var st = function(e, n) {
					var r, i;
					if (P(e.node) === e.offset) {
						if (t(e.node)) {
							return null
						}
						r = e.node.parentNode;
						i = nt(e.node) + 1
					} else if (rt(e.node)) {
						r = e.node.childNodes[e.offset];
						i = 0
					} else {
						r = e.node;
						i = n ? P(e.node) : e.offset + 1
					}
					return {
						node : r,
						offset : i
					}
				};
				var ot = function(e, t) {
					return e.node === t.node && e.offset === t.offset
				};
				var ut = function(e) {
					if (o(e.node) || !rt(e.node) || H(e.node)) {
						return true
					}
					var t = e.node.childNodes[e.offset - 1];
					var n = e.node.childNodes[e.offset];
					if ((!t || p(t)) && (!n || p(n))) {
						return true
					}
					return false
				};
				var at = function(e, t) {
					while (e) {
						if (t(e)) {
							return e
						}
						e = it(e)
					}
					return null
				};
				var ft = function(e, t) {
					while (e) {
						if (t(e)) {
							return e
						}
						e = st(e)
					}
					return null
				};
				var lt = function(e) {
					if (!o(e.node)) {
						return false
					}
					var t = e.node.nodeValue.charAt(e.offset - 1);
					return t && t !== " " && t !== l
				};
				var ct = function(e, t, n, r) {
					var i = e;
					while (i) {
						n(i);
						if (ot(i, t)) {
							break
						}
						var s = r && e.node !== i.node && t.node !== i.node;
						i = st(i, s)
					}
				};
				var ht = function(e, t) {
					var n = I(t, a.eq(e));
					return n.map(nt).reverse()
				};
				var pt = function(e, t) {
					var n = e;
					for (var r = 0, i = t.length; r < i; r++) {
						if (n.childNodes.length <= t[r]) {
							n = n.childNodes[n.childNodes.length - 1]
						} else {
							n = n.childNodes[t[r]]
						}
					}
					return n
				};
				var dt = function(e, t) {
					var n = t && t.isSkipPaddingBlankHTML;
					var r = t && t.isNotSplitEdgePoint;
					if (G(e) && (o(e.node) || r)) {
						if (K(e)) {
							return e.node
						} else if (Q(e)) {
							return e.node.nextSibling
						}
					}
					if (o(e.node)) {
						return e.node.splitText(e.offset)
					} else {
						var i = e.node.childNodes[e.offset];
						var s = V(e.node.cloneNode(false), e.node);
						J(s, z(i));
						if (!n) {
							B(e.node);
							B(s)
						}
						return s
					}
				};
				var vt = function(e, t, n) {
					var r = I(t.node, a.eq(e));
					if (!r.length) {
						return null
					} else if (r.length === 1) {
						return dt(t, n)
					}
					return r.reduce(function(e, r) {
						if (e === t.node) {
							e = dt(t, n)
						}
						return dt({
							node : r,
							offset : e ? h.position(e) : P(r)
						}, n)
					})
				};
				var mt = function(e, t) {
					var n = t ? d : x;
					var r = I(e.node, n);
					var i = f.last(r) || e.node;
					var s, o;
					if (n(i)) {
						s = r[r.length - 2];
						o = i
					} else {
						s = i;
						o = s.parentNode
					}
					var u = s && vt(s, e, {
						isSkipPaddingBlankHTML : t,
						isNotSplitEdgePoint : t
					});
					if (!u && o === e.node) {
						u = e.node.childNodes[e.offset]
					}
					return {
						rightNode : u,
						container : o
					}
				};
				var gt = function(e) {
					return document.createElement(e)
				};
				var yt = function(e) {
					return document.createTextNode(e)
				};
				var bt = function(e, t) {
					if (!e || !e.parentNode) {
						return
					}
					if (e.removeNode) {
						return e.removeNode(t)
					}
					var n = e.parentNode;
					if (!t) {
						var r = [];
						var i, s;
						for (i = 0, s = e.childNodes.length; i < s; i++) {
							r.push(e.childNodes[i])
						}
						for (i = 0, s = r.length; i < s; i++) {
							n.insertBefore(r[i], e)
						}
					}
					n.removeChild(e)
				};
				var wt = function(e, n) {
					while (e) {
						if (t(e) || !n(e)) {
							break
						}
						var r = e.parentNode;
						bt(e);
						e = r
					}
				};
				var Et = function(e, t) {
					if (e.nodeName.toUpperCase() === t.toUpperCase()) {
						return e
					}
					var n = gt(t);
					if (e.style.cssText) {
						n.style.cssText = e.style.cssText
					}
					J(n, f.from(e.childNodes));
					V(n, e);
					bt(e);
					return n
				};
				var St = s("TEXTAREA");
				var xt = function(e, t) {
					var n = St(e[0]) ? e.val() : e.html();
					if (t) {
						return n.replace(/[\n\r]/g, "")
					}
					return n
				};
				var Tt = function(t, n) {
					var r = xt(t);
					if (n) {
						var i = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
						r = r.replace(i, function(e, t, n) {
							n = n.toUpperCase();
							var r = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n)
									&& !!t;
							var i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/
									.test(n);
							return e + (r || i ? "\n" : "")
						});
						r = e.trim(r)
					}
					return r
				};
				return {
					NBSP_CHAR : l,
					ZERO_WIDTH_NBSP_CHAR : c,
					blank : D,
					emptyPara : "<p>" + D + "</p>",
					makePredByNodeName : s,
					isEditable : t,
					isControlSizing : n,
					buildLayoutInfo : r,
					makeLayoutInfo : i,
					isText : o,
					isVoid : p,
					isPara : d,
					isPurePara : m,
					isInline : y,
					isBlock : a.not(y),
					isBodyInline : C,
					isBody : k,
					isParaInline : N,
					isList : b,
					isTable : g,
					isCell : E,
					isBlockquote : S,
					isBodyContainer : x,
					isPre : L,
					isCode : A,
					isCodeBlock : O,
					isAnchor : T,
					isDiv : s("DIV"),
					isLi : v,
					isBR : s("BR"),
					isSpan : s("SPAN"),
					isB : s("B"),
					isU : s("U"),
					isS : s("S"),
					isI : s("I"),
					isImg : s("IMG"),
					isTextarea : St,
					isEmpty : H,
					isEmptyAnchor : a.and(T, H),
					isClosestSibling : M,
					withClosestSiblings : _,
					nodeLength : P,
					isLeftEdgePoint : K,
					isRightEdgePoint : Q,
					isEdgePoint : G,
					isLeftEdgeOf : Y,
					isRightEdgeOf : Z,
					isLeftEdgePointOf : et,
					isRightEdgePointOf : tt,
					prevPoint : it,
					nextPoint : st,
					isSamePoint : ot,
					isVisiblePoint : ut,
					prevPointUntil : at,
					nextPointUntil : ft,
					isCharPoint : lt,
					walkPoint : ct,
					ancestor : j,
					singleChildAncestor : F,
					listAncestor : I,
					lastAncestor : q,
					listNext : z,
					listPrev : U,
					listDescendant : W,
					commonAncestor : R,
					wrap : X,
					insertAfter : V,
					appendChildNodes : J,
					position : nt,
					hasChildren : rt,
					makeOffsetPath : ht,
					fromOffsetPath : pt,
					splitTree : vt,
					splitPoint : mt,
					create : gt,
					createText : yt,
					remove : bt,
					removeWhile : wt,
					replace : Et,
					html : Tt,
					value : xt
				}
			}();
			var p = function() {
				var t = function(e, t) {
					var n = e.parentElement(), r;
					var i = document.body.createTextRange(), s;
					var o = f.from(n.childNodes);
					for (r = 0; r < o.length; r++) {
						if (h.isText(o[r])) {
							continue
						}
						i.moveToElementText(o[r]);
						if (i.compareEndPoints("StartToStart", e) >= 0) {
							break
						}
						s = o[r]
					}
					if (r !== 0 && h.isText(o[r - 1])) {
						var u = document.body.createTextRange(), a = null;
						u.moveToElementText(s || n);
						u.collapse(!s);
						a = s ? s.nextSibling : n.firstChild;
						var l = e.duplicate();
						l.setEndPoint("StartToStart", u);
						var c = l.text.replace(/[\r\n]/g, "").length;
						while (c > a.nodeValue.length && a.nextSibling) {
							c -= a.nodeValue.length;
							a = a.nextSibling
						}
						var p = a.nodeValue;
						if (t && a.nextSibling && h.isText(a.nextSibling)
								&& c === a.nodeValue.length) {
							c -= a.nodeValue.length;
							a = a.nextSibling
						}
						n = a;
						r = c
					}
					return {
						cont : n,
						offset : r
					}
				};
				var n = function(e) {
					var t = function(e, n) {
						var r, i;
						if (h.isText(e)) {
							var s = h.listPrev(e, a.not(h.isText));
							var o = f.last(s).previousSibling;
							r = o || e.parentNode;
							n += f.sum(f.tail(s), h.nodeLength);
							i = !o
						} else {
							r = e.childNodes[n] || e;
							if (h.isText(r)) {
								return t(r, 0)
							}
							n = 0;
							i = false
						}
						return {
							node : r,
							collapseToStart : i,
							offset : n
						}
					};
					var n = document.body.createTextRange();
					var r = t(e.node, e.offset);
					n.moveToElementText(r.node);
					n.collapse(r.collapseToStart);
					n.moveStart("character", r.offset);
					return n
				};
				var r = function(t, i, s, o) {
					this.sc = t;
					this.so = i;
					this.ec = s;
					this.eo = o;
					var l = function() {
						if (u.isW3CRangeSupport) {
							var e = document.createRange();
							e.setStart(t, i);
							e.setEnd(s, o);
							return e
						} else {
							var r = n({
								node : t,
								offset : i
							});
							r.setEndPoint("EndToEnd", n({
								node : s,
								offset : o
							}));
							return r
						}
					};
					this.getPoints = function() {
						return {
							sc : t,
							so : i,
							ec : s,
							eo : o
						}
					};
					this.getStartPoint = function() {
						return {
							node : t,
							offset : i
						}
					};
					this.getEndPoint = function() {
						return {
							node : s,
							offset : o
						}
					};
					this.select = function() {
						var e = l();
						if (u.isW3CRangeSupport) {
							var t = document.getSelection();
							if (t.rangeCount > 0) {
								t.removeAllRanges()
							}
							t.addRange(e)
						} else {
							e.select()
						}
						return this
					};
					this.normalize = function() {
						var e = function(e, t) {
							if (h.isVisiblePoint(e) && !h.isEdgePoint(e)
									|| h.isVisiblePoint(e)
									&& h.isRightEdgePoint(e) && !t
									|| h.isVisiblePoint(e)
									&& h.isLeftEdgePoint(e) && t
									|| h.isVisiblePoint(e) && h.isBlock(e.node)
									&& h.isEmpty(e.node)) {
								return e
							}
							var n = h.ancestor(e.node, h.isBlock);
							if ((h.isLeftEdgePointOf(e, n) || h.isVoid(h
									.prevPoint(e).node))
									&& !t
									|| (h.isRightEdgePointOf(e, n) || h
											.isVoid(h.nextPoint(e).node)) && t) {
								if (h.isVisiblePoint(e)) {
									return e
								}
								t = !t
							}
							var r = t ? h.nextPointUntil(h.nextPoint(e),
									h.isVisiblePoint) : h.prevPointUntil(h
									.prevPoint(e), h.isVisiblePoint);
							return r || e
						};
						var t = e(this.getEndPoint(), false);
						var n = this.isCollapsed() ? t : e(
								this.getStartPoint(), true);
						return new r(n.node, n.offset, t.node, t.offset)
					};
					this.nodes = function(e, t) {
						e = e || a.ok;
						var n = t && t.includeAncestor;
						var r = t && t.fullyContains;
						var i = this.getStartPoint();
						var s = this.getEndPoint();
						var o = [];
						var u = [];
						h.walkPoint(i, s, function(t) {
							if (h.isEditable(t.node)) {
								return
							}
							var i;
							if (r) {
								if (h.isLeftEdgePoint(t)) {
									u.push(t.node)
								}
								if (h.isRightEdgePoint(t)
										&& f.contains(u, t.node)) {
									i = t.node
								}
							} else if (n) {
								i = h.ancestor(t.node, e)
							} else {
								i = t.node
							}
							if (i && e(i)) {
								o.push(i)
							}
						}, true);
						return f.unique(o)
					};
					this.commonAncestor = function() {
						return h.commonAncestor(t, s)
					};
					this.expand = function(e) {
						var n = h.ancestor(t, e);
						var u = h.ancestor(s, e);
						if (!n && !u) {
							return new r(t, i, s, o)
						}
						var a = this.getPoints();
						if (n) {
							a.sc = n;
							a.so = 0
						}
						if (u) {
							a.ec = u;
							a.eo = h.nodeLength(u)
						}
						return new r(a.sc, a.so, a.ec, a.eo)
					};
					this.collapse = function(e) {
						if (e) {
							return new r(t, i, t, i)
						} else {
							return new r(s, o, s, o)
						}
					};
					this.splitText = function() {
						var e = t === s;
						var n = this.getPoints();
						if (h.isText(s) && !h.isEdgePoint(this.getEndPoint())) {
							s.splitText(o)
						}
						if (h.isText(t) && !h.isEdgePoint(this.getStartPoint())) {
							n.sc = t.splitText(i);
							n.so = 0;
							if (e) {
								n.ec = n.sc;
								n.eo = o - i
							}
						}
						return new r(n.sc, n.so, n.ec, n.eo)
					};
					this.deleteContents = function() {
						if (this.isCollapsed()) {
							return this
						}
						var t = this.splitText();
						var n = t.nodes(null, {
							fullyContains : true
						});
						var i = h.prevPointUntil(t.getStartPoint(),
								function(e) {
									return !f.contains(n, e.node)
								});
						var s = [];
						e.each(n, function(e, t) {
							var n = t.parentNode;
							if (i.node !== n && h.nodeLength(n) === 1) {
								s.push(n)
							}
							h.remove(t, false)
						});
						e.each(s, function(e, t) {
							h.remove(t, false)
						});
						return (new r(i.node, i.offset, i.node, i.offset))
								.normalize()
					};
					var c = function(e) {
						return function() {
							var n = h.ancestor(t, e);
							return !!n && n === h.ancestor(s, e)
						}
					};
					this.isOnEditable = c(h.isEditable);
					this.isOnList = c(h.isList);
					this.isOnAnchor = c(h.isAnchor);
					this.isOnCell = c(h.isCell);
					this.isLeftEdgeOf = function(e) {
						if (!h.isLeftEdgePoint(this.getStartPoint())) {
							return false
						}
						var t = h.ancestor(this.sc, e);
						return t && h.isLeftEdgeOf(this.sc, t)
					};
					this.isCollapsed = function() {
						return t === s && i === o
					};
					this.wrapBodyInlineWithPara = function() {
						if (h.isBodyContainer(t) && h.isEmpty(t)) {
							t.innerHTML = h.emptyPara;
							return new r(t.firstChild, 0, t.firstChild, 0)
						}
						var e = this.normalize();
						if (h.isParaInline(t) || h.isPara(t)) {
							return e
						}
						var n;
						if (h.isInline(e.sc)) {
							var i = h.listAncestor(e.sc, a.not(h.isInline));
							n = f.last(i);
							if (!h.isInline(n)) {
								n = i[i.length - 2] || e.sc.childNodes[e.so]
							}
						} else {
							n = e.sc.childNodes[e.so > 0 ? e.so - 1 : 0]
						}
						var s = h.listPrev(n, h.isParaInline).reverse();
						s = s.concat(h.listNext(n.nextSibling, h.isParaInline));
						if (s.length) {
							var o = h.wrap(f.head(s), "p");
							h.appendChildNodes(o, f.tail(s))
						}
						return this.normalize()
					};
					this.insertNode = function(e) {
						var t = this.wrapBodyInlineWithPara().deleteContents();
						var n = h.splitPoint(t.getStartPoint(), h.isInline(e));
						if (n.rightNode) {
							n.rightNode.parentNode.insertBefore(e, n.rightNode)
						} else {
							n.container.appendChild(e)
						}
						return e
					};
					this.pasteHTML = function(t) {
						var n = e("<div></div>").html(t)[0];
						var r = f.from(n.childNodes);
						var i = this.wrapBodyInlineWithPara().deleteContents();
						return r.reverse().map(function(e) {
							return i.insertNode(e)
						}).reverse()
					};
					this.toString = function() {
						var e = l();
						return u.isW3CRangeSupport ? e.toString() : e.text
					};
					this.getWordRange = function(e) {
						var t = this.getEndPoint();
						if (!h.isCharPoint(t)) {
							return this
						}
						var n = h.prevPointUntil(t, function(e) {
							return !h.isCharPoint(e)
						});
						if (e) {
							t = h.nextPointUntil(t, function(e) {
								return !h.isCharPoint(e)
							})
						}
						return new r(n.node, n.offset, t.node, t.offset)
					};
					this.bookmark = function(e) {
						return {
							s : {
								path : h.makeOffsetPath(e, t),
								offset : i
							},
							e : {
								path : h.makeOffsetPath(e, s),
								offset : o
							}
						}
					};
					this.paraBookmark = function(e) {
						return {
							s : {
								path : f.tail(h.makeOffsetPath(f.head(e), t)),
								offset : i
							},
							e : {
								path : f.tail(h.makeOffsetPath(f.last(e), s)),
								offset : o
							}
						}
					};
					this.getClientRects = function() {
						var e = l();
						return e.getClientRects()
					}
				};
				return {
					create : function(e, n, i, s) {
						if (!arguments.length) {
							if (u.isW3CRangeSupport) {
								var o = document.getSelection();
								if (!o || o.rangeCount === 0) {
									return null
								} else if (h.isBody(o.anchorNode)) {
									return null
								}
								var a = o.getRangeAt(0);
								e = a.startContainer;
								n = a.startOffset;
								i = a.endContainer;
								s = a.endOffset
							} else {
								var f = document.selection.createRange();
								var l = f.duplicate();
								l.collapse(false);
								var c = f;
								c.collapse(true);
								var p = t(c, true), d = t(l, false);
								if (h.isText(p.node) && h.isLeftEdgePoint(p)
										&& h.isTextNode(d.node)
										&& h.isRightEdgePoint(d)
										&& d.node.nextSibling === p.node) {
									p = d
								}
								e = p.cont;
								n = p.offset;
								i = d.cont;
								s = d.offset
							}
						} else if (arguments.length === 2) {
							i = e;
							s = n
						}
						return new r(e, n, i, s)
					},
					createFromNode : function(e) {
						var t = e;
						var n = 0;
						var r = e;
						var i = h.nodeLength(r);
						if (h.isVoid(t)) {
							n = h.listPrev(t).length - 1;
							t = t.parentNode
						}
						if (h.isBR(r)) {
							i = h.listPrev(r).length - 1;
							r = r.parentNode
						} else if (h.isVoid(r)) {
							i = h.listPrev(r).length;
							r = r.parentNode
						}
						return this.create(t, n, r, i)
					},
					createFromNodeBefore : function(e) {
						return this.createFromNode(e).collapse(true)
					},
					createFromNodeAfter : function(e) {
						return this.createFromNode(e).collapse()
					},
					createFromBookmark : function(e, t) {
						var n = h.fromOffsetPath(e, t.s.path);
						var i = t.s.offset;
						var s = h.fromOffsetPath(e, t.e.path);
						var o = t.e.offset;
						return new r(n, i, s, o)
					},
					createFromParaBookmark : function(e, t) {
						var n = e.s.offset;
						var i = e.e.offset;
						var s = h.fromOffsetPath(f.head(t), e.s.path);
						var o = h.fromOffsetPath(f.last(t), e.e.path);
						return new r(s, n, o, i)
					}
				}
			}();
			var d = {
				version : "0.6.16",
				options : {
					width : null,
					height : null,
					minHeight : null,
					maxHeight : null,
					focus : false,
					tabsize : 4,
					styleWithSpan : true,
					disableLinkTarget : false,
					disableDragAndDrop : false,
					disableResizeEditor : false,
					disableResizeImage : false,
					shortcuts : true,
					textareaAutoSync : true,
					placeholder : false,
					prettifyHtml : true,
					iconPrefix : "fa fa-",
					icons : {
						font : {
							bold : "bold",
							italic : "italic",
							underline : "underline",
							clear : "eraser",
							height : "text-height",
							strikethrough : "strikethrough",
							superscript : "superscript",
							subscript : "subscript"
						},
						image : {
							image : "picture-o",
							floatLeft : "align-left",
							floatRight : "align-right",
							floatNone : "align-justify",
							shapeRounded : "square",
							shapeCircle : "circle-o",
							shapeThumbnail : "picture-o",
							shapeNone : "times",
							remove : "trash-o"
						},
						link : {
							link : "link",
							unlink : "unlink",
							edit : "edit"
						},
						table : {
							table : "table"
						},
						hr : {
							insert : "minus"
						},
						style : {
							style : "magic"
						},
						lists : {
							unordered : "list-ul",
							ordered : "list-ol"
						},
						options : {
							help : "question",
							fullscreen : "arrows-alt",
							codeview : "code"
						},
						paragraph : {
							paragraph : "align-left",
							outdent : "outdent",
							indent : "indent",
							left : "align-left",
							center : "align-center",
							right : "align-right",
							justify : "align-justify"
						},
						color : {
							recent : "font"
						},
						history : {
							undo : "undo",
							redo : "repeat"
						},
						misc : {
							check : "check"
						}
					},
					dialogsInBody : false,
					codemirror : {
						mode : "text/html",
						htmlMode : true,
						lineNumbers : true
					},
					lang : "en-US",
					direction : null,
					toolbar : [
							[ "style", [ "style" ] ],
							[ "font",
									[ "bold", "italic", "underline", "clear" ] ],
							[ "fontname", [ "fontname" ] ],
							[ "fontsize", [ "fontsize" ] ],
							[ "color", [ "color" ] ],
							[ "para", [ "ul", "ol", "paragraph" ] ],
							[ "height", [ "height" ] ],
							[ "table", [ "table" ] ],
							[ "insert", [ "link", "picture", "hr" ] ],
							[ "view", [ "fullscreen", "codeview" ] ],
							[ "help", [ "help" ] ] ],
					plugin : {},
					airMode : false,
					airPopover : [ [ "color", [ "color" ] ],
							[ "font", [ "bold", "underline", "clear" ] ],
							[ "para", [ "ul", "paragraph" ] ],
							[ "table", [ "table" ] ],
							[ "insert", [ "link", "picture" ] ] ],
					styleTags : [ "p", "blockquote", "pre", "h1", "h2", "h3",
							"h4", "h5", "h6" ],
					defaultFontName : "Helvetica Neue",
					fontNames : [ "Arial", "Arial Black", "Comic Sans MS",
							"Courier New", "Helvetica Neue", "Helvetica",
							"Impact", "Lucida Grande", "Tahoma",
							"Times New Roman", "Verdana" ],
					fontNamesIgnoreCheck : [],
					fontSizes : [ "8", "9", "10", "11", "12", "14", "18", "24",
							"36" ],
					colors : [
							[ "#000000", "#424242", "#636363", "#9C9C94",
									"#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF" ],
							[ "#FF0000", "#FF9C00", "#FFFF00", "#00FF00",
									"#00FFFF", "#0000FF", "#9C00FF", "#FF00FF" ],
							[ "#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6",
									"#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE" ],
							[ "#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5",
									"#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD" ],
							[ "#E76363", "#F7AD6B", "#FFD663", "#94BD7B",
									"#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5" ],
							[ "#CE0000", "#E79439", "#EFC631", "#6BA54A",
									"#4A7B8C", "#3984C6", "#634AA5", "#A54A7B" ],
							[ "#9C0000", "#B56308", "#BD9400", "#397B21",
									"#104A5A", "#085294", "#311873", "#731842" ],
							[ "#630000", "#7B3900", "#846300", "#295218",
									"#083139", "#003163", "#21104A", "#4A1031" ] ],
					lineHeights : [ "1.0", "1.2", "1.4", "1.5", "1.6", "1.8",
							"2.0", "3.0" ],
					insertTableMaxSize : {
						col : 10,
						row : 10
					},
					maximumImageFileSize : null,
					oninit : null,
					onfocus : null,
					onblur : null,
					onenter : null,
					onkeyup : null,
					onkeydown : null,
					onImageUpload : null,
					onImageUploadError : null,
					onMediaDelete : null,
					onToolbarClick : null,
					onsubmit : null,
					onCreateLink : function(e) {
						if (e.indexOf("@") !== -1 && e.indexOf(":") === -1) {
							e = "mailto:" + e
						}
						return e
					},
					keyMap : {
						pc : {
							ENTER : "insertParagraph",
							"CTRL+Z" : "undo",
							"CTRL+Y" : "redo",
							TAB : "tab",
							"SHIFT+TAB" : "untab",
							"CTRL+B" : "bold",
							"CTRL+I" : "italic",
							"CTRL+U" : "underline",
							"CTRL+SHIFT+S" : "strikethrough",
							"CTRL+BACKSLASH" : "removeFormat",
							"CTRL+SHIFT+L" : "justifyLeft",
							"CTRL+SHIFT+E" : "justifyCenter",
							"CTRL+SHIFT+R" : "justifyRight",
							"CTRL+SHIFT+J" : "justifyFull",
							"CTRL+SHIFT+NUM7" : "insertUnorderedList",
							"CTRL+SHIFT+NUM8" : "insertOrderedList",
							"CTRL+LEFTBRACKET" : "outdent",
							"CTRL+RIGHTBRACKET" : "indent",
							"CTRL+NUM0" : "formatPara",
							"CTRL+NUM1" : "formatH1",
							"CTRL+NUM2" : "formatH2",
							"CTRL+NUM3" : "formatH3",
							"CTRL+NUM4" : "formatH4",
							"CTRL+NUM5" : "formatH5",
							"CTRL+NUM6" : "formatH6",
							"CTRL+ENTER" : "insertHorizontalRule",
							"CTRL+K" : "showLinkDialog"
						},
						mac : {
							ENTER : "insertParagraph",
							"CMD+Z" : "undo",
							"CMD+SHIFT+Z" : "redo",
							TAB : "tab",
							"SHIFT+TAB" : "untab",
							"CMD+B" : "bold",
							"CMD+I" : "italic",
							"CMD+U" : "underline",
							"CMD+SHIFT+S" : "strikethrough",
							"CMD+BACKSLASH" : "removeFormat",
							"CMD+SHIFT+L" : "justifyLeft",
							"CMD+SHIFT+E" : "justifyCenter",
							"CMD+SHIFT+R" : "justifyRight",
							"CMD+SHIFT+J" : "justifyFull",
							"CMD+SHIFT+NUM7" : "insertUnorderedList",
							"CMD+SHIFT+NUM8" : "insertOrderedList",
							"CMD+LEFTBRACKET" : "outdent",
							"CMD+RIGHTBRACKET" : "indent",
							"CMD+NUM0" : "formatPara",
							"CMD+NUM1" : "formatH1",
							"CMD+NUM2" : "formatH2",
							"CMD+NUM3" : "formatH3",
							"CMD+NUM4" : "formatH4",
							"CMD+NUM5" : "formatH5",
							"CMD+NUM6" : "formatH6",
							"CMD+ENTER" : "insertHorizontalRule",
							"CMD+K" : "showLinkDialog"
						}
					}
				},
				lang : {
					"en-US" : {
						font : {
							bold : "Bold",
							italic : "Italic",
							underline : "Underline",
							clear : "Remove Font Style",
							height : "Line Height",
							name : "Font Family",
							strikethrough : "Strikethrough",
							subscript : "Subscript",
							superscript : "Superscript",
							size : "Font Size"
						},
						image : {
							image : "Picture",
							insert : "Insert Image",
							resizeFull : "Resize Full",
							resizeHalf : "Resize Half",
							resizeQuarter : "Resize Quarter",
							floatLeft : "Float Left",
							floatRight : "Float Right",
							floatNone : "Float None",
							shapeRounded : "Shape: Rounded",
							shapeCircle : "Shape: Circle",
							shapeThumbnail : "Shape: Thumbnail",
							shapeNone : "Shape: None",
							dragImageHere : "Drag image or text here",
							dropImage : "Drop image or Text",
							selectFromFiles : "Select from files",
							maximumFileSize : "Maximum file size",
							maximumFileSizeError : "Maximum file size exceeded.",
							url : "Image URL",
							remove : "Remove Image"
						},
						link : {
							link : "Link",
							insert : "Insert Link",
							unlink : "Unlink",
							edit : "Edit",
							textToDisplay : "Text to display",
							url : "To what URL should this link go?",
							openInNewWindow : "Open in new window"
						},
						table : {
							table : "Table"
						},
						hr : {
							insert : "Insert Horizontal Rule"
						},
						style : {
							style : "Style",
							normal : "Normal",
							blockquote : "Quote",
							pre : "Code",
							h1 : "Header 1",
							h2 : "Header 2",
							h3 : "Header 3",
							h4 : "Header 4",
							h5 : "Header 5",
							h6 : "Header 6"
						},
						lists : {
							unordered : "Unordered list",
							ordered : "Ordered list"
						},
						options : {
							help : "Help",
							fullscreen : "Full Screen",
							codeview : "Code View"
						},
						paragraph : {
							paragraph : "Paragraph",
							outdent : "Outdent",
							indent : "Indent",
							left : "Align left",
							center : "Align center",
							right : "Align right",
							justify : "Justify full"
						},
						color : {
							recent : "Recent Color",
							more : "More Color",
							background : "Background Color",
							foreground : "Foreground Color",
							transparent : "Transparent",
							setTransparent : "Set transparent",
							reset : "Reset",
							resetToDefault : "Reset to default"
						},
						shortcut : {
							shortcuts : "Keyboard shortcuts",
							close : "Close",
							textFormatting : "Text formatting",
							action : "Action",
							paragraphFormatting : "Paragraph formatting",
							documentStyle : "Document Style",
							extraKeys : "Extra keys"
						},
						history : {
							undo : "Undo",
							redo : "Redo"
						}
					}
				}
			};
			var v = function() {
				var t = function(t) {
					return e.Deferred(function(n) {
						e.extend(new FileReader, {
							onload : function(e) {
								var t = e.target.result;
								n.resolve(t)
							},
							onerror : function() {
								n.reject(this)
							}
						}).readAsDataURL(t)
					}).promise()
				};
				var n = function(t, n) {
					return e.Deferred(function(r) {
						var i = e("<img>");
						i.one("load", function() {
							i.off("error abort");
							r.resolve(i)
						}).one("error abort", function() {
							i.off("load").detach();
							r.reject(i)
						}).css({
							display : "none"
						}).appendTo(document.body).attr({
							src : t,
							"data-filename" : n
						})
					}).promise()
				};
				return {
					readFileAsDataURL : t,
					createImage : n
				}
			}();
			var m = function() {
				var e = {
					BACKSPACE : 8,
					TAB : 9,
					ENTER : 13,
					SPACE : 32,
					NUM0 : 48,
					NUM1 : 49,
					NUM2 : 50,
					NUM3 : 51,
					NUM4 : 52,
					NUM5 : 53,
					NUM6 : 54,
					NUM7 : 55,
					NUM8 : 56,
					B : 66,
					E : 69,
					I : 73,
					J : 74,
					K : 75,
					L : 76,
					R : 82,
					S : 83,
					U : 85,
					V : 86,
					Y : 89,
					Z : 90,
					SLASH : 191,
					LEFTBRACKET : 219,
					BACKSLASH : 220,
					RIGHTBRACKET : 221
				};
				return {
					isEdit : function(e) {
						return f.contains([ 8, 9, 13, 32 ], e)
					},
					isMove : function(e) {
						return f.contains([ 37, 38, 39, 40 ], e)
					},
					nameFromCode : a.invertObject(e),
					code : e
				}
			}();
			var g = function(e) {
				var t = [], n = -1;
				var r = e[0];
				var i = function() {
					var t = p.create();
					var n = {
						s : {
							path : [],
							offset : 0
						},
						e : {
							path : [],
							offset : 0
						}
					};
					return {
						contents : e.html(),
						bookmark : t ? t.bookmark(r) : n
					}
				};
				var s = function(t) {
					if (t.contents !== null) {
						e.html(t.contents)
					}
					if (t.bookmark !== null) {
						p.createFromBookmark(r, t.bookmark).select()
					}
				};
				this.undo = function() {
					if (e.html() !== t[n].contents) {
						this.recordUndo()
					}
					if (0 < n) {
						n--;
						s(t[n])
					}
				};
				this.redo = function() {
					if (t.length - 1 > n) {
						n++;
						s(t[n])
					}
				};
				this.recordUndo = function() {
					n++;
					if (t.length > n) {
						t = t.slice(0, n)
					}
					t.push(i())
				};
				this.recordUndo()
			};
			var y = function() {
				var t = function(t, n) {
					if (u.jqueryVersion < 1.9) {
						var r = {};
						e.each(n, function(e, n) {
							r[n] = t.css(n)
						});
						return r
					}
					return t.css.call(t, n)
				};
				this.fromNode = function(e) {
					var n = [ "font-family", "font-size", "text-align",
							"list-style-type", "line-height" ];
					var r = t(e, n) || {};
					r["font-size"] = parseInt(r["font-size"], 10);
					return r
				};
				this.stylePara = function(t, n) {
					e.each(t.nodes(h.isPara, {
						includeAncestor : true
					}), function(t, r) {
						e(r).css(n)
					})
				};
				this.styleNodes = function(t, n) {
					t = t.splitText();
					var r = n && n.nodeName || "SPAN";
					var i = !!(n && n.expandClosestSibling);
					var s = !!(n && n.onlyPartialContains);
					if (t.isCollapsed()) {
						return [ t.insertNode(h.create(r)) ]
					}
					var o = h.makePredByNodeName(r);
					var u = t.nodes(h.isText, {
						fullyContains : true
					}).map(function(e) {
						return h.singleChildAncestor(e, o) || h.wrap(e, r)
					});
					if (i) {
						if (s) {
							var l = t.nodes();
							o = a.and(o, function(e) {
								return f.contains(l, e)
							})
						}
						return u.map(function(t) {
							var n = h.withClosestSiblings(t, o);
							var r = f.head(n);
							var i = f.tail(n);
							e.each(i, function(e, t) {
								h.appendChildNodes(r, t.childNodes);
								h.remove(t)
							});
							return f.head(n)
						})
					} else {
						return u
					}
				};
				this.current = function(t) {
					var n = e(h.isText(t.sc) ? t.sc.parentNode : t.sc);
					var r = this.fromNode(n);
					r["font-bold"] = document.queryCommandState("bold") ? "bold"
							: "normal";
					r["font-italic"] = document.queryCommandState("italic") ? "italic"
							: "normal";
					r["font-underline"] = document
							.queryCommandState("underline") ? "underline"
							: "normal";
					r["font-strikethrough"] = document
							.queryCommandState("strikeThrough") ? "strikethrough"
							: "normal";
					r["font-superscript"] = document
							.queryCommandState("superscript") ? "superscript"
							: "normal";
					r["font-subscript"] = document
							.queryCommandState("subscript") ? "subscript"
							: "normal";
					if (!t.isOnList()) {
						r["list-style"] = "none"
					} else {
						var i = [ "circle", "disc", "disc-leading-zero",
								"square" ];
						var s = e.inArray(r["list-style-type"], i) > -1;
						r["list-style"] = s ? "unordered" : "ordered"
					}
					var o = h.ancestor(t.sc, h.isPara);
					if (o && o.style["line-height"]) {
						r["line-height"] = o.style.lineHeight
					} else {
						var u = parseInt(r["line-height"], 10)
								/ parseInt(r["font-size"], 10);
						r["line-height"] = u.toFixed(1)
					}
					r.anchor = t.isOnAnchor() && h.ancestor(t.sc, h.isAnchor);
					r.ancestors = h.listAncestor(t.sc, h.isEditable);
					r.range = t;
					return r
				}
			};
			var b = function() {
				this.insertOrderedList = function() {
					this.toggleList("OL")
				};
				this.insertUnorderedList = function() {
					this.toggleList("UL")
				};
				this.indent = function() {
					var t = this;
					var n = p.create().wrapBodyInlineWithPara();
					var r = n.nodes(h.isPara, {
						includeAncestor : true
					});
					var i = f.clusterBy(r, a.peq2("parentNode"));
					e.each(i, function(n, r) {
						var i = f.head(r);
						if (h.isLi(i)) {
							t.wrapList(r, i.parentNode.nodeName)
						} else {
							e.each(r, function(t, n) {
								e(n).css("marginLeft", function(e, t) {
									return (parseInt(t, 10) || 0) + 25
								})
							})
						}
					});
					n.select()
				};
				this.outdent = function() {
					var t = this;
					var n = p.create().wrapBodyInlineWithPara();
					var r = n.nodes(h.isPara, {
						includeAncestor : true
					});
					var i = f.clusterBy(r, a.peq2("parentNode"));
					e.each(i, function(n, r) {
						var i = f.head(r);
						if (h.isLi(i)) {
							t.releaseList([ r ])
						} else {
							e.each(r, function(t, n) {
								e(n).css("marginLeft", function(e, t) {
									t = parseInt(t, 10) || 0;
									return t > 25 ? t - 25 : ""
								})
							})
						}
					});
					n.select()
				};
				this.toggleList = function(t) {
					var n = this;
					var r = p.create().wrapBodyInlineWithPara();
					var i = r.nodes(h.isPara, {
						includeAncestor : true
					});
					var s = r.paraBookmark(i);
					var o = f.clusterBy(i, a.peq2("parentNode"));
					if (f.find(i, h.isPurePara)) {
						var u = [];
						e.each(o, function(e, r) {
							u = u.concat(n.wrapList(r, t))
						});
						i = u
					} else {
						var l = r.nodes(h.isList, {
							includeAncestor : true
						}).filter(function(n) {
							return !e.nodeName(n, t)
						});
						if (l.length) {
							e.each(l, function(e, n) {
								h.replace(n, t)
							})
						} else {
							i = this.releaseList(o, true)
						}
					}
					p.createFromParaBookmark(s, i).select()
				};
				this.wrapList = function(e, t) {
					var n = f.head(e);
					var r = f.last(e);
					var i = h.isList(n.previousSibling) && n.previousSibling;
					var s = h.isList(r.nextSibling) && r.nextSibling;
					var o = i || h.insertAfter(h.create(t || "UL"), r);
					e = e.map(function(e) {
						return h.isPurePara(e) ? h.replace(e, "LI") : e
					});
					h.appendChildNodes(o, e);
					if (s) {
						h.appendChildNodes(o, f.from(s.childNodes));
						h.remove(s)
					}
					return e
				};
				this.releaseList = function(t, n) {
					var r = [];
					e.each(t, function(t, i) {
						var s = f.head(i);
						var o = f.last(i);
						var u = n ? h.lastAncestor(s, h.isList) : s.parentNode;
						var a = u.childNodes.length > 1 ? h.splitTree(u, {
							node : o.parentNode,
							offset : h.position(o) + 1
						}, {
							isSkipPaddingBlankHTML : true
						}) : null;
						var l = h.splitTree(u, {
							node : s.parentNode,
							offset : h.position(s)
						}, {
							isSkipPaddingBlankHTML : true
						});
						i = n ? h.listDescendant(l, h.isLi) : f.from(
								l.childNodes).filter(h.isLi);
						if (n || !h.isList(u.parentNode)) {
							i = i.map(function(e) {
								return h.replace(e, "P")
							})
						}
						e.each(f.from(i).reverse(), function(e, t) {
							h.insertAfter(t, u)
						});
						var c = f.compact([ u, l, a ]);
						e.each(c,
								function(t, n) {
									var r = [ n ].concat(h.listDescendant(n,
											h.isList));
									e.each(r.reverse(), function(e, t) {
										if (!h.nodeLength(t)) {
											h.remove(t, true)
										}
									})
								});
						r = r.concat(i)
					});
					return r
				}
			};
			var w = function() {
				var t = new b;
				this.insertTab = function(e, t, n) {
					var r = h.createText((new Array(n + 1)).join(h.NBSP_CHAR));
					t = t.deleteContents();
					t.insertNode(r, true);
					t = p.create(r, n);
					t.select()
				};
				this.insertParagraph = function() {
					var n = p.create();
					n = n.deleteContents();
					n = n.wrapBodyInlineWithPara();
					var r = h.ancestor(n.sc, h.isPara);
					var i;
					if (r) {
						if (h.isEmpty(r) && h.isLi(r)) {
							t.toggleList(r.parentNode.nodeName);
							return
						} else {
							i = h.splitTree(r, n.getStartPoint());
							var s = h.listDescendant(r, h.isEmptyAnchor);
							s = s.concat(h.listDescendant(i, h.isEmptyAnchor));
							e.each(s, function(e, t) {
								h.remove(t)
							})
						}
					} else {
						var o = n.sc.childNodes[n.so];
						i = e(h.emptyPara)[0];
						if (o) {
							n.sc.insertBefore(i, o)
						} else {
							n.sc.appendChild(i)
						}
					}
					p.create(i, 0).normalize().select()
				}
			};
			var E = function() {
				this.tab = function(e, t) {
					var n = h.ancestor(e.commonAncestor(), h.isCell);
					var r = h.ancestor(n, h.isTable);
					var i = h.listDescendant(r, h.isCell);
					var s = f[t ? "prev" : "next"](i, n);
					if (s) {
						p.create(s, 0).select()
					}
				};
				this.createTable = function(t, n) {
					var r = [], i;
					for (var s = 0; s < t; s++) {
						r.push("<td>" + h.blank + "</td>")
					}
					i = r.join("");
					var o = [], u;
					for (var a = 0; a < n; a++) {
						o.push("<tr>" + i + "</tr>")
					}
					u = o.join("");
					return e('<table class="table table-bordered">' + u
							+ "</table>")[0]
				}
			};
			var S = "bogus";
			var x = function(t) {
				var n = this;
				var r = new y;
				var i = new E;
				var s = new w;
				var o = new b;
				this.createRange = function(e) {
					this.focus(e);
					return p.create()
				};
				this.saveRange = function(e, t) {
					this.focus(e);
					e.data("range", p.create());
					if (t) {
						p.create().collapse().select()
					}
				};
				this.saveNode = function(e) {
					var t = [];
					for (var n = 0, r = e[0].childNodes.length; n < r; n++) {
						t.push(e[0].childNodes[n])
					}
					e.data("childNodes", t)
				};
				this.restoreRange = function(e) {
					var t = e.data("range");
					if (t) {
						t.select();
						this.focus(e)
					}
				};
				this.restoreNode = function(e) {
					e.html("");
					var t = e.data("childNodes");
					for (var n = 0, r = t.length; n < r; n++) {
						e[0].appendChild(t[n])
					}
				};
				this.currentStyle = function(e) {
					var t = p.create();
					var n = t && t.isOnEditable() ? r.current(t.normalize())
							: {};
					if (h.isImg(e)) {
						n.image = e
					}
					return n
				};
				this.styleFromNode = function(e) {
					return r.fromNode(e)
				};
				var a = function(e) {
					var n = h.makeLayoutInfo(e).holder();
					t.bindCustomEvent(n, e.data("callbacks"), "before.command")
							(e.html(), e)
				};
				var l = function(e) {
					var n = h.makeLayoutInfo(e).holder();
					t.bindCustomEvent(n, e.data("callbacks"), "change")(
							e.html(), e)
				};
				this.undo = function(e) {
					a(e);
					e.data("NoteHistory").undo();
					l(e)
				};
				this.redo = function(e) {
					a(e);
					e.data("NoteHistory").redo();
					l(e)
				};
				var c = this.beforeCommand = function(e) {
					a(e);
					n.focus(e)
				};
				var d = this.afterCommand = function(e, t) {
					e.data("NoteHistory").recordUndo();
					if (!t) {
						l(e)
					}
				};
				var m = [ "bold", "italic", "underline", "strikethrough",
						"superscript", "subscript", "justifyLeft",
						"justifyCenter", "justifyRight", "justifyFull",
						"formatBlock", "removeFormat", "backColor",
						"foreColor", "fontName" ];
				for (var g = 0, x = m.length; g < x; g++) {
					this[m[g]] = function(e) {
						return function(t, n) {
							c(t);
							document.execCommand(e, false, n);
							d(t, true)
						}
					}(m[g])
				}
				this.tab = function(e, t) {
					var n = this.createRange(e);
					if (n.isCollapsed() && n.isOnCell()) {
						i.tab(n)
					} else {
						c(e);
						s.insertTab(e, n, t.tabsize);
						d(e)
					}
				};
				this.untab = function(e) {
					var t = this.createRange(e);
					if (t.isCollapsed() && t.isOnCell()) {
						i.tab(t, true)
					}
				};
				this.insertParagraph = function(e) {
					c(e);
					s.insertParagraph(e);
					d(e)
				};
				this.insertOrderedList = function(e) {
					c(e);
					o.insertOrderedList(e);
					d(e)
				};
				this.insertUnorderedList = function(e) {
					c(e);
					o.insertUnorderedList(e);
					d(e)
				};
				this.indent = function(e) {
					c(e);
					o.indent(e);
					d(e)
				};
				this.outdent = function(e) {
					c(e);
					o.outdent(e);
					d(e)
				};
				this.insertImage = function(e, n, r) {
					v.createImage(n, r).then(function(t) {
						c(e);
						var n = t.width() >= e.width() ? "100%" : t.width();
						t.css({
							display : "",
							width : n
						});
						p.create().insertNode(t[0]);
						p.createFromNodeAfter(t[0]).select();
						d(e)
					}).fail(
							function() {
								var n = h.makeLayoutInfo(e).holder();
								t.bindCustomEvent(n, e.data("callbacks"),
										"image.upload.error")()
							})
				};
				this.insertNode = function(e, t) {
					c(e);
					p.create().insertNode(t);
					p.createFromNodeAfter(t).select();
					d(e)
				};
				this.insertText = function(e, t) {
					c(e);
					var n = p.create().insertNode(h.createText(t));
					p.create(n, h.nodeLength(n)).select();
					d(e)
				};
				this.pasteHTML = function(e, t) {
					c(e);
					var n = p.create().pasteHTML(t);
					p.createFromNodeAfter(f.last(n)).select();
					d(e)
				};
				this.formatBlock = function(e, t) {
					c(e);
					t = u.isMSIE ? "<" + t + ">" : t;
					document.execCommand("FormatBlock", false, t);
					d(e)
				};
				this.formatPara = function(e) {
					c(e);
					this.formatBlock(e, "P");
					d(e)
				};
				for (var g = 1; g <= 6; g++) {
					this["formatH" + g] = function(e) {
						return function(t) {
							this.formatBlock(t, "H" + e)
						}
					}(g)
				}
				this.fontSize = function(t, n) {
					var i = p.create();
					if (i.isCollapsed()) {
						var s = r.styleNodes(i);
						var o = f.head(s);
						e(s).css({
							"font-size" : n + "px"
						});
						if (o && !h.nodeLength(o)) {
							o.innerHTML = h.ZERO_WIDTH_NBSP_CHAR;
							p.createFromNodeAfter(o.firstChild).select();
							t.data(S, o)
						}
					} else {
						c(t);
						e(r.styleNodes(i)).css({
							"font-size" : n + "px"
						});
						d(t)
					}
				};
				this.insertHorizontalRule = function(t) {
					c(t);
					var n = p.create();
					var r = n.insertNode(e("<HR/>")[0]);
					if (r.nextSibling) {
						p.create(r.nextSibling, 0).normalize().select()
					}
					d(t)
				};
				this.removeBogus = function(e) {
					var t = e.data(S);
					if (!t) {
						return
					}
					var n = f.find(f.from(t.childNodes), h.isText);
					var r = n.nodeValue.indexOf(h.ZERO_WIDTH_NBSP_CHAR);
					if (r !== -1) {
						n.deleteData(r, 1)
					}
					if (h.isEmpty(t)) {
						h.remove(t)
					}
					e.removeData(S)
				};
				this.lineHeight = function(e, t) {
					c(e);
					r.stylePara(p.create(), {
						lineHeight : t
					});
					d(e)
				};
				this.unlink = function(e) {
					var t = this.createRange(e);
					if (t.isOnAnchor()) {
						var n = h.ancestor(t.sc, h.isAnchor);
						t = p.createFromNode(n);
						t.select();
						c(e);
						document.execCommand("unlink");
						d(e)
					}
				};
				this.createLink = function(t, n, i) {
					var s = n.url;
					var o = n.text;
					var u = n.isNewWindow;
					var a = n.range || this.createRange(t);
					var l = a.toString() !== o;
					i = i || h.makeLayoutInfo(t).editor().data("options");
					c(t);
					if (i.onCreateLink) {
						s = i.onCreateLink(s)
					}
					var v = [];
					if (l) {
						var m = a.insertNode(e("<A>" + o + "</A>")[0]);
						v.push(m)
					} else {
						v = r.styleNodes(a, {
							nodeName : "A",
							expandClosestSibling : true,
							onlyPartialContains : true
						})
					}
					e.each(v, function(t, n) {
						e(n).attr("href", s);
						if (u) {
							e(n).attr("target", "_blank")
						} else {
							e(n).removeAttr("target")
						}
					});
					var g = p.createFromNodeBefore(f.head(v));
					var y = g.getStartPoint();
					var b = p.createFromNodeAfter(f.last(v));
					var w = b.getEndPoint();
					p.create(y.node, y.offset, w.node, w.offset).select();
					d(t)
				};
				this.getLinkInfo = function(t) {
					this.focus(t);
					var n = p.create().expand(h.isAnchor);
					var r = e(f.head(n.nodes(h.isAnchor)));
					return {
						range : n,
						text : n.toString(),
						isNewWindow : r.length ? r.attr("target") === "_blank"
								: false,
						url : r.length ? r.attr("href") : ""
					}
				};
				this.color = function(e, t) {
					var n = JSON.parse(t);
					var r = n.foreColor, i = n.backColor;
					c(e);
					if (r) {
						document.execCommand("foreColor", false, r)
					}
					if (i) {
						document.execCommand("backColor", false, i)
					}
					d(e)
				};
				this.insertTable = function(e, t) {
					var n = t.split("x");
					c(e);
					var r = p.create().deleteContents();
					r.insertNode(i.createTable(n[0], n[1]));
					d(e)
				};
				this.floatMe = function(e, t, n) {
					c(e);
					n.removeClass("pull-left pull-right");
					if (t && t !== "none") {
						n.addClass("pull-" + t)
					}
					n.css("float", t);
					d(e)
				};
				this.imageShape = function(e, t, n) {
					c(e);
					n.removeClass("img-rounded img-circle img-thumbnail");
					if (t) {
						n.addClass(t)
					}
					d(e)
				};
				this.resize = function(e, t, n) {
					c(e);
					n.css({
						width : t * 100 + "%",
						height : ""
					});
					d(e)
				};
				this.resizeTo = function(e, t, n) {
					var r;
					if (n) {
						var i = e.y / e.x;
						var s = t.data("ratio");
						r = {
							width : s > i ? e.x : e.y / s,
							height : s > i ? e.x * s : e.y
						}
					} else {
						r = {
							width : e.x,
							height : e.y
						}
					}
					t.css(r)
				};
				this.removeMedia = function(n, r, i) {
					c(n);
					i.detach();
					t.bindCustomEvent(e(), n.data("callbacks"), "media.delete")
							(i, n);
					d(n)
				};
				this.focus = function(e) {
					e.focus();
					if (u.isFF && !p.create().isOnEditable()) {
						p.createFromNode(e[0]).normalize().collapse().select()
					}
				};
				this.isEmpty = function(e) {
					return h.isEmpty(e[0]) || h.emptyPara === e.html()
				}
			};
			var T = function() {
				this.update = function(t, n) {
					var r = function(t, n) {
						t.find(".dropdown-menu li a").each(function() {
							var t = e(this).data("value") + "" === n + "";
							this.className = t ? "checked" : ""
						})
					};
					var i = function(e, n) {
						var r = t.find(e);
						r.toggleClass("active", n())
					};
					if (n.image) {
						var s = e(n.image);
						i(
								'button[data-event="imageShape"][data-value="img-rounded"]',
								function() {
									return s.hasClass("img-rounded")
								});
						i(
								'button[data-event="imageShape"][data-value="img-circle"]',
								function() {
									return s.hasClass("img-circle")
								});
						i(
								'button[data-event="imageShape"][data-value="img-thumbnail"]',
								function() {
									return s.hasClass("img-thumbnail")
								});
						i(
								'button[data-event="imageShape"]:not([data-value])',
								function() {
									return !s
											.is(".img-rounded, .img-circle, .img-thumbnail")
								});
						var o = s.css("float");
						i('button[data-event="floatMe"][data-value="left"]',
								function() {
									return o === "left"
								});
						i('button[data-event="floatMe"][data-value="right"]',
								function() {
									return o === "right"
								});
						i('button[data-event="floatMe"][data-value="none"]',
								function() {
									return o !== "left" && o !== "right"
								});
						var a = s.attr("style");
						i('button[data-event="resize"][data-value="1"]',
								function() {
									return !!/(^|\s)(max-)?width\s*:\s*100%/
											.test(a)
								});
						i('button[data-event="resize"][data-value="0.5"]',
								function() {
									return !!/(^|\s)(max-)?width\s*:\s*50%/
											.test(a)
								});
						i('button[data-event="resize"][data-value="0.25"]',
								function() {
									return !!/(^|\s)(max-)?width\s*:\s*25%/
											.test(a)
								});
						return
					}
					var f = t.find(".note-fontname");
					if (f.length) {
						var l = n["font-family"];
						if (!!l) {
							var c = l.split(",");
							for (var h = 0, p = c.length; h < p; h++) {
								l = c[h].replace(/[\'\"]/g, "").replace(/\s+$/,
										"").replace(/^\s+/, "");
								if (u.isFontInstalled(l)) {
									break
								}
							}
							f.find(".note-current-fontname").text(l);
							r(f, l)
						}
					}
					var d = t.find(".note-fontsize");
					d.find(".note-current-fontsize").text(n["font-size"]);
					r(d, parseFloat(n["font-size"]));
					var v = t.find(".note-height");
					r(v, parseFloat(n["line-height"]));
					i('button[data-event="bold"]', function() {
						return n["font-bold"] === "bold"
					});
					i('button[data-event="italic"]', function() {
						return n["font-italic"] === "italic"
					});
					i('button[data-event="underline"]', function() {
						return n["font-underline"] === "underline"
					});
					i('button[data-event="strikethrough"]', function() {
						return n["font-strikethrough"] === "strikethrough"
					});
					i('button[data-event="superscript"]', function() {
						return n["font-superscript"] === "superscript"
					});
					i('button[data-event="subscript"]', function() {
						return n["font-subscript"] === "subscript"
					});
					i('button[data-event="justifyLeft"]', function() {
						return n["text-align"] === "left"
								|| n["text-align"] === "start"
					});
					i('button[data-event="justifyCenter"]', function() {
						return n["text-align"] === "center"
					});
					i('button[data-event="justifyRight"]', function() {
						return n["text-align"] === "right"
					});
					i('button[data-event="justifyFull"]', function() {
						return n["text-align"] === "justify"
					});
					i('button[data-event="insertUnorderedList"]', function() {
						return n["list-style"] === "unordered"
					});
					i('button[data-event="insertOrderedList"]', function() {
						return n["list-style"] === "ordered"
					})
				};
				this.updateRecentColor = function(t, n, r) {
					var i = e(t).closest(".note-color");
					var s = i.find(".note-recent-color");
					var o = JSON.parse(s.attr("data-value"));
					o[n] = r;
					s.attr("data-value", JSON.stringify(o));
					var u = n === "backColor" ? "background-color" : "color";
					s.find("i").css(u, r)
				}
			};
			var N = function() {
				var e = new T;
				this.update = function(t, n) {
					e.update(t, n)
				};
				this.updateRecentColor = function(t, n, r) {
					e.updateRecentColor(t, n, r)
				};
				this.activate = function(e) {
					e.find("button").not('button[data-event="codeview"]')
							.removeClass("disabled")
				};
				this.deactivate = function(e) {
					e.find("button").not('button[data-event="codeview"]')
							.addClass("disabled")
				};
				this.updateFullscreen = function(e, t) {
					var n = e.find('button[data-event="fullscreen"]');
					n.toggleClass("active", t)
				};
				this.updateCodeview = function(e, t) {
					var n = e.find('button[data-event="codeview"]');
					n.toggleClass("active", t);
					if (t) {
						this.deactivate(e)
					} else {
						this.activate(e)
					}
				};
				this.get = function(e, t) {
					var n = h.makeLayoutInfo(e).toolbar();
					return n.find("[data-name=" + t + "]")
				};
				this.setButtonState = function(e, t, n) {
					n = n === false ? false : true;
					var r = this.get(e, t);
					r.toggleClass("active", n)
				}
			};
			var C = 24;
			var k = function() {
				var t = e(document);
				this.attach = function(e, t) {
					if (!t.disableResizeEditor) {
						e.statusbar().on("mousedown", n)
					}
				};
				var n = function(e) {
					e.preventDefault();
					e.stopPropagation();
					var n = h.makeLayoutInfo(e.target).editable();
					var r = n.offset().top - t.scrollTop();
					var i = h.makeLayoutInfo(e.currentTarget || e.target);
					var s = i.editor().data("options");
					t.on("mousemove", function(e) {
						var t = e.clientY - (r + C);
						t = s.minHeight > 0 ? Math.max(t, s.minHeight) : t;
						t = s.maxHeight > 0 ? Math.min(t, s.maxHeight) : t;
						n.height(t)
					}).one("mouseup", function() {
						t.off("mousemove")
					})
				}
			};
			var L = function() {
				var t = new T;
				var n = function(t, n) {
					var r = n && n.isAirMode;
					var i = n && n.isLeftTop;
					var s = e(t);
					var o = r ? s.offset() : s.position();
					var u = i ? 0 : s.outerHeight(true);
					return {
						left : o.left,
						top : o.top + u
					}
				};
				var r = function(e, t) {
					e.css({
						display : "block",
						left : t.left,
						top : t.top
					})
				};
				var i = 20;
				this.update = function(s, o, u) {
					t.update(s, o);
					var l = s.find(".note-link-popover");
					if (o.anchor) {
						var c = l.find("a");
						var h = e(o.anchor).attr("href");
						var p = e(o.anchor).attr("target");
						c.attr("href", h).html(h);
						if (!p) {
							c.removeAttr("target")
						} else {
							c.attr("target", "_blank")
						}
						r(l, n(o.anchor, {
							isAirMode : u
						}))
					} else {
						l.hide()
					}
					var d = s.find(".note-image-popover");
					if (o.image) {
						r(d, n(o.image, {
							isAirMode : u,
							isLeftTop : true
						}))
					} else {
						d.hide()
					}
					var v = s.find(".note-air-popover");
					if (u && o.range && !o.range.isCollapsed()) {
						var m = f.last(o.range.getClientRects());
						if (m) {
							var g = a.rect2bnd(m);
							r(v, {
								left : Math.max(g.left + g.width / 2 - i, 0),
								top : g.top + g.height
							})
						}
					} else {
						v.hide()
					}
				};
				this.updateRecentColor = function(e, t, n) {
					e.updateRecentColor(e, t, n)
				};
				this.hide = function(e) {
					e.children().hide()
				}
			};
			var A = function(t) {
				var n = e(document);
				var r = function(r) {
					if (h.isControlSizing(r.target)) {
						r.preventDefault();
						r.stopPropagation();
						var i = h.makeLayoutInfo(r.target), s = i.handle(), o = i
								.popover(), u = i.editable(), a = i.editor();
						var f = s.find(".note-control-selection")
								.data("target"), l = e(f), c = l.offset(), p = n
								.scrollTop();
						var d = a.data("options").airMode;
						n.on("mousemove", function(e) {
							t.invoke("editor.resizeTo", {
								x : e.clientX - c.left,
								y : e.clientY - (c.top - p)
							}, l, !e.shiftKey);
							t.invoke("handle.update", s, {
								image : f
							}, d);
							t.invoke("popover.update", o, {
								image : f
							}, d)
						}).one("mouseup", function() {
							n.off("mousemove");
							t.invoke("editor.afterCommand", u)
						});
						if (!l.data("ratio")) {
							l.data("ratio", l.height() / l.width())
						}
					}
				};
				this.attach = function(e) {
					e.handle().on("mousedown", r)
				};
				this.update = function(t, n, r) {
					var i = t.find(".note-control-selection");
					if (n.image) {
						var s = e(n.image);
						var o = r ? s.offset() : s.position();
						var u = {
							w : s.outerWidth(true),
							h : s.outerHeight(true)
						};
						i.css({
							display : "block",
							left : o.left,
							top : o.top,
							width : u.w,
							height : u.h
						}).data("target", n.image);
						var a = u.w + "x" + u.h;
						i.find(".note-control-selection-info").text(a)
					} else {
						i.hide()
					}
				};
				this.hide = function(e) {
					e.children().hide()
				}
			};
			var O = function(t) {
				var n = e(window);
				var r = e("html, body");
				this.toggle = function(e) {
					var i = e.editor(), s = e.toolbar(), o = e.editable(), u = e
							.codable();
					var a = function(e) {
						o.css("height", e.h);
						u.css("height", e.h);
						if (u.data("cmeditor")) {
							u.data("cmeditor").setsize(null, e.h)
						}
					};
					i.toggleClass("fullscreen");
					var f = i.hasClass("fullscreen");
					if (f) {
						o.data("orgheight", o.css("height"));
						n.on("resize", function() {
							a({
								h : n.height() - s.outerHeight()
							})
						}).trigger("resize");
						r.css("overflow", "hidden")
					} else {
						n.off("resize");
						a({
							h : o.data("orgheight")
						});
						r.css("overflow", "visible")
					}
					t.invoke("toolbar.updateFullscreen", s, f)
				}
			};
			var M;
			if (u.hasCodeMirror) {
				if (u.isSupportAmd) {
					require([ "CodeMirror" ], function(e) {
						M = e
					})
				} else {
					M = window.CodeMirror
				}
			}
			var _ = function(e) {
				this.sync = function(t) {
					var n = e.invoke("codeview.isActivated", t);
					if (n && u.hasCodeMirror) {
						t.codable().data("cmEditor").save()
					}
				};
				this.isActivated = function(e) {
					var t = e.editor();
					return t.hasClass("codeview")
				};
				this.toggle = function(e) {
					if (this.isActivated(e)) {
						this.deactivate(e)
					} else {
						this.activate(e)
					}
				};
				this.activate = function(t) {
					var n = t.editor(), r = t.toolbar(), i = t.editable(), s = t
							.codable(), o = t.popover(), a = t.handle();
					var f = n.data("options");
					s.val(h.html(i, f.prettifyHtml));
					s.height(i.height());
					e.invoke("toolbar.updateCodeview", r, true);
					e.invoke("popover.hide", o);
					e.invoke("handle.hide", a);
					n.addClass("codeview");
					s.focus();
					if (u.hasCodeMirror) {
						var l = M.fromTextArea(s[0], f.codemirror);
						if (f.codemirror.tern) {
							var c = new M.TernServer(f.codemirror.tern);
							l.ternServer = c;
							l.on("cursorActivity", function(e) {
								c.updateArgHints(e)
							})
						}
						l.setSize(null, i.outerHeight());
						s.data("cmEditor", l)
					}
				};
				this.deactivate = function(t) {
					var n = t.holder(), r = t.editor(), i = t.toolbar(), s = t
							.editable(), o = t.codable();
					var a = r.data("options");
					if (u.hasCodeMirror) {
						var f = o.data("cmEditor");
						o.val(f.getValue());
						f.toTextArea()
					}
					var l = h.value(o, a.prettifyHtml) || h.emptyPara;
					var c = s.html() !== l;
					s.html(l);
					s.height(a.height ? o.height() : "auto");
					r.removeClass("codeview");
					if (c) {
						e.bindCustomEvent(n, s.data("callbacks"), "change")(
								s.html(), s)
					}
					s.focus();
					e.invoke("toolbar.updateCodeview", i, false)
				}
			};
			var D = function(t) {
				var n = e(document);
				this.attach = function(e, t) {
					if (t.airMode || t.disableDragAndDrop) {
						n.on("drop", function(e) {
							e.preventDefault()
						})
					} else {
						this.attachDragAndDropEvent(e, t)
					}
				};
				this.attachDragAndDropEvent = function(r, i) {
					var s = e(), o = r.editor(), u = r.dropzone(), a = u
							.find(".note-dropzone-message");
					n.on("dragenter", function(e) {
						var n = t.invoke("codeview.isActivated", r);
						var f = o.width() > 0 && o.height() > 0;
						if (!n && !s.length && f) {
							o.addClass("dragover");
							u.width(o.width());
							u.height(o.height());
							a.text(i.langInfo.image.dragImageHere)
						}
						s = s.add(e.target)
					}).on("dragleave", function(e) {
						s = s.not(e.target);
						if (!s.length) {
							o.removeClass("dragover")
						}
					}).on("drop", function() {
						s = e();
						o.removeClass("dragover")
					});
					u.on("dragenter", function() {
						u.addClass("hover");
						a.text(i.langInfo.image.dropImage)
					}).on("dragleave", function() {
						u.removeClass("hover");
						a.text(i.langInfo.image.dragImageHere)
					});
					u.on("drop", function(n) {
						var r = n.originalEvent.dataTransfer;
						var i = h.makeLayoutInfo(n.currentTarget || n.target);
						if (r && r.files && r.files.length) {
							n.preventDefault();
							i.editable().focus();
							t.insertImages(i, r.files)
						} else {
							var s = function() {
								i.holder().summernote("insertNode", this)
							};
							for (var o = 0, u = r.types.length; o < u; o++) {
								var a = r.types[o];
								var f = r.getData(a);
								if (a.toLowerCase().indexOf("text") > -1) {
									i.holder().summernote("pasteHTML", f)
								} else {
									e(f).each(s)
								}
							}
						}
					}).on("dragover", false)
				}
			};
			var P = function(t) {
				var n;
				this.attach = function(s) {
					if (u.isMSIE && u.browserVersion > 10 || u.isFF) {
						n = e("<div />").attr("contenteditable", true).css({
							position : "absolute",
							left : -1e5,
							opacity : 0
						});
						s.editable().on("keydown", function(e) {
							if (e.ctrlKey && e.keyCode === m.code.V) {
								t.invoke("saveRange", s.editable());
								n.focus();
								setTimeout(function() {
									r(s)
								}, 0)
							}
						});
						s.editable().before(n)
					} else {
						s.editable().on("paste", i)
					}
				};
				var r = function(r) {
					var i = r.editable();
					var s = n[0].firstChild;
					if (h.isImg(s)) {
						var o = s.src;
						var u = atob(o.split(",")[1]);
						var a = new Uint8Array(u.length);
						for (var f = 0; f < u.length; f++) {
							a[f] = u.charCodeAt(f)
						}
						var l = new Blob([ a ], {
							type : "image/png"
						});
						l.name = "clipboard.png";
						t.invoke("restoreRange", i);
						t.invoke("focus", i);
						t.insertImages(r, [ l ])
					} else {
						var c = e("<div />").html(n.html()).html();
						t.invoke("restoreRange", i);
						t.invoke("focus", i);
						if (c) {
							t.invoke("pasteHTML", i, c)
						}
					}
					n.empty()
				};
				var i = function(e) {
					var n = e.originalEvent.clipboardData;
					var r = h.makeLayoutInfo(e.currentTarget || e.target);
					var i = r.editable();
					if (n && n.items && n.items.length) {
						var s = f.head(n.items);
						if (s.kind === "file"
								&& s.type.indexOf("image/") !== -1) {
							t.insertImages(r, [ s.getAsFile() ])
						}
						t.invoke("editor.afterCommand", i)
					}
				}
			};
			var H = function(t) {
				var n = function(e, t) {
					e.toggleClass("disabled", !t);
					e.attr("disabled", !t)
				};
				var r = function(e, t) {
					e.on("keypress", function(e) {
						if (e.keyCode === m.code.ENTER) {
							t.trigger("click")
						}
					})
				};
				this.showLinkDialog = function(t, i, s) {
					return e.Deferred(
							function(e) {
								var t = i.find(".note-link-dialog");
								var o = t.find(".note-link-text"), u = t
										.find(".note-link-url"), a = t
										.find(".note-link-btn"), f = t
										.find("input[type=checkbox]");
								t.one(
										"shown.bs.modal",
										function() {
											o.val(s.text);
											o.on("input", function() {
												n(a, o.val() && u.val());
												s.text = o.val()
											});
											if (!s.url) {
												s.url = s.text || "http://";
												n(a, s.text)
											}
											u.on("input", function() {
												n(a, o.val() && u.val());
												if (!s.text) {
													o.val(u.val())
												}
											}).val(s.url).trigger("focus")
													.trigger("select");
											r(u, a);
											r(o, a);
											f.prop("checked", s.isNewWindow);
											a.one("click", function(n) {
												n.preventDefault();
												e.resolve({
													range : s.range,
													url : u.val(),
													text : o.val(),
													isNewWindow : f
															.is(":checked")
												});
												t.modal("hide")
											})
										}).one("hidden.bs.modal", function() {
									o.off("input keypress");
									u.off("input keypress");
									a.off("click");
									if (e.state() === "pending") {
										e.reject()
									}
								}).modal("show")
							}).promise()
				};
				this.show = function(e) {
					var n = e.editor(), r = e.dialog(), i = e.editable(), s = e
							.popover(), o = t.invoke("editor.getLinkInfo", i);
					var u = n.data("options");
					t.invoke("editor.saveRange", i);
					this.showLinkDialog(i, r, o).then(function(e) {
						t.invoke("editor.restoreRange", i);
						t.invoke("editor.createLink", i, e, u);
						t.invoke("popover.hide", s)
					}).fail(function() {
						t.invoke("editor.restoreRange", i)
					})
				}
			};
			var B = function(t) {
				var n = function(e, t) {
					e.toggleClass("disabled", !t);
					e.attr("disabled", !t)
				};
				var r = function(e, t) {
					e.on("keypress", function(e) {
						if (e.keyCode === m.code.ENTER) {
							t.trigger("click")
						}
					})
				};
				this.show = function(e) {
					var n = e.dialog(), r = e.editable();
					t.invoke("editor.saveRange", r);
					this.showImageDialog(r, n).then(function(n) {
						t.invoke("editor.restoreRange", r);
						if (typeof n === "string") {
							t.invoke("editor.insertImage", r, n)
						} else {
							t.insertImages(e, n)
						}
					}).fail(function() {
						t.invoke("editor.restoreRange", r)
					})
				};
				this.showImageDialog = function(t, i) {
					return e
							.Deferred(function(e) {
								var t = i.find(".note-image-dialog");
								var s = i.find(".note-image-input"), o = i
										.find(".note-image-url"), u = i
										.find(".note-image-btn");
								t
										.one(
												"shown.bs.modal",
												function() {
													s
															.replaceWith(s
																	.clone()
																	.on(
																			"change",
																			function() {
																				e
																						.resolve(this.files
																								|| this.value);
																				t
																						.modal("hide")
																			})
																	.val(""));
													u.click(function(n) {
														n.preventDefault();
														e.resolve(o.val());
														t.modal("hide")
													});
													o
															.on(
																	"keyup paste",
																	function(e) {
																		var t;
																		if (e.type === "paste") {
																			t = e.originalEvent.clipboardData
																					.getData("text")
																		} else {
																			t = o
																					.val()
																		}
																		n(u, t)
																	}).val("")
															.trigger("focus");
													r(o, u)
												})
										.one("hidden.bs.modal", function() {
											s.off("change");
											o.off("keyup paste keypress");
											u.off("click");
											if (e.state() === "pending") {
												e.reject()
											}
										}).modal("show")
							})
				}
			};
			var j = function(t) {
				this.showHelpDialog = function(t, n) {
					return e.Deferred(function(e) {
						var t = n.find(".note-help-dialog");
						t.one("hidden.bs.modal", function() {
							e.resolve()
						}).modal("show")
					}).promise()
				};
				this.show = function(e) {
					var n = e.dialog(), r = e.editable();
					t.invoke("editor.saveRange", r, true);
					this.showHelpDialog(r, n).then(function() {
						t.invoke("editor.restoreRange", r)
					})
				}
			};
			var F = function() {
				var t = this;
				var n = this.modules = {
					editor : new x(this),
					toolbar : new N(this),
					statusbar : new k(this),
					popover : new L(this),
					handle : new A(this),
					fullscreen : new O(this),
					codeview : new _(this),
					dragAndDrop : new D(this),
					clipboard : new P(this),
					linkDialog : new H(this),
					imageDialog : new B(this),
					helpDialog : new j(this)
				};
				this.invoke = function() {
					var e = f.head(f.from(arguments));
					var t = f.tail(f.from(arguments));
					var n = e.split(".");
					var r = n.length > 1;
					var i = r && f.head(n);
					var s = r ? f.last(n) : f.head(n);
					var o = this.getModule(i);
					var u = o[s];
					return u && u.apply(o, t)
				};
				this.getModule = function(e) {
					return this.modules[e] || this.modules.editor
				};
				var r = this.bindCustomEvent = function(e, t, n) {
					return function() {
						var r = t[a.namespaceToCamel(n, "on")];
						if (r) {
							r.apply(e[0], arguments)
						}
						return e.trigger("summernote." + n, arguments)
					}
				};
				this.insertImages = function(t, i) {
					var s = t.editor(), o = t.editable(), u = t.holder();
					var a = o.data("callbacks");
					var f = s.data("options");
					if (a.onImageUpload) {
						r(u, a, "image.upload")(i)
					} else {
						e
								.each(
										i,
										function(e, t) {
											var i = t.name;
											if (f.maximumImageFileSize
													&& f.maximumImageFileSize < t.size) {
												r(u, a, "image.upload.error")
														(
																f.langInfo.image.maximumFileSizeError)
											} else {
												v
														.readFileAsDataURL(t)
														.then(
																function(e) {
																	n.editor
																			.insertImage(
																					o,
																					e,
																					i)
																})
														.fail(
																function() {
																	r(u, a,
																			"image.upload.error")
																			(
																					f.langInfo.image.maximumFileSizeError)
																})
											}
										})
					}
				};
				var i = {
					showLinkDialog : function(e) {
						n.linkDialog.show(e)
					},
					showImageDialog : function(e) {
						n.imageDialog.show(e)
					},
					showHelpDialog : function(e) {
						n.helpDialog.show(e)
					},
					fullscreen : function(e) {
						n.fullscreen.toggle(e)
					},
					codeview : function(e) {
						n.codeview.toggle(e)
					}
				};
				var s = function(e) {
					if (h.isImg(e.target)) {
						e.preventDefault()
					}
				};
				var o = function(e) {
					var t = h.makeLayoutInfo(e.currentTarget || e.target);
					n.editor.removeBogus(t.editable());
					l(e)
				};
				this.updateStyleInfo = function(e, t) {
					if (!e) {
						return
					}
					var r = t.editor().data("options").airMode;
					if (!r) {
						n.toolbar.update(t.toolbar(), e)
					}
					n.popover.update(t.popover(), e, r);
					n.handle.update(t.handle(), e, r)
				};
				var l = function(e) {
					var r = e.target;
					setTimeout(function() {
						var e = h.makeLayoutInfo(r);
						var i = n.editor.currentStyle(r);
						t.updateStyleInfo(i, e)
					}, 0)
				};
				var c = function(e) {
					var t = h.makeLayoutInfo(e.currentTarget || e.target);
					n.popover.hide(t.popover());
					n.handle.hide(t.handle())
				};
				var p = function(t) {
					var n = e(t.target).closest("[data-event]");
					if (n.length) {
						t.preventDefault()
					}
				};
				var d = function(t) {
					var r = e(t.target).closest("[data-event]");
					if (!r.length) {
						return
					}
					var s = r.attr("data-event"), o = r.attr("data-value"), u = r
							.attr("data-hide");
					var a = h.makeLayoutInfo(t.target);
					var c;
					if (e.inArray(s, [ "resize", "floatMe", "removeMedia",
							"imageShape" ]) !== -1) {
						var p = a.handle().find(".note-control-selection");
						c = e(p.data("target"))
					}
					if (u) {
						r.parents(".popover").hide()
					}
					if (e.isFunction(e.summernote.pluginEvents[s])) {
						e.summernote.pluginEvents[s](t, n.editor, a, o)
					} else if (n.editor[s]) {
						var d = a.editable();
						d.focus();
						n.editor[s](d, o, c);
						t.preventDefault()
					} else if (i[s]) {
						i[s].call(this, a);
						t.preventDefault()
					}
					if (e.inArray(s, [ "backColor", "foreColor" ]) !== -1) {
						var v = a.editor().data("options", v);
						var m = v.airMode ? n.popover : n.toolbar;
						m.updateRecentColor(f.head(r), s, o)
					}
					l(t)
				};
				var y = 18;
				var b = function(t, n) {
					var r = e(t.target.parentNode);
					var i = r.next();
					var s = r.find(".note-dimension-picker-mousecatcher");
					var o = r.find(".note-dimension-picker-highlighted");
					var u = r.find(".note-dimension-picker-unhighlighted");
					var a;
					if (t.offsetX === undefined) {
						var f = e(t.target).offset();
						a = {
							x : t.pageX - f.left,
							y : t.pageY - f.top
						}
					} else {
						a = {
							x : t.offsetX,
							y : t.offsetY
						}
					}
					var l = {
						c : Math.ceil(a.x / y) || 1,
						r : Math.ceil(a.y / y) || 1
					};
					o.css({
						width : l.c + "em",
						height : l.r + "em"
					});
					s.attr("data-value", l.c + "x" + l.r);
					if (3 < l.c && l.c < n.insertTableMaxSize.col) {
						u.css({
							width : l.c + 1 + "em"
						})
					}
					if (3 < l.r && l.r < n.insertTableMaxSize.row) {
						u.css({
							height : l.r + 1 + "em"
						})
					}
					i.html(l.c + " x " + l.r)
				};
				this.bindKeyMap = function(t, r) {
					var s = t.editor();
					var o = t.editable();
					o.on("keydown", function(u) {
						var a = [];
						if (u.metaKey) {
							a.push("CMD")
						}
						if (u.ctrlKey && !u.altKey) {
							a.push("CTRL")
						}
						if (u.shiftKey) {
							a.push("SHIFT")
						}
						var f = m.nameFromCode[u.keyCode];
						if (f) {
							a.push(f)
						}
						var l;
						var c = a.join("+");
						var h = r[c];
						if (h) {
							l = e.summernote.pluginEvents[c];
							if (e.isFunction(l)) {
								if (l(u, n.editor, t)) {
									return false
								}
							}
							l = e.summernote.pluginEvents[h];
							if (e.isFunction(l)) {
								l(u, n.editor, t)
							} else if (n.editor[h]) {
								n.editor[h](o, s.data("options"));
								u.preventDefault()
							} else if (i[h]) {
								i[h].call(this, t);
								u.preventDefault()
							}
						} else if (m.isEdit(u.keyCode)) {
							n.editor.afterCommand(o)
						}
					})
				};
				this.attach = function(e, t) {
					if (t.shortcuts) {
						this.bindKeyMap(e, t.keyMap[u.isMac ? "mac" : "pc"])
					}
					e.editable().on("mousedown", s);
					e.editable().on("keyup mouseup", o);
					e.editable().on("scroll", c);
					n.clipboard.attach(e, t);
					n.handle.attach(e, t);
					e.popover().on("click", d);
					e.popover().on("mousedown", p);
					n.dragAndDrop.attach(e, t);
					if (!t.airMode) {
						e.toolbar().on("click", d);
						e.toolbar().on("mousedown", p);
						n.statusbar.attach(e, t)
					}
					var r = t.airMode ? e.popover() : e.toolbar();
					var i = r.find(".note-dimension-picker-mousecatcher");
					i.css({
						width : t.insertTableMaxSize.col + "em",
						height : t.insertTableMaxSize.row + "em"
					}).on("mousemove", function(e) {
						b(e, t)
					});
					e.editor().data("options", t);
					if (!u.isMSIE) {
						setTimeout(function() {
							document.execCommand("styleWithCSS", 0,
									t.styleWithSpan)
						}, 0)
					}
					var a = new g(e.editable());
					e.editable().data("NoteHistory", a);
					e.editable().data("callbacks", {
						onInit : t.onInit,
						onFocus : t.onFocus,
						onBlur : t.onBlur,
						onKeydown : t.onKeydown,
						onKeyup : t.onKeyup,
						onMousedown : t.onMousedown,
						onEnter : t.onEnter,
						onPaste : t.onPaste,
						onBeforeCommand : t.onBeforeCommand,
						onChange : t.onChange,
						onImageUpload : t.onImageUpload,
						onImageUploadError : t.onImageUploadError,
						onMediaDelete : t.onMediaDelete,
						onToolbarClick : t.onToolbarClick
					});
					var f = n.editor.styleFromNode(e.editable());
					this.updateStyleInfo(f, e)
				};
				this.attachCustomEvent = function(t, n) {
					var i = t.holder();
					var s = t.editable();
					var o = s.data("callbacks");
					s.focus(r(i, o, "focus"));
					s.blur(r(i, o, "blur"));
					s.keydown(function(e) {
						if (e.keyCode === m.code.ENTER) {
							r(i, o, "enter").call(this, e)
						}
						r(i, o, "keydown").call(this, e)
					});
					s.keyup(r(i, o, "keyup"));
					s.on("mousedown", r(i, o, "mousedown"));
					s.on("mouseup", r(i, o, "mouseup"));
					s.on("scroll", r(i, o, "scroll"));
					s.on("paste", r(i, o, "paste"));
					var a = u.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted"
							: "input";
					s.on(a, function() {
						r(i, o, "change")(s.html(), s)
					});
					if (!n.airMode) {
						t.toolbar().click(r(i, o, "toolbar.click"));
						t.popover().click(r(i, o, "popover.click"))
					}
					if (h.isTextarea(f.head(i))) {
						i.closest("form").submit(function(e) {
							t.holder().val(t.holder().code());
							r(i, o, "submit").call(this, e, i.code())
						})
					}
					if (h.isTextarea(f.head(i)) && n.textareaAutoSync) {
						i.on("summernote.change", function() {
							t.holder().val(t.holder().code())
						})
					}
					r(i, o, "init")(t);
					for (var l = 0, c = e.summernote.plugins.length; l < c; l++) {
						if (e.isFunction(e.summernote.plugins[l].init)) {
							e.summernote.plugins[l].init(t)
						}
					}
				};
				this.detach = function(e, t) {
					e.holder().off();
					e.editable().off();
					e.popover().off();
					e.handle().off();
					e.dialog().off();
					if (!t.airMode) {
						e.dropzone().off();
						e.toolbar().off();
						e.statusbar().off()
					}
				}
			};
			var I = function() {
				var t = function(e, t) {
					var n = t.event;
					var r = t.value;
					var i = t.title;
					var s = t.className;
					var o = t.dropdown;
					var u = t.hide;
					return (o ? '<div class="btn-group' + (s ? " " + s : "")
							+ '">' : "")
							+ '<button type="button"'
							+ ' class="btn btn-default btn-sm'
							+ (!o && s ? " " + s : "")
							+ (o ? " dropdown-toggle" : "")
							+ '"'
							+ (o ? ' data-toggle="dropdown"' : "")
							+ (i ? ' title="' + i + '"' : "")
							+ (n ? ' data-event="' + n + '"' : "")
							+ (r ? " data-value='" + r + "'" : "")
							+ (u ? " data-hide='" + u + "'" : "")
							+ ' tabindex="-1">'
							+ e
							+ (o ? ' <span class="caret"></span>' : "")
							+ "</button>" + (o || "") + (o ? "</div>" : "")
				};
				var n = function(e, n) {
					var r = '<i class="' + e + '"></i>';
					return t(r, n)
				};
				var r = function(t, n) {
					var r = e('<div class="' + t
							+ ' popover bottom in" style="display: none;">'
							+ '<div class="arrow"></div>'
							+ '<div class="popover-content">' + "</div>"
							+ "</div>");
					r.find(".popover-content").append(n);
					return r
				};
				var i = function(e, t, n, r) {
					return '<div class="'
							+ e
							+ ' modal" aria-hidden="false">'
							+ '<div class="modal-dialog">'
							+ '<div class="modal-content">'
							+ (t ? '<div class="modal-header">'
									+ '<button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button>'
									+ '<h4 class="modal-title">' + t + "</h4>"
									+ "</div>"
									: "")
							+ '<form class="note-modal-form">'
							+ '<div class="modal-body">'
							+ n
							+ "</div>"
							+ (r ? '<div class="modal-footer">' + r + "</div>"
									: "") + "</form>" + "</div>" + "</div>"
							+ "</div>"
				};
				var s = function(e, t, n) {
					var r = "dropdown-menu" + (t ? " " + t : "");
					n = n || "ul";
					if (e instanceof Array) {
						e = e.join("")
					}
					return "<" + n + ' class="' + r + '">' + e + "</" + n + ">"
				};
				var o = {
					picture : function(e, t) {
						return n(t.iconPrefix + t.icons.image.image, {
							event : "showImageDialog",
							title : e.image.image,
							hide : true
						})
					},
					link : function(e, t) {
						return n(t.iconPrefix + t.icons.link.link, {
							event : "showLinkDialog",
							title : e.link.link,
							hide : true
						})
					},
					table : function(e, t) {
						var r = [
								'<div class="note-dimension-picker">',
								'<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
								'<div class="note-dimension-picker-highlighted"></div>',
								'<div class="note-dimension-picker-unhighlighted"></div>',
								"</div>",
								'<div class="note-dimension-display"> 1 x 1 </div>' ];
						return n(t.iconPrefix + t.icons.table.table, {
							title : e.table.table,
							dropdown : s(r, "note-table")
						})
					},
					style : function(e, t) {
						var r = t.styleTags
								.reduce(
										function(t, n) {
											var r = e.style[n === "p" ? "normal"
													: n];
											return t
													+ '<li><a data-event="formatBlock" href="#" data-value="'
													+ n
													+ '">'
													+ (n === "p" || n === "pre" ? r
															: "<" + n + ">" + r
																	+ "</" + n
																	+ ">")
													+ "</a></li>"
										}, "");
						return n(t.iconPrefix + t.icons.style.style, {
							title : e.style.style,
							dropdown : s(r)
						})
					},
					fontname : function(e, n) {
						var r = [];
						var i = n.fontNames
								.reduce(
										function(e, t) {
											if (!u.isFontInstalled(t)
													&& !f
															.contains(
																	n.fontNamesIgnoreCheck,
																	t)) {
												return e
											}
											r.push(t);
											return e
													+ '<li><a data-event="fontName" href="#" data-value="'
													+ t
													+ '" style="font-family:\''
													+ t + "'\">" + '<i class="'
													+ n.iconPrefix
													+ n.icons.misc.check
													+ '"></i> ' + t
													+ "</a></li>"
										}, "");
						var o = u.isFontInstalled(n.defaultFontName);
						var a = o ? n.defaultFontName : r[0];
						var l = '<span class="note-current-fontname">' + a
								+ "</span>";
						return t(l, {
							title : e.font.name,
							className : "note-fontname",
							dropdown : s(i, "note-check")
						})
					},
					fontsize : function(e, n) {
						var r = n.fontSizes
								.reduce(
										function(e, t) {
											return e
													+ '<li><a data-event="fontSize" href="#" data-value="'
													+ t + '">' + '<i class="'
													+ n.iconPrefix
													+ n.icons.misc.check
													+ '"></i> ' + t
													+ "</a></li>"
										}, "");
						var i = '<span class="note-current-fontsize">11</span>';
						return t(i, {
							title : e.font.size,
							className : "note-fontsize",
							dropdown : s(r, "note-check")
						})
					},
					color : function(e, n) {
						var r = '<i class="'
								+ n.iconPrefix
								+ n.icons.color.recent
								+ '" style="color:black;background-color:yellow;"></i>';
						var i = t(r, {
							className : "note-recent-color",
							title : e.color.recent,
							event : "color",
							value : '{"backColor":"yellow"}'
						});
						var o = [
								'<li><div class="btn-group">',
								'<div class="note-palette-title">'
										+ e.color.background + "</div>",
								'<div class="note-color-reset" data-event="backColor"',
								' data-value="inherit" title="'
										+ e.color.transparent + '">'
										+ e.color.setTransparent + "</div>",
								'<div class="note-color-palette" data-target-event="backColor"></div>',
								'</div><div class="btn-group">',
								'<div class="note-palette-title">'
										+ e.color.foreground + "</div>",
								'<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="'
										+ e.color.reset + '">',
								e.color.resetToDefault,
								"</div>",
								'<div class="note-color-palette" data-target-event="foreColor"></div>',
								"</div></li>" ];
						var u = t("", {
							title : e.color.more,
							dropdown : s(o)
						});
						return i + u
					},
					bold : function(e, t) {
						return n(t.iconPrefix + t.icons.font.bold, {
							event : "bold",
							title : e.font.bold
						})
					},
					italic : function(e, t) {
						return n(t.iconPrefix + t.icons.font.italic, {
							event : "italic",
							title : e.font.italic
						})
					},
					underline : function(e, t) {
						return n(t.iconPrefix + t.icons.font.underline, {
							event : "underline",
							title : e.font.underline
						})
					},
					strikethrough : function(e, t) {
						return n(t.iconPrefix + t.icons.font.strikethrough, {
							event : "strikethrough",
							title : e.font.strikethrough
						})
					},
					superscript : function(e, t) {
						return n(t.iconPrefix + t.icons.font.superscript, {
							event : "superscript",
							title : e.font.superscript
						})
					},
					subscript : function(e, t) {
						return n(t.iconPrefix + t.icons.font.subscript, {
							event : "subscript",
							title : e.font.subscript
						})
					},
					clear : function(e, t) {
						return n(t.iconPrefix + t.icons.font.clear, {
							event : "removeFormat",
							title : e.font.clear
						})
					},
					ul : function(e, t) {
						return n(t.iconPrefix + t.icons.lists.unordered, {
							event : "insertUnorderedList",
							title : e.lists.unordered
						})
					},
					ol : function(e, t) {
						return n(t.iconPrefix + t.icons.lists.ordered, {
							event : "insertOrderedList",
							title : e.lists.ordered
						})
					},
					paragraph : function(e, t) {
						var r = n(t.iconPrefix + t.icons.paragraph.left, {
							title : e.paragraph.left,
							event : "justifyLeft"
						});
						var i = n(t.iconPrefix + t.icons.paragraph.center, {
							title : e.paragraph.center,
							event : "justifyCenter"
						});
						var o = n(t.iconPrefix + t.icons.paragraph.right, {
							title : e.paragraph.right,
							event : "justifyRight"
						});
						var u = n(t.iconPrefix + t.icons.paragraph.justify, {
							title : e.paragraph.justify,
							event : "justifyFull"
						});
						var a = n(t.iconPrefix + t.icons.paragraph.outdent, {
							title : e.paragraph.outdent,
							event : "outdent"
						});
						var f = n(t.iconPrefix + t.icons.paragraph.indent, {
							title : e.paragraph.indent,
							event : "indent"
						});
						var l = [ '<div class="note-align btn-group">',
								r + i + o + u,
								'</div><div class="note-list btn-group">',
								f + a, "</div>" ];
						return n(t.iconPrefix + t.icons.paragraph.paragraph, {
							title : e.paragraph.paragraph,
							dropdown : s(l, "", "div")
						})
					},
					height : function(e, t) {
						var r = t.lineHeights
								.reduce(
										function(e, n) {
											return e
													+ '<li><a data-event="lineHeight" href="#" data-value="'
													+ parseFloat(n) + '">'
													+ '<i class="'
													+ t.iconPrefix
													+ t.icons.misc.check
													+ '"></i> ' + n
													+ "</a></li>"
										}, "");
						return n(t.iconPrefix + t.icons.font.height, {
							title : e.font.height,
							dropdown : s(r, "note-check")
						})
					},
					help : function(e, t) {
						return n(t.iconPrefix + t.icons.options.help, {
							event : "showHelpDialog",
							title : e.options.help,
							hide : true
						})
					},
					fullscreen : function(e, t) {
						return n(t.iconPrefix + t.icons.options.fullscreen, {
							event : "fullscreen",
							title : e.options.fullscreen
						})
					},
					codeview : function(e, t) {
						return n(t.iconPrefix + t.icons.options.codeview, {
							event : "codeview",
							title : e.options.codeview
						})
					},
					undo : function(e, t) {
						return n(t.iconPrefix + t.icons.history.undo, {
							event : "undo",
							title : e.history.undo
						})
					},
					redo : function(e, t) {
						return n(t.iconPrefix + t.icons.history.redo, {
							event : "redo",
							title : e.history.redo
						})
					},
					hr : function(e, t) {
						return n(t.iconPrefix + t.icons.hr.insert, {
							event : "insertHorizontalRule",
							title : e.hr.insert
						})
					}
				};
				var l = function(i, s) {
					var u = function() {
						var e = n(s.iconPrefix + s.icons.link.edit, {
							title : i.link.edit,
							event : "showLinkDialog",
							hide : true
						});
						var t = n(s.iconPrefix + s.icons.link.unlink, {
							title : i.link.unlink,
							event : "unlink"
						});
						var o = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;'
								+ '<div class="note-insert btn-group">'
								+ e
								+ t
								+ "</div>";
						return r("note-link-popover", o)
					};
					var a = function() {
						var e = t('<span class="note-fontsize-10">100%</span>',
								{
									title : i.image.resizeFull,
									event : "resize",
									value : "1"
								});
						var o = t('<span class="note-fontsize-10">50%</span>',
								{
									title : i.image.resizeHalf,
									event : "resize",
									value : "0.5"
								});
						var u = t('<span class="note-fontsize-10">25%</span>',
								{
									title : i.image.resizeQuarter,
									event : "resize",
									value : "0.25"
								});
						var a = n(s.iconPrefix + s.icons.image.floatLeft, {
							title : i.image.floatLeft,
							event : "floatMe",
							value : "left"
						});
						var f = n(s.iconPrefix + s.icons.image.floatRight, {
							title : i.image.floatRight,
							event : "floatMe",
							value : "right"
						});
						var l = n(s.iconPrefix + s.icons.image.floatNone, {
							title : i.image.floatNone,
							event : "floatMe",
							value : "none"
						});
						var c = n(s.iconPrefix + s.icons.image.shapeRounded, {
							title : i.image.shapeRounded,
							event : "imageShape",
							value : "img-rounded"
						});
						var h = n(s.iconPrefix + s.icons.image.shapeCircle, {
							title : i.image.shapeCircle,
							event : "imageShape",
							value : "img-circle"
						});
						var p = n(s.iconPrefix + s.icons.image.shapeThumbnail,
								{
									title : i.image.shapeThumbnail,
									event : "imageShape",
									value : "img-thumbnail"
								});
						var d = n(s.iconPrefix + s.icons.image.shapeNone, {
							title : i.image.shapeNone,
							event : "imageShape",
							value : ""
						});
						var v = n(s.iconPrefix + s.icons.image.remove, {
							title : i.image.remove,
							event : "removeMedia",
							value : "none"
						});
						var m = (s.disableResizeImage ? ""
								: '<div class="btn-group">' + e + o + u
										+ "</div>")
								+ '<div class="btn-group">'
								+ a
								+ f
								+ l
								+ "</div><br>"
								+ '<div class="btn-group">'
								+ c
								+ h
								+ p
								+ d
								+ "</div>"
								+ '<div class="btn-group">' + v + "</div>";
						return r("note-image-popover", m)
					};
					var f = function() {
						var t = e("<div />");
						for (var n = 0, u = s.airPopover.length; n < u; n++) {
							var a = s.airPopover[n];
							var f = e('<div class="note-' + a[0]
									+ ' btn-group">');
							for (var l = 0, c = a[1].length; l < c; l++) {
								var h = e(o[a[1][l]](i, s));
								h.attr("data-name", a[1][l]);
								f.append(h)
							}
							t.append(f)
						}
						return r("note-air-popover", t.children())
					};
					var l = e('<div class="note-popover" />');
					l.append(u());
					l.append(a());
					if (s.airMode) {
						l.append(f())
					}
					return l
				};
				var c = function(e) {
					return '<div class="note-handle">'
							+ '<div class="note-control-selection">'
							+ '<div class="note-control-selection-bg"></div>'
							+ '<div class="note-control-holder note-control-nw"></div>'
							+ '<div class="note-control-holder note-control-ne"></div>'
							+ '<div class="note-control-holder note-control-sw"></div>'
							+ '<div class="'
							+ (e.disableResizeImage ? "note-control-holder"
									: "note-control-sizing")
							+ ' note-control-se"></div>'
							+ (e.disableResizeImage ? ""
									: '<div class="note-control-selection-info"></div>')
							+ "</div>" + "</div>"
				};
				var p = function(e, t) {
					var n = "note-shortcut-col col-xs-6 note-shortcut-";
					var r = [];
					for ( var i in t) {
						if (t.hasOwnProperty(i)) {
							r.push('<div class="' + n + 'key">' + t[i].kbd
									+ "</div>" + '<div class="' + n + 'name">'
									+ t[i].text + "</div>")
						}
					}
					return '<div class="note-shortcut-row row"><div class="'
							+ n
							+ 'title col-xs-offset-6">'
							+ e
							+ "</div></div>"
							+ '<div class="note-shortcut-row row">'
							+ r
									.join('</div><div class="note-shortcut-row row">')
							+ "</div>"
				};
				var d = function(e) {
					var t = [ {
						kbd : "⌘ + B",
						text : e.font.bold
					}, {
						kbd : "⌘ + I",
						text : e.font.italic
					}, {
						kbd : "⌘ + U",
						text : e.font.underline
					}, {
						kbd : "⌘ + \\",
						text : e.font.clear
					} ];
					return p(e.shortcut.textFormatting, t)
				};
				var v = function(e) {
					var t = [ {
						kbd : "⌘ + Z",
						text : e.history.undo
					}, {
						kbd : "⌘ + ⇧ + Z",
						text : e.history.redo
					}, {
						kbd : "⌘ + ]",
						text : e.paragraph.indent
					}, {
						kbd : "⌘ + [",
						text : e.paragraph.outdent
					}, {
						kbd : "⌘ + ENTER",
						text : e.hr.insert
					} ];
					return p(e.shortcut.action, t)
				};
				var m = function(e) {
					var t = [ {
						kbd : "⌘ + ⇧ + L",
						text : e.paragraph.left
					}, {
						kbd : "⌘ + ⇧ + E",
						text : e.paragraph.center
					}, {
						kbd : "⌘ + ⇧ + R",
						text : e.paragraph.right
					}, {
						kbd : "⌘ + ⇧ + J",
						text : e.paragraph.justify
					}, {
						kbd : "⌘ + ⇧ + NUM7",
						text : e.lists.ordered
					}, {
						kbd : "⌘ + ⇧ + NUM8",
						text : e.lists.unordered
					} ];
					return p(e.shortcut.paragraphFormatting, t)
				};
				var g = function(e) {
					var t = [ {
						kbd : "⌘ + NUM0",
						text : e.style.normal
					}, {
						kbd : "⌘ + NUM1",
						text : e.style.h1
					}, {
						kbd : "⌘ + NUM2",
						text : e.style.h2
					}, {
						kbd : "⌘ + NUM3",
						text : e.style.h3
					}, {
						kbd : "⌘ + NUM4",
						text : e.style.h4
					}, {
						kbd : "⌘ + NUM5",
						text : e.style.h5
					}, {
						kbd : "⌘ + NUM6",
						text : e.style.h6
					} ];
					return p(e.shortcut.documentStyle, t)
				};
				var y = function(e, t) {
					var n = t.extraKeys;
					var r = [];
					for ( var i in n) {
						if (n.hasOwnProperty(i)) {
							r.push({
								kbd : i,
								text : n[i]
							})
						}
					}
					return p(e.shortcut.extraKeys, r)
				};
				var b = function(e, t) {
					var n = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"';
					var r = [
							"<div " + n + ">" + v(e, t) + "</div>" + "<div "
									+ n + ">" + d(e, t) + "</div>",
							"<div " + n + ">" + g(e, t) + "</div>" + "<div "
									+ n + ">" + m(e, t) + "</div>" ];
					if (t.extraKeys) {
						r.push("<div " + n + ">" + y(e, t) + "</div>")
					}
					return '<div class="note-shortcut-row row">'
							+ r
									.join('</div><div class="note-shortcut-row row">')
							+ "</div>"
				};
				var w = function(e) {
					return e.replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift")
				};
				var E = {
					image : function(e, t) {
						var n = "";
						if (t.maximumImageFileSize) {
							var r = Math.floor(Math.log(t.maximumImageFileSize)
									/ Math.log(1024));
							var s = (t.maximumImageFileSize / Math.pow(1024, r))
									.toFixed(2)
									* 1 + " " + " KMGTP"[r] + "B";
							n = "<small>" + e.image.maximumFileSize + " : " + s
									+ "</small>"
						}
						var o = '<div class="form-group row note-group-select-from-files">'
								+ "<label>"
								+ e.image.selectFromFiles
								+ "</label>"
								+ '<input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />'
								+ n
								+ "</div>"
								+ '<div class="form-group row">'
								+ "<label>"
								+ e.image.url
								+ "</label>"
								+ '<input class="note-image-url form-control col-md-12" type="text" />'
								+ "</div>";
						var u = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>'
								+ e.image.insert + "</button>";
						return i("note-image-dialog", e.image.insert, o, u)
					},
					link : function(e, t) {
						var n = '<div class="form-group row">'
								+ "<label>"
								+ e.link.textToDisplay
								+ "</label>"
								+ '<input class="note-link-text form-control col-md-12" type="text" />'
								+ "</div>"
								+ '<div class="form-group row">'
								+ "<label>"
								+ e.link.url
								+ "</label>"
								+ '<input class="note-link-url form-control col-md-12" type="text" value="http://" />'
								+ "</div>"
								+ (!t.disableLinkTarget ? '<div class="checkbox">'
										+ "<label>"
										+ '<input type="checkbox" checked> '
										+ e.link.openInNewWindow
										+ "</label>"
										+ "</div>"
										: "");
						var r = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>'
								+ e.link.insert + "</button>";
						return i("note-link-dialog", e.link.insert, n, r)
					},
					help : function(e, t) {
						var n = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">'
								+ e.shortcut.close
								+ "</a>"
								+ '<div class="title">'
								+ e.shortcut.shortcuts
								+ "</div>"
								+ (u.isMac ? b(e, t) : w(b(e, t)))
								+ '<p class="text-center">'
								+ '<a href="//summernote.org/" target="_blank">Summernote 0.6.16</a> · '
								+ '<a href="//github.com/summernote/summernote" target="_blank">Project</a> · '
								+ '<a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a>'
								+ "</p>";
						return i("note-help-dialog", "", n, "")
					}
				};
				var S = function(t, n) {
					var r = "";
					e.each(E, function(e, i) {
						r += i(t, n)
					});
					return '<div class="note-dialog">' + r + "</div>"
				};
				var x = function() {
					return '<div class="note-resizebar">'
							+ '<div class="note-icon-bar"></div>'
							+ '<div class="note-icon-bar"></div>'
							+ '<div class="note-icon-bar"></div>' + "</div>"
				};
				var T = function(e) {
					if (u.isMac) {
						e = e.replace("CMD", "⌘").replace("SHIFT", "⇧")
					}
					return e.replace("BACKSLASH", "\\").replace("SLASH", "/")
							.replace("LEFTBRACKET", "[").replace(
									"RIGHTBRACKET", "]")
				};
				var N = function(t, n, r) {
					var i = a.invertObject(n);
					var s = t.find("button");
					s.each(function(t, n) {
						var r = e(n);
						var s = i[r.data("event")];
						if (s) {
							r.attr("title", function(e, t) {
								return t + " (" + T(s) + ")"
							})
						}
					}).tooltip({
						container : "body",
						trigger : "hover",
						placement : r || "top"
					}).on("click", function() {
						e(this).tooltip("hide")
					})
				};
				var C = function(t, n) {
					var r = n.colors;
					t
							.find(".note-color-palette")
							.each(
									function() {
										var t = e(this), n = t
												.attr("data-target-event");
										var i = [];
										for (var s = 0, o = r.length; s < o; s++) {
											var u = r[s];
											var a = [];
											for (var f = 0, l = u.length; f < l; f++) {
												var c = u[f];
												a
														.push([
																'<button type="button" class="note-color-btn" style="background-color:',
																c,
																';" data-event="',
																n,
																'" data-value="',
																c, '" title="',
																c,
																'" data-toggle="button" tabindex="-1"></button>' ]
																.join(""))
											}
											i
													.push('<div class="note-color-row">'
															+ a.join("")
															+ "</div>")
										}
										t.html(i.join(""))
									})
				};
				this.createLayoutByAirMode = function(t, n) {
					var r = n.langInfo;
					var i = n.keyMap[u.isMac ? "mac" : "pc"];
					var s = a.uniqueId();
					t.addClass("note-air-editor note-editable panel-body");
					t.attr({
						id : "note-editor-" + s,
						contentEditable : true
					});
					var o = document.body;
					var f = e(l(r, n));
					f.addClass("note-air-layout");
					f.attr("id", "note-popover-" + s);
					f.appendTo(o);
					N(f, i);
					C(f, n);
					var h = e(c(n));
					h.addClass("note-air-layout");
					h.attr("id", "note-handle-" + s);
					h.appendTo(o);
					var p = e(S(r, n));
					p.addClass("note-air-layout");
					p.attr("id", "note-dialog-" + s);
					p.find("button.close, a.modal-close").click(function() {
						e(this).closest(".modal").modal("hide")
					});
					p.appendTo(o)
				};
				this.createLayoutByFrame = function(t, n) {
					var r = n.langInfo;
					var i = e('<div class="note-editor panel panel-default" />');
					if (n.width) {
						i.width(n.width)
					}
					if (n.height > 0) {
						e(
								'<div class="note-statusbar">'
										+ (n.disableResizeEditor ? "" : x())
										+ "</div>").prependTo(i)
					}
					var s = e('<div class="note-editing-area" />');
					var a = !t.is(":disabled");
					var f = e(
							'<div class="note-editable panel-body" contentEditable="'
									+ a + '"></div>').prependTo(s);
					if (n.height) {
						f.height(n.height)
					}
					if (n.direction) {
						f.attr("dir", n.direction)
					}
					var p = t.attr("placeholder") || n.placeholder;
					if (p) {
						f.attr("data-placeholder", p)
					}
					f.html(h.html(t) || h.emptyPara);
					e('<textarea class="note-codable"></textarea>')
							.prependTo(s);
					var d = e(l(r, n)).prependTo(s);
					C(d, n);
					N(d, A);
					e(c(n)).prependTo(s);
					s.prependTo(i);
					var v = e('<div class="note-toolbar panel-heading" />');
					for (var m = 0, g = n.toolbar.length; m < g; m++) {
						var y = n.toolbar[m][0];
						var b = n.toolbar[m][1];
						var w = e('<div class="note-' + y + ' btn-group" />');
						for (var E = 0, T = b.length; E < T; E++) {
							var k = o[b[E]];
							if (!e.isFunction(k)) {
								continue
							}
							var L = e(k(r, n));
							L.attr("data-name", b[E]);
							w.append(L)
						}
						v.append(w)
					}
					var A = n.keyMap[u.isMac ? "mac" : "pc"];
					C(v, n);
					N(v, A, "bottom");
					v.prependTo(i);
					e(
							'<div class="note-dropzone"><div class="note-dropzone-message"></div></div>')
							.prependTo(i);
					var O = n.dialogsInBody ? e(document.body) : i;
					var M = e(S(r, n)).prependTo(O);
					M.find("button.close, a.modal-close").click(function() {
						e(this).closest(".modal").modal("hide")
					});
					i.insertAfter(t);
					t.hide()
				};
				this.hasNoteEditor = function(e) {
					return this.noteEditorFromHolder(e).length > 0
				};
				this.noteEditorFromHolder = function(t) {
					if (t.hasClass("note-air-editor")) {
						return t
					} else if (t.next().hasClass("note-editor")) {
						return t.next()
					} else {
						return e()
					}
				};
				this.createLayout = function(e, t) {
					if (t.airMode) {
						this.createLayoutByAirMode(e, t)
					} else {
						this.createLayoutByFrame(e, t)
					}
				};
				this.layoutInfoFromHolder = function(e) {
					var t = this.noteEditorFromHolder(e);
					if (!t.length) {
						return
					}
					t.data("holder", e);
					return h.buildLayoutInfo(t)
				};
				this.removeLayout = function(e, t, n) {
					if (n.airMode) {
						e.removeClass("note-air-editor note-editable")
								.removeAttr("id contentEditable");
						t.popover().remove();
						t.handle().remove();
						t.dialog().remove()
					} else {
						e.html(t.editable().html());
						if (n.dialogsInBody) {
							t.dialog().remove()
						}
						t.editor().remove();
						e.show()
					}
				};
				this.getTemplate = function() {
					return {
						button : t,
						iconButton : n,
						dialog : i
					}
				};
				this.addButtonInfo = function(e, t) {
					o[e] = t
				};
				this.addDialogInfo = function(e, t) {
					E[e] = t
				}
			};
			e.summernote = e.summernote || {};
			e.extend(e.summernote, d);
			var q = new I;
			var R = new F;
			e.extend(e.summernote, {
				renderer : q,
				eventHandler : R,
				core : {
					agent : u,
					list : f,
					dom : h,
					range : p
				},
				pluginEvents : {},
				plugins : []
			});
			e.summernote.addPlugin = function(t) {
				e.summernote.plugins.push(t);
				if (t.buttons) {
					e.each(t.buttons, function(e, t) {
						q.addButtonInfo(e, t)
					})
				}
				if (t.dialogs) {
					e.each(t.dialogs, function(e, t) {
						q.addDialogInfo(e, t)
					})
				}
				if (t.events) {
					e.each(t.events, function(t, n) {
						e.summernote.pluginEvents[t] = n
					})
				}
				if (t.langs) {
					e.each(t.langs, function(t, n) {
						if (e.summernote.lang[t]) {
							e.extend(e.summernote.lang[t], n)
						}
					})
				}
				if (t.options) {
					e.extend(e.summernote.options, t.options)
				}
			};
			e.fn
					.extend({
						summernote : function() {
							var t = e.type(f.head(arguments));
							var n = t === "string";
							var r = t === "object";
							var i = r ? f.head(arguments) : {};
							i = e.extend({}, e.summernote.options, i);
							i.icons = e.extend({}, e.summernote.options.icons,
									i.icons);
							i.langInfo = e.extend(true, {},
									e.summernote.lang["en-US"],
									e.summernote.lang[i.lang]);
							if (!n && r) {
								for (var s = 0, o = e.summernote.plugins.length; s < o; s++) {
									var u = e.summernote.plugins[s];
									if (i.plugin[u.name]) {
										e.summernote.plugins[s] = e.extend(
												true, u, i.plugin[u.name])
									}
								}
							}
							this.each(function(t, n) {
								var r = e(n);
								if (!q.hasNoteEditor(r)) {
									q.createLayout(r, i);
									var s = q.layoutInfoFromHolder(r);
									r.data("layoutInfo", s);
									R.attach(s, i);
									R.attachCustomEvent(s, i)
								}
							});
							var a = this.first();
							if (a.length) {
								var l = q.layoutInfoFromHolder(a);
								if (n) {
									var c = f.head(f.from(arguments));
									var h = f.tail(f.from(arguments));
									var p = [ c, l.editable() ].concat(h);
									return R.invoke.apply(R, p)
								} else if (i.focus) {
									l.editable().focus()
								}
							}
							return this
						},
						code : function(t) {
							if (t === undefined) {
								var n = this.first();
								if (!n.length) {
									return
								}
								var r = q.layoutInfoFromHolder(n);
								var i = r && r.editable();
								if (i && i.length) {
									var s = R.invoke("codeview.isActivated", r);
									R.invoke("codeview.sync", r);
									return s ? r.codable().val() : r.editable()
											.html()
								}
								return h.value(n)
							}
							this.each(function(n, r) {
								var i = q.layoutInfoFromHolder(e(r));
								var s = i && i.editable();
								if (s) {
									s.html(t)
								}
							});
							return this
						},
						destroy : function() {
							this.each(function(t, n) {
								var r = e(n);
								if (!q.hasNoteEditor(r)) {
									return
								}
								var i = q.layoutInfoFromHolder(r);
								var s = i.editor().data("options");
								R.detach(i, s);
								q.removeLayout(r, i, s)
							});
							return this
						}
					})
		});
(function(e) {
	e.extend(e.summernote.lang, {
		"ko-KR" : {
			font : {
				bold : "굵게",
				italic : "기울임꼴",
				underline : "밑줄",
				clear : "글자 효과 없애기",
				height : "줄간격",
				name : "글꼴"
			},
			image : {
				image : "사진",
				insert : "사진 추가",
				resizeFull : "원본 크기로 변경",
				resizeHalf : "50% 크기로 변경",
				resizeQuarter : "25% 크기로 변경",
				floatLeft : "왼쪽 정렬",
				floatRight : "오른쪽 정렬",
				floatNone : "정렬하지 않음",
				shapeRounded : "스타일: 둥근 모서리",
				shapeCircle : "스타일: 원형",
				shapeThumbnail : "스타일: 액자",
				shapeNone : "스타일: 없음",
				dragImageHere : "사진을 이곳으로 끌어오세요",
				selectFromFiles : "파일 선택",
				url : "사진 URL",
				remove : "사진 삭제"
			},
			link : {
				link : "링크",
				insert : "링크 추가",
				unlink : "링크 삭제",
				edit : "수정",
				textToDisplay : "링크에 표시할 내용",
				url : "이동할 URL",
				openInNewWindow : "새창으로 열기"
			},
			table : {
				table : "테이블"
			},
			hr : {
				insert : "구분선 추가"
			},
			style : {
				style : "스타일",
				normal : "본문",
				blockquote : "인용구",
				pre : "코드",
				h1 : "제목 1",
				h2 : "제목 2",
				h3 : "제목 3",
				h4 : "제목 4",
				h5 : "제목 5",
				h6 : "제목 6"
			},
			lists : {
				unordered : "글머리 기호",
				ordered : "번호 매기기"
			},
			options : {
				help : "도움말",
				fullscreen : "전체 화면",
				codeview : "코드 보기"
			},
			paragraph : {
				paragraph : "문단 정렬",
				outdent : "내어쓰기",
				indent : "들여쓰기",
				left : "왼쪽 정렬",
				center : "가운데 정렬",
				right : "오른쪽 정렬",
				justify : "양쪽 정렬"
			},
			color : {
				recent : "마지막으로 사용한 색",
				more : "다른 색 선택",
				background : "배경색",
				foreground : "글자색",
				transparent : "투명",
				setTransparent : "투명",
				reset : "취소",
				resetToDefault : "기본 값으로 변경"
			},
			shortcut : {
				shortcuts : "키보드 단축키",
				close : "닫기",
				textFormatting : "글자 스타일 적용",
				action : "기능",
				paragraphFormatting : "문단 스타일 적용",
				documentStyle : "문서 스타일 적용"
			},
			history : {
				undo : "실행 취소",
				redo : "다시 실행"
			}
		}
	})
})(jQuery);
(function(e) {
	if (typeof define === "function" && define.amd) {
		define([ "jquery" ], e)
	} else {
		e(window.jQuery)
	}
})
		(function(e) {
			var t = e.summernote.renderer.getTemplate();
			var n = e.summernote.core.range;
			var r = e.summernote.core.dom;
			var i = function(t) {
				var n = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
				var r = t.match(n);
				var i = /\/\/instagram.com\/p\/(.[a-zA-Z0-9]*)/;
				var s = t.match(i);
				var o = /\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/;
				var u = t.match(o);
				var a = /\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/;
				var f = t.match(a);
				var l = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
				var c = t.match(l);
				var h = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
				var p = t.match(h);
				var d = /^.+.(mp4|m4v)$/;
				var v = t.match(d);
				var m = /^.+.(ogg|ogv)$/;
				var g = t.match(m);
				var y = /^.+.(webm)$/;
				var b = t.match(y);
				var w;
				if (r && r[1].length === 11) {
					var E = r[1];
					w = e("<iframe>").attr("frameborder", 0).attr("src",
							"//www.youtube.com/embed/" + E)
							.attr("width", "640").attr("height", "360")
				} else if (s && s[0].length) {
					w = e("<iframe>").attr("frameborder", 0).attr("src",
							s[0] + "/embed/").attr("width", "612").attr(
							"height", "710").attr("scrolling", "no").attr(
							"allowtransparency", "true")
				} else if (u && u[0].length) {
					w = e("<iframe>").attr("frameborder", 0).attr("src",
							u[0] + "/embed/simple").attr("width", "600").attr(
							"height", "600").attr("class", "vine-embed")
				} else if (f && f[3].length) {
					w = e(
							"<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>")
							.attr("frameborder", 0).attr("src",
									"//player.vimeo.com/video/" + f[3]).attr(
									"width", "640").attr("height", "360")
				} else if (c && c[2].length) {
					w = e("<iframe>").attr("frameborder", 0).attr("src",
							"//www.dailymotion.com/embed/video/" + c[2]).attr(
							"width", "640").attr("height", "360")
				} else if (p && p[1].length) {
					w = e(
							"<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>")
							.attr("frameborder", 0).attr("height", "498").attr(
									"width", "510").attr("src",
									"//player.youku.com/embed/" + p[1])
				} else if (v || g || b) {
					w = e("<video controls>").attr("src", t).attr("width",
							"640").attr("height", "360")
				} else {
					return false
				}
				return w[0]
			};
			var s = function(e) {
				e.focus();
				var t = n.create();
				if (t.isOnAnchor()) {
					var i = r.ancestor(t.sc, r.isAnchor);
					t = n.createFromNode(i)
				}
				return t.toString()
			};
			var o = function(e, t) {
				e.toggleClass("disabled", !t);
				e.attr("disabled", !t)
			};
			var u = function(t, n, r) {
				return e.Deferred(function(e) {
					var t = n.find(".note-video-dialog");
					var i = t.find(".note-video-url"), s = t
							.find(".note-video-btn");
					t.one("shown.bs.modal", function() {
						i.val(r).on("input", function() {
							o(s, i.val())
						}).trigger("focus");
						s.click(function(n) {
							n.preventDefault();
							e.resolve(i.val());
							t.modal("hide")
						})
					}).one("hidden.bs.modal", function() {
						i.off("input");
						s.off("click");
						if (e.state() === "pending") {
							e.reject()
						}
					}).modal("show")
				})
			};
			e.summernote
					.addPlugin({
						name : "video",
						buttons : {
							video : function(e, n) {
								return t.iconButton(n.iconPrefix
										+ "youtube-play", {
									event : "showVideoDialog",
									title : e.video.video,
									hide : true
								})
							}
						},
						dialogs : {
							video : function(e) {
								var n = '<div class="form-group row-fluid">'
										+ "<label>"
										+ e.video.url
										+ ' <small class="text-muted">'
										+ e.video.providers
										+ "</small></label>"
										+ '<input class="note-video-url form-control span12" type="text" />'
										+ "</div>";
								var r = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>'
										+ e.video.insert + "</button>";
								return t.dialog("note-video-dialog",
										e.video.insert, n, r)
							}
						},
						events : {
							showVideoDialog : function(e, t, n) {
								var r = n.dialog(), o = n.editable(), a = s(o);
								t.saveRange(o);
								u(o, r, a).then(function(e) {
									t.restoreRange(o);
									var n = i(e);
									if (n) {
										t.insertNode(o, n)
									}
								}).fail(function() {
									t.restoreRange(o)
								})
							}
						},
						langs : {
							"en-US" : {
								video : {
									video : "Video",
									videoLink : "Video Link",
									insert : "Insert Video",
									url : "Video URL?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
								}
							},
							"ar-AR" : {
								video : {
									video : "فيديو",
									videoLink : "رابط الفيديو",
									insert : "إدراج الفيديو",
									url : "رابط الفيديو",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)"
								}
							},
							"ca-ES" : {
								video : {
									video : "Video",
									videoLink : "Enllaç del video",
									insert : "Inserir video",
									url : "URL del video?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)"
								}
							},
							"cs-CZ" : {
								video : {
									video : "Video",
									videoLink : "Odkaz videa",
									insert : "Vložit video",
									url : "URL videa?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)"
								}
							},
							"da-DK" : {
								video : {
									video : "Video",
									videoLink : "Video Link",
									insert : "Indsæt Video",
									url : "Video URL?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)"
								}
							},
							"de-DE" : {
								video : {
									video : "Video",
									videoLink : "Video Link",
									insert : "Video einfügen",
									url : "Video URL?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, oder Youku)"
								}
							},
							"es-ES" : {
								video : {
									video : "Video",
									videoLink : "Link del video",
									insert : "Insertar video",
									url : "¿URL del video?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)"
								}
							},
							"es-EU" : {
								video : {
									video : "Bideoa",
									videoLink : "Bideorako esteka",
									insert : "Bideo berri bat txertatu",
									url : "Bideoaren URL helbidea",
									providers : "(YouTube, Vimeo, Vine, Instagram, edo DailyMotion)"
								}
							},
							"fa-IR" : {
								video : {
									video : "ویدیو",
									videoLink : "لینک ویدیو",
									insert : "افزودن ویدیو",
									url : "آدرس ویدیو ؟",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, یا Youku)"
								}
							},
							"fi-FI" : {
								video : {
									video : "Video",
									videoLink : "Linkki videoon",
									insert : "Lisää video",
									url : "Videon URL-osoite?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion tai Youku)"
								}
							},
							"fr-FR" : {
								video : {
									video : "Vidéo",
									videoLink : "Lien vidéo",
									insert : "Insérer une vidéo",
									url : "URL de la vidéo",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)"
								}
							},
							"he-IL" : {
								video : {
									video : "סרטון",
									videoLink : "קישור לסרטון",
									insert : "הוסף סרטון",
									url : "קישור לסרטון",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion או Youku)"
								}
							},
							"hu-HU" : {
								video : {
									video : "Videó",
									videoLink : "Videó hivatkozás",
									insert : "Videó beszúrása",
									url : "Videó URL címe",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, vagy Youku)"
								}
							},
							"id-ID" : {
								video : {
									video : "Video",
									videoLink : "Link video",
									insert : "Sisipkan video",
									url : "Tautan video",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, atau Youku)"
								}
							},
							"it-IT" : {
								video : {
									video : "Video",
									videoLink : "Collegamento ad un Video",
									insert : "Inserisci Video",
									url : "URL del Video",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)"
								}
							},
							"ja-JP" : {
								video : {
									video : "動画",
									videoLink : "動画リンク",
									insert : "動画挿入",
									url : "動画のURL",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku)"
								}
							},
							"ko-KR" : {
								video : {
									video : "동영상",
									videoLink : "동영상 링크",
									insert : "동영상 추가",
									url : "동영상 URL",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku 사용 가능)"
								}
							},
							"nb-NO" : {
								video : {
									video : "Video",
									videoLink : "Videolenke",
									insert : "Sett inn video",
									url : "Video-URL",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)"
								}
							},
							"nl-NL" : {
								video : {
									video : "Video",
									videoLink : "Video link",
									insert : "Video invoegen",
									url : "URL van de video",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion of Youku)"
								}
							},
							"pl-PL" : {
								video : {
									video : "Wideo",
									videoLink : "Adres wideo",
									insert : "Wstaw wideo",
									url : "Adres wideo",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, lub Youku)"
								}
							},
							"pt-BR" : {
								video : {
									video : "Vídeo",
									videoLink : "Link para vídeo",
									insert : "Inserir vídeo",
									url : "URL do vídeo?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, ou Youku)"
								}
							},
							"ro-RO" : {
								video : {
									video : "Video",
									videoLink : "Link video",
									insert : "Inserează video",
									url : "URL video?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, sau Youku)"
								}
							},
							"ru-RU" : {
								video : {
									video : "Видео",
									videoLink : "Ссылка на видео",
									insert : "Вставить видео",
									url : "URL видео",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion или Youku)"
								}
							},
							"sk-SK" : {
								video : {
									video : "Video",
									videoLink : "Odkaz videa",
									insert : "Vložiť video",
									url : "URL videa?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)"
								}
							},
							"sl-SI" : {
								video : {
									video : "Video",
									videoLink : "Video povezava",
									insert : "Vstavi video",
									url : "Povezava do videa",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion ali Youku)"
								}
							},
							"sr-RS" : {
								video : {
									video : "Видео",
									videoLink : "Веза ка видеу",
									insert : "Уметни видео",
									url : "URL видео",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion или Youku)"
								}
							},
							"sr-RS-Latin" : {
								video : {
									video : "Video",
									videoLink : "Veza ka videu",
									insert : "Umetni video",
									url : "URL video",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion ili Youku)"
								}
							},
							"sv-SE" : {
								video : {
									video : "Filmklipp",
									videoLink : "Länk till filmklipp",
									insert : "Infoga filmklipp",
									url : "Länk till filmklipp",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)"
								}
							},
							"th-TH" : {
								video : {
									video : "วีดีโอ",
									videoLink : "ลิงก์ของวีดีโอ",
									insert : "แทรกวีดีโอ",
									url : "ที่อยู่ URL ของวีดีโอ?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion หรือ Youku)"
								}
							},
							"tr-TR" : {
								video : {
									video : "Video",
									videoLink : "Video bağlantısı",
									insert : "Video ekle",
									url : "Video bağlantısı?",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion veya Youku)"
								}
							},
							"uk-UA" : {
								video : {
									video : "Відео",
									videoLink : "Посилання на відео",
									insert : "Вставити відео",
									url : "URL відео",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion чи Youku)"
								}
							},
							"vi-VN" : {
								video : {
									video : "Video",
									videoLink : "Đường Dẫn đến Video",
									insert : "Chèn Video",
									url : "URL",
									providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion và Youku)"
								}
							},
							"zh-CN" : {
								video : {
									video : "视频",
									videoLink : "视频链接",
									insert : "插入视频",
									url : "视频地址",
									providers : "(优酷, Instagram, DailyMotion, Youtube等)"
								}
							},
							"zh-TW" : {
								video : {
									video : "影片",
									videoLink : "影片連結",
									insert : "插入影片",
									url : "影片網址",
									providers : "(優酷, Instagram, DailyMotion, Youtube等)"
								}
							}
						}
					})
		});
(function(e) {
	if (typeof define === "function" && define.amd) {
		define([ "jquery" ], e)
	} else {
		e(window.jQuery)
	}
})
		(function(e) {
			var t = e.summernote.renderer.getTemplate();
			var n = e.summernote.core.range;
			var r = e.summernote.core.dom;
			var i = function(t, n, r) {
				var i = e("<div/>").text(r);
				var s = e('<pre class="' + (n ? "line-numbers" : "") + '">'
						+ '<code class="language-' + t + '">' + i.html()
						+ "</code></pre>");
				return s[0]
			};
			var s = function(t) {
				t.focus();
				var i = n.create().expand(r.isCodeBlock);
				var s = e(i.nodes(r.isPre)[0]);
				var o = e(i.nodes(r.isCode)[0]);
				return {
					range : i,
					text : i.toString(),
					isShowLineNumbers : s.length ? s.attr("class") === "line-numbers"
							: true,
					langType : o.length ? o.attr("class") : "",
					sourceCode : o.length ? o.text() : ""
				}
			};
			var o = function(e, t) {
				e.toggleClass("disabled", !t);
				e.attr("disabled", !t)
			};
			var u = function(t, n, r) {
				return e.Deferred(function(e) {
					var t = n.find(".note-codeblock-dialog");
					var i = t.find(".note-codeblock-type"), s = t
							.find(".note-codeblock-numbers"), u = t
							.find(".note-codeblock-source"), a = t
							.find(".note-codeblock-btn");
					t.one("shown.bs.modal", function() {
						i.val(r.langType).trigger("keyup").trigger("focus");
						u.val(r.sourceCode).on("input", function() {
							o(a, u.val())
						});
						a.click(function(n) {
							n.preventDefault();
							e.resolve(i.val(), s.is(":checked"), u.val());
							t.modal("hide")
						})
					}).one("hidden.bs.modal", function() {
						i.off("keyup");
						a.off("click");
						if (e.state() === "pending") {
							e.reject()
						}
					}).modal("show")
				})
			};
			e.summernote
					.addPlugin({
						name : "codeblock",
						buttons : {
							codeblock : function(e) {
								return t.button(
										'<i class="fa fa-file-code-o"></i> '
												+ e.codeblock.codeblock, {
											event : "showCodeblockDialog",
											title : e.codeblock.codeblock,
											hide : true
										})
							}
						},
						dialogs : {
							codeblock : function(e) {
								var n = '<div class="form-group">' + "<label>"
										+ e.codeblock.langType
										+ "</label>"
										+ '<select class="note-codeblock-type form-control span12">'
										+ '<option selected="selected" value="markup">HTML / Markup</option>'
										+ '<option value="css">CSS</option>'
										+ '<option value="sass">Sass</option>'
										+ '<option value="javascript">JavaScript</option>'
										+ '<option value="java">Java</option>'
										+ '<option value="python">Python</option>'
										+ '<option value="groovy">Groovy</option>'
										+ '<option value="scala">Scala</option>'
										+ '<option value="php">PHP</option>'
										+ '<option value="bash">Bash</option>'
										+ '<option value="coffeescript">CoffeesSript</option>'
										+ '<option value="go">Go</option>'
										+ '<option value="haskell">Haskell</option>'
										+ '<option value="go">Go</option>'
										+ '<option value="c">C</option>'
										+ '<option value="cpp">C++</option>'
										+ '<option value="sql">SQL</option>'
										+ '<option value="ruby">Ruby</option>'
										+ '<option value="aspnet">ASP.NET</option>'
										+ '<option value="csharp">C#</option>'
										+ '<option value="swift">Swift</option>'
										+ '<option value="objectivec">Objective-C</option>'
										+ "</select>"
										+ "</div>"
										+ '<div class="form-group">'
										+ '<label><input type="checkbox" class="note-codeblock-numbers"> '
										+ e.codeblock.showLineNumbers
										+ "</label>"
										+ "</div>"
										+ '<div class="form-group">'
										+ "<label>"
										+ e.codeblock.sourceCode
										+ "</label>"
										+ '<textarea rows="10" class="form-control note-codeblock-source"></textarea>'
										+ "</div>";
								var r = '<button href="javascript://" '
										+ 'class="btn btn-primary note-codeblock-btn disabled" disabled>'
										+ e.codeblock.insert + "</button>";
								return t.dialog("note-codeblock-dialog",
										e.codeblock.insert, n, r)
							}
						},
						events : {
							showCodeblockDialog : function(e, t, n) {
								var r = n.dialog(), o = n.editable(), a = s(o);
								t.saveRange(o);
								u(o, r, a).then(function(e, n, r) {
									t.restoreRange(o);
									t.insertNode(o, i(e, n, r))
								}).fail(function() {
									t.restoreRange(o)
								})
							}
						},
						langs : {
							"en-US" : {
								codeblock : {
									codeblock : "Code",
									langType : "Language type",
									showLineNumbers : "Show line numbers",
									sourceCode : "Source Code",
									insert : "Insert code block"
								}
							},
							"ko-KR" : {
								codeblock : {
									codeblock : "코드",
									langType : "언어 종류",
									showLineNumbers : "Show line numbers",
									sourceCode : "Source Code",
									insert : "코드 블록 추가"
								}
							}
						}
					})
		});
(function(e, t) {
	if (typeof exports == "object")
		module.exports = t();
	else if (typeof define == "function" && define.amd)
		define(t);
	else
		e.Spinner = t()
})
		(
				this,
				function() {
					"use strict";
					function r(e, t) {
						var n = document.createElement(e || "div"), r;
						for (r in t)
							n[r] = t[r];
						return n
					}
					function i(e) {
						for (var t = 1, n = arguments.length; t < n; t++)
							e.appendChild(arguments[t]);
						return e
					}
					function o(e, r, i, o) {
						var u = [ "opacity", r, ~~(e * 100), i, o ].join("-"), a = .01
								+ i / o * 100, f = Math.max(1 - (1 - e) / r
								* (100 - a), e), l = n.substring(0,
								n.indexOf("Animation")).toLowerCase(), c = l
								&& "-" + l + "-" || "";
						if (!t[u]) {
							s.insertRule("@" + c + "keyframes " + u + "{"
									+ "0%{opacity:" + f + "}" + a
									+ "%{opacity:" + e + "}" + (a + .01)
									+ "%{opacity:1}" + (a + r) % 100
									+ "%{opacity:" + e + "}" + "100%{opacity:"
									+ f + "}" + "}", s.cssRules.length);
							t[u] = 1
						}
						return u
					}
					function u(t, n) {
						var r = t.style, i, s;
						n = n.charAt(0).toUpperCase() + n.slice(1);
						for (s = 0; s < e.length; s++) {
							i = e[s] + n;
							if (r[i] !== undefined)
								return i
						}
						if (r[n] !== undefined)
							return n
					}
					function a(e, t) {
						for ( var n in t)
							e.style[u(e, n) || n] = t[n];
						return e
					}
					function f(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for ( var r in n)
								if (e[r] === undefined)
									e[r] = n[r]
						}
						return e
					}
					function l(e) {
						var t = {
							x : e.offsetLeft,
							y : e.offsetTop
						};
						while (e = e.offsetParent)
							t.x += e.offsetLeft, t.y += e.offsetTop;
						return t
					}
					function c(e, t) {
						return typeof e == "string" ? e : e[t % e.length]
					}
					function p(e) {
						this.opts = f(e || {}, p.defaults, h)
					}
					function d() {
						function e(e, t) {
							return r(
									"<"
											+ e
											+ ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
									t)
						}
						s.addRule(".spin-vml", "behavior:url(#default#VML)");
						p.prototype.lines = function(t, n) {
							function o() {
								return a(e("group", {
									coordsize : s + " " + s,
									coordorigin : -r + " " + -r
								}), {
									width : s,
									height : s
								})
							}
							function h(t, s, u) {
								i(f, i(a(o(), {
									rotation : 360 / n.lines * t + "deg",
									left : ~~s
								}), i(a(e("roundrect", {
									arcsize : n.corners
								}), {
									width : r,
									height : n.width,
									left : n.radius,
									top : -n.width >> 1,
									filter : u
								}), e("fill", {
									color : c(n.color, t),
									opacity : n.opacity
								}), e("stroke", {
									opacity : 0
								}))))
							}
							var r = n.length + n.width, s = 2 * r;
							var u = -(n.width + n.length) * 2 + "px", f = a(
									o(), {
										position : "absolute",
										top : u,
										left : u
									}), l;
							if (n.shadow)
								for (l = 1; l <= n.lines; l++)
									h(
											l,
											-2,
											"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
							for (l = 1; l <= n.lines; l++)
								h(l);
							return i(t, f)
						};
						p.prototype.opacity = function(e, t, n, r) {
							var i = e.firstChild;
							r = r.shadow && r.lines || 0;
							if (i && t + r < i.childNodes.length) {
								i = i.childNodes[t + r];
								i = i && i.firstChild;
								i = i && i.firstChild;
								if (i)
									i.opacity = n
							}
						}
					}
					var e = [ "webkit", "Moz", "ms", "O" ], t = {}, n;
					var s = function() {
						var e = r("style", {
							type : "text/css"
						});
						i(document.getElementsByTagName("head")[0], e);
						return e.sheet || e.styleSheet
					}();
					var h = {
						lines : 12,
						length : 7,
						width : 5,
						radius : 10,
						rotate : 0,
						corners : 1,
						color : "#000",
						direction : 1,
						speed : 1,
						trail : 100,
						opacity : 1 / 4,
						fps : 20,
						zIndex : 2e9,
						className : "spinner",
						top : "50%",
						left : "50%",
						position : "absolute"
					};
					p.defaults = {};
					f(
							p.prototype,
							{
								spin : function(e) {
									this.stop();
									var t = this, i = t.opts, s = t.el = a(r(0,
											{
												className : i.className
											}), {
										position : i.position,
										width : 0,
										zIndex : i.zIndex
									}), o = i.radius + i.length + i.width;
									a(s, {
										left : i.left,
										top : i.top
									});
									if (e) {
										e.insertBefore(s, e.firstChild || null)
									}
									s.setAttribute("role", "progressbar");
									t.lines(s, t.opts);
									if (!n) {
										var u = 0, f = (i.lines - 1)
												* (1 - i.direction) / 2, l, c = i.fps, h = c
												/ i.speed, p = (1 - i.opacity)
												/ (h * i.trail / 100), d = h
												/ i.lines;
										(function v() {
											u++;
											for (var e = 0; e < i.lines; e++) {
												l = Math.max(1
														- (u + (i.lines - e)
																* d) % h * p,
														i.opacity);
												t.opacity(s, e * i.direction
														+ f, l, i)
											}
											t.timeout = t.el
													&& setTimeout(v,
															~~(1e3 / c))
										})()
									}
									return t
								},
								stop : function() {
									var e = this.el;
									if (e) {
										clearTimeout(this.timeout);
										if (e.parentNode)
											e.parentNode.removeChild(e);
										this.el = undefined
									}
									return this
								},
								lines : function(e, t) {
									function l(e, n) {
										return a(
												r(),
												{
													position : "absolute",
													width : t.length + t.width
															+ "px",
													height : t.width + "px",
													background : e,
													boxShadow : n,
													transformOrigin : "left",
													transform : "rotate("
															+ ~~(360 / t.lines
																	* s + t.rotate)
															+ "deg) translate("
															+ t.radius + "px"
															+ ",0)",
													borderRadius : (t.corners
															* t.width >> 1)
															+ "px"
												})
									}
									var s = 0, u = (t.lines - 1)
											* (1 - t.direction) / 2, f;
									for (; s < t.lines; s++) {
										f = a(
												r(),
												{
													position : "absolute",
													top : 1 + ~(t.width / 2)
															+ "px",
													transform : t.hwaccel ? "translate3d(0,0,0)"
															: "",
													opacity : t.opacity,
													animation : n
															&& o(
																	t.opacity,
																	t.trail,
																	u
																			+ s
																			* t.direction,
																	t.lines)
															+ " "
															+ 1
															/ t.speed
															+ "s linear infinite"
												});
										if (t.shadow)
											i(f, a(l("#000", "0 0 4px "
													+ "#000"), {
												top : 2 + "px"
											}));
										i(e, i(f, l(c(t.color, s),
												"0 0 1px rgba(0,0,0,.1)")))
									}
									return e
								},
								opacity : function(e, t, n) {
									if (t < e.childNodes.length)
										e.childNodes[t].style.opacity = n
								}
							});
					var v = a(r("group"), {
						behavior : "url(#default#VML)"
					});
					if (!u(v, "transform") && v.adj)
						d();
					else
						n = u(v, "animation");
					return p
				});
(function(e) {
	if (typeof exports == "object") {
		e(require("jquery"), require("spin"))
	} else if (typeof define == "function" && define.amd) {
		define([ "jquery", "spin" ], e)
	} else {
		if (!window.Spinner)
			throw new Error("Spin.js not present");
		e(window.jQuery, window.Spinner)
	}
})(function(e, t) {
	e.fn.spin = function(n, r) {
		return this.each(function() {
			var i = e(this), s = i.data();
			if (s.spinner) {
				s.spinner.stop();
				delete s.spinner
			}
			if (n !== false) {
				n = e.extend({
					color : r || i.css("color")
				}, e.fn.spin.presets[n] || n);
				s.spinner = (new t(n)).spin(this)
			}
		})
	};
	e.fn.spin.presets = {
		tiny : {
			lines : 8,
			length : 2,
			width : 2,
			radius : 3
		},
		small : {
			lines : 8,
			length : 4,
			width : 3,
			radius : 5
		},
		large : {
			lines : 10,
			length : 8,
			width : 4,
			radius : 8
		}
	}
});
(function(e) {
	function r(e, t) {
		if (e.val() === "") {
			e.data("placeholder").removeClass(t.hideClass)
		} else {
			e.data("placeholder").addClass(t.hideClass)
		}
	}
	function i(e, t) {
		e.data("placeholder").addClass(t.hideClass)
	}
	function s(e, t) {
		var n = t.is("textarea");
		var r = parseFloat(t.css("padding-top"));
		var i = parseFloat(t.css("padding-left"));
		var s = t.offset();
		if (r) {
			s.top += r
		}
		if (i) {
			s.left += i
		}
		e.css({
			width : t.innerWidth() - (n ? 20 : 4),
			height : t.innerHeight() - 6,
			lineHeight : t.css("line-height"),
			whiteSpace : n ? "normal" : "nowrap",
			overflow : "hidden"
		}).offset(s)
	}
	function o(e, t) {
		var r = e.val();
		(function s() {
			n = requestAnimationFrame(s);
			if (e.val() !== r) {
				i(e, t);
				a();
				u(e, t)
			}
		})()
	}
	function u(e, t) {
		(function i() {
			n = requestAnimationFrame(i);
			r(e, t)
		})()
	}
	function a() {
		if (window.cancelAnimationFrame) {
			cancelAnimationFrame(n)
		}
	}
	function f(e) {
		if (t && window.console && window.console.log) {
			window.console.log(e)
		}
	}
	var t = false, n;
	e.fn.placeHolder = function(t) {
		f("init placeHolder");
		var n = this;
		var u = e(this).length;
		this.options = e
				.extend(
						{
							className : "placeholder",
							visibleToScreenreaders : true,
							visibleToScreenreadersHideClass : "placeholder-hide-except-screenreader",
							visibleToNoneHideClass : "placeholder-hide",
							hideOnFocus : false,
							removeLabelClass : "visuallyhidden",
							hiddenOverrideClass : "visuallyhidden-with-placeholder",
							forceHiddenOverride : true,
							forceApply : false,
							autoInit : true
						}, t);
		this.options.hideClass = this.options.visibleToScreenreaders ? this.options.visibleToScreenreadersHideClass
				: this.options.visibleToNoneHideClass;
		return e(this)
				.each(
						function(t) {
							function y() {
								if (!n.options.hideOnFocus
										&& window.requestAnimationFrame) {
									o(c, n.options)
								} else {
									i(c, n.options)
								}
							}
							var c = e(this), h = c.attr("placeholder"), p = c
									.attr("id"), d, v, m, g;
							if (h === "" || h === undefined) {
								h = c[0].attributes["placeholder"].value
							}
							d = c.closest("label");
							c.removeAttr("placeholder");
							if (!d.length && !p) {
								f("the input element with the placeholder needs an id!");
								return
							}
							d = d.length ? d : e('label[for="' + p + '"]')
									.first();
							if (!d.length) {
								f("the input element with the placeholder needs a label!");
								return
							}
							g = e(d).find(".placeholder");
							if (g.length) {
								s(g, c);
								g.text(h);
								return c
							}
							if (d.hasClass(n.options.removeLabelClass)) {
								d
										.removeClass(n.options.removeLabelClass)
										.addClass(n.options.hiddenOverrideClass)
							}
							v = e("<span>").addClass(n.options.className).text(
									h).appendTo(d);
							m = v.width() > c.width();
							if (m) {
								v.attr("title", h)
							}
							s(v, c);
							c.data("placeholder", v);
							v.data("input", c);
							v.click(function() {
								e(this).data("input").focus()
							});
							c.focusin(y);
							c.focusout(function() {
								r(e(this), n.options);
								if (!n.options.hideOnFocus) {
									a()
								}
							});
							r(c, n.options);
							e(document).bind("fontresize resize", function() {
								s(v, c)
							});
							if (e.event.special.resize) {
								e("textarea").bind("resize", function(t) {
									if (e(this).is(":visible")) {
										s(v, c)
									}
									t.stopPropagation();
									t.preventDefault()
								})
							} else {
								e("textarea").css("resize", "none")
							}
							if (t >= u - 1
									&& typeof e.attrHooks !== "undefined") {
								e.attrHooks.placeholder = {
									get : function(t) {
										if (t.nodeName.toLowerCase() === "input"
												|| t.nodeName.toLowerCase() === "textarea") {
											if (e(t).data("placeholder")) {
												return e(
														e(t)
																.data(
																		"placeholder"))
														.text()
											} else {
												return e(t)[0].placeholder
											}
										} else {
											return undefined
										}
									},
									set : function(t, n) {
										return e(e(t).data("placeholder"))
												.text(n)
									}
								}
							}
							if (c.is(":focus")) {
								y()
							}
						})
	};
	e(function() {
		var t = window.placeHolderConfig || {};
		if (t.autoInit === false) {
			f("placeholder:abort because autoInit is off");
			return
		}
		if (("placeholder" in e("<input>")[0] || "placeHolder" in e("<input>")[0])
				&& !t.forceApply) {
			f("placeholder:abort because browser has native support");
			return
		}
		e("input[placeholder], textarea[placeholder]").placeHolder(t)
	})
})(jQuery);
(function(e, t) {
	if (typeof exports === "object" && exports) {
		t(exports)
	} else if (typeof define === "function" && define.amd) {
		define([ "exports" ], t)
	} else {
		t(e.Mustache = {})
	}
})
		(
				this,
				function(e) {
					function r(e) {
						return typeof e === "function"
					}
					function i(e) {
						return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
					}
					function o(e, t) {
						return s.call(e, t)
					}
					function a(e) {
						return !o(u, e)
					}
					function l(e) {
						return String(e).replace(/[&<>"'\/]/g, function(e) {
							return f[e]
						})
					}
					function m(t, r) {
						function m() {
							if (f && !l) {
								while (u.length)
									delete o[u.pop()]
							} else {
								u = []
							}
							f = false;
							l = false
						}
						function x(e) {
							if (typeof e === "string")
								e = e.split(h, 2);
							if (!n(e) || e.length !== 2)
								throw new Error("Invalid tags: " + e);
							w = new RegExp(i(e[0]) + "\\s*");
							E = new RegExp("\\s*" + i(e[1]));
							S = new RegExp("\\s*" + i("}" + e[1]))
						}
						if (!t)
							return [];
						var s = [];
						var o = [];
						var u = [];
						var f = false;
						var l = false;
						var w, E, S;
						x(r || e.tags);
						var T = new b(t);
						var N, C, k, L, A, O;
						while (!T.eos()) {
							N = T.pos;
							k = T.scanUntil(w);
							if (k) {
								for (var M = 0, _ = k.length; M < _; ++M) {
									L = k.charAt(M);
									if (a(L)) {
										u.push(o.length)
									} else {
										l = true
									}
									o.push([ "text", L, N, N + 1 ]);
									N += 1;
									if (L === "\n")
										m()
								}
							}
							if (!T.scan(w))
								break;
							f = true;
							C = T.scan(v) || "name";
							T.scan(c);
							if (C === "=") {
								k = T.scanUntil(p);
								T.scan(p);
								T.scanUntil(E)
							} else if (C === "{") {
								k = T.scanUntil(S);
								T.scan(d);
								T.scanUntil(E);
								C = "&"
							} else {
								k = T.scanUntil(E)
							}
							if (!T.scan(E))
								throw new Error("Unclosed tag at " + T.pos);
							A = [ C, k, N, T.pos ];
							o.push(A);
							if (C === "#" || C === "^") {
								s.push(A)
							} else if (C === "/") {
								O = s.pop();
								if (!O)
									throw new Error('Unopened section "' + k
											+ '" at ' + N);
								if (O[1] !== k)
									throw new Error('Unclosed section "' + O[1]
											+ '" at ' + N)
							} else if (C === "name" || C === "{" || C === "&") {
								l = true
							} else if (C === "=") {
								x(k)
							}
						}
						O = s.pop();
						if (O)
							throw new Error('Unclosed section "' + O[1]
									+ '" at ' + T.pos);
						return y(g(o))
					}
					function g(e) {
						var t = [];
						var n, r;
						for (var i = 0, s = e.length; i < s; ++i) {
							n = e[i];
							if (n) {
								if (n[0] === "text" && r && r[0] === "text") {
									r[1] += n[1];
									r[3] = n[3]
								} else {
									t.push(n);
									r = n
								}
							}
						}
						return t
					}
					function y(e) {
						var t = [];
						var n = t;
						var r = [];
						var i, s;
						for (var o = 0, u = e.length; o < u; ++o) {
							i = e[o];
							switch (i[0]) {
							case "#":
							case "^":
								n.push(i);
								r.push(i);
								n = i[4] = [];
								break;
							case "/":
								s = r.pop();
								s[5] = i[2];
								n = r.length > 0 ? r[r.length - 1][4] : t;
								break;
							default:
								n.push(i)
							}
						}
						return t
					}
					function b(e) {
						this.string = e;
						this.tail = e;
						this.pos = 0
					}
					function w(e, t) {
						this.view = e == null ? {} : e;
						this.cache = {
							"." : this.view
						};
						this.parent = t
					}
					function E() {
						this.cache = {}
					}
					var t = Object.prototype.toString;
					var n = Array.isArray || function(e) {
						return t.call(e) === "[object Array]"
					};
					var s = RegExp.prototype.test;
					var u = /\S/;
					var f = {
						"&" : "&amp;",
						"<" : "&lt;",
						">" : "&gt;",
						'"' : "&quot;",
						"'" : "&#39;",
						"/" : "&#x2F;"
					};
					var c = /\s*/;
					var h = /\s+/;
					var p = /\s*=/;
					var d = /\s*\}/;
					var v = /#|\^|\/|>|\{|&|=|!/;
					b.prototype.eos = function() {
						return this.tail === ""
					};
					b.prototype.scan = function(e) {
						var t = this.tail.match(e);
						if (!t || t.index !== 0)
							return "";
						var n = t[0];
						this.tail = this.tail.substring(n.length);
						this.pos += n.length;
						return n
					};
					b.prototype.scanUntil = function(e) {
						var t = this.tail.search(e), n;
						switch (t) {
						case -1:
							n = this.tail;
							this.tail = "";
							break;
						case 0:
							n = "";
							break;
						default:
							n = this.tail.substring(0, t);
							this.tail = this.tail.substring(t)
						}
						this.pos += n.length;
						return n
					};
					w.prototype.push = function(e) {
						return new w(e, this)
					};
					w.prototype.lookup = function(e) {
						var t = this.cache;
						var n;
						if (e in t) {
							n = t[e]
						} else {
							var i = this, s, o;
							while (i) {
								if (e.indexOf(".") > 0) {
									n = i.view;
									s = e.split(".");
									o = 0;
									while (n != null && o < s.length)
										n = n[s[o++]]
								} else {
									n = i.view[e]
								}
								if (n != null)
									break;
								i = i.parent
							}
							t[e] = n
						}
						if (r(n))
							n = n.call(this.view);
						return n
					};
					E.prototype.clearCache = function() {
						this.cache = {}
					};
					E.prototype.parse = function(e, t) {
						var n = this.cache;
						var r = n[e];
						if (r == null)
							r = n[e] = m(e, t);
						return r
					};
					E.prototype.render = function(e, t, n) {
						var r = this.parse(e);
						var i = t instanceof w ? t : new w(t);
						return this.renderTokens(r, i, n, e)
					};
					E.prototype.renderTokens = function(t, i, s, o) {
						function f(e) {
							return a.render(e, i, s)
						}
						var u = "";
						var a = this;
						var l, c;
						for (var h = 0, p = t.length; h < p; ++h) {
							l = t[h];
							switch (l[0]) {
							case "#":
								c = i.lookup(l[1]);
								if (!c)
									continue;
								if (n(c)) {
									for (var d = 0, v = c.length; d < v; ++d) {
										u += this.renderTokens(l[4], i
												.push(c[d]), s, o)
									}
								} else if (typeof c === "object"
										|| typeof c === "string") {
									u += this.renderTokens(l[4], i.push(c), s,
											o)
								} else if (r(c)) {
									if (typeof o !== "string")
										throw new Error(
												"Cannot use higher-order sections without the original template");
									c = c.call(i.view, o.slice(l[3], l[5]), f);
									if (c != null)
										u += c
								} else {
									u += this.renderTokens(l[4], i, s, o)
								}
								break;
							case "^":
								c = i.lookup(l[1]);
								if (!c || n(c) && c.length === 0)
									u += this.renderTokens(l[4], i, s, o);
								break;
							case ">":
								if (!s)
									continue;
								c = r(s) ? s(l[1]) : s[l[1]];
								if (c != null)
									u += this.renderTokens(this.parse(c), i, s,
											c);
								break;
							case "&":
								c = i.lookup(l[1]);
								if (c != null)
									u += c;
								break;
							case "name":
								c = i.lookup(l[1]);
								if (c != null)
									u += e.escape(c);
								break;
							case "text":
								u += l[1];
								break
							}
						}
						return u
					};
					e.name = "mustache.js";
					e.version = "0.8.1";
					e.tags = [ "{{", "}}" ];
					var S = new E;
					e.clearCache = function() {
						return S.clearCache()
					};
					e.parse = function(e, t) {
						return S.parse(e, t)
					};
					e.render = function(e, t, n) {
						return S.render(e, t, n)
					};
					e.to_html = function(t, n, i, s) {
						var o = e.render(t, n, i);
						if (r(s)) {
							s(o)
						} else {
							return o
						}
					};
					e.escape = l;
					e.Scanner = b;
					e.Context = w;
					e.Writer = E
				});
(function(e) {
	if (typeof define === "function" && define.amd) {
		define([ "jquery" ], e)
	} else {
		e(jQuery)
	}
})
		(function(e) {
			function r() {
				var n = i(this);
				var r = t.settings;
				if (!isNaN(n.datetime)) {
					if (r.cutoff == 0 || Math.abs(o(n.datetime)) < r.cutoff) {
						e(this).text(s(n.datetime))
					}
				}
				return this
			}
			function i(n) {
				n = e(n);
				if (!n.data("timeago")) {
					n.data("timeago", {
						datetime : t.datetime(n)
					});
					var r = e.trim(n.text());
					if (t.settings.localeTitle) {
						n.attr("title", n.data("timeago").datetime
								.toLocaleString())
					} else if (r.length > 0
							&& !(t.isTime(n) && n.attr("title"))) {
						n.attr("title", r)
					}
				}
				return n.data("timeago")
			}
			function s(e) {
				return t.inWords(o(e))
			}
			function o(e) {
				return (new Date).getTime() - e.getTime()
			}
			e.timeago = function(t) {
				if (t instanceof Date) {
					return s(t)
				} else if (typeof t === "string") {
					return s(e.timeago.parse(t))
				} else if (typeof t === "number") {
					return s(new Date(t))
				} else {
					return s(e.timeago.datetime(t))
				}
			};
			var t = e.timeago;
			e
					.extend(
							e.timeago,
							{
								settings : {
									refreshMillis : 6e4,
									allowPast : true,
									allowFuture : false,
									localeTitle : false,
									cutoff : 0,
									strings : {
										prefixAgo : null,
										prefixFromNow : null,
										suffixAgo : "ago",
										suffixFromNow : "from now",
										inPast : "any moment now",
										seconds : "less than a minute",
										minute : "about a minute",
										minutes : "%d minutes",
										hour : "about an hour",
										hours : "about %d hours",
										day : "a day",
										days : "%d days",
										month : "about a month",
										months : "%d months",
										year : "about a year",
										years : "%d years",
										wordSeparator : " ",
										numbers : []
									}
								},
								inWords : function(t) {
									function l(r, i) {
										var s = e.isFunction(r) ? r(i, t) : r;
										var o = n.numbers && n.numbers[i] || i;
										return s.replace(/%d/i, o)
									}
									if (!this.settings.allowPast
											&& !this.settings.allowFuture) {
										throw "timeago allowPast and allowFuture settings can not both be set to false."
									}
									var n = this.settings.strings;
									var r = n.prefixAgo;
									var i = n.suffixAgo;
									if (this.settings.allowFuture) {
										if (t < 0) {
											r = n.prefixFromNow;
											i = n.suffixFromNow
										}
									}
									if (!this.settings.allowPast && t >= 0) {
										return this.settings.strings.inPast
									}
									var s = Math.abs(t) / 1e3;
									var o = s / 60;
									var u = o / 60;
									var a = u / 24;
									var f = a / 365;
									var c = s < 45
											&& l(n.seconds, Math.round(s))
											|| s < 90 && l(n.minute, 1)
											|| o < 45
											&& l(n.minutes, Math.round(o))
											|| o < 90 && l(n.hour, 1) || u < 24
											&& l(n.hours, Math.round(u))
											|| u < 42 && l(n.day, 1) || a < 30
											&& l(n.days, Math.round(a))
											|| a < 45 && l(n.month, 1)
											|| a < 365
											&& l(n.months, Math.round(a / 30))
											|| f < 1.5 && l(n.year, 1)
											|| l(n.years, Math.round(f));
									var h = n.wordSeparator || "";
									if (n.wordSeparator === undefined) {
										h = " "
									}
									return e.trim([ r, c, i ].join(h))
								},
								parse : function(t) {
									var n = e.trim(t);
									n = n.replace(/\.\d+/, "");
									n = n.replace(/-/, "/").replace(/-/, "/");
									n = n.replace(/T/, " ")
											.replace(/Z/, " UTC");
									n = n.replace(/([\+\-]\d\d)\:?(\d\d)/,
											" $1$2");
									n = n.replace(/([\+\-]\d\d)$/, " $100");
									return new Date(n)
								},
								datetime : function(n) {
									var r = t.isTime(n) ? e(n).attr("datetime")
											: e(n).attr("title");
									return t.parse(r)
								},
								isTime : function(t) {
									return e(t).get(0).tagName.toLowerCase() === "time"
								}
							});
			var n = {
				init : function() {
					var n = e.proxy(r, this);
					n();
					var i = t.settings;
					if (i.refreshMillis > 0) {
						this._timeagoInterval = setInterval(n, i.refreshMillis)
					}
				},
				update : function(n) {
					var i = t.parse(n);
					e(this).data("timeago", {
						datetime : i
					});
					if (t.settings.localeTitle)
						e(this).attr("title", i.toLocaleString());
					r.apply(this)
				},
				updateFromDOM : function() {
					e(this).data(
							"timeago",
							{
								datetime : t.parse(t.isTime(this) ? e(this)
										.attr("datetime") : e(this).attr(
										"title"))
							});
					r.apply(this)
				},
				dispose : function() {
					if (this._timeagoInterval) {
						window.clearInterval(this._timeagoInterval);
						this._timeagoInterval = null
					}
				}
			};
			e.fn.timeago = function(e, t) {
				var r = e ? n[e] : n.init;
				if (!r) {
					throw new Error("Unknown function name '" + e
							+ "' for timeago")
				}
				this.each(function() {
					r.call(this, t)
				});
				return this
			};
			document.createElement("abbr");
			document.createElement("time")
		});
(function(e) {
	e.extend(e.timeago.settings.strings, {
		prefixAgo : null,
		prefixFromNow : "지금으로 부터",
		suffixAgo : "전",
		suffixFromNow : "전",
		inPast : "이전",
		seconds : "방금",
		minute : "1분",
		minutes : "%d분",
		hour : "1시간",
		hours : "%d시간",
		day : "1일",
		days : "%d일",
		month : "1달",
		months : "%d달",
		year : "1년",
		years : "%d년",
		wordSeparator : " ",
		numbers : []
	})
})(jQuery);
var urlize = function() {
	function t(e, t) {
		return e.substr(0, t.length) == t
	}
	function n(e, t) {
		return e.substr(e.length - t.length, t.length) == t
	}
	function r(e, t) {
		var n = 0;
		var r = 0;
		while (true) {
			r = e.indexOf(t, r);
			if (r != -1) {
				n++;
				r += t.length
			} else {
				break
			}
		}
		return n
	}
	function s(e) {
		var t = e.indexOf(":");
		e = e.substring(0, t).toLowerCase() + e.substring(t);
		if (e.indexOf("%") == -1 || e.match(i)) {
			return encodeURI(e)
		} else {
			return e
		}
	}
	function v(e, t) {
		var n = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
				"&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
		if (t && !t.django_compatible) {
			n = n.replace(/\//g, "&#47;")
		}
		return n
	}
	function m(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
				"&gt;").replace(/"/g, "&quot;")
	}
	function g(e) {
		var t;
		if (e.length == 2 && typeof e[1] == "object") {
			t = e[1]
		} else {
			t = {
				nofollow : e[1],
				autoescape : e[2],
				trim_url_limit : e[3],
				target : e[4]
			}
		}
		if (!("django_compatible" in t))
			t.django_compatible = true;
		return t
	}
	function y(i, y) {
		function b(e, t) {
			if (y.trim === "http" || y.trim === "www")
				e = e.replace(/^https?:\/\//i, "");
			if (y.trim === "www")
				e = e.replace(/^www\./i, "");
			if (t === undefined)
				t = y.trim_url_limit;
			if (t && e.length > t)
				return e.substr(0, t - 3) + "...";
			return e
		}
		y = g(arguments);
		var w = false;
		var E = y.django_compatible ? l : c;
		var S = y.django_compatible ? o : u;
		var x = y.django_compatible ? a : f;
		var T = new RegExp("^www\\.|^(?!http)\\w[^@]+\\.("
				+ (y.top_level_domains || p).join("|") + ")$", "i");
		var N = e(i, E);
		for (var C = 0; C < N.length; C++) {
			var k = N[C];
			var L = undefined;
			if (k.indexOf(".") != -1 || k.indexOf("@") != -1
					|| k.indexOf(":") != -1) {
				var A = "";
				var O = k;
				var M = "";
				for (var _ = 0; _ < S.length; _++) {
					var D = S[_];
					if (n(O, D)) {
						O = O.substr(0, O.length - D.length);
						M = D + M
					}
				}
				for (var _ = 0; _ < x.length; _++) {
					var P = x[_][0];
					var H = x[_][1];
					if (t(O, P)) {
						O = O.substr(P.length);
						A = A + P
					}
					if (n(O, H) && r(O, H) == r(O, P) + 1) {
						O = O.substr(0, O.length - H.length);
						M = H + M
					}
				}
				var B = undefined;
				var j = y.nofollow ? ' rel="nofollow"' : "";
				var F = y.target ? ' target="' + y.target + '"' : "";
				if (O.match(h))
					B = s(O);
				else if (O.match(T))
					B = s("http://" + O);
				else if (O.indexOf(":") == -1 && O.match(d)) {
					B = "mailto:" + O;
					j = ""
				}
				if (B) {
					var I = b(O);
					if (y.autoescape) {
						A = v(A, y);
						M = v(M, y);
						B = m(B);
						I = v(I, y)
					}
					O = '<a href="' + B + '"' + j + F + ">" + I + "</a>";
					if (B.indexOf("//" + location.hostname + "/") < 0)
						O += ' <a href="'
								+ B
								+ '" target="_blank" title="새창으로 열기"><i class="fa fa-external-link"></i></a>';
					N[C] = A + O + M
				} else {
					if (w) {
					} else if (y.autoescape) {
						N[C] = v(k, y)
					}
				}
			} else if (w) {
			} else if (y.autoescape) {
				N[C] = v(k, y)
			}
		}
		return N.join("")
	}
	var e;
	e = e
			|| function(e) {
				var t = String.prototype.split, n = /()??/.exec("")[1] === e, r;
				r = function(r, i, s) {
					if (Object.prototype.toString.call(i) !== "[object RegExp]") {
						return t.call(r, i, s)
					}
					var o = [], u = (i.ignoreCase ? "i" : "")
							+ (i.multiline ? "m" : "")
							+ (i.extended ? "x" : "") + (i.sticky ? "y" : ""), a = 0, i = new RegExp(
							i.source, u + "g"), f, l, c, h;
					r += "";
					if (!n) {
						f = new RegExp("^" + i.source + "$(?!\\s)", u)
					}
					s = s === e ? -1 >>> 0 : s >>> 0;
					while (l = i.exec(r)) {
						c = l.index + l[0].length;
						if (c > a) {
							o.push(r.slice(a, l.index));
							if (!n && l.length > 1) {
								l[0]
										.replace(
												f,
												function() {
													for (var t = 1; t < arguments.length - 2; t++) {
														if (arguments[t] === e) {
															l[t] = e
														}
													}
												})
							}
							if (l.length > 1 && l.index < r.length) {
								Array.prototype.push.apply(o, l.slice(1))
							}
							h = l[0].length;
							a = c;
							if (o.length >= s) {
								break
							}
						}
						if (i.lastIndex === l.index) {
							i.lastIndex++
						}
					}
					if (a === r.length) {
						if (h || !i.test("")) {
							o.push("")
						}
					} else {
						o.push(r.slice(a))
					}
					return o.length > s ? o.slice(0, s) : o
				};
				return r
			}();
	var i = /%(?![0-9A-Fa-f]{2})/;
	var o = [ ".", ",", ":", ";" ];
	var u = [ ".", ",", ":", ";", ".)" ];
	var a = [ [ "(", ")" ], [ "<", ">" ], [ "&lt;", "&gt;" ] ];
	var f = [ [ "(", ")" ], [ "<", ">" ], [ "&lt;", "&gt;" ], [ "“", "”" ],
			[ "‘", "’" ] ];
	var l = /(\s+)/;
	var c = /([\s<>"]+)/;
	var h = /^https?:\/\/\w/i;
	var p = [ "com", "edu", "gov", "int", "mil", "net", "org" ];
	var d = /^\S+@\S+\.\S+$/;
	y.test = {};
	y.test.split = e;
	y.test.convert_arguments = g;
	return y
}();
var autoLinker = function(e) {
	$(e)
			.contents()
			.each(
					function() {
						var e = $(this);
						if (this.nodeType == this.TEXT_NODE) {
							e.replaceWith(urlize(this.textContent, true, true))
						} else {
							if (!e.is("a, pre, code")) {
								autoLinker(this)
							} else if (e.is('a[href][target!="_blank"]')) {
								var t = $(this).contents();
								if (t.length == 1
										&& t[0].nodeType == this.TEXT_NODE
										&& !/^[#@]+/.test(t[0].textContent)
										&& e.attr("href").indexOf(
												"//" + location.hostname + "/") < 0) {
									var n = $("<div/>").append($(this).clone())
											.html();
									$(this)
											.replaceWith(
													n
															+ ' <a href="'
															+ e.attr("href")
															+ '" target="_blank" title="새창으로 열기">'
															+ '<i class="fa fa-external-link"></i></a>')
								}
							}
						}
					})
};
var whereToPlacePopover = function() {
	if ($(window).width() < 768)
		return "bottom";
	return "right"
};
if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/gm, "")
	}
}
if (typeof jQuery !== "undefined") {
	(function(e) {
		e(".timeago").timeago();
		e('[data-toggle="tooltip"]').tooltip();
		e.fn.spin.presets = {
			tiny : {
				lines : 8,
				length : 1,
				width : 2,
				radius : 4,
				color : "#56595c"
			},
			small : {
				lines : 11,
				length : 0,
				width : 3,
				radius : 10,
				shadow : true,
				hwaccel : true,
				color : "#56595c"
			},
			large : {
				lines : 10,
				length : 8,
				width : 4,
				radius : 8,
				color : "#56595c"
			}
		};
		e.ajaxSetup({
			statusCode : {
				401 : function() {
					location.href = contextPath + "/login/auth?redirectUrl="
							+ encodedURL
				}
			}
		});
		e(".sidebar-header").click(function() {
			if (e(".sidebar").is(".open")) {
				e(".sidebar").removeClass("open");
				e(".sidebar-category-nav").removeClass("open")
			} else {
				e(".sidebar").addClass("open");
				e(".sidebar-category-nav").addClass("open")
			}
		});
		e("html, body")
				.click(
						function(t) {
							if (!e(t.target)
									.is(
											".sidebar-header  *, .nav-main *, .sidebar-category-nav *, #search-google-form *")) {
								e(".sidebar").removeClass("open");
								e(".sidebar-category-nav").removeClass("open")
							}
							if (!e(t.target)
									.is(
											"#search-google, #search-google *, #search-google-popover *")) {
								e("#search-google").popover("hide")
							}
							if (!e(t.target)
									.is(
											"#user-func, #user-func  *, #user-func-popover *")) {
								e("#user-func").popover("hide")
							}
							if (!e(t.target)
									.is(
											"#user-notification, #user-notification *, #notification-popover *")) {
								e("#user-notification").popover("hide")
							}
						});
		e.onImageUpload = function(t) {
			return function(n) {
				var r = function(t, n) {
					return e.Deferred(function(r) {
						var i = e("<img>");
						i.one("load", function() {
							i.off("error abort");
							r.resolve(i)
						}).one("error abort", function() {
							i.off("load").detach();
							r.reject(i)
						}).css({
							display : "none"
						}).appendTo(document.body).attr({
							src : t,
							"data-filename" : n
						})
					}).promise()
				};
				var i = e(".note-image-dialog .note-modal-form");
				e(
						'<iframe src="about:blank"  style="display: none;" name="imageUploadHandlerFrame"></iframe>')
						.appendTo("body");
				e.imageUploaded = function(e, n) {
					r(e, n).then(function(e) {
						var n = e.width() >= t.width() ? "100%" : e.width();
						e.css({
							display : "",
							width : n
						});
						t.summernote("insertNode", e.get(0))
					})
				};
				i.attr({
					enctype : "multipart/form-data",
					target : "imageUploadHandlerFrame",
					action : contextPath + "/file/image",
					method : "post"
				});
				i[0].submit()
			}
		};
		e.extend(e.summernote.options,
				{
					lang : "ko-KR",
					height : 300,
					tabsize : 2,
					placeholder : "내용을 입력해 주세요.",
					prettifyHtml : false,
					disableLinkTarget : true,
					toolbar : [
							[ "style", [ "style" ] ],
							[
									"font",
									[ "bold", "italic", "underline",
											"strikethrough", "clear" ] ],
							[ "color", [ "color" ] ],
							[ "para", [ "ul", "ol", "table" ] ],
							[
									"insert",
									[ "codeblock", "link", "picture", "video",
											"hr" ] ],
							[ "view", [ "fullscreen", "codeview", "help" ] ] ]
				})
	})(jQuery)
}