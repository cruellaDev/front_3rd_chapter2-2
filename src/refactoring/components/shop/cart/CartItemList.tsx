import { memo } from 'react';
import { CartItemView } from './CartItemView';
import { useCartContext } from '../../../hooks';

// 장바구니 아이템 목록
export const CartItemList: React.FC<{}> = memo(() => {
  const { cart } = useCartContext();

  return (
    <div className="space-y-2">
      {cart.map((cartItem) => (
        <CartItemView key={cartItem.product.id} cartItem={cartItem} />
      ))}
    </div>
  );
});
