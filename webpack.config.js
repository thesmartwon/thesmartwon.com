const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const pages = require('./src/render');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
	},
	module: {
		rules: [
			{
				test: /.*preact\-helmet.*/,
				use: 'null-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
					'css-loader',
          'sass-loader'
        ],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240
						}
					}
				]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: '!!prerender-loader?string&entry=./src/index.js!./src/index.html',
		})
		// ...Object.entries(pages).map(([page, templateContent]) => 
		// 	new HtmlWebpackPlugin({
		// 		filename: `${page}.html`,
		// 		templateContent
		// 	}))
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};