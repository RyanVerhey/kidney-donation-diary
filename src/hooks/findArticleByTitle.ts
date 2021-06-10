import { iArticle } from '../interfaces';
import getAllArticles from './getAllArticles';

export default function findArticleByTitle(title: string): iArticle {
  return getAllArticles().filter(article => {
    return article.frontmatter.title.toLowerCase() === title.toLowerCase();
  })[0]
}
