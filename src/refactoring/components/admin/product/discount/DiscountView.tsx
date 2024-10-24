import { Discount } from '../../../../../types';
import { Button } from '../../../ui';
import { DiscountDetailView } from '../shared/DiscountDetailView';

// 할인
export const DiscountView: React.FC<{
  discount: Discount;
  index: number;
  onDiscountRemove: (discountIndex: number) => void;
}> = ({ discount, index, onDiscountRemove }) => {
  const handleDiscountRemove = (index: number) => {
    onDiscountRemove(index);
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <DiscountDetailView discount={discount} />
      <Button
        title={'삭제'}
        variant={'danger'}
        className={'px-2 py-1'}
        onClick={() => handleDiscountRemove(index)}
      />
    </div>
  );
};
