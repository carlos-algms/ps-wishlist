import React, { FC } from 'react';
import Popup from '../components/Popup';
import Providers from '../contexts/Providers';
import appRenderer from '../shared/appRenderer';

export const PopupEntryPoint: FC = () => {
  return (
    <Providers>
      <Popup />
    </Providers>
  );
};

appRenderer(PopupEntryPoint);
