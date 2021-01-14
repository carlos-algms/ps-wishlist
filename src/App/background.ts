import {
  PRICE_UPDATE_ALARM_NAME,
  PRICE_UPDATE_ALARM_PERIOD_IN_MINUTES,
  refreshProductsData,
} from '../Wishlist/Schedule/refreshProductsData';

chrome.runtime.onInstalled.addListener((): void => {
  chrome.alarms.clearAll(() => {
    chrome.alarms.create(PRICE_UPDATE_ALARM_NAME, {
      periodInMinutes: PRICE_UPDATE_ALARM_PERIOD_IN_MINUTES,
    });
  });

  handleDeclarativeContent();
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === PRICE_UPDATE_ALARM_NAME) {
    void refreshProductsData();
  }
});

function handleDeclarativeContent() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'store.playstation' },
          }),
        ],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
}
