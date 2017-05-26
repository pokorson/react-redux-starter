'use strict';

const path = require('path');
const webpack = require('webpack');
const version = require('../package.json').version;
const baseConfig = require('./base');
const defaultSettings = require('./defaults');

// Add needed plugins here
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = Object.assign({}, baseConfig, {
  entry: ['babel-polyfill', './src/app'],
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'app-[chunkhash].js',
    publicPath: '/assets/',
  },
  cache: false,
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      VERSION: JSON.stringify(version),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle-[chunkhash].js',
      minChunks: opts => {
        return opts.resource &&
          opts.resource.match(/\.js$/) &&
          opts.resource.indexOf('node_modules') >= 0;
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  module: defaultSettings.getDefaultModules(),
});

module.exports = config;
