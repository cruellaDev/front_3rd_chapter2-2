import { memo } from 'react';
import { CouponComboBox } from './CouponComboBox';
import { SelectedCouponView } from './SelectedCouponView';
import { useCartContext, useCouponContext } from '../../../hooks';

// 쿠폰 적용
export const ApplyCoupon: React.FC<{
}> = memo(() => {
  const { coupons } = useCouponContext();
  const { onCouponApply, selectedCoupon } = useCartContext();
  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <CouponComboBox coupons={coupons} onCouponApply={onCouponApply} />
      <SelectedCouponView selectedCoupon={selectedCoupon} />
    </div>
  );
});
