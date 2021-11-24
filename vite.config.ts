import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigpaths from 'vite-tsconfig-paths'
import macrosPlugin from "vite-plugin-babel-macros"
import svgrPlugin from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsconfigpaths(),
    macrosPlugin(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})
