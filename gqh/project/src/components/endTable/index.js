/*
 * @Author: Gui
 * @Date: 2021-03-30 10:03:00
 * @LastEditors: Gui
 * @LastEditTime: 2021-04-01 16:31:28
 * @Description: file content
 */
import { Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { Component } from 'react';
import './index.css'

class EndTable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { Option } = Select;
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }
        const { business_name, name, tel, associated_enterprise, business_license, time } = this.props.obj
        return (
            <div className='table-colunm'>
                <div className='table-colunm-check'>
                    <Checkbox onChange={onChange} style={{ width: 16, height: 16 }}></Checkbox>
                </div>
                <div className='table-colunm-job-name'>{business_name}</div>
                <div className='table-colunm-name'>{name}</div>
                <div className='table-colunm-tel'>{tel}</div>
                <div className='table-colunm-job1'> {associated_enterprise}</div>
                <div className={business_license === '查看' ? 'table-colunm-business1' : 'table-colunm-yyzz1'}>{business_license}</div>
                <div className='table-colunm-time'>{time}</div>
                <div className='table-colunm-operation'>
                    <div className='operation-sub1'>查看详情</div>
                    <div className='operation-more'>更多</div>
                    <div className='operation-btn'><DownOutlined style={{color:'#1890FF',fontSize:12}} onClick=''/></div>
                </div>
            </div>
        )
    }
}

export default EndTable
