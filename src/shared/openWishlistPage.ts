export default function openWishlistPage(): void {
  chrome.tabs.create({ url: 'wishlist.html' });
}
