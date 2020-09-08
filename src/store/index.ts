/*
 * @Author: hainan dong
 * @Date: 2020-09-02 17:53:44
 * @LastEditTime: 2020-09-04 17:31:35
 * @LastEditors: hainan dong
 * @Description: Create App store and combine reducers
 * @FilePath: \micro-tms-web\src\store\index.ts
 * @Code Is Everything
 */
//@ts-nocheck
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import login_reducer from './reducers/login_reducer'
const rootReducer = combineReducers({
  login_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
  rootReducer,
  enhancer
)

export default store
