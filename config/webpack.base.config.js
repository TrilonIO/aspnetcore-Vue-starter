var webpack = require('webpack')
var path = require('path')

var baseWebpackConfig = {
  output: {
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue',
      'components': path.resolve(__dirname, '../Client/components'),
      'views': path.resolve(__dirname, '../Client/views'),
      'utils': path.resolve(__dirname, '../Client/utils'),
      'api': path.resolve(__dirname, '../Client/store/api')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style!css!sass',
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }, {
      test: /\.sass$/,
      loaders: ["vue-style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.scss$/,
      loaders: ["vue-style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  }
}

module.exports = baseWebpackConfig
