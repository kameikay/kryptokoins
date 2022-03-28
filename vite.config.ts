import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

interface ImportMetaEnv {
  readonly VITE_NOMICS_API_KEY: string
}