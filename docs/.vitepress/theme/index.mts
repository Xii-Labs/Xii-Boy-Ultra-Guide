import DefaultTheme from 'vitepress/theme'
import ImageCarousel from './ImageCarousel.vue'
import Layout from './Layout.vue'
import './custom.css'
import './dark.css'

export default {
  ...DefaultTheme,
  Layout: Layout,

  enhanceApp({ app }) {
    app.component('ImageCarousel', ImageCarousel)
  }
}