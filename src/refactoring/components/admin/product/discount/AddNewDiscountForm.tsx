import { memo, useState } from 'react';
import { Discount } from '../../../../../types.ts';
import { Button } from '../../../ui';

const initialDiscount: Discount = {
  quantity: 0,
  rate: 0,
};

// 신규 할인 추가 폼
export const AddNewDiscountForm: React.FC<{
  onDiscountAdd: (discount: Discount) => void;
}> = memo(({ onDiscountAdd }) => {
  const [newDiscount, setNewDiscount] = useState<Discount>(initialDiscount);

  // 이벤트 핸들러 - 수량 변경
  const handleQuantityUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDiscount((prevDiscount) => ({
      ...prevDiscount,
      quantity: Math.max(parseInt(event.target.value), 0),
    }));
  };

  // 이벤트 핸들러 - 할인율 변경
  const handleRateUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDiscount((prevDiscount) => ({
      ...prevDiscount,
      rate: Math.max(Math.min(parseInt(event.target.value), 100) / 100, 0),
    }));
  };

  // 이벤트 핸들러 - 할인 추가
  const handleDiscountAdd = () => {
    if (!newDiscount.quantity || !newDiscount.rate)
      return alert('할인 정보가 입력되지 않았습니다.');
    onDiscountAdd(newDiscount);
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
      <Button
        title={'할인 추가'}
        variant={'primary'}
        className={'w-1/3 p-2'}
        onClick={handleDiscountAdd}
      />
    </div>
  );
});
