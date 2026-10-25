import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      cache: true,
      logStats: true,
      includePublic: false,
      include: /docs\/assets\//,
      png: {
        quality: 80
      },
      jpeg: {
        quality: 80
      },
      webp: {
        quality: 80,
        effort: 4
      }
    })
  ]
})
