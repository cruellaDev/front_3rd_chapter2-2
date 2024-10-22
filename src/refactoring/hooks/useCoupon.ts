import { Coupon } from '../../types.ts';
import { useState } from 'react';

/**
 * 쿠폰을 관리하는 사용자 정의 hook 입니다.
 * @param {Coupon[]} initialCoupons 쿠폰 목록 초깃값
 * @returns {object} 쿠폰 데이터와 쿠폰 데이터 관리를 위한 메소드를 제공합니다.
 */
export const useCoupons = (
  initialCoupons: Coupon[]
): {
  coupons: Coupon[];
  addCoupon: (coupon: Coupon) => void;
} => {
  /**
   * 쿠폰 관련 상태를 관리합니다.
   */
  // 1. 쿠폰 목록
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  /**
   * 쿠폰을 추가합니다.
   * @param {Coupon} coupon 쿠폰 추가 데이터
   * @returns {void}
   */
  const addCoupon = (coupon: Coupon): void => {
    setCoupons((prevCoupons) => prevCoupons.concat(coupon));
  };

  return { coupons, addCoupon };
};
