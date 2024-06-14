import React from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Link, Outlet, redirect, useNavigate } from 'react-router-dom'
// import Contact from './routes/contact';
const { Header, Content, Footer, Sider } = Layout
// const items1 = ['post', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
const items1 = [
  {
    key: 'demo',
    label: 'demo',
    path: 'demo'
  },
  {
    key: 'effect',
    label: 'effect',
    path: 'effect'
  },
  {
    key: 'life',
    label: 'life',
    path: 'life'
  }
]
const topMenus = items1.map((item) => <Link to={item.path}>{item.label}</Link>)
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
const items2 = [
  {
    label: 'hook示例',
    key: 'hook-demo',
    icon: React.createElement(UserOutlined),
    children: [
      {
        key: 'state',
        label: `state`,
        path: 'state'
      },
      {
        key: 'life',
        label: `生命周期`,
        path: 'life'
      },
      {
        key: 'effect',
        label: `effect`,
        path: 'effect'
      }
    ]
  }
]
const App = (props) => {
  let navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  const topMenuOnclick = ({ item, key, keyPath, domEvent }) => {
    console.log('nav item', item)
    console.log('nav key', key)
    console.log('nav keyPath', keyPath)
    console.log('nav sfsdsfdsfdf', keyPath)
    navigate(`/${keyPath[0]}`)
  }
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['demo']}
          items={items1}
          onClick={topMenuOnclick}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
      </Header>
      <Content
        style={
          {
            // padding: '0 48px',
          }
        }
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Sider
            style={{
              background: colorBgContainer
            }}
            width={200}
          >
            <Menu
              mode="inline"
              // defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%'
              }}
              items={items2}
              onClick={topMenuOnclick}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              height: '100%'
            }}
          >
            {/* <Contact /> */}
            {/* {props.children} */}
            <Outlet />
          </Content>
        </Layout>
      </Content>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  )
}
export default App
