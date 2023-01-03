import { reactive as a, toRefs as c, openBlock as r, createElementBlock as l, normalizeStyle as u } from "vue";
const f = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, s] of e)
    t[o] = s;
  return t;
}, p = {
  name: "auv-button",
  props: {
    style: Object
  },
  setup: (n, e) => {
    const t = a({});
    return {
      ...c(n),
      context: e,
      ...c(t)
    };
  }
};
function i(n, e, t, o, s, y) {
  return r(), l("button", {
    style: u(t.style)
  }, " aaaaa ", 4);
}
const _ = /* @__PURE__ */ f(p, [["render", i]]);
function m(n) {
  return n.install;
}
function d(n) {
  [
    _
  ].forEach((t) => {
    m(t) ? n.use(t) : t.name && n.component(t.name, t);
  });
}
const x = { install: d };
export {
  _ as Button,
  x as default,
  d as install
};
