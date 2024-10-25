import { memo } from 'react';
import { Product } from '../../../../types.ts';
import { ProductView } from './ProductView';

// 상품 목록
export const ProductList: React.FC<{
  products: Product[];
}> = memo(({ products }) => {

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductView
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
});
