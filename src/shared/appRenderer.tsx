import React, { ComponentType } from 'react';
import { render } from 'react-dom';

export default function appRenderer(App: ComponentType, rootElementId = 'AppRoot') {
  const appRoot = document.getElementById(rootElementId);

  if (appRoot) {
    render(<App />, appRoot);
  } else {
    throw new TypeError(`No element with the id '${rootElementId}' on the document`);
  }
}
