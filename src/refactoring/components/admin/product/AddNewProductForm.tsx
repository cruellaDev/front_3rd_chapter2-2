import { memo, useState } from 'react';
import { Product } from '../../../../types.ts';
import { getProductWithId } from '../../../utils/productUtils.ts';
import { Button } from '../../ui';

const initialProduct: Omit<Product, 'id'> = {
  name: '',
  price: 0,
  stock: 0,
  discounts: [],
};

// 새 상품 추가 폼
export const AddNewProductForm: React.FC<{
  onProductAdd: (newProduct: Product) => void;
  onFormToggle: () => void;
}> = memo(({ onProductAdd, onFormToggle }) => {
  const [newProduct, setNewProduct] =
    useState<Omit<Product, 'id'>>(initialProduct);

  // 이벤트 핸들러 - 상품 추가
  const handleProductAdd = () => {
    const productWithId = getProductWithId(newProduct);
    onProductAdd(productWithId);
    setNewProduct({ ...initialProduct });
    onFormToggle();
  };

  // 이벤트 핸들러 - 상품명 변경
  const handleProductNameUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      name: event.target.value,
    }));
  };

  // 이벤트 핸들러 - 상품 가격 변경
  const handleProductPriceUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      price: parseInt(event.target.value),
    }));
  };

  // 이벤트 핸들러 - 상품 재고 변경
  const handleProductStockUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      stock: parseInt(event.target.value),
    }));
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
      <div className="mb-2">
        <label
          htmlFor="productName"
          className="block text-sm font-medium text-gray-700"
        >
          상품명
        </label>
        <input
          id="productName"
          type="text"
          value={newProduct.name}
          onChange={handleProductNameUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="productPrice"
          className="block text-sm font-medium text-gray-700"
        >
          가격
        </label>
        <input
          id="productPrice"
          type="number"
          value={newProduct.price}
          onChange={handleProductPriceUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="productStock"
          className="block text-sm font-medium text-gray-700"
        >
          재고
        </label>
        <input
          id="productStock"
          type="number"
          value={newProduct.stock}
          onChange={handleProductStockUpdate}
          className="w-full p-2 border rounded"
        />
      </div>
      <Button
        title={'추가'}
        variant={'primary'}
        className={'w-full p-2'}
        onClick={handleProductAdd}
      />
    </div>
  );
});
