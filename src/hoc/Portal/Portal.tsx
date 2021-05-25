import React from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
}

class Portal extends React.Component<IPortalProps> {
  el = document.createElement('div');

  componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  render(): JSX.Element {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
