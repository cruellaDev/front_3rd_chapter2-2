import { memo } from 'react';
import { Coupon } from '../../../../types.ts';
import { CouponSelection } from './CouponSelection.tsx';
import { SelectedCouponView } from './SelectedCouponView.tsx';

// 쿠폰 적용
export const CouponRedemption: React.FC<{
  coupons: Coupon[];
  onCouponApply: (coupon: Coupon) => void;
  selectedCoupon: Coupon | null;
}> = memo(({ coupons, onCouponApply, selectedCoupon }) => {

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <CouponSelection coupons={coupons} onCouponApply={onCouponApply} />
      <SelectedCouponView selectedCoupon={selectedCoupon} />
    </div>
  );
});
