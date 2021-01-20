const importAll = (requireArray) => {
  let images = {};
  requireArray.keys().map((item) => {
    images[item.replace("./", "")] = requireArray(item).default;
  });
  return images;
};

const productImages = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

export default productImages;
