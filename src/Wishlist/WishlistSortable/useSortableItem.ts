import { MutableRefObject } from 'react';
import { DragObjectWithType, DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';

export const ItemType = Symbol('WishlistItemSortable');

export interface DragItem extends DragObjectWithType {
  /**
   * The Item's start position on the List
   */
  index: number;
}

export type UseSortableItemProps = {
  itemNodeRef: MutableRefObject<HTMLLIElement | null>;
  handlerNodeRef: MutableRefObject<HTMLDivElement | null>;
  index: number;
  /**
   * Called multiple times while dragging.
   * Just after the hover crosses the threshold of another item in the list
   */
  onDragging: (dragIndex: number, hoverIndex: number) => void;
  /**
   * Called when the drag finished and the item is dropped on the list
   */
  onDropped: (item: DragItem) => void;
};

export type UseSortableItemValue = {
  opacity: number;
};

export default function useSortableItem({
  itemNodeRef,
  handlerNodeRef,
  index,
  onDragging,
  onDropped,
}: UseSortableItemProps): UseSortableItemValue {
  const [, setDropRef] = useDrop({
    accept: ItemType,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!itemNodeRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = itemNodeRef.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      onDragging(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
    drop(droppedItem) {
      onDropped(droppedItem);
    },
  });

  const [{ isDragging }, setDragRef, setPreviewRef] = useDrag({
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  setDragRef(handlerNodeRef);
  setPreviewRef(setDropRef(itemNodeRef));

  return {
    opacity,
  };
}
