import React from 'react';
import './ProductSliderMobile.scss';

interface IProductSliderMobileProps {
  sliderItem: JSX.Element[]
}

const ProductSliderMobile = ({ sliderItem }: IProductSliderMobileProps) => (
  <div className="ProductSliderMobile">
    <div style={{ width: `${240 * sliderItem.length}px` }} className="ProductSliderMobile__container">
      {sliderItem}
    </div>
  </div>
);

export default ProductSliderMobile;
