const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Webpack Starter',
        header: 'Webpack Starter',
        metaDesc: 'Basic webpack configuration for HTML and SASS',
        template: './src/index.html',
        inject: 'body',
    })
  ]
};