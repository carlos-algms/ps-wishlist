import List from '@material-ui/core/List';
import React, { FC, MouseEventHandler } from 'react';

import { removeProductFromWishListStorage, WishlistItem } from '../psWishlistStorage';

import WishlistListItem from './WishlistListItem';

type Props = {
  items: WishlistItem[];
};

const handleRemoveItem: MouseEventHandler<HTMLButtonElement> = (event) => {
  const sku = event.currentTarget.dataset.sku;

  if (sku) {
    void removeProductFromWishListStorage(sku);
  }
};

const WishlistList: FC<Props> = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <WishlistListItem key={item.sku} item={item} onRemoveItem={handleRemoveItem} />
      ))}
    </List>
  );
};

export default WishlistList;
