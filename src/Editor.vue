<template>
  <div id="vue-editor-js">
    <div :id="holderId"/>
    <button :id="`${holderId}-button`" @click="save" style="display: none;"/>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'

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
  warning: require('@editorjs/warning')
}

const PLUGIN_PROPS_TYPE = {
  type: [Boolean, Object],
  default: () => false,
  required: false
}

export default {
  name: 'vue-editor-js',
  props: {
    holderId: {
      type: String,
      default: () => 'codex-editor',
      required: false
    },
    autofocus: {
      type: Boolean,
      default: () => false,
      required: false
    },
    initData: {
      type: Object,
      default: () => {},
      required: false
    },
    /**
     * Plugins
     */
    header: PLUGIN_PROPS_TYPE,
    list: PLUGIN_PROPS_TYPE,
    code: PLUGIN_PROPS_TYPE,
    inlineCode: PLUGIN_PROPS_TYPE,
    embed: PLUGIN_PROPS_TYPE,
    link: PLUGIN_PROPS_TYPE,
    marker: PLUGIN_PROPS_TYPE,
    table: PLUGIN_PROPS_TYPE,
    raw: PLUGIN_PROPS_TYPE,
    delimiter: PLUGIN_PROPS_TYPE,
    quote: PLUGIN_PROPS_TYPE,
    image: PLUGIN_PROPS_TYPE,
    warning: PLUGIN_PROPS_TYPE
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new EditorJS({
      holderId : this.holderId,
      autofocus: this.autofocus,
      onReady: () => { this.$emit('ready') },
      onChange: () => { this.$emit('change') },
      data: this.initData,
      tools: this.getTools()
    })
  },
  methods: {
    async save () {
      const response = await this.editor.save()
      this.$emit('save', response)
    },
    getTools () {
      const pluginKeys = Object.keys(PLUGINS)
      const isFullyFeatured = pluginKeys.every(p => !this[p])
      const tools = {}

      /**
       * When plugin props are empty, enable all plugins
       */
      if (isFullyFeatured) {
        pluginKeys.forEach(key => tools[key] = { class: PLUGINS[key] })
        return tools
      }

      pluginKeys.forEach(key => {
        const props = this.$props[key]
        if (!props) {
          return
        }

        tools[key] = { class: PLUGINS[key] }

        if (typeof props === 'object') {
          const options = Object.assign({}, this.$props[key])
          delete options['class'] // Prevent merge wrong `class`
          tools[key] = Object.assign(tools[key], options)
        }
      })
      return tools
    }
  }
}
</script>

<style>

</style>
