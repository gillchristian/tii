// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    //tests: path.join(__dirname, 'src/tests.js'),
    index: path.join(__dirname, 'src/tii.js')
  },
  output: {
    path: 'lib',
    filename: '[name].js',
    library: true,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { 
				test: /\.js$/, 
				loader: 'babel',
        exclude: [/node_modules/, /app/],
        query: {
          presets: ['es2015']
        }
			}
    ]
  }
};