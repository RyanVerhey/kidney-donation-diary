import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { CustomImageData } from '../interfaces';

interface GatsbyImageDataWrapper {
  gatsbyImageData: IGatsbyImageData;
  fixed: {
    originalName: string;
  };
  original: {
    src: string;
  };
}

export default function getGatsbyImageData(imageName: string): CustomImageData {
  const images: GatsbyImageDataWrapper[] = useStaticQuery(graphql`
    query allImagesQuery {
      allImageSharp {
        images: nodes {
          gatsbyImageData(placeholder: BLURRED)
          fixed {
            originalName
          }
          original {
            src
          }
        }
      }
    }
  `).allImageSharp.images;

  const image: GatsbyImageDataWrapper = images.filter(i => {
    return i.fixed.originalName === imageName;
  })[0];

  if (!image) throw "That image name doesn't exist";

  return {
    gatsbyImageData: image.gatsbyImageData,
    name: image.fixed.originalName,
    src: image.original.src,
  };
}
