import { Coupon, Product } from '../../../types.ts';
import { useCart } from '../../hooks/index.ts';
import { CartDetails, ProductList } from './index.ts';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
    getRemainingStock,
  } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductList
          products={products}
          addToCart={addToCart}
          getRemainingStock={getRemainingStock}
        />
        <CartDetails
          cart={cart}
          coupons={coupons}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          applyCoupon={applyCoupon}
          calculateTotal={calculateTotal}
          selectedCoupon={selectedCoupon}
        />
      </div>
    </div>
  );
};
