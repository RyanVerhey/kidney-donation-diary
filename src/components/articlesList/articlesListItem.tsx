import { Link } from '@reach/router';
import * as React from 'react';
import formatArticleDate from '../../hooks/formatArticleDate';
import { iArticle } from '../../interfaces';
import LinkToArticle from '../mdx/linkToArticle';

interface ArticlesListItemProps {
  article: iArticle;
}

const ArticlesListItem = ({ article }: ArticlesListItemProps) => {
  return (
    <div className="article-list-item">
      <div className="article-title">
        <h3><LinkToArticle article={article}>{article.frontmatter.title}</LinkToArticle></h3>
        <span>{formatArticleDate(article.frontmatter.date)}</span>
      </div>
      <div className="article-summary">
        <p>
          {article.excerpt}
        </p>
        <div className="gradient"></div>
      </div>
      <hr/>
    </div>
  );
}

export default ArticlesListItem;
