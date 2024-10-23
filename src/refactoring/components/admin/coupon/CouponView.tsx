import { Coupon } from '../../../../types.ts';

// 쿠폰
export const CouponView: React.FC<{
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