import type {Config} from '@docusaurus/types';
import type {Preset} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Awesome Agent Standards',
  tagline: 'Standards, protocols, conventions, and emerging patterns for AI agents.',
  favicon: 'img/logo.svg',

  url: 'https://guilhermealbert.github.io',
  baseUrl: '/awesome-agent-standards/',
  organizationName: 'guilhermealbert',
  projectName: 'awesome-agent-standards',
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
            'https://github.com/guilhermealbert/awesome-agent-standards/tree/main/docs/',
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
      title: 'Awesome Agent Standards',
      logo: {
        alt: 'Awesome Agent Standards',
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
          href: 'https://github.com/guilhermealbert/awesome-agent-standards',
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
              href: 'https://github.com/guilhermealbert/awesome-agent-standards',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/guilhermealbert/awesome-agent-standards/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Awesome Agent Standards. Built with Docusaurus.`,
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
          'A curated index of standards, protocols, conventions, and emerging patterns for AI agents.',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
