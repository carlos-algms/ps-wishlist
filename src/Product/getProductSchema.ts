import executeScriptOnCurrentTab from '../shared/executeScriptOnCurrentTab';
import htmlToElement from '../shared/htmlToElement';
import { trackException } from '../Tracking/tracking';

import { CTASchema, GameCTASchema, ProductSchema, PSProductSchema } from './ProductTypes';

const PRODUCT_SELECTOR = '#mfe-jsonld-tags';
const CTA_SELECTOR = `.cta-title-container .pdp-cta script`;

export async function fetchProductSchema(productUrl: string): Promise<null | ProductSchema> {
  const htmlText = await fetch(productUrl).then((res) => res.text());
  const doc = htmlToElement(htmlText);
  const psProductSchema = getJsonFromHtml<PSProductSchema>(doc, PRODUCT_SELECTOR);
  const ctaSchema = getJsonFromHtml<CTASchema>(doc, CTA_SELECTOR);

  return parsePsnSchema(psProductSchema, ctaSchema, productUrl);
}

/**
 * Query the PSN page for script elements and parses its json content to extract usable data
 */
export default async function getProductSchemaFromCurrentTab(
  productUrl: string,
): Promise<null | ProductSchema> {
  const [psProductSchema, ctaSchema] = await Promise.all([
    getJsonFromCurrentTab<PSProductSchema>(PRODUCT_SELECTOR),
    getJsonFromCurrentTab<CTASchema>(CTA_SELECTOR),
  ]);

  return parsePsnSchema(psProductSchema, ctaSchema, productUrl);
}

function parsePsnSchema(
  psProductSchema: PSProductSchema | null,
  ctaSchema: CTASchema | null,
  productUrl: string,
) {
  if (!psProductSchema || !ctaSchema) {
    return null;
  }

  const productSchema: ProductSchema = {
    name: psProductSchema.name,
    category: psProductSchema.category,
    sku: psProductSchema.sku,
    image: psProductSchema.image,
    originalPrice: psProductSchema.offers.price,
    discountPrice: psProductSchema.offers.price,
    currencyCode: psProductSchema.offers.priceCurrency,
    productUrl,
    discountEndTime: null,
  };

  const gameCtaSchema = getGameCtaSchema(ctaSchema);

  if (gameCtaSchema) {
    const { price } = gameCtaSchema;
    productSchema.originalPrice = price.basePriceValue / 100;
    productSchema.discountPrice = price.discountedValue / 100;
    productSchema.discountEndTime = price.endTime ? parseInt(price.endTime) : null;
  }

  return productSchema;
}

async function getJsonFromCurrentTab<T>(querySelector: string): Promise<T | null> {
  try {
    const script = `document.querySelector('${querySelector}').innerText`;
    const result = await executeScriptOnCurrentTab<string>(script);

    if (result) {
      return JSON.parse(result) as T;
    }
  } catch (error) {
    console.error(error);
    trackException(error, 'Error Getting JSON from current tab');
  }

  return null;
}

function getJsonFromHtml<T>(doc: DocumentFragment, querySelector: string): T | null {
  try {
    const result = doc.querySelector<HTMLElement>(querySelector)?.innerText;

    if (result) {
      return JSON.parse(result) as T;
    }
  } catch (error) {
    console.error(error);
    trackException(error, 'Error Getting JSON from HTML');
  }

  return null;
}

function getGameCtaSchema(ctaSchema: CTASchema): null | GameCTASchema {
  const gameCtaSchemaIndex = Object.keys(ctaSchema.cache).find((key) => key.startsWith('GameCTA:'));

  if (gameCtaSchemaIndex) {
    const gameCtaSchema = <GameCTASchema>ctaSchema.cache[gameCtaSchemaIndex];
    return gameCtaSchema;
  }

  return null;
}
