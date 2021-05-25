import { IComboPizza, IDefaultProduct } from './menu';

export interface ICurrentCombo {
  isPizza: boolean;
  item: IDefaultProduct | IComboPizza;
}

export interface IComboConfiguratorState {
  currentCombo: ICurrentCombo[];
  partsIndex: null | number;
  doughThin: undefined | IComboPizza[];
  doughTraditional: undefined | IComboPizza[];
}

export enum ComboConfiguratorActionTypes {
  SET_CURRENT_COMBO = 'SET_CURRENT_COMBO',
  SET_DOUGH = 'SET_DOUGH',
  CHANGE_CURRENT_COMBO = 'CHANGE_CURRENT_COMBO',
  CHANGE_PARTS_INDEX = 'CHANGE_PARTS_INDEX',
}

interface ISetCurrentComboAction {
  type: ComboConfiguratorActionTypes.SET_CURRENT_COMBO;
  payload: ICurrentCombo[];
}

interface IChangeCurrentComboAction {
  type: ComboConfiguratorActionTypes.CHANGE_CURRENT_COMBO;
  payload: IDefaultProduct | IComboPizza;
}

interface IChangePartsIndexAction {
  type: ComboConfiguratorActionTypes.CHANGE_PARTS_INDEX;
  payload: number;
}

interface ISetDoughAction {
  type: ComboConfiguratorActionTypes.SET_DOUGH;
  payload: {
    doughThin: IComboPizza[];
    doughTraditional: IComboPizza[];
  };
}

export type ComboConfiguratorAction =
  | ISetCurrentComboAction
  | IChangeCurrentComboAction
  | IChangePartsIndexAction
  | ISetDoughAction;
