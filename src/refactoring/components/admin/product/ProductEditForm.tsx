import { useState } from 'react';
import { Product, Discount } from '../../../../types.ts';
import {
  addDiscountToProduct,
  removeDiscountFromProduct,
} from '../../../utils/productUtils.ts';
import { DiscountManagement } from './discount/DiscountManagement';

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
  const handlePriceUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      price: parseInt(event.target.value),
    }));
  };

  // 이벤트 핸들러 - 상품 재고 변경
  const handleStockUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      stock: parseInt(event.target.value),
    }));
  };

  // 이벤트 핸들러 - 상품 수정 완료
  const handleProductEditComplete = () => {
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
        <label className="block mb-1">상품명: </label>
        <input
          type="text"
          value={editingProduct.name}
          onChange={handleProductNameUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">가격: </label>
        <input
          type="number"
          value={editingProduct.price}
          onChange={handlePriceUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">재고: </label>
        <input
          type="number"
          value={editingProduct.stock}
          onChange={handleStockUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      {/* 할인 정보 수정 부분 */}
      <DiscountManagement
        discounts={product.discounts}
        onDiscountAdd={addDiscount}
        onDiscountRemove={removeDiscount}
      />
      <button
        onClick={handleProductEditComplete}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
      >
        수정 완료
      </button>
    </div>
  );
};
