import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goto } from '@/api'
import { Button, Modal, theme } from 'antd'
import './index.less'
import { logout } from '../../api'

const { useToken } = theme

function Home() {
  // 创建路由钩子

  // 获取Design Token
  const { token } = useToken()

  const [modal, contextHolder] = Modal.useModal()

  const exit = () => {
    modal.confirm({
      title: '是否退出登录',
      onOk() {
        logout()
      }
    })
  }

  return (
    <div className="P-home">
      <h1 style={{ color: token.colorText }}>Home Page</h1>
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
            exit()
          }}
        >
          返回登录
        </Button>
      </div>
      {
        // 这是最终解决Modal.method跟随换肤的关键，contextHolder在组件DOM中随便找个地方放就行
        contextHolder
      }
    </div>
  )
}

export default Home
