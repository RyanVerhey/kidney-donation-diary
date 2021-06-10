import * as React from 'react';
import { Link } from 'gatsby';
import { iArticle } from '../interfaces';
import LinkToArticle from './mdx/linkToArticle';

interface NextPrevArticleLinksProps {
  prevArticle: iArticle;
  nextArticle: iArticle;
}

const NextPrevArticleLinks: React.FC<NextPrevArticleLinksProps> = ({
  prevArticle,
  nextArticle,
}) => {
  return (
    <div className="previous-next-article-links">
      &nbsp;
      {prevArticle && (
        <div className="left">
          <LinkToArticle article={prevArticle}>&lt; Next Oldest Article</LinkToArticle>
        </div>
      )}
      {nextArticle && (
        <div className="right">
          <LinkToArticle article={nextArticle}>Next Newest Article &gt;</LinkToArticle>
        </div>
      )}
    </div>
  );
}

export default NextPrevArticleLinks;
