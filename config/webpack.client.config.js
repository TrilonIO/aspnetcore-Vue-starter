var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var webpack = require('webpack')

var clientWebpackConfig = merge(baseWebpackConfig, {
    entry: {
        client: path.resolve(__dirname, '../Client/client.js')
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/dist')
    },
    devtool: '#eval-source-map'
})

module.exports = clientWebpackConfig

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}