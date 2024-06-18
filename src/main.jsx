import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
// 全局样式
import '@/common/styles/frame.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={globalRouters} />
  </ConfigProvider>
)
