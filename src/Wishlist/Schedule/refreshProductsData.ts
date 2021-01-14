import { fetchProductSchema } from '../../Product/getProductSchema';
import { ProductSchema } from '../../Product/ProductTypes';
import { getWishlistFromStorage, saveWishlistToStorage, WishlistItem } from '../psWishlistStorage';

export const PRICE_UPDATE_ALARM_NAME = 'PriceUpdateAlarm';
export const PRICE_UPDATE_ALARM_PERIOD_IN_MINUTES = 360;

export async function refreshProductsData(): Promise<void> {
  const wishlist = await getWishlistFromStorage();

  for (const item of wishlist) {
    try {
      // TODO what to do when the product does not exist anymore? Or the request failed?
      const productSchema = await fetchProductSchema(item.productUrl);

      if (productSchema) {
        updateItem(item, productSchema);
      }
    } catch (error) {
      console.error(error);
    }
  }

  void saveWishlistToStorage(wishlist);
}

function updateItem(item: WishlistItem, productSchema: ProductSchema) {
  item.discountPrice = productSchema.discountPrice;
  item.originalPrice = productSchema.originalPrice;
  item.lastUpdatedAt = Date.now();
}