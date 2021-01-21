import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { FC } from 'react';

import openWishlistPage from '../shared/openWishlistPage';
import { usePsWishlistSelectors } from '../Wishlist/PSWishlistContext/PSWishlistContext';

const PopupFooter: FC = () => {
  const { wishlistSize, isLoading } = usePsWishlistSelectors({
    wishlistSize: (context) => context.wishlist.length,
    isLoading: (context) => context.isLoading,
  });

  return (
    <FooterStyled>
      <Typography variant="body1">
        You have {isLoading ? <CircularProgress size="1.2em" /> : wishlistSize} items on your wish
        list.
        <Link onClick={openWishlistPage} color="inherit">
          <span>Open full list</span>
          <OpenInNewIcon />
        </Link>
      </Typography>
    </FooterStyled>
  );
};

export default PopupFooter;

const FooterStyled = styled('footer')(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',

  '& a': {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),

    '& svg': {
      verticalAlign: 'middle',
      fontSize: '1.3em',
      marginLeft: 2,
    },
  },
}));
