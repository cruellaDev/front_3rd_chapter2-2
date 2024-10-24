import { useState } from 'react';
import { Product, Discount } from '../../../../types.ts';
import {
  addDiscountToProduct,
  removeDiscountFromProduct,
} from '../../../utils/productUtils.ts';
import { DiscountManagement } from './discount/DiscountManagement';
import { Button, NumberInput, TextInput } from '../../ui';

// 상품 수정 폼
export const ProductEditForm: React.FC<{
  product: Product;
  onProductUpdate: (updatedProduct: Product) => void;
  onProductEditComplete: (updatedProduct: Product) => void;
}> = ({ product, onProductUpdate, onProductEditComplete }) => {
  const [editingProduct, setEditingProduct] = useState<Product>({ ...product });

  // 이벤트 핸들러 - 상품명 변경
  const handleProductNameUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      name: event.target.value,
    }));
  };

  // 이벤트 핸들러 - 상품 가격 변경
  const handleProductPriceUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      price: Math.max(parseInt(event.target.value), 0),
    }));
  };

  // 이벤트 핸들러 - 상품 재고 변경
  const handleProductStockUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      stock: Math.max(parseInt(event.target.value), 0),
    }));
  };

  // 이벤트 핸들러 - 상품 수정 완료
  const handleProductEditComplete = () => {
    if (!editingProduct.name || !editingProduct.stock)
      return alert('상품명과 재고는 필수 입력 항목입니다.');
    onProductEditComplete(editingProduct);
  };

  // 사용자 함수 - 할인 추가
  const addDiscount = (newDiscount: Discount) => {
    onProductUpdate(addDiscountToProduct(product, newDiscount));
    setEditingProduct(addDiscountToProduct(editingProduct, newDiscount));
  };

  // 사용자 함수 - 할인 제거
  const removeDiscount = (discountIndex: number) => {
    onProductUpdate(removeDiscountFromProduct(product, discountIndex));
    setEditingProduct(removeDiscountFromProduct(editingProduct, discountIndex));
  };

  return (
    <div>
      <div className="mb-4">
        <TextInput
          label={'상품명'}
          labelClassName={'block mb-1'}
          value={editingProduct.name}
          onChange={handleProductNameUpdate}
          className={'w-full p-2 border rounded'}
        />
      </div>
      <div className="mb-4">
        <NumberInput
          label={'가격'}
          labelClassName={'block mb-1'}
          value={editingProduct.price}
          onChange={handleProductPriceUpdate}
          className={'w-full p-2 border rounded'}
          min={0}
        />
      </div>
      <div className="mb-4">
        <NumberInput
          label={'재고'}
          labelClassName={'block mb-1'}
          value={editingProduct.stock}
          onChange={handleProductStockUpdate}
          className={'w-full p-2 border rounded'}
          min={0}
        />
      </div>
      {/* 할인 정보 수정 부분 */}
      <DiscountManagement
        discounts={product.discounts}
        onDiscountAdd={addDiscount}
        onDiscountRemove={removeDiscount}
      />
      <Button
        title={'수정 완료'}
        variant={'success'}
        className={'px-2 py-1 mt-2'}
        onClick={handleProductEditComplete}
      />
    </div>
  );
};
