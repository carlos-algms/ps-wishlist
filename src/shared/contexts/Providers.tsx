import type { FC } from 'react';

import GTagScriptLoader from '../../Tracking/GTagScriptLoader';
import { PSWishlistContextProvider } from '../../Wishlist/PSWishlistContext/PSWishlistContext';
import AppThemeProvider from '../components/AppThemeProvider';

import { PSCurrentPageContextProvider } from './currentPage/PSCurrentPageContext';

/**
 * Wrap the main App providers
 */
const Providers: FC = ({ children }) => {
  return (
    <>
      <AppThemeProvider>
        <PSCurrentPageContextProvider>
          <PSWishlistContextProvider>{children}</PSWishlistContextProvider>
        </PSCurrentPageContextProvider>
      </AppThemeProvider>

      <GTagScriptLoader />
    </>
  );
};

export default Providers;
