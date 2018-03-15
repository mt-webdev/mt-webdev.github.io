const path = require('path');
const webpack = require('webpack');
const Autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

const { resolve, outDir } = require('./helpers');

const _EXCLUDES = /(node_modules)|(\.awcache)|(\.vscode)|(dist)/;

module.exports = {
    entry: {
        main: './src/main.ts',
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts'
    },
    devtool: 'inline-source-map',
    cache: true,
    output: {
        path: resolve(outDir),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[name].bundle.js',
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
                exclude: _EXCLUDES,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                exclude: _EXCLUDES,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?-minimize!sass-loader'
                })
            },
            {
                test: /\.css$/,
                exclude: _EXCLUDES,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: true }
                        }
                    ]
                })
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                exclude: _EXCLUDES,
                loader: 'raw-loader',
                exclude: [resolve('src/index.html')]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['file-loader']
            },
            {
                test: /(web\.manifest|manifest)\.json$/,
                exclude: _EXCLUDES,
                loader: 'url-loader',
                options: {
                    mimeType: 'application/manifest+json'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [Autoprefixer]
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html',
            favicon: 'src/images/favicon.ico'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
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
                from: './src/templates**/*',
                to: resolve(outDir + '/templates'),
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
    optimization: {
        minimizer: [
            new UglifyWebpackPlugin({
                exclude: /(node_modules)|(\.awcache)|(config)|(dist)/,
                uglifyOptions: {
                    compress: true,
                    comments: false,
                    beautify: false,
                    sourceMap: true
                }
            })
        ]
    },
    performance: {
        hints: 'warning'
    },
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
