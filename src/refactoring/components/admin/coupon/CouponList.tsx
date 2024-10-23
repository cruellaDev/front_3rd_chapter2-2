import { memo } from 'react';
import { Coupon } from '../../../../types.ts';
import { CouponView } from './CouponView';

// 쿠폰 목록
export const CouponList: React.FC<{
  coupons: Coupon[];
}> = memo(({ coupons }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">현재 쿠폰 목록</h3>
      <div className="space-y-2">
        {coupons.map((coupon, index) => (
          <CouponView key={coupon.code} coupon={coupon} index={index} />
        ))}
      </div>
    </div>
  );
});