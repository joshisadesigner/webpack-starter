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
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            hash: true,
            inject: 'body',
            header: 'Webpack Starter',
            metaDesc: 'Basic webpack configuration for HTML and SASS',
            template: path.resolve(__dirname, './src/index.html'),
            title: 'Webpack Starter',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                  "css-loader",
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: false,
                            sassOptions: {
                                includePaths: ['./src/styles', 'node_modules'],
                            }
                        }
                    }
                ],
            }
        ]
    },
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './dist'),
    },
};