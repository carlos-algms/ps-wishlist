import executeScriptOnCurrentTab from '../shared/executeScriptOnCurrentTab';
import { ProductSchema } from './ProductTypes';

/**
 * Query the dom for a script tag with the id #mfe-jsonld-tags and parses its JSON content.
 */
export default async function getProductSchema(): Promise<null | ProductSchema> {
  const query = `document.querySelector('#mfe-jsonld-tags').innerHTML`;
  const result = await executeScriptOnCurrentTab<string>(query);

  if (!result) {
    // TODO handle failing get schema
    return null;
  }

  const schema = JSON.parse(result) as ProductSchema;
  return schema;
}
