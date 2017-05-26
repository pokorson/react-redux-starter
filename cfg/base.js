'use strict';
const path = require('path');
const defaultSettings = require('./defaults');
const srcPath = defaultSettings.srcPath;
const publicPath = defaultSettings.publicPath;

module.exports = {
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'app-[hash].js',
    publicPath: publicPath,
  },
  devServer: {
    contentBase: `./src`,
    historyApiFallback: true,
    noInfo: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    alias: {
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
    },
  },
  module: {},
};
