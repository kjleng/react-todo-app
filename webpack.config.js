const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DIST_DIR = path.resolve(__dirname + '/dist');
const SRC_DIR = path.resolve(__dirname + '/src');

module.exports = (env = {}, args) => {
  const plugins = [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    inject: true,
  })];

  if (env && env.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    context: __dirname,
    entry: {
      main: SRC_DIR + '/index.jsx',
    },
    output: {
      path: DIST_DIR,
      publicPath: '/',
      filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    devServer: {
      inline: true,
      contentBase: DIST_DIR,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ],
    },
    plugins,
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        react: path.resolve('./node_modules/react'),
      },
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    }
  };
};
