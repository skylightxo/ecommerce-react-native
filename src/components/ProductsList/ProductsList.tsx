import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';
import {ProductCard} from '../ProductCard';
import {useProducts} from '../../hooks/useProducts';

import {styles} from './ProductsList.styles';

import type {Product} from '../../types/product.type';
import {Text} from '@rneui/base';

export const ProductsList = () => {
  const {products, isLoading, fetchProducts} = useProducts();

  const renderItem: ListRenderItem<Product> = useCallback(
    ({item}) => <ProductCard product={item} />,
    [],
  );

  const keyExtractor: (item: Product) => string = useCallback(
    item => item.id,
    [],
  );

  const numCols = 2;
  const columnWrapperStyle = styles.row;

  return products.length ? (
    <FlatList
      key={numCols}
      numColumns={numCols}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={products}
      keyExtractor={keyExtractor}
      columnWrapperStyle={columnWrapperStyle}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />
      }
    />
  ) : (
    <Text>Loading</Text>
  );
};
