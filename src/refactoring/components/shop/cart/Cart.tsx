import { CartItem, Coupon } from '../../../../types.ts';
import { CartItemList } from './CartItemList.tsx';
import { CouponRedemption } from './CouponRedemption.tsx';
import { OrderSummary } from './OrderSummary.tsx';

// 장바구니 내역
export const Cart: React.FC<{
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
      <CouponRedemption
        coupons={coupons}
        onCouponApply={onCouponApply}
        selectedCoupon={selectedCoupon}
      />
      {/* 주문 요약 */}
      <OrderSummary calculateTotal={calculateTotal} />
    </div>
  );
};
