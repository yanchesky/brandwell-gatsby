import { getImage } from "gatsby-plugin-image";

export * from "./breakpoints";

export const getArtDirectedImages = ({ mobile, tablet }) => {
  const images = [];
  if (mobile) {
    images.push({
      media: "(max-width: 600px)",
      image: getImage(mobile),
    });
  }
  if (tablet) {
    images.push({
      media: "(min-width: 601px) and (max-width: 1200px)",
      image: getImage(tablet),
    });
  }
  return images;
};

export const getArtDirectedAspectRatios = ({ mobile, tablet, desktop }) => {
  const ratios = {};
  if (mobile) {
    const { width, height } = getImage(mobile);
    ratios.mobile = Math.round((height / width) * 100);
  }
  if (tablet) {
    const { width, height } = getImage(tablet);
    ratios.tablet = Math.round((height / width) * 100);
  }
  if (desktop) {
    const { width, height } = getImage(desktop);
    ratios.desktop = Math.round((height / width) * 100);
  }
  return ratios;
};

export const reduceImageQueryResult = (array) =>
  array.reduce((prev, { node }) => {
    const [key] = node.name.split(".");
    return {
      ...prev,
      [key]: node,
    };
  }, {});
