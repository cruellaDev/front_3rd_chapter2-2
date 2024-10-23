import { Coupon } from '../../../../types.ts';

// 선택된 쿠폰
export const SelectedCouponView: React.FC<{
  selectedCoupon: Coupon | null;
}> = ({ selectedCoupon }) => {
  return(
    <>
      {selectedCoupon && (
        <p className="text-green-600">
          적용된 쿠폰: {selectedCoupon.name}({selectedCoupon.discountValue}
          {selectedCoupon.discountType === 'amount' ? `원` : `%`} 할인)
        </p>
      )}
    </>
  );
};