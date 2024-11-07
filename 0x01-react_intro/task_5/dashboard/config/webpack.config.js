const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        devtoolModuleFilenameTemplate: '[resource-path]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        compress: true,
        open: true,
        hot: true,
        port: 8564,
    },
    plugins: [
        new HtmlWebpackPlugin({
            name: "index.html",
            inject: false,
            template: "../dist/index.html"
        }),
    ],
};