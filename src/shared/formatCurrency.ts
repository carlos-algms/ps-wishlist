import memoize from 'lodash-es/memoize';

export const getNumberFormatter = memoize((currencyCode: string) => {
  return new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currencyCode });
});

export function formatCurrency(value: number, currencyCode: string): string {
  return getNumberFormatter(currencyCode).format(value);
}
