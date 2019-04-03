<template>
  <div class="demo">
    <button @click="trySave">Submit</button>
    <editor
      @save="save"
      @ready="onReady"
      @change="onChange"
      save-button-id="save-button"
    />
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    trySave () {
      this.$el.querySelector('#save-button').click()
    },
    save (response) {
      console.log(response)
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
