import { defineConfig } from 'vitepress'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  title: 'Xii-Boy Ultra Guide',
  description: 'A Guide to Building the First Wire-Free Portable Wii',
  base: '/',
  cleanUrls: true,
  head: [
    ['script', { src: 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Xii-Boy Ultra Guide' }],
    ['meta', { property: 'og:description', content: 'A Guide to Building the First Wire-Free Portable Wii' }],
    ['meta', { property: 'og:image', content: '/social-card.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    logo: { light: '/logo-dark.svg', dark: '/logo-light.svg', alt: 'XBU Logo' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction' }
    ],
    sidebar: [
      {
        text: 'Introduction', items: [
          { text: 'About the Project', link: '/introduction' },
          { text: 'Basic Electronics', link: '/basic-electronics' }
        ]
      },
      {
        text: 'Preparation', items: [
          { text: 'Microsoldering Methods', link: '/microsoldering-methods' },
          { text: 'Materials & Tools', link: '/materials-tools' },
          { text: 'Wii Preparation', link: '/wii-preparation' }
        ]
      },
      {
        text: 'The Build', items: [
          { text: 'Wii Trimming', link: '/wii-trimming' },
          { text: 'Xii-Strip & Xii-Flex Install', link: '/xii-strip-flex-install' },
          { text: 'Castellated Module Install', link: '/castellated-module-install' },
          { text: 'Top Half Assembly', link: '/top-half-assembly' },
          { text: 'Bottom Half Assembly', link: '/bottom-half-assembly' },
          { text: 'RVLoader Setup', link: '/rvloader-setup' }
        ]
      },
      {
        text: 'Support', items: [
          { text: 'Troubleshooting & FAQ', link: '/troubleshooting-faq' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search Guide...', buttonAriaLabel: 'Search Guide' },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' }
          }
        }
      }
    },
    outline: { level: 'deep', label: 'On This Page' },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Bryce Shaw`,
      message: '<a href="https://github.com/Bryceshaw06/Xii-Boy-Ultra-Guide">Released under the GPLv3 License.</a>'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/dgDmBvEUQG' },
      { icon: 'github', link: 'https://github.com/Xenii1642/Xii-Boy-Ultra' }]
  },
  vite: {
    plugins: [
      ViteImageOptimizer({
        logStats: true
      })
    ]
  }
})
