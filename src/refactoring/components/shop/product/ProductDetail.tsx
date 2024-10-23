import { Product } from '../../../../types.ts';
import { getMaxDiscount } from '../../../utils/discountUtils.ts';

// 상품 상세
export const ProductDetail: React.FC<{
  product: Product;
  addToCart: (product: Product) => void;
  getRemainingStock: (product: Product) => number;
}> = ({ product, addToCart, getRemainingStock }) => {

  const { id, name, price, discounts } = product;
  const remainingStock = getRemainingStock(product);
  const hasStock = remainingStock > 0;
  const hasDiscount = !!discounts;

  const handleAddCartItem = () => {
    addToCart(product)
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
      <button
        onClick={handleAddCartItem}
        className={`w-full px-3 py-1 rounded ${
          hasStock
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!hasStock}
      >
        {hasStock ? '장바구니에 추가' : '품절'}
      </button>
    </div>
  );
};