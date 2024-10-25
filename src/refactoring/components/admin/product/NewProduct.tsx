import { useCallback, useState } from 'react';
import { AddNewProductForm } from './AddNewProductForm';
import { Button } from '../../ui';

// 새 상품
export const NewProduct: React.FC<{}> = () => {
  const [isEditing, setIsEditing] = useState(false);

  // 이벤트 핸들러 - 새 상품 추가 폼 토글
  const handleFormToggle = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  return (
    <>
      <Button
        title={isEditing ? '취소' : '새 상품 추가'}
        variant={'success'}
        className={'px-4 py-2 mb-4'}
        onClick={handleFormToggle}
      />
      {isEditing && (
        <AddNewProductForm
          onFormToggle={handleFormToggle}
        />
      )}
    </>
  );
};
