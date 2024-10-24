import { Product } from '../../../../types.ts';
import { Button } from '../../ui';
import { ProductEditForm } from './ProductEditForm';
import { DiscountDetailView } from './shared/DiscountDetailView';

// 상품 아코디언
export const ProductAccordion: React.FC<{
  product: Product;
  isEditing: boolean;
  onProductUpdate: (updatedProduct: Product) => void;
  onProductEditFormToggle: () => void;
  onProductEditComplete: (updatedProduct: Product) => void;
}> = ({
  product,
  isEditing,
  onProductUpdate,
  onProductEditFormToggle,
  onProductEditComplete,
}) => {
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
          <Button
            title={'수정'}
            variant={'primary'}
            className={'px-2 py-1 mt-2'}
            onClick={onProductEditFormToggle}
            data-testid={'modify-button'}
          />
        </div>
      )}
    </div>
  );
};
