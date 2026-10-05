import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
      },
    }),
    tailwindcss(),
  ],
  // Bundle React (and the app) into the SSR entry so the prerender step is
  // self-contained and needs no external Node resolution of ESM packages.
  ssr: {
    noExternal: true,
  },
  build: isSsrBuild
    ? {}
    : {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            // Separate React core into its own vendor chunk so it caches
            // independently of app code across deploys.
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'react-vendor'
                }
              }
            },
          },
        },
        // Drop console.log / debugger statements in production builds (terser).
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      },
}))
