import { useProductContext } from '../../../hooks';
import { NewProduct } from './NewProduct';
import { ProductList } from './ProductList';

// 상품 관리
export const ProductManagement: React.FC<{}> = () => {
  const { products } = useProductContext();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
      {/* 새 상품 */}
      <NewProduct />
      {/* 상품 목록 */}
      <ProductList products={products} />
    </div>
  );
};
