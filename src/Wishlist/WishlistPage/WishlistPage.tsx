import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Colored = styled.div`
  color: red;
`;

const WishlistPage: FC = () => {
  return (
    <>
      <Typography variant="h1">
        <Colored>Wishlist Page</Colored>
      </Typography>
    </>
  );
};

export default WishlistPage;
