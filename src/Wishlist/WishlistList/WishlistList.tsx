import List from '@material-ui/core/List';
import { styled } from '@material-ui/core/styles';
import type { FC } from 'react';

import useRemoveWithUndo from '../hooks/useRemoveWithUndo';
import { WishlistItem } from '../psWishlistStorage';

import WishlistListItem from './WishlistListItem';

export type WishlistProps = {
  items: WishlistItem[];
  hideVisitLink?: boolean;
};

const WishlistList: FC<WishlistProps> = ({ items, hideVisitLink }) => {
  const handleRemoveItem = useRemoveWithUndo();

  return (
    <ListStyled>
      {items.map((item) => (
        <WishlistListItem
          key={item.sku}
          item={item}
          onRemoveItem={handleRemoveItem}
          hideVisitLink={hideVisitLink}
        />
      ))}
    </ListStyled>
  );
};

export default WishlistList;

export const ListStyled = styled(List)({
  overflow: 'hidden',
  padding: '0 4px',
});
