import axios from 'axios';
import { Dispatch } from 'react';
import { ISlider, SliderAction, SliderActionTypes } from '../../types/slider';

const fetchSliderStart = (): SliderAction => ({ type: SliderActionTypes.FETCH_SLIDER });
const fetchSliderSucces = (data: any): SliderAction => ({
  type: SliderActionTypes.FETCH_SLIDER_SUCCES,
  payload: data,
});

const fetchSliderError = (): SliderAction => ({
  type: SliderActionTypes.FETCH_SLIDER_ERROR,
  payload: 'Error slider',
});

const fetchSlider = () => async (dispatch: Dispatch<SliderAction>) => {
  try {
    dispatch(fetchSliderStart());

    const response = await axios.get('https://qb-pizza-hub-default-rtdb.firebaseio.com/sliders.json');
    let data: ISlider[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, key)) {
        data = response.data[key];
      }
    }

    dispatch(fetchSliderSucces(data));
  } catch (e) {
    dispatch(fetchSliderError());
  }
};

export default fetchSlider;
