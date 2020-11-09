import { useCallback } from 'react';
import useAsyncEffect from 'use-async-effect';

import { ProductSchema } from '../../Product/ProductTypes';
import useMergeableState from '../../shared/hooks/useMergeableState';
import {
  getWishlistFromStorage,
  includeProductToWishListStorage,
  WishlistItem,
} from '../psWishlistStorage';

export type UsePSWishListValue = {
  isLoading: boolean;
  wishlist: WishlistItem[];
  includeProduct: (product: ProductSchema) => any;
  removeProduct: (product: ProductSchema) => any;
};

type State = {
  isLoading: boolean;
  wishlist: WishlistItem[];
};

const defaultState = {
  isLoading: true,
  wishlist: [],
};

export default function usePSWishlist(): UsePSWishListValue {
  const [{ isLoading, wishlist }, mergeState] = useMergeableState<State>(defaultState);

  const includeProduct = useCallback(
    async (product: ProductSchema) => {
      const newList = await includeProductToWishListStorage(product);
      mergeState({ wishlist: newList });
    },
    [mergeState],
  );

  const removeProduct = useCallback(
    async (product: ProductSchema) => {
      const newList = await includeProductToWishListStorage(product);
      mergeState({ wishlist: newList });
    },
    [mergeState],
  );

  useAsyncEffect(async (checkIsMounted) => {
    const wishlistFromStorage = await getWishlistFromStorage();
    if (checkIsMounted()) {
      mergeState({
        wishlist: wishlistFromStorage,
        isLoading: false,
      });
    }
  }, []);

  return {
    isLoading,
    wishlist,
    includeProduct,
    removeProduct,
  };
}
