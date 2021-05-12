(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r = {};
  var f = [];
  var e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function c(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function s(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function a(n2, l2, u2) {
    var i2, t2, o2, r2 = arguments, f2 = {};
    for (o2 in l2)
      o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t2 = l2[o2] : f2[o2] = l2[o2];
    if (arguments.length > 3)
      for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
        u2.push(r2[o2]);
    if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
      for (o2 in n2.defaultProps)
        f2[o2] === void 0 && (f2[o2] = n2.defaultProps[o2]);
    return v(n2, f2, i2, t2, null);
  }
  function v(l2, u2, i2, t2, o2) {
    var r2 = {type: l2, props: u2, key: i2, ref: t2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++n.__v : o2};
    return n.vnode != null && n.vnode(r2), r2;
  }
  function y(n2) {
    return n2.children;
  }
  function p(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function d(n2, l2) {
    if (l2 == null)
      return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? d(n2) : null;
  }
  function _(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return _(n2);
    }
  }
  function k(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !b.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(b);
  }
  function b() {
    for (var n2; b.__r = u.length; )
      n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = c({}, t2)).__v = t2.__v + 1, I(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? d(t2) : o2, t2.__h), T(u2, t2), t2.__e != o2 && _(t2)));
      });
  }
  function m(n2, l2, u2, i2, t2, o2, e2, c2, s2, a2) {
    var h, p2, _2, k2, b2, m2, w, A2 = i2 && i2.__k || f, P2 = A2.length;
    for (u2.__k = [], h = 0; h < l2.length; h++)
      if ((k2 = u2.__k[h] = (k2 = l2[h]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" || typeof k2 == "bigint" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(y, {children: k2}, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, (_2 = A2[h]) === null || _2 && k2.key == _2.key && k2.type === _2.type)
          A2[h] = void 0;
        else
          for (p2 = 0; p2 < P2; p2++) {
            if ((_2 = A2[p2]) && k2.key == _2.key && k2.type === _2.type) {
              A2[p2] = void 0;
              break;
            }
            _2 = null;
          }
        I(n2, k2, _2 = _2 || r, t2, o2, e2, c2, s2, a2), b2 = k2.__e, (p2 = k2.ref) && _2.ref != p2 && (w || (w = []), _2.ref && w.push(_2.ref, null, k2), w.push(p2, k2.__c || b2, k2)), b2 != null ? (m2 == null && (m2 = b2), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s2 = g(k2, s2, n2) : s2 = x(n2, k2, _2, A2, b2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d(_2));
      }
    for (u2.__e = m2, h = P2; h--; )
      A2[h] != null && (typeof u2.type == "function" && A2[h].__e != null && A2[h].__e == u2.__d && (u2.__d = d(i2, h + 1)), L(A2[h], A2[h]));
    if (w)
      for (h = 0; h < w.length; h++)
        z(w[h], w[++h], w[++h]);
  }
  function g(n2, l2, u2) {
    var i2, t2;
    for (i2 = 0; i2 < n2.__k.length; i2++)
      (t2 = n2.__k[i2]) && (t2.__ = n2, l2 = typeof t2.type == "function" ? g(t2, l2, u2) : x(u2, t2, t2, n2.__k, t2.__e, l2));
    return l2;
  }
  function x(n2, l2, u2, i2, t2, o2) {
    var r2, f2, e2;
    if (l2.__d !== void 0)
      r2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || t2 != o2 || t2.parentNode == null)
      n:
        if (o2 == null || o2.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r2 = o2;
        }
    return r2 !== void 0 ? r2 : t2.nextSibling;
  }
  function A(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      o2 === "children" || o2 === "key" || o2 in l2 || C(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || C(n2, o2, l2[o2], u2[o2], i2);
  }
  function P(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || e.test(l2) ? u2 : u2 + "px";
  }
  function C(n2, l2, u2, i2, t2) {
    var o2;
    n:
      if (l2 === "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || P(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || P(n2.style, l2, u2[l2]);
        }
      else if (l2[0] === "o" && l2[1] === "n")
        o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? H : $, o2) : n2.removeEventListener(l2, o2 ? H : $, o2);
      else if (l2 !== "dangerouslySetInnerHTML") {
        if (t2)
          l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
          try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
          } catch (n3) {
          }
        typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function $(l2) {
    this.l[l2.type + false](n.event ? n.event(l2) : l2);
  }
  function H(l2) {
    this.l[l2.type + true](n.event ? n.event(l2) : l2);
  }
  function I(l2, u2, i2, t2, o2, r2, f2, e2, s2) {
    var a2, v2, h, d2, _2, k2, b2, g2, w, x2, A2, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    i2.__h != null && (s2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = n.__b) && a2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (g2 = u2.props, w = (a2 = P2.contextType) && t2[a2.__c], x2 = a2 ? w ? w.props.value : a2.__ : t2, i2.__c ? b2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new p(g2, x2), v2.constructor = P2, v2.render = M), w && w.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t2, h = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = c({}, v2.__s)), c(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), d2 = v2.props, _2 = v2.state, h)
            P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && g2 !== d2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x2) === false || u2.__v === i2.__v) {
              v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n2) {
                n2 && (n2.__ = u2);
              }), v2.__h.length && f2.push(v2);
              break n;
            }
            v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
              v2.componentDidUpdate(d2, _2, k2);
            });
          }
          v2.context = x2, v2.props = g2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = c(c({}, t2), v2.getChildContext())), h || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === y && a2.key == null ? a2.props.children : a2, m(l2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, o2, r2, f2, e2, s2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), b2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else
          r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = j(i2.__e, u2, i2, t2, o2, r2, f2, s2);
      (a2 = n.diffed) && a2(u2);
    } catch (l3) {
      u2.__v = null, (s2 || r2 != null) && (u2.__e = e2, u2.__h = !!s2, r2[r2.indexOf(e2)] = null), n.__e(l3, u2, i2);
    }
  }
  function T(l2, u2) {
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
  function j(n2, l2, u2, i2, t2, o2, e2, c2) {
    var a2, v2, h, y2, p2 = u2.props, d2 = l2.props, _2 = l2.type, k2 = 0;
    if (_2 === "svg" && (t2 = true), o2 != null) {
      for (; k2 < o2.length; k2++)
        if ((a2 = o2[k2]) && (a2 === n2 || (_2 ? a2.localName == _2 : a2.nodeType == 3))) {
          n2 = a2, o2[k2] = null;
          break;
        }
    }
    if (n2 == null) {
      if (_2 === null)
        return document.createTextNode(d2);
      n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), o2 = null, c2 = false;
    }
    if (_2 === null)
      p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
      if (o2 = o2 && f.slice.call(n2.childNodes), v2 = (p2 = u2.props || r).dangerouslySetInnerHTML, h = d2.dangerouslySetInnerHTML, !c2) {
        if (o2 != null)
          for (p2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
            p2[n2.attributes[y2].name] = n2.attributes[y2].value;
        (h || v2) && (h && (v2 && h.__html == v2.__html || h.__html === n2.innerHTML) || (n2.innerHTML = h && h.__html || ""));
      }
      if (A(n2, d2, p2, t2, c2), h)
        l2.__k = [];
      else if (k2 = l2.props.children, m(n2, Array.isArray(k2) ? k2 : [k2], l2, u2, i2, t2 && _2 !== "foreignObject", o2, e2, n2.firstChild, c2), o2 != null)
        for (k2 = o2.length; k2--; )
          o2[k2] != null && s(o2[k2]);
      c2 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && C(n2, "value", k2, p2.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && C(n2, "checked", k2, p2.checked, false));
    }
    return n2;
  }
  function z(l2, u2, i2) {
    try {
      typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
      n.__e(l3, i2);
    }
  }
  function L(l2, u2, i2) {
    var t2, o2, r2;
    if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || z(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (o2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (l3) {
          n.__e(l3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = l2.__k)
      for (r2 = 0; r2 < t2.length; r2++)
        t2[r2] && L(t2[r2], u2, i2);
    o2 != null && s(o2);
  }
  function M(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function N(l2, u2, i2) {
    var t2, o2, e2;
    n.__ && n.__(l2, u2), o2 = (t2 = typeof i2 == "function") ? null : i2 && i2.__k || u2.__k, e2 = [], I(u2, l2 = (!t2 && i2 || u2).__k = a(y, null, [l2]), o2 || r, r, u2.ownerSVGElement !== void 0, !t2 && i2 ? [i2] : o2 ? null : u2.firstChild ? f.slice.call(u2.childNodes) : null, e2, !t2 && i2 ? i2 : o2 ? o2.__e : u2.firstChild, t2), T(e2, l2);
  }
  n = {__e: function(n2, l2) {
    for (var u2, i2, t2; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
            return u2.__E = u2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  }, __v: 0}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, p.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u2), this.props)), n2 && c(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
  }, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, o = 0;

  // src/components/logo.jsx
  var Logo = class extends p {
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
      return /* @__PURE__ */ a("ellipse", {
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
      return /* @__PURE__ */ a("svg", {
        id: "preact-logo",
        width: "100%",
        viewBox: "-256 -286 1820 572",
        style: {background}
      }, /* @__PURE__ */ a("path", {
        style: `transition:all 1s ease; transform:rotate(${Math.floor(i2 / 60 / 10) * 60}deg);`,
        fill,
        stroke: border,
        "stroke-width": border && "16px",
        d: "M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z"
      }), this.renderEllipse(fg, 52, i2), this.renderEllipse(fg, -52, -0.7 * i2), /* @__PURE__ */ a("circle", {
        cx: "0",
        cy: "0",
        r: "34",
        fill: fg
      }), /* @__PURE__ */ a("path", {
        fill: text,
        d: "M289.85 25.25L289.85 125L272 125L272-122.63L335.88-122.63Q379.45-122.63 401.59-103.55Q423.73-84.48 423.73-49.13Q423.73-32.85 417.69-19.20Q411.65-5.55 400.27 4.34Q388.90 14.22 372.63 19.74Q356.35 25.25 335.88 25.25L289.85 25.25M289.85 10.90L335.88 10.90Q352.33 10.90 365.27 6.35Q378.23 1.80 387.24-6.25Q396.25-14.30 401.06-25.24Q405.88-36.18 405.88-49.13Q405.88-77.65 388.29-93.05Q370.70-108.45 335.88-108.45L289.85-108.45L289.85 10.90ZM497.58 13.00L497.58 125L479.73 125L479.73-122.63L542.90-122.63Q585.78-122.63 606.95-106.09Q628.13-89.55 628.13-57.53Q628.13-43.35 623.23-31.63Q618.33-19.90 609.14-11.06Q599.95-2.23 587 3.46Q574.05 9.15 557.78 10.90Q561.98 13.52 565.30 17.90L650.53 125L634.95 125Q632.15 125 630.14 123.95Q628.13 122.90 626.20 120.45L546.93 20.00Q543.95 16.15 540.54 14.57Q537.13 13.00 529.95 13.00L497.58 13.00M497.58-0.30L540.63-0.30Q557.08-0.30 570.11-4.24Q583.15-8.18 592.16-15.53Q601.18-22.88 605.90-33.20Q610.63-43.53 610.63-56.48Q610.63-82.90 593.30-95.68Q575.98-108.45 542.90-108.45L497.58-108.45L497.58-0.30ZM843.73-122.63L843.73-107.75L713.35-107.75L713.35-7.65L821.85-7.65L821.85 6.87L713.35 6.87L713.35 110.13L843.73 110.13L843.73 125L695.33 125L695.33-122.63L843.73-122.63ZM1088.55 125L1074.73 125Q1072.28 125 1070.70 123.69Q1069.13 122.38 1068.25 120.28L1039.03 48.35L917.40 48.35L888.35 120.28Q887.65 122.20 885.90 123.60Q884.15 125 881.70 125L868.05 125L969.38-122.63L987.23-122.63L1088.55 125M922.83 35.05L1033.78 35.05L983.20-90.08Q981.98-93.05 980.75-96.81Q979.53-100.58 978.30-104.78Q977.08-100.58 975.85-96.81Q974.63-93.05 973.40-89.90L922.83 35.05ZM1302.40 83.35Q1304.15 83.35 1305.38 84.57L1312.38 92.10Q1304.67 100.33 1295.58 106.89Q1286.47 113.45 1275.71 118.09Q1264.95 122.72 1252.09 125.26Q1239.22 127.80 1223.83 127.80Q1198.10 127.80 1176.66 118.79Q1155.22 109.78 1139.91 93.24Q1124.60 76.70 1116.03 53.25Q1107.45 29.80 1107.45 1.10Q1107.45-27.08 1116.29-50.35Q1125.13-73.63 1141.14-90.34Q1157.15-107.05 1179.46-116.24Q1201.78-125.43 1228.72-125.43Q1242.20-125.43 1253.40-123.41Q1264.60-121.40 1274.31-117.64Q1284.03-113.88 1292.60-108.28Q1301.17-102.68 1309.40-95.33L1303.97-87.45Q1302.58-85.35 1299.60-85.35Q1298.03-85.35 1295.58-87.19Q1293.13-89.03 1289.36-91.74Q1285.60-94.45 1280.26-97.69Q1274.92-100.93 1267.58-103.64Q1260.22-106.35 1250.60-108.19Q1240.97-110.03 1228.72-110.03Q1206.15-110.03 1187.25-102.24Q1168.35-94.45 1154.70-80.01Q1141.05-65.58 1133.44-45.01Q1125.83-24.45 1125.83 1.10Q1125.83 27.35 1133.35 48.00Q1140.88 68.65 1154.17 82.91Q1167.47 97.17 1185.59 104.79Q1203.70 112.40 1224.88 112.40Q1238.17 112.40 1248.59 110.65Q1259 108.90 1267.75 105.40Q1276.50 101.90 1284.03 96.82Q1291.55 91.75 1298.90 84.92Q1299.78 84.22 1300.56 83.79Q1301.35 83.35 1302.40 83.35ZM1530.42-122.63L1530.42-107.40L1443.45-107.40L1443.45 125L1425.60 125L1425.60-107.40L1338.10-107.40L1338.10-122.63L1530.42-122.63Z"
      }));
    }
  };

  // posts/coding/this-site-2/index.js
  var root = document.getElementById("preact-logo");
  N(a(Logo), root, root);
})();
