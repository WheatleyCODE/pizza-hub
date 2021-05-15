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
      <ProductSlider products={popular} />
    </div>
  );
};

export default PopularProduct;
