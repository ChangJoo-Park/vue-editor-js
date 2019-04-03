<template>
  <div class="demo">
    <button @click="trySave">Submit</button>
    <editor
      @save="save"
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
    }
  }
}
</script>

<style>

</style>
