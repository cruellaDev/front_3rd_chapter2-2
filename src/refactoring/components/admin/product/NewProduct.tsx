import { useCallback, useState } from 'react';
import { Product } from '../../../../types.ts';
import { AddNewProductForm } from './AddNewProductForm';

// 신규 상품 추가
export const NewProduct: React.FC<{
  onProductAdd: (newProduct: Product) => void;
}> = ({ onProductAdd }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleAddNewProductForm = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  return (
    <>
      <button
        onClick={toggleAddNewProductForm}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {isEditing ? '취소' : '새 상품 추가'}
      </button>
      {isEditing && (
        <AddNewProductForm
          onProductAdd={onProductAdd}
          toggleAddNewProductForm={toggleAddNewProductForm}
        />
      )}
    </>
  );
};