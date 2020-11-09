import React, { FC } from 'react';

import { usePsWishlistSelectors } from '../PSWishlistContext/PSWishlistContext';
import { selectWishlist } from '../PSWishlistContext/wishlistSelectors';

import WishlistPage from './WishlistPage';

const selectors = {
  wishlist: selectWishlist,
};

const WishlistPageConnector: FC = () => {
  const { wishlist } = usePsWishlistSelectors(selectors);

  return <WishlistPage wishlist={wishlist} />;
};

export default WishlistPageConnector;
