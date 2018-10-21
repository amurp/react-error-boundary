import React, {Component} from 'react'
import {render} from 'react-dom'

import ErrorBoundary from '../../src';

function BadComponent() {
  return <div>
    there's an error in here {data.name}
  </div>;
}

class Demo extends Component {
  render() {
    return <div>
      <h2>react-error-boundary Demo</h2>
      <ErrorBoundary>
        <BadComponent/>
      </ErrorBoundary>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
