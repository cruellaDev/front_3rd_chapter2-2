import { memo } from 'react';
import { getMaxDiscountByQuantity } from '../../hooks/utils/discountUtils.ts';
import { CartItem } from '../../../types.ts';

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

// 장바구니 아이템 상세
const CartItemDetail: React.FC<{
  cartItem: CartItem;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}> = ({ cartItem, updateQuantity, removeFromCart }) => {
  const { product, quantity } = cartItem;
  const appliedDiscount = getMaxDiscountByQuantity(product.discounts, quantity);

  const handleDecreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleRemoveCartItem = () => {
    removeFromCart(product.id);
  };
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
      <div>
        <span className="font-semibold">{product.name}</span>
        <br />
        <span className="text-sm text-gray-600">
          {product.price}원 x {quantity}
          {appliedDiscount > 0 && (
            <span className="text-green-600 ml-1">
              ({(appliedDiscount * 100).toFixed(0)}% 할인 적용)
            </span>
          )}
        </span>
      </div>
      <div>
        <button
          onClick={handleDecreaseQuantity}
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
        >
          -
        </button>
        <button
          onClick={handleIncreaseQuantity}
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={handleRemoveCartItem}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </div>
  );
};