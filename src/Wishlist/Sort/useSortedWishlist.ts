import { useEffect, useState } from 'react';

import { WishlistItem } from '../psWishlistStorage';

import { SortBy, sortWishlistBy } from './Sort';

export default function useSortedWishlist(
  wishlist: WishlistItem[],
  sortBy: SortBy | null,
): WishlistItem[] {
  const [sortedWishlist, setSortedWishlist] = useState(wishlist);

  useEffect(() => {
    if (wishlist.length && sortBy !== null) {
      setSortedWishlist(sortWishlistBy(wishlist, sortBy));
    }
  }, [sortBy, wishlist]);

  return sortedWishlist;
}
