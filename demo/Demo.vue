<template>
  <div class="demo">
    <button @click="trySave">Submit</button>
    <editor
      autofocus
      holder-id="codex-editor"
      :init-data="initData"
      @save="save"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      initData: {}
    }
  },
  name: 'demo',
  methods: {
    trySave () {
      this.$el.querySelector('#save-button').click()
    },
    save (response) {
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
