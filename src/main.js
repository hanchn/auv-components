
import Button from "./components/Button/index.vue"

function isPlugin(item){
  return item.install
}

export function install(Vue) {
  const components = [Button, Layout]
  components.forEach(item => {
    if (isPlugin(item)) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

export {
  Button
}

export default { install }
