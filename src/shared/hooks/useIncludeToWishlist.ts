import { useEffect } from 'react';
import getIsProductUrl from '../getIsProductUrl';
import includeToWishlist from '../includeToWishlist';
import useCurrentUrl from './useCurrentUrl';

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
