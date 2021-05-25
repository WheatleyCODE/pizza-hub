import React, { useEffect } from 'react';
import Loader from '@ui/Loader';
import { SliderDesktop, SliderMobile } from '@ui/Slider';
import { useTypedSelector, useActions } from '@hooks';
import './ImgSlider.scss';

const ImgSlider: React.FC = () => {
  const { fetchSlider } = useActions();
  const { loading } = useTypedSelector((state) => state.slider);

  useEffect(() => {
    fetchSlider();
  }, []);

  if (loading) {
    return <Loader />;
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
