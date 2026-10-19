import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// site identityはconfig直書きにせず、CI/localのenv変数から注入する。
// Q Atlantis Issue #22の実装境界: 旧Q Atlantis domainのhardcodeを持ち込まない。
//
// Blog／About／Patronは本config未配線。Blog/AboutはQ Atlantis #29の承認batch通過後、
// Patronは方針決定(DEFERRED)まで、それぞれ本repositoryのAGENTS.md/README.mdが定める
// gateを越えてから配線する。
const SITE_ID = process.env.SITE_ID ?? 'i-s-world';
const PUBLICATION_URL = process.env.PUBLICATION_URL ?? 'https://i-s.world';

const config: Config = {
  title: 'Infinite Synthesis World',
  tagline: 'World／Narrative documentation projection',
  titleDelimiter: '·',
  favicon: 'img/favicon.svg',

  url: PUBLICATION_URL,
  baseUrl: '/',

  organizationName: 'HIPSTAR-IScompany',
  projectName: 'i-s-world',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: { label: '日本語', htmlLang: 'ja-JP' },
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Infinite Synthesis World',
        url: `${PUBLICATION_URL}/`,
        description:
          'World／Narrative／Blog／About documentation projectionの入口。研究途中の内部仕様は正本化しない。',
        inLanguage: ['ja-JP', 'en-US'],
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'author', content: '齋藤みつるSaitooMituru-Fusamofu-ふさもふ' },
      { property: 'og:site_name', content: 'Infinite Synthesis World' },
    ],
    navbar: {
      title: 'Infinite Synthesis World',
      items: [
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/HIPSTAR-IScompany/i-s-world',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} 齋藤みつるSaitooMituru-Fusamofu-ふさもふ / HIPSTAR-IScompany. Documentation CC BY 4.0; code Apache-2.0. Partial projection (site_id: ${SITE_ID}).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
