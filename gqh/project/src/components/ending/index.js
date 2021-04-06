/*
 * @Author: Gui
 * @Date: 2021-03-30 14:23:49
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-01 19:05:18
 * @Description: file content
 */
import { Component } from 'react';
import './index.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Select, Checkbox } from 'antd';
import * as actions from './action'
import axios from 'axios'
import EndTable from '../endTable/index'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class Ending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '',
                tel: "",
                bus: ''
            }
        }
    }
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }
        const { Option } = Select;
        const { paging } = this.props.endState
        const { name, tel, bus } = this.state.form
        const { fontPage, nextPage } = this.props.endAction
        return (
            <div className='pedding'>
                <div className='right-container-form'>
                    <div className='form-name'>
                        <span className='form-span' >姓名</span>
                        <input className='form-input' type='text' placeholder='请输入姓名' value={name} onChange={this.nameChange.bind(this)}></input>
                    </div>
                    <div className='form-tel'>
                        <span className='form-span' >手机号</span>
                        <input className='form-input' type='text' placeholder='请输入手机号' value={tel} onChange={this.telChange.bind(this)}></input>
                    </div>
                    <div className='form-qy'>
                        <span className='form-span' >关联企业方</span>
                        <input className='form-input' type='text' placeholder='请输入企业名称' value={bus} onChange={this.busChange.bind(this)}></input>
                    </div>
                    <div className='form-btn'>
                        <div className='btn-search' onClick={this.formChange.bind(this)}>搜索</div>
                        <div className='btn-zero' onClick={this.inputNull.bind(this)}>重置</div>
                    </div>
                </div>
                <div className='right-container-table'>
                    <div className='form-button'>
                        <div className='btn-without'>同步信用代码</div>
                        <div className='btn-batch'>批量导出开卡资料</div>
                    </div>
                    <div className='table'>
                        <div className='table-head'>
                            <div className='table-head-check'>
                                <Checkbox onChange={onChange} style={{ width: 16, height: 16 }}></Checkbox>
                            </div>
                            <div className='table-job-name'>个体户名称</div>
                            <div className='table-name'>姓名</div>
                            <div className='table-tel'>手机号</div>
                            <div className='table-job1'> 关联企业方</div>
                            <div className='table-yyzz1'>营业执照</div>
                            <div className='table-time'>入驻成功时间</div>
                            <div className='table-operation'>操作</div>
                        </div>
                        <div className='table-content'>
                            {paging.arr.map((item, index) => <EndTable key={index} obj={item} />)}
                        </div>
                    </div>

                </div>
                <div className='table-btn'>
                    <div className='paging-text'>共{paging.total}条记录  第 {paging.page} / {paging.pageAll} 页</div>
                    <div className='paging-left'><LeftOutlined style={{ fontSize: 'rgba(0,0,0,0.25)' }} onClick={() => { fontPage() }} /></div>
                    <div className='paging-center'>{paging.page}</div>
                    <div className='paging-right'><RightOutlined style={{ fontSize: 'rgba(0,0,0,0.65)' }} onClick={() => { nextPage() }} /></div>
                    <div className='paging-title'>
                        <span>6条/页</span>
                        <div></div>
                    </div>
                    <span className='jump-spanO'>跳至</span>
                    <input type='text' className='jump' onChange={this.inputJump.bind(this)}></input>
                    <span className='jump-spanT'>页</span>
                </div>
            </div>
        )
    }
    busChange(val) {
        //关联企业查询
        var form = {
            ...this.state.form,
            bus: val.target.value
        }
        this.setState({
            form: form
        })
    }
    telChange(val) {
        //电话查询
        var form = {
            ...this.state.form,
            tel: val.target.value
        }
        this.setState({
            form: form
        })
    }
    nameChange(val) {
        //姓名输入框查询
        var form = {
            ...this.state.form,
            name: val.target.value
        }
        this.setState({
            form: form
        })
    }
    inputNull() {
        this.setState({
            form: {
                name: '',
                tel: "",
                bus: ''
            }
        }, this.formChange())
    }
    formChange() {
        const { getTotal } = this.props.endAction
        const { name, tel, bus } = this.state.form
        axios.get("http://localhost:8000/searchEnd?name=" + name + "&tel=" + tel + "&bus=" + bus)
            .then(function (response) {
                var data = response.data
                getTotal(data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    inputJump = function (val) {
        this.props.endAction.jumpPage(val.target.value)
    }
    componentDidMount() {
        const { getTotal } = this.props.endAction
        let url = "http://localhost:8000/ending"
        axios.get(url)
            .then(function (response) {
                var data = response.data
                getTotal(data)
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }
}

export default connect((state) => {
    return ({
        endState: state.endReducer
    })
}, (dispatch) => {
    return {
        endAction: bindActionCreators(actions, dispatch)
    }
})(Ending);