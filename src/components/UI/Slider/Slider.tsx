import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import useActions from '../../../hooks/useAction';
import useTypedSelector from '../../../hooks/useTypedSelector';
import './Slider.scss';

const Slider = () => {
  const { changeSlide, changeSlideCircle } = useActions();
  const {
    sliders,
    className,
    currentSlideIndex,
  } = useTypedSelector((state) => state.slider);

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
    <div className="Slider">
      { sliders.map((slide, index) => {
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
            <img className="Slider__img" src={slide.url} alt={slide.text} />
          </CSSTransition>
        );
      })}
      <div className="Slider__button-container">
        <button onClick={() => changeSlide(slider.prev)} type="button">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <button onClick={() => changeSlide(slider.next)} type="button">
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
      <div className="Slider__dotted-container">
        { sliders.map((el, i) => {
          let styles;
          if (i === currentSlideIndex) styles = { backgroundColor: '#ff6900' };

          return (
            <div role="button" aria-hidden="true" style={styles} key={el.text} onClick={() => changeSlideCircle(i)} className="dotted-container__circle-buttom" />
          );
        }) }
      </div>
    </div>
  );
};

export default Slider;
