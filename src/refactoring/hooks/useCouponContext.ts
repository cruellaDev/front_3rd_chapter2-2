import { useContext } from "react";
import { CouponContext } from "../providers";

export const useCouponContext = () => {
  const context = useContext(CouponContext);
  if (!context) throw new Error('useCartContext must be used within a CartContext');
  return context;
}