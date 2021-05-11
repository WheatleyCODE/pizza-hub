import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IDefaultProduct, IComboProduct, IProduct } from '../../../types/menu';
import Routes from '../../../types/routes';
import Modal from '../../../hoc/Modal/Modal';
import Portal from '../../../hoc/Portal/Portal';
import Button from '../../UI/Button/Button';
import Configurator from './Configurator/Configurator';
import DefaultProduct from './DefaultProduct/DefaultProduct';
import KomboProduct from './ComboProduct/ComboProduct';
import './Product.scss';

interface IProductProps {
  product: IProduct | IDefaultProduct | IComboProduct,
}

const Product = ({ product, history }: IProductProps & RouteComponentProps) => {
  const toggleModal = () => {
    history.push(Routes.HOME_ROUTE);
  };

  const productPizza = product as IProduct;
  const productDefault = product as IDefaultProduct;
  const productKombo = product as IComboProduct;

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
        <DefaultProduct product={productDefault} />
      </Modal>
    </Portal>
  );

  if (productPizza.pizzaDate && productPizza.moreIngredients) {
    modal = (
      <Portal>
        <Modal onCloseModal={toggleModal}>
          <Configurator product={productPizza} />
        </Modal>
      </Portal>
    );
  }

  if (productKombo.parts !== undefined) {
    modal = (
      <Portal>
        <Modal onCloseModal={toggleModal}>
          <KomboProduct product={productKombo} />
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
