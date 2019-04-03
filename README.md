# vue-editor-js

vue-editor-js is editorjs wrapper component.

Please see this first. https://editorjs.io/

## Todo

- [ ] Conditionally import plugins
- [ ] Can more specific options for plugin (Image plugin is not working in current :<)
  - [ ] Shortcut
  - [ ] Inline or not
- [ ] Sanitize data

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

```Vue
  <editor
    autofocus
    holder-id="codex-editor"
    save-button-id="save-button"
    :init-data="initData"
    @save="save"
    @ready="onReady"
    @change="onChange"
  />
```

Enjoy editorjs in Vue.js :tada:

