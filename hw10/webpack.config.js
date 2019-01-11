// Use Google as much as you can for this. I do want detailed explanations however.
// Comment code inline.

// Also explain what the .babelrc does :)

// Why can't we use import? explain difference between import and require
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  resolve: {
    modules: ['src', 'node_modules']
  },
  devtool: 'source-map',
  entry: { // what is entry???
    // What does this do...
    vendor: ['react', 'react-dom'],
    // what does this mean
    client:     './src/index.js',
  },
  output: { // explain what the output means
    path: __dirname + '/dist',
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      // Explain how the following rules work
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: [
            "style-loader",
            "css-loader"
        ]
      },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
     ]
  },
  devServer: { 
    // what does this do??
    historyApiFallback: true,
    disableHostCheck: true,
    port: 8080
  },
  plugins: [
    // Explain how this plugin works and what each option does
    new HtmlWebpackPlugin({
      title: 'Alternative Dojo',
      template: './src/index.html',
      filename: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
};

// what is module.exports Why can't we just do export default?
// explain the difference between modules.exports and export
module.exports = webpackConfig;