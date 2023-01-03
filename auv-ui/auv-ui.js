import { reactive as c, openBlock as r, createElementBlock as a, normalizeStyle as l, renderSlot as f } from "vue";
const u = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, s] of e)
    t[o] = s;
  return t;
}, p = {
  props: {
    style: Object
  },
  setup: (n, e) => {
    const t = c({});
    return {
      ...toRefs(n),
      context: e,
      ...toRefs(t)
    };
  }
};
function i(n, e, t, o, s, y) {
  return r(), a("button", {
    style: l(t.style)
  }, [
    f(n.$slots, "default")
  ], 4);
}
const _ = /* @__PURE__ */ u(p, [["render", i]]);
function d(n) {
  return n.install;
}
function m(n) {
  [
    _
  ].forEach((t) => {
    d(t) ? n.use(t) : t.name && n.component(t.name, t);
  });
}
const $ = { install: m };
export {
  _ as auvButton,
  $ as default,
  m as install
};
