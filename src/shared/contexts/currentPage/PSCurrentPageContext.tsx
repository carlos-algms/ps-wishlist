import { createContext } from '@fluentui/react-context-selector';
import React, { FC } from 'react';

import getIsProductUrl from '../../../Product/getIsProductUrl';
import { ProductSchema } from '../../../Product/ProductTypes';
import useProductSchema from '../../../Product/useProductSchema';
import useCurrentUrl from '../../hooks/useCurrentUrl';
import makeContextSelectorHook from '../makeContextSelector';

export type PSCurrentPageContextValue = {
  error?: Error | null;
  isProductPage: boolean;
  currentUrl: string;
  productSchema: ProductSchema | null;
};

const defaultValue: PSCurrentPageContextValue = {
  isProductPage: false,
  currentUrl: '',
  productSchema: null,
};

/**
 * PlayStation Current page Context
 */
export const PSCurrentPageContext = createContext<PSCurrentPageContextValue>(defaultValue);

export const usePsCurrentPageSelectors = makeContextSelectorHook(PSCurrentPageContext);

export const PSCurrentPageContextProvider: FC = ({ children }) => {
  const currentUrl = useCurrentUrl();
  const isProductPage = getIsProductUrl(currentUrl);
  const productSchema = useProductSchema(isProductPage);

  if (!currentUrl) {
    return null;
  }

  const contextValue: PSCurrentPageContextValue = {
    currentUrl,
    isProductPage,
    productSchema,
  };

  return (
    <PSCurrentPageContext.Provider value={contextValue}>{children}</PSCurrentPageContext.Provider>
  );
};
