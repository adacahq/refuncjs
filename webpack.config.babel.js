import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default env => ({
  devtool: env === 'dev' ? '#eval-source-map' : '#source-map',
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].[name].js',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'index.html'),
      chunks: ['app'],
    }),
  ],
});
