import { useState } from 'react';
import { Product } from '../../types.ts';

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const updateProduct = (product: Product) => {
    const currentProduct = products.find((item) => item.id === product.id);
    if (!currentProduct) return;
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id ? { ...item, ...product } : item
      )
    );
  };

  const addProduct = (product: Product) => {
    const newProduct = {
      ...product,
      id: product.id ?? `p${products.length + 1}`,
    };
    setProducts((prevProducts) => prevProducts.concat(newProduct));
  };

  return { products, updateProduct, addProduct };
};
