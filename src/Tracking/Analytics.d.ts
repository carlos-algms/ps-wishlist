declare namespace AnalyticsJs {
  /**
   * window.ga(...) function
   */
  interface GaFn {
    (...args: unknown[]): void;
    q?: unknown[];
    l?: number;
  }
}

interface Window {
  dataLayer?: unknown[];
  ga: AnalyticsJs.GaFn;
}
