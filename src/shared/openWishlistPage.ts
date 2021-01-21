import { SyntheticEvent } from 'react';

export default function openWishlistPage(e?: Event | SyntheticEvent): void {
  if (e && 'preventDefault' in e) {
    e.preventDefault();
  }

  chrome.tabs.create({ url: 'wishlist.html' });
}
