# react-error-boundary

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
