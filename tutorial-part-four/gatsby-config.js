/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Pandas Eating Lots',
    // ページメタデータを作成する
    // React Helmet -> React でヘッダデータを管理する
    description: 'A simple description about pandas eating lots...',
    author: 'gatsbyJS',
  },
  plugins: [
    // CSS-in-JS / emotion 設定
    // CSSを直接記述できるようになる（？）
    'gatsby-plugin-emotion',
    // markdownをデータ化
    'gatsby-transformer-remark',
    // React Helmet を使用する
    // gatsby-plugin-react-helmet / react-helmet 両方インストールが必要
    'gatsby-plugin-react-helmet',
    // PWA の設定に必要 / service worker を使用する
    'gatsby-plugin-offline',
    // PWA の設定に必要
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'static/favicon.ico',
        // icon: 'src/images/icon.png',
      },
    },
    // fileシステムを可視化できる
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    // タイポグラフィを使用できるようになる
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    }
  ],
}
