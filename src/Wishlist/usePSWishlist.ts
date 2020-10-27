import { useCallback, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { ProductSchema } from '../Product/ProductTypes';
import {
  getWishlistFromStorage,
  includeProductToWishListStorage,
  WishlistItem,
} from './psWishlistStorage';

export type UsePSWishListValue = {
  isLoading: boolean;
  wishList: WishlistItem[];
  includeProduct(product: ProductSchema): any;
  removeProduct(product: ProductSchema): any;
};

export default function usePSWishlist(): UsePSWishListValue {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [wishList, setWishlist] = useState<WishlistItem[]>([]);

  const includeProduct = useCallback(
    async (product: ProductSchema) => {
      const newList = await includeProductToWishListStorage(product);
      if (!isMounted) {
        setWishlist(newList);
      }
    },
    [isMounted],
  );

  const removeProduct = useCallback(
    async (product: ProductSchema) => {
      const newList = await includeProductToWishListStorage(product);
      if (!isMounted) {
        setWishlist(newList);
      }
    },
    [isMounted],
  );

  useAsyncEffect(
    async (checkIsMounted) => {
      const wishlistFromStorage = await getWishlistFromStorage();
      if (checkIsMounted()) {
        setWishlist(wishlistFromStorage);
        setIsLoading(false);
      }
    },
    () => setIsMounted(false),
    [],
  );

  return {
    isLoading,
    wishList,
    includeProduct,
    removeProduct,
  };
}
