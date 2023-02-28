import React, {FC, useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {ImageService} from '../../services/Image.service';

import {styles} from './ProductCard.styles';

import type {Product} from '../../types/product.type';

const comparePrices = (newPrice: string, oldPrice: string) => {
  return Math.round(100 - (Number(newPrice) / Number(oldPrice)) * 100);
};

type ProductCardProps = {
  product: Product;
  style?: ViewStyle;
  onPress?: () => void;
};

export const ProductCard: FC<ProductCardProps> = ({
  product,
  style,
  onPress,
}) => {
  const [imageSource, setImageSource] = useState<string>();
  const productName = product.attributes.name;
  const productPrice = Number(product.attributes.price).toFixed(0);
  const productOldPrice = (Number(productPrice) + Math.random() * 100).toFixed(
    0,
  );

  const comparedPrice = useMemo(
    () => comparePrices(productPrice, productOldPrice),
    [productOldPrice, productPrice],
  );

  const comparePriceText = useMemo(
    () =>
      comparedPrice > 0 ? (
        <Text style={styles.comparedPrice}>{comparedPrice}% Off</Text>
      ) : null,
    [comparedPrice],
  );

  useEffect(() => {
    const imageId = product.relationships.images.data[0].id;
    ImageService.getImage(imageId, '100', '100').then(url =>
      setImageSource(url),
    );
  }, [product.relationships.images.data]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, styles.shadowProps, style]}>
        <View>
          {imageSource && (
            <Image source={{uri: imageSource}} style={styles.image} />
          )}
          <Text style={styles.name}>{productName}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${productPrice}</Text>
          {productPrice !== productOldPrice && (
            <Text style={styles.oldPrice}>${productOldPrice}</Text>
          )}
          {comparePriceText}
        </View>
      </View>
    </TouchableOpacity>
  );
};
