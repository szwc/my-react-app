import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import Header from '@/components/header'
import './entry.less'

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const { darkAlgorithm, defaultAlgorithm } = theme

function Entry() {
  // 获取store中的主题配置
  const globalTheme = useSelector((state) => state.theme)

  // Ant Design主题变量
  let antdTheme = {
    // 亮色/暗色配置
    algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm
  }

  return (
    <ConfigProvider theme={antdTheme}>
      <div className="M-entry">
        <Header />
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Entry