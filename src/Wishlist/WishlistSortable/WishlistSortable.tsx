import List from '@material-ui/core/List';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { WishlistItem } from '../psWishlistStorage';
import { handleRemoveItem, WishlistProps } from '../WishlistList/WishlistList';

import WishlistSortableItem from './WishlistSortableItem';

export type WishlistListSortableProps = WishlistProps & {
  onListOrdered: (list: WishlistItem[]) => unknown;
  showDragHandler: boolean;
};

const WishlistListSortable: FC<WishlistListSortableProps> = ({
  items,
  hideVisitLink,
  showDragHandler,
  onListOrdered,
}) => {
  const [localItems, setLocalItems] = useState(items);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const moveItemLocally = useCallback((dragIndex: number, hoverIndex: number) => {
    setLocalItems((currentItems) => {
      const draggingItem = currentItems[dragIndex];
      const orderedItems = [...currentItems];
      orderedItems.splice(dragIndex, 1);
      orderedItems.splice(hoverIndex, 0, draggingItem);
      return orderedItems;
    });
  }, []);

  const handleSaveOrderedList = useCallback(() => {
    onListOrdered(localItems);
  }, [localItems, onListOrdered]);

  return (
    <List ref={listRef}>
      {localItems.map((item, i) => (
        <WishlistSortableItem
          key={item.sku}
          index={i}
          item={item}
          onRemoveItem={handleRemoveItem}
          hideVisitLink={hideVisitLink}
          onDragging={moveItemLocally}
          onDropped={handleSaveOrderedList}
          showDragHandler={showDragHandler}
        />
      ))}
    </List>
  );
};

export default WishlistListSortable;
