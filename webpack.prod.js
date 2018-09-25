const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// define basename if project is not deployed in root of server
const BASENAME = '/path/to/folder';

// sass rule
const sass = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader?importLoaders=3', // translates CSS into CommonJS
    'postcss-loader',
    'resolve-url-loader',
    'sass-loader', // compiles Sass to CSS
  ]
};
// css rule
const css = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader'
  ],
};

const config = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [sass, css]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BASENAME': JSON.stringify(BASENAME),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
};

module.exports = merge(common, config);
