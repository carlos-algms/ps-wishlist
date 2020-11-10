import { createContext } from '@fluentui/react-context-selector';
import React, { FC } from 'react';
import useAsyncEffect from 'use-async-effect';

import getProductSchema from '../../../Product/getProductSchema';
import { ProductSchema } from '../../../Product/ProductTypes';
import getCurrentTab from '../../getCurrentTab';
import useMergeableState from '../../hooks/useMergeableState';
import makeContextSelectorHook from '../makeContextSelector';

export type PSCurrentPageContextValue = {
  error?: Error | null;
  isProductPage: boolean;
  currentUrl: string;
  productSchema: ProductSchema | null;
};

const defaultValue: PSCurrentPageContextValue = {
  isProductPage: false,
  currentUrl: '',
  productSchema: null,
};

/**
 * PlayStation Current page Context
 */
export const PSCurrentPageContext = createContext<PSCurrentPageContextValue>(defaultValue);

export const usePsCurrentPageSelectors = makeContextSelectorHook(PSCurrentPageContext);

export const PSCurrentPageContextProvider: FC = ({ children }) => {
  const [state, mergeState] = useMergeableState(defaultValue);

  const { isProductPage, currentUrl } = state;

  useAsyncEffect(async (checkIsMounted) => {
    const tab = await getCurrentTab();
    const url = tab.url ?? '';

    if (checkIsMounted()) {
      mergeState({
        currentUrl: url,
        isProductPage: url.includes('/product/'),
      });
    }
  }, []);

  useAsyncEffect(
    async (checkIsMounted) => {
      if (!isProductPage) {
        return;
      }

      const productSchema = await getProductSchema(currentUrl);

      if (checkIsMounted()) {
        mergeState({
          productSchema,
        });
      }
    },
    [currentUrl, isProductPage],
  );

  return <PSCurrentPageContext.Provider value={state}>{children}</PSCurrentPageContext.Provider>;
};
