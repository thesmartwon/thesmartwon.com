import { h } from 'preact';

export const HTML = ({ children, title }) => (
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{title || 'thesmartwon.com'}</title>
      {/* https://varvy.com/pagespeed/render-blocking-css.html */}
			<link rel="stylesheet" type="text/css" href="/main.css" />
			<link rel="shortcut icon" href="/favicon.png" />
			<link rel="manifest" href="/manifest.webmanifest" />
			<meta name="theme-color" content="#00D1B2" />
		</head>
		<body>
			<div id="b">
				{children}
			</div>
		</body>
	</html>
);