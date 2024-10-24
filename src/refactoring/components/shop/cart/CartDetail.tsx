import { CartItem, Coupon } from '../../../../types.ts';
import { CartItemList } from './CartItemList';
import { ApplyCoupon } from './ApplyCoupon';
import { OrderSummary } from './OrderSummary';

// 장바구니 내역
export const CartDetail: React.FC<{
  cart: CartItem[];
  coupons: Coupon[];
  onCartItemRemove: (productId: string) => void;
  onCartItemQuantityUpdate: (productId: string, newQuantity: number) => void;
  onCouponApply: (coupon: Coupon) => void;
  calculateTotal: () => {
    totalBeforeDiscount: number;
    totalAfterDiscount: number;
    totalDiscount: number;
  };
  selectedCoupon: Coupon | null;
}> = ({
  cart,
  coupons,
  calculateTotal,
  onCartItemQuantityUpdate,
  onCartItemRemove,
  onCouponApply,
  selectedCoupon,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
      {/* 장바구니 아이템 목록 */}
      <CartItemList
        cart={cart}
        onCartItemQuantityUpdate={onCartItemQuantityUpdate}
        onCartItemRemove={onCartItemRemove}
      />
      {/* 쿠폰 적용 */}
      <ApplyCoupon
        coupons={coupons}
        onCouponApply={onCouponApply}
        selectedCoupon={selectedCoupon}
      />
      {/* 주문 요약 */}
      <OrderSummary calculateTotal={calculateTotal} />
    </div>
  );
};
