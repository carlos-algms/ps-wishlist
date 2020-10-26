import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import styled from 'styled-components';
import appRenderer from './shared/appRenderer';

const Colored = styled.div`
  color: red;
`;

export const WishlistPage: FC = () => {
  return (
    <Typography variant="h1">
      <Colored>Hi from MyApp</Colored>
    </Typography>
  );
};

WishlistPage.displayName = 'WishlistPage';

appRenderer(WishlistPage);
