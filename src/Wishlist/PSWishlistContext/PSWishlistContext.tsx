import { createContext } from '@fluentui/react-context-selector';
import React, { FC } from 'react';

import makeContextSelectorHook from '../../shared/contexts/makeContextSelector';

import usePSWishlist, { UsePSWishListValue } from './usePSWishlist';

export type PSWishlistContextValue = UsePSWishListValue;

const defaultValue: PSWishlistContextValue = {
  isLoading: false,
  wishlist: [],
  includeProduct() {
    /* noop */
  },
  removeProduct() {
    /* noop */
  },
};

/**
 * PlayStation Wishlist Context
 */
export const PSWishlistContext = createContext<PSWishlistContextValue>(defaultValue);

export const usePsWishlistSelectors = makeContextSelectorHook(PSWishlistContext);

export const PSWishlistContextProvider: FC = ({ children }) => {
  const contextValue = usePSWishlist();

  if (contextValue.isLoading) {
    return null;
  }

  return <PSWishlistContext.Provider value={contextValue}>{children}</PSWishlistContext.Provider>;
};
