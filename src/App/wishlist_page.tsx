import type { FC } from 'react';
import appRenderer from '../shared/appRenderer';
import Providers from '../shared/contexts/Providers';
import WishlistPage from '../Wishlist/WishlistPage';

export const WishlistEntryPoint: FC = () => {
  return (
    <Providers>
      <WishlistPage />
    </Providers>
  );
};

WishlistEntryPoint.displayName = 'WishlistEntryPoint';

appRenderer(WishlistEntryPoint);
