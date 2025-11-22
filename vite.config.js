import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ||"/dijikor",
  plugins: [
    react({
      include: /\.(jsx?|tsx?)$/,
      babel: {
        plugins: [['babel-plugin-react-compiler']],
        
      },
    }),
  ],
})
