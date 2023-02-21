import * as React from 'react';
import Helmet from 'react-helmet';
import { PageProps } from 'gatsby';
import ArticleBody from '../components/articleBody';
import MainLayout from '../components/layouts/layout';
import NextPrevArticleLinks from '../components/nextPrevArticleLinks';
import { iArticle } from '../interfaces';
import RecentArticlesSection from '../components/articlesList/recentArticlesSection';
import formatArticleDate from '../hooks/formatArticleDate';

interface ArticleTemplateProps extends PageProps {
  pageContext: {
    article: iArticle;
    prevArticle: iArticle,
    nextArticle: iArticle,
  },
  children: any;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = (props): JSX.Element => {
  const {
    article,
    prevArticle,
    nextArticle,
  } = props.pageContext;
  const { children } = props;
  return (
    <MainLayout>
      <Helmet>
        <title>{article.frontmatter.title} - Kidney Donation Diary</title>
      </Helmet>
      <article>
        <header id="article-header">
          <NextPrevArticleLinks
            prevArticle={prevArticle}
            nextArticle={nextArticle}
          />
          <h1>{article.frontmatter.title}</h1>
          <div className="date">{formatArticleDate(article.frontmatter.date)}</div>
          {article.frontmatter.author && <div className="byline">By {article.frontmatter.author}</div>}
        </header>
        <ArticleBody>
          {children}
        </ArticleBody>
      </article>
      <section>
        <NextPrevArticleLinks
          prevArticle={prevArticle}
          nextArticle={nextArticle}
        />
      </section>
      <RecentArticlesSection except={article} />
    </MainLayout>
  )
}

export default ArticleTemplate;
