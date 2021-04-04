import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const ArtDirectedImage = ({ data }) => {
  const images = withArtDirection(getImage(data.largeImage), []);

  return <GatsbyImage alt="test" image={images} />;
};

export default ArtDirectedImage;
