import { useState } from 'react';
import { Product } from '../../../../types.ts';
import { ProductAccordion } from './ProductAccordian';


// 상품 목록
export const ProductList: React.FC<{
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
}> = ({ products, onProductUpdate }) => {
  return (
    <div className="space-y-2">
      {products.map((product, index) => (
        <ProductDetail
          key={product.id}
          product={product}
          index={index}
          onProductUpdate={onProductUpdate}
        />
      ))}
    </div>
  );
};

const ProductDetail: React.FC<{
  product: Product;
  index: number;
  onProductUpdate: (updatedProduct: Product) => void;
}> = ({ product, index, onProductUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleProductAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-testid={`product-${index + 1}`}
      className="bg-white p-4 rounded shadow"
    >
      <button
        data-testid="toggle-button"
        onClick={handleToggleProductAccordion}
        className="w-full text-left font-semibold"
      >
        {product.name} - {product.price}원 (재고: {product.stock})
      </button>
      {isOpen && (
        <ProductAccordion product={product} onProductUpdate={onProductUpdate} />
      )}
    </div>
  );
};
