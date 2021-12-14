import * as React from 'react';
import getGatsbyImageData from '../../hooks/getGatsbyImageData';
import getImageDataFromName from '../../hooks/imgDataFromName';
import { CustomImageData, iImageData } from '../../interfaces';
import jsonImageData from "../../data/images.json";

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
  const [imgSrc, setSrc] = React.useState<string>("");
  const [imgAlt, setAlt] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [altText, jsonOptions] = alt.split("|");
  const imagesData: iImageData[] = jsonImageData;
  const parsedJsonOptions = jsonOptions ? JSON.parse(jsonOptions) : {};
  const options = {
    ...defaultOptions,
    ...parsedJsonOptions,
  };

  const imageData: iImageData = getImageDataFromName(src);

  const onImageLoad = React.useCallback(() => {
    setSrc(imageData.src);
    setAlt(altText);
    setLoading(false);
  }, [src, alt])

  React.useEffect(() => {
    // When image loads, set the src and the browser will load the cached version
    const img = new Image();
    img.src = imageData.src;
    img.addEventListener("load", onImageLoad, { once: true });
  }, [src, alt, onImageLoad]);

  const loadingStyles = {
    paddingTop: `${((imageData.height / imageData.width) * 100).toFixed(2)}%`,
    backgroundImage: `url('${imageData.smallSrc}')`,
  }

  return (
    <figure className={`image-wrapper ${options["float"]} ${!imgSrc ? 'placeholder' : ''}`}>
      <a href={imageData.src} target="_blank">
        <img
          className={loading ? "loading" : ""}
          src={imgSrc}
          alt={imgAlt}
          title={imgAlt}
          style={loading ? loadingStyles : {}}
        />
      </a>
      { options.caption && <figcaption className="caption">{altText}</figcaption> }
    </figure>
  );
}

export default ImgWithCaption;
