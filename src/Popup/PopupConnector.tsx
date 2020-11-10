import React, { FC, useEffect } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import { selectProductSchema } from '../shared/contexts/currentPage/psCurrentPageSelectors';
import { includeProductToWishListStorage } from '../Wishlist/psWishlistStorage';

import Popup from './Popup';

const selectors = {
  productSchema: selectProductSchema,
};

const PopupConnector: FC = () => {
  const { productSchema } = usePsCurrentPageSelectors(selectors);

  useEffect(() => {
    if (productSchema) {
      void includeProductToWishListStorage(productSchema);
    }
  }, [productSchema]);

  return <Popup productSchema={productSchema} />;
};

export default PopupConnector;
