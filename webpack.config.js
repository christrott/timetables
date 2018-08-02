var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
var CLIENT_DIR = path.resolve(__dirname, 'client');

var config = {
  name: 'server',
  target: 'node',
  entry: path.join(APP_DIR, 'server.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [" ",".webpack.js",".web.js",".js",".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
