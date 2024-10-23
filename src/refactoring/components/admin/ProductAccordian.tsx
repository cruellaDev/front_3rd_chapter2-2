import { useState } from 'react';
import { Product } from '../../../types.ts';
import { ProductEditForm } from './ProductEditForm';
import { DiscountDisplay } from './DiscountDisplay';

// 상품 아코디언
export const ProductAccordion: React.FC<{
  product: Product;
  onProductUpdate: (updatedProduct: Product) => void;
}> = ({ product, onProductUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  // handleShowProductEditForm 함수 수정
  const handleShowProductEditForm = () => {
    setIsEditing(!isEditing);
  };

  // 수정 완료 함수 추가
  const completeProductEdit = (updatedProduct: Product) => {
    onProductUpdate(updatedProduct);
    setIsEditing(!isEditing);
  };

  return (
    <div className="mt-2">
      {isEditing ? (
        <ProductEditForm
          product={product}
          onProductUpdate={onProductUpdate}
          completeProductEdit={completeProductEdit}
        />
      ) : (
        <div>
          {product.discounts.map((discount, index) => (
            <div key={index} className="mb-2">
              <DiscountDisplay discount={discount} />
            </div>
          ))}
          <button
            data-testid="modify-button"
            onClick={handleShowProductEditForm}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
          >
            수정
          </button>
        </div>
      )}
    </div>
  );
};