import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    customCss: ['./src/styles/main.css'],
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight',
      mastodon: 'https://m.webtoo.ls/@swithinbank' 
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    // Set English as the default language for this site.
    // defaultLocale: 'en',
    locales: {
      // English docs in `src/content/docs/en/`
      root: {
        label: 'English',
        lang: 'en'
      },
      // Simplified Chinese docs in `src/content/docs/zh-cn/`
      'zh-cn': {
        label: '简体中文',
        lang: 'zh-CN'
      },
      // Arabic docs in `src/content/docs/ar/`
      ar: {
        label: 'العربية',
        dir: 'rtl'
      }
    }
  }), svelte()]
});