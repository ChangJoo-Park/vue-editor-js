const version = '__VERSION__'
import Editor from './Editor.vue'

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.prototype.$add = (a, b) => {
    return a + b
  }

  Vue.component('Editor', Editor)

  /*
   * NOTE:
   *  somthing implementation here ...
   */
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
