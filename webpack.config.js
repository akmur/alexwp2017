/* global module process */

let devToolType = process.env.NODE_ENV === 'dev' ? 'eval-source-map' : 'nosources-source-map';

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    filename: './assets/js/dist/main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: devToolType
};
