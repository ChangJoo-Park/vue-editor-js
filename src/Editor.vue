<template>
  <div id="vue-editor-js">
    <div :id="holderId"/>
    <button :id="saveButtonId" @click="save" style="display: none;">Save</button>
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
  warning: require('codex.editor.warning')
}

export default {
  name: 'vue-editor-js',
  props: {
    holderId: {
      type: String,
      default: () => 'codex-editor',
      required: false
    },
    saveButtonId: {
      type: String,
      default: () => 'save-button',
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
    header: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    list: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    code: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    inlineCode: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    embed: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    link: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    marker: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    table: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    raw: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    delimiter: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    qoute: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    imageTool: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    },
    warning: {
      type: [Boolean, Object],
      default: () => false,
      required: false
    }
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
      const plugins = ['header', 'list', 'code', 'inlineCode', 'embed', 'link', 'marker', 'table', 'raw', 'delimiter', 'qoute', 'imageTool', 'warning']
      const isFullyFeatured = plugins.every(p => !this[p])
      if (isFullyFeatured) {
        const tools = {}
        Object.keys(PLUGINS).forEach(key => tools[key] = { class: PLUGINS[key] })
        return tools
      } else {
        // TODO: only implement user needed
      }
    }
  }
}
</script>

<style>

</style>
