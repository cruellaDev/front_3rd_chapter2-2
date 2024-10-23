import { getMaxDiscountByQuantity } from '../../../utils/discountUtils.ts';
import { CartItem } from '../../../../types.ts';

// 장바구니 아이템
export const CartItemView: React.FC<{
  cartItem: CartItem;
  onCartItemQuantityUpdate: (productId: string, newQuantity: number) => void;
  onCartItemRemove: (productId: string) => void;
}> = ({ cartItem, onCartItemQuantityUpdate, onCartItemRemove }) => {
  
  // cartItem destructured
  const { product, quantity } = cartItem;
  
  // 할인 적용
  const appliedDiscount = getMaxDiscountByQuantity(product.discounts, quantity);

  // 이벤트 핸들러 - 아이템 수량 감소
  const handleCartItemQuantityDecrease = () => {
    onCartItemQuantityUpdate(product.id, quantity - 1);
  };

  // 이벤트 핸들러 - 아이템 수량 증가
  const handleCartItemQuantityIncrease = () => {
    onCartItemQuantityUpdate(product.id, quantity + 1);
  };

  // 이벤트 핸들러 - 아이템 제거
  const handleCartItemRemove = () => {
    onCartItemRemove(product.id);
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
          onClick={handleCartItemQuantityDecrease}
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
        >
          -
        </button>
        <button
          onClick={handleCartItemQuantityIncrease}
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={handleCartItemRemove}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </div>
  );
};