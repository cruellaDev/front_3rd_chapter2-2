import { CartItem, Coupon } from '../../../types';

export const calculateItemTotal = (item: CartItem) => {
  return (
    item.product.price * item.quantity * (1 - getMaxApplicableDiscount(item))
  );
};

export const getMaxApplicableDiscount = (item: CartItem) => {
  return item.product.discounts.reduce(
    (max, discount) =>
      discount.quantity <= item.quantity ? Math.max(max, discount.rate) : max,
    0
  );
};

export const calculateCartTotal = (
  cart: CartItem[],
  selectedCoupon: Coupon | null
) => {
  const totalBeforeDiscount = cart.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
  const totalItem = cart.reduce(
    (sum, item) => sum + calculateItemTotal(item),
    0
  );
  const totalAfterDiscount = !selectedCoupon
    ? totalItem
    : selectedCoupon.discountType === 'amount'
    ? totalItem - selectedCoupon.discountValue
    : (totalItem * (100 - selectedCoupon.discountValue)) / 100;

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount: totalBeforeDiscount - totalAfterDiscount,
  };
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] => {
  if (newQuantity === 0) {
    return cart.filter((item) => item.product.id !== productId);
  }
  return cart.map((item) =>
    item.product.id === productId
      ? { ...item, quantity: Math.min(item.product.stock, newQuantity) }
      : item
  );
};
