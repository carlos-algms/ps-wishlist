import { styled } from '@material-ui/core/styles';
import GamepadIcon from '@material-ui/icons/Gamepad';
import ListAltIcon from '@material-ui/icons/ListAlt';
import type { FC } from 'react';

const WishlistIcon: FC = () => {
  return (
    <Wrapper>
      <ListAltIconStyled fontSize="large" />
      <GamepadIconStyled color="primary" stroke="white" strokeWidth={2} />
    </Wrapper>
  );
};

export default WishlistIcon;

const Wrapper = styled('div')({
  position: 'relative',
});

const ListAltIconStyled = styled(ListAltIcon)({});
const GamepadIconStyled = styled(GamepadIcon)({
  position: 'absolute',
  right: -5,
  bottom: 0,
});
