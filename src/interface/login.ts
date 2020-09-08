/*
 * @Author: hainan dong
 * @Date: 2020-09-03 17:12:02
 * @LastEditTime: 2020-09-04 17:29:58
 * @LastEditors: hainan dong
 * @Description: interface define
 * @FilePath: \micro-tms-web\src\interface\login.ts
 * @Code Is Everything
 */
export interface Login {
  username: string
  password: string
}

export interface UserInfo {
  auth_token: string
  id?: number
}