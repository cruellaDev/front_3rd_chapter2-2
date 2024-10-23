import { memo } from 'react';
import { Coupon } from '../../../../types.ts';

// 쿠폰 적용
export const CouponRedemption: React.FC<{
  coupons: Coupon[];
  applyCoupon: (coupon: Coupon) => void;
  selectedCoupon: Coupon | null;
}> = memo(({ coupons, applyCoupon, selectedCoupon }) => {
  const handleSelectCouponOption = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    applyCoupon(coupons[parseInt(event.target.value)]);
  };

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <select
        onChange={handleSelectCouponOption}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="">쿠폰 선택</option>
        {coupons.map((coupon, index) => (
          <CouponOption key={coupon.code} index={index} coupon={coupon} />
        ))}
      </select>
      {selectedCoupon && (
        <p className="text-green-600">
          적용된 쿠폰: {selectedCoupon.name}({selectedCoupon.discountValue}
          {selectedCoupon.discountType === 'amount' ? `원` : `%`} 할인)
        </p>
      )}
    </div>
  );
});

const CouponOption: React.FC<{
  coupon: Coupon;
  index: number;
}> = ({ coupon, index }) => {
  const { code, name, discountType, discountValue } = coupon;
  return (
    <option key={code} value={index}>
      {name} - {discountValue}
      {discountType === 'amount' ? `원` : `%`}
    </option>
  );
};
