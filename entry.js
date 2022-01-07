var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/preact/dist/preact.mjs
function a(n3, l3) {
  for (var u3 in l3)
    n3[u3] = l3[u3];
  return n3;
}
function h(n3) {
  var l3 = n3.parentNode;
  l3 && l3.removeChild(n3);
}
function v(l3, u3, i3) {
  var t2, r3, o3, f3 = {};
  for (o3 in u3)
    o3 == "key" ? t2 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
    for (o3 in l3.defaultProps)
      f3[o3] === void 0 && (f3[o3] = l3.defaultProps[o3]);
  return y(l3, f3, t2, r3, null);
}
function y(n3, i3, t2, r3, o3) {
  var f3 = {type: n3, props: i3, key: t2, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++u : o3};
  return o3 == null && l.vnode != null && l.vnode(f3), f3;
}
function d(n3) {
  return n3.children;
}
function _(n3, l3) {
  this.props = n3, this.context = l3;
}
function k(n3, l3) {
  if (l3 == null)
    return n3.__ ? k(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
  for (var u3; l3 < n3.__k.length; l3++)
    if ((u3 = n3.__k[l3]) != null && u3.__e != null)
      return u3.__e;
  return typeof n3.type == "function" ? k(n3) : null;
}
function b(n3) {
  var l3, u3;
  if ((n3 = n3.__) != null && n3.__c != null) {
    for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
      if ((u3 = n3.__k[l3]) != null && u3.__e != null) {
        n3.__e = n3.__c.base = u3.__e;
        break;
      }
    return b(n3);
  }
}
function m(n3) {
  (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}
function g() {
  for (var n3; g.__r = t.length; )
    n3 = t.sort(function(n4, l3) {
      return n4.__v.__b - l3.__v.__b;
    }), t = [], n3.some(function(n4) {
      var l3, u3, i3, t2, r3, o3;
      n4.__d && (r3 = (t2 = (l3 = n4).__v).__e, (o3 = l3.__P) && (u3 = [], (i3 = a({}, t2)).__v = t2.__v + 1, j(o3, t2, i3, l3.__n, o3.ownerSVGElement !== void 0, t2.__h != null ? [r3] : null, u3, r3 == null ? k(t2) : r3, t2.__h), z(u3, t2), t2.__e != r3 && b(t2)));
    });
}
function w(n3, l3, u3, i3, t2, r3, o3, f3, s3, a3) {
  var h3, v3, p2, _3, b2, m3, g3, w2 = i3 && i3.__k || c, A = w2.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, {children: _3}, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
      if (_3.__ = u3, _3.__b = u3.__b + 1, (p2 = w2[h3]) === null || p2 && _3.key == p2.key && _3.type === p2.type)
        w2[h3] = void 0;
      else
        for (v3 = 0; v3 < A; v3++) {
          if ((p2 = w2[v3]) && _3.key == p2.key && _3.type === p2.type) {
            w2[v3] = void 0;
            break;
          }
          p2 = null;
        }
      j(n3, _3, p2 = p2 || e, t2, r3, o3, f3, s3, a3), b2 = _3.__e, (v3 = _3.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _3), g3.push(v3, _3.__c || b2, _3)), b2 != null ? (m3 == null && (m3 = b2), typeof _3.type == "function" && _3.__k === p2.__k ? _3.__d = s3 = x(_3, s3, n3) : s3 = P(n3, _3, p2, w2, b2, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p2.__e == s3 && s3.parentNode != n3 && (s3 = k(p2));
    }
  for (u3.__e = m3, h3 = A; h3--; )
    w2[h3] != null && (typeof u3.type == "function" && w2[h3].__e != null && w2[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w2[h3], w2[h3]));
  if (g3)
    for (h3 = 0; h3 < g3.length; h3++)
      M(g3[h3], g3[++h3], g3[++h3]);
}
function x(n3, l3, u3) {
  for (var i3, t2 = n3.__k, r3 = 0; t2 && r3 < t2.length; r3++)
    (i3 = t2[r3]) && (i3.__ = n3, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t2, i3.__e, l3));
  return l3;
}
function P(n3, l3, u3, i3, t2, r3) {
  var o3, f3, e2;
  if (l3.__d !== void 0)
    o3 = l3.__d, l3.__d = void 0;
  else if (u3 == null || t2 != r3 || t2.parentNode == null)
    n:
      if (r3 == null || r3.parentNode !== n3)
        n3.appendChild(t2), o3 = null;
      else {
        for (f3 = r3, e2 = 0; (f3 = f3.nextSibling) && e2 < i3.length; e2 += 2)
          if (f3 == t2)
            break n;
        n3.insertBefore(t2, r3), o3 = r3;
      }
  return o3 !== void 0 ? o3 : t2.nextSibling;
}
function C(n3, l3, u3, i3, t2) {
  var r3;
  for (r3 in u3)
    r3 === "children" || r3 === "key" || r3 in l3 || H(n3, r3, null, u3[r3], i3);
  for (r3 in l3)
    t2 && typeof l3[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l3[r3] || H(n3, r3, l3[r3], u3[r3], i3);
}
function $(n3, l3, u3) {
  l3[0] === "-" ? n3.setProperty(l3, u3) : n3[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
}
function H(n3, l3, u3, i3, t2) {
  var r3;
  n:
    if (l3 === "style")
      if (typeof u3 == "string")
        n3.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n3.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n3.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n3.style, l3, u3[l3]);
      }
    else if (l3[0] === "o" && l3[1] === "n")
      r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n3 ? l3.toLowerCase().slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + r3] = u3, u3 ? i3 || n3.addEventListener(l3, r3 ? T : I, r3) : n3.removeEventListener(l3, r3 ? T : I, r3);
    else if (l3 !== "dangerouslySetInnerHTML") {
      if (t2)
        l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n3)
        try {
          n3[l3] = u3 == null ? "" : u3;
          break n;
        } catch (n4) {
        }
      typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n3.setAttribute(l3, u3) : n3.removeAttribute(l3));
    }
}
function I(n3) {
  this.l[n3.type + false](l.event ? l.event(n3) : n3);
}
function T(n3) {
  this.l[n3.type + true](l.event ? l.event(n3) : n3);
}
function j(n3, u3, i3, t2, r3, o3, f3, e2, c3) {
  var s3, h3, v3, y2, p2, k2, b2, m3, g3, x3, A, P2 = u3.type;
  if (u3.constructor !== void 0)
    return null;
  i3.__h != null && (c3 = i3.__h, e2 = u3.__e = i3.__e, u3.__h = null, o3 = [e2]), (s3 = l.__b) && s3(u3);
  try {
    n:
      if (typeof P2 == "function") {
        if (m3 = u3.props, g3 = (s3 = P2.contextType) && t2[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t2, i3.__c ? b2 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h3 = new P2(m3, x3) : (u3.__c = h3 = new _(m3, x3), h3.constructor = P2, h3.render = O), g3 && g3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x3, h3.__n = t2, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P2.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P2.getDerivedStateFromProps(m3, h3.__s))), y2 = h3.props, p2 = h3.state, v3)
          P2.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m3 !== y2 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x3), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x3) === false || u3.__v === i3.__v) {
            h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n4) {
              n4 && (n4.__ = u3);
            }), h3.__h.length && f3.push(h3);
            break n;
          }
          h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x3), h3.componentDidUpdate != null && h3.__h.push(function() {
            h3.componentDidUpdate(y2, p2, k2);
          });
        }
        h3.context = x3, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n3, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t2 = a(a({}, t2), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k2 = h3.getSnapshotBeforeUpdate(y2, p2)), A = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n3, Array.isArray(A) ? A : [A], u3, i3, t2, r3, o3, f3, e2, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t2, r3, o3, f3, c3);
    (s3 = l.diffed) && s3(u3);
  } catch (n4) {
    u3.__v = null, (c3 || o3 != null) && (u3.__e = e2, u3.__h = !!c3, o3[o3.indexOf(e2)] = null), l.__e(n4, u3, i3);
  }
}
function z(n3, u3) {
  l.__c && l.__c(u3, n3), n3.some(function(u4) {
    try {
      n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
        n4.call(u4);
      });
    } catch (n4) {
      l.__e(n4, u4.__v);
    }
  });
}
function L(l3, u3, i3, t2, r3, o3, f3, c3) {
  var s3, a3, v3, y2 = i3.props, p2 = u3.props, d3 = u3.type, _3 = 0;
  if (d3 === "svg" && (r3 = true), o3 != null) {
    for (; _3 < o3.length; _3++)
      if ((s3 = o3[_3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : s3.nodeType === 3)) {
        l3 = s3, o3[_3] = null;
        break;
      }
  }
  if (l3 == null) {
    if (d3 === null)
      return document.createTextNode(p2);
    l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p2.is && p2), o3 = null, c3 = false;
  }
  if (d3 === null)
    y2 === p2 || c3 && l3.data === p2 || (l3.data = p2);
  else {
    if (o3 = o3 && n.call(l3.childNodes), a3 = (y2 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
      if (o3 != null)
        for (y2 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
          y2[l3.attributes[_3].name] = l3.attributes[_3].value;
      (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p2, y2, r3, c3), v3)
      u3.__k = [];
    else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t2, r3 && d3 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
      for (_3 = o3.length; _3--; )
        o3[_3] != null && h(o3[_3]);
    c3 || ("value" in p2 && (_3 = p2.value) !== void 0 && (_3 !== y2.value || _3 !== l3.value || d3 === "progress" && !_3) && H(l3, "value", _3, y2.value, false), "checked" in p2 && (_3 = p2.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y2.checked, false));
  }
  return l3;
}
function M(n3, u3, i3) {
  try {
    typeof n3 == "function" ? n3(u3) : n3.current = u3;
  } catch (n4) {
    l.__e(n4, i3);
  }
}
function N(n3, u3, i3) {
  var t2, r3;
  if (l.unmount && l.unmount(n3), (t2 = n3.ref) && (t2.current && t2.current !== n3.__e || M(t2, null, u3)), (t2 = n3.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u3);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n3.__k)
    for (r3 = 0; r3 < t2.length; r3++)
      t2[r3] && N(t2[r3], u3, typeof n3.type != "function");
  i3 || n3.__e == null || h(n3.__e), n3.__e = n3.__d = void 0;
}
function O(n3, l3, u3) {
  return this.constructor(n3, u3);
}
function S(u3, i3, t2) {
  var r3, o3, f3;
  l.__ && l.__(u3, i3), o3 = (r3 = typeof t2 == "function") ? null : t2 && t2.__k || i3.__k, f3 = [], j(i3, u3 = (!r3 && t2 || i3).__k = v(d, null, [u3]), o3 || e, e, i3.ownerSVGElement !== void 0, !r3 && t2 ? [t2] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t2 ? t2 : o3 ? o3.__e : i3.firstChild, r3), z(f3, u3);
}
var n, l, u, i, t, r, o, f, e, c, s;
var init_preact = __esm({
  "node_modules/preact/dist/preact.mjs"() {
    e = {};
    c = [];
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = c.slice, l = {__e: function(n3, l3) {
      for (var u3, i3, t2; l3 = l3.__; )
        if ((u3 = l3.__c) && !u3.__)
          try {
            if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n3)), t2 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n3), t2 = u3.__d), t2)
              return u3.__E = u3;
          } catch (l4) {
            n3 = l4;
          }
      throw n3;
    }}, u = 0, i = function(n3) {
      return n3 != null && n3.constructor === void 0;
    }, _.prototype.setState = function(n3, l3) {
      var u3;
      u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n3 == "function" && (n3 = n3(a({}, u3), this.props)), n3 && a(u3, n3), n3 != null && this.__v && (l3 && this.__h.push(l3), m(this));
    }, _.prototype.forceUpdate = function(n3) {
      this.__v && (this.__e = true, n3 && this.__h.push(n3), m(this));
    }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
  }
});

// node_modules/preact/dist/preact.js
var require_preact = __commonJS({
  "node_modules/preact/dist/preact.js"(exports) {
    var n3;
    var l3;
    var u3;
    var t2;
    var i3;
    var r3;
    var o3;
    var f3;
    var e2 = {};
    var c3 = [];
    var s3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function a3(n4, l4) {
      for (var u4 in l4)
        n4[u4] = l4[u4];
      return n4;
    }
    function v3(n4) {
      var l4 = n4.parentNode;
      l4 && l4.removeChild(n4);
    }
    function h3(l4, u4, t3) {
      var i4, r4, o4, f4 = {};
      for (o4 in u4)
        o4 == "key" ? i4 = u4[o4] : o4 == "ref" ? r4 = u4[o4] : f4[o4] = u4[o4];
      if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n3.call(arguments, 2) : t3), typeof l4 == "function" && l4.defaultProps != null)
        for (o4 in l4.defaultProps)
          f4[o4] === void 0 && (f4[o4] = l4.defaultProps[o4]);
      return p2(l4, f4, i4, r4, null);
    }
    function p2(n4, t3, i4, r4, o4) {
      var f4 = {type: n4, props: t3, key: i4, ref: r4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o4 == null ? ++u3 : o4};
      return o4 == null && l3.vnode != null && l3.vnode(f4), f4;
    }
    function y2(n4) {
      return n4.children;
    }
    function d3(n4, l4) {
      this.props = n4, this.context = l4;
    }
    function _3(n4, l4) {
      if (l4 == null)
        return n4.__ ? _3(n4.__, n4.__.__k.indexOf(n4) + 1) : null;
      for (var u4; l4 < n4.__k.length; l4++)
        if ((u4 = n4.__k[l4]) != null && u4.__e != null)
          return u4.__e;
      return typeof n4.type == "function" ? _3(n4) : null;
    }
    function k2(n4) {
      var l4, u4;
      if ((n4 = n4.__) != null && n4.__c != null) {
        for (n4.__e = n4.__c.base = null, l4 = 0; l4 < n4.__k.length; l4++)
          if ((u4 = n4.__k[l4]) != null && u4.__e != null) {
            n4.__e = n4.__c.base = u4.__e;
            break;
          }
        return k2(n4);
      }
    }
    function x3(n4) {
      (!n4.__d && (n4.__d = true) && i3.push(n4) && !b2.__r++ || o3 !== l3.debounceRendering) && ((o3 = l3.debounceRendering) || r3)(b2);
    }
    function b2() {
      for (var n4; b2.__r = i3.length; )
        n4 = i3.sort(function(n5, l4) {
          return n5.__v.__b - l4.__v.__b;
        }), i3 = [], n4.some(function(n5) {
          var l4, u4, t3, i4, r4, o4;
          n5.__d && (r4 = (i4 = (l4 = n5).__v).__e, (o4 = l4.__P) && (u4 = [], (t3 = a3({}, i4)).__v = i4.__v + 1, I2(o4, i4, t3, l4.__n, o4.ownerSVGElement !== void 0, i4.__h != null ? [r4] : null, u4, r4 == null ? _3(i4) : r4, i4.__h), T2(u4, i4), i4.__e != r4 && k2(i4)));
        });
    }
    function m3(n4, l4, u4, t3, i4, r4, o4, f4, s4, a4) {
      var v4, h4, d4, k3, x4, b3, m4, A2 = t3 && t3.__k || c3, P3 = A2.length;
      for (u4.__k = [], v4 = 0; v4 < l4.length; v4++)
        if ((k3 = u4.__k[v4] = (k3 = l4[v4]) == null || typeof k3 == "boolean" ? null : typeof k3 == "string" || typeof k3 == "number" || typeof k3 == "bigint" ? p2(null, k3, null, null, k3) : Array.isArray(k3) ? p2(y2, {children: k3}, null, null, null) : k3.__b > 0 ? p2(k3.type, k3.props, k3.key, null, k3.__v) : k3) != null) {
          if (k3.__ = u4, k3.__b = u4.__b + 1, (d4 = A2[v4]) === null || d4 && k3.key == d4.key && k3.type === d4.type)
            A2[v4] = void 0;
          else
            for (h4 = 0; h4 < P3; h4++) {
              if ((d4 = A2[h4]) && k3.key == d4.key && k3.type === d4.type) {
                A2[h4] = void 0;
                break;
              }
              d4 = null;
            }
          I2(n4, k3, d4 = d4 || e2, i4, r4, o4, f4, s4, a4), x4 = k3.__e, (h4 = k3.ref) && d4.ref != h4 && (m4 || (m4 = []), d4.ref && m4.push(d4.ref, null, k3), m4.push(h4, k3.__c || x4, k3)), x4 != null ? (b3 == null && (b3 = x4), typeof k3.type == "function" && k3.__k === d4.__k ? k3.__d = s4 = g3(k3, s4, n4) : s4 = w2(n4, k3, d4, A2, x4, s4), typeof u4.type == "function" && (u4.__d = s4)) : s4 && d4.__e == s4 && s4.parentNode != n4 && (s4 = _3(d4));
        }
      for (u4.__e = b3, v4 = P3; v4--; )
        A2[v4] != null && (typeof u4.type == "function" && A2[v4].__e != null && A2[v4].__e == u4.__d && (u4.__d = _3(t3, v4 + 1)), L2(A2[v4], A2[v4]));
      if (m4)
        for (v4 = 0; v4 < m4.length; v4++)
          z2(m4[v4], m4[++v4], m4[++v4]);
    }
    function g3(n4, l4, u4) {
      for (var t3, i4 = n4.__k, r4 = 0; i4 && r4 < i4.length; r4++)
        (t3 = i4[r4]) && (t3.__ = n4, l4 = typeof t3.type == "function" ? g3(t3, l4, u4) : w2(u4, t3, t3, i4, t3.__e, l4));
      return l4;
    }
    function w2(n4, l4, u4, t3, i4, r4) {
      var o4, f4, e3;
      if (l4.__d !== void 0)
        o4 = l4.__d, l4.__d = void 0;
      else if (u4 == null || i4 != r4 || i4.parentNode == null)
        n:
          if (r4 == null || r4.parentNode !== n4)
            n4.appendChild(i4), o4 = null;
          else {
            for (f4 = r4, e3 = 0; (f4 = f4.nextSibling) && e3 < t3.length; e3 += 2)
              if (f4 == i4)
                break n;
            n4.insertBefore(i4, r4), o4 = r4;
          }
      return o4 !== void 0 ? o4 : i4.nextSibling;
    }
    function A(n4, l4, u4, t3, i4) {
      var r4;
      for (r4 in u4)
        r4 === "children" || r4 === "key" || r4 in l4 || C2(n4, r4, null, u4[r4], t3);
      for (r4 in l4)
        i4 && typeof l4[r4] != "function" || r4 === "children" || r4 === "key" || r4 === "value" || r4 === "checked" || u4[r4] === l4[r4] || C2(n4, r4, l4[r4], u4[r4], t3);
    }
    function P2(n4, l4, u4) {
      l4[0] === "-" ? n4.setProperty(l4, u4) : n4[l4] = u4 == null ? "" : typeof u4 != "number" || s3.test(l4) ? u4 : u4 + "px";
    }
    function C2(n4, l4, u4, t3, i4) {
      var r4;
      n:
        if (l4 === "style")
          if (typeof u4 == "string")
            n4.style.cssText = u4;
          else {
            if (typeof t3 == "string" && (n4.style.cssText = t3 = ""), t3)
              for (l4 in t3)
                u4 && l4 in u4 || P2(n4.style, l4, "");
            if (u4)
              for (l4 in u4)
                t3 && u4[l4] === t3[l4] || P2(n4.style, l4, u4[l4]);
          }
        else if (l4[0] === "o" && l4[1] === "n")
          r4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n4 ? l4.toLowerCase().slice(2) : l4.slice(2), n4.l || (n4.l = {}), n4.l[l4 + r4] = u4, u4 ? t3 || n4.addEventListener(l4, r4 ? H2 : $2, r4) : n4.removeEventListener(l4, r4 ? H2 : $2, r4);
        else if (l4 !== "dangerouslySetInnerHTML") {
          if (i4)
            l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
          else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "tabIndex" && l4 !== "download" && l4 in n4)
            try {
              n4[l4] = u4 == null ? "" : u4;
              break n;
            } catch (n5) {
            }
          typeof u4 == "function" || (u4 != null && (u4 !== false || l4[0] === "a" && l4[1] === "r") ? n4.setAttribute(l4, u4) : n4.removeAttribute(l4));
        }
    }
    function $2(n4) {
      this.l[n4.type + false](l3.event ? l3.event(n4) : n4);
    }
    function H2(n4) {
      this.l[n4.type + true](l3.event ? l3.event(n4) : n4);
    }
    function I2(n4, u4, t3, i4, r4, o4, f4, e3, c4) {
      var s4, v4, h4, p3, _4, k3, x4, b3, g4, w3, A2, P3 = u4.type;
      if (u4.constructor !== void 0)
        return null;
      t3.__h != null && (c4 = t3.__h, e3 = u4.__e = t3.__e, u4.__h = null, o4 = [e3]), (s4 = l3.__b) && s4(u4);
      try {
        n:
          if (typeof P3 == "function") {
            if (b3 = u4.props, g4 = (s4 = P3.contextType) && i4[s4.__c], w3 = s4 ? g4 ? g4.props.value : s4.__ : i4, t3.__c ? x4 = (v4 = u4.__c = t3.__c).__ = v4.__E : ("prototype" in P3 && P3.prototype.render ? u4.__c = v4 = new P3(b3, w3) : (u4.__c = v4 = new d3(b3, w3), v4.constructor = P3, v4.render = M2), g4 && g4.sub(v4), v4.props = b3, v4.state || (v4.state = {}), v4.context = w3, v4.__n = i4, h4 = v4.__d = true, v4.__h = []), v4.__s == null && (v4.__s = v4.state), P3.getDerivedStateFromProps != null && (v4.__s == v4.state && (v4.__s = a3({}, v4.__s)), a3(v4.__s, P3.getDerivedStateFromProps(b3, v4.__s))), p3 = v4.props, _4 = v4.state, h4)
              P3.getDerivedStateFromProps == null && v4.componentWillMount != null && v4.componentWillMount(), v4.componentDidMount != null && v4.__h.push(v4.componentDidMount);
            else {
              if (P3.getDerivedStateFromProps == null && b3 !== p3 && v4.componentWillReceiveProps != null && v4.componentWillReceiveProps(b3, w3), !v4.__e && v4.shouldComponentUpdate != null && v4.shouldComponentUpdate(b3, v4.__s, w3) === false || u4.__v === t3.__v) {
                v4.props = b3, v4.state = v4.__s, u4.__v !== t3.__v && (v4.__d = false), v4.__v = u4, u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n5) {
                  n5 && (n5.__ = u4);
                }), v4.__h.length && f4.push(v4);
                break n;
              }
              v4.componentWillUpdate != null && v4.componentWillUpdate(b3, v4.__s, w3), v4.componentDidUpdate != null && v4.__h.push(function() {
                v4.componentDidUpdate(p3, _4, k3);
              });
            }
            v4.context = w3, v4.props = b3, v4.state = v4.__s, (s4 = l3.__r) && s4(u4), v4.__d = false, v4.__v = u4, v4.__P = n4, s4 = v4.render(v4.props, v4.state, v4.context), v4.state = v4.__s, v4.getChildContext != null && (i4 = a3(a3({}, i4), v4.getChildContext())), h4 || v4.getSnapshotBeforeUpdate == null || (k3 = v4.getSnapshotBeforeUpdate(p3, _4)), A2 = s4 != null && s4.type === y2 && s4.key == null ? s4.props.children : s4, m3(n4, Array.isArray(A2) ? A2 : [A2], u4, t3, i4, r4, o4, f4, e3, c4), v4.base = u4.__e, u4.__h = null, v4.__h.length && f4.push(v4), x4 && (v4.__E = v4.__ = null), v4.__e = false;
          } else
            o4 == null && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = j2(t3.__e, u4, t3, i4, r4, o4, f4, c4);
        (s4 = l3.diffed) && s4(u4);
      } catch (n5) {
        u4.__v = null, (c4 || o4 != null) && (u4.__e = e3, u4.__h = !!c4, o4[o4.indexOf(e3)] = null), l3.__e(n5, u4, t3);
      }
    }
    function T2(n4, u4) {
      l3.__c && l3.__c(u4, n4), n4.some(function(u5) {
        try {
          n4 = u5.__h, u5.__h = [], n4.some(function(n5) {
            n5.call(u5);
          });
        } catch (n5) {
          l3.__e(n5, u5.__v);
        }
      });
    }
    function j2(l4, u4, t3, i4, r4, o4, f4, c4) {
      var s4, a4, h4, p3 = t3.props, y3 = u4.props, d4 = u4.type, k3 = 0;
      if (d4 === "svg" && (r4 = true), o4 != null) {
        for (; k3 < o4.length; k3++)
          if ((s4 = o4[k3]) && "setAttribute" in s4 == !!d4 && (d4 ? s4.localName === d4 : s4.nodeType === 3)) {
            l4 = s4, o4[k3] = null;
            break;
          }
      }
      if (l4 == null) {
        if (d4 === null)
          return document.createTextNode(y3);
        l4 = r4 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, y3.is && y3), o4 = null, c4 = false;
      }
      if (d4 === null)
        p3 === y3 || c4 && l4.data === y3 || (l4.data = y3);
      else {
        if (o4 = o4 && n3.call(l4.childNodes), a4 = (p3 = t3.props || e2).dangerouslySetInnerHTML, h4 = y3.dangerouslySetInnerHTML, !c4) {
          if (o4 != null)
            for (p3 = {}, k3 = 0; k3 < l4.attributes.length; k3++)
              p3[l4.attributes[k3].name] = l4.attributes[k3].value;
          (h4 || a4) && (h4 && (a4 && h4.__html == a4.__html || h4.__html === l4.innerHTML) || (l4.innerHTML = h4 && h4.__html || ""));
        }
        if (A(l4, y3, p3, r4, c4), h4)
          u4.__k = [];
        else if (k3 = u4.props.children, m3(l4, Array.isArray(k3) ? k3 : [k3], u4, t3, i4, r4 && d4 !== "foreignObject", o4, f4, o4 ? o4[0] : t3.__k && _3(t3, 0), c4), o4 != null)
          for (k3 = o4.length; k3--; )
            o4[k3] != null && v3(o4[k3]);
        c4 || ("value" in y3 && (k3 = y3.value) !== void 0 && (k3 !== p3.value || k3 !== l4.value || d4 === "progress" && !k3) && C2(l4, "value", k3, p3.value, false), "checked" in y3 && (k3 = y3.checked) !== void 0 && k3 !== l4.checked && C2(l4, "checked", k3, p3.checked, false));
      }
      return l4;
    }
    function z2(n4, u4, t3) {
      try {
        typeof n4 == "function" ? n4(u4) : n4.current = u4;
      } catch (n5) {
        l3.__e(n5, t3);
      }
    }
    function L2(n4, u4, t3) {
      var i4, r4;
      if (l3.unmount && l3.unmount(n4), (i4 = n4.ref) && (i4.current && i4.current !== n4.__e || z2(i4, null, u4)), (i4 = n4.__c) != null) {
        if (i4.componentWillUnmount)
          try {
            i4.componentWillUnmount();
          } catch (n5) {
            l3.__e(n5, u4);
          }
        i4.base = i4.__P = null;
      }
      if (i4 = n4.__k)
        for (r4 = 0; r4 < i4.length; r4++)
          i4[r4] && L2(i4[r4], u4, typeof n4.type != "function");
      t3 || n4.__e == null || v3(n4.__e), n4.__e = n4.__d = void 0;
    }
    function M2(n4, l4, u4) {
      return this.constructor(n4, u4);
    }
    function N2(u4, t3, i4) {
      var r4, o4, f4;
      l3.__ && l3.__(u4, t3), o4 = (r4 = typeof i4 == "function") ? null : i4 && i4.__k || t3.__k, f4 = [], I2(t3, u4 = (!r4 && i4 || t3).__k = h3(y2, null, [u4]), o4 || e2, e2, t3.ownerSVGElement !== void 0, !r4 && i4 ? [i4] : o4 ? null : t3.firstChild ? n3.call(t3.childNodes) : null, f4, !r4 && i4 ? i4 : o4 ? o4.__e : t3.firstChild, r4), T2(f4, u4);
    }
    n3 = c3.slice, l3 = {__e: function(n4, l4) {
      for (var u4, t3, i4; l4 = l4.__; )
        if ((u4 = l4.__c) && !u4.__)
          try {
            if ((t3 = u4.constructor) && t3.getDerivedStateFromError != null && (u4.setState(t3.getDerivedStateFromError(n4)), i4 = u4.__d), u4.componentDidCatch != null && (u4.componentDidCatch(n4), i4 = u4.__d), i4)
              return u4.__E = u4;
          } catch (l5) {
            n4 = l5;
          }
      throw n4;
    }}, u3 = 0, t2 = function(n4) {
      return n4 != null && n4.constructor === void 0;
    }, d3.prototype.setState = function(n4, l4) {
      var u4;
      u4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a3({}, this.state), typeof n4 == "function" && (n4 = n4(a3({}, u4), this.props)), n4 && a3(u4, n4), n4 != null && this.__v && (l4 && this.__h.push(l4), x3(this));
    }, d3.prototype.forceUpdate = function(n4) {
      this.__v && (this.__e = true, n4 && this.__h.push(n4), x3(this));
    }, d3.prototype.render = y2, i3 = [], r3 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b2.__r = 0, f3 = 0, exports.render = N2, exports.hydrate = function n4(l4, u4) {
      N2(l4, u4, n4);
    }, exports.createElement = h3, exports.h = h3, exports.Fragment = y2, exports.createRef = function() {
      return {current: null};
    }, exports.isValidElement = t2, exports.Component = d3, exports.cloneElement = function(l4, u4, t3) {
      var i4, r4, o4, f4 = a3({}, l4.props);
      for (o4 in u4)
        o4 == "key" ? i4 = u4[o4] : o4 == "ref" ? r4 = u4[o4] : f4[o4] = u4[o4];
      return arguments.length > 2 && (f4.children = arguments.length > 3 ? n3.call(arguments, 2) : t3), p2(l4.type, f4, i4 || l4.key, r4 || l4.ref, null);
    }, exports.createContext = function(n4, l4) {
      var u4 = {__c: l4 = "__cC" + f3++, __: n4, Consumer: function(n5, l5) {
        return n5.children(l5);
      }, Provider: function(n5) {
        var u5, t3;
        return this.getChildContext || (u5 = [], (t3 = {})[l4] = this, this.getChildContext = function() {
          return t3;
        }, this.shouldComponentUpdate = function(n6) {
          this.props.value !== n6.value && u5.some(x3);
        }, this.sub = function(n6) {
          u5.push(n6);
          var l5 = n6.componentWillUnmount;
          n6.componentWillUnmount = function() {
            u5.splice(u5.indexOf(n6), 1), l5 && l5.call(n6);
          };
        }), n5.children;
      }};
      return u4.Provider.__ = u4.Consumer.contextType = u4;
    }, exports.toChildArray = function n4(l4, u4) {
      return u4 = u4 || [], l4 == null || typeof l4 == "boolean" || (Array.isArray(l4) ? l4.some(function(l5) {
        n4(l5, u4);
      }) : u4.push(l4)), u4;
    }, exports.options = l3;
  }
});

// node_modules/preact-router/dist/preact-router.js
var require_preact_router = __commonJS({
  "node_modules/preact-router/dist/preact-router.js"(exports, module2) {
    !function(t2, e2) {
      typeof exports == "object" && typeof module2 != "undefined" ? module2.exports = e2(require_preact()) : typeof define == "function" && define.amd ? define(["preact"], e2) : t2.preactRouter = e2(t2.preact);
    }(exports, function(t2) {
      function e2(t3, e3) {
        for (var n4 in e3)
          t3[n4] = e3[n4];
        return t3;
      }
      function n3(t3, e3, n4) {
        var r4, o4 = /(?:\?([^#]*))?(#.*)?$/, u4 = t3.match(o4), a4 = {};
        if (u4 && u4[1])
          for (var p3 = u4[1].split("&"), c4 = 0; c4 < p3.length; c4++) {
            var f4 = p3[c4].split("=");
            a4[decodeURIComponent(f4[0])] = decodeURIComponent(f4.slice(1).join("="));
          }
        t3 = i3(t3.replace(o4, "")), e3 = i3(e3 || "");
        for (var l4 = Math.max(t3.length, e3.length), s4 = 0; s4 < l4; s4++)
          if (e3[s4] && e3[s4].charAt(0) === ":") {
            var h4 = e3[s4].replace(/(^:|[+*?]+$)/g, ""), d4 = (e3[s4].match(/[+*?]+$/) || C2)[0] || "", g4 = ~d4.indexOf("+"), y3 = ~d4.indexOf("*"), m4 = t3[s4] || "";
            if (!m4 && !y3 && (d4.indexOf("?") < 0 || g4)) {
              r4 = false;
              break;
            }
            if (a4[h4] = decodeURIComponent(m4), g4 || y3) {
              a4[h4] = t3.slice(s4).map(decodeURIComponent).join("/");
              break;
            }
          } else if (e3[s4] !== t3[s4]) {
            r4 = false;
            break;
          }
        return (n4.default === true || r4 !== false) && a4;
      }
      function r3(t3, e3) {
        return t3.rank < e3.rank ? 1 : t3.rank > e3.rank ? -1 : t3.index - e3.index;
      }
      function o3(t3, e3) {
        return t3.index = e3, t3.rank = p2(t3), t3.props;
      }
      function i3(t3) {
        return t3.replace(/(^\/+|\/+$)/g, "").split("/");
      }
      function u3(t3) {
        return t3.charAt(0) == ":" ? 1 + "*+?".indexOf(t3.charAt(t3.length - 1)) || 4 : 5;
      }
      function a3(t3) {
        return i3(t3).map(u3).join("");
      }
      function p2(t3) {
        return t3.props.default ? 0 : a3(t3.props.path);
      }
      function c3(t3, e3) {
        e3 === void 0 && (e3 = "push"), b2 && b2[e3] ? b2[e3](t3) : typeof history != "undefined" && history[e3 + "State"] && history[e3 + "State"](null, null, t3);
      }
      function f3() {
        var t3;
        return t3 = b2 && b2.location ? b2.location : b2 && b2.getCurrentLocation ? b2.getCurrentLocation() : typeof location != "undefined" ? location : x3, "" + (t3.pathname || "") + (t3.search || "");
      }
      function l3(t3, e3) {
        return e3 === void 0 && (e3 = false), typeof t3 != "string" && t3.url && (e3 = t3.replace, t3 = t3.url), s3(t3) && c3(t3, e3 ? "replace" : "push"), h3(t3);
      }
      function s3(t3) {
        for (var e3 = U.length; e3--; )
          if (U[e3].canRoute(t3))
            return true;
        return false;
      }
      function h3(t3) {
        for (var e3 = false, n4 = 0; n4 < U.length; n4++)
          U[n4].routeTo(t3) === true && (e3 = true);
        for (var r4 = k2.length; r4--; )
          k2[r4](t3);
        return e3;
      }
      function d3(t3) {
        if (t3 && t3.getAttribute) {
          var e3 = t3.getAttribute("href"), n4 = t3.getAttribute("target");
          if (e3 && e3.match(/^\//g) && (!n4 || n4.match(/^_?self$/i)))
            return l3(e3);
        }
      }
      function g3(t3) {
        if (!(t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button !== 0))
          return d3(t3.currentTarget || t3.target || this), y2(t3);
      }
      function y2(t3) {
        return t3 && (t3.stopImmediatePropagation && t3.stopImmediatePropagation(), t3.stopPropagation && t3.stopPropagation(), t3.preventDefault()), false;
      }
      function m3(t3) {
        if (!(t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button !== 0)) {
          var e3 = t3.target;
          do {
            if ((e3.nodeName + "").toUpperCase() === "A" && e3.getAttribute("href")) {
              if (e3.hasAttribute("native"))
                return;
              if (d3(e3))
                return y2(t3);
            }
          } while (e3 = e3.parentNode);
        }
      }
      function v3() {
        A || (typeof addEventListener == "function" && (b2 || addEventListener("popstate", function() {
          h3(f3());
        }), addEventListener("click", m3)), A = true);
      }
      var C2 = {}, b2 = null, U = [], k2 = [], x3 = {}, A = false, R = function(i4) {
        function u4(t3) {
          i4.call(this, t3), t3.history && (b2 = t3.history), this.state = {url: t3.url || f3()}, v3();
        }
        return i4 && (u4.__proto__ = i4), u4.prototype = Object.create(i4 && i4.prototype), u4.prototype.constructor = u4, u4.prototype.shouldComponentUpdate = function(t3) {
          return t3.static !== true || (t3.url !== this.props.url || t3.onChange !== this.props.onChange);
        }, u4.prototype.canRoute = function(e3) {
          return this.getMatchingChildren(t2.toChildArray(this.props.children), e3, false).length > 0;
        }, u4.prototype.routeTo = function(t3) {
          this.setState({url: t3});
          var e3 = this.canRoute(t3);
          return this.updating || this.forceUpdate(), e3;
        }, u4.prototype.componentWillMount = function() {
          U.push(this), this.updating = true;
        }, u4.prototype.componentDidMount = function() {
          var t3 = this;
          b2 && (this.unlisten = b2.listen(function(e3) {
            t3.routeTo("" + (e3.pathname || "") + (e3.search || ""));
          })), this.updating = false;
        }, u4.prototype.componentWillUnmount = function() {
          typeof this.unlisten == "function" && this.unlisten(), U.splice(U.indexOf(this), 1);
        }, u4.prototype.componentWillUpdate = function() {
          this.updating = true;
        }, u4.prototype.componentDidUpdate = function() {
          this.updating = false;
        }, u4.prototype.getMatchingChildren = function(i5, u5, a4) {
          return i5.filter(o3).sort(r3).map(function(r4) {
            var o4 = n3(u5, r4.props.path, r4.props);
            if (o4) {
              if (a4 !== false) {
                var i6 = {url: u5, matches: o4};
                return e2(i6, o4), delete i6.ref, delete i6.key, t2.cloneElement(r4, i6);
              }
              return r4;
            }
          }).filter(Boolean);
        }, u4.prototype.render = function(e3, n4) {
          var r4 = e3.children, o4 = e3.onChange, i5 = n4.url, u5 = this.getMatchingChildren(t2.toChildArray(r4), i5, true), a4 = u5[0] || null, p3 = this.previousUrl;
          return i5 !== p3 && (this.previousUrl = i5, typeof o4 == "function" && o4({router: this, url: i5, previous: p3, active: u5, current: a4})), a4;
        }, u4;
      }(t2.Component), K = function(n4) {
        return t2.createElement("a", e2({onClick: g3}, n4));
      }, E = function(e3) {
        return t2.createElement(e3.component, e3);
      };
      return R.subscribers = k2, R.getCurrentUrl = f3, R.route = l3, R.Router = R, R.Route = E, R.Link = K, R.exec = n3, R;
    });
  }
});

// src/pages/404.jsx
var __exports = {};
__export(__exports, {
  default: () => __default,
  title: () => title
});
var title, __default;
var init__ = __esm({
  "src/pages/404.jsx"() {
    init_preact();
    title = "Error 404 (Not found)!!1";
    __default = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("b", null, "404."), " ", /* @__PURE__ */ v("ins", null, "That\u2019s an error.")), /* @__PURE__ */ v("p", null, "The requested URL was not found on this server.  ", /* @__PURE__ */ v("ins", null, "That\u2019s all we know.")), /* @__PURE__ */ v("a", {
      href: "/"
    }, "Go Home, I guess..."));
  }
});

// src/components/link.jsx
var link_default;
var init_link = __esm({
  "src/components/link.jsx"() {
    init_preact();
    link_default = ({href, className, children}) => /* @__PURE__ */ v("a", {
      href,
      className
    }, children);
  }
});

// src/helpers/capitalize.js
var require_capitalize = __commonJS({
  "src/helpers/capitalize.js"(exports, module2) {
    module2.exports = {
      capitalize(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1, word.length - 1);
      }
    };
  }
});

// src/components/breadcrumb.jsx
var import_capitalize, breadcrumb_default;
var init_breadcrumb = __esm({
  "src/components/breadcrumb.jsx"() {
    init_preact();
    init_link();
    import_capitalize = __toModule(require_capitalize());
    breadcrumb_default = ({path}) => {
      let crumbs = [{text: "Home", path: "/"}];
      const split = path.split("/").filter(Boolean);
      if (split.length > 0) {
        split.reduce((acc, cur) => {
          crumbs.push({
            text: cur.split("-").map(import_capitalize.capitalize).join(" "),
            path: `${acc}/${cur}`
          });
          return `${acc}/${cur}`;
        }, "");
      }
      crumbs[crumbs.length - 1].isActive = true;
      return /* @__PURE__ */ v("nav", {
        className: "breadcrumb is-marginless is-centered",
        "aria-label": "breadcrumbs"
      }, /* @__PURE__ */ v("ul", null, crumbs.map(({text, path: path2, isActive}) => /* @__PURE__ */ v("li", {
        key: text,
        className: isActive ? "is-active" : ""
      }, isActive ? /* @__PURE__ */ v("span", null, text) : /* @__PURE__ */ v(link_default, {
        href: path2
      }, text)))));
    };
  }
});

// src/layouts/center-layout.jsx
var center_layout_default;
var init_center_layout = __esm({
  "src/layouts/center-layout.jsx"() {
    init_preact();
    init_breadcrumb();
    center_layout_default = ({
      title: title4,
      subtitle,
      hasJavascript,
      isFullscreen,
      path,
      children,
      footer
    }) => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("header", null, /* @__PURE__ */ v(breadcrumb_default, {
      path
    })), /* @__PURE__ */ v("div", {
      className: "page-content"
    }, hasJavascript && /* @__PURE__ */ v("noscript", {
      key: "noscript"
    }, "Interactive page elements might not work because Javascript is disabled"), !isFullscreen && /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
      className: "section titles-section"
    }, title4, subtitle), /* @__PURE__ */ v("main", null, children))), footer && /* @__PURE__ */ v("footer", null, footer), isFullscreen && children);
  }
});

// src/pages/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  title: () => title2
});
var title2, about_default;
var init_about = __esm({
  "src/pages/about.jsx"() {
    init_preact();
    init_link();
    init_center_layout();
    title2 = "About The Smart Won";
    about_default = ({path}) => /* @__PURE__ */ v(center_layout_default, {
      title: /* @__PURE__ */ v("h1", {
        className: "title is-2"
      }, "About"),
      path
    }, /* @__PURE__ */ v("div", {
      className: "content"
    }, /* @__PURE__ */ v("p", null, /* @__PURE__ */ v(link_default, {
      href: "/"
    }, "thesmartwon.com"), " started as a place for me to share topics with friends without having to repeat myself (plus they get to keep these notes). Now it's just a place for me to share my experiences with those who want a little more wisdom."), /* @__PURE__ */ v("h2", null, "Who am I?"), /* @__PURE__ */ v("p", null, "I'm an early college grad who's been programming since elementary school. I plan to rush to financial independence in less than 10 years so I can work on what I want instead of what my employers want. Some things I think are cool are", " ", /* @__PURE__ */ v(link_default, {
      href: "https://polygon.io"
    }, "automated trading"), ", ", /* @__PURE__ */ v(link_default, {
      href: "http://wiki.sc2ai.net/Main_Page"
    }, "Starcraft 2 AI"), ", ", /* @__PURE__ */ v(link_default, {
      href: "https://www.hex-rays.com/products/ida/index.shtml"
    }, "reverse engineering"), ", and on the less technical side I love God, cooking, and kids! I'm sure as I get older I'll post about those things instead..."), /* @__PURE__ */ v("p", null, "It's safe to say the following blogs changed my life and inspired me to make this won. You should read them.", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v(link_default, {
      href: "https://zachholman.com"
    }, "Zach Holman"), " on tech and its culture from California"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v(link_default, {
      href: "https://www.mrmoneymustache.com"
    }, "Mr. Money Mustache"), " on how to be frugal")))));
  }
});

// src/helpers/pluralize.js
var pluralize;
var init_pluralize = __esm({
  "src/helpers/pluralize.js"() {
    pluralize = (word, num) => num > 1 ? word + "s" : word;
  }
});

// src/components/article-preview.jsx
function ArticlePreview({
  title: title4,
  path,
  timeToRead,
  dateShort,
  dateLong,
  excerpt,
  showPreview = true,
  showTopic = true
}) {
  const topic = path.split("/")[2];
  return /* @__PURE__ */ v("li", {
    key: path,
    style: {paddingBottom: "3rem"}
  }, /* @__PURE__ */ v("div", {
    className: "media"
  }, /* @__PURE__ */ v("div", {
    className: "media-content has-text-centered is-clipped"
  }, /* @__PURE__ */ v(link_default, {
    href: path,
    className: `title article-title ${showPreview ? "is-3" : "is-4"}`
  }, title4), /* @__PURE__ */ v("div", {
    className: "tags has-addons is-centered"
  }, showTopic ? /* @__PURE__ */ v(link_default, {
    className: "tag is-rounded is-warning",
    href: `/posts/${topic}/`
  }, topic) : /* @__PURE__ */ v("span", {
    className: "tag is-rounded is-warning"
  }, `${timeToRead} ${pluralize("min", timeToRead)}`), /* @__PURE__ */ v("span", {
    className: "tag is-rounded"
  }, /* @__PURE__ */ v("time", {
    dateTime: dateShort
  }, dateLong))))), showPreview && /* @__PURE__ */ v("article", {
    className: "article-body"
  }, /* @__PURE__ */ v("p", null, excerpt)));
}
var init_article_preview = __esm({
  "src/components/article-preview.jsx"() {
    init_preact();
    init_link();
    init_pluralize();
  }
});

// src/pages/index.jsx
var pages_exports = {};
__export(pages_exports, {
  default: () => pages_default,
  title: () => title3
});
var import_generated, posts, title3, pages_default;
var init_pages = __esm({
  "src/pages/index.jsx"() {
    init_preact();
    init_center_layout();
    init_link();
    init_article_preview();
    import_generated = __toModule(require_generated());
    posts = Object.entries(import_generated.default).filter(([_3, props]) => props.timeToRead).map(([path, props]) => ({
      path,
      ...props
    }));
    title3 = "The Smart Blog";
    pages_default = ({path}) => /* @__PURE__ */ v(center_layout_default, {
      title: /* @__PURE__ */ v("h1", {
        className: "title is-2"
      }, "You've found my blog"),
      subtitle: /* @__PURE__ */ v("h2", {
        className: "subtitle is-4"
      }, "Relax and have a good read!", /* @__PURE__ */ v("svg", {
        className: "mug",
        x: "0px",
        y: "0px",
        width: "100%",
        height: "1.5rem",
        viewBox: "0 0 49.284 49.284"
      }, /* @__PURE__ */ v("g", null, /* @__PURE__ */ v("g", null, /* @__PURE__ */ v("path", {
        d: "M36.591,39.606c8.158-0.328,11.784-4.041,11.784-8.585c0-3.947-2.739-7.268-8.806-8.288\n              c0.027-1.468,0.029-2.884,0.029-4.206H0.909c0,8.644,0.01,21.2,7.776,27.197c-4.713,0.361-7.776,0.935-7.776,1.581\n              c0,1.094,8.661,1.979,19.345,1.979s19.344-0.885,19.344-1.979c0-0.646-3.063-1.221-7.775-1.581\n              C33.931,44.097,35.472,41.991,36.591,39.606z M39.425,26.492c3.404,0.789,4.012,2.458,3.973,4.619\n              c-0.043,2.454-0.754,4.115-5.402,4.687C38.837,32.811,39.235,29.604,39.425,26.492z M5.579,21.527h6.048\n              c-2.711,8,1.863,20.658,1.862,20.658C3.601,34.606,5.579,21.527,5.579,21.527z"
      }), /* @__PURE__ */ v("path", {
        d: "M23.419,13.313c0.769-6.968,16.153-3.482,12.947-12.528c-0.49-1.383-2.705-0.787-2.21,0.609\n              C35.562,5.36,30.22,5.843,27.5,6.752c-3.267,1.092-5.971,2.918-6.373,6.561C20.965,14.781,23.259,14.765,23.419,13.313z"
      }), /* @__PURE__ */ v("path", {
        d: "M34.339,8.437c-3,0.707-5.742,1.992-6.677,5.146c-0.421,1.421,1.791,2.023,2.21,0.609\n              c1.032-3.483,5.607-3.541,8.528-4.389c3.137-0.911,4.932-3.084,4.501-6.42c-0.188-1.445-2.48-1.463-2.292,0\n              C41.13,7.417,37.418,7.71,34.339,8.437z"
      }))))),
      path,
      footer: /* @__PURE__ */ v(link_default, {
        href: "/posts"
      }, "View all posts")
    }, /* @__PURE__ */ v("ul", {
      className: "article-list"
    }, Object.entries(posts).sort(([_3, p1], [__, p2]) => p2.dateShort.localeCompare(p1.dateShort)).slice(0, 5).map(([slug, post]) => /* @__PURE__ */ v(ArticlePreview, {
      path: slug,
      ...post
    }))));
  }
});

// src/generated/posts/bikes/buying-used/index.md.jsx
var index_md_exports = {};
__export(index_md_exports, {
  default: () => index_md_default
});
var index_md_default;
var init_index_md = __esm({
  "src/generated/posts/bikes/buying-used/index.md.jsx"() {
    init_preact();
    index_md_default = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("strong", null, "TLDR;")), /* @__PURE__ */ v("ol", null, /* @__PURE__ */ v("li", null, "Find your frame size using ", /* @__PURE__ */ v("a", {
      href: "https://www.evanscycles.com/en-us/help/bike-sizing-road"
    }, "this chart")), /* @__PURE__ */ v("li", null, "Visit ", /* @__PURE__ */ v("a", {
      href: "https://raleigh.craigslist.org/search/bia?hasPic=1&bundleDuplicates=1&searchNearby=2&nearbyArea=367&nearbyArea=335&nearbyArea=273&nearbyArea=61&nearbyArea=634&nearbyArea=272&min_price=90&max_price=500"
    }, "craigslist bicycles"), " (I have the filters set up for you)", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Click the X on bikes that are too big or too small for you. Also X anything that ", /* @__PURE__ */ v("a", {
      href: "http://www.randomthoughts.fyi/2012/01/buying-bikes-from-craigslist.html"
    }, "looks like what you'd see in Target or Walmart."), " (More commonly you'll be clicking the X on weird bikes, or things that aren't bikes at all!)"))), /* @__PURE__ */ v("li", null, "Test ride 2-3 bikes near you and buy one.", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "People are constantly test riding bikes (especially the $200+ ones), so don't feel weird asking."), /* @__PURE__ */ v("li", null, "To be polite, trade your ID for a test ride so that the seller knows you won't steal the bike.")))), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "fixie.jpg",
      alt: "Fixie"
    }), /* @__PURE__ */ v("figcaption", null, "A fixie (single gear) bike listed for $200 on Craigslist with mediocre comonents.")), /* @__PURE__ */ v("h1", {
      id: "the-guide"
    }, "The Guide"), /* @__PURE__ */ v("p", null, "I recently bought a bike after religiously checking Craigslist for a month, and I'd like to share the process I went through. I'm a huge fan of bikes and the ", /* @__PURE__ */ v("a", {
      href: "http://www.mrmoneymustache.com/2011/04/18/get-rich-with-bikes/"
    }, "lifestyle they encourage.")), /* @__PURE__ */ v("p", null, "Luckily, buying used bikes ($100+) is easier than ever in the age of the internet. Unluckily, doing research is necessary or you'll end up buying a bike that doesn't fit, has a major problem, or maybe some other bothersome issue."), /* @__PURE__ */ v("p", null, "To make an informed decision about buying a used bike, you have to:"), /* @__PURE__ */ v("ol", null, /* @__PURE__ */ v("li", null, "Find your size."), /* @__PURE__ */ v("li", null, "Understand you're actually investing in a frame. So understand different types of frames and what they're good at."), /* @__PURE__ */ v("li", null, "Understand wheels and other components (derailleurs, crank-sets, brakes, and shifters) and what makes them work."), /* @__PURE__ */ v("li", null, "Understand comfort (seat and handlebars)."), /* @__PURE__ */ v("li", null, "Get a BicycleBlueBook quote."), /* @__PURE__ */ v("li", null, "With your newfound knowledge, inspect the bike!")), /* @__PURE__ */ v("p", null, "If you do all of those things, I think you'll find yourself a bike that's a keeper just like I did!"), /* @__PURE__ */ v("h2", {
      id: "1-finding-your-size"
    }, "1. Finding your size"), /* @__PURE__ */ v("p", null, "Most non-department store bikes are measured by their ", /* @__PURE__ */ v("a", {
      href: "https://www.evanscycles.com/help/bike-sizing"
    }, "seat tube length."), " This determines how far your legs have to go to touch the pedals. The best way to find your frame size is to measure your inseam length (foot to crotch.) Find it by putting the spine of a book in your crotch and measuring from the floor to the top of the spine. Convert your inseam to cm. Multiply by .67. That's around the size bike you want. If you're too lazy to do all this, you can use this guesstimate chart."), /* @__PURE__ */ v("table", {
      class: "table"
    }, /* @__PURE__ */ v("caption", null, "Sizing chart"), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", {
      style: "text-align: center",
      colspan: "2"
    }, "Rider Height")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", null, "Feet & Inches"), /* @__PURE__ */ v("th", null, "Centimeters"), /* @__PURE__ */ v("th", {
      colspan: "2"
    }, "Frame Size (cm)")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `4'10" - 5'0"`), /* @__PURE__ */ v("td", null, "148 - 152"), /* @__PURE__ */ v("td", null, "47 - 48")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `5'0" - 5'3"`), /* @__PURE__ */ v("td", null, "152 - 160"), /* @__PURE__ */ v("td", null, "49 - 50")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `5'3" - 5'6"`), /* @__PURE__ */ v("td", null, "160 - 168"), /* @__PURE__ */ v("td", null, "51 - 53")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `5'6" - 5'9"`), /* @__PURE__ */ v("td", null, "168 - 175"), /* @__PURE__ */ v("td", null, "54 - 55")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `5'9" - 6'0"`), /* @__PURE__ */ v("td", null, "175 - 183"), /* @__PURE__ */ v("td", null, "56 - 58")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `6'0" - 6'3"`), /* @__PURE__ */ v("td", null, "183 - 191"), /* @__PURE__ */ v("td", null, "58 - 60")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, `6'3" - 6'6"`), /* @__PURE__ */ v("td", null, "191 - 198"), /* @__PURE__ */ v("td", null, "61 - 63")))), /* @__PURE__ */ v("p", {
      class: "subtitle is-6",
      style: "text-align: center"
    }, /* @__PURE__ */ v("a", {
      href: "https://www.evanscycles.com/help/bike-sizing-road"
    }, "Source")), /* @__PURE__ */ v("p", null, "The best option is to spend an afternoon at a nearby bike shop and test out different sizes."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "frame-geometry.jpg",
      alt: "Frame geometry"
    }), /* @__PURE__ */ v("figcaption", null, "The parts of a normal bike frame.")), /* @__PURE__ */ v("h2", {
      id: "2-understanding-different-frames"
    }, "2. Understanding different frames"), /* @__PURE__ */ v("p", null, "A frame is the core of the bike, and it determines all the other components you can use on it. If you're planning on maintenance or upgrades then you are really investing in a frame."), /* @__PURE__ */ v("h3", {
      id: "steel-is-real"
    }, /* @__PURE__ */ v("a", {
      href: "http://road.cc/content/buyers-guide/194720-18-best-steel-road-bikes-and-frames-%E2%80%94-great-rides-cyclings-traditional"
    }, "Steel (is real)")), /* @__PURE__ */ v("p", null, `Steel is THE classic material used to make bikes. It's lightened by being "butted" in places the tube doesn't have to be thick.`), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./steel-bike.jpg",
      alt: "Steel bike"
    })), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-success"
    }, "pro"), " Super strong, so all the tubes will be the skinniest (", /* @__PURE__ */ v("a", {
      href: "https://www.google.com/search?q=steel+bike+frames&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj587yNqc7YAhUwRN8KHf2UAz0Q_AUICygC&biw=950&bih=994"
    }, "looks great!"), ")"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-success"
    }, "pro"), " Easy to repair -- can literally bend the steel back into place and it's good to go"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-success"
    }, "pro"), " Absorbs TONS of road shock for comfy rides"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-danger"
    }, "con"), " Tends to make the heaviest frames")), /* @__PURE__ */ v("h3", {
      id: "aluminum"
    }, /* @__PURE__ */ v("a", {
      href: "https://www.bicycling.com/bikes-gear/trends/aluminum-frames-are-back-and-better-ever"
    }, "Aluminum")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./aluminum-bike.jpg",
      alt: "Aluminum mountain bike"
    })), /* @__PURE__ */ v("p", null, "Aluminum is the modern material used to make bikes. Most bikes made post-1990 bikes are aluminum. It's not as strong as steel, so tubes have to be thicker to support the same weight."), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-success"
    }, "pro"), " Tends to make lighter frames"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-danger"
    }, "con"), " Harder to repair bent frames, usually requires some welding"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-danger"
    }, "con"), ` Doesn't absorb much road shock (ie. "stiff")`)), /* @__PURE__ */ v("h3", {
      id: "carbon-fiber"
    }, /* @__PURE__ */ v("a", {
      href: "http://road.cc/content/feature/211921-13-best-carbon-fibre-road-bikes-%C2%A3799-%C2%A310000"
    }, "Carbon Fiber")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./carbon-fiber-bike.jpg",
      alt: "Carbon Fiber bike"
    })), /* @__PURE__ */ v("p", null, "Carbon Fiber has just started peeking its head in the consumer world around 2000. Like aluminum, it's not as strong as steel so tubes have to be thicker to support the same weight. Carbon fiber frames are more expensive to produce than aluminum, but in theory the best."), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-success"
    }, "pro"), " Tends to make the lightest frames"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-success"
    }, "pro"), " Absorbs a lot of road shock, almost as much as steel"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("span", {
      class: "tag is-danger"
    }, "con"), " Can't DIY repair the frame (they fail ", /* @__PURE__ */ v("a", {
      href: "https://www.google.com/search?q=carbon+fiber+bike+crash&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiy3YHk9M3YAhWBUN8KHQmqDfAQ_AUIDCgD&biw=950&bih=994"
    }, "catastrophically"), " in crashes), need a professional")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "caad10.jpg",
      alt: "Racing geometry bike"
    }), /* @__PURE__ */ v("figcaption", null, "This bike has a more racing geometry since the rider has to lean farther forward to reach the handlebars. This is the same frame that I first bought (and love), a Cannondale CAAD 10!")), /* @__PURE__ */ v("h2", {
      id: "3-understanding-components"
    }, "3. Understanding components"), /* @__PURE__ */ v("p", null, "Components are... complicated. They've been letting you brake and shift gears since the inception of bicycles, but the way they do that has changed, and everyone has their own preferences. There are some globally agreed on facts, though:"), /* @__PURE__ */ v("ol", null, /* @__PURE__ */ v("li", null, "Shimano groupsets (shifters + gears + brakes) are good. They are by far the most popular (at least in the US). Thankfully, their product lines follow a scale of worst to best AND are labeled on the derailleur of the bike.")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "dura-ace.jpg",
      alt: "Dura ace crankshaft"
    }), /* @__PURE__ */ v("figcaption", null, "A dura-ace groupset.")), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", null, "Quality"), /* @__PURE__ */ v("th", null, "Name"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Worst"), /* @__PURE__ */ v("td", null, "Shimano Claris")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Okay"), /* @__PURE__ */ v("td", null, "Shimano Sora")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Good"), /* @__PURE__ */ v("td", null, "Shimano Tiagra")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Good"), /* @__PURE__ */ v("td", null, "Shimano 105")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Great"), /* @__PURE__ */ v("td", null, "Shimano Ultegra")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Best"), /* @__PURE__ */ v("td", null, "Shimano Dura-Ace")))), /* @__PURE__ */ v("ol", {
      start: "2"
    }, /* @__PURE__ */ v("li", null, "SRAM parts are good, but a little less popular ", /* @__PURE__ */ v("a", {
      href: "http://road.cc/content/buyers-guide/206156-head-head-shimano-105-v-sram-rival-22-%E2%80%94-how-do-two-cheapest-11-speed"
    }, "(and different)")), /* @__PURE__ */ v("li", null, "Campy parts are amazing, but expensive")), /* @__PURE__ */ v("p", null, "It's pretty hard to learn which components work well together with which, but thankfully bike manufacturers take care of that part for you. If you want to learn more about what each of those parts of your bike does, instead of watching hours of tutorials online like I did, buy ", /* @__PURE__ */ v("a", {
      href: "https://www.amazon.com/s/ref=nb_sb_ss_c_1_9/140-5840151-4715015?url=search-alias%3Daps&field-keywords=bike+tool+kit&sprefix=bike+tool%2Caps%2C126&crid=38BYVW8P2CC4R"
    }, "some cheap tools"), " and get out there and actually ", /* @__PURE__ */ v("a", {
      href: "http://www.jimlangley.net/wrench/wrench_images/bicycle_parts_labeled.jpg"
    }, "take apart a bike yourself!")), /* @__PURE__ */ v("h2", {
      id: "4-understanding-comfort"
    }, "4. Understanding comfort"), /* @__PURE__ */ v("p", null, '"Geometry" is the term we use to describe exactly how a bike positions its rider on the bicycle (think a Harley with high handlebars vs. a Tron bike).'), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "harley-bike.jpg",
      alt: "Harley bike"
    })), /* @__PURE__ */ v("p", {
      style: "text-align: center"
    }, "vs"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "tron-bike.jpg",
      alt: "Tron bike"
    })), /* @__PURE__ */ v("p", null, "Every bike's geometry is different, so the only way to really know the geometries you like is to try different bikes! Faster bikes tend to have more aggressive and uncomfortable geometries that position the rider higher up and with a more straight back, but it all depends on the size of the person, so your mileage ", /* @__PURE__ */ v("em", null, /* @__PURE__ */ v("strong", null, "will")), " vary."), /* @__PURE__ */ v("p", null, "Seats ($30), handlebars ($50), and handlebar tape ($10) are all really cheap to replace on a used bike, and add to comfort. You can take straight bars off a bike and put on curved road bars easily ($40)."), /* @__PURE__ */ v("h2", {
      id: "5-bicyclebluebook-quotes"
    }, "5. BicycleBlueBook quotes"), /* @__PURE__ */ v("p", null, `This is the best way to price-verify used bikes. All you have to do is look at the picture on Craigslist, and search the name of the manufacturer/model on Google followed by "blue book." Given the frame, components, age of the bicycle (and sometimes past sales), BicycleBlueBook gives a pretty accurate estimate of what any bicycle is actually worth. The MSRP (Manufacturer's Suggested Retail Price) is likely what the owner paid for it, so put that in context when making an offer.`), /* @__PURE__ */ v("h2", {
      id: "6-inspecting-a-bike"
    }, "6. Inspecting a bike"), /* @__PURE__ */ v("p", null, "Remember: you're investing in a frame, you can't replace that! So inspect the frame thoroughly for any cracks (not in the paint), and question the owner endlessly if it was ever in a crash. If it was, don't buy it. You're risking your safety."), /* @__PURE__ */ v("p", null, "Inspect the wheels and make sure they have enough air (obviously). Ensure you can see the textures cut into the brake pads, and that the brakes work. Make sure the rims of the wheels where the brakes touch is similarly textured and not smooth."), /* @__PURE__ */ v("p", null, "Check the tension on the chain by pulling up or down on it. If it feels loose or comes out more than .75cm, the chain + gears are old and need to be replaced (you can't just replace the chain.) That's pretty expensive for a used bike you're just now buying, so I wouldn't buy it."), /* @__PURE__ */ v("p", null, "Check if the tires are true (no wobbling when they spin). If not, don't worry, you can tune the spokes yourself later."), /* @__PURE__ */ v("p", null, "While riding, you're looking for three things:"), /* @__PURE__ */ v("ol", null, /* @__PURE__ */ v("li", null, "Does the frame absorb the road well?"), /* @__PURE__ */ v("li", null, "Do I like the geometry of the bike? How long could I ride before becoming uncomfortable?"), /* @__PURE__ */ v("li", null, "Do the gears change smoothly?", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "If you're skipping over gears, you can loosen the rear derailleur barrel to shift farther per click, or tighten it to shift less per click.", /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "rear-derailleur.jpg",
      alt: "Rear derailleur"
    }))), /* @__PURE__ */ v("li", null, "If you can't reach the highest of lowest gear, you can adjust screws on top of the derailleur to reach them. This is tedious, so just know it can be done.")))), /* @__PURE__ */ v("h3", {
      id: "conclusion"
    }, "Conclusion"), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("a", {
      href: "http://www.mrmoneymustache.com/2012/05/07/what-do-you-mean-you-dont-have-a-bike/"
    }, "Biking encourages frugal behavior,"), " and I can attest to their crazy usefulness. Bikes have close to zero-maintenance, and the little maintenance they have is cheap. Spending more money up front if you're going to be using the bike 2-3 years from now is totally worth it, and if you're in college you should be using a bike 2-3 years from now no matter if you're working or still in college."));
  }
});

// src/components/post-index/index.jsx
var post_index_exports = {};
__export(post_index_exports, {
  default: () => post_index_default
});
var import_generated2, post_index_default;
var init_post_index = __esm({
  "src/components/post-index/index.jsx"() {
    init_preact();
    init_center_layout();
    init_article_preview();
    import_generated2 = __toModule(require_generated());
    post_index_default = ({path}) => {
      const {title: title4, subtitle} = import_generated2.default[path];
      return /* @__PURE__ */ v(center_layout_default, {
        title: /* @__PURE__ */ v("h1", {
          className: "title is-2"
        }, title4),
        subtitle: /* @__PURE__ */ v("h2", {
          className: "subtitle is-4"
        }, subtitle),
        path
      }, /* @__PURE__ */ v("ul", {
        className: "article-list"
      }, Object.entries(import_generated2.default).filter(([slug, props]) => slug.startsWith(path) && props.timeToRead).sort(([_3, p1], [__, p2]) => p2.dateShort.localeCompare(p1.dateShort)).map(([slug, post]) => /* @__PURE__ */ v(ArticlePreview, {
        path: slug,
        ...post
      }))));
    };
  }
});

// src/generated/posts/coding/canvas-game-engine/part-1.md.jsx
var part_1_md_exports = {};
__export(part_1_md_exports, {
  default: () => part_1_md_default
});
var part_1_md_default;
var init_part_1_md = __esm({
  "src/generated/posts/coding/canvas-game-engine/part-1.md.jsx"() {
    init_preact();
    part_1_md_default = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("h1", {
      id: "why-canvas"
    }, "Why ", /* @__PURE__ */ v("code", null, `<Canvas>`), "?"), /* @__PURE__ */ v("p", null, "AAA titles like Fallout and Civilization V are usually usually written in low-level languages like C++ so they can directly access hardware (ie a GPU) to provide the best possible performance and graphics. However, don't count out browser-based games written in Javascript! Javascript might many steps removed from C++, but it can play games in nearly any browser and be easily turned into phone or native apps. Plus you can easily host it on a website to share it with friends!"), /* @__PURE__ */ v("h2", {
      id: "disclaimer"
    }, "Disclaimer"), /* @__PURE__ */ v("p", null, "I assume you have a little prior JS knowledge. This tutorial will only setup Webpack."), /* @__PURE__ */ v("h1", {
      id: "step-1"
    }, "Step 1"), /* @__PURE__ */ v("p", null, "First, we need to create a new node project (we'll need some dependencies). My completed project is ", /* @__PURE__ */ v("a", {
      href: "github.com/thesmartwon/canvasgame"
    }, "here"), " if you want to follow along, and ", /* @__PURE__ */ v("a", {
      href: ""
    }, "the first commit"), " maps to step 1."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-sh"
    }, `mkdir canvasgame && cd canvasgame && npm init`)), /* @__PURE__ */ v("p", null, "Let's use Webpack to bundle our JS. This way we can split up our JS files and get live reloading in the browser for free. Webpack has some bare minimum config we need to take care of to get up and running, so let's do that."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-sh"
    }, `npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin`)), /* @__PURE__ */ v("p", null, "This is what your ", /* @__PURE__ */ v("code", null, `webpack.config.js`), " could look like."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};`)), /* @__PURE__ */ v("p", null, "We'll need a dummy ", /* @__PURE__ */ v("code", null, `index.js`), " for now."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `// Grab the canvas and thing we draw on
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Draw a black square on the whole canvas
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);`)), /* @__PURE__ */ v("p", null, "And an ", /* @__PURE__ */ v("code", null, `index.html`), " template."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-html"
    }, `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>A Canvas Game</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
        <style>
            body {
                    margin: 0;
                    overflow: hidden;
            }
            canvas {
                position: absolute;
                top: 0px;
                left: 0px;
            }
        </style>
    </head>
    <body>
        <canvas id="gameCanvas">
            <h1>This game doesn't work without an HTML canvas :(</h1>
        </canvas>
    </body>
</html>`)), /* @__PURE__ */ v("p", null, "Add some scripts to pull up your webserver to your ", /* @__PURE__ */ v("code", null, `package.json`), ":"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-json"
    }, `"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server --open"
},`)), /* @__PURE__ */ v("p", null, "And now you can ", /* @__PURE__ */ v("code", null, `npm start`), " and webpack will pull up your web browser and draw a black box over the canvas like this:"), /* @__PURE__ */ v("canvas", {
      id: "gameCanvas"
    }, /* @__PURE__ */ v("h1", null, "This game doesn't work without an HTML canvas :(")), /* @__PURE__ */ v("br", null), "It's not much yet, but it'll become something soon... You're ready for ", /* @__PURE__ */ v("a", {
      href: "./part-2"
    }, "Part 2"), "!");
  }
});

// src/generated/posts/coding/canvas-game-engine/part-2.md.jsx
var part_2_md_exports = {};
__export(part_2_md_exports, {
  default: () => part_2_md_default
});
var part_2_md_default;
var init_part_2_md = __esm({
  "src/generated/posts/coding/canvas-game-engine/part-2.md.jsx"() {
    init_preact();
    part_2_md_default = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("h2", {
      id: "where-we-were"
    }, "Where we were"), /* @__PURE__ */ v("p", null, "We left off with a canvas that looked like this:"), /* @__PURE__ */ v("canvas", {
      id: "gameCanvasOld"
    }, /* @__PURE__ */ v("h1", null, "This game doesn't work without an HTML canvas :(")), /* @__PURE__ */ v("h1", {
      id: "where-were-going"
    }, "Where we're going"), /* @__PURE__ */ v("p", null, "It's not very exciting (or interactive), so let's start spicing it up a bit. By the end, we should have a nicely sived canvas with a white box moving across the screen to the WASD keys like this:"), /* @__PURE__ */ v("canvas", {
      id: "gameCanvas"
    }, /* @__PURE__ */ v("h1", null, "This game doesn't work without an HTML canvas :(")), /* @__PURE__ */ v("p", null, "Let's get started!!"), /* @__PURE__ */ v("h2", {
      id: "resizing-the-canvas"
    }, "Resizing the canvas"), /* @__PURE__ */ v("p", null, "I'm assuming we want a fullscreen canvas game. In that case, write a helper function to resize the canvas whenever the window size changes like this:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `const resize = canvas => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};`)), /* @__PURE__ */ v("p", null, "Now you just have to call it once and register it for when the window changes size:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `resize(canvas);
window.addEventListener('resize', () => resize(canvas));`)), /* @__PURE__ */ v("h2", {
      id: "rendering-a-player"
    }, "Rendering a player"), /* @__PURE__ */ v("p", null, "Our player will just be a white box for now. Let's create a ", /* @__PURE__ */ v("code", null, `Player`), " class that also houses an X and Y variable for its location."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `class Player {
    constructor() {
        this.x = 50;
        this.y = 50;
    }

    draw(c) {
        c.fillStyle = "white";
        c.fillRect(this.x, this.y, 50, 50); 
    }
}`)), /* @__PURE__ */ v("p", null, "Now we can make a new player and draw it."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `// Make game objects
const gameObjects = {
    player: new Player()
}

// Clear current canvas
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height); 

// Draw all objects
Object.values(gameObjects).forEach(obj => obj.draw(context));`)), /* @__PURE__ */ v("h2", {
      id: "moving-the-player"
    }, "Moving the player"), /* @__PURE__ */ v("p", null, "Now comes the hardest concept to understand for any game engine -- the concept of time. We need our game to draw a certain number of times per second. And we need some logic to check if certain keys are pressed (WASD) on each frame to move the player. Luckily, ", /* @__PURE__ */ v("a", {
      href: "mdn/link"
    }, "MDN has us covered on game loops"), "."), /* @__PURE__ */ v("p", null, "Our final drawing code should be something like this:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `function main() {
    // Clear current canvas
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height); 

    // Draw all objects
    Object.values(gameObjects).forEach(obj => obj.draw(context));

    // Do this loop again
    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);`)), /* @__PURE__ */ v("p", null, "BUT we still need something to change the players' X and Y. For this we'll need some sloppy key handlers above our ", /* @__PURE__ */ v("code", null, `function main()`), "..."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `// Capture key input we care about
const input = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false
};
window.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        input.LEFT = true;
    } else if (event.keyCode === 38) {
        input.UP = true;
    } else if (event.keyCode === 39) {
        input.RIGHT = true;
    } else if (event.keyCode === 40) {
        input.DOWN = true;
    }
});
window.addEventListener('keyup', event => {
    if (event.keyCode === 37) {
        input.LEFT = false;
    } else if (event.keyCode === 38) {
        input.UP = false;
    } else if (event.keyCode === 39) {
        input.RIGHT = false;
    } else if (event.keyCode === 40) {
        input.DOWN = false;
    }
});`)), /* @__PURE__ */ v("p", null, "Now we need to pass this to each game object in our ", /* @__PURE__ */ v("code", null, `main`), " function:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `function main() {
    // Update all objects with input
    Object.values(gameObjects).forEach(obj => obj.update(input));

    // ...Drawing logic remains
}`)), /* @__PURE__ */ v("p", null, "And finally, our ", /* @__PURE__ */ v("code", null, `Player`), " needs an ", /* @__PURE__ */ v("code", null, `update`), " function!"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", null, `class Player {
    update(input) {
        if (input.UP) {
            this.y -= 4;
        }
        if (input.DOWN) {
            this.y += 4;
        }
        if (input.RIGHT) {
            this.x += 4;
        }
        if (input.LEFT) {
            this.x -= 4;
        }
    }
}`)), /* @__PURE__ */ v("p", null, "And, voila! The start of a game:"), /* @__PURE__ */ v("canvas", {
      id: "gameCanvas2"
    }, /* @__PURE__ */ v("h1", null, "This game doesn't work without an HTML canvas :(")));
  }
});

// src/generated/posts/coding/command-line/index.md.jsx
var index_md_exports2 = {};
__export(index_md_exports2, {
  default: () => index_md_default2
});
var index_md_default2;
var init_index_md2 = __esm({
  "src/generated/posts/coding/command-line/index.md.jsx"() {
    init_preact();
    index_md_default2 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "For many, the command line is a scary prompt that reminds people of old computers that were hard to use."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./old-terminal.jpg",
      alt: "Old CRT Terminal"
    }), /* @__PURE__ */ v("figcaption", null, "Ooh, scary.")), /* @__PURE__ */ v("p", null, `For others like me, it's the most powerful tool to control your operating system, whether it be Windows, Mac OSX, or Linux. Let's learn what a command line can do for you! To follow along, open a program on your computer called "terminal" or "cmd".`), /* @__PURE__ */ v("h3", {
      id: "echo-hello"
    }, "Echo... hello!"), /* @__PURE__ */ v("p", null, "Once you've started a terminal, try the ", /* @__PURE__ */ v("code", null, `echo`), " command! It simply prints the text you pass it."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> echo "Hello!"
Hello!`)), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./you-had-me-at-hello.gif",
      alt: "You had me at hello"
    }), /* @__PURE__ */ v("figcaption", null, "you had me at echo")), /* @__PURE__ */ v("h2", {
      id: "the-file-system"
    }, "The file system"), /* @__PURE__ */ v("p", null, "You have files on your computer than contain everything from your photos to what's needed to boot your computer."), /* @__PURE__ */ v("h3", {
      id: "listing-files"
    }, "Listing files"), /* @__PURE__ */ v("p", null, "To see some of those files, list them using ", /* @__PURE__ */ v("code", null, `ls`), "."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> ls
Documents   Pictures   snap   Templates 
Desktop     Downloads  go     Music`)), /* @__PURE__ */ v("p", null, "Actually, your file system is a hierarchy of folders. You can see where you are in that hierarchy using ", /* @__PURE__ */ v("code", null, `pwd`), " (print working directory)."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> pwd
/home/thesm`)), /* @__PURE__ */ v("p", null, "My terminal started me out in my home directory. To change directories I use ", /* @__PURE__ */ v("code", null, `cd`), " (change directory)."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cd /home
> pwd
/home`)), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cd /
> pwd
/`)), /* @__PURE__ */ v("p", null, "To go back to my home directory, I can use the alias ", /* @__PURE__ */ v("code", null, `~`), " which resolves to ", /* @__PURE__ */ v("code", null, `/home/thesm`), " for me."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cd ~
> pwd
/home/thesm`)), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./dont-fear-the-reaper.jpg",
      alt: "Don't Fear the Reaper"
    }), /* @__PURE__ */ v("figcaption", null, "(Don't fear) the computer.")), /* @__PURE__ */ v("p", null, "Now let me introduce you to the magic of tab completion. Sometimes, you don't know where you want to ", /* @__PURE__ */ v("code", null, `cd`), " to. In those cases, press the Tab key after typing ", /* @__PURE__ */ v("code", null, `cd `), " to get a list of possibilities."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./you-complete-me.gif",
      alt: "You complete me"
    }), /* @__PURE__ */ v("figcaption", null, "Tabs complete me.")), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cd <Press Tab Key>
bundle/         .npm/           .cache/
.cups/          Pictures/       .dbus/
Desktop/        Public/         Documents/
Downloads/      src/            .gnupg/
go/             Templates/      .IdeaIC2018.3/
Videos/         .vim/`)), /* @__PURE__ */ v("p", null, "As you can see, I have a lot of folders sitting around. You can start typing and then use tab completion to filter them down even more."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cd D
Desktop/   Documents/ Downloads/`)), /* @__PURE__ */ v("p", null, "By the way, tab completion works with most commands, so please do use it!"), /* @__PURE__ */ v("h3", {
      id: "moving-files"
    }, "Moving files"), /* @__PURE__ */ v("p", null, "Files can be copied and moved around to suit your needs. First, let's create an empty directory using ", /* @__PURE__ */ v("code", null, `mkdir`), " to safely play inside and then ", /* @__PURE__ */ v("code", null, `cd`), " into it."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> mkdir fun
> cd fun`)), /* @__PURE__ */ v("p", null, `Now, let's make a file that says "Hello!".`), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> echo "Hello!" > hello.txt`)), /* @__PURE__ */ v("p", null, 'This command takes the output of the first command (which is "Hello!") and redirects it to a file named hello.txt.'), /* @__PURE__ */ v("p", null, "Now let's copy it using ", /* @__PURE__ */ v("code", null, `cp`), "."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cp hello.txt hello2.txt`)), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./copy-this.png",
      alt: "Copy this"
    }), /* @__PURE__ */ v("img", {
      src: "./pasta-that.png",
      alt: "Pasta that"
    }), /* @__PURE__ */ v("figcaption", null, "Copy hello.txt and pasta hello2.txt")), /* @__PURE__ */ v("p", null, "And let's rename the original using ", /* @__PURE__ */ v("code", null, `mv`), "."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> mv hello.txt goodbye.txt`)), /* @__PURE__ */ v("p", null, "Let's see the result of our work using ", /* @__PURE__ */ v("code", null, `ls`), "!"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> ls
goodbye.txt  hello2.txt`)), /* @__PURE__ */ v("p", null, "Not exactly exciting yet, but we're learning!"), /* @__PURE__ */ v("h3", {
      id: "reading-files"
    }, "Reading files"), /* @__PURE__ */ v("p", null, "To read a file's contents, you can use ", /* @__PURE__ */ v("code", null, `less`), ", ", /* @__PURE__ */ v("code", null, `more`), ", or my favorite, ", /* @__PURE__ */ v("code", null, `cat`), " (which means concatenate)."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./nyan-cat.jpg",
      alt: "Nyan cat"
    }), /* @__PURE__ */ v("figcaption", null, "Cats bring people together.")), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cat hello2.txt
Hello!`)), /* @__PURE__ */ v("p", null, "If you decided to use ", /* @__PURE__ */ v("code", null, `less`), ", to exit it just press q."), /* @__PURE__ */ v("h3", {
      id: "manipulating-files"
    }, "Manipulating files"), /* @__PURE__ */ v("p", null, 'Now comes the fun part. Lets say we want to overwrite goodbye.txt to contain "Goodbye!". Like before, we do:'), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> echo "Goodbye!" > goodbye.txt`)), /* @__PURE__ */ v("p", null, `Now let's say we want to make a new file that says "Hello! Goodbye!". `, /* @__PURE__ */ v("code", null, `cat`), " takes care of that too."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cat hello2.txt goodbye.txt
Hello!
Goodbye!`)), /* @__PURE__ */ v("p", null, "To make it a file, we just have to redirect the output using ", /* @__PURE__ */ v("code", null, `>`), "."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> cat hello2.txt goodbye.txt > hello-goodbye.txt`)), /* @__PURE__ */ v("p", null, "Let's say we want to copy all our files into a new directory. Let's make a directory like we did before using ", /* @__PURE__ */ v("code", null, `mkdir`), ", and then use a fancy glob operator called * to copy all the files at once that end in ", /* @__PURE__ */ v("code", null, `.txt`), "."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> mkdir copies
> cp *.txt copies`)), /* @__PURE__ */ v("p", null, "Hooray, we can manipulate our file system!"), /* @__PURE__ */ v("h2", {
      id: "processes"
    }, "Processes"), /* @__PURE__ */ v("p", null, "All those commands we ran (and all programs you run!) are actually creating processes to do work for them, which your operating system also manages. To see running process, use ", /* @__PURE__ */ v("code", null, `ps`), "."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> ps
  PID TTY          TIME CMD
23093 pts/1    00:00:00 bash
25326 pts/1    00:00:00 ps`)), /* @__PURE__ */ v("p", null, "PID stands for Process ID. Every process has one. TTY is the terminal the command is running on. Time is the amount of CPU time it's taken, and CMD is the command that's being run."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> top
top - 18:39:16 up  1:12,  1 user,  load average: 0.20, 0.30, 0.27
Tasks: 405 total,   1 running, 315 sleeping,   0 stopped,   0 zombie
%Cpu(s):  3.8 us,  1.6 sy,  0.0 ni, 94.5 id,  0.0 wa,  0.0 hi,  0.1 si,  0.0 st
KiB Mem : 16441856 total,  7211060 free,  3671524 used,  5559272 buff/cache
KiB Swap: 31998972 total, 31998972 free,        0 used. 12522024 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
20097 thesm     20   0 2126196 416264 111964 S  23.8  2.5   5:58.58 code
18850 thesm     20   0 1522628 144840  91992 S  11.9  0.9   2:17.64 code
 2347 thesm     20   0 4679016 323000 101520 S   8.3  2.0   3:25.06 gnome-shell
18902 thesm     20   0  692688 147168  81872 S   7.3  0.9   2:15.90 code
 2215 root      20   0  451816 111980  81116 S   6.0  0.7   1:29.56 Xorg
 1387 root     -51   0       0      0      0 S   1.7  0.0   1:11.42 irq/77-nvidia
 5277 thesm     20   0  362000   8448   6416 S   0.7  0.1   0:20.43 ibus-daemon
25343 thesm     20   0   51452   4228   3468 R   0.7  0.0   0:00.11 top
    1 root      20   0  225836   9704   6812 S   0.3  0.1   0:07.28 systemd
21070 thesm     20   0 2563208 343980 128284 S   0.3  2.1   0:17.76 thunderbird`)), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("code", null, `top`), " gives a slightly more interesting view. Press ", /* @__PURE__ */ v("code", null, `q`), " to quit it, just like ", /* @__PURE__ */ v("code", null, `less`), "."), /* @__PURE__ */ v("p", null, "You can create processes by running more programs, kill them by PID using ", /* @__PURE__ */ v("code", null, `kill`), ", and even fork existing programs so two copies of them run at once. I won't go in-depth now, but know they are just files being executed."), /* @__PURE__ */ v("h2", {
      id: "man-pages"
    }, "Man pages"), /* @__PURE__ */ v("p", null, "All of these commands have much more to them. You can pass programs flags (like ", /* @__PURE__ */ v("code", null, `cp -r`), " to ", /* @__PURE__ */ v("code", null, `r`), "ecursively copy a directory), or you can pipe the output of one command to be the input of another using ", /* @__PURE__ */ v("code", null, `|`), " instead of ", /* @__PURE__ */ v("code", null, `>`), "."), /* @__PURE__ */ v("p", null, "Commands are just files sitting in your ", /* @__PURE__ */ v("code", null, `$PATH`), " that happen to be executable. Check your path using ", /* @__PURE__ */ v("code", null, `echo`), ":"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> echo $PATH
/usr/sbin:/usr/bin:/sbin:/bin`)), /* @__PURE__ */ v("p", null, "Try ", /* @__PURE__ */ v("code", null, `ls`), " on things in between the colons to see what programs you can run!"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> ls /usr/bin`)), /* @__PURE__ */ v("p", null, "There's probably a lot of output, so pipe it through less to read it slower! Use the arrow keys to scroll."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> ls /usr/bin | less`)), /* @__PURE__ */ v("p", null, "You can look up the manual page for commands using ", /* @__PURE__ */ v("code", null, `man`), " to learn all about them."), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-bash"
    }, `> man ls

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List information about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..`)), /* @__PURE__ */ v("p", null, "Go out and learn about some of my favorite commands!"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `grep`), ": Find strings in text"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `gcc`), ": Compile C programs"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `vim`), ": A wonky text editor that saves keystrokes"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `which`), ": A program to print the path to other programs in $PATH"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `diff`), ": Find differences between files"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `readelf`), ": Show information about executable files"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `python`), ": Write programs in a simple language"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `printf`), ": Like ", /* @__PURE__ */ v("code", null, `echo`), " but better"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `tee`), ": Write to standard output (your terminal...) and another file at the same time"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("code", null, `zip`), ": Add files to an archive")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./narnia-door.jpg",
      alt: "Narnia door"
    }), /* @__PURE__ */ v("figcaption", null, "The wardrobe is open...")));
  }
});

// src/generated/posts/coding/this-site/v1/index.md.jsx
var index_md_exports3 = {};
__export(index_md_exports3, {
  default: () => index_md_default3
});
var index_md_default3;
var init_index_md3 = __esm({
  "src/generated/posts/coding/this-site/v1/index.md.jsx"() {
    init_preact();
    index_md_default3 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "You probably don't notice, but this site is nearly as fast as it can possibly be! I did that because I value your data bill and places which are just now getting emerging internet. I'm also a minimalist."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./road-runner.jpg",
      alt: "Road runner"
    }), /* @__PURE__ */ v("figcaption", null, "This is exactly how my site gets delivered to you.")), /* @__PURE__ */ v("p", null, "I didn't want to make any compromises on my developer experience, though. Writing should be fun and easy (this is a creative outlet, after all!) and deployment should only take one click. That was my main gripe with my the last version of this site."), /* @__PURE__ */ v("p", null, "Enter ", /* @__PURE__ */ v("a", {
      href: "https://gatsbyjs.org"
    }, "Gatsby"), ", a framework to pipeline data (like ", /* @__PURE__ */ v("a", {
      href: "https://en.wikipedia.org/wiki/Markdown"
    }, "Markdown"), ") onto webpages using templates. However, the 200kb Gatsby weighs in at for Hello World is just to big compared to the 10kb for my last Jekyll blog. On emerging 3G that's still 2-3 seconds to load 200kb for what is maybe only 5kb of content!"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./gatsby-logo.jpg",
      alt: "Gatsby logo"
    }), /* @__PURE__ */ v("figcaption", null, /* @__PURE__ */ v("a", {
      href: "https://www.gatsbyjs.org"
    }, "GatsbyJS"), " is a nice way to write modern React+JSX without compromising much on SEO and speed.")), /* @__PURE__ */ v("p", null, "I didn't just blindly adopt Gatsby, though. I value understanding how a system works completely, and there were too many things I didn't understand. I wanted to NOT include JS on pages that didn't need them and to use ", /* @__PURE__ */ v("a", {
      href: "https://preactjs.com"
    }, "Preact"), " to make the ones that needed JS (like my ", /* @__PURE__ */ v("a", {
      href: "/posts/money/early-retirement"
    }, "retirement projector"), ") even lighter. No one else seems to want that. Everyone else seems to be okay with the bloat."), /* @__PURE__ */ v("p", null, "I wanted to optimize that, so I got down and dirty for two weeks and ripped Gatsby apart to include the bare minimum needed to render. The result is what you now see."), /* @__PURE__ */ v("p", null, "This page is proof that with some webpack customization and learning Gatsby internals, it's possible to make tiny static pages IN REACT that don't even ship React.js to the browser! It's what I've been looking for since it's the most elegant and customizable way to control content I ship to your browser. I understand how every line of HTML, CSS, and Javascript got there (preferably without Javascript), and that makes me want to write more content with higher quality, which should be the whole point of the internet."), /* @__PURE__ */ v("p", null, "If you're into the technical aspects, check out the section below!"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "show-me-the-source-yoda.jpg",
      alt: "Show me the source"
    }), /* @__PURE__ */ v("figcaption", null, "Use the source, Luke!")), /* @__PURE__ */ v("h1", {
      id: "how-i-made-the-site"
    }, "How I Made the Site"), /* @__PURE__ */ v("h3", {
      id: "gatsby-internals-i-tore-apart"
    }, "Gatsby Internals I Tore Apart"), /* @__PURE__ */ v("p", null, "Everyone loves a great tear. Gatsby's source was actually pretty clean and focused a lot on browser and cross-platform compatibility."), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/app.js"
    }, "app.js"), " (webpack entry point for development)"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/production-app.js"
    }, "production-app.js"), " (webpack entry point for production)"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/static-entry.js#L79"
    }, "static-entry.js"), " (webpack entry point for building html)"), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/gatsby-node.js#L87"
    }, "gatsby-node.js"), " (webpack config overriding)")), /* @__PURE__ */ v("p", null, "This site is all open source, take a look at the ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com"
    }, "README.md"), " where I explain all of the above files!"), /* @__PURE__ */ v("p", null, "I've already forgotten a lot of what I did a month ago, but look through the ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/commits/master?after=b06392c74dca5c55b9c25bfdbd17a41b4f025c26+34"
    }, "early commit history"), " to get the gist of it!"), /* @__PURE__ */ v("h3", {
      id: "cool-features"
    }, "Cool Features"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "React to build interactive and non-interactive pages."), /* @__PURE__ */ v("li", null, "Bulma as my CSS framework (I use SASS to just get what I need)."), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark"
    }, "Gatsby-transformer-remark"), " which uses ", /* @__PURE__ */ v("a", {
      href: "https://remark.js.org"
    }, "remark"), " on ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/tree/master/src/posts"
    }, "my Markdown files."), " I'm ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/posts/coding/this-site.md"
    }, "writing in Markdown right now,"), " and OH BOY it's so much more fun than html!!", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://remark.js.org"
    }, "Remark"), " a part of ", /* @__PURE__ */ v("a", {
      href: "https://unified.js.org"
    }, "unified"), " which is an extremely cool way to parse text into nearly any form you want (like html)."))), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images"
    }, "Gatsby-remark-images"), " to resize all the images to reasonable sizes + add a container."), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest"
    }, "Gatsby-remark-manifest"), " for the mobile navbar color and resizing my favicon."), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/nfl/react-helmet"
    }, "React-helmet"), " to set ", /* @__PURE__ */ v("code", null, `<head>`), " per-page for things like the title. It's made by the NFL, who knew.")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./football.jpg",
      alt: "Getting tackled"
    }), /* @__PURE__ */ v("figcaption", null, "React-helmet is a cool name coming from the NFL. I like American football.")), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("a", {
      href: "https://preactjs.com/"
    }, "Preact"), " because I don't need everything in React and I value my page size very highly. SPA frameworks are kinda a must-have nowadays for interactive pages."), /* @__PURE__ */ v("li", null, "To update the site, I just need to push and ", /* @__PURE__ */ v("a", {
      href: "https://circleci.com/blog/deploying-documentation-to-github-pages-with-continuous-integration"
    }, "CircleCI"), " takes care of the rest for me. How cool is that? ")));
  }
});

// src/components/logo.jsx
var Logo;
var init_logo = __esm({
  "src/components/logo.jsx"() {
    init_preact();
    Logo = class extends _ {
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
      render({background, fill, border, fg, text}, {i: i3}) {
        return /* @__PURE__ */ v("svg", {
          id: "preact-logo",
          width: "100%",
          viewBox: "-256 -286 1820 572",
          style: {background}
        }, /* @__PURE__ */ v("path", {
          style: `transition:all 1s ease; transform:rotate(${Math.floor(i3 / 60 / 10) * 60}deg);`,
          fill,
          stroke: border,
          "stroke-width": border && "16px",
          d: "M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z"
        }), this.renderEllipse(fg, 52, i3), this.renderEllipse(fg, -52, -0.7 * i3), /* @__PURE__ */ v("circle", {
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
  }
});

// src/generated/posts/coding/this-site/v2/index.md.jsx
var index_md_exports4 = {};
__export(index_md_exports4, {
  default: () => index_md_default4
});
var index_md_default4;
var init_index_md4 = __esm({
  "src/generated/posts/coding/this-site/v2/index.md.jsx"() {
    init_preact();
    init_logo();
    index_md_default4 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("h1", {
      id: "rip-gatsby"
    }, "RIP Gatsby"), /* @__PURE__ */ v("p", null, "I ditched Gatsby."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "gatsby-gets-shot.jpg",
      alt: "Death to gatsby"
    }), /* @__PURE__ */ v("figcaption", null, "Gatsby is dead.")), /* @__PURE__ */ v("p", null, "I decided to ditch Gatsby because after ", /* @__PURE__ */ v("a", {
      href: "https://github.com/gatsbyjs/gatsby/pull/14889"
    }, "an update to how Gatsby's resources were loaded,"), " my site wouldn't build anymore.  I could just use an old version of Gatsby forever, but even with the old version things were breaking because of dependencies of Gatsby's dependencies in its ", /* @__PURE__ */ v("a", {
      href: "https://github.com/gatsbyjs/gatsby/blob/master/package.json"
    }, "package.json"), " (welcome to the NPM ecosystem). I didn't want to my entire project's to hinge on a single ", /* @__PURE__ */ v("code", null, `package-lock.json`), ", so I decided to write my own framework."), /* @__PURE__ */ v("h2", {
      id: "death-to-webpack-too"
    }, "Death to Webpack, too"), /* @__PURE__ */ v("p", null, "Webpack is a little black box everyone depends on."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "webpack.png",
      alt: "Webpack"
    }), /* @__PURE__ */ v("figcaption", null, "Most web developers use this. Most haven't the slightest idea how it works.")), /* @__PURE__ */ v("p", null, "I like Webpack, so I experimented with building my site using ", /* @__PURE__ */ v("a", {
      href: "https://github.com/GoogleChromeLabs/prerender-loader"
    }, "prerender-loader"), " or ", /* @__PURE__ */ v("a", {
      href: "https://github.com/chrisvfritz/prerender-spa-plugin"
    }, "prerender-SPA-plugin"), " paired with ", /* @__PURE__ */ v("a", {
      href: "https://github.com/preactjs/preact-router"
    }, "Preact-router"), ". I never want to actually use a router since I have to update it every post, but it was bearable and I could dynamically generate routes based on ", /* @__PURE__ */ v("a", {
      href: "https://github.com/isaacs/node-glob"
    }, "globbing"), " my local directories."), /* @__PURE__ */ v("p", null, "There were a lot of small annoying problems I ran into with prerendering (like needing React AND Preact). The real problem ended up being I had to use the same bloated JS to generate the static HTML as I bundled in the page. This includes things I never want to ship in my bundle like ", /* @__PURE__ */ v("a", {
      href: "https://github.com/download/preact-helmet"
    }, "preact-helmet"), ". There was the issue of dynamically templating some pages to NOT include JS..."), /* @__PURE__ */ v("p", null, "Suffice it to say it got complicated FAST (I'd have to run webpack twice -- once to prerender, and once to bundle) so I gave up on a Webpack approach. I briefly checked out ", /* @__PURE__ */ v("a", {
      href: "https://github.com/parcel-bundler/parcel"
    }, "Parcel"), " but it seems that the ", /* @__PURE__ */ v("em", null, "approach"), " is flawed more than the tools. Bundlers are made for SPAs."), /* @__PURE__ */ v("h2", {
      id: "what-i-actually-want"
    }, "What I actually want"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v(Logo, {
      background: "#673ab8",
      fill: "white",
      fg: "#673ab8",
      text: "white"
    }), /* @__PURE__ */ v("figcaption", null, "I just want to use Preact as much as I can.")), /* @__PURE__ */ v("p", null, "Since my pages don't include JS, I really just want a templating framework, like ", /* @__PURE__ */ v("a", {
      href: "https://hexo.io"
    }, "hexo"), " or ", /* @__PURE__ */ v("a", {
      href: "https://gohugo.io"
    }, "hugo"), " to render my site's HTML. However, I want to write React components in JSX instead of EJS or ", /* @__PURE__ */ v("code", null, `%`), "-style PHP templates. For example, I already had the ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/templates/post.js"
    }, "post template"), ", ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/components/article-preview.js"
    }, "article previews"), ", and the ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/components/breadcrumb.js"
    }, "breadcrumb"), " written in React,."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `{posts.map(post => ArticlePreview(post))}`)), /* @__PURE__ */ v("figcaption", null, "This is all I write for Article previews on navigation pages. No copy/pasting and updating per-post.")), /* @__PURE__ */ v("p", null, "Using React as my templating engine makes it easy for when I want to write JS for things like my ", /* @__PURE__ */ v("a", {
      href: "/posts/money/early-retirement"
    }, "retirement calculator"), ". I can just keep using React."), /* @__PURE__ */ v("h1", {
      id: "back-to-the-basics"
    }, "Back to the basics"), /* @__PURE__ */ v("p", null, "I needed to render my components to HTML using something like ", /* @__PURE__ */ v("a", {
      href: "https://github.com/preactjs/preact-render-to-string"
    }, "preact-render-to-string"), ". Rendering React components per-markdown file seems like such a simple use case, yet no other frameworks seemed to have me covered."), /* @__PURE__ */ v("p", null, "To get started using ", /* @__PURE__ */ v("code", null, `preact-render-to-string`), ", I needed a bit of hackery using ", /* @__PURE__ */ v("a", {
      href: "https://babeljs.io/docs/en/babel-register"
    }, "@babel/register"), ":"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `const path = require('path')
const fs = require('fs-extra')
const mime = require('mime')
const render = require('preact-render-to-string')
const { h } = require('preact')
// Hack to hijack all require()s and babel them
require('@babel/register')({
  ignore: [/node_modules/],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }, ],
    ['@babel/plugin-proposal-class-properties']
  ],
  presets: ['@babel/preset-env']
})

// All further \`require()\`s go through Babel (so they can 
// include JSX, class properties, and \`import\` statements)
const { myComponent } = require('some-component');
console.log(render(h(myComponent)))`)), /* @__PURE__ */ v("p", null, "After figuring out ", /* @__PURE__ */ v("a", {
      href: "https://github.com/preactjs/preact-render-to-string"
    }, "preact-render-to-string"), " was something I could use with JSX without having to have extra intermediate files, I was SOLD!!"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "shut-up-and-take-my-money.jpg",
      alt: "Take my money"
    }), /* @__PURE__ */ v("figcaption", null, "Shut up and take my soul.")), /* @__PURE__ */ v("h2", {
      id: "lets-commit-to-this-renderer"
    }, "Let's commit to this renderer"), /* @__PURE__ */ v("p", null, "I need to extract some metadata from Markdown files (like the post's title and date) to include in my templated site components (like the ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/templates/post.js"
    }, "post template"), "). ", /* @__PURE__ */ v("a", {
      href: "https://github.com/unifiedjs/unified"
    }, "Unified"), " is THE natural choice for this in NodeJS land."), /* @__PURE__ */ v("h3", {
      id: "enter-mdx"
    }, "Enter: MDX"), /* @__PURE__ */ v("p", null, "I also wanted to be able to include React components in my Markdown files so dynamic components can be statically rendered like the ", /* @__PURE__ */ v("a", {
      href: "/posts/money/early-retirement"
    }, "retirement calculator"), ". Enter ", /* @__PURE__ */ v("a", {
      href: "https://mdxjs.com/"
    }, "MDX"), ", which has a plugin for Unified called ", /* @__PURE__ */ v("a", {
      href: "https://github.com/mdx-js/mdx/tree/master/packages/remark-mdx"
    }, "remark-mdx"), "."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "138",
      height: "57"
    }, /* @__PURE__ */ v("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, /* @__PURE__ */ v("rect", {
      width: "136.5",
      height: "55.5",
      x: ".75",
      y: ".75",
      fill: "#FFF",
      stroke: "#EAEAEA",
      "stroke-width": "1.5",
      rx: "4.5"
    }), /* @__PURE__ */ v("g", {
      stroke: "#000",
      "stroke-width": "6"
    }, /* @__PURE__ */ v("path", {
      "stroke-linecap": "square",
      d: "M70.5 36V13.836"
    }), /* @__PURE__ */ v("path", {
      d: "M57 27.239L70.611 40.85l13.415-13.414"
    })), /* @__PURE__ */ v("path", {
      stroke: "#000",
      "stroke-width": "6",
      d: "M16.45 43.928V18.964L30.3 32.815l13.932-13.931v24.865"
    }), /* @__PURE__ */ v("g", {
      stroke: "#F9AC00",
      "stroke-width": "6"
    }, /* @__PURE__ */ v("path", {
      d: "M122.439 41.268L93.17 12M93.561 41.268L122.83 12"
    })))), /* @__PURE__ */ v("figcaption", null, "Pretty neat idea. Markdown -> JSX.")), /* @__PURE__ */ v("p", null, "I created a Unified pipeline that used ", /* @__PURE__ */ v("a", {
      href: "https://github.com/mdx-js/mdx/tree/master/packages/remark-mdx"
    }, "remark-mdx"), " like this:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `const markdownPipe = require('unified')()
    .use(require('remark-parse'))
    // Frontmatter
    .use(require('remark-frontmatter'))
    .use(require('remark-parse-yaml'))
    .use(() => (ast, file) => {
        visit(ast, 'yaml', item => {
            file.data.frontmatter = item.data.parsedValue
            const { frontmatter } = file.data
            frontmatter.dateShort = moment(frontmatter.date).format('YYYY-MM-DD')
            frontmatter.dateLong = moment(frontmatter.date).format('MMMM DD, YYYY')
        });
    })
    .use(() => (ast, file) => {
        let { frontmatter } = file.data
        let excerpt = ''
        visit(ast, 'text', item => {
            excerpt += item.value + ' '
        })

        frontmatter.excerpt = excerpt.substr(0, 150).trim()
        // Assume 300wpm reading speed
        // Round to nearest .5
        frontmatter.timeToRead = Math.round(excerpt.split(' ').length / 300 * 2) / 2
    })
    // Render to JSX
    .use(require('remark-mdx'))
    .use(require('./mdx-ast-to-mdx-hast'))
    .use(require('./mdx-hast-to-jsx'))`)), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("a", {
      href: "https://github.com/mdx-js/mdx/tree/master/packages/mdx"
    }, "MDX's default way of rendering to JSX"), " wasn't exactly what I wanted, so I wrote my own ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/scripts/mdx-ast-to-mdx-hast.js"
    }, "ast-to-mdx-hast"), " and ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/scripts/mdx-hast-to-jsx.js"
    }, "mdx-hast-to-jsx"), " built on top of ", /* @__PURE__ */ v("a", {
      href: "https://github.com/mdx-js/mdx/tree/master/packages/remark-mdx"
    }, "remark-mdx"), "."), /* @__PURE__ */ v("p", null, "Now for each one of my Markdown files, I have a ", /* @__PURE__ */ v("code", null, `.md.js`), " file that looks like this:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `import { h, Fragment } from 'preact'

export default () => <Fragment>
  {/* Content here */}
</Fragment>;`)), /* @__PURE__ */ v("p", null, "Now I just ", /* @__PURE__ */ v("code", null, `require()`), " that file and use ", /* @__PURE__ */ v("a", {
      href: "https://github.com/preactjs/preact-render-to-string"
    }, "preact-render-to-string"), " on it! I also collect some metadata on all the posts rendered in order to build index pages that list all the posts."), /* @__PURE__ */ v("h3", {
      id: "but-you-need-some-javascript"
    }, "But you need ", /* @__PURE__ */ v("em", null, "some"), " JavaScript"), /* @__PURE__ */ v("p", null, "For interactive pages, I do need some JavaScript. Rollup played the role of Babelling, bundling, and minifying JS files like this:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `import { h, render } from 'preact'
import { Logo } from '../../../src/components/logo'

const root = document.getElementById('preact-logo')
render(h(Logo), root, root)`)), /* @__PURE__ */ v("p", null, "The config is a little overly verbose, but it's not terrible:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `rollup.rollup({
  input: file,
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
}).then(bundle => bundle.generate({
    format: 'iife', // immediately invoked function expression
    name: slug.split('/').pop().replace(/-/g, ''), // global variable name representing your bundle
    compact: true,
  }).then(({ output }) => console.log(output[0].code))
}))`)), /* @__PURE__ */ v("p", null, "The more annoying part is injecting the CSS and JS file names dynamically into the HTML templates. I just kept track of where I wrote out the CSS and JS files. For development, I don't bother changing the filename to include a hash because that's a lot of work."), /* @__PURE__ */ v("h3", {
      id: "orchestrating-it-all"
    }, "Orchestrating it all"), /* @__PURE__ */ v("p", null, "I used to have a single NodeJS script orchestrating all the tools, but I just decided to use ", /* @__PURE__ */ v("a", {
      href: "https://gulpjs.com/"
    }, "Gulp"), ", which is a nice task runner to read and write files at certain paths. The default task of ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/gulpfile.js"
    }, "my Gulpfile"), ":"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Creates assets with no dependencies: parallel(copyStaticAssets, copyPostAssets, css, js)", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Populates cssFileNames = [] and jsFileNames = "))), /* @__PURE__ */ v("li", null, "Renders posts (and populates posts = ", " to pass to index pages)"), /* @__PURE__ */ v("li", null, "Renders Pages"), /* @__PURE__ */ v("li", null, "Cleans up a file that all posts that are drafts and shouldn't be rendered get pointed to")), /* @__PURE__ */ v("h4", {
      id: "creating-the-start-task"
    }, "Creating the start task"), /* @__PURE__ */ v("p", null, "This is what Gulp made easy for me since I didn't use a pre-built framework with nice hot-reloading for me. Gulp wraps ", /* @__PURE__ */ v("a", {
      href: "https://github.com/paulmillr/chokidar"
    }, "chokidar's"), " ", /* @__PURE__ */ v("code", null, `watch`), " function:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `function start() {
    watch(paths.postAssets.src, { ignoreInitial: false }, copyPostAssets)
    watch(paths.staticAssets.src, { ignoreInitial: false }, copyStaticAssets)

    // TODO: parallel css/js
    css()
        .on('end', () => js() // TODO: rollup.watch
            .on('end', () => {
                watch(paths.sass.src, css)
                watch(jsWatchFiles, js)
                watch(paths.posts.src, { ignoreInitial: false }, series(renderPosts, renderPages))
                watch(paths.pages.src, { ignoreInitial: false }, renderPages)
            })
        )
}`)), /* @__PURE__ */ v("p", null, "I do still have to reload my page manually after my site rebuilds, but I could look into using ", /* @__PURE__ */ v("a", {
      href: "https://www.browsersync.io/docs/gulp"
    }, "browser-sync"), " to auto-reload it. That would also save me having ", /* @__PURE__ */ v("a", {
      href: "https://www.npmjs.com/package/http-server"
    }, "http-server"), " open in another terminal serving my ", /* @__PURE__ */ v("code", null, `dist`), " folder."), /* @__PURE__ */ v("h2", {
      id: "reflection"
    }, "Reflection"), /* @__PURE__ */ v("p", null, "All this work took me upwards of 25 hours. The hardest part was writing the remark plugins for MDX. A lot of it was wasted researching prerendering, and I did write a few posts in the meantime."), /* @__PURE__ */ v("p", null, "It was well worth it to control every tool that creates the HTML, CSS, and JS my readers read. I'm (fairly) framework agnostic and learned a ton of new things! "), /* @__PURE__ */ v("h1", {
      id: "future-work"
    }, "Future work"), /* @__PURE__ */ v("p", null, "My hot-reloading development workflow still needs a few changes:"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Node-sass as well as Rollup have their own watch functions, so I should use those."), /* @__PURE__ */ v("li", null, "On changes to my component templates, all pages should reload and we need to re-require the module. Currently nothing happens.")), /* @__PURE__ */ v("p", null, "My production environment also needs a few fixes:"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "I need to minimize my images and wrap them in a container to avoid the content changing height once loaded. I also need to use ", /* @__PURE__ */ v("code", null, `srcset`), " for responsive images. I'd also like a nicer way to create centered images for posts than having to write all this each time:")), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-html"
    }, `<figure>
  <img src="shut-up-and-take-my-money.jpg" alt="Take my money" />
  <figcaption>Shut up and take my soul.</figcaption>
</figure>`)), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "I need a way to separate out my Preact dependency so it doesn't have to reload 4kb on every JS page.")));
  }
});

// src/generated/posts/coding/this-site/v3/index.md.jsx
var index_md_exports5 = {};
__export(index_md_exports5, {
  default: () => index_md_default5
});
var index_md_default5;
var init_index_md5 = __esm({
  "src/generated/posts/coding/this-site/v3/index.md.jsx"() {
    init_preact();
    index_md_default5 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "After getting nagged with ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/pulls?q=is%3Apr+author%3Aapp%2Fdependabot"
    }, "6 dependabot security vulnerabilities"), " (which weren't actually vulnerabilities) I figured it was finally time to dust off this site and give it some love. "), /* @__PURE__ */ v("h2", {
      id: "what-i-really-really-want"
    }, "What I really really want"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Write blog posts in MD which are rendered to HTML", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Allow importing some JSX"), /* @__PURE__ */ v("li", null, "Allow writing some JS for interactive pages (like the ", /* @__PURE__ */ v("a", {
      href: "/posts/money/early-retirement"
    }, "retirement calculator"), ")")))), /* @__PURE__ */ v("p", null, "As an example, I might want to write:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-md"
    }, `import { RetirementCalc } from './retirement-calc'

Brilliant, you'd like to quit
your day job and do something
more meaningful with your life.
Now how do you do it?

<RetirementCalc />`)), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Write blog components in JSX", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "I still want to keep writing code like ", /* @__PURE__ */ v("code", null, `{posts.map(post => ArticlePreview(post))}`), " for index pages!")))), /* @__PURE__ */ v("h3", {
      id: "whats-wrong-with-v2"
    }, "What's wrong with v2?"), /* @__PURE__ */ v("p", null, "v2 of this site had ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/9b3ec7e047366a79a12a1d94776d967677e2ada3/package.json"
    }, "too many dependencies"), " and relied on ", /* @__PURE__ */ v("a", {
      href: "https://babeljs.io/docs/en/babel-register"
    }, /* @__PURE__ */ v("code", null, `@babel/register`)), " for transpiling JSX for server-side-rendering. This was slow and error-prone when writing a development server. With ", /* @__PURE__ */ v("a", {
      href: "https://esbuild.github.io/"
    }, "esbuild"), " being the fastest transpiler and bundler in town (and sporting no dependencies!) I had to give it a try."), /* @__PURE__ */ v("h2", {
      id: "the-perfect-system"
    }, "The perfect system"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "perfect-system.jpg",
      alt: "Clu asking to create perfect system"
    }), /* @__PURE__ */ v("figcaption", null, "Am I still to create the perfect system? [Tron]")), /* @__PURE__ */ v("p", null, "I decided the perfect blog build system has just 3 tasks:"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "build", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Clean (just ", /* @__PURE__ */ v("code", null, `rm -rf dist`), ")"), /* @__PURE__ */ v("li", null, "Copy static and post assets"), /* @__PURE__ */ v("li", null, "Transpile MD to JSX"), /* @__PURE__ */ v("li", null, "Render JSX to HTML"))), /* @__PURE__ */ v("li", null, "start", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Build"), /* @__PURE__ */ v("li", null, "Serve ", /* @__PURE__ */ v("code", null, `dist`), " under ", /* @__PURE__ */ v("a", {
      href: "http://localhost"
    }, "http://localhost")), /* @__PURE__ */ v("li", null, "Watch for changes"))), /* @__PURE__ */ v("li", null, "serve", /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Serve ", /* @__PURE__ */ v("code", null, `dist`), " under ", /* @__PURE__ */ v("a", {
      href: "http://localhost"
    }, "http://localhost"), " exactly like production")))), /* @__PURE__ */ v("h3", {
      id: "build"
    }, "Build"), /* @__PURE__ */ v("h4", {
      id: "transforming-md-to-jsx"
    }, "Transforming MD to JSX"), /* @__PURE__ */ v("p", null, "The old v2 system was based on ", /* @__PURE__ */ v("code", null, `unified`), " and ", /* @__PURE__ */ v("code", null, `@babel/register`), " but:"), /* @__PURE__ */ v("ol", null, /* @__PURE__ */ v("li", null, "I really don't need all their features, I just need frontmatter and ", /* @__PURE__ */ v("code", null, `import`), " statement support"), /* @__PURE__ */ v("li", null, "Both have rather large dependency trees")), /* @__PURE__ */ v("p", null, "Enter ", /* @__PURE__ */ v("a", {
      href: "https://marked.js.org/"
    }, /* @__PURE__ */ v("code", null, `marked`)), ", a JS library with no dependencies and exactly the functionality I need. 10 years of battle-testing has yielded a non-fussy library where the user doesn't have to parse ASTs! After 100 lines of config (mostly manipulating strings) I was able to transform my MD posts to JSX!"), /* @__PURE__ */ v("p", null, "I also took the time to hook up ", /* @__PURE__ */ v("code", null, `esbuild`), " to bundle JS if there's a matching ", /* @__PURE__ */ v("code", null, `.js`), " file to the ", /* @__PURE__ */ v("code", null, `.md`), " file."), /* @__PURE__ */ v("h4", {
      id: "transforming-jsx-to-html"
    }, "Transforming JSX to HTML"), /* @__PURE__ */ v("p", null, "The old v2 system had some ", /* @__PURE__ */ v("code", null, `const index = {}`), " variables in memory which were exported and then loaded wherever needed (so import order was important)!"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `let postIndex = {}
module.exports = { postIndex }`)), /* @__PURE__ */ v("figcaption", null, "Many index, much ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/9b3ec7e047366a79a12a1d94776d967677e2ada3/scripts/gulp/posts.js"
    }, "bad old code"))), /* @__PURE__ */ v("p", null, "Instead of having indexes live in memory in source files I complemented the new JSX system by writing a ", /* @__PURE__ */ v("code", null, `src/generated/index.js`), " file with a listing of all pages and posts. As long as this file can be imported by both a JS bundler (for SSR) and by Node (to iterate through every page) I wouldn't need ", /* @__PURE__ */ v("code", null, `@babel/register`), " anymore!"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `const index = require('../../../src/generated')
Object.entries(index).forEach(renderPage)`)), /* @__PURE__ */ v("figcaption", null, "A sane way to do SSR.")), /* @__PURE__ */ v("h4", {
      id: "css"
    }, "CSS"), /* @__PURE__ */ v("p", null, "The old v2 system used ", /* @__PURE__ */ v("a", {
      href: "https://www.npmjs.com/package/node-sass"
    }, "node-sass"), ", but they had platform-dependent (and often incompatible) binaries and 16 dependencies. I still needed a SASS compiler since I'm using ", /* @__PURE__ */ v("code", null, `bulma`), ", but I opted for ", /* @__PURE__ */ v("a", {
      href: "https://www.npmjs.com/package/sass"
    }, "dart-sass"), " with its single ", /* @__PURE__ */ v("code", null, `chokidar`), " dependency instead."), /* @__PURE__ */ v("h3", {
      id: "start"
    }, "Start"), /* @__PURE__ */ v("p", null, "My site builds in around 1s, so the start task really just needs to rereun the correct build tasks and provide a live-reload server."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-sh"
    }, `npm run build  1.23s user 0.17s system 139% cpu 0.997 total`)), /* @__PURE__ */ v("figcaption", null, 'Now this is actually "blazingly fast". It also scales linearly instead of exponentially (looking at you, Gatsby).')), /* @__PURE__ */ v("h4", {
      id: "watching-for-changes"
    }, "Watching for changes"), /* @__PURE__ */ v("p", null, "Since ", /* @__PURE__ */ v("a", {
      href: "https://www.npmjs.com/package/chokidar"
    }, /* @__PURE__ */ v("code", null, `chokidar`)), " came along with ", /* @__PURE__ */ v("code", null, `dart-sass`), " I can use it to watch the correct source files:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `function register(path, listener) {
  chokidar.watch(path, { ignoreInitial: true }).on('all', listener)
}
// TODO: use CSS instead of SASS
register('src/**/*.sass', css)
// TODO: copy only what changes
register('posts/**/*.{jpg,jpeg,gif,svg,png}', copy)
// Need to rewrite index to update nav
register('posts/**/*.md', (ev, file) => {
  console.log('[watch]', ev, file)
  if (ev === 'change' || ev === 'add') {
    post(file)
  }
  else if (ev === 'unlink') {
    delete index[slugify(file)]
  }
  writeIndex()
})`)), /* @__PURE__ */ v("h3", {
      id: "serving-with-live-reloading"
    }, "Serving with live-reloading"), /* @__PURE__ */ v("p", null, "The old v2 system used ", /* @__PURE__ */ v("a", {
      href: "https://www.npmjs.com/package/browser-sync"
    }, "browser-sync"), " which weighs in with 30 direct dependencies! Instead, I decided to write my own HTTP server to both:"), /* @__PURE__ */ v("ol", null, /* @__PURE__ */ v("li", null, "Serve assets like Github pages's NGINX would in production"), /* @__PURE__ */ v("li", null, "Inject a livereload script for development")), /* @__PURE__ */ v("p", null, "It turned out to only take ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/scripts/serve.js"
    }, "100 lines of vanilla Node14 code!"), " By tracking connected clients in my HTTP server I could add this to my ", /* @__PURE__ */ v("code", null, `start`), " script to get live-reloading:"), /* @__PURE__ */ v("pre", null, /* @__PURE__ */ v("code", {
      class: "language-js"
    }, `const { clients } = require('./serve')

// Index pages now update when I touch site components!
esbuild.build({
  ...esbuildConfigSSR,
  watch: {
    onRebuild(error) {
      if (error) {
        console.log(error)
        return
      }
      // TODO: render only changed post + pages
      render({ cssFileName })
      clients.forEach(res => res.write('data: update'))
      clients.length = 0
    },
  },
})`)), /* @__PURE__ */ v("h2", {
      id: "summary"
    }, "Summary"), /* @__PURE__ */ v("p", null, "Using fewer tools has led to a faster more maintainable build system with fewer dependencies that Github's dependabot shouldn't ever bother me about."), /* @__PURE__ */ v("p", null, "Some future areas for improvement (which are no longer daunting!)"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Add back RSS"), /* @__PURE__ */ v("li", null, "Ditch SASS for my own CSS (I want a dark mode!)"), /* @__PURE__ */ v("li", null, "Create image pipeline (resizing and container size)"), /* @__PURE__ */ v("li", null, "Improve watcher to only rerender changed files"), /* @__PURE__ */ v("li", null, "Wrap build system in another package for others to use!")));
  }
});

// posts/money/early-retirement/helpers.js
var min, max, fedTaxRate, fedTaxBrackets, standardDeductions, calcFedTax, calcStateTax, addValues, projectRetirement;
var init_helpers = __esm({
  "posts/money/early-retirement/helpers.js"() {
    min = (a3, b2) => a3 > b2 ? b2 : a3;
    max = (a3, b2) => a3 > b2 ? a3 : b2;
    fedTaxRate = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
    fedTaxBrackets = {
      single: [0, 9875, 40125, 85525, 163300, 207350, 518400],
      married: [0, 19750, 80250, 171050, 326600, 414700, 622050],
      head: [0, 14100, 53700, 85500, 163300, 207350, 518400]
    };
    standardDeductions = {
      single: 12400,
      married: 24800,
      head: 18650
    };
    calcFedTax = (income, status, contributions) => {
      let incomeTax = 0;
      let agi = income - standardDeductions[status] - contributions.k401 - contributions.hsa;
      const bracket = fedTaxBrackets[status];
      for (let i3 = 1; i3 < bracket.length; i3++) {
        const taxed = min(agi, bracket[i3] - bracket[i3 - 1]);
        agi -= taxed;
        incomeTax += taxed * fedTaxRate[i3];
      }
      return incomeTax + agi * (0.062 + 0.29);
    };
    calcStateTax = (agi, contributions) => {
      return (agi - 8750 - contributions.hsa - contributions.k401) * 0.05499;
    };
    addValues = (accounts) => Object.values(accounts).reduce((a3, b2) => a3 + b2);
    projectRetirement = (income, raise, safeWithdrawal, effectiveGrowth, k401match, status, expenses, desiredContributions, initialBalances) => {
      let res = [];
      let accounts = Object.assign({}, initialBalances);
      let total = addValues(accounts);
      for (let year = new Date().getFullYear(); total * safeWithdrawal < expenses; year++) {
        const tax = calcFedTax(income, status, desiredContributions) + calcStateTax(income, desiredContributions);
        const toInvest = income - tax - expenses;
        const contributions = {
          hsa: max(min(toInvest, desiredContributions.hsa), 0),
          k401: max(min(toInvest - desiredContributions.hsa, desiredContributions.k401) + income * k401match, 0),
          ira: max(min(toInvest - desiredContributions.hsa - desiredContributions.k401, desiredContributions.ira), 0),
          afterTax: max(toInvest - desiredContributions.hsa - desiredContributions.k401 - desiredContributions.ira, 0)
        };
        const growth = {};
        Object.keys(accounts).forEach((key) => {
          growth[key] = accounts[key] * effectiveGrowth;
          accounts[key] += growth[key];
        });
        Object.keys(contributions).forEach((key) => accounts[key] += contributions[key]);
        total = addValues(accounts);
        res.push({
          year,
          income,
          tax,
          accounts: Object.assign({}, accounts),
          growth,
          contributions,
          total
        });
        income *= 1 + raise;
      }
      return res;
    };
  }
});

// posts/money/early-retirement/retirement-calc.jsx
var RetirementCalc;
var init_retirement_calc = __esm({
  "posts/money/early-retirement/retirement-calc.jsx"() {
    init_preact();
    init_link();
    init_helpers();
    RetirementCalc = class extends _ {
      constructor(props) {
        super(props);
        this.state = {
          income: 7e4,
          status: "single",
          expenses: 24e3,
          desiredContributions: {
            hsa: 3550,
            ira: 6e3,
            k401: 19500
          },
          k401match: 3,
          initialBalances: {
            hsa: 0,
            ira: 0,
            k401: 0,
            afterTax: 0
          },
          raise: 2,
          safeWithdrawal: 3.5,
          effectiveGrowth: 7,
          showGains: false,
          showContributions: false,
          tabShown: 1
        };
      }
      setDesired = (name, value) => {
        this.state.desiredContributions[name] = Number(value);
        this.setState({desiredContributions: this.state.desiredContributions});
      };
      setBalance = (name, value) => {
        this.state.initialBalances[name] = Number(value);
        this.setState({initialBalances: this.state.initialBalances});
      };
      format = (num) => {
        return Math.round(num / 100) / 10 + "k";
      };
      render() {
        const projection = projectRetirement(Math.max(this.state.income, 1e4), this.state.raise / 100, this.state.safeWithdrawal / 100, this.state.effectiveGrowth / 100, this.state.k401match / 100, this.state.status, this.state.expenses, this.state.desiredContributions, this.state.initialBalances);
        const finalNestEgg = projection[projection.length - 1].total;
        let totalSaved = 0;
        projection.forEach((year) => totalSaved += Object.values(year.contributions).reduce((a3, b2) => a3 + b2));
        const tabs = [
          {num: 1, caption: "Income"},
          {num: 2, caption: "Contributions"},
          {num: 3, caption: "Balances"},
          {num: 4, caption: "Assumptions"}
        ];
        return /* @__PURE__ */ v("div", {
          id: "retirementCalc"
        }, /* @__PURE__ */ v("div", {
          className: "tabs"
        }, /* @__PURE__ */ v("ul", null, tabs.map((tab) => /* @__PURE__ */ v("li", {
          key: tab.num,
          className: this.state.tabShown === tab.num ? "is-active" : ""
        }, /* @__PURE__ */ v("a", {
          onClick: () => this.setState({tabShown: tab.num})
        }, tab.caption))))), this.state.tabShown === 1 && /* @__PURE__ */ v("div", {
          className: "field-body"
        }, /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Income"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          type: "number",
          step: "1000",
          value: this.state.income,
          onChange: (event) => this.setState({income: Number(event.target.value)})
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Your salary")), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Expenses"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          type: "number",
          step: "100",
          value: this.state.expenses,
          onChange: (event) => this.setState({expenses: Number(event.target.value)})
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "This is the most important variable")), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Status"), /* @__PURE__ */ v("div", {
          className: "control select is-warning"
        }, /* @__PURE__ */ v("select", {
          onChange: (event) => this.setState({status: event.target.value}),
          value: this.state.status
        }, Object.keys(fedTaxBrackets).map((key) => /* @__PURE__ */ v("option", {
          value: key,
          key
        }, key)))), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Your federal tax status"))), this.state.tabShown === 2 && /* @__PURE__ */ v("div", {
          className: "field-body"
        }, /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "HSA"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.desiredContributions.hsa,
          onChange: (event) => this.setDesired("hsa", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Desired HSA contribution")), /* @__PURE__ */ v("div", {
          className: "field is-grouped"
        }, /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "401k"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.desiredContributions.k401,
          onChange: (event) => this.setDesired("k401", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Desired 401k contribution")), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Match"), /* @__PURE__ */ v("div", {
          className: "control has-icons-right",
          style: {width: "7rem"}
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "1",
          value: this.state.k401match,
          onChange: (event) => this.setState({k401match: Number(event.target.value)})
        }), /* @__PURE__ */ v("span", {
          className: "icon is-right"
        }, "%")), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Employer's 401k match"))), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "IRA"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.desiredContributions.ira,
          onChange: (event) => this.setDesired("ira", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Desired IRA contribution"))), this.state.tabShown === 3 && /* @__PURE__ */ v("div", {
          className: "field-body"
        }, /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "HSA"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.initialBalances.hsa,
          onChange: (event) => this.setBalance("hsa", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Initial HSA balance")), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "401k"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.initialBalances.k401,
          onChange: (event) => this.setBalance("k401", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Initial 401k balance")), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "IRA"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.initialBalances.ira,
          onChange: (event) => this.setBalance("ira", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Initial IRA balance")), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "After tax"), /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "100",
          value: this.state.initialBalances.afterTax,
          onChange: (event) => this.setBalance("afterTax", event.target.value)
        })), /* @__PURE__ */ v("p", {
          className: "help"
        }, "Initial after tax accounts balance"))), this.state.tabShown === 4 && /* @__PURE__ */ v("div", {
          className: "field-body"
        }, /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Safe Withdrawal Rate"), /* @__PURE__ */ v("div", {
          className: "control has-icons-right"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "0.25",
          value: this.state.safeWithdrawal,
          onChange: (event) => this.setState({safeWithdrawal: Number(event.target.value)})
        }), /* @__PURE__ */ v("span", {
          className: "icon is-right"
        }, "%")), /* @__PURE__ */ v("p", {
          className: "help"
        }, /* @__PURE__ */ v(link_default, {
          href: "https://www.madfientist.com/safe-withdrawal-rate/"
        }, "Nest Egg * Safe Withdrawal > Expenses"))), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Effective Growth Rate"), /* @__PURE__ */ v("div", {
          className: "control has-icons-right"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "0.5",
          value: this.state.effectiveGrowth,
          onChange: (event) => this.setState({effectiveGrowth: Number(event.target.value)})
        }), /* @__PURE__ */ v("span", {
          className: "icon is-right"
        }, "%")), /* @__PURE__ */ v("p", {
          className: "help"
        }, /* @__PURE__ */ v(link_default, {
          href: "https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"
        }, "Average ", "S&P", " 500 Growth"), " -", /* @__PURE__ */ v(link_default, {
          href: "https://tradingeconomics.com/united-states/inflation-cpi"
        }, " Inflation"))), /* @__PURE__ */ v("div", {
          className: "field"
        }, /* @__PURE__ */ v("label", null, "Raise Rate"), /* @__PURE__ */ v("div", {
          className: "control has-icons-right"
        }, /* @__PURE__ */ v("input", {
          className: "input",
          type: "number",
          step: "0.5",
          value: this.state.raise,
          onChange: (event) => this.setState({raise: Number(event.target.value)})
        }), /* @__PURE__ */ v("span", {
          className: "icon is-right"
        }, "%")), /* @__PURE__ */ v("p", {
          className: "help"
        }, "How fast you progress in your career"))), /* @__PURE__ */ v("hr", null), /* @__PURE__ */ v("table", {
          className: "table is-narrow is-fullwidth is-striped"
        }, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", null, "Year"), /* @__PURE__ */ v("th", null, "Income"), /* @__PURE__ */ v("th", null, "Tax"), /* @__PURE__ */ v("th", null, "HSA"), /* @__PURE__ */ v("th", null, "401k"), /* @__PURE__ */ v("th", null, "IRA"), /* @__PURE__ */ v("th", null, "After Tax"), /* @__PURE__ */ v("th", null, "Nest Egg"))), /* @__PURE__ */ v("tbody", null, projection.map((year) => /* @__PURE__ */ v("tr", {
          key: year.year
        }, /* @__PURE__ */ v("td", null, year.year), /* @__PURE__ */ v("td", null, this.format(year.income)), /* @__PURE__ */ v("td", null, this.format(year.tax)), /* @__PURE__ */ v("td", null, this.format(year.accounts.hsa), this.state.showContributions && /* @__PURE__ */ v("span", {
          className: "tag is-success"
        }, "+", this.format(year.contributions.hsa)), this.state.showGains && /* @__PURE__ */ v("span", {
          className: "tag is-primary"
        }, "+", this.format(year.growth.hsa))), /* @__PURE__ */ v("td", null, this.format(year.accounts.k401), this.state.showContributions && /* @__PURE__ */ v("span", {
          className: "tag is-success"
        }, "+", this.format(year.contributions.k401)), this.state.showGains && /* @__PURE__ */ v("span", {
          className: "tag is-primary"
        }, "+", this.format(year.growth.k401))), /* @__PURE__ */ v("td", null, this.format(year.accounts.ira), this.state.showContributions && /* @__PURE__ */ v("span", {
          className: "tag is-success"
        }, "+", this.format(year.contributions.ira)), this.state.showGains && /* @__PURE__ */ v("span", {
          className: "tag is-primary"
        }, "+", this.format(year.growth.ira))), /* @__PURE__ */ v("td", null, this.format(year.accounts.afterTax), this.state.showContributions && /* @__PURE__ */ v("span", {
          className: "tag is-success"
        }, "+", this.format(year.contributions.afterTax)), this.state.showGains && /* @__PURE__ */ v("span", {
          className: "tag is-primary"
        }, "+", this.format(year.growth.afterTax))), /* @__PURE__ */ v("td", null, this.format(year.total)))))), /* @__PURE__ */ v("div", {
          className: "field is-horizontal"
        }, /* @__PURE__ */ v("div", {
          className: "control"
        }, /* @__PURE__ */ v("label", {
          className: "checkbox"
        }, /* @__PURE__ */ v("input", {
          type: "checkbox",
          checked: this.state.showGains,
          onChange: (event) => this.setState({showGains: event.target.checked})
        }), "Show gains")), /* @__PURE__ */ v("div", {
          className: "control",
          style: {marginLeft: "1rem"}
        }, /* @__PURE__ */ v("label", {
          className: "checkbox"
        }, /* @__PURE__ */ v("input", {
          type: "checkbox",
          checked: this.state.showContributions,
          onChange: (event) => this.setState({showContributions: event.target.checked})
        }), "Show contributions"))), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("b", null, projection.length), " years to retirement / ", /* @__PURE__ */ v("b", null, this.format(finalNestEgg * this.state.safeWithdrawal / 100)), " withdrawable per year / ", /* @__PURE__ */ v("b", null, this.format(totalSaved)), " total contributions"));
      }
    };
  }
});

// src/generated/posts/money/early-retirement/index.md.jsx
var index_md_exports6 = {};
__export(index_md_exports6, {
  default: () => index_md_default6
});
var index_md_default6;
var init_index_md6 = __esm({
  "src/generated/posts/money/early-retirement/index.md.jsx"() {
    init_preact();
    init_retirement_calc();
    index_md_default6 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "Brilliant, you'd like to quit your day job and do something more meaningful with your life. Now how do you do it?"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "retirement-meme.png",
      alt: "Make it so, captain"
    }), /* @__PURE__ */ v("figcaption", null, "Make it so, captain")), /* @__PURE__ */ v("p", null, "Well, your investments need to make more money per year than your expenses. Great news:"), /* @__PURE__ */ v("div", {
      class: "notification is-info"
    }, "if you're starting from $0, you can retire in just 11 years with just a $70k salary (", /* @__PURE__ */ v("a", {
      href: "https://www.mrmoneymustache.com/2013/07/25/50-jobs-over-50000-without-a-degree-part-1"
    }, "no college degree required"), ")"), /* @__PURE__ */ v("p", null, "Don't believe me? Let's do the math."), /* @__PURE__ */ v(RetirementCalc, null), /* @__PURE__ */ v("h2", {
      id: "the-catch"
    }, "The Catch"), /* @__PURE__ */ v("p", null, "The biggest catch is that you're betting on the US economy. Specifically, we are assuming on average a ", /* @__PURE__ */ v("a", {
      href: "https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"
    }, "10% growth per year"), " of the ", /* @__PURE__ */ v("a", {
      href: "https://www.tradingview.com/symbols/AMEX-SPY"
    }, "S&P 500"), ", which is an index that adjusts to follow the 500 largest U.S. publicly traded companies by market value."), /* @__PURE__ */ v("h3", {
      id: "24kyear"
    }, "$24k/year"), /* @__PURE__ */ v("p", null, "This isn't an unrealistic budget, ", /* @__PURE__ */ v("a", {
      href: "https://www.mrmoneymustache.com/2017/05/19/2016-spending"
    }, "even for a family of 4."), " ", /* @__PURE__ */ v("a", {
      href: "https://rootofgood.com/developing-a-retirement-budget"
    }, "Here's another testimony from a family of 5."), " The best part about low spending is that you get to save more while you are working, and the total nest egg you have to save until gets smaller. It is the single most important factor in the entire equation and the easiest one for you to minimize.  If you were to live off $34k/year instead, it would take 15 years and a nest egg of over $1mil to retire!"), /* @__PURE__ */ v("p", null, "You need a budget. Frugality will pay off. If you have one particulary bad area of spending, as chef Ramsay says, ", /* @__PURE__ */ v("a", {
      href: "https://www.youtube.com/watch?v=BsFeplo_6Pg"
    }, "wake up!")), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "wake-up.gif",
      alt: "Wake up!"
    })), /* @__PURE__ */ v("h2", {
      id: "smaller-catches"
    }, "Smaller Catches"), /* @__PURE__ */ v("p", null, "These estimates are really quite conservative. Historically, the US economy is the safest bet to make."), /* @__PURE__ */ v("h3", {
      id: "safe-withdrawal-rate"
    }, "Safe withdrawal rate"), /* @__PURE__ */ v("p", null, 'This is the rate you can withdraw from your investments per-year for the entire rest of your life while feeling "safe" in nearly every market condition. The number 3.5% is based off of a ', /* @__PURE__ */ v("a", {
      href: "https://www.madfientist.com/safe-withdrawal-rate"
    }, "45 year time horizon."), " To see actual chances of success, use a calculator like ", /* @__PURE__ */ v("a", {
      href: "https://firecalc.com"
    }, "FireCalc"), " or ", /* @__PURE__ */ v("a", {
      href: "a%20href=%22http://cfiresim.com%22"
    }, "cFIREsim"), ". If you're fashionably late to the party, simply adjust your time horizon to sooner and use a higher percentage such as 4% or 6%."), /* @__PURE__ */ v("h3", {
      id: "inflation-rate"
    }, "Inflation rate"), /* @__PURE__ */ v("p", null, "To adjust for rising living expenses from inflation, we assume a high inflation rate of 3% by calculating our investments growing at 7% instead of 10%. Actual inflation rates fluctuate, which you can view per-month ", /* @__PURE__ */ v("a", {
      href: "https://tradingeconomics.com/united-states/inflation-cpi"
    }, "here.")), /* @__PURE__ */ v("h2", {
      id: "retirement-accounts"
    }, "Retirement accounts"), /* @__PURE__ */ v("p", null, "This is the fun part where we get to dodge taxes and take advantage of every tax-deffered account available. Accounts are ranked in terms of advantages."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./retirement-number.png",
      alt: "Do maths"
    }), /* @__PURE__ */ v("figcaption", null, "There are a lot of different retirement accounts.")), /* @__PURE__ */ v("h3", {
      id: "1-health-savings-account-hsa"
    }, "1. Health Savings Account (HSA)"), /* @__PURE__ */ v("p", null, "HSAs are tax deductable, and earnings are tax-exempt. Withdrawals from a health savings account are tax-free as long you use the money to pay for qualified medical expenses. All you need are receipts of medical expenses from ", /* @__PURE__ */ v("em", null, "any time period"), `, so you can pay out-of-pocket for expenses now, save the receipt of your payment, and later withdraw money from your HSA to "pay" for that expense long after it's been paid. This makes them the best tax-advantaged account. They are offered through your employer, usually along with a high-deductable medical plan. The contribution limit is $3450 for 2018, and was $3400 for 2017.`), /* @__PURE__ */ v("h3", {
      id: "2-individual-retirement-account-ira"
    }, "2. Individual Retirement Account (IRA)"), /* @__PURE__ */ v("p", null, "IRAs come in two flavors, traditional and Roth. Traditional IRA contributions are tax-deductible, but withdrawals are taxed at ordinary income tax rates. Roth IRAs provide no tax break for contributions, but earnings and withdrawals are tax-free. For early retirees, Roth IRAs are the way to go because of the tax-free growth, which will be very high! The limit is $5500 towards all IRAs for 2018 and 2017. To ", /* @__PURE__ */ v("a", {
      href: "https://www.madfientist.com/traditional-ira-vs-roth-ira"
    }, "withdraw money from your Roth without penalty,"), " ", /* @__PURE__ */ v("a", {
      href: "https://rootofgood.com/roth-ira-conversion-ladder-early-retirement"
    }, "Roth Laddering"), " is possible if you know how much you want to withdraw 5 years in advance."), /* @__PURE__ */ v("h3", {
      id: "3-401k"
    }, "3. 401k"), /* @__PURE__ */ v("p", null, "401k plans vary per-employer, but the gist is that you can contribute up to $18,000 of tax-deductable income per-year. Gains from the account are tax-deffered. 40% of employers do a 6% match on your contribution, but usually only up to 3% of your salary. 38% of employers do a 3% match (but also only up to 3% of your salary), which is a nice little added bonus. However, don't count on the employer match, especially since technicalities vary. If you're self-employed, a solo 401k also permits your business entity to contribute up to 25% of your salary to your 401k up to a total of $54,000. To withdraw money early without eating a 10% penalty, ", /* @__PURE__ */ v("a", {
      href: "http://abovethecanopy.us/the-ultimate-guide-to-early-retirement-with-72t-distributions"
    }, "rule 72t"), " provides a loophole for withdrawing from the account, provided you do it for 5 years or until you turn 59 1/2 \u2013 whichever is later. "), /* @__PURE__ */ v("h3", {
      id: "4-taxable-account"
    }, "4. Taxable account"), /* @__PURE__ */ v("p", null, "If you're a savaholic, after your 401k your second largest account will unfortunately be a taxable account. Money put into the account is not tax-deffered, and gains are taxed as income. However, withdrawals have no penalty or restrictions (except for what your brokerage states)!"), /* @__PURE__ */ v("h1", {
      id: "conclusion"
    }, "Conclusion"), /* @__PURE__ */ v("p", null, "If you want more control over the numbers, you can play around with ", /* @__PURE__ */ v("a", {
      href: "https://gist.github.com/thesmartwon/acab1443532c03f27accc04c254355f1"
    }, "an (incomplete) Python script I wrote"), " or the ", /* @__PURE__ */ v("a", {
      href: "https://github.com/thesmartwon/thesmartwon.com/blob/master/src/helpers/retire.js"
    }, "source code for the calculator on the page."), " I hope you realize retirement is closer than you think!"), /* @__PURE__ */ v("p", null, "Remember, your mileage may vary!"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "ymmv.png",
      alt: "Wake up!"
    })));
  }
});

// src/generated/posts/money/market-timing/index.md.jsx
var index_md_exports7 = {};
__export(index_md_exports7, {
  default: () => index_md_default7
});
var index_md_default7;
var init_index_md7 = __esm({
  "src/generated/posts/money/market-timing/index.md.jsx"() {
    init_preact();
    index_md_default7 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "With all the ", /* @__PURE__ */ v("a", {
      href: "https://www.usatoday.com/story/news/politics/2020/03/13/coronavirus-national-emergency-questions-answers-trump/5026463002/"
    }, "Coronavirus panic"), " the DOW has been falling off a cliff the past few days:"), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("a", {
      href: "dow-plummet.html"
    }, /* @__PURE__ */ v("img", {
      src: "dow-plummet.png",
      alt: "DOW plummet"
    })), /* @__PURE__ */ v("figcaption", null, "DOW plummetting to $21k based on ", /* @__PURE__ */ v("a", {
      href: "https://finance.yahoo.com/quote/%5EDJI/history?period1=475804800&period2=1584144000&interval=1d&filter=history&frequency=1d"
    }, "Yahoo finance data."), " Click the image for an interactive full-size plot.")), /* @__PURE__ */ v("p", null, "Which raises a valid question: if you're sitting on some cash should you buy a index fund like the DOW?"), /* @__PURE__ */ v("h2", {
      id: "lets-backtest"
    }, "Let's backtest"), /* @__PURE__ */ v("p", null, "This isn't the first time the DOW has dipped more than 5%. It's happened 18 times before 2020:"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", {
      align: "left"
    }, "Occurrence"), /* @__PURE__ */ v("th", {
      align: "left"
    }, "Date"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "Dip %"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "22.61")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-26"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8.03")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "3"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1988-01-08"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.85")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "4"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1989-10-13"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.90")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "5"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1997-10-27"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.18")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "6"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1998-08-31"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.36")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "7"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2000-04-14"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.65")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "8"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2001-09-17"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.12")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "9"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-09-29"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.97")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "10"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-07"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.10")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "11"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-09"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.33")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "12"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-15"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.87")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "13"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-22"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.69")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "14"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-05"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.04")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "15"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.07")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "16"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-20"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.56")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "17"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-01"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.70")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "18"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2011-08-08"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.54")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "19"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2020-03-09"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.78")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "20"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2020-03-11"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.85")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "21"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2020-03-12"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9.98")))), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("a", {
      href: "dow-dips.html"
    }, /* @__PURE__ */ v("img", {
      src: "dow-dips.png",
      alt: "DOW dips"
    })), /* @__PURE__ */ v("figcaption", null, "DOW dips >5%.")), /* @__PURE__ */ v("h3", {
      id: "buying-the-dip-immediately"
    }, "Buying the dip immediately"), /* @__PURE__ */ v("p", null, "Buying the dip on the close yields the following percent gains:"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", {
      align: "left"
    }, "Dip Date"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "1 year"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "5 year"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "10 year"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "24.21%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "82.56%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "356.5%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-26"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "21.15%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "78.80%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "337.4%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1988-01-08"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "14.80%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "72.92%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "317.4%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1989-10-13"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-6.66%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "50.82%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "314.4%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1997-10-27"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "16.82%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "17.91%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "90.9%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1998-08-31"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "43.64%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "24.89%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "55.3%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2000-04-14"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-1.42%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, ".95%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.7%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2001-09-17"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-7.99%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "29.59%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "28.1%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-09-29"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-6.01%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "47.20%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "155.0%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-07"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2.94%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "58.10%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "179.9%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-09"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "14.98%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "72.23%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "208.7%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-15"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "17.31%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "78.37%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "195.4%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-22"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "18.33%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "80.67%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "198.6%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-05"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9.48%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "71.12%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "176.5%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "29.19%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "99.76%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "217.7%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-20"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "36.62%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "11.41%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "231.2%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-01"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "28.50%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "97.40%"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "210.9%")))), /* @__PURE__ */ v("h3", {
      id: "waiting-for-less-volatility"
    }, "Waiting for less volatility"), /* @__PURE__ */ v("p", null, "But wait, it might be safer to sit on cash or invest in something else during periods of volitility! A decent measure of volatility is the standard deviation over a 20 day period (1 month) divided by the close price. This volatility can be as high as 10% (like during 5% dips) and as low as .5% when not much is happening. If we wait for volatility to die down <3%, this yields the following percent gains:"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", {
      align: "left"
    }, "Dip Date"), /* @__PURE__ */ v("th", {
      align: "left"
    }, "Buy date"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "1 year"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "5 year"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "10 year"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-19"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-11-18"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "11.38"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "63.69"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "309.39")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-26"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-11-18"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "12.07"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "65.41"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "304.70")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1988-01-08"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1988-01-11"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "12.80"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "69.92"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "310.20")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1989-10-13"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1989-10-16"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-9.76"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "45.82"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "300.70")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1997-10-27"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1997-11-14"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10.47"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "11.50"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "80.54")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1998-08-31"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "1998-09-23"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "32.80"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "15.46"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "43.66")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2000-04-14"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2000-04-17"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-4.00"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-1.68"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "4.00")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2001-09-17"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2001-10-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-10.82"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "25.60"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "24.21")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-09-29"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-09-30"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-10.21"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "40.62"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "143.67")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-07"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "13.36"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "74.10"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "208.27")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-09"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "14.98"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "72.23"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "208.73")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-15"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "17.29"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "78.35"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "195.36")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-22"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "17.51"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "79.41"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "196.58")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-05"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "16.63"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "82.29"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "194.56")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-19"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "20.43"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "86.22"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "196.22")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-20"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "20.27"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "86.11"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "191.60")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-01"), /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "22.05"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "87.50"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "195.35")))), /* @__PURE__ */ v("p", null, "When we use this measure we wait between a few days and a few weeks to buy. Interestingly all the dates after the housing crisis in October 2008 wait to buy until 2008-12-19 when volatility dies down."), /* @__PURE__ */ v("h3", {
      id: "comparison"
    }, "Comparison"), /* @__PURE__ */ v("p", null, 'There are 3 cases when you could have gotten a better "sale" by waiting for even lower prices than a 5% dip:'), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", {
      align: "left"
    }, "Date"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "Naive price"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "Delayed price"), /* @__PURE__ */ v("th", null, "Worth waiting"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1738"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1939"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-26"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1793"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1939"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1988-01-08"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1911"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1945"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1989-10-13"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2569"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2657"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1997-10-27"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7161"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7572"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1998-08-31"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7539"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8154"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2000-04-14"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10305"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10582"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2001-09-17"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8920"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9204"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-09-29"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10365"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10850"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-07"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9447"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "Yes")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-09"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "Yes (by 8 pennies)")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-15"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8577"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-22"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8519"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-05"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9139"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "Yes")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7997"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-20"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7552"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "No")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-01"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8149"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8579"), /* @__PURE__ */ v("td", null, "No")))), /* @__PURE__ */ v("p", null, "But how much better off would you have been when using the Naive strategy? This is the Naive strategy's advantage over the delayed strategy:"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", {
      align: "left"
    }, "Date"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "1 year diff"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "5 year diff"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "10 year diff"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "12.83"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "18.86"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "47.19")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1987-10-26"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9.07"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "13.39"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "32.76")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1988-01-08"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1.99"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "3.00"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "7.25")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1989-10-13"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "3.09"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "5.00"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "13.74")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1997-10-27"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.34"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.40"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10.36")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "1998-08-31"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "10.83"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9.42"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "11.72")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2000-04-14"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2.57"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2.64"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2.79")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2001-09-17"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2.83"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "3.99"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "3.94")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-09-29"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "4.20"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.58"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "11.40")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-07"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-10.41"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-15.99"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-28.32")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-09"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-1.1e-5"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-1.6e-5"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-2.9e-5")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-15"), /* @__PURE__ */ v("td", {
      align: "right"
    }, ".01"), /* @__PURE__ */ v("td", {
      align: "right"
    }, ".02"), /* @__PURE__ */ v("td", {
      align: "right"
    }, ".04")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-10-22"), /* @__PURE__ */ v("td", {
      align: "right"
    }, ".82"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "1.26"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "2.08")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-05"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-7.14"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-11.17"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "-18.05")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-19"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "8.76"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "13.54"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "21.55")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-11-20"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "16.35"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "25.30"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "39.64")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", {
      align: "left"
    }, "2008-12-01"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "6.44"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "9.89"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "15.58")))), /* @__PURE__ */ v("p", null, "As you can tell the Naive strategy wins a decent amount more than the delayed strategy. But when the delayed strategy works, it's ", /* @__PURE__ */ v("em", null, "really"), " the better strategy to use by a 10% margin."), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", null, "Horizon"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "Mean naive"), /* @__PURE__ */ v("th", {
      align: "right"
    }, "Mean delayed"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "1 year"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "15.05"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "11.01")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "5 year"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "63.22"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "57.80")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "10 year"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "193.0"), /* @__PURE__ */ v("td", {
      align: "right"
    }, "182.8")))), /* @__PURE__ */ v("p", null, "As you can see, these differences are so miniscule that timing the market doesn't really matter for people looking to invest over long time horizons."), /* @__PURE__ */ v("h2", {
      id: "conclusion"
    }, "Conclusion"), /* @__PURE__ */ v("p", null, "If you're focused on a 10+ year time horizon go ahead and take the Naive strategy of buying an index fund on the Coronavirus dip! Any reason is a good reason to start investing, and the statistics favor it in the majority of historical dips."), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("em", null, "Python code ", /* @__PURE__ */ v("a", {
      href: "https://gist.github.com/thesmartwon/bbeca52965ee7c3020219b98305f271c"
    }, "available on Github."))));
  }
});

// src/generated/posts/money/one-year/index.md.jsx
var index_md_exports8 = {};
__export(index_md_exports8, {
  default: () => index_md_default8
});
var index_md_default8;
var init_index_md8 = __esm({
  "src/generated/posts/money/one-year/index.md.jsx"() {
    init_preact();
    index_md_default8 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "It's time to come clean. I could never live off ", /* @__PURE__ */ v("a", {
      href: "../early-retirement"
    }, "$24,000"), " like my retirement calculator's estimate is based off. I could do it off $13,717, which includes cheap rent at home and even an overkill $1,700 server for stock analysis."), /* @__PURE__ */ v("h2", {
      id: "income"
    }, "Income"), /* @__PURE__ */ v("p", null, "With a bachelor's degree I make above what my ", /* @__PURE__ */ v("a", {
      href: "https://www.csc.ncsu.edu/future-students/"
    }, "college department's website says,"), " but not by much. I've taken advantage of my company's 3% matching 401k and HSA plans, which I maxed for the year 2019. I'm very fortunate."), /* @__PURE__ */ v("h2", {
      id: "expenses"
    }, "Expenses"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", null, "Category"), /* @__PURE__ */ v("th", null, "Amount"), /* @__PURE__ */ v("th", null, "Comments"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Rent"), /* @__PURE__ */ v("td", null, "5344"), /* @__PURE__ */ v("td", null, "I'm lucky to be able to live cheaply at home. Rent includes some meals mom cooks")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Electronics"), /* @__PURE__ */ v("td", null, "2072"), /* @__PURE__ */ v("td", null, "$1.7k towards a server, $350 towards noise-cancelling headphones")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Gas"), /* @__PURE__ */ v("td", null, "1178"), /* @__PURE__ */ v("td", null, "About 27mpg while driving to/from work which is 15mi away")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Restaurants"), /* @__PURE__ */ v("td", null, "1087"), /* @__PURE__ */ v("td", null, "I eat out with friends often and pack lunch the rest of the time. Once a week my schedule is such that eating out is very convienent")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Automotive"), /* @__PURE__ */ v("td", null, "1028"), /* @__PURE__ */ v("td", null, "I bought new tires ($340) and scraped someone in a parking lot ($350)")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Misc"), /* @__PURE__ */ v("td", null, "1000"), /* @__PURE__ */ v("td", null, "Payments to dad that had reasons at the time. Probably things from Amazon")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Groceries"), /* @__PURE__ */ v("td", null, "290"), /* @__PURE__ */ v("td", null, "Food is included in rent. It's pretty sweet, and when it's not, I eat out")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Online services"), /* @__PURE__ */ v("td", null, "254"), /* @__PURE__ */ v("td", null, "Domain names and hosting")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Healthcare"), /* @__PURE__ */ v("td", null, "236"), /* @__PURE__ */ v("td", null, "Copays on normal appointments")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Entertainment"), /* @__PURE__ */ v("td", null, "181"), /* @__PURE__ */ v("td", null, "WoW, Spotify, and some tourism while traveling")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Gifts"), /* @__PURE__ */ v("td", null, "116"), /* @__PURE__ */ v("td", null, "Mostly art supplies")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Personal care"), /* @__PURE__ */ v("td", null, "31"), /* @__PURE__ */ v("td", null, "Haircuts, etc.")))), /* @__PURE__ */ v("h3", {
      id: "totals"
    }, "Totals"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("th", null, "Category"), /* @__PURE__ */ v("th", null, "Amount"))), /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Expenses"), /* @__PURE__ */ v("td", null, "13,717")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Minus electronics"), /* @__PURE__ */ v("td", null, "11,645")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Minus entertainment"), /* @__PURE__ */ v("td", null, "11,464")))));
  }
});

// src/generated/posts/school/grad-school/index.md.jsx
var index_md_exports9 = {};
__export(index_md_exports9, {
  default: () => index_md_default9
});
var index_md_default9;
var init_index_md9 = __esm({
  "src/generated/posts/school/grad-school/index.md.jsx"() {
    init_preact();
    index_md_default9 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, "Today, my Aunt told me:"), /* @__PURE__ */ v("blockquote", null, /* @__PURE__ */ v("p", null, "More lucrative job opportunities await you at my company with a Master's Degree.")), /* @__PURE__ */ v("p", null, `Her company's not the first to tell me that about Computer Science, especially when they're talking about "machine learning" and other "data science" careers. Sick of school, sick of hearing that I need to pursue more school, and not really caring what field I end up in, I decided to find out the truth about salaries myself. Near the bottom of my Computer Science `, /* @__PURE__ */ v("a", {
      href: "https://www.csc.ncsu.edu/future-students/"
    }, "department's website,"), " I found out that the average Computer Science undergrad makes $72k, while the average graduate makes $102k. Also, ", /* @__PURE__ */ v("a", {
      href: "https://studentservices.ncsu.edu/your-money/financial-aid/estimated-cost-of-attendance/undergraduate-student/"
    }, "tuition"), " is around $9k at the time of this post. Also, we'll presume interest rates are at a conservative 7%. Well, get strapped in for some math!"), /* @__PURE__ */ v("p", null, "To get a Master's, it'll cost me $9k * 4 semesters + $72k * 2 years = ", /* @__PURE__ */ v("strong", null, "$180k"), ". We can even be technical and subtract the part time jobs I work during the semester now, which would be $20k/year at most. Then, it'll cost me $180k - $20k = ", /* @__PURE__ */ v("strong", null, "$160k"), " to get my Master's, which can be paid back in just 3 years of working my new fancy graduate job, right?"), /* @__PURE__ */ v("h1", {
      id: "wrong"
    }, "Wrong."), /* @__PURE__ */ v("p", null, "You have to look at the ", /* @__PURE__ */ v("em", null, /* @__PURE__ */ v("strong", null, "difference")), " between $102k and $72k, which is only $30k. In that case, it will take $160k / $30k = ", /* @__PURE__ */ v("strong", null, "5 years"), " to pay off the ", /* @__PURE__ */ v("em", null, "opportunity cost"), " of grad school, not a meager 3! Not to mention that all the money I save by graduating early (at least 50%) is going to be growing in ", /* @__PURE__ */ v("a", {
      href: "https://www.mrmoneymustache.com/2011/05/18/how-to-make-money-in-the-stock-market/"
    }, "index funds"), " at an effective rate of 7%, which will amount to an ", /* @__PURE__ */ v("strong", null, "extra $29k"), " over those 5 years. On the flip side, the graduate student will be in debt $36k, and have a ", /* @__PURE__ */ v("em", null, "negative"), " interest rate on that!"), /* @__PURE__ */ v("h2", {
      id: "5-years-in-the-future"
    }, "5 years in the future"), /* @__PURE__ */ v("p", null, "But oh, I'm not so Smart if I don't factor in after those 5 years. Most people work 40 years, so getting that extra $30k/year really pays off in the long term, doesn't it? Nope. ", /* @__PURE__ */ v("em", null, "How many 40 year olds in computer science get paid more because they have a Master's?"), " Also, do you really want to work longer? Personally, I want to ", /* @__PURE__ */ v("a", {
      href: "/posts/money/early-retirement"
    }, "go crazy and retire in my 30s"), " so I can go out and make a difference in the world doing what I love, not stuck behind a desk until I'm so old I only have 20% of my weakened life left."), /* @__PURE__ */ v("p", null, `Let's say even with lots of career progression it will take me 5 years to "catch up" to a master degree's salary, and that it happens in one big pay raise. Then I'm losing the starting gap over 5 years, which is ($102k - 72k) * 5 = $150k, still less than $152k I lose by going to school. Once you factor in the 3% income tax bracket jump at $92k over 5 years, it's closer to around $140k. Also, you have to factor in that I'm going to be saving at least half my salary for those 2 years in `, /* @__PURE__ */ v("a", {
      href: "https://www.google.com/search?tbm=fin&q=NYSEARCA:+SPY"
    }, "index funds"), ", which amounts to 70*1.07^5=$28k extra over those 5 years, which will compound even more in nice IRAs over my lifetime. So really, getting a Master's would lose me around $152k + $28k - $140k = ", /* @__PURE__ */ v("strong", null, "$40k in just 5 years!")));
  }
});

// src/generated/posts/work/one-year/index.md.jsx
var index_md_exports10 = {};
__export(index_md_exports10, {
  default: () => index_md_default10
});
var index_md_default10;
var init_index_md10 = __esm({
  "src/generated/posts/work/one-year/index.md.jsx"() {
    init_preact();
    index_md_default10 = () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("h1", {
      id: "my-job"
    }, "My Job"), /* @__PURE__ */ v("p", null, "I've been working as a frontend build engineer for an open-source company one year now. I came in with only a summer internship's worth of Javascript experience. I had little Github workflow experience, but I've taken time to ", /* @__PURE__ */ v("code", null, `git`), " good. I support developer workflows and environments, publish our packages to NPM, publish our documentation, and swoop in to help devs when they come across problems they can't solve."), /* @__PURE__ */ v("p", null, "I've filled holes on our team for the entire past year. Infrastucture and architecting is the hole I'm usually filling since we're experiencing growth pangs beyond what our initial architecture can support. My job is akin to construction, I have to support a sinking foundation as developers keep adding features and fixing things around the house."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("table", {
      style: "width:330px;margin:auto"
    }, /* @__PURE__ */ v("tbody", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, /* @__PURE__ */ v("img", {
      src: "./github-logo.svg",
      alt: "Github",
      style: "height:128px"
    })), /* @__PURE__ */ v("td", {
      style: "line-height:128px;text-align:center;font-size:2rem"
    }, "+"), /* @__PURE__ */ v("td", null, /* @__PURE__ */ v("img", {
      src: "./react-logo.svg",
      alt: "React",
      style: "height:128px"
    }))))), /* @__PURE__ */ v("figcaption", null, "Github + React = My job")), /* @__PURE__ */ v("h2", {
      id: "people"
    }, "People"), /* @__PURE__ */ v("p", null, "I love the people and my team is great. Every change developers make that I have to support is for good reason. My boss lets me build my own adventure by trusting me to prioritize my own work and allowing me to make influential decisions across our projects."), /* @__PURE__ */ v("h2", {
      id: "culture"
    }, "Culture"), /* @__PURE__ */ v("p", null, "We have flexible hours, not too many meetings (unless you're a manager), and we allow working from home or remote. No one minds socializing as long as you get work done. People are friendly and ", /* @__PURE__ */ v("em", null, "not on their phones"), ", which means they are ", /* @__PURE__ */ v("em", null, "engaged in their work."), " Many people have similar hobbies to me, and most everyone is approachable. ~80% of people take a lunch hour to workout and/or eat. Our 5-day work weeks are usually closer to 4 on average for most people. I'd call it a healthy workplace."), /* @__PURE__ */ v("h2", {
      id: "personal-growth"
    }, "Personal Growth"), /* @__PURE__ */ v("p", null, "In the past year, I've emerged as someone who intimately knows both the server-side and browser-side Javascript ecosystem, especially regarding build processes. I used to not understand ", /* @__PURE__ */ v("a", {
      href: "https://webpack.js.org/"
    }, "Webpack"), ", ", /* @__PURE__ */ v("a", {
      href: "https://babeljs.io/"
    }, "Babel"), ", ", /* @__PURE__ */ v("a", {
      href: "https://reactjs.org/"
    }, "React"), ", ", /* @__PURE__ */ v("a", {
      href: "https://www.gatsbyjs.org/"
    }, "Gatsby"), ", ", /* @__PURE__ */ v("a", {
      href: "https://www.typescriptlang.org/"
    }, "Typescript"), ", and ", /* @__PURE__ */ v("a", {
      href: "https://redux.js.org/"
    }, "Redux"), ", but now I feel very comfortable using all these tools. I can write and maintain HTML/JS comfortably, and I can stumble my way around writing CSS if needed. As a bonus, I've also been able to learn ", /* @__PURE__ */ v("a", {
      href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components"
    }, "Web components"), ", which I believe will become the de-facto standard for component libraries within the next year."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./javascript-logo.svg",
      alt: "Javascript logo",
      width: "128px"
    }), /* @__PURE__ */ v("figcaption", null, "I know more about Javascript than I care to admit.")), /* @__PURE__ */ v("h1", {
      id: "work-sucks"
    }, "Work Sucks"), /* @__PURE__ */ v("p", null, "While work is substantially better than my American high school or college, the truth is work sucks just like school. Even if I was being used to my maximum potential on projects that interest me and even if I was paid handsomely, I, like most Americans, would still be an ", /* @__PURE__ */ v("em", null, "indentured servant."), " And that ", /* @__PURE__ */ v("em", null, "sucks"), " because it means you trade your highest quality time for money. No doubt it's better than trading your lowest quality time for a degree like in school, but it's far from ideal. I want to trade my highest quality time to benefit humanity, which is why I ", /* @__PURE__ */ v("a", {
      href: "/posts/money/early-retirement"
    }, "plan to retire early"), "."), /* @__PURE__ */ v("h2", {
      id: "passions-ignite"
    }, "Passions Ignite"), /* @__PURE__ */ v("p", null, "I think as a country America worships work too much. When we meet an adult, we always ask them where they work. Much more interesting are their passions, beliefs, and family. Yet we seem all to often to forfeit those for work by working late hours, folding to company culture and deadlines, and putting kids in daycare. When someone is passionate about what they believe in and devotes time to it, I think they live a life with more fire and purpose that spreads. That's what work is supposed to be like."), /* @__PURE__ */ v("figure", null, /* @__PURE__ */ v("img", {
      src: "./campfire-adventurer.gif",
      alt: "Pixel art adventurer at campfire."
    }), /* @__PURE__ */ v("figcaption", null, "Be a passionate adventurer. Gif from a ", /* @__PURE__ */ v("a", {
      href: "https://codepen.io/jcoulterdesign/pen/yGgxOY"
    }, "genius CSS animation."))));
  }
});

// src/generated/index.js
var require_generated = __commonJS({
  "src/generated/index.js"(exports, module2) {
    module2.exports = {
      "/404": {
        Component: () => (init__(), __exports),
        "title": "Error 404 (Not found)!!1"
      },
      "/about": {
        Component: () => (init_about(), about_exports),
        "title": "About The Smart Won"
      },
      "/": {
        Component: () => (init_pages(), pages_exports),
        "title": "The Smart Blog"
      },
      "/posts/bikes/buying-used/": {
        Component: () => (init_index_md(), index_md_exports),
        "title": "Craigslist Bike Guide",
        "excerpt": "TLDR; I recently bought a bike after religiously checking Craigslist for a month, and I'd like to share the process I went through.",
        "timeToRead": 5,
        "dateLong": "January 10, 2018",
        "dateShort": "2018-01-10"
      },
      "/posts/bikes/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "Bikes posts",
        "subtitle": "Bikes are fun. Biking is fun."
      },
      "/posts/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "Posts",
        "subtitle": "I hope something tickles your fancy"
      },
      "/posts/coding/canvas-game-engine/part-1": {
        Component: () => (init_part_1_md(), part_1_md_exports),
        "title": "<Canvas> Game Engine: Part 1",
        "excerpt": "AAA titles like Fallout and Civilization V are usually usually written in low-level languages like C++ so they can directly access hardware (ie a GPU)\u2026",
        "timeToRead": 1.5,
        "dateLong": "July 21, 2019",
        "dateShort": "2019-07-21",
        "jsFileNames": [
          "part-1.5PVEFVZW.js"
        ]
      },
      "/posts/coding/canvas-game-engine/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "Canvas game engine posts",
        "subtitle": "Posts about a toy canvas game engine"
      },
      "/posts/coding/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "Coding posts",
        "subtitle": "Beep boop. Coding is like Legos. Move one lego and it all falls apart. But if you leave it alone, it's magnificant."
      },
      "/posts/coding/canvas-game-engine/part-2": {
        Component: () => (init_part_2_md(), part_2_md_exports),
        "title": "<Canvas> Game Engine: Part 2",
        "excerpt": "We left off with a canvas that looked like this: This game doesn't work without an HTML canvas :( It's not very exciting (or interactive), so let's st\u2026",
        "timeToRead": 1.5,
        "dateLong": "August 7, 2019",
        "dateShort": "2019-08-07",
        "jsFileNames": [
          "part-2.FIIBLTUI.js"
        ]
      },
      "/posts/coding/command-line/": {
        Component: () => (init_index_md2(), index_md_exports2),
        "title": "(Don't Fear) The Command Line",
        "excerpt": "For many, the command line is a scary prompt that reminds people of old computers that were hard to use.",
        "timeToRead": 3.5,
        "dateLong": "May 15, 2019",
        "dateShort": "2019-05-15"
      },
      "/posts/coding/this-site/v1/": {
        Component: () => (init_index_md3(), index_md_exports3),
        "title": "How v1 of this Site was Built",
        "excerpt": "You probably don't notice, but this site is nearly as fast as it can possibly be!",
        "timeToRead": 2,
        "dateLong": "May 12, 2019",
        "dateShort": "2019-05-12"
      },
      "/posts/coding/this-site/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "This site posts",
        "subtitle": "Handmade with lots of \u2764\uFE0F"
      },
      "/posts/coding/this-site/v2/": {
        Component: () => (init_index_md4(), index_md_exports4),
        "title": "How v2 of this Site was Built",
        "excerpt": "I ditched Gatsby. I decided to ditch Gatsby because after an update to how Gatsby's resources were loaded, my site wouldn't build anymore.",
        "timeToRead": 4,
        "dateLong": "August 9, 2019",
        "dateShort": "2019-08-09",
        "jsFileNames": [
          "index.P7VI5RYW.js"
        ]
      },
      "/posts/coding/this-site/v3/": {
        Component: () => (init_index_md5(), index_md_exports5),
        "title": "How this Site will Always be Built",
        "excerpt": "After getting nagged with 6 dependabot security vulnerabilities (which weren't actually vulnerabilities) I figured it was finally time to dust off thi\u2026",
        "timeToRead": 2,
        "dateLong": "May 12, 2021",
        "dateShort": "2021-05-12"
      },
      "/posts/money/early-retirement/": {
        Component: () => (init_index_md6(), index_md_exports6),
        "title": "How to Retire Early",
        "excerpt": "Brilliant, you'd like to quit your day job and do something more meaningful with your life. Now how do you do it?",
        "timeToRead": 4,
        "dateLong": "December 18, 2018",
        "dateShort": "2018-12-18",
        "jsFileNames": [
          "index.KJWO7WQB.js"
        ]
      },
      "/posts/money/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "Money posts",
        "subtitle": "Time is money, friend"
      },
      "/posts/money/market-timing/": {
        Component: () => (init_index_md7(), index_md_exports7),
        "title": "Timing Market Dips",
        "excerpt": "With all the Coronavirus panic the DOW has been falling off a cliff the past few days: DOW plummetting to $21k based on Yahoo finance data.",
        "timeToRead": 2,
        "dateLong": "March 14, 2020",
        "dateShort": "2020-03-14"
      },
      "/posts/money/one-year/": {
        Component: () => (init_index_md8(), index_md_exports8),
        "title": "My 2019 Spending",
        "excerpt": "It's time to come clean. I could never live off $24,000 like my retirement calculator's estimate is based off.",
        "timeToRead": 0.5,
        "dateLong": "February 24, 2020",
        "dateShort": "2020-02-24"
      },
      "/posts/school/grad-school/": {
        Component: () => (init_index_md9(), index_md_exports9),
        "title": "Is Grad School Worth it?",
        "excerpt": "Today, my Aunt told me: More lucrative job opportunities await you at my company with a Master's Degree.",
        "timeToRead": 2.5,
        "dateLong": "October 30, 2017",
        "dateShort": "2017-10-30"
      },
      "/posts/school/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "School posts",
        "subtitle": "School sucks"
      },
      "/posts/work/one-year/": {
        Component: () => (init_index_md10(), index_md_exports10),
        "title": "One Year of Work",
        "excerpt": "I've been working as a frontend build engineer for an open-source company one year now.",
        "timeToRead": 3,
        "dateLong": "February 2, 2020",
        "dateShort": "2020-02-02"
      },
      "/posts/work/": {
        Component: () => (init_post_index(), post_index_exports),
        "title": "Work posts",
        "subtitle": "Work sucks less than school"
      }
    };
  }
});

// src/entry.jsx
__markAsModule(exports);
__export(exports, {
  App: () => App,
  renderPage: () => renderPage,
  renderPost: () => renderPost
});
init_preact();
var import_preact_router = __toModule(require_preact_router());
var import_generated3 = __toModule(require_generated());

// src/templates/page.jsx
init_preact();

// node_modules/preact-render-to-string/dist/index.mjs
init_preact();
var r2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
var n2 = /[&<>"]/;
function o2(e2) {
  var t2 = String(e2);
  return n2.test(t2) ? t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t2;
}
var a2 = function(e2, t2) {
  return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
};
var i2 = function(e2, t2, r3) {
  return String(e2).length > (t2 || 40) || !r3 && String(e2).indexOf("\n") !== -1 || String(e2).indexOf("<") !== -1;
};
var l2 = {};
function s2(e2) {
  var t2 = "";
  for (var n3 in e2) {
    var o3 = e2[n3];
    o3 != null && o3 !== "" && (t2 && (t2 += " "), t2 += n3[0] == "-" ? n3 : l2[n3] || (l2[n3] = n3.replace(/([A-Z])/g, "-$1").toLowerCase()), t2 += ": ", t2 += o3, typeof o3 == "number" && r2.test(n3) === false && (t2 += "px"), t2 += ";");
  }
  return t2 || void 0;
}
function f2(e2, t2) {
  for (var r3 in t2)
    e2[r3] = t2[r3];
  return e2;
}
function u2(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(u2, e2) : t2 != null && t2 !== false && e2.push(t2), e2;
}
var c2 = {shallow: true};
var p = [];
var _2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
var v2 = /[\s\n\\/='"\0<>]/;
var d2 = function() {
};
m2.render = m2;
var g2 = function(e2, t2) {
  return m2(e2, t2, c2);
};
var h2 = [];
function m2(t2, r3, n3) {
  r3 = r3 || {}, n3 = n3 || {};
  var o3 = l.__s;
  l.__s = true;
  var a3 = x2(t2, r3, n3);
  return l.__c && l.__c(t2, h2), h2.length = 0, l.__s = o3, a3;
}
function x2(r3, n3, l3, c3, g3, h3) {
  if (r3 == null || typeof r3 == "boolean")
    return "";
  if (typeof r3 != "object")
    return o2(r3);
  var m3 = l3.pretty, y2 = m3 && typeof m3 == "string" ? m3 : "	";
  if (Array.isArray(r3)) {
    for (var b2 = "", S2 = 0; S2 < r3.length; S2++)
      m3 && S2 > 0 && (b2 += "\n"), b2 += x2(r3[S2], n3, l3, c3, g3, h3);
    return b2;
  }
  var w2, k2 = r3.type, O2 = r3.props, C2 = false;
  if (typeof k2 == "function") {
    if (C2 = true, !l3.shallow || !c3 && l3.renderRootComponent !== false) {
      if (k2 === d) {
        var A = [];
        return u2(A, r3.props.children), x2(A, n3, l3, l3.shallowHighOrder !== false, g3, h3);
      }
      var H2, j2 = r3.__c = {__v: r3, context: n3, props: r3.props, setState: d2, forceUpdate: d2, __h: []};
      if (l.__b && l.__b(r3), l.__r && l.__r(r3), k2.prototype && typeof k2.prototype.render == "function") {
        var F = k2.contextType, M2 = F && n3[F.__c], T2 = F != null ? M2 ? M2.props.value : F.__ : n3;
        (j2 = r3.__c = new k2(O2, T2)).__v = r3, j2._dirty = j2.__d = true, j2.props = O2, j2.state == null && (j2.state = {}), j2._nextState == null && j2.__s == null && (j2._nextState = j2.__s = j2.state), j2.context = T2, k2.getDerivedStateFromProps ? j2.state = f2(f2({}, j2.state), k2.getDerivedStateFromProps(j2.props, j2.state)) : j2.componentWillMount && (j2.componentWillMount(), j2.state = j2._nextState !== j2.state ? j2._nextState : j2.__s !== j2.state ? j2.__s : j2.state), H2 = j2.render(j2.props, j2.state, j2.context);
      } else {
        var $2 = k2.contextType, L2 = $2 && n3[$2.__c];
        H2 = k2.call(r3.__c, O2, $2 != null ? L2 ? L2.props.value : $2.__ : n3);
      }
      return j2.getChildContext && (n3 = f2(f2({}, n3), j2.getChildContext())), l.diffed && l.diffed(r3), x2(H2, n3, l3, l3.shallowHighOrder !== false, g3, h3);
    }
    k2 = (w2 = k2).displayName || w2 !== Function && w2.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r4 = -1, n4 = p.length; n4--; )
          if (p[n4] === e2) {
            r4 = n4;
            break;
          }
        r4 < 0 && (r4 = p.push(e2) - 1), t2 = "UnnamedComponent" + r4;
      }
      return t2;
    }(w2);
  }
  var E, D, N2 = "<" + k2;
  if (O2) {
    var P2 = Object.keys(O2);
    l3 && l3.sortAttributes === true && P2.sort();
    for (var R = 0; R < P2.length; R++) {
      var U = P2[R], W = O2[U];
      if (U !== "children") {
        if (!v2.test(U) && (l3 && l3.allAttributes || U !== "key" && U !== "ref" && U !== "__self" && U !== "__source" && U !== "defaultValue")) {
          if (U === "className") {
            if (O2.class)
              continue;
            U = "class";
          } else
            g3 && U.match(/^xlink:?./) && (U = U.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if (U === "htmlFor") {
            if (O2.for)
              continue;
            U = "for";
          }
          U === "style" && W && typeof W == "object" && (W = s2(W)), U[0] === "a" && U[1] === "r" && typeof W == "boolean" && (W = String(W));
          var q = l3.attributeHook && l3.attributeHook(U, W, n3, l3, C2);
          if (q || q === "")
            N2 += q;
          else if (U === "dangerouslySetInnerHTML")
            D = W && W.__html;
          else if (k2 === "textarea" && U === "value")
            E = W;
          else if ((W || W === 0 || W === "") && typeof W != "function") {
            if (!(W !== true && W !== "" || (W = U, l3 && l3.xml))) {
              N2 += " " + U;
              continue;
            }
            if (U === "value") {
              if (k2 === "select") {
                h3 = W;
                continue;
              }
              k2 === "option" && h3 == W && (N2 += " selected");
            }
            N2 += " " + U + '="' + o2(W) + '"';
          }
        }
      } else
        E = W;
    }
  }
  if (m3) {
    var z2 = N2.replace(/\n\s*/, " ");
    z2 === N2 || ~z2.indexOf("\n") ? m3 && ~N2.indexOf("\n") && (N2 += "\n") : N2 = z2;
  }
  if (N2 += ">", v2.test(k2))
    throw new Error(k2 + " is not a valid HTML tag name in " + N2);
  var I2, V = _2.test(k2) || l3.voidElements && l3.voidElements.test(k2), Z = [];
  if (D)
    m3 && i2(D) && (D = "\n" + y2 + a2(D, y2)), N2 += D;
  else if (E != null && u2(I2 = [], E).length) {
    for (var B = m3 && ~N2.indexOf("\n"), G = false, J = 0; J < I2.length; J++) {
      var K = I2[J];
      if (K != null && K !== false) {
        var Q = x2(K, n3, l3, true, k2 === "svg" || k2 !== "foreignObject" && g3, h3);
        if (m3 && !B && i2(Q) && (B = true), Q)
          if (m3) {
            var X = Q.length > 0 && Q[0] != "<";
            G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
          } else
            Z.push(Q);
      }
    }
    if (m3 && B)
      for (var Y = Z.length; Y--; )
        Z[Y] = "\n" + y2 + a2(Z[Y], y2);
  }
  if (Z.length || D)
    N2 += Z.join("");
  else if (l3 && l3.xml)
    return N2.substring(0, N2.length - 1) + " />";
  return !V || I2 || D ? (m3 && ~N2.indexOf("\n") && (N2 += "\n"), N2 += "</" + k2 + ">") : N2 = N2.replace(/>$/, " />"), N2;
}
m2.shallowRender = g2;
var dist_default = m2;

// src/templates/html.jsx
init_preact();
var HTML = ({
  children,
  title: title4,
  cssFileName,
  jsFileNames = [],
  excerpt
}) => /* @__PURE__ */ v("html", {
  lang: "en-US"
}, /* @__PURE__ */ v("head", null, /* @__PURE__ */ v("meta", {
  charset: "UTF-8"
}), /* @__PURE__ */ v("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), /* @__PURE__ */ v("meta", {
  name: "color-scheme",
  content: "dark light"
}), excerpt && /* @__PURE__ */ v("meta", {
  name: "description",
  content: excerpt
}), /* @__PURE__ */ v("title", null, title4 || "thesmartwon.com"), cssFileName && /* @__PURE__ */ v("link", {
  rel: "stylesheet",
  type: "text/css",
  href: cssFileName
}), /* @__PURE__ */ v("link", {
  rel: "shortcut icon",
  href: "/favicon.png"
}), /* @__PURE__ */ v("link", {
  rel: "manifest",
  href: "/manifest.webmanifest"
}), /* @__PURE__ */ v("link", {
  rel: "alternate",
  type: "application/rss+xml",
  title: "The Smart Blog \u2022 Feed",
  href: "/feed"
}), /* @__PURE__ */ v("meta", {
  name: "theme-color",
  content: "#00D1B2"
})), /* @__PURE__ */ v("body", null, children, jsFileNames.map((fileName) => /* @__PURE__ */ v("script", {
  src: fileName
}))));

// src/templates/page.jsx
var renderPage = ({
  title: title4,
  cssFileName,
  children
}) => "<!DOCTYPE html>" + dist_default(/* @__PURE__ */ v(HTML, {
  title: title4,
  cssFileName
}, children));

// src/templates/post.jsx
init_preact();
init_center_layout();
init_link();
var PostTemplate = ({
  title: title4,
  dateShort,
  dateLong,
  timeToRead,
  path,
  children,
  hasJavascript,
  isFullscreen
}) => /* @__PURE__ */ v(center_layout_default, {
  title: /* @__PURE__ */ v("h1", {
    className: "title is-2"
  }, title4),
  subtitle: /* @__PURE__ */ v("span", {
    className: "time-to-read"
  }, /* @__PURE__ */ v("time", {
    dateTime: dateShort
  }, dateLong), " \xB7 ", timeToRead, " min read"),
  hasJavascript,
  isFullscreen,
  path,
  footer: /* @__PURE__ */ v(d, null, /* @__PURE__ */ v(link_default, {
    href: "#"
  }, "Back to top"), " / ", /* @__PURE__ */ v(link_default, {
    href: "/posts/"
  }, "View all posts"))
}, isFullscreen ? children : /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
  id: "content",
  className: "content"
}, children)));
var renderPost = ({
  path,
  title: title4,
  excerpt,
  cssFileName,
  jsFileNames,
  dateShort,
  dateLong,
  timeToRead,
  isFullscreen,
  children
}) => "<!DOCTYPE html>\n" + dist_default(/* @__PURE__ */ v(HTML, {
  title: title4,
  excerpt,
  cssFileName,
  jsFileNames
}, /* @__PURE__ */ v(PostTemplate, {
  path,
  title: title4,
  dateShort,
  dateLong,
  timeToRead,
  excerpt,
  hasJavascript: jsFileNames,
  isFullscreen
}, children)));

// src/entry.jsx
var App = () => /* @__PURE__ */ v(import_preact_router.default, null, Object.entries(import_generated3.default).map(([slug, {Component, ...props}]) => {
  Component = Component().default;
  return /* @__PURE__ */ v(Component, {
    path: slug,
    ...props
  });
}));
if (typeof document !== "undefined") {
  S(/* @__PURE__ */ v(App, null), document.getElementById("main"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App,
  renderPage,
  renderPost
});
