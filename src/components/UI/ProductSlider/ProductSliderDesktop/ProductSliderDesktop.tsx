import React, { useEffect, useState } from 'react';
import './ProductSliderDesktop.scss';

interface IProductSliderDesktopProps {
  sliderItem: JSX.Element[];
  width: number;
}

const ProductSliderDesktop: React.FC<IProductSliderDesktopProps> = ({ sliderItem, width }) => {
  const [num, setNum] = useState(0);
  const [curentX, setCurentX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [MouseDownX, setMouseDownX] = useState(0);
  const [MouseOverX, setMouseOverX] = useState(0);
  const widthInfo = {
    widthBlocks: 323,
    widthRollBlock: width,
  };

  const styles = {
    width: `${widthInfo.widthBlocks * sliderItem.length}px`,
    transform: `translateX(-${curentX + num}px)`,
  };

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
      setNum(MouseDownX - MouseOverX);
    }
  }, [isMouseDown, MouseDownX, MouseOverX]);

  useEffect(() => {
    if (!isMouseDown) {
      changeCurrentX(num);
      setNum(0);
    }
  }, [isMouseDown]);

  useEffect(() => {
    const elem = document.querySelector('.ProductSliderDesktop__roll');
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
    <div className="ProductSliderDesktop">
      <div style={styles} className="ProductSliderDesktop__roll" aria-hidden>
        {sliderItem}
      </div>
      {curentX !== 0 && (
        <button
          className="ProductSliderDesktop__sub"
          onClick={() => changeCurrentX(-600)}
          type="button"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
      )}
      {curentX !== widthInfo.widthRollBlock && (
        <button
          className="ProductSliderDesktop__add"
          onClick={() => changeCurrentX(600)}
          type="button"
        >
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ProductSliderDesktop;
