import List from '@material-ui/core/List';
import type { FC, MouseEventHandler } from 'react';

import { removeProductFromWishListStorage, WishlistItem } from '../psWishlistStorage';

import WishlistListItem from './WishlistListItem';

type Props = {
  items: WishlistItem[];
  hideVisitLink?: boolean;
};

const handleRemoveItem: MouseEventHandler<HTMLButtonElement> = (event) => {
  const sku = event.currentTarget.dataset.sku;

  if (sku) {
    void removeProductFromWishListStorage(sku);
  }
};

const WishlistList: FC<Props> = ({ items, hideVisitLink }) => {
  return (
    <List>
      {items.map((item) => (
        <WishlistListItem
          key={item.sku}
          item={item}
          onRemoveItem={handleRemoveItem}
          hideVisitLink={hideVisitLink}
        />
      ))}
    </List>
  );
};

export default WishlistList;
