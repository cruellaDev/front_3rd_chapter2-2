import { memo } from 'react';
import { CartItem } from '../../../../types.ts';
import { CartItemView } from './CartItemView';

// 장바구니 아이템 목록
export const CartItemList: React.FC<{
  cart: CartItem[];
  onCartItemQuantityUpdate: (productId: string, newQuantity: number) => void;
  onCartItemRemove: (productId: string) => void;
}> = memo(({ cart, onCartItemQuantityUpdate, onCartItemRemove }) => {
  return (
    <div className="space-y-2">
      {cart.map((cartItem) => (
        <CartItemView
          key={cartItem.product.id}
          cartItem={cartItem}
          onCartItemQuantityUpdate={onCartItemQuantityUpdate}
          onCartItemRemove={onCartItemRemove}
        />
      ))}
    </div>
  );
});