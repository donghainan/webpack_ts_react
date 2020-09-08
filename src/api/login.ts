/*
 * @Author: hainan dong
 * @Date: 2020-09-03 15:35:25
 * @LastEditTime: 2020-09-04 10:11:55
 * @LastEditors: hainan dong
 * @Description: 用户登录相关接口
 * @FilePath: \micro-tms-web\src\api\login.ts
 * @Code Is Everything
 */
import http from '@/utils/service/http'
import { Login } from '@/interface/login'
export function userLogin(payload: Login) {
  return http({
    method: 'post',
    url: 'https://www.yanhao.love/api/login',
    data: payload
  })
}