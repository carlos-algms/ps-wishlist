import { useEffect } from 'react';

import { trackPageView } from './tracking';

export default function usePageViewTrack(page: string): void {
  useEffect(() => {
    trackPageView(page);
  }, [page]);
}
