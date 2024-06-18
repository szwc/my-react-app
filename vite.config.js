import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 确保有适当的配置来处理 CSS
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  server: {
    // open: '/docs/index.html',
    // 指定dev sever的端口号，默认为5173
    port: 3000,
    // 自动打开浏览器运行以下页面
    open: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 资源路径别名配置
    }
  }
})
