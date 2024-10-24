import { Product } from '../../../../types.ts';
import { ProductDetail } from './ProductDetail';

// 상품 목록
export const ProductList: React.FC<{
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
}> = ({ products, onProductUpdate }) => {
  return (
    <div className="space-y-2">
      {products.map((product, index) => (
        <ProductDetail
          key={product.id}
          product={product}
          index={index}
          onProductUpdate={onProductUpdate}
        />
      ))}
    </div>
  );
};
