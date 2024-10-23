import { Product } from '../../../../types.ts';
import { ProductEditForm } from './ProductEditForm';
import { DiscountDetailView } from './shared/DiscountDetailView';

// 상품 아코디언
export const ProductAccordion: React.FC<{
  product: Product;
  isEditing: boolean;
  onProductUpdate: (updatedProduct: Product) => void;
  onProductEditFormToggle: () => void;
  onProductEditComplete: (updatedProduct: Product) => void;
}> = ({ product, isEditing, onProductUpdate, onProductEditFormToggle, onProductEditComplete }) => {

  return (
    <div className="mt-2">
      {isEditing ? (
        <ProductEditForm
          product={product}
          onProductUpdate={onProductUpdate}
          onProductEditComplete={onProductEditComplete}
        />
      ) : (
        <div>
          {product.discounts.map((discount, index) => (
            <div key={index} className="mb-2">
              <DiscountDetailView discount={discount} />
            </div>
          ))}
          <button
            data-testid="modify-button"
            onClick={onProductEditFormToggle}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
          >
            수정
          </button>
        </div>
      )}
    </div>
  );
};