/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductSlider.scss';

interface IProductsSlider {
  title: string,
  url: string,
  price: string,
  route: string,
}

interface IProductSliderProps {
  products: IProductsSlider[]
}

const ProductSlider = ({ products }: IProductSliderProps) => {
  const [num, setNum] = useState(0);
  const [curentX, setCurentX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [MouseDownX, setMouseDownX] = useState(0);
  const [MouseOverX, setMouseOverX] = useState(0);
  const widthInfo = {
    widthBlocks: 323,
    widthRollBlock: 1935,
  };

  const styles = { width: `${widthInfo.widthBlocks * products.length}px`, transform: `translateX(-${curentX + num}px)` };

  const changeCurrentX = (number: number) => {
    setCurentX((prev) => {
      if (!(prev + number < 0) && !(prev + number > widthInfo.widthRollBlock)) {
        return prev + number;
      }
      if (number > 0) {
        return widthInfo.widthRollBlock;
      }
      return 0;
    });
  };

  const mouseDownHandler = (e: any) => {
    e.preventDefault();
    setIsMouseDown(true);
    setMouseDownX(e.screenX);
  };

  const mouseUpHandler = (e: any) => {
    e.preventDefault();
    setIsMouseDown(false);
  };

  const mouseOverHandler = (e: any) => {
    e.preventDefault();
    setMouseOverX(e.screenX);
  };

  useEffect(() => {
    if (isMouseDown && MouseDownX && MouseOverX) {
      setNum((MouseDownX - MouseOverX));
    }
  }, [isMouseDown, MouseDownX, MouseOverX]);

  useEffect(() => {
    if (!isMouseDown) {
      changeCurrentX(num);
      setNum(0);
    }
  }, [isMouseDown]);

  useEffect(() => {
    const elem = document.querySelector('.ProductSlider__roll');
    elem?.addEventListener('mousedown', mouseDownHandler);
    elem?.addEventListener('mouseup', mouseUpHandler);
    elem?.addEventListener('mouseover', mouseOverHandler);

    return () => {
      elem?.removeEventListener('mousedown', mouseDownHandler);
      elem?.removeEventListener('mouseup', mouseUpHandler);
      elem?.removeEventListener('mouseover', mouseOverHandler);
    };
  }, []);

  return (
    <div className="ProductSlider">
      <div
        style={styles}
        className="ProductSlider__roll"
        aria-hidden
      >
        {products.map((obj) => (
          <Link to={obj.route}>
            <div className="ProductSlider__roll__item">
              <img src={obj.url} alt={obj.title} />
              <div>
                <h6>{obj.title}</h6>
                <span>{obj.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {curentX !== 0 ? (
        <button className="ProductSlider__sub" onClick={() => changeCurrentX(-600)} type="button">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
      ) : null}
      {curentX !== widthInfo.widthRollBlock ? (
        <button className="ProductSlider__add" onClick={() => changeCurrentX(600)} type="button">
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
};

export default ProductSlider;
