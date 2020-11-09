import memoize from 'lodash-es/memoize';

export const getNumberFormatter = memoize((currencyCode: string) => {
  // TODO get user's language
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencyCode });
});

export function formatCurrency(value: number, currencyCode: string): string {
  return getNumberFormatter(currencyCode).format(value);
}
