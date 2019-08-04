const { transformSync } = require('@babel/core')
const styleToObject = require('style-to-object')
const camelCaseCSS = require('camelcase-css')

const toTemplateLiteral = text => {
  const escaped = text
    .replace(/\\/g, '\\\\') // Escape all "\" to avoid unwanted escaping in text nodes
    .replace(/`/g, '\\`') // Escape "`"" since
    .replace(/\$\{/g, '\\${') // Escape ${} in text so that it doesn't eval

  return '{`' + escaped + '`}'
}

// eslint-disable-next-line complexity
function toJSX(node) {
  let children = ''

  if (node.properties != null) {
    // Turn style strings into JSX-friendly style object
    if (typeof node.properties.style === 'string') {
      let styleObject = {}
      styleToObject(node.properties.style, function(name, value) {
        styleObject[camelCaseCSS(name)] = value
      })
      node.properties.style = styleObject
    }

    // Transform class property to JSX-friendly className
    if (node.properties.class) {
      node.properties.className = node.properties.class
      delete node.properties.class
    }
  }

  if (node.type === 'root') {
    const importNodes = [{ value: "import { h, Fragment } from 'preact'" }]
    const jsxNodes = []
    for (const childNode of node.children) {
      if (childNode.type === 'import') {
        importNodes.push(childNode)
        continue
      }

      jsxNodes.push(childNode)
    }

    const importStatements = importNodes
			.map(childNode => childNode.value)
			.join('\n')
			
		const mdxComponent = `() => <Fragment>
${jsxNodes.map(childNode => toJSX(childNode)).join('')}
</Fragment>`

		const jsxCheckedComponent = transformSync(mdxComponent, {
			plugins: [require('@babel/plugin-syntax-jsx')]
		}).code

		return `${importStatements}\n
export default ${jsxCheckedComponent}`
  }

  // Recursively walk through children
  if (node.children) {
    children = node.children
      .map(childNode => toJSX(childNode))
      .join('')
  }

  if (node.type === 'element') {
    if (node.properties && Array.isArray(node.properties.className)) {
      node.properties.className = node.properties.className.join(' ')
		}
		
		const props = Object.entries(node.properties)
			.filter(([key, val]) => Boolean(key) && Boolean(val))
			.map(([key, val]) => `${key}="${val}"`)

    return `<${node.tagName}${props.length ? ' ' + props.join(' ') : ''}>${children}</${node.tagName}>`
  }

  if (node.type === 'text') {
		if (node.value === '\n')
			return node.value

    return toTemplateLiteral(node.value)
  }

  if (node.type === 'import' || node.type === 'export' || node.type === 'jsx') {
    return node.value
  }
}

function compile() {
  this.Compiler = tree => toJSX(tree)
}

module.exports = compile