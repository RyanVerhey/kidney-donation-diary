const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/articleTemplate.tsx`)

  return graphql(`
    query BuildArticlesQuery {
      allMdx(sort: {frontmatter: {date: ASC}}) {
        edges {
          article:node {
            slug
            frontmatter {
              date
              title
              author
              draft
            }
            body
            internal {
              contentFilePath
            }
          }
          nextArticle:next {
            slug
          }
          prevArticle:previous {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMdx.edges.forEach(({ article, nextArticle, prevArticle }) => {
      const production = process.env.GATSBY_ACTIVE_ENV === 'production'
      if (article.frontmatter.draft && production) return;

      createPage({
        path: article.slug,
        component: `${articleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
        context: {
          article: article,
          prevArticle: prevArticle,
          nextArticle: nextArticle,
        }
      });
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    let slug = createFilePath({ node, getNode, basePath: `articles`, trailingSlash: false }).replace("/", "");

    createNodeField({
      node,
      name: `slug`,
      value: `${slug}`
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    extend type Mdx {
      slug: String @proxy(from: "fields.slug")
    }
  `
  createTypes(typeDefs)
}
