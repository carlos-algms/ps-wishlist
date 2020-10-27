import React, { FC } from 'react';
import { PSCurrentPageContextProvider } from './currentPage/PSCurrentPageContext';
import { PSWishlistContextProvider } from './wishlist/PSWishlistContext';

const Providers: FC = ({ children }) => {
  return (
    <PSCurrentPageContextProvider>
      <PSWishlistContextProvider>{children}</PSWishlistContextProvider>
    </PSCurrentPageContextProvider>
  );
};

export default Providers;
