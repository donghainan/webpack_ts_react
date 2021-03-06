/*
 * @Author: hainan dong
 * @Date: 2020-09-02 11:26:39
 * @LastEditTime: 2020-09-03 15:07:56
 * @LastEditors: hainan dong
 * @Description: 
 * @FilePath: \micro-tms-web\build\webpack.dev.conf.js
 * @Code Is Everything
 */
const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    host: 'localhost',
    port: 8899,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://www.yanhao.love', //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        pathRewrite: {
          // "^/api": "/api",
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        },
      },
    },
  },
}
