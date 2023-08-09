const { readFileSync } = require('fs')
const { Marked } = require('marked')
const yaml = require('js-yaml')
const { gfmHeadingId } = require('marked-gfm-heading-id')

const headingPlugin = gfmHeadingId();

const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, 'g');
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

// In:
// ---
// title: Title
// date: 2020-02-02
// ---
//
// # A header
// Some content

// Out:
// export const title = 'Title';
// export const date = '2020-02-02';
//
// export default () => (
//	<>
//		<h1>A header</h1>
//		<p>Some content</p>
//	</>
function md2jsx(filename) {
	const mdWithFrontmatter = readFileSync(filename, 'utf8');

	const delimiter = '---'
	const yamlStart = mdWithFrontmatter.indexOf(delimiter)
	const yamlEnd = mdWithFrontmatter.indexOf(delimiter, yamlStart + delimiter.length)
	if (yamlStart === -1 || yamlEnd === -1 || yamlStart === yamlEnd) {
		throw new Error('expected yaml frontmatter in ' + filename);
	}

	const frontmatter = yaml.load(
		mdWithFrontmatter.substring(yamlStart + delimiter.length, yamlEnd),
		{ filename }
	)
	if (!frontmatter) throw new Error('expected yaml frontmatter in ' + filename);
	if (frontmatter.draft) return;
	if (!frontmatter.title) throw new Error('expected title in frontmatter in ' + filename);
	if (!frontmatter.date) throw new Error('expected date in frontmatter in ' + filename);

	const md = mdWithFrontmatter.substring(yamlEnd + delimiter.length)
	var imports = '';
	const marked = new Marked(headingPlugin, {
		// Deprecated things that complain loadly
		mangle: false,
		headerIds: false,
		tokenizer: {
			// JSX is UTF8 and only the <>s in html blocks need escaping.
			// escape(raw) {
			// 	console.log('escape', raw)
			// 	return { type: 'escape', raw, text: raw };
			// },
			// fences(raw) {
			// 	console.log('inlineText', raw)
			// }
			// html(raw) {
			// 	console.log('html', raw)
			// 	const escaped = raw.replaceAll('`', '\\`').trim()
			// 	const text = `<Fragment dangerouslySetInnerHTML={{ __html: \`${escaped}\` }}></Fragment>`;
			// 	return { type: 'html', raw, pre: false, block: true, text };
			// }
		},
		renderer: {
			// We have to hoist imports to not be inline JSX.
			paragraph(src) {
				if (src.startsWith('import')) {
					imports += src + '\n'
					return ''
				}
				return src + '\n'
			},
			// I'm lazy in the MD and don't account for the title being an h1.
			heading(text, level) {
				return `<h${level + 1}>${text}</h${level + 1}>`;
			}
		}
	})

	return `${imports}

${Object.entries(frontmatter)
			.map(([k, v]) => `export const ${k} = ${JSON.stringify(v)};`)
			.join('\n')}

export default () => (<>
${marked.parse(md)}
</>)
`
}

module.exports = { md2jsx }

console.log(md2jsx('./posts/coding/canvas-game-engine/part-1.md'))
