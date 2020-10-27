import React, { FC } from 'react';
import { PSCurrentPageContextProvider } from './currentPage/PSCurrentPageContext';
import { PSWishlistContextProvider } from '../../Wishlist/PSWishlistContext';

/**
 * Wrap the main App providers
 */
const Providers: FC = ({ children }) => {
  return (
    <PSCurrentPageContextProvider>
      <PSWishlistContextProvider>{children}</PSWishlistContextProvider>
    </PSCurrentPageContextProvider>
  );
};

export default Providers;
