import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IProduct } from '../../../types/menu';
import Routes from '../../../types/routes';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';
import Button from '../../UI/Button/Button';
import Configurator from './Configurator/Configurator';
import './Product.scss';

interface ProductProps {
  product: IProduct
}

const Product = ({ product, history }: ProductProps & RouteComponentProps) => {
  const toggleModal = () => {
    history.push(Routes.HOME_ROUTE);
  };

  const {
    title,
    url,
    description,
    price,
    route,
  } = product;

  return (
    <div className="Product">
      <Link to={route}>
        <img aria-hidden="true" onClick={toggleModal} className="Product__img" src={url} alt={title} />
      </Link>
      <div className="Product__description-block">
        <h2 className="description-block__title">{title}</h2>
        <span className="description-block__description">{description}</span>
        <div className="description-block__price-container">
          <span className="price-container__price">{`от ${price} р`}</span>
          <Link to={route}>
            <Button buttonStyle="light" onClickHandler={toggleModal} text="Выбрать" />
          </Link>
        </div>
      </div>

      <Route path={route}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="modal"
            mountOnEnter
            unmountOnExit
          >
            <Portal>
              <Modal onCloseModal={toggleModal}>
                <Configurator product={product} />
              </Modal>
            </Portal>
          </CSSTransition>
        )}
      </Route>
    </div>
  );
};

export default Product;
