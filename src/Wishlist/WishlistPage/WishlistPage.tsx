import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { WishlistItem } from '../psWishlistStorage';
import WishlistList from '../WishlistList/WishlistList';

export type WishlistPageProps = {
  wishlist: WishlistItem[];
};

const Colored = styled.div`
  color: blue;
`;

const WishlistPage: FC<WishlistPageProps> = ({ wishlist }) => {
  return (
    <>
      <Typography variant="h2">
        <Colored>Wishlist Page</Colored>
      </Typography>

      <WishlistList items={wishlist} />
    </>
  );
};

export default WishlistPage;
