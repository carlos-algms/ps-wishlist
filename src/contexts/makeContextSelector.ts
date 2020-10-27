import { Context, useContextSelectors } from '@fluentui/react-context-selector';

export default function makeContextSelector<T>(context: Context<T>) {
  return <
    TKeys extends keyof TSelectors,
    TSelectors extends Record<string, (context: T) => unknown>
  >(
    selectors: TSelectors,
  ): { [K in TKeys]: ReturnType<TSelectors[K]> } => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return useContextSelectors(context, selectors) as any;
  };
}
