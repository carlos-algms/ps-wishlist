import type { FC } from 'react';

import appRenderer from '../shared/appRenderer';
import Providers from '../shared/contexts/Providers';
import usePageViewTrack from '../Tracking/usePageViewTrack';
import WishlistPage from '../Wishlist/WishlistPage';

export const WishlistEntryPoint: FC = () => {
  usePageViewTrack('/wishlist');

  return (
    <Providers>
      <WishlistPage />
    </Providers>
  );
};

WishlistEntryPoint.displayName = 'WishlistEntryPoint';

appRenderer(WishlistEntryPoint);
