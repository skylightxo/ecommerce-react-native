import {useCallback, useEffect, useState} from 'react';
import {ProductsService} from '../services/Products.service';

import type {Product} from '../types/product.type';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    ProductsService.getProducts()
      .then(({data}) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {products, isLoading, fetchProducts};
};
