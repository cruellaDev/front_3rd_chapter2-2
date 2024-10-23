import { Discount, Product } from "../../../types";
import { addDiscount, removeDiscount } from "./discountUtils";

/**
 * 상품에 할인율을 추가합니다.
 * @param {Product} product 상품
 * @param {Discount} newDiscount 신규 할인율
 * @returns {Product} 변경된 상품
 */
export const addDiscountToProduct = (product : Product, newDiscount: Discount) : Product => ({ ...product, discounts: addDiscount(product.discounts, newDiscount) });

/**
 * 상품에 특정 할인율을 제거합니다.
 * @param {Product} product 상품 
 * @param {number} discountIndex 제거할 할인율의 인덱스
 * @returns {Product} 변경된 상품
 */
export const removeDiscountFromProduct =  (product : Product, discountIndex: number) : Product => ({ ...product, discounts: removeDiscount(product.discounts, discountIndex) });

/**
 * 상품에 상품ID를 부여합니다.
 * @param {Omit<Product, 'id'>} product 아이디가 없는 상품
 * @returns {Product} 상품ID가 추가된 상품
 */
export const getProductWithId = (product: Omit<Product, 'id'>) : Product => ({ ...product, id: Date.now().toString() });