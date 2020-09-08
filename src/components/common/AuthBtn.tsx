/*
 * @Author: hainan dong
 * @Date: 2020-09-07 09:34:42
 * @LastEditTime: 2020-09-07 11:58:25
 * @LastEditors: hainan dong
 * @Description: 按钮权限控制
 * @FilePath: \micro-tms-web\src\components\common\AuthBtn.tsx
 * @Code Is Everything
 */

import React, { useState } from 'react'
{
	/* <AuthBtn auth="user:add"><button>权限按钮</button></AuthBtn> */
}
const AuthBtn = (props: any) => {
	const permissions = localStorage.permissions && localStorage.permissions.indexOf(props.auth) > -1
	const [isShow] = useState(permissions)
	return <>{isShow && props.children}</>
}
export default AuthBtn
