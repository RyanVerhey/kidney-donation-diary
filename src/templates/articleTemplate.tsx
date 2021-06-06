import * as React from 'react';
import { PageProps } from 'gatsby';
import ArticleBody from '../components/articleBody';
import MainLayout from '../components/layouts/layout';
import NextPrevArticleLinks from '../components/nextPrevArticleLinks';
import { iArticle } from '../interfaces';

interface ArticleTemplateProps extends PageProps {
  pageContext: {
    article: iArticle;
    prevArticle: iArticle,
    nextArticle: iArticle,
  }
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = (props): JSX.Element => {
  const {
    article,
    prevArticle,
    nextArticle,
  } = props.pageContext;
  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  return (
    <MainLayout>
      <article>
        <header id="article-header">
          <NextPrevArticleLinks
            prevArticle={prevArticle}
            nextArticle={nextArticle}
          />
          <h1>{title}</h1>
          <div className="date">{formattedDate}</div>
        </header>
        <ArticleBody body={body} />
      </article>
      <section>
        <NextPrevArticleLinks
          prevArticle={prevArticle}
          nextArticle={nextArticle}
        />
      </section>
      <section>
        <hr />
        <h2>Recent Articles:</h2>
        {/* Show article list of 3 most recent EXCEPT current */}
      </section>
    </MainLayout>
  )
}

export default ArticleTemplate;
