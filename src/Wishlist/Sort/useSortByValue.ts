import { useEffect, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { SortBy } from './Sort';
import { getSortByFromStorage, onSortByChanges } from './sortByStorageClient';

/**
 * Returns the user's choice for the sorting method.
 * The value is fetched from the Browser's storage.
 */
export default function useSortByValue(): SortBy | null {
  const [sortBy, setLocalSortBy] = useState<SortBy | null>(null);

  useEffect(() => {
    return onSortByChanges((changes) => {
      setLocalSortBy(changes.newValue);
    });
  }, []);

  useAsyncEffect(async (checkIsMounted) => {
    const sortBy = await getSortByFromStorage();
    if (checkIsMounted()) {
      setLocalSortBy(sortBy);
    }
  }, []);

  return sortBy;
}
