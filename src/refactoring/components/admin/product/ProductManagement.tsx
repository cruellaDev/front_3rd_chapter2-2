import { Product } from '../../../../types.ts';
import { NewProduct } from './NewProduct';
import { ProductList } from './ProductList';

// 상품 관리
export const ProductManagement: React.FC<{
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
}> = ({ products, onProductUpdate, onProductAdd }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
      {/* 새 상품 */}
      <NewProduct onProductAdd={onProductAdd} />
      {/* 상품 목록 */}
      <ProductList products={products} onProductUpdate={onProductUpdate} />
    </div>
  );
};
