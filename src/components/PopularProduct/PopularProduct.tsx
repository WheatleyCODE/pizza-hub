import React, { useEffect } from 'react';
import Loader from '@ui/Loader';
import { ProductSliderDesktop, ProductSliderMobile, SliderItem } from '@ui/ProductSlider';
import { useActions, useTypedSelector } from '@hooks';
import './PopularProduct.scss';

const PopularProduct = () => {
  const { fetchPopular } = useActions();
  const { popular, loading } = useTypedSelector((state) => state.popular);

  useEffect(() => {
    fetchPopular();
  }, []);

  if (loading) return <Loader />;

  const productSliderItem = popular.map((obj) => (
    <SliderItem
      title={obj.title}
      url={obj.url}
      price={obj.price}
      route={obj.route}
      defaultProduct={null}
      key={obj.title}
    />
  ));

  return (
    <div className="PopularProduct">
      <h2>Новое и популярное</h2>
      <div className="PopularProduct__slider-desctop">
        <ProductSliderDesktop width={1290} sliderItem={productSliderItem} />
      </div>
      <div className="PopularProduct__slider-mobile">
        <ProductSliderMobile sliderItem={productSliderItem} />
      </div>
    </div>
  );
};

export default PopularProduct;
