/*
 * @Author: hainan dong
 * @Date: 2020-09-04 16:07:36
 * @LastEditTime: 2020-09-04 17:30:55
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \micro-tms-web\src\store\reducers\login_reducer.ts
 * @Code Is Everything
 */
import { LOGIN, LOGIN_TYPE } from '../const'
import { UserInfo } from '@/interface/login'
// 初始化state
const userInfo: UserInfo = {
  auth_token: '',
}
// 登录接口action
const login_reducer = (state: UserInfo = userInfo, action: { type: LOGIN_TYPE; payload: any }) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
export default login_reducer
