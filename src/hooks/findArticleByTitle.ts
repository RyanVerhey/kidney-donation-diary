import { iArticle } from '../interfaces';
import allArticles from './allArticles';

export default function findArticleByTitle(title: string): iArticle {
  return allArticles().filter(article => {
    return article.frontmatter.title.toLowerCase() === title.toLowerCase();
  })[0]
}
