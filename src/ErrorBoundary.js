import React, {Component} from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      errorMessage: error.message,
    });
  }

  render() {
    const { children} = this.props;
    const { errorMessage } = this.state;

    if (!children) {
      return null;
    }else if (errorMessage) {
      return errorMessage;
    }

    return children;
  }
}
