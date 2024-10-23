import { memo } from 'react';
import { Product } from '../../../../types.ts';
import { ProductView } from './ProductView';

// 상품 목록
export const ProductList: React.FC<{
  products: Product[];
  onCartItemAdd: (product: Product) => void;
  getRemainingStock: (product: Product) => number;
}> = memo(({ products, onCartItemAdd, getRemainingStock }) => {

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductView
            key={product.id}
            product={product}
            onCartItemAdd={onCartItemAdd}
            getRemainingStock={getRemainingStock}
          />
        ))}
      </div>
    </div>
  );
});
