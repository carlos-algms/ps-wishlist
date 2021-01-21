import { ProductSchema } from '../../../Product/ProductTypes';

import { PSCurrentPageContextValue } from './PSCurrentPageContext';

export const selectCurrentPageUrl = (v: PSCurrentPageContextValue): string => v.currentUrl;
export const selectIsProductPage = (v: PSCurrentPageContextValue): boolean => v.isProductPage;
export const selectProductSchema = (v: PSCurrentPageContextValue): ProductSchema | null =>
  v.productSchema;
