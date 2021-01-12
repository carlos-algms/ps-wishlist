import { FC } from 'react';

import { usePsWishlistSelectors } from '../PSWishlistContext/PSWishlistContext';
import { selectWishlist } from '../PSWishlistContext/wishlistSelectors';
import { saveWishlistToStorage, WishlistItem } from '../psWishlistStorage';
import { SortBy } from '../Sort/Sort';
import useSortByValue from '../Sort/useSortByValue';
import useSortedWishlist from '../Sort/useSortedWishlist';

import WishlistPage from './WishlistPage';

const selectors = {
  wishlist: selectWishlist,
};

const WishlistPageConnector: FC = () => {
  const { wishlist } = usePsWishlistSelectors(selectors);
  const sortBy = useSortByValue();
  const sortedWishlist = useSortedWishlist(wishlist, sortBy);
  const showDragHandler = sortBy === SortBy.UserDefined;

  return (
    <WishlistPage
      items={sortedWishlist}
      showDragHandler={showDragHandler}
      onListOrdered={handleSaveOrderedList}
    />
  );
};

export default WishlistPageConnector;

function handleSaveOrderedList(orderedList: WishlistItem[]) {
  const list = orderedList.map((item, i) => ({
    ...item,
    userRankPosition: i,
  }));

  void saveWishlistToStorage(list);
}
