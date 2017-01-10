let webpack = require('webpack');
let path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: path.resolve(__dirname, 'app/index.js'),
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader'
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    modules: [
      'frontend/node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ]
}