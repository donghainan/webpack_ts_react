import React, { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { login } from '@/store/actions/login_actions'
import { Button } from 'antd'
import AuthBtn from '@/components/common/AuthBtn'
const Toggle = (props: any) => {
	// 定义一个map函数
	const mapState = useCallback(
		(state) => ({
			auth_token: state.login_reducer.auth_token,
			id: state.login_reducer.id,
		}),
		[]
	)
	//从store中获取数据
	const { auth_token, id } = useMappedState(mapState)
	// 从store中读取dispatch
	const dispatch = useDispatch()
	const loginIn = () => {
		login(dispatch, { username: 'fanxiaohu', password: 'fan1991603' })
	}
	const jump = () => {
		props.history.push('/demo')
	}
	return (
		<>
			<h1>{id} </h1>
			<h1>{auth_token} </h1>
			<Button type="primary" onClick={loginIn}>
				登录！！！
			</Button>
			<button onClick={jump}>看到我了</button>
			<AuthBtn auth="user:add">
				<button>看不到我</button>
			</AuthBtn>
		</>
	)
}

export default Toggle
