import { ProductSchema } from '../Product/ProductTypes';

export type WishlistItem = ProductSchema & {
  includedAt: number;
};

const KEY = 'wishlistStore';

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

export function productToWishListItem(product: ProductSchema): WishlistItem {
  const item: WishlistItem = {
    ...product,
    includedAt: Date.now(),
  };

  return item;
}

export async function includeProductToWishListStorage(
  product: ProductSchema,
): Promise<WishlistItem[]> {
  const newItem = productToWishListItem(product);
  const wishlist = await getWishlistFromStorage();

  if (!isAlreadyIncluded(newItem, wishlist)) {
    const updatedWishlist = [...wishlist, newItem];

    await saveWishlistToStorage(updatedWishlist);
    return updatedWishlist;
  }

  return wishlist;
}

const isAlreadyIncluded = (newItem: WishlistItem, wishlist: WishlistItem[]) =>
  wishlist.some((item) => item.sku === newItem.sku);
