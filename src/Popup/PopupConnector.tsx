import React, { FC } from 'react';
import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import {
  selectCurrentPageUrl,
  selectIsProductPage,
} from '../shared/contexts/currentPage/psCurrentPageSelectors';
import Popup from './Popup';

const selectors = {
  currentUrl: selectCurrentPageUrl,
  isProductPage: selectIsProductPage,
};

const PopupConnector: FC = () => {
  const { currentUrl, isProductPage } = usePsCurrentPageSelectors(selectors);

  console.log(currentUrl, isProductPage);

  return <Popup isProductPage={isProductPage} />;
};

export default PopupConnector;
