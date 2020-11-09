import React, { FC } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import {
  selectIsProductPage,
  selectProductSchema,
} from '../shared/contexts/currentPage/psCurrentPageSelectors';
import useIncludeToWishlist from '../Wishlist/useIncludeToWishlist';

import Popup from './Popup';

const selectors = {
  isProductPage: selectIsProductPage,
  productSchema: selectProductSchema,
};

const PopupConnector: FC = () => {
  const { isProductPage, productSchema } = usePsCurrentPageSelectors(selectors);

  useIncludeToWishlist();

  return <Popup isProductPage={isProductPage} product={productSchema} />;
};

export default PopupConnector;
