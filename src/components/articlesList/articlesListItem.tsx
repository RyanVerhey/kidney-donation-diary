import { Link } from '@reach/router';
import * as React from 'react';
import formatArticleDate from '../../hooks/formatArticleDate';
import generateArticleSlug from '../../hooks/generateArticleSlug';
import { iArticle } from '../../interfaces';

interface ArticlesListItemProps {
  article: iArticle;
}

const ArticlesListItem = ({ article }: ArticlesListItemProps) => {
  return (
    <div className="article-list-item">
      <div className="article-title">
        <h3><Link to={"/" + generateArticleSlug(article.slug)}>{article.frontmatter.title}</Link></h3>
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
