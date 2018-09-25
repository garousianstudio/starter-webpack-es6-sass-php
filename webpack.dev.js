const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const PORT = 5080;

// sass rule
const sass = {
	test: /\.scss$/,
	exclude: /node_modules/,
	use: [
		'style-loader', // creates style nodes from JS strings
		'css-loader?importLoaders=2&sourceMap', // translates CSS into CommonJS
		'resolve-url-loader',
		'sass-loader?sourceMap', // compiles Sass to CSS
	]
};
// css rule
const css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const config = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [sass, css]
  },
  devServer: {
  	contentBase: '/',
  	port: PORT,
  	proxy: {
  		"/": {
  			target: "http://localhost/starters/starter-webpack-es6-sass-php",
  		},
  	},
  	open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BASENAME': JSON.stringify(''),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(common, config);
