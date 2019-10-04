const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

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
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'src/dist'),

    },
}