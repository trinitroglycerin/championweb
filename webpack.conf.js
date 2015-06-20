'use strict'
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    master: './client/app.js',
    vendor: ['angular', 'angular-bootstrap']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  output: {
    filename: '[name].js',
    publicPath: '/js',
    path: path.resolve(__dirname, './public/js/')
  }
}