import React from 'react';
import BackDrop from '../UI/BackDrop/BackDrop';
import './Modal.scss';

interface ModalProps {
  children: React.ReactNode,
  onCloseModal: () => void,
}

const Modal = ({ children, onCloseModal }: ModalProps) => (
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

export default Modal;
