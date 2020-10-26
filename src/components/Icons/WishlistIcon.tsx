import GamepadIcon from '@material-ui/icons/Gamepad';
import ListAltIcon from '@material-ui/icons/ListAlt';
import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const ListAltIconStyled = styled(ListAltIcon)``;
const GamepadIconStyled = styled(GamepadIcon)`
  position: absolute;
  right: -5px;
  bottom: 0px;
`;

const WishlistIcon: FC = () => {
  return (
    <Wrapper>
      <ListAltIconStyled fontSize="large" />
      <GamepadIconStyled color="primary" stroke="white" strokeWidth={2} />
    </Wrapper>
  );
};

export default WishlistIcon;
