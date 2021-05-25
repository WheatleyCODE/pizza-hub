import React, { useEffect } from 'react';
import BackDrop from '@ui/BackDrop';
import './Modal.scss';

interface IModalProps {
  children: React.ReactNode;
  onCloseModal: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, onCloseModal }) => {
  useEffect(() => {
    const { platform } = window.navigator;
    if (platform === 'Win32') {
      document.body.classList.add('modal-open-win');
    } else {
      document.body.classList.add('modal-open-mac');
    }

    return () => {
      document.body.classList.remove('modal-open-win');
      document.body.classList.remove('modal-open-mac');
    };
  }, []);

  return (
    <>
      <div className="Modal">
        <div className="Modal__mobile-close-button">
          <button onClick={onCloseModal} type="button">
            <i className="fa fa-angle-double-left" aria-hidden="true" />
          </button>
        </div>
        <div className="Modal__main">
          <button onClick={onCloseModal} type="button" className="closeButton">
            <i className="fa fa-times" aria-hidden="true" />
          </button>
          {children}
        </div>
        <BackDrop onCloseHandler={onCloseModal} />
      </div>
    </>
  );
};

export default Modal;
