import { memo } from 'react';
import { Product, CartItem } from '../../../../types.ts';
import {
  getCartItemByProductId,
  getRemainingStock,
} from '../../../utils/cartUtils.ts';
import { getMaxDiscount } from '../../../utils/discountUtils.ts';

// 상품 목록
export const ProductList: React.FC<{
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
}> = memo(({ products, cart, addToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductDetail
            key={product.id}
            product={product}
            cartItem={getCartItemByProductId(cart, product.id)}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
});

// 상품 상세
const ProductDetail: React.FC<{
  product: Product;
  cartItem: CartItem | undefined;
  addToCart: (product: Product) => void;
}> = ({ product, cartItem, addToCart }) => {
  const { id, name, price, discounts } = product;
  const remainingStock = getRemainingStock(product, cartItem);
  const hasStock = remainingStock > 0;
  const hasDiscount = !!discounts;

  const handleAddCartItem = () => {
    addToCart(product);
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
