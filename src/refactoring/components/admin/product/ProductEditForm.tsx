import { useState } from 'react';
import { Product, Discount } from '../../../../types.ts';
import {
  addDiscountToProduct as addDiscount,
  removeDiscountFromProduct as removeDiscount,
} from '../../../utils/productUtils.ts';
import { DiscountInfo } from './discount/DiscountInfo';

// 상품 수정 폼
export const ProductEditForm: React.FC<{
  product: Product;
  onProductUpdate: (updatedProduct: Product) => void;
  completeProductEdit: (updatedProduct: Product) => void;
}> = ({ product, onProductUpdate, completeProductEdit }) => {
  const [editingProduct, setEditingProduct] = useState<Product>({ ...product });

  // 새로운 핸들러 함수 추가
  const handleProductNameUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      name: event.target.value,
    }));
  };

  // 새로운 핸들러 함수 추가
  const handlePriceUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      price: parseInt(event.target.value),
    }));
  };

  // 새로운 핸들러 함수 추가
  const handleStockUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      stock: parseInt(event.target.value),
    }));
  };

  // 수정 완료 핸들러 함수 추가
  const handleEditComplete = () => {
    completeProductEdit(editingProduct);
  };

  const addDiscountToProduct= (newDiscount: Discount) => {
    onProductUpdate(addDiscount(product, newDiscount));
    setEditingProduct(addDiscount(editingProduct, newDiscount));
  };

  const removeDiscountFromProduct = (discountIndex: number) => {
    onProductUpdate(removeDiscount(product, discountIndex));
    setEditingProduct(removeDiscount(editingProduct, discountIndex));
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
      <DiscountInfo
        discounts={product.discounts}
        addDiscountToProduct={addDiscountToProduct}
        removeDiscountFromProduct={removeDiscountFromProduct}
      />
      <button
        onClick={handleEditComplete}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
      >
        수정 완료
      </button>
    </div>
  );
};
