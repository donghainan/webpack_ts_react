/*
 * @Author: hainan dong
 * @Date: 2020-09-07 10:57:16
 * @LastEditTime: 2020-09-07 11:00:15
 * @LastEditors: hainan dong
 * @Description: token增删改查
 * @FilePath: \micro-tms-web\src\utils\token.ts
 * @Code Is Everything
 */
const TOKEN: string = 'token'
export const getToken = (): string => localStorage.getItem(TOKEN) || ''
export const setToken = (token: string) => localStorage.setItem(TOKEN, token)
export const removeToken = () => localStorage.removeItem(TOKEN)
export const isAuth = (): boolean => !!getToken()
