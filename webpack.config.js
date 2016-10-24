module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist', 
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
}
