import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import {
  Layout, Menu, Icon
} from 'antd'
import style from './index.module.styl'
// import routes from '../../routes'

const {
  Sider
} = Layout

// const SubMenu = Menu.SubMenu

type PathParamsType = {
  // type whatever you expect in the this.props.match.params.*
}
type PropsType = RouteComponentProps<PathParamsType> & {
  // your props here
}

class Siderbar extends React.Component<PropsType> {
  state = {
    collapsed: false
  }
  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed })
  }
  render () {
    const { location } = this.props
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className={style.logo}>
          <span>React</span>
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key='/'>
            <Link to='/'>
              <Icon type='pie-chart' />
              <span>数据统计</span>
            </Link>
          </Menu.Item>
          {/* <SubMenu
            key='sub1'
            title={<span><Icon type='user' /><span>User</span></span>}
          >
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={<span><Icon type='team' /><span>Team</span></span>}
          >
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9'>
            <Icon type='file' />
            <span>File</span>
          </Menu.Item> */}
        </Menu>
      </Sider>
    )
  }
}
export default withRouter(Siderbar)
