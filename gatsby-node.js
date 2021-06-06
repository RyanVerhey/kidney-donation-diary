const path = require(`path`);

// Repeating code from src/hooks/generateArticleSlug. Need to find a way to use that here, or vice-versa
function generateArticleSlug(origSlug) {
  const [, year, month, day, slug] = origSlug.match(/^(\d{4})-(\d{2})-(\d{2})-([\w-]+)/i);

  return `${year}${month}${day}-${slug}`;
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/articleTemplate.tsx`)

  return graphql(`
    query BuildArticlesQuery {
      allMdx {
        articles:nodes {
          id
          slug
          frontmatter {
            date
            title
          }
          body
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const articles = result.data.allMdx.articles;
    articles.forEach((article, index) => {
      const prevArticle = index === 0 ? null : articles[index - 1];
      const nextArticle = index === articles.length - 1 ? null : articles[index + 1];

      createPage({
        path: generateArticleSlug(article.slug),
        component: articleTemplate,
        context: {
          article: article,
          prevArticle: prevArticle,
          nextArticle: nextArticle,
        }
      })
    })
  })
}
