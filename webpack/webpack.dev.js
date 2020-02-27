const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dirPath = path.join(__dirname, '../');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map-eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: `${dirPath}index.html`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        logLevel: 'info',
        port: 3000,
        hot: true,
        inline: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/':{
                target: 'http://frontend-challenge-api.pepperhq.com/menu.json', 
                secure: false,
                changeOrigin: true,
            },
        },
    },
});