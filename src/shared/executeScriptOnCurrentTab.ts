export default function executeScriptOnCurrentTab<TRet = unknown>(
  code: string,
): Promise<TRet | null> {
  return new Promise((resolve) => {
    chrome.tabs.executeScript({ code }, ([result]: unknown[]) => {
      if (!result) {
        return resolve(null);
      }

      resolve(result as TRet);
    });
  });
}
