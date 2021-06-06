import { iArticle } from '../interfaces';
import allArticles from './allArticles';

export default function findArticleByTitle(title: string): iArticle {
  return allArticles().filter(article => {
    console.log(article.frontmatter.title.toLowerCase(), title.toLowerCase(), article.frontmatter.title.toLowerCase() === title.toLowerCase())
    return article.frontmatter.title.toLowerCase() === title.toLowerCase();
  })[0]
}
