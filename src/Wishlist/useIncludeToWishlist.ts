import { useEffect } from 'react';
import getIsProductUrl from '../Product/getIsProductUrl';
import includeToWishlist from './includeToWishlist';
import useCurrentUrl from '../shared/hooks/useCurrentUrl';

export default function useIncludeToWishlist(): void {
  const currentUrl = useCurrentUrl();

  useEffect(() => {
    const isProductUrl = getIsProductUrl(currentUrl);

    if (!isProductUrl) {
      return;
    }

    void includeToWishlist();
  }, [currentUrl]);
}
