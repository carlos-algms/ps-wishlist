export default async function executeScriptOnTab<TRet = unknown>(
  tabId: number,
  code: string,
): Promise<TRet> {
  return new Promise((resolve) => {
    chrome.tabs.executeScript(tabId, { code }, (result: unknown) => {
      resolve(result as TRet);
    });
  });
}
