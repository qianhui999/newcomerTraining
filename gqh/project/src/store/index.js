/*
 * @Author: Gui
 * @Date: 2021-03-29 15:06:12
 * @LastEditors: Gui
 * @LastEditTime: 2021-03-29 15:15:36
 * @Description: file content
 */
import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

 const createStoreWithMdware = applyMiddleware(
    thunkMiddleware
)(createStore);

export default createStoreWithMdware;