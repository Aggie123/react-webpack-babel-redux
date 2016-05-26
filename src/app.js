import React,{Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import { Menu, Icon,Breadcrumb } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
      openKeys: []
    }
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
  }

  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    });
  }

  render() {
    return (
        <div className="ant-layout-topaside">
          <div className="ant-layout-header">
            <div className="ant-layout-wrapper">
              <div className="ant-layout-logo"></div>
              <Menu theme="dark" mode="horizontal"
                    defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
                <Menu.Item key="1"><Link to={{pathname:'/about'}}>关于</Link></Menu.Item>
                <Menu.Item key="2"><Link to={{pathname:'/users'}}>Users</Link></Menu.Item>
                <Menu.Item key="3">导航三</Menu.Item>
              </Menu>
            </div>
          </div>
          <div className="ant-layout-wrapper">
            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                <Breadcrumb.Item>某应用</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="ant-layout-container">
              <aside className="ant-layout-sider">
                <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                  <SubMenu key="sub1" title={<span><Icon type="users" />客户管理</span>}>
                    <Menu.Item key="1">111</Menu.Item>
                    <Menu.Item key="2">选项2</Menu.Item>
                    <Menu.Item key="3">选项3</Menu.Item>
                    <Menu.Item key="4">选项4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                    <Menu.Item key="5">选项5</Menu.Item>
                    <Menu.Item key="6">选项6</Menu.Item>
                    <Menu.Item key="7">选项7</Menu.Item>
                    <Menu.Item key="8">选项8</Menu.Item>
                  </SubMenu>
                </Menu>
              </aside>
              <div className="ant-layout-content">
                <div style={{ height: 240 }}>
                  <div style={{clear: 'both'}}>{this.props.children}</div>
                </div>
              </div>
            </div>
            <div className="ant-layout-footer">
              test footer
            </div>
          </div>
        </div>
    );
  }
}

/*render() {
 const data = [{_id: 1}, {_id: 2}, {_id: 3}];
 return <div>
 <p>hello app 1</p>
 <p>{data[0]._id}</p>
 {data.map((item, index)=><p>{item._id}</p>)}


 <ul>
 <li><Link to={{pathname:'/about'}}>about</Link></li>
 <li><Link to={{pathname:'/customers'}}>customers</Link></li>
 </ul>
 <div>
 {this.props.children}
 </div>
 </div>
 }*/


