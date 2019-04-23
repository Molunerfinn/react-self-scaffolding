import React from 'react'
import {
  Layout, Breadcrumb
} from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import Routes from '../routes'
import Sidebar from './Sider'
import './App.css'

const {
  Header, Content, Footer
} = Layout

class App extends React.Component {
  state = {
    collapsed: false
  };

  render () {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Routes />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Self Scaffolding ©2019 Molunerfinn
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App
