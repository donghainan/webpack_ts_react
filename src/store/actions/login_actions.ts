/*
 * @Author: hainan dong
 * @Date: 2020-09-04 16:52:08
 * @LastEditTime: 2020-09-04 17:28:48
 * @LastEditors: hainan dong
 * @Description:
 * @FilePath: \micro-tms-web\src\store\actions\login_actions.ts
 * @Code Is Everything
 */
import { LOGIN } from '../const'
import { Dispatch } from 'redux'
import { userLogin } from '@/api/login'
import { Login } from '@/interface/login'
export const login = async (dispatch: Dispatch, payload: Login) => {
  const res = await userLogin(payload)
  dispatch({
    type: LOGIN,
    payload: res.data,
  })
}
