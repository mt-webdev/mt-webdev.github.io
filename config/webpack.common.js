const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { resolve, outDir } = require('./helpers');


module.exports = {
    entry: {
        main: './src/main.ts'
    },
    devtool: 'inline-source-map',
    cache: true,
    output: {
        path: resolve(outDir),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        library: 'ac_[name]',
        libraryTarget: 'var',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', 'scss']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /(node_modules)/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                loader: 'raw-loader',
                exclude: [resolve('src/index.html')]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['file-loader']
            },
            {
                test: /(web\.manifest|manifest)\.json$/,
                exclude: /(node_modules)/,
                loader: 'url-loader',
                options: {
                    mimeType: 'application/manifest+json'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin([resolve('dist')], {
            root: __dirname,
            watch: true,
            allowExternal: true
        }),
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
        contentBase: './dist',
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
