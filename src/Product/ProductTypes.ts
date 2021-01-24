/**
 * Schema used by PSN, probably to show dynamic cards while sharing into social media.
 */
export type PSProductSchema = {
  name: string;
  category: string;
  description: string;
  sku: string;
  image: string;
  offers: {
    price?: number;
    priceCurrency?: string;
  };
};

/**
 * Schema used by PSN to show the CTA buttons to add the game to the cart
 * It contains much more props.
 * Listing here only the useful ones.
 */
export type CTASchema = {
  cache: {
    // here the useful data is at the random index GameCTA:{SKU}:ADD_TO_CART:ADD_TO_CART:{SKU}-U001
    [key: string]: string | number | boolean | GameCTASchema;
  };
};

/**
 * Specific data for the game extracted from the CTASchema
 * It contains much more props, listing here only the important ones
 */
export type GameCTASchema = {
  __typename: 'GameCTA';
  price: {
    __typename: 'Price';
    /**
     * Original price of the product without decimal places
     * Divide it by 100 to get actual price
     */
    basePriceValue: number;
    /**
     * Localized Original price, before the discount
     * e.g: `R$ 124,90` or `Free`
     */
    basePrice: string;
    /**
     * Discount price without decimal places
     * Divide it by 100 to get actual price
     */
    discountedValue: number;
    /**
     * Localized discount price
     * e.g: `R$ 81,18`
     */
    discountedPrice: string;
    /**
     * Text containing how much the user will save in percentage
     * e.g: `-35%`
     */
    discountText: string;
    /**
     * String representing a Timestamp for the Offer end date
     * e.g: `'1605945540000'`
     */
    endTime: string | null;
    /**
     * ISO currency code
     * e.g: `BRL` | `EUR`
     */
    currencyCode: string;
    isFree: boolean;
    isExclusive: boolean;
    isTiedToSubscription: boolean;
  };
};

/**
 * Normalized product schema used internally by this app
 */
export type ProductSchema = Omit<PSProductSchema, 'offers' | 'description'> & {
  /**
   * "Original" price before discount applied
   */
  originalPrice: number;
  /**
   * Final selling price
   */
  discountPrice: number;
  currencyCode: string;
  productUrl: string;
  discountEndTime: number | null;
};
