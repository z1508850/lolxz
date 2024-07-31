import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  

  lang: 'zh-CN',
  title: 'LOL下载网盘',
  description: 'LOL下载网盘',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },


 
  /* 主题配置 */
  themeConfig: {
    i18nRouting: true,

    logo: 'https://www.freeimg.cn/i/2024/08/01/66aa70a529bb6.ico',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

  bottom: '测试',

    footer: {
     
      copyright: 'Copyright © 2023-2024 LOL综合下载网盘',
    },


 lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },


    

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
      visitor: {
      badgeId: 'xzwplol.vitepress-nav-template',
    },

    comment: {
      repo: 'maomao1996/vitepress-nav-template',
      repoId: 'R_kgDOJC09Jg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJC09Js4Cekn0',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
