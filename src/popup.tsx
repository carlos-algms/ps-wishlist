import React, { FC } from 'react';
import Popup from './components/Popup/Popup';
import appRenderer from './shared/appRenderer';

export const PopupPage: FC = () => {
  return <Popup />;
};

PopupPage.displayName = 'PopupPage';

appRenderer(PopupPage);
