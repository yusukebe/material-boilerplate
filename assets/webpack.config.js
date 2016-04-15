var path = require('path');

module.exports = {
  entry: './main.js',
  output: { path: path.join(__dirname + '/../public/js/'), filename: 'app.js' },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
