import getProductSchema from './getProductSchema';

export default async function includeToWishlist(): Promise<void> {
  const schema = await getProductSchema();

  if (!schema) {
    return;
  }

  // TODO store the product into the wishlist
  console.log(schema);
}
