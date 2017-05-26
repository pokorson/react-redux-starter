'use strict';

const webpack = require('webpack');
const path = require('path');
const version = require('../package.json').version;
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const srcPath = defaultSettings.srcPath;

// Add needed plugins here
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, baseConfig, {
  entry: ['babel-polyfill', './src/app'],
  cache: true,
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    alias: {
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      files: {
        javascript: ['dist/app.js'],
      },
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
    }),
  ],
  module: defaultSettings.getDefaultModules(),
});

module.exports = config;
