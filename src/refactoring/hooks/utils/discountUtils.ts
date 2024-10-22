import { Discount } from '../../../types';

/**
 * 할인율 목록 중 최대 할인율을 반환합니다.
 * @param {discount[]} discounts 할인율 목록
 * @returns {number} 최대 할인율
 */
export const getMaxDiscount = (
  discounts: Discount[]
): number => {
  return discounts.reduce(
        (max, discount) =>
          Math.max(max, discount.rate),
        0
      );
};

/**
 * 할인율 목록 내 수량 기준과 비교하여 최대 할인율을 반환합니다.
 * @param {discount[]} discounts 할인율 목록
 * @param {number} quantity 수량
 * @returns {number} 최대 할인율
 */
export const getMaxDiscountByQuantity = (
  discounts: Discount[],
  quantity: number
): number => {
  return discounts.reduce(
        (max, discount) =>
          quantity >= discount.quantity ? Math.max(max, discount.rate) : max,
        0
      );
};
