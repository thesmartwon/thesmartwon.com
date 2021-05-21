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

  // src/components/link.jsx
  var link_default = ({href, className, children}) => /* @__PURE__ */ a("a", {
    href,
    className
  }, children);

  // posts/money/early-retirement/helpers.js
  var min = (a2, b2) => a2 > b2 ? b2 : a2;
  var max = (a2, b2) => a2 > b2 ? a2 : b2;
  var fedTaxRate = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
  var fedTaxBrackets = {
    single: [0, 9875, 40125, 85525, 163300, 207350, 518400],
    married: [0, 19750, 80250, 171050, 326600, 414700, 622050],
    head: [0, 14100, 53700, 85500, 163300, 207350, 518400]
  };
  var standardDeductions = {
    single: 12400,
    married: 24800,
    head: 18650
  };
  var calcFedTax = (income, status, contributions) => {
    let incomeTax = 0;
    let agi = income - standardDeductions[status] - contributions.k401 - contributions.hsa;
    const bracket = fedTaxBrackets[status];
    for (let i2 = 1; i2 < bracket.length; i2++) {
      const taxed = min(agi, bracket[i2] - bracket[i2 - 1]);
      agi -= taxed;
      incomeTax += taxed * fedTaxRate[i2];
    }
    return incomeTax + agi * (0.062 + 0.29);
  };
  var calcStateTax = (agi, contributions) => {
    return (agi - 8750 - contributions.hsa - contributions.k401) * 0.05499;
  };
  var addValues = (accounts) => Object.values(accounts).reduce((a2, b2) => a2 + b2);
  var projectRetirement = (income, raise, safeWithdrawal, effectiveGrowth, k401match, status, expenses, desiredContributions, initialBalances) => {
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

  // posts/money/early-retirement/retirement-calc.jsx
  var RetirementCalc = class extends p {
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
      projection.forEach((year) => totalSaved += Object.values(year.contributions).reduce((a2, b2) => a2 + b2));
      const tabs = [
        {num: 1, caption: "Income"},
        {num: 2, caption: "Contributions"},
        {num: 3, caption: "Balances"},
        {num: 4, caption: "Assumptions"}
      ];
      return /* @__PURE__ */ a("div", {
        id: "retirementCalc"
      }, /* @__PURE__ */ a("div", {
        className: "tabs"
      }, /* @__PURE__ */ a("ul", null, tabs.map((tab) => /* @__PURE__ */ a("li", {
        key: tab.num,
        className: this.state.tabShown === tab.num ? "is-active" : ""
      }, /* @__PURE__ */ a("a", {
        onClick: () => this.setState({tabShown: tab.num})
      }, tab.caption))))), this.state.tabShown === 1 && /* @__PURE__ */ a("div", {
        className: "field-body"
      }, /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Income"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        type: "number",
        step: "1000",
        value: this.state.income,
        onChange: (event) => this.setState({income: Number(event.target.value)})
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Your salary")), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Expenses"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        type: "number",
        step: "100",
        value: this.state.expenses,
        onChange: (event) => this.setState({expenses: Number(event.target.value)})
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "This is the most important variable")), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Status"), /* @__PURE__ */ a("div", {
        className: "control select is-warning"
      }, /* @__PURE__ */ a("select", {
        onChange: (event) => this.setState({status: event.target.value}),
        value: this.state.status
      }, Object.keys(fedTaxBrackets).map((key) => /* @__PURE__ */ a("option", {
        value: key,
        key
      }, key)))), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Your federal tax status"))), this.state.tabShown === 2 && /* @__PURE__ */ a("div", {
        className: "field-body"
      }, /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "HSA"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.desiredContributions.hsa,
        onChange: (event) => this.setDesired("hsa", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Desired HSA contribution")), /* @__PURE__ */ a("div", {
        className: "field is-grouped"
      }, /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "401k"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.desiredContributions.k401,
        onChange: (event) => this.setDesired("k401", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Desired 401k contribution")), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Match"), /* @__PURE__ */ a("div", {
        className: "control has-icons-right",
        style: {width: "7rem"}
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "1",
        value: this.state.k401match,
        onChange: (event) => this.setState({k401match: Number(event.target.value)})
      }), /* @__PURE__ */ a("span", {
        className: "icon is-right"
      }, "%")), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Employer's 401k match"))), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "IRA"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.desiredContributions.ira,
        onChange: (event) => this.setDesired("ira", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Desired IRA contribution"))), this.state.tabShown === 3 && /* @__PURE__ */ a("div", {
        className: "field-body"
      }, /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "HSA"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.initialBalances.hsa,
        onChange: (event) => this.setBalance("hsa", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Initial HSA balance")), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "401k"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.initialBalances.k401,
        onChange: (event) => this.setBalance("k401", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Initial 401k balance")), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "IRA"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.initialBalances.ira,
        onChange: (event) => this.setBalance("ira", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Initial IRA balance")), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "After tax"), /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "100",
        value: this.state.initialBalances.afterTax,
        onChange: (event) => this.setBalance("afterTax", event.target.value)
      })), /* @__PURE__ */ a("p", {
        className: "help"
      }, "Initial after tax accounts balance"))), this.state.tabShown === 4 && /* @__PURE__ */ a("div", {
        className: "field-body"
      }, /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Safe Withdrawal Rate"), /* @__PURE__ */ a("div", {
        className: "control has-icons-right"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "0.25",
        value: this.state.safeWithdrawal,
        onChange: (event) => this.setState({safeWithdrawal: Number(event.target.value)})
      }), /* @__PURE__ */ a("span", {
        className: "icon is-right"
      }, "%")), /* @__PURE__ */ a("p", {
        className: "help"
      }, /* @__PURE__ */ a(link_default, {
        href: "https://www.madfientist.com/safe-withdrawal-rate/"
      }, "Nest Egg * Safe Withdrawal > Expenses"))), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Effective Growth Rate"), /* @__PURE__ */ a("div", {
        className: "control has-icons-right"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "0.5",
        value: this.state.effectiveGrowth,
        onChange: (event) => this.setState({effectiveGrowth: Number(event.target.value)})
      }), /* @__PURE__ */ a("span", {
        className: "icon is-right"
      }, "%")), /* @__PURE__ */ a("p", {
        className: "help"
      }, /* @__PURE__ */ a(link_default, {
        href: "https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"
      }, "Average ", "S&P", " 500 Growth"), " -", /* @__PURE__ */ a(link_default, {
        href: "https://tradingeconomics.com/united-states/inflation-cpi"
      }, " Inflation"))), /* @__PURE__ */ a("div", {
        className: "field"
      }, /* @__PURE__ */ a("label", null, "Raise Rate"), /* @__PURE__ */ a("div", {
        className: "control has-icons-right"
      }, /* @__PURE__ */ a("input", {
        className: "input",
        type: "number",
        step: "0.5",
        value: this.state.raise,
        onChange: (event) => this.setState({raise: Number(event.target.value)})
      }), /* @__PURE__ */ a("span", {
        className: "icon is-right"
      }, "%")), /* @__PURE__ */ a("p", {
        className: "help"
      }, "How fast you progress in your career"))), /* @__PURE__ */ a("hr", null), /* @__PURE__ */ a("table", {
        className: "table is-narrow is-fullwidth is-striped"
      }, /* @__PURE__ */ a("thead", null, /* @__PURE__ */ a("tr", null, /* @__PURE__ */ a("th", null, "Year"), /* @__PURE__ */ a("th", null, "Income"), /* @__PURE__ */ a("th", null, "Tax"), /* @__PURE__ */ a("th", null, "HSA"), /* @__PURE__ */ a("th", null, "401k"), /* @__PURE__ */ a("th", null, "IRA"), /* @__PURE__ */ a("th", null, "After Tax"), /* @__PURE__ */ a("th", null, "Nest Egg"))), /* @__PURE__ */ a("tbody", null, projection.map((year) => /* @__PURE__ */ a("tr", {
        key: year.year
      }, /* @__PURE__ */ a("td", null, year.year), /* @__PURE__ */ a("td", null, this.format(year.income)), /* @__PURE__ */ a("td", null, this.format(year.tax)), /* @__PURE__ */ a("td", null, this.format(year.accounts.hsa), this.state.showContributions && /* @__PURE__ */ a("span", {
        className: "tag is-success"
      }, "+", this.format(year.contributions.hsa)), this.state.showGains && /* @__PURE__ */ a("span", {
        className: "tag is-primary"
      }, "+", this.format(year.growth.hsa))), /* @__PURE__ */ a("td", null, this.format(year.accounts.k401), this.state.showContributions && /* @__PURE__ */ a("span", {
        className: "tag is-success"
      }, "+", this.format(year.contributions.k401)), this.state.showGains && /* @__PURE__ */ a("span", {
        className: "tag is-primary"
      }, "+", this.format(year.growth.k401))), /* @__PURE__ */ a("td", null, this.format(year.accounts.ira), this.state.showContributions && /* @__PURE__ */ a("span", {
        className: "tag is-success"
      }, "+", this.format(year.contributions.ira)), this.state.showGains && /* @__PURE__ */ a("span", {
        className: "tag is-primary"
      }, "+", this.format(year.growth.ira))), /* @__PURE__ */ a("td", null, this.format(year.accounts.afterTax), this.state.showContributions && /* @__PURE__ */ a("span", {
        className: "tag is-success"
      }, "+", this.format(year.contributions.afterTax)), this.state.showGains && /* @__PURE__ */ a("span", {
        className: "tag is-primary"
      }, "+", this.format(year.growth.afterTax))), /* @__PURE__ */ a("td", null, this.format(year.total)))))), /* @__PURE__ */ a("div", {
        className: "field is-horizontal"
      }, /* @__PURE__ */ a("div", {
        className: "control"
      }, /* @__PURE__ */ a("label", {
        className: "checkbox"
      }, /* @__PURE__ */ a("input", {
        type: "checkbox",
        checked: this.state.showGains,
        onChange: (event) => this.setState({showGains: event.target.checked})
      }), "Show gains")), /* @__PURE__ */ a("div", {
        className: "control",
        style: {marginLeft: "1rem"}
      }, /* @__PURE__ */ a("label", {
        className: "checkbox"
      }, /* @__PURE__ */ a("input", {
        type: "checkbox",
        checked: this.state.showContributions,
        onChange: (event) => this.setState({showContributions: event.target.checked})
      }), "Show contributions"))), /* @__PURE__ */ a("p", null, /* @__PURE__ */ a("b", null, projection.length), " years to retirement / ", /* @__PURE__ */ a("b", null, this.format(finalNestEgg * this.state.safeWithdrawal / 100)), " withdrawable per year / ", /* @__PURE__ */ a("b", null, this.format(totalSaved)), " total contributions"));
    }
  };

  // posts/money/early-retirement/index.js
  var root = document.getElementById("retirementCalc");
  N(a(RetirementCalc), root, root);
})();
