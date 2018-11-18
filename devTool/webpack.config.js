const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'cheap-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Devtool'
    })
  ]
}