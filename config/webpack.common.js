const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { resolve, outDir } = require('./helpers');


module.exports = {
    cache: true,
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: resolve(outDir),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        library: 'ac_[name]',
        libraryTarget: 'var',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [resolve('src/index.html')]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['file-loader']
            },
            {
                test: /(web\.manifest|manifest)\.json$/,
                loader: 'url-loader',
                options: {
                    mimeType: 'application/manifest+json'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin([outDir]),
        new CopyWebpackPlugin([
            {
                from: resolve('./src/service-worker.js'),
                to: resolve(`${outDir}/sw.js`)
            },
            {
                from: './src/app**/*',
                to: resolve(outDir + '/app'),
                flatten: true
            },
            {
                from: './src/web.manifest.json',
                to: resolve(`${outDir}/manifest.json`)
            },
            {
                from: './src/images**/*',
                to: resolve(outDir + '/images'),
                flatten: true
            },
        ]),
        new CheckerPlugin() // needed for awesome-typescript-loader
    ],
    devServer: {
        port: 1234,
        host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true,
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/
            // poll: 1000
        }
    }
};
