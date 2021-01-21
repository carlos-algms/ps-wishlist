import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { FC } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import { selectIsProductPage } from '../shared/contexts/currentPage/psCurrentPageSelectors';

const NotProductPage: FC = () => {
  const { isProductPage } = usePsCurrentPageSelectors({
    isProductPage: selectIsProductPage,
  });

  if (isProductPage) {
    return null;
  }

  return (
    <Box my={2}>
      <Alert severity="info">
        <AlertTitle>You are not on a game page</AlertTitle>
        Visit a Game&apos;s page and click again to add it to your Wishlist
      </Alert>
    </Box>
  );
};

export default NotProductPage;
