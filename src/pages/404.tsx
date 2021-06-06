import { Link } from "gatsby";
import * as React from "react";
import RecentArticlesSection from "../components/articlesList/recentArticlesSection";
import MainLayout from '../components/layouts/layout';

const NotFoundPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="404">
        <h1>Not Found</h1>
        <p>The page you're looking for could not be found.</p>
        <p>
          <Link to="/">
            Please return to the homepage and try again.
          </Link>
        </p>
      </div>
      <RecentArticlesSection />
    </MainLayout>
  );
}

export default NotFoundPage;
