import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Olimpiada Michoacana de Matemáticas',
  tagline: 'Aprende. Compite. Inspírate.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://michoacan.olimpiadamatematicas.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OlimpiadaMatematicasMichoacan', // Usually your GitHub org/user name.
  projectName: 'WOMM2', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OlimpiadaMatematicasMichoacan/WOMM2/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: '',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OMM',
      logo: {
        alt: 'OMM',
        src: 'img/logo.png',
      },
      items: [
        { to: '/acerca', label: 'Acerca', position: 'right' },
        { to: '/blog/authors', label: 'Equipo', position: 'right' },
        { to: '/blog/tags/noticias', label: 'Noticias', position: 'right' },
        { to: '/blog/tags/convocatorias', label: 'Convocatoria', position: 'right' },
        { to: '/blog/tags/resultados', label: 'Resultados', position: 'right' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Prepárate',
        },
        {
          type: 'dropdown',
          label: 'Acceder',
          position: 'right',
          items: [
            {
              label: 'Iniciar Sesión',
              href: 'https://registro.olimpiadamatematicasmichoacan.org:8443/login/index.php',
            },
            {
              label: 'Registro',
              href: 'https://registro.olimpiadamatematicasmichoacan.org:8443/login/signup.php?',
            },
          ]
        }
      ],
    },
    announcementBar: {
      id: 'support_us',
      content:
        'Este es el nuevo sitio web de la OMM. Por favor háganos llegar sus comentarios en Github.',
      isCloseable: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Prepárate',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Redes Sociales',
          items: [
            {
              label: 'WhatsApp',
              href: 'https://chat.whatsapp.com/EusFmjYySlF2E8tmZPZHss',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/olimpiadamichoacanadematematicas',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/omm/womm2',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OMM. </br> Hecho en Morelia por <a href="https://roicort.github.io">Rodrigo Cortez</a> con <a href="https://docusaurus.io/">OSS</a> y ❤️.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  future: {
    v4: true, // Enable future Docusaurus v4 features
    experimental_faster: true,
  },
};

export default config;
