import { createContext, useMemo } from 'react';
import { Product } from '../../types';
import { useProducts } from '../hooks';

interface ProductProviderProps {
  initialProducts: Product[];
  children: React.ReactNode;
}

export interface ProductContextType {
  products: Product[];
  onProductUpdate: (product: Product) => void;
  onProductAdd: (product: Product) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({
  initialProducts,
  children,
}: ProductProviderProps) => {
  const { products, updateProduct, addProduct } = useProducts(initialProducts);

  const value = useMemo(
    () => ({
      products,
      onProductUpdate: updateProduct,
      onProductAdd: addProduct,
    }),
    [products, updateProduct, addProduct]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
