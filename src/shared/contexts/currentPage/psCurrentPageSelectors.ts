import { PSCurrentPageContextValue } from './PSCurrentPageContext';

export const selectCurrentPageUrl = (v: PSCurrentPageContextValue): string => v.currentUrl;
export const selectIsProductPage = (v: PSCurrentPageContextValue): boolean => v.isProductPage;
