import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useActions, useTypedSelector } from '@hooks';
import './SliderDesktop.scss';

const SliderDesktop: React.FC = () => {
  const { changeSlide, changeSlideCircle } = useActions();
  const { sliders, className, currentSlideIndex } = useTypedSelector((state) => state.slider);

  const slider = {
    next: 1,
    prev: -1,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide(slider.next);
    }, 6000);

    return () => clearInterval(timer);
  });

  return (
    <div className="SliderDesktop">
      {sliders.map((slide, index) => {
        let show = false;
        if (index === currentSlideIndex) show = true;

        return (
          <CSSTransition
            in={show}
            timeout={400}
            classNames={className}
            mountOnEnter
            unmountOnExit
            key={slide.url}
          >
            <img className="SliderDesktop__img" src={slide.url} alt={slide.text} />
          </CSSTransition>
        );
      })}
      <div className="SliderDesktop__button-container">
        <button onClick={() => changeSlide(slider.prev)} type="button">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <button onClick={() => changeSlide(slider.next)} type="button">
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
      <div className="SliderDesktop__dotted-container">
        {sliders.map((el, i) => {
          let styles;
          if (i === currentSlideIndex) styles = { backgroundColor: '#ff6900' };

          return (
            <div
              role="button"
              aria-hidden="true"
              style={styles}
              key={el.text}
              onClick={() => changeSlideCircle(i)}
              className="dotted-container__circle-buttom"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SliderDesktop;
