import * as React from 'react';
import { Link } from 'gatsby';
import { iArticle } from '../../interfaces';
import generateArticleSlug from '../../hooks/generateArticleSlug';
import findArticleByTitle from '../../hooks/findArticleByTitle';

interface LinkToArticleProps {
  article?: iArticle;
  title?: string;
  text: string;
}

const LinkToArticle: React.FC<LinkToArticleProps> = ({ article, title, text }) => {
  let articleSlug: string;
  if (article) {
    articleSlug = generateArticleSlug(article.slug);
  } else if (title) {
    const foundArticle: iArticle = findArticleByTitle(title);
    articleSlug = generateArticleSlug(foundArticle.slug);
  }

  if (!articleSlug) throw "You must pass in an article or an article title"

  return (
    <Link to={"/" + articleSlug}>{text}</Link>
  );
}

export default LinkToArticle;
