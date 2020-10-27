import { createContext } from '@fluentui/react-context-selector';
import React, { FC } from 'react';
import usePSWishlist, { UsePSWishListValue } from './usePSWishlist';

export type PSWishlistContextValue = UsePSWishListValue;

const defaultValue: PSWishlistContextValue = {
  isLoading: false,
  wishList: [],
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

export const PSWishlistContextProvider: FC = ({ children }) => {
  const contextValue = usePSWishlist();

  if (contextValue.isLoading) {
    return null;
  }

  return <PSWishlistContext.Provider value={contextValue}>{children}</PSWishlistContext.Provider>;
};
