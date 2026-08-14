import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TusBundle Documentation',
  description: 'A symfony bundle for the tus upload protocol',
  themeConfig: {
    repo: 'eFrane/TusBundle',
    docsDir: 'docs',
    editLink: {
      pattern: 'https://github.com/eFrane/TusBundle/edit/main/docs/:path',
      text: 'Help improve this page!'
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
          ]
        }
      ]
    }
  }
})
