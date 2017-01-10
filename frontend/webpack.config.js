let webpack = require('webpack');
let path = require('path');
let extractText = require('extract-text-webpack-plugin');

let extractCSS = new extractText('styles/style.css');

module.exports = {
  context: __dirname,
  entry: {
    app: path.resolve(__dirname, 'app/index.js'),
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: extractCSS.extract({
        fallBackLoader: 'style-loader',
        loader: 'css-loader'
      })
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
    }),
    extractCSS
  ]
}