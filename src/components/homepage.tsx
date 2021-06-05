import * as React from 'react';
import { Link } from 'gatsby';
import { iArticle } from '../interfaces';
import ArticlesList from './articlesList/articlesList';
import MainLayout from './layouts/layout';
import '../../static/fonts/raleway.css'
import '../styles/normalize.scss'
import '../styles/styles.scss'
import allArticles from "../hooks/allArticles";

interface HomepageProps {
  chronological?: boolean;
}

const sortArticlesByDate = (firstEl, secondEl) => {
  if (firstEl.frontmatter.date < secondEl.frontmatter.date) {
    return 1;
  }
  if (firstEl.frontmatter.date > secondEl.frontmatter.date) {
    return -1;
  }
  return 0;
}

const Homepage: React.FC<HomepageProps> = ({ chronological = false }) => {
  let articles: iArticle[] = allArticles();

  let buttonText: string;
  let buttonLink: string;
  if (chronological) {
    buttonText = "Click here to view entries in the order they were published.";
    buttonLink = "/";

    articles = articles.sort(sortArticlesByDate).reverse();
  } else {
    buttonText = "Click here to view entries in chronological order.";
    buttonLink = "/chronological";

    articles = articles.sort(sortArticlesByDate);
  }

  return (
    <MainLayout>
      <p>
        <Link to={buttonLink} className="chronological-link">{buttonText}</Link>
      </p>
      <ArticlesList articles={articles} />
    </MainLayout>
  );
}

export default Homepage;
