const { merge } = require('webpack-merge');
const config = require('./webpack.common');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: '[name]-[contenthash].js',
    assetModuleFilename: 'img/[name]-[hash][ext]',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css'
    })
  ]
});
