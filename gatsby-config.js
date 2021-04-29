// dotenv is already a dependency of Gatsby
const dotenv = require('dotenv').config(); // eslint-disable-line
const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    siteTitle: process.env.SITE_TITLE,
    siteDescription: process.env.SITE_DESCRIPTION,
    siteKeywords: process.env.SITE_KEYWORDS,
    siteThemeColor: process.env.SITE_THEME_COLOR,
    siteSocialImageUrl: process.env.SITE_SOCIAL_IMAGE_URL,
    facebookAppId: process.env.FACEBOOK_APP_ID,
    twitterAccountId: process.env.TWITTER_ACCOUNT_ID
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: process.env.SITE_THEME_COLOR
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_ID
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.SITE_TITLE,
        start_url: '/',
        theme_color: process.env.SITE_THEME_COLOR,
        background_color: process.env.SITE_BACKGROUND_COLOR,
        display: 'minimal-ui',
        icon: path.join(__dirname, process.env.SITE_LOGO_IMAGE_PATH)
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~src': path.join(__dirname, 'src'),
        '~pages': path.join(__dirname, 'src/pages'),
        '~layout': path.join(__dirname, 'src/layout'),
        '~containers': path.join(__dirname, 'src/containers'),
        '~components': path.join(__dirname, 'src/components')
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        openAnalyzer: false
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript'
  ]
};
