import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IProduct } from '../../../types/menu';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';
import Button from '../../UI/Button/Button';
import './Product.scss';

interface ProductProps {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const {
    title,
    url,
    description,
    price,
  } = product;

  return (
    <div className="Product">
      <img aria-hidden="true" onClick={toggleModal} className="Product__img" src={url} alt={title} />
      <div className="Product__description-block">
        <h2 className="description-block__title">{title}</h2>
        <span className="description-block__description">{description}</span>
        <div className="description-block__price-container">
          <span className="price-container__price">{`от ${price} р`}</span>
          <Button buttonStyle="light" onClickHandler={toggleModal} text="Выбрать" />
        </div>
      </div>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <Modal onCloseModal={toggleModal}>
            <h1>Hello World</h1>
          </Modal>
        </Portal>
      </CSSTransition>
    </div>
  );
};

export default Product;
