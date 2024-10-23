import { memo } from 'react';
import { Discount } from '../../../../../types.ts';
import { AddNewDiscountForm } from './AddNewDiscountForm';
import { DiscountList } from './DiscountList';

// 할인 관리
export const DiscountManagement: React.FC<{
  discounts: Discount[];
  onDiscountAdd: (discount: Discount) => void;
  onDiscountRemove: (discountIndex: number) => void;
}> = memo(({ discounts, onDiscountAdd, onDiscountRemove }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
      {/* 할인 목록 */}
      <DiscountList discounts={discounts} onDiscountRemove={onDiscountRemove} />
      {/* 신규 할인 추가 폼 */}
      <AddNewDiscountForm onDiscountAdd={onDiscountAdd} />
    </div>
  );
});
