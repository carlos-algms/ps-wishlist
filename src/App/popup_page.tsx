import type { FC } from 'react';
import Popup from '../Popup';
import appRenderer from '../shared/appRenderer';
import Providers from '../shared/contexts/Providers';

export const PopupEntryPoint: FC = () => {
  return (
    <Providers>
      <Popup />
    </Providers>
  );
};

appRenderer(PopupEntryPoint);
