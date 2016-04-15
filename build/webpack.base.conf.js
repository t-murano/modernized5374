var path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: [name]
  },
  module: {
    preLoaders: [
      test: /\.tsx$/,
      loader: 'tslint-loader',
      include: path.resolve(__dirname, '../src')
      exclude: /node_modules/
    ],
    loaders: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, '../src')
        exclude: /node_modules/
      },
      {
        test: /\.csv$/,
        loader: 'dsv-loader',
        exclude: /node_modules/
      },
      }
    ]
  },
  tslint; {
    emitErrors: false,
    failOnHint: true
  }
}
