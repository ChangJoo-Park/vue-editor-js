<template>
  <div class="demo">
    <button @click="save">Submit</button>
    <editor
      autofocus
      :init-data="initData"
      ref="editor"
      @save="onSave"
      @ready="onReady"
      @change="onChange"
      :header="true"
      :paragraph="true"
    />
  </div>
</template>

<script>
// Import as component
import Editor from '../src/Editor'

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
