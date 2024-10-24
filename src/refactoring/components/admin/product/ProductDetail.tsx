import { useState } from 'react';
import { Product } from '../../../../types.ts';
import { ProductAccordion } from './ProductAccordian';

export const ProductDetail: React.FC<{
  product: Product;
  index: number;
  onProductUpdate: (updatedProduct: Product) => void;
}> = ({ product, index, onProductUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductEditFormEditing, setIsProductEditFormEditing] = useState(false);

  // 이벤트 핸들러 - 상품 아코디언 토글
  const handleProductAccordionToggle = () => {
    setIsOpen(!isOpen);
  };

  // 사용자 정의 함수 - 수정 폼 토글
  const toggleProductEditForm = () => {
    setIsProductEditFormEditing(!isProductEditFormEditing);
  };

  // 사용자 정의 함수 - 상품 수정 완료
  const completeProductEdit = (updatedProduct: Product) => {
    onProductUpdate(updatedProduct);
    setIsProductEditFormEditing(!isProductEditFormEditing);
  };

  return (
    <div
      data-testid={`product-${index + 1}`}
      className="bg-white p-4 rounded shadow"
    >
      <button
        data-testid="toggle-button"
        onClick={handleProductAccordionToggle}
        className="w-full text-left font-semibold"
      >
        {product.name} - {product.price}원 (재고: {product.stock})
      </button>
      {isOpen && (
        <ProductAccordion
          product={product}
          isEditing={isProductEditFormEditing}
          onProductUpdate={onProductUpdate}
          onProductEditFormToggle={toggleProductEditForm}
          onProductEditComplete={completeProductEdit}
        />
      )}
    </div>
  );
};
