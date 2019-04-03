# Installation

## Direct Download / CDN

https://unpkg.com/vue-editor-js/dist/vue-editor-js 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-editor-js@{{ $version }}/dist/vue-editor-js.js
 
Include vue-editor-js after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-editor-js/dist/vue-editor-js.js"></script>
```

## NPM

```sh
$ npm install vue-editor-js
```

## Yarn

```sh
$ yarn add vue-editor-js
```

When used with a module system, you must explicitly install the `vue-editor-js` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-editor-js from 'vue-editor-js'

Vue.use(vue-editor-js)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-editor-js` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-editor-js.git node_modules/vue-editor-js
$ cd node_modules/vue-editor-js
$ npm install
$ npm run build
```

