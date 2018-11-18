const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
        // use[1] = 'css-loader'
        // use[0] = 'style-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
        // use[2] = 'sass-loader'
        // use[1] = 'css-loader'
        // use[0] = 'style-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
        // use[2] = 'less-loader'
        // use[1] = 'css-loader'
        // use[0] = 'style-loader'
      },
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 25000,
      //         name: '[name].[ext]'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|ttf|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]
  }
}
