const path = require('path');

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/dist/main.bundle.js',
  },
  devtool: 'source-map'
};
