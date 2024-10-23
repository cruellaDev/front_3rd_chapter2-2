import { memo } from 'react';
import { CartItem } from '../../../../types.ts';
import { CartItemDetail } from './CartItemDetail.tsx';

// 장바구니 아이템 목록
export const CartItemList: React.FC<{
  cart: CartItem[];
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}> = memo(({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="space-y-2">
      {cart.map((cartItem) => (
        <CartItemDetail
          key={cartItem.product.id}
          cartItem={cartItem}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
});