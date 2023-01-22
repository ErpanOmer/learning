import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'Learning',
    titleTemplate: '学习笔记',
    // appearance: 'dark',
    outDir: '../dist',
    // lastUpdated: true,
    // lastUpdatedText: 'Updated Date',
    themeConfig: {
        socialLinks: [
            { 
                icon: "github",
                link: "https://github.com/ErpanOmer"
            }
        ],
        nav: [
            {
                text: 'foo',
                link: '/bar'
            }
        ],
        sidebar: [
            // {
            //     text: 'Front End',
            //     items: [
            //       { text: 'Git', link: '/getting-started' },
            //       { text: 'Nginx', link: '/getting-started' },
            //       { text: 'Docker', link: '/getting-started' },
            //       { text: 'SSH', link: '/getting-started' },
            //     ]
            // },
            // {
            //     text: 'Node',
            //     items: [
            //       { text: 'Git', link: '/getting-started' },
            //       { text: 'Nginx', link: '/getting-started' },
            //       { text: 'Docker', link: '/getting-started' },
            //       { text: 'SSH', link: '/getting-started' },
            //     ]
            // },
            {
                text: 'Command Line',
                items: [
                  { text: 'Git', link: '/commandLine/git' },
                  { text: 'Nginx', link: '/commandLine/nginx' },
                  { text: 'Docker', link: '/commandLine/docker'  },
                  { text: 'Shell', link: '/commandLine/shell'  },
                  { text: 'PM2', link: '/commandLine/pm2'  },
                ]
            },
          ],
          footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present ToxCode'
          }
    },
})