const path = require('path')
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff2|woff|otf)$/,
                type: 'asset/resource',
            }
        ]
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        path: path.dirname(__dirname, 'dist'),
        filename: 'bundle.js',
    },
}