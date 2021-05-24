import { Dispatch } from 'react';
import { reduce, axios } from '@utils';
import { ISlider, SliderAction, SliderActionTypes } from '@t/slider';

export const fetchSlider = () => async (dispatch: Dispatch<SliderAction>) => {
  try {
    dispatch(reduce(SliderActionTypes.FETCH_SLIDER));

    const response = await axios.get('/sliders.json');
    const keys = Object.keys(response.data);
    const data: ISlider[][] = keys.map((key) => response.data[key]);

    dispatch(reduce(SliderActionTypes.FETCH_SLIDER_SUCCES, data[0]));
  } catch (e) {
    dispatch(reduce(SliderActionTypes.FETCH_SLIDER_ERROR, 'Error slider'));
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
