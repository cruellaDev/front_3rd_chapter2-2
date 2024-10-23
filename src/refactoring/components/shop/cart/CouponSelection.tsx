import { Coupon } from '../../../../types.ts';

// 쿠폰 선택
export const CouponSelection: React.FC<{
  coupons: Coupon[];
  onCouponApply: (coupon: Coupon) => void;
}> = ({ coupons, onCouponApply }) => {
  
  // 이벤트 핸들러 - 쿠폰 선택
  const handleCouponSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    onCouponApply(coupons[parseInt(event.target.value)]);
  };

  return (
    <select
      onChange={handleCouponSelect}
      className="w-full p-2 border rounded mb-2"
    >
      <option value="">쿠폰 선택</option>
      {coupons.map(({ code, name, discountType, discountValue }, index) => (
        <option key={code} value={index}>
          {name} - {discountValue}
          {discountType === 'amount' ? `원` : `%`}
        </option>
      ))}
    </select>
  );
};
