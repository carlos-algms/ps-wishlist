import { makeStorageClient } from '../../shared/storageManager';
import { SortBy } from './Sort';

const {
  getter: getSortByFromStorage,
  setter: saveSortByToStorage,
  onChanges: onSortByChanges,
} = makeStorageClient<SortBy, SortBy>('SortByStore', SortBy.Default);

export { getSortByFromStorage, saveSortByToStorage, onSortByChanges };
