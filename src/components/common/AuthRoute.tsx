/*
 * @Author: hainan dong
 * @Date: 2020-09-07 09:34:29
 * @LastEditTime: 2020-09-07 11:12:21
 * @LastEditors: hainan dong
 * @Description: 访问权限控制
 * @FilePath: \micro-tms-web\src\components\common\AuthRoute.tsx
 * @Code Is Everything
 */
import { isAuth } from '@/utils/token'
import { Route, Redirect } from 'react-router-dom'
import React from 'react'
//@ts-ignore
const AuthRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuth()) {
					// 登录
					return <Component {...props} />
				} else {
					// 没有登录
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: props.location },
							}}
						/>
					)
				}
			}}
		/>
	)
}
export default AuthRoute
