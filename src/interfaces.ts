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

export interface iImageData {
  name: string;
  width: number;
  height: number;
  format: string;
  src?: string;
  smallSrc?: string;
}

export interface CdnOptions {
  host: string;
  imageDir: string;
  smallImageDir: string;
}
