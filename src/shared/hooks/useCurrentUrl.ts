import { useEffect, useState } from 'react';
import getCurrentUrl from '../getCurrentUrl';

export default function useCurrentUrl(): string {
  const [url, setUrl] = useState('');

  useEffect(() => {
    getCurrentUrl().then(setUrl, () => setUrl(''));
  }, []);

  return url;
}
