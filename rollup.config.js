import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

module.exports = {
	input: [
		'src/content/money/early-retirement.js'
	],
	output: {
		file: 'public/posts/money/early-retirement.js',
		name: 'main',
		format: 'iife',
		compact: true,
		entryFileNames: '[name]-[hash:8].js'
	},
	plugins: [
		resolve(),
		babel({ exclude: 'node_modules/**' }),
		terser(),
	],
};