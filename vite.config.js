import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['src/main.jsx'],
      refresh: true,
    }),
    react({
      jsxRuntime: 'automatic',
    }),
  ],
})
