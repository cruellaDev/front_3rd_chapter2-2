import { memo } from 'react';
import { Coupon } from '../../../../types.ts';
import { CouponComboBox } from './CouponComboBox';
import { SelectedCouponView } from './SelectedCouponView';

// 쿠폰 적용
export const ApplyCoupon: React.FC<{
  coupons: Coupon[];
  onCouponApply: (coupon: Coupon) => void;
  selectedCoupon: Coupon | null;
}> = memo(({ coupons, onCouponApply, selectedCoupon }) => {

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <CouponComboBox coupons={coupons} onCouponApply={onCouponApply} />
      <SelectedCouponView selectedCoupon={selectedCoupon} />
    </div>
  );
});
