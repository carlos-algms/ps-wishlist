import type { FC } from 'react';

import AboutPage from '../About/AboutPage';
import appRenderer from '../shared/appRenderer';
import Providers from '../shared/contexts/Providers';
import usePageViewTrack from '../Tracking/usePageViewTrack';

export const OptionsEntryPoint: FC = () => {
  usePageViewTrack('/options');

  return (
    <Providers>
      <AboutPage />
    </Providers>
  );
};

appRenderer(OptionsEntryPoint);
