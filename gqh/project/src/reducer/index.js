/*
 * @Author: Gui
 * @Date: 2021-03-29 15:06:08
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-01 14:03:27
 * @Description: file content
 */
import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import endReducer from '../components/ending/reducer'
import appReducer from '../components/app/reducer'

const rootReducer = combineReducers({
    //在这里导入每个模块的reducer
    appReducer,
    endReducer,
    routing: routerReducer
})

export default rootReducer