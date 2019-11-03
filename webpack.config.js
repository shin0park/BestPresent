const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development', //개발시 production
    devtool: 'eval', //개발시 hidden-source-map
    resolve: {
        extensions: ['.js','.vue','.ejs']
    },
    entry: {
        app: path.join(__dirname, 'src/main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },{
            test: /\.css$/,
            loader: [
                'vue-style-loader',
                'css-loader',
            ]
        },{
            test: /\.(png|jpg)$/,
            loader: [
                'file-loader'
            ]
        }],
    },
    node: { fs: 'empty' },
    plugins: [
        new VueLoaderPlugin(),
        new Dotenv(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'src/dist'),
        //publicPath: '/src/dist',
    },
}