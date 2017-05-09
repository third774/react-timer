var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', 'script!foundation-sites/dist/foundation.min.js', './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery', React: 'react', ReactDOM: 'react-dom'})],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx'
    ],
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        loaders: [
          'style', 'css', 'sass'
        ],
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}