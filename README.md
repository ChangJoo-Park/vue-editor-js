# vue-editor-js

vue-editor-js is editorjs wrapper component.

Please see this first. https://editorjs.io/

## Todo

- [x] Conditionally import plugins
- [x] Can more specific options for plugin (Image plugin is not working in current :<)
- [ ] Sanitize data
- [ ] Custom Plugin
- [ ] Documentation

## Supported Plugins

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

Enjoy editorjs with Vue.js Project :tada:

## How to Contribute?

1. fork this project.
2. edit code.
3. PR

_OR_

1. Just submit a issue!

## Contributors

- ChangJoo Park[pcjpcj2@gmail.com]