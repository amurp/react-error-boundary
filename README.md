# react-error-boundary

A simple React component for catching errors in your react components.

Usage:
```jsx
import React from 'react';
import ErrorBoundary from 'react-error-boundary';

const BadComponent = () => (
  <div>
    there's an error in here
    {data.name}
   </div>
);

const Demo = () => (
  <ErrorBoundary>
    <BadComponent />
  </ErrorBoundary>
);
```

Above, our Demo component is attempting to render BadComponent. Luckily we've wrapped BadComponent with ErrorBoundary,
so we can render a useful message, rather than having the page error out:

![example error message](demo.png?raw=true "example error message")
