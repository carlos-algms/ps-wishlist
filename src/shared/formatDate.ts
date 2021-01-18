import memoize from 'lodash-es/memoize';

const shortDateFormatOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

const shortDateWithTimeOptions: Intl.DateTimeFormatOptions = {
  ...shortDateFormatOptions,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export const getDateFormatter = memoize((options: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat(navigator.language, options);
});

/**
 * Returns the date formatted in short format
 * like: dd/mm/YYYY
 */
export function formatShortDate(value: number): string {
  return getDateFormatter(shortDateFormatOptions).format(value);
}

/**
 * Returns the date formatted in short format with time at the end
 * like: dd/mm/YYYY hh:mm
 */
export function formatShortDateWithTime(value: number): string {
  return getDateFormatter(shortDateWithTimeOptions).format(value);
}
