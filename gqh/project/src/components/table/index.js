/*
 * @Author: Gui
 * @Date: 2021-03-30 10:03:00
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-02 18:00:53
 * @Description: file content
 */
import { Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../app/action'
import { Component } from 'react';
import './index.css'
import Item from 'antd/lib/list/Item';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moreShow: false,
        }
    }
    render() {
        const { Option } = Select;
        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        const { index } = this.props
        const { business_name, name, tel, associated_enterprise, status, business_license, number, check } = this.props.appState.paging.arr[index]
        // const { business_name, name, tel, associated_enterprise, status, business_license, number, check } = this.props.appState.data

        return (
            <div className='table-colunm' >
                <div className='table-colunm-check' >
                    <Checkbox onChange={this.onChange.bind(this)} style={{ width: 16, height: 16 }} checked={check}></Checkbox>
                </div>
                <div className='table-colunm-job-name'>{business_name}</div>
                <div className='table-colunm-name'>{name}</div>
                <div className='table-colunm-tel'>{tel}</div>
                <div className='table-colunm-job'> {associated_enterprise}</div>
                <div className={status === '失败' ? "table-colunm-status" : 'table-colunm-zdbl'} > {status}</div>
                <div className={business_license === '查看' ? 'table-colunm-business' : 'table-colunm-yyzz'}>{business_license}</div>
                <div className='table-colunm-sign'>{number}</div>
                <div className='table-colunm-operation'>
                    <div className='operation-sub' onClick={this.delOne.bind(this)}>提交</div>
                    <div className='operation-more'>更多</div>
                    <div className='operation-btn'><DownOutlined style={{ color: '#1890FF', fontSize: 12 }} onMouseEnter={this.show.bind(this)} onMouseLeave={this.false.bind(this)} /></div>
                    {this.state.moreShow === true ? <div className='more' >
                        <div>信息录入</div>
                        <div>重新办理</div>
                        <div>取消入驻</div>
                    </div> : <div></div>}
                </div>


            </div>
        )
    }
    delOne() {
        const { getAll } = this
        const { index } = this.props
        var id = this.props.appState.paging.arr[index].index
        axios.get("http://localhost:8000/delOne?id=" + id)
            .then(function (response) {
                var data = response.data
                console.log(data)
                getAll()
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
    onChange(e) {
        const { check } = this.props.appAction
        check(this.props.index, e.target.checked)
    }
    show(e) {
        this.setState({
            moreShow: true
        })
    }
    false() {
        this.setState({
            moreShow: false
        })
    }
}

export default connect((state) => {
    return ({
        appState: state.appReducer
    })
}, (dispatch) => {
    return {
        appAction: bindActionCreators(actions, dispatch)
    }
})(Table);
