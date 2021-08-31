const path = require('path');
module.exports = {
  siteMetadata: {
    title: `수염난친구블로그`,
    description: `수염난친구 개인블로그.`,
    author: `beardfriend`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-glslify`,
    `gatsby-plugin-styled-components`,
    '@chakra-ui/gatsby-plugin',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/blog`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#003D8D`,
        theme_color: `#003D8D`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Dark+ (default dark)', // Or install your favorite theme from GitHub
              inlineCode: {
                marker: '•',
              },
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `anchor-header`,
              maintainCase: false,
              removeAccents: true,
              elements: [`h1`, `h2`, `h3`],
            },
          },
        ],
      },
    },

    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@Components': path.resolve(__dirname, 'src/components'),
          '@Containers': path.resolve(__dirname, 'src/containers'),
          '@Globals': path.resolve(__dirname, 'src/global'),
          '@Pages': path.resolve(__dirname, 'src/pages'),
          '@Assets': path.resolve(__dirname, 'src/assets'),
        },
        extensions: ['tsx', 'js', 'ts'],
      },
    },
  ],
};
