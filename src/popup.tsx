import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import appRenderer from './shared/appRenderer';

export const WishlistPage: FC = () => {
  return (
    <Typography variant="h1" color="primary">
      Popup
    </Typography>
  );
};

WishlistPage.displayName = 'WishlistPage';

appRenderer(WishlistPage);
