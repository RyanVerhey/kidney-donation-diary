const path = require('path')

module.exports = {
  siteMetadata: {
    title: "kidney-donation-diary",
    siteUrl: "https://kidneydonationdiary.com",
    description: "Hi, I'm Ryan, and I gave one of my kidneys away. Please join me on my organ donation journey.",
    blogAuthor: "Ryan Verhey",
    cdnOptions: {
      host: "https://cdn.kidneydonationdiary.com",
      imageDir: "images",
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                blogAuthor
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.articles.map(article => {
                return {
                  title: article.frontmatter.title,
                  date: article.frontmatter.date,
                  author: article.frontmatter.author || site.siteMetadata.blogAuthor,
                  description: article.excerpt,
                  url: site.siteMetadata.siteUrl + "/" + article.slug,
                  guid: site.siteMetadata.siteUrl + "/" + article.slug,
                }
              });
            },
            query: `
              {
                allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
                  articles:nodes {
                    id
                    slug
                    excerpt(pruneLength: 103)
                    frontmatter {
                      date
                      title
                      author
                    }
                  }
                }
              }
            `,
            output: 'feed.xml',
            title: 'Kidney Donation Diary RSS Feed',
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kidney Donation Diary",
        short_name: "Kidney Diary",
        start_url: '/',
        theme_color: "#800020",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
      }
    },
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
      resolve: 'gatsby-plugin-root-import',
      options: {
        images: path.join(__dirname, 'src/images'),
        hooks: path.join(__dirname, 'src/hooks'),
        components: path.join(__dirname, 'src/components'),
      }
    },
  ],
};
