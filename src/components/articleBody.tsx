import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ImgWithCaption from './mdx/imgWithCaption';

interface ArticleBodyProps {
  body: string;
}

const components = {
  ImgWithCaption: ImgWithCaption,
  img: ImgWithCaption,
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ body }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  );
}

export default ArticleBody;
