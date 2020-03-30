const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	mode: 'production',

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

	optimization: {
		minimizer: [
			new TerserPlugin(),
			new OptimizeCssAssetsPlugin(),
		],
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
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: {
								localIdentName: '[hash:base64:5]',
							},
						},
					},
					'postcss-loader',
				],
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
};
