// useCart.ts
import { useState } from 'react';
import { CartItem, Coupon, Product } from '../../types';
import { calculateCartTotal, updateCartItemQuantity } from './utils/cartUtils';

/**
 * 장바구니를 관리하는 사용자 정의 hook 입니다.
 * @returns {object} 장바구니 데이터와 장바구니 데이터 관리를 위한 메소드를 제공합니다.
 */
export const useCart = (): {
  cart: CartItem[];
  addToCart: any;
  removeFromCart: any;
  updateQuantity: any;
  applyCoupon: any;
  calculateTotal: () => {
    totalBeforeDiscount: number;
    totalAfterDiscount: number;
    totalDiscount: number;
  };
  selectedCoupon: Coupon | null;
} => {
  /**
   * 장바구니 관련 상태를 관리합니다.
   */
  // 1. 장바구니 아이템 목록
  const [cart, setCart] = useState<CartItem[]>([]);
  // 2. 선택된 쿠폰
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  /**
   * 장바구니에 아이템을 추가합니다.
   * @param {Product} product 추가할 상품
   */
  const addToCart = (product: Product): void => {
    const currentItem = cart.find((item) => item.product.id === product.id);
    if (currentItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => prevCart.concat({ product, quantity: 1 }));
    }
  };

  /**
   * 장바구니에서 아이템을 제거합니다.
   * @param {number} productId 제거할 상품ID
   */
  const removeFromCart = (productId: string): void => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  /**
   * 장바구니 아이템의 수량을 변경합니다.
   * @param {number} productId 변경할 상품ID
   * @param {number} newQuantity 신규수량
   */
  const updateQuantity = (productId: string, newQuantity: number): void => {
    setCart((prevCart) =>
      updateCartItemQuantity(prevCart, productId, newQuantity)
    );
  };

  /**
   * 쿠폰을 적용합니다.
   * @param {Coupon} coupon 적용할 쿠폰
   * @returns {void}
   */
  const applyCoupon = (coupon: Coupon): void => setSelectedCoupon(coupon);

  /**
   * 장바구니 총 합계를 계산합니다.
   * @returns 할인 전 총액, 할인 후 총액, 총 할인 금액
   */
  const calculateTotal = (): {
    totalBeforeDiscount: number;
    totalAfterDiscount: number;
    totalDiscount: number;
  } => calculateCartTotal(cart, selectedCoupon);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
  };
};
