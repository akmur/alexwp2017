const path = require('path');

let devToolType;

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/dist/main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    ],
  },
  devtool: 'eval-source-map'
};
