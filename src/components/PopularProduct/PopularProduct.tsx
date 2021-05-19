import React, { useEffect } from 'react';
import useActions from '../../hooks/useAction';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
import ProductSliderDesktop from '../UI/ProductSlider/ProductSliderDesktop/ProductSliderDesktop';
import ProductSliderMobile from '../UI/ProductSlider/ProductSliderMobile/ProductSliderMobile';
import SliderItem from '../UI/ProductSlider/SliderItem/SliderItem';
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
      bool={false}
    />
  ));

  return (
    <div className="PopularProduct">
      <h2>Новое и популярное</h2>
      <div className="PopularProduct__slider-desctop">
        <ProductSliderDesktop sliderItem={productSliderItem} />
      </div>
      <div className="PopularProduct__slider-mobile">
        <ProductSliderMobile sliderItem={productSliderItem} />
      </div>
    </div>
  );
};

export default PopularProduct;
