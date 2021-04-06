/*
 * @Author: Gui
 * @Date: 2021-03-30 14:23:49
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-02 17:34:39
 * @Description: file content
 */
import { Component } from 'react';
import './index.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import * as actions from '../app/action'
import * as action from '../ending/action'
import { Select, Checkbox } from 'antd';
import Table from '../table/index'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class Pedding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            form: {
                name: '',
                tel: "",
                bus: '',
                permit: '',
                auto: '',
            }

        }

    }

    render() {


        const { Option } = Select;
        const { paging, jumpValue ,checked,data} = this.props.appState
        const { nextPage, fontPage, jumpPage } = this.props.appAction
        const { name, tel, bus, permit, auto } = this.state.form
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
                    <div className='form-zz'>
                        <div className='form-span'>营业执照</div>
                        <Select 
                            style={{ width: 200, height: 32, positiona: 'absolute', left: 99 }}
                            onChange={this.permitChange.bind(this)}
                            dropdownStyle={{ width: 200, height: 76, padding: 0, borderRadius: 5 }}
                            defaultValue='请选择' value={permit}>
                            <Option value="查看" >已上传</Option>
                            <Option value="未上传" >未上传</Option>
                        </Select>
                    </div>
                    <div className='form-result'>
                        <div className='form-span'>自动办理结果</div>
                        <Select 
                            style={{ width: 200, height: 32, positiona: 'absolute', left: 99 }}
                            onChange={this.autoChange.bind(this)}
                            dropdownStyle={{ width: 200, height: 76, padding: 0, borderRadius: 5 }}
                            defaultValue='请选择' value={auto}>
                            <Option value="成功" >成功</Option>
                            <Option value="失败" >失败</Option>
                        </Select>
                    </div>
                    <div className='form-btn'>
                        <div className='btn-search' onClick={this.formChange.bind(this)}>搜索</div>
                        <div className='btn-zero' onClick={this.inputNull.bind(this)}>重置</div>
                    </div>
                </div>
                <div className='right-container-table'>
                    <div className='form-button'>
                        <div className='btn-submit' onClick={this.delMore.bind(this)}>批量提交</div>
                        <div className='btn-cxbl'>批量重新办理</div>
                        <div className='btn-zszm'>打印住所证明</div>
                    </div>
                    <div className='table'>
                        <div className='table-head'>
                            <div className='table-head-check'>
                                <Checkbox onChange={this.onChange.bind(this)} style={{ width: 16, height: 16 }} checked={checked}></Checkbox>
                            </div>
                            <div className='table-job-name'>个体户名称</div>
                            <div className='table-name'>姓名</div>
                            <div className='table-tel'>手机号</div>
                            <div className='table-job'> 关联企业方</div>
                            <div className='table-zdbl'> 自动办理结果</div>
                            <div className='table-yyzz'>营业执照</div>
                            <div className='table-sign'>工商登陆账号</div>
                            <div className='table-operation'>操作</div>
                        </div>
                        <div className='table-content'>
                            {paging.arr.map((item, index) => <Table key={index} index={index} />)}
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
                    <input type='text' className='jump' onChange={this.inputJump.bind(this)} placeholder={jumpPage}></input>
                    <span className='jump-spanT'>页</span>
                </div>
            </div>
        )
    }
    onChange(e) {
        const { delAll } = this.props.appAction
        var checkAll = e.target.checked
        delAll(checkAll)

    }
    delMore(e) {
        const { getAll, end } = this
        const { subArr } = this.props.appState
        const { checkFalse } = this.props.appAction
        axios.get("http://localhost:8000/del?id=" + subArr)
            .then(function (response) {
                // var data = response.data
                getAll()
                end()
                checkFalse(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    end = () => {
        const { addEnd } = this
        const { end } = this.props.appState
        end.map((item) => {
            let url = "http://localhost:8000/ending"
            axios.get(url)
                .then(function (response) {
                    var data = response.data
                    // console.log(item)
                    addEnd(data.length, item)
                })
                .catch(function (error) {
                    console.log(error);
                });
        })

    }
    addEnd(id, item) {
        let obj = item
        const { business_name, name, tel, associated_enterprise, business_license } = obj
        let time = "2020-03-24 08:12:23"
        axios.get("http://localhost:8000/addEnd?id=" + id + "&business_name=" + business_name + "&name=" + name + "&tel=" + tel + "&associated_enterprise=" + associated_enterprise + "&business_license=" + business_license + "&time=" + time)
            .then(function (response) {
                var data = response.data
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });
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
    permitChange(val) {
        //营业执照查询
        var form = {
            ...this.state.form,
            permit: val
        }
        this.setState({
            form: form
        })
    }
    autoChange(val) {
        //自动查询
        var form = {
            ...this.state.form,
            auto: val
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
                bus: '',
                permit: '',
                auto: '',
            }
        }, this.getAll())
    }
    formChange() {
        const { getTotal } = this.props.appAction
        const { name, tel, bus, permit, auto } = this.state.form
        axios.get("http://localhost:8000/hello?name=" + name + "&tel=" + tel + "&bus=" + bus + "&permit=" + permit + "&auto=" + auto)
            .then(function (response) {
                var data = response.data
                getTotal(data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getAll = () => {
        const { getTotal } = this.props.appAction
        let url = "http://localhost:8000/pedding"
        axios.get(url)
            .then(function (response) {
                var data = response.data
                getTotal(data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    inputJump = function (val) {
        this.props.appAction.jumpPage(val.target.value)
    }

    componentDidMount() {
        this.getAll()
    }
}

export default connect((state) => {
    return ({
        appState: state.appReducer,
        endState: state.endReducer
    })
}, (dispatch) => {
    return {
        appAction: bindActionCreators(actions, dispatch),
        endAction: bindActionCreators(action, dispatch),
    }
})(Pedding);