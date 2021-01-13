import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FC, useRef } from 'react';
import styled from 'styled-components';

import WishlistListItem, { WishlistListItemProps } from '../WishlistList/WishlistListItem';

import SortDragHandler from './SortDragHandler';
import useSortableItem, { UseSortableItemProps } from './useSortableItem';

type WishlistSortableItemProps = WishlistListItemProps &
  Pick<UseSortableItemProps, 'onDragging' | 'onDropped'> & {
    index: number;
    showDragHandler: boolean;
  };

const WishlistSortableItem: FC<WishlistSortableItemProps> = (props) => {
  const { index, onDragging, onDropped, showDragHandler, ...restProps } = props;
  const itemNodeRef = useRef<HTMLLIElement | null>(null);
  const handlerNodeRef = useRef<HTMLDivElement | null>(null);

  const { opacity } = useSortableItem({
    itemNodeRef,
    handlerNodeRef,
    index,
    onDragging,
    onDropped,
  });

  return (
    <WishlistListItem {...restProps} ref={itemNodeRef} style={{ opacity }}>
      {showDragHandler && (
        <ListItemIconStyled ref={handlerNodeRef}>
          <SortDragHandler />
        </ListItemIconStyled>
      )}
    </WishlistListItem>
  );
};

export default WishlistSortableItem;

const ListItemIconStyled = styled(ListItemIcon)`
  align-self: center;
  margin: 0;
`;