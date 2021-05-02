import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useActions from '../../../hooks/useAction';
import useTypedSelector from '../../../hooks/useTypedSelector';
import Loader from '../Loader/Loader';
import './Slider.scss';

const Slider = () => {
  const { fetchSlider } = useActions();
  const { loading, sliders } = useTypedSelector((state) => state.slider);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [className, setClassName] = useState('slider');

  const sliderClasses = {
    next: 'sliderNext',
    prev: 'sliderPrev',
  };

  useEffect(() => {
    fetchSlider();
  }, []);

  const nextSlideChanger = () => {
    setCurrentSlideIndex((prev) => {
      if (prev + 1 === sliders.length) return 0;
      return prev + 1;
    });
    setClassName(sliderClasses.next);
  };

  const prevSlideChanger = () => {
    setCurrentSlideIndex((prev) => {
      if (prev - 1 === -1) return sliders.length - 1;
      return prev - 1;
    });
    setClassName(sliderClasses.prev);
  };

  const circleSlideChanger = (i : number) => {
    setCurrentSlideIndex((prev) => {
      if (prev < i) {
        setClassName(sliderClasses.next);
      } else {
        setClassName(sliderClasses.prev);
      }
      return i;
    });
  };

  return (
    <div className="Slider">
      { loading ? <Loader /> : null}
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
        <button onClick={prevSlideChanger} type="button">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <button onClick={nextSlideChanger} type="button">
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
      <div className="Slider__dotted-container">
        { sliders.map((el, i) => {
          let styles;
          if (i === currentSlideIndex) styles = { backgroundColor: '#ff6900' };
          return (
            <div role="button" aria-hidden="true" style={styles} key={el.text} onClick={() => { circleSlideChanger(i); }} className="dotted-container__circle-buttom" />
          );
        }) }
      </div>
    </div>
  );
};

export default Slider;
