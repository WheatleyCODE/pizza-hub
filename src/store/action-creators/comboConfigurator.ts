import { IComboPizza, IDefaultProduct } from '../../types/menu';
import { ComboConfiguratorAction, ComboConfiguratorActionTypes, ICurrentCombo } from '../../types/comboConfigurator';

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
