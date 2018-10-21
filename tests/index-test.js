import expect from 'expect';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorBoundary from '../src';


describe('ErrorBoundary', () => {
  let node;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders an error message when state changes', () => {
    const component = shallow((<ErrorBoundary><div>some bad component here</div></ErrorBoundary>));

    // Here, we set state manually to simulate setting state within the componentDidCatch()
    // lifecycle method. We don't need to test that React's internals are working, just that we
    // render a message once state has changed.
    component.setState({
      hasError: true,
    });
    expect(component.html()).toInclude('Oops');
  })
});
