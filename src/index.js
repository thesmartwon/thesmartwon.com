import { h, render } from 'preact';
import { Router } from 'preact-router';
import { Home, About, Page404 } from './pages';

export const routes = [
  { path: '/', component: Home, linkText: 'Home' },
  { path: '/about', component: About, linkText: 'About' },
];

/** demo header nav+search */
const Header = () => (
	<header>
		<nav>
      {routes.map(route => (
        <a key={route.path} href={route.path}>{route.linkText}</a>
      ))}
		</nav>
	</header>
);

/** Stateless app */
const App = props => (
	<div id="app">
    <pre>{JSON.stringify(props)}</pre>
		<Header />
		<Router static url={props.url}>
      {routes.map(route => (
        h(route.component, { path: route.path })
      ))}
			<Error type="404" default />
		</Router>
	</div>
);

// If you render directly into document.body, you risk collisions with scripts
// that do something with it (e.g. Google Font Loader or third party browser extensions)
// which produce very weird and hard to debug errors in production.

// We need to hydrate into <div id="app"> if it's prerendered
const root = document.getElementById('root')
render(<App />, root, root.firstElementChild);

// This is the prerendering context
export default params => {
  // Delete the old rendered things
  root.firstElementChild.parentNode.removeChild(root.firstElementChild);
  // Render again afresh
  render(<App url={params} />, root);
}
