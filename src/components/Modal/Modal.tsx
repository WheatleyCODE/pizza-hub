import React, { useEffect } from 'react';
import BackDrop from '../UI/BackDrop/BackDrop';
import './Modal.scss';

interface IModalProps {
  children: React.ReactNode,
  onCloseModal: () => void,
}

const Modal = ({ children, onCloseModal }: IModalProps) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <>
      <div className="Modal">
        <div className="Modal__main">
          <button onClick={onCloseModal} type="button" className="closeButton">
            <i className="fa fa-times" aria-hidden="true" />
          </button>
          { children }
        </div>
        <BackDrop onCloseHandler={onCloseModal} />
      </div>
    </>
  );
};

export default Modal;
