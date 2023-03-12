export const generateProductOldPrice = (price: number) => {
  const productOldPrice = (Number(price) + Math.random() * 100).toFixed(0);
  return productOldPrice;
};
