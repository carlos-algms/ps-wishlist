import React, { FC } from 'react';
import Popup from '../Popup';
import Providers from '../shared/contexts/Providers';
import appRenderer from '../shared/appRenderer';

export const PopupEntryPoint: FC = () => {
  return (
    <Providers>
      <Popup />
    </Providers>
  );
};

appRenderer(PopupEntryPoint);
