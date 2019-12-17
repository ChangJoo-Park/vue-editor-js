export const DEFAULT_OBJECT_PROP = {
  type: Object,
  default: () => {},
  required: false
}

export const DEFAULT_BOOLEAN_PROP = {
  type: Boolean,
  default: () => false,
  required: false
}

export const PLUGIN_PROPS_TYPE = {
  type: [Boolean, Object],
  default: () => false,
  required: false
}

export const PLUGIN_PROPS = ['header', 'list', 'code', 'inlineCode', 'embed', 'link', 'marker', 'table', 'raw', 'delimiter', 'quote', 'image', 'warning', 'paragraph', 'checklist']

export const PLUGINS = {
  header: require('@editorjs/header'),
  list: require('@editorjs/list'),
  image: require('@editorjs/image'),
  inlineCode: require('@editorjs/inline-code'),
  embed: require('@editorjs/embed'),
  quote: require('@editorjs/quote'),
  marker: require('@editorjs/marker'),
  code: require('@editorjs/code'),
  link: require('@editorjs/link'),
  delimiter: require('@editorjs/delimiter'),
  raw: require('@editorjs/raw'),
  table: require('@editorjs/table'),
  warning: require('@editorjs/warning'),
  paragraph: require('@editorjs/paragraph'),
  checklist: require('@editorjs/checklist')
}

export function useTools (props, config) {
  const pluginKeys = Object.keys(PLUGINS)
  const tools = { ...props.customTools }
  /**
   * When plugin props are empty, enable all plugins
   */
  if (pluginKeys.every(p => !props[p])) {
    pluginKeys.forEach(key => tools[key] = { class: PLUGINS[key] })
    Object.keys(config).forEach(key => {
      if (tools[key] !== undefined && tools[key] !== null) {
        tools[key]['config'] = config[key]
      }
    })
    return tools
  }

  pluginKeys.forEach(key => {
    const prop = props[key]
    if (!prop) {
      return
    }

    tools[key] = { class: PLUGINS[key] }

    if (typeof prop === 'object') {
      const options = Object.assign({}, props[key])
      delete options['class'] // Prevent merge wrong `class`
      tools[key] = Object.assign(tools[key], options)
    }
  })

  Object.keys(config).forEach(key => {
    if (tools[key] !== undefined && tools[key] !== null) {
      tools[key]['config'] = config[key]
    }
  })

  return tools
}
