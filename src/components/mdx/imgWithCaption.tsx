import * as React from 'react';

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
  const image = require(`images/${src}`).default;

  return (
    <figure className={"image-wrapper " + options["float"]}>
      <a href={image}>
        {/* Use GatsbyImage, can query "allImageSharp" to get graphql image data. Pass that object into GatsbyImage */}
        <img src={image} alt={altText} title={altText} />
      </a>
      { options.caption && <figcaption className="caption">{altText}</figcaption> }
    </figure>
  );
}

export default ImgWithCaption;
