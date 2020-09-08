import React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout
const { Item, SubMenu } = Menu
const App = (props: any) => {
	return (
		<>
			<Layout className="global-layout">
				<Sider className="global-sider">
					<Menu mode="inline">
						<Item>Menu</Item>
						<SubMenu title="SubMenu">
							<Item>SubMenuItem</Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout className="global-content-layout">
					<Header className="global-header">Header</Header>
					<Content>{props.children}</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default App
