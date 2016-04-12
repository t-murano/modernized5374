var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')
var express = require('express')
var config = require('../config')

var compiler = webpack(config)

var middlewareOption = {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
  hot: true,
  noInfo: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  stats: {
    colors: true,
    chunks: false
  }
}

var app = express()

app.use(require('webpack-dev-middleware')(compiler, middlewareOption))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(config.port, config.host, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(''Listening at http://' + argv.host + ':' + argv.port)
})
