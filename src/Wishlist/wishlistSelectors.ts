import { PSWishlistContextValue } from './PSWishlistContext';
import { WishlistItem } from './psWishlistStorage';

export const selectWishlist = (context: PSWishlistContextValue): WishlistItem[] => context.wishList;

export const selectWishlistItem = (sku: string) => (
  context: PSWishlistContextValue,
): WishlistItem | undefined => context.wishList.find((item) => item.sku === sku);
