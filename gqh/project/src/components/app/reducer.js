/*
 * @Author: Gui
 * @Date: 2021-03-29 15:05:09
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-02 18:25:49
 * @Description: file content
 */
import * as actions from './action'
const initState = {
    navList: ["待入驻", "入驻中", "已入驻", "已取消"],
    value: 1,
    jumpValue: 1, //跳转页面a
    data:[
        {
       // const { business_name, name, tel, associated_enterprise, status, business_license, number, check } = this.props.appState.paging.arr[index]
        
       business_name: '景宁筑商张晶商务服务工作室',
            name: '张晶',
            tel: '15623901400',
            associated_enterprise: '河北金猫信息科技有限公司',
            status: '成功',
            business_license: '查看',
            number: 'w821225633',
            check:false
        },
        {
            business_name: '景宁筑商张晶商务服务工作室',
            name: '张晶',
            tel: '15623901400',
            associated_enterprise: '河北金猫信息科技有限公司',
            status: '失败',
            business_license: '查看',
            number: 'w821225633',
            check:false
        },
        {
            business_name: '景宁筑商张晶商务服务工作室',
            name: '张晶',
            tel: '15623901400',
            associated_enterprise: '河北金猫信息科技有限公司',
            status: '失败',
            business_license: '未上传',
            number: 'w821225633',
            check:false
        },
        {
            business_name: '景宁筑商张晶商务服务工作室',
            name: '张晶',
            tel: '15623901400',
            associated_enterprise: '河北金猫信息科技有限公司',
            status: '成功',
            business_license: '查看',
            number: 'w821225633',
            check:false
        },
        {
            business_name: '景宁筑商张晶商务服务工作室',
            name: '张晶',
            tel: '15623901400',
            associated_enterprise: '河北金猫信息科技有限公司',
            status: '成功',
            business_license: '未上传',
            number: 'w821225633',
            check:false
        },
        {
            business_name: '景宁筑商张晶商务服务工作室',
            name: '张晶',
            tel: '15623901400',
            associated_enterprise: '河北金猫信息科技有限公司',
            status: '失败',
            business_license: '查看',
            number: 'w821225633',
            check:false
        }
    ],
    paging: {
        page: 1, //页数
        pageSize: 6, //一页几条
        total: 0, //总共条数   
        start: 0, //开始条
        end: 5, //结束条
        pageAll: 0, //共几页
        arr: [], //展示列表
    },
    subArr:[]  ,//提交数组
    end:[],
    checked:false
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'NAV_CHANGE':
            var val = action.number
            return {
                ...state, value: val
            };
        case 'GET_TOTAL':
            var data  = action.array
            var length = data.length
            var array = data
            let arr = array.slice(state.paging.start, state.paging.pageSize)
            data.map((item,index)=>{
                if(item.check==='false'){
                    item.check = false
                }
            })
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
            case 'CHECK' : 
                var check = action.string
                var index = action.number
                var obj =  {...state.paging.arr[action.number],check:check}
                var newArr = state.paging.arr
                newArr[index] = obj
                var paging  = {...state.paging , arr:newArr}
                var array =[]
                var newEnd = []
                newArr.map((item)=>{
                    if(item.check === true){
                        newEnd.push(item)
                    }
                })
                array.map((item,index)=>{
                    if(item.check === false){
                        newEnd.slice(index,1)
                    }
                })
                newArr.map((item,index)=>{
                    if(item.check === true){
                        array.push(item.index)
                    }
                })
                array.map((item,index)=>{
                    if(item.check === false){
                        array.slice(index,1)
                    }
                })
                return {...state , paging:paging,subArr:array,end:newEnd};
            case 'DEL_All' :
                // console.log(action.boolean)
                let checkAll = action.boolean
                let newData = state.paging.arr
                let subArr =state.subArr
                if(checkAll){
                    newData.map((item)=>{
                        item.check = true
                        subArr.push(item.index)
                    })
                }else{
                    newData.map((item)=>{
                        item.check = false
                        subArr=[]
                    })
                }
                var paging = {...state.paging , arr:newData}
                console.log(newData,subArr)
                return {...state , paging:paging , subArr:subArr , checked:checkAll};
            case 'CHECK_FALSE':
                let checked  = action.boolean
                return {...state,checked:checked}
            default:
                return state;
    }
}