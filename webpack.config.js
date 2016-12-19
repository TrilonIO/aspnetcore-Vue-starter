var clientWebpackConfig = require('./build/webpack.client.config.js')
var serverWebpackConfig = require('./build/webpack.server.config.js')

module.exports = [clientWebpackConfig, serverWebpackConfig]