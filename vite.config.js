import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  }
})
