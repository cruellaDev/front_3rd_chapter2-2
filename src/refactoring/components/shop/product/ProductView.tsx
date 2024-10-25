import { Product } from '../../../../types.ts';
import { useCartContext } from '../../../hooks';
import { getMaxDiscount } from '../../../utils/discountUtils.ts';
import { Button } from '../../ui';

// 상품
export const ProductView: React.FC<{
  product: Product;
}> = ({ product }) => {
  const { onCartItemAdd, getRemainingStock } = useCartContext();
  const { id, name, price, discounts } = product;
  const remainingStock = getRemainingStock(product);
  const hasStock = remainingStock > 0;
  const hasDiscount = !!discounts;

  const handleCartItemAdd = () => {
    onCartItemAdd(product);
  };

  return (
    <div data-testid={`product-${id}`} className="bg-white p-3 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-600">{price.toLocaleString()}원</span>
      </div>
      <div className="text-sm text-gray-500 mb-2">
        <span
          className={`font-medium ${
            hasStock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          재고: {remainingStock}개
        </span>
        {hasDiscount && (
          <span className="ml-2 font-medium text-blue-600">
            최대 {(getMaxDiscount(discounts) * 100).toFixed(0)}% 할인
          </span>
        )}
      </div>
      {hasDiscount && (
        <ul className="list-disc list-inside text-sm text-gray-500 mb-2">
          {discounts.map(({ quantity, rate }, index) => (
            <li key={index}>
              {quantity}개 이상: {(rate * 100).toFixed(0)}% 할인
            </li>
          ))}
        </ul>
      )}
      <Button
        title={hasStock ? '장바구니에 추가' : '품절'}
        variant={hasStock ? 'primary' : 'empty'}
        className={`${hasStock ? '' : 'bg-gray-300 text-gray-500'} w-full px-3 py-1`}
        disabled={!hasStock}
        onClick={handleCartItemAdd}
      />
    </div>
  );
};
