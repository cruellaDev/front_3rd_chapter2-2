import { memo } from 'react';
import { Discount } from '../../../../../types';
import { DiscountView } from './DiscountView';

// 할인 목록
export const DiscountList: React.FC<{
  discounts: Discount[];
  onDiscountRemove: (discountIndex: number) => void;
}> = memo(({ discounts, onDiscountRemove }) => {
  return (
    <>
      {discounts.map((discount, index) => (
        <DiscountView
          key={index}
          discount={discount}
          index={index}
          onDiscountRemove={onDiscountRemove}
        />
      ))}
    </>
  );
});
