var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var config = require('../config')

module.exports = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://' + config.host + ':' + config.port + '/__webpack_hmr',
      path.resolve(__dirname, '../src/main.js')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
