import { reactive as c, openBlock as a, createElementBlock as r, normalizeStyle as l } from "vue";
const u = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, s] of e)
    t[o] = s;
  return t;
}, f = {
  name: "auv-button",
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
function p(n, e, t, o, s, d) {
  return a(), r("button", {
    style: l(t.style)
  }, " aaaaa ", 4);
}
const i = /* @__PURE__ */ u(f, [["render", p]]);
function _(n) {
  return n.install;
}
function m(n) {
  [
    i
  ].forEach((t) => {
    _(t) ? n.use(t) : t.name && n.component(t.name, t);
  });
}
const v = { install: m };
export {
  i as Button,
  v as default,
  m as install
};
