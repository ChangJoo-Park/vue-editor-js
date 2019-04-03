const version = '__VERSION__'
import Editor from './Editor.vue'

const install = Vue => {
  Vue.component('Editor', Editor)
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
