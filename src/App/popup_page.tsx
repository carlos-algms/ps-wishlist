import type { FC } from 'react';

import Popup from '../Popup';
import appRenderer from '../shared/appRenderer';
import Providers from '../shared/contexts/Providers';
import usePageViewTrack from '../Tracking/usePageViewTrack';

export const PopupEntryPoint: FC = () => {
  usePageViewTrack('/popup');

  return (
    <Providers>
      <Popup />
    </Providers>
  );
};

appRenderer(PopupEntryPoint);
