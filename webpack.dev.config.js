const path =  require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode:'production',
    entry:{
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, '/src/app.js')
        ],
       vendor:['react','react-dom','react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js",
        chunkFilename: "[name].[chunkhash].js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react','stage-0'],
                        plugins: [
                            "react-hot-loader/babel",
                           /* "transform-object-rest-spread"*/
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        host: '0.0.0.0',
        historyApiFallback: true,
        compress: true,
        noInfo: false
    },

    plugins: [
       /* new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),*/
        new HtmlWebpackPlugin({
            title:"main",
            filename: 'index.html',
            template:path.join(__dirname,'/src/index.html'),
        })
    ],
    resolve: {
        alias: {
            Home: path.join(__dirname, 'src/pages/Home'),
            page1: path.join(__dirname, 'src/pages/page1'),
            counter: path.join(__dirname, 'src/pages/Counter'),
            actions:path.join(__dirname, 'src/pages/redux/actions'),
            reducers:path.join(__dirname, 'src/pages/redux/reducers'),
        }
    }
}
