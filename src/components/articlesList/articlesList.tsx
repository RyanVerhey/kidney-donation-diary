import * as React from 'react';
import { iArticle } from '../../interfaces';
import ArticlesListItem from './articlesListItem';

interface ArticlesListProps {
  articles: iArticle[];
}

const ArticlesList:React.FunctionComponent<ArticlesListProps> = ({ articles }) => {
  return (
    <div id="articles-list">
      {articles.map((article, key) => {
        return <ArticlesListItem key={key} article={article} />
      })}
    </div>
  );
}

export default ArticlesList;
