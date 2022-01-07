(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function v(l2, u2, i2) {
    var t2, r2, o2, f2 = {};
    for (o2 in u2)
      o2 == "key" ? t2 = u2[o2] : o2 == "ref" ? r2 = u2[o2] : f2[o2] = u2[o2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
      for (o2 in l2.defaultProps)
        f2[o2] === void 0 && (f2[o2] = l2.defaultProps[o2]);
    return y(l2, f2, t2, r2, null);
  }
  function y(n2, i2, t2, r2, o2) {
    var f2 = {type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++u : o2};
    return o2 == null && l.vnode != null && l.vnode(f2), f2;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function k(n2, l2) {
    if (l2 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u2, i2, t2, r2, o2;
        n3.__d && (r2 = (t2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (i2 = a({}, t2)).__v = t2.__v + 1, j(o2, t2, i2, l2.__n, o2.ownerSVGElement !== void 0, t2.__h != null ? [r2] : null, u2, r2 == null ? k(t2) : r2, t2.__h), z(u2, t2), t2.__e != r2 && b(t2)));
      });
  }
  function w(n2, l2, u2, i2, t2, r2, o2, f2, s2, a2) {
    var h2, v2, p, _2, b2, m2, g2, w2 = i2 && i2.__k || c, A = w2.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, {children: _2}, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u2, _2.__b = u2.__b + 1, (p = w2[h2]) === null || p && _2.key == p.key && _2.type === p.type)
          w2[h2] = void 0;
        else
          for (v2 = 0; v2 < A; v2++) {
            if ((p = w2[v2]) && _2.key == p.key && _2.type === p.type) {
              w2[v2] = void 0;
              break;
            }
            p = null;
          }
        j(n2, _2, p = p || e, t2, r2, o2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p.ref != v2 && (g2 || (g2 = []), p.ref && g2.push(p.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p.__e == s2 && s2.parentNode != n2 && (s2 = k(p));
      }
    for (u2.__e = m2, h2 = A; h2--; )
      w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k(i2, h2 + 1)), N(w2[h2], w2[h2]));
    if (g2)
      for (h2 = 0; h2 < g2.length; h2++)
        M(g2[h2], g2[++h2], g2[++h2]);
  }
  function x(n2, l2, u2) {
    for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
      (i2 = t2[r2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? x(i2, l2, u2) : P(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function P(n2, l2, u2, i2, t2, r2) {
    var o2, f2, e2;
    if (l2.__d !== void 0)
      o2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || t2 != r2 || t2.parentNode == null)
      n:
        if (r2 == null || r2.parentNode !== n2)
          n2.appendChild(t2), o2 = null;
        else {
          for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, r2), o2 = r2;
        }
    return o2 !== void 0 ? o2 : t2.nextSibling;
  }
  function C(n2, l2, u2, i2, t2) {
    var r2;
    for (r2 in u2)
      r2 === "children" || r2 === "key" || r2 in l2 || H(n2, r2, null, u2[r2], i2);
    for (r2 in l2)
      t2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || H(n2, r2, l2[r2], u2[r2], i2);
  }
  function $(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s.test(l2) ? u2 : u2 + "px";
  }
  function H(n2, l2, u2, i2, t2) {
    var r2;
    n:
      if (l2 === "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || $(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
        }
      else if (l2[0] === "o" && l2[1] === "n")
        r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? T : I, r2) : n2.removeEventListener(l2, r2 ? T : I, r2);
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
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
    var s2, h2, v2, y2, p, k2, b2, m2, g2, x2, A, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l.__b) && s2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p = h2.state, v2)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i2.__v) {
              h2.props = m2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p, k2);
            });
          }
          h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a(a({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p)), A = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A) ? A : [A], u2, i2, t2, r2, o2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          o2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, r2, o2, f2, c2);
      (s2 = l.diffed) && s2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || o2 != null) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function z(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function L(l2, u2, i2, t2, r2, o2, f2, c2) {
    var s2, a2, v2, y2 = i2.props, p = u2.props, d2 = u2.type, _2 = 0;
    if (d2 === "svg" && (r2 = true), o2 != null) {
      for (; _2 < o2.length; _2++)
        if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
          l2 = s2, o2[_2] = null;
          break;
        }
    }
    if (l2 == null) {
      if (d2 === null)
        return document.createTextNode(p);
      l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p.is && p), o2 = null, c2 = false;
    }
    if (d2 === null)
      y2 === p || c2 && l2.data === p || (l2.data = p);
    else {
      if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || e).dangerouslySetInnerHTML, v2 = p.dangerouslySetInnerHTML, !c2) {
        if (o2 != null)
          for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
            y2[l2.attributes[_2].name] = l2.attributes[_2].value;
        (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l2, p, y2, r2, c2), v2)
        u2.__k = [];
      else if (_2 = u2.props.children, w(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && d2 !== "foreignObject", o2, f2, o2 ? o2[0] : i2.__k && k(i2, 0), c2), o2 != null)
        for (_2 = o2.length; _2--; )
          o2[_2] != null && h(o2[_2]);
      c2 || ("value" in p && (_2 = p.value) !== void 0 && (_2 !== y2.value || _2 !== l2.value || d2 === "progress" && !_2) && H(l2, "value", _2, y2.value, false), "checked" in p && (_2 = p.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y2.checked, false));
    }
    return l2;
  }
  function M(n2, u2, i2) {
    try {
      typeof n2 == "function" ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function N(n2, u2, i2) {
    var t2, r2;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), (t2 = n2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = n2.__k)
      for (r2 = 0; r2 < t2.length; r2++)
        t2[r2] && N(t2[r2], u2, typeof n2.type != "function");
    i2 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function S(u2, i2, t2) {
    var r2, o2, f2;
    l.__ && l.__(u2, i2), o2 = (r2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, f2 = [], j(i2, u2 = (!r2 && t2 || i2).__k = v(d, null, [u2]), o2 || e, e, i2.ownerSVGElement !== void 0, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), z(f2, u2);
  }
  n = c.slice, l = {__e: function(n2, l2) {
    for (var u2, i2, t2; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
            return u2.__E = u2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  }}, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u2), this.props)), n2 && a(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // src/components/link.jsx
  var link_default = ({href, className, children}) => /* @__PURE__ */ v("a", {
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
  var RetirementCalc = class extends _ {
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

  // posts/money/early-retirement/index.js
  var root = document.getElementById("retirementCalc");
  S(v(RetirementCalc), root, root);
})();
