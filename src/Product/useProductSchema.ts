import { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

import getProductSchema from './getProductSchema';
import { ProductSchema } from './ProductTypes';

export default function useProductSchema(isProductPage: boolean): ProductSchema | null {
  const [schema, setSchema] = useState<ProductSchema | null>(null);

  useAsyncEffect(
    async (checkIsMounted) => {
      if (!isProductPage) {
        return;
      }

      const productSchema = await getProductSchema();
      if (checkIsMounted()) {
        setSchema(productSchema);
      }
    },
    [isProductPage],
  );

  return schema;
}
