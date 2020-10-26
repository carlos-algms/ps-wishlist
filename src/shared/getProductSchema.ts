import executeScriptOnTab from './executeScriptOnTab';
import getCurrentTab from './getCurrentTab';

export type Offer = {
  price: number;
  current: string;
};

export type ProductSchema = {
  name: string;
  category: string;
  description: string;
  sku: string;
  image: string;
  offers: Offer;
};

/**
 * Query the dom for a script tag with the id #mfe-jsonld-tags and parses its JSON content.
 */
export default async function getProductSchema(): Promise<null | ProductSchema> {
  const tab = await getCurrentTab();
  const { id: tabId } = tab;
  if (!tabId) {
    return null;
  }

  const query = `document.querySelector('#mfe-jsonld-tags').innerHTML`;
  const result = await executeScriptOnTab<string>(tabId, query);

  if (!result) {
    // TODO handle failing get schema
    return null;
  }

  const schema = JSON.parse(result) as ProductSchema;
  return schema;
}
