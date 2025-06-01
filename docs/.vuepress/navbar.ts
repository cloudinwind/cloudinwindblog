import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '笔记',
    items: [
      { text: '找工作复习', link: '/notes/review/README.md' },
      { text: '项目经历', link: '/notes/project/README.md'},
      { text: '保研相关', link: '/notes/baoyan/README.md' },
      { text: '高等微积分', link: '/notes/integral/README.md' },
      { text: '星系与宇宙', link: '/notes/cosmos/README.md' },
      { text: '写作与沟通', link: '/notes/writing/README.md' },
    ]
  },
  { 
    text: '关于',
    items: [
      { text: '关于我', link: '/about/' },
      { text: '时间线', link: '/timeline/' },
    ]
  },
  { text: '友链',
    items: [
      { text: '友情链接', link: '/friends/' },
      { text: '友链申请', link: '/links/' },
    ]
  },
])
