import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

import Layout from '../../shared/components/Layout';
import { WishlistItem } from '../psWishlistStorage';
import WishlistList from '../WishlistList/WishlistList';

export type WishlistPageProps = {
  wishlist: WishlistItem[];
};

const WishlistPage: FC<WishlistPageProps> = ({ wishlist }) => {
  return (
    <Layout>
      <Container>
        <Typography variant="h2">My Playstation Wishlist</Typography>

        <WishlistList items={wishlist} />
      </Container>
    </Layout>
  );
};

export default WishlistPage;
