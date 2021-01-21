import { FC, useMemo } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import { selectProductSchema } from '../shared/contexts/currentPage/psCurrentPageSelectors';
import { usePsWishlistSelectors } from '../Wishlist/PSWishlistContext/PSWishlistContext';
import { selectWishlistItem } from '../Wishlist/PSWishlistContext/wishlistSelectors';
import WishlistList from '../Wishlist/WishlistList/WishlistList';

const PopupProduct: FC = () => {
  const { productSchema } = usePsCurrentPageSelectors({
    productSchema: selectProductSchema,
  });

  const { item } = usePsWishlistSelectors({
    item: selectWishlistItem(productSchema?.sku),
  });

  const list = useMemo(() => item && [item], [item]);

  if (!list) {
    return null;
  }

  return <WishlistList items={list} hideVisitLink />;
};

export default PopupProduct;
