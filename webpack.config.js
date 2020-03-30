const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

	context: path.resolve('src'),

	entry: {
		DemoCollapse: './index.js',
	},

	output: {
		path: path.resolve('dist'),
		filename: '[name].js',
		library: 'DemoCollapse',
		libraryTarget: 'umd',
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false,
					},
				},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								modules: true,
								localIdentName: '[hash:base64:5]',
							},
						},
						{
							loader: 'clean-css-loader',
						},
						'postcss-loader',
					],
					fallback: 'vue-style-loader',
				}),
			},
		],
	},

	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin('styles.css'),
		new UglifyJsPlugin(),
	],
};
