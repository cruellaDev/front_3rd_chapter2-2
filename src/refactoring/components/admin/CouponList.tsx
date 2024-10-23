import { memo } from 'react';
import { Coupon } from '../../../types.ts';

// 쿠폰 목록
export const CouponList: React.FC<{
  coupons: Coupon[];
}> = memo(({ coupons }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">현재 쿠폰 목록</h3>
      <div className="space-y-2">
        {coupons.map((coupon, index) => (
          <CouponDetail key={coupon.code} coupon={coupon} index={index} />
        ))}
      </div>
    </div>
  );
});

// 쿠폰상세
const CouponDetail: React.FC<{
  coupon: Coupon;
  index: number;
}> = ({ coupon, index }) => {
  const { name, code, discountValue, discountType } = coupon;
  return (
    <div
      data-testid={`coupon-${index + 1}`}
      className="bg-gray-100 p-2 rounded"
    >
      {name} ({code}):
      {discountValue}
      {discountType === 'amount' ? `원` : `%`} 할인
    </div>
  );
};