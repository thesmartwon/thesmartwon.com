(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function v(n2, l2, u2) {
    var i2, t2 = arguments, r2 = {};
    for (i2 in l2)
      i2 !== "key" && i2 !== "ref" && (r2[i2] = l2[i2]);
    if (arguments.length > 3)
      for (u2 = [u2], i2 = 3; i2 < arguments.length; i2++)
        u2.push(t2[i2]);
    if (u2 != null && (r2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
      for (i2 in n2.defaultProps)
        r2[i2] === void 0 && (r2[i2] = n2.defaultProps[i2]);
    return h(n2, r2, l2 && l2.key, l2 && l2.ref, null);
  }
  function h(l2, u2, i2, t2, r2) {
    var o2 = {type: l2, props: u2, key: i2, ref: t2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r2};
    return r2 == null && (o2.__v = o2), n.vnode && n.vnode(o2), o2;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function _(n2, l2) {
    if (l2 == null)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? _(n2) : null;
  }
  function k(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return k(n2);
    }
  }
  function w(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
  }
  function m() {
    for (var n2; m.__r = u.length; )
      n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l2, u2, i2, t2, r2, o2, f2;
        n3.__d && (o2 = (r2 = (l2 = n3).__v).__e, (f2 = l2.__P) && (u2 = [], (i2 = s({}, r2)).__v = i2, t2 = T(f2, r2, i2, l2.__n, f2.ownerSVGElement !== void 0, null, u2, o2 == null ? _(r2) : o2), $(u2, r2), t2 != o2 && k(r2)));
      });
  }
  function g(n2, l2, u2, i2, t2, r2, o2, c2, s2, v2) {
    var y, d2, k2, w2, m2, g2, b, A2 = i2 && i2.__k || e, P2 = A2.length;
    for (s2 == f && (s2 = o2 != null ? o2[0] : P2 ? _(i2, 0) : null), u2.__k = [], y = 0; y < l2.length; y++)
      if ((w2 = u2.__k[y] = (w2 = l2[y]) == null || typeof w2 == "boolean" ? null : typeof w2 == "string" || typeof w2 == "number" ? h(null, w2, null, null, w2) : Array.isArray(w2) ? h(p, {children: w2}, null, null, null) : w2.__e != null || w2.__c != null ? h(w2.type, w2.props, w2.key, null, w2.__v) : w2) != null) {
        if (w2.__ = u2, w2.__b = u2.__b + 1, (k2 = A2[y]) === null || k2 && w2.key == k2.key && w2.type === k2.type)
          A2[y] = void 0;
        else
          for (d2 = 0; d2 < P2; d2++) {
            if ((k2 = A2[d2]) && w2.key == k2.key && w2.type === k2.type) {
              A2[d2] = void 0;
              break;
            }
            k2 = null;
          }
        m2 = T(n2, w2, k2 = k2 || f, t2, r2, o2, c2, s2, v2), (d2 = w2.ref) && k2.ref != d2 && (b || (b = []), k2.ref && b.push(k2.ref, null, w2), b.push(d2, w2.__c || m2, w2)), m2 != null ? (g2 == null && (g2 = m2), s2 = x(n2, w2, k2, A2, o2, m2, s2), u2.type == "option" ? n2.value = "" : typeof u2.type == "function" && (u2.__d = s2)) : s2 && k2.__e == s2 && s2.parentNode != n2 && (s2 = _(k2));
      }
    if (u2.__e = g2, o2 != null && typeof u2.type != "function")
      for (y = o2.length; y--; )
        o2[y] != null && a(o2[y]);
    for (y = P2; y--; )
      A2[y] != null && I(A2[y], A2[y]);
    if (b)
      for (y = 0; y < b.length; y++)
        H(b[y], b[++y], b[++y]);
  }
  function x(n2, l2, u2, i2, t2, r2, o2) {
    var f2, e2, c2;
    if (l2.__d !== void 0)
      f2 = l2.__d, l2.__d = void 0;
    else if (t2 == u2 || r2 != o2 || r2.parentNode == null)
      n:
        if (o2 == null || o2.parentNode !== n2)
          n2.appendChild(r2), f2 = null;
        else {
          for (e2 = o2, c2 = 0; (e2 = e2.nextSibling) && c2 < i2.length; c2 += 2)
            if (e2 == r2)
              break n;
          n2.insertBefore(r2, o2), f2 = o2;
        }
    return f2 !== void 0 ? f2 : r2.nextSibling;
  }
  function A(n2, l2, u2, i2, t2) {
    var r2;
    for (r2 in u2)
      r2 === "children" || r2 === "key" || r2 in l2 || C(n2, r2, null, u2[r2], i2);
    for (r2 in l2)
      t2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || C(n2, r2, l2[r2], u2[r2], i2);
  }
  function P(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = typeof u2 == "number" && c.test(l2) === false ? u2 + "px" : u2 == null ? "" : u2;
  }
  function C(n2, l2, u2, i2, t2) {
    var r2, o2, f2, e2, c2;
    if (t2 ? l2 === "className" && (l2 = "class") : l2 === "class" && (l2 = "className"), l2 === "style")
      if (r2 = n2.style, typeof u2 == "string")
        r2.cssText = u2;
      else {
        if (typeof i2 == "string" && (r2.cssText = "", i2 = null), i2)
          for (e2 in i2)
            u2 && e2 in u2 || P(r2, e2, "");
        if (u2)
          for (c2 in u2)
            i2 && u2[c2] === i2[c2] || P(r2, c2, u2[c2]);
      }
    else
      l2[0] === "o" && l2[1] === "n" ? (o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), f2 = l2.toLowerCase(), l2 = (f2 in n2 ? f2 : l2).slice(2), u2 ? (i2 || n2.addEventListener(l2, N, o2), (n2.l || (n2.l = {}))[l2] = u2) : n2.removeEventListener(l2, N, o2)) : l2 !== "list" && l2 !== "tagName" && l2 !== "form" && l2 !== "type" && l2 !== "size" && !t2 && l2 in n2 ? n2[l2] = u2 == null ? "" : u2 : typeof u2 != "function" && l2 !== "dangerouslySetInnerHTML" && (l2 !== (l2 = l2.replace(/^xlink:?/, "")) ? u2 == null || u2 === false ? n2.removeAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase()) : n2.setAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase(), u2) : u2 == null || u2 === false && !/^ar/.test(l2) ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
  }
  function N(l2) {
    this.l[l2.type](n.event ? n.event(l2) : l2);
  }
  function z(n2, l2, u2) {
    var i2, t2;
    for (i2 = 0; i2 < n2.__k.length; i2++)
      (t2 = n2.__k[i2]) && (t2.__ = n2, t2.__e && (typeof t2.type == "function" && t2.__k.length > 1 && z(t2, l2, u2), l2 = x(u2, t2, t2, n2.__k, null, t2.__e, l2), typeof n2.type == "function" && (n2.__d = l2)));
  }
  function T(l2, u2, i2, t2, r2, o2, f2, e2, c2) {
    var a2, v2, h2, y, _2, k2, w2, m2, b, x2, A2, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    (a2 = n.__b) && a2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (m2 = u2.props, b = (a2 = P2.contextType) && t2[a2.__c], x2 = a2 ? b ? b.props.value : a2.__ : t2, i2.__c ? w2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(m2, x2) : (u2.__c = v2 = new d(m2, x2), v2.constructor = P2, v2.render = L), b && b.sub(v2), v2.props = m2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t2, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = s({}, v2.__s)), s(v2.__s, P2.getDerivedStateFromProps(m2, v2.__s))), y = v2.props, _2 = v2.state, h2)
            P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m2 !== y && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(m2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(m2, v2.__s, x2) === false || u2.__v === i2.__v) {
              v2.props = m2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, v2.__h.length && f2.push(v2), z(u2, e2, l2);
              break n;
            }
            v2.componentWillUpdate != null && v2.componentWillUpdate(m2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
              v2.componentDidUpdate(y, _2, k2);
            });
          }
          v2.context = x2, v2.props = m2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = s(s({}, t2), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(y, _2)), A2 = a2 != null && a2.type == p && a2.key == null ? a2.props.children : a2, g(l2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, r2, o2, f2, e2, c2), v2.base = u2.__e, v2.__h.length && f2.push(v2), w2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else
          o2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = j(i2.__e, u2, i2, t2, r2, o2, f2, c2);
      (a2 = n.diffed) && a2(u2);
    } catch (l3) {
      u2.__v = null, n.__e(l3, u2, i2);
    }
    return u2.__e;
  }
  function $(l2, u2) {
    n.__c && n.__c(u2, l2), l2.some(function(u3) {
      try {
        l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
          n2.call(u3);
        });
      } catch (l3) {
        n.__e(l3, u3.__v);
      }
    });
  }
  function j(n2, l2, u2, i2, t2, r2, o2, c2) {
    var s2, a2, v2, h2, y, p2 = u2.props, d2 = l2.props;
    if (t2 = l2.type === "svg" || t2, r2 != null) {
      for (s2 = 0; s2 < r2.length; s2++)
        if ((a2 = r2[s2]) != null && ((l2.type === null ? a2.nodeType === 3 : a2.localName === l2.type) || n2 == a2)) {
          n2 = a2, r2[s2] = null;
          break;
        }
    }
    if (n2 == null) {
      if (l2.type === null)
        return document.createTextNode(d2);
      n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", l2.type) : document.createElement(l2.type, d2.is && {is: d2.is}), r2 = null, c2 = false;
    }
    if (l2.type === null)
      p2 !== d2 && n2.data != d2 && (n2.data = d2);
    else {
      if (r2 != null && (r2 = e.slice.call(n2.childNodes)), v2 = (p2 = u2.props || f).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c2) {
        if (r2 != null)
          for (p2 = {}, y = 0; y < n2.attributes.length; y++)
            p2[n2.attributes[y].name] = n2.attributes[y].value;
        (h2 || v2) && (h2 && v2 && h2.__html == v2.__html || (n2.innerHTML = h2 && h2.__html || ""));
      }
      A(n2, d2, p2, t2, c2), h2 ? l2.__k = [] : (s2 = l2.props.children, g(n2, Array.isArray(s2) ? s2 : [s2], l2, u2, i2, l2.type !== "foreignObject" && t2, r2, o2, f, c2)), c2 || ("value" in d2 && (s2 = d2.value) !== void 0 && s2 !== n2.value && C(n2, "value", s2, p2.value, false), "checked" in d2 && (s2 = d2.checked) !== void 0 && s2 !== n2.checked && C(n2, "checked", s2, p2.checked, false));
    }
    return n2;
  }
  function H(l2, u2, i2) {
    try {
      typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
      n.__e(l3, i2);
    }
  }
  function I(l2, u2, i2) {
    var t2, r2, o2;
    if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || H(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (r2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (l3) {
          n.__e(l3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = l2.__k)
      for (o2 = 0; o2 < t2.length; o2++)
        t2[o2] && I(t2[o2], u2, i2);
    r2 != null && a(r2);
  }
  function L(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function M(l2, u2, i2) {
    var t2, o2, c2;
    n.__ && n.__(l2, u2), o2 = (t2 = i2 === r) ? null : i2 && i2.__k || u2.__k, l2 = v(p, null, [l2]), c2 = [], T(u2, (t2 ? u2 : i2 || u2).__k = l2, o2 || f, f, u2.ownerSVGElement !== void 0, i2 && !t2 ? [i2] : o2 ? null : u2.childNodes.length ? e.slice.call(u2.childNodes) : null, c2, i2 || f, t2), $(c2, l2);
  }
  n = {__e: function(n2, l2) {
    for (var u2, i2; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if (u2.constructor && u2.constructor.getDerivedStateFromError != null && (i2 = true, u2.setState(u2.constructor.getDerivedStateFromError(n2))), u2.componentDidCatch != null && (i2 = true, u2.componentDidCatch(n2)), i2)
            return w(u2.__E = u2);
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  }}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, d.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof n2 == "function" && (n2 = n2(u2, this.props)), n2 && s(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), w(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
  }, d.prototype.render = p, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = f, o = 0;

  // src/components/logo.jsx
  var Logo = class extends d {
    state = {i: 0};
    increment = () => this.setState({i: this.state.i + 1});
    componentDidMount() {
      this.componentDidUpdate();
    }
    componentDidUpdate() {
      (requestAnimationFrame || setTimeout)(this.increment);
    }
    renderEllipse(fg, deg, offset) {
      let gapLength = Math.sin(offset / 500 * Math.PI) * 30 + 60;
      let lineLength = 894 / 2 - gapLength;
      return /* @__PURE__ */ v("ellipse", {
        cx: "0",
        cy: "0",
        "stroke-dasharray": `${lineLength} ${gapLength}`,
        "stroke-dashoffset": offset * 10 + Math.sin(offset / 100 * Math.PI) * 200,
        "stroke-width": "16px",
        rx: "75px",
        ry: "196px",
        fill: "none",
        stroke: fg,
        transform: `rotate(${deg})`
      });
    }
    render({background, fill, border, fg, text}, {i: i2}) {
      return /* @__PURE__ */ v("svg", {
        id: "preact-logo",
        width: "100%",
        viewBox: "-256 -286 1820 572",
        style: {background}
      }, /* @__PURE__ */ v("path", {
        style: `transition:all 1s ease; transform:rotate(${Math.floor(i2 / 60 / 10) * 60}deg);`,
        fill,
        stroke: border,
        "stroke-width": border && "16px",
        d: "M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z"
      }), this.renderEllipse(fg, 52, i2), this.renderEllipse(fg, -52, -0.7 * i2), /* @__PURE__ */ v("circle", {
        cx: "0",
        cy: "0",
        r: "34",
        fill: fg
      }), /* @__PURE__ */ v("path", {
        fill: text,
        d: "M289.85 25.25L289.85 125L272 125L272-122.63L335.88-122.63Q379.45-122.63 401.59-103.55Q423.73-84.48 423.73-49.13Q423.73-32.85 417.69-19.20Q411.65-5.55 400.27 4.34Q388.90 14.22 372.63 19.74Q356.35 25.25 335.88 25.25L289.85 25.25M289.85 10.90L335.88 10.90Q352.33 10.90 365.27 6.35Q378.23 1.80 387.24-6.25Q396.25-14.30 401.06-25.24Q405.88-36.18 405.88-49.13Q405.88-77.65 388.29-93.05Q370.70-108.45 335.88-108.45L289.85-108.45L289.85 10.90ZM497.58 13.00L497.58 125L479.73 125L479.73-122.63L542.90-122.63Q585.78-122.63 606.95-106.09Q628.13-89.55 628.13-57.53Q628.13-43.35 623.23-31.63Q618.33-19.90 609.14-11.06Q599.95-2.23 587 3.46Q574.05 9.15 557.78 10.90Q561.98 13.52 565.30 17.90L650.53 125L634.95 125Q632.15 125 630.14 123.95Q628.13 122.90 626.20 120.45L546.93 20.00Q543.95 16.15 540.54 14.57Q537.13 13.00 529.95 13.00L497.58 13.00M497.58-0.30L540.63-0.30Q557.08-0.30 570.11-4.24Q583.15-8.18 592.16-15.53Q601.18-22.88 605.90-33.20Q610.63-43.53 610.63-56.48Q610.63-82.90 593.30-95.68Q575.98-108.45 542.90-108.45L497.58-108.45L497.58-0.30ZM843.73-122.63L843.73-107.75L713.35-107.75L713.35-7.65L821.85-7.65L821.85 6.87L713.35 6.87L713.35 110.13L843.73 110.13L843.73 125L695.33 125L695.33-122.63L843.73-122.63ZM1088.55 125L1074.73 125Q1072.28 125 1070.70 123.69Q1069.13 122.38 1068.25 120.28L1039.03 48.35L917.40 48.35L888.35 120.28Q887.65 122.20 885.90 123.60Q884.15 125 881.70 125L868.05 125L969.38-122.63L987.23-122.63L1088.55 125M922.83 35.05L1033.78 35.05L983.20-90.08Q981.98-93.05 980.75-96.81Q979.53-100.58 978.30-104.78Q977.08-100.58 975.85-96.81Q974.63-93.05 973.40-89.90L922.83 35.05ZM1302.40 83.35Q1304.15 83.35 1305.38 84.57L1312.38 92.10Q1304.67 100.33 1295.58 106.89Q1286.47 113.45 1275.71 118.09Q1264.95 122.72 1252.09 125.26Q1239.22 127.80 1223.83 127.80Q1198.10 127.80 1176.66 118.79Q1155.22 109.78 1139.91 93.24Q1124.60 76.70 1116.03 53.25Q1107.45 29.80 1107.45 1.10Q1107.45-27.08 1116.29-50.35Q1125.13-73.63 1141.14-90.34Q1157.15-107.05 1179.46-116.24Q1201.78-125.43 1228.72-125.43Q1242.20-125.43 1253.40-123.41Q1264.60-121.40 1274.31-117.64Q1284.03-113.88 1292.60-108.28Q1301.17-102.68 1309.40-95.33L1303.97-87.45Q1302.58-85.35 1299.60-85.35Q1298.03-85.35 1295.58-87.19Q1293.13-89.03 1289.36-91.74Q1285.60-94.45 1280.26-97.69Q1274.92-100.93 1267.58-103.64Q1260.22-106.35 1250.60-108.19Q1240.97-110.03 1228.72-110.03Q1206.15-110.03 1187.25-102.24Q1168.35-94.45 1154.70-80.01Q1141.05-65.58 1133.44-45.01Q1125.83-24.45 1125.83 1.10Q1125.83 27.35 1133.35 48.00Q1140.88 68.65 1154.17 82.91Q1167.47 97.17 1185.59 104.79Q1203.70 112.40 1224.88 112.40Q1238.17 112.40 1248.59 110.65Q1259 108.90 1267.75 105.40Q1276.50 101.90 1284.03 96.82Q1291.55 91.75 1298.90 84.92Q1299.78 84.22 1300.56 83.79Q1301.35 83.35 1302.40 83.35ZM1530.42-122.63L1530.42-107.40L1443.45-107.40L1443.45 125L1425.60 125L1425.60-107.40L1338.10-107.40L1338.10-122.63L1530.42-122.63Z"
      }));
    }
  };

  // posts/coding/this-site-2/index.js
  var root = document.getElementById("preact-logo");
  M(v(Logo), root, root);
})();
