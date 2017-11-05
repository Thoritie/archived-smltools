$(document).ready(function () {([5], {
    12: function(t, e, s) {
        "use strict";
        (function(e) {
            var s = "undefined" != typeof t && t.exports && "undefined" != typeof e ? e : window;
            (s._gsQueue || (s._gsQueue = [])).push(function() {
                function t(t, e, s, i) {
                    return s = parseFloat(s) - parseFloat(t),
                    i = parseFloat(i) - parseFloat(e),
                    Math.sqrt(s * s + i * i)
                }
                function e(t) {
                    return "string" != typeof t && t.nodeType || (t = s.TweenLite.selector(t),
                    t.length && (t = t[0])),
                    t
                }
                function i(t, e, s) {
                    var i, a, r = t.indexOf(" ");
                    return r === -1 ? (i = void 0 !== s ? s + "" : t,
                    a = t) : (i = t.substr(0, r),
                    a = t.substr(r + 1)),
                    i = i.indexOf("%") !== -1 ? parseFloat(i) / 100 * e : parseFloat(i),
                    a = a.indexOf("%") !== -1 ? parseFloat(a) / 100 * e : parseFloat(a),
                    i > a ? [a, i] : [i, a]
                }
                function a(s) {
                    if (!s)
                        return 0;
                    s = e(s);
                    var i, a, r, o, n, f, l, u = s.tagName.toLowerCase();
                    if ("path" === u) {
                        o = s.style.strokeDasharray,
                        s.style.strokeDasharray = "none",
                        i = s.getTotalLength() || 0;
                        try {
                            a = s.getBBox()
                        } catch (t) {}
                        s.style.strokeDasharray = o
                    } else if ("rect" === u)
                        i = 2 * s.getAttribute("width") + 2 * s.getAttribute("height");
                    else if ("circle" === u)
                        i = 2 * Math.PI * parseFloat(s.getAttribute("r"));
                    else if ("line" === u)
                        i = t(s.getAttribute("x1"), s.getAttribute("y1"), s.getAttribute("x2"), s.getAttribute("y2"));
                    else if ("polyline" === u || "polygon" === u)
                        for (r = s.getAttribute("points").match(h) || [],
                        "polygon" === u && r.push(r[0], r[1]),
                        i = 0,
                        n = 2; n < r.length; n += 2)
                            i += t(r[n - 2], r[n - 1], r[n], r[n + 1]) || 0;
                    else
                        "ellipse" === u && (f = parseFloat(s.getAttribute("rx")),
                        l = parseFloat(s.getAttribute("ry")),
                        i = Math.PI * (3 * (f + l) - Math.sqrt((3 * f + l) * (f + 3 * l))));
                    return i || 0
                }
                function r(t, s) {
                    if (!t)
                        return [0, 0];
                    t = e(t),
                    s = s || a(t) + 1;
                    var i = n(t)
                      , r = i.strokeDasharray || ""
                      , o = parseFloat(i.strokeDashoffset)
                      , h = r.indexOf(",");
                    return h < 0 && (h = r.indexOf(" ")),
                    r = h < 0 ? s : parseFloat(r.substr(0, h)) || 1e-5,
                    r > s && (r = s),
                    [Math.max(0, -o), Math.max(0, r - o)]
                }
                var o, n = document.defaultView ? document.defaultView.getComputedStyle : function() {}
                , h = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
                o = s._gsDefine.plugin({
                    propName: "drawSVG",
                    API: 2,
                    version: "0.0.10",
                    global: !0,
                    overwriteProps: ["drawSVG"],
                    init: function(t, e, s) {
                        if (!t.getBBox)
                            return !1;
                        var o, n, h, f = a(t) + 1;
                        return this._style = t.style,
                        e === !0 || "true" === e ? e = "0 100%" : e ? (e + "").indexOf(" ") === -1 && (e = "0 " + e) : e = "0 0",
                        o = r(t, f),
                        n = i(e, f, o[0]),
                        this._length = f + 10,
                        0 === o[0] && 0 === n[0] ? (h = Math.max(1e-5, n[1] - f),
                        this._dash = f + h,
                        this._offset = f - o[1] + h,
                        this._addTween(this, "_offset", this._offset, f - n[1] + h, "drawSVG")) : (this._dash = o[1] - o[0] || 1e-6,
                        this._offset = -o[0],
                        this._addTween(this, "_dash", this._dash, n[1] - n[0] || 1e-5, "drawSVG"),
                        this._addTween(this, "_offset", this._offset, -n[0], "drawSVG")),
                        !0
                    },
                    set: function(t) {
                        this._firstPT && (this._super.setRatio.call(this, t),
                        this._style.strokeDashoffset = this._offset,
                        1 === t || 0 === t ? this._style.strokeDasharray = this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._style.strokeDasharray = this._dash + "px," + this._length + "px")
                    }
                }),
                o.getLength = a,
                o.getPosition = r
            }),
            s._gsDefine && s._gsQueue.pop()()
        }
        ).call(e, s(5))
    },
    54: function(t, e, s) {
        "use strict";
        (function(t) {
            function e() {
                window.matchMedia("(min-width: " + i.config.breakpoints.medium + ")").matches ? o.paused() && o.play() : o.seek(0).pause()
            }
            var i = s(0)
              , a = s(1);
            s(12);
            var r = (s(7),
            s(8),
            document.querySelector(".ForWork-svg"))
              , o = new a.TimelineMax({
                paused: !0
            });
            a.TweenMax.set(r, {
                visibility: "visible"
            }),
            o.from(".ForWork--globe", 1, {
                autoAlpha: 0,
                y: "100%",
                ease: i.config.easing
            }).staggerFrom(".ForWork--mesh path", 1, {
                delay: .25,
                drawSVG: "0",
                ease: i.config.easing
            }, .2, "segment").staggerFrom(".ForWork--dots circle", 1, {
                autoAlpha: 0,
                y: "100%",
                ease: i.config.easing
            }, .2, "segment").staggerTo(".ForWork--dots circle", 1.5, {
                autoAlpha: 0,
                attr: {
                    r: 20
                },
                repeat: -1
            }, .5, "segment+=0.75"),
            t(".ForWork--dots circle").hover(function() {
                var t = new a.TimelineMax;
                this.animation = t,
                o.pause(),
                t.to(this, .5, {
                    attr: {
                        r: 20
                    },
                    fill: "#005FE6",
                    opacity: 1
                }),
                this.animation.play()
            }, function() {
                this.animation.reverse(),
                o.resume()
            });
            var n = "";
            t(".forWork-blockIdentifier").hover(function() {
                var e = new a.TimelineMax
                  , s = this.getAttribute("data-js-block");
                n = t(".ForWork-Block-" + s),
                n.animation = e,
                n.animation.to(n, .5, {
                    x: "0",
                    ease: i.config.easing
                })
            }, function() {
                n.animation.reverse()
            }),
            e(),
            i.optimizedResize.add(function() {
                e()
            })
        }
        ).call(e, s(2))
    }
}, [54]);
});
//# sourceMappingURL=business.js-205c7dde.map
