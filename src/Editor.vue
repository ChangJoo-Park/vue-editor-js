<template>
  <div id="codex-editor"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
export default {
  mounted () {
    const editor = new EditorJS({ holderId : 'codex-editor' })
  }
}
</script>

<style>

</style>
