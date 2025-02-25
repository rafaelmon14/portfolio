/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `projects`,
      // Path to the directory
      path: `${__dirname}/src/projects/`,
    },
   },
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `images`,
      // Path to the directory
      path: `${__dirname}/src/images/`,
    },
   },
  ],
  siteMetadata: {
    title: 'Web Portfolio',
    description: 'web que muestra un portfolio',
    copyright: 'esta web tiene copyright owo',
    contact: 'rafaelmon14@gmail.com'
  }
}
