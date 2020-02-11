const webpack = require('webpack');
const path = require('path');
const srcPath = path.join(__dirname, '../');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const bundleLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const dirPath = path.join(__dirname, '../');

module.exports = {
    entry: `${dirPath}src/index.jsx`,
    output: {
        path: `${dirPath}dist`,
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    target: 'web',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.scss', '.less', '.svg', '.gif'],
        alias: {
            '@src': path.join(srcPath, 'src'),
            '@pages': path.join(srcPath, 'src/pages'),
            '@utils': path.join(srcPath, 'src/utils'),
            '@images': path.join(srcPath, 'src/images'),
            'globalize$': path.resolve( __dirname, 'node_modules/globalize/dist/globalize.js'),
            'globalize': path.resolve(__dirname, 'node_modules/globalize/dist/globalize'),
            'cldr$': path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'),
            'cldr': path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr'),
        },
    },
    plugins: [
        new FaviconsWebpackPlugin(path.join(srcPath, 'src', 'images', 'static', 'logo-short.png')),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                BILLING_APP_API_URL: JSON.stringify(process.env.BILLING_APP_API_URL),
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {targets: { browsers: ['last 10 versions']}}],
                        ],
                    },
                },
            },
            {
                test: /\.(sc|sa|c)ss$/, 
                use: [
                    {
                        loader: bundleLoader,
                        options: {
                            injectType: 'singletonStyleTag',
                        },
                    },
                	{
                		loader: 'css-loader',
                		options: {
                			importLoaders: 1,
                            sourceMap: !isProduction, 
                		},
                    },
                    
			    ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            { 
                test: /\.(eot|svg|ttf|woff|woff2)$/, 
                use: 'url-loader?name=[name].[ext]',
            },
        ],
    },
    watchOptions: {
        ignored: ['/dist/', 'node_modules'],
    },
};