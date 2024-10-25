import { getMaxDiscountByQuantity } from '../../../utils/discountUtils.ts';
import { CartItem } from '../../../../types.ts';
import { Button } from '../../ui';
import { useCartContext } from '../../../hooks';

// 장바구니 아이템
export const CartItemView: React.FC<{
  cartItem: CartItem;
}> = ({ cartItem }) => {
  const { onCartItemQuantityUpdate, onCartItemRemove } = useCartContext();
  
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
        <Button
          title={'-'}
          variant={'gray'}
          className={'px-2 py-1 mr-1'}
          onClick={handleCartItemQuantityDecrease}
        />
        <Button
          title={'+'}
          variant={'gray'}
          className={'px-2 py-1 mr-1'}
          onClick={handleCartItemQuantityIncrease}
        />
        <Button
          title={'삭제'}
          variant={'danger'}
          className={'px-2 py-1'}
          onClick={handleCartItemRemove}
        />
      </div>
    </div>
  );
};
