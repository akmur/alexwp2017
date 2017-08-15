const path = require('path');

module.exports = {
  entry: './assets/js/dist/main.babel.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/dist/main.bundle.js',
  },
  devtool: 'source-map'
};
