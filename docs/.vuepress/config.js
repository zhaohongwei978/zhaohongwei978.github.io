module.exports = {
  title: 'Kira技术博客',
  description: 'Kira技术博客-------!',
  locales: {
    '/': {
      lang: 'ZH',
      title: 'Kira技术博客',
      description: ' !'
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`
      }
    ]
  ],
  dest: './docs/.vuepress/dist',
  evergreen: true,
  // 配置导航
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在github上编辑此页',
        nav: [{
            text: '首页',
            link: '/'
          },
          {
            text: 'js基础',
            link: '/about/basics/事件流'
          },
          {
            text: 'vue',
            link: '/about/vue/生命周期'
          },
          {
            text: '常见考点',
            link: '/about/question/vue'
          },
          {
            text: '性能优化',
            link: '/about/nature/节流防抖'
          },
          {
            text: '项目',
            items: [{
                text: '去哪儿旅行',
                link: 'https://github.com/251205668/Travel'
              },
              {
                text: '饿了么外卖前台',
                link: 'https://github.com/251205668/restaurant'
              },
              {
                text: '魔法音乐App',
                link: 'https://github.com/251205668/mymusic'
              }
            ]
          }
        ],
        lastUpdated: '上次更新',
        sidebarDepth: 2,
        sidebar: {
          '/about/': getBasicsSidebar(
            'JS基础',
            'HTML',
            'CSS',
            'VUE基础',
            'React',
            'Wepback',
            'Http',
            '常见考点',
            '性能优化',
          )
        }
      },
    },
    repo: '251205668',
    repoLabel: 'Github',
    docsRepo: '251205668/vuepressdemo',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}


function getBasicsSidebar(groupA, groupB, groupC, groupD,groupE, groupF,groupG,groupH,groupI) {
  return [{
      title: groupA,
      collapsable: false,
      children: ['/about/basics/事件流','/about/basics/数据类型','/about/basics/new的过程','/about/basics/原型链', '/about/basics/闭包','/about/basics/异步', '/about/brower/事件循环', '/about/basics/arguments','/about/basics/promise']
    },
    {
      title: groupB,
      collapsable: true,
      children: []
    },
    {
      title: groupC,
      collapsable: true,
      children: []
    },
    {
      title: groupD,
      collapsable: true,
      children: ['/about/vue/路由原理','/about/vue/生命周期', '/about/vue/自定义model', '/about/vue/异步渲染','/about/vue/响应式observe','/about/vue/虚拟DOM','/about/vue/模版渲染','/about/vue/组件通信','/about/vue/vue3']
    },
    {
      title: groupE,
      collapsable: true,
      children: ['/about/webpack/webpack配置',]
    },
    {
      title: groupF,
      collapsable: true,
      children: ['/about/webpack/webpack配置',]
    },
    {
      title: groupG,
      collapsable: true,
      children: ['/about/http/缓存',]
    },
    {
      title: groupH,
      collapsable: true,
      children: ['/about/question/vue','/about/question/js']
    },
    {
      title: groupI,
      collapsable: true,
      children: ['/about/nature/节流防抖',]
    }
  ]
}
