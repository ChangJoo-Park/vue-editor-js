/*!
 * vue-editor-js v0.1.0 
 * (c) 2019 ChangJoo Park<pcjpcj2@gmail.com>
 * Released under the MIT License.
 */
var version = '0.1.0';

var install = function install(Vue) {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */
  Vue.prototype.$add = function (a, b) {
    return a + b;
  };
  /*
   * NOTE:
   *  somthing implementation here ...
   */

};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
