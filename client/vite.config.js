import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // ... other rollup options
    },
    outDir: 'dist', // Set your build output directory
    assetsDir: '', // This should be empty to avoid nested directory structure
  
    // Copy additional files to the build directory
    assetsInclude: ['_redirects'],
  },
})
