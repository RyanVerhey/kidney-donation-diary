import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import getGatsbyImageData from '../../hooks/getGatsbyImageData';
import { CustomImageData } from '../../interfaces';

interface ImgWithCaptionProps {
  src: string;
  alt: string;
}

const defaultOptions = {
  "float": "none",
  "caption": true,
}

const ImgWithCaption: React.FC<ImgWithCaptionProps> = ({
  src,
  alt,
}) => {
  const [altText, jsonOptions] = alt.split("|");
  const parsedJsonOptions = jsonOptions ? JSON.parse(jsonOptions) : {};
  const options = {
    ...defaultOptions,
    ...parsedJsonOptions,
  };
  const image: CustomImageData = getGatsbyImageData(src);

  return (
    <figure className={"image-wrapper " + options["float"]}>
      <a href={image.src} target="_blank">
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={altText}
          title={altText}
        />
      </a>
      { options.caption && <figcaption className="caption">{altText}</figcaption> }
    </figure>
  );
}

export default ImgWithCaption;
