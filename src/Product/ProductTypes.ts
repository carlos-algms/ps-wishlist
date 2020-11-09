export type Offer = {
  price: number;
  priceCurrency: string;
};

export type ProductSchema = {
  name: string;
  category: string;
  description: string;
  sku: string;
  image: string;
  offers: Offer;
};
