import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import React, { FC } from 'react';
import styled from 'styled-components';
import openWishlistPage from '../../shared/openWishlistPage';
import WishlistIcon from '../Icons/WishlistIcon';

const Root = styled.main`
  padding: 0px 20px 20px;
`;

const Popup: FC = () => {
  return (
    <Root>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Wishlist"
          title="Show my wishlist"
          icon={<WishlistIcon />}
          onClick={openWishlistPage}
        />
      </BottomNavigation>
      <Divider />
    </Root>
  );
};

export default Popup;
