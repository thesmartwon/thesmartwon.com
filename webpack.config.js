const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => ({
	entry: {
		index: './src/index.js',		
	},
  devServer: {
    contentBase: './public'
	},
	module: {
		rules: [
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
              hmr: argv.mode === 'development',
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
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html',
		// 	template: `!!prerender-loader?string&entry=./src/index.js&params=${'/profile'}!./src/index.html`,
		// })
		...["", "profile", "404"].map(route => 
			new HtmlWebpackPlugin({
				filename: `${route || 'index'}.html`,
				template: `!!prerender-loader?string&entry=./src/index.js&params=${'/' + route}!./src/index.html`,
			})
		),
		// ...(argv.mode === 'production' && [new webpack.IgnorePlugin(/preact-helmet/)]),
		// new BundleAnalyzerPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	}
});
