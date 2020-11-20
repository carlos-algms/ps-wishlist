import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import React, { FC } from 'react';
import styled from 'styled-components';
import WishlistIcon from '../shared/components/Icons/WishlistIcon';
import openWishlistPage from '../shared/openWishlistPage';
import { WishlistItem } from '../Wishlist/psWishlistStorage';
import WishlistList from '../Wishlist/WishlistList/WishlistList';

const Root = styled.main`
  min-width: 400px;
  padding: ${({ theme }) => theme.spacing(1, 3)};
`;

export type Props = {
  wishlistItem?: WishlistItem | null;
};

const Popup: FC<Props> = ({ wishlistItem }) => {
  const list = wishlistItem && [wishlistItem];

  return (
    <Root>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Wishlist"
          title="Show my Wishlist"
          icon={<WishlistIcon />}
          onClick={openWishlistPage}
        />
      </BottomNavigation>
      <Divider />

      {list && <WishlistList items={list} hideVisitLink />}
    </Root>
  );
};

export default Popup;
