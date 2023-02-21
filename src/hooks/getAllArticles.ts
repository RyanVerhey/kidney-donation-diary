import { graphql, useStaticQuery } from "gatsby";
import { iArticle } from "../interfaces";
import sortArticlesByDate from "./sortArticlesByDate";

export default function getAllArticles(): iArticle[] {
  const articles: iArticle[] = useStaticQuery(graphql`
    query ArticleListQuery {
      allMdx(sort: {frontmatter: {date: ASC}}) {
        articles:nodes {
          id
          slug
          frontmatter {
            date
            title
            author
            draft
          }
          excerpt(pruneLength: 103)
        }
      }
    }
  `).allMdx.articles.sort(sortArticlesByDate);

  if (process.env.GATSBY_ACTIVE_ENV === 'production') {
    return articles.filter(article => {
      return !article.frontmatter.draft;
    })
  } else {
    return articles;
  }
}
