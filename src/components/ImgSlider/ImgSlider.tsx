import React, { useEffect } from 'react';
import useActions from '../../hooks/useAction';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
import SliderDesktop from '../UI/Slider/SliderDesktop/SliderDesktop';
import SliderMobile from '../UI/Slider/SliderMobile/SliderMobile';
import './ImgSlider.scss';

const ImgSlider = () => {
  const { fetchSlider } = useActions();
  const { loading } = useTypedSelector((state) => state.slider);

  useEffect(() => {
    fetchSlider();
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="ImgSlider">
      <div className="ImgSlider__desctop">
        <SliderDesktop />
      </div>
      <div className="ImgSlider__mobile">
        <SliderMobile />
      </div>
    </div>
  );
};

export default ImgSlider;
