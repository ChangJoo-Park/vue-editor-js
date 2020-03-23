<template>
  <div id="vue-editor-js">
    <div :id="props.holderId"/>
    <button :id="`${props.holderId}-button`" @click="save" style="display: none;"/>
  </div>
</template>

<script>
import { createComponent, reactive, onMounted, watch } from '@vue/composition-api'
import EditorJS from '@editorjs/editorjs'
import {
  DEFAULT_OBJECT_PROP,
  DEFAULT_BOOLEAN_PROP,
  PLUGIN_PROPS_TYPE,
  PLUGIN_PROPS,
  DEFAULT_STRING_PROP,
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
    placeholder: DEFAULT_STRING_PROP,
    autofocus: DEFAULT_BOOLEAN_PROP,
    initData: DEFAULT_OBJECT_PROP,
    customTools: DEFAULT_OBJECT_PROP,
    config: DEFAULT_OBJECT_PROP,
    ...PLUGIN_PROPS.reduce((a, pluginName) => ({...a, [pluginName]: PLUGIN_PROPS_TYPE}), {}),
  },
  setup: (props, context) => {
    const state = reactive({ editor: null })

    function initEditor (props) {
      destroyEditor()

      const { holderId: holder, autofocus, initData: data, config, placeholder } = props
      console.log(config)
      const tools = useTools(props, config)

      state.editor = new EditorJS({
        holder,
        autofocus,
        placeholder,
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
