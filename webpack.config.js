const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    devtool: 'cheap-module-source-map', //轻量级的map
    entry: {
        app:[ path.join(__dirname, 'src/index.js')],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].[chunkhash].js",
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    resolve: {
        alias: {
            Home: path.join(__dirname, 'src/pages/Home'),
            page1: path.join(__dirname, 'src/pages/page1')
        }
    }
}