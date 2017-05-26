'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');

function getDefaultModules() {
  return {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
    ],
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/',
  getDefaultModules: getDefaultModules,
};
