const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    mode: 'development',

    // Input
    entry: path.resolve(__dirname, 'src', 'index.js'),

    // Output
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Webpack plugins'
      })
    ]
  }
}