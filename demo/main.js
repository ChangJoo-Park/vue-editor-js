import Vue from 'vue'
import App from './Demo'

// Use it as Plugin
// import Editor from '../src'
// Vue.use(Editor)

Vue.config.productionTip = false

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(App)
}).$mount('#app')
