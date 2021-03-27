const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', { loader: 'css-loader', options: { esModule: false } }, 'sass-loader']
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 8192,
            name: 'media/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: path.resolve(__dirname, 'docs/index.html'), template: 'src/index.html', inject: true, hash: false }),
    new VueLoaderPlugin()
  ],
  performance: {
    maxEntrypointSize: 300000,
    maxAssetSize: 300000,
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
  }
};
