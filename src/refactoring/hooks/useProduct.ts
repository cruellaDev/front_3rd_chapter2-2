import { useState } from 'react';
import { Product } from '../../types.ts';

/**
 * 상품을 관리하는 사용자 정의 hook 입니다.
 * @param {Product[]} initialProducts 상품 목록 초깃값
 * @returns {object} 상품 데이터와 장바구니 상품 관리를 위한 메소드를 제공합니다.
 */
export const useProducts = (
  initialProducts: Product[]
): {
  products: Product[];
  updateProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
} => {
  /**
   * 상품 관련 상태를 관리합니다.
   */
  // 1. 상품 목록
  const [products, setProducts] = useState<Product[]>(initialProducts);

  /**
   * 상품을 수정합니다.
   * @param {Product} product 상품 수정 데이터
   * @returns {void}
   */
  const updateProduct = (product: Product): void => {
    const currentProduct = products.find((item) => item.id === product.id);
    if (!currentProduct) return;
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id ? { ...item, ...product } : item
      )
    );
  };

  /**
   * 상품을 추가합니다.
   * @param {Product} product 상품 추가 데이터
   * @returns {void}
   */
  const addProduct = (product: Product): void => {
    const newProduct = {
      ...product,
      id: product.id ?? `p${products.length + 1}`,
    };
    setProducts((prevProducts) => prevProducts.concat(newProduct));
  };

  return { products, updateProduct, addProduct };
};
