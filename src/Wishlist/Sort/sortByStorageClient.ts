import { makeStorageClient } from '../../shared/storageManager';

import { defaultSortBy, SortBy } from './Sort';

const {
  getter: getSortByFromStorage,
  setter: saveSortByToStorage,
  onChanges: onSortByChanges,
} = makeStorageClient<SortBy, SortBy>('SortByStore', defaultSortBy);

export { getSortByFromStorage, saveSortByToStorage, onSortByChanges };
