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

const Homepage: React.FC<HomepageProps> = ({ chronological = false }) => {
  let articles: iArticle[] = allArticles();

  let buttonText: string;
  let buttonLink: string;
  if (chronological) {
    buttonText = "Click here to view entries in the order they were published.";
    buttonLink = "/";
  } else {
    buttonText = "Click here to view entries in chronological order.";
    buttonLink = "/chronological";

    articles = articles.reverse();
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
