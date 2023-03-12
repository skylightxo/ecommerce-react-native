import React, {useMemo} from 'react';
import {Text, View} from 'react-native';

import {generateProductOldPrice} from '../../utils/generateProductOldPrice';

import {styles} from './ProductPrice.styles';

type ProductPriceProps = {
  price: string;
};

const comparePrices = (newPrice: string, oldPrice: string) => {
  return Math.round(100 - (Number(newPrice) / Number(oldPrice)) * 100);
};

export const ProductPrice = ({price}: ProductPriceProps) => {
  const productFormattedPrice = Number(price).toFixed(0);
  const productOldPrice = generateProductOldPrice(
    Number(productFormattedPrice),
  );

  const comparedPrice = useMemo(
    () => comparePrices(productFormattedPrice, productOldPrice),
    [productFormattedPrice, productOldPrice],
  );

  const comparePriceText = useMemo(
    () =>
      comparedPrice > 0 ? (
        <Text style={styles.comparedPrice}>{comparedPrice}% Off</Text>
      ) : null,
    [comparedPrice],
  );

  return (
    <View style={styles.priceRow}>
      <Text style={styles.price}>${productFormattedPrice}</Text>
      {productFormattedPrice !== productOldPrice && (
        <Text style={styles.oldPrice}>${productOldPrice}</Text>
      )}
      {comparePriceText}
    </View>
  );
};
