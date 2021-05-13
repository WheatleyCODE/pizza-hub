import {
  ComboConfiguratorAction,
  ComboConfiguratorActionTypes,
  IComboConfiguratorState,
} from '../../types/comboConfigurator';

const initialState: IComboConfiguratorState = {
  currentCombo: [],
  partsIndex: null,
};

const comboConfiguratorReducer = (
  state: IComboConfiguratorState = initialState,
  action: ComboConfiguratorAction,
): IComboConfiguratorState => {
  switch (action.type) {
    case ComboConfiguratorActionTypes.SET_CURRENT_COMBO:
      return {
        ...state,
        currentCombo: action.payload,
      };

    case ComboConfiguratorActionTypes.CHANGE_CURRENT_COMBO: {
      const newCurrentCombo = [...state.currentCombo];
      if (state.partsIndex !== null) {
        newCurrentCombo[state.partsIndex] = {
          isPizza: false,
          item: action.payload,
        };
      }
      return {
        ...state,
        currentCombo: newCurrentCombo,
      };
    }

    case ComboConfiguratorActionTypes.CHANGE_PARTS_INDEX:
      return {
        ...state,
        partsIndex: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default comboConfiguratorReducer;