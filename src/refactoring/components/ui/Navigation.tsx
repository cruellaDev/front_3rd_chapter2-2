import { Button } from './Button';

// 내비게이션
export const Navigation: React.FC<{
  isAdmin: boolean;
  onPageRedirectTo: () => void;
}> = ({ isAdmin, onPageRedirectTo }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">쇼핑몰 관리 시스템</h1>
        <Button
          title={`${isAdmin ? '장바구니' : '관리자'} 페이지로`}
          variant={'white'}
          className={'px-4 py-2'}
          onClick={onPageRedirectTo}
        />
      </div>
    </nav>
  );
};
