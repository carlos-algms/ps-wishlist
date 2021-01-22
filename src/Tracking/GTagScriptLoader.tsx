import { FC, useEffect } from 'react';

import { initTracking } from './tracking';

let isGTagCreated = false;

const GTagScriptLoader: FC = () => {
  useEffect(() => {
    if (isGTagCreated || process.env.NODE_ENV !== 'production') {
      return;
    }

    isGTagCreated = true;

    try {
      generateGTagScript();
      initTracking();
    } catch (error) {
      // TODO How to track this error if Analytics failed to initialize?
      console.error(error);
    }
  }, []);

  return null;
};

export default GTagScriptLoader;

function generateGTagScript() {
  const ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = `https://www.google-analytics.com/analytics.js`;

  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(ga, s);
}
