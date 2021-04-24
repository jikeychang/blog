/* 
[线上Blog](https://example.vuepress-theme-blog.ulivz.com/)

[document](https://vuepress-theme-blog.ulivz.com/#intro)
*/
module.exports = {
  // plugins: ['@vuepress/blog', {
  //   directories: [
  //     {
  //       id: 'post',
  //       dirname: '_posts',
  //       path: '/',
  //       pagination: {
  //         perPagePosts: 2,
  //       },
  //     }
  //   ],
  //   frontmatters: [
  //     {
  //       id: "tag",
  //       keys: ['tag', 'tags'],
  //       path: '/tag/',
  //       layout: 'Tag',
  //       frontmatter: { title: 'Tag' },
  //       itemlayout: 'Tag',
  //       pagination: {
  //         perPagePosts: 3
  //       }
  //     },
  //   ],
  // }],
  title: 'hello vuepress',
  description: 'blog theme for VuePress',
  base: '/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // repo: 'vuepressjs/vuepress-theme-blog',
    docsDir: 'docs',
    editLinks: true,
    // editLinkText: 'Edit this page on GitHub',
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      // {
      //   text: 'About',
      //   link: '/about/',
      // },
      {
        text: 'Github',
        link: 'https://github.com/jikeychang'
      },
    ],
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
      },
    ],
    // globalPagination: {
    //   prevText:'上一頁', // Text for previous links.
    //   nextText:'下一頁', // Text for next links.
    //   lengthPerPage:'10', // Maximum number of posts per page.
    //   layout:'Pagination', // Layout for pagination page
    // },
    sidebarDepth: 2,
    // sidebar: {
    //   '/config/': [
    //     '',
    //     'front-matter',
    //     'palette',
    //     'test'
    //   ],
    // },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        },
      ],
    },
    smoothScroll: true,
  },
}

