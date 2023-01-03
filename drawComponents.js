import { readdir, writeFile } from 'node:fs/promises';

const config = {
  entry: './src/components',
  components: [],
  importList: ``,
  exportList: `\nexport {`
}

const { entry } = config
const tree = await readdir(entry)

tree.map((item, index) => { 
  let splitList = item.split('.')
  if (splitList.length === 1) { 
    let val = 'auv' + splitList[0]
    config.importList += `\nimport ${val} from "./components/${val}/index.vue"`
    config.exportList += `
  ${tree.length - 2 <= index ? val + '\n}\n' : val + ','}`
  }
})

let template = `\n
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
}\n`

template = config.importList + template + config.exportList + `\nexport default { install }\n`


writeFile('./src/main.js', template)