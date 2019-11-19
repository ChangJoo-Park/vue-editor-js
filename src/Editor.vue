<template>
  <div id="vue-editor-js">
    <div :id="props.holderId"/>
    <button :id="`${props.holderId}-button`" @click="save" style="display: none;"/>
  </div>
</template>

<script>
import { createComponent, reactive, onMounted, watch, createElement } from '@vue/composition-api'
import EditorJS from '@editorjs/editorjs'

const DEFAULT_OBJECT_PROP = {
  type: Object,
  default: () => {},
  required: false
}
const DEFAULT_BOOLEAN_PROP = {
  type: Boolean,
  default: () => false,
  required: false
}
const PLUGIN_PROPS = ['header', 'list', 'code', 'inlineCode', 'embed', 'link', 'marker', 'table', 'raw', 'delimiter', 'quote', 'image', 'warning', 'paragraph', 'checklist']
const PLUGIN_PROPS_TYPE = {
  type: [Boolean, Object],
  default: () => false,
  required: false
}

const PLUGINS = {
  header: require('@editorjs/header'),
  list: require('@editorjs/list'),
  image: require('@editorjs/image'),
  inlineCode: require('@editorjs/inline-code'),
  embed: require('@editorjs/embed'),
  quote: require('@editorjs/quote'),
  marker: require('@editorjs/marker'),
  code: require('@editorjs/code'),
  link: require('@editorjs/link'),
  delimiter: require('@editorjs/delimiter'),
  raw: require('@editorjs/raw'),
  table: require('@editorjs/table'),
  warning: require('@editorjs/warning'),
  paragraph: require('@editorjs/paragraph'),
  checklist: require('@editorjs/checklist')
}

const props = {
  holderId: {
    type: String,
    default: () => 'codex-editor',
    required: false
  },
  autofocus: DEFAULT_BOOLEAN_PROP,
  initData: DEFAULT_OBJECT_PROP,
  customTools: DEFAULT_OBJECT_PROP,
  ...PLUGIN_PROPS.map(_ => PLUGIN_PROPS_TYPE),
}

function useTools (props) {
  const pluginKeys = Object.keys(PLUGINS)
  const tools = { ...props.customTools }

  /**
   * When plugin props are empty, enable all plugins
   */
  if (pluginKeys.every(p => !props[p])) {
    pluginKeys.forEach(key => tools[key] = { class: PLUGINS[key] })
    return tools
  }

  pluginKeys.forEach(key => {
    const prop = props[key]
    if (!prop) {
      return
    }

    tools[key] = { class: PLUGINS[key] }

    if (typeof prop === 'object') {
      const options = Object.assign({}, props[key])
      delete options['class'] // Prevent merge wrong `class`
      tools[key] = Object.assign(tools[key], options)
    }
  })

  return tools
}

export default createComponent({
  name: 'vue-editor-js',
  props,
  setup: (props, context) => {
    const state = reactive({ editor: null })

    function initEditor (props) {
      destroyEditor()

      const { holderId: holder, autofocus, initData: data } = props
      state.editor = new EditorJS({
        holder,
        autofocus,
        data,
        tools: useTools(props),
        onReady: () => context.emit('ready'),
        onChange: () => context.emit('change')
      })
    }

    function destroyEditor() {
      if (state.editor) {
        state.editor.destroy();
        state.editor = null
      }
    }

    function save() {
      if (!state.editor) {
        return
      }

      state.editor.save()
        .then((result) => context.emit('save', result))
        .catch((err) => console.error(err))
    }

    onMounted(_ => initEditor(props))

    watch(_ => props.initData, _ => initEditor)

    return { props, state, save }
  }
})
</script>