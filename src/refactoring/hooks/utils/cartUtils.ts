import { CartItem, Coupon, Product } from '../../../types';
import { getMaxDiscountByQuantity } from './discountUtils';

/**
 * 장바구니 아이템의 총액을 계산합니다.
 * - 할인 정보가 존재할 경우 할인이 적용되며, 수량에 따라 올바른 할인이 적용됩니다.
 * @param {CartItem} item 장바구니 아이템
 * @returns {number} 장바구니 아이템 총액
 */
export const calculateItemTotal = (item: CartItem): number => {
  return (
    item.product.price * item.quantity * (1 - getMaxApplicableDiscount(item))
  );
};

/**
 * 수량을 기준으로 적용할 수 있는 아이템의 최대 할인율을 반환합니다.
 * @param {CartItem} item 장바구니 아이템
 * @returns {number} 적용 가능 최대 할인율
 */
export const getMaxApplicableDiscount = ({ product, quantity }: CartItem): number => {
  return getMaxDiscountByQuantity(product.discounts, quantity);
};

/**
 * 장바구니 내 상품의 할인 적용 전후 총액과 총 할인 금액을 계산하여 반환합니다.
 * @param {CartItem[]} items 장바구니 아이템 목록
 * @param {Coupon | null} selectedCoupon 선택한 쿠폰
 * @returns {object} totalBeforeDiscount: 할인 적용 전 총액, totalAfterDiscount: 할인 적용 후 총액, totalDiscount: 총 할인 금액
 */
export const calculateCartTotal = (
  items: CartItem[],
  selectedCoupon: Coupon | null
): {
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  totalDiscount: number;
} => {

  // 할인 적용 전 총액을 계산합니다.
  const totalBeforeDiscount = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  // 아이템 별 할인이 적용된 총액을 계산합니다.
  const totalItem = items.reduce(
    (sum, item) => sum + calculateItemTotal(item),
    0
  );

  // 할인 적용 후 총액을 계산합니다.
  const totalAfterDiscount = !selectedCoupon
    ? totalItem
    : selectedCoupon.discountType === 'amount'
    ? totalItem - selectedCoupon.discountValue
    : (totalItem * (100 - selectedCoupon.discountValue)) / 100;

  // 할인 전후 총액을 토대로 총 할인 금액을 도출합니다.
  const totalDiscount = totalBeforeDiscount - totalAfterDiscount;

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  };
};

/**
 * 장바구니 내 아이템의 수량을 변경합니다.
 * @param {CartItem[]} items 장바구니 아이템 목록
 * @param {string} productId 상품ID
 * @param {number} newQuantity 신규수량
 * @returns {CartItem[]} 변경된 장바구니 아이템 목록
 */
export const updateCartItemQuantity = (
  items: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] => {

  // 변경 수량이 0일 시 장바구니 내 아이템 목록에서 제거합니다.
  if (newQuantity === 0) {
    return items.filter((item) => item.product.id !== productId);
  }
  
  // 장바구니 내 아이템 목록에서 동일한 상품ID의 상품을 찾아 수량을 변경합니다.
  return items.map((item) =>
    item.product.id === productId
      ? { ...item, quantity: Math.min(item.product.stock, newQuantity) }
      : item
  );
};
