import { useState } from 'react';
import { CartPage, AdminPage } from './pages';
import { useCoupons, useProducts } from "./hooks";
import { initialProducts, initialCoupons } from './data';
import { Navigation } from './components/ui';

const App = () => {
  const { products, updateProduct, addProduct } = useProducts(initialProducts);
  const { coupons, addCoupon } = useCoupons(initialCoupons);
  const [isAdmin, setIsAdmin] = useState(false);

  // 사용자 정의 함수 - 페이지 이동
  const redirectPageToAdminOrCart = () => {
    setIsAdmin(!isAdmin)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation isAdmin={isAdmin} onPageRedirectTo={redirectPageToAdminOrCart} />
      <main className="container mx-auto mt-6">
        {isAdmin ? (
          <AdminPage
            products={products}
            coupons={coupons}
            onProductUpdate={updateProduct}
            onProductAdd={addProduct}
            onCouponAdd={addCoupon}
          />
        ) : (
          <CartPage products={products} coupons={coupons}/>
        )}
      </main>
    </div>
  );
};

export default App;
