<template>
  <div id="vue-editor-js">
    <div :id="props.holderId"/>
    <button :id="`${props.holderId}-button`" @click="save" style="display: none;"/>
  </div>
</template>

<script>
import { createComponent, reactive, onMounted, watch, createElement } from '@vue/composition-api'
import EditorJS from '@editorjs/editorjs'
import {
  DEFAULT_OBJECT_PROP,
  DEFAULT_BOOLEAN_PROP,
  PLUGIN_PROPS_TYPE,
  PLUGIN_PROPS,
  PLUGINS,
  useTools
} from './utils'


export default createComponent({
  name: 'vue-editor-js',
  props: {
    holderId: {
      type: String,
      default: () => 'codex-editor',
      required: false
    },
    autofocus: DEFAULT_BOOLEAN_PROP,
    initData: DEFAULT_OBJECT_PROP,
    customTools: DEFAULT_OBJECT_PROP,
    config: DEFAULT_OBJECT_PROP,
    ...PLUGIN_PROPS.map(_ => PLUGIN_PROPS_TYPE),
  },
  setup: (props, context) => {
    const state = reactive({ editor: null })

    function initEditor (props) {
      destroyEditor()

      const { holderId: holder, autofocus, initData: data, config } = props
      console.log(config)
      const tools = useTools(props, config)

      state.editor = new EditorJS({
        holder,
        autofocus,
        data,
        tools,
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