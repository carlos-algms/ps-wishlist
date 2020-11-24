import { FC, useEffect } from 'react';
import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import { selectProductSchema } from '../shared/contexts/currentPage/psCurrentPageSelectors';
import { usePsWishlistSelectors } from '../Wishlist/PSWishlistContext/PSWishlistContext';
import { selectWishlistItem } from '../Wishlist/PSWishlistContext/wishlistSelectors';
import { includeProductToWishListStorage } from '../Wishlist/psWishlistStorage';
import Popup from './Popup';

const selectors = {
  productSchema: selectProductSchema,
};

const PopupConnector: FC = () => {
  const { productSchema } = usePsCurrentPageSelectors(selectors);
  const { item } = usePsWishlistSelectors({
    item: selectWishlistItem(productSchema?.sku),
  });

  useEffect(() => {
    if (productSchema) {
      void includeProductToWishListStorage(productSchema);
    }
  }, [productSchema]);

  return <Popup wishlistItem={item} />;
};

export default PopupConnector;
