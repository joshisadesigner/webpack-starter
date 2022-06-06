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
    },
};