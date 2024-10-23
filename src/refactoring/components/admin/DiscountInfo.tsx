import { Discount } from '../../../types.ts';
import { DiscountDisplay } from './DiscountDisplay';
import { AddNewDiscountForm } from './AddNewDiscountForm';

// 할인 정보
export const DiscountInfo: React.FC<{
  discounts: Discount[];
  addDiscountToProduct: (discount: Discount) => void;
  removeDiscountFromProduct: (discountIndex: number) => void;
}> = ({
  discounts,
  addDiscountToProduct,
  removeDiscountFromProduct,
}) => {
  
  const handleRemoveDiscount = (index: number) => {
    removeDiscountFromProduct(index);
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
      {discounts.map((discount, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <DiscountDisplay discount={discount} />
          <button
            onClick={() => handleRemoveDiscount(index)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      ))}
      <AddNewDiscountForm addDiscountToProduct={addDiscountToProduct} />
    </div>
  );
};