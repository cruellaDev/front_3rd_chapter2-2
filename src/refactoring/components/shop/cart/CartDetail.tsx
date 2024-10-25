import { CartItemList } from './CartItemList';
import { ApplyCoupon } from './ApplyCoupon';
import { OrderSummary } from './OrderSummary';

// 장바구니 내역
export const CartDetail: React.FC<{}> = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
      {/* 장바구니 아이템 목록 */}
      <CartItemList />
      {/* 쿠폰 적용 */}
      <ApplyCoupon />
      {/* 주문 요약 */}
      <OrderSummary />
    </div>
  );
};
