import './index.css'
import { Menu, Breadcrumb } from 'antd';
import { HeartIcon, SecondIcon, ThirdIcon, FourIcon, FiveIcon, SixIcon } from '../../icon/index'
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action'
import { bindActionCreators } from "redux";
import Peding from '../pedding/index'
import Ending from '../ending/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  fy = () => {
  }
  render() {
    const handleClick = e => {
    };
    const { SubMenu } = Menu;
    const { navList, value, data } = this.props.appState
    const { navChange } = this.props.appAction
    return (
      <div className="App">
        <div className='left'>
          <div className='left-head'>
            <div className='left-head-img'></div>
            <span>筑商后台管理系统</span>
          </div>
          <div className='left-container'>
            <div className='left-nav'>
              <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <Menu.Item key="1" icon={<HeartIcon />} style={{ width: 255, height: 62, paddingTop: 10 }}>企业管理</Menu.Item>
                <SubMenu key="sub1" icon={<SecondIcon />} title="筑创星管理" style={{ background: '#fff' }}>
                  <Menu.Item key="2" style={{ width: 255, height: 46 }}>个体户管理</Menu.Item>
                  <Menu.Item key="3" style={{ width: 255, height: 46 }}>个体户注销</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<ThirdIcon />} title="任务管理">
                </SubMenu>
                <SubMenu key="sub3" icon={<FourIcon />} title="结算管理">
                </SubMenu>
                <SubMenu key="sub4" icon={<FiveIcon />} title="开票管理">
                </SubMenu>
                <SubMenu key="sub5" icon={<SixIcon />} title="账号管理">
                </SubMenu>
              </Menu>
            </div>
          </div>

        </div>
        <div className='right'>
          <div className='right-head'>
            <div className='right-head-logo'></div>
            <div className='right-head-title'>用户名</div>
          </div>
          <div className='right-nav'>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>
                筑创星管理
            </Breadcrumb.Item>
              <Breadcrumb.Item>
                个体户管理
            </Breadcrumb.Item>
              <Breadcrumb.Item>{value === 1 ? <span>入驻中</span> : <span>已入驻</span>}</Breadcrumb.Item>
            </Breadcrumb>
            <div className='right-nav-title'>
            {value === 1 ? <span>入驻中</span> : <span>已入驻</span>}
          </div>
          </div>
          <div className='right-container'>
            <div className='right-container-nav'>
              {navList.map((item, index) => <div key={index} onClick={() => { navChange(index) }} id={value === index ? "check" : ""}>{item}</div>)}
            </div>
            {value === 1 ? <Peding /> : <Ending />}
          </div>
        </div>
      </div >
    )
  }
  
  componentDidUpdate() {

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
})(App);
