import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import { styled } from '@material-ui/core/styles';
import type { FC } from 'react';

import WishlistIcon from '../shared/components/Icons/WishlistIcon';
import openWishlistPage from '../shared/openWishlistPage';
import type { WishlistItem } from '../Wishlist/psWishlistStorage';
import WishlistList from '../Wishlist/WishlistList/WishlistList';

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

const Root = styled('main')(({ theme }) => ({
  minWidth: 400,
  padding: theme.spacing(1, 3),
}));
