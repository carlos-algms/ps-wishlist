import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { CSSProperties, forwardRef, MouseEventHandler, ReactNode } from 'react';

import { trackStoreLink } from '../../Tracking/tracking';
import type { WishlistItem } from '../psWishlistStorage';

import MetaData from './MetaData';

export type WishlistListItemProps = {
  item: WishlistItem;
  onRemoveItem: MouseEventHandler<HTMLButtonElement>;
  hideVisitLink?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
};

const secondaryTypographyProps: { component: 'div' } = { component: 'div' };

const WishlistListItem = forwardRef<HTMLLIElement | null, WishlistListItemProps>((props, ref) => {
  const { item, onRemoveItem, hideVisitLink = false, children, style } = props;
  const {
    name,
    image,
    discountPrice,
    originalPrice,
    currencyCode,
    sku,
    productUrl,
    discountEndTime,
  } = item;

  const classes = useStyles();

  return (
    <ListItem
      ref={ref}
      classes={{
        root: classes.listItemRoot,
        container: classes.listItem,
        gutters: classes.gutters,
      }}
      style={style}
    >
      {children}
      <ListItemAvatar classes={{ root: classes.listItemAvatar }}>
        <Avatar
          classes={{ root: classes.avatarRoot }}
          alt={name}
          src={`${image}?w=${AVATAR_SIZE}`}
          variant="square"
        />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondaryTypographyProps={secondaryTypographyProps}
        secondary={
          <MetaData
            price={discountPrice}
            originalPrice={originalPrice}
            currencyCode={currencyCode}
            discountEndTime={discountEndTime}
          />
        }
      />
      <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
        {hideVisitLink !== true && (
          <IconButton
            aria-label="open in new window"
            title="Visit the product page at PlayStation store"
            href={productUrl}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => trackStoreLink(productUrl)}
          >
            <OpenInNewIcon />
          </IconButton>
        )}
        <IconButton
          aria-label="delete"
          title="Remove this item from your wish list"
          data-sku={sku}
          onClick={onRemoveItem}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

WishlistListItem.displayName = 'WishlistListItem';

export default WishlistListItem;

const AVATAR_SIZE = 128;

// https://github.com/mui-org/material-ui/issues/10285
const useStyles = makeStyles((theme) => ({
  gutters: {
    padding: 0,
  },

  listItemRoot: {
    alignItems: 'stretch',
  },

  listItem: {
    background: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
    boxShadow: theme.shadows[1],

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:hover $listItemSecondaryAction': {
      visibility: 'inherit',
    },
  },

  listItemSecondaryAction: {
    visibility: 'hidden',
  },

  listItemAvatar: {
    marginRight: `${theme.spacing(2)}px`,
    marginTop: 0,
  },

  avatarRoot: {
    width: `${AVATAR_SIZE}px`,
    height: `${AVATAR_SIZE}px`,
  },
}));
