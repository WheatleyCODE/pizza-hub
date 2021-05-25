import React from 'react';
import { useTypedSelector } from '@hooks';
import './SliderMobile.scss';

const SliderMobile: React.FC = () => {
  const { sliders } = useTypedSelector((state) => state.slider);

  return (
    <div className="SliderMobile">
      <div className="SliderMobile__roll">
        {sliders.map(({ text, url }) => (
          <img key={text} src={url} alt={text} />
        ))}
      </div>
    </div>
  );
};

export default SliderMobile;
