import { useContext } from "react";
import { ProductContext } from "../providers";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProductContext must be used within a ProductContext');
  return context;
}