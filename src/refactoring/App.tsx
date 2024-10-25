import { useState } from 'react';
import { CartPage, AdminPage } from './pages';
import { initialProducts, initialCoupons } from './data';
import { Navigation } from './components/ui';
import { CartProvider, CouponProvider, ProductProvider } from './providers';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // 사용자 정의 함수 - 페이지 이동
  const redirectPageToAdminOrCart = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation
        isAdmin={isAdmin}
        onPageRedirectTo={redirectPageToAdminOrCart}
      />
      <main className="container mx-auto mt-6">
        <ProductProvider initialProducts={initialProducts}>
          <CouponProvider initialCoupons={initialCoupons}>
            {isAdmin ? (
              <AdminPage />
            ) : (
              <CartProvider>
                <CartPage />
              </CartProvider>
            )}
          </CouponProvider>
        </ProductProvider>
      </main>
    </div>
  );
};

export default App;
