const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');

const common = require('./webpack.common.js.js');

const dirPath = path.join(__dirname, '../');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[hash].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            jsExtension: ".gz",
            template: `${dirPath}index.html`,
        }),
        new CompressionPlugin(),
        new HtmlWebpackChangeAssetsExtensionPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            parallel: 2,
            terserOptions: {
                compress: {
                    drop_console: true,

                }
            }
        })],
    },
});