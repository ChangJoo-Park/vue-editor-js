# vue-editor-js

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)


vue-editor-js is editorjs wrapper component.

Please see this first. https://editorjs.io/

## For before 2.0.0 version users.

This plugins is turned to be just wrapper component.
If you need to use plugin for editor.js, just import and set to config property.

Please See the [Demo.vue](https://github.com/ChangJoo-Park/vue-editor-js/blob/master/demo/Demo.vue)


## For before 1.0.0 version users.

Please `Vue.use` vue-editor-js  in main.js.

## Supported Plugins

- [Personality](https://github.com/editor-js/personality)
- [Header](https://github.com/editor-js/header)
- [List](https://github.com/editor-js/list)
- [Image](https://github.com/editor-js/image)
- [InlineCode](https://github.com/editor-js/inline-code)
- [Embed](https://github.com/editor-js/embed)
- [Quote](https://github.com/editor-js/quote)
- [Marker](https://github.com/editor-js/marker)
- [Code](https://github.com/editor-js/code)
- [Link](https://github.com/editor-js/link)
- [Delimiter](https://github.com/editor-js/delimiter)
- [Raw](https://github.com/editor-js/raw)
- [Table](https://github.com/editor-js/table)
- [Warning](https://github.com/editor-js/warning)
- [Paragraph](https://github.com/editor-js/paragraph)
- [Checklist](https://github.com/editor-js/checklist)

## Installation

```bash
npm install --save vue-editor-js

# or Yarn
yarn add vue-editor-js
```

## Usage

```js
// In main.js
// ...
import Editor from 'vue-editor-js'

Vue.use(Editor)
// ...
```

```js
// on Nuxt.js

// in nuxt.config.js
plugins: [
  {
    src: '~/plugins/vue-editor.js', ssr: false
  }
],

// in ~/plugins/vue-editor.js
import Vue from 'vue'
import Editor from 'vue-editor-js'

Vue.use(Editor)
```

```Vue
  <editor ref="editor" :config="config" :initialized="onInitialized"/>
```

define initialize Function for get instance of editor.js when initialized

If you confused using on Nuxt, please see [here](https://github.com/ChangJoo-Park/vue-editor-on-nuxt)

## Local import

You can import Editor only in components where you need it.

1. Make sure to install `@vue/composition-api`
```bash
npm i --save @vue/composition-api

#or Yarn
yarn add @vue/composition-api
```
2. In main.js:
```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```
3. Don't import anything from `'vue-editor-js'` in main.js
4. In your component:
```js
import { Editor } from 'vue-editor-js'

export default {
  // ...
  components: {
    Editor,
  },
  // ...
}
```

## Tools
### Supported tools
Same as in Supported Plugins, but with different naming
- header
- list
- code
- inlineCode
- personality
- embed
- linkTool
- marker
- table
- raw
- delimiter
- quote
- image
- warning
- paragraph
- checklist


### Usage
```vue
<editor header list code ... :config="config"/>
```

## Upload Image (>= 1.1.0)

for upload image, You need a backend for processing image. vue-editor-js provide special `config` props for easy.
If you server for test upload image, please see [server example](https://github.com/ChangJoo-Park/vue-editor-js-imageserver).

```vue
<editor :config="config" />

<script>
...
data() {
  return {
      config: {
        image: {
          // Like in https://github.com/editor-js/image#config-params
          endpoints: {
            byFile: 'http://localhost:8090/image',
            byUrl: 'http://localhost:8090/image-by-url',
          },
          field: 'image',
          types: 'image/*',
        },
      }
  }
}
</script>
```

## upload personality avatar ( >= 2.0.1)

```js
  config: {
    personality: {
      endpoints: 'http://localhost:8090/image'
    }
```

![](https://user-images.githubusercontent.com/1451365/69627876-d7ca9600-108e-11ea-85c7-1e52c4284758.png)

### Other props:
- customTools - Object with name (key) and class of a custom tool (value)

Enjoy editorjs with Vue.js Project :tada:

## How to Contribute?

1. fork this project.
2. edit code.
3. PR

_OR_

1. Just submit a issue!

## Contributors

- [ChangJoo Park](https://github.com/changjoo-park)
- [yashha](https://github.com/yashha)
- [Loskir](https://github.com/Loskir)


## Wallaby.js

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

This repository contributors are welcome to use
[Wallaby.js OSS License](https://wallabyjs.com/oss/) to get
test results immediately as you type, and see the results in
your editor right next to your code.
