import { ProductSchema } from '../Product/ProductTypes';

export type WishlistItem = ProductSchema & {
  includedAt: number;
  userRankPosition: number;
  lastUpdatedAt: number;
};

const KEY = 'wishlistStore';

export interface WishlistStorageChange {
  newValue: WishlistItem[];
  oldValue?: WishlistItem[];
}

/**
 * Listen for changes from the browser's storage API
 * Only emits when it is the Wishlist storage
 * @see https://developer.chrome.com/extensions/storage#event-onChanged
 */
export const wishlistStorageOnChanges = (
  cb: (changes: WishlistStorageChange, namespace: string) => unknown,
): (() => void) => {
  const listener: (
    changes: Record<string, Partial<WishlistStorageChange>>,
    areaName: chrome.storage.AreaName,
  ) => void = (changes, namespace) => {
    const store = changes[KEY];

    if (store) {
      cb(
        {
          newValue: store.newValue ?? [],
          oldValue: store.oldValue,
        },
        namespace,
      );
    }
  };

  chrome.storage.onChanged.addListener(listener);

  return function removeListener() {
    chrome.storage.onChanged.removeListener(listener);
  };
};

export function getWishlistFromStorage(): Promise<WishlistItem[]> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(KEY, (result) => {
      resolve(result[KEY] || []);
    });
  });
}

export function saveWishlistToStorage(newWishlist: WishlistItem[]): Promise<boolean> {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [KEY]: newWishlist }, () => {
      resolve(true);
    });
  });
}

/**
 * Converts a Product from PSN to normalized WishlistItem used by the App
 */
export function productToWishListItem(product: ProductSchema): WishlistItem {
  const item: WishlistItem = {
    ...product,
    includedAt: Date.now(),
    userRankPosition: 9999,
    lastUpdatedAt: Date.now(),
  };

  return item;
}

/**
 * @returns true when inserted, false when already included
 */
export async function includeProductToWishListStorage(product: ProductSchema): Promise<boolean> {
  const newItem = productToWishListItem(product);
  const wishlist = await getWishlistFromStorage();

  if (!isAlreadyIncluded(newItem, wishlist)) {
    const updatedWishlist = [...wishlist, newItem];

    await saveWishlistToStorage(updatedWishlist);
    return true;
  }

  return false;
}

/**
 * @returns true when removed, false if sku not found
 */
export async function removeProductFromWishListStorage(sku: string): Promise<boolean> {
  const wishlist = await getWishlistFromStorage();
  const updatedList = wishlist.filter((item) => item.sku !== sku);
  await saveWishlistToStorage(updatedList);

  return wishlist.length !== updatedList.length;
}

const isAlreadyIncluded = (newItem: WishlistItem, wishlist: WishlistItem[]) =>
  wishlist.some((item) => item.sku === newItem.sku);
