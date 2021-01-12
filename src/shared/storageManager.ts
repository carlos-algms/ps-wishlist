export type StorageChanges<T> = {
  newValue: T;
  oldValue?: T;
};

export type OnChangesHandler<T> = (changes: StorageChanges<T>, namespace: string) => unknown;

export type StorageClientMethods<T> = {
  getter: () => Promise<T>;
  setter: (newValue: T) => Promise<boolean>;
  /**
   * Listen for changes from the browser's storage API
   * Only emits when the key is included in the changes
   * @see https://developer.chrome.com/extensions/storage#event-onChanged
   */
  onChanges: (cb: OnChangesHandler<T>) => () => void;
};

export function makeStorageClient<
  Value,
  Default,
  Result = Value | Default,
  Methods extends StorageClientMethods<Result> = StorageClientMethods<Result>
>(key: string, defaultValue: Default): Methods {
  const getter: Methods['getter'] = () => {
    return new Promise((resolve) => {
      chrome.storage.sync.get(key, (storage) => {
        resolve(storage[key] || defaultValue);
      });
    });
  };

  const setter: Methods['setter'] = (newValue) => {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ [key]: newValue }, () => {
        resolve(true);
      });
    });
  };

  const onChanges: Methods['onChanges'] = (cb) => {
    const listener: (
      changes: Record<string, unknown>,
      areaName: chrome.storage.AreaName,
    ) => void = (changes, namespace) => {
      const store = changes[key];

      if (store) {
        const { newValue, oldValue } = store as StorageChanges<Result>;
        cb({ newValue, oldValue }, namespace);
      }
    };

    chrome.storage.onChanged.addListener(listener);

    return function removeListener() {
      chrome.storage.onChanged.removeListener(listener);
    };
  };

  return {
    getter,
    setter,
    onChanges,
  } as Methods;
}
