import { PSWishlistContextValue } from './PSWishlistContext';
import { WishlistItem } from '../psWishlistStorage';

export const selectWishlist = (context: PSWishlistContextValue): WishlistItem[] => context.wishlist;

export const selectWishlistItem = (sku?: string) => (
  context: PSWishlistContextValue,
): WishlistItem | undefined => {
  if (!sku) {
    return undefined;
  }

  return context.wishlist.find((item) => item.sku === sku);
};
