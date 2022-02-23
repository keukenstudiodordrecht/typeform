window.tf = function () {
    "use strict";
    var e = {
            6664: function (e, t, n) {
                var o = this && this.__assign || function () {
                        return (o = Object.assign || function (e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    r = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function (e, t) {
                        e.default = t
                    }),
                    a = this && this.__importStar || function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                        return i(t, e), t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u = n(6654),
                    c = a(n(1920));

                function s(e) {
                    void 0 === e && (e = !1), u.initializePopovers(e), u.initializePopups(e), u.initializeSidetabs(e), u.initializeSliders(e), u.initializeWidgets(e)
                }
                var d = function () {
                    return s(!1)
                };
                e.exports = o(o({}, c), {
                    load: d,
                    reload: function () {
                        return s(!0)
                    }
                }), document.addEventListener("DOMContentLoaded", d, !1), "interactive" !== document.readyState && "complete" !== document.readyState || d()
            },
            8027: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.FORM_BASE_URL = t.POPUP_SIZE = t.SLIDER_WIDTH = t.SLIDER_POSITION = t.SIDETAB_ATTRIBUTE = t.WIDGET_ATTRIBUTE = t.SLIDER_ATTRIBUTE = t.POPUP_ATTRIBUTE = t.POPOVER_ATTRIBUTE = void 0, t.POPOVER_ATTRIBUTE = "data-tf-popover", t.POPUP_ATTRIBUTE = "data-tf-popup", t.SLIDER_ATTRIBUTE = "data-tf-slider", t.WIDGET_ATTRIBUTE = "data-tf-widget", t.SIDETAB_ATTRIBUTE = "data-tf-sidetab", t.SLIDER_POSITION = "right", t.SLIDER_WIDTH = 800, t.POPUP_SIZE = 100, t.FORM_BASE_URL = "https://form.typeform.com"
            },
            7528: function (e, t, n) {
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createPopover = void 0;
                var r = n(6797),
                    i = n(1320),
                    a = function (e, t) {
                        var n = e.parentNode;
                        n && (n.removeChild(e), n.appendChild(t))
                    },
                    u = function (e, t) {
                        void 0 === e && (e = "div"), void 0 === t && (t = "tf-v1-popover-button-icon");
                        var n = document.createElement(e);
                        return n.className = t, n.innerHTML = "&times;", n.dataset.testid = t, n
                    },
                    c = {
                        buttonColor: "#3a7685"
                    };
                t.createPopover = function (e, t) {
                    void 0 === t && (t = {});
                    var n, s, d = o(o({}, c), t),
                        l = r.createIframe(e, "popover", d),
                        f = l.iframe,
                        p = l.embedId,
                        v = l.refresh,
                        m = function (e, t) {
                            var n = document.createElement("div");
                            return n.className = "tf-v1-popover", n.dataset.testid = "tf-v1-popover", r.setElementSize(n, {
                                width: e,
                                height: t
                            })
                        }(d.width, d.height),
                        b = function () {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-popover-wrapper", e.dataset.testid = "tf-v1-popover-wrapper", e
                        }(),
                        h = function (e, t) {
                            var n = r.getTextColor(t),
                                o = document.createElement("div");
                            o.className = "tf-v1-popover-button-icon";
                            var i = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' + n + '"></path>\n  </svg>',
                                a = null == e ? void 0 : e.startsWith("http");
                            return o.innerHTML = a ? "<img alt='popover trigger icon button' src='" + e + "'/>" : null != e ? e : i, o.dataset.testid = "default-icon", o
                        }(d.customIcon, d.buttonColor || c.buttonColor),
                        y = function () {
                            var e = document.createElement("div");
                            e.className = "tf-v1-spinner";
                            var t = document.createElement("div");
                            return t.className = "tf-v1-popover-button-icon", t.dataset.testid = "spinner-icon", t.append(e), t
                        }(),
                        g = u(),
                        O = u("a", "tf-v1-popover-close"),
                        _ = function (e) {
                            var t = r.getTextColor(e),
                                n = document.createElement("button");
                            return n.className = "tf-v1-popover-button", n.dataset.testid = "tf-v1-popover-button", n.style.backgroundColor = e, n.style.color = t, n
                        }(d.buttonColor || c.buttonColor);
                    (d.container || document.body).append(m), b.append(f), m.append(_), m.append(O), _.append(h);
                    var w = function () {
                        n && n.parentNode && (n.classList.add("closing"), setTimeout((function () {
                            r.unmountElement(n)
                        }), 250))
                    };
                    d.tooltip && d.tooltip.length > 0 && (n = function (e, t) {
                        var n = document.createElement("span");
                        n.className = "tf-v1-popover-tooltip-close", n.dataset.testid = "tf-v1-popover-tooltip-close", n.innerHTML = "&times;", n.onclick = t;
                        var o = document.createElement("div");
                        o.className = "tf-v1-popover-tooltip-text", o.innerHTML = e;
                        var r = document.createElement("div");
                        return r.className = "tf-v1-popover-tooltip", r.dataset.testid = "tf-v1-popover-tooltip", r.appendChild(o), r.appendChild(n), r
                    }(d.tooltip, w), m.append(n)), d.notificationDays && (d.enableSandbox || i.canBuildNotificationDot(e)) && (s = i.buildNotificationDot(), _.append(s)), f.onload = function () {
                        m.classList.add("open"), b.style.opacity = "1", O.style.opacity = "1", a(y, g), r.addCustomKeyboardListener(E)
                    };
                    var P = function () {
                            r.isOpen(b) || (w(), s && (s.classList.add("closing"), d.notificationDays && !d.enableSandbox && i.saveNotificationDotHideUntilTime(e, d.notificationDays), setTimeout((function () {
                                r.unmountElement(s)
                            }), 250)), setTimeout((function () {
                                r.isInPage(b) ? (b.style.opacity = "0", O.style.opacity = "0", b.style.display = "flex", setTimeout((function () {
                                    m.classList.add("open"), b.style.opacity = "1", O.style.opacity = "1"
                                })), a(h, g)) : (m.append(b), a(h, y), b.style.opacity = "0", O.style.opacity = "0")
                            })))
                        },
                        E = function () {
                            var e;
                            r.isOpen(m) && (null === (e = t.onClose) || void 0 === e || e.call(t), setTimeout((function () {
                                d.keepSession ? b.style.display = "none" : r.unmountElement(b), m.classList.remove("open"), a(g, h)
                            }), 250))
                        };
                    r.setAutoClose(p, d.autoClose, E);
                    var j = function () {
                        r.isOpen(b) ? E() : P()
                    };
                    return _.onclick = j, O.onclick = E, d.open && !r.isOpen(b) && r.handleCustomOpen(P, d.open, d.openValue), {
                        open: P,
                        close: E,
                        toggle: j,
                        refresh: v,
                        unmount: function () {
                            r.unmountElement(m)
                        }
                    }
                }
            },
            1797: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(7528), t), r(n(6100), t)
            },
            1320: function (e, t) {
                var n = this && this.__assign || function () {
                    return (n = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildNotificationDot = t.canBuildNotificationDot = t.saveNotificationDotHideUntilTime = void 0;
                var o = "tfNotificationData",
                    r = function () {
                        var e = localStorage.getItem(o);
                        return e ? JSON.parse(e) : {}
                    },
                    i = function (e) {
                        e && localStorage.setItem(o, JSON.stringify(e))
                    };
                t.saveNotificationDotHideUntilTime = function (e, t) {
                    var o, a = new Date;
                    a.setDate(a.getDate() + t), i(n(n({}, r()), ((o = {})[e] = {
                        hideUntilTime: a.getTime()
                    }, o)))
                }, t.canBuildNotificationDot = function (e) {
                    var t = function (e) {
                        var t;
                        return (null === (t = r()[e]) || void 0 === t ? void 0 : t.hideUntilTime) || 0
                    }(e);
                    return (new Date).getTime() > t && (t && function (e) {
                        var t = r();
                        delete t[e], i(t)
                    }(e), !0)
                }, t.buildNotificationDot = function () {
                    var e = document.createElement("span");
                    return e.className = "tf-v1-popover-unread-dot", e.dataset.testid = "tf-v1-popover-unread-dot", e
                }
            },
            6100: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            9630: function (e, t, n) {
                var o = this && this.__rest || function (e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createPopup = void 0;
                var r = n(6797),
                    i = n(8027),
                    a = n(6797);
                t.createPopup = function (e, t) {
                    if (void 0 === t && (t = {}), !r.hasDom()) return {
                        open: function () {},
                        close: function () {},
                        toggle: function () {},
                        refresh: function () {},
                        unmount: function () {}
                    };
                    var n = t.width,
                        u = t.height,
                        c = t.size,
                        s = void 0 === c ? i.POPUP_SIZE : c,
                        d = t.onClose,
                        l = o(t, ["width", "height", "size", "onClose"]),
                        f = r.createIframe(e, "popup", l),
                        p = f.iframe,
                        v = f.embedId,
                        m = f.refresh,
                        b = document.body.style.overflow,
                        h = function () {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-popup", e.style.opacity = "0", e
                        }(),
                        y = function () {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-spinner", e
                        }(),
                        g = function (e, t, n) {
                            var o = document.createElement("div");
                            return o.className = "tf-v1-iframe-wrapper", o.style.opacity = "0", r.isDefined(e) && r.isDefined(t) ? r.setElementSize(o, {
                                width: e,
                                height: t
                            }) : (o.style.width = "calc(" + n + "% - 80px)", o.style.height = "calc(" + n + "% - 80px)", o)
                        }(n, u, s);
                    g.append(p), h.append(y), h.append(g);
                    var O = l.container || document.body;
                    p.onload = function () {
                        g.style.opacity = "1", setTimeout((function () {
                            y.style.display = "none"
                        }), 250), r.addCustomKeyboardListener(w)
                    };
                    var _ = function () {
                            a.isOpen(h) || (a.isInPage(h) ? h.style.display = "flex" : (y.style.display = "block", O.append(h)), document.body.style.overflow = "hidden", setTimeout((function () {
                                h.style.opacity = "1"
                            })))
                        },
                        w = function () {
                            a.isOpen(h) && (null == d || d(), h.style.opacity = "0", document.body.style.overflow = b, setTimeout((function () {
                                l.keepSession ? h.style.display = "none" : P()
                            }), 250))
                        };
                    g.append(function (e) {
                        var t = document.createElement("a");
                        return t.className = "tf-v1-close", t.innerHTML = "&times;", t.onclick = e, t
                    }(w)), r.setAutoClose(v, l.autoClose, w);
                    var P = function () {
                        r.unmountElement(h)
                    };
                    return l.open && !a.isOpen(h) && r.handleCustomOpen(_, l.open, l.openValue), {
                        open: _,
                        close: w,
                        toggle: function () {
                            a.isOpen(h) ? w() : _()
                        },
                        refresh: m,
                        unmount: P
                    }
                }
            },
            5970: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(9630), t), r(n(7394), t)
            },
            7394: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            382: function (e, t, n) {
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSidetab = void 0;
                var r = n(6797),
                    i = {
                        buttonColor: "#3a7685",
                        buttonText: "Launch me"
                    },
                    a = function (e, t) {
                        void 0 === e && (e = "div"), void 0 === t && (t = "tf-v1-sidetab-button-icon");
                        var n = document.createElement(e);
                        return n.className = t, n.innerHTML = "&times;", n.dataset.testid = t, n
                    },
                    u = function (e, t) {
                        var n = e.parentNode;
                        n && (n.removeChild(e), n.appendChild(t))
                    };
                t.createSidetab = function (e, t) {
                    void 0 === t && (t = {});
                    var n, c, s, d = o(o({}, i), t),
                        l = r.createIframe(e, "side-tab", d),
                        f = l.iframe,
                        p = l.embedId,
                        v = l.refresh,
                        m = (n = d.width, c = d.height, (s = document.createElement("div")).className = "tf-v1-sidetab", s.dataset.testid = "tf-v1-sidetab", r.setElementSize(s, {
                            width: n,
                            height: c
                        })),
                        b = function () {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-sidetab-wrapper", e.dataset.testid = "tf-v1-sidetab-wrapper", e
                        }(),
                        h = function () {
                            var e = document.createElement("div");
                            e.className = "tf-v1-spinner";
                            var t = document.createElement("div");
                            return t.className = "tf-v1-sidetab-button-icon", t.dataset.testid = "spinner-icon", t.append(e), t
                        }(),
                        y = function (e) {
                            var t = r.getTextColor(e),
                                n = document.createElement("button");
                            return n.className = "tf-v1-sidetab-button", n.style.backgroundColor = e, n.style.color = t, n
                        }(d.buttonColor || i.buttonColor),
                        g = function (e) {
                            var t = document.createElement("span");
                            return t.className = "tf-v1-sidetab-button-text", t.innerHTML = e, t
                        }(d.buttonText || i.buttonText),
                        O = function (e, t) {
                            var n = r.getTextColor(t),
                                o = document.createElement("div");
                            o.className = "tf-v1-sidetab-button-icon";
                            var i = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' + n + '"></path>\n  </svg>',
                                a = null == e ? void 0 : e.startsWith("http");
                            return o.innerHTML = a ? "<img alt='popover trigger icon button' src='" + e + "'/>" : null != e ? e : i, o.dataset.testid = "default-icon", o
                        }(d.customIcon, d.buttonColor || i.buttonColor),
                        _ = a(),
                        w = a("a", "tf-v1-sidetab-close");
                    (d.container || document.body).append(m), b.append(f), m.append(y), m.append(w), y.append(O), y.append(g), setTimeout((function () {
                        m.classList.add("ready")
                    }), 250), f.onload = function () {
                        m.classList.add("open"), u(h, _), r.addCustomKeyboardListener(E)
                    };
                    var P = function () {
                            r.isOpen(b) || (r.isInPage(b) ? (b.style.display = "flex", m.classList.add("open"), u(O, _)) : (m.append(b), u(O, h)))
                        },
                        E = function () {
                            var e;
                            r.isOpen(b) && (null === (e = d.onClose) || void 0 === e || e.call(d), m.classList.remove("open"), setTimeout((function () {
                                d.keepSession ? b.style.display = "none" : r.unmountElement(b), u(_, O)
                            }), 250))
                        };
                    r.setAutoClose(p, d.autoClose, E);
                    var j = function () {
                        r.isOpen(b) ? E() : P()
                    };
                    return y.onclick = j, w.onclick = E, d.open && !r.isOpen(b) && r.handleCustomOpen(P, d.open, d.openValue), {
                        open: P,
                        close: E,
                        toggle: j,
                        refresh: v,
                        unmount: function () {
                            r.unmountElement(m)
                        }
                    }
                }
            },
            1434: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(382), t), r(n(7668), t)
            },
            7668: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            2603: function (e, t, n) {
                var o = this && this.__rest || function (e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSlider = void 0;
                var r = n(6797),
                    i = n(8027);
                t.createSlider = function (e, t) {
                    if (void 0 === t && (t = {}), !r.hasDom()) return {
                        open: function () {},
                        close: function () {},
                        toggle: function () {},
                        refresh: function () {},
                        unmount: function () {}
                    };
                    var n = t.position,
                        a = void 0 === n ? i.SLIDER_POSITION : n,
                        u = t.width,
                        c = void 0 === u ? i.SLIDER_WIDTH : u,
                        s = t.onClose,
                        d = o(t, ["position", "width", "onClose"]),
                        l = r.createIframe(e, "slider", d),
                        f = l.iframe,
                        p = l.embedId,
                        v = l.refresh,
                        m = document.body.style.overflow,
                        b = function (e) {
                            var t = document.createElement("div");
                            return t.className = "tf-v1-slider " + e, t.style.opacity = "0", t
                        }(a),
                        h = function () {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-spinner", e
                        }(),
                        y = function (e, t) {
                            var n = document.createElement("div");
                            return n.className = "tf-v1-iframe-wrapper", n.style[e] = "-100%", r.setElementSize(n, {
                                width: t
                            })
                        }(a, c);
                    y.append(f), b.append(h), b.append(y);
                    var g = d.container || document.body;
                    f.onload = function () {
                        y.style[a] = "0", setTimeout((function () {
                            h.style.display = "none"
                        }), 500), r.addCustomKeyboardListener(_)
                    };
                    var O = function () {
                            r.isOpen(b) || (r.isInPage(b) ? (b.style.display = "flex", setTimeout((function () {
                                y.style[a] = "0"
                            }))) : (g.append(b), h.style.display = "block"), document.body.style.overflow = "hidden", setTimeout((function () {
                                b.style.opacity = "1"
                            })))
                        },
                        _ = function () {
                            r.isOpen(b) && (null == s || s(), b.style.opacity = "0", y.style[a] = "-100%", document.body.style.overflow = m, setTimeout((function () {
                                d.keepSession ? b.style.display = "none" : w()
                            }), 500))
                        };
                    r.setAutoClose(p, d.autoClose, _);
                    var w = function () {
                        r.unmountElement(b)
                    };
                    return y.append(function (e) {
                        var t = document.createElement("a");
                        return t.className = "tf-v1-close", t.innerHTML = "&times;", t.onclick = e, t
                    }(_)), d.open && !r.isOpen(b) && r.handleCustomOpen(O, d.open, d.openValue), {
                        open: O,
                        close: _,
                        toggle: function () {
                            r.isOpen(b) ? _() : O()
                        },
                        refresh: v,
                        unmount: w
                    }
                }
            },
            4071: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(2603), t), r(n(3162), t)
            },
            3162: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            718: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createWidget = void 0;
                var o = n(6797),
                    r = n(8554),
                    i = n(2313);
                t.createWidget = function (e, t) {
                    if (!o.hasDom()) return {
                        refresh: function () {},
                        unmount: function () {}
                    };
                    var n = t;
                    t.inlineOnMobile || !t.forceTouch && !o.isFullscreen() || (n.enableFullscreen = !0, n.forceTouch = !0);
                    var a = o.createIframe(e, "widget", n),
                        u = a.embedId,
                        c = a.iframe,
                        s = a.refresh,
                        d = i.buildWidget(c, t.width, t.height);
                    if (n.autoResize) {
                        var l = "string" == typeof n.autoResize ? n.autoResize.split(",").map((function (e) {
                                return parseInt(e)
                            })) : [],
                            f = l[0],
                            p = l[1];
                        window.addEventListener("message", r.getFormHeightChangedHandler(u, (function (e) {
                            var n = Math.max(e.height + 20, f || 0);
                            p && (n = Math.min(n, p)), t.container.style.height = n + "px"
                        })))
                    }
                    var v, m = function () {
                        return t.container.append(d)
                    };
                    if (t.container.innerHTML = "", t.lazy ? o.lazyInitialize(t.container, m) : m(), n.enableFullscreen) {
                        var b = t.container;
                        window.addEventListener("message", r.getWelcomeScreenHiddenHandler(u, b));
                        var h = ((v = document.createElement("a")).className = "tf-v1-widget-close", v.innerHTML = "&times;", v);
                        h.onclick = function () {
                            var e;
                            if (null === (e = t.onClose) || void 0 === e || e.call(t), b.classList.remove("tf-v1-widget-fullscreen"), t.keepSession) {
                                var n = document.createElement("div");
                                n.className = "tf-v1-widget-iframe-overlay", n.onclick = function () {
                                    b.classList.add("tf-v1-widget-fullscreen"), o.unmountElement(n)
                                }, d.append(n)
                            } else t.container.innerHTML = "", m(), b.append(h)
                        }, b.append(h)
                    }
                    return {
                        refresh: s,
                        unmount: function () {
                            return o.unmountElement(d)
                        }
                    }
                }
            },
            1419: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildWidget = void 0;
                var o = n(6797);
                t.buildWidget = function (e, t, n) {
                    var r = document.createElement("div");
                    return r.className = "tf-v1-widget", r.append(e), o.setElementSize(r, {
                        width: t,
                        height: n
                    })
                }
            },
            2313: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(1419), t)
            },
            9321: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(718), t), r(n(4058), t)
            },
            4058: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            1920: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(1797), t), r(n(5970), t), r(n(4071), t), r(n(9321), t), r(n(1434), t)
            },
            5455: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildOptionsFromAttributes = void 0;
                var o = n(6797);
                t.buildOptionsFromAttributes = function (e) {
                    return o.loadOptionsFromAttributes(e, {
                        source: "string",
                        medium: "string",
                        mediumVersion: "string",
                        open: "string",
                        openValue: "integer",
                        hideFooter: "boolean",
                        hideHeaders: "boolean",
                        opacity: "integer",
                        disableTracking: "boolean",
                        onReady: "function",
                        onSubmit: "function",
                        onQuestionChanged: "function",
                        onHeightChanged: "function",
                        autoResize: "stringOrBoolean",
                        onClose: "function",
                        transitiveSearchParams: "array",
                        hidden: "record",
                        chat: "boolean",
                        buttonColor: "string",
                        customIcon: "string",
                        width: "integer",
                        height: "integer",
                        size: "integer",
                        buttonText: "string",
                        position: "string",
                        enableSandbox: "boolean",
                        tooltip: "string",
                        notificationDays: "integer",
                        autoClose: "integerOrBoolean",
                        shareGaInstance: "stringOrBoolean",
                        forceTouch: "boolean",
                        enableFullscreen: "boolean",
                        inlineOnMobile: "boolean",
                        disableAutoFocus: "boolean",
                        tracking: "record",
                        redirectTarget: "string",
                        iframeProps: "record",
                        lazy: "boolean",
                        keepSession: "boolean"
                    })
                }
            },
            6654: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(8806), t), r(n(8933), t), r(n(7833), t), r(n(5361), t), r(n(2103), t)
            },
            8806: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializePopovers = void 0;
                var o = n(1797),
                    r = n(8027),
                    i = n(7308);
                t.initializePopovers = function (e) {
                    void 0 === e && (e = !1), i.initialize(r.POPOVER_ATTRIBUTE, "popover.css", e, (function (e, t, n) {
                        var r = o.createPopover(e, t).toggle;
                        n.onclick = r
                    }))
                }
            },
            8933: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializePopups = void 0;
                var o = n(5970),
                    r = n(8027),
                    i = n(7308);
                t.initializePopups = function (e) {
                    void 0 === e && (e = !1), i.initialize(r.POPUP_ATTRIBUTE, "popup.css", e, (function (e, t, n) {
                        var r = o.createPopup(e, t).toggle;
                        n.onclick = r
                    }))
                }
            },
            2103: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeSidetabs = void 0;
                var o = n(1434),
                    r = n(8027),
                    i = n(7308);
                t.initializeSidetabs = function (e) {
                    void 0 === e && (e = !1), i.initialize(r.SIDETAB_ATTRIBUTE, "sidetab.css", e, (function (e, t) {
                        o.createSidetab(e, t)
                    }))
                }
            },
            7833: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeSliders = void 0;
                var o = n(4071),
                    r = n(8027),
                    i = n(7308);
                t.initializeSliders = function (e) {
                    void 0 === e && (e = !1), i.initialize(r.SLIDER_ATTRIBUTE, "slider.css", e, (function (e, t, n) {
                        var r = o.createSlider(e, t).toggle;
                        n.onclick = r
                    }))
                }
            },
            5361: function (e, t, n) {
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeWidgets = void 0;
                var r = n(9321),
                    i = n(8027),
                    a = n(7308);
                t.initializeWidgets = function (e) {
                    void 0 === e && (e = !1), a.initialize(i.WIDGET_ATTRIBUTE, "widget.css", e, (function (e, t, n) {
                        r.createWidget(e, o(o({}, t), {
                            container: n
                        }))
                    }))
                }
            },
            7308: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initialize = void 0;
                var o = n(6797),
                    r = n(5455);
                t.initialize = function (e, t, n, i) {
                    void 0 === n && (n = !1);
                    var a = document.querySelectorAll("[" + e + "]");
                    a.length > 0 && o.includeCss(t), Array.from(a).forEach((function (t, o) {
                        if (n || "true" !== t.dataset.tfLoaded) {
                            var a = t.getAttribute(e);
                            if (!a) throw new Error("Invalid " + e + "=" + a + " for embed #" + o);
                            i(a, r.buildOptionsFromAttributes(t), t), t.dataset.tfLoaded = "true"
                        }
                    }))
                }
            },
            3626: function (e, t, n) {
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildIframeSrc = void 0;
                var r = n(8027),
                    i = n(4527),
                    a = n(2346),
                    u = n(2698),
                    c = {
                        widget: "embed-widget",
                        popup: "popup-blank",
                        slider: "popup-drawer",
                        popover: "popup-popover",
                        "side-tab": "popup-side-panel"
                    };
                t.buildIframeSrc = function (e) {
                    var t = e.formId,
                        n = e.type,
                        s = e.embedId,
                        d = e.options,
                        l = function (e, t, n) {
                            var r = n.transitiveSearchParams,
                                i = n.source,
                                a = n.medium,
                                s = n.mediumVersion,
                                d = n.hideFooter,
                                l = n.hideHeaders,
                                f = n.opacity,
                                p = n.disableTracking,
                                v = n.enableSandbox,
                                m = n.disableAutoFocus,
                                b = n.shareGaInstance,
                                h = n.forceTouch,
                                y = n.enableFullscreen,
                                g = n.tracking,
                                O = n.redirectTarget,
                                _ = u.getTransitiveSearchParams(r);
                            return o(o(o({}, {
                                "typeform-embed-id": t,
                                "typeform-embed": c[e],
                                "typeform-source": i,
                                "typeform-medium": a,
                                "typeform-medium-version": s,
                                "embed-hide-footer": d ? "true" : void 0,
                                "embed-hide-headers": l ? "true" : void 0,
                                "embed-opacity": f,
                                "disable-tracking": p || v ? "true" : void 0,
                                "disable-auto-focus": m ? "true" : void 0,
                                "__dangerous-disable-submissions": v ? "true" : void 0,
                                "share-ga-instance": b ? "true" : void 0,
                                "force-touch": h ? "true" : void 0,
                                "add-placeholder-ws": "widget" === e && y ? "true" : void 0,
                                "typeform-embed-redirect-target": O
                            }), _), g)
                        }(n, s, function (e) {
                            return o(o({}, {
                                source: null === (t = null === window || void 0 === window ? void 0 : window.location) || void 0 === t ? void 0 : t.hostname.replace(/^www\./, ""),
                                medium: "embed-sdk",
                                mediumVersion: "next"
                            }), i.removeUndefinedKeys(e));
                            var t
                        }(d)),
                        f = function (e, t) {
                            void 0 === t && (t = !1);
                            var n = t ? "c" : "to";
                            return new URL(e.startsWith("http://") || e.startsWith("https://") ? e : r.FORM_BASE_URL + "/" + n + "/" + e)
                        }(t, d.chat);
                    if (Object.entries(l).filter((function (e) {
                            var t = e[1];
                            return a.isDefined(t)
                        })).forEach((function (e) {
                            var t = e[0],
                                n = e[1];
                            f.searchParams.set(t, n)
                        })), d.hidden) {
                        var p = new URL(r.FORM_BASE_URL);
                        Object.entries(d.hidden).filter((function (e) {
                            var t = e[1];
                            return a.isDefined(t)
                        })).forEach((function (e) {
                            var t = e[0],
                                n = e[1];
                            p.searchParams.set(t, n)
                        }));
                        var v = p.searchParams.toString();
                        v && (f.hash = v)
                    }
                    return f.href
                }
            },
            8972: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.handleCustomOpen = void 0, t.handleCustomOpen = function (e, t, n) {
                    switch (t) {
                        case "load":
                            e();
                            break;
                        case "exit":
                            n && function (e, t) {
                                var n = 0,
                                    o = function (r) {
                                        r.clientY < e && r.clientY < n ? (document.removeEventListener("mousemove", o), t()) : n = r.clientY
                                    };
                                document.addEventListener("mousemove", o)
                            }(n, e);
                            break;
                        case "time":
                            setTimeout((function () {
                                e()
                            }), n);
                            break;
                        case "scroll":
                            n && function (e, t) {
                                var n = function () {
                                    var o = window.pageYOffset || document.documentElement.scrollTop,
                                        r = document.documentElement.clientTop || 0,
                                        i = document.documentElement.scrollHeight,
                                        a = o - r,
                                        u = a / i * 100,
                                        c = a + window.innerHeight >= i;
                                    (u >= e || c) && (t(), document.removeEventListener("scroll", n))
                                };
                                document.addEventListener("scroll", n)
                            }(n, e)
                    }
                }
            },
            1553: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createIframe = void 0;
                var o = n(3626),
                    r = n(6797),
                    i = n(8866),
                    a = n(8554),
                    u = n(2256),
                    c = n(7144),
                    s = n(5511);
                t.createIframe = function (e, t, n) {
                    var d = i.generateEmbedId(),
                        l = n.iframeProps,
                        f = void 0 === l ? {} : l,
                        p = n.onReady,
                        v = n.onQuestionChanged,
                        m = n.onHeightChanged,
                        b = n.onSubmit,
                        h = n.shareGaInstance,
                        y = o.buildIframeSrc({
                            formId: e,
                            embedId: d,
                            type: t,
                            options: n
                        }),
                        g = document.createElement("iframe");
                    return g.src = y, g.dataset.testid = "iframe", g.style.border = "0px", g.allow = "microphone; camera", Object.keys(f).forEach((function (e) {
                        g.setAttribute(e, f[e])
                    })), g.addEventListener("load", u.triggerIframeRedraw, {
                        once: !0
                    }), window.addEventListener("message", a.getFormReadyHandler(d, p)), window.addEventListener("message", a.getFormQuestionChangedHandler(d, v)), window.addEventListener("message", a.getFormHeightChangedHandler(d, m)), window.addEventListener("message", a.getFormSubmitHandler(d, b)), "widget" !== t && window.addEventListener("message", c.dispatchCustomKeyEventFromIframe), h && window.addEventListener("message", a.getFormReadyHandler(d, (function () {
                        r.setupGaInstance(g, d, h)
                    }))), {
                        iframe: g,
                        embedId: d,
                        refresh: function () {
                            return s.refreshIframe(g)
                        }
                    }
                }
            },
            8866: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateEmbedId = void 0, t.generateEmbedId = function () {
                    var e = Math.random();
                    return String(e).split(".")[1]
                }
            },
            8554: function (e, t) {
                var n = this && this.__rest || function (e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };

                function o(e, t, o) {
                    return function (r) {
                        var i = r.data,
                            a = i.type,
                            u = i.embedId,
                            c = n(i, ["type", "embedId"]);
                        a === e && u === t && (null == o || o(c))
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getWelcomeScreenHiddenHandler = t.getFormSubmitHandler = t.getFormHeightChangedHandler = t.getFormQuestionChangedHandler = t.getFormReadyHandler = void 0, t.getFormReadyHandler = function (e, t) {
                    return o("form-ready", e, t)
                }, t.getFormQuestionChangedHandler = function (e, t) {
                    return o("form-screen-changed", e, t)
                }, t.getFormHeightChangedHandler = function (e, t) {
                    return o("form-height-changed", e, t)
                }, t.getFormSubmitHandler = function (e, t) {
                    return o("form-submit", e, t)
                }, t.getWelcomeScreenHiddenHandler = function (e, t) {
                    return o("welcome-screen-hidden", e, (function () {
                        t.classList.add("tf-v1-widget-fullscreen")
                    }))
                }
            },
            339: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(1553), t), r(n(7144), t)
            },
            5511: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.refreshIframe = void 0, t.refreshIframe = function (e) {
                    if (e) {
                        var t = e.src;
                        if (t.includes("&refresh")) {
                            var n = t.split("&refresh#");
                            e.src = n.join("#")
                        } else(n = t.split("#"))[0] = n[0] + "&refresh", e.src = n.join("#")
                    }
                }
            },
            7144: function (e, t) {
                var n = this && this.__awaiter || function (e, t, n, o) {
                        return new(n || (n = Promise))((function (r, i) {
                            function a(e) {
                                try {
                                    c(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                try {
                                    c(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                    e(t)
                                }))).then(a, u)
                            }
                            c((o = o.apply(e, t || [])).next())
                        }))
                    },
                    o = this && this.__generator || function (e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                            return this
                        }), i;

                        function u(i) {
                            return function (u) {
                                return function (i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, o = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    a.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2], a.ops.push(i);
                                                    break
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.dispatchCustomKeyEventFromIframe = t.removeCustomKeyboardListener = t.addCustomKeyboardListener = void 0;
                var r = "Escape",
                    i = function (e, i) {
                        return n(void 0, void 0, void 0, (function () {
                            return o(this, (function (n) {
                                return e.code === r && "function" == typeof i && (i(), t.removeCustomKeyboardListener()), [2]
                            }))
                        }))
                    };
                t.addCustomKeyboardListener = function (e) {
                    return window.document.addEventListener("keydown", (function (t) {
                        return i(t, e)
                    }))
                }, t.removeCustomKeyboardListener = function () {
                    return window.document.removeEventListener("keydown", i)
                }, t.dispatchCustomKeyEventFromIframe = function (e) {
                    "form-close" === e.data.type && window.document.dispatchEvent(new KeyboardEvent("keydown", {
                        code: r
                    }))
                }
            },
            2256: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.triggerIframeRedraw = void 0, t.triggerIframeRedraw = function () {
                    this.style.transform = "translateZ(0)"
                }
            },
            8939: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getTextColor = void 0;
                var o = n(2938);
                t.getTextColor = function (e) {
                    if (!e) return "#FFFFFF";
                    var t = e.startsWith("#") ? o.hexRgb(e) : function (e) {
                            var t = {
                                    red: 0,
                                    green: 0,
                                    blue: 0
                                },
                                n = e.match(/\d+/g);
                            return n && (t.red = parseInt(n[0], 10), t.green = parseInt(n[0], 10), t.blue = parseInt(n[0], 10)), t
                        }(e),
                        n = t.red,
                        r = t.green,
                        i = t.blue;
                    return Math.round((299 * n + 587 * r + 114 * i) / 1e3) > 125 ? "#000000" : "#FFFFFF"
                }
            },
            2698: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getTransitiveSearchParams = void 0, t.getTransitiveSearchParams = function (e) {
                    var t = new URL(window.location.href),
                        n = {};
                    return e && e.length > 0 && e.forEach((function (e) {
                        t.searchParams.has(e) && (n[e] = t.searchParams.get(e))
                    })), n
                }
            },
            8252: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hasDom = void 0, t.hasDom = function () {
                    return "undefined" != typeof document && "undefined" != typeof window
                }
            },
            2938: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hexRgb = void 0;
                var n = new RegExp("[^#a-f\\d]", "gi"),
                    o = new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$", "i");
                t.hexRgb = function (e) {
                    if ("string" != typeof e || n.test(e) || !o.test(e)) throw new TypeError("Expected a valid hex string");
                    8 === (e = e.replace(/^#/, "")).length && (e = e.slice(0, 6)), 4 === e.length && (e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                    var t = Number.parseInt(e, 16);
                    return {
                        red: t >> 16,
                        green: t >> 8 & 255,
                        blue: 255 & t
                    }
                }
            },
            9071: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.includeCss = void 0, t.includeCss = function (e) {
                    var t = function (e) {
                        return "https://embed.typeform.com/next/css/" + e
                    }(e);
                    if (!document.querySelector('link[href="' + t + '"]')) {
                        var n = document.createElement("link");
                        n.rel = "stylesheet", n.href = t, document.head.append(n)
                    }
                }
            },
            6797: function (e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
                        void 0 === o && (o = n), Object.defineProperty(e, o, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(3626), t), r(n(339), t), r(n(8252), t), r(n(9071), t), r(n(2346), t), r(n(7377), t), r(n(6563), t), r(n(4527), t), r(n(9533), t), r(n(1451), t), r(n(8972), t), r(n(4748), t), r(n(4392), t), r(n(8939), t), r(n(9917), t), r(n(1987), t)
            },
            2346: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isDefined = void 0, t.isDefined = function (e) {
                    return null != e
                }
            },
            1987: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isVisible = t.isInPage = t.isOpen = void 0, t.isOpen = function (e) {
                    return t.isInPage(e) && t.isVisible(e)
                }, t.isInPage = function (e) {
                    return !!e.parentNode
                }, t.isVisible = function (e) {
                    return "none" !== e.style.display
                }
            },
            9917: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.lazyInitialize = void 0, t.lazyInitialize = function (e, t) {
                    var n = new IntersectionObserver((function (e) {
                        e.forEach((function (e) {
                            e.isIntersecting && (t(), n.unobserve(e.target))
                        }))
                    }));
                    n.observe(e)
                }
            },
            7377: function (e, t) {
                var n = this && this.__assign || function () {
                    return (n = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadOptionsFromAttributes = t.transformAttributeValue = t.camelCaseToKebabCase = void 0, t.camelCaseToKebabCase = function (e) {
                    return e.split("").map((function (e, t) {
                        return e.toUpperCase() === e ? (0 !== t ? "-" : "") + e.toLowerCase() : e
                    })).join("")
                };
                var o = function (e) {
                        return e || void 0
                    },
                    r = function (e) {
                        return "" === e || "yes" === e || "true" === e
                    },
                    i = function (e) {
                        var t = e ? parseInt(e, 10) : NaN;
                        return isNaN(t) ? void 0 : t
                    },
                    a = "%ESCAPED_COMMA%";
                t.transformAttributeValue = function (e, t) {
                    var u, c;
                    switch (t) {
                        case "string":
                            return o(e);
                        case "boolean":
                            return r(e);
                        case "integer":
                            return i(e);
                        case "function":
                            return function (e) {
                                var t = e && e in window ? window[e] : void 0;
                                return "function" == typeof t ? t : void 0
                            }(e);
                        case "array":
                            return function (e) {
                                if (e) return e.replace(/\s/g, "").replace(/\\,/g, a).split(",").filter((function (e) {
                                    return !!e
                                })).map((function (e) {
                                    return e.replace(a, ",")
                                }))
                            }(e);
                        case "record":
                            return function (e) {
                                if (e) return e.replace(/\\,/g, a).split(",").filter((function (e) {
                                    return !!e
                                })).map((function (e) {
                                    return e.replace(a, ",")
                                })).reduce((function (e, t) {
                                    var o, r = t.match(/^([^=]+)=(.*)$/);
                                    if (r) {
                                        var i = r[1],
                                            a = r[2];
                                        return n(n({}, e), ((o = {})[i.trim()] = a, o))
                                    }
                                    return e
                                }), {})
                            }(e);
                        case "integerOrBoolean":
                            return null !== (u = i(e)) && void 0 !== u ? u : r(e);
                        case "stringOrBoolean":
                            return null !== (c = o(e)) && void 0 !== c ? c : r(e);
                        default:
                            throw new Error("Invalid attribute transformation " + t)
                    }
                }, t.loadOptionsFromAttributes = function (e, o) {
                    return Object.keys(o).reduce((function (r, i) {
                        var a;
                        return n(n({}, r), ((a = {})[i] = t.transformAttributeValue(e.getAttribute("data-tf-" + t.camelCaseToKebabCase(i)), o[i]), a))
                    }), {})
                }
            },
            6563: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isFullscreen = t.isMobile = t.isBigScreen = void 0, t.isBigScreen = function () {
                    return window.screen.width >= 1024 && window.screen.height >= 768
                }, t.isMobile = function () {
                    return /mobile|tablet|android/i.test(navigator.userAgent.toLowerCase())
                }, t.isFullscreen = function () {
                    return t.isMobile() && !t.isBigScreen()
                }
            },
            4527: function (e, t, n) {
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeUndefinedKeys = void 0;
                var r = n(2346);
                t.removeUndefinedKeys = function (e) {
                    return Object.entries(e).filter((function (e) {
                        var t = e[1];
                        return r.isDefined(t)
                    })).reduce((function (e, t) {
                        var n, r = t[0],
                            i = t[1];
                        return o(o({}, e), ((n = {})[r] = i, n))
                    }), {})
                }
            },
            4748: function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setAutoClose = void 0;
                var o = n(8554);
                t.setAutoClose = function (e, t, n) {
                    if (t && n) {
                        var r = "number" == typeof t ? t : 0;
                        window.addEventListener("message", o.getFormSubmitHandler(e, (function () {
                            return setTimeout(n, r)
                        })))
                    }
                }
            },
            9533: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setElementSize = void 0, t.setElementSize = function (e, t) {
                    var n = t.width,
                        o = t.height;
                    return n && (e.style.width = n + "px"), o && (e.style.height = o + "px"), e
                }
            },
            4392: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setupGaInstance = t.sendGaIdMessage = void 0, t.sendGaIdMessage = function (e, t, n) {
                    var o = {
                        embedId: e,
                        gaClientId: t
                    };
                    setTimeout((function () {
                        n && n.contentWindow && n.contentWindow.postMessage({
                            type: "ga-client-id",
                            data: o
                        }, "*")
                    }), 0)
                };
                var n = function (e) {
                    console.error(e)
                };
                t.setupGaInstance = function (e, o, r) {
                    try {
                        var i = window[window.GoogleAnalyticsObject],
                            a = "string" == typeof r ? r : void 0,
                            u = function (e, t) {
                                return t ? e.find((function (e) {
                                    return e.get("trackingId") === t
                                })) : e[0]
                            }(i.getAll(), a);
                        u ? t.sendGaIdMessage(o, u.get("clientId"), e) : n("Whoops! You enabled the shareGaInstance feature in your typeform embed but the tracker with ID " + a + " was not found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID. ")
                    } catch (e) {
                        n("Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. "), n(e)
                    }
                }
            },
            1451: function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.unmountElement = void 0, t.unmountElement = function (e) {
                    var t;
                    null === (t = e.parentNode) || void 0 === t || t.removeChild(e)
                }
            }
        },
        t = {};
    return function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.exports
    }(6664)
}();