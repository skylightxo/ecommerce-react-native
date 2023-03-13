import React, {useEffect, useState, useMemo} from 'react';
import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

import {ImageService} from '../../services/Image.service';

import {styles} from './ProductCard.styles';

import type {Product} from '../../types/product.type';
import {ProductPrice} from '../ProductPrice';

type ProductCardProps = {
  product: Product;
  style?: ViewStyle;
  onPress?: () => void;
};

export const ProductCard = React.memo(
  ({product, style, onPress}: ProductCardProps) => {
    const [imageSource, setImageSource] = useState<string>();
    const productName = useMemo(() => product.attributes.name, [product]);

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
          <ProductPrice price={product.attributes.price} />
        </View>
      </TouchableOpacity>
    );
  },
);
