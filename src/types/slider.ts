export interface ISlider {
  text: string,
  url: string
}
export interface ISliderState {
  sliders: ISlider[]
  loading: boolean,
  error: null | string
}

export enum SliderActionTypes {
  FETCH_SLIDER = 'FETCH_SLIDER',
  FETCH_SLIDER_SUCCES = 'FETCH_SLIDER_SUCCES',
  FETCH_SLIDER_ERROR = 'FETCH_SLIDER_ERROR',
}
interface ISliderctionTypes {
  type: SliderActionTypes.FETCH_SLIDER,
}
interface IFetchSliderSuccesAction {
  type: SliderActionTypes.FETCH_SLIDER_SUCCES,
  payload: ISlider[],
}
interface IFetchSliderErrorAction {
  type: SliderActionTypes.FETCH_SLIDER_ERROR,
  payload: string,
}

export type SliderAction = ISliderctionTypes | IFetchSliderSuccesAction | IFetchSliderErrorAction;
