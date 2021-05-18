import React from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import './SliderMobile.scss';

const SliderMobile = () => {
  const { sliders } = useTypedSelector((state) => state.slider);

  return (
    <div className="SliderMobile">
      <div className="SliderMobile__roll">
        { sliders.map((obj) => (
          <img src={obj.url} alt={obj.text} />
        )) }
      </div>
    </div>
  );
};

export default SliderMobile;
