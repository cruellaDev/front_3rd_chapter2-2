import { useState } from 'react';
import { Product } from '../../../types.ts';
import { getProductWithId } from '../../hooks/utils/productUtils.ts';

const initialProduct: Omit<Product, 'id'> = {
  name: '',
  price: 0,
  stock: 0,
  discounts: [],
};

// 신규 상품 추가 폼
export const AddNewProductForm: React.FC<{
  onProductAdd: (newProduct: Product) => void;
  toggleAddNewProductForm: () => void;
}> = ({ onProductAdd, toggleAddNewProductForm }) => {
  const [newProduct, setNewProduct] =
    useState<Omit<Product, 'id'>>(initialProduct);

  const handleAddNewProduct = () => {
    const productWithId = getProductWithId(newProduct);
    onProductAdd(productWithId);
    setNewProduct({ ...initialProduct });
    toggleAddNewProductForm();
  };

  const handleEditProductName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      name: event.target.value,
    }));
  };

  const handleEditProductPrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      price: parseInt(event.target.value),
    }));
  };

  const handleEditProductStock = (
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
          onChange={handleEditProductName}
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
          onChange={handleEditProductPrice}
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
          onChange={handleEditProductStock}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleAddNewProduct}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        추가
      </button>
    </div>
  );
};
