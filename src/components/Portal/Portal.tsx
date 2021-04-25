import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode
}

class Portal extends React.Component<PortalProps> {
  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
