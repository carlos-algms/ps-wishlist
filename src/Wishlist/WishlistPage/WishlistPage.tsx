import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { WishlistItem } from '../psWishlistStorage';

export type WishlistPageProps = {
  wishlist: WishlistItem[];
};

const Colored = styled.div`
  color: red;
`;

const WishlistPage: FC<WishlistPageProps> = ({ wishlist }) => {
  console.log(wishlist);

  return (
    <>
      <Typography variant="h1">
        <Colored>Wishlist Page</Colored>
      </Typography>

      <p>Show list of products</p>
    </>
  );
};

export default WishlistPage;
