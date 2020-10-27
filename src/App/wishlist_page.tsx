import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import styled from 'styled-components';
import Providers from '../contexts/Providers';
import appRenderer from '../shared/appRenderer';

const Colored = styled.div`
  color: red;
`;

export const WishlistPage: FC = () => {
  return (
    <Providers>
      <Typography variant="h1">
        <Colored>Hi from MyApp</Colored>
      </Typography>
    </Providers>
  );
};

WishlistPage.displayName = 'WishlistPage';

appRenderer(WishlistPage);
