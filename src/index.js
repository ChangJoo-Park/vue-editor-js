import EditorComponent from './Editor.vue'

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.component('Editor', EditorComponent);
}

export function useEditorJS() {
  const editorJSPlugin = {
    install(app) {
      app.component('Editor', EditorComponent);
    },
  };

  return editorJSPlugin;
}
