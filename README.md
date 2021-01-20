# vue-editor-js

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)


vue-editor-js is editorjs wrapper component.

Please review this first. https://editorjs.io/

## For before 2.0.0 version users.

This plugins is a wrapper component for editorjs.
If you need to use the plugin for editor.js then import it and set the config property.

Please See the [Demo.vue](https://github.com/ChangJoo-Park/vue-editor-js/blob/master/demo/Demo.vue)


## For before 1.0.0 version users.

Please use `Vue.use` vue-editor-js in main.js.

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
# NPM
npm install --save vue-editor-js

# or Yarn
yarn add vue-editor-js
```

## Usage

### In main.js
```js
// ...
import Editor from 'vue-editor-js'

Vue.use(Editor)
// ...
```

### In Nuxt.js
```js
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

Define the initialization function to get the instance of editor.js when initializing

If you are confused with using it with Nuxt, please see [here](https://github.com/ChangJoo-Park/vue-editor-on-nuxt)

## Local import

If you wish to only import Editor on a single component then you can do so by following the instructions below

1. Make sure to install `@vue/composition-api`
```bash
# NPM
npm i --save @vue/composition-api

# or Yarn
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

1. Install the editorjs tool

```bash
# NPM
npm install --save @editorjs/header

# or Yarn
yarn add @editorjs/header
```

2. Insert the package into the config prop

```vue
<editor
    ...
    :config="{
        tools: {
          header: require('@editorjs/header')
        }
    }"
/>
```

#### Saving Example Code
```vue
<template>
	<div id="app">
		<Editor ref="editor" :config="config" />

		<button @click="invokeSave">Save</button>
	</div>
</template>

<script>
	export default {
		methods: {
			invokeSave() {
				this.$refs.editor._data.state.editor.save()
					.then((data) => {
						// Do what you want with the data here
						console.log(data)
					})
					.catch(err => { console.log(err) })
			}
		},
	}
</script>
```

## Upload Image (>= 1.1.0)

for uploading images, You will need a backend for processing the images. vue-editor-js provides a special `config` prop for easability.
If you are testing your server to upload an image, please see [server example](https://github.com/ChangJoo-Park/vue-editor-js-imageserver).

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
