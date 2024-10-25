import { useCouponContext } from '../../../hooks';
import { AddNewCouponForm } from './AddNewCouponForm';
import { CouponList } from './CouponList';

// 쿠폰 관리
export const CouponManagement: React.FC<{}> = () => {
  const { coupons } = useCouponContext();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        {/* 신규 쿠폰 추가 폼 */}
        <AddNewCouponForm />
        {/* 현재 쿠폰 목록 */}
        <CouponList coupons={coupons} />
      </div>
    </div>
  );
};
