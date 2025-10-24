import DefaultTheme from 'vitepress/theme'
import Carousel from './GuideCarousel.vue'
import Layout from './Layout.vue'
import './custom.css'
import './dark.css'

export default {
  ...DefaultTheme,
  // Tell VitePress to use custom Layout component instead of the default.
  Layout: Layout,

  enhanceApp({ app }) {
    app.component('Carousel', Carousel)
  }
}