import getCurrentTab from './getCurrentTab';

export default async function getCurrentUrl(): Promise<string> {
  const tab = await getCurrentTab();
  return tab.url || '';
}
