import { graphql, useStaticQuery } from "gatsby";
import { iArticle } from "../interfaces";
import sortArticlesByDate from "./sortArticlesByDate";

export default function getAllArticles(): iArticle[] {
  return useStaticQuery(graphql`
    query ArticleListQuery {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        articles:nodes {
          id
          slug
          frontmatter {
            date
            title
            author
          }
          excerpt(pruneLength: 103)
        }
      }
    }
  `).allMdx.articles.sort(sortArticlesByDate);
}
