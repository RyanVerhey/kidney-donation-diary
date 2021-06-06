const path = require(`path`);

function sortArticlesByDate(firstEl, secondEl) {
  const firstElDate = new Date(firstEl.frontmatter.date).getTime();
  const secondElDate = new Date(secondEl.frontmatter.date).getTime();

  return firstElDate - secondElDate;
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
            author
          }
          body
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const articles = result.data.allMdx.articles.sort(sortArticlesByDate);
    articles.forEach((article, index) => {
      const prevArticle = index === 0 ? null : articles[index - 1];
      const nextArticle = index === articles.length - 1 ? null : articles[index + 1];

      createPage({
        path: article.slug,
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
