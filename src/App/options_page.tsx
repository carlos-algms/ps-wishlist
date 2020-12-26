import type { FC } from 'react';
import AboutPage from '../About/AboutPage';
import appRenderer from '../shared/appRenderer';
import Providers from '../shared/contexts/Providers';

export const PopupEntryPoint: FC = () => {
  return (
    <Providers>
      <AboutPage />
    </Providers>
  );
};

appRenderer(PopupEntryPoint);
