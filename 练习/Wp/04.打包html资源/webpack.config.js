/*
    loader: 1. 下载   2. 使用（配置loader）
    plugins: 1. 下载  2. 引入  3. 使用
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build'),
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
            }
        ),
    ],
    mode: 'development'
}