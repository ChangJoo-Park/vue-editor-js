<template>
  <div id="vue-editor-js">
    <div :id="holderId"/>
    <button :id="saveButtonId" @click="save" style="display: none;">Save</button>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'

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
        return {
            header: {
              class: require('@editorjs/header')
            },
            list: {
              class: require('@editorjs/list')
            },
            image: {
              class: require('@editorjs/image')
            },
            inlineCode: {
              class: require('@editorjs/inline-code')
            },
            embed: {
              class: require('@editorjs/embed')
            },
            quote: {
              class: require('@editorjs/quote')
            },
            marker: {
              class: require('@editorjs/marker')
            },
            code: {
              class: require('@editorjs/code')
            },
            link: {
              class: require('@editorjs/link')
            },
            delimiter: {
              class: require('@editorjs/delimiter')
            },
            raw: {
              class: require('@editorjs/raw')
            },
            table: {
              class: require('@editorjs/table')
            },
            warning: {
              class: require('codex.editor.warning')
            }
          }
      } else {
        // TODO: only implement user needed
      }
    }
  }
}
</script>

<style>

</style>
