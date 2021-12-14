const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/articleTemplate.tsx`)

  return graphql(`
    query BuildArticlesQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
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
      const production = process.env.GATSBY_ACTIVE_ENV === 'production'
      if (article.frontmatter.draft && production) return;

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
