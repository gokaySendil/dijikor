import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ||"/dijikor",
  plugins: [
    react({
      
      babel: {
        include: /\.(jsx?|tsx?)$/,
        plugins: [['babel-plugin-react-compiler']],
        
      },
    }),
  ],
})
