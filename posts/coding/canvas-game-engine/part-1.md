---
title: "<Canvas> Game Engine: Part 1"
date:  2019-07-21
---

# Why `<Canvas>`?
AAA titles like Fallout and Civilization V are usually usually written in low-level languages like C++ so they can directly access hardware (ie a GPU) to provide the best possible performance and graphics. However, don't count out browser-based games written in Javascript! Javascript might many steps removed from C++, but it can play games in nearly any browser and be easily turned into phone or native apps. Plus you can easily host it on a website to share it with friends!

## Disclaimer
I assume you have a little prior JS knowledge. This tutorial will only setup Webpack.

# Step 1
First, we need to create a new node project (we'll need some dependencies). My completed project is [here](github.com/thesmartwon/canvasgame) if you want to follow along, and [the first commit]() maps to step 1.

```sh
mkdir canvasgame && cd canvasgame && npm init
```

Let's use Webpack to bundle our JS. This way we can split up our JS files and get live reloading in the browser for free. Webpack has some bare minimum config we need to take care of to get up and running, so let's do that.

```sh
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin
```

This is what your `webpack.config.js` could look like.
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js'
	},
	devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
	plugins: [
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
```

We'll need a dummy `index.js` for now.
```js
// Grab the canvas and thing we draw on
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Draw a black square on the whole canvas
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
```

And an `index.html` template.
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>A Canvas Game</title>
		<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
		<style>
			body {
					margin: 0;
					overflow: hidden;
			}
			canvas {
				position: absolute;
				top: 0px;
				left: 0px;
			}
		</style>
	</head>
	<body>
		<canvas id="gameCanvas">
			<h1>This game doesn't work without an HTML canvas :(</h1>
		</canvas>
	</body>
</html>
```

Add some scripts to pull up your webserver to your `package.json`:

```json
"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server --open"
},
```

And now you can `npm start` and webpack will pull up your web browser and draw a black box over the canvas like this:

<canvas id="gameCanvas">
  <h1>This game doesn't work without an HTML canvas :(</h1>
</canvas>

<br />
It's not much yet, but it'll become something soon... You're ready for <a href="./part-2">Part 2</a>!
