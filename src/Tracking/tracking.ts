window.ga ??= function () {
  // eslint-disable-next-line prefer-rest-params
  window.ga.q?.push(arguments);
};
window.ga.q ??= [];
window.ga.l = Date.now();

export const GTagPropertyId = 'UA-52188553-2';

export function initTracking(): void {
  window.ga('create', GTagPropertyId, 'auto');
  window.ga('set', 'checkProtocolTask', null);
  window.ga('set', 'forceSSL', true);

  window.addEventListener(
    'error',
    (e) => {
      trackException(e.error, 'Uncaught Exception', true);
    },
    true,
  );

  window.addEventListener(
    'unhandledrejection',
    (e) => {
      trackException({ message: String(e.reason) }, 'Unhandled Rejection', true);
    },
    true,
  );
}

export function trackPageView(page: string): void {
  window.ga('send', 'pageview', {
    location: 'https://github.com/carlos-algms/ps-wishlist' + page,
    page,
  });
}

export type TrackEventParams = {
  category?: string;
  action?: string;
  label?: string;
  value?: number;
};

export function trackEvent({ category, action, label, value }: TrackEventParams = {}): void {
  window.ga('send', 'event', {
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value,
  });
}

export function trackException(error: { message: string }, label = '', fatal = false): void {
  window.ga('send', 'exception', {
    exDescription: `${label} ${error.message}`,
    exFatal: fatal,
  });
}

export function trackExternalLink(href: string): void {
  trackEvent({
    category: 'External Link',
    action: 'Clicked',
    label: href,
  });
}

export function trackStoreLink(href: string): void {
  trackEvent({
    category: 'Store Link',
    action: 'Clicked',
    label: href,
  });
}
