import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Xii-Boy Ultra Guide',
  description: 'A Guide to Building the First Wire-Free Portable Wii',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://guide.xii-labs.com'
  },
  transformPageData(pageData) {
    const canonicalUrl = `https://guide.xii-labs.com/${pageData.relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '')}`
    const isHomePage = pageData.relativePath === 'index.md'

    const schema = isHomePage
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Xii-Boy Ultra Guide',
          'url': 'https://guide.xii-labs.com',
          'description': 'A Guide to Building the First Wire-Free Portable Wii',
          'publisher': {
            '@type': 'Organization',
            'name': 'Xii-Labs',
            'url': 'https://xii-labs.com'
          }
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          'headline': pageData.title || 'Xii-Boy Ultra Guide',
          'description': pageData.description || 'Step-by-step build documentation for the Xii-Boy Ultra portable Nintendo Wii.',
          'url': canonicalUrl,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Xii-Labs',
            'url': 'https://xii-labs.com'
          }
        }

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(schema)
    ])
  },
  head: [
    ['script', { src: 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Xii-Labs Guides' }],
    ['meta', { property: 'og:url', content: 'https://guide.xii-labs.com' }],
    ['meta', { property: 'og:title', content: 'Xii-Boy Ultra Guide' }],
    ['meta', { property: 'og:description', content: 'A Guide to Building the First Wire-Free Portable Wii' }],
    ['meta', { property: 'og:image', content: 'https://guide.xii-labs.com/social-card.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://guide.xii-labs.com/social-card.png' }]
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
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Xii-Labs`,
      message: '<a href="https://github.com/Xii-Labs/Xii-Boy-Ultra-Guide">Released under the GPLv3 License.</a>'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/VChz7vJVGP' },
      { icon: 'github', link: 'https://github.com/Xii-Labs/Xii-Boy-Ultra' }]
  }
})
