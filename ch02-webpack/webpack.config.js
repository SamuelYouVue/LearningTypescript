const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: [
      './src/ts/main.ts',
      './src/js/first.js'
    ]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   include: [path.resolve(__dirname, 'src/ts')],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src/ts')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: [
          '/node_modules/', 
          '/webpack.config.babel.js'
        ],
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" }
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
};