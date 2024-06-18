import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Demo from '@/pages/Demo'
// 全局样式
import '@/common/styles/frame.less'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'demo',
        element: <Demo />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
