import { useCallback, useState } from 'react';
import { Product } from '../../../../types.ts';
import { AddNewProductForm } from './AddNewProductForm';

// 새 상품
export const NewProduct: React.FC<{
  onProductAdd: (newProduct: Product) => void;
}> = ({ onProductAdd }) => {
  const [isEditing, setIsEditing] = useState(false);

  // 이벤트 핸들러 - 새 상품 추가 폼 토글
  const handleFormToggle = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  return (
    <>
      <button
        onClick={handleFormToggle}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {isEditing ? '취소' : '새 상품 추가'}
      </button>
      {isEditing && (
        <AddNewProductForm
          onProductAdd={onProductAdd}
          onFormToggle={handleFormToggle}
        />
      )}
    </>
  );
};