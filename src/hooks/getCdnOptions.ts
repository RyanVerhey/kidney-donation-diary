import { graphql, useStaticQuery } from "gatsby";
import { CdnOptions } from "../interfaces";

export default function getCdnOptions(): CdnOptions {
  const cdnOptions: CdnOptions = useStaticQuery(graphql`
    query CdnOptionsQuery {
      site {
        siteMetadata {
          cdnOptions {
            host
            imageDir
          }
        }
      }
    }
  `).site.siteMetadata.cdnOptions;

  return cdnOptions;
}
