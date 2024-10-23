import { Discount } from '../../../types.ts';

// 할인 전시
export const DiscountDisplay: React.FC<{
  discount: Discount;
}> = ({ discount }) => {
  return (
    <span>
      {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
    </span>
  );
};