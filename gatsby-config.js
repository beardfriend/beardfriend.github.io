const path = require('path');
module.exports = {
  siteMetadata: {
    title: `수염난친구 블로그`,
    description: `수염난친구 블로그`,
    author: `beardfriend`,
    siteUrl: 'https://beardfriend.github.io/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-advanced-sitemap',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    '@chakra-ui/gatsby-plugin',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        name: `beardfriend`,
        short_name: `bfBlog`,
        start_url: `/`,
        background_color: `#0a0b0c`,
        theme_color: `#0a0b0c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `-500`,
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
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
          '@Contexts': path.resolve(__dirname, 'src/context'),
          '@Images': path.resolve(__dirname, 'src/images'),
          '@Templates': path.resolve(__dirname, 'src/templates'),
        },

        extensions: ['tsx', 'js', 'ts'],
      },
    },
  ],
};
