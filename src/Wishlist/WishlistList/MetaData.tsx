import { styled } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { FC } from 'react';

import { GameAvailability } from '../../Product/ProductTypes';
import { formatCurrency } from '../../shared/formatCurrency';
import { formatShortDateWithTime } from '../../shared/formatDate';
import { WishlistItem } from '../psWishlistStorage';

type MetaDataProps = {
  item: WishlistItem;
};

const MetaData: FC<MetaDataProps> = ({ item }) => {
  const {
    discountPrice,
    originalPrice,
    currencyCode,
    discountEndTime,
    availability,
    isFree,
    localDiscountPrice,
  } = item;

  if (availability === GameAvailability.Unavailable) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Currently unavailable</AlertTitle>
        </Alert>
      </Container>
    );
  }

  if (isFree) {
    return (
      <Container>
        <Price>{localDiscountPrice}</Price>
      </Container>
    );
  }

  return (
    <Container>
      {(originalPrice && originalPrice > discountPrice && (
        <BasePrice>{formatCurrency(originalPrice, currencyCode)}</BasePrice>
      )) ||
        null}
      <Price>{formatCurrency(discountPrice, currencyCode)}</Price>
      {discountEndTime && (
        <DiscountDate>
          Discount valid until: {formatShortDateWithTime(discountEndTime)}
        </DiscountDate>
      )}
    </Container>
  );
};

export default MetaData;

const Container = styled('aside')({});

const Price = styled('div')(({ theme }) => ({
  fontSize: '1.3rem',
  color: theme.palette.success.main,
}));

const BasePrice = styled('div')({
  textDecoration: 'line-through',
});

const DiscountDate = styled('div')({
  fontSize: '0.8rem',
});
