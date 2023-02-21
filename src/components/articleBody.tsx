import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"
import ImgWithCaption from './mdx/imgWithCaption';
import LinkToArticle from './mdx/linkToArticle'

interface ArticleBodyProps {
  children: any
}

const components = {
  ImgWithCaption,
  LinkToArticle,
  img: ImgWithCaption,
}

const ArticleBody: React.FC<ArticleBodyProps> = ({children}) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}

export default ArticleBody;
