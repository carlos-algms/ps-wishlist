import { FC, useEffect } from 'react';

import { usePsCurrentPageSelectors } from '../shared/contexts/currentPage/PSCurrentPageContext';
import { selectProductSchema } from '../shared/contexts/currentPage/psCurrentPageSelectors';
import { includeProductToWishListStorage } from '../Wishlist/psWishlistStorage';

/**
 * Automatically include the product in the current page to the wishlist
 * If it is product page
 *
 * Having this component as a child, and not as a connect helps avoid re-rendering the full popup
 */
const ProductAutoInclude: FC = () => {
  const { productSchema } = usePsCurrentPageSelectors({
    productSchema: selectProductSchema,
  });

  useEffect(() => {
    if (productSchema) {
      void includeProductToWishListStorage(productSchema);
    }
  }, [productSchema]);

  return null;
};

export default ProductAutoInclude;
