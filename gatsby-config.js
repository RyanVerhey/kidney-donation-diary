const path = require('path')

module.exports = {
  siteMetadata: {
    title: "kidney-donation-diary",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kidney Donation Diary",
        short_name: "Kidney Diary",
        start_url: '/',
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: "./src/articles/",
      },
      __key: "articles",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: "./static/fonts/",
      },
      __key: "fonts",
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        images: path.join(__dirname, 'src/images'),
      }
    },
  ],
};
