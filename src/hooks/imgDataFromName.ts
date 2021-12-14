import getCdnOptions from './getCdnOptions';
import jsonImageData from "../data/images.json";
import { iImageData } from "../interfaces";

export default function imgDataFromName(name: string): iImageData {
  const imagesData: iImageData[] = jsonImageData;
  const cdn = getCdnOptions();

  const imageData: iImageData = imagesData.filter(data => {
    return data.name === name;
  })[0];

  imageData.src = `${cdn.host}/${cdn.imageDir}/${imageData.name}.${imageData.format}`;

  return imageData;
}
