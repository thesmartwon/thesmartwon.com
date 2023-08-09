const { readFileSync, writeFileSync } = require('fs');
const { build: esbuild } = require('esbuild');
const path = require('path');
const { paths, walk, slugify } = require('./helpers/index.js');
const { md2jsx } = require("./md2jsx")

async function generateJSX() {
	const mdPaths = walk(paths.postsDir, { ext: /\.md$/ })
	return mdPaths.map(mdPath => {
		const jsx = md2jsx(mdPath);
		if (jsx) {
			const slug = slugify(mdPath);
			const jsxPath = path.join(paths.generatedDir, mdPath + '.jsx');
			writeFileSync(jsxPath, jsx);
			return { slug, jsxPath };
		}
	}).filter(Boolean);
}

function renderJSXIndex(filePaths) {
	const jsxIndex = `module.exports = {
${filePaths.map(({ slug, jsxPath }) => `  "${slug}": () => require("${jsxPath.replace(paths.generatedDir, '.')}")`).join(',\n')}
}`;
	writeFileSync(path.join(paths.generatedDir, 'index.js'), jsxIndex)
}

const esbuildConfigSSR = {
	entryPoints: ['src/app.tsx'],
	entryNames: '[dir]/[name]',
	metafile: true,
	bundle: true,
  platform: 'node',
	outdir: paths.outdir,
	jsxFactory: 'h',
	jsxFragment: 'Fragment',
	loader: {
		'.svg': 'dataurl',
		'.png': 'file',
		'.jpg': 'file',
		'.gif': 'file',
	},
};

async function renderJSX(filePaths) {
	const { metafile } = await esbuild(esbuildConfigSSR);
	const jsFile = Object.keys(metafile.outputs).filter(f => f.endsWith('.js'))[0];
	const cssFile = Object.keys(metafile.outputs).filter(f => f.endsWith('.css'))[0].replace(paths.outdir, '');

	const ssrBundle = path.join(process.cwd(), jsFile);
  delete require.cache[ssrBundle]
	const { renderPost } = require(ssrBundle);

	filePaths.forEach(({ slug }) => {
		global.location = slug;
		const html = renderPost({ cssFileName: cssFile });
		console.log(html)
	});

	console.log(jsFile, cssFile)
}

async function build() {
	const filePaths = await generateJSX();
	renderJSXIndex(filePaths)
	await renderJSX(filePaths)
}

build()
