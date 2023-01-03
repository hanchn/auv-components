import { reactive as c, openBlock as r, createElementBlock as a, normalizeStyle as l, renderSlot as u } from "vue";
const f = (n, e) => {
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
function i(n, e, t, o, s, m) {
  return r(), a("button", {
    style: l(t.style)
  }, [
    u(n.$slots, "default")
  ], 4);
}
const v = /* @__PURE__ */ f(p, [["render", i]]);
function _(n) {
  return n.install;
}
function d(n) {
  [Button, Layout].forEach((t) => {
    _(t) ? n.use(t) : t.name && n.component(t.name, t);
  });
}
const B = { install: d };
export {
  v as auvButton,
  B as default,
  d as install
};
