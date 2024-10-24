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

  // 이벤트 핸들러 - 쿠폰명 변경
  const handleCouponNameUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCoupon((prevCoupon) => ({
      ...prevCoupon,
      name: event.target.value,
    }));
  };

  // 이벤트 핸들러 - 쿠폰 코드 변경
  const handleCouponCodeUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCoupon((prevCoupon) => ({
      ...prevCoupon,
      code: event.target.value,
    }));
  };

  // 이벤트 핸들러 - 쿠폰 할인값 변경
  const handleCouponDiscountValueUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCoupon((prevCoupon) => ({
      ...prevCoupon,
      discountValue: parseInt(event.target.value),
    }));
  };

  // 이벤트 핸들러 - 쿠폰 할인 기준 변경
  const handleCouponDiscountTypeUpdate = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setNewCoupon((prevCoupon) => ({
      ...prevCoupon,
      discountType: event.target.value as 'amount' | 'percentage',
    }));
  };

  // 이벤트 핸들러 - 쿠폰 추가
  const handleCouponAdd = () => {
    if (!newCoupon.name || !newCoupon.code || !newCoupon.discountValue) return;
    onCouponAdd(newCoupon);
    setNewCoupon({ ...initialCoupon });
  };

  return (
    <div className="space-y-2 mb-4">
      <input
        type="text"
        placeholder="쿠폰 이름"
        value={newCoupon.name}
        onChange={handleCouponNameUpdate}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="쿠폰 코드"
        value={newCoupon.code}
        onChange={handleCouponCodeUpdate}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <select
          value={newCoupon.discountType}
          onChange={handleCouponDiscountTypeUpdate}
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
          onChange={handleCouponDiscountValueUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleCouponAdd}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        쿠폰 추가
      </button>
    </div>
  );
});
