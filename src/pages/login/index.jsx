import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import imgLogo from './tuzi.png'
import { apiReqs } from '@/api'
import './login.less'
import Password from 'antd/es/input/Password'

function Login() {
  // 创建路由钩子
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  const accountChange = (e) => {
    console.log('e', e.target.value)
    let account = e.target.value
    setAccount(account)
  }
  const handleLogin = () => {
    apiReqs.signIn({
      data: { account: account, password: pwd },
      success(res) {
        console.log('login res', res)
        navigate('/home')
      }
    })
  }
  return (
    <div className="P-login">
      <img src={imgLogo} alt="" className="logo" />
      <div className="ipt-con">
        <Input value={account} onChange={accountChange} placeholder="账号" />
      </div>
      <div className="ipt-con">
        <Input.Password
          onChange={(e) => {
            setPwd(e.target.value)
          }}
          placeholder="密码"
        />
      </div>
      <div className="ipt-con">
        <Button
          type="primary"
          block={true}
          onClick={() => {
            handleLogin()
          }}
        >
          登录
        </Button>
      </div>
    </div>
  )
}

export default Login
