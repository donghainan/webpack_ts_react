/*
 * @Author: hainan dong
 * @Date: 2020-09-03 10:19:20
 * @LastEditTime: 2020-09-07 14:19:01
 * @LastEditors: hainan dong
 * @Description: 全局进度条配置
 * @FilePath: \micro-tms-web\src\utils\service\globalLoading.ts
 * @Code Is Everything
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false })
let loadingRequestCount: number = 0

const showLoading = () => {
  if (loadingRequestCount === 0) {
    NProgress.start()
  }
  loadingRequestCount++
}

const hideLoading = () => {
  if (loadingRequestCount <= 0) return
  loadingRequestCount--
  if (loadingRequestCount === 0) {
    NProgress.done()
  }
}

export { showLoading, hideLoading }
