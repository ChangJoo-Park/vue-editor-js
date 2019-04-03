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
    }
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    const Header = require('@editorjs/header')
    const List = require('@editorjs/list')
    const Code = require('@editorjs/code')
    const InlineCode = require('@editorjs/inline-code')
    const Embed = require('@editorjs/embed')
    const Link = require('@editorjs/link')
    const Marker = require('@editorjs/marker')
    const Table = require('@editorjs/table')
    const Raw = require('@editorjs/raw')
    const Delimiter = require('@editorjs/delimiter')
    const Qoute = require('@editorjs/quote')
    const ImageTool = require('@editorjs/image')
    const Warning = require('codex.editor.warning')

    this.editor = new EditorJS({
      holderId : this.holderId,
      autofocus: this.autofocus,
      onReady: () => { this.$emit('ready') },
      onChange: () => { this.$emit('change') },
      data: this.initData,
      tools: {
        header: {
          class: Header
        },
        list: {
          class: List
        },
        image: {
          class: ImageTool
        },
        embed: {
          class: Embed
        },
        quote: {
          class: Qoute
        },
        marker: {
          class: Marker
        },
        code: {
          class: Code
        },
        link: {
          class: Link
        },
        delimiter: {
          class: Delimiter
        },
        raw: {
          class: Raw
        },
        table: {
          class: Table
        },
        warning: {
          class: Warning
        },
        inlineCode: {
          class: InlineCode
        }
      }
    })
  },
  methods: {
    async save () {
      const response = await this.editor.save()
      this.$emit('save', response)
    }
  }
}
</script>

<style>

</style>
