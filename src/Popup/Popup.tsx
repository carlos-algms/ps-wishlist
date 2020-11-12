import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ProductSchema } from '../Product/ProductTypes';
import WishlistIcon from '../shared/components/Icons/WishlistIcon';
import openWishlistPage from '../shared/openWishlistPage';

const Root = styled.main`
  padding: ${({ theme }) => theme.spacing(1, 3)};
`;

export type Props = {
  productSchema: ProductSchema | null;
};

const Popup: FC<Props> = ({ productSchema }) => {
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

      {productSchema && <h1>Show Product Card</h1>}
    </Root>
  );
};

export default Popup;
