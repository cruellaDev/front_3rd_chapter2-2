import { memo } from 'react';
import { Product } from '../../../../types.ts';
import { ProductDetail } from './ProductDetail';

// 상품 목록
export const ProductList: React.FC<{
  products: Product[];
  addToCart: (product: Product) => void;
  getRemainingStock: (product: Product) => number;
}> = memo(({ products, addToCart, getRemainingStock }) => {

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductDetail
            key={product.id}
            product={product}
            addToCart={addToCart}
            getRemainingStock={getRemainingStock}
          />
        ))}
      </div>
    </div>
  );
});
