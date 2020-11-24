import type { FC } from 'react';
import { PSCurrentPageContextProvider } from './currentPage/PSCurrentPageContext';
import { PSWishlistContextProvider } from '../../Wishlist/PSWishlistContext/PSWishlistContext';
import AppThemeProvider from '../components/AppThemeProvider';

/**
 * Wrap the main App providers
 */
const Providers: FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <PSCurrentPageContextProvider>
        <PSWishlistContextProvider>{children}</PSWishlistContextProvider>
      </PSCurrentPageContextProvider>
    </AppThemeProvider>
  );
};

export default Providers;
