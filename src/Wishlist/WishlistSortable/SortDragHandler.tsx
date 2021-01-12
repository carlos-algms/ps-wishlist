import DragHandleIcon from '@material-ui/icons/DragHandle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import type { FC } from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  cursor: grab;

  .icon-up,
  .icon-down {
    font-size: 1.1rem;
  }

  .icon-up {
    margin-bottom: -12px;
  }

  .icon-down {
    margin-top: -12px;
  }
`;
