const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
module.exports = {
  entry: ['react', 'react-dom', 'react-router-dom', 'axios'],
  mode: 'development',
  output: {
    filename: 'react.dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: 'react',
  },
  plugins: [
    new DllPlugin({
      name: 'react',
      path: path.resolve(__dirname, '../dll/minifest.json'),
    }),
  ],
}
