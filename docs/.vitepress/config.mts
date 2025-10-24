import { defineConfig } from 'vitepress'

export default defineConfig({
  // Metadata and scripts that will be added to the <head> of the HTML.
  head: [
    ['script', { src: 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js' }],
    // Favicon links
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    // Social sharing (Open Graph) meta tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Xii-Boy Ultra Guide' }],
    ['meta', { property: 'og:description', content: 'A Guide to Building the First Wire-Free Portable Wii' }],
    ['meta', { property: 'og:image', content: '/social-card.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
  ],


  // SEO-related metadata.
  title: "Xii-Boy Ultra Guide",
  description: "A Guide to Building the First Wire-Free Portable Wii",
  base: '/',
  
  // Theme-specific configurations.
  themeConfig: {
    logo: {
      light: '/logo-dark.svg', // Logo for light mode
      dark: '/logo-light.svg', // Logo for dark mode
      alt: 'XBU Logo'
    },
    // Navigation bar links.
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/01-introduction' }
    ],

    // Left-hand sidebar navigation.
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About the Project', link: '/01-introduction' },
          { text: 'Basic Electronics', link: '/02-basic-electronics' }
        ]
      },
      {
        text: 'Preparation',
        items: [
          { text: 'Microsoldering Methods', link: '/03-microsoldering-methods' },
          { text: 'Materials & Tools', link: '/04-materials-tools' },
          { text: 'Wii Preparation', link: '/05-wii-preparation' },
        ]
      },
      {
        text: 'The Build',
        items: [
          { text: 'Wii Trimming', link: '/06-wii-trimming' },
          { text: 'Castellated Module Install', link: '/07-castellated-module-install' },
          { text: 'Portable Assembly', link: '/08-portable-assembly' },
          { text: 'RVLoader Setup', link: '/09-rvloader-setup' },
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'Troubleshooting & FAQ', link: '/10-troubleshooting-faq' },
        ]
      }
    ],

    // Built-in local search configuration.
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search Guide...',
            buttonAriaLabel: 'Search Guide'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },

    // Right-hand "On this page" sidebar configuration.
    outline: {
      level: 'deep',
      label: 'On This Page'
    },
    
    // Footer content.
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Bryce Shaw`,
      message: 'Released under the MIT License.'
    },

    // Social media icon links in the navigation bar.
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xenii1642/Xii-Boy-Ultra' }
    ]
  }
})