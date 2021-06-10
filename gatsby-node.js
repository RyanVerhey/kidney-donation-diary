const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/articleTemplate.tsx`)

  return graphql(`
    query BuildArticlesQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
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
      createPage({
        path: article.slug,
        component: articleTemplate,
        context: {
          article: article,
          prevArticle: prevArticle,
          nextArticle: nextArticle,
        }
      });
    })
  })
}
