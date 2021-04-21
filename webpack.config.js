const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/js/yume.js'),
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
      output: {
        path: path.resolve(__dirname, './build/js'),
        filename: 'yume.js',
        libraryTarget: 'var',
        library: 'Yume',
        libraryExport: 'default',
      },
};