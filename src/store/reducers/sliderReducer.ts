import { SliderAction, SliderActionTypes, SliderState } from '../../types/slider';

const initialState: SliderState = {
  sliders: [],
  loading: false,
  error: null,
};

const sliderReducer = (state = initialState, action: SliderAction): SliderState => {
  switch (action.type) {
    case SliderActionTypes.FETCH_SLIDER:
      return { loading: true, error: null, sliders: [] };

    case SliderActionTypes.FETCH_SLIDER_SUCCES:
      return { loading: false, error: null, sliders: action.payload };

    case SliderActionTypes.FETCH_SLIDER_ERROR:
      return { loading: false, error: action.payload, sliders: [] };

    default:
      return state;
  }
};

export default sliderReducer;
