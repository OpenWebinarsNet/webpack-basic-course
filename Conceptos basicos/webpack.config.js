const path = require('path');
const getOutputByName = require('./webpack.parts').getOutputByName;

module.exports = env => {
  return {
    mode: 'development',

    // Input
    entry: path.resolve(__dirname, 'src', 'index.js'),

    // Output
    output: getOutputByName(env.outputFilename)
  }
}
