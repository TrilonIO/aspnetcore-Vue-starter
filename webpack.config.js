var mainWebpackConfig = require('./webpack.main.config.js')
var serverWebpackConfig = require('./webpack.server.config.js')

module.exports = [mainWebpackConfig, serverWebpackConfig]