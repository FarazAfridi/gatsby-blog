
const dotenv = require("dotenv");

dotenv.config();


module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      forceFullSync: true,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `Write your site description here!`,
    author: `@ibaslogic`,
  },
};
