import { Coupon } from '../../../types.ts';
import { AddNewCouponForm } from './AddNewCouponForm';
import { CouponList } from './CouponList';

// 쿠폰 관리
export const CouponManagement: React.FC<{
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
}> = ({ coupons, onCouponAdd }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        <AddNewCouponForm onCouponAdd={onCouponAdd} />
        <CouponList coupons={coupons} />
      </div>
    </div>
  );
};
