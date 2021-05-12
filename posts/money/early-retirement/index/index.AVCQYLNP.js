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

  // src/components/link.jsx
  var link_default = ({href, className, children}) => /* @__PURE__ */ v("a", {
    href,
    className
  }, children);

  // src/helpers/retire.js
  var min = (a2, b) => a2 > b ? b : a2;
  var max = (a2, b) => a2 > b ? a2 : b;
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
  var addValues = (accounts) => Object.values(accounts).reduce((a2, b) => a2 + b);
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
  var RetirementCalc = class extends d {
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
      projection.forEach((year) => totalSaved += Object.values(year.contributions).reduce((a2, b) => a2 + b));
      const tabs = [
        {num: 1, caption: "Income"},
        {num: 2, caption: "Contributions"},
        {num: 3, caption: "Initial balances"},
        {num: 4, caption: "Assumptions"}
      ];
      return /* @__PURE__ */ v("div", {
        id: "retirementCalc"
      }, /* @__PURE__ */ v("div", {
        className: "tabs is-centered is-boxed"
      }, /* @__PURE__ */ v("ul", null, tabs.map((tab) => /* @__PURE__ */ v("li", {
        key: tab.num,
        className: this.state.tabShown === tab.num ? "is-active" : ""
      }, /* @__PURE__ */ v("a", {
        onClick: () => this.setState({tabShown: tab.num})
      }, tab.caption))))), this.state.tabShown === 1 && /* @__PURE__ */ v("div", {
        className: "field-body"
      }, /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "Income"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-success",
        type: "number",
        step: "1000",
        value: this.state.income,
        onChange: (event) => this.setState({income: Number(event.target.value)})
      })), /* @__PURE__ */ v("p", {
        className: "help"
      }, "Your salary")), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "Expenses"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-danger",
        type: "number",
        step: "100",
        value: this.state.expenses,
        onChange: (event) => this.setState({expenses: Number(event.target.value)})
      })), /* @__PURE__ */ v("p", {
        className: "help"
      }, "This is the most important variable")), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "Status"), /* @__PURE__ */ v("div", {
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
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "HSA"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
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
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "401k"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "100",
        value: this.state.desiredContributions.k401,
        onChange: (event) => this.setDesired("k401", event.target.value)
      })), /* @__PURE__ */ v("p", {
        className: "help"
      }, "Desired 401k contribution")), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "401k Match"), /* @__PURE__ */ v("div", {
        className: "control has-icons-right",
        style: {width: "7rem"}
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "1",
        value: this.state.k401match,
        onChange: (event) => this.setState({k401match: Number(event.target.value)})
      }), /* @__PURE__ */ v("span", {
        className: "icon is-right is-centered"
      }, /* @__PURE__ */ v("i", null, "%"))), /* @__PURE__ */ v("p", {
        className: "help"
      }, "Employer's match"))), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "IRA"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
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
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "HSA"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "100",
        value: this.state.initialBalances.hsa,
        onChange: (event) => this.setBalance("hsa", event.target.value)
      })), /* @__PURE__ */ v("p", {
        className: "help"
      }, "Initial HSA balance")), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "401k"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "100",
        value: this.state.initialBalances.k401,
        onChange: (event) => this.setBalance("k401", event.target.value)
      })), /* @__PURE__ */ v("p", {
        className: "help"
      }, "Initial 401k balance")), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "IRA"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "100",
        value: this.state.initialBalances.ira,
        onChange: (event) => this.setBalance("ira", event.target.value)
      })), /* @__PURE__ */ v("p", {
        className: "help"
      }, "Initial IRA balance")), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "After tax"), /* @__PURE__ */ v("div", {
        className: "control"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
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
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "Safe Withdrawal Rate"), /* @__PURE__ */ v("div", {
        className: "control has-icons-right"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "0.25",
        value: this.state.safeWithdrawal,
        onChange: (event) => this.setState({safeWithdrawal: Number(event.target.value)})
      }), /* @__PURE__ */ v("span", {
        className: "icon is-right is-centered"
      }, /* @__PURE__ */ v("i", null, "%"))), /* @__PURE__ */ v("p", {
        className: "help"
      }, /* @__PURE__ */ v(link_default, {
        href: "https://www.madfientist.com/safe-withdrawal-rate/"
      }, "Nest Egg * Safe Withdrawal > Expenses"))), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "Effective Growth Rate"), /* @__PURE__ */ v("div", {
        className: "control has-icons-right"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "0.5",
        value: this.state.effectiveGrowth,
        onChange: (event) => this.setState({effectiveGrowth: Number(event.target.value)})
      }), /* @__PURE__ */ v("span", {
        className: "icon is-right is-centered"
      }, /* @__PURE__ */ v("i", null, "%"))), /* @__PURE__ */ v("p", {
        className: "help"
      }, /* @__PURE__ */ v(link_default, {
        href: "https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"
      }, "Average ", "S&P", " 500 Growth"), " -", /* @__PURE__ */ v(link_default, {
        href: "https://tradingeconomics.com/united-states/inflation-cpi"
      }, " Inflation"))), /* @__PURE__ */ v("div", {
        className: "field"
      }, /* @__PURE__ */ v("label", {
        className: "label"
      }, "Raise Rate"), /* @__PURE__ */ v("div", {
        className: "control has-icons-right"
      }, /* @__PURE__ */ v("input", {
        className: "input is-primary",
        type: "number",
        step: "0.5",
        value: this.state.raise,
        onChange: (event) => this.setState({raise: Number(event.target.value)})
      }), /* @__PURE__ */ v("span", {
        className: "icon is-right is-centered"
      }, /* @__PURE__ */ v("i", null, "%"))), /* @__PURE__ */ v("p", {
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
  M(v(RetirementCalc), root, root);
})();
