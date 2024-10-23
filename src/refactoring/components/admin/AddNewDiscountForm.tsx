import { useState } from 'react';
import { Discount } from '../../../types.ts';

const initialDiscount: Discount = {
  quantity: 0,
  rate: 0,
};

// 신규 할인 추가 폼
export const AddNewDiscountForm: React.FC<{
  addDiscountToProduct: (discount: Discount) => void;
}> = ({ addDiscountToProduct }) => {
  const [newDiscount, setNewDiscount] = useState<Discount>(initialDiscount);

  const handleQuantityUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDiscount((prevDiscount) => ({
      ...prevDiscount,
      quantity: parseInt(event.target.value),
    }));
  };

  const handleRateUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDiscount((prevDiscount) => ({
      ...prevDiscount,
      rate: parseInt(event.target.value) / 100,
    }));
  };

  const handleAddDiscount = () => {
    addDiscountToProduct(newDiscount);
    setNewDiscount({ ...initialDiscount });
  };

  return (
    <div className="flex space-x-2">
      <input
        type="number"
        placeholder="수량"
        value={newDiscount.quantity}
        onChange={handleQuantityUpdate}
        className="w-1/3 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="할인율 (%)"
        value={newDiscount.rate * 100}
        onChange={handleRateUpdate}
        className="w-1/3 p-2 border rounded"
      />
      <button
        onClick={handleAddDiscount}
        className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        할인 추가
      </button>
    </div>
  );
};
