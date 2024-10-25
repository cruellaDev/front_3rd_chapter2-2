import { createContext, useMemo } from 'react';
import { CartItem, Coupon, Product } from '../../types';
import { useCart } from '../hooks';

interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartContextType {
  cart: CartItem[];
  onCartItemAdd: (product: Product) => void;
  onCartItemRemove: (productId: string) => void;
  onCartItemQuantityUpdate: (productId: string, newQuantity: number) => void;
  onCouponApply: (coupon: Coupon) => void;
  calculateTotal: () => {
    totalBeforeDiscount: number;
    totalAfterDiscount: number;
    totalDiscount: number;
  };
  selectedCoupon: Coupon | null;
  getRemainingStock: (product: Product) => number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
    getRemainingStock,
  } = useCart();

  const value = useMemo(
    () => ({
      cart,
      onCartItemAdd: addToCart,
      onCartItemRemove: removeFromCart,
      onCartItemQuantityUpdate: updateQuantity,
      onCouponApply: applyCoupon,
      calculateTotal,
      selectedCoupon,
      getRemainingStock,
    }),
    [
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      applyCoupon,
      calculateTotal,
      selectedCoupon,
      getRemainingStock,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
