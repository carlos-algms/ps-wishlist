import { createContext } from '@fluentui/react-context-selector';
import React, { FC } from 'react';
import getIsProductUrl from '../../shared/getIsProductUrl';
import useCurrentUrl from '../../shared/hooks/useCurrentUrl';
import makeContextSelector from '../makeContextSelector';

export type PSCurrentPageContextValue = {
  error?: Error | null;
  isProductPage: boolean;
  currentUrl: string;
};

const defaultValue: PSCurrentPageContextValue = {
  isProductPage: false,
  currentUrl: '',
};

/**
 * PlayStation Current page Context
 */
export const PSCurrentPageContext = createContext<PSCurrentPageContextValue>(defaultValue);

export const usePsCurrentPageSelectors = makeContextSelector(PSCurrentPageContext);

export const PSCurrentPageContextProvider: FC = ({ children }) => {
  const currentUrl = useCurrentUrl();

  if (!currentUrl) {
    return null;
  }

  const isProductPage = getIsProductUrl(currentUrl);

  const contextValue: PSCurrentPageContextValue = {
    currentUrl,
    isProductPage,
  };

  return (
    <PSCurrentPageContext.Provider value={contextValue}>{children}</PSCurrentPageContext.Provider>
  );
};
