import type {Config} from '@docusaurus/types';
import type {Preset} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Awesome AI Conventions',
  tagline: 'File-based conventions and open protocols for building with AI agents.',
  favicon: 'img/logo.svg',

  url: 'https://guilhermealbert.github.io',
  baseUrl: '/awesome-ai-conventions/',
  organizationName: 'guilhermealbert',
  projectName: 'awesome-ai-conventions',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/guilhermealbert/awesome-ai-conventions/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: 'docs',
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'Awesome AI Conventions',
      logo: {
        alt: 'Awesome AI Conventions',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/examples',
          label: 'Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/guilhermealbert/awesome-ai-conventions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Conventions',
              to: '/docs/conventions/project-context-files',
            },
            {
              label: 'Examples',
              to: '/docs/examples',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/guilhermealbert/awesome-ai-conventions',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/guilhermealbert/awesome-ai-conventions/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Awesome AI Conventions. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'yaml', 'markdown'],
    },
    metadata: [
      {
        name: 'description',
        content:
          'A curated list of emerging conventions, file standards, and protocols for building with AI agents.',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
