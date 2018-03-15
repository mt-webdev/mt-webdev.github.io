const webpackMerge = require('webpack-merge');
const commonWebpack = require('./webpack.common.js')


module.exports = webpackMerge(commonWebpack, {
    mode: 'development'
});