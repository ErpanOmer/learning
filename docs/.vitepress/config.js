import {
    defineConfig
} from "vitepress";

export default defineConfig({
    title: 'Learning Notes',
    titleTemplate: '学习笔记',
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/svg+xml',
                href: 'favicon.svg'
            }
        ]
    ],
    base: '/projects/learning/',
    cleanUrls: true,
    lastUpdated: true,
    appearance: 'force-dark',
    head: [
        // 基础 favicon
        ['link', {
            rel: 'icon',
            href: 'https://erpanomer.nurverse.com/favicon.ico'
        }],
        // 2. Canonical
        ['link', {
            rel: 'canonical',
            href: 'https://erpanomer.nurverse.com/projects/learning/'
        }],

        // 3. SEO 关键词
        ['meta', {
            name: 'keywords',
            content: 'Learning, Command Line, Git, Nginx, Docker, Shell, PM2'
        }],

        // 4. Open Graph (用于社交媒体分享预览)
        ['meta', {
            property: 'og:title',
            content: 'Learning Notes | ErpanOmer'
        }],
        ['meta', {
            property: 'og:type',
            content: 'website'
        }],
        ['meta', {
            property: 'og:url',
            content: 'https://erpanomer.nurverse.com/projects/learning/'
        }],

        // 5. 移动端优化
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }]
    ],
    sitemap: {
        hostname: 'https://erpanomer.nurverse.com/projects/learning/'
    },
    router: {
        prefetchLinks: false
    },
    themeConfig: {
        logo: 'https://erpanomer.nurverse.com/favicon-32x32.png',
        socialLinks: [{
            icon: "github",
            link: "https://github.com/ErpanOmer"
        }],
        nav: [{
            text: '返回主站',
            link: 'https://erpanomer.nurverse.com/'
        }, ],
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
                items: [{
                        text: 'Git',
                        link: '/commandLine/git'
                    },
                    {
                        text: 'Nginx',
                        link: '/commandLine/nginx'
                    },
                    {
                        text: 'Docker',
                        link: '/commandLine/docker'
                    },
                    {
                        text: 'Shell',
                        link: '/commandLine/shell'
                    },
                    {
                        text: 'PM2',
                        link: '/commandLine/pm2'
                    },
                ]
            },
        ],
        footer: {
            message: '❤ With Promise to Keep Learning.',
            copyright: `Copyright © ${new Date().getFullYear()}-present Erpan Omer`
        },
    },
})