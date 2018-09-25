const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// javascript rule
const javascript = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['env'],
			plugins: ['transform-object-rest-spread'],
		}
	}
};
// fonts rule
const fonts = {
	test: /\.(woff|woff2|eot|ttf)$/,
	exclude: /(node_modules)/,
	use: {
		loader: 'file-loader',
	},
};
// sprite svg rule
const spriteSvg = {
  test: /\.svg$/,
  exclude: /(node_modules)/,
  include: path.resolve(__dirname, 'src/svg'),
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    publicPath: ''
  }
};

const config = {
	entry: [
		'whatwg-fetch',
		'./src/js/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [javascript, fonts, spriteSvg]
	},
	resolve: {
	  alias: {
	    'js': path.resolve(__dirname, './src/js'),
	    'scss': path.resolve(__dirname, './src/scss'),
	    'svg': path.resolve(__dirname, './src/svg'),
	  },
	  extensions: ['.js', '.jsx', '.scss']
	},
	stats: {
		colors: true,
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
	  new SpriteLoaderPlugin({ plainSprite: true })
	]
};

module.exports = config;