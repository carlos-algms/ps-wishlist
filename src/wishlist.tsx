import React from 'react';
import appRenderer from './shared/appRenderer';

export const WishlistPage = () => {
  return <div>Hi from MyApp</div>;
};

WishlistPage.displayName = 'WishlistPage';

appRenderer(WishlistPage);
