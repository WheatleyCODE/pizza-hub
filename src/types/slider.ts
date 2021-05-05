export interface ISlider {
  text: string,
  url: string
}

export interface ISliderState {
  sliders: ISlider[]
  loading: boolean,
  error: null | string,
  currentSlideIndex: number,
  className: string,
}

export enum SliderActionTypes {
  FETCH_SLIDER = 'FETCH_SLIDER',
  FETCH_SLIDER_SUCCES = 'FETCH_SLIDER_SUCCES',
  FETCH_SLIDER_ERROR = 'FETCH_SLIDER_ERROR',
  CHANGE_SLIDE = 'CHANGE_SLIDE',
  CHANGE_SLIDE_CIRCLE = 'CHANGE_SLIDE_CIRCLE',
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

interface IChangeClideAction {
  type: SliderActionTypes.CHANGE_SLIDE,
  payload: number,
}

interface IChangeClideCircleAction {
  type: SliderActionTypes.CHANGE_SLIDE_CIRCLE,
  payload: number,
}

export type SliderAction =
  ISliderctionTypes
  | IFetchSliderSuccesAction
  | IFetchSliderErrorAction
  | IChangeClideAction
  | IChangeClideCircleAction;
