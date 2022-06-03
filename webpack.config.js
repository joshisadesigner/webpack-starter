const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        open: true
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack Starter',
            header: 'Webpack Starter',
            metaDesc: 'Basic webpack configuration for HTML and SASS',
            template: './src/index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ],
            }
        ]
    },
    output: {
        clean: true,
    },
};