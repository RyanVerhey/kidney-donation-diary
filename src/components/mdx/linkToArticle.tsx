import * as React from 'react';
import { Link } from 'gatsby';
import { iArticle } from '../../interfaces';
import findArticleByTitle from '../../hooks/findArticleByTitle';

interface LinkToArticleProps {
  article?: iArticle;
  title?: string;
}

const LinkToArticle: React.FC<LinkToArticleProps> = ({ article, title, children }) => {
  let articleSlug: string;
  if (article) {
    articleSlug = article.slug;
  } else if (title) {
    const foundArticle: iArticle = findArticleByTitle(title);
    articleSlug = foundArticle.slug;
  }

  if (!articleSlug) throw "You must pass in an article or an article title"

  return (
    <Link to={"/" + articleSlug}>{children}</Link>
  );
}

export default LinkToArticle;
