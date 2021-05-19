import React from 'react';
import { Link } from 'react-router-dom';
import { IProductsSlider } from '../../../../types/popular';
import './ProductSliderMobile.scss';

interface IProductSliderMobileProps {
  products: IProductsSlider[],
}

const ProductSliderMobile = ({ products }: IProductSliderMobileProps) => (
  <div className="ProductSliderMobile">
    <div style={{ width: `${240 * products.length}px` }} className="ProductSliderMobile__container">
      { products.map((obj) => (
        <Link to={obj.route}>
          <div className="ProductSliderMobile__container__block">
            <img src={obj.url} alt={obj.title} />
            <div className="block__text">
              <span className="block__text__title">{obj.title}</span>
              <span className="block__text__price">{obj.price}</span>
            </div>
          </div>
        </Link>
      )) }
    </div>
  </div>
);

export default ProductSliderMobile;
