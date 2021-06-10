import { IGatsbyImageData } from "gatsby-plugin-image";

export interface iArticle {
  id: string;
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    author?: string;
    draft?: boolean;
  };
  body?: string;
  excerpt?: string;
}

export interface CustomImageData {
  gatsbyImageData: IGatsbyImageData;
  name: string;
  src: string;
}
