import { styled } from '@material-ui/core/styles';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import type { FC } from 'react';

const SortDragHandler: FC = () => {
  return (
    <Wrapper>
      <KeyboardArrowUpIcon className="icon-up" />
      <DragHandleIcon />
      <KeyboardArrowDownIcon className="icon-down" />
    </Wrapper>
  );
};

export default SortDragHandler;

const Wrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  cursor: 'grab',

  '& .icon-up, & .icon-down': {
    fontSize: '1.1rem',
  },

  '& .icon-up': {
    marginBottom: -12,
  },

  '& .icon-down': {
    marginTop: -12,
  },
});
