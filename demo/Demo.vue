<template>
  <div class="demo">
    <button @click="save">Submit</button>
    <button @click="loadData">Load</button>
    <editor
      :autofocus="true"
      :init-data="initData"
      ref="editor"
      @save="onSave"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>

<script>
// Import as component
import { Editor } from '../src' // import { Editor } from 'vue-editor-js'

export default {
  components: {
    Editor,
  },
  data () {
    return {
      initData: {}
    }
  },
  methods: {
    save () {
      this.$refs.editor.save();
    },
    loadData () {
      this.initData = JSON.parse('{"time":1558356864490,"blocks":[{"type":"paragraph","data":{"text":"First text"}},{"type":"paragraph","data":{"text":"Second text"}}],"version":"2.12.3"}');
    },
    onSave (response) {
      console.log(JSON.stringify(response))
    },
    onReady () {
      console.log('ready')
    },
    onChange () {
      console.log('changed')
    }
  }
}
</script>

<style>

</style>
