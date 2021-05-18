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
import ComboConfigurator from './ComboConfigurator/ComboConfigurator';
import useActions from '../../../hooks/useAction';
import useTypedSelector from '../../../hooks/useTypedSelector';
import Counter from '../../UI/Counter/Counter';
import './Product.scss';

interface IProductProps {
  product: IProduct | IDefaultProduct | IComboProduct,
}

const Product = ({ product, history }: IProductProps & RouteComponentProps) => {
  const { addToBasket } = useActions();
  const { basket } = useTypedSelector((state) => state.basket);

  const toggleModal = () => {
    history.push(Routes.HOME_ROUTE);
  };

  const productPizza = product as IProduct;
  const productDefault = product as IDefaultProduct;
  const productCombo = product as IComboProduct;

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

  if (productCombo.parts !== undefined) {
    modal = (
      <Portal>
        <Modal onCloseModal={toggleModal}>
          <ComboConfigurator product={productCombo} />
        </Modal>
      </Portal>
    );
  }

  const index = basket.findIndex((el) => el.title === productDefault.title);

  let button: JSX.Element;
  if ((productPizza.pizzaDate && productPizza.moreIngredients)
  || productCombo.parts !== undefined) {
    button = (
      <Link to={route}>
        <Button buttonStyle="light" onClickHandler={toggleModal} text="Выбрать" />
      </Link>
    );
  } else if (index === -1) {
    button = (
      <Button
        buttonStyle="light"
        onClickHandler={() => addToBasket({
          amount: 1,
          id: Math.random() * 10000,
          url: productDefault.url,
          title: productDefault.title,
          currentPrice: productDefault.price,
          moreInfo: {
            defaultIngredients: null,
            moreIngredients: null,
            size: null,
            dough: null,
            pizzaSize: null,
            combo: null,
          },
        })}
        text="В корзину"
      />
    );
  } else {
    button = (
      <Counter id={basket[index].id} amount={basket[index].amount} />
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
          <span className="price-container__price">
            { productPizza.pizzaDate && productPizza.moreIngredients ? `от ${price} ₽` : `${price} ₽` }
          </span>
          {button}
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
