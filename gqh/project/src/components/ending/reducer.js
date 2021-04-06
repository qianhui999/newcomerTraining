/*
 * @Author: Gui
 * @Date: 2021-04-01 12:07:23
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-01 17:39:49
 * @Description: file content
 */
import * as actions from '../ending/action'
const initState = {
    value: 1,
    jumpValue: 1, //跳转页面
    data:[],
    paging: {
        page: 1, //页数
        pageSize: 6, //一页几条
        total: 0, //总共条数   
        start: 0, //开始条
        end: 5, //结束条
        pageAll: 0, //共几页
        arr: [], //展示列表
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_TOTAL':
            var data  = action.array
            var length = data.length
            var array = data
            let arr = array.slice(state.paging.start, state.paging.pageSize)
            var pageAll = parseInt(length / state.paging.pageSize) + 1
            var paging = {
                ...state.paging,
                total: length,
                arr: arr,
                pageAll: pageAll
            }
            return {
                ...state, paging: paging,data:data
            }
            case 'NEXT_PAGE':
                var num = state.paging.page * state.paging.pageSize
                var number = state.paging.total - num
                if (number > 0) {
                    if (number > 6) {
                        var page = state.paging.page + 1
                        var array = state.data
                        var start = state.paging.start + state.paging.pageSize
                        var end = start + state.paging.pageSize
                        var newArr = array.slice(start, end)
                    } else {
                        var page = state.paging.page + 1
                        var array = state.data
                        var start = state.paging.start + state.paging.pageSize
                        var end = start + number
                        var newArr = array.slice(start, end)
                    }
                } else {
                    return {
                        ...state
                    }
                }
                var paging = {
                    ...state.paging,
                    page: page,
                    start: start,
                    arr: newArr,
                    end: end
                }
                return {
                    ...state, paging: paging
                };
            case 'FONT_PAGE':
                var length = state.paging.arr.length
                if (state.paging.page > 1) {
                    if (length < 6) {
                        var end = state.paging.end - length
                        var start = state.paging.start - state.paging.pageSize
                        var page = state.paging.page - 1
                        var newArr = state.data
                        var array = newArr.slice(start, end)
                    } else {
                        var end = state.paging.end - state.paging.pageSize
                        var start = state.paging.start - state.paging.pageSize
                        var page = state.paging.page - 1
                        var newArr = state.data
                        var array = newArr.slice(start, end)
                    }
                } else {
                    return {
                        ...state
                    }
                }
                var paging = {
                    ...state.paging,
                    page: page,
                    start: start,
                    arr: array,
                    end: end
                }
                return {
                    ...state, paging: paging
                };
            case 'JUMP_PAGE':
                var inpuNum = parseInt(action.number)
                if (inpuNum > state.paging.pageAll || inpuNum === state.paging.pageAll) {
                    var num = (state.paging.pageAll - 1) * state.paging.pageSize
                    var number = state.paging.total - num
                    var end = state.data.length - 1
                    var start = end - number
                    var page = state.paging.pageAll
                    var newArr = state.data
                    var array = newArr.slice(start, end)
                } else {
                    var end = inpuNum * state.paging.pageSize
                    var start = end - state.paging.pageSize
                    var page = inpuNum
                    var newArr = state.data
                    var array = newArr.slice(start, end)
                }
                var paging = {
                    ...state.paging,
                    page: page,
                    start: start,
                    arr: array,
                    end: end
                }
                return {
                    ...state, paging: paging
                };
            default:
                return state;
    }
}