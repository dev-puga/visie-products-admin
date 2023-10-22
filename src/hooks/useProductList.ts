import { useState, useEffect } from 'react';
import { dummyApi } from '../services/api';
import { Product } from '../types/Product';


export const useProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await dummyApi.get('/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};
