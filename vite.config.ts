import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ 关键：确保 Electron 能加载相对资源路径
  build: {
    outDir: 'dist', // ✅ 与 main.ts 中的 RENDERER_DIST 保持一致
    emptyOutDir: true,
  },
  plugins: [
    react(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      renderer: process.env.NODE_ENV === 'test'
        ? undefined
        : {},
    }),
  ],
})
