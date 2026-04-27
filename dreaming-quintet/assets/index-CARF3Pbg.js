(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = i(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Jr(t, e) {
  const i = new Set(t.split(","));
  return (n) => i.has(n);
}
const Te = {},
  _n = [],
  Pt = () => {},
  ad = () => !1,
  vo = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  Xr = (t) => t.startsWith("onUpdate:"),
  Le = Object.assign,
  ea = (t, e) => {
    const i = t.indexOf(e);
    i > -1 && t.splice(i, 1);
  },
  ld = Object.prototype.hasOwnProperty,
  le = (t, e) => ld.call(t, e),
  Y = Array.isArray,
  yn = (t) => xo(t) === "[object Map]",
  su = (t) => xo(t) === "[object Set]",
  te = (t) => typeof t == "function",
  ze = (t) => typeof t == "string",
  tn = (t) => typeof t == "symbol",
  Ce = (t) => t !== null && typeof t == "object",
  ou = (t) => (Ce(t) || te(t)) && te(t.then) && te(t.catch),
  ru = Object.prototype.toString,
  xo = (t) => ru.call(t),
  cd = (t) => xo(t).slice(8, -1),
  au = (t) => xo(t) === "[object Object]",
  ta = (t) =>
    ze(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Kn = Jr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  So = (t) => {
    const e = Object.create(null);
    return (i) => e[i] || (e[i] = t(i));
  },
  ud = /-(\w)/g,
  On = So((t) => t.replace(ud, (e, i) => (i ? i.toUpperCase() : ""))),
  hd = /\B([A-Z])/g,
  Vn = So((t) => t.replace(hd, "-$1").toLowerCase()),
  lu = So((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Wo = So((t) => (t ? `on${lu(t)}` : "")),
  wi = (t, e) => !Object.is(t, e),
  Qo = (t, e) => {
    for (let i = 0; i < t.length; i++) t[i](e);
  },
  cu = (t, e, i, n = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: i,
    });
  },
  dd = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  fd = (t) => {
    const e = ze(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Va;
const uu = () =>
  Va ||
  (Va =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Po(t) {
  if (Y(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) {
      const n = t[i],
        s = ze(n) ? _d(n) : Po(n);
      if (s) for (const o in s) e[o] = s[o];
    }
    return e;
  } else if (ze(t) || Ce(t)) return t;
}
const pd = /;(?![^(]*\))/g,
  gd = /:([^]+)/,
  md = /\/\*[^]*?\*\//g;
function _d(t) {
  const e = {};
  return (
    t
      .replace(md, "")
      .split(pd)
      .forEach((i) => {
        if (i) {
          const n = i.split(gd);
          n.length > 1 && (e[n[0].trim()] = n[1].trim());
        }
      }),
    e
  );
}
function Z(t) {
  let e = "";
  if (ze(t)) e = t;
  else if (Y(t))
    for (let i = 0; i < t.length; i++) {
      const n = Z(t[i]);
      n && (e += n + " ");
    }
  else if (Ce(t)) for (const i in t) t[i] && (e += i + " ");
  return e.trim();
}
const yd =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  bd = Jr(yd);
function hu(t) {
  return !!t || t === "";
}
const St = (t) =>
    ze(t)
      ? t
      : t == null
        ? ""
        : Y(t) || (Ce(t) && (t.toString === ru || !te(t.toString)))
          ? JSON.stringify(t, du, 2)
          : String(t),
  du = (t, e) =>
    e && e.__v_isRef
      ? du(t, e.value)
      : yn(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (i, [n, s], o) => ((i[Ko(n, o) + " =>"] = s), i),
              {},
            ),
          }
        : su(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((i) => Ko(i)) }
          : tn(e)
            ? Ko(e)
            : Ce(e) && !Y(e) && !au(e)
              ? String(e)
              : e,
  Ko = (t, e = "") => {
    var i;
    return tn(t) ? `Symbol(${(i = t.description) != null ? i : e})` : t;
  };
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ft;
class fu {
  constructor(e = !1) {
    ((this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ft),
      !e &&
        ft &&
        (this.index = (ft.scopes || (ft.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const i = ft;
      try {
        return ((ft = this), e());
      } finally {
        ft = i;
      }
    }
  }
  on() {
    ft = this;
  }
  off() {
    ft = this.parent;
  }
  stop(e) {
    if (this._active) {
      let i, n;
      for (i = 0, n = this.effects.length; i < n; i++) this.effects[i].stop();
      for (i = 0, n = this.cleanups.length; i < n; i++) this.cleanups[i]();
      if (this.scopes)
        for (i = 0, n = this.scopes.length; i < n; i++) this.scopes[i].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      ((this.parent = void 0), (this._active = !1));
    }
  }
}
function pu(t) {
  return new fu(t);
}
function wd(t, e = ft) {
  e && e.active && e.effects.push(t);
}
function gu() {
  return ft;
}
function vd(t) {
  ft && ft.cleanups.push(t);
}
let Ki;
class ia {
  constructor(e, i, n, s) {
    ((this.fn = e),
      (this.trigger = i),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      wd(this, s));
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ((this._dirtyLevel = 1), Ci());
      for (let e = 0; e < this._depsLength; e++) {
        const i = this.deps[e];
        if (i.computed && (xd(i.computed), this._dirtyLevel >= 4)) break;
      }
      (this._dirtyLevel === 1 && (this._dirtyLevel = 0), Oi());
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let e = yi,
      i = Ki;
    try {
      return ((yi = !0), (Ki = this), this._runnings++, La(this), this.fn());
    } finally {
      (za(this), this._runnings--, (Ki = i), (yi = e));
    }
  }
  stop() {
    this.active &&
      (La(this), za(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function xd(t) {
  return t.value;
}
function La(t) {
  (t._trackId++, (t._depsLength = 0));
}
function za(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++) mu(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function mu(t, e) {
  const i = t.get(e);
  i !== void 0 &&
    e._trackId !== i &&
    (t.delete(e), t.size === 0 && t.cleanup());
}
let yi = !0,
  Pr = 0;
const _u = [];
function Ci() {
  (_u.push(yi), (yi = !1));
}
function Oi() {
  const t = _u.pop();
  yi = t === void 0 ? !0 : t;
}
function na() {
  Pr++;
}
function sa() {
  for (Pr--; !Pr && Cr.length; ) Cr.shift()();
}
function yu(t, e, i) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const n = t.deps[t._depsLength];
    n !== e ? (n && mu(n, t), (t.deps[t._depsLength++] = e)) : t._depsLength++;
  }
}
const Cr = [];
function bu(t, e, i) {
  na();
  for (const n of t.keys()) {
    let s;
    (n._dirtyLevel < e &&
      (s ?? (s = t.get(n) === n._trackId)) &&
      (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0),
      (n._dirtyLevel = e)),
      n._shouldSchedule &&
        (s ?? (s = t.get(n) === n._trackId)) &&
        (n.trigger(),
        (!n._runnings || n.allowRecurse) &&
          n._dirtyLevel !== 2 &&
          ((n._shouldSchedule = !1), n.scheduler && Cr.push(n.scheduler))));
  }
  sa();
}
const wu = (t, e) => {
    const i = new Map();
    return ((i.cleanup = t), (i.computed = e), i);
  },
  to = new WeakMap(),
  Yi = Symbol(""),
  Or = Symbol("");
function rt(t, e, i) {
  if (yi && Ki) {
    let n = to.get(t);
    n || to.set(t, (n = new Map()));
    let s = n.get(i);
    (s || n.set(i, (s = wu(() => n.delete(i)))), yu(Ki, s));
  }
}
function ti(t, e, i, n, s, o) {
  const r = to.get(t);
  if (!r) return;
  let a = [];
  if (e === "clear") a = [...r.values()];
  else if (i === "length" && Y(t)) {
    const l = Number(n);
    r.forEach((c, u) => {
      (u === "length" || (!tn(u) && u >= l)) && a.push(c);
    });
  } else
    switch ((i !== void 0 && a.push(r.get(i)), e)) {
      case "add":
        Y(t)
          ? ta(i) && a.push(r.get("length"))
          : (a.push(r.get(Yi)), yn(t) && a.push(r.get(Or)));
        break;
      case "delete":
        Y(t) || (a.push(r.get(Yi)), yn(t) && a.push(r.get(Or)));
        break;
      case "set":
        yn(t) && a.push(r.get(Yi));
        break;
    }
  na();
  for (const l of a) l && bu(l, 4);
  sa();
}
function Sd(t, e) {
  const i = to.get(t);
  return i && i.get(e);
}
const Pd = Jr("__proto__,__v_isRef,__isVue"),
  vu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(tn),
  ),
  Ga = Cd();
function Cd() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...i) {
        const n = ce(this);
        for (let o = 0, r = this.length; o < r; o++) rt(n, "get", o + "");
        const s = n[e](...i);
        return s === -1 || s === !1 ? n[e](...i.map(ce)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...i) {
        (Ci(), na());
        const n = ce(this)[e].apply(this, i);
        return (sa(), Oi(), n);
      };
    }),
    t
  );
}
function Od(t) {
  tn(t) || (t = String(t));
  const e = ce(this);
  return (rt(e, "has", t), e.hasOwnProperty(t));
}
class xu {
  constructor(e = !1, i = !1) {
    ((this._isReadonly = e), (this._isShallow = i));
  }
  get(e, i, n) {
    const s = this._isReadonly,
      o = this._isShallow;
    if (i === "__v_isReactive") return !s;
    if (i === "__v_isReadonly") return s;
    if (i === "__v_isShallow") return o;
    if (i === "__v_raw")
      return n === (s ? (o ? Dd : Ou) : o ? Cu : Pu).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
        ? e
        : void 0;
    const r = Y(e);
    if (!s) {
      if (r && le(Ga, i)) return Reflect.get(Ga, i, n);
      if (i === "hasOwnProperty") return Od;
    }
    const a = Reflect.get(e, i, n);
    return (tn(i) ? vu.has(i) : Pd(i)) || (s || rt(e, "get", i), o)
      ? a
      : $e(a)
        ? r && ta(i)
          ? a
          : a.value
        : Ce(a)
          ? s
            ? Tu(a)
            : Oo(a)
          : a;
  }
}
class Su extends xu {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, i, n, s) {
    let o = e[i];
    if (!this._isShallow) {
      const l = ss(o);
      if (
        (!io(n) && !ss(n) && ((o = ce(o)), (n = ce(n))),
        !Y(e) && $e(o) && !$e(n))
      )
        return l ? !1 : ((o.value = n), !0);
    }
    const r = Y(e) && ta(i) ? Number(i) < e.length : le(e, i),
      a = Reflect.set(e, i, n, s);
    return (
      e === ce(s) && (r ? wi(n, o) && ti(e, "set", i, n) : ti(e, "add", i, n)),
      a
    );
  }
  deleteProperty(e, i) {
    const n = le(e, i);
    e[i];
    const s = Reflect.deleteProperty(e, i);
    return (s && n && ti(e, "delete", i, void 0), s);
  }
  has(e, i) {
    const n = Reflect.has(e, i);
    return ((!tn(i) || !vu.has(i)) && rt(e, "has", i), n);
  }
  ownKeys(e) {
    return (rt(e, "iterate", Y(e) ? "length" : Yi), Reflect.ownKeys(e));
  }
}
class Td extends xu {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, i) {
    return !0;
  }
  deleteProperty(e, i) {
    return !0;
  }
}
const Ad = new Su(),
  Ed = new Td(),
  kd = new Su(!0);
const oa = (t) => t,
  Co = (t) => Reflect.getPrototypeOf(t);
function bs(t, e, i = !1, n = !1) {
  t = t.__v_raw;
  const s = ce(t),
    o = ce(e);
  i || (wi(e, o) && rt(s, "get", e), rt(s, "get", o));
  const { has: r } = Co(s),
    a = n ? oa : i ? ca : os;
  if (r.call(s, e)) return a(t.get(e));
  if (r.call(s, o)) return a(t.get(o));
  t !== s && t.get(e);
}
function ws(t, e = !1) {
  const i = this.__v_raw,
    n = ce(i),
    s = ce(t);
  return (
    e || (wi(t, s) && rt(n, "has", t), rt(n, "has", s)),
    t === s ? i.has(t) : i.has(t) || i.has(s)
  );
}
function vs(t, e = !1) {
  return (
    (t = t.__v_raw),
    !e && rt(ce(t), "iterate", Yi),
    Reflect.get(t, "size", t)
  );
}
function $a(t) {
  t = ce(t);
  const e = ce(this);
  return (Co(e).has.call(e, t) || (e.add(t), ti(e, "add", t, t)), this);
}
function Da(t, e) {
  e = ce(e);
  const i = ce(this),
    { has: n, get: s } = Co(i);
  let o = n.call(i, t);
  o || ((t = ce(t)), (o = n.call(i, t)));
  const r = s.call(i, t);
  return (
    i.set(t, e),
    o ? wi(e, r) && ti(i, "set", t, e) : ti(i, "add", t, e),
    this
  );
}
function Fa(t) {
  const e = ce(this),
    { has: i, get: n } = Co(e);
  let s = i.call(e, t);
  (s || ((t = ce(t)), (s = i.call(e, t))), n && n.call(e, t));
  const o = e.delete(t);
  return (s && ti(e, "delete", t, void 0), o);
}
function Ha() {
  const t = ce(this),
    e = t.size !== 0,
    i = t.clear();
  return (e && ti(t, "clear", void 0, void 0), i);
}
function xs(t, e) {
  return function (n, s) {
    const o = this,
      r = o.__v_raw,
      a = ce(r),
      l = e ? oa : t ? ca : os;
    return (
      !t && rt(a, "iterate", Yi),
      r.forEach((c, u) => n.call(s, l(c), l(u), o))
    );
  };
}
function Ss(t, e, i) {
  return function (...n) {
    const s = this.__v_raw,
      o = ce(s),
      r = yn(o),
      a = t === "entries" || (t === Symbol.iterator && r),
      l = t === "keys" && r,
      c = s[t](...n),
      u = i ? oa : e ? ca : os;
    return (
      !e && rt(o, "iterate", l ? Or : Yi),
      {
        next() {
          const { value: h, done: d } = c.next();
          return d
            ? { value: h, done: d }
            : { value: a ? [u(h[0]), u(h[1])] : u(h), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function oi(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Md() {
  const t = {
      get(o) {
        return bs(this, o);
      },
      get size() {
        return vs(this);
      },
      has: ws,
      add: $a,
      set: Da,
      delete: Fa,
      clear: Ha,
      forEach: xs(!1, !1),
    },
    e = {
      get(o) {
        return bs(this, o, !1, !0);
      },
      get size() {
        return vs(this);
      },
      has: ws,
      add: $a,
      set: Da,
      delete: Fa,
      clear: Ha,
      forEach: xs(!1, !0),
    },
    i = {
      get(o) {
        return bs(this, o, !0);
      },
      get size() {
        return vs(this, !0);
      },
      has(o) {
        return ws.call(this, o, !0);
      },
      add: oi("add"),
      set: oi("set"),
      delete: oi("delete"),
      clear: oi("clear"),
      forEach: xs(!0, !1),
    },
    n = {
      get(o) {
        return bs(this, o, !0, !0);
      },
      get size() {
        return vs(this, !0);
      },
      has(o) {
        return ws.call(this, o, !0);
      },
      add: oi("add"),
      set: oi("set"),
      delete: oi("delete"),
      clear: oi("clear"),
      forEach: xs(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      ((t[o] = Ss(o, !1, !1)),
        (i[o] = Ss(o, !0, !1)),
        (e[o] = Ss(o, !1, !0)),
        (n[o] = Ss(o, !0, !0)));
    }),
    [t, i, e, n]
  );
}
const [Id, Rd, Vd, Ld] = Md();
function ra(t, e) {
  const i = e ? (t ? Ld : Vd) : t ? Rd : Id;
  return (n, s, o) =>
    s === "__v_isReactive"
      ? !t
      : s === "__v_isReadonly"
        ? t
        : s === "__v_raw"
          ? n
          : Reflect.get(le(i, s) && s in n ? i : n, s, o);
}
const zd = { get: ra(!1, !1) },
  Gd = { get: ra(!1, !0) },
  $d = { get: ra(!0, !1) };
const Pu = new WeakMap(),
  Cu = new WeakMap(),
  Ou = new WeakMap(),
  Dd = new WeakMap();
function Fd(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hd(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Fd(cd(t));
}
function Oo(t) {
  return ss(t) ? t : aa(t, !1, Ad, zd, Pu);
}
function Bd(t) {
  return aa(t, !1, kd, Gd, Cu);
}
function Tu(t) {
  return aa(t, !0, Ed, $d, Ou);
}
function aa(t, e, i, n, s) {
  if (!Ce(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const o = s.get(t);
  if (o) return o;
  const r = Hd(t);
  if (r === 0) return t;
  const a = new Proxy(t, r === 2 ? n : i);
  return (s.set(t, a), a);
}
function Zi(t) {
  return ss(t) ? Zi(t.__v_raw) : !!(t && t.__v_isReactive);
}
function ss(t) {
  return !!(t && t.__v_isReadonly);
}
function io(t) {
  return !!(t && t.__v_isShallow);
}
function Au(t) {
  return t ? !!t.__v_raw : !1;
}
function ce(t) {
  const e = t && t.__v_raw;
  return e ? ce(e) : t;
}
function la(t) {
  return (Object.isExtensible(t) && cu(t, "__v_skip", !0), t);
}
const os = (t) => (Ce(t) ? Oo(t) : t),
  ca = (t) => (Ce(t) ? Tu(t) : t);
class Eu {
  constructor(e, i, n, s) {
    ((this.getter = e),
      (this._setter = i),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ia(
        () => e(this._value),
        () => Ks(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = n));
  }
  get value() {
    const e = ce(this);
    return (
      (!e._cacheable || e.effect.dirty) &&
        wi(e._value, (e._value = e.effect.run())) &&
        Ks(e, 4),
      ku(e),
      e.effect._dirtyLevel >= 2 && Ks(e, 2),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
}
function qd(t, e, i = !1) {
  let n, s;
  const o = te(t);
  return (
    o ? ((n = t), (s = Pt)) : ((n = t.get), (s = t.set)),
    new Eu(n, s, o || !s, i)
  );
}
function ku(t) {
  var e;
  yi &&
    Ki &&
    ((t = ce(t)),
    yu(
      Ki,
      (e = t.dep) != null
        ? e
        : (t.dep = wu(() => (t.dep = void 0), t instanceof Eu ? t : void 0)),
    ));
}
function Ks(t, e = 4, i) {
  t = ce(t);
  const n = t.dep;
  n && bu(n, e);
}
function $e(t) {
  return !!(t && t.__v_isRef === !0);
}
function we(t) {
  return Nd(t, !1);
}
function Nd(t, e) {
  return $e(t) ? t : new Ud(t, e);
}
class Ud {
  constructor(e, i) {
    ((this.__v_isShallow = i),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = i ? e : ce(e)),
      (this._value = i ? e : os(e)));
  }
  get value() {
    return (ku(this), this._value);
  }
  set value(e) {
    const i = this.__v_isShallow || io(e) || ss(e);
    ((e = i ? e : ce(e)),
      wi(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = i ? e : os(e)), Ks(this, 4)));
  }
}
function ii(t) {
  return $e(t) ? t.value : t;
}
const jd = {
  get: (t, e, i) => ii(Reflect.get(t, e, i)),
  set: (t, e, i, n) => {
    const s = t[e];
    return $e(s) && !$e(i) ? ((s.value = i), !0) : Reflect.set(t, e, i, n);
  },
};
function Mu(t) {
  return Zi(t) ? t : new Proxy(t, jd);
}
function Wd(t) {
  const e = Y(t) ? new Array(t.length) : {};
  for (const i in t) e[i] = Kd(t, i);
  return e;
}
class Qd {
  constructor(e, i, n) {
    ((this._object = e),
      (this._key = i),
      (this._defaultValue = n),
      (this.__v_isRef = !0));
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Sd(ce(this._object), this._key);
  }
}
function Kd(t, e, i) {
  const n = t[e];
  return $e(n) ? n : new Qd(t, e, i);
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function bi(t, e, i, n) {
  try {
    return n ? t(...n) : t();
  } catch (s) {
    To(s, e, i);
  }
}
function Ot(t, e, i, n) {
  if (te(t)) {
    const s = bi(t, e, i, n);
    return (
      s &&
        ou(s) &&
        s.catch((o) => {
          To(o, e, i);
        }),
      s
    );
  }
  if (Y(t)) {
    const s = [];
    for (let o = 0; o < t.length; o++) s.push(Ot(t[o], e, i, n));
    return s;
  }
}
function To(t, e, i, n = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const r = e.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](t, r, a) === !1) return;
      }
      o = o.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      (Ci(), bi(l, null, 10, [t, r, a]), Oi());
      return;
    }
  }
  Yd(t, i, s, n);
}
function Yd(t, e, i, n = !0) {
  console.error(t);
}
let rs = !1,
  Tr = !1;
const Qe = [];
let Nt = 0;
const bn = [];
let ci = null,
  Fi = 0;
const Iu = Promise.resolve();
let ua = null;
function Ru(t) {
  const e = ua || Iu;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Zd(t) {
  let e = Nt + 1,
    i = Qe.length;
  for (; e < i; ) {
    const n = (e + i) >>> 1,
      s = Qe[n],
      o = as(s);
    o < t || (o === t && s.pre) ? (e = n + 1) : (i = n);
  }
  return e;
}
function ha(t) {
  (!Qe.length || !Qe.includes(t, rs && t.allowRecurse ? Nt + 1 : Nt)) &&
    (t.id == null ? Qe.push(t) : Qe.splice(Zd(t.id), 0, t), Vu());
}
function Vu() {
  !rs && !Tr && ((Tr = !0), (ua = Iu.then(zu)));
}
function Jd(t) {
  const e = Qe.indexOf(t);
  e > Nt && Qe.splice(e, 1);
}
function Xd(t) {
  (Y(t)
    ? bn.push(...t)
    : (!ci || !ci.includes(t, t.allowRecurse ? Fi + 1 : Fi)) && bn.push(t),
    Vu());
}
function Ba(t, e, i = rs ? Nt + 1 : 0) {
  for (; i < Qe.length; i++) {
    const n = Qe[i];
    if (n && n.pre) {
      if (t && n.id !== t.uid) continue;
      (Qe.splice(i, 1), i--, n());
    }
  }
}
function Lu(t) {
  if (bn.length) {
    const e = [...new Set(bn)].sort((i, n) => as(i) - as(n));
    if (((bn.length = 0), ci)) {
      ci.push(...e);
      return;
    }
    for (ci = e, Fi = 0; Fi < ci.length; Fi++) ci[Fi]();
    ((ci = null), (Fi = 0));
  }
}
const as = (t) => (t.id == null ? 1 / 0 : t.id),
  ef = (t, e) => {
    const i = as(t) - as(e);
    if (i === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return i;
  };
function zu(t) {
  ((Tr = !1), (rs = !0), Qe.sort(ef));
  try {
    for (Nt = 0; Nt < Qe.length; Nt++) {
      const e = Qe[Nt];
      e && e.active !== !1 && bi(e, null, 14);
    }
  } finally {
    ((Nt = 0),
      (Qe.length = 0),
      Lu(),
      (rs = !1),
      (ua = null),
      (Qe.length || bn.length) && zu());
  }
}
function tf(t, e, ...i) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || Te;
  let s = i;
  const o = e.startsWith("update:"),
    r = o && e.slice(7);
  if (r && r in n) {
    const u = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: h, trim: d } = n[u] || Te;
    (d && (s = i.map((f) => (ze(f) ? f.trim() : f))), h && (s = i.map(dd)));
  }
  let a,
    l = n[(a = Wo(e))] || n[(a = Wo(On(e)))];
  (!l && o && (l = n[(a = Wo(Vn(e)))]), l && Ot(l, t, 6, s));
  const c = n[a + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    ((t.emitted[a] = !0), Ot(c, t, 6, s));
  }
}
function Gu(t, e, i = !1) {
  const n = e.emitsCache,
    s = n.get(t);
  if (s !== void 0) return s;
  const o = t.emits;
  let r = {},
    a = !1;
  if (!te(t)) {
    const l = (c) => {
      const u = Gu(c, e, !0);
      u && ((a = !0), Le(r, u));
    };
    (!i && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l));
  }
  return !o && !a
    ? (Ce(t) && n.set(t, null), null)
    : (Y(o) ? o.forEach((l) => (r[l] = null)) : Le(r, o),
      Ce(t) && n.set(t, r),
      r);
}
function Ao(t, e) {
  return !t || !vo(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      le(t, e[0].toLowerCase() + e.slice(1)) || le(t, Vn(e)) || le(t, e));
}
let Ke = null,
  Eo = null;
function no(t) {
  const e = Ke;
  return ((Ke = t), (Eo = (t && t.type.__scopeId) || null), e);
}
function Ti(t) {
  Eo = t;
}
function Ai() {
  Eo = null;
}
function Ji(t, e = Ke, i) {
  if (!e || t._n) return t;
  const n = (...s) => {
    n._d && Xa(-1);
    const o = no(e);
    let r;
    try {
      r = t(...s);
    } finally {
      (no(o), n._d && Xa(1));
    }
    return r;
  };
  return ((n._n = !0), (n._c = !0), (n._d = !0), n);
}
function Yo(t) {
  const {
      type: e,
      vnode: i,
      proxy: n,
      withProxy: s,
      propsOptions: [o],
      slots: r,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: h,
      data: d,
      setupState: f,
      ctx: g,
      inheritAttrs: p,
    } = t,
    y = no(t);
  let w, x;
  try {
    if (i.shapeFlag & 4) {
      const v = s || n,
        k = v;
      ((w = qt(c.call(k, v, u, h, f, d, g))), (x = a));
    } else {
      const v = e;
      ((w = qt(
        v.length > 1 ? v(h, { attrs: a, slots: r, emit: l }) : v(h, null),
      )),
        (x = e.props ? a : nf(a)));
    }
  } catch (v) {
    ((es.length = 0), To(v, t, 1), (w = J(mt)));
  }
  let C = w;
  if (x && p !== !1) {
    const v = Object.keys(x),
      { shapeFlag: k } = C;
    v.length &&
      k & 7 &&
      (o && v.some(Xr) && (x = sf(x, o)), (C = vi(C, x, !1, !0)));
  }
  return (
    i.dirs &&
      ((C = vi(C, null, !1, !0)),
      (C.dirs = C.dirs ? C.dirs.concat(i.dirs) : i.dirs)),
    i.transition && (C.transition = i.transition),
    (w = C),
    no(y),
    w
  );
}
const nf = (t) => {
    let e;
    for (const i in t)
      (i === "class" || i === "style" || vo(i)) && ((e || (e = {}))[i] = t[i]);
    return e;
  },
  sf = (t, e) => {
    const i = {};
    for (const n in t) (!Xr(n) || !(n.slice(9) in e)) && (i[n] = t[n]);
    return i;
  };
function of(t, e, i) {
  const { props: n, children: s, component: o } = t,
    { props: r, children: a, patchFlag: l } = e,
    c = o.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (i && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return n ? qa(n, r, c) : !!r;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const d = u[h];
        if (r[d] !== n[d] && !Ao(c, d)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : n === r
        ? !1
        : n
          ? r
            ? qa(n, r, c)
            : !0
          : !!r;
  return !1;
}
function qa(t, e, i) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (e[o] !== t[o] && !Ao(i, o)) return !0;
  }
  return !1;
}
function rf({ vnode: t, parent: e }, i) {
  for (; e; ) {
    const n = e.subTree;
    if ((n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t))
      (((t = e.vnode).el = i), (e = e.parent));
    else break;
  }
}
const af = Symbol.for("v-ndc"),
  lf = (t) => t.__isSuspense;
function cf(t, e) {
  e && e.pendingBranch
    ? Y(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Xd(t);
}
const uf = Symbol.for("v-scx"),
  hf = () => Xn(uf),
  Ps = {};
function Yn(t, e, i) {
  return $u(t, e, i);
}
function $u(
  t,
  e,
  { immediate: i, deep: n, flush: s, once: o, onTrack: r, onTrigger: a } = Te,
) {
  if (e && o) {
    const E = e;
    e = (...U) => {
      (E(...U), k());
    };
  }
  const l = qe,
    c = (E) => (n === !0 ? E : dn(E, n === !1 ? 1 : void 0));
  let u,
    h = !1,
    d = !1;
  if (
    ($e(t)
      ? ((u = () => t.value), (h = io(t)))
      : Zi(t)
        ? ((u = () => c(t)), (h = !0))
        : Y(t)
          ? ((d = !0),
            (h = t.some((E) => Zi(E) || io(E))),
            (u = () =>
              t.map((E) => {
                if ($e(E)) return E.value;
                if (Zi(E)) return c(E);
                if (te(E)) return bi(E, l, 2);
              })))
          : te(t)
            ? e
              ? (u = () => bi(t, l, 2))
              : (u = () => (f && f(), Ot(t, l, 3, [g])))
            : (u = Pt),
    e && n)
  ) {
    const E = u;
    u = () => dn(E());
  }
  let f,
    g = (E) => {
      f = C.onStop = () => {
        (bi(E, l, 4), (f = C.onStop = void 0));
      };
    },
    p;
  if (Vo)
    if (
      ((g = Pt),
      e ? i && Ot(e, l, 3, [u(), d ? [] : void 0, g]) : u(),
      s === "sync")
    ) {
      const E = hf();
      p = E.__watcherHandles || (E.__watcherHandles = []);
    } else return Pt;
  let y = d ? new Array(t.length).fill(Ps) : Ps;
  const w = () => {
    if (!(!C.active || !C.dirty))
      if (e) {
        const E = C.run();
        (n || h || (d ? E.some((U, I) => wi(U, y[I])) : wi(E, y))) &&
          (f && f(),
          Ot(e, l, 3, [E, y === Ps ? void 0 : d && y[0] === Ps ? [] : y, g]),
          (y = E));
      } else C.run();
  };
  w.allowRecurse = !!e;
  let x;
  s === "sync"
    ? (x = w)
    : s === "post"
      ? (x = () => st(w, l && l.suspense))
      : ((w.pre = !0), l && (w.id = l.uid), (x = () => ha(w)));
  const C = new ia(u, Pt, x),
    v = gu(),
    k = () => {
      (C.stop(), v && ea(v.effects, C));
    };
  return (
    e
      ? i
        ? w()
        : (y = C.run())
      : s === "post"
        ? st(C.run.bind(C), l && l.suspense)
        : C.run(),
    p && p.push(k),
    k
  );
}
function df(t, e, i) {
  const n = this.proxy,
    s = ze(t) ? (t.includes(".") ? Du(n, t) : () => n[t]) : t.bind(n, n);
  let o;
  te(e) ? (o = e) : ((o = e.handler), (i = e));
  const r = fs(this),
    a = $u(s, o.bind(n), i);
  return (r(), a);
}
function Du(t, e) {
  const i = e.split(".");
  return () => {
    let n = t;
    for (let s = 0; s < i.length && n; s++) n = n[i[s]];
    return n;
  };
}
function dn(t, e = 1 / 0, i) {
  if (e <= 0 || !Ce(t) || t.__v_skip || ((i = i || new Set()), i.has(t)))
    return t;
  if ((i.add(t), e--, $e(t))) dn(t.value, e, i);
  else if (Y(t)) for (let n = 0; n < t.length; n++) dn(t[n], e, i);
  else if (su(t) || yn(t))
    t.forEach((n) => {
      dn(n, e, i);
    });
  else if (au(t)) for (const n in t) dn(t[n], e, i);
  return t;
}
function Ei(t, e, i, n) {
  const s = t.dirs,
    o = e && e.dirs;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[n];
    l && (Ci(), Ot(l, i, 8, [t.el, a, t, e]), Oi());
  }
}
const ui = Symbol("_leaveCb"),
  Cs = Symbol("_enterCb");
function ff() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    nn(() => {
      t.isMounted = !0;
    }),
    Nu(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const bt = [Function, Array],
  Fu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: bt,
    onEnter: bt,
    onAfterEnter: bt,
    onEnterCancelled: bt,
    onBeforeLeave: bt,
    onLeave: bt,
    onAfterLeave: bt,
    onLeaveCancelled: bt,
    onBeforeAppear: bt,
    onAppear: bt,
    onAfterAppear: bt,
    onAppearCancelled: bt,
  },
  pf = {
    name: "BaseTransition",
    props: Fu,
    setup(t, { slots: e }) {
      const i = ep(),
        n = ff();
      return () => {
        const s = e.default && Bu(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const d of s)
            if (d.type !== mt) {
              o = d;
              break;
            }
        }
        const r = ce(t),
          { mode: a } = r;
        if (n.isLeaving) return Zo(o);
        const l = Na(o);
        if (!l) return Zo(o);
        const c = Ar(l, r, n, i);
        Er(l, c);
        const u = i.subTree,
          h = u && Na(u);
        if (h && h.type !== mt && !Hi(l, h)) {
          const d = Ar(h, r, n, i);
          if ((Er(h, d), a === "out-in" && l.type !== mt))
            return (
              (n.isLeaving = !0),
              (d.afterLeave = () => {
                ((n.isLeaving = !1),
                  i.update.active !== !1 &&
                    ((i.effect.dirty = !0), i.update()));
              }),
              Zo(o)
            );
          a === "in-out" &&
            l.type !== mt &&
            (d.delayLeave = (f, g, p) => {
              const y = Hu(n, h);
              ((y[String(h.key)] = h),
                (f[ui] = () => {
                  (g(), (f[ui] = void 0), delete c.delayedLeave);
                }),
                (c.delayedLeave = p));
            });
        }
        return o;
      };
    },
  },
  gf = pf;
function Hu(t, e) {
  const { leavingVNodes: i } = t;
  let n = i.get(e.type);
  return (n || ((n = Object.create(null)), i.set(e.type, n)), n);
}
function Ar(t, e, i, n) {
  const {
      appear: s,
      mode: o,
      persisted: r = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: h,
      onLeave: d,
      onAfterLeave: f,
      onLeaveCancelled: g,
      onBeforeAppear: p,
      onAppear: y,
      onAfterAppear: w,
      onAppearCancelled: x,
    } = e,
    C = String(t.key),
    v = Hu(i, t),
    k = (I, z) => {
      I && Ot(I, n, 9, z);
    },
    E = (I, z) => {
      const q = z[1];
      (k(I, z),
        Y(I) ? I.every((W) => W.length <= 1) && q() : I.length <= 1 && q());
    },
    U = {
      mode: o,
      persisted: r,
      beforeEnter(I) {
        let z = a;
        if (!i.isMounted)
          if (s) z = p || a;
          else return;
        I[ui] && I[ui](!0);
        const q = v[C];
        (q && Hi(t, q) && q.el[ui] && q.el[ui](), k(z, [I]));
      },
      enter(I) {
        let z = l,
          q = c,
          W = u;
        if (!i.isMounted)
          if (s) ((z = y || l), (q = w || c), (W = x || u));
          else return;
        let R = !1;
        const ee = (I[Cs] = (Q) => {
          R ||
            ((R = !0),
            Q ? k(W, [I]) : k(q, [I]),
            U.delayedLeave && U.delayedLeave(),
            (I[Cs] = void 0));
        });
        z ? E(z, [I, ee]) : ee();
      },
      leave(I, z) {
        const q = String(t.key);
        if ((I[Cs] && I[Cs](!0), i.isUnmounting)) return z();
        k(h, [I]);
        let W = !1;
        const R = (I[ui] = (ee) => {
          W ||
            ((W = !0),
            z(),
            ee ? k(g, [I]) : k(f, [I]),
            (I[ui] = void 0),
            v[q] === t && delete v[q]);
        });
        ((v[q] = t), d ? E(d, [I, R]) : R());
      },
      clone(I) {
        return Ar(I, e, i, n);
      },
    };
  return U;
}
function Zo(t) {
  if (ko(t)) return ((t = vi(t)), (t.children = null), t);
}
function Na(t) {
  if (!ko(t)) return t;
  const { shapeFlag: e, children: i } = t;
  if (i) {
    if (e & 16) return i[0];
    if (e & 32 && te(i.default)) return i.default();
  }
}
function Er(t, e) {
  t.shapeFlag & 6 && t.component
    ? Er(t.component.subTree, e)
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e);
}
function Bu(t, e = !1, i) {
  let n = [],
    s = 0;
  for (let o = 0; o < t.length; o++) {
    let r = t[o];
    const a = i == null ? r.key : String(i) + String(r.key != null ? r.key : o);
    r.type === pe
      ? (r.patchFlag & 128 && s++, (n = n.concat(Bu(r.children, e, a))))
      : (e || r.type !== mt) && n.push(a != null ? vi(r, { key: a }) : r);
  }
  if (s > 1) for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */ function We(t, e) {
  return te(t) ? Le({ name: t.name }, e, { setup: t }) : t;
}
const Zn = (t) => !!t.type.__asyncLoader,
  ko = (t) => t.type.__isKeepAlive;
function mf(t, e) {
  qu(t, "a", e);
}
function _f(t, e) {
  qu(t, "da", e);
}
function qu(t, e, i = qe) {
  const n =
    t.__wdc ||
    (t.__wdc = () => {
      let s = i;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return t();
    });
  if ((Mo(e, n, i), i)) {
    let s = i.parent;
    for (; s && s.parent; )
      (ko(s.parent.vnode) && yf(n, e, i, s), (s = s.parent));
  }
}
function yf(t, e, i, n) {
  const s = Mo(e, t, n, !0);
  Uu(() => {
    ea(n[e], s);
  }, i);
}
function Mo(t, e, i = qe, n = !1) {
  if (i) {
    const s = i[t] || (i[t] = []),
      o =
        e.__weh ||
        (e.__weh = (...r) => {
          if (i.isUnmounted) return;
          Ci();
          const a = fs(i),
            l = Ot(e, i, t, r);
          return (a(), Oi(), l);
        });
    return (n ? s.unshift(o) : s.push(o), o);
  }
}
const ni =
    (t) =>
    (e, i = qe) =>
      (!Vo || t === "sp") && Mo(t, (...n) => e(...n), i),
  bf = ni("bm"),
  nn = ni("m"),
  wf = ni("bu"),
  vf = ni("u"),
  Nu = ni("bum"),
  Uu = ni("um"),
  xf = ni("sp"),
  Sf = ni("rtg"),
  Pf = ni("rtc");
function Cf(t, e = qe) {
  Mo("ec", t, e);
}
function gt(t, e, i, n) {
  let s;
  const o = i;
  if (Y(t) || ze(t)) {
    s = new Array(t.length);
    for (let r = 0, a = t.length; r < a; r++) s[r] = e(t[r], r, void 0, o);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let r = 0; r < t; r++) s[r] = e(r + 1, r, void 0, o);
  } else if (Ce(t))
    if (t[Symbol.iterator]) s = Array.from(t, (r, a) => e(r, a, void 0, o));
    else {
      const r = Object.keys(t);
      s = new Array(r.length);
      for (let a = 0, l = r.length; a < l; a++) {
        const c = r[a];
        s[a] = e(t[c], c, a, o);
      }
    }
  else s = [];
  return s;
}
function Of(t, e, i = {}, n, s) {
  if (Ke.isCE || (Ke.parent && Zn(Ke.parent) && Ke.parent.isCE))
    return J("slot", i, n);
  let o = t[e];
  (o && o._c && (o._d = !1), $());
  const r = o && ju(o(i)),
    a = Ro(
      pe,
      { key: i.key || (r && r.key) || `_${e}` },
      r || [],
      r && t._ === 1 ? 64 : -2,
    );
  return (o && o._c && (o._d = !0), a);
}
function ju(t) {
  return t.some((e) =>
    oo(e) ? !(e.type === mt || (e.type === pe && !ju(e.children))) : !0,
  )
    ? t
    : null;
}
const kr = (t) => (t ? (ah(t) ? ga(t) || t.proxy : kr(t.parent)) : null),
  Jn = Le(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => kr(t.parent),
    $root: (t) => kr(t.root),
    $emit: (t) => t.emit,
    $options: (t) => da(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        ((t.effect.dirty = !0), ha(t.update));
      }),
    $nextTick: (t) => t.n || (t.n = Ru.bind(t.proxy)),
    $watch: (t) => df.bind(t),
  }),
  Jo = (t, e) => t !== Te && !t.__isScriptSetup && le(t, e),
  Tf = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: i,
        setupState: n,
        data: s,
        props: o,
        accessCache: r,
        type: a,
        appContext: l,
      } = t;
      let c;
      if (e[0] !== "$") {
        const f = r[e];
        if (f !== void 0)
          switch (f) {
            case 1:
              return n[e];
            case 2:
              return s[e];
            case 4:
              return i[e];
            case 3:
              return o[e];
          }
        else {
          if (Jo(n, e)) return ((r[e] = 1), n[e]);
          if (s !== Te && le(s, e)) return ((r[e] = 2), s[e]);
          if ((c = t.propsOptions[0]) && le(c, e)) return ((r[e] = 3), o[e]);
          if (i !== Te && le(i, e)) return ((r[e] = 4), i[e]);
          Mr && (r[e] = 0);
        }
      }
      const u = Jn[e];
      let h, d;
      if (u) return (e === "$attrs" && rt(t.attrs, "get", ""), u(t));
      if ((h = a.__cssModules) && (h = h[e])) return h;
      if (i !== Te && le(i, e)) return ((r[e] = 4), i[e]);
      if (((d = l.config.globalProperties), le(d, e))) return d[e];
    },
    set({ _: t }, e, i) {
      const { data: n, setupState: s, ctx: o } = t;
      return Jo(s, e)
        ? ((s[e] = i), !0)
        : n !== Te && le(n, e)
          ? ((n[e] = i), !0)
          : le(t.props, e) || (e[0] === "$" && e.slice(1) in t)
            ? !1
            : ((o[e] = i), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: i,
          ctx: n,
          appContext: s,
          propsOptions: o,
        },
      },
      r,
    ) {
      let a;
      return (
        !!i[r] ||
        (t !== Te && le(t, r)) ||
        Jo(e, r) ||
        ((a = o[0]) && le(a, r)) ||
        le(n, r) ||
        le(Jn, r) ||
        le(s.config.globalProperties, r)
      );
    },
    defineProperty(t, e, i) {
      return (
        i.get != null
          ? (t._.accessCache[e] = 0)
          : le(i, "value") && this.set(t, e, i.value, null),
        Reflect.defineProperty(t, e, i)
      );
    },
  };
function Ua(t) {
  return Y(t) ? t.reduce((e, i) => ((e[i] = null), e), {}) : t;
}
let Mr = !0;
function Af(t) {
  const e = da(t),
    i = t.proxy,
    n = t.ctx;
  ((Mr = !1), e.beforeCreate && ja(e.beforeCreate, t, "bc"));
  const {
    data: s,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: h,
    mounted: d,
    beforeUpdate: f,
    updated: g,
    activated: p,
    deactivated: y,
    beforeDestroy: w,
    beforeUnmount: x,
    destroyed: C,
    unmounted: v,
    render: k,
    renderTracked: E,
    renderTriggered: U,
    errorCaptured: I,
    serverPrefetch: z,
    expose: q,
    inheritAttrs: W,
    components: R,
    directives: ee,
    filters: Q,
  } = e;
  if ((c && Ef(c, n, null), r))
    for (const se in r) {
      const ue = r[se];
      te(ue) && (n[se] = ue.bind(i));
    }
  if (s) {
    const se = s.call(i, i);
    Ce(se) && (t.data = Oo(se));
  }
  if (((Mr = !0), o))
    for (const se in o) {
      const ue = o[se],
        ut = te(ue) ? ue.bind(i, i) : te(ue.get) ? ue.get.bind(i, i) : Pt,
        zt = !te(ue) && te(ue.set) ? ue.set.bind(i) : Pt,
        ht = Lo({ get: ut, set: zt });
      Object.defineProperty(n, se, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Ie) => (ht.value = Ie),
      });
    }
  if (a) for (const se in a) Wu(a[se], n, i, se);
  if (l) {
    const se = te(l) ? l.call(i) : l;
    Reflect.ownKeys(se).forEach((ue) => {
      Lf(ue, se[ue]);
    });
  }
  u && ja(u, t, "c");
  function ie(se, ue) {
    Y(ue) ? ue.forEach((ut) => se(ut.bind(i))) : ue && se(ue.bind(i));
  }
  if (
    (ie(bf, h),
    ie(nn, d),
    ie(wf, f),
    ie(vf, g),
    ie(mf, p),
    ie(_f, y),
    ie(Cf, I),
    ie(Pf, E),
    ie(Sf, U),
    ie(Nu, x),
    ie(Uu, v),
    ie(xf, z),
    Y(q))
  )
    if (q.length) {
      const se = t.exposed || (t.exposed = {});
      q.forEach((ue) => {
        Object.defineProperty(se, ue, {
          get: () => i[ue],
          set: (ut) => (i[ue] = ut),
        });
      });
    } else t.exposed || (t.exposed = {});
  (k && t.render === Pt && (t.render = k),
    W != null && (t.inheritAttrs = W),
    R && (t.components = R),
    ee && (t.directives = ee));
}
function Ef(t, e, i = Pt) {
  Y(t) && (t = Ir(t));
  for (const n in t) {
    const s = t[n];
    let o;
    (Ce(s)
      ? "default" in s
        ? (o = Xn(s.from || n, s.default, !0))
        : (o = Xn(s.from || n))
      : (o = Xn(s)),
      $e(o)
        ? Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (r) => (o.value = r),
          })
        : (e[n] = o));
  }
}
function ja(t, e, i) {
  Ot(Y(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy), e, i);
}
function Wu(t, e, i, n) {
  const s = n.includes(".") ? Du(i, n) : () => i[n];
  if (ze(t)) {
    const o = e[t];
    te(o) && Yn(s, o);
  } else if (te(t)) Yn(s, t.bind(i));
  else if (Ce(t))
    if (Y(t)) t.forEach((o) => Wu(o, e, i, n));
    else {
      const o = te(t.handler) ? t.handler.bind(i) : e[t.handler];
      te(o) && Yn(s, o, t);
    }
}
function da(t) {
  const e = t.type,
    { mixins: i, extends: n } = e,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: r },
    } = t.appContext,
    a = o.get(e);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !i && !n
        ? (l = e)
        : ((l = {}),
          s.length && s.forEach((c) => so(l, c, r, !0)),
          so(l, e, r)),
    Ce(e) && o.set(e, l),
    l
  );
}
function so(t, e, i, n = !1) {
  const { mixins: s, extends: o } = e;
  (o && so(t, o, i, !0), s && s.forEach((r) => so(t, r, i, !0)));
  for (const r in e)
    if (!(n && r === "expose")) {
      const a = kf[r] || (i && i[r]);
      t[r] = a ? a(t[r], e[r]) : e[r];
    }
  return t;
}
const kf = {
  data: Wa,
  props: Qa,
  emits: Qa,
  methods: Qn,
  computed: Qn,
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  components: Qn,
  directives: Qn,
  watch: If,
  provide: Wa,
  inject: Mf,
};
function Wa(t, e) {
  return e
    ? t
      ? function () {
          return Le(
            te(t) ? t.call(this, this) : t,
            te(e) ? e.call(this, this) : e,
          );
        }
      : e
    : t;
}
function Mf(t, e) {
  return Qn(Ir(t), Ir(e));
}
function Ir(t) {
  if (Y(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) e[t[i]] = t[i];
    return e;
  }
  return t;
}
function Xe(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Qn(t, e) {
  return t ? Le(Object.create(null), t, e) : e;
}
function Qa(t, e) {
  return t
    ? Y(t) && Y(e)
      ? [...new Set([...t, ...e])]
      : Le(Object.create(null), Ua(t), Ua(e ?? {}))
    : e;
}
function If(t, e) {
  if (!t) return e;
  if (!e) return t;
  const i = Le(Object.create(null), t);
  for (const n in e) i[n] = Xe(t[n], e[n]);
  return i;
}
function Qu() {
  return {
    app: null,
    config: {
      isNativeTag: ad,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Rf = 0;
function Vf(t, e) {
  return function (n, s = null) {
    (te(n) || (n = Le({}, n)), s != null && !Ce(s) && (s = null));
    const o = Qu(),
      r = new WeakSet();
    let a = !1;
    const l = (o.app = {
      _uid: Rf++,
      _component: n,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: ap,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          r.has(c) ||
            (c && te(c.install)
              ? (r.add(c), c.install(l, ...u))
              : te(c) && (r.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return (o.mixins.includes(c) || o.mixins.push(c), l);
      },
      component(c, u) {
        return u ? ((o.components[c] = u), l) : o.components[c];
      },
      directive(c, u) {
        return u ? ((o.directives[c] = u), l) : o.directives[c];
      },
      mount(c, u, h) {
        if (!a) {
          const d = J(n, s);
          return (
            (d.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            u && e ? e(d, c) : t(d, c, h),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            ga(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        a && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return ((o.provides[c] = u), l);
      },
      runWithContext(c) {
        const u = wn;
        wn = l;
        try {
          return c();
        } finally {
          wn = u;
        }
      },
    });
    return l;
  };
}
let wn = null;
function Lf(t, e) {
  if (qe) {
    let i = qe.provides;
    const n = qe.parent && qe.parent.provides;
    (n === i && (i = qe.provides = Object.create(n)), (i[t] = e));
  }
}
function Xn(t, e, i = !1) {
  const n = qe || Ke;
  if (n || wn) {
    const s = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : wn._context.provides;
    if (s && t in s) return s[t];
    if (arguments.length > 1) return i && te(e) ? e.call(n && n.proxy) : e;
  }
}
function zf() {
  return !!(qe || Ke || wn);
}
const Ku = {},
  Yu = () => Object.create(Ku),
  Zu = (t) => Object.getPrototypeOf(t) === Ku;
function Gf(t, e, i, n = !1) {
  const s = {},
    o = Yu();
  ((t.propsDefaults = Object.create(null)), Ju(t, e, s, o));
  for (const r in t.propsOptions[0]) r in s || (s[r] = void 0);
  (i ? (t.props = n ? s : Bd(s)) : t.type.props ? (t.props = s) : (t.props = o),
    (t.attrs = o));
}
function $f(t, e, i, n) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: r },
    } = t,
    a = ce(s),
    [l] = t.propsOptions;
  let c = !1;
  if ((n || r > 0) && !(r & 16)) {
    if (r & 8) {
      const u = t.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let d = u[h];
        if (Ao(t.emitsOptions, d)) continue;
        const f = e[d];
        if (l)
          if (le(o, d)) f !== o[d] && ((o[d] = f), (c = !0));
          else {
            const g = On(d);
            s[g] = Rr(l, a, g, f, t, !1);
          }
        else f !== o[d] && ((o[d] = f), (c = !0));
      }
    }
  } else {
    Ju(t, e, s, o) && (c = !0);
    let u;
    for (const h in a)
      (!e || (!le(e, h) && ((u = Vn(h)) === h || !le(e, u)))) &&
        (l
          ? i &&
            (i[h] !== void 0 || i[u] !== void 0) &&
            (s[h] = Rr(l, a, h, void 0, t, !0))
          : delete s[h]);
    if (o !== a)
      for (const h in o) (!e || !le(e, h)) && (delete o[h], (c = !0));
  }
  c && ti(t.attrs, "set", "");
}
function Ju(t, e, i, n) {
  const [s, o] = t.propsOptions;
  let r = !1,
    a;
  if (e)
    for (let l in e) {
      if (Kn(l)) continue;
      const c = e[l];
      let u;
      s && le(s, (u = On(l)))
        ? !o || !o.includes(u)
          ? (i[u] = c)
          : ((a || (a = {}))[u] = c)
        : Ao(t.emitsOptions, l) ||
          ((!(l in n) || c !== n[l]) && ((n[l] = c), (r = !0)));
    }
  if (o) {
    const l = ce(i),
      c = a || Te;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      i[h] = Rr(s, l, h, c[h], t, !le(c, h));
    }
  }
  return r;
}
function Rr(t, e, i, n, s, o) {
  const r = t[i];
  if (r != null) {
    const a = le(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && te(l)) {
        const { propsDefaults: c } = s;
        if (i in c) n = c[i];
        else {
          const u = fs(s);
          ((n = c[i] = l.call(null, e)), u());
        }
      } else n = l;
    }
    r[0] &&
      (o && !a ? (n = !1) : r[1] && (n === "" || n === Vn(i)) && (n = !0));
  }
  return n;
}
function Xu(t, e, i = !1) {
  const n = e.propsCache,
    s = n.get(t);
  if (s) return s;
  const o = t.props,
    r = {},
    a = [];
  let l = !1;
  if (!te(t)) {
    const u = (h) => {
      l = !0;
      const [d, f] = Xu(h, e, !0);
      (Le(r, d), f && a.push(...f));
    };
    (!i && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u));
  }
  if (!o && !l) return (Ce(t) && n.set(t, _n), _n);
  if (Y(o))
    for (let u = 0; u < o.length; u++) {
      const h = On(o[u]);
      Ka(h) && (r[h] = Te);
    }
  else if (o)
    for (const u in o) {
      const h = On(u);
      if (Ka(h)) {
        const d = o[u],
          f = (r[h] = Y(d) || te(d) ? { type: d } : Le({}, d));
        if (f) {
          const g = Ja(Boolean, f.type),
            p = Ja(String, f.type);
          ((f[0] = g > -1),
            (f[1] = p < 0 || g < p),
            (g > -1 || le(f, "default")) && a.push(h));
        }
      }
    }
  const c = [r, a];
  return (Ce(t) && n.set(t, c), c);
}
function Ka(t) {
  return t[0] !== "$" && !Kn(t);
}
function Ya(t) {
  return t === null
    ? "null"
    : typeof t == "function"
      ? t.name || ""
      : (typeof t == "object" && t.constructor && t.constructor.name) || "";
}
function Za(t, e) {
  return Ya(t) === Ya(e);
}
function Ja(t, e) {
  return Y(e) ? e.findIndex((i) => Za(i, t)) : te(e) && Za(e, t) ? 0 : -1;
}
const eh = (t) => t[0] === "_" || t === "$stable",
  fa = (t) => (Y(t) ? t.map(qt) : [qt(t)]),
  Df = (t, e, i) => {
    if (e._n) return e;
    const n = Ji((...s) => fa(e(...s)), i);
    return ((n._c = !1), n);
  },
  th = (t, e, i) => {
    const n = t._ctx;
    for (const s in t) {
      if (eh(s)) continue;
      const o = t[s];
      if (te(o)) e[s] = Df(s, o, n);
      else if (o != null) {
        const r = fa(o);
        e[s] = () => r;
      }
    }
  },
  ih = (t, e) => {
    const i = fa(e);
    t.slots.default = () => i;
  },
  Ff = (t, e) => {
    const i = (t.slots = Yu());
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? (Le(i, e), cu(i, "_", n, !0)) : th(e, i);
    } else e && ih(t, e);
  },
  Hf = (t, e, i) => {
    const { vnode: n, slots: s } = t;
    let o = !0,
      r = Te;
    if (n.shapeFlag & 32) {
      const a = e._;
      (a
        ? i && a === 1
          ? (o = !1)
          : (Le(s, e), !i && a === 1 && delete s._)
        : ((o = !e.$stable), th(e, s)),
        (r = e));
    } else e && (ih(t, e), (r = { default: 1 }));
    if (o) for (const a in s) !eh(a) && r[a] == null && delete s[a];
  };
function Vr(t, e, i, n, s = !1) {
  if (Y(t)) {
    t.forEach((d, f) => Vr(d, e && (Y(e) ? e[f] : e), i, n, s));
    return;
  }
  if (Zn(n) && !s) return;
  const o = n.shapeFlag & 4 ? ga(n.component) || n.component.proxy : n.el,
    r = s ? null : o,
    { i: a, r: l } = t,
    c = e && e.r,
    u = a.refs === Te ? (a.refs = {}) : a.refs,
    h = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (ze(c)
        ? ((u[c] = null), le(h, c) && (h[c] = null))
        : $e(c) && (c.value = null)),
    te(l))
  )
    bi(l, a, 12, [r, u]);
  else {
    const d = ze(l),
      f = $e(l);
    if (d || f) {
      const g = () => {
        if (t.f) {
          const p = d ? (le(h, l) ? h[l] : u[l]) : l.value;
          s
            ? Y(p) && ea(p, o)
            : Y(p)
              ? p.includes(o) || p.push(o)
              : d
                ? ((u[l] = [o]), le(h, l) && (h[l] = u[l]))
                : ((l.value = [o]), t.k && (u[t.k] = l.value));
        } else
          d
            ? ((u[l] = r), le(h, l) && (h[l] = r))
            : f && ((l.value = r), t.k && (u[t.k] = r));
      };
      r ? ((g.id = -1), st(g, i)) : g();
    }
  }
}
const st = cf;
function Bf(t) {
  return qf(t);
}
function qf(t, e) {
  const i = uu();
  i.__VUE__ = !0;
  const {
      insert: n,
      remove: s,
      patchProp: o,
      createElement: r,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: h,
      nextSibling: d,
      setScopeId: f = Pt,
      insertStaticContent: g,
    } = t,
    p = (
      m,
      _,
      P,
      O = null,
      A = null,
      L = null,
      F = void 0,
      V = null,
      G = !!_.dynamicChildren,
    ) => {
      if (m === _) return;
      (m && !Hi(m, _) && ((O = on(m)), Ie(m, A, L, !0), (m = null)),
        _.patchFlag === -2 && ((G = !1), (_.dynamicChildren = null)));
      const { type: M, ref: N, shapeFlag: K } = _;
      switch (M) {
        case Io:
          y(m, _, P, O);
          break;
        case mt:
          w(m, _, P, O);
          break;
        case Ys:
          m == null && x(_, P, O, F);
          break;
        case pe:
          R(m, _, P, O, A, L, F, V, G);
          break;
        default:
          K & 1
            ? k(m, _, P, O, A, L, F, V, G)
            : K & 6
              ? ee(m, _, P, O, A, L, F, V, G)
              : (K & 64 || K & 128) && M.process(m, _, P, O, A, L, F, V, G, Gt);
      }
      N != null && A && Vr(N, m && m.ref, L, _ || m, !_);
    },
    y = (m, _, P, O) => {
      if (m == null) n((_.el = a(_.children)), P, O);
      else {
        const A = (_.el = m.el);
        _.children !== m.children && c(A, _.children);
      }
    },
    w = (m, _, P, O) => {
      m == null ? n((_.el = l(_.children || "")), P, O) : (_.el = m.el);
    },
    x = (m, _, P, O) => {
      [m.el, m.anchor] = g(m.children, _, P, O, m.el, m.anchor);
    },
    C = ({ el: m, anchor: _ }, P, O) => {
      let A;
      for (; m && m !== _; ) ((A = d(m)), n(m, P, O), (m = A));
      n(_, P, O);
    },
    v = ({ el: m, anchor: _ }) => {
      let P;
      for (; m && m !== _; ) ((P = d(m)), s(m), (m = P));
      s(_);
    },
    k = (m, _, P, O, A, L, F, V, G) => {
      (_.type === "svg" ? (F = "svg") : _.type === "math" && (F = "mathml"),
        m == null ? E(_, P, O, A, L, F, V, G) : z(m, _, A, L, F, V, G));
    },
    E = (m, _, P, O, A, L, F, V) => {
      let G, M;
      const { props: N, shapeFlag: K, transition: j, dirs: X } = m;
      if (
        ((G = m.el = r(m.type, L, N && N.is, N)),
        K & 8
          ? u(G, m.children)
          : K & 16 && I(m.children, G, null, O, A, Xo(m, L), F, V),
        X && Ei(m, null, O, "created"),
        U(G, m, m.scopeId, F, O),
        N)
      ) {
        for (const _e in N)
          _e !== "value" &&
            !Kn(_e) &&
            o(G, _e, null, N[_e], L, m.children, O, A, Tt);
        ("value" in N && o(G, "value", null, N.value, L),
          (M = N.onVnodeBeforeMount) && Dt(M, O, m));
      }
      X && Ei(m, null, O, "beforeMount");
      const re = Nf(A, j);
      (re && j.beforeEnter(G),
        n(G, _, P),
        ((M = N && N.onVnodeMounted) || re || X) &&
          st(() => {
            (M && Dt(M, O, m),
              re && j.enter(G),
              X && Ei(m, null, O, "mounted"));
          }, A));
    },
    U = (m, _, P, O, A) => {
      if ((P && f(m, P), O)) for (let L = 0; L < O.length; L++) f(m, O[L]);
      if (A) {
        let L = A.subTree;
        if (_ === L) {
          const F = A.vnode;
          U(m, F, F.scopeId, F.slotScopeIds, A.parent);
        }
      }
    },
    I = (m, _, P, O, A, L, F, V, G = 0) => {
      for (let M = G; M < m.length; M++) {
        const N = (m[M] = V ? hi(m[M]) : qt(m[M]));
        p(null, N, _, P, O, A, L, F, V);
      }
    },
    z = (m, _, P, O, A, L, F) => {
      const V = (_.el = m.el);
      let { patchFlag: G, dynamicChildren: M, dirs: N } = _;
      G |= m.patchFlag & 16;
      const K = m.props || Te,
        j = _.props || Te;
      let X;
      if (
        (P && ki(P, !1),
        (X = j.onVnodeBeforeUpdate) && Dt(X, P, _, m),
        N && Ei(_, m, P, "beforeUpdate"),
        P && ki(P, !0),
        M
          ? q(m.dynamicChildren, M, V, P, O, Xo(_, A), L)
          : F || ue(m, _, V, null, P, O, Xo(_, A), L, !1),
        G > 0)
      ) {
        if (G & 16) W(V, _, K, j, P, O, A);
        else if (
          (G & 2 && K.class !== j.class && o(V, "class", null, j.class, A),
          G & 4 && o(V, "style", K.style, j.style, A),
          G & 8)
        ) {
          const re = _.dynamicProps;
          for (let _e = 0; _e < re.length; _e++) {
            const Oe = re[_e],
              De = K[Oe],
              At = j[Oe];
            (At !== De || Oe === "value") &&
              o(V, Oe, De, At, A, m.children, P, O, Tt);
          }
        }
        G & 1 && m.children !== _.children && u(V, _.children);
      } else !F && M == null && W(V, _, K, j, P, O, A);
      ((X = j.onVnodeUpdated) || N) &&
        st(() => {
          (X && Dt(X, P, _, m), N && Ei(_, m, P, "updated"));
        }, O);
    },
    q = (m, _, P, O, A, L, F) => {
      for (let V = 0; V < _.length; V++) {
        const G = m[V],
          M = _[V],
          N =
            G.el && (G.type === pe || !Hi(G, M) || G.shapeFlag & 70)
              ? h(G.el)
              : P;
        p(G, M, N, null, O, A, L, F, !0);
      }
    },
    W = (m, _, P, O, A, L, F) => {
      if (P !== O) {
        if (P !== Te)
          for (const V in P)
            !Kn(V) && !(V in O) && o(m, V, P[V], null, F, _.children, A, L, Tt);
        for (const V in O) {
          if (Kn(V)) continue;
          const G = O[V],
            M = P[V];
          G !== M && V !== "value" && o(m, V, M, G, F, _.children, A, L, Tt);
        }
        "value" in O && o(m, "value", P.value, O.value, F);
      }
    },
    R = (m, _, P, O, A, L, F, V, G) => {
      const M = (_.el = m ? m.el : a("")),
        N = (_.anchor = m ? m.anchor : a(""));
      let { patchFlag: K, dynamicChildren: j, slotScopeIds: X } = _;
      (X && (V = V ? V.concat(X) : X),
        m == null
          ? (n(M, P, O), n(N, P, O), I(_.children || [], P, N, A, L, F, V, G))
          : K > 0 && K & 64 && j && m.dynamicChildren
            ? (q(m.dynamicChildren, j, P, A, L, F, V),
              (_.key != null || (A && _ === A.subTree)) && nh(m, _, !0))
            : ue(m, _, P, N, A, L, F, V, G));
    },
    ee = (m, _, P, O, A, L, F, V, G) => {
      ((_.slotScopeIds = V),
        m == null
          ? _.shapeFlag & 512
            ? A.ctx.activate(_, P, O, F, G)
            : Q(_, P, O, A, L, F, G)
          : be(m, _, G));
    },
    Q = (m, _, P, O, A, L, F) => {
      const V = (m.component = Xf(m, O, A));
      if ((ko(m) && (V.ctx.renderer = Gt), tp(V), V.asyncDep)) {
        if ((A && A.registerDep(V, ie), !m.el)) {
          const G = (V.subTree = J(mt));
          w(null, G, _, P);
        }
      } else ie(V, m, _, P, A, L, F);
    },
    be = (m, _, P) => {
      const O = (_.component = m.component);
      if (of(m, _, P))
        if (O.asyncDep && !O.asyncResolved) {
          se(O, _, P);
          return;
        } else ((O.next = _), Jd(O.update), (O.effect.dirty = !0), O.update());
      else ((_.el = m.el), (O.vnode = _));
    },
    ie = (m, _, P, O, A, L, F) => {
      const V = () => {
          if (m.isMounted) {
            let { next: N, bu: K, u: j, parent: X, vnode: re } = m;
            {
              const rn = sh(m);
              if (rn) {
                (N && ((N.el = re.el), se(m, N, F)),
                  rn.asyncDep.then(() => {
                    m.isUnmounted || V();
                  }));
                return;
              }
            }
            let _e = N,
              Oe;
            (ki(m, !1),
              N ? ((N.el = re.el), se(m, N, F)) : (N = re),
              K && Qo(K),
              (Oe = N.props && N.props.onVnodeBeforeUpdate) && Dt(Oe, X, N, re),
              ki(m, !0));
            const De = Yo(m),
              At = m.subTree;
            ((m.subTree = De),
              p(At, De, h(At.el), on(At), m, A, L),
              (N.el = De.el),
              _e === null && rf(m, De.el),
              j && st(j, A),
              (Oe = N.props && N.props.onVnodeUpdated) &&
                st(() => Dt(Oe, X, N, re), A));
          } else {
            let N;
            const { el: K, props: j } = _,
              { bm: X, m: re, parent: _e } = m,
              Oe = Zn(_);
            if (
              (ki(m, !1),
              X && Qo(X),
              !Oe && (N = j && j.onVnodeBeforeMount) && Dt(N, _e, _),
              ki(m, !0),
              K && ka)
            ) {
              const De = () => {
                ((m.subTree = Yo(m)), ka(K, m.subTree, m, A, null));
              };
              Oe
                ? _.type.__asyncLoader().then(() => !m.isUnmounted && De())
                : De();
            } else {
              const De = (m.subTree = Yo(m));
              (p(null, De, P, O, m, A, L), (_.el = De.el));
            }
            if ((re && st(re, A), !Oe && (N = j && j.onVnodeMounted))) {
              const De = _;
              st(() => Dt(N, _e, De), A);
            }
            ((_.shapeFlag & 256 ||
              (_e && Zn(_e.vnode) && _e.vnode.shapeFlag & 256)) &&
              m.a &&
              st(m.a, A),
              (m.isMounted = !0),
              (_ = P = O = null));
          }
        },
        G = (m.effect = new ia(V, Pt, () => ha(M), m.scope)),
        M = (m.update = () => {
          G.dirty && G.run();
        });
      ((M.id = m.uid), ki(m, !0), M());
    },
    se = (m, _, P) => {
      _.component = m;
      const O = m.vnode.props;
      ((m.vnode = _),
        (m.next = null),
        $f(m, _.props, O, P),
        Hf(m, _.children, P),
        Ci(),
        Ba(m),
        Oi());
    },
    ue = (m, _, P, O, A, L, F, V, G = !1) => {
      const M = m && m.children,
        N = m ? m.shapeFlag : 0,
        K = _.children,
        { patchFlag: j, shapeFlag: X } = _;
      if (j > 0) {
        if (j & 128) {
          zt(M, K, P, O, A, L, F, V, G);
          return;
        } else if (j & 256) {
          ut(M, K, P, O, A, L, F, V, G);
          return;
        }
      }
      X & 8
        ? (N & 16 && Tt(M, A, L), K !== M && u(P, K))
        : N & 16
          ? X & 16
            ? zt(M, K, P, O, A, L, F, V, G)
            : Tt(M, A, L, !0)
          : (N & 8 && u(P, ""), X & 16 && I(K, P, O, A, L, F, V, G));
    },
    ut = (m, _, P, O, A, L, F, V, G) => {
      ((m = m || _n), (_ = _ || _n));
      const M = m.length,
        N = _.length,
        K = Math.min(M, N);
      let j;
      for (j = 0; j < K; j++) {
        const X = (_[j] = G ? hi(_[j]) : qt(_[j]));
        p(m[j], X, P, null, A, L, F, V, G);
      }
      M > N ? Tt(m, A, L, !0, !1, K) : I(_, P, O, A, L, F, V, G, K);
    },
    zt = (m, _, P, O, A, L, F, V, G) => {
      let M = 0;
      const N = _.length;
      let K = m.length - 1,
        j = N - 1;
      for (; M <= K && M <= j; ) {
        const X = m[M],
          re = (_[M] = G ? hi(_[M]) : qt(_[M]));
        if (Hi(X, re)) p(X, re, P, null, A, L, F, V, G);
        else break;
        M++;
      }
      for (; M <= K && M <= j; ) {
        const X = m[K],
          re = (_[j] = G ? hi(_[j]) : qt(_[j]));
        if (Hi(X, re)) p(X, re, P, null, A, L, F, V, G);
        else break;
        (K--, j--);
      }
      if (M > K) {
        if (M <= j) {
          const X = j + 1,
            re = X < N ? _[X].el : O;
          for (; M <= j; )
            (p(null, (_[M] = G ? hi(_[M]) : qt(_[M])), P, re, A, L, F, V, G),
              M++);
        }
      } else if (M > j) for (; M <= K; ) (Ie(m[M], A, L, !0), M++);
      else {
        const X = M,
          re = M,
          _e = new Map();
        for (M = re; M <= j; M++) {
          const dt = (_[M] = G ? hi(_[M]) : qt(_[M]));
          dt.key != null && _e.set(dt.key, M);
        }
        let Oe,
          De = 0;
        const At = j - re + 1;
        let rn = !1,
          Ma = 0;
        const $n = new Array(At);
        for (M = 0; M < At; M++) $n[M] = 0;
        for (M = X; M <= K; M++) {
          const dt = m[M];
          if (De >= At) {
            Ie(dt, A, L, !0);
            continue;
          }
          let $t;
          if (dt.key != null) $t = _e.get(dt.key);
          else
            for (Oe = re; Oe <= j; Oe++)
              if ($n[Oe - re] === 0 && Hi(dt, _[Oe])) {
                $t = Oe;
                break;
              }
          $t === void 0
            ? Ie(dt, A, L, !0)
            : (($n[$t - re] = M + 1),
              $t >= Ma ? (Ma = $t) : (rn = !0),
              p(dt, _[$t], P, null, A, L, F, V, G),
              De++);
        }
        const Ia = rn ? Uf($n) : _n;
        for (Oe = Ia.length - 1, M = At - 1; M >= 0; M--) {
          const dt = re + M,
            $t = _[dt],
            Ra = dt + 1 < N ? _[dt + 1].el : O;
          $n[M] === 0
            ? p(null, $t, P, Ra, A, L, F, V, G)
            : rn && (Oe < 0 || M !== Ia[Oe] ? ht($t, P, Ra, 2) : Oe--);
        }
      }
    },
    ht = (m, _, P, O, A = null) => {
      const { el: L, type: F, transition: V, children: G, shapeFlag: M } = m;
      if (M & 6) {
        ht(m.component.subTree, _, P, O);
        return;
      }
      if (M & 128) {
        m.suspense.move(_, P, O);
        return;
      }
      if (M & 64) {
        F.move(m, _, P, Gt);
        return;
      }
      if (F === pe) {
        n(L, _, P);
        for (let K = 0; K < G.length; K++) ht(G[K], _, P, O);
        n(m.anchor, _, P);
        return;
      }
      if (F === Ys) {
        C(m, _, P);
        return;
      }
      if (O !== 2 && M & 1 && V)
        if (O === 0) (V.beforeEnter(L), n(L, _, P), st(() => V.enter(L), A));
        else {
          const { leave: K, delayLeave: j, afterLeave: X } = V,
            re = () => n(L, _, P),
            _e = () => {
              K(L, () => {
                (re(), X && X());
              });
            };
          j ? j(L, re, _e) : _e();
        }
      else n(L, _, P);
    },
    Ie = (m, _, P, O = !1, A = !1) => {
      const {
        type: L,
        props: F,
        ref: V,
        children: G,
        dynamicChildren: M,
        shapeFlag: N,
        patchFlag: K,
        dirs: j,
      } = m;
      if ((V != null && Vr(V, null, P, m, !0), N & 256)) {
        _.ctx.deactivate(m);
        return;
      }
      const X = N & 1 && j,
        re = !Zn(m);
      let _e;
      if ((re && (_e = F && F.onVnodeBeforeUnmount) && Dt(_e, _, m), N & 6))
        jo(m.component, P, O);
      else {
        if (N & 128) {
          m.suspense.unmount(P, O);
          return;
        }
        (X && Ei(m, null, _, "beforeUnmount"),
          N & 64
            ? m.type.remove(m, _, P, A, Gt, O)
            : M && (L !== pe || (K > 0 && K & 64))
              ? Tt(M, _, P, !1, !0)
              : ((L === pe && K & 384) || (!A && N & 16)) && Tt(G, _, P),
          O && sn(m));
      }
      ((re && (_e = F && F.onVnodeUnmounted)) || X) &&
        st(() => {
          (_e && Dt(_e, _, m), X && Ei(m, null, _, "unmounted"));
        }, P);
    },
    sn = (m) => {
      const { type: _, el: P, anchor: O, transition: A } = m;
      if (_ === pe) {
        Uo(P, O);
        return;
      }
      if (_ === Ys) {
        v(m);
        return;
      }
      const L = () => {
        (s(P), A && !A.persisted && A.afterLeave && A.afterLeave());
      };
      if (m.shapeFlag & 1 && A && !A.persisted) {
        const { leave: F, delayLeave: V } = A,
          G = () => F(P, L);
        V ? V(m.el, L, G) : G();
      } else L();
    },
    Uo = (m, _) => {
      let P;
      for (; m !== _; ) ((P = d(m)), s(m), (m = P));
      s(_);
    },
    jo = (m, _, P) => {
      const { bum: O, scope: A, update: L, subTree: F, um: V } = m;
      (O && Qo(O),
        A.stop(),
        L && ((L.active = !1), Ie(F, m, _, P)),
        V && st(V, _),
        st(() => {
          m.isUnmounted = !0;
        }, _),
        _ &&
          _.pendingBranch &&
          !_.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === _.pendingId &&
          (_.deps--, _.deps === 0 && _.resolve()));
    },
    Tt = (m, _, P, O = !1, A = !1, L = 0) => {
      for (let F = L; F < m.length; F++) Ie(m[F], _, P, O, A);
    },
    on = (m) =>
      m.shapeFlag & 6
        ? on(m.component.subTree)
        : m.shapeFlag & 128
          ? m.suspense.next()
          : d(m.anchor || m.el);
  let Gn = !1;
  const _s = (m, _, P) => {
      (m == null
        ? _._vnode && Ie(_._vnode, null, null, !0)
        : p(_._vnode || null, m, _, null, null, null, P),
        Gn || ((Gn = !0), Ba(), Lu(), (Gn = !1)),
        (_._vnode = m));
    },
    Gt = { p, um: Ie, m: ht, r: sn, mt: Q, mc: I, pc: ue, pbc: q, n: on, o: t };
  let ys, ka;
  return { render: _s, hydrate: ys, createApp: Vf(_s, ys) };
}
function Xo({ type: t, props: e }, i) {
  return (i === "svg" && t === "foreignObject") ||
    (i === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : i;
}
function ki({ effect: t, update: e }, i) {
  t.allowRecurse = e.allowRecurse = i;
}
function Nf(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function nh(t, e, i = !1) {
  const n = t.children,
    s = e.children;
  if (Y(n) && Y(s))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let a = s[o];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[o] = hi(s[o])), (a.el = r.el)),
        i || nh(r, a)),
        a.type === Io && (a.el = r.el));
    }
}
function Uf(t) {
  const e = t.slice(),
    i = [0];
  let n, s, o, r, a;
  const l = t.length;
  for (n = 0; n < l; n++) {
    const c = t[n];
    if (c !== 0) {
      if (((s = i[i.length - 1]), t[s] < c)) {
        ((e[n] = s), i.push(n));
        continue;
      }
      for (o = 0, r = i.length - 1; o < r; )
        ((a = (o + r) >> 1), t[i[a]] < c ? (o = a + 1) : (r = a));
      c < t[i[o]] && (o > 0 && (e[n] = i[o - 1]), (i[o] = n));
    }
  }
  for (o = i.length, r = i[o - 1]; o-- > 0; ) ((i[o] = r), (r = e[r]));
  return i;
}
function sh(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : sh(e);
}
const jf = (t) => t.__isTeleport,
  pe = Symbol.for("v-fgt"),
  Io = Symbol.for("v-txt"),
  mt = Symbol.for("v-cmt"),
  Ys = Symbol.for("v-stc"),
  es = [];
let kt = null;
function $(t = !1) {
  es.push((kt = t ? null : []));
}
function Wf() {
  (es.pop(), (kt = es[es.length - 1] || null));
}
let ls = 1;
function Xa(t) {
  ls += t;
}
function oh(t) {
  return (
    (t.dynamicChildren = ls > 0 ? kt || _n : null),
    Wf(),
    ls > 0 && kt && kt.push(t),
    t
  );
}
function B(t, e, i, n, s, o) {
  return oh(b(t, e, i, n, s, o, !0));
}
function Ro(t, e, i, n, s) {
  return oh(J(t, e, i, n, s, !0));
}
function oo(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Hi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const rh = ({ key: t }) => t ?? null,
  Zs = ({ ref: t, ref_key: e, ref_for: i }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? ze(t) || $e(t) || te(t)
        ? { i: Ke, r: t, k: e, f: !!i }
        : t
      : null
  );
function b(
  t,
  e = null,
  i = null,
  n = 0,
  s = null,
  o = t === pe ? 0 : 1,
  r = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && rh(e),
    ref: e && Zs(e),
    scopeId: Eo,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke,
  };
  return (
    a
      ? (pa(l, i), o & 128 && t.normalize(l))
      : i && (l.shapeFlag |= ze(i) ? 8 : 16),
    ls > 0 &&
      !r &&
      kt &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      kt.push(l),
    l
  );
}
const J = Qf;
function Qf(t, e = null, i = null, n = 0, s = null, o = !1) {
  if (((!t || t === af) && (t = mt), oo(t))) {
    const a = vi(t, e, !0);
    return (
      i && pa(a, i),
      ls > 0 &&
        !o &&
        kt &&
        (a.shapeFlag & 6 ? (kt[kt.indexOf(t)] = a) : kt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((op(t) && (t = t.__vccOpts), e)) {
    e = Kf(e);
    let { class: a, style: l } = e;
    (a && !ze(a) && (e.class = Z(a)),
      Ce(l) && (Au(l) && !Y(l) && (l = Le({}, l)), (e.style = Po(l))));
  }
  const r = ze(t) ? 1 : lf(t) ? 128 : jf(t) ? 64 : Ce(t) ? 4 : te(t) ? 2 : 0;
  return b(t, e, i, n, s, r, o, !0);
}
function Kf(t) {
  return t ? (Au(t) || Zu(t) ? Le({}, t) : t) : null;
}
function vi(t, e, i = !1, n = !1) {
  const { props: s, ref: o, patchFlag: r, children: a, transition: l } = t,
    c = e ? Yf(s || {}, e) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: c,
      key: c && rh(c),
      ref:
        e && e.ref
          ? i && o
            ? Y(o)
              ? o.concat(Zs(e))
              : [o, Zs(e)]
            : Zs(e)
          : o,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: a,
      target: t.target,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== pe ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: l,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && vi(t.ssContent),
      ssFallback: t.ssFallback && vi(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    };
  return (l && n && (u.transition = l.clone(u)), u);
}
function vn(t = " ", e = 0) {
  return J(Io, null, t, e);
}
function si(t, e) {
  const i = J(Ys, null, t);
  return ((i.staticCount = e), i);
}
function Se(t = "", e = !1) {
  return e ? ($(), Ro(mt, null, t)) : J(mt, null, t);
}
function qt(t) {
  return t == null || typeof t == "boolean"
    ? J(mt)
    : Y(t)
      ? J(pe, null, t.slice())
      : typeof t == "object"
        ? hi(t)
        : J(Io, null, String(t));
}
function hi(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : vi(t);
}
function pa(t, e) {
  let i = 0;
  const { shapeFlag: n } = t;
  if (e == null) e = null;
  else if (Y(e)) i = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), pa(t, s()), s._c && (s._d = !0));
      return;
    } else {
      i = 32;
      const s = e._;
      !s && !Zu(e)
        ? (e._ctx = Ke)
        : s === 3 &&
          Ke &&
          (Ke.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    te(e)
      ? ((e = { default: e, _ctx: Ke }), (i = 32))
      : ((e = String(e)), n & 64 ? ((i = 16), (e = [vn(e)])) : (i = 8));
  ((t.children = e), (t.shapeFlag |= i));
}
function Yf(...t) {
  const e = {};
  for (let i = 0; i < t.length; i++) {
    const n = t[i];
    for (const s in n)
      if (s === "class")
        e.class !== n.class && (e.class = Z([e.class, n.class]));
      else if (s === "style") e.style = Po([e.style, n.style]);
      else if (vo(s)) {
        const o = e[s],
          r = n[s];
        r &&
          o !== r &&
          !(Y(o) && o.includes(r)) &&
          (e[s] = o ? [].concat(o, r) : r);
      } else s !== "" && (e[s] = n[s]);
  }
  return e;
}
function Dt(t, e, i, n = null) {
  Ot(t, e, 7, [i, n]);
}
const Zf = Qu();
let Jf = 0;
function Xf(t, e, i) {
  const n = t.type,
    s = (e ? e.appContext : t.appContext) || Zf,
    o = {
      uid: Jf++,
      vnode: t,
      type: n,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new fu(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Xu(n, s),
      emitsOptions: Gu(n, s),
      emit: null,
      emitted: null,
      propsDefaults: Te,
      inheritAttrs: n.inheritAttrs,
      ctx: Te,
      data: Te,
      props: Te,
      attrs: Te,
      slots: Te,
      refs: Te,
      setupState: Te,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: i,
      suspenseId: i ? i.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = e ? e.root : o),
    (o.emit = tf.bind(null, o)),
    t.ce && t.ce(o),
    o
  );
}
let qe = null;
const ep = () => qe || Ke;
let ro, Lr;
{
  const t = uu(),
    e = (i, n) => {
      let s;
      return (
        (s = t[i]) || (s = t[i] = []),
        s.push(n),
        (o) => {
          s.length > 1 ? s.forEach((r) => r(o)) : s[0](o);
        }
      );
    };
  ((ro = e("__VUE_INSTANCE_SETTERS__", (i) => (qe = i))),
    (Lr = e("__VUE_SSR_SETTERS__", (i) => (Vo = i))));
}
const fs = (t) => {
    const e = qe;
    return (
      ro(t),
      t.scope.on(),
      () => {
        (t.scope.off(), ro(e));
      }
    );
  },
  el = () => {
    (qe && qe.scope.off(), ro(null));
  };
function ah(t) {
  return t.vnode.shapeFlag & 4;
}
let Vo = !1;
function tp(t, e = !1) {
  e && Lr(e);
  const { props: i, children: n } = t.vnode,
    s = ah(t);
  (Gf(t, i, s, e), Ff(t, n));
  const o = s ? ip(t, e) : void 0;
  return (e && Lr(!1), o);
}
function ip(t, e) {
  const i = t.type;
  ((t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Tf)));
  const { setup: n } = i;
  if (n) {
    const s = (t.setupContext = n.length > 1 ? sp(t) : null),
      o = fs(t);
    Ci();
    const r = bi(n, t, 0, [t.props, s]);
    if ((Oi(), o(), ou(r))) {
      if ((r.then(el, el), e))
        return r
          .then((a) => {
            tl(t, a, e);
          })
          .catch((a) => {
            To(a, t, 0);
          });
      t.asyncDep = r;
    } else tl(t, r, e);
  } else lh(t, e);
}
function tl(t, e, i) {
  (te(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Ce(e) && (t.setupState = Mu(e)),
    lh(t, i));
}
let il;
function lh(t, e, i) {
  const n = t.type;
  if (!t.render) {
    if (!e && il && !n.render) {
      const s = n.template || da(t).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = t.appContext.config,
          { delimiters: a, compilerOptions: l } = n,
          c = Le(Le({ isCustomElement: o, delimiters: a }, r), l);
        n.render = il(s, c);
      }
    }
    t.render = n.render || Pt;
  }
  {
    const s = fs(t);
    Ci();
    try {
      Af(t);
    } finally {
      (Oi(), s());
    }
  }
}
const np = {
  get(t, e) {
    return (rt(t, "get", ""), t[e]);
  },
};
function sp(t) {
  const e = (i) => {
    t.exposed = i || {};
  };
  return {
    attrs: new Proxy(t.attrs, np),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function ga(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(Mu(la(t.exposed)), {
        get(e, i) {
          if (i in e) return e[i];
          if (i in Jn) return Jn[i](t);
        },
        has(e, i) {
          return i in e || i in Jn;
        },
      }))
    );
}
function op(t) {
  return te(t) && "__vccOpts" in t;
}
const Lo = (t, e) => qd(t, e, Vo);
function rp(t, e, i) {
  const n = arguments.length;
  return n === 2
    ? Ce(e) && !Y(e)
      ? oo(e)
        ? J(t, null, [e])
        : J(t, e)
      : J(t, null, e)
    : (n > 3
        ? (i = Array.prototype.slice.call(arguments, 2))
        : n === 3 && oo(i) && (i = [i]),
      J(t, e, i));
}
const ap = "3.4.27";
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const lp = "http://www.w3.org/2000/svg",
  cp = "http://www.w3.org/1998/Math/MathML",
  di = typeof document < "u" ? document : null,
  nl = di && di.createElement("template"),
  up = {
    insert: (t, e, i) => {
      e.insertBefore(t, i || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, i, n) => {
      const s =
        e === "svg"
          ? di.createElementNS(lp, t)
          : e === "mathml"
            ? di.createElementNS(cp, t)
            : di.createElement(t, i ? { is: i } : void 0);
      return (
        t === "select" &&
          n &&
          n.multiple != null &&
          s.setAttribute("multiple", n.multiple),
        s
      );
    },
    createText: (t) => di.createTextNode(t),
    createComment: (t) => di.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => di.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, i, n, s, o) {
      const r = i ? i.previousSibling : e.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), i),
            !(s === o || !(s = s.nextSibling));
        );
      else {
        nl.innerHTML =
          n === "svg"
            ? `<svg>${t}</svg>`
            : n === "mathml"
              ? `<math>${t}</math>`
              : t;
        const a = nl.content;
        if (n === "svg" || n === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        e.insertBefore(a, i);
      }
      return [
        r ? r.nextSibling : e.firstChild,
        i ? i.previousSibling : e.lastChild,
      ];
    },
  },
  ri = "transition",
  Dn = "animation",
  cs = Symbol("_vtc"),
  Tn = (t, { slots: e }) => rp(gf, hp(t), e);
Tn.displayName = "Transition";
const ch = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Tn.props = Le({}, Fu, ch);
const Mi = (t, e = []) => {
    Y(t) ? t.forEach((i) => i(...e)) : t && t(...e);
  },
  sl = (t) => (t ? (Y(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function hp(t) {
  const e = {};
  for (const R in t) R in ch || (e[R] = t[R]);
  if (t.css === !1) return e;
  const {
      name: i = "v",
      type: n,
      duration: s,
      enterFromClass: o = `${i}-enter-from`,
      enterActiveClass: r = `${i}-enter-active`,
      enterToClass: a = `${i}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = r,
      appearToClass: u = a,
      leaveFromClass: h = `${i}-leave-from`,
      leaveActiveClass: d = `${i}-leave-active`,
      leaveToClass: f = `${i}-leave-to`,
    } = t,
    g = dp(s),
    p = g && g[0],
    y = g && g[1],
    {
      onBeforeEnter: w,
      onEnter: x,
      onEnterCancelled: C,
      onLeave: v,
      onLeaveCancelled: k,
      onBeforeAppear: E = w,
      onAppear: U = x,
      onAppearCancelled: I = C,
    } = e,
    z = (R, ee, Q) => {
      (Ii(R, ee ? u : a), Ii(R, ee ? c : r), Q && Q());
    },
    q = (R, ee) => {
      ((R._isLeaving = !1), Ii(R, h), Ii(R, f), Ii(R, d), ee && ee());
    },
    W = (R) => (ee, Q) => {
      const be = R ? U : x,
        ie = () => z(ee, R, Q);
      (Mi(be, [ee, ie]),
        ol(() => {
          (Ii(ee, R ? l : o), ai(ee, R ? u : a), sl(be) || rl(ee, n, p, ie));
        }));
    };
  return Le(e, {
    onBeforeEnter(R) {
      (Mi(w, [R]), ai(R, o), ai(R, r));
    },
    onBeforeAppear(R) {
      (Mi(E, [R]), ai(R, l), ai(R, c));
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(R, ee) {
      R._isLeaving = !0;
      const Q = () => q(R, ee);
      (ai(R, h),
        ai(R, d),
        gp(),
        ol(() => {
          R._isLeaving && (Ii(R, h), ai(R, f), sl(v) || rl(R, n, y, Q));
        }),
        Mi(v, [R, Q]));
    },
    onEnterCancelled(R) {
      (z(R, !1), Mi(C, [R]));
    },
    onAppearCancelled(R) {
      (z(R, !0), Mi(I, [R]));
    },
    onLeaveCancelled(R) {
      (q(R), Mi(k, [R]));
    },
  });
}
function dp(t) {
  if (t == null) return null;
  if (Ce(t)) return [er(t.enter), er(t.leave)];
  {
    const e = er(t);
    return [e, e];
  }
}
function er(t) {
  return fd(t);
}
function ai(t, e) {
  (e.split(/\s+/).forEach((i) => i && t.classList.add(i)),
    (t[cs] || (t[cs] = new Set())).add(e));
}
function Ii(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n));
  const i = t[cs];
  i && (i.delete(e), i.size || (t[cs] = void 0));
}
function ol(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let fp = 0;
function rl(t, e, i, n) {
  const s = (t._endId = ++fp),
    o = () => {
      s === t._endId && n();
    };
  if (i) return setTimeout(o, i);
  const { type: r, timeout: a, propCount: l } = pp(t, e);
  if (!r) return n();
  const c = r + "end";
  let u = 0;
  const h = () => {
      (t.removeEventListener(c, d), o());
    },
    d = (f) => {
      f.target === t && ++u >= l && h();
    };
  (setTimeout(() => {
    u < l && h();
  }, a + 1),
    t.addEventListener(c, d));
}
function pp(t, e) {
  const i = window.getComputedStyle(t),
    n = (g) => (i[g] || "").split(", "),
    s = n(`${ri}Delay`),
    o = n(`${ri}Duration`),
    r = al(s, o),
    a = n(`${Dn}Delay`),
    l = n(`${Dn}Duration`),
    c = al(a, l);
  let u = null,
    h = 0,
    d = 0;
  e === ri
    ? r > 0 && ((u = ri), (h = r), (d = o.length))
    : e === Dn
      ? c > 0 && ((u = Dn), (h = c), (d = l.length))
      : ((h = Math.max(r, c)),
        (u = h > 0 ? (r > c ? ri : Dn) : null),
        (d = u ? (u === ri ? o.length : l.length) : 0));
  const f =
    u === ri && /\b(transform|all)(,|$)/.test(n(`${ri}Property`).toString());
  return { type: u, timeout: h, propCount: d, hasTransform: f };
}
function al(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((i, n) => ll(i) + ll(t[n])));
}
function ll(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function gp() {
  return document.body.offsetHeight;
}
function mp(t, e, i) {
  const n = t[cs];
  (n && (e = (e ? [e, ...n] : [...n]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : i
        ? t.setAttribute("class", e)
        : (t.className = e));
}
const cl = Symbol("_vod"),
  _p = Symbol("_vsh"),
  yp = Symbol(""),
  bp = /(^|;)\s*display\s*:/;
function wp(t, e, i) {
  const n = t.style,
    s = ze(i);
  let o = !1;
  if (i && !s) {
    if (e)
      if (ze(e))
        for (const r of e.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          i[a] == null && Js(n, a, "");
        }
      else for (const r in e) i[r] == null && Js(n, r, "");
    for (const r in i) (r === "display" && (o = !0), Js(n, r, i[r]));
  } else if (s) {
    if (e !== i) {
      const r = n[yp];
      (r && (i += ";" + r), (n.cssText = i), (o = bp.test(i)));
    }
  } else e && t.removeAttribute("style");
  cl in t && ((t[cl] = o ? n.display : ""), t[_p] && (n.display = "none"));
}
const ul = /\s*!important$/;
function Js(t, e, i) {
  if (Y(i)) i.forEach((n) => Js(t, e, n));
  else if ((i == null && (i = ""), e.startsWith("--"))) t.setProperty(e, i);
  else {
    const n = vp(t, e);
    ul.test(i)
      ? t.setProperty(Vn(n), i.replace(ul, ""), "important")
      : (t[n] = i);
  }
}
const hl = ["Webkit", "Moz", "ms"],
  tr = {};
function vp(t, e) {
  const i = tr[e];
  if (i) return i;
  let n = On(e);
  if (n !== "filter" && n in t) return (tr[e] = n);
  n = lu(n);
  for (let s = 0; s < hl.length; s++) {
    const o = hl[s] + n;
    if (o in t) return (tr[e] = o);
  }
  return e;
}
const dl = "http://www.w3.org/1999/xlink";
function xp(t, e, i, n, s) {
  if (n && e.startsWith("xlink:"))
    i == null
      ? t.removeAttributeNS(dl, e.slice(6, e.length))
      : t.setAttributeNS(dl, e, i);
  else {
    const o = bd(e);
    i == null || (o && !hu(i))
      ? t.removeAttribute(e)
      : t.setAttribute(e, o ? "" : i);
  }
}
function Sp(t, e, i, n, s, o, r) {
  if (e === "innerHTML" || e === "textContent") {
    (n && r(n, s, o), (t[e] = i ?? ""));
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && !a.includes("-")) {
    const c = a === "OPTION" ? t.getAttribute("value") || "" : t.value,
      u = i ?? "";
    ((c !== u || !("_value" in t)) && (t.value = u),
      i == null && t.removeAttribute(e),
      (t._value = i));
    return;
  }
  let l = !1;
  if (i === "" || i == null) {
    const c = typeof t[e];
    c === "boolean"
      ? (i = hu(i))
      : i == null && c === "string"
        ? ((i = ""), (l = !0))
        : c === "number" && ((i = 0), (l = !0));
  }
  try {
    t[e] = i;
  } catch {}
  l && t.removeAttribute(e);
}
function Pp(t, e, i, n) {
  t.addEventListener(e, i, n);
}
function Cp(t, e, i, n) {
  t.removeEventListener(e, i, n);
}
const fl = Symbol("_vei");
function Op(t, e, i, n, s = null) {
  const o = t[fl] || (t[fl] = {}),
    r = o[e];
  if (n && r) r.value = n;
  else {
    const [a, l] = Tp(e);
    if (n) {
      const c = (o[e] = kp(n, s));
      Pp(t, a, c, l);
    } else r && (Cp(t, a, r, l), (o[e] = void 0));
  }
}
const pl = /(?:Once|Passive|Capture)$/;
function Tp(t) {
  let e;
  if (pl.test(t)) {
    e = {};
    let n;
    for (; (n = t.match(pl)); )
      ((t = t.slice(0, t.length - n[0].length)), (e[n[0].toLowerCase()] = !0));
  }
  return [t[2] === ":" ? t.slice(3) : Vn(t.slice(2)), e];
}
let ir = 0;
const Ap = Promise.resolve(),
  Ep = () => ir || (Ap.then(() => (ir = 0)), (ir = Date.now()));
function kp(t, e) {
  const i = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= i.attached) return;
    Ot(Mp(n, i.value), e, 5, [n]);
  };
  return ((i.value = t), (i.attached = Ep()), i);
}
function Mp(t, e) {
  if (Y(e)) {
    const i = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        (i.call(t), (t._stopped = !0));
      }),
      e.map((n) => (s) => !s._stopped && n && n(s))
    );
  } else return e;
}
const gl = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Ip = (t, e, i, n, s, o, r, a, l) => {
    const c = s === "svg";
    e === "class"
      ? mp(t, n, c)
      : e === "style"
        ? wp(t, i, n)
        : vo(e)
          ? Xr(e) || Op(t, e, i, n, r)
          : (
                e[0] === "."
                  ? ((e = e.slice(1)), !0)
                  : e[0] === "^"
                    ? ((e = e.slice(1)), !1)
                    : Rp(t, e, n, c)
              )
            ? Sp(t, e, n, o, r, a, l)
            : (e === "true-value"
                ? (t._trueValue = n)
                : e === "false-value" && (t._falseValue = n),
              xp(t, e, n, c));
  };
function Rp(t, e, i, n) {
  if (n)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && gl(e) && te(i))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return gl(e) && ze(i) ? !1 : e in t;
}
const Vp = ["ctrl", "shift", "alt", "meta"],
  Lp = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => Vp.some((i) => t[`${i}Key`] && !e.includes(i)),
  },
  Ut = (t, e) => {
    const i = t._withMods || (t._withMods = {}),
      n = e.join(".");
    return (
      i[n] ||
      (i[n] = (s, ...o) => {
        for (let r = 0; r < e.length; r++) {
          const a = Lp[e[r]];
          if (a && a(s, e)) return;
        }
        return t(s, ...o);
      })
    );
  },
  zp = Le({ patchProp: Ip }, up);
let ml;
function Gp() {
  return ml || (ml = Bf(zp));
}
const $p = (...t) => {
  const e = Gp().createApp(...t),
    { mount: i } = e;
  return (
    (e.mount = (n) => {
      const s = Fp(n);
      if (!s) return;
      const o = e._component;
      (!te(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = ""));
      const r = i(s, !1, Dp(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        r
      );
    }),
    e
  );
};
function Dp(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Fp(t) {
  return ze(t) ? document.querySelector(t) : t;
}
const Ni = "generated",
  us = "pointerdown",
  Hp = "pointerup",
  zr = "pointerleave",
  Bp = "pointerout",
  Xi = "pointermove",
  hs = "touchstart",
  _l = "touchend",
  qp = "touchmove",
  Np = "touchcancel",
  Up = "resize",
  jp = "visibilitychange",
  Fe = "tsParticles - Error",
  ae = 100,
  Qt = 0.5,
  ye = 1e3;
var Be;
(function (t) {
  ((t.bottom = "bottom"),
    (t.bottomLeft = "bottom-left"),
    (t.bottomRight = "bottom-right"),
    (t.left = "left"),
    (t.none = "none"),
    (t.right = "right"),
    (t.top = "top"),
    (t.topLeft = "top-left"),
    (t.topRight = "top-right"),
    (t.outside = "outside"),
    (t.inside = "inside"));
})(Be || (Be = {}));
function uh(t) {
  return typeof t == "boolean";
}
function it(t) {
  return typeof t == "string";
}
function je(t) {
  return typeof t == "number";
}
function zo(t) {
  return typeof t == "function";
}
function _i(t) {
  return typeof t == "object" && t !== null;
}
function Ge(t) {
  return Array.isArray(t);
}
const Ht = { x: 0, y: 0, z: 0 },
  yl = 2,
  Wp = 1;
class pt {
  constructor(e, i, n) {
    if (
      ((this._updateFromAngle = (s, o) => {
        ((this.x = Math.cos(s) * o), (this.y = Math.sin(s) * o));
      }),
      !je(e) && e)
    ) {
      ((this.x = e.x), (this.y = e.y));
      const s = e;
      this.z = s.z ? s.z : Ht.z;
    } else if (e !== void 0 && i !== void 0)
      ((this.x = e), (this.y = i), (this.z = n ?? Ht.z));
    else throw new Error(`${Fe} Vector3d not initialized correctly`);
  }
  static get origin() {
    return pt.create(Ht.x, Ht.y, Ht.z);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(e) {
    this._updateFromAngle(e, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(e) {
    this._updateFromAngle(this.angle, e);
  }
  static clone(e) {
    return pt.create(e.x, e.y, e.z);
  }
  static create(e, i, n) {
    return new pt(e, i, n);
  }
  add(e) {
    return pt.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  addTo(e) {
    ((this.x += e.x), (this.y += e.y), (this.z += e.z));
  }
  copy() {
    return pt.clone(this);
  }
  distanceTo(e) {
    return this.sub(e).length;
  }
  distanceToSq(e) {
    return this.sub(e).getLengthSq();
  }
  div(e) {
    return pt.create(this.x / e, this.y / e, this.z / e);
  }
  divTo(e) {
    ((this.x /= e), (this.y /= e), (this.z /= e));
  }
  getLengthSq() {
    return this.x ** yl + this.y ** yl;
  }
  mult(e) {
    return pt.create(this.x * e, this.y * e, this.z * e);
  }
  multTo(e) {
    ((this.x *= e), (this.y *= e), (this.z *= e));
  }
  normalize() {
    const e = this.length;
    e != 0 && this.multTo(Wp / e);
  }
  rotate(e) {
    return pt.create(
      this.x * Math.cos(e) - this.y * Math.sin(e),
      this.x * Math.sin(e) + this.y * Math.cos(e),
      Ht.z,
    );
  }
  setTo(e) {
    ((this.x = e.x), (this.y = e.y));
    const i = e;
    this.z = i.z ? i.z : Ht.z;
  }
  sub(e) {
    return pt.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  subFrom(e) {
    ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z));
  }
}
class ne extends pt {
  constructor(e, i) {
    super(e, i, Ht.z);
  }
  static get origin() {
    return ne.create(Ht.x, Ht.y);
  }
  static clone(e) {
    return ne.create(e.x, e.y);
  }
  static create(e, i) {
    return new ne(e, i);
  }
}
let Qp = Math.random;
const Gr = new Map(),
  Kp = 2,
  Yp = Math.PI * Kp;
function ve(t, e) {
  Gr.get(t) || Gr.set(t, e);
}
function hh(t) {
  return Gr.get(t) ?? ((e) => e);
}
function D() {
  return at(Qp(), 0, 1 - Number.EPSILON);
}
function at(t, e, i) {
  return Math.min(Math.max(t, e), i);
}
function nr(t, e, i, n) {
  return Math.floor((t * i + e * n) / (i + n));
}
function ke(t) {
  const e = ot(t),
    i = 0;
  let n = An(t);
  return (e === n && (n = i), D() * (e - n) + n);
}
function S(t) {
  return je(t) ? t : ke(t);
}
function An(t) {
  return je(t) ? t : t.min;
}
function ot(t) {
  return je(t) ? t : t.max;
}
function H(t, e) {
  if (t === e || (e === void 0 && je(t))) return t;
  const i = An(t),
    n = ot(t);
  return e !== void 0 ? { min: Math.min(i, e), max: Math.max(n, e) } : H(i, n);
}
function Me(t, e) {
  const i = t.x - e.x,
    n = t.y - e.y,
    s = 2;
  return { dx: i, dy: n, distance: Math.sqrt(i ** s + n ** s) };
}
function Ne(t, e) {
  return Me(t, e).distance;
}
function It(t) {
  return (t * Math.PI) / 180;
}
function Zp(t, e, i) {
  if (je(t)) return It(t);
  const n = 0,
    s = 0.5,
    o = 0.25,
    r = s + o;
  switch (t) {
    case Be.top:
      return -Math.PI * s;
    case Be.topRight:
      return -Math.PI * o;
    case Be.right:
      return n;
    case Be.bottomRight:
      return Math.PI * o;
    case Be.bottom:
      return Math.PI * s;
    case Be.bottomLeft:
      return Math.PI * r;
    case Be.left:
      return Math.PI;
    case Be.topLeft:
      return -Math.PI * r;
    case Be.inside:
      return Math.atan2(i.y - e.y, i.x - e.x);
    case Be.outside:
      return Math.atan2(e.y - i.y, e.x - i.x);
    default:
      return D() * Yp;
  }
}
function Jp(t) {
  const e = ne.origin;
  return ((e.length = 1), (e.angle = t), e);
}
function bl(t, e, i, n) {
  return ne.create((t.x * (i - n)) / (i + n) + (e.x * 2 * n) / (i + n), t.y);
}
function dh(t) {
  var e, i;
  return {
    x:
      ((((e = t.position) == null ? void 0 : e.x) ?? D() * ae) * t.size.width) /
      ae,
    y:
      ((((i = t.position) == null ? void 0 : i.y) ?? D() * ae) *
        t.size.height) /
      ae,
  };
}
function fh(t) {
  var i, n;
  const e = {
    x:
      ((i = t.position) == null ? void 0 : i.x) !== void 0
        ? S(t.position.x)
        : void 0,
    y:
      ((n = t.position) == null ? void 0 : n.y) !== void 0
        ? S(t.position.y)
        : void 0,
  };
  return dh({ size: t.size, position: e });
}
function Xp(t) {
  var e, i;
  return {
    x: ((e = t.position) == null ? void 0 : e.x) ?? D() * t.size.width,
    y: ((i = t.position) == null ? void 0 : i.y) ?? D() * t.size.height,
  };
}
function ma(t) {
  return t ? (t.endsWith("%") ? parseFloat(t) / ae : parseFloat(t)) : 1;
}
var Ui;
(function (t) {
  ((t.auto = "auto"),
    (t.increase = "increase"),
    (t.decrease = "decrease"),
    (t.random = "random"));
})(Ui || (Ui = {}));
var me;
(function (t) {
  ((t.increasing = "increasing"), (t.decreasing = "decreasing"));
})(me || (me = {}));
var Kt;
(function (t) {
  ((t.none = "none"), (t.max = "max"), (t.min = "min"));
})(Kt || (Kt = {}));
var oe;
(function (t) {
  ((t.bottom = "bottom"),
    (t.left = "left"),
    (t.right = "right"),
    (t.top = "top"));
})(oe || (oe = {}));
var Vt;
(function (t) {
  ((t.precise = "precise"), (t.percent = "percent"));
})(Vt || (Vt = {}));
var Wt;
(function (t) {
  ((t.max = "max"), (t.min = "min"), (t.random = "random"));
})(Wt || (Wt = {}));
const eg = {
  debug: console.debug,
  error: console.error,
  info: console.info,
  log: console.log,
  verbose: console.log,
  warning: console.warn,
};
function xi() {
  return eg;
}
function wl(t) {
  const e = { bounced: !1 },
    {
      pSide: i,
      pOtherSide: n,
      rectSide: s,
      rectOtherSide: o,
      velocity: r,
      factor: a,
    } = t,
    l = 0.5,
    c = 0;
  return (
    n.min < o.min ||
      n.min > o.max ||
      n.max < o.min ||
      n.max > o.max ||
      (((i.max >= s.min && i.max <= (s.max + s.min) * l && r > c) ||
        (i.min <= s.max && i.min > (s.max + s.min) * l && r < c)) &&
        ((e.velocity = r * -a), (e.bounced = !0))),
    e
  );
}
function tg(t, e) {
  const i = Pe(e, (n) => t.matches(n));
  return Ge(i) ? i.some((n) => n) : i;
}
function en() {
  return (
    typeof window > "u" ||
    !window ||
    typeof window.document > "u" ||
    !window.document
  );
}
function ig() {
  return !en() && typeof matchMedia < "u";
}
function _a(t) {
  if (ig()) return matchMedia(t);
}
function ng(t) {
  if (!(en() || typeof IntersectionObserver > "u"))
    return new IntersectionObserver(t);
}
function sg(t) {
  if (!(en() || typeof MutationObserver > "u")) return new MutationObserver(t);
}
function ge(t, e) {
  return t === e || (Ge(e) && e.indexOf(t) > -1);
}
async function $r(t, e) {
  try {
    await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
  } catch {}
}
function ph(t) {
  return Math.floor(D() * t.length);
}
function Yt(t, e, i = !0) {
  return t[e !== void 0 && i ? e % t.length : ph(t)];
}
function ps(t, e, i, n, s) {
  return og(gs(t, n ?? 0), e, i, s);
}
function og(t, e, i, n) {
  let s = !0;
  return (
    (!n || n === oe.bottom) && (s = t.top < e.height + i.x),
    s && (!n || n === oe.left) && (s = t.right > i.x),
    s && (!n || n === oe.right) && (s = t.left < e.width + i.y),
    s && (!n || n === oe.top) && (s = t.bottom > i.y),
    s
  );
}
function gs(t, e) {
  return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
}
function fe(t, ...e) {
  for (const i of e) {
    if (i == null) continue;
    if (!_i(i)) {
      t = i;
      continue;
    }
    const n = Array.isArray(i);
    n && (_i(t) || !t || !Array.isArray(t))
      ? (t = [])
      : !n && (_i(t) || !t || Array.isArray(t)) && (t = {});
    for (const s in i) {
      if (s === "__proto__") continue;
      const o = i,
        r = o[s],
        a = t;
      a[s] =
        _i(r) && Array.isArray(r) ? r.map((l) => fe(a[s], l)) : fe(a[s], r);
    }
  }
  return t;
}
function ya(t, e) {
  return !!_h(e, (i) => i.enable && ge(t, i.mode));
}
function ba(t, e, i) {
  Pe(e, (n) => {
    const s = n.mode;
    n.enable && ge(t, s) && rg(n, i);
  });
}
function rg(t, e) {
  const i = t.selectors;
  Pe(i, (n) => {
    e(n, t);
  });
}
function gh(t, e) {
  if (!(!e || !t)) return _h(t, (i) => tg(e, i.selectors));
}
function Dr(t) {
  return {
    position: t.getPosition(),
    radius: t.getRadius(),
    mass: t.getMass(),
    velocity: t.velocity,
    factor: ne.create(
      S(t.options.bounce.horizontal.value),
      S(t.options.bounce.vertical.value),
    ),
  };
}
function mh(t, e) {
  const { x: i, y: n } = t.velocity.sub(e.velocity),
    [s, o] = [t.position, e.position],
    { dx: r, dy: a } = Me(o, s);
  if (i * r + n * a < 0) return;
  const c = -Math.atan2(a, r),
    u = t.mass,
    h = e.mass,
    d = t.velocity.rotate(c),
    f = e.velocity.rotate(c),
    g = bl(d, f, u, h),
    p = bl(f, d, u, h),
    y = g.rotate(-c),
    w = p.rotate(-c);
  ((t.velocity.x = y.x * t.factor.x),
    (t.velocity.y = y.y * t.factor.y),
    (e.velocity.x = w.x * e.factor.x),
    (e.velocity.y = w.y * e.factor.y));
}
function ag(t, e) {
  const i = t.getPosition(),
    n = t.getRadius(),
    s = gs(i, n),
    o = t.options.bounce,
    r = wl({
      pSide: { min: s.left, max: s.right },
      pOtherSide: { min: s.top, max: s.bottom },
      rectSide: { min: e.left, max: e.right },
      rectOtherSide: { min: e.top, max: e.bottom },
      velocity: t.velocity.x,
      factor: S(o.horizontal.value),
    });
  r.bounced &&
    (r.velocity !== void 0 && (t.velocity.x = r.velocity),
    r.position !== void 0 && (t.position.x = r.position));
  const a = wl({
    pSide: { min: s.top, max: s.bottom },
    pOtherSide: { min: s.left, max: s.right },
    rectSide: { min: e.top, max: e.bottom },
    rectOtherSide: { min: e.left, max: e.right },
    velocity: t.velocity.y,
    factor: S(o.vertical.value),
  });
  a.bounced &&
    (a.velocity !== void 0 && (t.velocity.y = a.velocity),
    a.position !== void 0 && (t.position.y = a.position));
}
function Pe(t, e) {
  return Ge(t) ? t.map((n, s) => e(n, s)) : e(t, 0);
}
function Re(t, e, i) {
  return Ge(t) ? Yt(t, e, i) : t;
}
function _h(t, e) {
  return Ge(t) ? t.find((n, s) => e(n, s)) : e(t, 0) ? t : void 0;
}
function yh(t, e) {
  const i = t.value,
    n = t.animation,
    s = {
      delayTime: S(n.delay) * ye,
      enable: n.enable,
      value: S(t.value) * e,
      max: ot(i) * e,
      min: An(i) * e,
      loops: 0,
      maxLoops: S(n.count),
      time: 0,
    },
    o = 1;
  if (n.enable) {
    switch (((s.decay = o - S(n.decay)), n.mode)) {
      case Ui.increase:
        s.status = me.increasing;
        break;
      case Ui.decrease:
        s.status = me.decreasing;
        break;
      case Ui.random:
        s.status = D() >= Qt ? me.increasing : me.decreasing;
        break;
    }
    const r = n.mode === Ui.auto;
    switch (n.startValue) {
      case Wt.min:
        ((s.value = s.min), r && (s.status = me.increasing));
        break;
      case Wt.max:
        ((s.value = s.max), r && (s.status = me.decreasing));
        break;
      case Wt.random:
      default:
        ((s.value = ke(s)),
          r && (s.status = D() >= Qt ? me.increasing : me.decreasing));
        break;
    }
  }
  return ((s.initialValue = s.value), s);
}
function bh(t, e) {
  if (!(t.mode === Vt.percent)) {
    const { mode: s, ...o } = t;
    return o;
  }
  return "x" in t
    ? { x: (t.x / ae) * e.width, y: (t.y / ae) * e.height }
    : { width: (t.width / ae) * e.width, height: (t.height / ae) * e.height };
}
function wa(t, e) {
  return bh(t, e);
}
function vl(t, e) {
  return bh(t, e);
}
function lg(t, e, i, n, s) {
  switch (e) {
    case Kt.max:
      i >= s && t.destroy();
      break;
    case Kt.min:
      i <= n && t.destroy();
      break;
  }
}
function En(t, e, i, n, s) {
  if (
    t.destroyed ||
    !e ||
    !e.enable ||
    ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
  )
    return;
  const u = (e.velocity ?? 0) * s.factor,
    h = e.min,
    d = e.max,
    f = e.decay ?? 1;
  if (
    (e.time || (e.time = 0),
    (e.delayTime ?? 0) > 0 &&
      e.time < (e.delayTime ?? 0) &&
      (e.time += s.value),
    !((e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0)))
  ) {
    switch (e.status) {
      case me.increasing:
        e.value >= d
          ? (i ? (e.status = me.decreasing) : (e.value -= d),
            e.loops || (e.loops = 0),
            e.loops++)
          : (e.value += u);
        break;
      case me.decreasing:
        e.value <= h
          ? (i ? (e.status = me.increasing) : (e.value += d),
            e.loops || (e.loops = 0),
            e.loops++)
          : (e.value -= u);
    }
    (e.velocity && f !== 1 && (e.velocity *= f),
      lg(t, n, e.value, h, d),
      t.destroyed || (e.value = at(e.value, h, d)));
  }
}
var fi;
(function (t) {
  ((t.darken = "darken"), (t.enlighten = "enlighten"));
})(fi || (fi = {}));
var Bi;
(function (t) {
  ((t[(t.r = 1)] = "r"),
    (t[(t.g = 2)] = "g"),
    (t[(t.b = 3)] = "b"),
    (t[(t.a = 4)] = "a"));
})(Bi || (Bi = {}));
const ao = "random",
  Xs = "mid",
  Go = new Map();
function Fr(t) {
  Go.set(t.key, t);
}
function wh(t) {
  for (const [, l] of Go)
    if (t.startsWith(l.stringPrefix)) return l.parseString(t);
  const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
    i = t.replace(
      e,
      (l, c, u, h, d) => c + c + u + u + h + h + (d !== void 0 ? d + d : ""),
    ),
    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    s = n.exec(i),
    o = 16;
  return s
    ? {
        a: s[Bi.a] !== void 0 ? parseInt(s[Bi.a], o) / 255 : 1,
        b: parseInt(s[Bi.b], o),
        g: parseInt(s[Bi.g], o),
        r: parseInt(s[Bi.r], o),
      }
    : void 0;
}
function Ue(t, e, i = !0) {
  if (!t) return;
  const n = it(t) ? { value: t } : t;
  if (it(n.value)) return vh(n.value, e, i);
  if (Ge(n.value)) return Ue({ value: Yt(n.value, e, i) });
  for (const [, s] of Go) {
    const o = s.handleRangeColor(n);
    if (o) return o;
  }
}
function vh(t, e, i = !0) {
  if (!t) return;
  const n = it(t) ? { value: t } : t;
  if (it(n.value)) return n.value === ao ? Sh() : ug(n.value);
  if (Ge(n.value)) return vh({ value: Yt(n.value, e, i) });
  for (const [, s] of Go) {
    const o = s.handleColor(n);
    if (o) return o;
  }
}
function Zt(t, e, i = !0) {
  const n = Ue(t, e, i);
  return n ? xh(n) : void 0;
}
function xh(t) {
  const u = t.r / 255,
    h = t.g / 255,
    d = t.b / 255,
    f = Math.max(u, h, d),
    g = Math.min(u, h, d),
    p = { h: 0, l: (f + g) * 0.5, s: 0 };
  return (
    f !== g &&
      ((p.s = p.l < 0.5 ? (f - g) / (f + g) : (f - g) / (2 - f - g)),
      (p.h =
        u === f
          ? (h - d) / (f - g)
          : (p.h =
              h === f ? 2 + (d - u) / (f - g) : 2 * 2 + (u - h) / (f - g)))),
    (p.l *= 100),
    (p.s *= 100),
    (p.h *= 60),
    p.h < 0 && (p.h += 360),
    p.h >= 360 && (p.h -= 360),
    p
  );
}
function cg(t) {
  var e;
  return (e = wh(t)) == null ? void 0 : e.a;
}
function ug(t) {
  return wh(t);
}
function kn(t) {
  const r = ((t.h % 360) + 360) % 360,
    a = Math.max(0, Math.min(100, t.s)),
    l = Math.max(0, Math.min(100, t.l)),
    c = r / 360,
    u = a / 100,
    h = l / 100,
    d = 255,
    f = 3;
  if (a === 0) {
    const z = Math.round(h * d);
    return { r: z, g: z, b: z };
  }
  const g = 0.5,
    p = 2,
    y = (z, q, W) => {
      if ((W < 0 && W++, W > 1 && W--, W * 6 < 1)) return z + (q - z) * 6 * W;
      if (W * p < 1) return q;
      if (W * f < 1 * p) {
        const be = p / f;
        return z + (q - z) * (be - W) * 6;
      }
      return z;
    },
    w = 1,
    x = h < g ? h * (w + u) : h + u - h * u,
    C = p * h - x,
    v = 1,
    k = v / f,
    E = Math.min(d, d * y(C, x, c + k)),
    U = Math.min(d, d * y(C, x, c)),
    I = Math.min(d, d * y(C, x, c - k));
  return { r: Math.round(E), g: Math.round(U), b: Math.round(I) };
}
function hg(t) {
  const e = kn(t);
  return { a: t.a, b: e.b, g: e.g, r: e.r };
}
function Sh(t) {
  return {
    b: Math.floor(ke(H(0, 256))),
    g: Math.floor(ke(H(0, 256))),
    r: Math.floor(ke(H(0, 256))),
  };
}
function tt(t, e) {
  return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
}
function Si(t, e) {
  return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
}
function va(t, e, i, n) {
  let s = t,
    o = e;
  return (
    s.r === void 0 && (s = kn(t)),
    o.r === void 0 && (o = kn(e)),
    { b: nr(s.b, o.b, i, n), g: nr(s.g, o.g, i, n), r: nr(s.r, o.r, i, n) }
  );
}
function Hr(t, e, i) {
  if (i === ao) return Sh();
  if (i === Xs) {
    const n = t.getFillColor() ?? t.getStrokeColor(),
      s =
        (e == null ? void 0 : e.getFillColor()) ??
        (e == null ? void 0 : e.getStrokeColor());
    if (n && s && e) return va(n, s, t.getRadius(), e.getRadius());
    {
      const o = n ?? s;
      if (o) return kn(o);
    }
  } else return i;
}
function Ph(t, e, i) {
  const n = it(t) ? t : t.value;
  return n === ao
    ? i
      ? Ue({ value: n })
      : e
        ? ao
        : Xs
    : n === Xs
      ? Xs
      : Ue({ value: n });
}
function xl(t) {
  return t !== void 0 ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
}
function xa(t, e, i) {
  const n = {
    h: { enable: !1, value: t.h },
    s: { enable: !1, value: t.s },
    l: { enable: !1, value: t.l },
  };
  return (e && (sr(n.h, e.h, i), sr(n.s, e.s, i), sr(n.l, e.l, i)), n);
}
function sr(t, e, i) {
  t.enable = e.enable;
  const n = 0,
    s = 1,
    o = 0,
    r = 0;
  t.enable
    ? ((t.velocity = (S(e.speed) / ae) * i),
      (t.decay = s - S(e.decay)),
      (t.status = me.increasing),
      (t.loops = o),
      (t.maxLoops = S(e.count)),
      (t.time = r),
      (t.delayTime = S(e.delay) * ye),
      e.sync || ((t.velocity *= D()), (t.value *= D())),
      (t.initialValue = t.value),
      (t.offset = H(e.offset)))
    : (t.velocity = n);
}
function or(t, e, i, n) {
  if (
    !t ||
    !t.enable ||
    ((t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0)) ||
    (t.time || (t.time = 0),
    (t.delayTime ?? 0) > 0 &&
      t.time < (t.delayTime ?? 0) &&
      (t.time += n.value),
    (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0))
  )
    return;
  const u = t.offset ? ke(t.offset) : 0,
    h = (t.velocity ?? 0) * n.factor + u * 3.6,
    d = t.decay ?? 1,
    f = ot(e),
    g = An(e);
  (!i || t.status === me.increasing
    ? ((t.value += h),
      t.value > f &&
        (t.loops || (t.loops = 0),
        t.loops++,
        i ? (t.status = me.decreasing) : (t.value -= f)))
    : ((t.value -= h),
      t.value < 0 &&
        (t.loops || (t.loops = 0), t.loops++, (t.status = me.increasing))),
    t.velocity && d !== 1 && (t.velocity *= d),
    (t.value = at(t.value, g, f)));
}
function Sa(t, e) {
  if (!t) return;
  const { h: i, s: n, l: s } = t,
    o = {
      h: { min: 0, max: 360 },
      s: { min: 0, max: 100 },
      l: { min: 0, max: 100 },
    };
  (i && or(i, o.h, !1, e), n && or(n, o.s, !0, e), s && or(s, o.l, !0, e));
}
const Mn = { x: 0, y: 0 },
  Os = { a: 1, b: 0, c: 0, d: 1 };
function ts(t, e, i) {
  (t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath());
}
function dg(t, e, i) {
  ((t.fillStyle = i ?? "rgba(0,0,0,0)"),
    t.fillRect(Mn.x, Mn.y, e.width, e.height));
}
function fg(t, e, i, n) {
  i &&
    ((t.globalAlpha = n),
    t.drawImage(i, Mn.x, Mn.y, e.width, e.height),
    (t.globalAlpha = 1));
}
function rr(t, e) {
  t.clearRect(Mn.x, Mn.y, e.width, e.height);
}
function pg(t) {
  const {
      container: e,
      context: i,
      particle: n,
      delta: s,
      colorStyles: o,
      backgroundMask: r,
      composite: a,
      radius: l,
      opacity: c,
      shadow: u,
      transform: h,
    } = t,
    d = n.getPosition(),
    f = 0,
    g = n.rotation + (n.pathRotation ? n.velocity.angle : f),
    p = { sin: Math.sin(g), cos: Math.cos(g) },
    y = !!g,
    w = 1,
    x = {
      a: p.cos * (h.a ?? Os.a),
      b: y ? p.sin * (h.b ?? w) : (h.b ?? Os.b),
      c: y ? -p.sin * (h.c ?? w) : (h.c ?? Os.c),
      d: p.cos * (h.d ?? Os.d),
    };
  (i.setTransform(x.a, x.b, x.c, x.d, d.x, d.y),
    r && (i.globalCompositeOperation = a));
  const C = n.shadowColor;
  (u.enable &&
    C &&
    ((i.shadowBlur = u.blur),
    (i.shadowColor = tt(C)),
    (i.shadowOffsetX = u.offset.x),
    (i.shadowOffsetY = u.offset.y)),
    o.fill && (i.fillStyle = o.fill));
  const v = 0,
    k = n.strokeWidth ?? v;
  ((i.lineWidth = k), o.stroke && (i.strokeStyle = o.stroke));
  const E = {
    container: e,
    context: i,
    particle: n,
    radius: l,
    opacity: c,
    delta: s,
    transformData: x,
    strokeWidth: k,
  };
  (mg(E),
    _g(E),
    gg(E),
    (i.globalCompositeOperation = "source-over"),
    i.resetTransform());
}
function gg(t) {
  const {
    container: e,
    context: i,
    particle: n,
    radius: s,
    opacity: o,
    delta: r,
    transformData: a,
  } = t;
  if (!n.effect) return;
  const l = e.effectDrawers.get(n.effect);
  l &&
    l.draw({
      context: i,
      particle: n,
      radius: s,
      opacity: o,
      delta: r,
      pixelRatio: e.retina.pixelRatio,
      transformData: { ...a },
    });
}
function mg(t) {
  const {
      container: e,
      context: i,
      particle: n,
      radius: s,
      opacity: o,
      delta: r,
      strokeWidth: a,
      transformData: l,
    } = t,
    c = 0;
  if (!n.shape) return;
  const u = e.shapeDrawers.get(n.shape);
  u &&
    (i.beginPath(),
    u.draw({
      context: i,
      particle: n,
      radius: s,
      opacity: o,
      delta: r,
      pixelRatio: e.retina.pixelRatio,
      transformData: { ...l },
    }),
    n.shapeClose && i.closePath(),
    a > c && i.stroke(),
    n.shapeFill && i.fill());
}
function _g(t) {
  const {
    container: e,
    context: i,
    particle: n,
    radius: s,
    opacity: o,
    delta: r,
    transformData: a,
  } = t;
  if (!n.shape) return;
  const l = e.shapeDrawers.get(n.shape);
  l != null &&
    l.afterDraw &&
    l.afterDraw({
      context: i,
      particle: n,
      radius: s,
      opacity: o,
      delta: r,
      pixelRatio: e.retina.pixelRatio,
      transformData: { ...a },
    });
}
function yg(t, e, i) {
  e.draw && e.draw(t, i);
}
function bg(t, e, i, n) {
  e.drawParticle && e.drawParticle(t, i, n);
}
function wg(t, e, i) {
  return { h: t.h, s: t.s, l: t.l + (e === fi.darken ? -1 : 1) * i };
}
function vg(t, e, i) {
  const n = e[i],
    s = 1;
  n !== void 0 && (t[i] = (t[i] ?? s) * n);
}
function Sl(t, e, i = !1) {
  if (!e) return;
  const n = t;
  if (!n) return;
  const s = n.style;
  if (s)
    for (const o in e) {
      const r = e[o];
      r && s.setProperty(o, r, i ? "important" : "");
    }
}
class xg {
  constructor(e) {
    ((this.container = e),
      (this._applyPostDrawUpdaters = (i) => {
        var n;
        for (const s of this._postDrawUpdaters)
          (n = s.afterDraw) == null || n.call(s, i);
      }),
      (this._applyPreDrawUpdaters = (i, n, s, o, r, a) => {
        var l;
        for (const c of this._preDrawUpdaters) {
          if (c.getColorStyles) {
            const { fill: u, stroke: h } = c.getColorStyles(n, i, s, o);
            (u && (r.fill = u), h && (r.stroke = h));
          }
          if (c.getTransformValues) {
            const u = c.getTransformValues(n);
            for (const h in u) vg(a, u, h);
          }
          (l = c.beforeDraw) == null || l.call(c, n);
        }
      }),
      (this._applyResizePlugins = () => {
        var i;
        for (const n of this._resizePlugins)
          (i = n.resize) == null || i.call(n);
      }),
      (this._getPluginParticleColors = (i) => {
        let n, s;
        for (const o of this._colorPlugins)
          if (
            (!n && o.particleFillColor && (n = Zt(o.particleFillColor(i))),
            !s && o.particleStrokeColor && (s = Zt(o.particleStrokeColor(i))),
            n && s)
          )
            break;
        return [n, s];
      }),
      (this._initCover = async () => {
        const i = this.container.actualOptions,
          n = i.backgroundMask.cover,
          s = n.color;
        if (s) {
          const o = Ue(s);
          if (o) {
            const r = { ...o, a: n.opacity };
            this._coverColorStyle = tt(r, r.a);
          }
        } else
          await new Promise((o, r) => {
            if (!n.image) return;
            const a = document.createElement("img");
            (a.addEventListener("load", () => {
              ((this._coverImage = { image: a, opacity: n.opacity }), o());
            }),
              a.addEventListener("error", (l) => {
                r(l.error);
              }),
              (a.src = n.image));
          });
      }),
      (this._initStyle = () => {
        const i = this.element,
          n = this.container.actualOptions;
        if (i) {
          this._fullScreen
            ? ((this._originalStyle = fe({}, i.style)),
              this._setFullScreenStyle())
            : this._resetOriginalStyle();
          for (const s in n.style) {
            if (!s || !n.style) continue;
            const o = n.style[s];
            o && i.style.setProperty(s, o, "important");
          }
        }
      }),
      (this._initTrail = async () => {
        const i = this.container.actualOptions,
          n = i.particles.move.trail,
          s = n.fill;
        if (!n.enable) return;
        const o = 1,
          r = o / n.length;
        if (s.color) {
          const a = Ue(s.color);
          if (!a) return;
          this._trailFill = { color: { ...a }, opacity: r };
        } else
          await new Promise((a, l) => {
            if (!s.image) return;
            const c = document.createElement("img");
            (c.addEventListener("load", () => {
              ((this._trailFill = { image: c, opacity: r }), a());
            }),
              c.addEventListener("error", (u) => {
                l(u.error);
              }),
              (c.src = s.image));
          });
      }),
      (this._paintBase = (i) => {
        this.draw((n) => dg(n, this.size, i));
      }),
      (this._paintImage = (i, n) => {
        this.draw((s) => fg(s, this.size, i, n));
      }),
      (this._repairStyle = () => {
        const i = this.element;
        i &&
          (this._safeMutationObserver((n) => n.disconnect()),
          this._initStyle(),
          this.initBackground(),
          this._safeMutationObserver((n) => {
            !i || !(i instanceof Node) || n.observe(i, { attributes: !0 });
          }));
      }),
      (this._resetOriginalStyle = () => {
        const i = this.element,
          n = this._originalStyle;
        i && n && Sl(i, n);
      }),
      (this._safeMutationObserver = (i) => {
        this._mutationObserver && i(this._mutationObserver);
      }),
      (this._setFullScreenStyle = () => {
        const i = this.element;
        if (!i) return;
        Sl(
          i,
          {
            position: "fixed",
            zIndex: this.container.actualOptions.fullScreen.zIndex.toString(10),
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          },
          !0,
        );
      }),
      (this.size = { height: 0, width: 0 }),
      (this._context = null),
      (this._generated = !1),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []));
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const e = this.container.actualOptions,
      i = e.particles.move.trail,
      n = this._trailFill;
    e.backgroundMask.enable
      ? this.paint()
      : i.enable && i.length > 0 && n
        ? n.color
          ? this._paintBase(tt(n.color, n.opacity))
          : n.image && this._paintImage(n.image, n.opacity)
        : e.clear &&
          this.draw((o) => {
            rr(o, this.size);
          });
  }
  destroy() {
    if ((this.stop(), this._generated)) {
      const e = this.element;
      e == null || e.remove();
    } else this._resetOriginalStyle();
    ((this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []));
  }
  draw(e) {
    const i = this._context;
    if (i) return e(i);
  }
  drawAsync(e) {
    const i = this._context;
    if (i) return e(i);
  }
  drawParticle(e, i) {
    if (e.spawning || e.destroyed) return;
    const n = e.getRadius();
    if (n <= 0) return;
    const o = e.getFillColor(),
      r = e.getStrokeColor() ?? o;
    let [a, l] = this._getPluginParticleColors(e);
    (a || (a = o),
      l || (l = r),
      !(!a && !l) &&
        this.draw((c) => {
          var U;
          const u = this.container,
            h = u.actualOptions,
            d = e.options.zIndex,
            f = 1,
            g = f - e.zIndexFactor,
            p = g ** d.opacityRate,
            y = 1,
            w =
              e.bubble.opacity ??
              ((U = e.opacity) == null ? void 0 : U.value) ??
              y,
            x = e.strokeOpacity ?? w,
            C = w * p,
            v = x * p,
            k = {},
            E = { fill: a ? Si(a, C) : void 0 };
          ((E.stroke = l ? Si(l, v) : E.fill),
            this._applyPreDrawUpdaters(c, e, n, C, E, k),
            pg({
              container: u,
              context: c,
              particle: e,
              delta: i,
              colorStyles: E,
              backgroundMask: h.backgroundMask.enable,
              composite: h.backgroundMask.composite,
              radius: n * g ** d.sizeRate,
              opacity: C,
              shadow: e.options.shadow,
              transform: k,
            }),
            this._applyPostDrawUpdaters(e));
        }));
  }
  drawParticlePlugin(e, i, n) {
    this.draw((s) => bg(s, e, i, n));
  }
  drawPlugin(e, i) {
    this.draw((n) => yg(n, e, i));
  }
  async init() {
    (this._safeMutationObserver((e) => e.disconnect()),
      (this._mutationObserver = sg((e) => {
        for (const i of e)
          i.type === "attributes" &&
            i.attributeName === "style" &&
            this._repairStyle();
      })),
      this.resize(),
      this._initStyle(),
      await this._initCover());
    try {
      await this._initTrail();
    } catch (e) {
      xi().error(e);
    }
    (this.initBackground(),
      this._safeMutationObserver((e) => {
        !this.element ||
          !(this.element instanceof Node) ||
          e.observe(this.element, { attributes: !0 });
      }),
      this.initUpdaters(),
      this.initPlugins(),
      this.paint());
  }
  initBackground() {
    const e = this.container.actualOptions,
      i = e.background,
      n = this.element;
    if (!n) return;
    const s = n.style;
    if (s) {
      if (i.color) {
        const o = Ue(i.color);
        s.backgroundColor = o ? tt(o, i.opacity) : "";
      } else s.backgroundColor = "";
      ((s.backgroundImage = i.image || ""),
        (s.backgroundPosition = i.position || ""),
        (s.backgroundRepeat = i.repeat || ""),
        (s.backgroundSize = i.size || ""));
    }
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, e] of this.container.plugins)
      (e.resize && this._resizePlugins.push(e),
        (e.particleFillColor ?? e.particleStrokeColor) &&
          this._colorPlugins.push(e));
  }
  initUpdaters() {
    ((this._preDrawUpdaters = []), (this._postDrawUpdaters = []));
    for (const e of this.container.particles.updaters)
      (e.afterDraw && this._postDrawUpdaters.push(e),
        (e.getColorStyles ?? e.getTransformValues ?? e.beforeDraw) &&
          this._preDrawUpdaters.push(e));
  }
  loadCanvas(e) {
    (this._generated && this.element && this.element.remove(),
      (this._generated =
        e.dataset && Ni in e.dataset
          ? e.dataset[Ni] === "true"
          : this._generated),
      (this.element = e),
      (this.element.ariaHidden = "true"),
      (this._originalStyle = fe({}, this.element.style)),
      (this.size.height = e.offsetHeight),
      (this.size.width = e.offsetWidth),
      (this._context = this.element.getContext("2d")),
      this._safeMutationObserver((i) => {
        !this.element ||
          !(this.element instanceof Node) ||
          i.observe(this.element, { attributes: !0 });
      }),
      this.container.retina.init(),
      this.initBackground());
  }
  paint() {
    const e = this.container.actualOptions;
    this.draw((i) => {
      e.backgroundMask.enable && e.backgroundMask.cover
        ? (rr(i, this.size),
          this._coverImage
            ? this._paintImage(this._coverImage.image, this._coverImage.opacity)
            : this._coverColorStyle
              ? this._paintBase(this._coverColorStyle)
              : this._paintBase())
        : this._paintBase();
    });
  }
  resize() {
    if (!this.element) return !1;
    const e = this.container,
      i = e.retina.pixelRatio,
      n = e.canvas.size,
      s = {
        width: this.element.offsetWidth * i,
        height: this.element.offsetHeight * i,
      };
    if (
      s.height === n.height &&
      s.width === n.width &&
      s.height === this.element.height &&
      s.width === this.element.width
    )
      return !1;
    const o = { ...n };
    return (
      (this.element.width = n.width = this.element.offsetWidth * i),
      (this.element.height = n.height = this.element.offsetHeight * i),
      this.container.started &&
        e.particles.setResizeFactor({
          width: n.width / o.width,
          height: n.height / o.height,
        }),
      !0
    );
  }
  stop() {
    (this._safeMutationObserver((e) => e.disconnect()),
      (this._mutationObserver = void 0),
      this.draw((e) => rr(e, this.size)));
  }
  async windowResize() {
    if (!this.element || !this.resize()) return;
    const e = this.container,
      i = e.updateActualOptions();
    (e.particles.setDensity(),
      this._applyResizePlugins(),
      i && (await e.refresh()));
  }
}
var xn;
(function (t) {
  ((t.canvas = "canvas"), (t.parent = "parent"), (t.window = "window"));
})(xn || (xn = {}));
const Pl = 2;
function wt(t, e, i, n, s) {
  if (n) {
    let o = { passive: !0 };
    (uh(s) ? (o.capture = s) : s !== void 0 && (o = s),
      t.addEventListener(e, i, o));
  } else {
    const o = s;
    t.removeEventListener(e, i, o);
  }
}
class Sg {
  constructor(e) {
    ((this.container = e),
      (this._doMouseTouchClick = (i) => {
        const n = this.container,
          s = n.actualOptions;
        if (this._canPush) {
          const o = n.interactivity.mouse,
            r = o.position;
          if (!r) return;
          ((o.clickPosition = { ...r }), (o.clickTime = new Date().getTime()));
          const a = s.interactivity.events.onClick;
          Pe(a.mode, (l) => this.container.handleClickMode(l));
        }
        i.type === "touchend" &&
          setTimeout(() => this._mouseTouchFinish(), 500);
      }),
      (this._handleThemeChange = (i) => {
        const n = i,
          s = this.container,
          o = s.options,
          r = o.defaultThemes,
          a = n.matches ? r.dark : r.light,
          l = o.themes.find((c) => c.name === a);
        l != null && l.default.auto && s.loadTheme(a);
      }),
      (this._handleVisibilityChange = () => {
        const i = this.container,
          n = i.actualOptions;
        (this._mouseTouchFinish(),
          n.pauseOnBlur &&
            (document != null && document.hidden
              ? ((i.pageHidden = !0), i.pause())
              : ((i.pageHidden = !1),
                i.animationStatus ? i.play(!0) : i.draw(!0))));
      }),
      (this._handleWindowResize = () => {
        this._resizeTimeout &&
          (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
        const i = async () => {
          const n = this.container.canvas;
          await (n == null ? void 0 : n.windowResize());
        };
        this._resizeTimeout = setTimeout(
          () => void i(),
          this.container.actualOptions.interactivity.events.resize.delay * ye,
        );
      }),
      (this._manageInteractivityListeners = (i, n) => {
        const s = this._handlers,
          o = this.container,
          r = o.actualOptions,
          a = o.interactivity.element;
        if (!a) return;
        const l = a,
          c = o.canvas.element;
        (c && (c.style.pointerEvents = l === c ? "initial" : "none"),
          (r.interactivity.events.onHover.enable ||
            r.interactivity.events.onClick.enable) &&
            (wt(a, Xi, s.mouseMove, n),
            wt(a, hs, s.touchStart, n),
            wt(a, qp, s.touchMove, n),
            r.interactivity.events.onClick.enable
              ? (wt(a, _l, s.touchEndClick, n),
                wt(a, Hp, s.mouseUp, n),
                wt(a, us, s.mouseDown, n))
              : wt(a, _l, s.touchEnd, n),
            wt(a, i, s.mouseLeave, n),
            wt(a, Np, s.touchCancel, n)));
      }),
      (this._manageListeners = (i) => {
        const n = this._handlers,
          s = this.container,
          o = s.actualOptions,
          r = o.interactivity.detectsOn,
          a = s.canvas.element;
        let l = zr;
        (r === xn.window
          ? ((s.interactivity.element = window), (l = Bp))
          : r === xn.parent && a
            ? (s.interactivity.element = a.parentElement ?? a.parentNode)
            : (s.interactivity.element = a),
          this._manageMediaMatch(i),
          this._manageResize(i),
          this._manageInteractivityListeners(l, i),
          document && wt(document, jp, n.visibilityChange, i, !1));
      }),
      (this._manageMediaMatch = (i) => {
        const n = this._handlers,
          s = _a("(prefers-color-scheme: dark)");
        if (s) {
          if (s.addEventListener !== void 0) {
            wt(s, "change", n.themeChange, i);
            return;
          }
          s.addListener !== void 0 &&
            (i
              ? s.addListener(n.oldThemeChange)
              : s.removeListener(n.oldThemeChange));
        }
      }),
      (this._manageResize = (i) => {
        const n = this._handlers,
          s = this.container;
        if (!s.actualOptions.interactivity.events.resize) return;
        if (typeof ResizeObserver > "u") {
          wt(window, Up, n.resize, i);
          return;
        }
        const r = s.canvas.element;
        this._resizeObserver && !i
          ? (r && this._resizeObserver.unobserve(r),
            this._resizeObserver.disconnect(),
            delete this._resizeObserver)
          : !this._resizeObserver &&
            i &&
            r &&
            ((this._resizeObserver = new ResizeObserver((a) => {
              a.find((c) => c.target === r) && this._handleWindowResize();
            })),
            this._resizeObserver.observe(r));
      }),
      (this._mouseDown = () => {
        const { interactivity: i } = this.container;
        if (!i) return;
        const { mouse: n } = i;
        ((n.clicking = !0), (n.downPosition = n.position));
      }),
      (this._mouseTouchClick = (i) => {
        const n = this.container,
          s = n.actualOptions,
          { mouse: o } = n.interactivity;
        o.inside = !0;
        let r = !1;
        const a = o.position;
        if (!(!a || !s.interactivity.events.onClick.enable)) {
          for (const [, l] of n.plugins)
            if (l.clickPositionValid && ((r = l.clickPositionValid(a)), r))
              break;
          (r || this._doMouseTouchClick(i), (o.clicking = !1));
        }
      }),
      (this._mouseTouchFinish = () => {
        const i = this.container.interactivity;
        if (!i) return;
        const n = i.mouse;
        (delete n.position,
          delete n.clickPosition,
          delete n.downPosition,
          (i.status = zr),
          (n.inside = !1),
          (n.clicking = !1));
      }),
      (this._mouseTouchMove = (i) => {
        const n = this.container,
          s = n.actualOptions,
          o = n.interactivity,
          r = n.canvas.element;
        if (!(o != null && o.element)) return;
        o.mouse.inside = !0;
        let a;
        if (i.type.startsWith("pointer")) {
          this._canPush = !0;
          const c = i;
          if (o.element === window) {
            if (r) {
              const u = r.getBoundingClientRect();
              a = { x: c.clientX - u.left, y: c.clientY - u.top };
            }
          } else if (s.interactivity.detectsOn === xn.parent) {
            const u = c.target,
              h = c.currentTarget;
            if (u && h && r) {
              const d = u.getBoundingClientRect(),
                f = h.getBoundingClientRect(),
                g = r.getBoundingClientRect();
              a = {
                x: c.offsetX + Pl * d.left - (f.left + g.left),
                y: c.offsetY + Pl * d.top - (f.top + g.top),
              };
            } else a = { x: c.offsetX ?? c.clientX, y: c.offsetY ?? c.clientY };
          } else
            c.target === r &&
              (a = { x: c.offsetX ?? c.clientX, y: c.offsetY ?? c.clientY });
        } else if (((this._canPush = i.type !== "touchmove"), r)) {
          const c = i,
            u = 1,
            h = c.touches[c.touches.length - u],
            d = r.getBoundingClientRect(),
            f = 0;
          a = { x: h.clientX - (d.left ?? f), y: h.clientY - (d.top ?? f) };
        }
        const l = n.retina.pixelRatio;
        (a && ((a.x *= l), (a.y *= l)),
          (o.mouse.position = a),
          (o.status = Xi));
      }),
      (this._touchEnd = (i) => {
        const n = i,
          s = Array.from(n.changedTouches);
        for (const o of s) this._touches.delete(o.identifier);
        this._mouseTouchFinish();
      }),
      (this._touchEndClick = (i) => {
        const n = i,
          s = Array.from(n.changedTouches);
        for (const o of s) this._touches.delete(o.identifier);
        this._mouseTouchClick(i);
      }),
      (this._touchStart = (i) => {
        const n = i,
          s = Array.from(n.changedTouches);
        for (const o of s) this._touches.set(o.identifier, performance.now());
        this._mouseTouchMove(i);
      }),
      (this._canPush = !0),
      (this._touches = new Map()),
      (this._handlers = {
        mouseDown: () => this._mouseDown(),
        mouseLeave: () => this._mouseTouchFinish(),
        mouseMove: (i) => this._mouseTouchMove(i),
        mouseUp: (i) => this._mouseTouchClick(i),
        touchStart: (i) => this._touchStart(i),
        touchMove: (i) => this._mouseTouchMove(i),
        touchEnd: (i) => this._touchEnd(i),
        touchCancel: (i) => this._touchEnd(i),
        touchEndClick: (i) => this._touchEndClick(i),
        visibilityChange: () => this._handleVisibilityChange(),
        themeChange: (i) => this._handleThemeChange(i),
        oldThemeChange: (i) => this._handleThemeChange(i),
        resize: () => {
          this._handleWindowResize();
        },
      }));
  }
  addListeners() {
    this._manageListeners(!0);
  }
  removeListeners() {
    this._manageListeners(!1);
  }
}
var et;
(function (t) {
  ((t.configAdded = "configAdded"),
    (t.containerInit = "containerInit"),
    (t.particlesSetup = "particlesSetup"),
    (t.containerStarted = "containerStarted"),
    (t.containerStopped = "containerStopped"),
    (t.containerDestroyed = "containerDestroyed"),
    (t.containerPaused = "containerPaused"),
    (t.containerPlay = "containerPlay"),
    (t.containerBuilt = "containerBuilt"),
    (t.particleAdded = "particleAdded"),
    (t.particleDestroyed = "particleDestroyed"),
    (t.particleRemoved = "particleRemoved"));
})(et || (et = {}));
class he {
  constructor() {
    this.value = "";
  }
  static create(e, i) {
    const n = new he();
    return (
      n.load(e),
      i !== void 0 && (it(i) || Ge(i) ? n.load({ value: i }) : n.load(i)),
      n
    );
  }
  load(e) {
    (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value);
  }
}
class Pg {
  constructor() {
    ((this.color = new he()),
      (this.color.value = ""),
      (this.image = ""),
      (this.position = ""),
      (this.repeat = ""),
      (this.size = ""),
      (this.opacity = 1));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image),
      e.position !== void 0 && (this.position = e.position),
      e.repeat !== void 0 && (this.repeat = e.repeat),
      e.size !== void 0 && (this.size = e.size),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class Cg {
  constructor() {
    this.opacity = 1;
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class Og {
  constructor() {
    ((this.composite = "destination-out"),
      (this.cover = new Cg()),
      (this.enable = !1));
  }
  load(e) {
    if (e) {
      if (
        (e.composite !== void 0 && (this.composite = e.composite),
        e.cover !== void 0)
      ) {
        const i = e.cover,
          n = it(e.cover) ? { color: e.cover } : e.cover;
        this.cover.load(
          i.color !== void 0 || i.image !== void 0 ? i : { color: n },
        );
      }
      e.enable !== void 0 && (this.enable = e.enable);
    }
  }
}
class Tg {
  constructor() {
    ((this.enable = !0), (this.zIndex = 0));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.zIndex !== void 0 && (this.zIndex = e.zIndex));
  }
}
class Ag {
  constructor() {
    ((this.enable = !1), (this.mode = []));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode));
  }
}
var In;
(function (t) {
  ((t.circle = "circle"), (t.rectangle = "rectangle"));
})(In || (In = {}));
class Cl {
  constructor() {
    ((this.selectors = []),
      (this.enable = !1),
      (this.mode = []),
      (this.type = In.circle));
  }
  load(e) {
    e &&
      (e.selectors !== void 0 && (this.selectors = e.selectors),
      e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      e.type !== void 0 && (this.type = e.type));
  }
}
class Eg {
  constructor() {
    ((this.enable = !1), (this.force = 2), (this.smooth = 10));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.force !== void 0 && (this.force = e.force),
      e.smooth !== void 0 && (this.smooth = e.smooth));
  }
}
class kg {
  constructor() {
    ((this.enable = !1), (this.mode = []), (this.parallax = new Eg()));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.parallax.load(e.parallax));
  }
}
class Mg {
  constructor() {
    ((this.delay = 0.5), (this.enable = !0));
  }
  load(e) {
    e !== void 0 &&
      (e.delay !== void 0 && (this.delay = e.delay),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class Ig {
  constructor() {
    ((this.onClick = new Ag()),
      (this.onDiv = new Cl()),
      (this.onHover = new kg()),
      (this.resize = new Mg()));
  }
  load(e) {
    if (!e) return;
    this.onClick.load(e.onClick);
    const i = e.onDiv;
    (i !== void 0 &&
      (this.onDiv = Pe(i, (n) => {
        const s = new Cl();
        return (s.load(n), s);
      })),
      this.onHover.load(e.onHover),
      this.resize.load(e.resize));
  }
}
class Rg {
  constructor(e, i) {
    ((this._engine = e), (this._container = i));
  }
  load(e) {
    if (!e || !this._container) return;
    const i = this._engine.interactors.get(this._container);
    if (i) for (const n of i) n.loadModeOptions && n.loadModeOptions(this, e);
  }
}
class Ch {
  constructor(e, i) {
    ((this.detectsOn = xn.window),
      (this.events = new Ig()),
      (this.modes = new Rg(e, i)));
  }
  load(e) {
    if (!e) return;
    const i = e.detectsOn;
    (i !== void 0 && (this.detectsOn = i),
      this.events.load(e.events),
      this.modes.load(e.modes));
  }
}
const Ol = 50;
class Vg {
  load(e) {
    e &&
      (e.position &&
        (this.position = {
          x: e.position.x ?? Ol,
          y: e.position.y ?? Ol,
          mode: e.position.mode ?? Vt.percent,
        }),
      e.options && (this.options = fe({}, e.options)));
  }
}
var ji;
(function (t) {
  ((t.screen = "screen"), (t.canvas = "canvas"));
})(ji || (ji = {}));
class Lg {
  constructor() {
    ((this.maxWidth = 1 / 0), (this.options = {}), (this.mode = ji.canvas));
  }
  load(e) {
    e &&
      (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
      e.mode !== void 0 &&
        (e.mode === ji.screen
          ? (this.mode = ji.screen)
          : (this.mode = ji.canvas)),
      e.options !== void 0 && (this.options = fe({}, e.options)));
  }
}
var pi;
(function (t) {
  ((t.any = "any"), (t.dark = "dark"), (t.light = "light"));
})(pi || (pi = {}));
class zg {
  constructor() {
    ((this.auto = !1), (this.mode = pi.any), (this.value = !1));
  }
  load(e) {
    e &&
      (e.auto !== void 0 && (this.auto = e.auto),
      e.mode !== void 0 && (this.mode = e.mode),
      e.value !== void 0 && (this.value = e.value));
  }
}
class Gg {
  constructor() {
    ((this.name = ""), (this.default = new zg()));
  }
  load(e) {
    e &&
      (e.name !== void 0 && (this.name = e.name),
      this.default.load(e.default),
      e.options !== void 0 && (this.options = fe({}, e.options)));
  }
}
class $o {
  constructor() {
    ((this.count = 0),
      (this.enable = !1),
      (this.speed = 1),
      (this.decay = 0),
      (this.delay = 0),
      (this.sync = !1));
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.delay !== void 0 && (this.delay = H(e.delay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class Pa extends $o {
  constructor() {
    (super(), (this.mode = Ui.auto), (this.startValue = Wt.random));
  }
  load(e) {
    (super.load(e),
      e &&
        (e.mode !== void 0 && (this.mode = e.mode),
        e.startValue !== void 0 && (this.startValue = e.startValue)));
  }
}
class ar extends $o {
  constructor() {
    (super(), (this.offset = 0), (this.sync = !0));
  }
  load(e) {
    (super.load(e), e && e.offset !== void 0 && (this.offset = H(e.offset)));
  }
}
class $g {
  constructor() {
    ((this.h = new ar()), (this.s = new ar()), (this.l = new ar()));
  }
  load(e) {
    e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
  }
}
class Pi extends he {
  constructor() {
    (super(), (this.animation = new $g()));
  }
  static create(e, i) {
    const n = new Pi();
    return (
      n.load(e),
      i !== void 0 && (it(i) || Ge(i) ? n.load({ value: i }) : n.load(i)),
      n
    );
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const i = e.animation;
    i !== void 0 &&
      (i.enable !== void 0
        ? this.animation.h.load(i)
        : this.animation.load(e.animation));
  }
}
var Sn;
(function (t) {
  ((t.absorb = "absorb"), (t.bounce = "bounce"), (t.destroy = "destroy"));
})(Sn || (Sn = {}));
class Dg {
  constructor() {
    this.speed = 2;
  }
  load(e) {
    e && e.speed !== void 0 && (this.speed = e.speed);
  }
}
class Fg {
  constructor() {
    ((this.enable = !0), (this.retries = 0));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.retries !== void 0 && (this.retries = e.retries));
  }
}
class _t {
  constructor() {
    this.value = 0;
  }
  load(e) {
    e && e.value !== void 0 && (this.value = H(e.value));
  }
}
class Hg extends _t {
  constructor() {
    (super(), (this.animation = new $o()));
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const i = e.animation;
    i !== void 0 && this.animation.load(i);
  }
}
class Oh extends Hg {
  constructor() {
    (super(), (this.animation = new Pa()));
  }
  load(e) {
    super.load(e);
  }
}
class Tl extends _t {
  constructor() {
    (super(), (this.value = 1));
  }
}
class Th {
  constructor() {
    ((this.horizontal = new Tl()), (this.vertical = new Tl()));
  }
  load(e) {
    e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
  }
}
class Bg {
  constructor() {
    ((this.absorb = new Dg()),
      (this.bounce = new Th()),
      (this.enable = !1),
      (this.maxSpeed = 50),
      (this.mode = Sn.bounce),
      (this.overlap = new Fg()));
  }
  load(e) {
    e &&
      (this.absorb.load(e.absorb),
      this.bounce.load(e.bounce),
      e.enable !== void 0 && (this.enable = e.enable),
      e.maxSpeed !== void 0 && (this.maxSpeed = H(e.maxSpeed)),
      e.mode !== void 0 && (this.mode = e.mode),
      this.overlap.load(e.overlap));
  }
}
class qg {
  constructor() {
    ((this.close = !0),
      (this.fill = !0),
      (this.options = {}),
      (this.type = []));
  }
  load(e) {
    if (!e) return;
    const i = e.options;
    if (i !== void 0)
      for (const n in i) {
        const s = i[n];
        s && (this.options[n] = fe(this.options[n] ?? {}, s));
      }
    (e.close !== void 0 && (this.close = e.close),
      e.fill !== void 0 && (this.fill = e.fill),
      e.type !== void 0 && (this.type = e.type));
  }
}
class Ng {
  constructor() {
    ((this.offset = 0), (this.value = 90));
  }
  load(e) {
    e &&
      (e.offset !== void 0 && (this.offset = H(e.offset)),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class Ug {
  constructor() {
    ((this.distance = 200),
      (this.enable = !1),
      (this.rotate = { x: 3e3, y: 3e3 }));
  }
  load(e) {
    if (
      e &&
      (e.distance !== void 0 && (this.distance = H(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.rotate)
    ) {
      const i = e.rotate.x;
      i !== void 0 && (this.rotate.x = i);
      const n = e.rotate.y;
      n !== void 0 && (this.rotate.y = n);
    }
  }
}
class jg {
  constructor() {
    ((this.x = 50), (this.y = 50), (this.mode = Vt.percent), (this.radius = 0));
  }
  load(e) {
    e &&
      (e.x !== void 0 && (this.x = e.x),
      e.y !== void 0 && (this.y = e.y),
      e.mode !== void 0 && (this.mode = e.mode),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class Wg {
  constructor() {
    ((this.acceleration = 9.81),
      (this.enable = !1),
      (this.inverse = !1),
      (this.maxSpeed = 50));
  }
  load(e) {
    e &&
      (e.acceleration !== void 0 && (this.acceleration = H(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.inverse !== void 0 && (this.inverse = e.inverse),
      e.maxSpeed !== void 0 && (this.maxSpeed = H(e.maxSpeed)));
  }
}
class Qg {
  constructor() {
    ((this.clamp = !0),
      (this.delay = new _t()),
      (this.enable = !1),
      (this.options = {}));
  }
  load(e) {
    e &&
      (e.clamp !== void 0 && (this.clamp = e.clamp),
      this.delay.load(e.delay),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.generator = e.generator),
      e.options && (this.options = fe(this.options, e.options)));
  }
}
class Kg {
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image));
  }
}
class Yg {
  constructor() {
    ((this.enable = !1), (this.length = 10), (this.fill = new Kg()));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.fill !== void 0 && this.fill.load(e.fill),
      e.length !== void 0 && (this.length = e.length));
  }
}
var Ve;
(function (t) {
  ((t.bounce = "bounce"),
    (t.none = "none"),
    (t.out = "out"),
    (t.destroy = "destroy"),
    (t.split = "split"));
})(Ve || (Ve = {}));
class Zg {
  constructor() {
    this.default = Ve.out;
  }
  load(e) {
    e &&
      (e.default !== void 0 && (this.default = e.default),
      (this.bottom = e.bottom ?? e.default),
      (this.left = e.left ?? e.default),
      (this.right = e.right ?? e.default),
      (this.top = e.top ?? e.default));
  }
}
class Jg {
  constructor() {
    ((this.acceleration = 0), (this.enable = !1));
  }
  load(e) {
    e &&
      (e.acceleration !== void 0 && (this.acceleration = H(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.position && (this.position = fe({}, e.position)));
  }
}
class Xg {
  constructor() {
    ((this.angle = new Ng()),
      (this.attract = new Ug()),
      (this.center = new jg()),
      (this.decay = 0),
      (this.distance = {}),
      (this.direction = Be.none),
      (this.drift = 0),
      (this.enable = !1),
      (this.gravity = new Wg()),
      (this.path = new Qg()),
      (this.outModes = new Zg()),
      (this.random = !1),
      (this.size = !1),
      (this.speed = 2),
      (this.spin = new Jg()),
      (this.straight = !1),
      (this.trail = new Yg()),
      (this.vibrate = !1),
      (this.warp = !1));
  }
  load(e) {
    if (!e) return;
    (this.angle.load(je(e.angle) ? { value: e.angle } : e.angle),
      this.attract.load(e.attract),
      this.center.load(e.center),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.direction !== void 0 && (this.direction = e.direction),
      e.distance !== void 0 &&
        (this.distance = je(e.distance)
          ? { horizontal: e.distance, vertical: e.distance }
          : { ...e.distance }),
      e.drift !== void 0 && (this.drift = H(e.drift)),
      e.enable !== void 0 && (this.enable = e.enable),
      this.gravity.load(e.gravity));
    const i = e.outModes;
    (i !== void 0 &&
      (_i(i) ? this.outModes.load(i) : this.outModes.load({ default: i })),
      this.path.load(e.path),
      e.random !== void 0 && (this.random = e.random),
      e.size !== void 0 && (this.size = e.size),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      this.spin.load(e.spin),
      e.straight !== void 0 && (this.straight = e.straight),
      this.trail.load(e.trail),
      e.vibrate !== void 0 && (this.vibrate = e.vibrate),
      e.warp !== void 0 && (this.warp = e.warp));
  }
}
class em extends Pa {
  constructor() {
    (super(), (this.destroy = Kt.none), (this.speed = 2));
  }
  load(e) {
    (super.load(e), e && e.destroy !== void 0 && (this.destroy = e.destroy));
  }
}
class tm extends Oh {
  constructor() {
    (super(), (this.animation = new em()), (this.value = 1));
  }
  load(e) {
    if (!e) return;
    super.load(e);
    const i = e.animation;
    i !== void 0 && this.animation.load(i);
  }
}
class im {
  constructor() {
    ((this.enable = !1), (this.width = 1920), (this.height = 1080));
  }
  load(e) {
    if (!e) return;
    e.enable !== void 0 && (this.enable = e.enable);
    const i = e.width;
    i !== void 0 && (this.width = i);
    const n = e.height;
    n !== void 0 && (this.height = n);
  }
}
var ds;
(function (t) {
  ((t.delete = "delete"), (t.wait = "wait"));
})(ds || (ds = {}));
class nm {
  constructor() {
    ((this.mode = ds.delete), (this.value = 0));
  }
  load(e) {
    e &&
      (e.mode !== void 0 && (this.mode = e.mode),
      e.value !== void 0 && (this.value = e.value));
  }
}
class sm {
  constructor() {
    ((this.density = new im()), (this.limit = new nm()), (this.value = 0));
  }
  load(e) {
    e &&
      (this.density.load(e.density),
      this.limit.load(e.limit),
      e.value !== void 0 && (this.value = e.value));
  }
}
class om {
  constructor() {
    ((this.blur = 0),
      (this.color = new he()),
      (this.enable = !1),
      (this.offset = { x: 0, y: 0 }),
      (this.color.value = "#000"));
  }
  load(e) {
    e &&
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = he.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 &&
        (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
        e.offset.y !== void 0 && (this.offset.y = e.offset.y)));
  }
}
class rm {
  constructor() {
    ((this.close = !0),
      (this.fill = !0),
      (this.options = {}),
      (this.type = "circle"));
  }
  load(e) {
    if (!e) return;
    const i = e.options;
    if (i !== void 0)
      for (const n in i) {
        const s = i[n];
        s && (this.options[n] = fe(this.options[n] ?? {}, s));
      }
    (e.close !== void 0 && (this.close = e.close),
      e.fill !== void 0 && (this.fill = e.fill),
      e.type !== void 0 && (this.type = e.type));
  }
}
class am extends Pa {
  constructor() {
    (super(), (this.destroy = Kt.none), (this.speed = 5));
  }
  load(e) {
    (super.load(e), e && e.destroy !== void 0 && (this.destroy = e.destroy));
  }
}
class lm extends Oh {
  constructor() {
    (super(), (this.animation = new am()), (this.value = 3));
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const i = e.animation;
    i !== void 0 && this.animation.load(i);
  }
}
class Al {
  constructor() {
    this.width = 0;
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = Pi.create(this.color, e.color)),
      e.width !== void 0 && (this.width = H(e.width)),
      e.opacity !== void 0 && (this.opacity = H(e.opacity)));
  }
}
class cm extends _t {
  constructor() {
    (super(),
      (this.opacityRate = 1),
      (this.sizeRate = 1),
      (this.velocityRate = 1));
  }
  load(e) {
    (super.load(e),
      e &&
        (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate),
        e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate),
        e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate)));
  }
}
class um {
  constructor(e, i) {
    ((this._engine = e),
      (this._container = i),
      (this.bounce = new Th()),
      (this.collisions = new Bg()),
      (this.color = new Pi()),
      (this.color.value = "#fff"),
      (this.effect = new qg()),
      (this.groups = {}),
      (this.move = new Xg()),
      (this.number = new sm()),
      (this.opacity = new tm()),
      (this.reduceDuplicates = !1),
      (this.shadow = new om()),
      (this.shape = new rm()),
      (this.size = new lm()),
      (this.stroke = new Al()),
      (this.zIndex = new cm()));
  }
  load(e) {
    if (!e) return;
    if (e.groups !== void 0)
      for (const n of Object.keys(e.groups)) {
        if (!Object.hasOwn(e.groups, n)) continue;
        const s = e.groups[n];
        s !== void 0 && (this.groups[n] = fe(this.groups[n] ?? {}, s));
      }
    (e.reduceDuplicates !== void 0 &&
      (this.reduceDuplicates = e.reduceDuplicates),
      this.bounce.load(e.bounce),
      this.color.load(Pi.create(this.color, e.color)),
      this.effect.load(e.effect),
      this.move.load(e.move),
      this.number.load(e.number),
      this.opacity.load(e.opacity),
      this.shape.load(e.shape),
      this.size.load(e.size),
      this.shadow.load(e.shadow),
      this.zIndex.load(e.zIndex),
      this.collisions.load(e.collisions),
      e.interactivity !== void 0 &&
        (this.interactivity = fe({}, e.interactivity)));
    const i = e.stroke;
    if (
      (i &&
        (this.stroke = Pe(i, (n) => {
          const s = new Al();
          return (s.load(n), s);
        })),
      this._container)
    ) {
      const n = this._engine.updaters.get(this._container);
      if (n) for (const o of n) o.loadOptions && o.loadOptions(this, e);
      const s = this._engine.interactors.get(this._container);
      if (s)
        for (const o of s)
          o.loadParticlesOptions && o.loadParticlesOptions(this, e);
    }
  }
}
function Ah(t, ...e) {
  for (const i of e) t.load(i);
}
function Ca(t, e, ...i) {
  const n = new um(t, e);
  return (Ah(n, ...i), n);
}
class hm {
  constructor(e, i) {
    ((this._findDefaultTheme = (n) =>
      this.themes.find((s) => s.default.value && s.default.mode === n) ??
      this.themes.find((s) => s.default.value && s.default.mode === pi.any)),
      (this._importPreset = (n) => {
        this.load(this._engine.getPreset(n));
      }),
      (this._engine = e),
      (this._container = i),
      (this.autoPlay = !0),
      (this.background = new Pg()),
      (this.backgroundMask = new Og()),
      (this.clear = !0),
      (this.defaultThemes = {}),
      (this.delay = 0),
      (this.fullScreen = new Tg()),
      (this.detectRetina = !0),
      (this.duration = 0),
      (this.fpsLimit = 120),
      (this.interactivity = new Ch(e, i)),
      (this.manualParticles = []),
      (this.particles = Ca(this._engine, this._container)),
      (this.pauseOnBlur = !0),
      (this.pauseOnOutsideViewport = !0),
      (this.responsive = []),
      (this.smooth = !1),
      (this.style = {}),
      (this.themes = []),
      (this.zLayers = 100));
  }
  load(e) {
    var r, a;
    if (!e) return;
    (e.preset !== void 0 && Pe(e.preset, (l) => this._importPreset(l)),
      e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.clear !== void 0 && (this.clear = e.clear),
      e.key !== void 0 && (this.key = e.key),
      e.name !== void 0 && (this.name = e.name),
      e.delay !== void 0 && (this.delay = H(e.delay)));
    const i = e.detectRetina;
    (i !== void 0 && (this.detectRetina = i),
      e.duration !== void 0 && (this.duration = H(e.duration)));
    const n = e.fpsLimit;
    (n !== void 0 && (this.fpsLimit = n),
      e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur),
      e.pauseOnOutsideViewport !== void 0 &&
        (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
      e.zLayers !== void 0 && (this.zLayers = e.zLayers),
      this.background.load(e.background));
    const s = e.fullScreen;
    (uh(s) ? (this.fullScreen.enable = s) : this.fullScreen.load(s),
      this.backgroundMask.load(e.backgroundMask),
      this.interactivity.load(e.interactivity),
      e.manualParticles &&
        (this.manualParticles = e.manualParticles.map((l) => {
          const c = new Vg();
          return (c.load(l), c);
        })),
      this.particles.load(e.particles),
      (this.style = fe(this.style, e.style)),
      this._engine.loadOptions(this, e),
      e.smooth !== void 0 && (this.smooth = e.smooth));
    const o = this._engine.interactors.get(this._container);
    if (o) for (const l of o) l.loadOptions && l.loadOptions(this, e);
    if (e.responsive !== void 0)
      for (const l of e.responsive) {
        const c = new Lg();
        (c.load(l), this.responsive.push(c));
      }
    if (
      (this.responsive.sort((l, c) => l.maxWidth - c.maxWidth),
      e.themes !== void 0)
    )
      for (const l of e.themes) {
        const c = this.themes.find((u) => u.name === l.name);
        if (c) c.load(l);
        else {
          const u = new Gg();
          (u.load(l), this.themes.push(u));
        }
      }
    ((this.defaultThemes.dark =
      (r = this._findDefaultTheme(pi.dark)) == null ? void 0 : r.name),
      (this.defaultThemes.light =
        (a = this._findDefaultTheme(pi.light)) == null ? void 0 : a.name));
  }
  setResponsive(e, i, n) {
    this.load(n);
    const s = this.responsive.find((o) =>
      o.mode === ji.screen && screen
        ? o.maxWidth > screen.availWidth
        : o.maxWidth * i > e,
    );
    return (
      this.load(s == null ? void 0 : s.options),
      s == null ? void 0 : s.maxWidth
    );
  }
  setTheme(e) {
    if (e) {
      const i = this.themes.find((n) => n.name === e);
      i && this.load(i.options);
    } else {
      const i = _a("(prefers-color-scheme: dark)"),
        n = i == null ? void 0 : i.matches,
        s = this._findDefaultTheme(n ? pi.dark : pi.light);
      s && this.load(s.options);
    }
  }
}
var Rn;
(function (t) {
  ((t.external = "external"), (t.particles = "particles"));
})(Rn || (Rn = {}));
class dm {
  constructor(e, i) {
    ((this.container = i),
      (this._engine = e),
      (this._interactors = []),
      (this._externalInteractors = []),
      (this._particleInteractors = []));
  }
  externalInteract(e) {
    for (const i of this._externalInteractors) i.isEnabled() && i.interact(e);
  }
  handleClickMode(e) {
    var i;
    for (const n of this._externalInteractors)
      (i = n.handleClickMode) == null || i.call(n, e);
  }
  async init() {
    ((this._interactors = await this._engine.getInteractors(
      this.container,
      !0,
    )),
      (this._externalInteractors = []),
      (this._particleInteractors = []));
    for (const e of this._interactors) {
      switch (e.type) {
        case Rn.external:
          this._externalInteractors.push(e);
          break;
        case Rn.particles:
          this._particleInteractors.push(e);
          break;
      }
      e.init();
    }
  }
  particlesInteract(e, i) {
    for (const n of this._externalInteractors) n.clear(e, i);
    for (const n of this._particleInteractors)
      n.isEnabled(e) && n.interact(e, i);
  }
  reset(e) {
    for (const i of this._externalInteractors) i.isEnabled() && i.reset(e);
    for (const i of this._particleInteractors) i.isEnabled(e) && i.reset(e);
  }
}
var Rt;
(function (t) {
  ((t.normal = "normal"), (t.inside = "inside"), (t.outside = "outside"));
})(Rt || (Rt = {}));
const El = 0,
  Br = 2,
  Ts = 0.5,
  fm = 2,
  kl = "random";
function pm(t, e, i, n) {
  const s = e.options[t];
  if (s) return fe({ close: e.close, fill: e.fill }, Re(s, i, n));
}
function gm(t, e, i, n) {
  const s = e.options[t];
  if (s) return fe({ close: e.close, fill: e.fill }, Re(s, i, n));
}
function Ml(t) {
  if (!ge(t.outMode, t.checkModes)) return;
  const e = t.radius * Br;
  t.coord > t.maxCoord - e
    ? t.setCb(-t.radius)
    : t.coord < e && t.setCb(t.radius);
}
class mm {
  constructor(e, i) {
    ((this.container = i),
      (this._calcPosition = (n, s, o, r = El) => {
        for (const [, g] of n.plugins) {
          const p =
            g.particlePosition !== void 0
              ? g.particlePosition(s, this)
              : void 0;
          if (p) return pt.create(p.x, p.y, o);
        }
        const a = n.canvas.size,
          l = Xp({ size: a, position: s }),
          c = pt.create(l.x, l.y, o),
          u = this.getRadius(),
          h = this.options.move.outModes,
          d = (g) => {
            Ml({
              outMode: g,
              checkModes: [Ve.bounce],
              coord: c.x,
              maxCoord: n.canvas.size.width,
              setCb: (p) => (c.x += p),
              radius: u,
            });
          },
          f = (g) => {
            Ml({
              outMode: g,
              checkModes: [Ve.bounce],
              coord: c.y,
              maxCoord: n.canvas.size.height,
              setCb: (p) => (c.y += p),
              radius: u,
            });
          };
        return (
          d(h.left ?? h.default),
          d(h.right ?? h.default),
          f(h.top ?? h.default),
          f(h.bottom ?? h.default),
          this._checkOverlap(c, r) ? this._calcPosition(n, void 0, o, r + 1) : c
        );
      }),
      (this._calculateVelocity = () => {
        const n = Jp(this.direction),
          s = n.copy(),
          o = this.options.move;
        if (o.direction === Be.inside || o.direction === Be.outside) return s;
        const r = It(S(o.angle.value)),
          a = It(S(o.angle.offset)),
          l = { left: a - r * Ts, right: a + r * Ts };
        return (
          o.straight || (s.angle += ke(H(l.left, l.right))),
          o.random && typeof o.speed == "number" && (s.length *= D()),
          s
        );
      }),
      (this._checkOverlap = (n, s = El) => {
        const o = this.options.collisions,
          r = this.getRadius();
        if (!o.enable) return !1;
        const a = o.overlap;
        if (a.enable) return !1;
        const l = a.retries;
        if (l >= 0 && s > l)
          throw new Error(`${Fe} particle is overlapping and can't be placed`);
        return !!this.container.particles.find(
          (u) => Ne(n, u.position) < r + u.getRadius(),
        );
      }),
      (this._getRollColor = (n) => {
        if (!n || !this.roll || (!this.backColor && !this.roll.alter)) return n;
        const s = 1,
          o = 0,
          r = this.roll.horizontal && this.roll.vertical ? Br * s : s,
          a = this.roll.horizontal ? Math.PI * Ts : o;
        return Math.floor(((this.roll.angle ?? o) + a) / (Math.PI / r)) % Br
          ? this.backColor
            ? this.backColor
            : this.roll.alter
              ? wg(n, this.roll.alter.type, this.roll.alter.value)
              : n
          : n;
      }),
      (this._initPosition = (n) => {
        const s = this.container,
          o = S(this.options.zIndex.value),
          r = 0;
        ((this.position = this._calcPosition(s, n, at(o, r, s.zLayers))),
          (this.initialPosition = this.position.copy()));
        const a = s.canvas.size,
          l = 0;
        switch (
          ((this.moveCenter = {
            ...wa(this.options.move.center, a),
            radius: this.options.move.center.radius ?? l,
            mode: this.options.move.center.mode ?? Vt.percent,
          }),
          (this.direction = Zp(
            this.options.move.direction,
            this.position,
            this.moveCenter,
          )),
          this.options.move.direction)
        ) {
          case Be.inside:
            this.outType = Rt.inside;
            break;
          case Be.outside:
            this.outType = Rt.outside;
            break;
        }
        this.offset = ne.origin;
      }),
      (this._engine = e));
  }
  destroy(e) {
    var o, r, a;
    if (this.unbreakable || this.destroyed) return;
    ((this.destroyed = !0),
      (this.bubble.inRange = !1),
      (this.slow.inRange = !1));
    const i = this.container,
      n = this.pathGenerator,
      s = i.shapeDrawers.get(this.shape);
    (o = s == null ? void 0 : s.particleDestroy) == null || o.call(s, this);
    for (const [, l] of i.plugins)
      (r = l.particleDestroyed) == null || r.call(l, this, e);
    for (const l of i.particles.updaters)
      (a = l.particleDestroyed) == null || a.call(l, this, e);
    (n == null || n.reset(this),
      this._engine.dispatchEvent(et.particleDestroyed, {
        container: this.container,
        data: { particle: this },
      }));
  }
  draw(e) {
    const i = this.container,
      n = i.canvas;
    for (const [, s] of i.plugins) n.drawParticlePlugin(s, this, e);
    n.drawParticle(this, e);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? xl(this.color));
  }
  getMass() {
    return this.getRadius() ** fm * Math.PI * Ts;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z,
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? xl(this.strokeColor));
  }
  init(e, i, n, s) {
    var I, z, q, W, R, ee;
    const o = this.container,
      r = this._engine;
    ((this.id = e),
      (this.group = s),
      (this.effectClose = !0),
      (this.effectFill = !0),
      (this.shapeClose = !0),
      (this.shapeFill = !0),
      (this.pathRotation = !1),
      (this.lastPathTime = 0),
      (this.destroyed = !1),
      (this.unbreakable = !1),
      (this.isRotating = !1),
      (this.rotation = 0),
      (this.misplaced = !1),
      (this.retina = { maxDistance: {} }),
      (this.outType = Rt.normal),
      (this.ignoresResizeRatio = !0));
    const a = o.retina.pixelRatio,
      l = o.actualOptions,
      c = Ca(this._engine, o, l.particles),
      { reduceDuplicates: u } = c,
      h = c.effect.type,
      d = c.shape.type;
    ((this.effect = Re(h, this.id, u)), (this.shape = Re(d, this.id, u)));
    const f = c.effect,
      g = c.shape;
    if (n) {
      if ((I = n.effect) != null && I.type) {
        const Q = n.effect.type,
          be = Re(Q, this.id, u);
        be && ((this.effect = be), f.load(n.effect));
      }
      if ((z = n.shape) != null && z.type) {
        const Q = n.shape.type,
          be = Re(Q, this.id, u);
        be && ((this.shape = be), g.load(n.shape));
      }
    }
    if (this.effect === kl) {
      const Q = [...this.container.effectDrawers.keys()];
      this.effect = Q[Math.floor(Math.random() * Q.length)];
    }
    if (this.shape === kl) {
      const Q = [...this.container.shapeDrawers.keys()];
      this.shape = Q[Math.floor(Math.random() * Q.length)];
    }
    ((this.effectData = pm(this.effect, f, this.id, u)),
      (this.shapeData = gm(this.shape, g, this.id, u)),
      c.load(n));
    const p = this.effectData;
    p && c.load(p.particles);
    const y = this.shapeData;
    y && c.load(y.particles);
    const w = new Ch(r, o);
    (w.load(o.actualOptions.interactivity),
      w.load(c.interactivity),
      (this.interactivity = w),
      (this.effectFill = (p == null ? void 0 : p.fill) ?? c.effect.fill),
      (this.effectClose = (p == null ? void 0 : p.close) ?? c.effect.close),
      (this.shapeFill = (y == null ? void 0 : y.fill) ?? c.shape.fill),
      (this.shapeClose = (y == null ? void 0 : y.close) ?? c.shape.close),
      (this.options = c));
    const x = this.options.move.path;
    ((this.pathDelay = S(x.delay.value) * ye),
      x.generator &&
        ((this.pathGenerator = this._engine.getPathGenerator(x.generator)),
        this.pathGenerator &&
          o.addPath(x.generator, this.pathGenerator) &&
          this.pathGenerator.init(o)),
      o.retina.initParticle(this),
      (this.size = yh(this.options.size, a)),
      (this.bubble = { inRange: !1 }),
      (this.slow = { inRange: !1, factor: 1 }),
      this._initPosition(i),
      (this.initialVelocity = this._calculateVelocity()),
      (this.velocity = this.initialVelocity.copy()));
    const C = 1;
    this.moveDecay = C - S(this.options.move.decay);
    const v = o.particles;
    (v.setLastZIndex(this.position.z),
      (this.zIndexFactor = this.position.z / o.zLayers),
      (this.sides = 24));
    let k = o.effectDrawers.get(this.effect);
    (k ||
      ((k = this._engine.getEffectDrawer(this.effect)),
      k && o.effectDrawers.set(this.effect, k)),
      k != null && k.loadEffect && k.loadEffect(this));
    let E = o.shapeDrawers.get(this.shape);
    (E ||
      ((E = this._engine.getShapeDrawer(this.shape)),
      E && o.shapeDrawers.set(this.shape, E)),
      E != null && E.loadShape && E.loadShape(this));
    const U = E == null ? void 0 : E.getSidesCount;
    (U && (this.sides = U(this)),
      (this.spawning = !1),
      (this.shadowColor = Ue(this.options.shadow.color)));
    for (const Q of v.updaters) Q.init(this);
    for (const Q of v.movers) (q = Q.init) == null || q.call(Q, this);
    ((W = k == null ? void 0 : k.particleInit) == null || W.call(k, o, this),
      (R = E == null ? void 0 : E.particleInit) == null || R.call(E, o, this));
    for (const [, Q] of o.plugins)
      (ee = Q.particleCreated) == null || ee.call(Q, this);
  }
  isInsideCanvas() {
    const e = this.getRadius(),
      i = this.container.canvas.size,
      n = this.position;
    return n.x >= -e && n.y >= -e && n.y <= i.height + e && n.x <= i.width + e;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    var e;
    for (const i of this.container.particles.updaters)
      (e = i.reset) == null || e.call(i, this);
  }
}
class _m {
  constructor(e, i) {
    ((this.position = e), (this.particle = i));
  }
}
var Pn;
(function (t) {
  ((t.circle = "circle"), (t.rectangle = "rectangle"));
})(Pn || (Pn = {}));
const Fn = 2;
class Eh {
  constructor(e, i, n) {
    ((this.position = { x: e, y: i }), (this.type = n));
  }
}
class Ye extends Eh {
  constructor(e, i, n) {
    (super(e, i, Pn.circle), (this.radius = n));
  }
  contains(e) {
    return Ne(e, this.position) <= this.radius;
  }
  intersects(e) {
    const i = this.position,
      n = e.position,
      s = { x: Math.abs(n.x - i.x), y: Math.abs(n.y - i.y) },
      o = this.radius;
    if (e instanceof Ye || e.type === Pn.circle) {
      const r = e,
        a = o + r.radius,
        l = Math.sqrt(s.x ** Fn + s.y ** Fn);
      return a > l;
    } else if (e instanceof Lt || e.type === Pn.rectangle) {
      const r = e,
        { width: a, height: l } = r.size;
      return (
        Math.pow(s.x - a, Fn) + Math.pow(s.y - l, Fn) <= o ** Fn ||
        (s.x <= o + a && s.y <= o + l) ||
        s.x <= a ||
        s.y <= l
      );
    }
    return !1;
  }
}
class Lt extends Eh {
  constructor(e, i, n, s) {
    (super(e, i, Pn.rectangle), (this.size = { height: s, width: n }));
  }
  contains(e) {
    const i = this.size.width,
      n = this.size.height,
      s = this.position;
    return e.x >= s.x && e.x <= s.x + i && e.y >= s.y && e.y <= s.y + n;
  }
  intersects(e) {
    if (e instanceof Ye) return e.intersects(this);
    const i = this.size.width,
      n = this.size.height,
      s = this.position,
      o = e.position,
      r = e instanceof Lt ? e.size : { width: 0, height: 0 },
      a = r.width,
      l = r.height;
    return o.x < s.x + i && o.x + a > s.x && o.y < s.y + n && o.y + l > s.y;
  }
}
const Hn = 0.5,
  ym = 2,
  bm = 4;
class lo {
  constructor(e, i) {
    ((this.rectangle = e),
      (this.capacity = i),
      (this._subdivide = () => {
        const { x: n, y: s } = this.rectangle.position,
          { width: o, height: r } = this.rectangle.size,
          { capacity: a } = this;
        for (let l = 0; l < bm; l++) {
          const c = l % ym;
          this._subs.push(
            new lo(
              new Lt(
                n + o * Hn * c,
                s + r * Hn * (Math.round(l * Hn) - c),
                o * Hn,
                r * Hn,
              ),
              a,
            ),
          );
        }
        this._divided = !0;
      }),
      (this._points = []),
      (this._divided = !1),
      (this._subs = []));
  }
  insert(e) {
    return this.rectangle.contains(e.position)
      ? this._points.length < this.capacity
        ? (this._points.push(e), !0)
        : (this._divided || this._subdivide(),
          this._subs.some((i) => i.insert(e)))
      : !1;
  }
  query(e, i) {
    const n = [];
    if (!e.intersects(this.rectangle)) return [];
    for (const s of this._points)
      (!e.contains(s.position) &&
        Ne(e.position, s.position) > s.particle.getRadius() &&
        (!i || i(s.particle))) ||
        n.push(s.particle);
    if (this._divided) for (const s of this._subs) n.push(...s.query(e, i));
    return n;
  }
  queryCircle(e, i, n) {
    return this.query(new Ye(e.x, e.y, i), n);
  }
  queryRectangle(e, i, n) {
    return this.query(new Lt(e.x, e.y, i.width, i.height), n);
  }
}
const Il = 4,
  wm = 2,
  vm = 1,
  Rl = (t) => {
    const { height: e, width: i } = t,
      n = -0.25,
      s = 1.5;
    return new Lt(n * i, n * e, s * i, s * e);
  };
let xm = class {
  constructor(e, i) {
    ((this._addToPool = (...s) => {
      this._pool.push(...s);
    }),
      (this._applyDensity = (s, o, r) => {
        var g;
        const a = s.number;
        if (!((g = s.number.density) != null && g.enable)) {
          r === void 0
            ? (this._limit = a.limit.value)
            : a.limit && this._groupLimits.set(r, a.limit.value);
          return;
        }
        const l = this._initDensityFactor(a.density),
          c = a.value,
          u = 0,
          h = a.limit.value > u ? a.limit.value : c,
          d = Math.min(c, h) * l + o,
          f = Math.min(this.count, this.filter((p) => p.group === r).length);
        (r === void 0
          ? (this._limit = a.limit.value * l)
          : this._groupLimits.set(r, a.limit.value * l),
          f < d
            ? this.push(Math.abs(d - f), void 0, s, r)
            : f > d && this.removeQuantity(f - d, r));
      }),
      (this._initDensityFactor = (s) => {
        const o = this._container,
          r = 1;
        if (!o.canvas.element || !s.enable) return r;
        const a = o.canvas.element,
          l = o.retina.pixelRatio;
        return (a.width * a.height) / (s.height * s.width * l ** wm);
      }),
      (this._pushParticle = (s, o, r, a) => {
        try {
          let l = this._pool.pop();
          (l || (l = new mm(this._engine, this._container)),
            l.init(this._nextId, s, o, r));
          let c = !0;
          return (
            a && (c = a(l)),
            c
              ? (this._array.push(l),
                this._zArray.push(l),
                this._nextId++,
                this._engine.dispatchEvent(et.particleAdded, {
                  container: this._container,
                  data: { particle: l },
                }),
                l)
              : void 0
          );
        } catch (l) {
          xi().warning(`${Fe} adding particle: ${l}`);
        }
      }),
      (this._removeParticle = (s, o, r) => {
        const a = this._array[s];
        if (!a || a.group !== o) return !1;
        const l = this._zArray.indexOf(a),
          c = 1;
        return (
          this._array.splice(s, c),
          this._zArray.splice(l, c),
          a.destroy(r),
          this._engine.dispatchEvent(et.particleRemoved, {
            container: this._container,
            data: { particle: a },
          }),
          this._addToPool(a),
          !0
        );
      }),
      (this._engine = e),
      (this._container = i),
      (this._nextId = 0),
      (this._array = []),
      (this._zArray = []),
      (this._pool = []),
      (this._limit = 0),
      (this._groupLimits = new Map()),
      (this._needsSort = !1),
      (this._lastZIndex = 0),
      (this._interactionManager = new dm(e, i)),
      (this._pluginsInitialized = !1));
    const n = i.canvas.size;
    ((this.quadTree = new lo(Rl(n), Il)),
      (this.movers = []),
      (this.updaters = []));
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const e = this._container;
    e.actualOptions.manualParticles.forEach((n) =>
      this.addParticle(
        n.position ? wa(n.position, e.canvas.size) : void 0,
        n.options,
      ),
    );
  }
  addParticle(e, i, n, s) {
    const o = this._container.actualOptions.particles.number.limit.mode,
      r =
        n === void 0 ? this._limit : (this._groupLimits.get(n) ?? this._limit),
      a = this.count;
    if (r > 0)
      switch (o) {
        case ds.delete: {
          const h = a + 1 - r;
          h > 0 && this.removeQuantity(h);
          break;
        }
        case ds.wait:
          if (a >= r) return;
          break;
      }
    return this._pushParticle(e, i, n, s);
  }
  clear() {
    ((this._array = []), (this._zArray = []), (this._pluginsInitialized = !1));
  }
  destroy() {
    ((this._array = []),
      (this._zArray = []),
      (this.movers = []),
      (this.updaters = []));
  }
  draw(e) {
    const i = this._container,
      n = i.canvas;
    (n.clear(), this.update(e));
    for (const [, s] of i.plugins) n.drawPlugin(s, e);
    for (const s of this._zArray) s.draw(e);
  }
  filter(e) {
    return this._array.filter(e);
  }
  find(e) {
    return this._array.find(e);
  }
  get(e) {
    return this._array[e];
  }
  handleClickMode(e) {
    this._interactionManager.handleClickMode(e);
  }
  async init() {
    var s, o;
    const e = this._container,
      i = e.actualOptions;
    ((this._lastZIndex = 0), (this._needsSort = !1), await this.initPlugins());
    let n = !1;
    for (const [, r] of e.plugins)
      if (
        ((n =
          ((s = r.particlesInitialization) == null ? void 0 : s.call(r)) ?? n),
        n)
      )
        break;
    if ((this.addManualParticles(), !n)) {
      const r = i.particles,
        a = r.groups;
      for (const l in a) {
        const c = a[l];
        for (
          let u = this.count, h = 0;
          h < ((o = c.number) == null ? void 0 : o.value) && u < r.number.value;
          u++, h++
        )
          this.addParticle(void 0, c, l);
      }
      for (let l = this.count; l < r.number.value; l++) this.addParticle();
    }
  }
  async initPlugins() {
    if (this._pluginsInitialized) return;
    const e = this._container;
    ((this.movers = await this._engine.getMovers(e, !0)),
      (this.updaters = await this._engine.getUpdaters(e, !0)),
      await this._interactionManager.init());
    for (const [, i] of e.pathGenerators) i.init(e);
  }
  push(e, i, n, s) {
    for (let o = 0; o < e; o++)
      this.addParticle(i == null ? void 0 : i.position, n, s);
  }
  async redraw() {
    (this.clear(), await this.init(), this.draw({ value: 0, factor: 0 }));
  }
  remove(e, i, n) {
    this.removeAt(this._array.indexOf(e), void 0, i, n);
  }
  removeAt(e, i = vm, n, s) {
    if (e < 0 || e > this.count) return;
    let r = 0;
    for (let a = e; r < i && a < this.count; a++)
      this._removeParticle(a--, n, s) && r++;
  }
  removeQuantity(e, i) {
    this.removeAt(0, e, i);
  }
  setDensity() {
    const e = this._container.actualOptions,
      i = e.particles.groups,
      n = 0;
    for (const s in i) this._applyDensity(i[s], n, s);
    this._applyDensity(e.particles, e.manualParticles.length);
  }
  setLastZIndex(e) {
    ((this._lastZIndex = e),
      (this._needsSort = this._needsSort || this._lastZIndex < e));
  }
  setResizeFactor(e) {
    this._resizeFactor = e;
  }
  update(e) {
    var o, r;
    const i = this._container,
      n = new Set();
    this.quadTree = new lo(Rl(i.canvas.size), Il);
    for (const [, a] of i.pathGenerators) a.update();
    for (const [, a] of i.plugins) (o = a.update) == null || o.call(a, e);
    const s = this._resizeFactor;
    for (const a of this._array) {
      (s &&
        !a.ignoresResizeRatio &&
        ((a.position.x *= s.width),
        (a.position.y *= s.height),
        (a.initialPosition.x *= s.width),
        (a.initialPosition.y *= s.height)),
        (a.ignoresResizeRatio = !1),
        this._interactionManager.reset(a));
      for (const [, l] of this._container.plugins) {
        if (a.destroyed) break;
        (r = l.particleUpdate) == null || r.call(l, a, e);
      }
      for (const l of this.movers) l.isEnabled(a) && l.move(a, e);
      if (a.destroyed) {
        n.add(a);
        continue;
      }
      this.quadTree.insert(new _m(a.getPosition(), a));
    }
    if (n.size) {
      const a = (l) => !n.has(l);
      ((this._array = this.filter(a)), (this._zArray = this._zArray.filter(a)));
      for (const l of n)
        this._engine.dispatchEvent(et.particleRemoved, {
          container: this._container,
          data: { particle: l },
        });
      this._addToPool(...n);
    }
    this._interactionManager.externalInteract(e);
    for (const a of this._array) {
      for (const l of this.updaters) l.update(a, e);
      !a.destroyed &&
        !a.spawning &&
        this._interactionManager.particlesInteract(a, e);
    }
    if ((delete this._resizeFactor, this._needsSort)) {
      const a = this._zArray;
      a.sort((c, u) => u.position.z - c.position.z || c.id - u.id);
      const l = 1;
      ((this._lastZIndex = a[a.length - l].position.z), (this._needsSort = !1));
    }
  }
};
const Vl = 1,
  Ll = 1;
class Sm {
  constructor(e) {
    ((this.container = e), (this.pixelRatio = Vl), (this.reduceFactor = Ll));
  }
  init() {
    const e = this.container,
      i = e.actualOptions;
    ((this.pixelRatio = !i.detectRetina || en() ? Vl : window.devicePixelRatio),
      (this.reduceFactor = Ll));
    const n = this.pixelRatio,
      s = e.canvas;
    if (s.element) {
      const a = s.element;
      ((s.size.width = a.offsetWidth * n),
        (s.size.height = a.offsetHeight * n));
    }
    const o = i.particles,
      r = o.move;
    ((this.maxSpeed = S(r.gravity.maxSpeed) * n),
      (this.sizeAnimationSpeed = S(o.size.animation.speed) * n));
  }
  initParticle(e) {
    const i = e.options,
      n = this.pixelRatio,
      s = i.move,
      o = s.distance,
      r = e.retina;
    ((r.moveDrift = S(s.drift) * n),
      (r.moveSpeed = S(s.speed) * n),
      (r.sizeAnimationSpeed = S(i.size.animation.speed) * n));
    const a = r.maxDistance;
    ((a.horizontal = o.horizontal !== void 0 ? o.horizontal * n : void 0),
      (a.vertical = o.vertical !== void 0 ? o.vertical * n : void 0),
      (r.maxSpeed = S(s.gravity.maxSpeed) * n));
  }
}
function Ae(t) {
  return t && !t.destroyed;
}
const lr = 60;
function Pm(t, e = lr, i = !1) {
  return { value: t, factor: i ? lr / e : (lr * t) / ye };
}
function an(t, e, ...i) {
  const n = new hm(t, e);
  return (Ah(n, ...i), n);
}
class Cm {
  constructor(e, i, n) {
    ((this._intersectionManager = (s) => {
      if (!(!Ae(this) || !this.actualOptions.pauseOnOutsideViewport))
        for (const o of s)
          o.target === this.interactivity.element &&
            (o.isIntersecting ? this.play() : this.pause());
    }),
      (this._nextFrame = (s) => {
        try {
          if (
            !this._smooth &&
            this._lastFrameTime !== void 0 &&
            s < this._lastFrameTime + ye / this.fpsLimit
          ) {
            this.draw(!1);
            return;
          }
          this._lastFrameTime ?? (this._lastFrameTime = s);
          const o = Pm(s - this._lastFrameTime, this.fpsLimit, this._smooth);
          if (
            (this.addLifeTime(o.value), (this._lastFrameTime = s), o.value > ye)
          ) {
            this.draw(!1);
            return;
          }
          if ((this.particles.draw(o), !this.alive())) {
            this.destroy();
            return;
          }
          this.animationStatus && this.draw(!1);
        } catch (o) {
          xi().error(`${Fe} in animation loop`, o);
        }
      }),
      (this._engine = e),
      (this.id = Symbol(i)),
      (this.fpsLimit = 120),
      (this._smooth = !1),
      (this._delay = 0),
      (this._duration = 0),
      (this._lifeTime = 0),
      (this._firstStart = !0),
      (this.started = !1),
      (this.destroyed = !1),
      (this._paused = !0),
      (this._lastFrameTime = 0),
      (this.zLayers = 100),
      (this.pageHidden = !1),
      (this._clickHandlers = new Map()),
      (this._sourceOptions = n),
      (this._initialSourceOptions = n),
      (this.retina = new Sm(this)),
      (this.canvas = new xg(this)),
      (this.particles = new xm(this._engine, this)),
      (this.pathGenerators = new Map()),
      (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
      (this.plugins = new Map()),
      (this.effectDrawers = new Map()),
      (this.shapeDrawers = new Map()),
      (this._options = an(this._engine, this)),
      (this.actualOptions = an(this._engine, this)),
      (this._eventListeners = new Sg(this)),
      (this._intersectionObserver = ng((s) => this._intersectionManager(s))),
      this._engine.dispatchEvent(et.containerBuilt, { container: this }));
  }
  get animationStatus() {
    return !this._paused && !this.pageHidden && Ae(this);
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(e) {
    if (!Ae(this)) return;
    const i = this.interactivity.element;
    if (!i) return;
    const n = (h, d, f) => {
        if (!Ae(this)) return;
        const g = this.retina.pixelRatio,
          p = { x: d.x * g, y: d.y * g },
          y = this.particles.quadTree.queryCircle(p, f * g);
        e(h, y);
      },
      s = (h) => {
        if (!Ae(this)) return;
        const d = h,
          f = { x: d.offsetX || d.clientX, y: d.offsetY || d.clientY };
        n(h, f, 1);
      },
      o = () => {
        Ae(this) && ((c = !0), (u = !1));
      },
      r = () => {
        Ae(this) && (u = !0);
      },
      a = (h) => {
        if (Ae(this)) {
          if (c && !u) {
            const d = h,
              f = 1;
            let g = d.touches[d.touches.length - f];
            if (!g && ((g = d.changedTouches[d.changedTouches.length - f]), !g))
              return;
            const p = this.canvas.element,
              y = p ? p.getBoundingClientRect() : void 0,
              w = 0,
              x = {
                x: g.clientX - (y ? y.left : w),
                y: g.clientY - (y ? y.top : w),
              };
            n(h, x, Math.max(g.radiusX, g.radiusY));
          }
          ((c = !1), (u = !1));
        }
      },
      l = () => {
        Ae(this) && ((c = !1), (u = !1));
      };
    let c = !1,
      u = !1;
    (this._clickHandlers.set("click", s),
      this._clickHandlers.set("touchstart", o),
      this._clickHandlers.set("touchmove", r),
      this._clickHandlers.set("touchend", a),
      this._clickHandlers.set("touchcancel", l));
    for (const [h, d] of this._clickHandlers) i.addEventListener(h, d);
  }
  addLifeTime(e) {
    this._lifeTime += e;
  }
  addPath(e, i, n = !1) {
    return !Ae(this) || (!n && this.pathGenerators.has(e))
      ? !1
      : (this.pathGenerators.set(e, i), !0);
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  clearClickHandlers() {
    var e;
    if (Ae(this)) {
      for (const [i, n] of this._clickHandlers)
        (e = this.interactivity.element) == null || e.removeEventListener(i, n);
      this._clickHandlers.clear();
    }
  }
  destroy(e = !0) {
    var i, n;
    if (Ae(this)) {
      (this.stop(),
        this.clearClickHandlers(),
        this.particles.destroy(),
        this.canvas.destroy());
      for (const [, s] of this.effectDrawers)
        (i = s.destroy) == null || i.call(s, this);
      for (const [, s] of this.shapeDrawers)
        (n = s.destroy) == null || n.call(s, this);
      for (const s of this.effectDrawers.keys()) this.effectDrawers.delete(s);
      for (const s of this.shapeDrawers.keys()) this.shapeDrawers.delete(s);
      if ((this._engine.clearPlugins(this), (this.destroyed = !0), e)) {
        const s = this._engine.items,
          o = s.findIndex((a) => a === this);
        o >= 0 && s.splice(o, 1);
      }
      this._engine.dispatchEvent(et.containerDestroyed, { container: this });
    }
  }
  draw(e) {
    if (!Ae(this)) return;
    let i = e;
    const n = (s) => {
      (i && ((this._lastFrameTime = void 0), (i = !1)), this._nextFrame(s));
    };
    this._drawAnimationFrame = requestAnimationFrame((s) => n(s));
  }
  async export(e, i = {}) {
    for (const [, n] of this.plugins) {
      if (!n.export) continue;
      const s = await n.export(e, i);
      if (s.supported) return s.blob;
    }
    xi().error(`${Fe} - Export plugin with type ${e} not found`);
  }
  handleClickMode(e) {
    var i;
    if (Ae(this)) {
      this.particles.handleClickMode(e);
      for (const [, n] of this.plugins)
        (i = n.handleClickMode) == null || i.call(n, e);
    }
  }
  async init() {
    var h, d, f, g;
    if (!Ae(this)) return;
    const e = this._engine.getSupportedEffects();
    for (const p of e) {
      const y = this._engine.getEffectDrawer(p);
      y && this.effectDrawers.set(p, y);
    }
    const i = this._engine.getSupportedShapes();
    for (const p of i) {
      const y = this._engine.getShapeDrawer(p);
      y && this.shapeDrawers.set(p, y);
    }
    (await this.particles.initPlugins(),
      (this._options = an(
        this._engine,
        this,
        this._initialSourceOptions,
        this.sourceOptions,
      )),
      (this.actualOptions = an(this._engine, this, this._options)));
    const n = await this._engine.getAvailablePlugins(this);
    for (const [p, y] of n) this.plugins.set(p, y);
    (this.retina.init(),
      await this.canvas.init(),
      this.updateActualOptions(),
      this.canvas.initBackground(),
      this.canvas.resize());
    const {
      zLayers: s,
      duration: o,
      delay: r,
      fpsLimit: a,
      smooth: l,
    } = this.actualOptions;
    ((this.zLayers = s),
      (this._duration = S(o) * ye),
      (this._delay = S(r) * ye),
      (this._lifeTime = 0));
    const c = 120,
      u = 0;
    ((this.fpsLimit = a > u ? a : c), (this._smooth = l));
    for (const [, p] of this.effectDrawers)
      await ((h = p.init) == null ? void 0 : h.call(p, this));
    for (const [, p] of this.shapeDrawers)
      await ((d = p.init) == null ? void 0 : d.call(p, this));
    for (const [, p] of this.plugins)
      await ((f = p.init) == null ? void 0 : f.call(p));
    (this._engine.dispatchEvent(et.containerInit, { container: this }),
      await this.particles.init(),
      this.particles.setDensity());
    for (const [, p] of this.plugins)
      (g = p.particlesSetup) == null || g.call(p);
    this._engine.dispatchEvent(et.particlesSetup, { container: this });
  }
  async loadTheme(e) {
    Ae(this) && ((this._currentTheme = e), await this.refresh());
  }
  pause() {
    var e;
    if (
      Ae(this) &&
      (this._drawAnimationFrame !== void 0 &&
        (cancelAnimationFrame(this._drawAnimationFrame),
        delete this._drawAnimationFrame),
      !this._paused)
    ) {
      for (const [, i] of this.plugins) (e = i.pause) == null || e.call(i);
      (this.pageHidden || (this._paused = !0),
        this._engine.dispatchEvent(et.containerPaused, { container: this }));
    }
  }
  play(e) {
    if (!Ae(this)) return;
    const i = this._paused || e;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = !1;
      return;
    }
    if ((this._paused && (this._paused = !1), i))
      for (const [, n] of this.plugins) n.play && n.play();
    (this._engine.dispatchEvent(et.containerPlay, { container: this }),
      this.draw(i ?? !1));
  }
  async refresh() {
    if (Ae(this)) return (this.stop(), this.start());
  }
  async reset(e) {
    if (Ae(this))
      return (
        (this._initialSourceOptions = e),
        (this._sourceOptions = e),
        (this._options = an(
          this._engine,
          this,
          this._initialSourceOptions,
          this.sourceOptions,
        )),
        (this.actualOptions = an(this._engine, this, this._options)),
        this.refresh()
      );
  }
  async start() {
    !Ae(this) ||
      this.started ||
      (await this.init(),
      (this.started = !0),
      await new Promise((e) => {
        const i = async () => {
          var n;
          (this._eventListeners.addListeners(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.observe(this.interactivity.element));
          for (const [, s] of this.plugins)
            await ((n = s.start) == null ? void 0 : n.call(s));
          (this._engine.dispatchEvent(et.containerStarted, { container: this }),
            this.play(),
            e());
        };
        this._delayTimeout = setTimeout(() => void i(), this._delay);
      }));
  }
  stop() {
    var e;
    if (!(!Ae(this) || !this.started)) {
      (this._delayTimeout &&
        (clearTimeout(this._delayTimeout), delete this._delayTimeout),
        (this._firstStart = !0),
        (this.started = !1),
        this._eventListeners.removeListeners(),
        this.pause(),
        this.particles.clear(),
        this.canvas.stop(),
        this.interactivity.element instanceof HTMLElement &&
          this._intersectionObserver &&
          this._intersectionObserver.unobserve(this.interactivity.element));
      for (const [, i] of this.plugins) (e = i.stop) == null || e.call(i);
      for (const i of this.plugins.keys()) this.plugins.delete(i);
      ((this._sourceOptions = this._options),
        this._engine.dispatchEvent(et.containerStopped, { container: this }));
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const e = this.actualOptions.setResponsive(
      this.canvas.size.width,
      this.retina.pixelRatio,
      this._options,
    );
    return (
      this.actualOptions.setTheme(this._currentTheme),
      this._responsiveMaxWidth === e ? !1 : ((this._responsiveMaxWidth = e), !0)
    );
  }
}
class Om {
  constructor() {
    this._listeners = new Map();
  }
  addEventListener(e, i) {
    this.removeEventListener(e, i);
    let n = this._listeners.get(e);
    (n || ((n = []), this._listeners.set(e, n)), n.push(i));
  }
  dispatchEvent(e, i) {
    const n = this._listeners.get(e);
    n == null || n.forEach((s) => s(i));
  }
  hasEventListener(e) {
    return !!this._listeners.get(e);
  }
  removeAllEventListeners(e) {
    e ? this._listeners.delete(e) : (this._listeners = new Map());
  }
  removeEventListener(e, i) {
    const n = this._listeners.get(e);
    if (!n) return;
    const s = n.length,
      o = n.indexOf(i);
    if (o < 0) return;
    const a = 1;
    s === a ? this._listeners.delete(e) : n.splice(o, a);
  }
}
async function cr(t, e, i, n = !1) {
  let s = e.get(t);
  return (
    (!s || n) &&
      ((s = await Promise.all([...i.values()].map((o) => o(t)))), e.set(t, s)),
    s
  );
}
async function Tm(t) {
  const e = Re(t.url, t.index);
  if (!e) return t.fallback;
  const i = await fetch(e);
  return i.ok
    ? await i.json()
    : (xi().error(`${Fe} ${i.status} while retrieving config file`),
      t.fallback);
}
const kh = "true",
  zl = "false",
  ur = "canvas",
  Am = (t) => {
    let e;
    if (t instanceof HTMLCanvasElement || t.tagName.toLowerCase() === ur)
      ((e = t), e.dataset[Ni] || (e.dataset[Ni] = zl));
    else {
      const n = t.getElementsByTagName(ur);
      n.length
        ? ((e = n[0]), (e.dataset[Ni] = zl))
        : ((e = document.createElement(ur)),
          (e.dataset[Ni] = kh),
          t.appendChild(e));
    }
    const i = "100%";
    return (
      e.style.width || (e.style.width = i),
      e.style.height || (e.style.height = i),
      e
    );
  },
  Em = (t, e) => {
    let i = e ?? document.getElementById(t);
    return (
      i ||
      ((i = document.createElement("div")),
      (i.id = t),
      (i.dataset[Ni] = kh),
      document.body.append(i),
      i)
    );
  };
class km {
  constructor() {
    ((this._configs = new Map()),
      (this._domArray = []),
      (this._eventDispatcher = new Om()),
      (this._initialized = !1),
      (this.plugins = []),
      (this._initializers = {
        interactors: new Map(),
        movers: new Map(),
        updaters: new Map(),
      }),
      (this.interactors = new Map()),
      (this.movers = new Map()),
      (this.updaters = new Map()),
      (this.presets = new Map()),
      (this.effectDrawers = new Map()),
      (this.shapeDrawers = new Map()),
      (this.pathGenerators = new Map()));
  }
  get configs() {
    const e = {};
    for (const [i, n] of this._configs) e[i] = n;
    return e;
  }
  get items() {
    return this._domArray;
  }
  get version() {
    return "3.4.0";
  }
  addConfig(e) {
    const i = e.key ?? e.name ?? "default";
    (this._configs.set(i, e),
      this._eventDispatcher.dispatchEvent(et.configAdded, {
        data: { name: i, config: e },
      }));
  }
  async addEffect(e, i, n = !0) {
    (Pe(e, (s) => {
      this.getEffectDrawer(s) || this.effectDrawers.set(s, i);
    }),
      await this.refresh(n));
  }
  addEventListener(e, i) {
    this._eventDispatcher.addEventListener(e, i);
  }
  async addInteractor(e, i, n = !0) {
    (this._initializers.interactors.set(e, i), await this.refresh(n));
  }
  async addMover(e, i, n = !0) {
    (this._initializers.movers.set(e, i), await this.refresh(n));
  }
  async addParticleUpdater(e, i, n = !0) {
    (this._initializers.updaters.set(e, i), await this.refresh(n));
  }
  async addPathGenerator(e, i, n = !0) {
    (this.getPathGenerator(e) || this.pathGenerators.set(e, i),
      await this.refresh(n));
  }
  async addPlugin(e, i = !0) {
    (this.getPlugin(e.id) || this.plugins.push(e), await this.refresh(i));
  }
  async addPreset(e, i, n = !1, s = !0) {
    ((n || !this.getPreset(e)) && this.presets.set(e, i),
      await this.refresh(s));
  }
  async addShape(e, i = !0) {
    for (const n of e.validTypes)
      this.getShapeDrawer(n) || this.shapeDrawers.set(n, e);
    await this.refresh(i);
  }
  clearPlugins(e) {
    (this.updaters.delete(e),
      this.movers.delete(e),
      this.interactors.delete(e));
  }
  dispatchEvent(e, i) {
    this._eventDispatcher.dispatchEvent(e, i);
  }
  dom() {
    return this.items;
  }
  domItem(e) {
    return this.item(e);
  }
  async getAvailablePlugins(e) {
    const i = new Map();
    for (const n of this.plugins)
      n.needsPlugin(e.actualOptions) && i.set(n.id, await n.getPlugin(e));
    return i;
  }
  getEffectDrawer(e) {
    return this.effectDrawers.get(e);
  }
  async getInteractors(e, i = !1) {
    return cr(e, this.interactors, this._initializers.interactors, i);
  }
  async getMovers(e, i = !1) {
    return cr(e, this.movers, this._initializers.movers, i);
  }
  getPathGenerator(e) {
    return this.pathGenerators.get(e);
  }
  getPlugin(e) {
    return this.plugins.find((i) => i.id === e);
  }
  getPreset(e) {
    return this.presets.get(e);
  }
  getShapeDrawer(e) {
    return this.shapeDrawers.get(e);
  }
  getSupportedEffects() {
    return this.effectDrawers.keys();
  }
  getSupportedShapes() {
    return this.shapeDrawers.keys();
  }
  async getUpdaters(e, i = !1) {
    return cr(e, this.updaters, this._initializers.updaters, i);
  }
  init() {
    this._initialized || (this._initialized = !0);
  }
  item(e) {
    const { items: i } = this,
      n = i[e];
    if (!n || n.destroyed) {
      i.splice(e, 1);
      return;
    }
    return n;
  }
  async load(e) {
    var g;
    const n =
        e.id ??
        ((g = e.element) == null ? void 0 : g.id) ??
        `tsparticles${Math.floor(D() * 1e4)}`,
      { index: s, url: o } = e,
      r = o ? await Tm({ fallback: e.options, url: o, index: s }) : e.options,
      a = Re(r, s),
      { items: l } = this,
      c = l.findIndex((p) => p.id.description === n),
      u = 0,
      h = new Cm(this, n, a);
    if (c >= u) {
      const p = this.item(c),
        y = 1,
        w = 0,
        x = p ? y : w;
      (p && !p.destroyed && p.destroy(!1), l.splice(c, x, h));
    } else l.push(h);
    const d = Em(n, e.element),
      f = Am(d);
    return (h.canvas.loadCanvas(f), await h.start(), h);
  }
  loadOptions(e, i) {
    this.plugins.forEach((n) => {
      var s;
      return (s = n.loadOptions) == null ? void 0 : s.call(n, e, i);
    });
  }
  loadParticlesOptions(e, i, ...n) {
    const s = this.updaters.get(e);
    s &&
      s.forEach((o) => {
        var r;
        return (r = o.loadOptions) == null ? void 0 : r.call(o, i, ...n);
      });
  }
  async refresh(e = !0) {
    e && (await Promise.all(this.items.map((i) => i.refresh())));
  }
  removeEventListener(e, i) {
    this._eventDispatcher.removeEventListener(e, i);
  }
  setOnClickHandler(e) {
    const { items: i } = this;
    if (!i.length)
      throw new Error(
        `${Fe} can only set click handlers after calling tsParticles.load()`,
      );
    i.forEach((n) => n.addClickHandler(e));
  }
}
var fn;
(function (t) {
  ((t[(t.h = 1)] = "h"),
    (t[(t.s = 2)] = "s"),
    (t[(t.l = 3)] = "l"),
    (t[(t.a = 5)] = "a"));
})(fn || (fn = {}));
class Mm {
  constructor() {
    ((this.key = "hsl"), (this.stringPrefix = "hsl"));
  }
  handleColor(e) {
    const i = e.value,
      n = i.hsl ?? e.value;
    if (n.h !== void 0 && n.s !== void 0 && n.l !== void 0) return kn(n);
  }
  handleRangeColor(e) {
    const i = e.value,
      n = i.hsl ?? e.value;
    if (n.h !== void 0 && n.l !== void 0)
      return kn({ h: S(n.h), l: S(n.l), s: S(n.s) });
  }
  parseString(e) {
    if (!e.startsWith("hsl")) return;
    const i =
        /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = i.exec(e),
      s = 4,
      o = 1,
      r = 10;
    return n
      ? hg({
          a: n.length > s ? ma(n[fn.a]) : o,
          h: parseInt(n[fn.h], r),
          l: parseInt(n[fn.l], r),
          s: parseInt(n[fn.s], r),
        })
      : void 0;
  }
}
var pn;
(function (t) {
  ((t[(t.r = 1)] = "r"),
    (t[(t.g = 2)] = "g"),
    (t[(t.b = 3)] = "b"),
    (t[(t.a = 5)] = "a"));
})(pn || (pn = {}));
class Im {
  constructor() {
    ((this.key = "rgb"), (this.stringPrefix = "rgb"));
  }
  handleColor(e) {
    const i = e.value,
      n = i.rgb ?? e.value;
    if (n.r !== void 0) return n;
  }
  handleRangeColor(e) {
    const i = e.value,
      n = i.rgb ?? e.value;
    if (n.r !== void 0) return { r: S(n.r), g: S(n.g), b: S(n.b) };
  }
  parseString(e) {
    if (!e.startsWith(this.stringPrefix)) return;
    const i =
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = i.exec(e),
      s = 10;
    return n
      ? {
          a: n.length > 4 ? ma(n[pn.a]) : 1,
          b: parseInt(n[pn.b], s),
          g: parseInt(n[pn.g], s),
          r: parseInt(n[pn.r], s),
        }
      : void 0;
  }
}
function Rm() {
  const t = new Im(),
    e = new Mm();
  (Fr(t), Fr(e));
  const i = new km();
  return (i.init(), i);
}
class lt {
  constructor(e) {
    ((this.type = Rn.external), (this.container = e));
  }
}
class Ln {
  constructor(e) {
    ((this.type = Rn.particles), (this.container = e));
  }
}
var Ee;
(function (t) {
  ((t.clockwise = "clockwise"),
    (t.counterClockwise = "counter-clockwise"),
    (t.random = "random"));
})(Ee || (Ee = {}));
var co;
(function (t) {
  ((t.linear = "linear"), (t.radial = "radial"), (t.random = "random"));
})(co || (co = {}));
var de;
(function (t) {
  ((t.easeInBack = "ease-in-back"),
    (t.easeInCirc = "ease-in-circ"),
    (t.easeInCubic = "ease-in-cubic"),
    (t.easeInLinear = "ease-in-linear"),
    (t.easeInQuad = "ease-in-quad"),
    (t.easeInQuart = "ease-in-quart"),
    (t.easeInQuint = "ease-in-quint"),
    (t.easeInExpo = "ease-in-expo"),
    (t.easeInSine = "ease-in-sine"),
    (t.easeOutBack = "ease-out-back"),
    (t.easeOutCirc = "ease-out-circ"),
    (t.easeOutCubic = "ease-out-cubic"),
    (t.easeOutLinear = "ease-out-linear"),
    (t.easeOutQuad = "ease-out-quad"),
    (t.easeOutQuart = "ease-out-quart"),
    (t.easeOutQuint = "ease-out-quint"),
    (t.easeOutExpo = "ease-out-expo"),
    (t.easeOutSine = "ease-out-sine"),
    (t.easeInOutBack = "ease-in-out-back"),
    (t.easeInOutCirc = "ease-in-out-circ"),
    (t.easeInOutCubic = "ease-in-out-cubic"),
    (t.easeInOutLinear = "ease-in-out-linear"),
    (t.easeInOutQuad = "ease-in-out-quad"),
    (t.easeInOutQuart = "ease-in-out-quart"),
    (t.easeInOutQuint = "ease-in-out-quint"),
    (t.easeInOutExpo = "ease-in-out-expo"),
    (t.easeInOutSine = "ease-in-out-sine"));
})(de || (de = {}));
const uo = Rm();
en() || (window.tsParticles = uo);
const Vm = 120,
  Lm = 0.5,
  zm = 100,
  Gm = 3;
class ho {
  static init(e) {
    var o;
    const i = new ho(),
      n = e.selector;
    if (!n) throw new Error("No selector provided");
    const s = document.querySelector(n);
    if (!s) throw new Error("No element found for selector");
    return (
      uo
        .load({
          element: s,
          id: n.replace(".", "").replace("!", ""),
          options: {
            fullScreen: { enable: !1 },
            particles: {
              color: { value: e.color ?? "!000000" },
              links: {
                color: "random",
                distance: e.minDistance ?? Vm,
                enable: e.connectParticles ?? !1,
              },
              move: { enable: !0, speed: e.speed ?? Lm },
              number: { value: e.maxParticles ?? zm },
              size: { value: { min: 1, max: e.sizeVariations ?? Gm } },
            },
            responsive:
              (o = e.responsive) == null
                ? void 0
                : o.map((r) => {
                    var a, l, c, u, h;
                    return {
                      maxWidth: r.breakpoint,
                      options: {
                        particles: {
                          color: {
                            value: (a = r.options) == null ? void 0 : a.color,
                          },
                          links: {
                            distance:
                              (l = r.options) == null ? void 0 : l.minDistance,
                            enable:
                              (c = r.options) == null
                                ? void 0
                                : c.connectParticles,
                          },
                          number: { value: e.maxParticles },
                          move: {
                            enable: !0,
                            speed: (u = r.options) == null ? void 0 : u.speed,
                          },
                          size: {
                            value:
                              (h = r.options) == null
                                ? void 0
                                : h.sizeVariations,
                          },
                        },
                      },
                    };
                  }),
          },
        })
        .then((r) => {
          i._container = r;
        }),
      i
    );
  }
  destroy() {
    const e = this._container;
    e == null || e.destroy();
  }
  pauseAnimation() {
    const e = this._container;
    e == null || e.pause();
  }
  resumeAnimation() {
    const e = this._container;
    e == null || e.play();
  }
}
const $m = 0,
  Dm = 0,
  Fm = 3,
  Hm = {
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4,
          opacity: 1,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: !1,
  },
  Bm = (t) => {
    const e = (n, s) => {
      const o = fe(Hm, s);
      return t.load({
        id: n,
        options: {
          fullScreen: { enable: !1 },
          detectRetina: o.retina_detect,
          smooth: !0,
          interactivity: {
            detectsOn: o.interactivity.detect_on,
            events: {
              onHover: {
                enable: o.interactivity.events.onhover.enable,
                mode: o.interactivity.events.onhover.mode,
              },
              onClick: {
                enable: o.interactivity.events.onclick.enable,
                mode: o.interactivity.events.onclick.mode,
              },
              resize: { enable: o.interactivity.events.resize },
            },
            modes: {
              grab: {
                distance: o.interactivity.modes.grab.distance,
                links: {
                  opacity: o.interactivity.modes.grab.line_linked.opacity,
                },
              },
              bubble: {
                distance: o.interactivity.modes.bubble.distance,
                size: o.interactivity.modes.bubble.size,
                duration: o.interactivity.modes.bubble.duration,
                opacity: o.interactivity.modes.bubble.opacity,
                speed: o.interactivity.modes.bubble.speed,
              },
              repulse: {
                distance: o.interactivity.modes.repulse.distance,
                duration: o.interactivity.modes.repulse.duration,
              },
              push: { quantity: o.interactivity.modes.push.particles_nb },
              remove: { quantity: o.interactivity.modes.remove.particles_nb },
            },
          },
          particles: {
            collisions: { enable: o.particles.move.bounce },
            number: {
              value: o.particles.number.value,
              density: {
                enable: o.particles.number.density.enable,
                width: o.particles.number.density.value_area,
              },
            },
            color: { value: o.particles.color.value },
            stroke: {
              width: o.particles.shape.stroke.width,
              color: { value: o.particles.shape.stroke.color },
            },
            shape: {
              type: o.particles.shape.type,
              options: {
                polygon: { sides: o.particles.shape.polygon.nb_sides },
                image: {
                  src: o.particles.shape.image.src,
                  width: o.particles.shape.image.width,
                  height: o.particles.shape.image.height,
                },
              },
            },
            opacity: {
              value: o.particles.opacity.random
                ? {
                    min: o.particles.opacity.anim.enable
                      ? o.particles.opacity.anim.opacity_min
                      : $m,
                    max: o.particles.opacity.value,
                  }
                : o.particles.opacity.value,
              animation: {
                enable: o.particles.opacity.anim.enable,
                speed: o.particles.opacity.anim.speed,
                sync: o.particles.opacity.anim.sync,
              },
            },
            size: {
              value: o.particles.size.random
                ? {
                    min: o.particles.size.anim.enable
                      ? o.particles.size.anim.size_min
                      : Dm,
                    max: o.particles.size.value,
                  }
                : o.particles.size.value,
              animation: {
                enable: o.particles.size.anim.enable,
                speed: o.particles.size.anim.speed,
                sync: o.particles.size.anim.sync,
              },
            },
            links: {
              enable: o.particles.line_linked.enable,
              distance: o.particles.line_linked.distance,
              color: o.particles.line_linked.color,
              opacity: o.particles.line_linked.opacity,
              width: o.particles.line_linked.width,
            },
            move: {
              enable: o.particles.move.enable,
              speed: o.particles.move.speed / Fm,
              direction: o.particles.move.direction,
              random: o.particles.move.random,
              straight: o.particles.move.straight,
              outModes: o.particles.move.out_mode,
              attract: {
                enable: o.particles.move.attract.enable,
                rotate: {
                  x: o.particles.move.attract.rotateX,
                  y: o.particles.move.attract.rotateY,
                },
              },
            },
          },
        },
      });
    };
    ((e.load = (n, s, o) => {
      t.load({ id: n, url: s })
        .then((r) => {
          r && o(r);
        })
        .catch(() => {
          o(void 0);
        });
    }),
      (e.setOnClickHandler = (n) => {
        t.setOnClickHandler(n);
      }));
    const i = t.dom();
    return { particlesJS: e, pJSDom: i };
  },
  qm = (t) => {
    const { particlesJS: e, pJSDom: i } = Bm(t);
    return (
      (window.particlesJS = e),
      (window.pJSDom = i),
      (window.Particles = ho),
      { particlesJS: e, pJSDom: i, Particles: ho }
    );
  },
  Nm = 2,
  Um = 0.5,
  jm = 0.2,
  Wm = 0.5,
  Je = 0.5,
  hr = { x: 0, y: 0 };
function Qm(t) {
  const { context: e, particle: i, radius: n } = t,
    s = n * Nm,
    o = i.heightFactor ?? Um,
    r = i.headWidthFactor ?? jm,
    a = i.bodyHeightFactor ?? Wm,
    l = s * o,
    c = s * r,
    u = l * a;
  (e.moveTo(-s * Je, hr.y),
    e.lineTo(-s * Je, -u * Je),
    e.lineTo(s * Je - c, -u * Je),
    e.lineTo(s * Je - c, -l * Je),
    e.lineTo(s * Je + c, hr.y),
    e.lineTo(s * Je - c, l * Je),
    e.lineTo(s * Je - c, u * Je),
    e.lineTo(-s * Je, u * Je),
    e.lineTo(-s * Je, hr.y));
}
const Km = 0.5,
  Ym = 0.2,
  Zm = 0.5;
class Jm {
  constructor() {
    this.validTypes = ["arrow"];
  }
  draw(e) {
    Qm(e);
  }
  particleInit(e, i) {
    const n = i.shapeData;
    ((i.heightFactor = S((n == null ? void 0 : n.heightFactor) ?? Km)),
      (i.headWidthFactor = S((n == null ? void 0 : n.headWidthFactor) ?? Ym)),
      (i.bodyHeightFactor = S(
        (n == null ? void 0 : n.bodyHeightFactor) ?? Zm,
      )));
  }
}
async function Xm(t, e = !0) {
  await t.addShape(new Jm(), e);
}
const e_ = 3,
  t_ = 0,
  i_ = 2,
  n_ = Math.PI * i_;
class s_ {
  draw(e) {
    const { context: i, radius: n } = e,
      s = n / e_;
    (i.beginPath(),
      i.arc(s, -s, s, t_, n_, !1),
      i.closePath(),
      (i.fillStyle = "#fff9"),
      i.fill());
  }
}
async function o_(t, e = !0) {
  await t.addEffect("bubble", new s_(), e);
}
class r_ {
  constructor() {
    ((this.color = !0), (this.opacity = !1));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = e.color),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
const a_ = 0;
class l_ {
  constructor() {
    ((this.filter = (e) => e.a > a_), (this.offset = 4));
  }
  load(e) {
    if (e) {
      if (e.filter !== void 0)
        if (it(e.filter)) {
          if (Object.hasOwn(window, e.filter)) {
            const i = window[e.filter];
            zo(i) && (this.filter = i);
          }
        } else this.filter = e.filter;
      e.offset !== void 0 && (this.offset = e.offset);
    }
  }
}
class c_ {
  constructor() {
    this.src = "";
  }
  load(e) {
    e && e.src !== void 0 && (this.src = e.src);
  }
}
class u_ {
  constructor() {
    ((this.family = "sans-serif"), (this.size = 100));
  }
  load(e) {
    e &&
      (e.family !== void 0 && (this.family = e.family),
      e.size !== void 0 && (this.size = e.size),
      e.style !== void 0 && (this.style = e.style),
      e.variant !== void 0 && (this.variant = e.variant),
      e.weight !== void 0 && (this.weight = e.weight));
  }
}
class h_ {
  constructor() {
    ((this.separator = `
`),
      (this.spacing = 10));
  }
  load(e) {
    e &&
      (e.separator !== void 0 && (this.separator = e.separator),
      e.spacing !== void 0 && (this.spacing = e.spacing));
  }
}
class d_ {
  constructor() {
    ((this.color = "#000000"),
      (this.font = new u_()),
      (this.lines = new h_()),
      (this.text = ""));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = e.color),
      this.font.load(e.font),
      this.lines.load(e.lines),
      e.text !== void 0 && (this.text = e.text));
  }
}
class f_ {
  constructor() {
    ((this.enable = !1),
      (this.override = new r_()),
      (this.pixels = new l_()),
      (this.position = { x: 50, y: 50 }),
      (this.scale = 1));
  }
  load(e) {
    e &&
      (e.element !== void 0 &&
        e.element instanceof HTMLCanvasElement &&
        (this.element = e.element),
      e.enable !== void 0 && (this.enable = e.enable),
      e.image &&
        (this.image || (this.image = new c_()), this.image.load(e.image)),
      this.pixels.load(e.pixels),
      e.position &&
        (this.position = {
          x: e.position.x ?? this.position.x,
          y: e.position.y ?? this.position.y,
        }),
      this.override.load(e.override),
      e.scale !== void 0 && (this.scale = e.scale),
      e.selector !== void 0 && (this.selector = e.selector),
      e.text && (this.text || (this.text = new d_()), this.text.load(e.text)));
  }
}
const Gl = 0.5,
  Xt = { x: 0, y: 0 },
  p_ = 0;
function g_(t, e, i, n, s, o) {
  const { height: r, width: a } = e,
    l = r * a,
    c = y_(b_(l)),
    u = Math.min(l, t.actualOptions.particles.number.value),
    h = t.canvas.size;
  let d = 0;
  const f = {
    x: (h.width * i.x) / ae - a * n * Gl,
    y: (h.height * i.y) / ae - r * n * Gl,
  };
  for (; d < u && c.length; ) {
    const p = c.pop() ?? 0,
      y = { x: p % a, y: Math.floor(p / a) },
      w = e.pixels[y.y][y.x];
    if (!o(w)) continue;
    const C = { x: y.x * n + f.x, y: y.y * n + f.y },
      v = {};
    (s.color && (v.color = { value: w }),
      s.opacity && (v.opacity = { value: w.a }),
      t.particles.addParticle(C, v),
      d++);
  }
}
function Oa(t, e, i, n = !0) {
  const s = t.getImageData(Xt.x, Xt.y, e.width, e.height).data;
  n && t.clearRect(Xt.x, Xt.y, e.width, e.height);
  const o = [];
  for (let r = 0; r < s.length; r += i) {
    const a = r / i,
      l = { x: a % e.width, y: Math.floor(a / e.width) };
    o[l.y] || (o[l.y] = []);
    const c = { r: 0, g: 1, b: 2, a: 3 },
      u = 255;
    o[l.y][l.x] = {
      r: s[r + c.r],
      g: s[r + c.g],
      b: s[r + c.b],
      a: s[r + c.a] / u,
    };
  }
  return {
    pixels: o,
    width: Math.min(...o.map((r) => r.length)),
    height: o.length,
  };
}
function m_(t, e) {
  const i = new Image();
  i.crossOrigin = "Anonymous";
  const n = new Promise((s, o) => {
    ((i.onerror = o),
      (i.onload = () => {
        const r = document.createElement("canvas");
        ((r.width = i.width), (r.height = i.height));
        const a = r.getContext("2d");
        if (!a) return o(new Error(`${Fe} Could not get canvas context`));
        (a.drawImage(
          i,
          Xt.x,
          Xt.y,
          i.width,
          i.height,
          Xt.x,
          Xt.y,
          r.width,
          r.height,
        ),
          s(Oa(a, r, e)));
      }));
  });
  return ((i.src = t), n);
}
function __(t, e) {
  const i = document.createElement("canvas"),
    n = i.getContext("2d"),
    { font: s, text: o, lines: r, color: a } = t;
  if (!o || !n) return;
  const l = o.split(r.separator),
    c = je(s.size) ? `${s.size}px` : s.size,
    u = [];
  let h = 0,
    d = 0;
  for (const g of l) {
    n.font = `${s.style ?? ""} ${s.variant ?? ""} ${s.weight ?? ""} ${c} ${s.family}`;
    const p = n.measureText(g),
      y = {
        measure: p,
        text: g,
        height: p.actualBoundingBoxAscent + p.actualBoundingBoxDescent,
        width: p.width,
      };
    ((h = Math.max(h || p_, y.width)), (d += y.height + r.spacing), u.push(y));
  }
  ((i.width = h), (i.height = d));
  let f = 0;
  for (const g of u)
    ((n.font = `${s.style ?? ""} ${s.variant ?? ""} ${s.weight ?? ""} ${c} ${s.family}`),
      (n.fillStyle = a),
      n.fillText(g.text, Xt.x, f + g.measure.actualBoundingBoxAscent),
      (f += g.height + r.spacing));
  return Oa(n, i, e);
}
function y_(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const s = Math.floor(D() * n);
    [t[n], t[s]] = [t[s], t[n]];
  }
  return t;
}
const b_ = (t) => [...Array(t).keys()];
class w_ {
  constructor(e) {
    this._container = e;
  }
  async init() {
    const e = this._container,
      i = e.actualOptions.canvasMask;
    if (!(i != null && i.enable)) return;
    let n = { pixels: [], height: 0, width: 0 };
    const s = i.pixels.offset;
    if (i.image) {
      const o = i.image.src;
      if (!o) return;
      n = await m_(o, s);
    } else if (i.text) {
      const o = i.text,
        r = __(o, s);
      if (!r) return;
      n = r;
    } else if (i.element ?? i.selector) {
      const o = i.element ?? (i.selector && document.querySelector(i.selector));
      if (!o) return;
      const r = o.getContext("2d");
      if (!r) return;
      n = Oa(r, o, s);
    }
    g_(e, n, i.position, i.scale, i.override, i.pixels.filter);
  }
}
class v_ {
  constructor() {
    this.id = "canvasMask";
  }
  getPlugin(e) {
    return Promise.resolve(new w_(e));
  }
  loadOptions(e, i) {
    if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
    let n = e.canvasMask;
    ((n == null ? void 0 : n.load) === void 0 && (e.canvasMask = n = new f_()),
      n.load(i == null ? void 0 : i.canvasMask));
  }
  needsPlugin(e) {
    var i;
    return (
      ((i = e == null ? void 0 : e.canvasMask) == null ? void 0 : i.enable) ??
      !1
    );
  }
}
async function x_(t, e = !0) {
  await t.addPlugin(new v_(), e);
}
function Do(t, e) {
  if (!e.segments.length || !e.segments[0].values.length) return;
  const { context: i, radius: n } = t;
  i.moveTo(e.segments[0].values[0].x * n, e.segments[0].values[0].y * n);
  for (const s of e.segments)
    i.bezierCurveTo(
      s.values[1].x * n,
      s.values[1].y * n,
      s.values[2].x * n,
      s.values[2].y * n,
      s.values[3].x * n,
      s.values[3].y * n,
    );
  for (let s = e.segments.length - 1; s >= 0; s--) {
    const o = e.segments[s];
    i.bezierCurveTo(
      -o.values[2].x * n,
      o.values[2].y * n,
      -o.values[1].x * n,
      o.values[1].y * n,
      -o.values[0].x * n,
      o.values[0].y * n,
    );
  }
}
const T = 1 / 2,
  Fo = {
    heart: {
      segments: [
        {
          values: [
            { x: 0, y: T },
            { x: 0, y: T },
            { x: T, y: 0 },
            { x: T, y: -T / 2 },
          ],
        },
        {
          values: [
            { x: T, y: -T / 2 },
            { x: T, y: -T / 2 },
            { x: T, y: -T },
            { x: T / 2, y: -T },
          ],
        },
        {
          values: [
            { x: T / 2, y: -T },
            { x: T / 2, y: -T },
            { x: 0, y: -T },
            { x: 0, y: -T / 2 },
          ],
        },
      ],
    },
    diamond: {
      segments: [
        {
          values: [
            { x: 0, y: T },
            { x: 0, y: T },
            { x: (3 * T) / 4, y: 0 },
            { x: (3 * T) / 4, y: 0 },
          ],
        },
        {
          values: [
            { x: (3 * T) / 4, y: 0 },
            { x: (3 * T) / 4, y: 0 },
            { x: 0, y: -T },
            { x: 0, y: -T },
          ],
        },
      ],
    },
    club: {
      segments: [
        {
          values: [
            { x: 0, y: -T },
            { x: 0, y: -T },
            { x: T / 2, y: -T },
            { x: T / 2, y: -T / 2 },
          ],
        },
        {
          values: [
            { x: T / 2, y: -T / 2 },
            { x: T / 2, y: -T / 2 },
            { x: T, y: -T / 2 },
            { x: T, y: 0 },
          ],
        },
        {
          values: [
            { x: T, y: 0 },
            { x: T, y: 0 },
            { x: T, y: T / 2 },
            { x: T / 2, y: T / 2 },
          ],
        },
        {
          values: [
            { x: T / 2, y: T / 2 },
            { x: T / 2, y: T / 2 },
            { x: T / 8, y: T / 2 },
            { x: T / 8, y: T / 8 },
          ],
        },
        {
          values: [
            { x: T / 8, y: T / 8 },
            { x: T / 8, y: T / 2 },
            { x: T / 2, y: T },
            { x: T / 2, y: T },
          ],
        },
        {
          values: [
            { x: T / 2, y: T },
            { x: T / 2, y: T },
            { x: 0, y: T },
            { x: 0, y: T },
          ],
        },
      ],
    },
    spade: {
      segments: [
        {
          values: [
            { x: 0, y: -T },
            { x: 0, y: -T },
            { x: T, y: -T / 2 },
            { x: T, y: 0 },
          ],
        },
        {
          values: [
            { x: T, y: 0 },
            { x: T, y: 0 },
            { x: T, y: T / 2 },
            { x: T / 2, y: T / 2 },
          ],
        },
        {
          values: [
            { x: T / 2, y: T / 2 },
            { x: T / 2, y: T / 2 },
            { x: T / 8, y: T / 2 },
            { x: T / 8, y: T / 8 },
          ],
        },
        {
          values: [
            { x: T / 8, y: T / 8 },
            { x: T / 8, y: T / 2 },
            { x: T / 2, y: T },
            { x: T / 2, y: T },
          ],
        },
        {
          values: [
            { x: T / 2, y: T },
            { x: T / 2, y: T },
            { x: 0, y: T },
            { x: 0, y: T },
          ],
        },
      ],
    },
  };
class S_ {
  constructor() {
    this.validTypes = ["club", "clubs"];
  }
  draw(e) {
    Do(e, Fo.club);
  }
}
class P_ {
  constructor() {
    this.validTypes = ["diamond", "diamonds"];
  }
  draw(e) {
    Do(e, Fo.diamond);
  }
}
let C_ = class {
  constructor() {
    this.validTypes = ["heart", "hearts"];
  }
  draw(e) {
    Do(e, Fo.heart);
  }
};
class O_ {
  constructor() {
    this.validTypes = ["spade", "spades"];
  }
  draw(e) {
    Do(e, Fo.spade);
  }
}
async function T_(t, e = !0) {
  (await t.addShape(new O_(), e),
    await t.addShape(new C_(), e),
    await t.addShape(new P_(), e),
    await t.addShape(new S_(), e));
}
const Mh = 2,
  qr = Math.PI * Mh,
  A_ = 0,
  dr = { x: 0, y: 0 },
  $l = 0.005;
function E_(t) {
  const { context: e, particle: i, radius: n } = t;
  if (
    i.cogHoleRadius === void 0 ||
    i.cogInnerRadius === void 0 ||
    i.cogInnerTaper === void 0 ||
    i.cogNotches === void 0 ||
    i.cogOuterTaper === void 0
  )
    return;
  const s = (n * i.cogHoleRadius) / ae;
  ((e.globalCompositeOperation = "destination-out"),
    e.beginPath(),
    e.moveTo(s, dr.y),
    e.arc(dr.x, dr.y, s, A_, qr),
    e.closePath(),
    e.fill(),
    (e.globalCompositeOperation = "source-over"));
}
function k_(t) {
  const { context: e, particle: i, radius: n } = t;
  if (
    i.cogHoleRadius === void 0 ||
    i.cogInnerRadius === void 0 ||
    i.cogInnerTaper === void 0 ||
    i.cogNotches === void 0 ||
    i.cogOuterTaper === void 0
  )
    return;
  const s = qr / (i.cogNotches * Mh),
    o = s * i.cogInnerTaper * $l,
    r = s * i.cogOuterTaper * $l,
    a = (n * i.cogInnerRadius) / ae;
  let l = s,
    c = !1;
  for (e.moveTo(n * Math.cos(r), n * Math.sin(r)); l <= qr; l += s)
    (c
      ? (e.lineTo(a * Math.cos(l - o), a * Math.sin(l - o)),
        e.lineTo(n * Math.cos(l + r), n * Math.sin(l + r)))
      : (e.lineTo(n * Math.cos(l - r), n * Math.sin(l - r)),
        e.lineTo(a * Math.cos(l + o), a * Math.sin(l + o))),
      (c = !c));
}
const M_ = 44,
  I_ = 72,
  R_ = 35,
  V_ = 7,
  L_ = 50;
class z_ {
  constructor() {
    this.validTypes = ["cog"];
  }
  afterDraw(e) {
    E_(e);
  }
  draw(e) {
    k_(e);
  }
  particleInit(e, i) {
    const n = i.shapeData;
    ((i.cogHoleRadius = S((n == null ? void 0 : n.holeRadius) ?? M_)),
      (i.cogInnerRadius = S((n == null ? void 0 : n.innerRadius) ?? I_)),
      (i.cogInnerTaper = S((n == null ? void 0 : n.innerTaper) ?? R_)),
      (i.cogNotches = S((n == null ? void 0 : n.notches) ?? V_)),
      (i.cogOuterTaper = S((n == null ? void 0 : n.outerTaper) ?? L_)));
  }
}
async function G_(t, e = !0) {
  await t.addShape(new z_(), e);
}
function Ct(t) {
  const e = new Uint32Array(1);
  return ((e[0] = t[0] * 1664525 + 1013904223), e);
}
class $_ {
  constructor() {
    ((this._NORM_2D = 1 / 47),
      (this._SQUISH_2D = (Math.sqrt(3) - 1) / 2),
      (this._STRETCH_2D = (1 / Math.sqrt(3) - 1) / 2),
      (this._base2D = [
        [1, 1, 0, 1, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 2, 1, 1],
      ]),
      (this._gradients2D = [
        5, 2, 2, 5, -5, 2, -2, 5, 5, -2, 2, -5, -5, -2, -2, -5,
      ]),
      (this._lookup = []),
      (this._lookupPairs2D = [
        0, 1, 1, 0, 4, 1, 17, 0, 20, 2, 21, 2, 22, 5, 23, 5, 26, 4, 39, 3, 42,
        4, 43, 3,
      ]),
      (this._p2D = [
        0, 0, 1, -1, 0, 0, -1, 1, 0, 2, 1, 1, 1, 2, 2, 0, 1, 2, 0, 2, 1, 0, 0,
        0,
      ]),
      (this._perm = new Uint8Array(256)),
      (this._perm2D = new Uint8Array(256)));
  }
  noise(e, i) {
    const {
        _gradients2D: n,
        _NORM_2D: s,
        _SQUISH_2D: o,
        _STRETCH_2D: r,
        _lookup: a,
        _perm: l,
        _perm2D: c,
      } = this,
      u = (e + i) * r,
      h = e + u,
      d = i + u,
      f = Math.floor(h),
      g = Math.floor(d),
      p = (f + g) * o,
      y = e - (f + p),
      w = i - (g + p),
      x = h - f,
      C = d - g,
      v = x + C,
      k = (x - C + 1) | (v << 1) | ((v + C) << 2) | ((v + x) << 4);
    let E = 0;
    for (let U = a[k]; U !== void 0; U = U.next) {
      const I = y + U.dx,
        z = w + U.dy,
        q = 2 - I * I - z * z;
      if (q > 0) {
        const W = f + U.xsb,
          R = g + U.ysb,
          ee = l[W & 255],
          Q = c[(ee + R) & 255],
          be = n[Q] * I + n[Q + 1] * z;
        E += q * q * q * q * be;
      }
    }
    return E * s;
  }
  seed(e) {
    const { _p2D: i, _base2D: n, _lookupPairs2D: s } = this,
      o = [];
    for (let l = 0; l < i.length; l += 4) {
      const c = n[i[l]];
      let u = null,
        h = null;
      for (let d = 0; d < c.length; d += 3)
        ((h = this._contribution2D(c[d], c[d + 1], c[d + 2])),
          u === null ? (o[l / 4] = h) : (u.next = h),
          (u = h));
      h && (h.next = this._contribution2D(i[l + 1], i[l + 2], i[l + 3]));
    }
    this._lookup = [];
    for (let l = 0; l < s.length; l += 2) this._lookup[s[l]] = o[s[l + 1]];
    ((this._perm = new Uint8Array(256)), (this._perm2D = new Uint8Array(256)));
    const r = new Uint8Array(256);
    for (let l = 0; l < 256; l++) r[l] = l;
    let a = new Uint32Array(1);
    ((a[0] = e), (a = Ct(Ct(Ct(a)))));
    for (let l = 255; l >= 0; l--) {
      a = Ct(a);
      const c = new Uint32Array(1);
      ((c[0] = (a[0] + 31) % (l + 1)),
        c[0] < 0 && (c[0] += l + 1),
        (this._perm[l] = r[c[0]]),
        (this._perm2D[l] = this._perm[l] & 14),
        (r[c[0]] = r[l]));
    }
  }
  _contribution2D(e, i, n) {
    const { _SQUISH_2D: s } = this;
    return { dx: -i - e * s, dy: -n - e * s, xsb: i, ysb: n };
  }
}
class D_ {
  constructor() {
    ((this._NORM_3D = 1 / 103),
      (this._SQUISH_3D = (Math.sqrt(4) - 1) / 3),
      (this._STRETCH_3D = (1 / Math.sqrt(4) - 1) / 3),
      (this._base3D = [
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 3, 1, 1, 1],
        [
          1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1,
          1,
        ],
      ]),
      (this._gradients3D = [
        -11, 4, 4, -4, 11, 4, -4, 4, 11, 11, 4, 4, 4, 11, 4, 4, 4, 11, -11, -4,
        4, -4, -11, 4, -4, -4, 11, 11, -4, 4, 4, -11, 4, 4, -4, 11, -11, 4, -4,
        -4, 11, -4, -4, 4, -11, 11, 4, -4, 4, 11, -4, 4, 4, -11, -11, -4, -4,
        -4, -11, -4, -4, -4, -11, 11, -4, -4, 4, -11, -4, 4, -4, -11,
      ]),
      (this._lookup = []),
      (this._lookupPairs3D = [
        0, 2, 1, 1, 2, 2, 5, 1, 6, 0, 7, 0, 32, 2, 34, 2, 129, 1, 133, 1, 160,
        5, 161, 5, 518, 0, 519, 0, 546, 4, 550, 4, 645, 3, 647, 3, 672, 5, 673,
        5, 674, 4, 677, 3, 678, 4, 679, 3, 680, 13, 681, 13, 682, 12, 685, 14,
        686, 12, 687, 14, 712, 20, 714, 18, 809, 21, 813, 23, 840, 20, 841, 21,
        1198, 19, 1199, 22, 1226, 18, 1230, 19, 1325, 23, 1327, 22, 1352, 15,
        1353, 17, 1354, 15, 1357, 17, 1358, 16, 1359, 16, 1360, 11, 1361, 10,
        1362, 11, 1365, 10, 1366, 9, 1367, 9, 1392, 11, 1394, 11, 1489, 10,
        1493, 10, 1520, 8, 1521, 8, 1878, 9, 1879, 9, 1906, 7, 1910, 7, 2005, 6,
        2007, 6, 2032, 8, 2033, 8, 2034, 7, 2037, 6, 2038, 7, 2039, 6,
      ]),
      (this._p3D = [
        0, 0, 1, -1, 0, 0, 1, 0, -1, 0, 0, -1, 1, 0, 0, 0, 1, -1, 0, 0, -1, 0,
        1, 0, 0, -1, 1, 0, 2, 1, 1, 0, 1, 1, 1, -1, 0, 2, 1, 0, 1, 1, 1, -1, 1,
        0, 2, 0, 1, 1, 1, -1, 1, 1, 1, 3, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 0, 1, 3,
        1, 0, 2, 1, 3, 0, 2, 1, 3, 0, 1, 2, 1, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0,
        1, 0, 2, 0, 2, 0, 1, 1, 0, 0, 1, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, -1, 1,
        2, 0, 0, 0, 0, 1, -1, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, -1, 2, 3, 1, 1, 1,
        2, 0, 0, 2, 2, 3, 1, 1, 1, 2, 2, 0, 0, 2, 3, 1, 1, 1, 2, 0, 2, 0, 2, 1,
        1, -1, 1, 2, 0, 0, 2, 2, 1, 1, -1, 1, 2, 2, 0, 0, 2, 1, -1, 1, 1, 2, 0,
        0, 2, 2, 1, -1, 1, 1, 2, 0, 2, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 2, 1, 1,
        1, -1, 2, 0, 2, 0,
      ]),
      (this._perm = new Uint8Array(256)),
      (this._perm3D = new Uint8Array(256)));
  }
  noise(e, i, n) {
    const {
        _STRETCH_3D: s,
        _NORM_3D: o,
        _SQUISH_3D: r,
        _lookup: a,
        _perm: l,
        _perm3D: c,
        _gradients3D: u,
      } = this,
      h = (e + i + n) * s,
      d = e + h,
      f = i + h,
      g = n + h,
      p = Math.floor(d),
      y = Math.floor(f),
      w = Math.floor(g),
      x = (p + y + w) * r,
      C = e - (p + x),
      v = i - (y + x),
      k = n - (w + x),
      E = d - p,
      U = f - y,
      I = g - w,
      z = E + U + I,
      q =
        (U - I + 1) |
        ((E - U + 1) << 1) |
        ((E - I + 1) << 2) |
        (z << 3) |
        ((z + I) << 5) |
        ((z + U) << 7) |
        ((z + E) << 9);
    let W = 0;
    for (let R = a[q]; R !== void 0; R = R.next) {
      const ee = C + R.dx,
        Q = v + R.dy,
        be = k + R.dz,
        ie = 2 - ee * ee - Q * Q - be * be;
      if (ie > 0) {
        const se = p + R.xsb,
          ue = y + R.ysb,
          ut = w + R.zsb,
          zt = l[se & 255],
          ht = l[(zt + ue) & 255],
          Ie = c[(ht + ut) & 255],
          sn = u[Ie] * ee + u[Ie + 1] * Q + u[Ie + 2] * be;
        W += ie * ie * ie * ie * sn;
      }
    }
    return W * o;
  }
  seed(e) {
    const { _base3D: i, _lookupPairs3D: n, _p3D: s } = this,
      o = [];
    for (let l = 0; l < s.length; l += 9) {
      const c = i[s[l]];
      let u = null,
        h = null;
      for (let d = 0; d < c.length; d += 4)
        ((h = this._contribution3D(c[d], c[d + 1], c[d + 2], c[d + 3])),
          u === null ? (o[l / 9] = h) : (u.next = h),
          (u = h));
      h &&
        ((h.next = this._contribution3D(
          s[l + 1],
          s[l + 2],
          s[l + 3],
          s[l + 4],
        )),
        (h.next.next = this._contribution3D(
          s[l + 5],
          s[l + 6],
          s[l + 7],
          s[l + 8],
        )));
    }
    this._lookup = [];
    for (let l = 0; l < n.length; l += 2) this._lookup[n[l]] = o[n[l + 1]];
    ((this._perm = new Uint8Array(256)), (this._perm3D = new Uint8Array(256)));
    const r = new Uint8Array(256);
    for (let l = 0; l < 256; l++) r[l] = l;
    let a = new Uint32Array(1);
    ((a[0] = e), (a = Ct(Ct(Ct(a)))));
    for (let l = 255; l >= 0; l--) {
      a = Ct(a);
      const c = new Uint32Array(1);
      ((c[0] = (a[0] + 31) % (l + 1)),
        c[0] < 0 && (c[0] += l + 1),
        (this._perm[l] = r[c[0]]),
        (this._perm3D[l] = (this._perm[l] % 24) * 3),
        (r[c[0]] = r[l]));
    }
  }
  _contribution3D(e, i, n, s) {
    const { _SQUISH_3D: o } = this;
    return {
      dx: -i - e * o,
      dy: -n - e * o,
      dz: -s - e * o,
      xsb: i,
      ysb: n,
      zsb: s,
    };
  }
}
class F_ {
  constructor() {
    ((this._NORM_4D = 1 / 30),
      (this._SQUISH_4D = (Math.sqrt(5) - 1) * 0.25),
      (this._STRETCH_4D = (1 / Math.sqrt(5) - 1) * 0.25),
      (this._lookup = []),
      (this._perm = new Uint8Array(0)),
      (this._perm4D = new Uint8Array(0)),
      (this._base4D = [
        [
          0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
          0, 1,
        ],
        [
          3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 4, 1, 1,
          1, 1,
        ],
        [
          1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 1,
          0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2,
          0, 0, 1, 1,
        ],
        [
          3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 2, 1, 1,
          0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2,
          0, 0, 1, 1,
        ],
      ]),
      (this._gradients4D = [
        3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, -3, 1, 1, 1, -1, 3, 1,
        1, -1, 1, 3, 1, -1, 1, 1, 3, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, 1, 1,
        -1, 1, 3, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, 3, 1,
        -1, 1, 1, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, -3, 1, -1, 1, -1, 3, -1,
        1, -1, 1, -3, 1, -1, 1, -1, 3, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, 1,
        1, -1, -1, 3, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1,
        3, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, -3, 1, 1, -1, -1,
        3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1,
        3, -1, 1, -1, 1, -3, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, -1, -1,
        -1, 1, -3, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, -3,
        1, -1, -1, -1, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, 3, -1, -1, -1,
        1, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, -3, -1, -1, -1, -1, -3, -1,
        -1, -1, -1, -3, -1, -1, -1, -1, -3,
      ]),
      (this._lookupPairs4D = [
        0, 3, 1, 2, 2, 3, 5, 2, 6, 1, 7, 1, 8, 3, 9, 2, 10, 3, 13, 2, 16, 3, 18,
        3, 22, 1, 23, 1, 24, 3, 26, 3, 33, 2, 37, 2, 38, 1, 39, 1, 41, 2, 45, 2,
        54, 1, 55, 1, 56, 0, 57, 0, 58, 0, 59, 0, 60, 0, 61, 0, 62, 0, 63, 0,
        256, 3, 258, 3, 264, 3, 266, 3, 272, 3, 274, 3, 280, 3, 282, 3, 2049, 2,
        2053, 2, 2057, 2, 2061, 2, 2081, 2, 2085, 2, 2089, 2, 2093, 2, 2304, 9,
        2305, 9, 2312, 9, 2313, 9, 16390, 1, 16391, 1, 16406, 1, 16407, 1,
        16422, 1, 16423, 1, 16438, 1, 16439, 1, 16642, 8, 16646, 8, 16658, 8,
        16662, 8, 18437, 6, 18439, 6, 18469, 6, 18471, 6, 18688, 9, 18689, 9,
        18690, 8, 18693, 6, 18694, 8, 18695, 6, 18696, 9, 18697, 9, 18706, 8,
        18710, 8, 18725, 6, 18727, 6, 131128, 0, 131129, 0, 131130, 0, 131131,
        0, 131132, 0, 131133, 0, 131134, 0, 131135, 0, 131352, 7, 131354, 7,
        131384, 7, 131386, 7, 133161, 5, 133165, 5, 133177, 5, 133181, 5,
        133376, 9, 133377, 9, 133384, 9, 133385, 9, 133400, 7, 133402, 7,
        133417, 5, 133421, 5, 133432, 7, 133433, 5, 133434, 7, 133437, 5,
        147510, 4, 147511, 4, 147518, 4, 147519, 4, 147714, 8, 147718, 8,
        147730, 8, 147734, 8, 147736, 7, 147738, 7, 147766, 4, 147767, 4,
        147768, 7, 147770, 7, 147774, 4, 147775, 4, 149509, 6, 149511, 6,
        149541, 6, 149543, 6, 149545, 5, 149549, 5, 149558, 4, 149559, 4,
        149561, 5, 149565, 5, 149566, 4, 149567, 4, 149760, 9, 149761, 9,
        149762, 8, 149765, 6, 149766, 8, 149767, 6, 149768, 9, 149769, 9,
        149778, 8, 149782, 8, 149784, 7, 149786, 7, 149797, 6, 149799, 6,
        149801, 5, 149805, 5, 149814, 4, 149815, 4, 149816, 7, 149817, 5,
        149818, 7, 149821, 5, 149822, 4, 149823, 4, 149824, 37, 149825, 37,
        149826, 36, 149829, 34, 149830, 36, 149831, 34, 149832, 37, 149833, 37,
        149842, 36, 149846, 36, 149848, 35, 149850, 35, 149861, 34, 149863, 34,
        149865, 33, 149869, 33, 149878, 32, 149879, 32, 149880, 35, 149881, 33,
        149882, 35, 149885, 33, 149886, 32, 149887, 32, 150080, 49, 150082, 48,
        150088, 49, 150098, 48, 150104, 47, 150106, 47, 151873, 46, 151877, 45,
        151881, 46, 151909, 45, 151913, 44, 151917, 44, 152128, 49, 152129, 46,
        152136, 49, 152137, 46, 166214, 43, 166215, 42, 166230, 43, 166247, 42,
        166262, 41, 166263, 41, 166466, 48, 166470, 43, 166482, 48, 166486, 43,
        168261, 45, 168263, 42, 168293, 45, 168295, 42, 168512, 31, 168513, 28,
        168514, 31, 168517, 28, 168518, 25, 168519, 25, 280952, 40, 280953, 39,
        280954, 40, 280957, 39, 280958, 38, 280959, 38, 281176, 47, 281178, 47,
        281208, 40, 281210, 40, 282985, 44, 282989, 44, 283001, 39, 283005, 39,
        283208, 30, 283209, 27, 283224, 30, 283241, 27, 283256, 22, 283257, 22,
        297334, 41, 297335, 41, 297342, 38, 297343, 38, 297554, 29, 297558, 24,
        297562, 29, 297590, 24, 297594, 21, 297598, 21, 299365, 26, 299367, 23,
        299373, 26, 299383, 23, 299389, 20, 299391, 20, 299584, 31, 299585, 28,
        299586, 31, 299589, 28, 299590, 25, 299591, 25, 299592, 30, 299593, 27,
        299602, 29, 299606, 24, 299608, 30, 299610, 29, 299621, 26, 299623, 23,
        299625, 27, 299629, 26, 299638, 24, 299639, 23, 299640, 22, 299641, 22,
        299642, 21, 299645, 20, 299646, 21, 299647, 20, 299648, 61, 299649, 60,
        299650, 61, 299653, 60, 299654, 59, 299655, 59, 299656, 58, 299657, 57,
        299666, 55, 299670, 54, 299672, 58, 299674, 55, 299685, 52, 299687, 51,
        299689, 57, 299693, 52, 299702, 54, 299703, 51, 299704, 56, 299705, 56,
        299706, 53, 299709, 50, 299710, 53, 299711, 50, 299904, 61, 299906, 61,
        299912, 58, 299922, 55, 299928, 58, 299930, 55, 301697, 60, 301701, 60,
        301705, 57, 301733, 52, 301737, 57, 301741, 52, 301952, 79, 301953, 79,
        301960, 76, 301961, 76, 316038, 59, 316039, 59, 316054, 54, 316071, 51,
        316086, 54, 316087, 51, 316290, 78, 316294, 78, 316306, 73, 316310, 73,
        318085, 77, 318087, 77, 318117, 70, 318119, 70, 318336, 79, 318337, 79,
        318338, 78, 318341, 77, 318342, 78, 318343, 77, 430776, 56, 430777, 56,
        430778, 53, 430781, 50, 430782, 53, 430783, 50, 431e3, 75, 431002, 72,
        431032, 75, 431034, 72, 432809, 74, 432813, 69, 432825, 74, 432829, 69,
        433032, 76, 433033, 76, 433048, 75, 433065, 74, 433080, 75, 433081, 74,
        447158, 71, 447159, 68, 447166, 71, 447167, 68, 447378, 73, 447382, 73,
        447386, 72, 447414, 71, 447418, 72, 447422, 71, 449189, 70, 449191, 70,
        449197, 69, 449207, 68, 449213, 69, 449215, 68, 449408, 67, 449409, 67,
        449410, 66, 449413, 64, 449414, 66, 449415, 64, 449416, 67, 449417, 67,
        449426, 66, 449430, 66, 449432, 65, 449434, 65, 449445, 64, 449447, 64,
        449449, 63, 449453, 63, 449462, 62, 449463, 62, 449464, 65, 449465, 63,
        449466, 65, 449469, 63, 449470, 62, 449471, 62, 449472, 19, 449473, 19,
        449474, 18, 449477, 16, 449478, 18, 449479, 16, 449480, 19, 449481, 19,
        449490, 18, 449494, 18, 449496, 17, 449498, 17, 449509, 16, 449511, 16,
        449513, 15, 449517, 15, 449526, 14, 449527, 14, 449528, 17, 449529, 15,
        449530, 17, 449533, 15, 449534, 14, 449535, 14, 449728, 19, 449729, 19,
        449730, 18, 449734, 18, 449736, 19, 449737, 19, 449746, 18, 449750, 18,
        449752, 17, 449754, 17, 449784, 17, 449786, 17, 451520, 19, 451521, 19,
        451525, 16, 451527, 16, 451528, 19, 451529, 19, 451557, 16, 451559, 16,
        451561, 15, 451565, 15, 451577, 15, 451581, 15, 451776, 19, 451777, 19,
        451784, 19, 451785, 19, 465858, 18, 465861, 16, 465862, 18, 465863, 16,
        465874, 18, 465878, 18, 465893, 16, 465895, 16, 465910, 14, 465911, 14,
        465918, 14, 465919, 14, 466114, 18, 466118, 18, 466130, 18, 466134, 18,
        467909, 16, 467911, 16, 467941, 16, 467943, 16, 468160, 13, 468161, 13,
        468162, 13, 468163, 13, 468164, 13, 468165, 13, 468166, 13, 468167, 13,
        580568, 17, 580570, 17, 580585, 15, 580589, 15, 580598, 14, 580599, 14,
        580600, 17, 580601, 15, 580602, 17, 580605, 15, 580606, 14, 580607, 14,
        580824, 17, 580826, 17, 580856, 17, 580858, 17, 582633, 15, 582637, 15,
        582649, 15, 582653, 15, 582856, 12, 582857, 12, 582872, 12, 582873, 12,
        582888, 12, 582889, 12, 582904, 12, 582905, 12, 596982, 14, 596983, 14,
        596990, 14, 596991, 14, 597202, 11, 597206, 11, 597210, 11, 597214, 11,
        597234, 11, 597238, 11, 597242, 11, 597246, 11, 599013, 10, 599015, 10,
        599021, 10, 599023, 10, 599029, 10, 599031, 10, 599037, 10, 599039, 10,
        599232, 13, 599233, 13, 599234, 13, 599235, 13, 599236, 13, 599237, 13,
        599238, 13, 599239, 13, 599240, 12, 599241, 12, 599250, 11, 599254, 11,
        599256, 12, 599257, 12, 599258, 11, 599262, 11, 599269, 10, 599271, 10,
        599272, 12, 599273, 12, 599277, 10, 599279, 10, 599282, 11, 599285, 10,
        599286, 11, 599287, 10, 599288, 12, 599289, 12, 599290, 11, 599293, 10,
        599294, 11, 599295, 10,
      ]),
      (this._p4D = [
        0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 0,
        0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0,
        1, -1, 0, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 2, 1, 1, 0,
        0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 2, 1, 0, 1, 0, 1, 1, -1, 1, 0, 1,
        1, 0, 1, -1, 0, 2, 0, 1, 1, 0, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 2, 1,
        0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 2, 0, 1, 0, 1, 1, -1, 1, 0,
        1, 1, 0, 1, -1, 1, 0, 2, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 1,
        4, 2, 1, 1, 0, 4, 1, 2, 1, 0, 4, 1, 1, 2, 0, 1, 4, 2, 1, 0, 1, 4, 1, 2,
        0, 1, 4, 1, 1, 0, 2, 1, 4, 2, 0, 1, 1, 4, 1, 0, 2, 1, 4, 1, 0, 1, 2, 1,
        4, 0, 2, 1, 1, 4, 0, 1, 2, 1, 4, 0, 1, 1, 2, 1, 2, 1, 1, 0, 0, 3, 2, 1,
        0, 0, 3, 1, 2, 0, 0, 1, 2, 1, 0, 1, 0, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 1,
        2, 0, 1, 1, 0, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 1, 2, 1, 0, 0, 1, 3, 2, 0,
        0, 1, 3, 1, 0, 0, 2, 1, 2, 0, 1, 0, 1, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 1,
        2, 0, 0, 1, 1, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 3, 1, 1, 1, 0, 2, 1, 1,
        1, -1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 2, 0, 0, 0,
        2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1,
        1, 1, -1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 2, 0,
        0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 1, 0, 2,
        1, 1, 1, -1, 2, 0, 0, 2, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0,
        2, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 1, 1, 0, 1,
        2, 1, 1, -1, 1, 2, 0, 0, 0, 2, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0,
        0, 0, 2, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 0, 2, 2, 1, 1, 1,
        -1, 0, 1, 1, 1, 0, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1,
        0, 0, 0, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 0, 0, 0, 0, 2, 1,
        1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1,
        -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 0, 0, 0, 0, 0,
        2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1,
        1, 0, 1, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 2, 0,
        0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 1,
        0, 1, 0, 1, 1, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2,
        0, 2, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1,
        1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1,
        1, 2, 0, 0, 2, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 0, 0, 0, 2, 2,
        1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 0, 1, 1, 1, 0,
        -1, 1, 1, 2, 0, 0, 0, 2, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, 1,
        -1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 0, 1, 0,
        2, 0, 0, 2, 0, 2, 1, 1, 1, -1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1,
        -1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 0, 0,
        1, 2, 0, 0, 0, 2, 2, 1, 1, -1, 1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1,
        -1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0,
        0, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2,
        -1, 1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, -1, 1, 1, 1, 3, 1, 0,
        0, 0, 1, 2, 0, 0, 0, 2, 2, -1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0,
        4, 1, 1, 1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 4, 1, 1, 1, 1, 3, 3, 0,
        2, 1, 0, 3, 0, 1, 2, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2,
        4, 1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0,
        0, 2, 1, 3, 0, 0, 1, 2, 4, 1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0,
        2, 1, 1, 1, -1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, 1, 1, -1, 3, 3,
        0, 2, 1, 0, 3, 0, 1, 2, 0, 2, 1, 1, 1, -1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0,
        0, 2, 1, 1, -1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, 1, -1, 1, 3,
        3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, 1, 1, -1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0,
        2, 0, 2, 1, -1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, -1, 1, 1,
        3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 1, -1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0,
        1, 2, 0, 2, -1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, -1, 1, 1,
        1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, -1, 1, 1, 1,
      ]));
  }
  noise(e, i, n, s) {
    const {
        _perm: o,
        _perm4D: r,
        _lookup: a,
        _STRETCH_4D: l,
        _SQUISH_4D: c,
        _gradients4D: u,
        _NORM_4D: h,
      } = this,
      d = (e + i + n + s) * l,
      f = e + d,
      g = i + d,
      p = n + d,
      y = s + d,
      w = Math.floor(f),
      x = Math.floor(g),
      C = Math.floor(p),
      v = Math.floor(y),
      k = (w + x + C + v) * c,
      E = e - (w + k),
      U = i - (x + k),
      I = n - (C + k),
      z = s - (v + k),
      q = f - w,
      W = g - x,
      R = p - C,
      ee = y - v,
      Q = q + W + R + ee,
      be =
        (R - ee + 1) |
        ((W - R + 1) << 1) |
        ((W - ee + 1) << 2) |
        ((q - W + 1) << 3) |
        ((q - R + 1) << 4) |
        ((q - ee + 1) << 5) |
        (Q << 6) |
        ((Q + ee) << 8) |
        ((Q + R) << 11) |
        ((Q + W) << 14) |
        ((Q + q) << 17);
    let ie = 0;
    for (let se = a[be]; se !== void 0; se = se.next) {
      const ue = E + se.dx,
        ut = U + se.dy,
        zt = I + se.dz,
        ht = z + se.dw,
        Ie = 2 - ue * ue - ut * ut - zt * zt - ht * ht;
      if (Ie > 0) {
        const sn = w + se.xsb,
          Uo = x + se.ysb,
          jo = C + se.zsb,
          Tt = v + se.wsb,
          on = o[sn & 255],
          Gn = o[(on + Uo) & 255],
          _s = o[(Gn + jo) & 255],
          Gt = r[(_s + Tt) & 255],
          ys = u[Gt] * ue + u[Gt + 1] * ut + u[Gt + 2] * zt + u[Gt + 3] * ht;
        ie += Ie * Ie * Ie * Ie * ys;
      }
    }
    return ie * h;
  }
  seed(e) {
    const { _p4D: i, _base4D: n, _lookupPairs4D: s } = this,
      o = [];
    for (let l = 0; l < i.length; l += 16) {
      const c = n[i[l]];
      let u = null,
        h = null;
      for (let d = 0; d < c.length; d += 5)
        ((h = this._contribution4D(
          c[d],
          c[d + 1],
          c[d + 2],
          c[d + 3],
          c[d + 4],
        )),
          u === null ? (o[l / 16] = h) : (u.next = h),
          (u = h));
      h &&
        ((h.next = this._contribution4D(
          i[l + 1],
          i[l + 2],
          i[l + 3],
          i[l + 4],
          i[l + 5],
        )),
        (h.next.next = this._contribution4D(
          i[l + 6],
          i[l + 7],
          i[l + 8],
          i[l + 9],
          i[l + 10],
        )),
        (h.next.next.next = this._contribution4D(
          i[l + 11],
          i[l + 12],
          i[l + 13],
          i[l + 14],
          i[l + 15],
        )));
    }
    this._lookup = [];
    for (let l = 0; l < s.length; l += 2) this._lookup[s[l]] = o[s[l + 1]];
    ((this._perm = new Uint8Array(256)), (this._perm4D = new Uint8Array(256)));
    const r = new Uint8Array(256);
    for (let l = 0; l < 256; l++) r[l] = l;
    let a = new Uint32Array(1);
    ((a[0] = e), (a = Ct(Ct(Ct(a)))));
    for (let l = 255; l >= 0; l--) {
      a = Ct(a);
      const c = new Uint32Array(1);
      ((c[0] = (a[0] + 31) % (l + 1)),
        c[0] < 0 && (c[0] += l + 1),
        (this._perm[l] = r[c[0]]),
        (this._perm4D[l] = this._perm[l] & 252),
        (r[c[0]] = r[l]));
    }
  }
  _contribution4D(e, i, n, s, o) {
    const { _SQUISH_4D: r } = this;
    return {
      dx: -i - e * r,
      dy: -n - e * r,
      dz: -s - e * r,
      dw: -o - e * r,
      xsb: i,
      ysb: n,
      zsb: s,
      wsb: o,
    };
  }
}
class Ih {
  constructor() {
    ((this.noise2d = new $_()),
      (this.noise3d = new D_()),
      (this.noise4d = new F_()));
  }
}
const fr = { speed: 0.2, step: 250 },
  Dl = 2;
class H_ {
  constructor() {
    const e = new Ih();
    ((this._simplex = e.noise2d), (this.options = fe({}, fr)));
  }
  generate(e) {
    const i = e.getPosition(),
      { speed: n, step: s } = this.options,
      o = i.x / s,
      r = i.y / s,
      a = 0.001,
      l = this._simplex.noise(o, r + a),
      c = this._simplex.noise(o, r - a),
      u = (l - c) / (Dl * a),
      h = this._simplex.noise(o + a, r),
      d = this._simplex.noise(o - a, r),
      f = (h - d) / (Dl * a);
    return ((e.velocity.x = 0), (e.velocity.y = 0), ne.create(n * u, n * -f));
  }
  init(e) {
    const i = e.actualOptions.particles.move.path.options;
    ((this.options.seed = i == null ? void 0 : i.seed),
      (this.options.speed =
        ((i == null ? void 0 : i.speed) ?? fr.speed) * e.retina.pixelRatio),
      (this.options.step = (i == null ? void 0 : i.step) ?? fr.step),
      this._simplex.seed(this.options.seed ?? D()));
  }
  reset() {}
  update() {}
}
const B_ = "curlNoise";
async function q_(t, e = !0) {
  await t.addPathGenerator(B_, new H_(), e);
}
function N_(t, e, i, n, s = 0, o = 1) {
  const r = [],
    a = [],
    l = [],
    c = [],
    u = [],
    h = t ?? D;
  let d = 0;
  i < 1 && (i = 1);
  for (let f = 1; f <= i; ++f)
    ((r[f] = h()),
      (a[f] = h()),
      (l[f] = f === 1 ? 1 : l[f - 1] * n),
      (d += l[f]),
      (c[f] = f / e),
      (u[f] = h()));
  return (
    l.forEach((f, g) => (l[g] = (f / d) * (o - s))),
    () => {
      let f,
        g,
        p = 0;
      for (let y = i; y >= 1; --y)
        ((f = u[y] += c[y]),
          u[y] >= 1 && ((f = u[y] -= 1), (r[y] = a[y]), (a[y] = h())),
          (g = f ** 2 * (3 - 2 * f)),
          (p += (r[y] * (1 - g) + a[y] * g) * l[y]));
      return p + s;
    }
  );
}
const U_ = 2,
  Fl = Math.PI * U_;
function j_() {
  return D() * 0.6 + 0.8;
}
class W_ {
  constructor() {
    this.options = {
      rndFunc: null,
      period: 100,
      nbHarmonics: 2,
      attenHarmonics: 0.8,
      lowValue: -0.03,
      highValue: 0.03,
    };
  }
  generate(e) {
    if (!e.pathGen) {
      const i = this.options;
      e.pathGen = N_(
        i.rndFunc,
        i.period,
        i.nbHarmonics,
        i.attenHarmonics,
        i.lowValue,
        i.highValue,
      );
    }
    return (
      e.curveVelocity
        ? ((e.curveVelocity.length += 0.01),
          (e.curveVelocity.angle = (e.curveVelocity.angle + e.pathGen()) % Fl))
        : ((e.curveVelocity = ne.origin),
          (e.curveVelocity.length = j_()),
          (e.curveVelocity.angle = D() * Fl)),
      (e.velocity.x = 0),
      (e.velocity.y = 0),
      e.curveVelocity
    );
  }
  init(e) {
    const i = e.actualOptions.particles.move.path.options,
      { options: n } = this;
    (zo(i.rndFunc)
      ? (n.rndFunc = i.rndFunc)
      : it(i.rndFunc) &&
        (n.rndFunc = window[i.rndFunc] ?? this.options.rndFunc),
      (n.period = i.period ?? n.period),
      (n.nbHarmonics = i.nbHarmonics ?? n.nbHarmonics),
      (n.attenHarmonics = i.attenHarmonics ?? n.attenHarmonics),
      (n.lowValue = i.lowValue ?? n.lowValue),
      (n.highValue = i.highValue ?? n.highValue));
  }
  reset(e) {
    (delete e.pathGen, delete e.curveVelocity);
  }
  update() {}
}
const Q_ = "curvesPathGenerator";
async function K_(t, e = !0) {
  await t.addPathGenerator(Q_, new W_(), e);
}
async function Y_() {
  (ve(de.easeInBack, (t) => 2.70158 * t ** 3 - 1.70158 * t ** 2),
    ve(
      de.easeOutBack,
      (t) => 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2),
    ),
    ve(de.easeInOutBack, (t) => {
      const i = 2.5949095;
      return t < 0.5
        ? ((2 * t) ** 2 * ((i + 1) * 2 * t - i)) / 2
        : ((2 * t - 2) ** 2 * ((i + 1) * (t * 2 - 2) + i) + 2) / 2;
    }),
    await Promise.resolve());
}
async function Z_() {
  (ve(de.easeInCirc, (t) => 1 - Math.sqrt(1 - t ** 2)),
    ve(de.easeOutCirc, (t) => Math.sqrt(1 - (t - 1) ** 2)),
    ve(de.easeInOutCirc, (t) =>
      t < 0.5
        ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2
        : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) / 2,
    ),
    await Promise.resolve());
}
async function J_() {
  (ve(de.easeInCubic, (t) => t ** 3),
    ve(de.easeOutCubic, (t) => 1 - (1 - t) ** 3),
    ve(de.easeInOutCubic, (t) =>
      t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2,
    ),
    await Promise.resolve());
}
async function X_() {
  (ve(de.easeInExpo, (t) => (t ? 2 ** (10 * t - 10) : 0)),
    ve(de.easeOutExpo, (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))),
    ve(de.easeInOutExpo, (t) =>
      t === 1
        ? t
          ? 1
          : 0
        : t
          ? t < 0.5
            ? 2 ** (20 * t - 10) / 2
            : (2 - 2 ** (-20 * t + 10)) / 2
          : 0,
    ),
    await Promise.resolve());
}
async function ey() {
  (ve(de.easeInLinear, (t) => t),
    ve(de.easeOutLinear, (t) => t),
    ve(de.easeInOutLinear, (t) => t),
    await Promise.resolve());
}
async function ty() {
  (ve(de.easeInQuart, (t) => t ** 4),
    ve(de.easeOutQuart, (t) => 1 - (1 - t) ** 4),
    ve(de.easeInOutQuart, (t) =>
      t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2,
    ),
    await Promise.resolve());
}
async function iy() {
  (ve(de.easeInQuint, (t) => t ** 5),
    ve(de.easeOutQuint, (t) => 1 - (1 - t) ** 5),
    ve(de.easeInOutQuint, (t) =>
      t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2,
    ),
    await Promise.resolve());
}
async function ny() {
  (ve(de.easeInSine, (t) => 1 - Math.cos((t * Math.PI) / 2)),
    ve(de.easeOutSine, (t) => Math.sin((t * Math.PI) / 2)),
    ve(de.easeInOutSine, (t) => -(Math.cos(Math.PI * t) - 1) / 2),
    await Promise.resolve());
}
class sy {
  constructor() {
    this.wait = !1;
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = e.count),
      e.delay !== void 0 && (this.delay = H(e.delay)),
      e.duration !== void 0 && (this.duration = H(e.duration)),
      e.wait !== void 0 && (this.wait = e.wait));
  }
}
class oy {
  constructor() {
    ((this.quantity = 1), (this.delay = 0.1));
  }
  load(e) {
    e !== void 0 &&
      (e.quantity !== void 0 && (this.quantity = H(e.quantity)),
      e.delay !== void 0 && (this.delay = H(e.delay)));
  }
}
class ry {
  constructor() {
    ((this.color = !1), (this.opacity = !1));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = e.color),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class ay {
  constructor() {
    ((this.options = {}), (this.replace = new ry()), (this.type = "square"));
  }
  load(e) {
    e &&
      (e.options !== void 0 && (this.options = fe({}, e.options ?? {})),
      this.replace.load(e.replace),
      e.type !== void 0 && (this.type = e.type));
  }
}
class Rh {
  constructor() {
    ((this.mode = Vt.percent), (this.height = 0), (this.width = 0));
  }
  load(e) {
    e !== void 0 &&
      (e.mode !== void 0 && (this.mode = e.mode),
      e.height !== void 0 && (this.height = e.height),
      e.width !== void 0 && (this.width = e.width));
  }
}
class gi {
  constructor() {
    ((this.autoPlay = !0),
      (this.fill = !0),
      (this.life = new sy()),
      (this.rate = new oy()),
      (this.shape = new ay()),
      (this.startCount = 0));
  }
  load(e) {
    e &&
      (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.size !== void 0 &&
        (this.size || (this.size = new Rh()), this.size.load(e.size)),
      e.direction !== void 0 && (this.direction = e.direction),
      (this.domId = e.domId),
      e.fill !== void 0 && (this.fill = e.fill),
      this.life.load(e.life),
      (this.name = e.name),
      (this.particles = Pe(e.particles, (i) => fe({}, i))),
      this.rate.load(e.rate),
      this.shape.load(e.shape),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = H(e.position.x)),
        e.position.y !== void 0 && (this.position.y = H(e.position.y))),
      e.spawnColor !== void 0 &&
        (this.spawnColor === void 0 && (this.spawnColor = new Pi()),
        this.spawnColor.load(e.spawnColor)),
      e.startCount !== void 0 && (this.startCount = e.startCount));
  }
}
var fo;
(function (t) {
  t.emitter = "emitter";
})(fo || (fo = {}));
const Hl = 0.5,
  Bl = 0,
  As = 0,
  ql = 0,
  ly = 0,
  cy = -1,
  uy = 1;
function Nl(t, e) {
  t.color ? (t.color.value = e) : (t.color = { value: e });
}
class hy {
  constructor(e, i, n, s, o) {
    var c, u;
    ((this.emitters = i),
      (this.container = n),
      (this._destroy = () => {
        var h, d;
        ((h = this._mutationObserver) == null || h.disconnect(),
          (this._mutationObserver = void 0),
          (d = this._resizeObserver) == null || d.disconnect(),
          (this._resizeObserver = void 0),
          this.emitters.removeEmitter(this),
          this._engine.dispatchEvent("emitterDestroyed", {
            container: this.container,
            data: { emitter: this },
          }));
      }),
      (this._prepareToDie = () => {
        var g;
        if (this._paused) return;
        const h =
          ((g = this.options.life) == null ? void 0 : g.duration) !== void 0
            ? S(this.options.life.duration)
            : void 0;
        this.container.retina.reduceFactor &&
          (this._lifeCount > 0 || this._immortal) &&
          h !== void 0 &&
          h > 0 &&
          (this._duration = h * ye);
      }),
      (this._setColorAnimation = (h, d, f, g = uy) => {
        const p = this.container;
        if (!h.enable) return d;
        const y = ke(h.offset),
          w = S(this.options.rate.delay),
          x = (w * ye) / p.retina.reduceFactor,
          C = 0,
          v = S(h.speed ?? C);
        return (d + (v * p.fpsLimit) / x + y * g) % f;
      }),
      (this._engine = e),
      (this._currentDuration = 0),
      (this._currentEmitDelay = 0),
      (this._currentSpawnDelay = 0),
      (this._initialPosition = o),
      s instanceof gi
        ? (this.options = s)
        : ((this.options = new gi()), this.options.load(s)),
      (this._spawnDelay =
        (S(this.options.life.delay ?? Bl) * ye) /
        this.container.retina.reduceFactor),
      (this.position = this._initialPosition ?? this._calcPosition()),
      (this.name = this.options.name),
      (this.fill = this.options.fill),
      (this._firstSpawn = !this.options.life.wait),
      (this._startParticlesAdded = !1));
    let r = fe({}, this.options.particles);
    if (
      (r ?? (r = {}),
      r.move ?? (r.move = {}),
      (c = r.move).direction ?? (c.direction = this.options.direction),
      this.options.spawnColor &&
        (this.spawnColor = Zt(this.options.spawnColor)),
      (this._paused = !this.options.autoPlay),
      (this._particlesOptions = r),
      (this._size = this._calcSize()),
      (this.size = vl(this._size, this.container.canvas.size)),
      (this._lifeCount = this.options.life.count ?? cy),
      (this._immortal = this._lifeCount <= As),
      this.options.domId)
    ) {
      const h = document.getElementById(this.options.domId);
      h &&
        ((this._mutationObserver = new MutationObserver(() => {
          this.resize();
        })),
        (this._resizeObserver = new ResizeObserver(() => {
          this.resize();
        })),
        this._mutationObserver.observe(h, {
          attributes: !0,
          attributeFilter: ["style", "width", "height"],
        }),
        this._resizeObserver.observe(h));
    }
    const a = this.options.shape,
      l =
        (u = this._engine.emitterShapeManager) == null
          ? void 0
          : u.getShapeGenerator(a.type);
    (l &&
      (this._shape = l.generate(
        this.position,
        this.size,
        this.fill,
        a.options,
      )),
      this._engine.dispatchEvent("emitterCreated", {
        container: n,
        data: { emitter: this },
      }),
      this.play());
  }
  externalPause() {
    ((this._paused = !0), this.pause());
  }
  externalPlay() {
    ((this._paused = !1), this.play());
  }
  async init() {
    var e;
    await ((e = this._shape) == null ? void 0 : e.init());
  }
  pause() {
    this._paused || delete this._emitDelay;
  }
  play() {
    if (
      !this._paused &&
      this.container.retina.reduceFactor &&
      (this._lifeCount > As || this._immortal || !this.options.life.count) &&
      (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? ql))
    ) {
      if (this._emitDelay === void 0) {
        const e = S(this.options.rate.delay);
        this._emitDelay = (e * ye) / this.container.retina.reduceFactor;
      }
      (this._lifeCount > As || this._immortal) && this._prepareToDie();
    }
  }
  resize() {
    var i;
    const e = this._initialPosition;
    ((this.position =
      e && ps(e, this.container.canvas.size, ne.origin)
        ? e
        : this._calcPosition()),
      (this._size = this._calcSize()),
      (this.size = vl(this._size, this.container.canvas.size)),
      (i = this._shape) == null || i.resize(this.position, this.size));
  }
  update(e) {
    var i;
    this._paused ||
      (this._firstSpawn &&
        ((this._firstSpawn = !1),
        (this._currentSpawnDelay = this._spawnDelay ?? ql),
        (this._currentEmitDelay = this._emitDelay ?? ly)),
      this._startParticlesAdded ||
        ((this._startParticlesAdded = !0),
        this._emitParticles(this.options.startCount)),
      this._duration !== void 0 &&
        ((this._currentDuration += e.value),
        this._currentDuration >= this._duration &&
          (this.pause(),
          this._spawnDelay !== void 0 && delete this._spawnDelay,
          this._immortal || this._lifeCount--,
          this._lifeCount > As || this._immortal
            ? ((this.position = this._calcPosition()),
              (i = this._shape) == null || i.resize(this.position, this.size),
              (this._spawnDelay =
                (S(this.options.life.delay ?? Bl) * ye) /
                this.container.retina.reduceFactor))
            : this._destroy(),
          (this._currentDuration -= this._duration),
          delete this._duration)),
      this._spawnDelay !== void 0 &&
        ((this._currentSpawnDelay += e.value),
        this._currentSpawnDelay >= this._spawnDelay &&
          (this._engine.dispatchEvent("emitterPlay", {
            container: this.container,
          }),
          this.play(),
          (this._currentSpawnDelay -= this._currentSpawnDelay),
          delete this._spawnDelay)),
      this._emitDelay !== void 0 &&
        ((this._currentEmitDelay += e.value),
        this._currentEmitDelay >= this._emitDelay &&
          (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
  }
  _calcPosition() {
    if (this.options.domId) {
      const e = document.getElementById(this.options.domId);
      if (e) {
        const i = e.getBoundingClientRect(),
          n = this.container.retina.pixelRatio;
        return { x: (i.x + i.width * Hl) * n, y: (i.y + i.height * Hl) * n };
      }
    }
    return fh({
      size: this.container.canvas.size,
      position: this.options.position,
    });
  }
  _calcSize() {
    const e = this.container;
    if (this.options.domId) {
      const i = document.getElementById(this.options.domId);
      if (i) {
        const n = i.getBoundingClientRect();
        return {
          width: n.width * e.retina.pixelRatio,
          height: n.height * e.retina.pixelRatio,
          mode: Vt.precise,
        };
      }
    }
    return (
      this.options.size ??
      (() => {
        const i = new Rh();
        return (i.load({ height: 0, mode: Vt.percent, width: 0 }), i);
      })()
    );
  }
  _emit() {
    if (this._paused) return;
    const e = S(this.options.rate.quantity);
    this._emitParticles(e);
  }
  _emitParticles(e) {
    var n;
    const i = Re(this._particlesOptions);
    for (let s = 0; s < e; s++) {
      const o = fe({}, i);
      if (this.spawnColor) {
        const l = (n = this.options.spawnColor) == null ? void 0 : n.animation;
        if (l) {
          const c = { h: 360, s: 100, l: 100 },
            u = 3.6;
          ((this.spawnColor.h = this._setColorAnimation(
            l.h,
            this.spawnColor.h,
            c.h,
            u,
          )),
            (this.spawnColor.s = this._setColorAnimation(
              l.s,
              this.spawnColor.s,
              c.s,
            )),
            (this.spawnColor.l = this._setColorAnimation(
              l.l,
              this.spawnColor.l,
              c.l,
            )));
        }
        Nl(o, this.spawnColor);
      }
      const r = this.options.shape;
      let a = this.position;
      if (this._shape) {
        const l = this._shape.randomPosition();
        if (l) {
          a = l.position;
          const c = r.replace;
          (c.color && l.color && Nl(o, l.color),
            c.opacity &&
              (o.opacity
                ? (o.opacity.value = l.opacity)
                : (o.opacity = { value: l.opacity })));
        } else a = null;
      }
      a && this.container.particles.addParticle(a, o);
    }
  }
}
class dy {
  constructor(e, i) {
    ((this.container = i),
      (this._engine = e),
      (this.array = []),
      (this.emitters = []),
      (this.interactivityEmitters = {
        random: { count: 1, enable: !1 },
        value: [],
      }));
    const n = 0;
    ((i.getEmitter = (s) =>
      s === void 0 || je(s)
        ? this.array[s ?? n]
        : this.array.find((o) => o.name === s)),
      (i.addEmitter = async (s, o) => this.addEmitter(s, o)),
      (i.removeEmitter = (s) => {
        const o = i.getEmitter(s);
        o && this.removeEmitter(o);
      }),
      (i.playEmitter = (s) => {
        const o = i.getEmitter(s);
        o && o.externalPlay();
      }),
      (i.pauseEmitter = (s) => {
        const o = i.getEmitter(s);
        o && o.externalPause();
      }));
  }
  async addEmitter(e, i) {
    const n = new gi();
    n.load(e);
    const s = new hy(this._engine, this, this.container, n, i);
    return (await s.init(), this.array.push(s), s);
  }
  handleClickMode(e) {
    const i = this.emitters,
      n = this.interactivityEmitters;
    if (e !== fo.emitter) return;
    let s;
    if (n && Ge(n.value))
      if (n.value.length > 0 && n.random.enable) {
        s = [];
        const l = [];
        for (let c = 0; c < n.random.count; c++) {
          const u = ph(n.value);
          if (l.includes(u) && l.length < n.value.length) {
            c--;
            continue;
          }
          (l.push(u), s.push(Yt(n.value, u)));
        }
      } else s = n.value;
    else s = n == null ? void 0 : n.value;
    const o = s ?? i,
      r = this.container.interactivity.mouse.clickPosition;
    Pe(o, async (a) => {
      await this.addEmitter(a, r);
    });
  }
  async init() {
    if (
      ((this.emitters = this.container.actualOptions.emitters),
      (this.interactivityEmitters =
        this.container.actualOptions.interactivity.modes.emitters),
      !!this.emitters)
    )
      if (Ge(this.emitters))
        for (const e of this.emitters) await this.addEmitter(e);
      else await this.addEmitter(this.emitters);
  }
  pause() {
    for (const e of this.array) e.pause();
  }
  play() {
    for (const e of this.array) e.play();
  }
  removeEmitter(e) {
    const i = this.array.indexOf(e);
    i >= 0 && this.array.splice(i, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
  update(e) {
    for (const i of this.array) i.update(e);
  }
}
class fy {
  constructor(e) {
    ((this._engine = e), (this.id = "emitters"));
  }
  getPlugin(e) {
    return Promise.resolve(new dy(this._engine, e));
  }
  loadOptions(e, i) {
    var s, o;
    if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
    i != null &&
      i.emitters &&
      (e.emitters = Pe(i.emitters, (r) => {
        const a = new gi();
        return (a.load(r), a);
      }));
    const n =
      (o =
        (s = i == null ? void 0 : i.interactivity) == null
          ? void 0
          : s.modes) == null
        ? void 0
        : o.emitters;
    if (n)
      if (Ge(n))
        e.interactivity.modes.emitters = {
          random: { count: 1, enable: !0 },
          value: n.map((r) => {
            const a = new gi();
            return (a.load(r), a);
          }),
        };
      else {
        const r = n;
        if (r.value !== void 0)
          if (Ge(r.value))
            e.interactivity.modes.emitters = {
              random: {
                count: r.random.count ?? 1,
                enable: r.random.enable ?? !1,
              },
              value: r.value.map((l) => {
                const c = new gi();
                return (c.load(l), c);
              }),
            };
          else {
            const l = new gi();
            (l.load(r.value),
              (e.interactivity.modes.emitters = {
                random: {
                  count: r.random.count ?? 1,
                  enable: r.random.enable ?? !1,
                },
                value: l,
              }));
          }
        else
          (e.interactivity.modes.emitters = {
            random: { count: 1, enable: !1 },
            value: new gi(),
          }).value.load(n);
      }
  }
  needsPlugin(e) {
    var n, s, o;
    if (!e) return !1;
    const i = e.emitters;
    return (
      (Ge(i) && !!i.length) ||
      i !== void 0 ||
      (!!(
        (o =
          (s = (n = e.interactivity) == null ? void 0 : n.events) == null
            ? void 0
            : s.onClick) != null && o.mode
      ) &&
        ge(fo.emitter, e.interactivity.events.onClick.mode))
    );
  }
}
const pr = new Map();
class py {
  constructor(e) {
    this._engine = e;
  }
  addShapeGenerator(e, i) {
    this.getShapeGenerator(e) || pr.set(e, i);
  }
  getShapeGenerator(e) {
    return pr.get(e);
  }
  getSupportedShapeGenerators() {
    return pr.keys();
  }
}
class ms {
  constructor(e, i, n, s) {
    ((this.position = e), (this.size = i), (this.fill = n), (this.options = s));
  }
  resize(e, i) {
    ((this.position = e), (this.size = i));
  }
}
async function gy(t, e = !0) {
  (t.emitterShapeManager || (t.emitterShapeManager = new py(t)),
    t.addEmitterShapeGenerator ||
      (t.addEmitterShapeGenerator = (n, s) => {
        var o;
        (o = t.emitterShapeManager) == null || o.addShapeGenerator(n, s);
      }));
  const i = new fy(t);
  await t.addPlugin(i, e);
}
const jt = { x: 0, y: 0 },
  my = 0;
function Ta(t, e, i, n = !0) {
  const s = t.getImageData(jt.x, jt.y, e.width, e.height).data;
  n && t.clearRect(jt.x, jt.y, e.width, e.height);
  const o = [];
  for (let r = 0; r < s.length; r += i) {
    const a = r / i,
      l = { x: a % e.width, y: Math.floor(a / e.width) };
    o[l.y] || (o[l.y] = []);
    const c = { r: 0, g: 1, b: 2, a: 3 },
      u = 255;
    o[l.y][l.x] = {
      r: s[r + c.r],
      g: s[r + c.g],
      b: s[r + c.b],
      a: s[r + c.a] / u,
    };
  }
  return {
    pixels: o,
    width: Math.min(...o.map((r) => r.length)),
    height: o.length,
  };
}
function _y(t, e) {
  const i = new Image();
  i.crossOrigin = "Anonymous";
  const n = new Promise((s, o) => {
    ((i.onerror = o),
      (i.onload = () => {
        const r = document.createElement("canvas");
        ((r.width = i.width), (r.height = i.height));
        const a = r.getContext("2d");
        if (!a) return o(new Error(`${Fe} Could not get canvas context`));
        (a.drawImage(
          i,
          jt.x,
          jt.y,
          i.width,
          i.height,
          jt.x,
          jt.y,
          r.width,
          r.height,
        ),
          s(Ta(a, r, e)));
      }));
  });
  return ((i.src = t), n);
}
function yy(t, e, i) {
  const n = document.createElement("canvas"),
    s = n.getContext("2d"),
    { font: o, text: r, lines: a, color: l } = t;
  if (!r || !s) return;
  const c = r.split(a.separator),
    u = je(o.size) ? `${o.size}px` : o.size,
    h = [];
  let d = 0,
    f = 0;
  for (const p of c) {
    s.font = `${o.style || ""} ${o.variant || ""} ${o.weight || ""} ${u} ${o.family}`;
    const y = s.measureText(p),
      w = {
        measure: y,
        text: p,
        height: y.actualBoundingBoxAscent + y.actualBoundingBoxDescent,
        width: y.width,
      };
    ((d = Math.max(d || my, w.width)), (f += w.height + a.spacing), h.push(w));
  }
  ((n.width = d), (n.height = f));
  let g = 0;
  for (const p of h)
    ((s.font = `${o.style || ""} ${o.variant || ""} ${o.weight || ""} ${u} ${o.family}`),
      i
        ? ((s.fillStyle = l),
          s.fillText(p.text, jt.x, g + p.measure.actualBoundingBoxAscent))
        : ((s.strokeStyle = l),
          s.strokeText(p.text, jt.x, g + p.measure.actualBoundingBoxAscent)),
      (g += p.height + a.spacing));
  return Ta(s, n, e);
}
const by = 100,
  Ul = 0.5;
class wy extends ms {
  constructor(e, i, n, s) {
    super(e, i, n, s);
    const o = s.filter,
      r = 0;
    let a = (l) => l.a > r;
    if (o !== void 0)
      if (it(o)) {
        if (Object.hasOwn(window, o)) {
          const l = window[o];
          zo(l) && (a = l);
        }
      } else a = o;
    ((this.filter = a),
      (this.scale = s.scale),
      (this.pixelData = { pixels: [], height: 0, width: 0 }));
  }
  async init() {
    let e;
    const i = this.options,
      n = i.selector,
      s = i.pixels,
      o = i.image,
      r = i.element,
      a = i.text,
      l = s.offset;
    if (o) {
      const c = o.src;
      if (!c) return;
      e = await _y(c, l);
    } else if (a) {
      const c = yy(a, l, this.fill);
      if (!c) return;
      e = c;
    } else if (r ?? n) {
      const c = r ?? (n && document.querySelector(n));
      if (!c) return;
      const u = c.getContext("2d");
      if (!u) return;
      e = Ta(u, c, l);
    }
    e && (this.pixelData = e);
  }
  randomPosition() {
    const { height: e, width: i } = this.pixelData,
      n = this.pixelData,
      s = this.position,
      o = this.scale,
      r = { x: s.x - i * o * Ul, y: s.y - e * o * Ul };
    for (let a = 0; a < by; a++) {
      const l = Math.floor(D() * i * e),
        c = { x: l % i, y: Math.floor(l / i) },
        u = n.pixels[c.y][c.x];
      if (this.filter(u))
        return {
          position: { x: c.x * o + r.x, y: c.y * o + r.y },
          color: { ...u },
          opacity: u.a,
        };
    }
    return null;
  }
  resize(e, i) {
    super.resize(e, i);
  }
}
class vy {
  constructor() {
    this.offset = 4;
  }
  load(e) {
    e && e.offset !== void 0 && (this.offset = e.offset);
  }
}
class xy {
  constructor() {
    ((this.family = "Verdana"),
      (this.size = 32),
      (this.style = ""),
      (this.variant = ""),
      (this.weight = ""));
  }
  load(e) {
    e &&
      (e.family !== void 0 && (this.family = e.family),
      e.size !== void 0 && (this.size = e.size),
      e.style !== void 0 && (this.style = e.style),
      e.variant !== void 0 && (this.variant = e.variant),
      e.weight !== void 0 && (this.weight = e.weight));
  }
}
class Sy {
  constructor() {
    ((this.separator = `
`),
      (this.spacing = 0));
  }
  load(e) {
    e &&
      (e.separator !== void 0 && (this.separator = e.separator),
      e.spacing !== void 0 && (this.spacing = e.spacing));
  }
}
class Py {
  constructor() {
    ((this.color = "#000000"),
      (this.font = new xy()),
      (this.lines = new Sy()),
      (this.text = ""));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = e.color),
      this.font.load(e.font),
      this.lines.load(e.lines),
      e.text !== void 0 && (this.text = e.text));
  }
}
const Cy = 0;
class Oy {
  constructor() {
    ((this.filter = (e) => e.a > Cy),
      (this.pixels = new vy()),
      (this.scale = 1),
      (this.selector = ""),
      (this.text = new Py()));
  }
  load(e) {
    e &&
      (e.element !== void 0 && (this.element = e.element),
      e.filter !== void 0 && (this.filter = e.filter),
      this.pixels.load(e.pixels),
      e.scale !== void 0 && (this.scale = e.scale),
      e.selector !== void 0 && (this.selector = e.selector),
      e.image !== void 0 && (this.image = e.image),
      this.text.load(e.text));
  }
}
class Ty {
  generate(e, i, n, s) {
    const o = new Oy();
    return (o.load(s), new wy(e, i, n, o));
  }
}
async function Ay(t, e = !0) {
  var n;
  const i = t;
  ((n = i.addEmitterShapeGenerator) == null || n.call(i, "canvas", new Ty()),
    await i.refresh(e));
}
const Vh = 100,
  po = 0.5;
function Ey(t, e, i, n) {
  let s = null;
  for (let o = 0; o < Vh; o++) {
    const r = {
      x: i.x + D() * n.width - n.width * po,
      y: i.y + D() * n.height - n.height * po,
    };
    if (t.isPointInPath(e, r.x, r.y)) {
      s = r;
      break;
    }
  }
  return s;
}
function ky(t, e, i, n) {
  let s = null;
  for (let o = 0; o < Vh; o++) {
    const r = {
      x: i.x + D() * n.width - n.width * po,
      y: i.y + D() * n.height - n.height * po,
    };
    if (t.isPointInStroke(e, r.x, r.y)) {
      s = r;
      break;
    }
  }
  return s;
}
const Es = 0.5;
class My extends ms {
  constructor(e, i, n, s) {
    super(e, i, n, s);
    const o = document.createElement("canvas").getContext("2d");
    if (!o) throw new Error(`${Fe} No 2d context available`);
    ((this.checkContext = o), (this.points = s.points));
    const r = this.points,
      a = new Path2D(),
      l = { x: e.x - i.width * Es, y: e.y - i.height * Es };
    for (const [h, d] of r.entries()) {
      const f = {
        x: l.x + (d.x * i.width) / ae,
        y: l.y + (d.y * i.height) / ae,
      };
      h ? a.lineTo(f.x, f.y) : a.moveTo(f.x, f.y);
    }
    const c = 0,
      u = r[c];
    if (u) {
      const h = {
        x: l.x + (u.x * i.width) / ae,
        y: l.y + (u.y * i.height) / ae,
      };
      a.lineTo(h.x, h.y);
    }
    this.path = a;
  }
  async init() {}
  randomPosition() {
    const e = this.checkContext,
      i = this.position,
      n = this.size,
      s = this.fill,
      o = this.path,
      r = s ? Ey(e, o, i, n) : ky(e, o, i, n);
    return r ? { position: r } : null;
  }
  resize(e, i) {
    super.resize(e, i);
    const n = this.points,
      s = new Path2D(),
      o = { x: e.x - i.width * Es, y: e.y - i.height * Es };
    for (const [l, c] of n.entries()) {
      const u = {
        x: o.x + (c.x * i.width) / ae,
        y: o.y + (c.y * i.height) / ae,
      };
      l ? s.lineTo(u.x, u.y) : s.moveTo(u.x, u.y);
    }
    const r = 0,
      a = n[r];
    if (a) {
      const l = {
        x: o.x + (a.x * i.width) / ae,
        y: o.y + (a.y * i.height) / ae,
      };
      s.lineTo(l.x, l.y);
    }
    this.path = s;
  }
}
const jl = { x: 50, y: 50 };
class Iy {
  constructor() {
    this.points = [];
  }
  load(e) {
    e &&
      e.points !== void 0 &&
      (this.points = e.points.map((i) => ({ x: i.x ?? jl.x, y: i.y ?? jl.y })));
  }
}
class Ry {
  generate(e, i, n, s) {
    const o = new Iy();
    return (o.load(s), new My(e, i, n, o));
  }
}
async function Vy(t, e = !0) {
  var n;
  const i = t;
  ((n = i.addEmitterShapeGenerator) == null || n.call(i, "path", new Ry()),
    await i.refresh(e));
}
const Ly = 2,
  zy = Math.PI * Ly,
  Gy = 0,
  $y = 100;
function Wl(t, e, i, n = Gy) {
  const s = [],
    o = zy / e;
  for (let r = 0; r < e; r++) {
    const a = o * r + n;
    s.push({ x: t.x + i * Math.cos(a), y: t.y + i * Math.sin(a) });
  }
  return s;
}
function Dy(t) {
  const i = t[0],
    n = { ...i },
    s = { ...i };
  for (const r of t)
    (r.x < n.x && (n.x = r.x),
      r.x > s.x && (s.x = r.x),
      r.y < n.y && (n.y = r.y),
      r.y > s.y && (s.y = r.y));
  let o = null;
  for (let r = 0; r < $y; r++) {
    const a = { x: n.x + D() * (s.x - n.x), y: n.y + D() * (s.y - n.y) };
    if (Hy(a, t)) {
      o = a;
      break;
    }
  }
  return o;
}
function Fy(t) {
  const e = Math.floor(D() * t.length),
    i = t[e],
    n = 1,
    s = t[(e + n) % t.length],
    o = D();
  return { x: i.x + (s.x - i.x) * o, y: i.y + (s.y - i.y) * o };
}
function Hy(t, e) {
  let i = !1;
  const n = 1;
  for (let s = 0, o = e.length - n; s < e.length; o = s++) {
    const r = e[s],
      a = e[o];
    r.y > t.y != a.y > t.y &&
      t.x < ((a.x - r.x) * (t.y - r.y)) / (a.y - r.y) + r.x &&
      (i = !i);
  }
  return i;
}
const Ql = 0.5;
class By extends ms {
  constructor(e, i, n, s) {
    (super(e, i, n, s),
      (this.sides = s.sides),
      (this.angle = It(s.angle)),
      (this.polygon = Wl(e, this.sides, i.width * Ql, this.angle)));
  }
  async init() {}
  randomPosition() {
    const e = this.fill,
      i = this.polygon,
      n = e ? Dy(i) : Fy(i);
    return n ? { position: n } : null;
  }
  resize(e, i) {
    (super.resize(e, i),
      (this.polygon = Wl(e, this.sides, i.width * Ql, this.angle)));
  }
}
class qy {
  constructor() {
    ((this.angle = 0), (this.sides = 5));
  }
  load(e) {
    e &&
      (e.angle !== void 0 && (this.angle = e.angle),
      e.sides !== void 0 && (this.sides = e.sides));
  }
}
class Ny {
  generate(e, i, n, s) {
    const o = new qy();
    return (o.load(s), new By(e, i, n, o));
  }
}
async function Uy(t, e = !0) {
  var n;
  const i = t;
  ((n = i.addEmitterShapeGenerator) == null || n.call(i, "polygon", new Ny()),
    await i.refresh(e));
}
class jy {
  constructor(e, i) {
    ((this._exportImage = async (n) => {
      const s = this._container.canvas.element;
      if (s)
        return new Promise((o) => {
          s.toBlob(
            (r) => {
              if (!r) {
                o(void 0);
                return;
              }
              o(r);
            },
            n.type ?? "image/png",
            n.quality,
          );
        });
    }),
      (this._container = e),
      (this._engine = i));
  }
  async export(e, i) {
    const n = { supported: !1 };
    switch (e) {
      case "image":
        ((n.supported = !0), (n.blob = await this._exportImage(i)));
        break;
    }
    return n;
  }
}
class Wy {
  constructor(e) {
    ((this.id = "export-image"), (this._engine = e));
  }
  getPlugin(e) {
    return Promise.resolve(new jy(e, this._engine));
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function Qy(t, e = !0) {
  await t.addPlugin(new Wy(t), e);
}
const Ky = 2;
class Yy {
  constructor(e, i) {
    ((this._exportJSON = async () => {
      const n = JSON.stringify(
        this._container.actualOptions,
        (s, o) => {
          if (!s.startsWith("_")) return o;
        },
        Ky,
      );
      return Promise.resolve(new Blob([n], { type: "application/json" }));
    }),
      (this._container = e),
      (this._engine = i));
  }
  async export(e) {
    const i = { supported: !1 };
    switch (e) {
      case "json":
        ((i.supported = !0), (i.blob = await this._exportJSON()));
        break;
    }
    return i;
  }
}
class Zy {
  constructor(e) {
    ((this.id = "export-json"), (this._engine = e));
  }
  getPlugin(e) {
    return Promise.resolve(new Yy(e, this._engine));
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function Jy(t, e = !0) {
  await t.addPlugin(new Zy(t), e);
}
const Xy = ["webm", "ogg", "mp4", "x-matroska"],
  e1 = [
    "vp9",
    "vp9.0",
    "vp8",
    "vp8.0",
    "avc1",
    "av1",
    "h265",
    "h.265",
    "h264",
    "h.264",
    "opus",
    "pcm",
    "aac",
    "mpeg",
    "mp4a",
  ];
function t1() {
  const t = (i) => MediaRecorder.isTypeSupported(i),
    e = [];
  return (
    Xy.forEach((i) => {
      const n = `video/${i}`;
      (e1.forEach((s) =>
        [`${n};codecs=${s}`, `${n};codecs=${s.toUpperCase()}`].forEach((o) => {
          t(o) && e.push(o);
        }),
      ),
        t(n) && e.push(n));
    }),
    e
  );
}
class i1 {
  constructor(e, i) {
    ((this._supportedTypes = []),
      (this._exportVideo = async (n) => {
        const s = this._container.canvas.element;
        if (s)
          return new Promise((o) => {
            const r = s.captureStream(
                n.fps ?? this._container.actualOptions.fpsLimit,
              ),
              a = 0,
              l = n.mimeType ?? this._supportedTypes[a],
              c = new MediaRecorder(r, { mimeType: l }),
              u = [],
              h = 5;
            (c.addEventListener("dataavailable", (d) => {
              u.push(d.data);
            }),
              c.addEventListener("stop", () => {
                o(new Blob(u, { type: l }));
              }),
              c.start(),
              setTimeout(
                () => {
                  c.stop();
                },
                n.duration ?? h * ye,
              ));
          });
      }),
      (this._container = e),
      (this._engine = i),
      (this._supportedTypes = t1()));
  }
  async export(e, i) {
    const n = { supported: !1 };
    switch (e) {
      case "video":
        ((n.supported = !0), (n.blob = await this._exportVideo(i)));
        break;
    }
    return n;
  }
}
class n1 {
  constructor(e) {
    ((this.id = "export-video"), (this._engine = e));
  }
  getPlugin(e) {
    return Promise.resolve(new i1(e, this._engine));
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function s1(t, e = !0) {
  await t.addPlugin(new n1(t), e);
}
class o1 {
  constructor() {
    ((this.replaceCursor = !1), (this.pauseOnStop = !1), (this.stopDelay = 0));
  }
  load(e) {
    e &&
      (e.options !== void 0 && (this.options = fe({}, e.options)),
      e.replaceCursor !== void 0 && (this.replaceCursor = e.replaceCursor),
      e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop),
      e.stopDelay !== void 0 && (this.stopDelay = e.stopDelay));
  }
}
const Kl = "particle";
class r1 extends lt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact() {
    var l, c, u, h;
    const e = this.container,
      { interactivity: i } = e,
      n = e.actualOptions;
    if (!e.retina.reduceFactor) return;
    const s = i.mouse.position,
      o = n.interactivity.modes.particle;
    if (!o) return;
    const r =
        o.pauseOnStop &&
        (i.mouse.position === this._lastPosition ||
          (((l = i.mouse.position) == null ? void 0 : l.x) ===
            ((c = this._lastPosition) == null ? void 0 : c.x) &&
            ((u = i.mouse.position) == null ? void 0 : u.y) ===
              ((h = this._lastPosition) == null ? void 0 : h.y))),
      a = o.stopDelay;
    if (
      (s ? (this._lastPosition = { ...s }) : delete this._lastPosition,
      !!this._lastPosition)
    ) {
      if (r) {
        if (this._clearTimeout) return;
        this._clearTimeout = setTimeout(() => {
          if (this._particle) {
            if (o.replaceCursor) {
              const d = i.element;
              d &&
                (d instanceof Window
                  ? (document.body.style.cursor = "")
                  : (d.style.cursor = ""));
            }
            (this.container.particles.remove(this._particle, void 0, !0),
              delete this._particle);
          }
        }, a);
        return;
      }
      if (
        (this._clearTimeout &&
          (clearTimeout(this._clearTimeout), delete this._clearTimeout),
        !this._particle)
      ) {
        const d = fe(o.options, { move: { enable: !1 } });
        if (
          ((this._particle = e.particles.addParticle(this._lastPosition, d)),
          o.replaceCursor)
        ) {
          const f = i.element;
          f &&
            (f instanceof Window
              ? (document.body.style.cursor = "none")
              : (f.style.cursor = "none"));
        }
      }
      this._particle &&
        ((this._particle.position.x = this._lastPosition.x),
        (this._particle.position.y = this._lastPosition.y));
    }
  }
  isEnabled(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse,
      o = ((e == null ? void 0 : e.interactivity) ?? n.interactivity).events;
    return (
      (s.clicking && s.inside && !!s.position && ge(Kl, o.onClick.mode)) ||
      (s.inside && !!s.position && ge(Kl, o.onHover.mode))
    );
  }
  loadModeOptions(e, ...i) {
    e.particle || (e.particle = new o1());
    for (const n of i) e.particle.load(n == null ? void 0 : n.particle);
  }
  reset() {}
}
async function a1(t, e = !0) {
  await t.addInteractor(
    "externalParticle",
    (i) => Promise.resolve(new r1(i)),
    e,
  );
}
const l1 = "pop";
class c1 extends lt {
  constructor(e) {
    (super(e),
      (this.handleClickMode = (i) => {
        const n = this.container;
        if (i !== l1) return;
        const s = n.interactivity.mouse.clickPosition;
        if (!s) return;
        const o = n.particles.quadTree.queryCircle(s, n.retina.pixelRatio);
        if (o.length) for (const r of o) n.particles.remove(r);
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  reset() {}
}
async function u1(t, e = !0) {
  await t.addInteractor("externalPop", (i) => Promise.resolve(new c1(i)), e);
}
class h1 {
  constructor() {
    ((this.radius = 0), (this.mass = 0));
  }
  load(e) {
    e &&
      (e.mass !== void 0 && (this.mass = e.mass),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class d1 extends _t {
  constructor() {
    (super(), (this.density = 5), (this.value = 50), (this.limit = new h1()));
  }
  load(e) {
    e &&
      (super.load(e),
      e.density !== void 0 && (this.density = e.density),
      je(e.limit) ? (this.limit.radius = e.limit) : this.limit.load(e.limit));
  }
}
class go {
  constructor() {
    ((this.color = new he()),
      (this.color.value = "#000000"),
      (this.draggable = !1),
      (this.opacity = 1),
      (this.destroy = !0),
      (this.orbits = !1),
      (this.size = new d1()));
  }
  load(e) {
    e !== void 0 &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.draggable !== void 0 && (this.draggable = e.draggable),
      (this.name = e.name),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = H(e.position.x)),
        e.position.y !== void 0 && (this.position.y = H(e.position.y))),
      e.size !== void 0 && this.size.load(e.size),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.orbits !== void 0 && (this.orbits = e.orbits));
  }
}
var mo;
(function (t) {
  t.absorber = "absorber";
})(mo || (mo = {}));
const f1 = 2,
  p1 = 0.033,
  g1 = 0,
  m1 = 0,
  _1 = 0,
  Yl = { x: 0, y: 0 },
  y1 = 0,
  b1 = 2,
  Zl = Math.PI * b1,
  Jl = 0;
class w1 {
  constructor(e, i, n, s) {
    var r;
    ((this.absorbers = e),
      (this.container = i),
      (this._calcPosition = () => {
        const a = fh({
          size: this.container.canvas.size,
          position: this.options.position,
        });
        return ne.create(a.x, a.y);
      }),
      (this._updateParticlePosition = (a, l) => {
        if (a.destroyed) return;
        const c = this.container,
          u = c.canvas.size;
        if (a.needsNewPosition) {
          const h = dh({ size: u });
          (a.position.setTo(h),
            a.velocity.setTo(a.initialVelocity),
            (a.absorberOrbit = void 0),
            (a.needsNewPosition = !1));
        }
        if (this.options.orbits) {
          if (
            (a.absorberOrbit === void 0 &&
              ((a.absorberOrbit = ne.origin),
              (a.absorberOrbit.length = Ne(a.getPosition(), this.position)),
              (a.absorberOrbit.angle = D() * Zl)),
            a.absorberOrbit.length <= this.size && !this.options.destroy)
          ) {
            const p = Math.min(u.width, u.height),
              y = 1,
              w = 0.1,
              x = 0.2;
            a.absorberOrbit.length = p * (y + (D() * x - w));
          }
          a.absorberOrbitDirection === void 0 &&
            (a.absorberOrbitDirection =
              a.velocity.x >= Jl ? Ee.clockwise : Ee.counterClockwise);
          const h = a.absorberOrbit.length,
            d = a.absorberOrbit.angle,
            f = a.absorberOrbitDirection;
          a.velocity.setTo(ne.origin);
          const g = {
            x: f === Ee.clockwise ? Math.cos : Math.sin,
            y: f === Ee.clockwise ? Math.sin : Math.cos,
          };
          ((a.position.x = this.position.x + h * g.x(d)),
            (a.position.y = this.position.y + h * g.y(d)),
            (a.absorberOrbit.length -= l.length),
            (a.absorberOrbit.angle +=
              (((a.retina.moveSpeed ?? Jl) * c.retina.pixelRatio) / ae) *
              c.retina.reduceFactor));
        } else {
          const h = ne.origin;
          ((h.length = l.length), (h.angle = l.angle), a.velocity.addTo(h));
        }
      }),
      (this.initialPosition = s ? ne.create(s.x, s.y) : void 0),
      n instanceof go
        ? (this.options = n)
        : ((this.options = new go()), this.options.load(n)),
      (this.dragging = !1),
      (this.name = this.options.name),
      (this.opacity = this.options.opacity),
      (this.size = S(this.options.size.value) * i.retina.pixelRatio),
      (this.mass =
        this.size * this.options.size.density * i.retina.reduceFactor));
    const o = this.options.size.limit;
    ((this.limit = {
      radius: o.radius * i.retina.pixelRatio * i.retina.reduceFactor,
      mass: o.mass,
    }),
      (this.color = Ue(this.options.color) ?? { b: 0, g: 0, r: 0 }),
      (this.position =
        ((r = this.initialPosition) == null ? void 0 : r.copy()) ??
        this._calcPosition()));
  }
  attract(e) {
    const i = this.container,
      n = this.options;
    if (n.draggable) {
      const c = i.interactivity.mouse;
      (c.clicking && c.downPosition
        ? Ne(this.position, c.downPosition) <= this.size && (this.dragging = !0)
        : (this.dragging = !1),
        this.dragging &&
          c.position &&
          ((this.position.x = c.position.x), (this.position.y = c.position.y)));
    }
    const s = e.getPosition(),
      { dx: o, dy: r, distance: a } = Me(this.position, s),
      l = ne.create(o, r);
    if (
      ((l.length = (this.mass / Math.pow(a, f1)) * i.retina.reduceFactor),
      a < this.size + e.getRadius())
    ) {
      const c = e.getRadius() * p1 * i.retina.pixelRatio;
      ((this.size > e.getRadius() && a < this.size - e.getRadius()) ||
      (e.absorberOrbit !== void 0 && e.absorberOrbit.length < g1)
        ? n.destroy
          ? e.destroy()
          : ((e.needsNewPosition = !0), this._updateParticlePosition(e, l))
        : (n.destroy && (e.size.value -= c),
          this._updateParticlePosition(e, l)),
        (this.limit.radius <= m1 || this.size < this.limit.radius) &&
          (this.size += c),
        (this.limit.mass <= _1 || this.mass < this.limit.mass) &&
          (this.mass += c * this.options.size.density * i.retina.reduceFactor));
    } else this._updateParticlePosition(e, l);
  }
  draw(e) {
    (e.translate(this.position.x, this.position.y),
      e.beginPath(),
      e.arc(Yl.x, Yl.y, this.size, y1, Zl, !1),
      e.closePath(),
      (e.fillStyle = tt(this.color, this.opacity)),
      e.fill());
  }
  resize() {
    const e = this.initialPosition;
    this.position =
      e && ps(e, this.container.canvas.size, ne.origin)
        ? e
        : this._calcPosition();
  }
}
const Xl = 0;
class v1 {
  constructor(e) {
    ((this.container = e),
      (this.array = []),
      (this.absorbers = []),
      (this.interactivityAbsorbers = []),
      (e.getAbsorber = (i) =>
        i === void 0 || je(i)
          ? this.array[i ?? Xl]
          : this.array.find((n) => n.name === i)),
      (e.addAbsorber = async (i, n) => this.addAbsorber(i, n)));
  }
  async addAbsorber(e, i) {
    const n = new w1(this, this.container, e, i);
    return (this.array.push(n), Promise.resolve(n));
  }
  draw(e) {
    for (const i of this.array) i.draw(e);
  }
  handleClickMode(e) {
    const i = this.absorbers,
      n = this.interactivityAbsorbers;
    if (e === mo.absorber) {
      const s = Re(n),
        o = s ?? Re(i),
        r = this.container.interactivity.mouse.clickPosition;
      this.addAbsorber(o, r);
    }
  }
  async init() {
    ((this.absorbers = this.container.actualOptions.absorbers),
      (this.interactivityAbsorbers =
        this.container.actualOptions.interactivity.modes.absorbers));
    const e = Pe(this.absorbers, async (i) => {
      await this.addAbsorber(i);
    });
    e instanceof Array ? await Promise.all(e) : await e;
  }
  particleUpdate(e) {
    for (const i of this.array) if ((i.attract(e), e.destroyed)) break;
  }
  removeAbsorber(e) {
    const i = this.array.indexOf(e);
    i >= Xl && this.array.splice(i, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
}
class x1 {
  constructor() {
    this.id = "absorbers";
  }
  async getPlugin(e) {
    return Promise.resolve(new v1(e));
  }
  loadOptions(e, i) {
    var n, s;
    (!this.needsPlugin(e) && !this.needsPlugin(i)) ||
      (i != null &&
        i.absorbers &&
        (e.absorbers = Pe(i.absorbers, (o) => {
          const r = new go();
          return (r.load(o), r);
        })),
      (e.interactivity.modes.absorbers = Pe(
        (s =
          (n = i == null ? void 0 : i.interactivity) == null
            ? void 0
            : n.modes) == null
          ? void 0
          : s.absorbers,
        (o) => {
          const r = new go();
          return (r.load(o), r);
        },
      )));
  }
  needsPlugin(e) {
    var n, s, o;
    if (!e) return !1;
    const i = e.absorbers;
    return Ge(i)
      ? !!i.length
      : i
        ? !0
        : !!(
            (o =
              (s = (n = e.interactivity) == null ? void 0 : n.events) == null
                ? void 0
                : s.onClick) != null &&
            o.mode &&
            ge(mo.absorber, e.interactivity.events.onClick.mode)
          );
  }
}
async function S1(t, e = !0) {
  await t.addPlugin(new x1(), e);
}
class P1 {
  load(e) {
    e &&
      (e.bottom !== void 0 && (this.bottom = H(e.bottom)),
      e.left !== void 0 && (this.left = H(e.left)),
      e.right !== void 0 && (this.right = H(e.right)),
      e.top !== void 0 && (this.top = H(e.top)));
  }
}
var _o;
(function (t) {
  ((t.none = "none"), (t.split = "split"));
})(_o || (_o = {}));
class C1 extends _t {
  constructor() {
    (super(), (this.value = 3));
  }
}
class O1 extends _t {
  constructor() {
    (super(), (this.value = { min: 4, max: 9 }));
  }
}
class T1 {
  constructor() {
    ((this.count = 1),
      (this.factor = new C1()),
      (this.rate = new O1()),
      (this.sizeOffset = !0));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.count !== void 0 && (this.count = e.count),
      this.factor.load(e.factor),
      this.rate.load(e.rate),
      (this.particles = Pe(e.particles, (i) => fe({}, i))),
      e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset),
      e.colorOffset &&
        ((this.colorOffset = this.colorOffset ?? {}),
        e.colorOffset.h !== void 0 && (this.colorOffset.h = e.colorOffset.h),
        e.colorOffset.s !== void 0 && (this.colorOffset.s = e.colorOffset.s),
        e.colorOffset.l !== void 0 && (this.colorOffset.l = e.colorOffset.l)));
  }
}
class A1 {
  constructor() {
    ((this.bounds = new P1()), (this.mode = _o.none), (this.split = new T1()));
  }
  load(e) {
    e &&
      (e.mode && (this.mode = e.mode),
      e.bounds && this.bounds.load(e.bounds),
      this.split.load(e.split));
  }
}
const ks = 0,
  E1 = 0.5,
  k1 = 0,
  M1 = 1,
  I1 = 500,
  R1 = 0;
function V1(t, e, i, n) {
  const s = i.options.destroy;
  if (!s) return;
  const o = s.split,
    r = Ca(t, e, i.options),
    a = S(o.factor.value),
    l = i.getFillColor();
  (o.color
    ? r.color.load(o.color)
    : o.colorOffset && l
      ? r.color.load({
          value: {
            hsl: {
              h: l.h + S(o.colorOffset.h ?? ks),
              s: l.s + S(o.colorOffset.s ?? ks),
              l: l.l + S(o.colorOffset.l ?? ks),
            },
          },
        })
      : r.color.load({ value: { hsl: i.getFillColor() } }),
    r.move.load({
      center: { x: i.position.x, y: i.position.y, mode: Vt.precise },
    }),
    je(r.size.value)
      ? (r.size.value /= a)
      : ((r.size.value.min /= a), (r.size.value.max /= a)),
    r.load(n));
  const c = o.sizeOffset ? H(-i.size.value, i.size.value) : ks,
    u = { x: i.position.x + ke(c), y: i.position.y + ke(c) };
  return e.particles.addParticle(u, r, i.group, (h) =>
    h.size.value < E1
      ? !1
      : ((h.velocity.length = ke(H(i.velocity.length, h.velocity.length))),
        (h.splitCount = (i.splitCount ?? k1) + M1),
        (h.unbreakable = !0),
        setTimeout(() => {
          h.unbreakable = !1;
        }, I1),
        !0),
  );
}
function L1(t, e, i) {
  const n = i.options.destroy;
  if (!n) return;
  const s = n.split;
  if (s.count >= R1 && (i.splitCount === void 0 || i.splitCount++ > s.count))
    return;
  const o = S(s.rate.value),
    r = Re(s.particles);
  for (let a = 0; a < o; a++) V1(t, e, i, r);
}
class z1 {
  constructor(e, i) {
    ((this.container = i), (this.engine = e));
  }
  init(e) {
    const i = this.container,
      n = e.options,
      s = n.destroy;
    if (!s) return;
    e.splitCount = 0;
    const o = s.bounds;
    e.destroyBounds || (e.destroyBounds = {});
    const { bottom: r, left: a, right: l, top: c } = o,
      { destroyBounds: u } = e,
      h = i.canvas.size;
    (r && (u.bottom = (S(r) * h.height) / ae),
      a && (u.left = (S(a) * h.width) / ae),
      l && (u.right = (S(l) * h.width) / ae),
      c && (u.top = (S(c) * h.height) / ae));
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...i) {
    e.destroy || (e.destroy = new A1());
    for (const n of i) e.destroy.load(n == null ? void 0 : n.destroy);
  }
  particleDestroyed(e, i) {
    if (i) return;
    const n = e.options.destroy;
    n && n.mode === _o.split && L1(this.engine, this.container, e);
  }
  update(e) {
    if (!this.isEnabled(e)) return;
    const i = e.getPosition(),
      n = e.destroyBounds;
    n &&
      ((n.bottom !== void 0 && i.y >= n.bottom) ||
        (n.left !== void 0 && i.x <= n.left) ||
        (n.right !== void 0 && i.x >= n.right) ||
        (n.top !== void 0 && i.y <= n.top)) &&
      e.destroy();
  }
}
async function G1(t, e = !0) {
  await t.addParticleUpdater(
    "destroy",
    (i) => Promise.resolve(new z1(t, i)),
    e,
  );
}
const Bn = 0.25,
  Nr = 2,
  $1 = Math.PI * Nr,
  ec = 2,
  tc = 0.5;
class D1 extends ms {
  constructor(e, i, n, s) {
    super(e, i, n, s);
  }
  async init() {}
  randomPosition() {
    const e = this.size,
      i = this.fill,
      n = this.position,
      s = (h, d) => {
        const f = D() * Bn,
          g = Math.atan((d / h) * Math.tan($1 * f)),
          p = D();
        return p < Bn
          ? g
          : p < Nr * Bn
            ? Math.PI - g
            : p < Nr * Bn + Bn
              ? Math.PI + g
              : -g;
      },
      o = (h, d, f) =>
        (h * d) / Math.sqrt((d * Math.cos(f)) ** ec + (h * Math.sin(f)) ** ec),
      [r, a] = [e.width * tc, e.height * tc],
      l = s(r, a),
      c = o(r, a, l),
      u = i ? c * Math.sqrt(D()) : c;
    return { position: { x: n.x + u * Math.cos(l), y: n.y + u * Math.sin(l) } };
  }
}
class F1 {
  generate(e, i, n, s) {
    return new D1(e, i, n, s);
  }
}
async function H1(t, e = !0) {
  var n;
  const i = t;
  ((n = i.addEmitterShapeGenerator) == null || n.call(i, "circle", new F1()),
    await i.refresh(e));
}
const ic = 0.5,
  B1 = 4,
  q1 = 2;
var gn;
(function (t) {
  ((t[(t.TopLeft = 0)] = "TopLeft"),
    (t[(t.TopRight = 1)] = "TopRight"),
    (t[(t.BottomRight = 2)] = "BottomRight"),
    (t[(t.BottomLeft = 3)] = "BottomLeft"));
})(gn || (gn = {}));
function nc(t, e) {
  return t + e * (D() - Qt);
}
class N1 extends ms {
  constructor(e, i, n, s) {
    super(e, i, n, s);
  }
  async init() {}
  randomPosition() {
    const e = this.fill,
      i = this.position,
      n = this.size;
    if (e) return { position: { x: nc(i.x, n.width), y: nc(i.y, n.height) } };
    {
      const s = n.width * ic,
        o = n.height * ic,
        r = Math.floor(D() * B1),
        a = (D() - Qt) * q1;
      switch (r) {
        case gn.TopLeft:
          return { position: { x: i.x + a * s, y: i.y - o } };
        case gn.TopRight:
          return { position: { x: i.x - s, y: i.y + a * o } };
        case gn.BottomRight:
          return { position: { x: i.x + a * s, y: i.y + o } };
        case gn.BottomLeft:
        default:
          return { position: { x: i.x + s, y: i.y + a * o } };
      }
    }
  }
}
class U1 {
  generate(e, i, n, s) {
    return new N1(e, i, n, s);
  }
}
async function j1(t, e = !0) {
  var n;
  const i = t;
  ((n = i.addEmitterShapeGenerator) == null || n.call(i, "square", new U1()),
    await i.refresh(e));
}
class W1 {
  constructor() {
    ((this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1));
  }
  load(e) {
    e &&
      (e.delay !== void 0 && (this.delay = e.delay),
      e.quantity !== void 0 && (this.quantity = e.quantity),
      e.particles !== void 0 && (this.particles = fe({}, e.particles)),
      e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop));
  }
}
const sc = "trail";
class Q1 extends lt {
  constructor(e) {
    (super(e), (this._delay = 0));
  }
  clear() {}
  init() {}
  interact(e) {
    var c, u, h, d;
    const i = this.container,
      { interactivity: n } = i;
    if (!i.retina.reduceFactor) return;
    const s = i.actualOptions,
      o = s.interactivity.modes.trail;
    if (!o) return;
    const r = (o.delay * ye) / this.container.retina.reduceFactor;
    if ((this._delay < r && (this._delay += e.value), this._delay < r)) return;
    const a = !(
        o.pauseOnStop &&
        (n.mouse.position === this._lastPosition ||
          (((c = n.mouse.position) == null ? void 0 : c.x) ===
            ((u = this._lastPosition) == null ? void 0 : u.x) &&
            ((h = n.mouse.position) == null ? void 0 : h.y) ===
              ((d = this._lastPosition) == null ? void 0 : d.y)))
      ),
      l = i.interactivity.mouse.position;
    (l ? (this._lastPosition = { ...l }) : delete this._lastPosition,
      a && i.particles.push(o.quantity, i.interactivity.mouse, o.particles),
      (this._delay -= r));
  }
  isEnabled(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse,
      o = ((e == null ? void 0 : e.interactivity) ?? n.interactivity).events;
    return (
      (s.clicking && s.inside && !!s.position && ge(sc, o.onClick.mode)) ||
      (s.inside && !!s.position && ge(sc, o.onHover.mode))
    );
  }
  loadModeOptions(e, ...i) {
    e.trail || (e.trail = new W1());
    for (const n of i) e.trail.load(n == null ? void 0 : n.trail);
  }
  reset() {}
}
async function K1(t, e = !0) {
  await t.addInteractor("externalTrail", (i) => Promise.resolve(new Q1(i)), e);
}
var Wi;
(function (t) {
  ((t.both = "both"), (t.horizontal = "horizontal"), (t.vertical = "vertical"));
})(Wi || (Wi = {}));
const Y1 = 2,
  Lh = Math.PI * Y1,
  Z1 = 360;
function J1(t) {
  const e = t.options.roll;
  if (!(e != null && e.enable)) {
    t.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 };
    return;
  }
  if (
    ((t.roll = {
      enable: e.enable,
      horizontal: e.mode === Wi.horizontal || e.mode === Wi.both,
      vertical: e.mode === Wi.vertical || e.mode === Wi.both,
      angle: D() * Lh,
      speed: S(e.speed) / Z1,
    }),
    e.backColor)
  )
    t.backColor = Zt(e.backColor);
  else if (e.darken.enable && e.enlighten.enable) {
    const i = D() >= Qt ? fi.darken : fi.enlighten;
    t.roll.alter = {
      type: i,
      value: S(i === fi.darken ? e.darken.value : e.enlighten.value),
    };
  } else
    e.darken.enable
      ? (t.roll.alter = { type: fi.darken, value: S(e.darken.value) })
      : e.enlighten.enable &&
        (t.roll.alter = { type: fi.enlighten, value: S(e.enlighten.value) });
}
function X1(t, e) {
  const i = t.options.roll,
    n = t.roll;
  if (!n || !(i != null && i.enable)) return;
  const s = n.speed * e.factor,
    o = Lh;
  ((n.angle += s), n.angle > o && (n.angle -= o));
}
class oc {
  constructor() {
    ((this.enable = !1), (this.value = 0));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class e0 {
  constructor() {
    ((this.darken = new oc()),
      (this.enable = !1),
      (this.enlighten = new oc()),
      (this.mode = Wi.vertical),
      (this.speed = 25));
  }
  load(e) {
    e &&
      (e.backColor !== void 0 &&
        (this.backColor = he.create(this.backColor, e.backColor)),
      this.darken.load(e.darken),
      e.enable !== void 0 && (this.enable = e.enable),
      this.enlighten.load(e.enlighten),
      e.mode !== void 0 && (this.mode = e.mode),
      e.speed !== void 0 && (this.speed = H(e.speed)));
  }
}
class t0 {
  getTransformValues(e) {
    var o;
    const i = ((o = e.roll) == null ? void 0 : o.enable) && e.roll,
      n = i && i.horizontal,
      s = i && i.vertical;
    return {
      a: n ? Math.cos(i.angle) : void 0,
      d: s ? Math.sin(i.angle) : void 0,
    };
  }
  init(e) {
    J1(e);
  }
  isEnabled(e) {
    const i = e.options.roll;
    return !e.destroyed && !e.spawning && !!(i != null && i.enable);
  }
  loadOptions(e, ...i) {
    e.roll || (e.roll = new e0());
    for (const n of i) e.roll.load(n == null ? void 0 : n.roll);
  }
  update(e, i) {
    this.isEnabled(e) && X1(e, i);
  }
}
async function i0(t, e = !0) {
  await t.addParticleUpdater("roll", () => Promise.resolve(new t0()), e);
}
const Ur = 0.5,
  Qi = 0,
  Mt = 1,
  rc = 60,
  ac = 0,
  n0 = 0.01;
function s0(t) {
  const e = t.initialPosition,
    { dx: i, dy: n } = Me(e, t.position),
    s = Math.abs(i),
    o = Math.abs(n),
    { maxDistance: r } = t.retina,
    a = r.horizontal,
    l = r.vertical;
  if (!a && !l) return;
  const c = (a && s >= a) ?? !1,
    u = (l && o >= l) ?? !1;
  if ((c || u) && !t.misplaced)
    ((t.misplaced = (!!a && s > a) || (!!l && o > l)),
      a && (t.velocity.x = t.velocity.y * Ur - t.velocity.x),
      l && (t.velocity.y = t.velocity.x * Ur - t.velocity.y));
  else if ((!a || s < a) && (!l || o < l) && t.misplaced) t.misplaced = !1;
  else if (t.misplaced) {
    const h = t.position,
      d = t.velocity;
    (a && ((h.x < e.x && d.x < Qi) || (h.x > e.x && d.x > Qi)) && (d.x *= -D()),
      l &&
        ((h.y < e.y && d.y < Qi) || (h.y > e.y && d.y > Qi)) &&
        (d.y *= -D()));
  }
}
function o0(t, e, i, n, s, o) {
  a0(t, o);
  const r = t.gravity,
    a = r != null && r.enable && r.inverse ? -Mt : Mt;
  (s && i && (t.velocity.x += (s * o.factor) / (rc * i)),
    r != null &&
      r.enable &&
      i &&
      (t.velocity.y += (a * (r.acceleration * o.factor)) / (rc * i)));
  const l = t.moveDecay;
  t.velocity.multTo(l);
  const c = t.velocity.mult(i);
  r != null &&
    r.enable &&
    n > Qi &&
    ((!r.inverse && c.y >= Qi && c.y >= n) ||
      (r.inverse && c.y <= Qi && c.y <= -n)) &&
    ((c.y = a * n), i && (t.velocity.y = c.y / i));
  const u = t.options.zIndex,
    h = (Mt - t.zIndexFactor) ** u.velocityRate;
  c.multTo(h);
  const { position: d } = t;
  (d.addTo(c),
    e.vibrate &&
      ((d.x += Math.sin(d.x * Math.cos(d.y))),
      (d.y += Math.cos(d.y * Math.sin(d.x)))));
}
function r0(t, e) {
  const i = t.container;
  if (!t.spin) return;
  const n = {
    x: t.spin.direction === Ee.clockwise ? Math.cos : Math.sin,
    y: t.spin.direction === Ee.clockwise ? Math.sin : Math.cos,
  };
  ((t.position.x = t.spin.center.x + t.spin.radius * n.x(t.spin.angle)),
    (t.position.y = t.spin.center.y + t.spin.radius * n.y(t.spin.angle)),
    (t.spin.radius += t.spin.acceleration));
  const s = Math.max(i.canvas.size.width, i.canvas.size.height),
    o = s * Ur;
  (t.spin.radius > o
    ? ((t.spin.radius = o), (t.spin.acceleration *= -Mt))
    : t.spin.radius < ac &&
      ((t.spin.radius = ac), (t.spin.acceleration *= -Mt)),
    (t.spin.angle += e * n0 * (Mt - t.spin.radius / s)));
}
function a0(t, e) {
  var r;
  const i = t.options,
    n = i.move.path;
  if (!n.enable) return;
  if (t.lastPathTime <= t.pathDelay) {
    t.lastPathTime += e.value;
    return;
  }
  const o = (r = t.pathGenerator) == null ? void 0 : r.generate(t, e);
  (o && t.velocity.addTo(o),
    n.clamp &&
      ((t.velocity.x = at(t.velocity.x, -Mt, Mt)),
      (t.velocity.y = at(t.velocity.y, -Mt, Mt))),
    (t.lastPathTime -= t.pathDelay));
}
function l0(t) {
  return t.slow.inRange ? t.slow.factor : Mt;
}
function c0(t) {
  const e = t.container,
    i = t.options,
    n = i.move.spin;
  if (!n.enable) return;
  const s = n.position ?? { x: 50, y: 50 },
    o = 0.01,
    r = { x: s.x * o * e.canvas.size.width, y: s.y * o * e.canvas.size.height },
    a = t.getPosition(),
    l = Ne(a, r),
    c = S(n.acceleration);
  t.retina.spinAcceleration = c * e.retina.pixelRatio;
  const u = 0;
  t.spin = {
    center: r,
    direction: t.velocity.x >= u ? Ee.clockwise : Ee.counterClockwise,
    angle: t.velocity.angle,
    radius: l,
    acceleration: t.retina.spinAcceleration,
  };
}
const u0 = 2,
  h0 = 1,
  d0 = 1;
class f0 {
  init(e) {
    const i = e.options,
      n = i.move.gravity;
    ((e.gravity = {
      enable: n.enable,
      acceleration: S(n.acceleration),
      inverse: n.inverse,
    }),
      c0(e));
  }
  isEnabled(e) {
    return !e.destroyed && e.options.move.enable;
  }
  move(e, i) {
    var p, y;
    const n = e.options,
      s = n.move;
    if (!s.enable) return;
    const o = e.container,
      r = o.retina.pixelRatio;
    ((p = e.retina).moveSpeed ?? (p.moveSpeed = S(s.speed) * r),
      (y = e.retina).moveDrift ?? (y.moveDrift = S(e.options.move.drift) * r));
    const a = l0(e),
      l = e.retina.moveSpeed * o.retina.reduceFactor,
      c = e.retina.moveDrift,
      u = ot(n.size.value) * r,
      h = s.size ? e.getRadius() / u : h0,
      d = i.factor || d0,
      f = (l * h * a * d) / u0,
      g = e.retina.maxSpeed ?? o.retina.maxSpeed;
    (s.spin.enable ? r0(e, f) : o0(e, s, f, g, c, i), s0(e));
  }
}
async function p0(t, e = !0) {
  await t.addMover("base", () => Promise.resolve(new f0()), e);
}
const g0 = 2,
  m0 = Math.PI * g0,
  _0 = 0,
  lc = { x: 0, y: 0 };
function y0(t) {
  const { context: e, particle: i, radius: n } = t;
  i.circleRange || (i.circleRange = { min: _0, max: m0 });
  const s = i.circleRange;
  e.arc(lc.x, lc.y, n, s.min, s.max, !1);
}
const b0 = 12,
  w0 = 360,
  cc = 0;
class v0 {
  constructor() {
    this.validTypes = ["circle"];
  }
  draw(e) {
    y0(e);
  }
  getSidesCount() {
    return b0;
  }
  particleInit(e, i) {
    const n = i.shapeData,
      s = (n == null ? void 0 : n.angle) ?? { max: w0, min: cc };
    i.circleRange = _i(s)
      ? { min: It(s.min), max: It(s.max) }
      : { min: cc, max: It(s) };
  }
}
async function x0(t, e = !0) {
  await t.addShape(new v0(), e);
}
class S0 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const i = Zt(e.options.color, e.id, e.options.reduceDuplicates);
    i &&
      (e.color = xa(
        i,
        e.options.color.animation,
        this.container.retina.reduceFactor,
      ));
  }
  isEnabled(e) {
    const { h: i, s: n, l: s } = e.options.color.animation,
      { color: o } = e;
    return (
      !e.destroyed &&
      !e.spawning &&
      (((o == null ? void 0 : o.h.value) !== void 0 && i.enable) ||
        ((o == null ? void 0 : o.s.value) !== void 0 && n.enable) ||
        ((o == null ? void 0 : o.l.value) !== void 0 && s.enable))
    );
  }
  update(e, i) {
    Sa(e.color, i);
  }
}
async function P0(t, e = !0) {
  await t.addParticleUpdater("color", (i) => Promise.resolve(new S0(i)), e);
}
class C0 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const i = e.options.opacity,
      n = 1;
    e.opacity = yh(i, n);
    const s = i.animation;
    s.enable &&
      ((e.opacity.velocity =
        (S(s.speed) / ae) * this.container.retina.reduceFactor),
      s.sync || (e.opacity.velocity *= D()));
  }
  isEnabled(e) {
    return (
      !e.destroyed &&
      !e.spawning &&
      !!e.opacity &&
      e.opacity.enable &&
      ((e.opacity.maxLoops ?? 0) <= 0 ||
        ((e.opacity.maxLoops ?? 0) > 0 &&
          (e.opacity.loops ?? 0) < (e.opacity.maxLoops ?? 0)))
    );
  }
  reset(e) {
    e.opacity && ((e.opacity.time = 0), (e.opacity.loops = 0));
  }
  update(e, i) {
    !this.isEnabled(e) ||
      !e.opacity ||
      En(e, e.opacity, !0, e.options.opacity.animation.destroy, i);
  }
}
async function O0(t, e = !0) {
  await t.addParticleUpdater("opacity", (i) => Promise.resolve(new C0(i)), e);
}
const yo = 0,
  Cn = 0;
function T0(t) {
  if (
    (t.outMode !== Ve.bounce && t.outMode !== Ve.split) ||
    (t.direction !== oe.left && t.direction !== oe.right)
  )
    return;
  t.bounds.right < Cn && t.direction === oe.left
    ? (t.particle.position.x = t.size + t.offset.x)
    : t.bounds.left > t.canvasSize.width &&
      t.direction === oe.right &&
      (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
  const e = t.particle.velocity.x;
  let i = !1;
  if (
    (t.direction === oe.right &&
      t.bounds.right >= t.canvasSize.width &&
      e > yo) ||
    (t.direction === oe.left && t.bounds.left <= Cn && e < yo)
  ) {
    const s = S(t.particle.options.bounce.horizontal.value);
    ((t.particle.velocity.x *= -s), (i = !0));
  }
  if (!i) return;
  const n = t.offset.x + t.size;
  (t.bounds.right >= t.canvasSize.width && t.direction === oe.right
    ? (t.particle.position.x = t.canvasSize.width - n)
    : t.bounds.left <= Cn &&
      t.direction === oe.left &&
      (t.particle.position.x = n),
    t.outMode === Ve.split && t.particle.destroy());
}
function A0(t) {
  if (
    (t.outMode !== Ve.bounce && t.outMode !== Ve.split) ||
    (t.direction !== oe.bottom && t.direction !== oe.top)
  )
    return;
  t.bounds.bottom < Cn && t.direction === oe.top
    ? (t.particle.position.y = t.size + t.offset.y)
    : t.bounds.top > t.canvasSize.height &&
      t.direction === oe.bottom &&
      (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
  const e = t.particle.velocity.y;
  let i = !1;
  if (
    (t.direction === oe.bottom &&
      t.bounds.bottom >= t.canvasSize.height &&
      e > yo) ||
    (t.direction === oe.top && t.bounds.top <= Cn && e < yo)
  ) {
    const s = S(t.particle.options.bounce.vertical.value);
    ((t.particle.velocity.y *= -s), (i = !0));
  }
  if (!i) return;
  const n = t.offset.y + t.size;
  (t.bounds.bottom >= t.canvasSize.height && t.direction === oe.bottom
    ? (t.particle.position.y = t.canvasSize.height - n)
    : t.bounds.top <= Cn &&
      t.direction === oe.top &&
      (t.particle.position.y = n),
    t.outMode === Ve.split && t.particle.destroy());
}
class E0 {
  constructor(e) {
    ((this.container = e), (this.modes = [Ve.bounce, Ve.split]));
  }
  update(e, i, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    let r = !1;
    for (const [, d] of o.plugins)
      if ((d.particleBounce !== void 0 && (r = d.particleBounce(e, n, i)), r))
        break;
    if (r) return;
    const a = e.getPosition(),
      l = e.offset,
      c = e.getRadius(),
      u = gs(a, c),
      h = o.canvas.size;
    (T0({
      particle: e,
      outMode: s,
      direction: i,
      bounds: u,
      canvasSize: h,
      offset: l,
      size: c,
    }),
      A0({
        particle: e,
        outMode: s,
        direction: i,
        bounds: u,
        canvasSize: h,
        offset: l,
        size: c,
      }));
  }
}
const Ms = 0;
class k0 {
  constructor(e) {
    ((this.container = e), (this.modes = [Ve.destroy]));
  }
  update(e, i, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    switch (e.outType) {
      case Rt.normal:
      case Rt.outside:
        if (ps(e.position, o.canvas.size, ne.origin, e.getRadius(), i)) return;
        break;
      case Rt.inside: {
        const { dx: r, dy: a } = Me(e.position, e.moveCenter),
          { x: l, y: c } = e.velocity;
        if (
          (l < Ms && r > e.moveCenter.radius) ||
          (c < Ms && a > e.moveCenter.radius) ||
          (l >= Ms && r < -e.moveCenter.radius) ||
          (c >= Ms && a < -e.moveCenter.radius)
        )
          return;
        break;
      }
    }
    o.particles.remove(e, void 0, !0);
  }
}
const Is = 0;
class M0 {
  constructor(e) {
    ((this.container = e), (this.modes = [Ve.none]));
  }
  update(e, i, n, s) {
    if (
      !this.modes.includes(s) ||
      ((e.options.move.distance.horizontal &&
        (i === oe.left || i === oe.right)) ??
        (e.options.move.distance.vertical && (i === oe.top || i === oe.bottom)))
    )
      return;
    const o = e.options.move.gravity,
      r = this.container,
      a = r.canvas.size,
      l = e.getRadius();
    if (o.enable) {
      const c = e.position;
      ((!o.inverse && c.y > a.height + l && i === oe.bottom) ||
        (o.inverse && c.y < -l && i === oe.top)) &&
        r.particles.remove(e);
    } else {
      if (
        (e.velocity.y > Is && e.position.y <= a.height + l) ||
        (e.velocity.y < Is && e.position.y >= -l) ||
        (e.velocity.x > Is && e.position.x <= a.width + l) ||
        (e.velocity.x < Is && e.position.x >= -l)
      )
        return;
      ps(e.position, r.canvas.size, ne.origin, l, i) || r.particles.remove(e);
    }
  }
}
const Rs = 0,
  Vs = 0;
class I0 {
  constructor(e) {
    ((this.container = e), (this.modes = [Ve.out]));
  }
  update(e, i, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    switch (e.outType) {
      case Rt.inside: {
        const { x: r, y: a } = e.velocity,
          l = ne.origin;
        ((l.length = e.moveCenter.radius),
          (l.angle = e.velocity.angle + Math.PI),
          l.addTo(ne.create(e.moveCenter)));
        const { dx: c, dy: u } = Me(e.position, l);
        if (
          (r <= Rs && c >= Vs) ||
          (a <= Rs && u >= Vs) ||
          (r >= Rs && c <= Vs) ||
          (a >= Rs && u <= Vs)
        )
          return;
        ((e.position.x = Math.floor(ke({ min: 0, max: o.canvas.size.width }))),
          (e.position.y = Math.floor(
            ke({ min: 0, max: o.canvas.size.height }),
          )));
        const { dx: h, dy: d } = Me(e.position, e.moveCenter);
        ((e.direction = Math.atan2(-d, -h)), (e.velocity.angle = e.direction));
        break;
      }
      default: {
        if (ps(e.position, o.canvas.size, ne.origin, e.getRadius(), i)) return;
        switch (e.outType) {
          case Rt.outside: {
            ((e.position.x =
              Math.floor(
                ke({ min: -e.moveCenter.radius, max: e.moveCenter.radius }),
              ) + e.moveCenter.x),
              (e.position.y =
                Math.floor(
                  ke({ min: -e.moveCenter.radius, max: e.moveCenter.radius }),
                ) + e.moveCenter.y));
            const { dx: r, dy: a } = Me(e.position, e.moveCenter);
            e.moveCenter.radius &&
              ((e.direction = Math.atan2(a, r)),
              (e.velocity.angle = e.direction));
            break;
          }
          case Rt.normal: {
            const r = e.options.move.warp,
              a = o.canvas.size,
              l = {
                bottom: a.height + e.getRadius() + e.offset.y,
                left: -e.getRadius() - e.offset.x,
                right: a.width + e.getRadius() + e.offset.x,
                top: -e.getRadius() - e.offset.y,
              },
              c = e.getRadius(),
              u = gs(e.position, c);
            (i === oe.right && u.left > a.width + e.offset.x
              ? ((e.position.x = l.left),
                (e.initialPosition.x = e.position.x),
                r ||
                  ((e.position.y = D() * a.height),
                  (e.initialPosition.y = e.position.y)))
              : i === oe.left &&
                u.right < -e.offset.x &&
                ((e.position.x = l.right),
                (e.initialPosition.x = e.position.x),
                r ||
                  ((e.position.y = D() * a.height),
                  (e.initialPosition.y = e.position.y))),
              i === oe.bottom && u.top > a.height + e.offset.y
                ? (r ||
                    ((e.position.x = D() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.top),
                  (e.initialPosition.y = e.position.y))
                : i === oe.top &&
                  u.bottom < -e.offset.y &&
                  (r ||
                    ((e.position.x = D() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.bottom),
                  (e.initialPosition.y = e.position.y)));
            break;
          }
        }
        break;
      }
    }
  }
}
const Ls = (t, e) =>
  t.default === e ||
  t.bottom === e ||
  t.left === e ||
  t.right === e ||
  t.top === e;
class R0 {
  constructor(e) {
    ((this._updateOutMode = (i, n, s, o) => {
      for (const r of this.updaters) r.update(i, o, n, s);
    }),
      (this.container = e),
      (this.updaters = []));
  }
  init(e) {
    this.updaters = [];
    const i = e.options.move.outModes;
    Ls(i, Ve.bounce)
      ? this.updaters.push(new E0(this.container))
      : Ls(i, Ve.out)
        ? this.updaters.push(new I0(this.container))
        : Ls(i, Ve.destroy)
          ? this.updaters.push(new k0(this.container))
          : Ls(i, Ve.none) && this.updaters.push(new M0(this.container));
  }
  isEnabled(e) {
    return !e.destroyed && !e.spawning;
  }
  update(e, i) {
    const n = e.options.move.outModes;
    (this._updateOutMode(e, i, n.bottom ?? n.default, oe.bottom),
      this._updateOutMode(e, i, n.left ?? n.default, oe.left),
      this._updateOutMode(e, i, n.right ?? n.default, oe.right),
      this._updateOutMode(e, i, n.top ?? n.default, oe.top));
  }
}
async function V0(t, e = !0) {
  await t.addParticleUpdater("outModes", (i) => Promise.resolve(new R0(i)), e);
}
const Ri = 0;
class L0 {
  init(e) {
    const i = e.container,
      n = e.options.size,
      s = n.animation;
    s.enable &&
      ((e.size.velocity =
        ((e.retina.sizeAnimationSpeed ?? i.retina.sizeAnimationSpeed) / ae) *
        i.retina.reduceFactor),
      s.sync || (e.size.velocity *= D()));
  }
  isEnabled(e) {
    return (
      !e.destroyed &&
      !e.spawning &&
      e.size.enable &&
      ((e.size.maxLoops ?? Ri) <= Ri ||
        ((e.size.maxLoops ?? Ri) > Ri &&
          (e.size.loops ?? Ri) < (e.size.maxLoops ?? Ri)))
    );
  }
  reset(e) {
    e.size.loops = Ri;
  }
  update(e, i) {
    this.isEnabled(e) && En(e, e.size, !0, e.options.size.animation.destroy, i);
  }
}
async function z0(t, e = !0) {
  await t.addParticleUpdater("size", () => Promise.resolve(new L0()), e);
}
async function G0(t, e = !0) {
  (await p0(t, !1),
    await x0(t, !1),
    await P0(t, !1),
    await O0(t, !1),
    await V0(t, !1),
    await z0(t, !1),
    await t.refresh(e));
}
async function $0() {
  (ve(de.easeInQuad, (t) => t ** 2),
    ve(de.easeOutQuad, (t) => 1 - (1 - t) ** 2),
    ve(de.easeInOutQuad, (t) =>
      t < 0.5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2,
    ),
    await Promise.resolve());
}
function D0(t) {
  const { context: e, particle: i, radius: n, opacity: s } = t,
    o = i.emojiData,
    r = 2,
    a = n * r,
    l = e.globalAlpha;
  o && ((e.globalAlpha = s), e.drawImage(o, -n, -n, a, a), (e.globalAlpha = l));
}
const uc =
  '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
class F0 {
  constructor() {
    ((this.validTypes = ["emoji"]), (this._emojiShapeDict = new Map()));
  }
  destroy() {
    for (const [e, i] of this._emojiShapeDict)
      i instanceof ImageBitmap &&
        (i == null || i.close(), this._emojiShapeDict.delete(e));
  }
  draw(e) {
    D0(e);
  }
  async init(e) {
    const i = e.actualOptions,
      { validTypes: n } = this;
    if (!n.find((r) => ge(r, i.particles.shape.type))) return;
    const s = [$r(uc)],
      o = n.map((r) => i.particles.shape.options[r]).find((r) => !!r);
    (o &&
      Pe(o, (r) => {
        r.font && s.push($r(r.font));
      }),
      await Promise.all(s));
  }
  particleDestroy(e) {
    delete e.emojiData;
  }
  particleInit(e, i) {
    const s = i.shapeData;
    if (!(s != null && s.value)) return;
    const o = Re(s.value, i.randomIndexData),
      r = s.font ?? uc;
    if (!o) return;
    const a = `${o}_${r}`,
      l = this._emojiShapeDict.get(a);
    if (l) {
      i.emojiData = l;
      return;
    }
    const c = ot(i.size.value) * 2;
    let u;
    const h = ot(i.size.value);
    if (typeof OffscreenCanvas < "u") {
      const d = new OffscreenCanvas(c, c),
        f = d.getContext("2d");
      if (!f) return;
      ((f.font = `400 ${h * 2}px ${r}`),
        (f.textBaseline = "middle"),
        (f.textAlign = "center"),
        f.fillText(o, h, h),
        (u = d.transferToImageBitmap()));
    } else {
      const d = document.createElement("canvas");
      ((d.width = c), (d.height = c));
      const f = d.getContext("2d");
      if (!f) return;
      ((f.font = `400 ${h * 2}px ${r}`),
        (f.textBaseline = "middle"),
        (f.textAlign = "center"),
        f.fillText(o, h, h),
        (u = d));
    }
    (this._emojiShapeDict.set(a, u), (i.emojiData = u));
  }
}
async function H0(t, e = !0) {
  await t.addShape(new F0(), e);
}
const B0 = 1,
  q0 = 1,
  zh = 0;
function Gh(t, e, i, n, s) {
  const o = t.actualOptions.interactivity.modes.attract;
  if (!o) return;
  const r = t.particles.quadTree.query(n, s);
  for (const a of r) {
    const { dx: l, dy: c, distance: u } = Me(a.position, e),
      h = o.speed * o.factor,
      d = at(hh(o.easing)(q0 - u / i) * h, B0, o.maxSpeed),
      f = ne.create(u ? (l / u) * d : h, u ? (c / u) * d : h);
    a.position.subFrom(f);
  }
}
function N0(t, e) {
  t.attract || (t.attract = { particles: [] });
  const { attract: i } = t;
  if (
    (i.finish ||
      (i.count || (i.count = 0),
      i.count++,
      i.count === t.particles.count && (i.finish = !0)),
    i.clicking)
  ) {
    const n = t.interactivity.mouse.clickPosition,
      s = t.retina.attractModeDistance;
    if (!s || s < zh || !n) return;
    Gh(t, n, s, new Ye(n.x, n.y, s), (o) => e(o));
  } else i.clicking === !1 && (i.particles = []);
}
function U0(t, e) {
  const i = t.interactivity.mouse.position,
    n = t.retina.attractModeDistance;
  !n || n < zh || !i || Gh(t, i, n, new Ye(i.x, i.y, n), (s) => e(s));
}
class j0 {
  constructor() {
    ((this.distance = 200),
      (this.duration = 0.4),
      (this.easing = de.easeOutQuad),
      (this.factor = 1),
      (this.maxSpeed = 50),
      (this.speed = 1));
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed),
      e.speed !== void 0 && (this.speed = e.speed));
  }
}
const qn = "attract";
let W0 = class extends lt {
  constructor(e, i) {
    (super(i),
      (this._engine = e),
      i.attract || (i.attract = { particles: [] }),
      (this.handleClickMode = (n) => {
        const s = this.container.actualOptions,
          o = s.interactivity.modes.attract;
        if (!(!o || n !== qn)) {
          (i.attract || (i.attract = { particles: [] }),
            (i.attract.clicking = !0),
            (i.attract.count = 0));
          for (const r of i.attract.particles)
            this.isEnabled(r) && r.velocity.setTo(r.initialVelocity);
          ((i.attract.particles = []),
            (i.attract.finish = !1),
            setTimeout(() => {
              i.destroyed ||
                (i.attract || (i.attract = { particles: [] }),
                (i.attract.clicking = !1));
            }, o.duration * ye));
        }
      }));
  }
  clear() {}
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.attract;
    i && (e.retina.attractModeDistance = i.distance * e.retina.pixelRatio);
  }
  interact() {
    const e = this.container,
      i = e.actualOptions,
      n = e.interactivity.status === Xi,
      s = i.interactivity.events,
      { enable: o, mode: r } = s.onHover,
      { enable: a, mode: l } = s.onClick;
    n && o && ge(qn, r)
      ? U0(this.container, (c) => this.isEnabled(c))
      : a && ge(qn, l) && N0(this.container, (c) => this.isEnabled(c));
  }
  isEnabled(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse,
      o = ((e == null ? void 0 : e.interactivity) ?? n.interactivity).events;
    if (
      (!s.position || !o.onHover.enable) &&
      (!s.clickPosition || !o.onClick.enable)
    )
      return !1;
    const r = o.onHover.mode,
      a = o.onClick.mode;
    return ge(qn, r) || ge(qn, a);
  }
  loadModeOptions(e, ...i) {
    e.attract || (e.attract = new j0());
    for (const n of i) e.attract.load(n == null ? void 0 : n.attract);
  }
  reset() {}
};
async function Q0(t, e = !0) {
  await t.addInteractor(
    "externalAttract",
    (i) => Promise.resolve(new W0(t, i)),
    e,
  );
}
const K0 = 2,
  eo = 0.5,
  Y0 = Math.PI * eo,
  hc = 2,
  $h = 10,
  Z0 = 0;
function Dh(t, e, i, n, s) {
  const o = t.particles.quadTree.query(n, s);
  for (const r of o)
    n instanceof Ye
      ? mh(Dr(r), {
          position: e,
          radius: i,
          mass: i ** K0 * Y0,
          velocity: ne.origin,
          factor: ne.origin,
        })
      : n instanceof Lt && ag(r, gs(e, i));
}
function J0(t, e, i, n) {
  const s = document.querySelectorAll(e);
  s.length &&
    s.forEach((o) => {
      const r = o,
        a = t.retina.pixelRatio,
        l = {
          x: (r.offsetLeft + r.offsetWidth * eo) * a,
          y: (r.offsetTop + r.offsetHeight * eo) * a,
        },
        c = r.offsetWidth * eo * a,
        u = $h * a,
        h =
          i.type === In.circle
            ? new Ye(l.x, l.y, c + u)
            : new Lt(
                r.offsetLeft * a - u,
                r.offsetTop * a - u,
                r.offsetWidth * a + u * hc,
                r.offsetHeight * a + u * hc,
              );
      n(l, c, h);
    });
}
function X0(t, e, i, n) {
  ba(i, e, (s, o) => J0(t, s, o, (r, a, l) => Dh(t, r, a, l, n)));
}
function eb(t, e) {
  const i = t.retina.pixelRatio,
    n = $h * i,
    s = t.interactivity.mouse.position,
    o = t.retina.bounceModeDistance;
  !o || o < Z0 || !s || Dh(t, s, o, new Ye(s.x, s.y, o + n), e);
}
class tb {
  constructor() {
    this.distance = 200;
  }
  load(e) {
    e && e.distance !== void 0 && (this.distance = e.distance);
  }
}
const zs = "bounce";
class ib extends lt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.bounce;
    i && (e.retina.bounceModeDistance = i.distance * e.retina.pixelRatio);
  }
  interact() {
    const e = this.container,
      i = e.actualOptions,
      n = i.interactivity.events,
      s = e.interactivity.status === Xi,
      o = n.onHover.enable,
      r = n.onHover.mode,
      a = n.onDiv;
    s && o && ge(zs, r)
      ? eb(this.container, (l) => this.isEnabled(l))
      : X0(this.container, a, zs, (l) => this.isEnabled(l));
  }
  isEnabled(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse,
      o = ((e == null ? void 0 : e.interactivity) ?? n.interactivity).events,
      r = o.onDiv;
    return (
      (!!s.position && o.onHover.enable && ge(zs, o.onHover.mode)) || ya(zs, r)
    );
  }
  loadModeOptions(e, ...i) {
    e.bounce || (e.bounce = new tb());
    for (const n of i) e.bounce.load(n == null ? void 0 : n.bounce);
  }
  reset() {}
}
async function nb(t, e = !0) {
  await t.addInteractor("externalBounce", (i) => Promise.resolve(new ib(i)), e);
}
class Fh {
  constructor() {
    ((this.distance = 200), (this.duration = 0.4), (this.mix = !1));
  }
  load(e) {
    if (e) {
      if (
        (e.distance !== void 0 && (this.distance = e.distance),
        e.duration !== void 0 && (this.duration = e.duration),
        e.mix !== void 0 && (this.mix = e.mix),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        e.color !== void 0)
      ) {
        const i = Ge(this.color) ? void 0 : this.color;
        this.color = Pe(e.color, (n) => he.create(i, n));
      }
      e.size !== void 0 && (this.size = e.size);
    }
  }
}
class sb extends Fh {
  constructor() {
    (super(), (this.selectors = []));
  }
  load(e) {
    (super.load(e),
      e && e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class ob extends Fh {
  load(e) {
    (super.load(e),
      e &&
        (this.divs = Pe(e.divs, (i) => {
          const n = new sb();
          return (n.load(i), n);
        })));
  }
}
var Ft;
(function (t) {
  ((t.color = "color"), (t.opacity = "opacity"), (t.size = "size"));
})(Ft || (Ft = {}));
function dc(t, e, i, n) {
  if (e >= i) {
    const s = t + (e - i) * n;
    return at(s, t, e);
  } else if (e < i) {
    const s = t - (i - e) * n;
    return at(s, e, t);
  }
}
const Vi = "bubble",
  gr = 0,
  rb = 0,
  ab = 2,
  fc = 1,
  pc = 1,
  lb = 0,
  cb = 0,
  mr = 0.5,
  _r = 1;
class ub extends lt {
  constructor(e) {
    (super(e),
      (this._clickBubble = () => {
        var c;
        const i = this.container,
          n = i.actualOptions,
          s = i.interactivity.mouse.clickPosition,
          o = n.interactivity.modes.bubble;
        if (!o || !s) return;
        i.bubble || (i.bubble = {});
        const r = i.retina.bubbleModeDistance;
        if (!r || r < gr) return;
        const a = i.particles.quadTree.queryCircle(s, r, (u) =>
            this.isEnabled(u),
          ),
          { bubble: l } = i;
        for (const u of a) {
          if (!l.clicking) continue;
          u.bubble.inRange = !l.durationEnd;
          const h = u.getPosition(),
            d = Ne(h, s),
            f =
              (new Date().getTime() - (i.interactivity.mouse.clickTime ?? rb)) /
              ye;
          (f > o.duration && (l.durationEnd = !0),
            f > o.duration * ab && ((l.clicking = !1), (l.durationEnd = !1)));
          const g = {
            bubbleObj: {
              optValue: i.retina.bubbleModeSize,
              value: u.bubble.radius,
            },
            particlesObj: {
              optValue: ot(u.options.size.value) * i.retina.pixelRatio,
              value: u.size.value,
            },
            type: Ft.size,
          };
          this._process(u, d, f, g);
          const p = {
            bubbleObj: { optValue: o.opacity, value: u.bubble.opacity },
            particlesObj: {
              optValue: ot(u.options.opacity.value),
              value: ((c = u.opacity) == null ? void 0 : c.value) ?? fc,
            },
            type: Ft.opacity,
          };
          (this._process(u, d, f, p),
            !l.durationEnd && d <= r
              ? this._hoverBubbleColor(u, d)
              : delete u.bubble.color);
        }
      }),
      (this._hoverBubble = () => {
        const i = this.container,
          n = i.interactivity.mouse.position,
          s = i.retina.bubbleModeDistance;
        if (!s || s < gr || !n) return;
        const o = i.particles.quadTree.queryCircle(n, s, (r) =>
          this.isEnabled(r),
        );
        for (const r of o) {
          r.bubble.inRange = !0;
          const a = r.getPosition(),
            l = Ne(a, n),
            c = pc - l / s;
          (l <= s
            ? c >= cb &&
              i.interactivity.status === Xi &&
              (this._hoverBubbleSize(r, c),
              this._hoverBubbleOpacity(r, c),
              this._hoverBubbleColor(r, c))
            : this.reset(r),
            i.interactivity.status === zr && this.reset(r));
        }
      }),
      (this._hoverBubbleColor = (i, n, s) => {
        const o = this.container.actualOptions,
          r = s ?? o.interactivity.modes.bubble;
        if (r) {
          if (!i.bubble.finalColor) {
            const a = r.color;
            if (!a) return;
            const l = Re(a);
            i.bubble.finalColor = Zt(l);
          }
          if (i.bubble.finalColor)
            if (r.mix) {
              i.bubble.color = void 0;
              const a = i.getFillColor();
              i.bubble.color = a
                ? xh(va(a, i.bubble.finalColor, pc - n, n))
                : i.bubble.finalColor;
            } else i.bubble.color = i.bubble.finalColor;
        }
      }),
      (this._hoverBubbleOpacity = (i, n, s) => {
        var h, d;
        const o = this.container,
          r = o.actualOptions,
          a =
            (s == null ? void 0 : s.opacity) ??
            ((h = r.interactivity.modes.bubble) == null ? void 0 : h.opacity);
        if (!a) return;
        const l = i.options.opacity.value,
          c = ((d = i.opacity) == null ? void 0 : d.value) ?? fc,
          u = dc(c, a, ot(l), n);
        u !== void 0 && (i.bubble.opacity = u);
      }),
      (this._hoverBubbleSize = (i, n, s) => {
        const o = this.container,
          r =
            s != null && s.size
              ? s.size * o.retina.pixelRatio
              : o.retina.bubbleModeSize;
        if (r === void 0) return;
        const a = ot(i.options.size.value) * o.retina.pixelRatio,
          l = i.size.value,
          c = dc(l, r, a, n);
        c !== void 0 && (i.bubble.radius = c);
      }),
      (this._process = (i, n, s, o) => {
        const r = this.container,
          a = o.bubbleObj.optValue,
          l = r.actualOptions,
          c = l.interactivity.modes.bubble;
        if (!c || a === void 0) return;
        const u = c.duration,
          h = r.retina.bubbleModeDistance,
          d = o.particlesObj.optValue,
          f = o.bubbleObj.value,
          g = o.particlesObj.value ?? lb,
          p = o.type;
        if (!(!h || h < gr || a === d))
          if ((r.bubble || (r.bubble = {}), r.bubble.durationEnd))
            f &&
              (p === Ft.size && delete i.bubble.radius,
              p === Ft.opacity && delete i.bubble.opacity);
          else if (n <= h) {
            if ((f ?? g) !== a) {
              const w = g - (s * (g - a)) / u;
              (p === Ft.size && (i.bubble.radius = w),
                p === Ft.opacity && (i.bubble.opacity = w));
            }
          } else
            (p === Ft.size && delete i.bubble.radius,
              p === Ft.opacity && delete i.bubble.opacity);
      }),
      (this._singleSelectorHover = (i, n, s) => {
        const o = this.container,
          r = document.querySelectorAll(n),
          a = o.actualOptions.interactivity.modes.bubble;
        !a ||
          !r.length ||
          r.forEach((l) => {
            const c = l,
              u = o.retina.pixelRatio,
              h = {
                x: (c.offsetLeft + c.offsetWidth * mr) * u,
                y: (c.offsetTop + c.offsetHeight * mr) * u,
              },
              d = c.offsetWidth * mr * u,
              f =
                s.type === In.circle
                  ? new Ye(h.x, h.y, d)
                  : new Lt(
                      c.offsetLeft * u,
                      c.offsetTop * u,
                      c.offsetWidth * u,
                      c.offsetHeight * u,
                    ),
              g = o.particles.quadTree.query(f, (p) => this.isEnabled(p));
            for (const p of g) {
              if (!f.contains(p.getPosition())) continue;
              p.bubble.inRange = !0;
              const y = a.divs,
                w = gh(y, c);
              ((!p.bubble.div || p.bubble.div !== c) &&
                (this.clear(p, i, !0), (p.bubble.div = c)),
                this._hoverBubbleSize(p, _r, w),
                this._hoverBubbleOpacity(p, _r, w),
                this._hoverBubbleColor(p, _r, w));
            }
          });
      }),
      e.bubble || (e.bubble = {}),
      (this.handleClickMode = (i) => {
        i === Vi && (e.bubble || (e.bubble = {}), (e.bubble.clicking = !0));
      }));
  }
  clear(e, i, n) {
    (e.bubble.inRange && !n) ||
      (delete e.bubble.div,
      delete e.bubble.opacity,
      delete e.bubble.radius,
      delete e.bubble.color);
  }
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.bubble;
    i &&
      ((e.retina.bubbleModeDistance = i.distance * e.retina.pixelRatio),
      i.size !== void 0 &&
        (e.retina.bubbleModeSize = i.size * e.retina.pixelRatio));
  }
  interact(e) {
    const i = this.container.actualOptions,
      n = i.interactivity.events,
      s = n.onHover,
      o = n.onClick,
      r = s.enable,
      a = s.mode,
      l = o.enable,
      c = o.mode,
      u = n.onDiv;
    r && ge(Vi, a)
      ? this._hoverBubble()
      : l && ge(Vi, c)
        ? this._clickBubble()
        : ba(Vi, u, (h, d) => this._singleSelectorHover(e, h, d));
  }
  isEnabled(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse,
      o = ((e == null ? void 0 : e.interactivity) ?? n.interactivity).events,
      { onClick: r, onDiv: a, onHover: l } = o,
      c = ya(Vi, a);
    return c || (l.enable && s.position) || (r.enable && s.clickPosition)
      ? ge(Vi, l.mode) || ge(Vi, r.mode) || c
      : !1;
  }
  loadModeOptions(e, ...i) {
    e.bubble || (e.bubble = new ob());
    for (const n of i) e.bubble.load(n == null ? void 0 : n.bubble);
  }
  reset(e) {
    e.bubble.inRange = !1;
  }
}
async function hb(t, e = !0) {
  await t.addInteractor("externalBubble", (i) => Promise.resolve(new ub(i)), e);
}
class db {
  constructor() {
    this.opacity = 0.5;
  }
  load(e) {
    e && e.opacity !== void 0 && (this.opacity = e.opacity);
  }
}
class fb {
  constructor() {
    ((this.distance = 80), (this.links = new db()), (this.radius = 60));
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(e.links),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
const gc = 0,
  mc = 1,
  pb = 0;
function gb(t, e, i, n) {
  const s = Math.floor(i.getRadius() / e.getRadius()),
    o = e.getFillColor(),
    r = i.getFillColor();
  if (!o || !r) return;
  const a = e.getPosition(),
    l = i.getPosition(),
    c = va(o, r, e.getRadius(), i.getRadius()),
    u = t.createLinearGradient(a.x, a.y, l.x, l.y);
  return (
    u.addColorStop(gc, Si(o, n)),
    u.addColorStop(at(s, gc, mc), tt(c, n)),
    u.addColorStop(mc, Si(r, n)),
    u
  );
}
function mb(t, e, i, n, s) {
  (ts(t, n, s), (t.lineWidth = e), (t.strokeStyle = i), t.stroke());
}
function _b(t, e, i, n) {
  const s = t.actualOptions,
    o = s.interactivity.modes.connect;
  if (o) return gb(e, i, n, o.links.opacity);
}
function yb(t, e, i) {
  t.canvas.draw((n) => {
    const s = _b(t, n, e, i);
    if (!s) return;
    const o = e.getPosition(),
      r = i.getPosition();
    mb(n, e.retina.linksWidth ?? pb, s, o, r);
  });
}
const bb = "connect",
  _c = 0;
class wb extends lt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.connect;
    i &&
      ((e.retina.connectModeDistance = i.distance * e.retina.pixelRatio),
      (e.retina.connectModeRadius = i.radius * e.retina.pixelRatio));
  }
  interact() {
    const e = this.container;
    if (
      e.actualOptions.interactivity.events.onHover.enable &&
      e.interactivity.status === "pointermove"
    ) {
      const n = e.interactivity.mouse.position,
        { connectModeDistance: s, connectModeRadius: o } = e.retina;
      if (!s || s < _c || !o || o < _c || !n) return;
      const r = Math.abs(o),
        a = e.particles.quadTree.queryCircle(n, r, (l) => this.isEnabled(l));
      a.forEach((l, c) => {
        const u = l.getPosition(),
          h = 1;
        for (const d of a.slice(c + h)) {
          const f = d.getPosition(),
            g = Math.abs(s),
            p = Math.abs(u.x - f.x),
            y = Math.abs(u.y - f.y);
          p < g && y < g && yb(e, l, d);
        }
      });
    }
  }
  isEnabled(e) {
    const i = this.container,
      n = i.interactivity.mouse,
      s = (
        (e == null ? void 0 : e.interactivity) ?? i.actualOptions.interactivity
      ).events;
    return s.onHover.enable && n.position ? ge(bb, s.onHover.mode) : !1;
  }
  loadModeOptions(e, ...i) {
    e.connect || (e.connect = new fb());
    for (const n of i) e.connect.load(n == null ? void 0 : n.connect);
  }
  reset() {}
}
async function vb(t, e = !0) {
  await t.addInteractor(
    "externalConnect",
    (i) => Promise.resolve(new wb(i)),
    e,
  );
}
class xb {
  constructor() {
    ((this.blink = !1), (this.consent = !1), (this.opacity = 1));
  }
  load(e) {
    e &&
      (e.blink !== void 0 && (this.blink = e.blink),
      e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class Sb {
  constructor() {
    ((this.distance = 100), (this.links = new xb()));
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(e.links));
  }
}
const Pb = 0;
function Cb(t, e, i, n, s, o) {
  (ts(t, i, n), (t.strokeStyle = tt(s, o)), (t.lineWidth = e), t.stroke());
}
function Ob(t, e, i, n, s) {
  t.canvas.draw((o) => {
    const r = e.getPosition();
    Cb(o, e.retina.linksWidth ?? Pb, r, s, i, n);
  });
}
const Tb = "grab",
  Ab = 0,
  Eb = 0;
class kb extends lt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.grab;
    i && (e.retina.grabModeDistance = i.distance * e.retina.pixelRatio);
  }
  interact() {
    var a;
    const e = this.container,
      i = e.actualOptions,
      n = i.interactivity;
    if (
      !n.modes.grab ||
      !n.events.onHover.enable ||
      e.interactivity.status !== Xi
    )
      return;
    const s = e.interactivity.mouse.position;
    if (!s) return;
    const o = e.retina.grabModeDistance;
    if (!o || o < Ab) return;
    const r = e.particles.quadTree.queryCircle(s, o, (l) => this.isEnabled(l));
    for (const l of r) {
      const c = l.getPosition(),
        u = Ne(c, s);
      if (u > o) continue;
      const h = n.modes.grab.links,
        d = h.opacity,
        f = d - (u * d) / o;
      if (f <= Eb) continue;
      const g = h.color ?? ((a = l.options.links) == null ? void 0 : a.color);
      if (!e.particles.grabLineColor && g) {
        const y = n.modes.grab.links;
        e.particles.grabLineColor = Ph(g, y.blink, y.consent);
      }
      const p = Hr(l, void 0, e.particles.grabLineColor);
      p && Ob(e, l, p, f, s);
    }
  }
  isEnabled(e) {
    const i = this.container,
      n = i.interactivity.mouse,
      s = (
        (e == null ? void 0 : e.interactivity) ?? i.actualOptions.interactivity
      ).events;
    return s.onHover.enable && !!n.position && ge(Tb, s.onHover.mode);
  }
  loadModeOptions(e, ...i) {
    e.grab || (e.grab = new Sb());
    for (const n of i) e.grab.load(n == null ? void 0 : n.grab);
  }
  reset() {}
}
async function Mb(t, e = !0) {
  await t.addInteractor("externalGrab", (i) => Promise.resolve(new kb(i)), e);
}
const Ib = "pause";
class Rb extends lt {
  constructor(e) {
    (super(e),
      (this.handleClickMode = (i) => {
        if (i !== Ib) return;
        const n = this.container;
        n.animationStatus ? n.pause() : n.play();
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  reset() {}
}
async function Vb(t, e = !0) {
  await t.addInteractor("externalPause", (i) => Promise.resolve(new Rb(i)), e);
}
class Lb {
  constructor() {
    ((this.default = !0), (this.groups = []), (this.quantity = 4));
  }
  load(e) {
    if (!e) return;
    (e.default !== void 0 && (this.default = e.default),
      e.groups !== void 0 && (this.groups = e.groups.map((n) => n)),
      this.groups.length || (this.default = !0));
    const i = e.quantity;
    i !== void 0 && (this.quantity = H(i));
  }
}
const zb = "push",
  Gb = 0;
class $b extends lt {
  constructor(e) {
    (super(e),
      (this.handleClickMode = (i) => {
        if (i !== zb) return;
        const n = this.container,
          s = n.actualOptions,
          o = s.interactivity.modes.push;
        if (!o) return;
        const r = S(o.quantity);
        if (r <= Gb) return;
        const a = Yt([void 0, ...o.groups]),
          l = a !== void 0 ? n.actualOptions.particles.groups[a] : void 0;
        n.particles.push(r, n.interactivity.mouse, l, a);
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...i) {
    e.push || (e.push = new Lb());
    for (const n of i) e.push.load(n == null ? void 0 : n.push);
  }
  reset() {}
}
async function Db(t, e = !0) {
  await t.addInteractor("externalPush", (i) => Promise.resolve(new $b(i)), e);
}
class Fb {
  constructor() {
    this.quantity = 2;
  }
  load(e) {
    if (!e) return;
    const i = e.quantity;
    i !== void 0 && (this.quantity = H(i));
  }
}
const Hb = "remove";
class Bb extends lt {
  constructor(e) {
    (super(e),
      (this.handleClickMode = (i) => {
        const n = this.container,
          s = n.actualOptions;
        if (!s.interactivity.modes.remove || i !== Hb) return;
        const o = S(s.interactivity.modes.remove.quantity);
        n.particles.removeQuantity(o);
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...i) {
    e.remove || (e.remove = new Fb());
    for (const n of i) e.remove.load(n == null ? void 0 : n.remove);
  }
  reset() {}
}
async function qb(t, e = !0) {
  await t.addInteractor("externalRemove", (i) => Promise.resolve(new Bb(i)), e);
}
class Hh {
  constructor() {
    ((this.distance = 200),
      (this.duration = 0.4),
      (this.factor = 100),
      (this.speed = 1),
      (this.maxSpeed = 50),
      (this.easing = de.easeOutQuad));
  }
  load(e) {
    e &&
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.speed !== void 0 && (this.speed = e.speed),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed));
  }
}
class Nb extends Hh {
  constructor() {
    (super(), (this.selectors = []));
  }
  load(e) {
    (super.load(e),
      e && e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class Ub extends Hh {
  load(e) {
    (super.load(e),
      e &&
        (this.divs = Pe(e.divs, (i) => {
          const n = new Nb();
          return (n.load(i), n);
        })));
  }
}
const Li = "repulse",
  jb = 0,
  Wb = 6,
  Qb = 3,
  Kb = 2,
  Yb = 0,
  Zb = 0,
  Jb = 1,
  yr = 0.5;
let Xb = class extends lt {
  constructor(e, i) {
    (super(i),
      (this._clickRepulse = () => {
        const n = this.container,
          s = n.actualOptions.interactivity.modes.repulse;
        if (!s) return;
        const o = n.repulse ?? { particles: [] };
        if (
          (o.finish ||
            (o.count || (o.count = 0),
            o.count++,
            o.count === n.particles.count && (o.finish = !0)),
          o.clicking)
        ) {
          const r = n.retina.repulseModeDistance;
          if (!r || r < jb) return;
          const a = Math.pow(r / Wb, Qb),
            l = n.interactivity.mouse.clickPosition;
          if (l === void 0) return;
          const c = new Ye(l.x, l.y, a),
            u = n.particles.quadTree.query(c, (h) => this.isEnabled(h));
          for (const h of u) {
            const { dx: d, dy: f, distance: g } = Me(l, h.position),
              p = g ** Kb,
              y = s.speed,
              w = (-a * y) / p;
            if (p <= a) {
              o.particles.push(h);
              const x = ne.create(d, f);
              ((x.length = w), h.velocity.setTo(x));
            }
          }
        } else if (o.clicking === !1) {
          for (const r of o.particles) r.velocity.setTo(r.initialVelocity);
          o.particles = [];
        }
      }),
      (this._hoverRepulse = () => {
        const n = this.container,
          s = n.interactivity.mouse.position,
          o = n.retina.repulseModeDistance;
        !o || o < Yb || !s || this._processRepulse(s, o, new Ye(s.x, s.y, o));
      }),
      (this._processRepulse = (n, s, o, r) => {
        const a = this.container,
          l = a.particles.quadTree.query(o, (y) => this.isEnabled(y)),
          c = a.actualOptions.interactivity.modes.repulse;
        if (!c) return;
        const { easing: u, speed: h, factor: d, maxSpeed: f } = c,
          g = hh(u),
          p = ((r == null ? void 0 : r.speed) ?? h) * d;
        for (const y of l) {
          const { dx: w, dy: x, distance: C } = Me(y.position, n),
            v = at(g(Jb - C / s) * p, Zb, f),
            k = ne.create(C ? (w / C) * v : p, C ? (x / C) * v : p);
          y.position.addTo(k);
        }
      }),
      (this._singleSelectorRepulse = (n, s) => {
        const o = this.container,
          r = o.actualOptions.interactivity.modes.repulse;
        if (!r) return;
        const a = document.querySelectorAll(n);
        a.length &&
          a.forEach((l) => {
            const c = l,
              u = o.retina.pixelRatio,
              h = {
                x: (c.offsetLeft + c.offsetWidth * yr) * u,
                y: (c.offsetTop + c.offsetHeight * yr) * u,
              },
              d = c.offsetWidth * yr * u,
              f =
                s.type === In.circle
                  ? new Ye(h.x, h.y, d)
                  : new Lt(
                      c.offsetLeft * u,
                      c.offsetTop * u,
                      c.offsetWidth * u,
                      c.offsetHeight * u,
                    ),
              g = r.divs,
              p = gh(g, c);
            this._processRepulse(h, d, f, p);
          });
      }),
      (this._engine = e),
      i.repulse || (i.repulse = { particles: [] }),
      (this.handleClickMode = (n) => {
        const s = this.container.actualOptions,
          o = s.interactivity.modes.repulse;
        if (!o || n !== Li) return;
        i.repulse || (i.repulse = { particles: [] });
        const r = i.repulse;
        ((r.clicking = !0), (r.count = 0));
        for (const a of i.repulse.particles)
          this.isEnabled(a) && a.velocity.setTo(a.initialVelocity);
        ((r.particles = []),
          (r.finish = !1),
          setTimeout(() => {
            i.destroyed || (r.clicking = !1);
          }, o.duration * ye));
      }));
  }
  clear() {}
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.repulse;
    i && (e.retina.repulseModeDistance = i.distance * e.retina.pixelRatio);
  }
  interact() {
    const e = this.container,
      i = e.actualOptions,
      n = e.interactivity.status === Xi,
      s = i.interactivity.events,
      o = s.onHover,
      r = o.enable,
      a = o.mode,
      l = s.onClick,
      c = l.enable,
      u = l.mode,
      h = s.onDiv;
    n && r && ge(Li, a)
      ? this._hoverRepulse()
      : c && ge(Li, u)
        ? this._clickRepulse()
        : ba(Li, h, (d, f) => this._singleSelectorRepulse(d, f));
  }
  isEnabled(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse,
      o = ((e == null ? void 0 : e.interactivity) ?? n.interactivity).events,
      r = o.onDiv,
      a = o.onHover,
      l = o.onClick,
      c = ya(Li, r);
    if (!(c || (a.enable && s.position) || (l.enable && s.clickPosition)))
      return !1;
    const u = a.mode,
      h = l.mode;
    return ge(Li, u) || ge(Li, h) || c;
  }
  loadModeOptions(e, ...i) {
    e.repulse || (e.repulse = new Ub());
    for (const n of i) e.repulse.load(n == null ? void 0 : n.repulse);
  }
  reset() {}
};
async function ew(t, e = !0) {
  await t.addInteractor(
    "externalRepulse",
    (i) => Promise.resolve(new Xb(t, i)),
    e,
  );
}
class tw {
  constructor() {
    ((this.factor = 3), (this.radius = 200));
  }
  load(e) {
    e &&
      (e.factor !== void 0 && (this.factor = e.factor),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
const iw = "slow",
  nw = 0;
class sw extends lt {
  constructor(e) {
    super(e);
  }
  clear(e, i, n) {
    (e.slow.inRange && !n) || (e.slow.factor = 1);
  }
  init() {
    const e = this.container,
      i = e.actualOptions.interactivity.modes.slow;
    i && (e.retina.slowModeRadius = i.radius * e.retina.pixelRatio);
  }
  interact() {}
  isEnabled(e) {
    const i = this.container,
      n = i.interactivity.mouse,
      s = (
        (e == null ? void 0 : e.interactivity) ?? i.actualOptions.interactivity
      ).events;
    return s.onHover.enable && !!n.position && ge(iw, s.onHover.mode);
  }
  loadModeOptions(e, ...i) {
    e.slow || (e.slow = new tw());
    for (const n of i) e.slow.load(n == null ? void 0 : n.slow);
  }
  reset(e) {
    e.slow.inRange = !1;
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity.mouse.position,
      o = i.retina.slowModeRadius,
      r = n.interactivity.modes.slow;
    if (!r || !o || o < nw || !s) return;
    const a = e.getPosition(),
      l = Ne(s, a),
      c = l / o,
      u = r.factor,
      { slow: h } = e;
    l > o || ((h.inRange = !0), (h.factor = c / u));
  }
}
async function ow(t, e = !0) {
  await t.addInteractor("externalSlow", (i) => Promise.resolve(new sw(i)), e);
}
const rw = 0,
  aw = 1,
  lw =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function cw(t, e, i) {
  const { svgData: n } = t;
  if (!n) return "";
  const s = Si(e, i);
  if (n.includes("fill")) return n.replace(lw, () => s);
  const o = n.indexOf(">");
  return `${n.substring(rw, o)} fill="${s}"${n.substring(o)}`;
}
async function Ho(t) {
  return new Promise((e) => {
    t.loading = !0;
    const i = new Image();
    ((t.element = i),
      i.addEventListener("load", () => {
        ((t.loading = !1), e());
      }),
      i.addEventListener("error", () => {
        ((t.element = void 0),
          (t.error = !0),
          (t.loading = !1),
          xi().error(`${Fe} loading image: ${t.source}`),
          e());
      }),
      (i.src = t.source));
  });
}
async function uw(t) {
  if (t.type !== "svg") {
    await Ho(t);
    return;
  }
  t.loading = !0;
  const e = await fetch(t.source);
  (e.ok
    ? (t.svgData = await e.text())
    : (xi().error(`${Fe} Image not found`), (t.error = !0)),
    (t.loading = !1));
}
function hw(t, e, i, n) {
  var r;
  const s = cw(t, i, ((r = n.opacity) == null ? void 0 : r.value) ?? aw),
    o = {
      color: i,
      gif: e.gif,
      data: { ...t, svgData: s },
      loaded: !1,
      ratio: e.width / e.height,
      replaceColor: e.replaceColor,
      source: e.src,
    };
  return new Promise((a) => {
    const l = new Blob([s], { type: "image/svg+xml" }),
      c = URL || window.URL || window.webkitURL || window,
      u = c.createObjectURL(l),
      h = new Image();
    h.addEventListener("load", () => {
      ((o.loaded = !0), (o.element = h), a(o), c.revokeObjectURL(u));
    });
    const d = async () => {
      c.revokeObjectURL(u);
      const f = { ...t, error: !1, loading: !0 };
      (await Ho(f), (o.loaded = !0), (o.element = f.element), a(o));
    };
    (h.addEventListener("error", () => void d()), (h.src = u));
  });
}
const br = [0, 4, 2, 1],
  yc = [8, 8, 4, 2];
class dw {
  constructor(e) {
    ((this.pos = 0), (this.data = new Uint8ClampedArray(e)));
  }
  getString(e) {
    const i = this.data.slice(this.pos, this.pos + e);
    return (
      (this.pos += i.length),
      i.reduce((n, s) => n + String.fromCharCode(s), "")
    );
  }
  nextByte() {
    return this.data[this.pos++];
  }
  nextTwoBytes() {
    return (
      (this.pos += 2),
      this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
    );
  }
  readSubBlocks() {
    let e = "",
      i = 0;
    const n = 0,
      s = 0;
    do {
      i = this.data[this.pos++];
      for (
        let o = i;
        --o >= n;
        e += String.fromCharCode(this.data[this.pos++])
      );
    } while (i !== s);
    return e;
  }
  readSubBlocksBin() {
    let e = this.data[this.pos],
      i = 0;
    const n = 0,
      s = 1;
    for (let r = 0; e !== n; r += e + s, e = this.data[this.pos + r]) i += e;
    const o = new Uint8Array(i);
    e = this.data[this.pos++];
    for (let r = 0; e !== n; e = this.data[this.pos++])
      for (let a = e; --a >= n; o[r++] = this.data[this.pos++]);
    return o;
  }
  skipSubBlocks() {
    for (
      const e = 1, i = 0;
      this.data[this.pos] !== i;
      this.pos += this.data[this.pos] + e
    );
    this.pos++;
  }
}
var Et;
(function (t) {
  ((t[(t.Replace = 0)] = "Replace"),
    (t[(t.Combine = 1)] = "Combine"),
    (t[(t.RestoreBackground = 2)] = "RestoreBackground"),
    (t[(t.RestorePrevious = 3)] = "RestorePrevious"),
    (t[(t.UndefinedA = 4)] = "UndefinedA"),
    (t[(t.UndefinedB = 5)] = "UndefinedB"),
    (t[(t.UndefinedC = 6)] = "UndefinedC"),
    (t[(t.UndefinedD = 7)] = "UndefinedD"));
})(Et || (Et = {}));
var ei;
(function (t) {
  ((t[(t.Extension = 33)] = "Extension"),
    (t[(t.ApplicationExtension = 255)] = "ApplicationExtension"),
    (t[(t.GraphicsControlExtension = 249)] = "GraphicsControlExtension"),
    (t[(t.PlainTextExtension = 1)] = "PlainTextExtension"),
    (t[(t.CommentExtension = 254)] = "CommentExtension"),
    (t[(t.Image = 44)] = "Image"),
    (t[(t.EndOfFile = 59)] = "EndOfFile"));
})(ei || (ei = {}));
const nt = { x: 0, y: 0 },
  fw = 0,
  bc = 0.5,
  pw = 0,
  wc = 0,
  jr = 0;
function Bh(t, e) {
  const i = [];
  for (let n = 0; n < e; n++)
    (i.push({ r: t.data[t.pos], g: t.data[t.pos + 1], b: t.data[t.pos + 2] }),
      (t.pos += 3));
  return i;
}
function gw(t, e, i, n) {
  switch (t.nextByte()) {
    case ei.GraphicsControlExtension: {
      const s = e.frames[i(!1)];
      t.pos++;
      const o = t.nextByte();
      ((s.GCreserved = (o & 224) >>> 5),
        (s.disposalMethod = (o & 28) >>> 2),
        (s.userInputDelayFlag = (o & 2) === 2));
      const r = (o & 1) === 1;
      s.delayTime = t.nextTwoBytes() * 10;
      const a = t.nextByte();
      (r && n(a), t.pos++);
      break;
    }
    case ei.ApplicationExtension: {
      t.pos++;
      const s = {
        identifier: t.getString(8),
        authenticationCode: t.getString(3),
        data: t.readSubBlocksBin(),
      };
      e.applicationExtensions.push(s);
      break;
    }
    case ei.CommentExtension: {
      e.comments.push([i(!1), t.readSubBlocks()]);
      break;
    }
    case ei.PlainTextExtension: {
      if (e.globalColorTable.length === 0)
        throw new EvalError("plain text extension without global color table");
      (t.pos++,
        (e.frames[i(!1)].plainTextData = {
          left: t.nextTwoBytes(),
          top: t.nextTwoBytes(),
          width: t.nextTwoBytes(),
          height: t.nextTwoBytes(),
          charSize: { width: t.nextTwoBytes(), height: t.nextTwoBytes() },
          foregroundColor: t.nextByte(),
          backgroundColor: t.nextByte(),
          text: t.readSubBlocks(),
        }));
      break;
    }
    default:
      t.skipSubBlocks();
      break;
  }
}
async function mw(t, e, i, n, s, o) {
  const r = e.frames[n(!0)];
  ((r.left = t.nextTwoBytes()),
    (r.top = t.nextTwoBytes()),
    (r.width = t.nextTwoBytes()),
    (r.height = t.nextTwoBytes()));
  const a = t.nextByte(),
    l = (a & 128) === 128,
    c = (a & 64) === 64;
  ((r.sortFlag = (a & 32) === 32), (r.reserved = (a & 24) >>> 3));
  const u = 1 << ((a & 7) + 1);
  l && (r.localColorTable = Bh(t, u));
  const h = (w) => {
      const {
        r: x,
        g: C,
        b: v,
      } = (l ? r.localColorTable : e.globalColorTable)[w];
      return w !== s(null)
        ? { r: x, g: C, b: v, a: 255 }
        : { r: x, g: C, b: v, a: i ? ~~((x + C + v) / 3) : 0 };
    },
    d = (() => {
      try {
        return new ImageData(r.width, r.height, { colorSpace: "srgb" });
      } catch (w) {
        if (w instanceof DOMException && w.name === "IndexSizeError")
          return null;
        throw w;
      }
    })();
  if (d == null) throw new EvalError("GIF frame size is to large");
  const f = t.nextByte(),
    g = t.readSubBlocksBin(),
    p = 1 << f,
    y = (w, x) => {
      const C = w >>> 3,
        v = w & 7;
      return (
        ((g[C] + (g[C + 1] << 8) + (g[C + 2] << 16)) &
          (((1 << x) - 1) << v)) >>>
        v
      );
    };
  if (c) {
    for (let w = 0, x = f + 1, C = 0, v = [[0]], k = 0; k < 4; k++)
      if (br[k] < r.height) {
        let E = 0,
          U = 0,
          I = !1;
        for (; !I; ) {
          const z = w;
          if (((w = y(C, x)), (C += x + 1), w === p)) {
            ((x = f + 1), (v.length = p + 2));
            for (let q = 0; q < v.length; q++) v[q] = q < p ? [q] : [];
          } else {
            w >= v.length
              ? v.push(v[z].concat(v[z][0]))
              : z !== p && v.push(v[z].concat(v[w][0]));
            for (const q of v[w]) {
              const { r: W, g: R, b: ee, a: Q } = h(q);
              (d.data.set(
                [W, R, ee, Q],
                br[k] * r.width + yc[k] * U + (E % (r.width * 4)),
              ),
                (E += 4));
            }
            v.length === 1 << x && x < 12 && x++;
          }
          E === r.width * 4 * (U + 1) &&
            (U++, br[k] + yc[k] * U >= r.height && (I = !0));
        }
      }
    ((r.image = d), (r.bitmap = await createImageBitmap(d)));
  } else {
    let w = 0,
      x = f + 1,
      C = 0,
      v = -4,
      k = !1;
    const E = [[0]];
    for (; !k; ) {
      const U = w;
      if (((w = y(C, x)), (C += x), w === p)) {
        ((x = f + 1), (E.length = p + 2));
        for (let I = 0; I < E.length; I++) E[I] = I < p ? [I] : [];
      } else {
        if (w === p + 1) {
          k = !0;
          break;
        }
        w >= E.length
          ? E.push(E[U].concat(E[U][0]))
          : U !== p && E.push(E[U].concat(E[w][0]));
        for (const I of E[w]) {
          const { r: z, g: q, b: W, a: R } = h(I);
          d.data.set([z, q, W, R], (v += 4));
        }
        E.length >= 1 << x && x < 12 && x++;
      }
    }
    ((r.image = d), (r.bitmap = await createImageBitmap(d)));
  }
}
async function _w(t, e, i, n, s, o) {
  switch (t.nextByte()) {
    case ei.EndOfFile:
      return !0;
    case ei.Image:
      await mw(t, e, i, n, s);
      break;
    case ei.Extension:
      gw(t, e, n, s);
      break;
    default:
      throw new EvalError("undefined block found");
  }
  return !1;
}
function yw(t) {
  for (const e of t.applicationExtensions)
    if (e.identifier + e.authenticationCode === "NETSCAPE2.0")
      return e.data[1] + (e.data[2] << 8);
  return NaN;
}
async function bw(t, e, i) {
  i || (i = !1);
  const n = await fetch(t);
  if (!n.ok && n.status === 404) throw new EvalError("file not found");
  const s = await n.arrayBuffer(),
    o = {
      width: 0,
      height: 0,
      totalTime: 0,
      colorRes: 0,
      pixelAspectRatio: 0,
      frames: [],
      sortFlag: !1,
      globalColorTable: [],
      backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
      comments: [],
      applicationExtensions: [],
    },
    r = new dw(new Uint8ClampedArray(s));
  if (r.getString(6) !== "GIF89a") throw new Error("not a supported GIF file");
  ((o.width = r.nextTwoBytes()), (o.height = r.nextTwoBytes()));
  const a = r.nextByte(),
    l = (a & 128) === 128;
  ((o.colorRes = (a & 112) >>> 4), (o.sortFlag = (a & 8) === 8));
  const c = 1 << ((a & 7) + 1),
    u = r.nextByte();
  ((o.pixelAspectRatio = r.nextByte()),
    o.pixelAspectRatio !== 0 &&
      (o.pixelAspectRatio = (o.pixelAspectRatio + 15) / 64),
    l && (o.globalColorTable = Bh(r, c)));
  const h = (() => {
    try {
      return new ImageData(o.width, o.height, { colorSpace: "srgb" });
    } catch (v) {
      if (v instanceof DOMException && v.name === "IndexSizeError") return null;
      throw v;
    }
  })();
  if (h == null) throw new Error("GIF frame size is to large");
  const { r: d, g: f, b: g } = o.globalColorTable[u];
  h.data.set(l ? [d, f, g, 255] : [0, 0, 0, 0]);
  for (let v = 4; v < h.data.length; v *= 2) h.data.copyWithin(v, 0, v);
  o.backgroundImage = h;
  let p = -1,
    y = !0,
    w = -1;
  const x = (v) => (v && (y = !0), p),
    C = (v) => (v != null && (w = v), w);
  try {
    do
      y &&
        (o.frames.push({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          disposalMethod: Et.Replace,
          image: new ImageData(1, 1, { colorSpace: "srgb" }),
          plainTextData: null,
          userInputDelayFlag: !1,
          delayTime: 0,
          sortFlag: !1,
          localColorTable: [],
          reserved: 0,
          GCreserved: 0,
        }),
        p++,
        (w = -1),
        (y = !1));
    while (!(await _w(r, o, i, x, C, e)));
    o.frames.length--;
    for (const v of o.frames) {
      if (v.userInputDelayFlag && v.delayTime === 0) {
        o.totalTime = 1 / 0;
        break;
      }
      o.totalTime += v.delayTime;
    }
    return o;
  } catch (v) {
    throw v instanceof EvalError
      ? new Error(`error while parsing frame ${p} "${v.message}"`)
      : v;
  }
}
function ww(t) {
  const { context: e, radius: i, particle: n, delta: s } = t,
    o = n.image;
  if (!(o != null && o.gifData) || !o.gif) return;
  const r = new OffscreenCanvas(o.gifData.width, o.gifData.height),
    a = r.getContext("2d");
  if (!a) throw new Error("could not create offscreen canvas context");
  ((a.imageSmoothingQuality = "low"),
    (a.imageSmoothingEnabled = !1),
    a.clearRect(nt.x, nt.y, r.width, r.height),
    n.gifLoopCount === void 0 && (n.gifLoopCount = o.gifLoopCount ?? jr));
  let l = n.gifFrame ?? fw;
  const c = { x: -o.gifData.width * bc, y: -o.gifData.height * bc },
    u = o.gifData.frames[l];
  if ((n.gifTime === void 0 && (n.gifTime = pw), !!u.bitmap)) {
    switch (
      (e.scale(i / o.gifData.width, i / o.gifData.height), u.disposalMethod)
    ) {
      case Et.UndefinedA:
      case Et.UndefinedB:
      case Et.UndefinedC:
      case Et.UndefinedD:
      case Et.Replace:
        (a.drawImage(u.bitmap, u.left, u.top),
          e.drawImage(r, c.x, c.y),
          a.clearRect(nt.x, nt.y, r.width, r.height));
        break;
      case Et.Combine:
        (a.drawImage(u.bitmap, u.left, u.top), e.drawImage(r, c.x, c.y));
        break;
      case Et.RestoreBackground:
        (a.drawImage(u.bitmap, u.left, u.top),
          e.drawImage(r, c.x, c.y),
          a.clearRect(nt.x, nt.y, r.width, r.height),
          o.gifData.globalColorTable.length
            ? a.putImageData(o.gifData.backgroundImage, c.x, c.y)
            : a.putImageData(
                o.gifData.frames[wc].image,
                c.x + u.left,
                c.y + u.top,
              ));
        break;
      case Et.RestorePrevious:
        {
          const h = a.getImageData(nt.x, nt.y, r.width, r.height);
          (a.drawImage(u.bitmap, u.left, u.top),
            e.drawImage(r, c.x, c.y),
            a.clearRect(nt.x, nt.y, r.width, r.height),
            a.putImageData(h, nt.x, nt.y));
        }
        break;
    }
    if (((n.gifTime += s.value), n.gifTime > u.delayTime)) {
      if (((n.gifTime -= u.delayTime), ++l >= o.gifData.frames.length)) {
        if (--n.gifLoopCount <= jr) return;
        ((l = wc), a.clearRect(nt.x, nt.y, r.width, r.height));
      }
      n.gifFrame = l;
    }
    e.scale(o.gifData.width / i, o.gifData.height / i);
  }
}
async function vw(t) {
  if (t.type !== "gif") {
    await Ho(t);
    return;
  }
  t.loading = !0;
  try {
    ((t.gifData = await bw(t.source)),
      (t.gifLoopCount = yw(t.gifData) ?? jr),
      t.gifLoopCount || (t.gifLoopCount = 1 / 0));
  } catch {
    t.error = !0;
  }
  t.loading = !1;
}
const xw = 2,
  Sw = 1,
  Pw = 12,
  Cw = 1;
class Ow {
  constructor(e) {
    ((this.validTypes = ["image", "images"]),
      (this.loadImageShape = async (i) => {
        if (!this._engine.loadImage)
          throw new Error(`${Fe} image shape not initialized`);
        await this._engine.loadImage({
          gif: i.gif,
          name: i.name,
          replaceColor: i.replaceColor ?? !1,
          src: i.src,
        });
      }),
      (this._engine = e));
  }
  addImage(e) {
    (this._engine.images || (this._engine.images = []),
      this._engine.images.push(e));
  }
  draw(e) {
    const { context: i, radius: n, particle: s, opacity: o } = e,
      r = s.image,
      a = r == null ? void 0 : r.element;
    if (r) {
      if (((i.globalAlpha = o), r.gif && r.gifData)) ww(e);
      else if (a) {
        const l = r.ratio,
          c = { x: -n, y: -n },
          u = n * xw;
        i.drawImage(a, c.x, c.y, u, u / l);
      }
      i.globalAlpha = Sw;
    }
  }
  getSidesCount() {
    return Pw;
  }
  async init(e) {
    const i = e.actualOptions;
    if (!(!i.preload || !this._engine.loadImage))
      for (const n of i.preload) await this._engine.loadImage(n);
  }
  loadShape(e) {
    if (e.shape !== "image" && e.shape !== "images") return;
    this._engine.images || (this._engine.images = []);
    const i = e.shapeData;
    if (!i) return;
    this._engine.images.find((s) => s.name === i.name || s.source === i.src) ||
      this.loadImageShape(i).then(() => {
        this.loadShape(e);
      });
  }
  particleInit(e, i) {
    if (i.shape !== "image" && i.shape !== "images") return;
    this._engine.images || (this._engine.images = []);
    const n = this._engine.images,
      s = i.shapeData;
    if (!s) return;
    const o = i.getFillColor(),
      r = n.find((l) => l.name === s.name || l.source === s.src);
    if (!r) return;
    const a = s.replaceColor ?? r.replaceColor;
    if (r.loading) {
      setTimeout(() => {
        this.particleInit(e, i);
      });
      return;
    }
    (async () => {
      let l;
      (r.svgData && o
        ? (l = await hw(r, s, o, i))
        : (l = {
            color: o,
            data: r,
            element: r.element,
            gif: r.gif,
            gifData: r.gifData,
            gifLoopCount: r.gifLoopCount,
            loaded: !0,
            ratio: s.width && s.height ? s.width / s.height : (r.ratio ?? Cw),
            replaceColor: a,
            source: s.src,
          }),
        l.ratio || (l.ratio = 1));
      const c = s.fill ?? i.shapeFill,
        u = s.close ?? i.shapeClose,
        h = { image: l, fill: c, close: u };
      ((i.image = h.image), (i.shapeFill = h.fill), (i.shapeClose = h.close));
    })();
  }
}
class Tw {
  constructor() {
    ((this.src = ""), (this.gif = !1));
  }
  load(e) {
    e &&
      (e.gif !== void 0 && (this.gif = e.gif),
      e.height !== void 0 && (this.height = e.height),
      e.name !== void 0 && (this.name = e.name),
      e.replaceColor !== void 0 && (this.replaceColor = e.replaceColor),
      e.src !== void 0 && (this.src = e.src),
      e.width !== void 0 && (this.width = e.width));
  }
}
class Aw {
  constructor(e) {
    ((this.id = "imagePreloader"), (this._engine = e));
  }
  async getPlugin() {
    return (await Promise.resolve(), {});
  }
  loadOptions(e, i) {
    if (!(i != null && i.preload)) return;
    e.preload || (e.preload = []);
    const n = e.preload;
    for (const s of i.preload) {
      const o = n.find((r) => r.name === s.name || r.src === s.src);
      if (o) o.load(s);
      else {
        const r = new Tw();
        (r.load(s), n.push(r));
      }
    }
  }
  needsPlugin() {
    return !0;
  }
}
const Ew = 3;
function kw(t) {
  t.loadImage ||
    (t.loadImage = async (e) => {
      if (!e.name && !e.src) throw new Error(`${Fe} no image source provided`);
      if (
        (t.images || (t.images = []),
        !t.images.find((i) => i.name === e.name || i.source === e.src))
      )
        try {
          const i = {
            gif: e.gif ?? !1,
            name: e.name ?? e.src,
            source: e.src,
            type: e.src.substring(e.src.length - Ew),
            error: !1,
            loading: !0,
            replaceColor: e.replaceColor,
            ratio: e.width && e.height ? e.width / e.height : void 0,
          };
          t.images.push(i);
          let n;
          (e.gif ? (n = vw) : (n = e.replaceColor ? uw : Ho), await n(i));
        } catch {
          throw new Error(`${Fe} ${e.name ?? e.src} not found`);
        }
    });
}
async function Mw(t, e = !0) {
  kw(t);
  const i = new Aw(t);
  (await t.addPlugin(i, e), await t.addShape(new Ow(t), e));
}
class Iw extends _t {
  constructor() {
    (super(), (this.sync = !1));
  }
  load(e) {
    e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class Rw extends _t {
  constructor() {
    (super(), (this.sync = !1));
  }
  load(e) {
    e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class Vw {
  constructor() {
    ((this.count = 0), (this.delay = new Iw()), (this.duration = new Rw()));
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = e.count),
      this.delay.load(e.delay),
      this.duration.load(e.duration));
  }
}
const ln = 0,
  Lw = -1,
  vc = 0,
  xc = 0;
function zw(t, e, i) {
  if (!t.life) return;
  const n = t.life;
  let s = !1;
  if (t.spawning)
    if (((n.delayTime += e.value), n.delayTime >= t.life.delay))
      ((s = !0), (t.spawning = !1), (n.delayTime = ln), (n.time = ln));
    else return;
  if (
    n.duration === Lw ||
    t.spawning ||
    (s ? (n.time = ln) : (n.time += e.value), n.time < n.duration)
  )
    return;
  if (
    ((n.time = ln), t.life.count > vc && t.life.count--, t.life.count === vc)
  ) {
    t.destroy();
    return;
  }
  const o = H(xc, i.width),
    r = H(xc, i.width);
  ((t.position.x = ke(o)),
    (t.position.y = ke(r)),
    (t.spawning = !0),
    (n.delayTime = ln),
    (n.time = ln),
    t.reset());
  const a = t.options.life;
  a &&
    ((n.delay = S(a.delay.value) * ye),
    (n.duration = S(a.duration.value) * ye));
}
const zi = 0,
  Sc = 1,
  Pc = -1;
class Gw {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const i = this.container,
      n = e.options,
      s = n.life;
    s &&
      ((e.life = {
        delay: i.retina.reduceFactor
          ? ((S(s.delay.value) * (s.delay.sync ? Sc : D())) /
              i.retina.reduceFactor) *
            ye
          : zi,
        delayTime: zi,
        duration: i.retina.reduceFactor
          ? ((S(s.duration.value) * (s.duration.sync ? Sc : D())) /
              i.retina.reduceFactor) *
            ye
          : zi,
        time: zi,
        count: s.count,
      }),
      e.life.duration <= zi && (e.life.duration = Pc),
      e.life.count <= zi && (e.life.count = Pc),
      e.life && (e.spawning = e.life.delay > zi));
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...i) {
    e.life || (e.life = new Vw());
    for (const n of i) e.life.load(n == null ? void 0 : n.life);
  }
  update(e, i) {
    !this.isEnabled(e) || !e.life || zw(e, i, this.container.canvas.size);
  }
}
async function $w(t, e = !0) {
  await t.addParticleUpdater(
    "life",
    async (i) => Promise.resolve(new Gw(i)),
    e,
  );
}
function Dw(t) {
  const { context: e, particle: i, radius: n } = t,
    s = i.shapeData,
    o = 0;
  (e.moveTo(-n, o),
    e.lineTo(n, o),
    (e.lineCap = (s == null ? void 0 : s.cap) ?? "butt"));
}
const Fw = 1;
class Hw {
  constructor() {
    this.validTypes = ["line"];
  }
  draw(e) {
    Dw(e);
  }
  getSidesCount() {
    return Fw;
  }
}
async function Bw(t, e = !0) {
  await t.addShape(new Hw(), e);
}
const Cc = 0.5;
class qw {
  init() {}
  isEnabled(e) {
    return (
      !en() &&
      !e.destroyed &&
      e.container.actualOptions.interactivity.events.onHover.parallax.enable
    );
  }
  move(e) {
    const i = e.container,
      n = i.actualOptions,
      s = n.interactivity.events.onHover.parallax;
    if (en() || !s.enable) return;
    const o = s.force,
      r = i.interactivity.mouse.position;
    if (!r) return;
    const a = i.canvas.size,
      l = { x: a.width * Cc, y: a.height * Cc },
      c = s.smooth,
      u = e.getRadius() / o,
      h = { x: (r.x - l.x) * u, y: (r.y - l.y) * u },
      { offset: d } = e;
    ((d.x += (h.x - d.x) / c), (d.y += (h.y - d.y) / c));
  }
}
async function Nw(t, e = !0) {
  await t.addMover("parallax", () => Promise.resolve(new qw()), e);
}
const Oc = 1e3,
  Uw = 1;
class jw extends Ln {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact(e) {
    const i = this.container;
    e.attractDistance === void 0 &&
      (e.attractDistance =
        S(e.options.move.attract.distance) * i.retina.pixelRatio);
    const n = e.attractDistance,
      s = e.getPosition(),
      o = i.particles.quadTree.queryCircle(s, n);
    for (const r of o) {
      if (
        e === r ||
        !r.options.move.attract.enable ||
        r.destroyed ||
        r.spawning
      )
        continue;
      const a = r.getPosition(),
        { dx: l, dy: c } = Me(s, a),
        u = e.options.move.attract.rotate,
        h = l / (u.x * Oc),
        d = c / (u.y * Oc),
        f = r.size.value / e.size.value,
        g = Uw / f;
      ((e.velocity.x -= h * f),
        (e.velocity.y -= d * f),
        (r.velocity.x += h * g),
        (r.velocity.y += d * g));
    }
  }
  isEnabled(e) {
    return e.options.move.attract.enable;
  }
  reset() {}
}
async function Ww(t, e = !0) {
  await t.addInteractor(
    "particlesAttract",
    (i) => Promise.resolve(new jw(i)),
    e,
  );
}
const Qw = 0.5,
  Kw = 10,
  Yw = 0;
function Tc(t, e, i, n, s, o) {
  const r = at((t.options.collisions.absorb.speed * s.factor) / Kw, Yw, n);
  ((t.size.value += r * Qw),
    (i.size.value -= r),
    n <= o && ((i.size.value = 0), i.destroy()));
}
function Zw(t, e, i, n) {
  const s = t.getRadius(),
    o = e.getRadius();
  s === void 0 && o !== void 0
    ? t.destroy()
    : s !== void 0 && o === void 0
      ? e.destroy()
      : s !== void 0 &&
        o !== void 0 &&
        (s >= o ? Tc(t, s, e, o, i, n) : Tc(e, o, t, s, i, n));
}
const Ac = (t) => {
  (t.collisionMaxSpeed === void 0 &&
    (t.collisionMaxSpeed = S(t.options.collisions.maxSpeed)),
    t.velocity.length > t.collisionMaxSpeed &&
      (t.velocity.length = t.collisionMaxSpeed));
};
function qh(t, e) {
  (mh(Dr(t), Dr(e)), Ac(t), Ac(e));
}
function Jw(t, e) {
  (!t.unbreakable && !e.unbreakable && qh(t, e),
    t.getRadius() === void 0 && e.getRadius() !== void 0
      ? t.destroy()
      : t.getRadius() !== void 0 && e.getRadius() === void 0
        ? e.destroy()
        : t.getRadius() !== void 0 &&
          e.getRadius() !== void 0 &&
          (t.getRadius() >= e.getRadius() ? e : t).destroy());
}
function Xw(t, e, i, n) {
  switch (t.options.collisions.mode) {
    case Sn.absorb: {
      Zw(t, e, i, n);
      break;
    }
    case Sn.bounce: {
      qh(t, e);
      break;
    }
    case Sn.destroy: {
      Jw(t, e);
      break;
    }
  }
}
const ev = 2;
class tv extends Ln {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact(e, i) {
    if (e.destroyed || e.spawning) return;
    const n = this.container,
      s = e.getPosition(),
      o = e.getRadius(),
      r = n.particles.quadTree.queryCircle(s, o * ev);
    for (const a of r) {
      if (
        e === a ||
        !a.options.collisions.enable ||
        e.options.collisions.mode !== a.options.collisions.mode ||
        a.destroyed ||
        a.spawning
      )
        continue;
      const l = a.getPosition(),
        c = a.getRadius();
      if (Math.abs(Math.round(s.z) - Math.round(l.z)) > o + c) continue;
      const u = Ne(s, l),
        h = o + c;
      u > h || Xw(e, a, i, n.retina.pixelRatio);
    }
  }
  isEnabled(e) {
    return e.options.collisions.enable;
  }
  reset() {}
}
async function iv(t, e = !0) {
  await t.addInteractor(
    "particlesCollisions",
    (i) => Promise.resolve(new tv(i)),
    e,
  );
}
const wr = 2;
class nv extends Ye {
  constructor(e, i, n, s) {
    (super(e, i, n), (this.canvasSize = s), (this.canvasSize = { ...s }));
  }
  contains(e) {
    const { width: i, height: n } = this.canvasSize,
      { x: s, y: o } = e;
    return (
      super.contains(e) ||
      super.contains({ x: s - i, y: o }) ||
      super.contains({ x: s - i, y: o - n }) ||
      super.contains({ x: s, y: o - n })
    );
  }
  intersects(e) {
    if (super.intersects(e)) return !0;
    const i = e,
      n = e,
      s = {
        x: e.position.x - this.canvasSize.width,
        y: e.position.y - this.canvasSize.height,
      };
    if (n.radius !== void 0) {
      const o = new Ye(s.x, s.y, n.radius * wr);
      return super.intersects(o);
    } else if (i.size !== void 0) {
      const o = new Lt(s.x, s.y, i.size.width * wr, i.size.height * wr);
      return super.intersects(o);
    }
    return !1;
  }
}
class sv {
  constructor() {
    ((this.blur = 5),
      (this.color = new he()),
      (this.color.value = "#000"),
      (this.enable = !1));
  }
  load(e) {
    e &&
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = he.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class ov {
  constructor() {
    ((this.enable = !1), (this.frequency = 1));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class rv {
  constructor() {
    ((this.blink = !1),
      (this.color = new he()),
      (this.color.value = "#fff"),
      (this.consent = !1),
      (this.distance = 100),
      (this.enable = !1),
      (this.frequency = 1),
      (this.opacity = 1),
      (this.shadow = new sv()),
      (this.triangles = new ov()),
      (this.width = 1),
      (this.warp = !1));
  }
  load(e) {
    e &&
      (e.id !== void 0 && (this.id = e.id),
      e.blink !== void 0 && (this.blink = e.blink),
      (this.color = he.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.distance !== void 0 && (this.distance = e.distance),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      this.shadow.load(e.shadow),
      this.triangles.load(e.triangles),
      e.width !== void 0 && (this.width = e.width),
      e.warp !== void 0 && (this.warp = e.warp));
  }
}
const Ec = 2,
  av = 1,
  Gs = { x: 0, y: 0 },
  lv = 0;
function cv(t, e, i, n, s) {
  const { dx: o, dy: r, distance: a } = Me(t, e);
  if (!s || a <= i) return a;
  const l = { x: Math.abs(o), y: Math.abs(r) },
    c = { x: Math.min(l.x, n.width - l.x), y: Math.min(l.y, n.height - l.y) };
  return Math.sqrt(c.x ** Ec + c.y ** Ec);
}
class uv extends Ln {
  constructor(e) {
    (super(e),
      (this._setColor = (i) => {
        if (!i.options.links) return;
        const n = this.linkContainer,
          s = i.options.links;
        let o =
          s.id === void 0
            ? n.particles.linksColor
            : n.particles.linksColors.get(s.id);
        if (o) return;
        const r = s.color;
        ((o = Ph(r, s.blink, s.consent)),
          s.id === void 0
            ? (n.particles.linksColor = o)
            : n.particles.linksColors.set(s.id, o));
      }),
      (this.linkContainer = e));
  }
  clear() {}
  init() {
    ((this.linkContainer.particles.linksColor = void 0),
      (this.linkContainer.particles.linksColors = new Map()));
  }
  interact(e) {
    if (!e.options.links) return;
    e.links = [];
    const i = e.getPosition(),
      n = this.container,
      s = n.canvas.size;
    if (i.x < Gs.x || i.y < Gs.y || i.x > s.width || i.y > s.height) return;
    const o = e.options.links,
      r = o.opacity,
      a = e.retina.linksDistance ?? lv,
      l = o.warp;
    let c;
    l ? (c = new nv(i.x, i.y, a, s)) : (c = new Ye(i.x, i.y, a));
    const u = n.particles.quadTree.query(c);
    for (const h of u) {
      const d = h.options.links;
      if (
        e === h ||
        !(d != null && d.enable) ||
        o.id !== d.id ||
        h.spawning ||
        h.destroyed ||
        !h.links ||
        e.links.some((y) => y.destination === h) ||
        h.links.some((y) => y.destination === e)
      )
        continue;
      const f = h.getPosition();
      if (f.x < Gs.x || f.y < Gs.y || f.x > s.width || f.y > s.height) continue;
      const g = cv(i, f, a, s, l && d.warp);
      if (g > a) continue;
      const p = (av - g / a) * r;
      (this._setColor(e), e.links.push({ destination: h, opacity: p }));
    }
  }
  isEnabled(e) {
    var i;
    return !!((i = e.options.links) != null && i.enable);
  }
  loadParticlesOptions(e, ...i) {
    e.links || (e.links = new rv());
    for (const n of i) e.links.load(n == null ? void 0 : n.links);
  }
  reset() {}
}
async function hv(t, e = !0) {
  await t.addInteractor(
    "particlesLinks",
    async (i) => Promise.resolve(new uv(i)),
    e,
  );
}
function dv(t, e, i, n) {
  (t.beginPath(),
    t.moveTo(e.x, e.y),
    t.lineTo(i.x, i.y),
    t.lineTo(n.x, n.y),
    t.closePath());
}
function fv(t) {
  let e = !1;
  const {
    begin: i,
    end: n,
    maxDistance: s,
    context: o,
    canvasSize: r,
    width: a,
    backgroundMask: l,
    colorLine: c,
    opacity: u,
    links: h,
  } = t;
  if (Ne(i, n) <= s) (ts(o, i, n), (e = !0));
  else if (h.warp) {
    let f, g;
    const p = { x: n.x - r.width, y: n.y },
      y = Me(i, p);
    if (y.distance <= s) {
      const w = i.y - (y.dy / y.dx) * i.x;
      ((f = { x: 0, y: w }), (g = { x: r.width, y: w }));
    } else {
      const w = { x: n.x, y: n.y - r.height },
        x = Me(i, w);
      if (x.distance <= s) {
        const v = -(i.y - (x.dy / x.dx) * i.x) / (x.dy / x.dx);
        ((f = { x: v, y: 0 }), (g = { x: v, y: r.height }));
      } else {
        const C = { x: n.x - r.width, y: n.y - r.height },
          v = Me(i, C);
        if (v.distance <= s) {
          const k = i.y - (v.dy / v.dx) * i.x;
          ((f = { x: -k / (v.dy / v.dx), y: k }),
            (g = { x: f.x + r.width, y: f.y + r.height }));
        }
      }
    }
    f && g && (ts(o, i, f), ts(o, n, g), (e = !0));
  }
  if (!e) return;
  ((o.lineWidth = a),
    l.enable && (o.globalCompositeOperation = l.composite),
    (o.strokeStyle = tt(c, u)));
  const { shadow: d } = h;
  if (d.enable) {
    const f = Ue(d.color);
    f && ((o.shadowBlur = d.blur), (o.shadowColor = tt(f)));
  }
  o.stroke();
}
function pv(t) {
  const {
    context: e,
    pos1: i,
    pos2: n,
    pos3: s,
    backgroundMask: o,
    colorTriangle: r,
    opacityTriangle: a,
  } = t;
  (dv(e, i, n, s),
    o.enable && (e.globalCompositeOperation = o.composite),
    (e.fillStyle = tt(r, a)),
    e.fill());
}
function gv(t) {
  return (t.sort((e, i) => e - i), t.join("_"));
}
function kc(t, e) {
  const i = gv(t.map((s) => s.id));
  let n = e.get(i);
  return (n === void 0 && ((n = D()), e.set(i, n)), n);
}
const Mc = 0,
  vr = 0,
  Ic = 0,
  mv = 0.5,
  _v = 1;
class yv {
  constructor(e) {
    ((this.container = e),
      (this._drawLinkLine = (i, n) => {
        const s = i.options.links;
        if (!(s != null && s.enable)) return;
        const o = this.container,
          r = o.actualOptions,
          a = n.destination,
          l = i.getPosition(),
          c = a.getPosition();
        let u = n.opacity;
        o.canvas.draw((h) => {
          var w;
          let d;
          const f = (w = i.options.twinkle) == null ? void 0 : w.lines;
          if (f != null && f.enable) {
            const x = f.frequency,
              C = Ue(f.color);
            D() < x && C && ((d = C), (u = S(f.opacity)));
          }
          if (!d) {
            const x =
              s.id !== void 0
                ? o.particles.linksColors.get(s.id)
                : o.particles.linksColor;
            d = Hr(i, a, x);
          }
          if (!d) return;
          const g = i.retina.linksWidth ?? vr,
            p = i.retina.linksDistance ?? Ic,
            { backgroundMask: y } = r;
          fv({
            context: h,
            width: g,
            begin: l,
            end: c,
            maxDistance: p,
            canvasSize: o.canvas.size,
            links: s,
            backgroundMask: y,
            colorLine: d,
            opacity: u,
          });
        });
      }),
      (this._drawLinkTriangle = (i, n, s) => {
        const o = i.options.links;
        if (!(o != null && o.enable)) return;
        const r = o.triangles;
        if (!r.enable) return;
        const a = this.container,
          l = a.actualOptions,
          c = n.destination,
          u = s.destination,
          h = r.opacity ?? (n.opacity + s.opacity) * mv;
        h <= Mc ||
          a.canvas.draw((d) => {
            const f = i.getPosition(),
              g = c.getPosition(),
              p = u.getPosition(),
              y = i.retina.linksDistance ?? Ic;
            if (Ne(f, g) > y || Ne(p, g) > y || Ne(p, f) > y) return;
            let w = Ue(r.color);
            if (!w) {
              const x =
                o.id !== void 0
                  ? a.particles.linksColors.get(o.id)
                  : a.particles.linksColor;
              w = Hr(i, c, x);
            }
            w &&
              pv({
                context: d,
                pos1: f,
                pos2: g,
                pos3: p,
                backgroundMask: l.backgroundMask,
                colorTriangle: w,
                opacityTriangle: h,
              });
          });
      }),
      (this._drawTriangles = (i, n, s, o) => {
        var l, c, u;
        const r = s.destination;
        if (
          !(
            (l = i.links) != null &&
            l.triangles.enable &&
            (c = r.options.links) != null &&
            c.triangles.enable
          )
        )
          return;
        const a =
          (u = r.links) == null
            ? void 0
            : u.filter((h) => {
                const d = this._getLinkFrequency(r, h.destination);
                return (
                  r.options.links &&
                  d <= r.options.links.frequency &&
                  o.findIndex((g) => g.destination === h.destination) >= 0
                );
              });
        if (a != null && a.length)
          for (const h of a) {
            const d = h.destination;
            this._getTriangleFrequency(n, r, d) > i.links.triangles.frequency ||
              this._drawLinkTriangle(n, s, h);
          }
      }),
      (this._getLinkFrequency = (i, n) => kc([i, n], this._freqs.links)),
      (this._getTriangleFrequency = (i, n, s) =>
        kc([i, n, s], this._freqs.triangles)),
      (this._freqs = { links: new Map(), triangles: new Map() }));
  }
  drawParticle(e, i) {
    const { links: n, options: s } = i;
    if (!(n != null && n.length)) return;
    const o = n.filter(
      (r) =>
        s.links &&
        (s.links.frequency >= _v ||
          this._getLinkFrequency(i, r.destination) <= s.links.frequency),
    );
    for (const r of o)
      (this._drawTriangles(s, i, r, o),
        r.opacity > Mc &&
          (i.retina.linksWidth ?? vr) > vr &&
          this._drawLinkLine(i, r));
  }
  async init() {
    ((this._freqs.links = new Map()),
      (this._freqs.triangles = new Map()),
      await Promise.resolve());
  }
  particleCreated(e) {
    if (((e.links = []), !e.options.links)) return;
    const i = this.container.retina.pixelRatio,
      { retina: n } = e,
      { distance: s, width: o } = e.options.links;
    ((n.linksDistance = s * i), (n.linksWidth = o * i));
  }
  particleDestroyed(e) {
    e.links = [];
  }
}
class bv {
  constructor() {
    this.id = "links";
  }
  getPlugin(e) {
    return Promise.resolve(new yv(e));
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function wv(t, e = !0) {
  const i = new bv();
  await t.addPlugin(i, e);
}
async function vv(t, e = !0) {
  (await hv(t, e), await wv(t, e));
}
const xv = 180,
  $s = { x: 0, y: 0 },
  Sv = 2;
function Pv(t, e, i) {
  const { context: n } = t,
    s = i.count.numerator * i.count.denominator,
    o = i.count.numerator / i.count.denominator,
    r = (xv * (o - Sv)) / o,
    a = Math.PI - It(r);
  if (n) {
    (n.beginPath(), n.translate(e.x, e.y), n.moveTo($s.x, $s.y));
    for (let l = 0; l < s; l++)
      (n.lineTo(i.length, $s.y), n.translate(i.length, $s.y), n.rotate(a));
  }
}
const Cv = 5;
class Nh {
  draw(e) {
    const { particle: i, radius: n } = e,
      s = this.getCenter(i, n),
      o = this.getSidesData(i, n);
    Pv(e, s, o);
  }
  getSidesCount(e) {
    const i = e.shapeData;
    return Math.round(S((i == null ? void 0 : i.sides) ?? Cv));
  }
}
const Rc = 3.5,
  Vc = 2.66,
  Ov = 3;
class Tv extends Nh {
  constructor() {
    (super(...arguments), (this.validTypes = ["polygon"]));
  }
  getCenter(e, i) {
    return { x: -i / (e.sides / Rc), y: -i / (Vc / Rc) };
  }
  getSidesData(e, i) {
    const n = e.sides;
    return {
      count: { denominator: 1, numerator: n },
      length: (i * Vc) / (n / Ov),
    };
  }
}
const Av = 1.66,
  Ev = 3,
  kv = 2;
class Mv extends Nh {
  constructor() {
    (super(...arguments), (this.validTypes = ["triangle"]));
  }
  getCenter(e, i) {
    return { x: -i, y: i / Av };
  }
  getSidesCount() {
    return Ev;
  }
  getSidesData(e, i) {
    const n = i * kv;
    return { count: { denominator: 2, numerator: 3 }, length: n };
  }
}
async function Iv(t, e = !0) {
  await t.addShape(new Tv(), e);
}
async function Rv(t, e = !0) {
  await t.addShape(new Mv(), e);
}
async function Vv(t, e = !0) {
  (await Iv(t, e), await Rv(t, e));
}
class Lv {
  constructor() {
    ((this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class zv extends _t {
  constructor() {
    (super(),
      (this.animation = new Lv()),
      (this.direction = Ee.clockwise),
      (this.path = !1),
      (this.value = 0));
  }
  load(e) {
    e &&
      (super.load(e),
      e.direction !== void 0 && (this.direction = e.direction),
      this.animation.load(e.animation),
      e.path !== void 0 && (this.path = e.path));
  }
}
const Uh = 2,
  Gv = Math.PI * Uh,
  $v = 1,
  Dv = 360;
class Fv {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const i = e.options.rotate;
    if (!i) return;
    ((e.rotate = {
      enable: i.animation.enable,
      value: It(S(i.value)),
      min: 0,
      max: Gv,
    }),
      (e.pathRotation = i.path));
    let n = i.direction;
    switch (
      (n === Ee.random &&
        (n = Math.floor(D() * Uh) > 0 ? Ee.counterClockwise : Ee.clockwise),
      n)
    ) {
      case Ee.counterClockwise:
      case "counterClockwise":
        e.rotate.status = me.decreasing;
        break;
      case Ee.clockwise:
        e.rotate.status = me.increasing;
        break;
    }
    const s = i.animation;
    (s.enable &&
      ((e.rotate.decay = $v - S(s.decay)),
      (e.rotate.velocity =
        (S(s.speed) / Dv) * this.container.retina.reduceFactor),
      s.sync || (e.rotate.velocity *= D())),
      (e.rotation = e.rotate.value));
  }
  isEnabled(e) {
    const i = e.options.rotate;
    return i
      ? !e.destroyed &&
          !e.spawning &&
          (!!i.value || i.animation.enable || i.path)
      : !1;
  }
  loadOptions(e, ...i) {
    e.rotate || (e.rotate = new zv());
    for (const n of i) e.rotate.load(n == null ? void 0 : n.rotate);
  }
  update(e, i) {
    this.isEnabled(e) &&
      ((e.isRotating = !!e.rotate),
      e.rotate &&
        (En(e, e.rotate, !1, Kt.none, i), (e.rotation = e.rotate.value)));
  }
}
async function Hv(t, e = !0) {
  await t.addParticleUpdater("rotate", (i) => Promise.resolve(new Fv(i)), e);
}
const Bv = 2,
  qv = Math.sqrt(Bv),
  Nv = 2;
function Uv(t) {
  const { context: e, radius: i } = t,
    n = i / qv,
    s = n * Nv;
  e.rect(-n, -n, s, s);
}
const jv = 4;
class Wv {
  constructor() {
    this.validTypes = ["edge", "square"];
  }
  draw(e) {
    Uv(e);
  }
  getSidesCount() {
    return jv;
  }
}
async function Qv(t, e = !0) {
  await t.addShape(new Wv(), e);
}
const Kv = 2,
  cn = { x: 0, y: 0 };
function Yv(t) {
  const { context: e, particle: i, radius: n } = t,
    s = i.sides,
    o = i.starInset ?? Kv;
  e.moveTo(cn.x, cn.y - n);
  for (let r = 0; r < s; r++)
    (e.rotate(Math.PI / s),
      e.lineTo(cn.x, cn.y - n * o),
      e.rotate(Math.PI / s),
      e.lineTo(cn.x, cn.y - n));
}
const Zv = 2,
  Jv = 5;
class Xv {
  constructor() {
    this.validTypes = ["star"];
  }
  draw(e) {
    Yv(e);
  }
  getSidesCount(e) {
    const i = e.shapeData;
    return Math.round(S((i == null ? void 0 : i.sides) ?? Jv));
  }
  particleInit(e, i) {
    const n = i.shapeData;
    i.starInset = S((n == null ? void 0 : n.inset) ?? Zv);
  }
}
async function ex(t, e = !0) {
  await t.addShape(new Xv(), e);
}
const tx = 1;
class ix {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var r;
    const i = this.container,
      n = e.options,
      s = Re(n.stroke, e.id, n.reduceDuplicates);
    ((e.strokeWidth = S(s.width) * i.retina.pixelRatio),
      (e.strokeOpacity = S(s.opacity ?? tx)),
      (e.strokeAnimation = (r = s.color) == null ? void 0 : r.animation));
    const o = Zt(s.color) ?? e.getFillColor();
    o && (e.strokeColor = xa(o, e.strokeAnimation, i.retina.reduceFactor));
  }
  isEnabled(e) {
    const i = e.strokeAnimation,
      { strokeColor: n } = e;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!i &&
      (((n == null ? void 0 : n.h.value) !== void 0 && n.h.enable) ||
        ((n == null ? void 0 : n.s.value) !== void 0 && n.s.enable) ||
        ((n == null ? void 0 : n.l.value) !== void 0 && n.l.enable))
    );
  }
  update(e, i) {
    this.isEnabled(e) && Sa(e.strokeColor, i);
  }
}
async function nx(t, e = !0) {
  await t.addParticleUpdater(
    "strokeColor",
    (i) => Promise.resolve(new ix(i)),
    e,
  );
}
async function sx(t, e = !0) {
  (await Nw(t, !1),
    await Q0(t, !1),
    await nb(t, !1),
    await hb(t, !1),
    await vb(t, !1),
    await Mb(t, !1),
    await Vb(t, !1),
    await Db(t, !1),
    await qb(t, !1),
    await ew(t, !1),
    await ow(t, !1),
    await Ww(t, !1),
    await iv(t, !1),
    await vv(t, !1),
    await $0(),
    await H0(t, !1),
    await Mw(t, !1),
    await Bw(t, !1),
    await Vv(t, !1),
    await Qv(t, !1),
    await ex(t, !1),
    await $w(t, !1),
    await Hv(t, !1),
    await nx(t, !1),
    await G0(t, e));
}
const jh = 2,
  Lc = 0.5;
function ox(t) {
  const { context: e, particle: i, radius: n, opacity: s } = t,
    o = i.shapeData;
  if (!o) return;
  const r = o.value;
  if (r === void 0) return;
  i.text === void 0 && (i.text = Re(r, i.randomIndexData));
  const a = i.text,
    l = o.style ?? "",
    c = o.weight ?? "400",
    u = Math.round(n) * jh,
    h = o.font ?? "Verdana",
    d = i.shapeFill,
    f =
      a == null
        ? void 0
        : a.split(`
`);
  if (f) {
    ((e.font = `${l} ${c} ${u}px "${h}"`), (e.globalAlpha = s));
    for (let g = 0; g < f.length; g++) rx(e, f[g], n, s, g, d);
    e.globalAlpha = 1;
  }
}
function rx(t, e, i, n, s, o) {
  const r = e.length * i * Lc,
    a = { x: -r, y: i * Lc },
    l = i * jh;
  o ? t.fillText(e, a.x, a.y + l * s) : t.strokeText(e, a.x, a.y + l * s);
}
class ax {
  constructor() {
    this.validTypes = ["text", "character", "char", "multiline-text"];
  }
  draw(e) {
    ox(e);
  }
  async init(e) {
    const i = e.actualOptions,
      { validTypes: n } = this;
    if (n.find((s) => ge(s, i.particles.shape.type))) {
      const s = n.map((r) => i.particles.shape.options[r]).find((r) => !!r),
        o = [];
      (Pe(s, (r) => {
        o.push($r(r.font, r.weight));
      }),
        await Promise.all(o));
    }
  }
  particleInit(e, i) {
    if (!i.shape || !this.validTypes.includes(i.shape)) return;
    const n = i.shapeData;
    if (n === void 0) return;
    const s = n.value;
    s !== void 0 && (i.text = Re(s, i.randomIndexData));
  }
}
async function lx(t, e = !0) {
  await t.addShape(new ax(), e);
}
var mi;
(function (t) {
  ((t.clockwise = "clockwise"),
    (t.counterClockwise = "counter-clockwise"),
    (t.random = "random"));
})(mi || (mi = {}));
class cx {
  constructor() {
    ((this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class ux extends _t {
  constructor() {
    (super(),
      (this.animation = new cx()),
      (this.direction = mi.clockwise),
      (this.enable = !1),
      (this.value = 0));
  }
  load(e) {
    (super.load(e),
      e &&
        (this.animation.load(e.animation),
        e.direction !== void 0 && (this.direction = e.direction),
        e.enable !== void 0 && (this.enable = e.enable)));
  }
}
const Nn = 1,
  Wh = 2,
  hx = Math.PI * Wh,
  dx = 360;
class fx {
  constructor(e) {
    this.container = e;
  }
  getTransformValues(e) {
    var n;
    const i = ((n = e.tilt) == null ? void 0 : n.enable) && e.tilt;
    return {
      b: i ? Math.cos(i.value) * i.cosDirection : void 0,
      c: i ? Math.sin(i.value) * i.sinDirection : void 0,
    };
  }
  init(e) {
    var o;
    const i = e.options.tilt;
    if (!i) return;
    e.tilt = {
      enable: i.enable,
      value: It(S(i.value)),
      sinDirection: D() >= Qt ? Nn : -Nn,
      cosDirection: D() >= Qt ? Nn : -Nn,
      min: 0,
      max: hx,
    };
    let n = i.direction;
    switch (
      (n === mi.random &&
        (n = Math.floor(D() * Wh) > 0 ? mi.counterClockwise : mi.clockwise),
      n)
    ) {
      case mi.counterClockwise:
      case "counterClockwise":
        e.tilt.status = me.decreasing;
        break;
      case mi.clockwise:
        e.tilt.status = me.increasing;
        break;
    }
    const s = (o = e.options.tilt) == null ? void 0 : o.animation;
    s != null &&
      s.enable &&
      ((e.tilt.decay = Nn - S(s.decay)),
      (e.tilt.velocity =
        (S(s.speed) / dx) * this.container.retina.reduceFactor),
      s.sync || (e.tilt.velocity *= D()));
  }
  isEnabled(e) {
    var n;
    const i = (n = e.options.tilt) == null ? void 0 : n.animation;
    return !e.destroyed && !e.spawning && !!(i != null && i.enable);
  }
  loadOptions(e, ...i) {
    e.tilt || (e.tilt = new ux());
    for (const n of i) e.tilt.load(n == null ? void 0 : n.tilt);
  }
  async update(e, i) {
    !this.isEnabled(e) ||
      !e.tilt ||
      (En(e, e.tilt, !1, Kt.none, i), await Promise.resolve());
  }
}
async function px(t, e = !0) {
  await t.addParticleUpdater("tilt", (i) => Promise.resolve(new fx(i)), e);
}
class zc {
  constructor() {
    ((this.enable = !1), (this.frequency = 0.05), (this.opacity = 1));
  }
  load(e) {
    e &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = H(e.opacity)));
  }
}
class gx {
  constructor() {
    ((this.lines = new zc()), (this.particles = new zc()));
  }
  load(e) {
    e && (this.lines.load(e.lines), this.particles.load(e.particles));
  }
}
class mx {
  getColorStyles(e, i, n, s) {
    const o = e.options,
      r = o.twinkle;
    if (!r) return {};
    const a = r.particles,
      l = a.enable && D() < a.frequency,
      c = e.options.zIndex,
      u = 1,
      h = (u - e.zIndexFactor) ** c.opacityRate,
      d = l ? S(a.opacity) * h : s,
      f = Zt(a.color),
      g = f ? Si(f, d) : void 0,
      p = {},
      y = l && g;
    return ((p.fill = y ? g : void 0), (p.stroke = y ? g : void 0), p);
  }
  async init() {
    await Promise.resolve();
  }
  isEnabled(e) {
    const i = e.options,
      n = i.twinkle;
    return n ? n.particles.enable : !1;
  }
  loadOptions(e, ...i) {
    e.twinkle || (e.twinkle = new gx());
    for (const n of i) e.twinkle.load(n == null ? void 0 : n.twinkle);
  }
  async update() {
    await Promise.resolve();
  }
}
async function _x(t, e = !0) {
  await t.addParticleUpdater("twinkle", () => Promise.resolve(new mx()), e);
}
class yx {
  constructor() {
    ((this.angle = 50), (this.move = 10));
  }
  load(e) {
    e &&
      (e.angle !== void 0 && (this.angle = H(e.angle)),
      e.move !== void 0 && (this.move = H(e.move)));
  }
}
class bx {
  constructor() {
    ((this.distance = 5), (this.enable = !1), (this.speed = new yx()));
  }
  load(e) {
    if (
      e &&
      (e.distance !== void 0 && (this.distance = H(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0)
    )
      if (je(e.speed)) this.speed.load({ angle: e.speed });
      else {
        const i = e.speed;
        i.min !== void 0
          ? this.speed.load({ angle: i })
          : this.speed.load(e.speed);
      }
  }
}
const wx = 0,
  vx = 2,
  xx = Math.PI * vx,
  Sx = 60;
function Px(t, e) {
  const { wobble: i } = t.options,
    { wobble: n } = t;
  if (!(i != null && i.enable) || !n) return;
  const s = n.angleSpeed * e.factor,
    o = n.moveSpeed * e.factor,
    r = (o * ((t.retina.wobbleDistance ?? wx) * e.factor)) / (ye / Sx),
    a = xx,
    { position: l } = t;
  ((n.angle += s),
    n.angle > a && (n.angle -= a),
    (l.x += r * Math.cos(n.angle)),
    (l.y += r * Math.abs(Math.sin(n.angle))));
}
const Cx = 2,
  Ox = Math.PI * Cx,
  Tx = 360,
  Ax = 10,
  Ex = 0;
class kx {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const i = e.options.wobble;
    (i != null && i.enable
      ? (e.wobble = {
          angle: D() * Ox,
          angleSpeed: S(i.speed.angle) / Tx,
          moveSpeed: S(i.speed.move) / Ax,
        })
      : (e.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
      (e.retina.wobbleDistance =
        S((i == null ? void 0 : i.distance) ?? Ex) *
        this.container.retina.pixelRatio));
  }
  isEnabled(e) {
    var i;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!((i = e.options.wobble) != null && i.enable)
    );
  }
  loadOptions(e, ...i) {
    e.wobble || (e.wobble = new bx());
    for (const n of i) e.wobble.load(n == null ? void 0 : n.wobble);
  }
  update(e, i) {
    this.isEnabled(e) && Px(e, i);
  }
}
async function Mx(t, e = !0) {
  await t.addParticleUpdater("wobble", (i) => Promise.resolve(new kx(i)), e);
}
async function Ix(t, e = !0) {
  (await G1(t, !1),
    await i0(t, !1),
    await px(t, !1),
    await _x(t, !1),
    await Mx(t, !1),
    await lx(t, !1),
    await K1(t, !1),
    await S1(t, !1),
    await gy(t, !1),
    await H1(t, !1),
    await j1(t, !1),
    await sx(t, e));
}
class Rx {
  constructor() {
    ((this.count = 0),
      (this.enable = !1),
      (this.speed = 0),
      (this.decay = 0),
      (this.delay = 0),
      (this.sync = !1),
      (this.startValue = Wt.random));
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.sync !== void 0 && (this.sync = e.sync),
      e.startValue !== void 0 && (this.startValue = e.startValue),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.delay !== void 0 && (this.delay = H(e.delay)));
  }
}
class Vx {
  constructor() {
    ((this.value = 0), (this.animation = new Rx()));
  }
  load(e) {
    e &&
      (this.animation.load(e.animation),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class Lx {
  constructor() {
    ((this.stop = 0), (this.value = new Pi()));
  }
  load(e) {
    e &&
      (e.stop !== void 0 && (this.stop = e.stop),
      (this.value = Pi.create(this.value, e.value)),
      e.opacity !== void 0 &&
        ((this.opacity = new Vx()),
        je(e.opacity)
          ? (this.opacity.value = e.opacity)
          : this.opacity.load(e.opacity)));
  }
}
class zx {
  constructor() {
    ((this.count = 0),
      (this.enable = !1),
      (this.speed = 0),
      (this.decay = 0),
      (this.delay = 0),
      (this.sync = !1));
  }
  load(e) {
    e &&
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.delay !== void 0 && (this.delay = H(e.delay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class Gx {
  constructor() {
    ((this.value = 0),
      (this.animation = new zx()),
      (this.direction = Ee.clockwise));
  }
  load(e) {
    e &&
      (this.animation.load(e.animation),
      e.value !== void 0 && (this.value = H(e.value)),
      e.direction !== void 0 && (this.direction = e.direction));
  }
}
class $x {
  constructor() {
    ((this.angle = new Gx()), (this.colors = []), (this.type = co.random));
  }
  load(e) {
    e &&
      (this.angle.load(e.angle),
      e.colors !== void 0 &&
        (this.colors = e.colors.map((i) => {
          const n = new Lx();
          return (n.load(i), n);
        })),
      e.type !== void 0 && (this.type = e.type));
  }
}
function Dx(t, e) {
  const { gradient: i } = t;
  if (i) {
    En(t, i.angle, !1, Kt.none, e);
    for (const n of i.colors)
      (Sa(n.value, e), n.opacity && En(t, n.opacity, !0, Kt.none, e));
  }
}
const Fx = 2,
  Hx = Math.PI * Fx;
class Bx {
  getColorStyles(e, i, n, s) {
    const o = e.gradient;
    if (!o) return {};
    const r = o.angle.value,
      a = { x: 0, y: 0 },
      l = 0,
      c =
        o.type === co.radial
          ? i.createRadialGradient(a.x, a.y, l, a.x, a.y, n)
          : i.createLinearGradient(
              Math.cos(r) * -n,
              Math.sin(r) * -n,
              Math.cos(r) * n,
              Math.sin(r) * n,
            );
    for (const { stop: u, value: h, opacity: d } of o.colors)
      c.addColorStop(
        u,
        Si(
          { h: h.h.value, s: h.s.value, l: h.l.value },
          (d == null ? void 0 : d.value) ?? s,
        ),
      );
    return { fill: c };
  }
  init(e) {
    const i = Re(e.options.gradient);
    if (!i) return;
    const { angle: n } = i,
      s = 360,
      o = 1;
    e.gradient = {
      angle: {
        value: S(n.value),
        enable: n.animation.enable,
        velocity: (S(n.animation.speed) / s) * e.container.retina.reduceFactor,
        decay: o - S(n.animation.decay),
        delayTime: S(n.animation.delay) * ye,
        max: Hx,
        min: 0,
        time: 0,
      },
      type: i.type,
      colors: [],
    };
    let r = i.angle.direction;
    switch (
      (r === Ee.random && (r = D() > Qt ? Ee.counterClockwise : Ee.clockwise),
      r)
    ) {
      case Ee.counterClockwise:
      case "counterClockwise":
        e.gradient.angle.status = me.decreasing;
        break;
      case Ee.clockwise:
        e.gradient.angle.status = me.increasing;
        break;
    }
    const a = e.options.reduceDuplicates;
    for (const l of i.colors) {
      const c = Zt(l.value, e.id, a);
      if (!c) continue;
      const u = xa(c, l.value.animation, e.container.retina.reduceFactor),
        h = {
          stop: l.stop,
          value: u,
          opacity: l.opacity
            ? {
                enable: l.opacity.animation.enable,
                max: ot(l.opacity.value),
                min: An(l.opacity.value),
                status: me.increasing,
                value: S(l.opacity.value),
                velocity:
                  (S(l.opacity.animation.speed) / ae) *
                  e.container.retina.reduceFactor,
                decay: o - S(l.opacity.animation.decay),
                delayTime: S(l.opacity.animation.delay) * ye,
                time: 0,
              }
            : void 0,
        },
        { opacity: d } = h;
      if (l.opacity && d) {
        const f = l.opacity.value;
        switch (
          ((d.min = An(f)), (d.max = ot(f)), l.opacity.animation.startValue)
        ) {
          case Wt.min:
            ((d.value = d.min), (d.status = me.increasing));
            break;
          case Wt.max:
            ((d.value = d.max), (d.status = me.decreasing));
            break;
          case Wt.random:
          default:
            ((d.value = ke(d)),
              (d.status = D() >= Qt ? me.increasing : me.decreasing));
            break;
        }
      }
      e.gradient.colors.push(h);
    }
  }
  isEnabled(e) {
    var i, n;
    return (
      !e.destroyed &&
      !e.spawning &&
      (!!((i = e.gradient) != null && i.angle.enable) ||
        (((n = e.gradient) == null
          ? void 0
          : n.colors.some(
              (s) => s.value.h.enable || s.value.s.enable || s.value.l.enable,
            )) ??
          !1))
    );
  }
  loadOptions(e, ...i) {
    for (const n of i) {
      if (!(n != null && n.gradient)) continue;
      const s = n.gradient;
      s &&
        (e.gradient = Pe(s, (o) => {
          const r = new $x();
          return (r.load(o), r);
        }));
    }
  }
  update(e, i) {
    Dx(e, i);
  }
}
async function qx(t, e = !0) {
  await t.addParticleUpdater("gradient", () => Promise.resolve(new Bx()), e);
}
const Nx = 0.5,
  Ux = 2;
function jx(t) {
  const { context: e, radius: i } = t,
    n = i * Ux,
    s = i * Nx,
    o = i + s,
    r = -i,
    a = -i;
  (e.moveTo(r, a + s),
    e.quadraticCurveTo(r, a, r + s, a),
    e.quadraticCurveTo(r + i, a, r + i, a + s),
    e.quadraticCurveTo(r + i, a, r + o, a),
    e.quadraticCurveTo(r + n, a, r + n, a + s),
    e.quadraticCurveTo(r + n, a + i, r + o, a + o),
    e.lineTo(r + i, a + n),
    e.lineTo(r + s, a + o),
    e.quadraticCurveTo(r, a + i, r, a + s));
}
class Wx {
  constructor() {
    this.validTypes = ["heart"];
  }
  draw(e) {
    jx(e);
  }
}
async function Qx(t, e = !0) {
  await t.addShape(new Wx(), e);
}
const xr = 255;
function Wr(t) {
  const e = { b: 0, g: 0, r: 0 },
    i = 60,
    n = { h: t.h / i, s: t.s / ae, v: t.v / ae },
    s = 1,
    o = 2,
    r = n.v * n.s,
    a = r * (s - Math.abs((n.h % o) - s));
  let l;
  const c = { min: 0, max: 1 },
    u = { min: 1, max: 2 },
    h = { min: 2, max: 3 },
    d = { min: 3, max: 4 },
    f = { min: 4, max: 5 },
    g = { min: 5, max: 6 };
  if (
    (n.h >= c.min && n.h <= c.max
      ? (l = { r, g: a, b: 0 })
      : n.h > u.min && n.h <= u.max
        ? (l = { r: a, g: r, b: 0 })
        : n.h > h.min && n.h <= h.max
          ? (l = { r: 0, g: r, b: a })
          : n.h > d.min && n.h <= d.max
            ? (l = { r: 0, g: a, b: r })
            : n.h > f.min && n.h <= f.max
              ? (l = { r: a, g: 0, b: r })
              : n.h > g.min && n.h <= g.max && (l = { r, g: 0, b: a }),
    l)
  ) {
    const p = n.v - r;
    ((e.r = Math.floor((l.r + p) * xr)),
      (e.g = Math.floor((l.g + p) * xr)),
      (e.b = Math.floor((l.b + p) * xr)));
  }
  return e;
}
function Kx(t) {
  return { a: t.a, ...Wr(t) };
}
class Yx {
  constructor() {
    ((this.key = "hsv"), (this.stringPrefix = "hsv"));
  }
  handleColor(e) {
    const i = e.value,
      n = i.hsv ?? e.value;
    if (n.h !== void 0 && n.v !== void 0) return Wr(n);
  }
  handleRangeColor(e) {
    const i = e.value,
      n = i.hsv ?? e.value;
    if (n.h !== void 0 && n.v !== void 0)
      return Wr({ h: S(n.h), s: S(n.s), v: S(n.v) });
  }
  parseString(e) {
    if (!e.startsWith("hsv")) return;
    const i =
        /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = i.exec(e),
      s = 4,
      o = { h: 1, s: 2, v: 3, a: 5 },
      r = 1,
      a = 10;
    return n
      ? Kx({
          a: n.length > s ? ma(n[o.a]) : r,
          h: parseInt(n[o.h], a),
          s: parseInt(n[o.s], a),
          v: parseInt(n[o.v], a),
        })
      : void 0;
  }
}
function Gc() {
  return (Fr(new Yx()), Promise.resolve());
}
class Zx {
  constructor() {
    ((this.color = new he()),
      (this.color.value = "#ff0000"),
      (this.radius = 0),
      (this.rate = 1));
  }
  load(e) {
    e !== void 0 &&
      (e.color !== void 0 && (this.color = he.create(this.color, e.color)),
      (this.duration = e.duration),
      (this.infectedStage = e.infectedStage),
      e.radius !== void 0 && (this.radius = e.radius),
      e.rate !== void 0 && (this.rate = e.rate));
  }
}
class Jx {
  constructor() {
    ((this.cure = !1),
      (this.delay = 0),
      (this.enable = !1),
      (this.infections = 0),
      (this.stages = []));
  }
  load(e) {
    e !== void 0 &&
      (e.cure !== void 0 && (this.cure = e.cure),
      e.delay !== void 0 && (this.delay = e.delay),
      e.enable !== void 0 && (this.enable = e.enable),
      e.infections !== void 0 && (this.infections = e.infections),
      e.stages !== void 0 &&
        (this.stages = e.stages.map((i) => {
          const n = new Zx();
          return (n.load(i), n);
        })));
  }
}
const Ds = 0,
  Xx = 0;
class eS {
  constructor(e) {
    ((this._nextInfectionStage = (i) => {
      const n = this._container.actualOptions.infection,
        { infection: s } = i;
      if (!n || !s) return;
      const o = n.stages.length;
      o <= Ds ||
        s.stage === void 0 ||
        ((s.time = 0),
        o <= ++s.stage &&
          (n.cure
            ? (delete s.stage, delete s.time)
            : ((s.stage = 0), (s.time = 0))));
    }),
      (this._container = e));
  }
  startInfection(e, i) {
    const n = this._container.actualOptions.infection,
      { infection: s } = e;
    if (!n || !s) return;
    const o = n.stages,
      r = o.length;
    i > r || i < Ds || ((s.delay = 0), (s.delayStage = i));
  }
  updateInfection(e, i) {
    const n = this._container.actualOptions.infection,
      { infection: s } = e;
    if (!n || !s) return;
    const o = n.stages,
      r = o.length;
    if (s.delay !== void 0 && s.delayStage !== void 0) {
      const a = s.delayStage;
      if (a > r || a < Ds) return;
      s.delay >= n.delay * ye
        ? ((s.stage = a), (s.time = 0), delete s.delay, delete s.delayStage)
        : (s.delay += i);
    } else (delete s.delay, delete s.delayStage);
    if (s.stage !== void 0 && s.time !== void 0) {
      const a = o[s.stage];
      a.duration !== void 0 && a.duration >= Xx && s.time > a.duration * ye
        ? this._nextInfectionStage(e)
        : (s.time += i);
    } else (delete s.stage, delete s.time);
  }
  updateInfectionStage(e, i) {
    const n = this._container.actualOptions,
      { infection: s } = e;
    if (!n.infection || !s) return;
    const o = n.infection.stages.length;
    i > o ||
      i < Ds ||
      (s.stage !== void 0 && s.stage > i) ||
      ((s.stage = i), (s.time = 0));
  }
}
const tS = 0;
class iS {
  constructor(e) {
    ((this._container = e),
      (this._container.infecter = new eS(this._container)));
  }
  particleFillColor(e) {
    const i = this._container.actualOptions;
    if (!e.infection || !i.infection) return;
    const n = e.infection.stage,
      s = i.infection,
      o = s.stages;
    return n !== void 0 ? o[n].color : void 0;
  }
  particleStrokeColor(e) {
    return this.particleFillColor(e);
  }
  particlesSetup() {
    var i;
    const e = this._container.actualOptions;
    if (e.infection)
      for (let n = 0; n < e.infection.infections; n++) {
        const s = this._container.particles.filter((r) => {
            const a = r;
            return (
              a.infection || (a.infection = {}),
              a.infection.stage === void 0
            );
          }),
          o = Yt(s);
        (i = this._container.infecter) == null || i.startInfection(o, tS);
      }
  }
}
class nS {
  constructor() {
    this.id = "infection";
  }
  getPlugin(e) {
    return Promise.resolve(new iS(e));
  }
  loadOptions(e, i) {
    if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
    let n = e.infection;
    ((n == null ? void 0 : n.load) === void 0 && (e.infection = n = new Jx()),
      n.load(i == null ? void 0 : i.infection));
  }
  needsPlugin(e) {
    var i;
    return (
      ((i = e == null ? void 0 : e.infection) == null ? void 0 : i.enable) ?? !1
    );
  }
}
const sS = 1,
  oS = 2;
class rS extends Ln {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact(e, i) {
    var p, y, w;
    const n = this.container.infecter;
    if (
      !n ||
      (n.updateInfection(e, i.value),
      ((p = e.infection) == null ? void 0 : p.stage) === void 0)
    )
      return;
    const s = this.container,
      o = s.actualOptions,
      r = o.infection;
    if (!(r != null && r.enable) || r.stages.length < sS) return;
    const a = r.stages[e.infection.stage],
      l = s.retina.pixelRatio,
      c = e.getRadius() * oS + a.radius * l,
      u = e.getPosition(),
      h = a.infectedStage ?? e.infection.stage,
      d = s.particles.quadTree.queryCircle(u, c),
      f = a.rate,
      g = d.length;
    for (const x of d) {
      const C = x;
      if (
        !(
          C === e ||
          C.destroyed ||
          C.spawning ||
          !(
            ((y = C.infection) == null ? void 0 : y.stage) === void 0 ||
            C.infection.stage !== e.infection.stage
          ) ||
          D() >= f / g
        )
      ) {
        if (((w = C.infection) == null ? void 0 : w.stage) === void 0)
          n.startInfection(C, h);
        else if (C.infection.stage < e.infection.stage)
          n.updateInfectionStage(C, h);
        else if (C.infection.stage > e.infection.stage) {
          const v = r.stages[C.infection.stage],
            k = (v == null ? void 0 : v.infectedStage) ?? C.infection.stage;
          n.updateInfectionStage(e, k);
        }
      }
    }
  }
  isEnabled() {
    var e, i;
    return (
      ((i =
        (e = this.container.actualOptions) == null ? void 0 : e.infection) ==
      null
        ? void 0
        : i.enable) ?? !1
    );
  }
  reset() {}
}
async function aS(t, e = !0) {
  const i = new nS();
  (await t.addPlugin(i, e),
    await t.addInteractor(
      "particlesInfection",
      (n) => Promise.resolve(new rS(n)),
      e,
    ));
}
const Jt = { x: 0, y: 0 },
  lS = 0.55;
function cS(t) {
  const { context: e, radius: i } = t,
    n = i * lS;
  (e.moveTo(Jt.x, Jt.y),
    e.bezierCurveTo(n, -i, n, i, Jt.x, Jt.y),
    e.moveTo(Jt.x, Jt.y),
    e.bezierCurveTo(-n, -i, Jt.x - n, i, Jt.x, Jt.y));
}
class uS {
  constructor() {
    this.validTypes = ["infinity"];
  }
  draw(e) {
    cS(e);
  }
}
async function hS(t, e = !0) {
  await t.addShape(new uS(), e);
}
const $c = { max: 1, min: 0 },
  dS = 0.5,
  fS = 2,
  Dc = Math.PI * dS,
  Qh = Math.PI * fS,
  pS = 0.25,
  gS = Math.PI * pS,
  Fc = 0,
  Kh = "light";
function mS(t, e, i) {
  var r;
  const n =
    (r = t.actualOptions.interactivity.modes.light) == null ? void 0 : r.area;
  if (!n) return;
  (e.beginPath(), e.arc(i.x, i.y, n.radius, Fc, Qh));
  const s = e.createRadialGradient(i.x, i.y, Fc, i.x, i.y, n.radius),
    o = t.canvas.mouseLight;
  !(o != null && o.start) ||
    !o.stop ||
    (s.addColorStop($c.min, tt(o.start)),
    s.addColorStop($c.max, tt(o.stop)),
    (e.fillStyle = s),
    e.fill());
}
function _S(t, e, i, n) {
  var C;
  const s = i.getPosition(),
    o =
      (C = t.actualOptions.interactivity.modes.light) == null
        ? void 0
        : C.shadow;
  if (!o) return;
  const r = i.lightShadow;
  if (!r) return;
  const a = i.getRadius(),
    l = i.sides,
    c = Qh / l,
    u = -i.rotation + gS,
    h = 1,
    d = [];
  for (let v = 0; v < l; v++)
    d.push({
      x: s.x + a * Math.sin(u + c * v) * h,
      y: s.y + a * Math.cos(u + c * v) * h,
    });
  const f = [],
    g = o.length;
  for (const v of d) {
    const k = Math.atan2(n.y - v.y, n.x - v.x),
      E = { x: v.x + g * Math.sin(-k - Dc), y: v.y + g * Math.cos(-k - Dc) };
    f.push({ end: E, start: v });
  }
  const p = tt(r),
    y = 1,
    w = 0,
    x = f.length - y;
  for (let v = x, k = 0; v >= w; k = v--)
    (e.beginPath(),
      e.moveTo(f[v].start.x, f[v].start.y),
      e.lineTo(f[k].start.x, f[k].start.y),
      e.lineTo(f[k].end.x, f[k].end.y),
      e.lineTo(f[v].end.x, f[v].end.y),
      (e.fillStyle = p),
      e.fill());
}
class yS {
  constructor() {
    ((this.start = new he()),
      (this.stop = new he()),
      (this.start.value = "#ffffff"),
      (this.stop.value = "#000000"));
  }
  load(e) {
    e &&
      ((this.start = he.create(this.start, e.start)),
      (this.stop = he.create(this.stop, e.stop)));
  }
}
class bS {
  constructor() {
    ((this.gradient = new yS()), (this.radius = 1e3));
  }
  load(e) {
    e &&
      (this.gradient.load(e.gradient),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class wS {
  constructor() {
    ((this.color = new he()),
      (this.color.value = "#000000"),
      (this.length = 2e3));
  }
  load(e) {
    e &&
      ((this.color = he.create(this.color, e.color)),
      e.length !== void 0 && (this.length = e.length));
  }
}
class vS {
  constructor() {
    ((this.area = new bS()), (this.shadow = new wS()));
  }
  load(e) {
    e && (this.area.load(e.area), this.shadow.load(e.shadow));
  }
}
class xS extends lt {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact() {
    const e = this.container,
      i = e.actualOptions,
      n = e.interactivity;
    if (!i.interactivity.events.onHover.enable || n.status !== "pointermove")
      return;
    const s = n.mouse.position;
    s &&
      e.canvas.draw((o) => {
        mS(e, o, s);
      });
  }
  isEnabled(e) {
    const i = this.container,
      n = i.interactivity.mouse,
      s =
        (e == null ? void 0 : e.interactivity) ?? i.actualOptions.interactivity,
      o = s.events;
    if (!(o.onHover.enable && n.position)) return !1;
    const r = ge(Kh, o.onHover.mode);
    if (r && s.modes.light) {
      const a = s.modes.light.area.gradient;
      i.canvas.mouseLight = { start: Ue(a.start), stop: Ue(a.stop) };
    }
    return r;
  }
  loadModeOptions(e, ...i) {
    e.light || (e.light = new vS());
    for (const n of i) e.light.load(n == null ? void 0 : n.light);
  }
  reset() {}
}
class SS extends Ln {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact(e) {
    const i = this.container,
      n = i.actualOptions,
      s = i.interactivity;
    if (!n.interactivity.events.onHover.enable || s.status !== "pointermove")
      return;
    const o = s.mouse.position;
    o &&
      i.canvas.draw((r) => {
        _S(i, r, e, o);
      });
  }
  isEnabled(e) {
    const i = this.container,
      n = e.interactivity ?? i.actualOptions.interactivity,
      s = i.interactivity.mouse,
      o = n.events;
    if (!(o.onHover.enable && s.position)) return !1;
    const r = ge(Kh, o.onHover.mode);
    if (r && n.modes.light) {
      const a = n.modes.light.shadow;
      e.lightShadow = Ue(a.color);
    }
    return r;
  }
  reset() {}
}
async function PS(t, e = !0) {
  (await t.addInteractor("externalLight", (i) => Promise.resolve(new xS(i)), e),
    await t.addInteractor(
      "particlesLight",
      (i) => Promise.resolve(new SS(i)),
      e,
    ));
}
class CS {
  constructor() {
    ((this.factor = 4), (this.value = !0));
  }
  load(e) {
    e &&
      (e.factor !== void 0 && (this.factor = e.factor),
      e.value !== void 0 && (this.value = e.value));
  }
}
class OS {
  constructor() {
    ((this.disable = !1), (this.reduce = new CS()));
  }
  load(e) {
    e &&
      (e.disable !== void 0 && (this.disable = e.disable),
      this.reduce.load(e.reduce));
  }
}
const Hc = 1,
  TS = 0,
  AS = 1;
class ES {
  constructor(e, i) {
    ((this._handleMotionChange = (n) => {
      const s = this._container,
        o = s.actualOptions.motion;
      o &&
        (n.matches
          ? o.disable
            ? (s.retina.reduceFactor = TS)
            : (s.retina.reduceFactor = o.reduce.value
                ? AS / o.reduce.factor
                : Hc)
          : (s.retina.reduceFactor = 1));
    }),
      (this._container = e),
      (this._engine = i));
  }
  async init() {
    const e = this._container,
      i = e.actualOptions.motion;
    if (!(i && (i.disable || i.reduce.value))) {
      e.retina.reduceFactor = 1;
      return;
    }
    const n = _a("(prefers-reduced-motion: reduce)");
    if (!n) {
      e.retina.reduceFactor = Hc;
      return;
    }
    this._handleMotionChange(n);
    const s = () => {
      (async () => {
        this._handleMotionChange(n);
        try {
          await e.refresh();
        } catch {}
      })();
    };
    (n.addEventListener !== void 0
      ? n.addEventListener("change", s)
      : n.addListener !== void 0 && n.addListener(s),
      await Promise.resolve());
  }
}
class kS {
  constructor(e) {
    ((this.id = "motion"), (this._engine = e));
  }
  getPlugin(e) {
    return Promise.resolve(new ES(e, this._engine));
  }
  loadOptions(e, i) {
    if (!this.needsPlugin()) return;
    let n = e.motion;
    ((n != null && n.load) || (e.motion = n = new OS()),
      n.load(i == null ? void 0 : i.motion));
  }
  needsPlugin() {
    return !0;
  }
}
async function MS(t, e = !0) {
  await t.addPlugin(new kS(t), e);
}
class IS extends _t {
  constructor() {
    (super(), (this.value = 45));
  }
  load(e) {
    e !== void 0 && super.load(e);
  }
}
class RS {
  constructor() {
    ((this.animation = new $o()),
      (this.enable = !1),
      (this.opacity = 1),
      (this.rotation = new IS()),
      (this.width = 1));
  }
  load(e) {
    e &&
      (this.animation.load(e.animation),
      this.rotation.load(e.rotation),
      e.enable !== void 0 && (this.enable = e.enable),
      e.opacity !== void 0 && (this.opacity = H(e.opacity)),
      e.width !== void 0 && (this.width = H(e.width)),
      e.radius !== void 0 && (this.radius = H(e.radius)),
      e.color !== void 0 && (this.color = he.create(this.color, e.color)));
  }
}
var mn;
(function (t) {
  ((t.front = "front"), (t.back = "back"));
})(mn || (mn = {}));
const VS = 0,
  LS = 0.5,
  zS = 2;
function GS(t, e, i, n, s, o, r, a, l) {
  if (o <= VS) return;
  const c = e.getPosition();
  (i && (t.strokeStyle = Si(i, s)), (t.lineWidth = o));
  const u = It(r);
  (t.beginPath(), t.ellipse(c.x, c.y, n * LS, n * zS, u, a, l), t.stroke());
}
const $S = 2,
  DS = 0.5,
  Bc = Math.PI * $S,
  qc = 0,
  Qr = Math.PI * DS,
  Nc = Math.PI + Qr,
  FS = 0,
  HS = 1,
  BS = 1,
  Uc = 0;
class qS {
  constructor(e) {
    this.container = e;
  }
  afterDraw(e) {
    const i = e.options.orbit;
    i != null && i.enable && this.drawOrbit(e, mn.front);
  }
  beforeDraw(e) {
    const i = e.options.orbit;
    i != null && i.enable && this.drawOrbit(e, mn.back);
  }
  drawOrbit(e, i) {
    const n = this.container;
    let s, o;
    switch (i) {
      case mn.back:
        ((s = Qr), (o = Nc));
        break;
      case mn.front:
        ((s = Nc), (o = Qr));
        break;
      default:
        ((s = FS), (o = Bc));
    }
    n.canvas.draw((r) => {
      GS(
        r,
        e,
        e.orbitColor ?? e.getFillColor(),
        e.retina.orbitRadius ?? n.retina.orbitRadius ?? e.getRadius(),
        e.orbitOpacity ?? HS,
        e.orbitWidth ?? BS,
        (e.orbitRotation ?? Uc) * n.retina.pixelRatio,
        s,
        o,
      );
    });
  }
  init(e) {
    const i = this.container,
      n = e.options,
      s = n.orbit;
    s != null &&
      s.enable &&
      ((e.orbitRotation = S(s.rotation.value)),
      (e.orbitColor = Zt(s.color)),
      (e.retina.orbitRadius =
        s.radius !== void 0 ? S(s.radius) * i.retina.pixelRatio : void 0),
      (i.retina.orbitRadius = e.retina.orbitRadius),
      (e.orbitAnimationSpeed = s.animation.enable ? S(s.animation.speed) : qc),
      (e.orbitWidth = S(s.width)),
      (e.orbitOpacity = S(s.opacity)));
  }
  isEnabled(e) {
    var n;
    const i = (n = e.options.orbit) == null ? void 0 : n.animation;
    return !e.destroyed && !e.spawning && !!(i != null && i.enable);
  }
  loadOptions(e, ...i) {
    e.orbit || (e.orbit = new RS());
    for (const n of i) e.orbit.load(n == null ? void 0 : n.orbit);
  }
  update(e, i) {
    this.isEnabled(e) &&
      (e.orbitRotation === void 0 && (e.orbitRotation = Uc),
      (e.orbitRotation += (e.orbitAnimationSpeed ?? qc / Bc) * i.factor));
  }
}
async function NS(t, e = !0) {
  await t.addParticleUpdater("orbit", (i) => Promise.resolve(new qS(i)), e);
}
class US extends _t {
  constructor() {
    (super(),
      (this.enabled = !1),
      (this.distance = 1),
      (this.duration = 1),
      (this.factor = 1),
      (this.speed = 1));
  }
  load(e) {
    (super.load(e),
      e &&
        (e.enabled !== void 0 && (this.enabled = e.enabled),
        e.distance !== void 0 && (this.distance = H(e.distance)),
        e.duration !== void 0 && (this.duration = H(e.duration)),
        e.factor !== void 0 && (this.factor = H(e.factor)),
        e.speed !== void 0 && (this.speed = H(e.speed))));
  }
}
const jS = 0,
  WS = 1,
  QS = 2,
  KS = 0;
class YS extends Ln {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  interact(e) {
    const i = this.container;
    if (!e.repulse) {
      const o = e.options.repulse;
      if (!o) return;
      e.repulse = {
        distance: S(o.distance) * i.retina.pixelRatio,
        speed: S(o.speed),
        factor: S(o.factor),
      };
    }
    const n = e.getPosition(),
      s = i.particles.quadTree.queryCircle(n, e.repulse.distance);
    for (const o of s) {
      if (e === o || o.destroyed) continue;
      const r = o.getPosition(),
        { dx: a, dy: l, distance: c } = Me(r, n),
        u = e.repulse.speed * e.repulse.factor;
      if (c > jS) {
        const h = at((WS - Math.pow(c / e.repulse.distance, QS)) * u, KS, u),
          d = ne.create((a / c) * h, (l / c) * h);
        o.position.addTo(d);
      } else {
        const h = ne.create(u, u);
        o.position.addTo(h);
      }
    }
  }
  isEnabled(e) {
    var i;
    return ((i = e.options.repulse) == null ? void 0 : i.enabled) ?? !1;
  }
  loadParticlesOptions(e, ...i) {
    e.repulse || (e.repulse = new US());
    for (const n of i) e.repulse.load(n == null ? void 0 : n.repulse);
  }
  reset() {}
}
async function ZS(t, e = !0) {
  await t.addInteractor(
    "particlesRepulse",
    (i) => Promise.resolve(new YS(i)),
    e,
  );
}
var xt;
(function (t) {
  ((t.line = "line"),
    (t.bezier = "bezier"),
    (t.quadratic = "quadratic"),
    (t.arc = "arc"),
    (t.ellipse = "ellipse"));
})(xt || (xt = {}));
function JS(t, e, i) {
  const s = i.segments[0],
    o = s.values[0];
  t.moveTo(o.x * e, o.y * e);
  for (const l of i.segments) {
    const c = l.values[0],
      u = 1,
      h = 2,
      d = 3;
    switch (l.type) {
      case xt.line:
        t.lineTo(c.x * e, c.y * e);
        break;
      case xt.bezier:
        t.bezierCurveTo(
          l.values[u].x * e,
          l.values[u].y * e,
          l.values[h].x * e,
          l.values[h].y * e,
          l.values[d].x * e,
          l.values[d].y * e,
        );
        break;
      case xt.quadratic:
        t.quadraticCurveTo(
          l.values[u].x * e,
          l.values[u].y * e,
          l.values[h].x * e,
          l.values[h].y * e,
        );
        break;
      case xt.arc:
        t.arc(
          c.x * e,
          c.y * e,
          l.values[u].x * e,
          l.values[h].x,
          l.values[h].y,
        );
        break;
      case xt.ellipse:
        t.ellipse(
          c.x * e,
          c.y * e,
          l.values[u].x * e,
          l.values[u].y * e,
          l.values[h].x,
          l.values[d].x,
          l.values[d].y,
        );
    }
  }
  if (!i.half) return;
  const r = 1,
    a = 0;
  for (let l = i.segments.length - r; l >= a; l--) {
    const c = i.segments[l],
      u = c.values[0],
      h = 1,
      d = 2;
    switch (c.type) {
      case xt.line:
        t.lineTo(u.x * -e, u.y * e);
        break;
      case xt.bezier:
        t.bezierCurveTo(
          -c.values[d].x * e,
          c.values[d].y * e,
          -c.values[h].x * e,
          c.values[h].y * e,
          u.x * e,
          u.y * e,
        );
        break;
      case xt.quadratic:
        t.quadraticCurveTo(
          -c.values[h].x * e,
          c.values[h].y * e,
          -c.values[d].x * e,
          c.values[d].y * e,
        );
        break;
      case xt.arc:
      case xt.ellipse:
    }
  }
}
class XS {
  constructor() {
    this.validTypes = ["path"];
  }
  draw(e) {
    const { context: i, particle: n, radius: s } = e;
    n.pathData && JS(i, s, n.pathData);
  }
  particleInit(e, i) {
    const n = i.shapeData;
    n && (i.pathData = fe({}, n));
  }
}
async function e2(t, e = !0) {
  await t.addShape(new XS(), e);
}
class vt {
  constructor(e, i, n) {
    ((this.x = e), (this.y = i), (this.z = n));
  }
  dot2(e, i) {
    return this.x * e + this.y * i;
  }
  dot3(e, i, n) {
    return this.dot2(e, i) + this.z * n;
  }
}
class t2 {
  constructor() {
    ((this._grad3 = [
      new vt(1, 1, 0),
      new vt(-1, 1, 0),
      new vt(1, -1, 0),
      new vt(-1, -1, 0),
      new vt(1, 0, 1),
      new vt(-1, 0, 1),
      new vt(1, 0, -1),
      new vt(-1, 0, -1),
      new vt(0, 1, 1),
      new vt(0, -1, 1),
      new vt(0, 1, -1),
      new vt(0, -1, -1),
    ]),
      (this._p = [
        151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
        140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
        120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57,
        177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74,
        165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
        60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
        65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
        200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3,
        64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85,
        212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170,
        213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43,
        172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185,
        112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191,
        179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31,
        181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150,
        254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,
        78, 66, 215, 61, 156, 180,
      ]),
      (this._gradP = new Array(512)),
      (this._perm = new Array(512)));
  }
  noise2d(e, i) {
    const { _gradP: n, _perm: s } = this;
    let o = Math.floor(e),
      r = Math.floor(i);
    ((e = e - o), (i = i - r), (o = o & 255), (r = r & 255));
    const a = n[o + s[r]].dot2(e, i),
      l = n[o + s[r + 1]].dot2(e, i - 1),
      c = n[o + 1 + s[r]].dot2(e - 1, i),
      u = n[o + 1 + s[r + 1]].dot2(e - 1, i - 1),
      h = this._fade(e);
    return this._lerp(this._lerp(a, c, h), this._lerp(l, u, h), this._fade(i));
  }
  noise3d(e, i, n) {
    const { _gradP: s, _perm: o } = this;
    let r = Math.floor(e),
      a = Math.floor(i),
      l = Math.floor(n);
    ((e = e - r),
      (i = i - a),
      (n = n - l),
      (r = r & 255),
      (a = a & 255),
      (l = l & 255));
    const c = s[r + o[a + o[l]]].dot3(e, i, n),
      u = s[r + o[a + o[l + 1]]].dot3(e, i, n - 1),
      h = s[r + o[a + 1 + o[l]]].dot3(e, i - 1, n),
      d = s[r + o[a + 1 + o[l + 1]]].dot3(e, i - 1, n - 1),
      f = s[r + 1 + o[a + o[l]]].dot3(e - 1, i, n),
      g = s[r + 1 + o[a + o[l + 1]]].dot3(e - 1, i, n - 1),
      p = s[r + 1 + o[a + 1 + o[l]]].dot3(e - 1, i - 1, n),
      y = s[r + 1 + o[a + 1 + o[l + 1]]].dot3(e - 1, i - 1, n - 1),
      w = this._fade(e),
      x = this._fade(i),
      C = this._fade(n);
    return this._lerp(
      this._lerp(this._lerp(c, f, w), this._lerp(u, g, w), C),
      this._lerp(this._lerp(h, p, w), this._lerp(d, y, w), C),
      x,
    );
  }
  seed(e) {
    const { _grad3: i, _gradP: n, _perm: s, _p: o } = this;
    let r = e;
    (r > 0 && r < 1 && (r *= 65536),
      (r = Math.floor(r)),
      r < 256 && (r |= r << 8));
    for (let a = 0; a < 256; a++) {
      const l = a & 1 ? o[a] ^ (r & 255) : o[a] ^ ((r >> 8) & 255);
      ((s[a] = s[a + 256] = l), (n[a] = n[a + 256] = i[l % 12]));
    }
  }
  _fade(e) {
    return e * e * e * (e * (e * 6 - 15) + 10);
  }
  _lerp(e, i, n) {
    return (1 - n) * e + n * i;
  }
}
const i2 = 2,
  n2 = Math.PI * i2,
  Gi = {
    draw: !1,
    size: 20,
    increment: 0.004,
    columns: 0,
    rows: 0,
    width: 0,
    height: 0,
    factor: { angle: 0.02, length: 0.01 },
    offset: { x: 4e4, y: 4e4 },
  };
class s2 {
  constructor() {
    ((this._calculateField = () => {
      const { field: e, noiseGen: i, options: n } = this,
        s = n.factor.length,
        o = n.factor.angle;
      for (let r = 0; r < n.columns; r++) {
        const a = e[r];
        for (let l = 0; l < n.rows; l++) {
          const c = a[l];
          ((c.length = i.noise3d(
            r * s + n.offset.x,
            l * s + n.offset.y,
            this.noiseZ,
          )),
            (c.angle = i.noise3d(r * o, l * o, this.noiseZ) * n2));
        }
      }
    }),
      (this._drawField = (e) => {
        const { field: i, options: n } = this;
        for (let s = 0; s < n.columns; s++) {
          const o = i[s];
          for (let r = 0; r < n.rows; r++) {
            const a = o[r],
              { angle: l, length: c } = a;
            (e.setTransform(
              1,
              0,
              0,
              1,
              s * this.options.size,
              r * this.options.size,
            ),
              e.rotate(l),
              (e.strokeStyle = "white"),
              e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(0, this.options.size * c),
              e.stroke(),
              e.setTransform(1, 0, 0, 1, 0, 0));
          }
        }
      }),
      (this._initField = () => {
        const { columns: e, rows: i } = this.options;
        this.field = new Array(e);
        for (let n = 0; n < e; n++) {
          this.field[n] = new Array(i);
          for (let s = 0; s < i; s++) this.field[n][s] = ne.origin;
        }
      }),
      (this.noiseGen = new t2()),
      (this.field = []),
      (this.noiseZ = 0),
      (this.options = fe({}, Gi)));
  }
  generate(e) {
    var r;
    const i = e.getPosition(),
      { size: n } = this.options,
      s = {
        x: Math.max(Math.floor(i.x / n), 0),
        y: Math.max(Math.floor(i.y / n), 0),
      },
      { field: o } = this;
    return (r = o == null ? void 0 : o[s.x]) != null && r[s.y]
      ? o[s.x][s.y].copy()
      : ne.origin;
  }
  init(e) {
    ((this.container = e), this._setup());
  }
  reset() {}
  update() {
    this.container &&
      (this._calculateField(),
      (this.noiseZ += this.options.increment),
      this.options.draw &&
        this.container.canvas.draw((e) => this._drawField(e)));
  }
  _resetField() {
    const e = this.container;
    if (!e) return;
    const i = e.actualOptions.particles.move.path.options,
      { options: n } = this;
    ((n.size = i.size > 0 ? i.size : Gi.size),
      (n.increment = i.increment > 0 ? i.increment : Gi.increment),
      (n.draw = !!i.draw));
    const s = i.offset;
    ((n.offset.x = (s == null ? void 0 : s.x) ?? Gi.offset.x),
      (n.offset.y = (s == null ? void 0 : s.y) ?? Gi.offset.y));
    const o = i.factor;
    ((n.factor.angle = (o == null ? void 0 : o.angle) ?? Gi.factor.angle),
      (n.factor.length = (o == null ? void 0 : o.length) ?? Gi.factor.length),
      (n.width = e.canvas.size.width),
      (n.height = e.canvas.size.height),
      (this.options.seed = i.seed),
      this.noiseGen.seed(this.options.seed ?? D()),
      (n.columns = Math.floor(this.options.width / this.options.size) + 1),
      (n.rows = Math.floor(this.options.height / this.options.size) + 1),
      this._initField());
  }
  _setup() {
    ((this.noiseZ = 0),
      this._resetField(),
      window.addEventListener("resize", () => this._resetField()));
  }
}
const o2 = "perlinNoise";
async function r2(t, e = !0) {
  await t.addPathGenerator(o2, new s2(), e);
}
class a2 {
  constructor() {
    ((this.enable = !1),
      (this.dimensions = 2),
      (this.radius = 0),
      (this.retries = 30),
      (this.steps = 0));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      e.dimensions !== void 0 && (this.dimensions = e.dimensions),
      e.radius !== void 0 && (this.radius = e.radius),
      e.retries !== void 0 && (this.retries = e.retries));
  }
}
const Yh = 2,
  l2 = Math.PI * Yh;
class c2 {
  constructor(e, i, n, s, o) {
    ((this.size = { ...e }),
      (this.radius = i),
      (this.retries = n),
      (this.dimensions = s),
      (this.cellSize = Math.floor(this.radius / Math.sqrt(this.dimensions))),
      (this.cols = Math.floor(this.size.width / this.cellSize)),
      (this.rows = Math.floor(this.size.height / this.cellSize)),
      (this.points = []),
      (this.active = []),
      (this.grid = []),
      (this.firstPoint = o ? { ...o } : void 0),
      this.reset());
  }
  addPoint(e) {
    const i = {
        position: { ...e },
        gridPosition: {
          x: Math.floor(e.x / this.cellSize),
          y: Math.floor(e.y / this.cellSize),
        },
      },
      n = this.points.length;
    (this.points.push(i),
      (this.grid[i.gridPosition.y][i.gridPosition.x] = n),
      this.active.push(n));
  }
  getRandom(e, i) {
    return Math.floor(D() * (i - e)) + e;
  }
  initialiseGrid() {
    for (let e = 0; e <= this.rows; e++) {
      this.grid[e] = [];
      for (let i = 0; i <= this.cols; i++) this.grid[e][i] = -1;
    }
  }
  reset() {
    ((this.points = []),
      (this.active = []),
      (this.grid = []),
      this.initialiseGrid(),
      this.firstPoint
        ? this.addPoint(this.firstPoint)
        : this.addPoint({
            x: this.getRandom(0, this.size.width),
            y: this.getRandom(0, this.size.height),
          }));
  }
  async run() {
    this.reset();
    const e = 0,
      i = 1;
    for (; this.active.length > e; ) await this.steps(i);
  }
  async steps(e) {
    for (let n = 0; n < e; n++) this.active.length <= 0 || (await this._step());
  }
  _getNewPoint(e, i) {
    const r = i * (l2 / this.retries),
      a = this.getRandom(this.radius, this.radius * Yh),
      l = { x: Math.cos(r) * a, y: Math.sin(r) * a },
      c = {
        x: Math.floor(e.position.x + l.x),
        y: Math.floor(e.position.y + l.y),
      },
      u = {
        x: Math.floor(c.x / this.cellSize),
        y: Math.floor(c.y / this.cellSize),
      };
    if (c.x > 0 && c.x < this.size.width && c.y > 0 && c.y < this.size.height)
      if (this.grid[u.y][u.x] < 0)
        for (let h = -1; h <= 1; h++)
          for (let d = -1; d <= 1; d++) {
            const f = { x: u.x + d, y: u.y + h };
            if (
              f.x >= 0 &&
              f.y >= 0 &&
              f.x < this.cols &&
              f.y < this.rows &&
              (f.x !== u.x || f.y !== u.y) &&
              this.grid[f.y][f.x] >= 0
            ) {
              const g = this.grid[f.y][f.x],
                p = this.points[g];
              if (Ne(c, p.position) < this.radius) return;
            }
          }
      else return;
    else return;
    return c;
  }
  async _step() {
    const i = this.getRandom(0, this.active.length);
    return new Promise((n) => {
      let s = !1;
      for (let o = 0; o < this.retries; o++) {
        const r = this._getNewPoint(this.points[this.active[i]], o);
        if (r) {
          ((s = !0), this.addPoint(r));
          break;
        }
      }
      (s || this.active.splice(i, 1), n());
    });
  }
}
class u2 {
  constructor(e, i) {
    ((this._container = e), (this._engine = i), (this._currentIndex = 0));
  }
  async init() {
    await this._initData();
  }
  particlePosition(e) {
    var s, o;
    const i = this._container,
      n = i.actualOptions.poisson;
    if (
      !(
        !this.poissonDisc ||
        !((n == null ? void 0 : n.enable) ?? !1) ||
        this._currentIndex >= this.poissonDisc.points.length
      )
    )
      return (
        e ??
        ((o =
          (s = this.poissonDisc) == null
            ? void 0
            : s.points[this._currentIndex++]) == null
          ? void 0
          : o.position)
      );
  }
  resize() {
    const e = this._container,
      i = e.actualOptions.poisson;
    if (!((i == null ? void 0 : i.enable) ?? !1)) return;
    this.redrawTimeout && clearTimeout(this.redrawTimeout);
    const n = 250;
    this.redrawTimeout = window.setTimeout(() => {
      (async () => (await this._initData(), await e.particles.redraw()))();
    }, n);
  }
  stop() {
    delete this.poissonDisc;
  }
  async _initData() {
    const e = this._container,
      i = e.actualOptions.poisson,
      n = e.actualOptions.particles,
      s = e.canvas.size,
      o = e.retina.pixelRatio;
    if (!(i != null && i.enable)) return;
    ((this._currentIndex = 0),
      (this.poissonDisc = new c2(
        s,
        i.radius
          ? i.radius * o
          : Math.max(
              ot(n.size.value) * o,
              Math.sqrt((s.width * s.height) / n.number.value),
            ),
        i.retries,
        i.dimensions,
      )),
      i.steps > 0
        ? await this.poissonDisc.steps(i.steps)
        : await this.poissonDisc.run());
  }
}
class h2 {
  constructor(e) {
    ((this.id = "poisson"), (this._engine = e));
  }
  getPlugin(e) {
    return Promise.resolve(new u2(e, this._engine));
  }
  loadOptions(e, i) {
    if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
    let n = e.poisson;
    ((n == null ? void 0 : n.load) === void 0 && (e.poisson = n = new a2()),
      n.load(i == null ? void 0 : i.poisson));
  }
  needsPlugin(e) {
    var i;
    return (
      ((i = e == null ? void 0 : e.poisson) == null ? void 0 : i.enable) ?? !1
    );
  }
}
async function d2(t, e = !0) {
  await t.addPlugin(new h2(t), e);
}
(function () {
  try {
    if (typeof window > "u") return;
    ("SVGPathSeg" in window ||
      ((window.SVGPathSeg = function (t, e, i) {
        ((this.pathSegType = t),
          (this.pathSegTypeAsLetter = e),
          (this._owningPathSegList = i));
      }),
      (window.SVGPathSeg.prototype.classname = "SVGPathSeg"),
      (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
      (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
      (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
      (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
      (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
      (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
      (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
      (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
      (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
      (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
      (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
      (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
      (window.SVGPathSeg.prototype._segmentChanged = function () {
        this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
      }),
      (window.SVGPathSegClosePath = function (t) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CLOSEPATH,
          "z",
          t,
        );
      }),
      (window.SVGPathSegClosePath.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegClosePath.prototype.toString = function () {
        return "[object SVGPathSegClosePath]";
      }),
      (window.SVGPathSegClosePath.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter;
      }),
      (window.SVGPathSegClosePath.prototype.clone = function () {
        return new window.SVGPathSegClosePath(void 0);
      }),
      (window.SVGPathSegMovetoAbs = function (t, e, i) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_MOVETO_ABS,
          "M",
          t,
        ),
          (this._x = e),
          (this._y = i));
      }),
      (window.SVGPathSegMovetoAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegMovetoAbs.prototype.toString = function () {
        return "[object SVGPathSegMovetoAbs]";
      }),
      (window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegMovetoAbs.prototype.clone = function () {
        return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegMovetoRel = function (t, e, i) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_MOVETO_REL,
          "m",
          t,
        ),
          (this._x = e),
          (this._y = i));
      }),
      (window.SVGPathSegMovetoRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegMovetoRel.prototype.toString = function () {
        return "[object SVGPathSegMovetoRel]";
      }),
      (window.SVGPathSegMovetoRel.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegMovetoRel.prototype.clone = function () {
        return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoAbs = function (t, e, i) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_ABS,
          "L",
          t,
        ),
          (this._x = e),
          (this._y = i));
      }),
      (window.SVGPathSegLinetoAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoAbs]";
      }),
      (window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegLinetoAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoRel = function (t, e, i) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_REL,
          "l",
          t,
        ),
          (this._x = e),
          (this._y = i));
      }),
      (window.SVGPathSegLinetoRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoRel]";
      }),
      (window.SVGPathSegLinetoRel.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegLinetoRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoCubicAbs = function (t, e, i, n, s, o, r) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
          "C",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._x1 = n),
          (this._y1 = s),
          (this._x2 = o),
          (this._y2 = r));
      }),
      (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicAbs]";
      }),
      (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter}  ${this._x1} ${this._y1} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicAbs(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
        get: function () {
          return this._x1;
        },
        set: function (t) {
          ((this._x1 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
        get: function () {
          return this._y1;
        },
        set: function (t) {
          ((this._y1 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
        get: function () {
          return this._x2;
        },
        set: function (t) {
          ((this._x2 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
        get: function () {
          return this._y2;
        },
        set: function (t) {
          ((this._y2 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoCubicRel = function (t, e, i, n, s, o, r) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
          "c",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._x1 = n),
          (this._y1 = s),
          (this._x2 = o),
          (this._y2 = r));
      }),
      (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicRel]";
      }),
      (window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._x1} ${this._y1} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicRel(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
        get: function () {
          return this._x1;
        },
        set: function (t) {
          ((this._x1 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
        get: function () {
          return this._y1;
        },
        set: function (t) {
          ((this._y1 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
        get: function () {
          return this._x2;
        },
        set: function (t) {
          ((this._x2 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
        get: function () {
          return this._y2;
        },
        set: function (t) {
          ((this._y2 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoQuadraticAbs = function (t, e, i, n, s) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,
          "Q",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._x1 = n),
          (this._y1 = s));
      }),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticAbs]";
      }),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x1} ${this._y1} ${this._x} ${this._y}`;
        }),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticAbs(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            ((this._y = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "x1",
        {
          get: function () {
            return this._x1;
          },
          set: function (t) {
            ((this._x1 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "y1",
        {
          get: function () {
            return this._y1;
          },
          set: function (t) {
            ((this._y1 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoQuadraticRel = function (t, e, i, n, s) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,
          "q",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._x1 = n),
          (this._y1 = s));
      }),
      (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticRel]";
      }),
      (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x1} ${this._y1} ${this._x} ${this._y}`;
        }),
      (window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticRel(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            ((this._y = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "x1",
        {
          get: function () {
            return this._x1;
          },
          set: function (t) {
            ((this._x1 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "y1",
        {
          get: function () {
            return this._y1;
          },
          set: function (t) {
            ((this._y1 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegArcAbs = function (t, e, i, n, s, o, r, a) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_ARC_ABS,
          "A",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._r1 = n),
          (this._r2 = s),
          (this._angle = o),
          (this._largeArcFlag = r),
          (this._sweepFlag = a));
      }),
      (window.SVGPathSegArcAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegArcAbs.prototype.toString = function () {
        return "[object SVGPathSegArcAbs]";
      }),
      (window.SVGPathSegArcAbs.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._r1} ${this._r2} ${this._angle} ${this._largeArcFlag ? "1" : "0"} ${this._sweepFlag ? "1" : "0"} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegArcAbs.prototype.clone = function () {
        return new window.SVGPathSegArcAbs(
          void 0,
          this._x,
          this._y,
          this._r1,
          this._r2,
          this._angle,
          this._largeArcFlag,
          this._sweepFlag,
        );
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
        get: function () {
          return this._r1;
        },
        set: function (t) {
          ((this._r1 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
        get: function () {
          return this._r2;
        },
        set: function (t) {
          ((this._r2 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
        get: function () {
          return this._angle;
        },
        set: function (t) {
          ((this._angle = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
        get: function () {
          return this._largeArcFlag;
        },
        set: function (t) {
          ((this._largeArcFlag = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
        get: function () {
          return this._sweepFlag;
        },
        set: function (t) {
          ((this._sweepFlag = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegArcRel = function (t, e, i, n, s, o, r, a) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_ARC_REL,
          "a",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._r1 = n),
          (this._r2 = s),
          (this._angle = o),
          (this._largeArcFlag = r),
          (this._sweepFlag = a));
      }),
      (window.SVGPathSegArcRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegArcRel.prototype.toString = function () {
        return "[object SVGPathSegArcRel]";
      }),
      (window.SVGPathSegArcRel.prototype._asPathString = function () {
        return `${this.pathSegTypeAsLetter} ${this._r1} ${this._r2} ${this._angle} ${this._largeArcFlag ? "1" : "0"} ${this._sweepFlag ? "1" : "0"} ${this._x} ${this._y}`;
      }),
      (window.SVGPathSegArcRel.prototype.clone = function () {
        return new window.SVGPathSegArcRel(
          void 0,
          this._x,
          this._y,
          this._r1,
          this._r2,
          this._angle,
          this._largeArcFlag,
          this._sweepFlag,
        );
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          ((this._x = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
        get: function () {
          return this._r1;
        },
        set: function (t) {
          ((this._r1 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
        get: function () {
          return this._r2;
        },
        set: function (t) {
          ((this._r2 = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
        get: function () {
          return this._angle;
        },
        set: function (t) {
          ((this._angle = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
        get: function () {
          return this._largeArcFlag;
        },
        set: function (t) {
          ((this._largeArcFlag = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
        get: function () {
          return this._sweepFlag;
        },
        set: function (t) {
          ((this._sweepFlag = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
          "H",
          t,
        ),
          (this._x = e));
      }),
      (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoHorizontalAbs]";
      }),
      (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x}`;
        }),
      (window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
      }),
      Object.defineProperty(
        window.SVGPathSegLinetoHorizontalAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegLinetoHorizontalRel = function (t, e) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,
          "h",
          t,
        ),
          (this._x = e));
      }),
      (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoHorizontalRel]";
      }),
      (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x}`;
        }),
      (window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
      }),
      Object.defineProperty(
        window.SVGPathSegLinetoHorizontalRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegLinetoVerticalAbs = function (t, e) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,
          "V",
          t,
        ),
          (this._y = e));
      }),
      (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoVerticalAbs]";
      }),
      (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._y}`;
        }),
      (window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoVerticalRel = function (t, e) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,
          "v",
          t,
        ),
          (this._y = e));
      }),
      (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoVerticalRel]";
      }),
      (window.SVGPathSegLinetoVerticalRel.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._y}`;
        }),
      (window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          ((this._y = t), this._segmentChanged());
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, n, s) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
          "S",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._x2 = n),
          (this._y2 = s));
      }),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicSmoothAbs]";
      }),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
        }),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicSmoothAbs(
          void 0,
          this._x,
          this._y,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            ((this._y = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "x2",
        {
          get: function () {
            return this._x2;
          },
          set: function (t) {
            ((this._x2 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "y2",
        {
          get: function () {
            return this._y2;
          },
          set: function (t) {
            ((this._y2 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, i, n, s) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
          "s",
          t,
        ),
          (this._x = e),
          (this._y = i),
          (this._x2 = n),
          (this._y2 = s));
      }),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicSmoothRel]";
      }),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x2} ${this._y2} ${this._x} ${this._y}`;
        }),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicSmoothRel(
          void 0,
          this._x,
          this._y,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            ((this._y = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "x2",
        {
          get: function () {
            return this._x2;
          },
          set: function (t) {
            ((this._x2 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "y2",
        {
          get: function () {
            return this._y2;
          },
          set: function (t) {
            ((this._y2 = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, i) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
          "T",
          t,
        ),
          (this._x = e),
          (this._y = i));
      }),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString =
        function () {
          return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone =
        function () {
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
            void 0,
            this._x,
            this._y,
          );
        }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            ((this._y = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, i) {
        (window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
          "t",
          t,
        ),
          (this._x = e),
          (this._y = i));
      }),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString =
        function () {
          return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
        function () {
          return `${this.pathSegTypeAsLetter} ${this._x} ${this._y}`;
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone =
        function () {
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(
            void 0,
            this._x,
            this._y,
          );
        }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            ((this._x = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            ((this._y = t), this._segmentChanged());
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
        return new window.SVGPathSegClosePath(void 0);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (
        t,
        e,
      ) {
        return new window.SVGPathSegMovetoAbs(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (
        t,
        e,
      ) {
        return new window.SVGPathSegMovetoRel(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (
        t,
        e,
      ) {
        return new window.SVGPathSegLinetoAbs(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (
        t,
        e,
      ) {
        return new window.SVGPathSegLinetoRel(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs =
        function (t, e, i, n, s, o) {
          return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, i, n, s, o);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel =
        function (t, e, i, n, s, o) {
          return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, i, n, s, o);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs =
        function (t, e, i, n) {
          return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, i, n);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
        function (t, e, i, n) {
          return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, i, n);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (
        t,
        e,
        i,
        n,
        s,
        o,
        r,
      ) {
        return new window.SVGPathSegArcAbs(void 0, t, e, i, n, s, o, r);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegArcRel = function (
        t,
        e,
        i,
        n,
        s,
        o,
        r,
      ) {
        return new window.SVGPathSegArcRel(void 0, t, e, i, n, s, o, r);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs =
        function (t) {
          return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
        function (t) {
          return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs =
        function (t) {
          return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel =
        function (t) {
          return new window.SVGPathSegLinetoVerticalRel(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs =
        function (t, e, i, n) {
          return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, i, n);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
        function (t, e, i, n) {
          return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, i, n);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs =
        function (t, e) {
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel =
        function (t, e) {
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e);
        }),
      "getPathSegAtLength" in window.SVGPathElement.prototype ||
        (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
          if (t === void 0 || !isFinite(t)) throw "Invalid arguments.";
          const e = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          e.setAttribute("d", this.getAttribute("d"));
          let i = e.pathSegList.numberOfItems - 1;
          if (i <= 0) return 0;
          do {
            if ((e.pathSegList.removeItem(i), t > e.getTotalLength())) break;
            i--;
          } while (i > 0);
          return i;
        })),
      (!("SVGPathSegList" in window) ||
        !("appendItem" in window.SVGPathSegList.prototype)) &&
        ((window.SVGPathSegList = function (t) {
          ((this._pathElement = t),
            (this._list = this._parsePath(this._pathElement.getAttribute("d"))),
            (this._mutationObserverConfig = {
              attributes: !0,
              attributeFilter: ["d"],
            }),
            (this._pathElementMutationObserver = new MutationObserver(
              this._updateListFromPathMutations.bind(this),
            )),
            this._pathElementMutationObserver.observe(
              this._pathElement,
              this._mutationObserverConfig,
            ));
        }),
        (window.SVGPathSegList.prototype.classname = "SVGPathSegList"),
        Object.defineProperty(
          window.SVGPathSegList.prototype,
          "numberOfItems",
          {
            get: function () {
              return (this._checkPathSynchronizedToList(), this._list.length);
            },
            enumerable: !0,
          },
        ),
        Object.defineProperty(window.SVGPathSegList.prototype, "length", {
          get: function () {
            return (this._checkPathSynchronizedToList(), this._list.length);
          },
          enumerable: !0,
        }),
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
          get: function () {
            return (
              this._pathSegList ||
                (this._pathSegList = new window.SVGPathSegList(this)),
              this._pathSegList
            );
          },
          enumerable: !0,
        }),
        Object.defineProperty(
          window.SVGPathElement.prototype,
          "normalizedPathSegList",
          {
            get: function () {
              return this.pathSegList;
            },
            enumerable: !0,
          },
        ),
        Object.defineProperty(
          window.SVGPathElement.prototype,
          "animatedPathSegList",
          {
            get: function () {
              return this.pathSegList;
            },
            enumerable: !0,
          },
        ),
        Object.defineProperty(
          window.SVGPathElement.prototype,
          "animatedNormalizedPathSegList",
          {
            get: function () {
              return this.pathSegList;
            },
            enumerable: !0,
          },
        ),
        (window.SVGPathSegList.prototype._checkPathSynchronizedToList =
          function () {
            this._updateListFromPathMutations(
              this._pathElementMutationObserver.takeRecords(),
            );
          }),
        (window.SVGPathSegList.prototype._updateListFromPathMutations =
          function (t) {
            if (!this._pathElement) return;
            let e = !1;
            (t.forEach(function (i) {
              i.attributeName == "d" && (e = !0);
            }),
              e &&
                (this._list = this._parsePath(
                  this._pathElement.getAttribute("d"),
                )));
          }),
        (window.SVGPathSegList.prototype._writeListToPath = function () {
          (this._pathElementMutationObserver.disconnect(),
            this._pathElement.setAttribute(
              "d",
              window.SVGPathSegList._pathSegArrayAsString(this._list),
            ),
            this._pathElementMutationObserver.observe(
              this._pathElement,
              this._mutationObserverConfig,
            ));
        }),
        (window.SVGPathSegList.prototype.segmentChanged = function () {
          this._writeListToPath();
        }),
        (window.SVGPathSegList.prototype.clear = function () {
          (this._checkPathSynchronizedToList(),
            this._list.forEach(function (t) {
              t._owningPathSegList = null;
            }),
            (this._list = []),
            this._writeListToPath());
        }),
        (window.SVGPathSegList.prototype.initialize = function (t) {
          return (
            this._checkPathSynchronizedToList(),
            (this._list = [t]),
            (t._owningPathSegList = this),
            this._writeListToPath(),
            t
          );
        }),
        (window.SVGPathSegList.prototype._checkValidIndex = function (t) {
          if (isNaN(t) || t < 0 || t >= this.numberOfItems)
            throw "INDEX_SIZE_ERR";
        }),
        (window.SVGPathSegList.prototype.getItem = function (t) {
          return (
            this._checkPathSynchronizedToList(),
            this._checkValidIndex(t),
            this._list[t]
          );
        }),
        (window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
          return (
            this._checkPathSynchronizedToList(),
            e > this.numberOfItems && (e = this.numberOfItems),
            t._owningPathSegList && (t = t.clone()),
            this._list.splice(e, 0, t),
            (t._owningPathSegList = this),
            this._writeListToPath(),
            t
          );
        }),
        (window.SVGPathSegList.prototype.replaceItem = function (t, e) {
          return (
            this._checkPathSynchronizedToList(),
            t._owningPathSegList && (t = t.clone()),
            this._checkValidIndex(e),
            (this._list[e] = t),
            (t._owningPathSegList = this),
            this._writeListToPath(),
            t
          );
        }),
        (window.SVGPathSegList.prototype.removeItem = function (t) {
          (this._checkPathSynchronizedToList(), this._checkValidIndex(t));
          const e = this._list[t];
          return (this._list.splice(t, 1), this._writeListToPath(), e);
        }),
        (window.SVGPathSegList.prototype.appendItem = function (t) {
          return (
            this._checkPathSynchronizedToList(),
            t._owningPathSegList && (t = t.clone()),
            this._list.push(t),
            (t._owningPathSegList = this),
            this._writeListToPath(),
            t
          );
        }),
        (window.SVGPathSegList._pathSegArrayAsString = function (t) {
          let e = "",
            i = !0;
          return (
            t.forEach(function (n) {
              i
                ? ((i = !1), (e += n._asPathString()))
                : (e += ` ${n._asPathString()}`);
            }),
            e
          );
        }),
        (window.SVGPathSegList.prototype._parsePath = function (t) {
          if (!t || !t.length) return [];
          const e = this,
            i = function () {
              this.pathSegList = [];
            };
          i.prototype.appendSegment = function (r) {
            this.pathSegList.push(r);
          };
          const n = function (r) {
            ((this._string = r),
              (this._currentIndex = 0),
              (this._endIndex = this._string.length),
              (this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN),
              this._skipOptionalSpaces());
          };
          ((n.prototype._isCurrentSpace = function () {
            const r = this._string[this._currentIndex];
            return (
              r <= " " &&
              (r == " " ||
                r ==
                  `
` ||
                r == "	" ||
                r == "\r" ||
                r == "\f")
            );
          }),
            (n.prototype._skipOptionalSpaces = function () {
              for (
                ;
                this._currentIndex < this._endIndex && this._isCurrentSpace();
              )
                this._currentIndex++;
              return this._currentIndex < this._endIndex;
            }),
            (n.prototype._skipOptionalSpacesOrDelimiter = function () {
              return this._currentIndex < this._endIndex &&
                !this._isCurrentSpace() &&
                this._string.charAt(this._currentIndex) != ","
                ? !1
                : (this._skipOptionalSpaces() &&
                    this._currentIndex < this._endIndex &&
                    this._string.charAt(this._currentIndex) == "," &&
                    (this._currentIndex++, this._skipOptionalSpaces()),
                  this._currentIndex < this._endIndex);
            }),
            (n.prototype.hasMoreData = function () {
              return this._currentIndex < this._endIndex;
            }),
            (n.prototype.peekSegmentType = function () {
              const r = this._string[this._currentIndex];
              return this._pathSegTypeFromChar(r);
            }),
            (n.prototype._pathSegTypeFromChar = function (r) {
              switch (r) {
                case "Z":
                case "z":
                  return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                  return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                  return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                  return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                  return window.SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                  return window.SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                  return window.SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                  return window.SVGPathSeg.PATHSEG_UNKNOWN;
              }
            }),
            (n.prototype._nextCommandHelper = function (r, a) {
              return (r == "+" ||
                r == "-" ||
                r == "." ||
                (r >= "0" && r <= "9")) &&
                a != window.SVGPathSeg.PATHSEG_CLOSEPATH
                ? a == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                  ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                  : a == window.SVGPathSeg.PATHSEG_MOVETO_REL
                    ? window.SVGPathSeg.PATHSEG_LINETO_REL
                    : a
                : window.SVGPathSeg.PATHSEG_UNKNOWN;
            }),
            (n.prototype.initialCommandIsMoveTo = function () {
              if (!this.hasMoreData()) return !0;
              const r = this.peekSegmentType();
              return (
                r == window.SVGPathSeg.PATHSEG_MOVETO_ABS ||
                r == window.SVGPathSeg.PATHSEG_MOVETO_REL
              );
            }),
            (n.prototype._parseNumber = function () {
              let r = 0,
                a = 0,
                l = 1,
                c = 0,
                u = 1,
                h = 1;
              const d = this._currentIndex;
              if (
                (this._skipOptionalSpaces(),
                this._currentIndex < this._endIndex &&
                this._string.charAt(this._currentIndex) == "+"
                  ? this._currentIndex++
                  : this._currentIndex < this._endIndex &&
                    this._string.charAt(this._currentIndex) == "-" &&
                    (this._currentIndex++, (u = -1)),
                this._currentIndex == this._endIndex ||
                  ((this._string.charAt(this._currentIndex) < "0" ||
                    this._string.charAt(this._currentIndex) > "9") &&
                    this._string.charAt(this._currentIndex) != "."))
              )
                return;
              const f = this._currentIndex;
              for (
                ;
                this._currentIndex < this._endIndex &&
                this._string.charAt(this._currentIndex) >= "0" &&
                this._string.charAt(this._currentIndex) <= "9";
              )
                this._currentIndex++;
              if (this._currentIndex != f) {
                let p = this._currentIndex - 1,
                  y = 1;
                for (; p >= f; )
                  ((a += y * (this._string.charAt(p--) - "0")), (y *= 10));
              }
              if (
                this._currentIndex < this._endIndex &&
                this._string.charAt(this._currentIndex) == "."
              ) {
                if (
                  (this._currentIndex++,
                  this._currentIndex >= this._endIndex ||
                    this._string.charAt(this._currentIndex) < "0" ||
                    this._string.charAt(this._currentIndex) > "9")
                )
                  return;
                for (
                  ;
                  this._currentIndex < this._endIndex &&
                  this._string.charAt(this._currentIndex) >= "0" &&
                  this._string.charAt(this._currentIndex) <= "9";
                )
                  ((l *= 10),
                    (c += (this._string.charAt(this._currentIndex) - "0") / l),
                    (this._currentIndex += 1));
              }
              if (
                this._currentIndex != d &&
                this._currentIndex + 1 < this._endIndex &&
                (this._string.charAt(this._currentIndex) == "e" ||
                  this._string.charAt(this._currentIndex) == "E") &&
                this._string.charAt(this._currentIndex + 1) != "x" &&
                this._string.charAt(this._currentIndex + 1) != "m"
              ) {
                if (
                  (this._currentIndex++,
                  this._string.charAt(this._currentIndex) == "+"
                    ? this._currentIndex++
                    : this._string.charAt(this._currentIndex) == "-" &&
                      (this._currentIndex++, (h = -1)),
                  this._currentIndex >= this._endIndex ||
                    this._string.charAt(this._currentIndex) < "0" ||
                    this._string.charAt(this._currentIndex) > "9")
                )
                  return;
                for (
                  ;
                  this._currentIndex < this._endIndex &&
                  this._string.charAt(this._currentIndex) >= "0" &&
                  this._string.charAt(this._currentIndex) <= "9";
                )
                  ((r *= 10),
                    (r += this._string.charAt(this._currentIndex) - "0"),
                    this._currentIndex++);
              }
              let g = a + c;
              if (
                ((g *= u),
                r && (g *= Math.pow(10, h * r)),
                d != this._currentIndex)
              )
                return (this._skipOptionalSpacesOrDelimiter(), g);
            }),
            (n.prototype._parseArcFlag = function () {
              if (this._currentIndex >= this._endIndex) return;
              let r = !1;
              const a = this._string.charAt(this._currentIndex++);
              if (a == "0") r = !1;
              else if (a == "1") r = !0;
              else return;
              return (this._skipOptionalSpacesOrDelimiter(), r);
            }),
            (n.prototype.parseSegment = function () {
              const r = this._string[this._currentIndex];
              let a = this._pathSegTypeFromChar(r);
              if (a == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                if (
                  this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN ||
                  ((a = this._nextCommandHelper(r, this._previousCommand)),
                  a == window.SVGPathSeg.PATHSEG_UNKNOWN)
                )
                  return null;
              } else this._currentIndex++;
              this._previousCommand = a;
              let l;
              switch (a) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                  return new window.SVGPathSegMovetoRel(
                    e,
                    this._parseNumber(),
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                  return new window.SVGPathSegMovetoAbs(
                    e,
                    this._parseNumber(),
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                  return new window.SVGPathSegLinetoRel(
                    e,
                    this._parseNumber(),
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                  return new window.SVGPathSegLinetoAbs(
                    e,
                    this._parseNumber(),
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                  return new window.SVGPathSegLinetoHorizontalRel(
                    e,
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                  return new window.SVGPathSegLinetoHorizontalAbs(
                    e,
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                  return new window.SVGPathSegLinetoVerticalRel(
                    e,
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                  return new window.SVGPathSegLinetoVerticalAbs(
                    e,
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                  return (
                    this._skipOptionalSpaces(),
                    new window.SVGPathSegClosePath(e)
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                  return (
                    (l = {
                      x1: this._parseNumber(),
                      y1: this._parseNumber(),
                      x2: this._parseNumber(),
                      y2: this._parseNumber(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegCurvetoCubicRel(
                      e,
                      l.x,
                      l.y,
                      l.x1,
                      l.y1,
                      l.x2,
                      l.y2,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                  return (
                    (l = {
                      x1: this._parseNumber(),
                      y1: this._parseNumber(),
                      x2: this._parseNumber(),
                      y2: this._parseNumber(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegCurvetoCubicAbs(
                      e,
                      l.x,
                      l.y,
                      l.x1,
                      l.y1,
                      l.x2,
                      l.y2,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                  return (
                    (l = {
                      x2: this._parseNumber(),
                      y2: this._parseNumber(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegCurvetoCubicSmoothRel(
                      e,
                      l.x,
                      l.y,
                      l.x2,
                      l.y2,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                  return (
                    (l = {
                      x2: this._parseNumber(),
                      y2: this._parseNumber(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegCurvetoCubicSmoothAbs(
                      e,
                      l.x,
                      l.y,
                      l.x2,
                      l.y2,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                  return (
                    (l = {
                      x1: this._parseNumber(),
                      y1: this._parseNumber(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegCurvetoQuadraticRel(
                      e,
                      l.x,
                      l.y,
                      l.x1,
                      l.y1,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                  return (
                    (l = {
                      x1: this._parseNumber(),
                      y1: this._parseNumber(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegCurvetoQuadraticAbs(
                      e,
                      l.x,
                      l.y,
                      l.x1,
                      l.y1,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                  return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                    e,
                    this._parseNumber(),
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                  return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                    e,
                    this._parseNumber(),
                    this._parseNumber(),
                  );
                case window.SVGPathSeg.PATHSEG_ARC_REL:
                  return (
                    (l = {
                      x1: this._parseNumber(),
                      y1: this._parseNumber(),
                      arcAngle: this._parseNumber(),
                      arcLarge: this._parseArcFlag(),
                      arcSweep: this._parseArcFlag(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegArcRel(
                      e,
                      l.x,
                      l.y,
                      l.x1,
                      l.y1,
                      l.arcAngle,
                      l.arcLarge,
                      l.arcSweep,
                    )
                  );
                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                  return (
                    (l = {
                      x1: this._parseNumber(),
                      y1: this._parseNumber(),
                      arcAngle: this._parseNumber(),
                      arcLarge: this._parseArcFlag(),
                      arcSweep: this._parseArcFlag(),
                      x: this._parseNumber(),
                      y: this._parseNumber(),
                    }),
                    new window.SVGPathSegArcAbs(
                      e,
                      l.x,
                      l.y,
                      l.x1,
                      l.y1,
                      l.arcAngle,
                      l.arcLarge,
                      l.arcSweep,
                    )
                  );
                default:
                  throw "Unknown path seg type.";
              }
            }));
          const s = new i(),
            o = new n(t);
          if (!o.initialCommandIsMoveTo()) return [];
          for (; o.hasMoreData(); ) {
            const r = o.parseSegment();
            if (!r) return [];
            s.appendSegment(r);
          }
          return s.pathSegList;
        })));
  } catch (t) {
    console.warn(
      "An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/tsparticles/tsparticles",
      t,
    );
  }
})();
class f2 {
  constructor() {
    ((this.color = new he()), (this.width = 0.5), (this.opacity = 1));
  }
  load(e) {
    e &&
      ((this.color = he.create(this.color, e.color)),
      it(this.color.value) &&
        (this.opacity = cg(this.color.value) ?? this.opacity),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.width !== void 0 && (this.width = e.width));
  }
}
class p2 {
  constructor() {
    ((this.enable = !1), (this.stroke = new f2()));
  }
  load(e) {
    if (!e) return;
    e.enable !== void 0 && (this.enable = e.enable);
    const i = e.stroke;
    this.stroke.load(i);
  }
}
var Bt;
(function (t) {
  ((t.equidistant = "equidistant"),
    (t.onePerPoint = "one-per-point"),
    (t.perPoint = "per-point"),
    (t.randomLength = "random-length"),
    (t.randomPoint = "random-point"));
})(Bt || (Bt = {}));
class g2 {
  constructor() {
    this.arrangement = Bt.onePerPoint;
  }
  load(e) {
    e && e.arrangement !== void 0 && (this.arrangement = e.arrangement);
  }
}
class m2 {
  constructor() {
    ((this.path = []), (this.size = { height: 0, width: 0 }));
  }
  load(e) {
    e &&
      (e.path !== void 0 && (this.path = e.path),
      e.size !== void 0 &&
        (e.size.width !== void 0 && (this.size.width = e.size.width),
        e.size.height !== void 0 && (this.size.height = e.size.height)));
  }
}
var Kr;
(function (t) {
  ((t.path = "path"), (t.radius = "radius"));
})(Kr || (Kr = {}));
class _2 {
  constructor() {
    ((this.radius = 10), (this.type = Kr.path));
  }
  load(e) {
    e &&
      (e.radius !== void 0 && (this.radius = e.radius),
      e.type !== void 0 && (this.type = e.type));
  }
}
var He;
(function (t) {
  ((t.inline = "inline"),
    (t.inside = "inside"),
    (t.outside = "outside"),
    (t.none = "none"));
})(He || (He = {}));
class y2 {
  constructor() {
    ((this.draw = new p2()),
      (this.enable = !1),
      (this.inline = new g2()),
      (this.move = new _2()),
      (this.scale = 1),
      (this.type = He.none));
  }
  load(e) {
    e &&
      (this.draw.load(e.draw),
      this.inline.load(e.inline),
      this.move.load(e.move),
      e.scale !== void 0 && (this.scale = e.scale),
      e.type !== void 0 && (this.type = e.type),
      e.enable !== void 0
        ? (this.enable = e.enable)
        : (this.enable = this.type !== He.none),
      e.url !== void 0 && (this.url = e.url),
      e.data !== void 0 &&
        (it(e.data)
          ? (this.data = e.data)
          : ((this.data = new m2()), this.data.load(e.data))),
      e.position !== void 0 && (this.position = fe({}, e.position)));
  }
}
const jc = 2,
  Fs = { min: 0, max: 1 },
  b2 = 2;
function w2(t, e, i) {
  const n = Ue(i.color);
  if (!n) return;
  const s = 0,
    o = e[s];
  (t.beginPath(), t.moveTo(o.x, o.y));
  for (const r of e) t.lineTo(r.x, r.y);
  (t.closePath(), (t.strokeStyle = tt(n)), (t.lineWidth = i.width), t.stroke());
}
function v2(t, e, i, n) {
  const s = { a: 1, b: 0, c: 0, d: 1 };
  t.setTransform(s.a, s.b, s.c, s.d, n.x, n.y);
  const o = Ue(i.color);
  o &&
    ((t.strokeStyle = tt(o, i.opacity)),
    (t.lineWidth = i.width),
    t.stroke(e),
    t.resetTransform());
}
function x2(t, e, i) {
  const n = [];
  for (const o of t) {
    const r = o.element.pathSegList,
      a = (r == null ? void 0 : r.numberOfItems) ?? 0,
      l = { x: 0, y: 0 };
    for (let c = 0; c < a; c++) {
      const u = r == null ? void 0 : r.getItem(c),
        h = window.SVGPathSeg;
      switch (u == null ? void 0 : u.pathSegType) {
        case h.PATHSEG_MOVETO_ABS:
        case h.PATHSEG_LINETO_ABS:
        case h.PATHSEG_CURVETO_CUBIC_ABS:
        case h.PATHSEG_CURVETO_QUADRATIC_ABS:
        case h.PATHSEG_ARC_ABS:
        case h.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
        case h.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
          const d = u;
          ((l.x = d.x), (l.y = d.y));
          break;
        }
        case h.PATHSEG_LINETO_HORIZONTAL_ABS:
          l.x = u.x;
          break;
        case h.PATHSEG_LINETO_VERTICAL_ABS:
          l.y = u.y;
          break;
        case h.PATHSEG_LINETO_REL:
        case h.PATHSEG_MOVETO_REL:
        case h.PATHSEG_CURVETO_CUBIC_REL:
        case h.PATHSEG_CURVETO_QUADRATIC_REL:
        case h.PATHSEG_ARC_REL:
        case h.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
        case h.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
          const d = u;
          ((l.x += d.x), (l.y += d.y));
          break;
        }
        case h.PATHSEG_LINETO_HORIZONTAL_REL:
          l.x += u.x;
          break;
        case h.PATHSEG_LINETO_VERTICAL_REL:
          l.y += u.y;
          break;
        case h.PATHSEG_UNKNOWN:
        case h.PATHSEG_CLOSEPATH:
          continue;
      }
      n.push({ x: l.x * e + i.x, y: l.y * e + i.y });
    }
  }
  return n;
}
function S2(t, e, i) {
  const { dx: n, dy: s } = Me(i, t),
    { dx: o, dy: r } = Me(e, t),
    a = (n * o + s * r) / (o ** jc + r ** jc),
    l = {
      x: t.x + o * a,
      y: t.y + r * a,
      isOnSegment: a >= Fs.min && a <= Fs.max,
    };
  return (
    a < Fs.min
      ? ((l.x = t.x), (l.y = t.y))
      : a > Fs.max && ((l.x = e.x), (l.y = e.y)),
    l
  );
}
function P2(t, e, i) {
  const { dx: n, dy: s } = Me(t, e),
    o = Math.atan2(s, n),
    r = ne.create(Math.sin(o), -Math.cos(o)),
    a = b2 * (i.x * r.x + i.y * r.y);
  (r.multTo(a), i.subFrom(r));
}
const Hs = `${Fe} No polygon data loaded.`,
  C2 = `${Fe} No polygon found, you need to specify SVG url in config.`,
  un = { x: 0, y: 0 },
  Bs = 0.5,
  O2 = 2;
class T2 {
  constructor(e, i) {
    ((this._checkInsidePolygon = (n) => {
      const s = this._container,
        o = s.actualOptions.polygon;
      if (
        !(o != null && o.enable) ||
        o.type === He.none ||
        o.type === He.inline
      )
        return !0;
      if (!this.raw) throw new Error(C2);
      const r = s.canvas.size,
        a = (n == null ? void 0 : n.x) ?? D() * r.width,
        l = (n == null ? void 0 : n.y) ?? D() * r.height,
        c = 1;
      let u = !1;
      for (let h = 0, d = this.raw.length - c; h < this.raw.length; d = h++) {
        const f = this.raw[h],
          g = this.raw[d];
        f.y > l != g.y > l &&
          a < ((g.x - f.x) * (l - f.y)) / (g.y - f.y) + f.x &&
          (u = !u);
      }
      return o.type === He.inside ? u : o.type === He.outside ? !u : !1;
    }),
      (this._createPath2D = () => {
        var o, r;
        if (
          !(
            !this._container.actualOptions.polygon ||
            !((o = this.paths) != null && o.length)
          )
        )
          for (const a of this.paths) {
            const l = (r = a.element) == null ? void 0 : r.getAttribute("d");
            if (l) {
              const h = new Path2D(l),
                d = document
                  .createElementNS("http://www.w3.org/2000/svg", "svg")
                  .createSVGMatrix(),
                f = new Path2D(),
                g = d.scale(this._scale);
              f.addPath ? (f.addPath(h, g), (a.path2d = f)) : delete a.path2d;
            } else delete a.path2d;
            if (a.path2d ?? !this.raw) continue;
            a.path2d = new Path2D();
            const c = 0,
              u = this.raw[c];
            (a.path2d.moveTo(u.x, u.y),
              this.raw.forEach((h, d) => {
                var f;
                d > c && ((f = a.path2d) == null || f.lineTo(h.x, h.y));
              }),
              a.path2d.closePath());
          }
      }),
      (this._downloadSvgPath = async (n, s) => {
        const o = this._container.actualOptions.polygon;
        if (!o) return;
        const r = n ?? o.url,
          a = s ?? !1;
        if (!r || (this.paths !== void 0 && !a)) return this.raw;
        const l = await fetch(r);
        if (!l.ok)
          throw new Error(`${Fe} occurred during polygon mask download`);
        return this._parseSvgPath(await l.text(), s);
      }),
      (this._drawPoints = () => {
        if (this.raw)
          for (const n of this.raw)
            this._container.particles.addParticle({ x: n.x, y: n.y });
      }),
      (this._getEquidistantPointByIndex = (n) => {
        var f, g, p, y;
        const s = this._container,
          o = s.actualOptions;
        if (!o.polygon) return;
        if (
          !((f = this.raw) != null && f.length) ||
          !((g = this.paths) != null && g.length)
        )
          throw new Error(Hs);
        let a = 0,
          l;
        const c = 0,
          u = this.paths.reduce((w, x) => w + x.length, c),
          h = u / o.particles.number.value;
        for (const w of this.paths) {
          const x = h * n - a;
          if (x <= w.length) {
            l = w.element.getPointAtLength(x);
            break;
          } else a += w.length;
        }
        const d = this._scale;
        return {
          x:
            ((l == null ? void 0 : l.x) ?? un.x) * d +
            (((p = this.offset) == null ? void 0 : p.x) ?? un.x),
          y:
            ((l == null ? void 0 : l.y) ?? un.y) * d +
            (((y = this.offset) == null ? void 0 : y.y) ?? un.y),
        };
      }),
      (this._getPointByIndex = (n) => {
        var o;
        if (!((o = this.raw) != null && o.length)) throw new Error(Hs);
        const s = this.raw[n % this.raw.length];
        return { x: s.x, y: s.y };
      }),
      (this._getRandomPoint = () => {
        var s;
        if (!((s = this.raw) != null && s.length)) throw new Error(Hs);
        const n = Yt(this.raw);
        return { x: n.x, y: n.y };
      }),
      (this._getRandomPointByLength = () => {
        var u, h, d, f;
        if (!this._container.actualOptions.polygon) return;
        if (
          !((u = this.raw) != null && u.length) ||
          !((h = this.paths) != null && h.length)
        )
          throw new Error(Hs);
        const o = Yt(this.paths),
          r = 1,
          a = Math.floor(D() * o.length) + r,
          l = o.element.getPointAtLength(a),
          c = this._scale;
        return {
          x: l.x * c + (((d = this.offset) == null ? void 0 : d.x) ?? un.x),
          y: l.y * c + (((f = this.offset) == null ? void 0 : f.y) ?? un.y),
        };
      }),
      (this._initRawData = async (n) => {
        const s = this._container.actualOptions.polygon;
        if (s) {
          if (s.url) this.raw = await this._downloadSvgPath(s.url, n);
          else if (s.data) {
            const o = s.data;
            let r;
            if (it(o)) r = o;
            else {
              const a = (u) => `<path d="${u}" />`,
                l = Ge(o.path) ? o.path.map(a).join("") : a(o.path);
              r = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${o.size.width}" height="${o.size.height}">${l}</svg>`;
            }
            this.raw = this._parseSvgPath(r, n);
          }
          (this._createPath2D(),
            this._engine.dispatchEvent("polygonMaskLoaded", {
              container: this._container,
            }));
        }
      }),
      (this._parseSvgPath = (n, s) => {
        const o = s ?? !1;
        if (this.paths !== void 0 && !o) return this.raw;
        const r = this._container,
          a = r.actualOptions.polygon;
        if (!a) return;
        const l = new DOMParser(),
          c = l.parseFromString(n, "image/svg+xml"),
          u = 0,
          h = c.getElementsByTagName("svg")[u];
        let d = h.getElementsByTagName("path");
        (d.length || (d = c.getElementsByTagName("path")), (this.paths = []));
        for (let y = 0; y < d.length; y++) {
          const w = d.item(y);
          w && this.paths.push({ element: w, length: w.getTotalLength() });
        }
        const f = this._scale;
        ((this.dimension.width =
          parseFloat(h.getAttribute("width") ?? "0") * f),
          (this.dimension.height =
            parseFloat(h.getAttribute("height") ?? "0") * f));
        const g = a.position ?? { x: 50, y: 50 },
          p = r.canvas.size;
        return (
          (this.offset = {
            x: (p.width * g.x) / ae - this.dimension.width * Bs,
            y: (p.height * g.y) / ae - this.dimension.height * Bs,
          }),
          x2(this.paths, f, this.offset)
        );
      }),
      (this._polygonBounce = (n, s, o) => {
        const r = this._container.actualOptions.polygon;
        if (!this.raw || !(r != null && r.enable) || o !== oe.top) return !1;
        if (r.type === He.inside || r.type === He.outside) {
          let a, l, c;
          const u = n.getPosition(),
            h = n.getRadius(),
            d = 1;
          for (
            let f = 0, g = this.raw.length - d;
            f < this.raw.length;
            g = f++
          ) {
            const p = this.raw[f],
              y = this.raw[g];
            a = S2(p, y, u);
            const w = Me(u, a);
            if ((([l, c] = [w.dx, w.dy]), w.distance < h))
              return (P2(p, y, n.velocity), !0);
          }
          if (
            a &&
            l !== void 0 &&
            c !== void 0 &&
            !this._checkInsidePolygon(u)
          ) {
            const f = { x: 1, y: 1 },
              g = h * O2,
              p = -1;
            return (
              u.x >= a.x && (f.x = -1),
              u.y >= a.y && (f.y = -1),
              (n.position.x = a.x + g * f.x),
              (n.position.y = a.y + g * f.y),
              n.velocity.mult(p),
              !0
            );
          }
        } else if (r.type === He.inline && n.initialPosition) {
          const a = Ne(n.initialPosition, n.getPosition()),
            { velocity: l } = n;
          if (a > this._moveRadius)
            return ((l.x = l.y * Bs - l.x), (l.y = l.x * Bs - l.y), !0);
        }
        return !1;
      }),
      (this._randomPoint = () => {
        const n = this._container,
          s = n.actualOptions.polygon;
        if (!s) return;
        let o;
        if (s.type === He.inline)
          switch (s.inline.arrangement) {
            case Bt.randomPoint:
              o = this._getRandomPoint();
              break;
            case Bt.randomLength:
              o = this._getRandomPointByLength();
              break;
            case Bt.equidistant:
              o = this._getEquidistantPointByIndex(n.particles.count);
              break;
            case Bt.onePerPoint:
            case Bt.perPoint:
            default:
              o = this._getPointByIndex(n.particles.count);
          }
        else {
          const r = n.canvas.size;
          o = { x: D() * r.width, y: D() * r.height };
        }
        return this._checkInsidePolygon(o) ? o : this._randomPoint();
      }),
      (this._container = e),
      (this._engine = i),
      (this.dimension = { height: 0, width: 0 }),
      (this._moveRadius = 0),
      (this._scale = 1));
  }
  clickPositionValid(e) {
    const i = this._container.actualOptions.polygon;
    return (
      !!(i != null && i.enable) &&
      i.type !== He.none &&
      i.type !== He.inline &&
      this._checkInsidePolygon(e)
    );
  }
  draw(e) {
    var o;
    if (!((o = this.paths) != null && o.length)) return;
    const i = this._container.actualOptions.polygon;
    if (!(i != null && i.enable)) return;
    const n = i.draw;
    if (!n.enable) return;
    const s = this.raw;
    for (const r of this.paths) {
      const a = r.path2d;
      e &&
        (a && this.offset
          ? v2(e, a, n.stroke, this.offset)
          : s && w2(e, s, n.stroke));
    }
  }
  async init() {
    const e = this._container,
      i = e.actualOptions.polygon,
      n = e.retina.pixelRatio;
    i &&
      ((this._moveRadius = i.move.radius * n),
      (this._scale = i.scale * n),
      i.enable && (await this._initRawData()));
  }
  particleBounce(e, i, n) {
    return this._polygonBounce(e, i, n);
  }
  particlePosition(e) {
    var s;
    const i = this._container.actualOptions.polygon,
      n = 0;
    if (
      i != null &&
      i.enable &&
      (((s = this.raw) == null ? void 0 : s.length) ?? n) > n
    )
      return fe({}, e || this._randomPoint());
  }
  particlesInitialization() {
    const e = this._container.actualOptions.polygon;
    return e != null &&
      e.enable &&
      e.type === He.inline &&
      (e.inline.arrangement === Bt.onePerPoint ||
        e.inline.arrangement === Bt.perPoint)
      ? (this._drawPoints(), !0)
      : !1;
  }
  resize() {
    const e = this._container,
      i = e.actualOptions.polygon;
    if (!(i != null && i.enable && i.type !== He.none)) return;
    this.redrawTimeout && clearTimeout(this.redrawTimeout);
    const n = 250;
    this.redrawTimeout = window.setTimeout(() => {
      (async () => (await this._initRawData(!0), await e.particles.redraw()))();
    }, n);
  }
  stop() {
    (delete this.raw, delete this.paths);
  }
}
class A2 {
  constructor(e) {
    ((this.id = "polygonMask"), (this._engine = e));
  }
  getPlugin(e) {
    return Promise.resolve(new T2(e, this._engine));
  }
  loadOptions(e, i) {
    if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
    let n = e.polygon;
    ((n == null ? void 0 : n.load) === void 0 && (e.polygon = n = new y2()),
      n.load(i == null ? void 0 : i.polygon));
  }
  needsPlugin(e) {
    var i, n;
    return (
      ((i = e == null ? void 0 : e.polygon) == null ? void 0 : i.enable) ??
      (((n = e == null ? void 0 : e.polygon) == null ? void 0 : n.type) !==
        void 0 &&
        e.polygon.type !== He.none)
    );
  }
}
async function E2(t, e = !0) {
  await t.addPlugin(new A2(t), e);
}
class k2 {
  constructor() {
    ((this._createDirs = () => {
      this.dirsList = [];
      for (let e = 0; e < 360; e += 360 / this.options.sides) {
        const i = this.options.angle + e;
        this.dirsList.push(
          ne.create(
            Math.cos((i * Math.PI) / 180),
            Math.sin((i * Math.PI) / 180),
          ),
        );
      }
    }),
      (this.dirsList = []),
      (this.options = { sides: 6, turnSteps: 20, angle: 30 }));
  }
  generate(e) {
    const { sides: i } = this.options;
    (e.hexStep === void 0 && (e.hexStep = 0),
      e.hexDirection === void 0 &&
        (e.hexDirection = i === 6 ? ((D() * 3) | 0) * 2 : (D() * i) | 0),
      e.hexSpeed === void 0 && (e.hexSpeed = e.velocity.length),
      e.hexStep % this.options.turnSteps === 0 &&
        (e.hexDirection =
          D() > 0.5 ? (e.hexDirection + 1) % i : (e.hexDirection + i - 1) % i),
      (e.velocity.x = 0),
      (e.velocity.y = 0),
      e.hexStep++);
    const n = this.dirsList[e.hexDirection];
    return ne.create(n.x * e.hexSpeed, n.y * e.hexSpeed);
  }
  init(e) {
    const i = e.actualOptions.particles.move.path.options;
    ((this.options.sides = i.sides > 0 ? i.sides : 6),
      (this.options.angle = i.angle ?? 30),
      (this.options.turnSteps = i.turnSteps >= 0 ? i.turnSteps : 20),
      this._createDirs());
  }
  reset(e) {
    (delete e.hexStep, delete e.hexDirection, delete e.hexSpeed);
  }
  update() {}
}
const M2 = "polygonPathGenerator";
async function I2(t, e = !0) {
  await t.addPathGenerator(M2, new k2(), e);
}
const R2 = 2,
  V2 = Math.PI * R2,
  qs = 0.5,
  L2 = 0;
function z2(t, e, i = L2) {
  const n = V2 / t,
    s = [];
  for (let o = 0; o < t; o++)
    s.push({ x: Math.cos(o * n + i) * e, y: Math.sin(o * n + i) * e });
  return s;
}
function G2(t, e, i) {
  let r = e[0],
    a = e[1];
  const l = e.length;
  t.moveTo((r.x + a.x) * qs, (r.y + a.y) * qs);
  for (let c = 1; c <= l; c++)
    ((r = a),
      (a = e[(c + 1) % l]),
      t.arcTo(r.x, r.y, (r.x + a.x) * qs, (r.y + a.y) * qs, i));
}
const Wc = 5,
  $2 = 5;
class D2 {
  constructor() {
    this.validTypes = ["rounded-polygon"];
  }
  draw(e) {
    const { context: i, particle: n, radius: s } = e;
    G2(i, z2(n.sides, s), n.borderRadius ?? $2);
  }
  getSidesCount(e) {
    const i = e.shapeData;
    return Math.round(S((i == null ? void 0 : i.sides) ?? Wc));
  }
  particleInit(e, i) {
    const n = i.shapeData;
    i.borderRadius =
      Math.round(S((n == null ? void 0 : n.radius) ?? Wc)) *
      e.retina.pixelRatio;
  }
}
async function F2(t, e = !0) {
  await t.addShape(new D2(), e);
}
function H2(t, e, i, n) {
  const s = { x: -e, y: -e, height: i, width: i },
    o = { topLeft: n, topRight: n, bottomLeft: n, bottomRight: n },
    { x: r, y: a, width: l, height: c } = s,
    u = r + l,
    h = a + c;
  (t.moveTo(r + o.topLeft, a),
    t.lineTo(u - o.topRight, a),
    t.quadraticCurveTo(u, a, u, a + o.topRight),
    t.lineTo(u, a + c - o.bottomRight),
    t.quadraticCurveTo(u, h, u - o.bottomRight, h),
    t.lineTo(r + o.bottomLeft, h),
    t.quadraticCurveTo(r, h, r, h - o.bottomLeft),
    t.lineTo(r, a + o.topLeft),
    t.quadraticCurveTo(r, a, r + o.topLeft, a));
}
const B2 = 2,
  q2 = Math.sqrt(B2),
  N2 = 2,
  Qc = 5;
class U2 {
  constructor() {
    this.validTypes = ["rounded-rect"];
  }
  draw(e) {
    const { context: i, particle: n, radius: s } = e,
      o = s / q2,
      r = o * N2,
      a = n.borderRadius ?? Qc;
    "roundRect" in i ? i.roundRect(-o, -o, r, r, a) : H2(i, o, r, a);
  }
  particleInit(e, i) {
    const n = i.shapeData;
    i.borderRadius =
      S((n == null ? void 0 : n.radius) ?? Qc) * e.retina.pixelRatio;
  }
}
async function j2(t, e = !0) {
  await t.addShape(new U2(), e);
}
var qi;
(function (t) {
  ((t[(t.normal = 0)] = "normal"), (t[(t.reverse = 1)] = "reverse"));
})(qi || (qi = {}));
const W2 = 1,
  $i = 0.5,
  Q2 = 0,
  K2 = 0,
  Y2 = 0,
  Z2 = 1;
class J2 {
  constructor() {
    ((this._paths = []),
      (this._reverse = !1),
      (this._size = { width: 0, height: 0 }),
      (this._scale = 1),
      (this._offset = { x: 0, y: 0, mode: Vt.percent }),
      (this._width = 0));
  }
  generate(e, i) {
    const n = e.container,
      s = n.retina.pixelRatio;
    (e.svgDirection === void 0 &&
      (e.svgDirection = D() > Qt ? qi.normal : qi.reverse),
      e.svgPathIndex === void 0 &&
        (e.svgPathIndex = Math.floor(Math.random() * this._paths.length)),
      e.svgSpeed === void 0 &&
        (e.svgSpeed = e.velocity.mult((e.retina.moveSpeed ?? W2) * $i).length),
      e.svgStep === void 0 &&
        (e.svgStep =
          ke({ min: 0, max: this._paths[e.svgPathIndex].length }) * s),
      e.svgOffset === void 0 &&
        (e.svgOffset = {
          width: ke({ min: -this._width * $i, max: this._width * $i }) * s,
          height: ke({ min: -this._width * $i, max: this._width * $i }) * s,
        }),
      e.svgInitialPosition === void 0 &&
        (e.svgInitialPosition = { ...e.position }),
      (e.velocity.x = 0),
      (e.velocity.y = 0),
      e.svgDirection === qi.normal
        ? (e.svgStep += e.svgSpeed * i.factor)
        : (e.svgStep -= e.svgSpeed * i.factor));
    let o = this._paths[e.svgPathIndex];
    if (o) {
      const r = o.length,
        a = 1;
      (e.svgStep >= r
        ? ((e.svgPathIndex = e.svgPathIndex + a),
          e.svgPathIndex >= this._paths.length &&
            (this._reverse
              ? ((e.svgPathIndex = this._paths.length - a),
                (e.svgDirection = qi.reverse))
              : ((e.svgPathIndex = 0), (e.svgStep = 0))))
        : e.svgStep <= Q2 &&
          ((e.svgPathIndex = e.svgPathIndex - a),
          e.svgPathIndex < K2 &&
            (this._reverse
              ? ((e.svgPathIndex = 0), (e.svgDirection = qi.normal))
              : ((e.svgPathIndex = this._paths.length - a),
                (o = this._paths[e.svgPathIndex]),
                (e.svgStep = o.length)))),
        (o = this._paths[e.svgPathIndex]));
    }
    if (o) {
      const r = o.element,
        a = r.getPointAtLength(e.svgStep),
        l = e.container.canvas.size,
        c = wa(this._offset, l),
        u = this._scale * s;
      ((e.position.x =
        (a.x - this._size.width * $i) * u +
        e.svgInitialPosition.x +
        c.x +
        e.svgOffset.width),
        (e.position.y =
          (a.y - this._size.height * $i) * u +
          e.svgInitialPosition.y +
          c.y +
          e.svgOffset.height));
    }
    return ne.origin;
  }
  init(e) {
    const i = e.actualOptions.particles.move.path.options,
      n = i.position ?? this._offset;
    if (
      ((this._reverse = i.reverse ?? this._reverse),
      (this._scale = i.scale ?? Z2),
      (this._offset.x = n.x),
      (this._offset.y = n.y),
      (this._offset.mode = n.mode),
      (this._width = i.width ?? Y2),
      i.url && !i.path)
    ) {
      const s = i.url;
      (async () => {
        const o = await fetch(s),
          r = await o.text(),
          a = new DOMParser(),
          l = a.parseFromString(r, "image/svg+xml"),
          c = 0,
          u = l.getElementsByTagName("svg")[c];
        let h = u.getElementsByTagName("path");
        (h.length || (h = l.getElementsByTagName("path")), (this._paths = []));
        for (let d = 0; d < h.length; d++) {
          const f = h.item(d);
          f && this._paths.push({ element: f, length: f.getTotalLength() });
        }
        ((this._size.height = parseFloat(u.getAttribute("height") ?? "0")),
          (this._size.width = parseFloat(u.getAttribute("width") ?? "0")));
      })();
    } else if (i.path) {
      const s = i.path;
      this._paths = [];
      for (const o of s.data) {
        const r = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        (r.setAttribute("d", o),
          this._paths.push({ element: r, length: r.getTotalLength() }));
      }
      ((this._size.height = s.size.height), (this._size.width = s.size.width));
    }
  }
  reset() {}
  update() {}
}
const X2 = "svgPathGenerator";
async function eP(t, e = !0) {
  await t.addPathGenerator(X2, new J2(), e);
}
const Di = {
  size: 20,
  increment: 0.004,
  columns: 0,
  rows: 0,
  layers: 0,
  width: 0,
  height: 0,
  offset: { x: 4e4, y: 4e4, z: 4e4 },
};
class tP {
  constructor() {
    const e = new Ih();
    ((this._simplex = e.noise4d),
      (this.field = []),
      (this.noiseW = 0),
      (this.options = fe({}, Di)));
  }
  generate(e) {
    var o, r, a;
    const i = e.getPosition(),
      n = {
        x: Math.max(Math.floor(i.x / this.options.size), 0),
        y: Math.max(Math.floor(i.y / this.options.size), 0),
        z: Math.max(Math.floor(i.z / this.options.size), 0),
      },
      s = ne.origin;
    return (
      (a =
        (r = (o = this.field) == null ? void 0 : o[n.x]) == null
          ? void 0
          : r[n.y]) != null &&
        a[n.z] &&
        s.setTo(this.field[n.x][n.y][n.z]),
      s
    );
  }
  init(e) {
    ((this.container = e), this._setup());
  }
  reset() {}
  update() {
    this.container &&
      (this._calculateField(), (this.noiseW += this.options.increment));
  }
  _calculateField() {
    const e = this.options;
    for (let i = 0; i < e.columns; i++)
      for (let n = 0; n < e.rows; n++)
        for (let s = 0; s < e.layers; s++)
          ((this.field[i][n][s].angle =
            this._simplex.noise(i / 50, n / 50, s / 50, this.noiseW) *
            Math.PI *
            2),
            (this.field[i][n][s].length = this._simplex.noise(
              i / 100 + e.offset.x,
              n / 100 + e.offset.y,
              s / 100 + e.offset.z,
              this.noiseW,
            )));
  }
  _initField() {
    this.field = new Array(this.options.columns);
    for (let e = 0; e < this.options.columns; e++) {
      this.field[e] = new Array(this.options.rows);
      for (let i = 0; i < this.options.rows; i++) {
        this.field[e][i] = new Array(this.options.layers);
        for (let n = 0; n < this.options.layers; n++)
          this.field[e][i][n] = ne.origin;
      }
    }
  }
  _resetField() {
    const e = this.container;
    if (!e) return;
    const i = e.actualOptions.particles.move.path.options;
    ((this.options.size = i.size > 0 ? i.size : Di.size),
      (this.options.increment = i.increment > 0 ? i.increment : Di.increment),
      (this.options.width = e.canvas.size.width),
      (this.options.height = e.canvas.size.height));
    const n = i.offset;
    ((this.options.offset.x = (n == null ? void 0 : n.x) ?? Di.offset.x),
      (this.options.offset.y = (n == null ? void 0 : n.y) ?? Di.offset.y),
      (this.options.offset.z = (n == null ? void 0 : n.z) ?? Di.offset.z),
      (this.options.seed = i.seed ?? Di.seed),
      this._simplex.seed(this.options.seed ?? D()),
      (this.options.columns =
        Math.floor(this.options.width / this.options.size) + 1),
      (this.options.rows =
        Math.floor(this.options.height / this.options.size) + 1),
      (this.options.layers = Math.floor(e.zLayers / this.options.size) + 1),
      this._initField());
  }
  _setup() {
    ((this.noiseW = 0),
      this._resetField(),
      addEventListener("resize", () => this._resetField()));
  }
}
const iP = "simplexNoise";
async function nP(t, e = !0) {
  await t.addPathGenerator(iP, new tP(), e);
}
class Kc {
  constructor() {
    ((this.loop = !1), (this.source = ""));
  }
  load(e) {
    e !== void 0 &&
      (_i(e)
        ? (e.loop !== void 0 && (this.loop = e.loop),
          e.source !== void 0 && (this.source = e.source))
        : (this.source = e));
  }
}
class Zh {
  constructor() {
    ((this.duration = 500), (this.value = []));
  }
  load(e) {
    e &&
      (e.duration !== void 0 && (this.duration = e.duration),
      e.value !== void 0 && (this.value = e.value));
  }
}
class Aa {
  constructor() {
    ((this.loop = !1), (this.melodies = []), (this.notes = []));
  }
  load(e) {
    e !== void 0 &&
      (e.loop !== void 0 && (this.loop = e.loop),
      e.melodies !== void 0 &&
        (this.melodies = e.melodies.map((i) => {
          const n = new Aa();
          return (n.load(i), n);
        })),
      e.notes !== void 0 &&
        (this.notes = e.notes.map((i) => {
          const n = new Zh();
          return (n.load(i), n);
        })));
  }
}
class sP {
  constructor() {
    ((this.event = []), (this.notes = []));
  }
  load(e) {
    if (
      e &&
      (e.event !== void 0 && (this.event = e.event),
      e.audio !== void 0 &&
        (Ge(e.audio)
          ? (this.audio = e.audio.map((i) => {
              const n = new Kc();
              return (n.load(i), n);
            }))
          : ((this.audio = new Kc()), this.audio.load(e.audio))),
      e.notes !== void 0 &&
        (this.notes = e.notes.map((i) => {
          const n = new Zh();
          return (n.load(i), n);
        })),
      e.melodies !== void 0 &&
        (this.melodies = e.melodies.map((i) => {
          const n = new Aa();
          return (n.load(i), n);
        })),
      e.filter)
    )
      if (it(e.filter)) {
        const i = window[e.filter];
        zo(i) && (this.filter = i);
      } else this.filter = e.filter;
  }
}
class Ns {
  constructor() {
    ((this.width = 24), (this.height = 24), (this.style = ""));
  }
  load(e) {
    e &&
      (e.path !== void 0 && (this.path = e.path),
      e.svg !== void 0 && (this.svg = e.svg),
      e.width !== void 0 && (this.width = e.width),
      e.height !== void 0 && (this.height = e.height));
  }
}
class oP {
  constructor() {
    ((this.mute = new Ns()),
      (this.unmute = new Ns()),
      (this.volumeDown = new Ns()),
      (this.volumeUp = new Ns()),
      (this.enable = !1),
      (this.mute.svg = `<?xml version="1.0"?>
<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"
    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Layer_1">
        <path fill="#fff" d="M19.707,5.293c-0.391-0.391-1.023-0.391-1.414,0l-1.551,1.551c-0.345-0.688-0.987-1.02-1.604-1.02c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C10.357,8.561,8.904,9,8,9c-1.654,0-3,1.346-3,3v2c0,1.237,0.754,2.302,1.826,2.76l-1.533,1.533c-0.391,0.391-0.391,1.023,0,1.414C5.488,19.902,5.744,20,6,20s0.512-0.098,0.707-0.293l2.527-2.527c0.697,0.174,1.416,0.455,1.875,0.762l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C16.035,20.176,17,19.495,17,18V9.414l2.707-2.707C20.098,6.316,20.098,5.684,19.707,5.293z M14.891,7.941c0.038-0.025,0.073-0.046,0.104-0.062C14.998,7.914,15,7.954,15,8v1.293l-2,2V9.202L14.891,7.941z M7,12c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v2.439l-2.83,2.83C8.757,15.046,8.356,15,8,15c-0.552,0-1-0.448-1-1V12z M10.301,15.406L12,13.707v2.439C11.519,15.859,10.925,15.604,10.301,15.406z M14.994,18.12c-0.03-0.016-0.065-0.036-0.104-0.062L13,16.798v-4.091l2-2V18C15,18.046,14.998,18.086,14.994,18.12z"/>
    </g>
</svg>`),
      (this.unmute.svg = `<?xml version="1.0"?>
<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"
    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Layer_1">
        <path fill="#fff" d="M17.138,5.824c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C12.357,8.561,10.904,9,10,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C18.035,20.176,19,19.495,19,18V8C19,6.505,18.035,5.824,17.138,5.824z M14,16.146C12.907,15.495,11.211,15,10,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146V16.146z M17,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L15,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C16.998,7.914,17,7.954,17,8V18z"/>
    </g>
</svg>`),
      (this.volumeDown.svg = `<?xml version="1.0"?>
<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"
    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Layer_1">
        <path fill="#fff" d="M15.138,5.824c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C10.357,8.561,8.904,9,8,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C16.035,20.176,17,19.495,17,18V8C17,6.505,16.035,5.824,15.138,5.824z M8,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v6.293C10.907,15.495,9.211,15,8,15z M15,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L13,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C14.998,7.914,15,7.954,15,8V18z"/>
        <path fill="#fff" d="M18.292,10.294c-0.39,0.391-0.39,1.023,0.002,1.414c0.345,0.345,0.535,0.803,0.535,1.291c0,0.489-0.19,0.948-0.536,1.294c-0.391,0.39-0.391,1.023,0,1.414C18.488,15.902,18.744,16,19,16s0.512-0.098,0.707-0.293c0.724-0.723,1.122-1.685,1.122-2.708s-0.398-1.984-1.123-2.707C19.317,9.903,18.683,9.901,18.292,10.294z"/>
    </g>
</svg>`),
      (this.volumeUp.svg = `<?xml version="1.0"?>
<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"
    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Layer_1">
        <path fill="#fff" d="M16.706,10.292c-0.389-0.389-1.023-0.391-1.414,0.002c-0.39,0.391-0.39,1.023,0.002,1.414c0.345,0.345,0.535,0.803,0.535,1.291c0,0.489-0.19,0.948-0.536,1.294c-0.391,0.39-0.391,1.023,0,1.414C15.488,15.902,15.744,16,16,16s0.512-0.098,0.707-0.293c0.724-0.723,1.122-1.685,1.122-2.708S17.431,11.015,16.706,10.292z"/>
        <path fill="#fff" d="M18.706,8.292c-0.391-0.389-1.023-0.39-1.414,0.002c-0.39,0.391-0.39,1.024,0.002,1.414c0.879,0.877,1.363,2.044,1.364,3.287c0.001,1.246-0.484,2.417-1.365,3.298c-0.391,0.391-0.391,1.023,0,1.414C17.488,17.902,17.744,18,18,18s0.512-0.098,0.707-0.293c1.259-1.259,1.952-2.933,1.951-4.713C20.657,11.217,19.964,9.547,18.706,8.292z"/>
        <path fill="#fff" d="M20.706,6.292c-0.391-0.389-1.023-0.39-1.414,0.002c-0.39,0.391-0.39,1.024,0.002,1.414c1.412,1.409,2.191,3.285,2.192,5.284c0.002,2.002-0.777,3.885-2.193,5.301c-0.391,0.391-0.391,1.023,0,1.414C19.488,19.902,19.744,20,20,20s0.512-0.098,0.707-0.293c1.794-1.794,2.781-4.18,2.779-6.717C23.485,10.457,22.497,8.078,20.706,6.292z"/>
        <path fill="#fff" d="M12.138,5.824c-0.449,0-0.905,0.152-1.356,0.453L8.109,8.059C7.357,8.561,5.904,9,5,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C13.035,20.176,14,19.495,14,18V8C14,6.505,13.035,5.824,12.138,5.824z M5,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v6.293C7.907,15.495,6.211,15,5,15z M12,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L10,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C11.998,7.914,12,7.954,12,8V18z"/>
    </g>
</svg>`));
  }
  load(e) {
    e &&
      (e.enable !== void 0 && (this.enable = e.enable),
      this.mute.load(e.mute),
      this.unmute.load(e.unmute),
      this.volumeDown.load(e.volumeDown),
      this.volumeUp.load(e.volumeUp));
  }
}
class rP {
  constructor() {
    ((this.value = 100), (this.max = 100), (this.min = 0), (this.step = 10));
  }
  load(e) {
    e !== void 0 &&
      (_i(e)
        ? (e.max !== void 0 && (this.max = e.max),
          e.min !== void 0 && (this.min = e.min),
          e.step !== void 0 && (this.step = e.step),
          e.value !== void 0 && (this.value = e.value))
        : (this.value = e));
  }
}
class aP {
  constructor() {
    ((this.autoPlay = !0),
      (this.enable = !1),
      (this.events = []),
      (this.icons = new oP()),
      (this.volume = new rP()));
  }
  load(e) {
    e &&
      (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.enable !== void 0 && (this.enable = e.enable),
      e.events !== void 0 &&
        (this.events = e.events.map((i) => {
          const n = new sP();
          return (n.load(i), n);
        })),
      this.icons.load(e.icons),
      e.volume !== void 0 && this.volume.load(e.volume));
  }
}
var bo;
(function (t) {
  ((t.mute = "soundsMuted"), (t.unmute = "soundsUnmuted"));
})(bo || (bo = {}));
var is;
(function (t) {
  ((t.Block = "block"), (t.None = "none"));
})(is || (is = {}));
const ct = new Map();
ct.set(
  "C",
  [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093, 4186.01],
);
ct.set(
  "Db",
  [17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
);
ct.set(
  "D",
  [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.63],
);
ct.set(
  "Eb",
  [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03],
);
ct.set(
  "E",
  [20.6, 41.2, 82.41, 164.81, 329.63, 659.25, 1318.51, 2637.02, 5274.04],
);
ct.set(
  "F",
  [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83, 5587.65],
);
ct.set(
  "Gb",
  [23.12, 46.25, 92.5, 185, 369.99, 739.99, 1479.98, 2959.96, 5919.91],
);
ct.set("G", [24.5, 49, 98, 196, 392, 783.99, 1567.98, 3135.96, 6271.93]);
ct.set(
  "Ab",
  [25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44, 6644.88],
);
ct.set("A", [27.5, 55, 110, 220, 440, 880, 1760, 3520, 7040]);
ct.set(
  "Bb",
  [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31, 7458.62],
);
ct.set(
  "B",
  [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07, 7902.13],
);
ct.set("pause", [0]);
function lP(t) {
  const e = /(([A-G]b?)(\d))|pause/i,
    i = e.exec(t),
    n = 2,
    s = 0,
    o = 3;
  if (!(i != null && i.length)) return;
  const r = i[n] || i[s],
    a = ct.get(r);
  if (a) return a[parseInt(i[o] || "0")];
}
let Jh = !0;
const Yc = () => Jh,
  Xh = () => {
    Jh = !1;
  },
  ed = 1,
  cP = 1,
  Zc = 0;
function Us(t) {
  var y;
  const e = document.createElement("img"),
    {
      clickCb: i,
      container: n,
      display: s,
      iconOptions: o,
      margin: r,
      options: a,
      pos: l,
      rightOffsets: c,
    } = t,
    { width: u, path: h, style: d, svg: f } = o;
  return (
    uP(
      e,
      l.top + r,
      l.right - (r * (c.length + cP) + u + c.reduce((w, x) => w + x, 0)),
      s,
      a.fullScreen.zIndex + ed,
      u,
      r,
      d,
    ),
    (e.src = h ?? (f ? `data:image/svg+xml;base64,${btoa(f)}` : "")),
    (
      ((y = n.canvas.element) == null ? void 0 : y.parentNode) ?? document.body
    ).append(e),
    e.addEventListener("click", () => {
      i();
    }),
    e
  );
}
function js(t) {
  t && t.remove();
}
function uP(t, e, i, n, s, o, r, a) {
  ((t.style.userSelect = "none"),
    (t.style.webkitUserSelect = "none"),
    (t.style.position = "absolute"),
    (t.style.top = `${e + r}px`),
    (t.style.left = `${i - r - o}px`),
    (t.style.display = n),
    (t.style.zIndex = `${s + ed}`),
    (t.style.cssText += a));
}
class hP {
  constructor(e, i) {
    ((this._addBuffer = (n) => {
      const s = n.createBufferSource();
      return (this._audioSources.push(s), s);
    }),
      (this._addOscillator = (n) => {
        const s = n.createOscillator();
        return (this._audioSources.push(s), s);
      }),
      (this._initEvents = () => {
        const n = this._container,
          s = n.actualOptions.sounds;
        if (!(!(s != null && s.enable) || !n.canvas.element))
          for (const o of s.events) {
            const r = (a) => {
              (async () => {
                const l = o.filter && !o.filter(a);
                if (this._container !== a.container) return;
                if (
                  !this._container ||
                  this._container.muted ||
                  this._container.destroyed
                ) {
                  Pe(o.event, (u) => {
                    this._engine.removeEventListener(u, r);
                  });
                  return;
                }
                if (l) return;
                const c = 0;
                if (o.audio) this._playBuffer(Re(o.audio));
                else if (o.melodies) {
                  const u = Yt(o.melodies);
                  u.melodies.length
                    ? await Promise.allSettled(
                        u.melodies.map((h) =>
                          this._playNote(h.notes, c, u.loop),
                        ),
                      )
                    : await this._playNote(u.notes, c, u.loop);
                } else if (o.notes) {
                  const u = Yt(o.notes);
                  await this._playNote([u], c, !1);
                }
              })();
            };
            Pe(o.event, (a) => {
              this._engine.addEventListener(a, r);
            });
          }
      }),
      (this._mute = async () => {
        const n = this._container,
          s = this._getAudioContext();
        for (const o of this._audioSources) this._removeAudioSource(o);
        (this._gain && this._gain.disconnect(),
          await s.close(),
          (n.audioContext = void 0),
          this._engine.dispatchEvent(bo.mute, { container: this._container }));
      }),
      (this._playBuffer = (n) => {
        const s = this._audioMap.get(n.source);
        if (!s) return;
        const o = this._container.audioContext;
        if (!o) return;
        const r = this._addBuffer(o);
        ((r.loop = n.loop),
          (r.buffer = s),
          r.connect(this._gain ?? o.destination),
          r.start());
      }),
      (this._playFrequency = async (n, s) => {
        if (!this._gain || this._container.muted) return;
        const o = this._getAudioContext(),
          r = this._addOscillator(o);
        return (
          r.connect(this._gain),
          (r.type = "sine"),
          (r.frequency.value = n),
          r.start(),
          new Promise((a) => {
            setTimeout(() => {
              (this._removeAudioSource(r), a());
            }, s);
          })
        );
      }),
      (this._playMuteSound = () => {
        if (this._container.muted) return;
        const n = this._getAudioContext(),
          s = n.createGain();
        (s.connect(n.destination), (s.gain.value = 0));
        const o = n.createOscillator();
        (o.connect(s),
          (o.type = "sine"),
          (o.frequency.value = 1),
          o.start(),
          setTimeout(() => {
            (o.stop(), o.disconnect(), s.disconnect());
          }));
      }),
      (this._playNote = async (n, s, o) => {
        if (this._container.muted) return;
        const r = n[s];
        if (!r) return;
        const a = r.value,
          l = Pe(a, async (h, d) => this._playNoteValue(n, s, d));
        await (Ge(l) ? Promise.allSettled(l) : l);
        let u = s + 1;
        (o && u >= n.length && (u = u % n.length),
          !this._container.muted && (await this._playNote(n, u, o)));
      }),
      (this._playNoteValue = async (n, s, o) => {
        const r = n[s];
        if (!r) return;
        const a = Re(r.value, o, !0);
        try {
          const l = lP(a);
          if (!je(l)) return;
          await this._playFrequency(l, r.duration);
        } catch (l) {
          xi().error(l);
        }
      }),
      (this._removeAudioSource = (n) => {
        (n.stop(),
          n.disconnect(),
          this._audioSources.splice(this._audioSources.indexOf(n), 1));
      }),
      (this._unmute = () => {
        const n = this._container,
          s = n.actualOptions,
          o = s.sounds;
        if (!o) return;
        const r = this._getAudioContext();
        this._audioSources || (this._audioSources = []);
        const a = r.createGain();
        (a.connect(r.destination),
          (a.gain.value = o.volume.value / ae),
          (this._gain = a),
          this._initEvents(),
          this._engine.dispatchEvent(bo.unmute, {
            container: this._container,
          }));
      }),
      (this._updateMuteIcons = () => {
        const n = this._container,
          s = n.actualOptions.sounds;
        if (!(s != null && s.enable) || !s.icons.enable) return;
        const o = this._muteImg,
          r = this._unmuteImg;
        (o && (o.style.display = n.muted ? "block" : "none"),
          r && (r.style.display = n.muted ? "none" : "block"));
      }),
      (this._updateMuteStatus = async () => {
        const n = this._container,
          s = this._getAudioContext();
        n.muted
          ? (await (s == null ? void 0 : s.suspend()), await this._mute())
          : (await (s == null ? void 0 : s.resume()),
            this._unmute(),
            this._playMuteSound());
      }),
      (this._updateVolume = async () => {
        var r;
        const n = this._container,
          s = n.actualOptions.sounds;
        if (!(s != null && s.enable)) return;
        at(this._volume, s.volume.min, s.volume.max);
        let o = !1;
        (this._volume <= Zc && !n.muted
          ? ((this._volume = 0), (n.muted = !0), (o = !0))
          : this._volume > Zc && n.muted && ((n.muted = !1), (o = !0)),
          o && (this._updateMuteIcons(), await this._updateMuteStatus()),
          (r = this._gain) != null &&
            r.gain &&
            (this._gain.gain.value = this._volume / ae));
      }),
      (this._container = e),
      (this._engine = i),
      (this._volume = 0),
      (this._audioSources = []),
      (this._audioMap = new Map()));
  }
  async init() {
    const e = this._container,
      i = e.actualOptions,
      n = i.sounds;
    if (!(n != null && n.enable)) return;
    if (n.autoPlay && Yc()) {
      const o = () => {
          (removeEventListener(us, o),
            removeEventListener(hs, o),
            Xh(),
            this.unmute());
        },
        r = { capture: !0, once: !0 };
      (addEventListener(us, o, r), addEventListener(hs, o, r));
    }
    this._volume = n.volume.value;
    const s = n.events;
    this._audioMap = new Map();
    for (const o of s) {
      if (!o.audio) continue;
      const r = Pe(o.audio, async (a) => {
        const l = await fetch(a.source);
        if (!l.ok) return;
        const c = await l.arrayBuffer(),
          u = this._getAudioContext(),
          h = await u.decodeAudioData(c);
        this._audioMap.set(a.source, h);
      });
      r instanceof Promise ? await r : await Promise.allSettled(r);
    }
  }
  async mute() {
    this._container.muted || (await this.toggleMute());
  }
  async start() {
    const e = this._container,
      i = e.actualOptions,
      n = i.sounds;
    if (!(n != null && n.enable) || !e.canvas.element) return;
    e.muted = !0;
    const s = e.canvas.element,
      o = { top: s.offsetTop, right: s.offsetLeft + s.offsetWidth },
      { mute: r, unmute: a, volumeDown: l, volumeUp: c } = n.icons,
      u = 10,
      h = async () => {
        await this.toggleMute();
      },
      d = n.icons.enable,
      f = d ? is.Block : is.None;
    ((this._muteImg = Us({
      container: e,
      options: i,
      pos: o,
      display: f,
      iconOptions: r,
      margin: u,
      rightOffsets: [l.width, c.width],
      clickCb: h,
    })),
      (this._unmuteImg = Us({
        container: e,
        options: i,
        pos: o,
        display: is.None,
        iconOptions: a,
        margin: u,
        rightOffsets: [l.width, c.width],
        clickCb: h,
      })),
      (this._volumeDownImg = Us({
        container: e,
        options: i,
        pos: o,
        display: f,
        iconOptions: l,
        margin: u,
        rightOffsets: [c.width],
        clickCb: async () => {
          await this.volumeDown();
        },
      })),
      (this._volumeUpImg = Us({
        container: e,
        options: i,
        pos: o,
        display: f,
        iconOptions: c,
        margin: u,
        rightOffsets: [],
        clickCb: async () => {
          await this.volumeUp();
        },
      })),
      !Yc() && n.autoPlay && (await this.unmute()));
  }
  stop() {
    ((this._container.muted = !0),
      (async () => (
        await this._mute(),
        js(this._muteImg),
        js(this._unmuteImg),
        js(this._volumeDownImg),
        js(this._volumeUpImg)
      ))());
  }
  async toggleMute() {
    const e = this._container;
    ((e.muted = !e.muted),
      this._updateMuteIcons(),
      await this._updateMuteStatus());
  }
  async unmute() {
    this._container.muted && (await this.toggleMute());
  }
  async volumeDown() {
    const e = this._container,
      i = e.actualOptions.sounds;
    i != null &&
      i.enable &&
      (e.muted && (this._volume = 0),
      (this._volume -= i.volume.step),
      await this._updateVolume());
  }
  async volumeUp() {
    const e = this._container,
      i = e.actualOptions.sounds;
    i != null &&
      i.enable &&
      ((this._volume += i.volume.step), await this._updateVolume());
  }
  _getAudioContext() {
    const e = this._container;
    return (
      e.audioContext || (e.audioContext = new AudioContext()),
      e.audioContext
    );
  }
}
const wo = () => {
  (removeEventListener(us, wo), removeEventListener(hs, wo), Xh());
};
class dP {
  constructor(e) {
    ((this.id = "sounds"), (this._engine = e));
    const i = { capture: !0, once: !0 };
    (addEventListener(us, wo, i), addEventListener(hs, wo, i));
  }
  getPlugin(e) {
    return Promise.resolve(new hP(e, this._engine));
  }
  loadOptions(e, i) {
    if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
    let n = e.sounds;
    ((n == null ? void 0 : n.load) === void 0 && (e.sounds = n = new aP()),
      n.load(i == null ? void 0 : i.sounds));
  }
  needsPlugin(e) {
    var i;
    return (
      ((i = e == null ? void 0 : e.sounds) == null ? void 0 : i.enable) ?? !1
    );
  }
}
async function fP(t, e = !0) {
  await t.addPlugin(new dP(t), e);
}
function pP(t) {
  const { context: e, particle: i, radius: n } = t;
  if (
    i.spiralInnerRadius === void 0 ||
    i.spiralLineSpacing === void 0 ||
    i.spiralWidthFactor === void 0
  )
    return;
  const s = (n - i.spiralInnerRadius) / i.spiralLineSpacing,
    o = 10;
  for (let r = 0; r < s * o; r++) {
    const a = r / o,
      l = i.spiralInnerRadius + i.spiralLineSpacing * a,
      c = { x: l * Math.cos(a), y: l * Math.sin(a) };
    e.lineTo(c.x, c.y);
  }
}
const gP = 1,
  mP = 1,
  _P = 10;
class yP {
  constructor() {
    this.validTypes = ["spiral"];
  }
  draw(e) {
    pP(e);
  }
  particleInit(e, i) {
    const n = e.retina.pixelRatio,
      s = i.shapeData;
    ((i.spiralInnerRadius = S((s == null ? void 0 : s.innerRadius) ?? gP) * n),
      (i.spiralLineSpacing = S((s == null ? void 0 : s.lineSpacing) ?? mP) * n),
      (i.spiralWidthFactor = S((s == null ? void 0 : s.widthFactor) ?? _P)));
  }
}
async function bP(t, e = !0) {
  await t.addShape(new yP(), e);
}
const wP = 2,
  vP = 2,
  Jc = 1,
  xP = 0,
  Ws = 0.5,
  SP = -1,
  PP = 10,
  CP = 1,
  Xc = { x: 0, y: 0 },
  eu = { a: 1, b: 0, c: 0, d: 1 };
class OP {
  draw(e) {
    const { context: i, radius: n, particle: s, transformData: o } = e,
      r = n * wP,
      a = s.container.retina.pixelRatio,
      l = s.getPosition(),
      c = s.trail;
    if (!c || !s.trailLength) return;
    const u = s.trailLength + n;
    if (
      (c.push({
        color: i.fillStyle ?? i.strokeStyle,
        position: { x: l.x, y: l.y },
        transformData: { ...e.transformData },
      }),
      c.length < vP)
    )
      return;
    for (; c.length > u; ) c.shift();
    const h = Math.min(c.length, u),
      d = {
        width: s.container.canvas.size.width + r,
        height: s.container.canvas.size.height + r,
      };
    let f = c[h - Jc].position;
    for (let g = h; g > xP; g--) {
      const p = c[g - Jc],
        y = p.position,
        w = s.trailTransform ? (p.transformData ?? eu) : eu;
      (i.setTransform(w.a, w.b, w.c, w.d, y.x, y.y),
        i.beginPath(),
        i.moveTo(f.x - y.x, f.y - y.y));
      const x = {
        x: (f.x + d.width) % d.width,
        y: (f.y + d.height) % d.height,
      };
      if (
        Math.abs(f.x - y.x) > d.width * Ws ||
        Math.abs(f.y - y.y) > d.height * Ws
      ) {
        f = y;
        continue;
      }
      i.lineTo(
        Math.abs(f.x - y.x) > d.width * Ws ? x.x : Xc.x,
        Math.abs(f.y - y.y) > d.height * Ws ? x.y : Xc.y,
      );
      const C = Math.max((g / h) * r, a, s.trailMinWidth ?? SP),
        v = i.globalAlpha;
      ((i.globalAlpha = s.trailFade ? g / h : CP),
        (i.lineWidth = s.trailMaxWidth ? Math.min(C, s.trailMaxWidth) : C),
        (i.strokeStyle = p.color),
        i.stroke(),
        (i.globalAlpha = v),
        (f = y));
    }
    i.setTransform(o.a, o.b, o.c, o.d, l.x, l.y);
  }
  particleInit(e, i) {
    i.trail = [];
    const n = i.effectData;
    ((i.trailFade = (n == null ? void 0 : n.fade) ?? !0),
      (i.trailLength =
        S((n == null ? void 0 : n.length) ?? PP) * e.retina.pixelRatio),
      (i.trailMaxWidth =
        n != null && n.maxWidth ? S(n.maxWidth) * e.retina.pixelRatio : void 0),
      (i.trailMinWidth =
        n != null && n.minWidth ? S(n.minWidth) * e.retina.pixelRatio : void 0),
      (i.trailTransform = (n == null ? void 0 : n.transform) ?? !1));
  }
}
async function TP(t, e = !0) {
  await t.addEffect("trail", new OP(), e);
}
const AP = 0.5,
  EP = 0.5,
  tu = Math.PI * EP;
class kP {
  constructor() {
    this.options = {
      waveHeight: { min: 0, max: 3 },
      waveLength: { min: 0, max: 5 },
    };
  }
  generate(e, i) {
    e.zigzag === void 0 &&
      (e.zigzag = {
        counter: D(),
        waveHeight: S(this.options.waveHeight),
        waveLength: S(this.options.waveLength),
      });
    const n = (AP / e.zigzag.waveLength) * i.factor;
    e.zigzag.counter += n;
    const s = e.zigzag.waveHeight * Math.sin(e.zigzag.counter);
    return (
      (e.position.x += s * Math.cos(e.velocity.angle + tu)),
      (e.position.y += s * Math.sin(e.velocity.angle + tu)),
      ne.origin
    );
  }
  init(e) {
    const i = e.actualOptions.particles.move.path.options;
    ((this.options.waveLength = i.waveLength ?? this.options.waveLength),
      (this.options.waveHeight = i.waveHeight ?? this.options.waveHeight));
  }
  reset() {}
  update() {}
}
const MP = "zigZagPathGenerator";
async function IP(t, e = !0) {
  await t.addPathGenerator(MP, new kP(), e);
}
async function RP(t, e = !0) {
  (qm(t),
    await Ix(t, !1),
    await Gc(),
    await Y_(),
    await Z_(),
    await J_(),
    await X_(),
    await ey(),
    await ty(),
    await iy(),
    await ny(),
    await Ay(t, !1),
    await Vy(t, !1),
    await Uy(t, !1),
    await Gc(),
    await x_(t, !1),
    await aS(t, !1),
    await MS(t, !1),
    await E2(t, !1),
    await fP(t, !1),
    await Qy(t, !1),
    await Jy(t, !1),
    await s1(t, !1),
    await a1(t, !1),
    await u1(t, !1),
    await PS(t, !1),
    await ZS(t, !1),
    await qx(t, !1),
    await NS(t, !1),
    await K_(t, !1),
    await q_(t, !1),
    await r2(t, !1),
    await d2(t, !1),
    await I2(t, !1),
    await eP(t, !1),
    await IP(t, !1),
    await nP(t, !1),
    await o_(t, !1),
    await Xm(t, !1),
    await T_(t, !1),
    await G_(t, !1),
    await Qx(t, !1),
    await hS(t, !1),
    await e2(t, !1),
    await F2(t, !1),
    await j2(t, !1),
    await bP(t, !1),
    await TP(t, !1),
    await t.refresh(e));
}
const VP = { id: "particles", class: "screen-particles" },
  LP = We({
    __name: "ScreenParticles",
    setup(t) {
      const e = {
        name: "YUQ",
        autoPlay: !0,
        fpsLimit: 120,
        interactivity: {
          events: { onHover: { enable: !0, mode: "bubble" } },
          modes: {
            bubble: { distance: 256, duration: 3, opacity: 0, size: 0 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: { enable: !0, speed: { min: 0.1, max: 1 } },
          number: { value: 32 },
          opacity: { value: { min: 0.1, max: 0.8 } },
          size: { value: { min: 1, max: 3 } },
        },
      };
      return (
        nn(async () => {
          (await RP(uo), await uo.load({ id: "particles", options: e }));
        }),
        (i, n) => ($(), B("div", VP))
      );
    },
  }),
  Ze = (t, e) => {
    const i = t.__vccOpts || t;
    for (const [n, s] of e) i[n] = s;
    return i;
  },
  zP = Ze(LP, [["__scopeId", "data-v-a5c4db95"]]),
  GP = "/dreaming-quintet/images/leadtext.svg";
var $P = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let td;
const Bo = (t) => (td = t),
  id = Symbol();
function Yr(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.toString.call(t) === "[object Object]" &&
    typeof t.toJSON != "function"
  );
}
var ns;
(function (t) {
  ((t.direct = "direct"),
    (t.patchObject = "patch object"),
    (t.patchFunction = "patch function"));
})(ns || (ns = {}));
function DP() {
  const t = pu(!0),
    e = t.run(() => we({}));
  let i = [],
    n = [];
  const s = la({
    install(o) {
      (Bo(s),
        (s._a = o),
        o.provide(id, s),
        (o.config.globalProperties.$pinia = s),
        n.forEach((r) => i.push(r)),
        (n = []));
    },
    use(o) {
      return (!this._a && !$P ? n.push(o) : i.push(o), this);
    },
    _p: i,
    _a: null,
    _e: t,
    _s: new Map(),
    state: e,
  });
  return s;
}
const nd = () => {};
function iu(t, e, i, n = nd) {
  t.push(e);
  const s = () => {
    const o = t.indexOf(e);
    o > -1 && (t.splice(o, 1), n());
  };
  return (!i && gu() && vd(s), s);
}
function hn(t, ...e) {
  t.slice().forEach((i) => {
    i(...e);
  });
}
const FP = (t) => t();
function Zr(t, e) {
  (t instanceof Map && e instanceof Map && e.forEach((i, n) => t.set(n, i)),
    t instanceof Set && e instanceof Set && e.forEach(t.add, t));
  for (const i in e) {
    if (!e.hasOwnProperty(i)) continue;
    const n = e[i],
      s = t[i];
    Yr(s) && Yr(n) && t.hasOwnProperty(i) && !$e(n) && !Zi(n)
      ? (t[i] = Zr(s, n))
      : (t[i] = n);
  }
  return t;
}
const HP = Symbol();
function BP(t) {
  return !Yr(t) || !t.hasOwnProperty(HP);
}
const { assign: li } = Object;
function qP(t) {
  return !!($e(t) && t.effect);
}
function NP(t, e, i, n) {
  const { state: s, actions: o, getters: r } = e,
    a = i.state.value[t];
  let l;
  function c() {
    a || (i.state.value[t] = s ? s() : {});
    const u = Wd(i.state.value[t]);
    return li(
      u,
      o,
      Object.keys(r || {}).reduce(
        (h, d) => (
          (h[d] = la(
            Lo(() => {
              Bo(i);
              const f = i._s.get(t);
              return r[d].call(f, f);
            }),
          )),
          h
        ),
        {},
      ),
    );
  }
  return ((l = sd(t, c, e, i, n, !0)), l);
}
function sd(t, e, i = {}, n, s, o) {
  let r;
  const a = li({ actions: {} }, i),
    l = { deep: !0 };
  let c,
    u,
    h = [],
    d = [],
    f;
  const g = n.state.value[t];
  (!o && !g && (n.state.value[t] = {}), we({}));
  let p;
  function y(I) {
    let z;
    ((c = u = !1),
      typeof I == "function"
        ? (I(n.state.value[t]),
          (z = { type: ns.patchFunction, storeId: t, events: f }))
        : (Zr(n.state.value[t], I),
          (z = { type: ns.patchObject, payload: I, storeId: t, events: f })));
    const q = (p = Symbol());
    (Ru().then(() => {
      p === q && (c = !0);
    }),
      (u = !0),
      hn(h, z, n.state.value[t]));
  }
  const w = o
    ? function () {
        const { state: z } = i,
          q = z ? z() : {};
        this.$patch((W) => {
          li(W, q);
        });
      }
    : nd;
  function x() {
    (r.stop(), (h = []), (d = []), n._s.delete(t));
  }
  function C(I, z) {
    return function () {
      Bo(n);
      const q = Array.from(arguments),
        W = [],
        R = [];
      function ee(ie) {
        W.push(ie);
      }
      function Q(ie) {
        R.push(ie);
      }
      hn(d, { args: q, name: I, store: k, after: ee, onError: Q });
      let be;
      try {
        be = z.apply(this && this.$id === t ? this : k, q);
      } catch (ie) {
        throw (hn(R, ie), ie);
      }
      return be instanceof Promise
        ? be
            .then((ie) => (hn(W, ie), ie))
            .catch((ie) => (hn(R, ie), Promise.reject(ie)))
        : (hn(W, be), be);
    };
  }
  const v = {
      _p: n,
      $id: t,
      $onAction: iu.bind(null, d),
      $patch: y,
      $reset: w,
      $subscribe(I, z = {}) {
        const q = iu(h, I, z.detached, () => W()),
          W = r.run(() =>
            Yn(
              () => n.state.value[t],
              (R) => {
                (z.flush === "sync" ? u : c) &&
                  I({ storeId: t, type: ns.direct, events: f }, R);
              },
              li({}, l, z),
            ),
          );
        return q;
      },
      $dispose: x,
    },
    k = Oo(v);
  n._s.set(t, k);
  const U = ((n._a && n._a.runWithContext) || FP)(() =>
    n._e.run(() => (r = pu()).run(e)),
  );
  for (const I in U) {
    const z = U[I];
    if (($e(z) && !qP(z)) || Zi(z))
      o ||
        (g && BP(z) && ($e(z) ? (z.value = g[I]) : Zr(z, g[I])),
        (n.state.value[t][I] = z));
    else if (typeof z == "function") {
      const q = C(I, z);
      ((U[I] = q), (a.actions[I] = z));
    }
  }
  return (
    li(k, U),
    li(ce(k), U),
    Object.defineProperty(k, "$state", {
      get: () => n.state.value[t],
      set: (I) => {
        y((z) => {
          li(z, I);
        });
      },
    }),
    n._p.forEach((I) => {
      li(
        k,
        r.run(() => I({ store: k, app: n._a, pinia: n, options: a })),
      );
    }),
    g && o && i.hydrate && i.hydrate(k.$state, g),
    (c = !0),
    (u = !0),
    k
  );
}
function UP(t, e, i) {
  let n, s;
  const o = typeof e == "function";
  ((n = t), (s = o ? i : e));
  function r(a, l) {
    const c = zf();
    return (
      (a = a || (c ? Xn(id, null) : null)),
      a && Bo(a),
      (a = td),
      a._s.has(n) || (o ? sd(n, e, s, a) : NP(n, s, a)),
      a._s.get(n)
    );
  }
  return ((r.$id = n), r);
}
const Un = (t) => new Promise((e) => setTimeout(e, t)),
  qo = UP("loadingStore", {
    state: () => ({ isClickedAgree: !1, isLoading: !0, isYoutubeVisible: !1 }),
    actions: {
      async loadingCompleted() {
        ((this.isClickedAgree = !0),
          Un(0)
            .then(() => ((document.body.style.overflowY = "hidden"), Un(500)))
            .then(() => (window.scrollTo({ top: 0 }), Un(2500)))
            .then(() => ((this.isLoading = !1), Un(3e3)))
            .then(() => ((document.body.style.overflowY = "scroll"), Un(500)))
            .then(() => {
              this.isYoutubeVisible = !0;
            }));
      },
      setIsYoutubeVisble(t) {
        this.isYoutubeVisible = t;
      },
    },
  }),
  No = (t) => (Ti("data-v-60e8a274"), (t = t()), Ai(), t),
  jP = No(() =>
    b(
      "img",
      {
        src: GP,
        alt: "そして今日もまた、あの夢の世界へ",
        class: "confirm__leadtext",
      },
      null,
      -1,
    ),
  ),
  WP = [],
  QP = No(() =>
    b(
      "p",
      { class: "confirm__text" },
      [
        vn("可否给主播点一个免费的赞？/一键三连一下？"),
      ],
      -1,
    ),
  ),
  KP = No(() => b("p", { class: "confirm__text" }, "  ", -1)),
  YP = { class: "confirm__controller" },
  ZP = No(() =>
    b(
      "a",
      {
        class: "confirm__link",
        href: "",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      "下次一定",
      -1,
    ),
  ),
  JP = We({
    __name: "TheConfirm",
    setup(t) {
      const e = qo(),
        i = () => {
          e.loadingCompleted();
        };
      return (n, s) => (
        $(),
        B(
          "div",
          { class: Z(["confirm", { "is-loaded": !ii(e).isLoading }]) },
          [
            b(
              "div",
              {
                class: Z([
                  "confirm__wrap --leadtext",
                  { "is-visible": ii(e).isClickedAgree },
                ]),
              },
              WP,
              2,
            ),
            b(
              "div",
              {
                class: Z([
                  "confirm__wrap --confirm",
                  { "is-hidden": ii(e).isClickedAgree },
                ]),
              },
              [
                QP,
                KP,
                b("div", YP, [
                  ZP,
                  b(
                    "button",
                    {
                      class: "confirm__button",
                      onClick: s[0] || (s[0] = (o) => i()),
                    },
                    "这次一定！",
                  ),
                ]),
              ],
              2,
            ),
          ],
          2,
        )
      );
    },
  }),
  XP = Ze(JP, [["__scopeId", "data-v-60e8a274"]]),
  eC = (t) => (Ti("data-v-29427a24"), (t = t()), Ai(), t),
  tC = eC(() =>
    b(
      "iframe",
      {
        src: "https://www.youtube.com/embed/a1NNHG7T6KU?si=y3eYSiYEyxotPSUK",
        title: "YouTube video player",
        frameborder: "0",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: "",
        class: "modal-youtube__iframe",
      },
      null,
      -1,
    ),
  ),
  iC = We({
    __name: "ModalYoutube",
    setup(t) {
      const e = qo(),
        i = () => {
          e.setIsYoutubeVisble(!1);
        };
      return (n, s) => (
        $(),
        Ro(
          Tn,
          { name: "fade" },
          {
            default: Ji(() => [
              ii(e).isYoutubeVisible
                ? ($(),
                  B(
                    "div",
                    {
                      key: 0,
                      class: "modal-youtube",
                      onClick: s[1] || (s[1] = Ut((o) => i(), ["self"])),
                    },
                    [
                      b("button", {
                        class: "modal-youtube__button --modal-close",
                        onClick: s[0] || (s[0] = Ut((o) => i(), ["self"])),
                      }),
                      tC,
                    ],
                  ))
                : Se("", !0),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  nC = Ze(iC, [["__scopeId", "data-v-29427a24"]]),
  sC = "",
  oC = "/dreaming-quintet/images/logo_large.png",
  rC = "/dreaming-quintet/images/label.png",
  od = (t) => (Ti("data-v-eb593985"), (t = t()), Ai(), t),
  aC = sC,
  lC = { class: "mainvisual__wrap" },
  cC = { class: "mainvisual__wrap --title" },
  uC = od(() =>
    b(
      "picture",
      { class: "mainvisual__picture" },
      [
        b("source", { srcset: aC, media: "(orientation: portrait)" }),
        b("img", {
          class: "mainvisual__img --title",
          src: oC,
          alt: "HatsuYuki Project",
        }),
      ],
      -1,
    ),
  ),
  hC = [uC],
  dC = od(() =>
    b(
      "img",
      { class: "mainvisual__img --label", src: rC, alt: "るび様2ndProject" },
      null,
      -1,
    ),
  ),
  fC = [dC],
  pC = { class: "mainvisual__buttons" },
  gC = We({
    __name: "MainVisual",
    setup(t) {
      const e = we(2),
        i = qo(),
        n = (s) => {
          e.value + s < 0 || e.value + s > 4 || (e.value = e.value + s);
        };
      return (
        nn(async () => {
          window.addEventListener("resize", () => {
            e.value = 2;
          });
        }),
        (s, o) => (
          $(),
          B("div", lC, [
            b(
              "section",
              {
                class: Z(["mainvisual", { "is-loaded": !ii(i).isLoading }]),
                style: Po({ "background-position-x": `${e.value * 25}%` }),
              },
              [
                b("div", cC, [
                  b(
                    "h1",
                    {
                      class: Z([
                        "mainvisual__title",
                        { "is-loaded": !ii(i).isLoading },
                      ]),
                    },
                    hC,
                    2,
                  ),
                  b(
                    "p",
                    {
                      class: Z([
                        "mainvisual__label",
                        { "is-loaded": !ii(i).isLoading },
                      ]),
                    },
                    fC,
                    2,
                  ),
                ]),
                b("div", pC, [
                  J(Tn, null, {
                    default: Ji(() => [
                      e.value > 0
                        ? ($(),
                          B("button", {
                            key: 0,
                            class: "mainvisual__button --left",
                            onClick: o[0] || (o[0] = (r) => n(-1)),
                          }))
                        : Se("", !0),
                    ]),
                    _: 1,
                  }),
                  J(Tn, null, {
                    default: Ji(() => [
                      e.value < 4
                        ? ($(),
                          B("button", {
                            key: 0,
                            class: "mainvisual__button --right",
                            onClick: o[1] || (o[1] = (r) => n(1)),
                          }))
                        : Se("", !0),
                    ]),
                    _: 1,
                  }),
                ]),
              ],
              6,
            ),
          ])
        )
      );
    },
  }),
  mC = Ze(gC, [["__scopeId", "data-v-eb593985"]]),
  YC2 = { class: "download-section" },
  ZC2 = { class: "download-section__inner" },
  JC2 = We({
    __name: "DownloadSection",
    setup(t) {
      return (e, i) => (
        $(),
        B("section", YC2, [
          b("div", ZC2, [
            b("p", { class: "download-section__eyebrow" }, "DOWNLOAD"),
            b("h2", { class: "download-section__title" }, "试玩包下载"),
            b(
              "p",
              { class: "download-section__text" },
              "点击下方按钮下载",
            ),
            b("div", { class: "download-section__actions" }, [
              b(
                "a",
                {
                  class: "download-section__button --quark",
                  href: "https://pan.quark.cn/s/aad6b2154918?pwd=cZ2p", 
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                "夸克网盘下载",
              ),
              b(
                "a",
                {
                  class: "download-section__button --baidu",
                  href: "https://pan.baidu.com/s/1Ke4kS8gN_eq3lfxW6DDNWw?pwd=0721", 
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                "百度网盘下载",
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  _C = "/dreaming-quintet/images/icon_story.svg",
  yC = "/dreaming-quintet/images/icon_about.svg",
  bC = "/dreaming-quintet/images/icon_character.svg",
  wC = "/dreaming-quintet/images/icon_gallery.svg",
  vC = "/dreaming-quintet/images/icon_movie.svg",
  xC = "/dreaming-quintet/images/icon_top.svg",
  SC = { key: 0, class: "fixed-navigation" },
  PC = { class: "fixed-navigation__list" },
  CC = ["onClick"],
  OC = ["src", "alt"],
  TC = We({
    __name: "FixedNavigation",
    setup(t) {
      const e = we(!1),
        i = qo(),
        n = [
          { image: yC, label: "about" },
          { image: wC, label: "gallery" },
          { image: xC, label: "top" },
        ],
        s = (o) => {
          if (o === "movie") i.setIsYoutubeVisble(!0);
          else if (o === "top") window.scrollTo({ top: 0, behavior: "smooth" });
          else {
            const r = document.getElementById(o),
              a = r == null ? void 0 : r.getBoundingClientRect().top;
            window.scrollTo({ top: window.scrollY + a, behavior: "smooth" });
          }
        };
      return (
        nn(() => {
          window.addEventListener("scroll", () => {
            e.value = window.scrollY > 99;
          });
        }),
        (o, r) => (
          $(),
          Ro(
            Tn,
            { name: "fade" },
            {
              default: Ji(() => [
                e.value
                  ? ($(),
                    B("nav", SC, [
                      b("ul", PC, [
                        ($(),
                        B(
                          pe,
                          null,
                          gt(n, (a, l) =>
                            b(
                              "li",
                              {
                                key: `fixed-navigation-item-${l}`,
                                class: "fixed-navigation__item",
                              },
                              [
                                b(
                                  "button",
                                  {
                                    class: "fixed-navigation__button",
                                    onClick: (c) => s(a.label),
                                  },
                                  [
                                    b(
                                      "img",
                                      { src: a.image, alt: a.label },
                                      null,
                                      8,
                                      OC,
                                    ),
                                  ],
                                  8,
                                  CC,
                                ),
                              ],
                            ),
                          ),
                          64,
                        )),
                      ]),
                    ]))
                  : Se("", !0),
              ]),
              _: 1,
            },
          )
        )
      );
    },
  }),
  AC = Ze(TC, [["__scopeId", "data-v-2bbeec35"]]),
  EC = "/dreaming-quintet/images/heading_information.svg",
  kC = "/dreaming-quintet/images/information_blank.png",
  MC = "/dreaming-quintet/images/information_01.png",
  IC = "/dreaming-quintet/images/heading_sns.svg",
  RC = "/dreaming-quintet/images/header1.png",
  VC = "/dreaming-quintet/images/header2.png",
  LC = "/dreaming-quintet/images/header3.png",
  zC = "/dreaming-quintet/images/header4.png",
  GC = "/dreaming-quintet/images/header5.png",
  $C = "/dreaming-quintet/images/header6.png",
  DC = "/dreaming-quintet/images/icon1.png",
  FC = "/dreaming-quintet/images/icon2.png",
  HC = "/dreaming-quintet/images/icon3.png",
  BC = "/dreaming-quintet/images/icon4.png",
  qC = "/dreaming-quintet/images/icon5.png",
  NC = "/dreaming-quintet/images/icon6.png",
  UC = "/dreaming-quintet/images/icon7.png",
  jC = "/dreaming-quintet/images/icon8.png",
  WC = "/dreaming-quintet/images/icon9.png",
  QC = "/dreaming-quintet/images/icon10.png",
  zn = (t) => (Ti("data-v-b6d005bd"), (t = t()), Ai(), t),
  KC = { id: "information", class: "information" },
  YC = zn(() =>
    b(
      "h2",
      { class: "information__heading" },
      [b("img", { src: EC, alt: "INFORMATION" })],
      -1,
    ),
  ),
  ZC = { class: "information__list" },
  JC = { class: "information__item" },
  XC = zn(() =>
    b(
      "p",
      { class: "information__text" },
      "公告",
      -1,
    ),
  ),
  e3 = { class: "information__item" },
  t3 = zn(() =>
    b(
      "p",
      { class: "information__text" },
      "SNS用素材配布中！ダウンロードはこちらから",
      -1,
    ),
  ),
  i3 = si(
    '<div class="information__modal__contents" data-v-b6d005bd><div class="information__modal__contents__inner" data-v-b6d005bd><p class="information__modal__title" data-v-b6d005bd>公告占位</p><p class="information__modal__text" data-v-b6d005bd>这里预留给 HatsuYuki Project 后续自行填写内容。</p><p class="information__modal__name" data-v-b6d005bd>HatsuYuki Project</p></div></div>',
    1,
  ),
  i3Recruit = si(
    '<div class="information__modal__contents" data-v-b6d005bd><div class="information__modal__contents__inner" data-v-b6d005bd><p class="information__modal__title" data-v-b6d005bd>项目招募公告</p><p class="information__modal__text" data-v-b6d005bd> 目前这个模组项目正在持续开发中，<br data-v-b6d005bd> 但项目组现在比较缺人，想招募愿意一起认真做项目的小伙伴。 </p><p class="information__modal__text --bold" data-v-b6d005bd> 目前主要招募方向：<br data-v-b6d005bd> 美工 / 地图设计 </p><p class="information__modal__text" data-v-b6d005bd> 如果你对这类项目感兴趣，<br data-v-b6d005bd> 愿意一起参与制作、补充内容、共同完善整体效果，欢迎来联系我。 </p><p class="information__modal__text" data-v-b6d005bd> 不管你是擅长角色美术、界面素材、宣传图，<br data-v-b6d005bd> 还是擅长场景规划、地图设计、地图表现，我们都非常欢迎。 </p><p class="information__modal__text" data-v-b6d005bd> 有意加入项目请联系 QQ：751732347<br data-v-b6d005bd> 希望能和更多志同道合的伙伴一起把这个项目做得更完整。 </p><p class="information__modal__name" data-v-b6d005bd> 项目组</p></div></div>',
    1,
  ),
  i3Help = si(
    '<div class="information__modal__contents" data-v-b6d005bd><div class="information__modal__contents__inner" data-v-b6d005bd><p class="information__modal__title" data-v-b6d005bd>mod帮助</p><p class="information__modal__text" data-v-b6d005bd> 本MOD加载器为Forge1.20.1 </p><p class="information__modal__text" data-v-b6d005bd> 必要前置：Curios API<br data-v-b6d005bd> 安装说明 / 常见问题 / 使用帮助 / 更新日志 </p><p class="information__modal__text --bold" data-v-b6d005bd> 当前为占位内容：待完善 </p><p class="information__modal__text" data-v-b6d005bd> <br data-v-b6d005bd>  </p><p class="information__modal__name" data-v-b6d005bd> Placeholder</p></div></div>',
    1,
  ),
  n3 = { class: "information__modal__contents --icon" },
  s3 = { class: "information__modal__contents__inner" },
  o3 = zn(() =>
    b(
      "p",
      { class: "information__modal__title --heading-sns" },
      [b("img", { src: IC, alt: "" })],
      -1,
    ),
  ),
  r3 = zn(() => b("p", { class: "information__modal__text" }, "ヘッダー", -1)),
  a3 = { class: "information__modal__list --header" },
  l3 = ["src"],
  c3 = zn(() => b("p", { class: "information__modal__text" }, "アイコン", -1)),
  u3 = { class: "information__modal__list --icon" },
  h3 = ["src"],
  d3 = We({
    __name: "TheInformation",
    setup(t) {
      const e = [RC, VC, LC, zC, GC, $C],
        i = [DC, FC, HC, BC, qC, NC, UC, jC, WC, QC],
        n = we(-1),
        s = we(-1),
        o = (l) => {
          n.value = l;
        },
        r = (l) =>
          n.value === l ? "is-hovered" : n.value > -1 ? "is-disabled" : null,
        a = (l) => {
          s.value = l;
        };
      return (l, c) => (
        $(),
        B("section", KC, [
          YC,
          b("ul", ZC, [
            b("li", JC, [
              b(
                "button",
                {
                  class: "information__button --modal",
                  onClick: c[0] || (c[0] = (u) => a(1)),
                  onMouseover: c[1] || (c[1] = (u) => o(1)),
                  onMouseleave: c[2] || (c[2] = (u) => o(-1)),
                },
                [
                  b(
                    "img",
                    {
                      src: kC,
                      alt: "",
                      class: Z(["information__thumbnail", r(1)]),
                    },
                    null,
                    2,
                  ),
                  XC,
                ],
                32,
              ),
            ]),
            b("li", e3, [
              b(
                "button",
                {
                  class: "information__button --modal",
                  onClick: c[3] || (c[3] = (u) => a(0)),
                  onMouseover: c[4] || (c[4] = (u) => o(0)),
                  onMouseleave: c[5] || (c[5] = (u) => o(-1)),
                },
                [
                  b(
                    "img",
                    {
                      src: MC,
                      alt: "",
                      class: Z(["information__thumbnail", r(0)]),
                    },
                    null,
                    2,
                  ),
                  b("p", { class: "information__text" }, "mod帮助界面"),
                ],
                32,
              ),
            ]),
          ]),
          b(
            "div",
            {
              class: Z(["information__modal", { "is-visible": s.value === 1 }]),
              onClick: c[7] || (c[7] = Ut((u) => a(-1), ["self"])),
            },
            [
              b("button", {
                class: "information__button --modal-close",
                onClick: c[6] || (c[6] = Ut((u) => a(-1), ["self"])),
              }),
              i3Recruit,
            ],
            2,
          ),
          b(
            "div",
            {
              class: Z(["information__modal", { "is-visible": s.value === 0 }]),
              onClick: c[9] || (c[9] = Ut((u) => a(-1), ["self"])),
            },
            [
              b("button", {
                class: "information__button --modal-close",
                onClick: c[8] || (c[8] = Ut((u) => a(-1), ["self"])),
              }),
              i3Help,
            ],
            2,
          ),
        ])
      );
    },
  }),
  f3 = Ze(d3, [["__scopeId", "data-v-b6d005bd"]]),
  p3 = "/dreaming-quintet/images/heading_story.svg",
  g3 = "/dreaming-quintet/images/icon_text_close.svg",
  m3 = "/dreaming-quintet/images/icon_text_open.svg",
  _3 = We({
    __name: "CharacterDots",
    props: {
      character: { default: "" },
      clickable: { type: Boolean, default: !0 },
    },
    setup(t) {
      const e = t,
        i = we(0),
        n = Lo(() => {
          if (i.value === 0) return "is-front";
          if (i.value === 1) return "is-left";
          if (i.value === 2) return "is-back";
          if (i.value === 3) return "is-right";
        }),
        s = () => {
          e.clickable && (i.value = (i.value + 1) % 4);
        };
      return (o, r) => (
        $(),
        B(
          "button",
          {
            class: Z(["character-dots", [`--${o.character}`, n.value]]),
            onClick: r[0] || (r[0] = (a) => s()),
          },
          null,
          2,
        )
      );
    },
  }),
  rd = Ze(_3, [["__scopeId", "data-v-5b432f36"]]),
  y3 = { class: "character-message" },
  b3 = We({
    __name: "CharacterFukidashi",
    props: { character: { default: "" } },
    setup(t) {
      return (e, i) => (
        $(),
        B("div", y3, [
          b(
            "p",
            { class: Z(["character-message__text", [`--${e.character}`]]) },
            [Of(e.$slots, "default", {}, void 0)],
            2,
          ),
          J(
            rd,
            { character: e.character, class: "character-message__character" },
            null,
            8,
            ["character"],
          ),
        ])
      );
    },
  }),
  nu = Ze(b3, [["__scopeId", "data-v-0655deee"]]),
  w3 = We({
    __name: "DoorDots",
    props: { doorType: { default: "" } },
    setup(t) {
      const e = we(!1),
        i = () => {
          e.value = !e.value;
        };
      return (n, s) => (
        $(),
        B(
          "button",
          {
            class: Z([
              "door-dots",
              [`--${n.doorType}`, { "is-closed": e.value }],
            ]),
            onClick: i,
          },
          null,
          2,
        )
      );
    },
  }),
  Qs = Ze(w3, [["__scopeId", "data-v-708ab2dd"]]),
  yt = (t) => (Ti("data-v-686dd9b3"), (t = t()), Ai(), t),
  v3 = { id: "story", class: "story" },
  x3 = yt(() =>
    b(
      "h2",
      { class: "story__heading" },
      [b("img", { src: p3, alt: "STORY" })],
      -1,
    ),
  ),
  S3 = { key: 0, class: "story__wrap --bg-blur" },
  P3 = yt(() => b("div", { class: "story__container --display" }, null, -1)),
  C3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "俺――渡利遥人は、不思議な夢を見ていた。",
      -1,
    ),
  ),
  O3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "真っ白で、長い長い、廊下のような世界に放り出される明晰夢。",
      -1,
    ),
  ),
  T3 = [C3, O3],
  A3 = { key: 1, class: "story__wrap" },
  E3 = { class: "story__container --display" },
  k3 = { class: "story__doors" },
  M3 = yt(() =>
    b("p", { class: "story__text" }, "そこには4つの扉があった。", -1),
  ),
  I3 = [M3],
  R3 = { key: 2, class: "story__wrap --bg-black" },
  V3 = { class: "story__container --display" },
  L3 = yt(() => b("br", null, null, -1)),
  z3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "振り返るとそこには、見知らぬ少女がいて――",
      -1,
    ),
  ),
  G3 = [z3],
  $3 = { key: 3, class: "story__wrap --bg-medama" },
  D3 = yt(() => b("div", { class: "story__container --display" }, null, -1)),
  F3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "突然の出来事に、されるがままに犯される俺。",
      -1,
    ),
  ),
  H3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "そこには、夢とは思えないほどの現実感があった。",
      -1,
    ),
  ),
  B3 = [F3, H3],
  q3 = { key: 4, class: "story__wrap --bg-city" },
  N3 = yt(() => b("div", { class: "story__container --display" }, null, -1)),
  U3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "会社と家を往復するだけの日々を送っていた俺は、その夢を忘れることができなかった。",
      -1,
    ),
  ),
  j3 = [U3],
  W3 = { key: 5, class: "story__wrap --bg-black" },
  Q3 = { class: "story__container --display" },
  K3 = yt(() =>
    b(
      "p",
      { class: "story__text" },
      "さて、今日はどんなエッチな夢を見られるかな？",
      -1,
    ),
  ),
  Y3 = [K3],
  Z3 = { class: "story__controller" },
  J3 = { key: 0, src: g3, alt: "" },
  X3 = { key: 1, src: m3, alt: "" },
  e4 = { key: 0 },
  t4 = { key: 1 },
  i4 = { class: "story__label" },
  Sr = 6,
  n4 = We({
    __name: "TheStory",
    setup(t) {
      const e = we(0),
        i = we(!0),
        n = (s) => {
          e.value = (e.value + s) % Sr;
        };
      return (s, o) => (
        $(),
        B("section", v3, [
          x3,
          e.value === 0
            ? ($(),
              B("div", S3, [
                P3,
                b(
                  "div",
                  {
                    class: Z([
                      "story__container --text",
                      { "is-hidden": !i.value },
                    ]),
                  },
                  T3,
                  2,
                ),
              ]))
            : Se("", !0),
          e.value === 1
            ? ($(),
              B("div", A3, [
                b("div", E3, [
                  b("div", k3, [
                    J(Qs, { "door-type": "elena" }),
                    J(Qs, { "door-type": "saki" }),
                    J(Qs, { "door-type": "chloe" }),
                    J(Qs, { "door-type": "seira" }),
                  ]),
                ]),
                b(
                  "div",
                  {
                    class: Z([
                      "story__container --text",
                      { "is-hidden": !i.value },
                    ]),
                  },
                  I3,
                  2,
                ),
              ]))
            : Se("", !0),
          e.value === 2
            ? ($(),
              B("div", R3, [
                b("div", V3, [
                  J(
                    nu,
                    { character: "medama" },
                    {
                      default: Ji(() => [
                        vn("ふっ、ふっ、ふー！ ねえ、悪魔って、"),
                        L3,
                        vn("ホントに存在していると思うー？"),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                b(
                  "div",
                  {
                    class: Z([
                      "story__container --text",
                      { "is-hidden": !i.value },
                    ]),
                  },
                  G3,
                  2,
                ),
              ]))
            : Se("", !0),
          e.value === 3
            ? ($(),
              B("div", $3, [
                D3,
                b(
                  "div",
                  {
                    class: Z([
                      "story__container --text",
                      { "is-hidden": !i.value },
                    ]),
                  },
                  B3,
                  2,
                ),
              ]))
            : Se("", !0),
          e.value === 4
            ? ($(),
              B("div", q3, [
                N3,
                b(
                  "div",
                  {
                    class: Z([
                      "story__container --text",
                      { "is-hidden": !i.value },
                    ]),
                  },
                  j3,
                  2,
                ),
              ]))
            : Se("", !0),
          e.value === 5
            ? ($(),
              B("div", W3, [
                b("div", Q3, [
                  J(
                    nu,
                    { character: "haruto" },
                    { default: Ji(() => [vn("……おやすみ、現実")]), _: 1 },
                  ),
                ]),
                b(
                  "div",
                  {
                    class: Z([
                      "story__container --text",
                      { "is-hidden": !i.value },
                    ]),
                  },
                  Y3,
                  2,
                ),
              ]))
            : Se("", !0),
          b("div", Z3, [
            b(
              "button",
              {
                class: "story__button --text-switch",
                onClick: o[0] || (o[0] = (r) => (i.value = !i.value)),
              },
              [i.value ? ($(), B("img", J3)) : ($(), B("img", X3))],
            ),
            b(
              "button",
              {
                class: Z([
                  "story__button --next",
                  { "is-last": e.value === 5 },
                ]),
                onClick: o[1] || (o[1] = (r) => n(1)),
              },
              [
                e.value === Sr - 1
                  ? ($(), B("span", e4, "最初へ戻る"))
                  : ($(), B("span", t4, "次へ")),
              ],
              2,
            ),
            b("p", i4, St(e.value + 1) + " / " + St(Sr), 1),
          ]),
        ])
      );
    },
  }),
  s4 = Ze(n4, [["__scopeId", "data-v-686dd9b3"]]),
  o4 = "/dreaming-quintet/images/heading_about.svg",
  r4 = "/dreaming-quintet/images/map_01.png",
  a4 = "/dreaming-quintet/images/map_02.png",
  l4 = "/dreaming-quintet/images/map_03.png",
  c4 = "/dreaming-quintet/images/map_04.png",
  u4 = "/dreaming-quintet/images/map_05.png",
  h4 = "/dreaming-quintet/images/map_01_thumb.png",
  d4 = "/dreaming-quintet/images/map_02_thumb.png",
  f4 = "/dreaming-quintet/images/map_03_thumb.png",
  p4 = "/dreaming-quintet/images/map_04_thumb.png",
  g4 = "/dreaming-quintet/images/map_05_thumb.png",
  m4 = { id: "about", class: "about" },
  _4 = { class: "about__inner" },
  y4 = si(
    '<h2 class="about__heading" data-v-c4d3fc0f><img src="' +
      o4 +
      '" alt="ABOUT" data-v-c4d3fc0f></h2><div class="about__wrap" data-v-c4d3fc0f><p class="about__text" data-v-c4d3fc0f>主人公は仕事で疲れて、美少女ばかり登場する不思議な夢を見るようになってしまいました。</p><p class="about__text" data-v-c4d3fc0f>エッチなことを求めて、夢の中を歩き回りましょう。</p></div>',
    2,
  ),
  b4 = { class: "about__wrap" },
  w4 = ["onMouseover", "onClick"],
  v4 = ["src"],
  x4 = si(
    '<div class="about__wrap" data-v-c4d3fc0f><p class="about__text" data-v-c4d3fc0f>夢の中にある4つの扉の先では、それぞれ少女とのストーリーが待っています。</p><p class="about__text" data-v-c4d3fc0f>Hシーンの方向性もキャラクターによって違うので、キャラクター紹介も是非ご覧ください。</p></div><div class="about__wrap" data-v-c4d3fc0f><p class="about__text --small" data-v-c4d3fc0f>※前作『ご主人様、セイラに夢みたいないちゃラブご奉仕させていただけますか』と同じ主人公・時系列のゲームのため、</p><p class="about__text --small" data-v-c4d3fc0f>扉のうち1つのストーリーとして前作のシナリオを組み込んでおります。</p><p class="about__text --small" data-v-c4d3fc0f>前作未プレイでも楽しんでいただけます。</p></div>',
    2,
  ),
  S4 = { class: "about__wrap --image" },
  P4 = ["src"],
  C4 = We({
    __name: "TheAbout",
    setup(t) {
      const e = [r4, a4, l4, c4, u4],
        i = [h4, d4, f4, p4, g4],
        n = we(!1),
        s = we(!1),
        o = we(-1),
        r = we(-1),
        a = (u, h) => {
          ((s.value = u), (r.value = h));
        },
        l = (u) => {
          o.value = u;
        },
        c = (u) =>
          o.value === u ? "is-hovered" : o.value > -1 ? "is-disabled" : null;
      return (
        nn(() => {
          ((n.value = window.innerWidth <= 1024),
            window.addEventListener("resize", () => {
              n.value = window.innerWidth <= 1024;
            }));
        }),
        (u, h) => (
          $(),
          B("section", m4, [
            b("div", _4, [
              y4,
              b("div", b4, [
                b(
                  "ul",
                  { class: Z(["about__list", { "is-mobile": n.value }]) },
                  [
                    ($(),
                    B(
                      pe,
                      null,
                      gt(i, (d, f) =>
                        b(
                          "li",
                          {
                            key: `about-item-${f}`,
                            class: Z(["about__item", { "is-mobile": n.value }]),
                          },
                          [
                            b(
                              "button",
                              {
                                class: "about__button",
                                onMouseover: (g) => l(f),
                                onMouseleave: h[0] || (h[0] = (g) => l(-1)),
                                onClick: (g) => a(!0, f),
                              },
                              [
                                b(
                                  "img",
                                  {
                                    src: i[f],
                                    alt: "",
                                    class: Z([
                                      "about__thumbnail",
                                      n.value ? null : c(f),
                                    ]),
                                  },
                                  null,
                                  10,
                                  v4,
                                ),
                              ],
                              40,
                              w4,
                            ),
                          ],
                          2,
                        ),
                      ),
                      64,
                    )),
                  ],
                  2,
                ),
              ]),
              x4,
            ]),
            b(
              "div",
              {
                class: Z(["about__modal", { "is-visible": s.value }]),
                onClick: h[2] || (h[2] = Ut((d) => a(!1, -1), ["self"])),
              },
              [
                b("button", {
                  class: "about__button --modal-close",
                  onClick: h[1] || (h[1] = Ut((d) => a(!1, -1), ["self"])),
                }),
                b("div", S4, [
                  ($(),
                  B(
                    pe,
                    null,
                    gt(
                      5,
                      (d, f) => (
                        $(),
                        B(
                          pe,
                          null,
                          [
                            r.value === f
                              ? ($(),
                                B(
                                  "img",
                                  {
                                    key: `gallery-image-${f}`,
                                    src: e[f],
                                    alt: "",
                                    class: "about__image",
                                  },
                                  null,
                                  8,
                                  P4,
                                ))
                              : Se("", !0),
                          ],
                          64,
                        )
                      ),
                    ),
                    64,
                  )),
                ]),
              ],
              2,
            ),
          ])
        )
      );
    },
  }),
  O4 = Ze(C4, [["__scopeId", "data-v-c4d3fc0f"]]),
  T4 = "/dreaming-quintet/images/heading_character.svg",
  A4 = "/dreaming-quintet/assets/chloe1-B253-gq9.mp3",
  E4 = "/dreaming-quintet/assets/chloe2-34GF7JMm.mp3",
  k4 = "/dreaming-quintet/assets/chloe3-tknUSN2d.mp3",
  M4 = "/dreaming-quintet/sounds/chloe4.mp3",
  I4 = "/dreaming-quintet/sounds/chloe5.mp3",
  R4 = "/dreaming-quintet/sounds/chloe6.mp3",
  V4 = "/dreaming-quintet/assets/medama1-Vujcvgs-.mp3",
  L4 = "/dreaming-quintet/assets/medama2-Bji3lQ8I.mp3",
  z4 = "/dreaming-quintet/assets/medama3-C_8kfGS_.mp3",
  G4 = "/dreaming-quintet/sounds/medama4.mp3",
  $4 = "/dreaming-quintet/sounds/medama5.mp3",
  D4 = "/dreaming-quintet/sounds/medama6.mp3",
  F4 = "/dreaming-quintet/assets/seira1-Co29ay_8.mp3",
  H4 = "/dreaming-quintet/assets/seira2-BoHJINnf.mp3",
  B4 = "/dreaming-quintet/assets/seira3-ffjMEx5p.mp3",
  q4 = "/dreaming-quintet/sounds/seira4.mp3",
  N4 = "/dreaming-quintet/sounds/seira5.mp3",
  U4 = "/dreaming-quintet/sounds/seira6.mp3",
  j4 = "/dreaming-quintet/assets/saki1-ZedBBXO_.mp3",
  W4 = "/dreaming-quintet/assets/saki2-SS-wJMQy.mp3",
  Q4 = "/dreaming-quintet/assets/saki3-5GvtCBBA.mp3",
  K4 = "/dreaming-quintet/sounds/saki4.mp3",
  Y4 = "/dreaming-quintet/sounds/saki5.mp3",
  Z4 = "/dreaming-quintet/sounds/saki6.mp3",
  J4 = "/dreaming-quintet/assets/elena1-6Lq-pAR5.mp3",
  X4 = "/dreaming-quintet/assets/elena2-BINkfnIJ.mp3",
  e5 = "/dreaming-quintet/assets/elena3-CXYHU7hU.mp3",
  t5 = "/dreaming-quintet/sounds/elena4.mp3",
  i5 = "/dreaming-quintet/sounds/elena5.mp3",
  n5 = "/dreaming-quintet/sounds/elena6.mp3",
  s5 = (t) => (Ti("data-v-c8de4337"), (t = t()), Ai(), t),
  o5 = { class: "sample-voice" },
  r5 = s5(() => b("p", { class: "sample-voice__label" }, "Sample Voice", -1)),
  a5 = { key: 0, class: "sample-voice__list" },
  l5 = { class: "sample-voice__item" },
  c5 = { class: "sample-voice__item" },
  u5 = ["onClick"],
  h5 = We({
    __name: "SampleVoice",
    props: { character: { default: "chloe" } },
    emits: ["onPlayingVoice"],
    setup(t, { emit: e }) {
      const i = {
          chloe: {
            data: [A4, E4, k4, M4, I4, R4],
            state: [
              { label: "1", time: 11, isAvailable: !0 },
              { label: "2", time: 2, isAvailable: !0 },
              { label: "3", time: 7, isAvailable: !0 },
              { label: "4", time: 20, isAvailable: !0 },
              { label: "5", time: 16, isAvailable: !0 },
              { label: "6", time: 16, isAvailable: !0 },
            ],
          },
          medama: {
            data: [V4, L4, z4, G4, $4, D4],
            state: [
              { label: "1", time: 9, isAvailable: !0 },
              { label: "2", time: 7, isAvailable: !0 },
              { label: "3", time: 6, isAvailable: !0 },
              { label: "4", time: 18, isAvailable: !0 },
              { label: "5", time: 24, isAvailable: !0 },
              { label: "6", time: 16, isAvailable: !0 },
            ],
          },
          seira: {
            data: [F4, H4, B4, q4, N4, U4],
            state: [
              { label: "1", time: 7, isAvailable: !0 },
              { label: "2", time: 10, isAvailable: !0 },
              { label: "3", time: 7, isAvailable: !0 },
              { label: "4", time: 22, isAvailable: !0 },
              { label: "5", time: 10, isAvailable: !0 },
              { label: "6", time: 16, isAvailable: !0 },
            ],
          },
          saki: {
            data: [j4, W4, Q4, K4, Y4, Z4],
            state: [
              { label: "1", time: 9, isAvailable: !0 },
              { label: "2", time: 9, isAvailable: !0 },
              { label: "3", time: 9, isAvailable: !0 },
              { label: "4", time: 14, isAvailable: !0 },
              { label: "5", time: 20, isAvailable: !0 },
              { label: "6", time: 9, isAvailable: !0 },
            ],
          },
          elena: {
            data: [J4, X4, e5, t5, i5, n5],
            state: [
              { label: "1", time: 9, isAvailable: !0 },
              { label: "2", time: 19, isAvailable: !0 },
              { label: "3", time: 5, isAvailable: !0 },
              { label: "4", time: 9, isAvailable: !0 },
              { label: "5", time: 22, isAvailable: !0 },
              { label: "6", time: 9, isAvailable: !0 },
            ],
          },
        },
        n = we(-1),
        s = we(0.3),
        o = we(null),
        r = we(!1),
        a = we(!1),
        l = we(null),
        c = we(!1),
        u = t,
        h = e;
      Yn(s, () => {
        o.value !== null && (o.value.volume = s.value);
      });
      const d = Lo(() => {
          if (s.value === 0) return "--none";
          if (s.value === 0.3) return "--small";
          if (s.value === 0.6) return "--medium";
          if (s.value === 1) return "--large";
        }),
        f = () => {
          if (s.value === 0) {
            s.value = 0.3;
            return;
          }
          if (s.value === 0.3) {
            s.value = 0.6;
            return;
          }
          if (s.value === 0.6) {
            s.value = 1;
            return;
          }
          if (s.value === 1) {
            s.value = 0;
            return;
          }
        },
        g = () => {
          (o.value.pause(),
            (o.value.currentTime = 0),
            (r.value = !1),
            (a.value = !1),
            (n.value = -1),
            h("onPlayingVoice", a.value));
        },
        p = () => {
          a.value && (clearTimeout(l.value), g());
        },
        y = async (w) => {
          if (r.value) return;
          r.value = !0;
          const x = i[u.character].data;
          if (x === null) return;
          ((n.value = w),
            (o.value = await new Audio(x[n.value])),
            (o.value.volume = s.value),
            await o.value.play(),
            (a.value = !0),
            h("onPlayingVoice", a.value));
          const C = i[u.character].state[n.value].time;
          l.value = setTimeout(
            () => {
              g();
            },
            C * 1e3 + 1e3,
          );
        };
      return (
        nn(() => {
          const w = navigator.userAgent;
          ((c.value =
            w.includes("iPhone") || w.includes("iPad") || w.includes("iPod")),
            c.value && (s.value = 0.6));
        }),
        (w, x) => (
          $(),
          B("div", o5, [
            r5,
            w.character === "chloe" ||
            w.character === "medama" ||
            w.character === "seira" ||
            w.character === "saki" ||
            w.character === "elena"
              ? ($(),
                B("ul", a5, [
                  b("li", l5, [
                    b(
                      "button",
                      {
                        class: Z(["sample-voice__button --volume", [d.value]]),
                        onClick: x[0] || (x[0] = (C) => f()),
                      },
                      null,
                      2,
                    ),
                  ]),
                  ($(!0),
                  B(
                    pe,
                    null,
                    gt(
                      i[w.character].state,
                      (C, v) => (
                        $(),
                        B("li", c5, [
                          r.value && v === n.value
                            ? ($(),
                              B(
                                "button",
                                {
                                  key: 0,
                                  class: Z([
                                    "sample-voice__button --stop",
                                    [`--${w.character}`, v > 2 && "is-adult"],
                                  ]),
                                  onClick: x[1] || (x[1] = (k) => p()),
                                },
                                "■",
                                2,
                              ))
                            : ($(),
                              B(
                                "button",
                                {
                                  key: 1,
                                  class: Z([
                                    "sample-voice__button",
                                    [
                                      `--${w.character}`,
                                      { "is-disable": !C.isAvailable },
                                      v > 2 && "is-adult",
                                    ],
                                  ]),
                                  onClick: (k) => y(v),
                                },
                                St(C.label),
                                11,
                                u5,
                              )),
                        ])
                      ),
                    ),
                    256,
                  )),
                ]))
              : Se("", !0),
          ])
        )
      );
    },
  }),
  jn = Ze(h5, [["__scopeId", "data-v-c8de4337"]]),
  d5 = "",
  f5 = "",
  p5 = "",
  g5 = "",
  m5 = "",
  _5 = { key: 0, class: "character-full-image", src: d5, alt: "" },
  y5 = { key: 1, class: "character-full-image", src: f5, alt: "" },
  b5 = { key: 2, class: "character-full-image", src: p5, alt: "" },
  w5 = { key: 3, class: "character-full-image", src: g5, alt: "" },
  v5 = { key: 4, class: "character-full-image", src: m5, alt: "" },
  x5 = We({
    __name: "CharacterFullImage",
    props: { character: { default: "" } },
    setup(t) {
      return (e, i) => (
        $(),
        B(
          pe,
          null,
          [
            e.character === "chloe" ? ($(), B("img", _5)) : Se("", !0),
            e.character === "medama" ? ($(), B("img", y5)) : Se("", !0),
            e.character === "seira" ? ($(), B("img", b5)) : Se("", !0),
            e.character === "saki" ? ($(), B("img", w5)) : Se("", !0),
            e.character === "elena" ? ($(), B("img", v5)) : Se("", !0),
          ],
          64,
        )
      );
    },
  }),
  Wn = Ze(x5, [["__scopeId", "data-v-ba9ab6fe"]]),
  xe = (t) => (Ti("data-v-edba7275"), (t = t()), Ai(), t),
  S5 = { id: "character", class: "character" },
  P5 = xe(() =>
    b(
      "h2",
      { class: "character__heading" },
      [b("img", { src: T4, alt: "CHARACTER" })],
      -1,
    ),
  ),
  C5 = { class: "character__list" },
  O5 = { key: 0, class: "character__detail --chloe" },
  T5 = xe(() =>
    b(
      "h3",
      { class: "character__name" },
      [
        b("span", { class: "character__name--main" }, "クロエ"),
        b("span", { class: "character__name--sub --chloe" }, "Chloe"),
      ],
      -1,
    ),
  ),
  A5 = xe(() => b("h4", { class: "character__actor" }, "CV : 狐今 あまね", -1)),
  E5 = si(
    '<p class="character__lines" data-v-edba7275><span class="character__line --chloe" data-v-edba7275>わかんない。クロエは何も知らないもん。</span><br data-v-edba7275><span class="character__line --chloe" data-v-edba7275>目覚めたら、遥人がいたの。ただ、それだけ。</span></p><div class="character__profile" data-v-edba7275><p class="character__text" data-v-edba7275>夢の中に登場する、わがままで寂しがりやな少女。</p><p class="character__text" data-v-edba7275>ツンツンした口ぶりだが夢の中のことも、それ以外のことも知らないことが多く、いつも遥人を頼っている。</p><p class="character__text" data-v-edba7275>成長している見かけのわりには、恥じらいなども持っておらず、少し手が焼ける。</p><p class="character__text" data-v-edba7275>色々と教えてあげる必要があるかもしれない。</p><p class="character__text" data-v-edba7275>目玉ちゃんと仲が良く、余計なこと（？）を覚えてくることもしばしば。</p></div>',
    2,
  ),
  k5 = xe(() =>
    b("li", { class: "character__item --status" }, "身長 : 138cm", -1),
  ),
  M5 = xe(() =>
    b("li", { class: "character__item --status" }, "バスト : B", -1),
  ),
  I5 = xe(() =>
    b(
      "li",
      { class: "character__item --status" },
      "Hシーンの傾向 : 無知・ラブラブえっち（スパンキングなどお仕置き系のHあり）",
      -1,
    ),
  ),
  R5 = [k5, M5, I5],
  V5 = { key: 1, class: "character__detail --medama" },
  L5 = xe(() =>
    b(
      "h3",
      { class: "character__name" },
      [
        b("span", { class: "character__name--main" }, "目玉ちゃん"),
        b("span", { class: "character__name--sub --medama" }, "Medama-chan"),
      ],
      -1,
    ),
  ),
  z5 = xe(() => b("h4", { class: "character__actor" }, "CV : 胡桃 ふゅ", -1)),
  G5 = si(
    '<p class="character__lines" data-v-edba7275><span class="character__line --medama" data-v-edba7275>もっともっと、女の子たちと楽しい時間を過ごそうよ。</span><br data-v-edba7275><span class="character__line --medama" data-v-edba7275>欲望に正直に生きなくちゃ、人生は枯れ果てちゃうよ？</span></p><div class="character__profile" data-v-edba7275><p class="character__text" data-v-edba7275>夢の中に登場する、目玉の髪飾りの謎の少女。</p><p class="character__text" data-v-edba7275>夢の中について、色々と知っていそうな口ぶり。</p><p class="character__text" data-v-edba7275>会うたびに遥人を性的な意味で弄ぶ上、他の少女たちともエッチなことをするよう、そそのかしてくる。</p><p class="character__text" data-v-edba7275>クロエを可愛がっている。</p></div>',
    2,
  ),
  $5 = xe(() =>
    b("li", { class: "character__item --status" }, "身長 : 142cm", -1),
  ),
  D5 = xe(() =>
    b("li", { class: "character__item --status" }, "バスト : A ～ B", -1),
  ),
  F5 = xe(() =>
    b(
      "li",
      { class: "character__item --status" },
      "Hシーンの傾向 : 主人公を弄ぶえっち（逆転お仕置き系のHあり）",
      -1,
    ),
  ),
  H5 = [$5, D5, F5],
  B5 = { key: 2, class: "character__detail --seira" },
  q5 = xe(() =>
    b(
      "h3",
      { class: "character__name" },
      [
        b("span", { class: "character__name--main" }, "セイラ"),
        b("span", { class: "character__name--sub --seira" }, "Seira"),
      ],
      -1,
    ),
  ),
  N5 = xe(() => b("h4", { class: "character__actor" }, "CV : 花影 蛍", -1)),
  U5 = si(
    '<p class="character__lines" data-v-edba7275><span class="character__line --seira" data-v-edba7275>ふふ。どうかご遠慮なさらずに。</span><br data-v-edba7275><span class="character__line --seira" data-v-edba7275>あなた様はこのお屋敷のご主人様なのですから。</span></p><div class="character__profile" data-v-edba7275><p class="character__text" data-v-edba7275>夢の中のお屋敷に登場するメイドさん。</p><p class="character__text" data-v-edba7275>礼儀正しく、お屋敷の家事をそつなくこなし、紅茶を淹れるのが上手で、遥人の仕事の愚痴も聞いてくれる。</p><p class="character__text" data-v-edba7275>遥人には釣り合わないのではないかという完璧さ。</p><p class="character__text" data-v-edba7275>自分の立場をわきまえすぎており、少々堅苦しい部分もあるが、従順なメイドはエッチな命令にも従ってくれるに違いない。 </p></div>',
    2,
  ),
  j5 = xe(() =>
    b("li", { class: "character__item --status" }, "身長 : 162cm", -1),
  ),
  W5 = xe(() =>
    b("li", { class: "character__item --status" }, "バスト : G", -1),
  ),
  Q5 = xe(() =>
    b(
      "li",
      { class: "character__item --status" },
      "Hシーンの傾向 : ラブラブえっち",
      -1,
    ),
  ),
  K5 = [j5, W5, Q5],
  Y5 = { key: 3, class: "character__detail --saki" },
  Z5 = xe(() =>
    b(
      "h3",
      { class: "character__name" },
      [
        b("span", { class: "character__name--main" }, "咲祈"),
        b("span", { class: "character__name--sub --saki" }, "Saki"),
      ],
      -1,
    ),
  ),
  J5 = xe(() => b("h4", { class: "character__actor" }, "CV : 白月 かなめ", -1)),
  X5 = si(
    '<p class="character__lines" data-v-edba7275><span class="character__line --saki" data-v-edba7275>ち、違います……っ！ 私は、清らかなシスターです！</span><br data-v-edba7275><span class="character__line --saki" data-v-edba7275>あんな破廉恥なことを求めているはずが……！！</span></p><div class="character__profile" data-v-edba7275><p class="character__text" data-v-edba7275>夢の中に登場するが、現実でも見かけたことがある気がする少女。</p><p class="character__text" data-v-edba7275>教会に併設されている孤児院で育ち、シスター見習いをしている。</p><p class="character__text" data-v-edba7275>信心深く、孤児院の子どもたちからも慕われている。</p><p class="character__text" data-v-edba7275>花のお世話と読書が好き。引っ込み思案な性格をしており、遥人と話すときも緊張気味。</p><p class="character__text" data-v-edba7275>でも、そんな子はエッチなことばかり考えているに決まっている。</p></div>',
    2,
  ),
  eO = xe(() =>
    b("li", { class: "character__item --status" }, "身長 : 154cm", -1),
  ),
  tO = xe(() =>
    b("li", { class: "character__item --status" }, "バスト : F", -1),
  ),
  iO = xe(() =>
    b(
      "li",
      { class: "character__item --status" },
      "Hシーンの傾向 : ラブラブえっち",
      -1,
    ),
  ),
  nO = [eO, tO, iO],
  sO = { key: 4, class: "character__detail --elena" },
  oO = xe(() =>
    b(
      "h3",
      { class: "character__name" },
      [
        b("span", { class: "character__name--main" }, "エレナ"),
        b("span", { class: "character__name--sub --elena" }, "Elena"),
      ],
      -1,
    ),
  ),
  rO = xe(() => b("h4", { class: "character__actor" }, "CV : 藍沢 夏癒", -1)),
  aO = si(
    '<p class="character__lines" data-v-edba7275><span class="character__line --elena" data-v-edba7275>奴隷の首輪。お前は面白そうだから、私が飼ってやる。</span><br data-v-edba7275><span class="character__line --elena" data-v-edba7275>しばらくはいい暇潰しになりそうだな。</span></p><div class="character__profile" data-v-edba7275><p class="character__text" data-v-edba7275>夢の中で、セイラさんとは別のお屋敷に住んでいる男嫌いな少女。</p><p class="character__text" data-v-edba7275>ミニスカートのメイドを従えており、彼女らと夜な夜なHなことをしているが本当は好きな相手が居るようだ。</p><p class="character__text" data-v-edba7275>年相応に悩んでおり、少し破壊的な衝動がある。</p><p class="character__text" data-v-edba7275>遥人のことは、万が一壊れてもどうでも良い玩具程度にしか思っていない。</p></div>',
    2,
  ),
  lO = xe(() =>
    b("li", { class: "character__item --status" }, "身長 : 148cm", -1),
  ),
  cO = xe(() =>
    b("li", { class: "character__item --status" }, "バスト : A～B", -1),
  ),
  uO = xe(() =>
    b(
      "li",
      { class: "character__item --status" },
      "Hシーンの傾向 : 逆転無し・無慈悲なプレイ・レズセ",
      -1,
    ),
  ),
  hO = [lO, cO, uO],
  dO = { key: 5, class: "character__detail --haruto" },
  fO = si(
    '<h3 class="character__name --haruto" data-v-edba7275><span class="character__name--main" data-v-edba7275>渡利 遥人</span><span class="character__name--sub --haruto" data-v-edba7275>Watari Haruto</span></h3><p class="character__lines" data-v-edba7275><span class="character__line --haruto" data-v-edba7275>…… 仕事、いきたくねえ……</span></p><div class="character__profile" data-v-edba7275><p class="character__text --haruto" data-v-edba7275>主人公。</p><p class="character__text --haruto" data-v-edba7275>社会人数年目、一人暮らしの若者。</p><p class="character__text --haruto" data-v-edba7275>仕事で毎日へとへと。</p><p class="character__text --haruto" data-v-edba7275>缶チューハイとカップ麺やコンビニ弁当を食べ、寝るだけの日々を送っている。</p></div>',
    3,
  ),
  pO = [fO],
  gO = We({
    __name: "TheCharacter",
    setup(t) {
      const e = ["chloe", "medama", "seira", "saki", "elena", "haruto"],
        i = we("chloe"),
        n = we(!1),
        s = we(!1),
        o = (l) => {
          s.value || ((i.value = l), (n.value = !1));
        },
        r = () => {
          n.value = !n.value;
        },
        a = (l) => {
          s.value = l;
        };
      return (l, c) => (
        $(),
        B("div", S5, [
          P5,
          b("ul", C5, [
            ($(),
            B(
              pe,
              null,
              gt(e, (u) =>
                b(
                  "li",
                  { key: `character-item-${u}`, class: "character__item" },
                  [
                    J(rd, { character: u, onClick: (h) => o(u) }, null, 8, [
                      "character",
                      "onClick",
                    ]),
                  ],
                ),
              ),
              64,
            )),
          ]),
          i.value === "chloe"
            ? ($(),
              B("div", O5, [
                T5,
                A5,
                b(
                  "div",
                  { class: Z(["character__modal", { "is-visible": n.value }]) },
                  [
                    E5,
                    b(
                      "ul",
                      {
                        class: Z([
                          "character__list --status",
                          [`--${i.value}`],
                        ]),
                      },
                      R5,
                      2,
                    ),
                  ],
                  2,
                ),
                J(jn, { character: "chloe", onOnPlayingVoice: a }),
                J(Wn, { character: "chloe" }),
                b(
                  "button",
                  {
                    class: Z([
                      "character__button --open-modal",
                      [`--${i.value}`, { "is-visible": n.value }],
                    ]),
                    onClick: c[0] || (c[0] = (u) => r()),
                  },
                  null,
                  2,
                ),
              ]))
            : Se("", !0),
          i.value === "medama"
            ? ($(),
              B("div", V5, [
                L5,
                z5,
                b(
                  "div",
                  { class: Z(["character__modal", { "is-visible": n.value }]) },
                  [
                    G5,
                    b(
                      "ul",
                      {
                        class: Z([
                          "character__list --status",
                          [`--${i.value}`],
                        ]),
                      },
                      H5,
                      2,
                    ),
                  ],
                  2,
                ),
                J(jn, { character: "medama", onOnPlayingVoice: a }),
                J(Wn, { character: "medama" }),
                b(
                  "button",
                  {
                    class: Z([
                      "character__button --open-modal",
                      [`--${i.value}`, { "is-visible": n.value }],
                    ]),
                    onClick: c[1] || (c[1] = (u) => r()),
                  },
                  null,
                  2,
                ),
              ]))
            : Se("", !0),
          i.value === "seira"
            ? ($(),
              B("div", B5, [
                q5,
                N5,
                b(
                  "div",
                  { class: Z(["character__modal", { "is-visible": n.value }]) },
                  [
                    U5,
                    b(
                      "ul",
                      {
                        class: Z([
                          "character__list --status",
                          [`--${i.value}`],
                        ]),
                      },
                      K5,
                      2,
                    ),
                  ],
                  2,
                ),
                J(jn, { character: "seira", onOnPlayingVoice: a }),
                J(Wn, { character: "seira" }),
                b(
                  "button",
                  {
                    class: Z([
                      "character__button --open-modal",
                      [`--${i.value}`, { "is-visible": n.value }],
                    ]),
                    onClick: c[2] || (c[2] = (u) => r()),
                  },
                  null,
                  2,
                ),
              ]))
            : Se("", !0),
          i.value === "saki"
            ? ($(),
              B("div", Y5, [
                Z5,
                J5,
                b(
                  "div",
                  { class: Z(["character__modal", { "is-visible": n.value }]) },
                  [
                    X5,
                    b(
                      "ul",
                      {
                        class: Z([
                          "character__list --status",
                          [`--${i.value}`],
                        ]),
                      },
                      nO,
                      2,
                    ),
                  ],
                  2,
                ),
                J(jn, { character: "saki", onOnPlayingVoice: a }),
                J(Wn, { character: "saki" }),
                b(
                  "button",
                  {
                    class: Z([
                      "character__button --open-modal",
                      [`--${i.value}`, { "is-visible": n.value }],
                    ]),
                    onClick: c[3] || (c[3] = (u) => r()),
                  },
                  null,
                  2,
                ),
              ]))
            : Se("", !0),
          i.value === "elena"
            ? ($(),
              B("div", sO, [
                oO,
                rO,
                b(
                  "div",
                  { class: Z(["character__modal", { "is-visible": n.value }]) },
                  [
                    aO,
                    b(
                      "ul",
                      {
                        class: Z([
                          "character__list --status",
                          [`--${i.value}`],
                        ]),
                      },
                      hO,
                      2,
                    ),
                  ],
                  2,
                ),
                J(jn, { character: "elena", onOnPlayingVoice: a }),
                J(Wn, { character: "elena" }),
                b(
                  "button",
                  {
                    class: Z([
                      "character__button --open-modal",
                      [`--${i.value}`, { "is-visible": n.value }],
                    ]),
                    onClick: c[4] || (c[4] = (u) => r()),
                  },
                  null,
                  2,
                ),
              ]))
            : Se("", !0),
          i.value === "haruto" ? ($(), B("div", dO, pO)) : Se("", !0),
        ])
      );
    },
  }),
  mO = Ze(gO, [["__scopeId", "data-v-edba7275"]]),
  _O = "/dreaming-quintet/images/heading_gallery.svg",
  yO = "",
  bO = "/dreaming-quintet/images/mainvisual.jpg",
  wO = "",
  vO = "",
  xO = "",
  SO = "",
  PO = "",
  CO = "",
  OO = "",
  TO = "",
  AO = "",
  EO = "",
  kO = "",
  MO = "",
  Ea = (t) => (Ti("data-v-3a46a778"), (t = t()), Ai(), t),
  IO = { id: "gallery", class: "gallery" },
  RO = { class: "gallery__inner" },
  VO = Ea(() =>
    b(
      "h2",
      { class: "gallery__heading" },
      [b("img", { src: _O, alt: "GALLERY" })],
      -1,
    ),
  ),
  LO = Ea(() =>
    b(
      "img",
      { src: yO, alt: "", class: "gallery__thumbnail --mainvisual" },
      null,
      -1,
    ),
  ),
  zO = [LO],
  GO = { class: "gallery__list" },
  $O = ["onMouseover", "onClick"],
  DO = ["src"],
  FO = Ea(() =>
    b(
      "p",
      { class: "gallery__text" },
      "※图片素材取自原游戏BLACKSOULS II",
      -1,
    ),
  ),
  HO = { class: "gallery__wrap --image" },
  BO = { key: 0, src: bO, alt: "", class: "gallery__image" },
  qO = ["src"],
  NO = We({
    __name: "TheGallery",
    setup(t) {
      const e = [wO, vO, xO, SO, PO, CO],
        i = [OO, TO, AO, EO, kO, MO],
        n = we(-1),
        s = we(-1),
        o = we(!1),
        r = (c, u) => {
          ((o.value = c), (s.value = u));
        },
        a = (c) => {
          n.value = c;
        },
        l = (c) =>
          n.value === c ? "is-hovered" : n.value > -1 ? "is-disabled" : null;
      return (c, u) => (
        $(),
        B("div", IO, [
          b("div", RO, [
            VO,
            b(
              "button",
              {
                class: "gallery__button --mainvisual",
                onClick: u[0] || (u[0] = (h) => r(!0, 99)),
              },
              zO,
            ),
            b("ul", GO, [
              ($(),
              B(
                pe,
                null,
                gt(6, (h, d) =>
                  b(
                    "li",
                    { key: `gallery-item-${d}`, class: "gallery__item" },
                    [
                      b(
                        "button",
                        {
                          class: "gallery__button",
                          onMouseover: (f) => a(d),
                          onMouseleave: u[1] || (u[1] = (f) => a(-1)),
                          onClick: (f) => r(!0, d),
                        },
                        [
                          b(
                            "img",
                            {
                              src: i[d],
                              alt: "",
                              class: Z(["gallery__thumbnail", l(d)]),
                            },
                            null,
                            10,
                            DO,
                          ),
                        ],
                        40,
                        $O,
                      ),
                    ],
                  ),
                ),
                64,
              )),
            ]),
            FO,
          ]),
          b(
            "div",
            {
              class: Z(["gallery__modal", { "is-visible": o.value }]),
              onClick: u[3] || (u[3] = Ut((h) => r(!1, -1), ["self"])),
            },
            [
              b("button", {
                class: "gallery__button --modal-close",
                onClick: u[2] || (u[2] = Ut((h) => r(!1, -1), ["self"])),
              }),
              b("div", HO, [
                s.value === 99 ? ($(), B("img", BO)) : Se("", !0),
                ($(),
                B(
                  pe,
                  null,
                  gt(
                    6,
                    (h, d) => (
                      $(),
                      B(
                        pe,
                        null,
                        [
                          s.value === d
                            ? ($(),
                              B(
                                "img",
                                {
                                  key: `gallery-image-${d}`,
                                  src: e[d],
                                  alt: "",
                                  class: "gallery__image",
                                },
                                null,
                                8,
                                qO,
                              ))
                            : Se("", !0),
                        ],
                        64,
                      )
                    ),
                  ),
                  64,
                )),
              ]),
            ],
            2,
          ),
        ])
      );
    },
  }),
  UO = Ze(NO, [["__scopeId", "data-v-3a46a778"]]),
  jO = { class: "footer" },
  WO = { class: "footer__wrap" },
  QO = { class: "footer__list --product" },
  KO = { class: "footer__label" },
  YO = { class: "footer__text" },
  ZO = { class: "footer__list --staff" },
  JO = { key: 0, class: "footer__item --leader" },
  XO = { class: "footer__label" },
  e9 = { class: "footer__name --leader" },
  t9 = { class: "footer__list --sns" },
  i9 = ["href"],
  n9 = { class: "footer__label" },
  s9 = { class: "footer__list --member" },
  o9 = ["href"],
  r9 = { key: 1, class: "footer__name --member" },
  a9 = { class: "footer__copy" },
  l9 = We({
    __name: "TheFooter",
    setup(t) {
      const i = new Date().getFullYear(),
        n = [
          {
            id: "title",
            label: "项目名称",
            text: "BLACKSOULS II Minecraft Forge MOD",
          },
          { id: "release", label: "项目起始日期", text: "2026/02/23" },
          { id: "price", label: "项目完成时间", text: "未定" },
          { id: "type", label: "下载形式", text: "本页下载" },
          { id: "dev", label: "开发工具", text: "IntelliJ IDEA 2025.3.4" },
        ],
        s = [
          {
            role: "leader",
            label: "企划/监制/后期/代码",
            id: "rubisama",
            name: "HatsuYuki135",
            sns: [
              {
                label: "BILIBILI",
                url: "https://space.bilibili.com/676093670?spm_id_from=333.788.upinfo.head.click",
              },
              { label: "Github", url: "https://github.com/Shiroha135/" },
            ],
          },
          {
            role: "scenario",
            label: "地图设计",
            member: [
              { id: "rubisama", name: "HatsuYuki135", url: "https://space.bilibili.com/676093670?spm_id_from=333.788.upinfo.head.click" },
            ],
          },
        ];
      return (o, r) => (
        $(),
        B("footer", jO, [
          b("div", WO, [
            b("ul", QO, [
              ($(),
              B(
                pe,
                null,
                gt(n, (a) =>
                  b(
                    "li",
                    { key: `product-${a.id}`, class: "footer__item --product" },
                    [b("p", KO, St(a.label), 1), b("p", YO, St(a.text), 1)],
                  ),
                ),
                64,
              )),
            ]),
            b("ul", ZO, [
              ($(),
              B(
                pe,
                null,
                gt(
                  s,
                  (a) => (
                    $(),
                    B(
                      pe,
                      { key: `staff-${a.role}` },
                      [
                        a.role === "leader"
                          ? ($(),
                            B("li", JO, [
                              b("p", XO, St(a.label), 1),
                              b("p", e9, St(a.name), 1),
                              b("ul", t9, [
                                ($(!0),
                                B(
                                  pe,
                                  null,
                                  gt(
                                    a.sns,
                                    (l) => (
                                      $(),
                                      B(
                                        "li",
                                        {
                                          key: `sns-${l.label}`,
                                          class: "footer__item --sns",
                                        },
                                        [
                                          b(
                                            "a",
                                            {
                                              href: l.url,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              class: "footer__link --sns",
                                            },
                                            St(l.label),
                                            9,
                                            i9,
                                          ),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]))
                          : ($(),
                            B(
                              "li",
                              {
                                key: 1,
                                class: Z(["footer__item", `--${a.role}`]),
                              },
                              [
                                b("p", n9, St(a.label), 1),
                                b("ul", s9, [
                                  ($(!0),
                                  B(
                                    pe,
                                    null,
                                    gt(
                                      a.member,
                                      (l) => (
                                        $(),
                                        B(
                                          "li",
                                          {
                                            key: `member-${l.id}`,
                                            class: "footer__item --member",
                                          },
                                          [
                                            l.url
                                              ? ($(),
                                                B(
                                                  "a",
                                                  {
                                                    key: 0,
                                                    href: l.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    class:
                                                      "footer__link --member",
                                                  },
                                                  St(l.name),
                                                  9,
                                                  o9,
                                                ))
                                              : ($(),
                                                B("span", r9, St(l.name), 1)),
                                          ],
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ],
                              2,
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                64,
              )),
            ]),
          ]),
          b("p", a9, "© " + St(ii(i)) + " HatsuYukiAya初雪绫", 1),
        ])
      );
    },
  }),
  c9 = Ze(l9, [["__scopeId", "data-v-5a1ac622"]]),
  u9 = We({
    __name: "App",
    setup(t) {
      return (e, i) => (
        $(),
        B(
          pe,
          null,
          [
            J(zP),
            J(XP),
            J(nC),
            J(mC),
            J(JC2),
            J(AC),
            J(f3),
            J(c9),
          ],
          64,
        )
      );
    },
  }),
  h9 = $p(u9),
  d9 = DP();
h9.use(d9).mount("#app");
