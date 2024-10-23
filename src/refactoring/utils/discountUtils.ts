import { Discount } from '../../types';

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

/**
 * 할인율 목록에 새 할인율을 추가합니다.
 * @param {Discount[]} discounts 할인율 목록
 * @param {Discount} newDiscount 새 할인율
 * @returns {Discount[]} 변경된 할인율 목록
 */
export const addDiscount = (discounts : Discount[], newDiscount: Discount) : Discount[] => discounts.concat(newDiscount);

/**
 * 할인율 목록에서 특정 할인율을 제거합니다.
 * @param {Discount[]} discounts 할인율 목록
 * @param {number} index 할인율 인덱스
 * @returns {Discount[]} 변경된 할인율 목록
 */
export const removeDiscount = (discounts: Discount[], index: number) : Discount[] => discounts.filter((_, i) => i !== index);
