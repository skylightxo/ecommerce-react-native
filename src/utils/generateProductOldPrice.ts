export const generateProductOldPrice = (price: number) => {
  return (price + Math.random() * 100).toFixed(0);
};
