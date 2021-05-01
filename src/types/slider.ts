export interface Slider {
  text: string,
  url: string
}
export interface SliderState {
  sliders: Slider[]
  loading: boolean,
  error: null | string
}

export enum SliderActionTypes {
  FETCH_SLIDER = 'FETCH_SLIDER',
  FETCH_SLIDER_SUCCES = 'FETCH_SLIDER_SUCCES',
  FETCH_SLIDER_ERROR = 'FETCH_SLIDER_ERROR',
}
interface SliderctionTypes {
  type: SliderActionTypes.FETCH_SLIDER,
}
interface FetchSliderSuccesAction {
  type: SliderActionTypes.FETCH_SLIDER_SUCCES,
  payload: Slider[],
}
interface FetchSliderErrorAction {
  type: SliderActionTypes.FETCH_SLIDER_ERROR,
  payload: string,
}

export type SliderAction = SliderctionTypes | FetchSliderSuccesAction | FetchSliderErrorAction;
