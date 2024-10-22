import { CartItem, Coupon } from '../../../types.ts';
import { CartItemList } from './CartItemList.tsx';
import { CouponRedemption } from './CouponRedemption.tsx';
import { OrderSummary } from './OrderSummary.tsx';

// 장바구니 내역
export const CartDetails: React.FC<{
  cart: CartItem[];
  coupons: Coupon[];
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  applyCoupon: (coupon: Coupon) => void;
  calculateTotal: () => {
    totalBeforeDiscount: number;
    totalAfterDiscount: number;
    totalDiscount: number;
  };
  selectedCoupon: Coupon | null;
}> = ({
  cart,
  calculateTotal,
  updateQuantity,
  removeFromCart,
  applyCoupon,
  selectedCoupon,
  coupons,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
      <CartItemList
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <CouponRedemption
        coupons={coupons}
        applyCoupon={applyCoupon}
        selectedCoupon={selectedCoupon}
      />
      <OrderSummary calculateTotal={calculateTotal} />
    </div>
  );
};
