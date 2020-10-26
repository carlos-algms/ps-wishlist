import { FunctionalComponent, h, render } from 'preact';

export const App: FunctionalComponent = () => {
  return <div>Hi</div>;
};

// @ts-ignore
render(<App />, document.getElementById('AppRoot'));
