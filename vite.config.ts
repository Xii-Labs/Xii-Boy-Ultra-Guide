import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      logStats: true,
      includePublic: false,
      include: /docs\/assets\//,
      webp: {
        lossless: true
      },
      avif: {
        lossless: true
      }
    })
  ]
})