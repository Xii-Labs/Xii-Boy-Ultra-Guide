import { defineConfig } from 'vitepress'

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
      { text: 'Guide', link: '/01-introduction' }
    ],
    sidebar: [
      { text: 'Introduction', items: [
        { text: 'About the Project', link: '/01-introduction' },
        { text: 'Basic Electronics', link: '/02-basic-electronics' }
      ]},
      { text: 'Preparation', items: [
        { text: 'Microsoldering Methods', link: '/03-microsoldering-methods' },
        { text: 'Materials & Tools', link: '/04-materials-tools' },
        { text: 'Wii Preparation', link: '/05-wii-preparation' }
      ]},
      { text: 'The Build', items: [
        { text: 'Wii Trimming', link: '/06-wii-trimming' },
        { text: 'Castellated Module Install', link: '/07-castellated-module-install' },
        { text: 'Portable Assembly', link: '/08-portable-assembly' },
        { text: 'RVLoader Setup', link: '/09-rvloader-setup' }
      ]},
      { text: 'Support', items: [
        { text: 'Troubleshooting & FAQ', link: '/10-troubleshooting-faq' }
      ]}
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
      message: 'Released under the MIT License.'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Xenii1642/Xii-Boy-Ultra' }]
  }
})