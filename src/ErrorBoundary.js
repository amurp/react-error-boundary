import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      errorStack: '',
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }

  render() {
    const {
      children,
      showErrorMessage,
      showErrorStack,
    } = this.props;
    const { hasError, errorMessage, errorStack } = this.state;

    if (!children) {
      return null;
    }

    if (hasError) {
      return (
        <div className="errorBoundary" style={styles}>
          <div>&#x26A0; Oops!</div>
          {showErrorMessage && (
            <div>{errorMessage}</div>
          )}
          {showErrorStack && (
            <div title={errorStack}>
              {errorStack.split('\n')[0]}
              ...
            </div>
          )}
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  showErrorMessage: PropTypes.bool,
  showErrorStack: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
  showErrorMessage: true,
  showErrorStack: true,
};
