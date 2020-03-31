<template>
  <div class="demo">
    <button @click="save">Save & Log</button>
    <button @click="load">Load</button>
    <button @click="loadData">Load Example</button>
    <h1 style="text-align: center;">DEMO</h1>
    <editor
      :autofocus="true"
      :init-data="initData"
      :config="config"
      ref="editor"
      placeholder="test"
      @save="onSave"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      initData: {},
      savedData: {},
      config: {
        image: {
          endpoints: {
            byFile: "http://39.105.168.171:8090/image",
            byUrl: "http://39.105.168.171:8090/image-by-url"
          },
          field: "image",
          types: "image/*"
        },
        personality: {
          endpoint: {
            byFile: "http://39.105.168.171:8090/image",
            byUrl: "http://39.105.168.171:8090/image-by-url"
          },
          field: "image",
          types: "image/*"
        }
      }
    };
  },
  methods: {
    save() {
      this.$refs.editor.save();
    },
    load() {
      this.initData = this.savedData;
    },
    loadData() {
      this.initData = JSON.parse(
        '{"time":1558356864490,"blocks":[{"type":"paragraph","data":{"text":"First text"}},{"type":"paragraph","data":{"text":"Second text"}}],"version":"2.13"}'
      );
    },
    onSave(response) {
      console.log(JSON.stringify(response));
      this.savedData = response;
    },
    onReady() {
      console.log("ready");
    },
    onChange() {
      console.log("changed");
    }
  }
};
</script>

<style>
</style>
