import { useEffect } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import {
  selectIsProductPage,
  selectProductSchema,
} from '../shared/contexts/currentPage/psCurrentPageSelectors';

import { usePsWishlistSelectors } from './PSWishlistContext/PSWishlistContext';

export default function useIncludeToWishlist(): void {
  const { productSchema } = usePsCurrentPageSelectors({
    isProductPage: selectIsProductPage,
    productSchema: selectProductSchema,
  });

  const { includeProduct } = usePsWishlistSelectors({
    includeProduct: (c) => c.includeProduct,
  });

  useEffect(() => {
    if (!productSchema) {
      return;
    }

    includeProduct(productSchema);
  }, [includeProduct, productSchema]);
}
