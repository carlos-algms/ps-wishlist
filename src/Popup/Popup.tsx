import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ProductSchema } from '../Product/ProductTypes';
import WishlistIcon from '../shared/components/Icons/WishlistIcon';
import openWishlistPage from '../shared/openWishlistPage';

const Root = styled.main`
  padding: 0px 20px 20px;
`;

export type Props = {
  isProductPage: boolean;
  product: ProductSchema | null;
};

const Popup: FC<Props> = ({ isProductPage, product }) => {
  console.log(product);
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

      {isProductPage && <h1>Show Product Card</h1>}
    </Root>
  );
};

export default Popup;
