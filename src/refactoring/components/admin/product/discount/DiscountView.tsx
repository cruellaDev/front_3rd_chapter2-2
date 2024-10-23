import { Discount } from '../../../../../types';
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
      <button
        onClick={() => handleDiscountRemove(index)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        삭제
      </button>
    </div>
  );
};
