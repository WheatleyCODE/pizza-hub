import React, { useEffect } from 'react';
import useActions from '../../hooks/useAction';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
import ProductSlider from '../UI/ProductSlider/ProductSlider';
import './PopularProduct.scss';

const PopularProduct = () => {
  const { fetchPopular } = useActions();
  const { popular, loading } = useTypedSelector((state) => state.popular);

  useEffect(() => {
    fetchPopular();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="PopularProduct">
      <h2>Новое и популярное</h2>
      <div className="PopularProduct__slider-desctop">
        <ProductSlider products={popular} />
      </div>
      <div className="PopularProduct__slider-mobile">
        <h1>Нужно сделать мобильный слайдер!</h1>
      </div>
    </div>
  );
};

export default PopularProduct;
