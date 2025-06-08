import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const NODE_ENV = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('NODE_ENV', NODE_ENV)
  console.log('command：', command)
  console.log('mode：', mode)

  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [react()],
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      minify: NODE_ENV !== 'development',
      sourcemap: NODE_ENV === 'development',
    },
    esbuild: {
      pure: NODE_ENV === 'development' ? undefined : ['console.log'],
    },
  }
})
