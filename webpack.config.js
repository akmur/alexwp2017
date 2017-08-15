const path = require('path');

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/dist/main.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: 'source-map'
};
