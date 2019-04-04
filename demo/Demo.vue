<template>
  <div class="demo">
    <button @click="save">Submit</button>
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
import { Editor } from '../src'

export default {
  components: {
    Editor: Editor,
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
