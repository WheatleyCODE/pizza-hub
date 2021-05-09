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
import DefaultProduct from './DefaultProduct/DefaultProduct';
import './Product.scss';

interface IProductProps {
  product: IProduct,
  collectionName: string,
}

const Product = ({ product, collectionName, history }: IProductProps & RouteComponentProps) => {
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

  let modal = (
    <Portal>
      <Modal onCloseModal={toggleModal}>
        <DefaultProduct product={product} />
      </Modal>
    </Portal>
  );

  if (product.pizzaDate && product.moreIngredients) {
    modal = (
      <Portal>
        <Modal onCloseModal={toggleModal}>
          <Configurator product={product} />
        </Modal>
      </Portal>
    );
  }

  if (collectionName === 'Комбо') {
    modal = (
      <Portal>
        <Modal onCloseModal={toggleModal}>
          <h1>Комбо</h1>
        </Modal>
      </Portal>
    );
  }

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
            {modal}
          </CSSTransition>
        )}
      </Route>
    </div>
  );
};

export default Product;
