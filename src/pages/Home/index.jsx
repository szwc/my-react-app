import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goto } from '@/api'
import { Button } from 'antd'
import './index.less'

function Home() {
  // 创建路由钩子
  const navigate = useNavigate()
  return (
    <div className="P-home">
      <h1>Home Page</h1>
      <div className="ipt-con">
        <Button
          onClick={() => {
            goto('/login')
          }}
        >
          组件外跳转
        </Button>
      </div>
      <div className="ipt-con">
        <Button
          type="primary"
          onClick={() => {
            navigate('/login')
          }}
        >
          返回登录
        </Button>
      </div>
    </div>
  )
}

export default Home
