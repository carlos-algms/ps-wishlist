import React, { FC, useEffect } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import {
  selectIsProductPage,
  selectProductSchema,
} from '../shared/contexts/currentPage/psCurrentPageSelectors';
import { includeProductToWishListStorage } from '../Wishlist/psWishlistStorage';

import Popup from './Popup';

const selectors = {
  isProductPage: selectIsProductPage,
  productSchema: selectProductSchema,
};

const PopupConnector: FC = () => {
  const { isProductPage, productSchema } = usePsCurrentPageSelectors(selectors);

  useEffect(() => {
    if (productSchema) {
      void includeProductToWishListStorage(productSchema);
    }
  }, [productSchema]);

  return <Popup isProductPage={isProductPage} product={productSchema} />;
};

export default PopupConnector;
