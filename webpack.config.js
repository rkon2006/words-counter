var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist'
    },

    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'wordsCounter.html')
    })]
};
