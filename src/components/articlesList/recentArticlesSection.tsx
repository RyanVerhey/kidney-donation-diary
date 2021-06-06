import * as React from 'react';
import allArticles from '../../hooks/allArticles';
import { iArticle } from '../../interfaces';
import ArticlesList from './articlesList';

interface RecentArticlesSectionProps {
  except?: iArticle;
}

const RecentArticlesSection: React.FC<RecentArticlesSectionProps> = ({ except }) => {
  let articles: iArticle[] = allArticles().reverse();
  if (except) {
    articles = articles.filter(article => {
      return article.slug !== except.slug;
    });
  }

  return (
    <section>
      <hr />
      <h2>Recent Articles:</h2>
      <ArticlesList articles={articles.slice(0, 3)} />
    </section>
  );
}

export default RecentArticlesSection;
