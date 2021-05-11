import { Dispatch } from 'react';
import axios from '../../axios/axios-default';
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

export const fetchSlider = () => async (dispatch: Dispatch<SliderAction>) => {
  try {
    dispatch(fetchSliderStart());

    const response = await axios.get('/sliders.json');
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

export const changeSlide = (num: number): SliderAction => ({
  type: SliderActionTypes.CHANGE_SLIDE,
  payload: num,
});

export const changeSlideCircle = (num: number): SliderAction => ({
  type: SliderActionTypes.CHANGE_SLIDE_CIRCLE,
  payload: num,
});
