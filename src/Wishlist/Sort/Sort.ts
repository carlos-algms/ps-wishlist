import { WishlistItem } from '../psWishlistStorage';

export enum SortBy {
  DateAddedDesc,
  DateAddedAsc,
  PriceLower,
  PriceHigher,
  UserDefined,
}

export const defaultSortBy = SortBy.DateAddedDesc;

export const sortMethods: Record<SortBy, (list: WishlistItem[]) => WishlistItem[]> = {
  [SortBy.DateAddedAsc]: (list) => list.concat().sort((a, b) => a.includedAt - b.includedAt),
  [SortBy.DateAddedDesc]: (list) => list.concat().sort((a, b) => b.includedAt - a.includedAt),
  [SortBy.PriceLower]: (list) => list.concat().sort((a, b) => a.discountPrice - b.discountPrice),
  [SortBy.PriceHigher]: (list) => list.concat().sort((a, b) => b.discountPrice - a.discountPrice),
  [SortBy.UserDefined]: (list) =>
    list.concat().sort((a, b) => a.userRankPosition - b.userRankPosition),
};

export function sortWishlistBy(list: WishlistItem[], by: SortBy): WishlistItem[] {
  const sortMethod = sortMethods[by] || sortMethods[defaultSortBy];
  return sortMethod(list);
}
