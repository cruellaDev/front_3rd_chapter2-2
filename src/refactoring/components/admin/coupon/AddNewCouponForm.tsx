import { memo, useState } from 'react';
import { Coupon } from '../../../../types.ts';

const initialCoupon: Coupon = {
  name: '',
  code: '',
  discountType: 'percentage',
  discountValue: 0,
};

// 신규 쿠폰 추가 폼
export const AddNewCouponForm: React.FC<{
  onCouponAdd: (newCoupon: Coupon) => void;
}> = memo(({ onCouponAdd }) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>(initialCoupon);

  const handleEditCouponFormInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCoupon((prevCoupon) => ({
      ...prevCoupon,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEditCouponDiscountType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setNewCoupon((prevCoupon) => ({
      ...prevCoupon,
      discountType: event.target.value as 'amount' | 'percentage',
    }));
  };

  const handleAddCoupon = () => {
    onCouponAdd(newCoupon);
    setNewCoupon({ ...initialCoupon });
  };

  return (
    <div className="space-y-2 mb-4">
      <input
        type="text"
        placeholder="쿠폰 이름"
        name="name"
        value={newCoupon.name}
        onChange={handleEditCouponFormInput}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="쿠폰 코드"
        name="code"
        value={newCoupon.code}
        onChange={handleEditCouponFormInput}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <select
          name="discountType"
          value={newCoupon.discountType}
          onChange={handleEditCouponDiscountType}
          className="w-full p-2 border rounded"
        >
          <option value="amount">금액(원)</option>
          <option value="percentage">할인율(%)</option>
        </select>
        <input
          type="number"
          placeholder="할인 값"
          name="discountValue"
          value={newCoupon.discountValue}
          onChange={handleEditCouponFormInput}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleAddCoupon}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        쿠폰 추가
      </button>
    </div>
  );
});
