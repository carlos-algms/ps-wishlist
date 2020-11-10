import { createContext } from '@fluentui/react-context-selector';
import React, { FC, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';

import makeContextSelectorHook from '../../shared/contexts/makeContextSelector';
import useMergeableState from '../../shared/hooks/useMergeableState';
import {
  getWishlistFromStorage,
  WishlistItem,
  wishlistStorageOnChanges,
} from '../psWishlistStorage';

export type PSWishlistContextValue = {
  isLoading: boolean;
  wishlist: WishlistItem[];
};

const defaultValue: PSWishlistContextValue = {
  isLoading: true,
  wishlist: [],
};

/**
 * PlayStation Wishlist Context
 */
export const PSWishlistContext = createContext<PSWishlistContextValue>(defaultValue);

export const usePsWishlistSelectors = makeContextSelectorHook(PSWishlistContext);

export const PSWishlistContextProvider: FC = ({ children }) => {
  const [state, mergeState] = useMergeableState(defaultValue);

  useEffect(() => {
    return wishlistStorageOnChanges((changes) => {
      mergeState({ wishlist: changes.newValue });
    });
  }, [mergeState]);

  useAsyncEffect(async (checkIsMounted) => {
    const wishlistFromStorage = await getWishlistFromStorage();
    if (checkIsMounted()) {
      mergeState({
        wishlist: wishlistFromStorage,
        isLoading: false,
      });
    }
  }, []);

  return <PSWishlistContext.Provider value={state}>{children}</PSWishlistContext.Provider>;
};
