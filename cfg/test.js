'use strict';

const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./base');

// Add needed plugins here
const BowerWebpackPlugin = require('bower-webpack-plugin');

export default {
  devtool: 'eval',
  module: {
    noParse: [/node_modules\/sinon/],
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [path.join(__dirname, '/../src')],
      },
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(baseConfig.additionalPaths, [
          path.join(__dirname, '/../src'),
          path.join(__dirname, '/../test'),
        ]),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: Object.assign({}, baseConfig.resolve.alias, {
      sinon: 'sinon/pkg/sinon',
      test: path.join(__dirname, '/../test'),
      helpers: path.join(__dirname, '/../test/helpers'),
    }),
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
