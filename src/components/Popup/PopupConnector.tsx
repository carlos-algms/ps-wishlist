import React, { memo } from 'react';
import { usePsCurrentPageSelectors } from '../../contexts/currentPage/PSCurrentPageContext';
import {
  selectCurrentPageUrl,
  selectIsProductPage,
} from '../../contexts/currentPage/psCurrentPageSelectors';
import Popup from './Popup';

const selectors = {
  currentUrl: selectCurrentPageUrl,
  isProductPage: selectIsProductPage,
};

const PopupConnector = memo(() => {
  const { currentUrl, isProductPage } = usePsCurrentPageSelectors(selectors);

  console.log(currentUrl, isProductPage);

  return <Popup isProductPage={isProductPage} />;
});

PopupConnector.displayName = 'PopupConnector';

export default PopupConnector;
