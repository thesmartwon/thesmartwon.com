import { h } from 'preact';
import render from 'preact-render-to-string';

module.exports = {
	'404': render(h(require('./pages/404').default)),
	'about': render(h(require('./pages/about').default)),
	'index': render(h(require('./pages/index').default)),
}
