import { ProductSchema } from '../../shared/getProductSchema';

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
  const item = productToWishListItem(product);

  const wishList = await getWishlistFromStorage();
  const updatedWishlist = [...wishList, item];

  await saveWishlistToStorage(updatedWishlist);
  return updatedWishlist;
}
