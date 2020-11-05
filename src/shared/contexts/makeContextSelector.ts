/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context, useContextSelectors } from '@fluentui/react-context-selector';

export type Selector<ContextValue, R = any> = (context: ContextValue) => R;
export type Selectors<ContextValue> = Record<string, Selector<ContextValue>>;

/**
 * Hook that receives a collection of functions
 * and returns a new collection with the same indexes and the return values of the functions
 *
 * ```ts
 * const collection = { foo: ()=> 1, bar: () => 'chocolate' };
 * const result = { foo: 1, bar: 'chocolate' };
 * ```
 */
type ExtractorHook<ContextValue extends any> = {
  <S extends Selectors<ContextValue>>(selectors: S): {
    [K in Extract<keyof S, string>]: ReturnType<S[K]>;
  };
};

export default function makeContextSelectorHook<T>(context: Context<T>): ExtractorHook<T> {
  return function useExtractedValues(selectors) {
    return useContextSelectors(context, selectors);
  };
}
