import { IComboPizza, IDefaultProduct } from '@t/menu';
import {
  ComboConfiguratorAction,
  ComboConfiguratorActionTypes,
  ICurrentCombo,
} from '@t/comboConfigurator';

export const setCurrentCombo = (currentCombo: ICurrentCombo[]): ComboConfiguratorAction => ({
  type: ComboConfiguratorActionTypes.SET_CURRENT_COMBO,
  payload: currentCombo,
});

export const changeCombo = (current: IDefaultProduct | IComboPizza): ComboConfiguratorAction => ({
  type: ComboConfiguratorActionTypes.CHANGE_CURRENT_COMBO,
  payload: current,
});

export const changePartsIndex = (idx: number): ComboConfiguratorAction => ({
  type: ComboConfiguratorActionTypes.CHANGE_PARTS_INDEX,
  payload: idx,
});

export const setDough = (
  doughThin: IComboPizza[],
  doughTraditional: IComboPizza[]
): ComboConfiguratorAction => ({
  type: ComboConfiguratorActionTypes.SET_DOUGH,
  payload: {
    doughThin,
    doughTraditional,
  },
});
