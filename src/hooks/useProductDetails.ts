import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { dummyApi } from '../services/api';

export const useProductDetails = (productId: string | undefined) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dummyApi
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setSelectedProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [productId]);

  return { selectedProduct, loading };
};

