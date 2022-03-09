const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/main.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
    plugins: [
      new HTMLWebpackPlugin({
          template: path.resolve(__dirname, "static", "main.html"),
      }),
    ],
    module: {
      rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpg|png|gif)$/,
            include: /общаг/,
            loader: 'url'
        }
    ],
  }
}