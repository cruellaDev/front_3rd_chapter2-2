import { createContext, useMemo } from 'react';
import { Coupon } from '../../types';
import { useCoupons } from '../hooks';

interface CouponProviderProps {
  initialCoupons: Coupon[];
  children: React.ReactNode;
}

export interface CouponContextType {
  coupons: Coupon[];
  onCouponAdd: (coupon: Coupon) => void;
}

export const CouponContext = createContext<CouponContextType | undefined>(
  undefined
);

export const CouponProvider = ({
  initialCoupons,
  children,
}: CouponProviderProps) => {
  const { coupons, addCoupon } = useCoupons(initialCoupons);

  const value = useMemo(
    () => ({ coupons, onCouponAdd: addCoupon }),
    [coupons, addCoupon]
  );

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};
