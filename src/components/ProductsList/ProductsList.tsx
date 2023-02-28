import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';
import {ProductCard} from '../ProductCard';
import {ProductsService} from '../../services/Products.service';

import {styles} from './ProductsList.styles';

import type {Product} from '../../types/product.type';
import {Text} from '@rneui/base';

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    ProductsService.getProducts()
      .then(({data}) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

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

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
