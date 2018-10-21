import React from 'react';
import { render } from 'react-dom';

import ErrorBoundary from '../../src';

const BadComponent = () => (
  <div>
    There is an error in here
    {data.name}
  </div>
);

const Demo = () => (
  <div>
    Below we are trying to render a component that has an error in its render method. Luckily we
    have wrapped the component with ErrorBoundary, and we can see exactly where the error lies.
    <br />
    <br />
    <ErrorBoundary>
      <BadComponent />
    </ErrorBoundary>
  </div>
);

render(<Demo />, document.querySelector('#demo'));
