// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1980 - نظام إدارة التذاكر',
  tagline: 'وثائق داخلية لإدارة التذاكر على خادمنا الخاص',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://docs.ksa1980.lol',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // Meta tags for social media embeds
  headTags: [
    // Open Graph / Facebook
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://docs.ksa1980.lol/img/social-card.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:alt',
        content: '1980 - نظام إدارة التذاكر',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    // Twitter
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://docs.ksa1980.lol/img/social-card.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image:alt',
        content: '1980 - نظام إدارة التذاكر',
      },
    },
  ],

  // GitHub pages deployment config
  organizationName: '1980',
  projectName: 'ticket-docs',

  onBrokenLinks: 'throw',
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        title: '1980',
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'أقسام',
            items: [
              {
                label: 'البدء',
                to: '/introduction',
              },
              {
                label: 'بوت الديسكورد',
                to: '/bot/overview',
              },
              {
                label: 'لوحة الويب',
                to: '/dashboard/overview',
              },
              {
                label: 'مرجع API',
                to: '/api/overview',
              },
            ],
          },
          {
            title: 'العلامة التجارية',
            items: [
              {
                label: 'شهادة التسجيل',
                href: 'https://eauthenticate.saudibusiness.gov.sa/certificate-details/0000195434',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} مٌلك للعلامة التجارية 1980 المسجلة في مركز الأعمال السعودي`,
      },
      prism: {
        theme: prismThemes.nightOwl,
        darkTheme: prismThemes.nightOwl,
      },
    }),
};

export default config;