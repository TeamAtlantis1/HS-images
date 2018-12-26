const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: __dirname + "/client/index.jsx",
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist"
  }
 };

// const config = {
//   entry: __dirname + '/client/src/index.jsx',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       }
//     ]
//   },
//   resolve: {
//     extensions: [
//       '.js',
//       '.jsx'
//     ]
//   }
// }

module.exports = config;