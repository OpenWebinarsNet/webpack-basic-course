const path = require('path');
const getOutputByName = require('./webpack.parts').getOutputByName;

module.exports = {
  mode: 'development',

  // Input
  entry: path.resolve(__dirname, 'src', 'index.js'),

  // Output
  output: getOutputByName('prod.js')
}
