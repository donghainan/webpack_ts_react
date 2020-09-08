const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minSize: 1, // 不是第三方模块，被引入两次也会被抽离
          minChunks: 2,
          priority: -20,
        },
      },
    },
    minimizer: [
      new TerserJSPlugin({
        // parallel: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
}
