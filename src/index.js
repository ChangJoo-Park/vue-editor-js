const version = '__VERSION__'
import EditorComponent from './Editor.vue'

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Editor', EditorComponent)
}

const plugin = {
  install,
  version
}

export const Editor = EditorComponent

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
