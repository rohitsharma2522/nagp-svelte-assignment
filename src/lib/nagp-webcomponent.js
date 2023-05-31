function E() {
}
const lt = (t) => t;
function ke(t) {
  return t();
}
function Ze() {
  return /* @__PURE__ */ Object.create(null);
}
function V(t) {
  t.forEach(ke);
}
function oe(t) {
  return typeof t == "function";
}
function ce(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let pe;
function Je(t, e) {
  return pe || (pe = document.createElement("a")), pe.href = e, t === pe.href;
}
function it(t) {
  return Object.keys(t).length === 0;
}
const qe = typeof window < "u";
let rt = qe ? () => window.performance.now() : () => Date.now(), Ee = qe ? (t) => requestAnimationFrame(t) : E;
const K = /* @__PURE__ */ new Set();
function Ke(t) {
  K.forEach((e) => {
    e.c(t) || (K.delete(e), e.f());
  }), K.size !== 0 && Ee(Ke);
}
function ot(t) {
  let e;
  return K.size === 0 && Ee(Ke), {
    promise: new Promise((n) => {
      K.add(e = { c: t, f: n });
    }),
    abort() {
      K.delete(e);
    }
  };
}
const st = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in st;
function f(t, e) {
  t.appendChild(e);
}
function Xe(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function at(t) {
  const e = h("style");
  return ct(Xe(t), e), e.sheet;
}
function ct(t, e) {
  return f(t.head || t, e), e.sheet;
}
function j(t, e, n) {
  t.insertBefore(e, n || null);
}
function P(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Qe(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function h(t) {
  return document.createElement(t);
}
function D(t) {
  return document.createTextNode(t);
}
function M() {
  return D(" ");
}
function Fe() {
  return D("");
}
function W(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function b(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ut(t) {
  return Array.from(t.childNodes);
}
function Ne(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Se(t, e) {
  t.value = e ?? "";
}
function je(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
function he(t, e, n) {
  for (let l = 0; l < t.options.length; l += 1) {
    const i = t.options[l];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function He(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Ye(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, l, e), i;
}
function ue(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
const _e = /* @__PURE__ */ new Map();
let ge = 0;
function ft(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function dt(t, e) {
  const n = { stylesheet: at(e), rules: {} };
  return _e.set(t, n), n;
}
function Le(t, e, n, l, i, o, r, s = 0) {
  const c = 16.666 / l;
  let u = `{
`;
  for (let I = 0; I <= 1; I += c) {
    const m = e + (n - e) * o(I);
    u += I * 100 + `%{${r(m, 1 - m)}}
`;
  }
  const y = u + `100% {${r(n, 1 - n)}}
}`, p = `__svelte_${ft(y)}_${s}`, d = Xe(t), { stylesheet: a, rules: g } = _e.get(d) || dt(d, t);
  g[p] || (g[p] = !0, a.insertRule(`@keyframes ${p} ${y}`, a.cssRules.length));
  const w = t.style.animation || "";
  return t.style.animation = `${w ? `${w}, ` : ""}${p} ${l}ms linear ${i}ms 1 both`, ge += 1, p;
}
function pt(t, e) {
  const n = (t.style.animation || "").split(", "), l = n.filter(
    e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = n.length - l.length;
  i && (t.style.animation = l.join(", "), ge -= i, ge || ht());
}
function ht() {
  Ee(() => {
    ge || (_e.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && P(e);
    }), _e.clear());
  });
}
let se;
function re(t) {
  se = t;
}
function mt() {
  if (!se)
    throw new Error("Function called outside component initialization");
  return se;
}
function _t() {
  const t = mt();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Ye(e, n, { cancelable: l });
      return i.slice().forEach((r) => {
        r.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const q = [], be = [];
let X = [];
const we = [], gt = /* @__PURE__ */ Promise.resolve();
let Ie = !1;
function bt() {
  Ie || (Ie = !0, gt.then(H));
}
function U(t) {
  X.push(t);
}
function Ge(t) {
  we.push(t);
}
const ve = /* @__PURE__ */ new Set();
let J = 0;
function H() {
  if (J !== 0)
    return;
  const t = se;
  do {
    try {
      for (; J < q.length; ) {
        const e = q[J];
        J++, re(e), yt(e.$$);
      }
    } catch (e) {
      throw q.length = 0, J = 0, e;
    }
    for (re(null), q.length = 0, J = 0; be.length; )
      be.pop()();
    for (let e = 0; e < X.length; e += 1) {
      const n = X[e];
      ve.has(n) || (ve.add(n), n());
    }
    X.length = 0;
  } while (q.length);
  for (; we.length; )
    we.pop()();
  Ie = !1, ve.clear(), re(t);
}
function yt(t) {
  if (t.fragment !== null) {
    t.update(), V(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(U);
  }
}
function vt(t) {
  const e = [], n = [];
  X.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), X = e;
}
let ie;
function $t() {
  return ie || (ie = Promise.resolve(), ie.then(() => {
    ie = null;
  })), ie;
}
function $e(t, e, n) {
  t.dispatchEvent(Ye(`${e ? "intro" : "outro"}${n}`));
}
const me = /* @__PURE__ */ new Set();
let O;
function Ce() {
  O = {
    r: 0,
    c: [],
    p: O
    // parent group
  };
}
function xe() {
  O.r || V(O.c), O = O.p;
}
function S(t, e) {
  t && t.i && (me.delete(t), t.i(e));
}
function G(t, e, n, l) {
  if (t && t.o) {
    if (me.has(t))
      return;
    me.add(t), O.c.push(() => {
      me.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const wt = { duration: 0 };
function Te(t, e, n, l) {
  const i = { direction: "both" };
  let o = e(t, n, i), r = l ? 0 : 1, s = null, c = null, u = null;
  function y() {
    u && pt(t, u);
  }
  function p(a, g) {
    const w = a.b - r;
    return g *= Math.abs(w), {
      a: r,
      b: a.b,
      d: w,
      duration: g,
      start: a.start,
      end: a.start + g,
      group: a.group
    };
  }
  function d(a) {
    const { delay: g = 0, duration: w = 300, easing: I = lt, tick: m = E, css: $ } = o || wt, v = {
      start: rt() + g,
      b: a
    };
    a || (v.group = O, O.r += 1), s || c ? c = v : ($ && (y(), u = Le(t, r, a, w, g, I, $)), a && m(0, 1), s = p(v, w), U(() => $e(t, a, "start")), ot((x) => {
      if (c && x > c.start && (s = p(c, w), c = null, $e(t, s.b, "start"), $ && (y(), u = Le(t, r, s.b, s.duration, 0, I, o.css))), s) {
        if (x >= s.end)
          m(r = s.b, 1 - r), $e(t, s.b, "end"), c || (s.b ? y() : --s.group.r || V(s.group.c)), s = null;
        else if (x >= s.start) {
          const _ = x - s.start;
          r = s.a + s.d * I(_ / s.duration), m(r, 1 - r);
        }
      }
      return !!(s || c);
    }));
  }
  return {
    run(a) {
      oe(o) ? $t().then(() => {
        o = o(i), d(a);
      }) : d(a);
    },
    end() {
      y(), s = c = null;
    }
  };
}
const It = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...It];
function Pe(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function ae(t) {
  t && t.c();
}
function Q(t, e, n, l) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), l || U(() => {
    const r = t.$$.on_mount.map(ke).filter(oe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : V(r), t.$$.on_mount = [];
  }), o.forEach(U);
}
function Y(t, e) {
  const n = t.$$;
  n.fragment !== null && (vt(n.after_update), V(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ct(t, e) {
  t.$$.dirty[0] === -1 && (q.push(t), bt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function fe(t, e, n, l, i, o, r, s = [-1]) {
  const c = se;
  re(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: E,
    not_equal: i,
    bound: Ze(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Ze(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  r && r(u.root);
  let y = !1;
  if (u.ctx = n ? n(t, e.props || {}, (p, d, ...a) => {
    const g = a.length ? a[0] : d;
    return u.ctx && i(u.ctx[p], u.ctx[p] = g) && (!u.skip_bound && u.bound[p] && u.bound[p](g), y && Ct(t, p)), d;
  }) : [], u.update(), y = !0, V(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = ut(e.target);
      u.fragment && u.fragment.l(p), p.forEach(P);
    } else
      u.fragment && u.fragment.c();
    e.intro && S(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), H();
  }
  re(c);
}
let ee;
typeof HTMLElement == "function" && (ee = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(ke).filter(oe);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    V(this.$$.on_disconnect);
  }
  $destroy() {
    Y(this, 1), this.$destroy = E;
  }
  $on(t, e) {
    if (!oe(e))
      return E;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !it(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const T = {
  File: "File",
  Folder: "Folder"
}, ye = "Root";
let xt = {
  name: "Root",
  type: "Folder",
  expanded: !1,
  children: [
    {
      name: "Child 1",
      type: T.Folder,
      expanded: !1,
      children: [{ name: "Grand Child 1", type: "File" }]
    },
    {
      name: "Child 2",
      type: T.Folder,
      expanded: !1,
      children: [{ name: "Grand Child 2", type: "Folder" }]
    },
    { name: "Child 3", type: T.File }
  ]
};
function Re(t, e, n) {
  const l = t.slice();
  return l[10] = e[n], l;
}
function Ae(t) {
  let e, n = (
    /*locationOptions*/
    t[0]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = De(Re(t, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = Fe();
    },
    m(i, o) {
      for (let r = 0; r < l.length; r += 1)
        l[r] && l[r].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o & /*locationOptions, ChildType*/
      1) {
        n = /*locationOptions*/
        i[0];
        let r;
        for (r = 0; r < n.length; r += 1) {
          const s = Re(i, n, r);
          l[r] ? l[r].p(s, o) : (l[r] = De(s), l[r].c(), l[r].m(e.parentNode, e));
        }
        for (; r < l.length; r += 1)
          l[r].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      Qe(l, i), i && P(e);
    }
  };
}
function Oe(t) {
  let e, n = (
    /*option*/
    t[10].name + ""
  ), l, i;
  return {
    c() {
      e = h("option"), l = D(n), e.__value = i = /*option*/
      t[10].name, e.value = e.__value;
    },
    m(o, r) {
      j(o, e, r), f(e, l);
    },
    p(o, r) {
      r & /*locationOptions*/
      1 && n !== (n = /*option*/
      o[10].name + "") && Ne(l, n), r & /*locationOptions*/
      1 && i !== (i = /*option*/
      o[10].name) && (e.__value = i, e.value = e.__value);
    },
    d(o) {
      o && P(e);
    }
  };
}
function De(t) {
  let e, n = (
    /*option*/
    t[10].type === T.Folder && Oe(t)
  );
  return {
    c() {
      n && n.c(), e = Fe();
    },
    m(l, i) {
      n && n.m(l, i), j(l, e, i);
    },
    p(l, i) {
      /*option*/
      l[10].type === T.Folder ? n ? n.p(l, i) : (n = Oe(l), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && P(e);
    }
  };
}
function kt(t) {
  let e, n, l, i, o, r, s, c, u, y, p, d, a, g, w, I, m, $, v, x, _, Z, F, L, te, B, de, z, ne, C, R, le, k = (
    /*locationOptions*/
    t[0] && Ae(t)
  );
  return {
    c() {
      e = h("div"), n = h("div"), l = h("label"), l.textContent = "Name:", i = M(), o = h("div"), r = h("input"), s = M(), c = h("label"), c.textContent = "Type:", u = M(), y = h("div"), p = h("select"), d = h("option"), d.textContent = "File", a = h("option"), a.textContent = "Folder", g = M(), w = h("label"), w.textContent = "Location:", I = M(), m = h("div"), $ = h("select"), k && k.c(), v = M(), x = h("div"), _ = h("button"), Z = D("Save"), te = M(), B = h("button"), de = D("Cancel"), ne = M(), C = h("style"), C.textContent = `.form-container {
      display: flex;
      background-color: #fafafa;
      flex-direction: column;
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 20px;
      align-items: center;
      width: 100%
    }


    .form-row {
      display: flex;
      align-items: center;
      width: 90%;
      gap: 10px;
    }

    .form-label {
      font-family: circular;
      width: 100px;
      color: #a4a198;
      align-self: flex-start;
      margin-left: 5%;
    }

    .form-input {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      flex: 1;
    }

    .form-buttons {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 10px;
    }

    .save-button {
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .cancel-button {
      background-color: #ccc;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .disabled-save-button {
      cursor: not-allowed;
      background-color: #ccc;
    }
    .enabled-save-button {
      background-color: #4caf50;
    }
    .enabled-cancel-button {
      background-color: #f44336;
    }

    input {
      height: 2em;
    }

    select {
      height: 3em;
    }`, this.c = E, b(l, "class", "form-label"), b(l, "for", "name"), b(r, "class", "form-input"), b(r, "type", "text"), b(r, "id", "name"), b(o, "class", "form-row"), b(c, "class", "form-label"), b(c, "for", "type"), d.__value = "File", d.value = d.__value, a.__value = "Folder", a.value = a.__value, b(p, "class", "form-input"), b(p, "id", "type"), /*type*/
      t[2] === void 0 && U(() => (
        /*select0_change_handler*/
        t[7].call(p)
      )), b(y, "class", "form-row"), b(w, "class", "form-label"), b(w, "for", "location"), b($, "class", "form-input"), b($, "id", "location"), /*location*/
      t[3] === void 0 && U(() => (
        /*select1_change_handler*/
        t[8].call($)
      )), b(m, "class", "form-row"), b(_, "class", F = "save-button " + /*name*/
      (t[1] ? "enabled-save-button " : "disabled-save-button")), _.disabled = L = !/*name*/
      t[1], b(B, "class", z = "cancel-button " + /*name*/
      (t[1] ? "enabled-cancel-button" : "")), b(x, "class", "form-buttons"), b(n, "class", "form-container"), b(e, "class", "main-container");
    },
    m(N, A) {
      j(N, e, A), f(e, n), f(n, l), f(n, i), f(n, o), f(o, r), Se(
        r,
        /*name*/
        t[1]
      ), f(n, s), f(n, c), f(n, u), f(n, y), f(y, p), f(p, d), f(p, a), he(
        p,
        /*type*/
        t[2],
        !0
      ), f(n, g), f(n, w), f(n, I), f(n, m), f(m, $), k && k.m($, null), he(
        $,
        /*location*/
        t[3],
        !0
      ), f(n, v), f(n, x), f(x, _), f(_, Z), f(x, te), f(x, B), f(B, de), f(e, ne), f(e, C), R || (le = [
        W(
          r,
          "input",
          /*input_input_handler*/
          t[6]
        ),
        W(
          p,
          "change",
          /*select0_change_handler*/
          t[7]
        ),
        W(
          $,
          "change",
          /*select1_change_handler*/
          t[8]
        ),
        W(
          _,
          "click",
          /*save*/
          t[5]
        ),
        W(
          B,
          "click",
          /*cancel*/
          t[4]
        )
      ], R = !0);
    },
    p(N, [A]) {
      A & /*name*/
      2 && r.value !== /*name*/
      N[1] && Se(
        r,
        /*name*/
        N[1]
      ), A & /*type*/
      4 && he(
        p,
        /*type*/
        N[2]
      ), /*locationOptions*/
      N[0] ? k ? k.p(N, A) : (k = Ae(N), k.c(), k.m($, null)) : k && (k.d(1), k = null), A & /*location, locationOptions*/
      9 && he(
        $,
        /*location*/
        N[3]
      ), A & /*name*/
      2 && F !== (F = "save-button " + /*name*/
      (N[1] ? "enabled-save-button " : "disabled-save-button")) && b(_, "class", F), A & /*name*/
      2 && L !== (L = !/*name*/
      N[1]) && (_.disabled = L), A & /*name*/
      2 && z !== (z = "cancel-button " + /*name*/
      (N[1] ? "enabled-cancel-button" : "")) && b(B, "class", z);
    },
    i: E,
    o: E,
    d(N) {
      N && P(e), k && k.d(), R = !1, V(le);
    }
  };
}
function Et(t, e, n) {
  let { locationOptions: l } = e, i = "", o = T.File, r = ye;
  const s = _t();
  function c() {
    n(1, i = "");
  }
  function u() {
    const a = {
      name: i.charAt(0).toUpperCase() + i.slice(1),
      type: o,
      location: r
    };
    s("save", a), c();
  }
  function y() {
    i = this.value, n(1, i);
  }
  function p() {
    o = He(this), n(2, o);
  }
  function d() {
    r = He(this), n(3, r), n(0, l);
  }
  return t.$$set = (a) => {
    "locationOptions" in a && n(0, l = a.locationOptions);
  }, [
    l,
    i,
    o,
    r,
    c,
    u,
    y,
    p,
    d
  ];
}
class et extends ee {
  constructor(e) {
    super(), fe(
      this,
      {
        target: this.shadowRoot,
        props: ue(this.attributes),
        customElement: !0
      },
      Et,
      kt,
      ce,
      { locationOptions: 0 },
      null
    ), e && (e.target && j(e.target, this, e.anchor), e.props && (this.$set(e.props), H()));
  }
  static get observedAttributes() {
    return ["locationOptions"];
  }
  get locationOptions() {
    return this.$$.ctx[0];
  }
  set locationOptions(e) {
    this.$$set({ locationOptions: e }), H();
  }
}
customElements.define("my-form", et);
const Ft = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCjxyZWN0IHg9IjAiIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgoKPGc+Cgo8cGF0aCBkPSJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOC04LTh6Ii8+Cgo8L2c+Cgo8L3N2Zz4=";
function Nt(t) {
  let e, n, l;
  return {
    c() {
      e = h("main"), n = h("img"), this.c = E, Je(n.src, l = Ft) || b(n, "src", l), b(n, "alt", "close icon");
    },
    m(i, o) {
      j(i, e, o), f(e, n);
    },
    p: E,
    i: E,
    o: E,
    d(i) {
      i && P(e);
    }
  };
}
class tt extends ee {
  constructor(e) {
    super(), fe(
      this,
      {
        target: this.shadowRoot,
        props: ue(this.attributes),
        customElement: !0
      },
      null,
      Nt,
      ce,
      {},
      null
    ), e && e.target && j(e.target, this, e.anchor);
  }
}
customElements.define("my-close-icon", tt);
const Mt = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCjxyZWN0IHg9IjAiIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgoKPGc+Cgo8cGF0aCBkPSJNMTEgNHYxMi4xN2wtNS41OS01LjU5TDQgMTJsOCA4IDgtOC0xLjQxLTEuNDFMMTMgMTYuMTdWNGgtMnoiLz4KCjwvZz4KCjwvc3ZnPg==";
function Zt(t) {
  let e, n, l;
  return {
    c() {
      e = h("main"), n = h("img"), this.c = E, Je(n.src, l = Mt) || b(n, "src", l), b(n, "alt", "open icon");
    },
    m(i, o) {
      j(i, e, o), f(e, n);
    },
    p: E,
    i: E,
    o: E,
    d(i) {
      i && P(e);
    }
  };
}
class nt extends ee {
  constructor(e) {
    super(), fe(
      this,
      {
        target: this.shadowRoot,
        props: ue(this.attributes),
        customElement: !0
      },
      null,
      Zt,
      ce,
      {},
      null
    ), e && e.target && j(e.target, this, e.anchor);
  }
}
customElements.define("my-open-icon", nt);
function St(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Be(t, { delay: e = 0, duration: n = 400, easing: l = St, axis: i = "y" } = {}) {
  const o = getComputedStyle(t), r = +o.opacity, s = i === "y" ? "height" : "width", c = parseFloat(o[s]), u = i === "y" ? ["top", "bottom"] : ["left", "right"], y = u.map((m) => `${m[0].toUpperCase()}${m.slice(1)}`), p = parseFloat(o[`padding${y[0]}`]), d = parseFloat(o[`padding${y[1]}`]), a = parseFloat(o[`margin${y[0]}`]), g = parseFloat(o[`margin${y[1]}`]), w = parseFloat(o[`border${y[0]}Width`]), I = parseFloat(o[`border${y[1]}Width`]);
  return {
    delay: e,
    duration: n,
    easing: l,
    css: (m) => `overflow: hidden;opacity: ${Math.min(m * 20, 1) * r};${s}: ${m * c}px;padding-${u[0]}: ${m * p}px;padding-${u[1]}: ${m * d}px;margin-${u[0]}: ${m * a}px;margin-${u[1]}: ${m * g}px;border-${u[0]}-width: ${m * w}px;border-${u[1]}-width: ${m * I}px;`
  };
}
function ze(t, e, n) {
  const l = t.slice();
  return l[4] = e[n], l;
}
function jt(t) {
  let e, n;
  return e = new nt({}), {
    c() {
      ae(e.$$.fragment);
    },
    m(l, i) {
      Q(e, l, i), n = !0;
    },
    i(l) {
      n || (S(e.$$.fragment, l), n = !0);
    },
    o(l) {
      G(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ht(t) {
  let e, n;
  return e = new tt({}), {
    c() {
      ae(e.$$.fragment);
    },
    m(l, i) {
      Q(e, l, i), n = !0;
    },
    i(l) {
      n || (S(e.$$.fragment, l), n = !0);
    },
    o(l) {
      G(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ve(t) {
  let e, n, l = (
    /*node*/
    t[0].children
  ), i = [];
  for (let r = 0; r < l.length; r += 1)
    i[r] = We(ze(t, l, r));
  const o = (r) => G(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = Fe();
    },
    m(r, s) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(r, s);
      j(r, e, s), n = !0;
    },
    p(r, s) {
      if (s & /*node, level*/
      3) {
        l = /*node*/
        r[0].children;
        let c;
        for (c = 0; c < l.length; c += 1) {
          const u = ze(r, l, c);
          i[c] ? (i[c].p(u, s), S(i[c], 1)) : (i[c] = We(u), i[c].c(), S(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (Ce(), c = l.length; c < i.length; c += 1)
          o(c);
        xe();
      }
    },
    i(r) {
      if (!n) {
        for (let s = 0; s < l.length; s += 1)
          S(i[s]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        G(i[s]);
      n = !1;
    },
    d(r) {
      Qe(i, r), r && P(e);
    }
  };
}
function We(t) {
  let e, n;
  return e = new Me({
    props: {
      node: (
        /*child*/
        t[4]
      ),
      level: (
        /*level*/
        t[1] + 1
      )
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(l, i) {
      Q(e, l, i), n = !0;
    },
    p(l, i) {
      const o = {};
      i & /*node*/
      1 && (o.node = /*child*/
      l[4]), i & /*level*/
      2 && (o.level = /*level*/
      l[1] + 1), e.$set(o);
    },
    i(l) {
      n || (S(e.$$.fragment, l), n = !0);
    },
    o(l) {
      G(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Lt(t) {
  var x;
  let e, n, l, i, o, r, s = (
    /*node*/
    ((x = t[0]) == null ? void 0 : x.name) + ""
  ), c, u, y, p, d, a, g, w;
  const I = [Ht, jt], m = [];
  function $(_, Z) {
    var F;
    return (
      /*node*/
      ((F = _[0]) == null ? void 0 : F.type) === T.Folder && !/*node*/
      _[0].expanded ? 0 : (
        /*node*/
        _[0] && /*node*/
        _[0].type === T.Folder ? 1 : -1
      )
    );
  }
  ~(l = $(t)) && (i = m[l] = I[l](t));
  let v = (
    /*node*/
    t[0] && /*node*/
    t[0].expanded && /*node*/
    t[0].children && Ve(t)
  );
  return {
    c() {
      e = h("div"), n = h("li"), i && i.c(), o = M(), r = h("p"), c = D(s), y = M(), v && v.c(), p = M(), d = h("style"), d.textContent = `.nodes {
      border: 1px solid #bab9b9;
    }
    li {
      border-bottom: solid 2px #eee;
      margin: 0 0;
      padding: 0.5em;
      background: #fafafa;
      display: flex;
      align-items: center;
    }
    .iconDiv {
      margin-left: 5px;
      margin-top: 3px;
    }
    .nodeName {
      margin-left: 10px;
      font-family: circular;
      color: slategrey
    }`, this.c = E, b(r, "class", "nodeName"), je(
        n,
        "padding-left",
        /*level*/
        t[1] * 2 + "rem"
      ), b(e, "class", "nodes");
    },
    m(_, Z) {
      j(_, e, Z), f(e, n), ~l && m[l].m(n, null), f(n, o), f(n, r), f(r, c), f(e, y), v && v.m(e, null), f(e, p), f(e, d), a = !0, g || (w = W(
        n,
        "click",
        /*toggle*/
        t[2]
      ), g = !0);
    },
    p(_, [Z]) {
      var L;
      let F = l;
      l = $(_), l !== F && (i && (Ce(), G(m[F], 1, 1, () => {
        m[F] = null;
      }), xe()), ~l ? (i = m[l], i || (i = m[l] = I[l](_), i.c()), S(i, 1), i.m(n, o)) : i = null), (!a || Z & /*node*/
      1) && s !== (s = /*node*/
      ((L = _[0]) == null ? void 0 : L.name) + "") && Ne(c, s), (!a || Z & /*level*/
      2) && je(
        n,
        "padding-left",
        /*level*/
        _[1] * 2 + "rem"
      ), /*node*/
      _[0] && /*node*/
      _[0].expanded && /*node*/
      _[0].children ? v ? (v.p(_, Z), Z & /*node*/
      1 && S(v, 1)) : (v = Ve(_), v.c(), S(v, 1), v.m(e, p)) : v && (Ce(), G(v, 1, 1, () => {
        v = null;
      }), xe());
    },
    i(_) {
      a || (S(i), U(() => {
        a && (u || (u = Te(n, Be, {}, !0)), u.run(1));
      }), S(v), a = !0);
    },
    o(_) {
      G(i), u || (u = Te(n, Be, {}, !1)), u.run(0), G(v), a = !1;
    },
    d(_) {
      _ && P(e), ~l && m[l].d(), _ && u && u.end(), v && v.d(), g = !1, w();
    }
  };
}
function Gt(t, e, n) {
  let { node: l } = e, { level: i = 0 } = e;
  const o = () => n(0, l);
  function r() {
    n(0, l.expanded = !l.expanded, l);
  }
  return t.$$set = (s) => {
    "node" in s && n(0, l = s.node), "level" in s && n(1, i = s.level);
  }, [l, i, r, o];
}
class Me extends ee {
  constructor(e) {
    super(), fe(
      this,
      {
        target: this.shadowRoot,
        props: ue(this.attributes),
        customElement: !0
      },
      Gt,
      Lt,
      ce,
      { node: 0, level: 1, rerender: 3 },
      null
    ), e && (e.target && j(e.target, this, e.anchor), e.props && (this.$set(e.props), H()));
  }
  static get observedAttributes() {
    return ["node", "level", "rerender"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), H();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), H();
  }
  get rerender() {
    return this.$$.ctx[3];
  }
}
customElements.define("my-tree-node", Me);
function Tt(t) {
  var ne;
  let e, n, l, i, o, r, s, c, u, y, p, d, a, g, w, I, m, $, v, x, _, Z, F, L, te;
  g = new et({
    props: {
      locationOptions: [
        { name: ye, type: T.Folder },
        .../*tree_data*/
        ((ne = t[0]) == null ? void 0 : ne.children) || []
      ]
    }
  }), g.$on(
    "save",
    /*handleSave*/
    t[4]
  );
  function B(C) {
    t[6](C);
  }
  function de(C) {
    t[7](C);
  }
  let z = {};
  return (
    /*rerender*/
    t[3] !== void 0 && (z.rerender = /*rerender*/
    t[3]), /*tree_data*/
    t[0] !== void 0 && (z.node = /*tree_data*/
    t[0]), $ = new Me({ props: z }), be.push(() => Pe($, "rerender", B)), be.push(() => Pe($, "node", de)), {
      c() {
        e = h("div"), n = h("div"), l = h("div"), l.innerHTML = "<h2>NAGP SVELTE ASSIGNMENT</h2>", i = M(), o = h("div"), r = h("h3"), s = D("Hi, "), c = D(
          /*user_name*/
          t[1]
        ), u = D("!"), y = M(), p = h("button"), p.textContent = "Logout", d = M(), a = h("div"), ae(g.$$.fragment), w = M(), I = h("div"), m = h("ul"), ae($.$$.fragment), _ = M(), Z = h("style"), Z.textContent = `:global(body) {
      margin: 0 0;
    }
    .main {
      display: flex;justify-content: space-evenly;
    }

    .list-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      width: 40%
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      overflow: hidden;
      width: 95%;
    }

    h3 {
      color: #1acc11;
    }

    .headerDiv {
      display: flex;
      justify-content: space-evenly;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-self: center;
    }

    .btn-logout {
      background-color: #92a8d1;
      color: white;
      border: none;
      height: 3em;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 5px;
      cursor: pointer;
    }`, this.c = E, b(p, "class", "btn-logout"), b(n, "class", "headerDiv"), b(I, "class", "list-container"), b(a, "class", "main");
      },
      m(C, R) {
        j(C, e, R), f(e, n), f(n, l), f(n, i), f(n, o), f(o, r), f(r, s), f(r, c), f(r, u), f(o, y), f(o, p), f(e, d), f(e, a), Q(g, a, null), f(a, w), f(a, I), f(I, m), Q($, m, null), f(e, _), f(e, Z), F = !0, L || (te = W(p, "click", function() {
          oe(
            /*on_logout*/
            t[2]
          ) && t[2].apply(this, arguments);
        }), L = !0);
      },
      p(C, [R]) {
        var N;
        t = C, (!F || R & /*user_name*/
        2) && Ne(
          c,
          /*user_name*/
          t[1]
        );
        const le = {};
        R & /*tree_data*/
        1 && (le.locationOptions = [
          { name: ye, type: T.Folder },
          .../*tree_data*/
          ((N = t[0]) == null ? void 0 : N.children) || []
        ]), g.$set(le);
        const k = {};
        !v && R & /*rerender*/
        8 && (v = !0, k.rerender = /*rerender*/
        t[3], Ge(() => v = !1)), !x && R & /*tree_data*/
        1 && (x = !0, k.node = /*tree_data*/
        t[0], Ge(() => x = !1)), $.$set(k);
      },
      i(C) {
        F || (S(g.$$.fragment, C), S($.$$.fragment, C), F = !0);
      },
      o(C) {
        G(g.$$.fragment, C), G($.$$.fragment, C), F = !1;
      },
      d(C) {
        C && P(e), Y(g), Y($), L = !1, te();
      }
    }
  );
}
function Ue(t, e) {
  var n, l;
  for (let i = 0; i < t.length; i++)
    if (((l = (n = t[i]) == null ? void 0 : n.name) == null ? void 0 : l.toLowerCase()) === (e == null ? void 0 : e.toLowerCase()))
      return i;
  return !1;
}
function Pt(t, e, n) {
  let { user_name: l = "Rohit Sharma" } = e, { on_logout: i } = e, { update_files_structure: o = () => {
  } } = e, { tree_data: r = xt } = e, s;
  function c(d) {
    const a = d.detail;
    if ((a == null ? void 0 : a.location) === ye)
      u(r, a);
    else {
      const g = Ue(r.children, a == null ? void 0 : a.location);
      typeof g == "number" && u(r.children[g], a);
    }
    o(r), s();
  }
  function u(d, a) {
    typeof Ue(d.children, a == null ? void 0 : a.name) == "number" ? alert("File or Folder with this name already exists at this location!") : (d.children.push({
      ...a,
      children: a.type === T.Folder ? [] : null
    }), d.expanded = !0, n(0, r.expanded = !0, r));
  }
  function y(d) {
    s = d, n(3, s);
  }
  function p(d) {
    r = d, n(0, r);
  }
  return t.$$set = (d) => {
    "user_name" in d && n(1, l = d.user_name), "on_logout" in d && n(2, i = d.on_logout), "update_files_structure" in d && n(5, o = d.update_files_structure), "tree_data" in d && n(0, r = d.tree_data);
  }, [
    r,
    l,
    i,
    s,
    c,
    o,
    y,
    p
  ];
}
class Rt extends ee {
  constructor(e) {
    super(), fe(
      this,
      {
        target: this.shadowRoot,
        props: ue(this.attributes),
        customElement: !0
      },
      Pt,
      Tt,
      ce,
      {
        user_name: 1,
        on_logout: 2,
        update_files_structure: 5,
        tree_data: 0
      },
      null
    ), e && (e.target && j(e.target, this, e.anchor), e.props && (this.$set(e.props), H()));
  }
  static get observedAttributes() {
    return ["user_name", "on_logout", "update_files_structure", "tree_data"];
  }
  get user_name() {
    return this.$$.ctx[1];
  }
  set user_name(e) {
    this.$$set({ user_name: e }), H();
  }
  get on_logout() {
    return this.$$.ctx[2];
  }
  set on_logout(e) {
    this.$$set({ on_logout: e }), H();
  }
  get update_files_structure() {
    return this.$$.ctx[5];
  }
  set update_files_structure(e) {
    this.$$set({ update_files_structure: e }), H();
  }
  get tree_data() {
    return this.$$.ctx[0];
  }
  set tree_data(e) {
    this.$$set({ tree_data: e }), H();
  }
}
customElements.define("my-tree-web-component", Rt);
