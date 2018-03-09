import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks(module) {
    return module.context && ~module.context.indexOf('node_modules');
  },
});
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: true,
  template: path.resolve(__dirname, 'index.html'),
  chunks: ['vendor', 'app'],
});
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);
const uglifyJSPlugin = new UglifyJSPlugin();
const babelPolyfill = 'babel-polyfill';
const main = './src/main.js';

const serverConf = {
  port: 3030,
  historyApiFallback: true,
  hot: true,
  host: '0.0.0.0',
  contentBase: [path.resolve(__dirname), path.resolve(__dirname, 'dist')],
};

export default (env) => {
  const isDev = env === 'development';

  const files = isDev ? [
    'webpack-dev-server/client?http://0.0.0.0:3030',
    'webpack/hot/only-dev-server',
    babelPolyfill,
    main,
  ] : [
    babelPolyfill,
    main,
  ];

  const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
    'process.env.API_URL': isDev
      ? '"http://localhost:3000"'
      : '"http://myendpoint.ap-southeast-2.elasticbeanstalk.com"',
    'process.env.API_VERSION': '"v1"',
  });

  const plugins = isDev ? [
    commonsChunkPlugin,
    htmlWebpackPlugin,
    definePlugin,
    hotModuleReplacementPlugin,
  ] : [
    cleanWebpackPlugin,
    commonsChunkPlugin,
    htmlWebpackPlugin,
    definePlugin,
    uglifyJSPlugin,
  ];

  return {
    devtool: isDev ? '#cheap-module-source-map' : '#source-map',
    entry: {
      app: files,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    devServer: isDev ? serverConf : {},
    resolve: {
      modules: [
        path.resolve(__dirname, 'dist'),
        'node_modules',
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.spec\.js$/,
          use: { loader: 'ignore-loader' },
        },
      ],
    },
    plugins,
  };
};
