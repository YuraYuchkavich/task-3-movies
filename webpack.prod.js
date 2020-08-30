const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});