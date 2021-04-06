/*
 * @Author: Gui
 * @Date: 2021-04-01 12:07:29
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-01 12:12:08
 * @Description: file content
 */
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
export function fontPage(state) {
    return (dispatch) => {
        dispatch({
            type: 'FONT_PAGE',
            number: state
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