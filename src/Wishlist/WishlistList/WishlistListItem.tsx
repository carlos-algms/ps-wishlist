import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import React, { FC } from 'react';
import styled from 'styled-components';

import { formatCurrency } from '../../shared/formatCurrency';
import { usePsWishlistSelectors } from '../PSWishlistContext/PSWishlistContext';
import { WishlistItem } from '../psWishlistStorage';

type Props = {
  item: WishlistItem;
};

const AVATAR_SIZE = 128;

const StyledAvatar = styled(Avatar)`
  width: ${AVATAR_SIZE}px;
  height: ${AVATAR_SIZE}px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

// https://github.com/mui-org/material-ui/issues/10285
const useStyles = makeStyles({
  listItem: {
    '&:hover $listItemSecondaryAction': {
      visibility: 'inherit',
    },
  },
  listItemSecondaryAction: {
    visibility: 'hidden',
  },
});

const WishlistListItem: FC<Props> = ({ item }) => {
  const { removeProduct } = usePsWishlistSelectors({
    removeProduct: (c) => c.removeProduct,
  });
  const { name, image, discountPrice, currencyCode, sku, productUrl } = item;

  const classes = useStyles();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        button
        classes={{
          container: classes.listItem,
        }}
      >
        <ListItemAvatar>
          <StyledAvatar alt={name} src={`${image}?w=${AVATAR_SIZE}`} variant="rounded" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={formatCurrency(discountPrice, currencyCode)} />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <IconButton
            aria-label="open in new window"
            title="Visit the product page at PlayStation store"
            href={productUrl}
            target="_blank"
          >
            <OpenInNewIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            title="Remove this item from your wish list"
            onClick={() => removeProduct(sku)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export default WishlistListItem;
