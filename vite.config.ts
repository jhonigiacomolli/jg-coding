import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigpaths from 'vite-tsconfig-paths'
import macrosPlugin from "vite-plugin-babel-macros"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsconfigpaths(),
    macrosPlugin(),
  ],
})
