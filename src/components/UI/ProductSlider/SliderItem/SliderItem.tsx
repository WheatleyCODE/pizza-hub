import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Modal from '../../../../hoc/Modal/Modal';
import Portal from '../../../../hoc/Portal/Portal';
import useActions from '../../../../hooks/useAction';
import { IDefaultProduct } from '../../../../types/menu';
import Routes from '../../../../types/routes';
import DefaultProduct from '../../../Menu/Product/DefaultProduct/DefaultProduct';
import Button from '../../Button/Button';
import './SliderItem.scss';

interface ISliderItem {
  title: string,
  route: string,
  url: string,
  price: string | number,
  defaultProduct: IDefaultProduct | null,
}

const SliderItem = (props: ISliderItem) => {
  const {
    title,
    route,
    url,
    price,
    defaultProduct,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const { addToBasket } = useActions();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  if (defaultProduct !== null) {
    return (
      <>
        <div aria-hidden onClick={toggleModal} className="SliderItem">
          <img src={url} alt={title} />
          <div>
            <h6>{defaultProduct.title}</h6>
            <span>
              <Button
                buttonStyle="light"
                text={`${defaultProduct.price} ₽`}
                onClickHandler={() => {
                  addToBasket({
                    amount: 1,
                    id: Math.random() * 10000,
                    url: defaultProduct.url,
                    title: defaultProduct.title,
                    currentPrice: defaultProduct.price,
                    moreInfo: {
                      defaultIngredients: null,
                      moreIngredients: null,
                      size: null,
                      dough: null,
                      pizzaSize: null,
                      combo: null,
                    },
                  });
                  toggleModal();
                }}
              />
            </span>
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
              <DefaultProduct
                closeModal={toggleModal}
                route={Routes.BASKET_ROUTE}
                product={defaultProduct}
              />
            </Modal>
          </Portal>
        </CSSTransition>
      </>
    );
  }

  return (
    <Link key={title} to={route}>
      <div className="SliderItem">
        <img src={url} alt={title} />
        <div>
          <h6>{title}</h6>
          <span>{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
