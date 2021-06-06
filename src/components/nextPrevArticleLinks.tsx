import * as React from 'react';
import { Link } from 'gatsby';
import generateArticleSlug from '../hooks/generateArticleSlug';
import { iArticle } from '../interfaces';

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
          <Link
            to={"/" + generateArticleSlug(prevArticle.slug)}
          >&lt; Next Oldest Article</Link>
        </div>
      )}
      {nextArticle && (
        <div className="right">
          <Link
            to={"/" + generateArticleSlug(nextArticle.slug)}
          >Next Newest Article &gt;</Link>
        </div>
      )}
    </div>
  );
}

export default NextPrevArticleLinks;

{/* <div id="previous-next-article-links">
  &nbsp;
  <% if current_article != blog.articles.last %>
    <div class="left">
      <%= link_to "&lt; Next Oldest Article", current_article.article_previous %>
    </div>
  <% end %>
  <% if current_article != blog.articles.first %>
    <div class="right">
      <%= link_to "Next Newest Article &gt;", current_article.article_next %>
    </div>
  <% end %>
</div> */}
