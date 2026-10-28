import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  server:{
    host:true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    environment: 'jsdom',
    silent:false,
    
    
    globals: true,
    setupFiles: './vitest-setup.ts',
  },
})