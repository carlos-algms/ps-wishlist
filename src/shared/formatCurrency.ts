import memoize from 'lodash-es/memoize';

export const DEFAULT_CURRENCY_CODE = 'BRL';

export const getNumberFormatter = memoize((currencyCode?: string) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currencyCode || DEFAULT_CURRENCY_CODE,
  });
});

export function formatCurrency(value: number, currencyCode?: string): string {
  return getNumberFormatter(currencyCode).format(value);
}
