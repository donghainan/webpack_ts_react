/*
 * @Author: hainan dong
 * @Date: 2020-09-02 15:24:36
 * @LastEditTime: 2020-09-08 09:56:35
 * @LastEditors: hainan dong
 * @Description: 静态路由文件 + 动态路由
 * @FilePath: \micro-tms-web\src\router\Routes.tsx
 * @Code Is Everything
 */

import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const Test = lazy(() => import('@/views/Test'))
const Login = lazy(() => import('@/views/Login'))
const Demo = lazy(() => import('@/views/Demo'))
import App from '@/layout/App'
// 基础路由
const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<div>loading...</div>}>
				<Switch>
					<Route exact path="/login" component={Login} />
					<App>
						<Route path="/demo" component={Demo}></Route>
						<Route path="/test" component={Test}></Route>
					</App>
				</Switch>
			</Suspense>
		</Router>
	)
}

export default Routes
