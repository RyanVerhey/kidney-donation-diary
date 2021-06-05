import { graphql, useStaticQuery } from "gatsby";
import { iArticle } from "../interfaces";

export default function allArticles(): iArticle[] {
  return useStaticQuery(graphql`
    query ArticleListQuery {
      allMdx(sort: { fields: slug, order: ASC }) {
        articles:nodes {
          id
          slug
          frontmatter {
            date
            title
          }
          excerpt(pruneLength: 103)
        }
      }
    }
  `).allMdx.articles;
}
