// https://gist.github.com/janispritzkau/c9fe29242af53fd1b10a847da78b3406

// minified ES2015 (677 bytes)
((e, a, t) => { for (var i, o, n = a.hostname.split("."), c = e.cookie.match(/(^|; ?)_ga=GA1\.\d\.(\d+\.\d+)(;|$)/), r = c ? c[2] : ~~(2e9 * Math.random()) + "." + ~~(Date.now() / 1e3), l = n.length; l-- && (o = `_ga=GA1.${n.length - l}.${r}`, e.cookie = `${o};max-age=63115200;domain=${n.slice(l).join(".")}`, !e.cookie.split(/; ?/).includes(o));); track = ((o, n, c, l, d) => { i = { v: 1, tid: "UA-XXXX-Y", aip: 1, cid: r, t: o, dr: e.referrer, dt: e.title, dl: a.href, ul: t.language.toLowerCase(), sr: `${screen.width}x${screen.height}`, vp: `${innerWidth}x${innerHeight}` }, n && (i.ec = n), c && (i.ea = c), l && (i.el = l), d && (i.ev = d), t.sendBeacon("https://google-analytics.com/collect", new URLSearchParams(i)) }), track("pageview") })(document, location, navigator)

// minified ES5 (819 bytes)
!function (e, n, t) { for (var o, a, i, c, r, d = "https://google-analytics.com/collect", s = n.hostname.split("."), l = e.cookie.match(/(^|; ?)_ga=GA1\.\d\.(\d+\.\d+)(;|$)/), h = l ? l[2] : ~~(2e9 * Math.random()) + "." + ~~(Date.now() / 1e3), g = s.length; g-- && (r = "_ga=GA1." + (s.length - g) + "." + h, e.cookie = r + ";max-age=63115200;domain=" + s.slice(g).join("."), -1 == e.cookie.split(/; ?/).indexOf(r));); track = ((r, s, l, g, p) => { if (o = { v: 1, tid: "UA-XXXX-Y", aip: 1, cid: h, t: r, dr: e.referrer, dt: e.title, dl: n.href, ul: t.language.toLowerCase(), sr: screen.width + "x" + screen.height, vp: innerWidth + "x" + innerHeight }, s && (o.ec = s), l && (o.ea = l), g && (o.el = g), p && (o.ev = p), t.sendBeacon) t.sendBeacon(d, new URLSearchParams(o)); else { for (c in a = [], i = new XMLHttpRequest, o) a.push(k + "=" + encodeURIComponent(o[c])); i.open("POST", d), i.send(a.join("&")) } }), track("pageview") }(document, location, navigator);


((e, a, t) => { for (var i, o, n = a.hostname.split("."), c = e.cookie.match(/(^|; ?)_ga=GA1\.\d\.(\d+\.\d+)(;|$)/), r = c ? c[2] : ~~(2e9 * Math.random()) + "." + ~~(Date.now() / 1e3), l = n.length; l-- && (o = `_ga=GA1.${n.length - l}.${r}`, e.cookie = `${o};max-age=63115200;domain=${n.slice(l).join(".")}`, !e.cookie.split(/; ?/).includes(o));); track = ((o, n, c, l, d) => { i = { v: 1, tid: "UA-42531762-1", aip: 1, cid: r, t: o, dr: e.referrer, dt: e.title, dl: a.href, ul: t.language.toLowerCase(), sr: `${screen.width}x${screen.height}`, vp: `${innerWidth}x${innerHeight}` }, n && (i.ec = n), c && (i.ea = c), l && (i.el = l), d && (i.ev = d), t.sendBeacon("https://google-analytics.com/collect", new URLSearchParams(i)) }), track("pageview") })(document, location, navigator)