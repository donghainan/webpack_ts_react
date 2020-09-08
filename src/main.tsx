import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import { StoreContext } from 'redux-react-hook'
import store from '@/store'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
import 'normalize.css'
import '@/assets/styles/comm.less'
import Routes from '@/router/Routes'
const Root = () => {
  const getPopupContainer = (node: { parentNode: any }) => {
    if (node) {
      return node.parentNode
    }
    return document.body
  }
  return (
    <ConfigProvider getPopupContainer={getPopupContainer} locale={zhCN}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </ConfigProvider>
  )
}
ReactDOM.render(<Root />, document.getElementById('root'))
