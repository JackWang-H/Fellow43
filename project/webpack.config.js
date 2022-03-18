const path = require("path"); 
// 这是为了可以法打包HTML文件
const HtmlPlugin = require("html-webpack-plugin");
// 这是为了可以重新打包
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // 开发环境配置： production:生产环境（线上）development：开发环境（开发）
    mode: 'development',
    // 入口文件配置
    entry: {
        index: './src/index.js',
        main: './src/main.js'
    },
    // 出口文件配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devServer: {
    // 设置基本目录结构
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        host: 'localhost',
        port: 8081,
        // 不用自己点击，直接跳转
        open: true,
    },

    plugins: [
        // 处理HTML文件的打包
        new HtmlPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitesp
            },
            hash: true,
            
        }),
        // 每次构建先删除dist文件夹，在重新打包dist文件夹
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader','css-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                'css-loader'
                ]
            }
        ]
    } 
}