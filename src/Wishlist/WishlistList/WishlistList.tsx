import List from '@material-ui/core/List';
import React, { FC } from 'react';

import { WishlistItem } from '../psWishlistStorage';

import WishlistListItem from './WishlistListItem';

type Props = {
  items: WishlistItem[];
};

const WishlistList: FC<Props> = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <WishlistListItem key={item.sku} item={item} />
      ))}
    </List>
  );
};

export default WishlistList;
