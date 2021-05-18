import { SliderAction, SliderActionTypes, ISliderState } from '../../types/slider';

const initialState: ISliderState = {
  sliders: [],
  loading: false,
  error: null,
  currentSlideIndex: 0,
  className: 'slider',
};

const sliderReducer = (state = initialState, action: SliderAction): ISliderState => {
  const sliderClasses = {
    next: 'sliderNext',
    prev: 'sliderPrev',
  };
  const { currentSlideIndex } = state;
  const { sliders } = state;

  switch (action.type) {
    case SliderActionTypes.FETCH_SLIDER:
      return {
        ...state,
        loading: true,
      };

    case SliderActionTypes.FETCH_SLIDER_SUCCES:
      return {
        ...state,
        sliders: action.payload,
        loading: false,
      };

    case SliderActionTypes.FETCH_SLIDER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SliderActionTypes.CHANGE_SLIDE: {
      if (action.payload === 1) {
        if (currentSlideIndex + action.payload === sliders.length) {
          return {
            ...state,
            currentSlideIndex: 0,
            className: sliderClasses.next,
          };
        }

        return {
          ...state,
          currentSlideIndex: currentSlideIndex + action.payload,
          className: sliderClasses.next,
        };
      }

      if (currentSlideIndex + action.payload === -1) {
        return {
          ...state,
          currentSlideIndex: sliders.length - 1,
          className: sliderClasses.prev,
        };
      }

      return {
        ...state,
        currentSlideIndex: currentSlideIndex + action.payload,
        className: sliderClasses.prev,
      };
    }

    case SliderActionTypes.CHANGE_SLIDE_CIRCLE: {
      if (currentSlideIndex < action.payload) {
        return {
          ...state,
          currentSlideIndex: action.payload,
          className: sliderClasses.next,
        };
      }

      return {
        ...state,
        currentSlideIndex: action.payload,
        className: sliderClasses.prev,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default sliderReducer;
