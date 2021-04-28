import { CityAction, CityActionTypes, CityState } from '../../types/city';

const initialState: CityState = {
  city: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const cityReducer = (state: CityState = initialState, action: CityAction): CityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITY:
      return { ...state, loading: true };
    case CityActionTypes.FETCH_CITY_SUCCES:
      return { ...state, loading: false, city: action.payload };
    case CityActionTypes.FETCH_CITY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
