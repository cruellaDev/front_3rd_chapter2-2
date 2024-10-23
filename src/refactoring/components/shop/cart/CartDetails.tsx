import { CartItem, Coupon } from '../../../../types.ts';
import { CartItemList } from './CartItemList';
import { CouponRedemption } from './CouponRedemption';
import { OrderSummary } from './OrderSummary';

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
  coupons,
  calculateTotal,
  updateQuantity,
  removeFromCart,
  applyCoupon,
  selectedCoupon,
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
