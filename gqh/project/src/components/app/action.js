/*
 * @Author: Gui
 * @Date: 2021-03-29 15:05:26
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-02 17:26:03
 * @Description: file content
 */

export function navChange(state) {
    return (dispatch) => {
        dispatch({
            type: 'NAV_CHANGE',
            number: state
        })
    }
}


export function getTotal(data) {
    return (dispatch) => {
        dispatch({
            type: 'GET_TOTAL',
            array: data
        })
    }
}
export function nextPage(state) {
    return (dispatch) => {
        dispatch({
            type: 'NEXT_PAGE',
            number: state
        })
    }
}
export function check(index,check) {
    return (dispatch) => {
        dispatch({
            type: 'CHECK',
            number: index,
            string: check
        })
    }
}
export function fontPage(state) {
    return (dispatch) => {
        dispatch({
            type: 'FONT_PAGE',
            number: state
        })
    }
}
export function delMore(state) {
    return (dispatch) => {
        dispatch({
            type: 'DEL_MORE',
            number: state
        })
    }
}
export function delAll(state) {
    return (dispatch) => {
        dispatch({
            type: 'DEL_All',
            boolean: state
        })
    }
}
export function jumpPage(state) {
    return (dispatch) => {
        dispatch({
            type: 'JUMP_PAGE',
            number: state
        })
    }
}
export function checkFalse(state) {
    return (dispatch) => {
        dispatch({
            type: 'CHECK_FALSE',
            boolean: state
        })
    }
}